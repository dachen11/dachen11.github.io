"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6089],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,u=d["".concat(s,".").concat(m)]||d[m]||b[m]||a;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6607:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={id:"bible-search-dev",title:"How it is developed",sidebar_label:"Development"},i="How it is developed",l={unversionedId:"projects/bible-search-dev",id:"projects/bible-search-dev",title:"How it is developed",description:"1. Download 3 translations (English ASV, Chinese Simple and Chinese Tradition) in csv format from https://www.biblesupersearch.com website",source:"@site/docs/projects/bible-search-development.md",sourceDirName:"projects",slug:"/projects/bible-search-dev",permalink:"/docs/projects/bible-search-dev",draft:!1,tags:[],version:"current",frontMatter:{id:"bible-search-dev",title:"How it is developed",sidebar_label:"Development"},sidebar:"projects",previous:{title:"Introduction",permalink:"/docs/projects/bible-search-intro"},next:{title:"Deployment",permalink:"/docs/projects/bible-search-deploy"}},s={},c=[],p={toc:c},d="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-it-is-developed"},"How it is developed"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download 3 translations (English ASV, Chinese Simple and Chinese Tradition) in csv format from ",(0,o.kt)("a",{parentName:"li",href:"https://www.biblesupersearch.com"},"https://www.biblesupersearch.com")," website")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Load the 3 csv files into Oracle database, table as below. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Index those 3 files using Apache Lucene and search on them. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a SpringBoot application to provide REST API")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"create the front end with Reactjs and Ant design library"))))}b.isMDXComponent=!0}}]);