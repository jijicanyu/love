webpackJsonp([33],{zChL:function(t,a){},zRCK:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o={name:"home",data:function(){return{msg:"",data:{}}},methods:{back:function(){window.history.back()},info_correlation:function(){var t=this;t.$http.post("/help/info_correlation",{}).then(function(a){200==a.meta.code&&(t.data=a.data)})}},created:function(){this.info_correlation()},mounted:function(){}},s={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"about-container"},[o("div",{staticClass:"about-header"},[o("div",{staticClass:"about-zhong"},[o("div",{staticClass:"about-quxiao"},[o("img",{attrs:{src:i("iTwX")},on:{click:function(a){t.back()}}})]),t._v(" "),o("div",{staticClass:"about-ti"},[t._v("关于我们")]),t._v(" "),o("div")])]),t._v(" "),o("div",{staticClass:"about-content"},[o("div",{staticClass:"about-juzhong"},[o("div",{staticClass:"about-logo"},[o("img",{attrs:{src:t.data.correlation_pic?t.baseUrl+t.data.correlation_pic:"../assets/icon_logo.png"}})])]),t._v(" "),o("div",{staticClass:"about-juzhong"},[o("div",{staticClass:"about-huashu"},[t._v(t._s(t.data.correlation_appname))])]),t._v(" "),o("div",{staticClass:"about-juzhong"},[o("div",{staticClass:"about-shuzi"},[t._v(t._s(t.data.correlation_version))])])]),t._v(" "),o("div",{staticClass:"about-footer"})])},staticRenderFns:[]};var n=i("VU/8")(o,s,!1,function(t){i("zChL")},"data-v-0a911c76",null);a.default=n.exports}});
//# sourceMappingURL=33.4b78605afb55ec882202.js.map