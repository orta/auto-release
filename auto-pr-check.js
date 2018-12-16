(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{51:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=s(r(2)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}(r(0));s(r(1)),s(r(63));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r,a){o||(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={children:void 0}),t&&n)for(var l in n)void 0===t[l]&&(t[l]=n[l]);else t||(t=n||{});if(1===s)t.children=a;else if(s>1){for(var i=new Array(s),u=0;u<s;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const c=e=>{let{to:t}=e,r=p(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=a.default.join("/auto-release/","pages/auto-pr-check.html")+t),n.default.createElement("a",u({},r,{href:t,onClick:r=>{if(r.preventDefault(),"#"===e.to)return!1;const o=new URL(a.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(o),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:o});return dispatchEvent(n),!1}})))};c.defaultProps={href:"",onClick:()=>{}};const h=e=>{var t,r;return r=t=class extends n.default.Component{constructor(...e){super(...e),i(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},i(t,"defaultProps",{shouldLoad:!0}),r};h(()=>r.e(24).then(r.bind(null,64))),h(()=>r.e(24).then(r.bind(null,65)));var d=l("h1",{},void 0,l("code",{},void 0,"auto pr-check")),b=l("p",{},void 0,"Check that a pull request has a SemVer label."),f=l("pre",{},void 0,l("code",{className:"language-sh"},void 0,"auto pr-check --pr 24 --url http://your-ci.com",l("br",{}))),m=l("pre",{},void 0,l("code",{className:"language-bash"},void 0,">  auto pr-check -h",l("br",{}),l("br",{}),"Options",l("br",{}),l("br",{}),"  --pr number [required]           The pull request number you want the labels of",l("br",{}),"  --url string [required]          URL to associate with this status",l("br",{}),"  --onlyPublishWithReleaseLabel    Only bump version ",l("span",{className:"hljs-keyword"},void 0,"if")," ",l("span",{className:"hljs-string"},void 0,"'release'")," label is on pull request",l("br",{}),"  --major string                   The name of the tag ",l("span",{className:"hljs-keyword"},void 0,"for")," a major version bump",l("br",{}),"  --minor string                   The name of the tag ",l("span",{className:"hljs-keyword"},void 0,"for")," a minor version bump",l("br",{}),"  --patch string                   The name of the tag ",l("span",{className:"hljs-keyword"},void 0,"for")," a patch version bump",l("br",{}),"  --context string                 A string label to differentiate this status from others",l("br",{}),"  --noReleaseLabels string[]       Labels that will not create a release. Defaults to just ",l("span",{className:"hljs-string"},void 0,"'no-release'"),l("br",{}),l("br",{}),"Global Options",l("br",{}),l("br",{}),"  -h, --",l("span",{className:"hljs-built_in"},void 0,"help"),"            Display the ",l("span",{className:"hljs-built_in"},void 0,"help")," output ",l("span",{className:"hljs-keyword"},void 0,"for")," the ",l("span",{className:"hljs-built_in"},void 0,"command"),l("br",{}),"  -v, --verbose         Show some more logs",l("br",{}),"  -w, --very-verbose    Show a lot more logs",l("br",{}),"  --repo string         The repo to ",l("span",{className:"hljs-built_in"},void 0,"set")," the status on. Defaults to looking ",l("span",{className:"hljs-keyword"},void 0,"in")," the package.json",l("br",{}),"  --owner string        Version number to publish as. Defaults to reading from the package.json",l("br",{}),"  --githubApi string    Github API to use",l("br",{}),l("br",{}),"Examples",l("br",{}),l("br",{}),"  $ auto pr-check --pr 32 --url http://your-ci.com/build/123",l("br",{})));var v=e=>l("div",{className:e.className},void 0,l("section",{},void 0,d,b,f,l("h2",{id:"options"},void 0,"Options ",l(c,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#options","aria-hidden":"true"})),m));t.default=v,e.exports=t.default}}]);
//# sourceMappingURL=auto-pr-check.js.map