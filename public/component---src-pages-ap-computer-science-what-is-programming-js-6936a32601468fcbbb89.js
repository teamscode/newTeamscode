(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1004:function(e,t,a){"use strict";var s=a(1005),r=a(0),n=a.n(r),i=a(329),c=a.n(i),l=a(259),o=a(1060),u=a(537),p=a(538);a(207);var m=function(e){var t,a;function r(){for(var t,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).state={visible:!0,mobile:!1},t.handleHideClick=function(){return t.setState({visible:!1})},t.handleShowClick=function(){return t.setState({visible:!0})},t.handleSidebarHide=function(){return t.setState({visible:!1})},t.toggleSidebar=function(){return t.setState({visible:!t.state.visible})},t}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.componentDidMount=function(){window.addEventListener("resize",Object(u.a)(this.resize.bind(this),250)),this.resize()},i.resize=function(){var e=window.innerWidth<=1025;this.setState({mobile:e}),!e!==this.state.visible&&this.setState({visible:!e})},i.render=function(){var e=this,t=this.props,a=t.children,r=t.className,i=t.title,u=t.description,m=this.state,g=m.mobile,d=m.visible,h=g?"overlay":"push";return n.a.createElement(l.b,{query:"368996344",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:i?i+" - "+t.site.siteMetadata.title:t.site.siteMetadata.title,meta:[{name:"description",content:u||"Documentation for Semantic UI Component Library"},{name:"keywords",content:"design system, style guide, documentation"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement(o.a.Pushable,{as:"section"},n.a.createElement(p.a,{animation:h,visible:d,sidebarPages:t.site.siteMetadata.cssidebar.pages,siteTitle:i||t.site.siteMetadata.title}),n.a.createElement(o.a.Pusher,{as:"main",className:r},g&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{class:"SidebarToggle"},n.a.createElement("input",{type:"checkbox",onClick:function(){return e.toggleSidebar()}}),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("span",null),n.a.createElement("span",null)),n.a.createElement("svg",null,n.a.createElement("use",{xlinkHref:"#path"})),n.a.createElement("svg",null,n.a.createElement("use",{xlinkHref:"#path"})))),n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{display:"none"}},n.a.createElement("symbol",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",id:"path"},n.a.createElement("path",{d:"M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"})))),n.a.createElement("div",{className:"ui text container"},a))))},data:s})},r}(n.a.Component);t.a=m},1005:function(e){e.exports={data:{site:{siteMetadata:{title:"TeamsCode",cssidebar:{pages:[{slug:"/ap-computer-science/what-is-programming/",title:"Basics of Computing",pages:[{slug:"/ap-computer-science/what-is-programming/",title:"What is Programming?"},{slug:"/ap-computer-science/programming-languages/",title:"Programming Languages"},{slug:"/ap-computer-science/binary/",title:"Binary"},{slug:"/ap-computer-science/more-number-bases/",title:"More Number Bases"}]},{slug:"/ap-computer-science/hello-world/",title:"Programming in Java",pages:[{slug:"/ap-computer-science/hello-world/",title:"Hello World"},{slug:"/ap-computer-science/primtive-variables/",title:"Primtive Variables"},{slug:"/ap-computer-science/advanced-varibles/",title:"Advanced Variables"}]},{slug:"/ap-computer-science/assignment-operators/",title:"Operators",pages:[{slug:"/ap-computer-science/assignment-operators/",title:"Assignment Operators"},{slug:"/ap-computer-science/arithmetic-operators/",title:"What is Programming?"},{slug:"/ap-computer-science/relational-operators/",title:"Programming Languages"},{slug:"/ap-computer-science/logical-operators/",title:"Binary"},{slug:"/ap-computer-science/operator-precedence/",title:"More Number Bases"}]},{slug:"/ap-computer-science/if-statements/",title:"Loops and Conditionals",pages:[{slug:"/ap-computer-science/if-statements/",title:"If Statements"},{slug:"/ap-computer-science/arithmetic-operators/",title:"For Loops"},{slug:"/ap-computer-science/relational-operators/",title:"Advanced For Loops"},{slug:"/ap-computer-science/logical-operators/",title:"While Loops"},{slug:"/ap-computer-science/operator-precedence/",title:"Overview Lesson #1"}]},{slug:"/ap-computer-science/hello-world/",title:"Math/Scanner Classes",pages:[{slug:"/ap-computer-science/hello-world/",title:"Hello World"},{slug:"/ap-computer-science/primitive-variables/",title:"Primtive Variables"},{slug:"/ap-computer-science/advanced-varibles/",title:"Advanced Variables"}]},{slug:"/ap-computer-science/arrays/",title:"Advanced Expressions",pages:[{slug:"/ap-computer-science/arrays/",title:"Arrays"},{slug:"/ap-computer-science/foreach-loops/",title:"Foreach Loops"},{slug:"/ap-computer-science/errors-exceptions/",title:"Errors/Exceptions"},{slug:"/ap-computer-science/methods/",title:"Methods"},{slug:"/ap-computer-science/advanced-methods/",title:"Advanced Methods"}]},{slug:"/ap-computer-science/classes/",title:"Introduction to Classes",pages:[{slug:"/ap-computer-science/classes/",title:"Classes"},{slug:"/ap-computer-science/using-multiple-classes/",title:"Using Multiple Classes"},{slug:"/ap-computer-science/fields/",title:"Fields"},{slug:"/ap-computer-science/method-types/",title:"Method Types"}]},{slug:"/ap-computer-science/objects/",title:"Object-Oriented Java",pages:[{slug:"/ap-computer-science/objects/",title:"Objects"},{slug:"/ap-computer-science/object-oriented-programming/",title:"Object Oriented Programming"},{slug:"/ap-computer-science/inheritance/",title:"Inheritance"},{slug:"/ap-computer-science/inheritance-principles/",title:"Inheritance Principles"}]},{slug:"/ap-computer-science/abstract-classes/",title:"Classes/Interfaces",pages:[{slug:"/ap-computer-science/abstract-classes/",title:"Abstract Classes"},{slug:"/ap-computer-science/interfaces/",title:"Interfaces"},{slug:"/ap-computer-science/polymorphism/",title:"Polymorphism"}]},{slug:"/ap-computer-science/lists-and-arraylists/",title:"Techniques in Java",pages:[{slug:"/ap-computer-science/lists-and-arraylists/",title:"Lists and Arraylists"},{slug:"/ap-computer-science/recursion/",title:"Recursion"}]},{slug:"/ap-computer-science/sorting-and-searching/",title:"Sorting and Searching",pages:[{slug:"/ap-computer-science/sorting-and-searching/",title:"Sorting and Searching"},{slug:"/ap-computer-science/sorting-methods/",title:"Sorting Methods"},{slug:"/ap-computer-science/searching-methods/",title:"Searching Methods"},{slug:"/ap-computer-science/mergesort/",title:"Mergesort"},{slug:"/ap-computer-science/quicksort/",title:"Quicksort"}]}]}}}}}},210:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var s=a(0),r=a.n(s),n=a(1004);function i(){return r.a.createElement(n.a,{title:"What Is Programming?"},r.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css"}),r.a.createElement("script",{src:"https://semantic-ui.com/javascript/library/highlight.min.js"}),r.a.createElement("section",{className:"ui segment vertical masthead"},r.a.createElement("h1",{className:"ui header"},"What is Programming?",r.a.createElement("p",{className:"sub header"},"Learning what programming actually does."))),r.a.createElement("p",null,"Programming is the process of writing code, which is essentially a special form of instructions used to tell the computer to complete a specific task. Programming can be used for basic things like simple addition to complex goals such as making self-driving cars. Essentially, programming powers almost all of the technology around us. It is up to the programmer to use computers to innovate and create new technology. Here is an example of some code:"),r.a.createElement("div",{class:"ui segment"},r.a.createElement("pre",null,r.a.createElement("code",{class:"bash"},"public static String toBaseN(int num, int base) { ",r.a.createElement("br",null),' String newNum = "";',r.a.createElement("br",null)," while (num > 0) {",r.a.createElement("br",null),"  int result = num % base;",r.a.createElement("br",null),"  newNum = result + newNum;",r.a.createElement("br",null),"  num /= base;",r.a.createElement("br",null)," }",r.a.createElement("br",null),"return newNum;",r.a.createElement("br",null),"}",r.a.createElement("br",null)))),r.a.createElement("p",null,"This specific code snippet converts a number into a different base (you will learn what this means in lesson #4, Number Bases). By the end of TeamsCode’s lessons, you will be able to understand, evaluate, and create this code by yourself."))}},259:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var s=a(0),r=a.n(s),n=a(68),i=a.n(n);a.d(t,"a",function(){return i.a});a(266),a(9).default.enqueue;var c=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,s=e.query,n=e.render,i=a?a.data:t[s]&&t[s].data;return r.a.createElement(r.a.Fragment,null,i&&n(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var t=e.data,a=e.query,s=e.render,n=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:s||n,staticQueryData:e})})}},266:function(e,t,a){var s;e.exports=(s=a(276))&&s.default||s},276:function(e,t,a){"use strict";a.r(t);a(54),a(16),a(15),a(14),a(8),a(22);var s=a(0),r=a.n(s),n=a(99);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,s)}return a}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(n.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach(function(t){c(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},537:function(e,t,a){"use strict";function s(e,t){var a=null;return function(){var s=this,r=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(s,r)},t)}}a.d(t,"a",function(){return s})},538:function(e,t,a){"use strict";var s=a(0),r=a.n(s),n=a(259),i=a(1060),c=a(1025);a(42);var l=a.p+"static/gatsby-icon-5d25a7716792add31f2118fa00b61333.png";function o(e){e.siteTitle;return r.a.createElement("h1",{class:"ui inverted tiny header"},r.a.createElement("img",{src:l,alt:"Semantic UI icon logo"}),"TeamsCode")}t.a=function(e){var t=e.animation,a=void 0===t?"push":t,s=e.visible,l=e.onHide,u=e.siteTitle,p=e.sidebarPages;return r.a.createElement(i.a,{as:c.a,onHide:l,visible:s,inverted:!0,vertical:!0,animation:a},r.a.createElement("div",{class:"item"},r.a.createElement(n.a,{to:"/",style:{color:"white",textDecoration:"none"}},r.a.createElement(o,{siteTitle:u}))),p?p.map(function(e){var t,a=[];return"pages"in e&&Array.isArray(e.pages)>0?(a=e.pages.map(function(e){return r.a.createElement(c.a.Item,{as:n.a,to:e.slug,key:e.slug,className:"item"},e.title)}),r.a.createElement(c.a.Item,{key:e.slug,header:!0},e.title,r.a.createElement(c.a.Menu,null,a))):r.a.createElement(c.a.Item,{to:e.slug,key:e.slug,as:n.a,name:(t=e.title,t.toLowerCase().split(" ").map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(" ")),header:!0})}):"")}}}]);
//# sourceMappingURL=component---src-pages-ap-computer-science-what-is-programming-js-6936a32601468fcbbb89.js.map