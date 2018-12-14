(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{57:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=i(o(2)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};r.get||r.set?Object.defineProperty(t,o,r):t[o]=e[o]}return t.default=e,t}(o(0));i(o(1)),i(o(62));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t,o,a){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var l in n)void 0===t[l]&&(t[l]=n[l]);else t||(t=n||{});if(1===i)t.children=a;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];t.children=s}return{$$typeof:r,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const c=e=>{let{to:t}=e,o=d(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto-release/","pages/faq.html")+t),n.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const r=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(r),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:r});return dispatchEvent(n),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const f=e=>{var t,o;return o=t=class extends n.default.Component{constructor(...e){super(...e),s(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},s(t,"defaultProps",{shouldLoad:!0}),o};f(()=>o.e(24).then(o.bind(null,63))),f(()=>o.e(24).then(o.bind(null,64)));var h=l("h1",{},void 0,"Frequently Asked Question"),p=l("p",{},void 0,"This means that you do not have a repository set in your package.json. Add something along the line of:"),m=l("pre",{},void 0,l("code",{className:"language-json"},void 0,"{",l("br",{}),'  "repository": {',l("br",{}),'    "type": "git",',l("br",{}),'    "url": "https://github.com/intuit/auto-release"',l("br",{}),"  },",l("br",{}),"  // or simply",l("br",{}),'  "repository": "intuit/auto-release"',l("br",{}),"}",l("br",{}))),g=l("p",{},void 0,"If auto-release doesn't find a last release it will default to the first commit for version calculation (and a log of other things). If you have forked a repo, you fork all the merge commit messages as well. This confuses ",l("code",{},void 0,"auto-release")," since it will look for those pull requests in your fork and not the main one."),v=l("p",{},void 0,"To remedy this first tag your first commit in the fork with your first version. If the tags from the original repo are still in your repo you should just bump that version. This will let ",l("code",{},void 0,"auto-release")," ignore all the old merge commits."),y=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,l("span",{className:"hljs-comment"},void 0,"# Set head to last release and tag it with 2.10.1"),l("br",{}),"git tag v2.10.1",l("br",{}))),b=l("p",{},void 0,"Then on GitHub go to your project, click release, then draft a new release. Select the tag you just published and ",l("code",{},void 0,"publish release"),". Now auto-release will be able to use the correct version and git log!");var w=e=>l("div",{className:e.className},void 0,l("section",{},void 0,h,l("h2",{id:"cannot-read-owner-and-package-name-from-github-url-in-package.json%3F"},void 0,"Cannot read owner and package name from Github URL in package.json? ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#cannot-read-owner-and-package-name-from-github-url-in-package.json%3F","aria-hidden":"true"})),p,m,l("h2",{id:"how-do-i-auto-release-a-fork-of-another-repo%3F"},void 0,"How do I auto-release a fork of another repo? ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#how-do-i-auto-release-a-fork-of-another-repo%3F","aria-hidden":"true"})),g,v,y,b));t.default=w,e.exports=t.default}}]);
//# sourceMappingURL=faq.js.map