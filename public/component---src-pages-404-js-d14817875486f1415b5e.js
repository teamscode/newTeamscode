(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1194:function(e){e.exports={data:{site:{siteMetadata:{title:"TeamsCode",description:"We spread computer science education to high school students by organizing programming contests.",author:"@teamscode"}}}}},253:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(543),s=n(1194),l=n(329),o=n.n(l);function c(e){var t=e.description,n=e.lang,a=e.meta,r=e.title,l=s.data.site,c=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},258:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),i=n.n(a),r=n(68),s=n.n(r);n.d(t,"a",function(){return s.a});n(266),n(9).default.enqueue;var l=i.a.createContext({});function o(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,s=n?n.data:t[a]&&t[a].data;return i.a.createElement(i.a.Fragment,null,s&&r(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return i.a.createElement(l.Consumer,null,function(e){return i.a.createElement(o,{data:t,query:n,render:a||r,staticQueryData:e})})}},266:function(e,t,n){var a;e.exports=(a=n(275))&&a.default||a},275:function(e,t,n){"use strict";n.r(t);n(54),n(16),n(15),n(14),n(8),n(22);var a=n(0),i=n.n(a),r=n(99);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},536:function(e,t,n){"use strict";function a(e,t){var n=null;return function(){var a=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(a,i)},t)}}n.d(t,"a",function(){return a})},537:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(258),s=n(1058),l=n(1024);n(42);var o=n.p+"static/gatsby-icon-5d25a7716792add31f2118fa00b61333.png";function c(e){e.siteTitle;return i.a.createElement("h1",{class:"ui inverted tiny header"},i.a.createElement("img",{src:o,alt:"Semantic UI icon logo"}),"TeamsCode")}t.a=function(e){var t=e.animation,n=void 0===t?"push":t,a=e.visible,o=e.onHide,u=e.siteTitle,p=e.sidebarPages;return i.a.createElement(s.a,{as:l.a,onHide:o,visible:a,inverted:!0,vertical:!0,animation:n},i.a.createElement("div",{class:"item"},i.a.createElement(r.a,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement(c,{siteTitle:u}))),p?p.map(function(e){var t,n=[];return"pages"in e&&Array.isArray(e.pages)>0?(n=e.pages.map(function(e){return i.a.createElement(l.a.Item,{as:r.a,to:e.slug,key:e.slug,className:"item"},e.title)}),i.a.createElement(l.a.Item,{key:e.slug,header:!0},e.title,i.a.createElement(l.a.Menu,null,n))):i.a.createElement(l.a.Item,{to:e.slug,key:e.slug,as:r.a,name:(t=e.title,t.toLowerCase().split(" ").map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(" ")),header:!0})}):"")}},543:function(e,t,n){"use strict";var a=n(544),i=n(0),r=n.n(i),s=n(329),l=n.n(s),o=n(258),c=n(1058),u=n(536),p=n(537);n(207);var d=function(e){var t,n;function i(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={visible:!0,mobile:!1},t.handleHideClick=function(){return t.setState({visible:!1})},t.handleShowClick=function(){return t.setState({visible:!0})},t.handleSidebarHide=function(){return t.setState({visible:!1})},t.toggleSidebar=function(){return t.setState({visible:!t.state.visible})},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.componentDidMount=function(){window.addEventListener("resize",Object(u.a)(this.resize.bind(this),250)),this.resize()},s.resize=function(){var e=window.innerWidth<=1025;this.setState({mobile:e}),!e!==this.state.visible&&this.setState({visible:!e})},s.render=function(){var e=this,t=this.props,n=t.children,i=t.className,s=t.title,u=t.description,d=this.state,m=d.mobile,g=d.visible,v=m?"overlay":"push";return r.a.createElement(o.b,{query:"4122120986",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:s?s+" - "+t.site.siteMetadata.title:t.site.siteMetadata.title,meta:[{name:"description",content:u||"Documentation for Semantic UI Component Library"},{name:"keywords",content:"design system, style guide, documentation"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(c.a.Pushable,{as:"section"},r.a.createElement(p.a,{animation:v,visible:g,sidebarPages:t.site.siteMetadata.sidebar.pages,siteTitle:s||t.site.siteMetadata.title}),r.a.createElement(c.a.Pusher,{as:"main",className:i},m&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{class:"SidebarToggle"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e.toggleSidebar()}}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"#path"})),r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"#path"})))),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",id:"path"},r.a.createElement("path",{d:"M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"})))),r.a.createElement("div",{className:"ui text container"},n))))},data:a})},i}(r.a.Component);t.a=d},544:function(e){e.exports={data:{site:{siteMetadata:{title:"TeamsCode",sidebar:{pages:[{slug:"/getting-started",title:"Test Started",pages:null},{slug:"/guidelines/overview",title:"Guidelines",pages:[{slug:"/guidelines/overview",title:"Overview"},{slug:"/guidelines/design-principles",title:"Design Principles"}]},{slug:"/styles/overview",title:"Styles",pages:[{slug:"/styles/overview",title:"Overview"},{slug:"/styles/design-tokens",title:"Design tokens"},{slug:"/styles/color",title:"Color"},{slug:"/styles/typography",title:"Typography"},{slug:"/styles/iconography",title:"Iconography"}]},{slug:"/components/button",title:"Components",pages:[{slug:"/components/button",title:"Button"},{slug:"/components/container",title:"Container"},{slug:"/components/card",title:"Card"},{slug:"/components/divider",title:"Divider"},{slug:"/components/input",title:"Input"},{slug:"/components/grid",title:"Grid"},{slug:"/components/list",title:"List"}]},{slug:"/support",title:"Support",pages:null}]}}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d14817875486f1415b5e.js.map