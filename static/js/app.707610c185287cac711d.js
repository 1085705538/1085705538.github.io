webpackJsonp([1],{"3uRP":function(e,t,n){"use strict";n("T+/8"),n("ODjX");t.a=[{path:"/",component:"login",redirect:"login",children:[{path:"login",component:"login/index",meta:{title:"登录",icon:"login"}}],hidden:!0},{path:"*",component:"errorPage",redirect:"/404",children:[{path:"404",name:"404",component:"errorPage/index",meta:{title:"404",icon:"form"}}],hidden:!0}]},"4X7q":function(e,t,n){"use strict";(function(e){var t,a,r,o=n("mvHQ"),i=n.n(o),l=n("Dd8w"),s=n.n(l),c=n("Gu7T"),u=n.n(c),d=n("YaEn"),p=n("mtWM"),h=(n.n(p),n("6f/g")),f=n("ODjX"),m=n("T+/8"),v=n("3uRP"),b=n("A66B"),_={login:m.default,errorPage:f.default},x=[{path:"",component:"Layout",redirect:"dashboard",children:[{path:"dashboard",component:"dashboard/index",meta:{title:"首页",icon:"dashboard"}}]},{path:"/example",component:"Layout",redirect:"/example/table",name:"Example",meta:{title:"案例",icon:"example"},children:[{path:"table",name:"Table",component:"table/index",meta:{title:"表格",icon:"table"}},{path:"tree",name:"Tree",component:"tree/index",meta:{title:"树形菜单",icon:"tree"}}]},{path:"/form",component:"Layout",children:[{path:"index",name:"Form",component:"form/index",meta:{title:"表单",icon:"form"}}]},{path:"/form1",component:"Layout",children:[{path:"index1",name:"Form1",component:"form/index1",meta:{title:"表单1",icon:"form"}}]}],g=(a=n("PMhf"),r={},a.keys().forEach(function(e){return r[e]=a(e)}),r),y=[];for(var k in g){var C=g[k].default.__file.replace(/\\/g,"/").replace("src/views/","").replace(/\.vue/,"");y.push(C)}function w(n,a){t=function e(t){var n=t.filter(function(t){return t.component&&("Layout"===t.component?t.component=h.default:_[t.component]?t.component=_[t.component]:t.component=y.includes(t.component)?b(t.component):f.default),t.children&&t.children.length&&(t.children=e(t.children)),!0});return n}(t),d.a.addRoutes(t),e.antRouter=t,a(s()({},n,{replace:!0}))}function R(e){return JSON.parse(window.localStorage.getItem(e))}d.a.beforeEach(function(e,n,a){var r,o;t?a():R("router")?(t=R("router"),w(e,a)):(t=x,t=[].concat(u()(t),u()(v.a)),r="router",o=t,localStorage.setItem(r,i()(o)),w(e,a))})}).call(t,n("DuR2"))},"65fb":function(e,t){},"6f/g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("BoPo"),r={name:"layout",components:{sidebar:n("SRp+").default,AppMain:a.default}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-wrapper"},[t("sidebar",{staticClass:"sidebar-container"}),this._v(" "),t("div",{staticClass:"main-container"},[t("app-main")],1)],1)},staticRenderFns:[]};var i=n("VU/8")(r,o,!1,function(e){n("srfW")},"data-v-4a1060a4",null);t.default=i.exports},A66B:function(e,t,n){e.exports=function(e){return function(){return n("Opzk")("./"+e+".vue")}}},ARoL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Gu7T"),r=n.n(a),o=n("c/Tr"),i=n.n(o),l=n("lHA8"),s=n.n(l),c=n("/dO2"),u={data:function(){return{showList:!1,table_header_prop_left:0,table_header_prop_top:0,checkedCities:["date","name","sex","address","age"],tabColumnList:[{prop:"date",label:"日期",checked:!0},{prop:"name",label:"姓名",checked:!0},{prop:"sex",label:"性别",checked:!0},{prop:"address",label:"地址",checked:!0},{prop:"age",label:"年龄",checked:!0}],keyObj:{date:"日期",name:"姓名",sex:"性别",address:"地址",age:"年龄"},tabColumnList2:[{prop:"date",label:"日期",checked:!0},{prop:"name",label:"姓名",checked:!0},{prop:"sex",label:"性别",checked:!0},{prop:"address",label:"地址",checked:!0},{prop:"age",label:"年龄",checked:!0}],tabColumnList3:[{prop:"date",label:"日期",checked:!0},{prop:"name",label:"姓名",checked:!0},{prop:"sex",label:"性别",checked:!0},{prop:"address",label:"地址",checked:!0},{prop:"age",label:"年龄",checked:!0}],tableData:[{date:"2016-05-02",name:"王小虎2",address:"上海市普陀区金沙江路 1518 弄",age:"18",sex:"男",id:1},{date:"2016-05-04",name:"王小虎4",address:"上海市普陀区金沙江路 1517 弄",age:"18",sex:"男",id:2},{date:"2016-05-01",name:"王小虎1",address:"上海市普陀区金沙江路 1519 弄",age:"18",sex:"男",id:3},{date:"2016-05-03",name:"王小虎3",address:"上海市普陀区金沙江路 1516 弄",age:"18",sex:"男",id:4}]}},mounted:function(){this.setSort()},methods:{rowKey:function(e,t){return"col_"+e.prop+"_"+t+"_"+Math.random()},onHeaderClick:function(e,t){t.preventDefault(),this.table_header_prop_left=t.x-180+"px",this.table_header_prop_top=t.y-20+"px",console.log(t.x),this.showList=!0},onContextMenu:function(){return!1},handleCheckedCitiesChange:function(e){console.log(e)},setSort:function(){var e=this,t=this.$refs.dragTable.$el.querySelector(".el-table__header-wrapper thead tr");this.sortable=c.a.create(t,{ghostClass:"sortable-ghost",setData:function(e){e.setData("Text","")},onEnd:function(t){console.log(e.tabColumnList);var n=e.tabColumnList.splice(t.oldIndex,1)[0];e.tabColumnList.splice(t.newIndex,0,n);var a=e.tabColumnList.slice(0);console.log(a),a.forEach(function(t,n){e.$set(e.tabColumnList,n,t)})}})}},watch:{checkedCities:function(e,t){var n=this,a=new s.a(e),o=new s.a(t),l=e.length>t.length?i()(new s.a([].concat(r()(a)).filter(function(e){return!o.has(e)}))):i()(new s.a([].concat(r()(o)).filter(function(e){return!a.has(e)}))),c=e.length>t.length;this.tabColumnList.map(function(e,t){e.prop==l[0]&&(e.checked=!e.checked,n.tabColumnList.splice(t,1))}),console.log("243"),this.tabColumnList2.map(function(e,t){console.log("245",e.prop,l[0]),console.log("247",e.prop==l[0]),e.prop==l[0]&&(e.checked=!e.checked,console.log("249",e.checked),n.tabColumnList2.splice(t,1))}),console.log("isShowNewColumn====",c),c&&this.tabColumnList3.map(function(e,t){e.prop==l[0]&&(console.log("tabColumnList3",e,e.prop,l[0],t),e.checked=!0,n.tabColumnList.push(e),n.tabColumnList2.push(e))})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{ref:"dragTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","row-key":"id"},on:{"header-contextmenu":e.onHeaderClick,"header-click":function(t){e.showList=!1}}},e._l(e.tabColumnList,function(t,a){return n("el-table-column",{directives:[{name:"show",rawName:"v-show",value:t.checked,expression:"item.checked"}],key:e.rowKey(t,a),attrs:{"min-width":100,prop:t.prop,label:e.tabColumnList2[a].label,align:"center","column-key":e.rowKey(t,a)}})})),e._v(" "),n("el-card",{directives:[{name:"show",rawName:"v-show",value:e.showList,expression:"showList"}],staticClass:"box-card table_header_prop_list",style:{left:e.table_header_prop_left,top:e.table_header_prop_top}},[n("div",{staticClass:"text item",on:{contextmenu:function(t){return t.preventDefault(),e.onContextMenu(t)}}},[n("el-checkbox-group",{staticClass:"table_header_prop_checkbox",on:{change:e.handleCheckedCitiesChange},model:{value:e.checkedCities,callback:function(t){e.checkedCities=t},expression:"checkedCities"}},e._l(e.tabColumnList3,function(t,a){return n("el-checkbox",{key:a,attrs:{label:t.prop}},[e._v(" "+e._s(t.label))])}))],1)])],1)},staticRenderFns:[]};var p=n("VU/8")(u,d,!1,function(e){n("65fb")},"data-v-15b63a1c",null);t.default=p.exports},BfUi:function(e,t,n){(function(e){e.antRouter=""}).call(t,n("DuR2"))},BoPo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"app-main"},[this._v("\n  123456\n  "),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]},r=n("VU/8")({name:"AppMain",computed:{}},a,!1,null,null,null);t.default=r.exports},G6fZ:function(e,t){},ItCA:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"app-container"},[this._v("\n  form\n")])},staticRenderFns:[]},r=n("VU/8")({data:function(){return{}},filters:{},created:function(){},methods:{}},a,!1,null,null,null);t.default=r.exports},Jzhk:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},r,!1,function(e){n("gUB9")},null,null).exports,i=n("YaEn"),l=n("zL8q"),s=n.n(l);n("BfUi"),n("4X7q"),n("tvR6"),n("yh13");a.default.config.productionTip=!1,a.default.use(s.a),new a.default({el:"#app",router:i.a,components:{App:o},template:"<App/>"})},ODjX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"app-container"},[this._v("\n  404\n")])},staticRenderFns:[]},r=n("VU/8")({data:function(){return{}},filters:{},created:function(){},methods:{}},a,!1,null,null,null);t.default=r.exports},Opzk:function(e,t,n){var a={"./HelloWorld.vue":["q/3a"],"./dashboard/index.vue":["ARoL"],"./errorPage/index.vue":["ODjX"],"./form/index.vue":["ItCA"],"./layout/components/AppMain.vue":["BoPo"],"./layout/components/sidebar/index.vue":["SRp+"],"./layout/components/sidebar/indexDefault.vue":["y81J"],"./layout/components/sidebar/sidebarItem.vue":["bqa7"],"./layout/components/sidebar/sidebarItemDefault.vue":["V0D3"],"./layout/index.vue":["6f/g"],"./login/index.vue":["T+/8"],"./table/index.vue":["YBQJ"],"./tree/index.vue":["TfcR"]};function r(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}r.keys=function(){return Object.keys(a)},r.id="Opzk",e.exports=r},PFHA:function(e,t){},PMhf:function(e,t,n){var a={"./HelloWorld.vue":"q/3a","./dashboard/index.vue":"ARoL","./errorPage/index.vue":"ODjX","./form/index.vue":"ItCA","./layout/components/AppMain.vue":"BoPo","./layout/components/sidebar/index.vue":"SRp+","./layout/components/sidebar/indexDefault.vue":"y81J","./layout/components/sidebar/sidebarItem.vue":"bqa7","./layout/components/sidebar/sidebarItemDefault.vue":"V0D3","./layout/index.vue":"6f/g","./login/index.vue":"T+/8","./table/index.vue":"YBQJ","./tree/index.vue":"TfcR"};function r(e){return n(o(e))}function o(e){var t=a[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="PMhf"},PmfF:function(e,t){},"SRp+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("zrMh"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-menu",{attrs:{mode:"vertical","unique-opened":"","default-active":this.$route.path,"background-color":"#304156","text-color":"#fff","active-text-color":"#409EFF"}},[t("sidebar-item",{attrs:{showRoutes:this.routes}})],1)},staticRenderFns:[]},o=n("VU/8")(a.a,r,!1,null,null,null);t.default=o.exports},"T+/8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  login\n")])},staticRenderFns:[]};var r=n("VU/8")({name:"",components:{},mixins:[],props:{},data:function(){return{}},computed:{},watch:{},mounted:function(){},methods:{}},a,!1,function(e){n("G6fZ")},"data-v-126ed743",null);t.default=r.exports},TfcR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"app-container"},[this._v("\n  我是tree\n")])},staticRenderFns:[]},r=n("VU/8")({data:function(){return{}},filters:{},created:function(){},methods:{}},a,!1,null,null,null);t.default=r.exports},V0D3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"sidebarItem",props:{routes:{type:Array},isNest:{type:Boolean,default:!1}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.routes,function(t){return!t.hidden&&t.children?[1!==t.children.length||t.children[0].children||t.alwaysShow?n("el-submenu",{key:t.name,attrs:{index:t.name||t.path}},[n("template",{slot:"title"},[t.meta&&t.meta.title?n("span",[e._v(e._s(t.meta.title))]):e._e()]),e._v(" "),e._l(t.children,function(a){return a.hidden?e._e():[a.children&&a.children.length>0?n("sidebar-item",{key:a.path,staticClass:"nest-menu",attrs:{"is-nest":!0,routes:[a]}}):n("router-link",{key:a.name,attrs:{to:t.path+"/"+a.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+a.path}},[a.meta&&a.meta.title?n("span",[e._v(e._s(a.meta.title))]):e._e()])],1)]})],2):n("router-link",{key:t.children[0].name,attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:t.path+"/"+t.children[0].path}},[t.children[0].meta&&t.children[0].meta.title?n("span",[e._v(e._s(t.children[0].meta.title))]):e._e()])],1)]:e._e()})],2)},staticRenderFns:[]};var o=n("VU/8")(a,r,!1,function(e){n("PmfF")},null,null);t.default=o.exports},YBQJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"app-container"},[this._v("\n  我是table\n")])},staticRenderFns:[]},r=n("VU/8")({data:function(){return{}},filters:{},created:function(){},methods:{}},a,!1,null,null,null);t.default=r.exports},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),r=n("/ocq");a.default.use(r.a);t.a=new r.a({routes:[]})},bqa7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),r=n.n(a),o=n("Gu7T"),i=n.n(o),l=n("w/TU"),s={name:"sidebarItem",props:{showRoutes:{type:Array},isNest:{type:Boolean,default:!1}},data:function(){return{routes:[]}},created:function(){this.routes=this.showRoutes},components:{draggable:n.n(l).a},methods:{unique:function(e){for(var t=[e[0]],n=1;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}},watch:{routes:function(e,t){var n=JSON.parse(localStorage.getItem("router")),a=n.map(function(e){return e.path}),o=this.routes.map(function(e){return e.path});console.log(this.routes),console.log("localRouterPath===",a),console.log("showRoutePath===",o);var l=this;t.length>0&&(n.sort(function(e,t){var n=l.unique([].concat(i()(o),i()(a)));return console.log(n),n.indexOf(e.path)-n.indexOf(t.path)}),window.localStorage.setItem("router",r()(n))),console.log("119=localRouter===========",n)}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[n("draggable",{attrs:{group:"people"},on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.routes,callback:function(t){e.routes=t},expression:"routes"}},[e._l(e.routes,function(t){return!t.hidden&&t.children?[1!==t.children.length||t.children[0].children||t.alwaysShow?n("el-submenu",{key:t.name,attrs:{index:t.name||t.path}},[n("template",{slot:"title"},[t.meta&&t.meta.title?n("span",[e._v(e._s(t.meta.title))]):e._e()]),e._v(" "),e._l(t.children,function(a){return a.hidden?e._e():[a.children&&a.children.length>0?n("sidebar-item",{key:a.path,staticClass:"nest-menu",attrs:{"is-nest":!0,routes:[a]}}):n("router-link",{key:a.name,attrs:{to:t.path+"/"+a.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+a.path}},[a.meta&&a.meta.title?n("span",[e._v(e._s(a.meta.title))]):e._e()])],1)]})],2):n("router-link",{key:t.children[0].name,attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{class:{"submenu-title-noDropdown":!e.isNest},attrs:{index:t.path+"/"+t.children[0].path}},[t.children[0].meta&&t.children[0].meta.title?n("span",[e._v(e._s(t.children[0].meta.title))]):e._e()])],1)]:e._e()})],2)],1)},staticRenderFns:[]};var u=n("VU/8")(s,c,!1,function(e){n("Jzhk")},null,null);t.default=u.exports},gUB9:function(e,t){},"q/3a":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"wapper"},[this._v("\n  123\n")])},staticRenderFns:[]};var r=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},a,!1,function(e){n("PFHA")},"data-v-50c4d708",null);t.default=r.exports},srfW:function(e,t){},tvR6:function(e,t){},y81J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("yWTS"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("el-menu",{attrs:{mode:"vertical","unique-opened":"","default-active":this.$route.path,"background-color":"#304156","text-color":"#fff","active-text-color":"#409EFF"}},[t("sidebar-item",{attrs:{routes:this.routes}})],1)},staticRenderFns:[]},o=n("VU/8")(a.a,r,!1,null,null,null);t.default=o.exports},yWTS:function(e,t,n){"use strict";(function(e){var a=n("bqa7");t.a={components:{sidebarItem:a.default},computed:{routes:function(){return e.antRouter}}}}).call(t,n("DuR2"))},yh13:function(e,t){},zrMh:function(e,t,n){"use strict";(function(e){var a=n("bqa7");t.a={components:{sidebarItem:a.default},computed:{routes:function(){return e.antRouter}}}}).call(t,n("DuR2"))}},["NHnr"]);
//# sourceMappingURL=app.707610c185287cac711d.js.map