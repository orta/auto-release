(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{49:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=i(o(2)),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,o):{};a.get||a.set?Object.defineProperty(t,o,a):t[o]=e[o]}return t.default=e,t}(o(0));i(o(1)),i(o(63));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t,o,r){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&n)for(var s in n)void 0===t[s]&&(t[s]=n[s]);else t||(t=n||{});if(1===i)t.children=r;else if(i>1){for(var l=new Array(i),u=0;u<i;u++)l[u]=arguments[u+3];t.children=l}return{$$typeof:a,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const d=e=>{let{to:t}=e,o=c(e,["to"]);return t.includes("http")?n.default.createElement("a",u({},e,{href:t})):("#"===t[0]&&(t=r.default.join("/auto-release/","pages/auto-init.html")+t),n.default.createElement("a",u({},o,{href:t,onClick:o=>{if(o.preventDefault(),"#"===e.to)return!1;const a=new URL(r.default.join(window.location.origin,t));window.history.pushState((e=>({href:e.href,pathname:e.pathname,hash:e.hash,query:e.query}))(a),null,t),e.onClick();const n=new CustomEvent("changeLocation",{detail:a});return dispatchEvent(n),!1}})))};d.defaultProps={href:"",onClick:()=>{}};const p=e=>{var t,o;return o=t=class extends n.default.Component{constructor(...e){super(...e),l(this,"state",{Comp:null})}componentDidMount(){!this.state.Comp&&this.props.shouldLoad&&e().then(e=>{this.setState({Comp:e.default})})}render(){const{Comp:e}=this.state;return e?n.default.createElement(e,this.props,this.props.children||null):null}},l(t,"defaultProps",{shouldLoad:!0}),o};p(()=>o.e(24).then(o.bind(null,64))),p(()=>o.e(24).then(o.bind(null,65)));var h=s("h1",{},void 0,"Initialization"),v=s("code",{},void 0,"auto-release"),f=s("code",{},void 0,"auto init"),b=s("p",{},void 0,"Interactive setup for most configurable options."),m=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"$ auto init --",s("span",{className:"hljs-built_in"},void 0,"help"),s("br",{}),s("br",{}),"usage: auto.js init [-h]",s("br",{}),s("br",{}),"Optional arguments:",s("br",{}),"  -h, --",s("span",{className:"hljs-built_in"},void 0,"help"),"  Show this ",s("span",{className:"hljs-built_in"},void 0,"help")," message and ",s("span",{className:"hljs-built_in"},void 0,"exit"),".",s("br",{}))),g=s("code",{},void 0,"auto init-labels"),y=s("p",{},void 0,"Create your projects labels on github."),w=s("pre",{},void 0,s("code",{className:"language-sh"},void 0,"$ auto init-labels --",s("span",{className:"hljs-built_in"},void 0,"help"),s("br",{}),s("br",{}),"usage: auto.js init-labels [-h] [-v] [-vv] [--githubApi GITHUBAPI]",s("br",{}),s("br",{}),"Optional arguments:",s("br",{}),"  -h, --",s("span",{className:"hljs-built_in"},void 0,"help"),"            Show this ",s("span",{className:"hljs-built_in"},void 0,"help")," message and ",s("span",{className:"hljs-built_in"},void 0,"exit"),".",s("br",{}),"  -v, --verbose         Show some more logs",s("br",{}),"  -vv, --very-verbose   Show a lot more logs",s("br",{}),"  --githubApi GITHUBAPI",s("br",{}),"                        Github API to use",s("br",{}))),j=s("article",{className:"message column is-warning"},void 0,s("div",{className:"message-body"},void 0,s("p",{},void 0,"⚠️ For this to work you must have a ",s("code",{},void 0,"GH_TOKEN")," set, ex: ",s("code",{},void 0,"GH_TOKEN=YOUR_TOKEN auto init-labels"))));var O=e=>s("div",{className:e.className},void 0,s("section",{},void 0,h,s("p",{},void 0,v," provides some tools to quickly set up your project. If you do not want to use the interactive experience all these options can be configured via the ",s(d,{currentPage:e.currentPage,to:"/auto-release/pages/autorc.html"},void 0,".autorc")," and most can be configure via CLI options."),s("h2",{id:"auto-init"},void 0,f," ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#auto-init","aria-hidden":"true"})),b,m,s("h2",{id:"auto-init-labels"},void 0,g," ",s(d,{currentPage:e.currentPage,className:"fas fa-hashtag headerLink",to:"#auto-init-labels","aria-hidden":"true"})),y,w,j));t.default=O,e.exports=t.default}}]);
//# sourceMappingURL=auto-init.js.map