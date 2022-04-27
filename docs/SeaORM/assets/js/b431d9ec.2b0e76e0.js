"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[3232],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6152:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},p="SeaORM Concepts",l={unversionedId:"introduction/sea-orm",id:"introduction/sea-orm",title:"SeaORM Concepts",description:"In SeaORM, a database with a collection of tables is called a Schema.",source:"@site/docs/01-introduction/03-sea-orm.md",sourceDirName:"01-introduction",slug:"/introduction/sea-orm",permalink:"/SeaORM/docs/next/introduction/sea-orm",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/01-introduction/03-sea-orm.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1651033037,formattedLastUpdatedAt:"4/27/2022",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Async Programming",permalink:"/SeaORM/docs/next/introduction/async"},next:{title:"Tutorial",permalink:"/SeaORM/docs/next/introduction/tutorial"}},s=[],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seaorm-concepts"},"SeaORM Concepts"),(0,o.kt)("p",null,"In SeaORM, a database with a collection of tables is called a ",(0,o.kt)("inlineCode",{parentName:"p"},"Schema"),"."),(0,o.kt)("p",null,"Each table corresponds to an ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#entity"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))," in SeaORM, which helps you perform ",(0,o.kt)("inlineCode",{parentName:"p"},"CRUD")," (Create, Read, Update, and Delete) operations on relevant tables."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Entity")," trait provides an API for you to inspect its properties (",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#column"},(0,o.kt)("inlineCode",{parentName:"a"},"Column")),", ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#relation"},(0,o.kt)("inlineCode",{parentName:"a"},"Relation"))," and ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/entity-structure#primary-key"},(0,o.kt)("inlineCode",{parentName:"a"},"PrimaryKey")),") at runtime."),(0,o.kt)("p",null,"Each table has multiple columns, which are referred to as ",(0,o.kt)("inlineCode",{parentName:"p"},"attribute"),"."),(0,o.kt)("p",null,"These attributes and their values are grouped in a Rust struct (a ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/expanded-entity-structure#model"},(0,o.kt)("inlineCode",{parentName:"a"},"Model")),") so that you can manipulate them."),(0,o.kt)("p",null,"However, ",(0,o.kt)("inlineCode",{parentName:"p"},"Model")," is for read operations only. To perform insert, update, or delete, you need to use ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/generate-entity/expanded-entity-structure#active-model"},(0,o.kt)("inlineCode",{parentName:"a"},"ActiveModel"))," which attaches meta-data on each attribute."),(0,o.kt)("p",null,"Finally, there is no singleton (global context) in SeaORM. Application code is responsible for managing the ownership of the ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/install-and-config/connection"},(0,o.kt)("inlineCode",{parentName:"a"},"DatabaseConnection")),". We do provide integration examples for web frameworks including ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/rocket_example"},"Rocket"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/actix_example"},"Actix"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"axum")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/poem_example"},"poem")," to help you get started quickly."))}m.isMDXComponent=!0}}]);