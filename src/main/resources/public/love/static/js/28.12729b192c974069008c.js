webpackJsonp([28],{"9ajb":function(t,s){},mKPe:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("mw3O"),i=e.n(a),n={name:"home",data:function(){return{msg:"",point:"",eqtestid:"1",eqresults_list:"",data:[],url_data:{}}},methods:{back:function(){window.history.back()},go_eqtest:function(){this.$router.push("/eqtest")},eqresults:function(){var t=this,s={eqtestid:t.url_data.id,point:t.url_data.point};t.$http.post("/eqtest/eqresults",i.a.stringify(s),{}).then(function(s){200==s.meta.code&&(t.eqresults_list=s.data)})}},created:function(){this.url_data={id:this.$route.params.id,point:this.$route.params.point,now:this.$route.params.now,total:this.$route.params.total},this.eqresults()},mounted:function(){}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"result-container"},[a("div",{staticClass:"result-header"},[a("div",{staticClass:"result-felx"},[a("div",{staticClass:"result-fanhui"},[a("img",{attrs:{src:e("iTwX")},on:{click:function(s){t.back()}}})]),t._v(" "),a("div",{staticClass:"result-gong"},[t._v("第"+t._s(t.url_data.now)+"题（共"+t._s(t.url_data.total)+"题）")]),t._v(" "),a("div",{staticClass:"result-jieguo"},[t._v("测试结果")])])]),t._v(" "),a("div",{staticClass:"result-content"},t._l(t.eqresults_list,function(s){return a("div",[a("div",{staticClass:"result-daant"},[t._v(t._s(s.eqresult_title))]),t._v(" "),a("div",{staticClass:"result-daan"},[t._v(t._s(s.eqresult_content))])])})),t._v(" "),a("div",{staticClass:"result-footer"},[a("div",{staticClass:"result-tuichu",on:{click:function(s){t.go_eqtest()}}},[t._v("退出")])])])},staticRenderFns:[]};var u=e("VU/8")(n,r,!1,function(t){e("9ajb")},"data-v-73069ec4",null);s.default=u.exports}});
//# sourceMappingURL=28.12729b192c974069008c.js.map