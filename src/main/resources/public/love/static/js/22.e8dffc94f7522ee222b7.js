webpackJsonp([22],{GmBz:function(e,t){},ipVl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mw3O"),c=a.n(n),i={name:"home",data:function(){return{msg:"",data:{},content:"",downIcon:!1,phone:""}},methods:{collect:function(){this.downIcon=!this.downIcon},back:function(){window.history.back()},crt_feedback:function(){var e=this,t={content:e.content,phone:e.phone};e.$http.post("/help/crt_feedback",c.a.stringify(t),{}).then(function(t){200==t.meta.code?(e.content="",e.phone="",e.$alert(t.meta.msg,"提示")):e.$alert(t.meta.msg,"提示")})}},created:function(){},mounted:function(){}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feedback-container"},[n("div",{staticClass:"feedback-header"},[n("div",{staticClass:"feedback-zhong"},[n("div",{staticClass:"feedback-fanhui"},[n("img",{attrs:{src:a("iTwX")},on:{click:function(t){e.back()}}})]),e._v(" "),n("div",{staticClass:"feedback-ti"},[e._v("意见反馈")]),e._v(" "),n("div")])]),e._v(" "),n("div",{staticClass:"feedback-content"},[n("div",{staticClass:"feedback-biaoti"},[e._v("请填写联系方式(选填)")]),e._v(" "),n("div",{staticClass:"feedback-kuang"},[n("div",{staticClass:"feedback-zi"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"feedback-biaoti"},[e._v("请填写意见反馈内容")]),e._v(" "),n("div",{staticClass:"feedback-kuang1"},[n("div",{staticClass:"feedback-wenzi"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})])]),e._v(" "),n("div",{staticClass:"feedback-tijiao",on:{click:function(t){e.crt_feedback()}}},[e._v("提交")])])])},staticRenderFns:[]};var s=a("VU/8")(i,o,!1,function(e){a("GmBz")},"data-v-9389a194",null);t.default=s.exports}});
//# sourceMappingURL=22.e8dffc94f7522ee222b7.js.map