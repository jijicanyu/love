webpackJsonp([27],{"5Ezj":function(t,s){},"nN+8":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("mw3O"),e=i.n(a),n={name:"home",data:function(){return{active:"",img_url:"",msg:"",data:[],atlass_list:"",panelsid:"",openSimple:!1,open:!1,this_opacity:"1"}},methods:{openSimpleDialog:function(t,s){this.active=s;this.img_url=t.atlas_pic,this.openSimple=!0},closeSimpleDialog:function(){this.openSimple=!1,this.closeBottomSheet()},closeBottomSheet:function(){this.open=!1},openBotttomSheet:function(t){this.img_url=t.atlas_pic,this.open=!0},back:function(){window.history.back()},atlass:function(){var t=this,s={panelsid:t.panels_id};t.$http.post("/panels/atlass",e.a.stringify(s),{}).then(function(s){200==s.meta.code&&(t.atlass_list=s.data)})},save:function(t){dsBridge.call("saveImg",this.baseUrl+this.img_url)}},created:function(){this.panels_id=this.$route.query.type,this.panels_title=this.$route.query.typeone,this.atlass()},mounted:function(){}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"showtu-container"},[a("div",{staticClass:"showtu-header"},[a("div",{staticClass:"showtu-zhong"},[a("div",{staticClass:"showtu-fanhui"},[a("img",{attrs:{src:i("iTwX")},on:{click:function(s){t.back()}}})]),t._v(" "),a("div",{staticClass:"showtu-ti"},[t._v(t._s(t.panels_title))]),t._v(" "),a("div")])]),t._v(" "),a("div",{staticClass:"showtu-content"},[a("div",{staticClass:"showtu-wap"},t._l(t.atlass_list,function(s,i){return a("div",{key:i,staticClass:"showtu-around"},[a("div",{staticClass:"showtu-tupian",on:{click:function(a){t.openSimpleDialog(s,i)}}},[a("img",{attrs:{src:s.atlas_pic?t.baseUrl+s.atlas_pic:"../assets/img_tl3.png"}})])])})),t._v(" "),a("mu-container",[a("mu-dialog",{attrs:{width:"100%",open:t.openSimple},on:{"update:open":function(s){t.openSimple=s}}},[a("div",{staticClass:"showtu-lun"},[a("mu-carousel",{attrs:{interval:"80000",active:t.active},on:{change:function(s){t.change()}}},t._l(t.atlass_list,function(s,i){return a("mu-carousel-item",{key:i},[a("img",{attrs:{src:t.baseUrl+s.atlas_pic},on:{click:function(i){t.openBotttomSheet(s)}}})])}))],1)])],1),t._v(" "),a("mu-bottom-sheet",{attrs:{open:t.open},on:{"update:open":function(s){t.open=s}}},[a("mu-list",{on:{"item-click":t.closeBottomSheet}},[a("mu-sub-header",[a("div",{staticClass:"showtu-between"},[a("div",{staticClass:"showtu-flex",on:{click:function(s){t.save()}}},[a("div",{staticClass:"showtu-xiazai"},[a("img",{attrs:{src:i("RYgU")}})]),t._v(" "),a("div",{staticClass:"showtu-baocun"},[t._v("保存")])]),t._v(" "),a("div",{staticClass:"showtu-qux",on:{click:function(s){t.closeSimpleDialog()}}},[t._v("取消")])])])],1)],1)],1)])},staticRenderFns:[]};var c=i("VU/8")(n,o,!1,function(t){i("5Ezj")},"data-v-79fd6170",null);s.default=c.exports}});
//# sourceMappingURL=27.0a870c2ec607a027bde5.js.map