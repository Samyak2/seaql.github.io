"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[7780],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7617:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},u="Aggregate Functions",l={unversionedId:"advanced-query/aggregate-function",id:"version-0.4.x/advanced-query/aggregate-function",title:"Aggregate Functions",description:"You can group results selected from SeaORM find with the group_by method, and if you wish to further restrict the grouped result set, the having method can help you achieve that.",source:"@site/versioned_docs/version-0.4.x/08-advanced-query/03-aggregate-function.md",sourceDirName:"08-advanced-query",slug:"/advanced-query/aggregate-function",permalink:"/SeaORM/docs/0.4.x/advanced-query/aggregate-function",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/08-advanced-query/03-aggregate-function.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1651033037,formattedLastUpdatedAt:"4/27/2022",sidebarPosition:3,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Conditional Expressions",permalink:"/SeaORM/docs/0.4.x/advanced-query/conditional-expression"},next:{title:"Custom Joins",permalink:"/SeaORM/docs/0.4.x/advanced-query/custom-joins"}},s=[{value:"Group By",id:"group-by",children:[],level:2},{value:"Having",id:"having",children:[],level:2}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aggregate-functions"},"Aggregate Functions"),(0,o.kt)("p",null,"You can group results selected from SeaORM find with the ",(0,o.kt)("inlineCode",{parentName:"p"},"group_by")," method, and if you wish to further restrict the grouped result set, the ",(0,o.kt)("inlineCode",{parentName:"p"},"having")," method can help you achieve that."),(0,o.kt)("h2",{id:"group-by"},"Group By"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"group_by")," method can take a column of the entity or a complex ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-query/*/sea_query/expr/enum.SimpleExpr.html"},(0,o.kt)("inlineCode",{parentName:"a"},"sea_query::SimpleExpr")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .select_only()\n        .column(cake::Column::Name)\n        .group_by(cake::Column::Name)\n        .build(DbBackend::Postgres)\n        .to_string(),\n    r#"SELECT "cake"."name" FROM "cake" GROUP BY "cake"."name""#\n);\n')),(0,o.kt)("h2",{id:"having"},"Having"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"having")," method can take any conditional expressions introduced in the previous section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    cake::Entity::find()\n        .having(cake::Column::Id.eq(4))\n        .having(cake::Column::Id.eq(5))\n        .build(DbBackend::MySql)\n        .to_string(),\n    "SELECT `cake`.`id`, `cake`.`name` FROM `cake` HAVING `cake`.`id` = 4 AND `cake`.`id` = 5"\n);\n')))}d.isMDXComponent=!0}}]);