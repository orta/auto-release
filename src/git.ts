import GHub from '@octokit/rest';
import gitlogNode, { ICommit } from 'gitlog';
import { promisify } from 'util';

import { Memoize } from 'typescript-memoize';

import { defaultLabelsDescriptions, ILogger } from './github-release';
import execPromise from './utils/exec-promise';
import settingsUrl from './utils/settings-url';

const gitlog = promisify(gitlogNode);

export interface IGithubOptions {
  owner: string;
  repo: string;
  version?: string;
  baseUrl?: string;
  token?: string;
  logger: ILogger;
}

export interface IPRInfo {
  number: number;
  context: string;
  url: string;
  description: string;
  sha: string;
  state: 'error' | 'failure' | 'pending' | 'success';
}

class GithubAPIError extends Error {
  constructor(api: string, args: object, origError: Error) {
    super(
      `Error calling github: ${api}\n\twith: ${JSON.stringify(args)}.\n\t${
        origError.message
      }`
    );
  }
}

const makeCommentIdentifier = (context: string) =>
  `<!-- GITHUB_RELEASE COMMENT: ${context} -->`;

export default class Github {
  public readonly ghub: GHub;
  public readonly baseUrl: string;
  public readonly options: IGithubOptions;
  private readonly logger: ILogger;

  constructor(options: IGithubOptions) {
    this.logger = options.logger;
    this.options = options;
    this.baseUrl = this.options.baseUrl || 'https://api.github.com';

    this.logger.veryVerbose.info(`Initializing Github with: ${this.baseUrl}`);
    this.ghub = new GHub({
      baseUrl: this.baseUrl,
      headers: {
        accept: 'application/vnd.github.symmetra-preview+json'
      }
    });
  }

  @Memoize()
  public async authenticate(authToken?: string): Promise<void> {
    if (authToken === undefined && this.options.token === undefined) {
      throw new Error(
        `Authentication needs a Github token. Try setting up an access token ${settingsUrl(
          this.baseUrl
        )}`
      );
    }

    const token = authToken || this.options.token;

    this.logger.veryVerbose.info('Authenticating with Github.');

    this.ghub.authenticate({
      type: 'token',
      token: token!
    });

    this.logger.veryVerbose.info('Sucessfully authenticated with Github.');

    return Promise.resolve();
  }

  public async getLatestRelease(): Promise<string> {
    await this.authenticate();

    const args = {
      owner: this.options.owner,
      repo: this.options.repo
    };

    try {
      this.logger.verbose.info('Getting latest release using:\n', args);

      const latestRelease = await this.ghub.repos.getLatestRelease(args);

      this.logger.veryVerbose.info(
        'Got response for "getLatestRelease":\n',
        latestRelease
      );
      this.logger.verbose.info('Got latest release:\n', latestRelease.data);

      return latestRelease.data.tag_name;
    } catch (e) {
      if (e.status === 404) {
        this.logger.verbose.info(
          "Couldn't find latest release on Github, using first commit."
        );
        return this.getFirstCommit();
      }

      throw e;
    }
  }

  public async getFirstCommit(): Promise<string> {
    return execPromise('git rev-list HEAD | tail -n 1');
  }

  public async getSha(): Promise<string> {
    const result = await execPromise('git rev-parse HEAD');

    this.logger.verbose.info(`Got commit SHA from HEAD: ${result}`);

    return result;
  }

  public async getLabels(prNumber: number) {
    this.logger.verbose.info(`Getting labels for PR: ${prNumber}`);

    await this.authenticate();

    const args = {
      owner: this.options.owner,
      repo: this.options.repo,
      number: prNumber
    };

    this.logger.verbose.info('Getting issue labels using:', args);

    try {
      const labels = await this.ghub.issues.listLabelsOnIssue(args);
      this.logger.veryVerbose.info(
        'Got response for "listLabelsOnIssue":\n',
        labels
      );
      this.logger.verbose.info('Found labels on PR:\n', labels.data);

      return labels.data.map(l => l.name);
    } catch (e) {
      throw new GithubAPIError('listLabelsOnIssue', args, e);
    }
  }

  public async getProjectLabels() {
    this.logger.verbose.info(
      `Getting labels for project: ${this.options.repo}`
    );

    await this.authenticate();

    const args = {
      owner: this.options.owner,
      repo: this.options.repo
    };

    try {
      const labels = await this.ghub.issues.listLabelsForRepo(args);
      this.logger.veryVerbose.info(
        'Got response for "getProjectLabels":\n',
        labels
      );
      this.logger.verbose.info('Found labels on project:\n', labels.data);

      return labels.data.map(l => l.name);
    } catch (e) {
      throw new GithubAPIError('getProjectLabels', args, e);
    }
  }

  public async getGitLog(start: string, end = 'HEAD'): Promise<ICommit[]> {
    const log = await gitlog({
      repo: process.cwd(),
      fields: ['hash', 'authorName', 'authorEmail', 'rawBody'],
      branch: `${start.trim()}..${end.trim()}`
    });

    return log.map(commit => ({
      hash: commit.hash,
      authorName: commit.authorName,
      authorEmail: commit.authorEmail,
      subject: commit.rawBody!
    }));
  }

  @Memoize()
  public async getUserByEmail(email: string) {
    await this.authenticate();

    const search = (await this.ghub.search.users({
      q: `in:email ${email}`
    })).data;

    return search && search.items.length > 0
      ? search.items[0]
      : { login: email };
  }

  @Memoize()
  public async getUserByUsername(username: string) {
    await this.authenticate();

    return (await this.ghub.users.getByUsername({
      username
    })).data;
  }

  public async getPullRequest(pr: number) {
    this.logger.verbose.info(`Getting Pull Request: ${pr}`);

    await this.authenticate();

    const args = {
      owner: this.options.owner,
      repo: this.options.repo,
      number: pr
    };

    this.logger.verbose.info('Getting pull request info using:', args);

    const result = await this.ghub.pulls.get(args);

    this.logger.veryVerbose.info('Got pull request data\n', result);
    this.logger.verbose.info('Got pull request info');

    return result;
  }

  public async createStatus(prInfo: IPRInfo) {
    await this.authenticate();

    const args = {
      ...prInfo,
      owner: this.options.owner,
      repo: this.options.repo
    };

    this.logger.verbose.info('Creating status using:\n', args);

    const result = await this.ghub.repos.createStatus(args);

    this.logger.veryVerbose.info('Got response from createStatues\n', result);
    this.logger.verbose.info('Created status on Github.');

    return result;
  }

  public async createLabel(label: string, name: string) {
    await this.authenticate();

    this.logger.verbose.info(`Creating "${label}" label :\n${name}`);

    const result = await this.ghub.issues.createLabel({
      name,
      owner: this.options.owner,
      repo: this.options.repo,
      color: Math.floor(Math.random() * 16777215).toString(16),
      description: defaultLabelsDescriptions.get(label)
    });

    this.logger.veryVerbose.info('Got response from createLabel\n', result);
    this.logger.verbose.info('Created label on Github.');

    return result;
  }

  public async getProject() {
    this.logger.verbose.info('Getting project from Github');

    await this.authenticate();

    const result = await this.ghub.repos.get({
      owner: this.options.owner.toLowerCase(),
      repo: this.options.repo.toLowerCase()
    });

    this.logger.veryVerbose.info('Got response from repos\n', result);
    this.logger.verbose.info('Got project information.');

    return result;
  }

  public async getPullRequests(options?: Partial<GHub.PullsListParams>) {
    this.logger.verbose.info('Getting pull requests...');

    await this.authenticate();

    const result = (await this.ghub.pulls.list({
      owner: this.options.owner.toLowerCase(),
      repo: this.options.repo.toLowerCase(),
      ...options
    })).data;

    this.logger.veryVerbose.info('Got response from pull requests', result);
    this.logger.verbose.info('Got pull request');

    return result;
  }

  public async getCommitsForPR(pr: number) {
    this.logger.verbose.info(`Getting commits for PR #${pr}`);

    await this.authenticate();

    const result = (await this.ghub.pulls.listCommits({
      owner: this.options.owner.toLowerCase(),
      repo: this.options.repo.toLowerCase(),
      number: pr
    })).data;

    this.logger.veryVerbose.info(`Got response from PR #${pr}\n`, result);
    this.logger.verbose.info(`Got commits for PR #${pr}.`);

    return result;
  }

  public async createComment(message: string, pr: number, context: string) {
    const commentIdentifier = makeCommentIdentifier(context);

    this.logger.verbose.info('Using comment identifier:', commentIdentifier);

    await this.authenticate();

    this.logger.verbose.info('Getting previous comments on:', pr);

    const comments = await this.ghub.issues.listComments({
      owner: this.options.owner,
      repo: this.options.repo,
      number: pr
    });

    this.logger.veryVerbose.info('Got PR comments\n', comments);

    const oldMessage = comments.data.find(comment =>
      comment.body.includes(commentIdentifier)
    );

    if (oldMessage) {
      this.logger.verbose.info('Found previous message from same scope.');
      this.logger.verbose.info('Deleting previous comment');

      await this.ghub.issues.deleteComment({
        owner: this.options.owner,
        repo: this.options.repo,
        comment_id: oldMessage.id
      });

      this.logger.verbose.info('Successfully deleted previous comment');
    }

    this.logger.verbose.info('Creating new comment');

    const result = await this.ghub.issues.createComment({
      owner: this.options.owner,
      repo: this.options.repo,
      number: pr,
      body: `${commentIdentifier}\n${message}`
    });

    this.logger.veryVerbose.info(
      'Got response from creating comment\n',
      result
    );
    this.logger.verbose.info('Successfully posted comment to PR');

    return result;
  }

  public async publish(releaseNotes: string, tag: string) {
    this.logger.verbose.info('Creating release on Github for tag:', tag);

    await this.authenticate();

    const result = await this.ghub.repos.createRelease({
      owner: this.options.owner,
      repo: this.options.repo,
      tag_name: tag,
      body: releaseNotes
    });

    this.logger.veryVerbose.info('Got response from createRelease\n', result);
    this.logger.verbose.info('Created Github release.');

    return result;
  }

  public async changedPackages(sha: string) {
    const packages = new Set<string>();
    const changedFiles = await execPromise(
      `git show --first-parent ${sha} --name-only --pretty=`
    );

    changedFiles.split('\n').forEach(filePath => {
      const parts = filePath.split('/');

      if (parts[0] !== 'packages' || parts.length < 3) {
        return;
      }

      packages.add(
        parts.length > 3 && parts[1][0] === '@'
          ? `${parts[1]}/${parts[2]}`
          : parts[1]
      );
    });

    if (packages.size > 0) {
      this.logger.veryVerbose.info(
        `Got changed packages for ${sha}:\n`,
        packages
      );
    }

    return [...packages];
  }
}
