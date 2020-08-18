(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1095:function(e){e.exports={data:{site:{siteMetadata:{title:"Semantic UI Documentation",description:"The style guide and component library for Semantic UI",author:"@whoisryosuke"}}}}},221:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(244),s=n(1095),l=n(257),o=n.n(l);function c(e){var t=e.description,n=e.lang,a=e.meta,r=e.title,l=s.data.site,c=t||l.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:n},title:r,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:r},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:c}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""};var u=c;t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(u,{title:"404: Not found"}),i.a.createElement("h1",null,"NOT FOUND"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},230:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),i=n.n(a),r=n(68),s=n.n(r);n.d(t,"a",function(){return s.a});n(232),n(10).default.enqueue;var l=i.a.createContext({});function o(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,s=n?n.data:t[a]&&t[a].data;return i.a.createElement(i.a.Fragment,null,s&&r(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return i.a.createElement(l.Consumer,null,function(e){return i.a.createElement(o,{data:t,query:n,render:a||r,staticQueryData:e})})}},232:function(e,t,n){var a;e.exports=(a=n(237))&&a.default||a},237:function(e,t,n){"use strict";n.r(t);n(54),n(16),n(15),n(14),n(8),n(22);var a=n(0),i=n.n(a),r=n(101);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},241:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAMFBMVEU1vbKi29bi8/Jcxr17z8fE6OT///+J08zY8O2t39psysKW19Hs9/a549/O7OkAAAA1s34QAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVRoBe2YvWsUURTFX3bHDzMqih+VhdWAijCFCBaBLRYFSaEIqU3cnIzRLKmsRCxkbQXD2EgIgqksUogoREhABoONWFinSuM/IYTBNzP3vfWdeWDj+5UD5+Tlztl77xv13xAIBAJR/9Or/lpbdffzCPt8XWmln0rwh+wUr/+IGr9Y/SYabHP6NxA8YPRHYOALYZDAxHdn/TsYeeiaiEkhJctwFTZucRWQLDnpj8HKgpPBdVh54WRQWPVDJ30MK+edDI7CilsOHlUUF973rtxYLagSqj2tf1kG6zX2OeFmoPUX681h3rEN6uhXnk6XJaR+yYPq47NAqsgcbtU67Gig3Dhs+eVMbNAGMrf8CfwMtnwNFtoZHGejL3PgeYRD0DxrNZNR4RIplg1pKeUNclTJZADZqXCHNTiABs/pKjbZpovQZJ4rZQeCbJkxmKRmkr2xe7yMGL5n+GDcT3pEFYzz9T7ZFCRPCYdpGJjj08SPd8053yOoJ+SqKZmCYKAo4kJkgb3x7KEB25+6P0UUPC8u9xTNtVohZhVPPJKrJkeUcK9BMgENKZXrd+p7hJ5qReFrkJMGJ0Wf5gxi7PoZrIsOnFOvsSs384Qy6OjQiw0+c79xfKs8OUjMBr1g7JjmzCIz14YbZU1mwKy/ETSXT9+M+mcKbsKuYxwtb95MDTsYx92/G8xgHMue/8GQuW+0ns457KTUzVWySK03kjnXhvoYZnb91hvMcj3Uc+HeFPqM7Odv5d8niX6I75m0xWpSnv72msdX4ZV+T/0jAoFAIPAbiNmfkNF0IpoAAAAASUVORK5CYII="},242:function(e){e.exports={data:{site:{siteMetadata:{title:"Semantic UI Documentation",sidebar:{pages:[{slug:"/getting-started",title:"Getting Started",pages:null},{slug:"/guidelines/overview",title:"Guidelines",pages:[{slug:"/guidelines/overview",title:"Overview"},{slug:"/guidelines/design-principles",title:"Design Principles"}]},{slug:"/styles/overview",title:"Styles",pages:[{slug:"/styles/overview",title:"Overview"},{slug:"/styles/design-tokens",title:"Design tokens"},{slug:"/styles/color",title:"Color"},{slug:"/styles/typography",title:"Typography"},{slug:"/styles/iconography",title:"Iconography"}]},{slug:"/components/button",title:"Components",pages:[{slug:"/components/button",title:"Button"},{slug:"/components/container",title:"Container"},{slug:"/components/card",title:"Card"},{slug:"/components/divider",title:"Divider"},{slug:"/components/input",title:"Input"},{slug:"/components/grid",title:"Grid"},{slug:"/components/list",title:"List"}]},{slug:"/support",title:"Support",pages:null}]}}}}}},244:function(e,t,n){"use strict";var a=n(242),i=n(0),r=n.n(i),s=n(257),l=n.n(s),o=n(230),c=n(868);var u=n(811);n(41);var p=n(241),m=n.n(p);function d(e){e.siteTitle;return r.a.createElement("h1",{class:"ui inverted tiny header"},r.a.createElement("img",{src:m.a,alt:"Semantic UI icon logo"}),"UI Docs")}var g=function(e){var t=e.animation,n=void 0===t?"push":t,a=e.visible,i=e.onHide,s=e.siteTitle,l=e.sidebarPages;return r.a.createElement(c.a,{as:u.a,onHide:i,visible:a,inverted:!0,vertical:!0,animation:n},r.a.createElement("div",{class:"item"},r.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},r.a.createElement(d,{siteTitle:s}))),l?l.map(function(e){var t,n=[];return"pages"in e&&Array.isArray(e.pages)>0?(n=e.pages.map(function(e){return r.a.createElement(u.a.Item,{as:o.a,to:e.slug,key:e.slug,className:"item"},e.title)}),r.a.createElement(u.a.Item,{key:e.slug,header:!0},e.title,r.a.createElement(u.a.Menu,null,n))):r.a.createElement(u.a.Item,{to:e.slug,key:e.slug,as:o.a,name:(t=e.title,t.toLowerCase().split(" ").map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(" ")),header:!0})}):"")};n(203);var v=function(e){var t,n;function i(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).state={visible:!0,mobile:!1},t.handleHideClick=function(){return t.setState({visible:!1})},t.handleShowClick=function(){return t.setState({visible:!0})},t.handleSidebarHide=function(){return t.setState({visible:!1})},t.toggleSidebar=function(){return t.setState({visible:!t.state.visible})},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.componentDidMount=function(){var e,t,n;window.addEventListener("resize",(e=this.resize.bind(this),t=250,n=null,function(){var a=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(a,i)},t)})),this.resize()},s.resize=function(){var e=window.innerWidth<=1025;this.setState({mobile:e}),!e!==this.state.visible&&this.setState({visible:!e})},s.render=function(){var e=this,t=this.props,n=t.children,i=t.className,s=t.title,u=t.description,p=this.state,m=p.mobile,d=p.visible,v=m?"overlay":"push";return r.a.createElement(o.b,{query:"4122120986",render:function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:s?s+" - "+t.site.siteMetadata.title:t.site.siteMetadata.title,meta:[{name:"description",content:u||"Documentation for Semantic UI Component Library"},{name:"keywords",content:"design system, style guide, documentation"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement(c.a.Pushable,{as:"section"},r.a.createElement(g,{animation:v,visible:d,sidebarPages:t.site.siteMetadata.sidebar.pages,siteTitle:s||t.site.siteMetadata.title}),r.a.createElement(c.a.Pusher,{as:"main",className:i},m&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{class:"SidebarToggle"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e.toggleSidebar()}}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"#path"})),r.a.createElement("svg",null,r.a.createElement("use",{xlinkHref:"#path"})))),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},r.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",id:"path"},r.a.createElement("path",{d:"M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"})))),r.a.createElement("div",{className:"ui text container"},n))))},data:a})},i}(r.a.Component);t.a=v}}]);
//# sourceMappingURL=component---src-pages-404-js-ba1479d413fe9eff00dc.js.map