"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[9047],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},u),{},{components:n})):r.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},746:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="Save",c={unversionedId:"basic-crud/save",id:"version-0.4.x/basic-crud/save",title:"Save",description:"This is a helper method to save (insert / update) ActiveModel into the database.",source:"@site/versioned_docs/version-0.4.x/05-basic-crud/04-save.md",sourceDirName:"05-basic-crud",slug:"/basic-crud/save",permalink:"/SeaORM/docs/0.4.x/basic-crud/save",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/versioned_docs/version-0.4.x/05-basic-crud/04-save.md",tags:[],version:"0.4.x",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1651033037,formattedLastUpdatedAt:"4/27/2022",sidebarPosition:4,frontMatter:{},sidebar:"version-0.4.x/tutorialSidebar",previous:{title:"Update",permalink:"/SeaORM/docs/0.4.x/basic-crud/update"},next:{title:"Delete",permalink:"/SeaORM/docs/0.4.x/basic-crud/delete"}},u=[{value:"Save Behaviour",id:"save-behaviour",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"save"},"Save"),(0,i.kt)("p",null,"This is a helper method to save (insert / update) ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel")," into the database."),(0,i.kt)("h2",{id:"save-behaviour"},"Save Behaviour"),(0,i.kt)("p",null,"When saving an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel"),", it will perform either insert or update depending on the primary key attribute:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Insert if primary key is ",(0,i.kt)("inlineCode",{parentName:"li"},"Unset")),(0,i.kt)("li",{parentName:"ul"},"Update if primary key is ",(0,i.kt)("inlineCode",{parentName:"li"},"Set")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Unchanged"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Calling ",(0,i.kt)("inlineCode",{parentName:"p"},"save")," to insert or update an ",(0,i.kt)("inlineCode",{parentName:"p"},"ActiveModel"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let banana = fruit::ActiveModel {\n    id: Unset(None), // unset primary key explicitly\n    name: Set("Banana".to_owned()),\n    ..Default::default() // all other attributes are `Unset`\n};\n\n// Insert, because primary key `id` is `Unset`\nlet mut banana = banana.save(db).await?;\n\nbanana.name = Set("Banana Mongo".to_owned());\n\n// Update, because primary key `id` is `Set`\nlet banana = banana.save(db).await?;\n')))}d.isMDXComponent=!0}}]);