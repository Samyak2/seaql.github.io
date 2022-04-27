"use strict";(self.webpackChunksea_orm=self.webpackChunksea_orm||[]).push([[9668],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4548:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={},d="Select",s={unversionedId:"basic-crud/select",id:"basic-crud/select",title:"Select",description:"Once you have defined the entity, you are ready to retrieve data from the database. Each row of data in the database corresponds to a Model.",source:"@site/docs/06-basic-crud/01-select.md",sourceDirName:"06-basic-crud",slug:"/basic-crud/select",permalink:"/SeaORM/docs/next/basic-crud/select",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/SeaORM/docs/06-basic-crud/01-select.md",tags:[],version:"current",lastUpdatedBy:"Billy Chan",lastUpdatedAt:1651033037,formattedLastUpdatedAt:"4/27/2022",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Running Migration",permalink:"/SeaORM/docs/next/migration/running-migration"},next:{title:"Insert",permalink:"/SeaORM/docs/next/basic-crud/insert"}},c=[{value:"Find by Primary Key",id:"find-by-primary-key",children:[],level:2},{value:"Find with Conditions and Orders",id:"find-with-conditions-and-orders",children:[],level:2},{value:"Find Related Models",id:"find-related-models",children:[{value:"Lazy Loading",id:"lazy-loading",children:[],level:3},{value:"Eager Loading",id:"eager-loading",children:[{value:"One to One",id:"one-to-one",children:[],level:4},{value:"One to Many",id:"one-to-many",children:[],level:4}],level:3}],level:2},{value:"Paginate Result",id:"paginate-result",children:[],level:2},{value:"Select custom",id:"select-custom",children:[],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"select"},"Select"),(0,o.kt)("p",null,"Once you have defined the entity, you are ready to retrieve data from the database. Each row of data in the database corresponds to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Model"),"."),(0,o.kt)("p",null,"By default, SeaORM will select all columns defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Column")," enum."),(0,o.kt)("h2",{id:"find-by-primary-key"},"Find by Primary Key"),(0,o.kt)("p",null,"Find a model by its primary key, it can be a single key or composite key. We start by calling ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html#method.find_by_id"},(0,o.kt)("inlineCode",{parentName:"a"},"find_by_id"))," on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Entity"))," which helps you construct the select query and condition automatically. Then, fetch a single model from the database with the ",(0,o.kt)("inlineCode",{parentName:"p"},"one")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use super::cake::Entity as Cake;\nuse super::cake_filling::Entity as CakeFilling;\n\n// Find by primary key\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\n\n// Find by composite primary keys\nlet vanilla: Option<cake_filling::Model> = CakeFilling::find_by_id((6, 8)).one(db).await?;\n")),(0,o.kt)("h2",{id:"find-with-conditions-and-orders"},"Find with Conditions and Orders"),(0,o.kt)("p",null,"In addition to retrieving a model by primary key, you can also retrieve one or more models matching specific conditions in a certain order. The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/trait.EntityTrait.html#method.find"},(0,o.kt)("inlineCode",{parentName:"a"},"find"))," method gives you access to the query builder in SeaORM. It supports the construction of all common select expressions like ",(0,o.kt)("inlineCode",{parentName:"p"},"where")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"order by"),". They can be constructed using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.QueryFilter.html#method.filter"},(0,o.kt)("inlineCode",{parentName:"a"},"filter"))," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/query/trait.QueryOrder.html#method.order_by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by_*"))," methods respectively."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/conditional-expression"},"conditional expression"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let chocolate: Vec<cake::Model> = Cake::find()\n    .filter(cake::Column::Name.contains("chocolate"))\n    .order_by_asc(cake::Column::Name)\n    .all(db)\n    .await?;\n')),(0,o.kt)("h2",{id:"find-related-models"},"Find Related Models"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Read more about ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/custom-joins"},"table joins"),".")),(0,o.kt)("h3",{id:"lazy-loading"},"Lazy Loading"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_related"},(0,o.kt)("inlineCode",{parentName:"a"},"find_related"))," method."),(0,o.kt)("p",null,"Related models are loaded on demand when you ask for them, preferable if you want to load related models based on some application logic. Note that lazy loading will increase database round trips compared to eager loading."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// Find a cake model first\nlet cheese: Option<cake::Model> = Cake::find_by_id(1).one(db).await?;\nlet cheese: cake::Model = cheese.unwrap();\n\n// Then, find all related fruits of this cake\nlet fruits: Vec<fruit::Model> = cheese.find_related(Fruit).all(db).await?;\n")),(0,o.kt)("h3",{id:"eager-loading"},"Eager Loading"),(0,o.kt)("p",null,"All related models are loaded at once. This provides minimum overhead on database round trips compared to lazy loading."),(0,o.kt)("h4",{id:"one-to-one"},"One to One"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_also_related"},(0,o.kt)("inlineCode",{parentName:"a"},"find_also_related"))," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let cake_and_fruit: Vec<(cake::Model, Option<fruit::Model>)> = Cake::find().find_also_related(Fruit).all(db).await?;\n")),(0,o.kt)("h4",{id:"one-to-many"},"One to Many"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_with_related"},(0,o.kt)("inlineCode",{parentName:"a"},"find_with_related"))," method, the related models will be grouped by the parent models."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let cake_with_fruits: Vec<(cake::Model, Vec<fruit::Model>)> = Cake::find()\n    .find_with_related(Fruit)\n    .all(db)\n    .await?;\n")),(0,o.kt)("h2",{id:"paginate-result"},"Paginate Result"),(0,o.kt)("p",null,"Convert any SeaORM select into a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/sea-orm/*/sea_orm/struct.Paginator.html"},"paginator")," with custom page size."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use sea_orm::{entity::*, query::*, tests_cfg::cake};\nlet mut cake_pages = cake::Entity::find()\n    .order_by_asc(cake::Column::Id)\n    .paginate(db, 50);\n \nwhile let Some(cakes) = cake_pages.fetch_and_next().await? {\n    // Do something on cakes: Vec<cake::Model>\n}\n")),(0,o.kt)("h2",{id:"select-custom"},"Select custom"),(0,o.kt)("p",null,"If you want to select custom columns and expressions, read the ",(0,o.kt)("a",{parentName:"p",href:"/SeaORM/docs/next/advanced-query/custom-select"},"custom select")," section."))}p.isMDXComponent=!0}}]);