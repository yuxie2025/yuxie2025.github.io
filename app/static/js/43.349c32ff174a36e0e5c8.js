webpackJsonp([43],{EbLA:function(s,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("pIRO"),l={name:"LibraryDetail",data:function(){return{history_num:"58",baseData:{name:"广东瑞联科技有限公司",no:"999199",legal_person:"",linkman:"-",phone:"13822270915",address:"中介"},detailData:{speciality:"",intro:"",qualification:""},supportmaterial:[{name:"项目资金的使用情况.doc"},{name:"绩效目标设立情况.doc"},{name:"细化为相应的个性化指标.doc"},{name:"项目实施的人员条件.doc"},{name:"项目实施是否符合相关业务管理规定.doc"},{name:"项目后续运行及成效发挥的可持续影响情况.doc"},{name:"项目资金的使用情况.doc"}],evaluation:{org_name:"广东瑞联科技有限公司",year:"2018",ave_score:"91.33",max_score:"100",min_score:"87",level:"优",star:"5",comprehensive_opinion:"综合考评意见综合考评意见综合考评意见综合考评意见综合考评意见"}}},methods:{look:function(s){Object(i.a)(function(a){a.callHandler("jumpUrl",{url:"/files/po/测试附件.doc",type:"file",name:s.name},function(s){console.log(s)})})},download:function(s){var a=navigator.userAgent,t=a.indexOf("Android")>-1||a.indexOf("Adr")>-1,l=!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);t?window.location.href="http://121.33.250.162:18420/files/tp/广东省财政预算指标库.pdf":l&&Object(i.a)(function(a){a.callHandler("jumpUrl",{url:"http://121.33.250.162:18420/files/tp/广东省财政预算指标库.pdf",type:"file_download",name:s.name},function(s){console.log(s)})})},clickHistory:function(){this.$router.push("/po/HistoryProject")}}},v={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"all"},[t("div",{staticClass:"content"},[t("div",{staticClass:"block"},[t("div",{staticClass:"title"},[s._v("基本信息")]),s._v(" "),t("div",{staticClass:"text"},[t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("机构名称：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.baseData.name))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("机构编码：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.baseData.no))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("法人代表：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.baseData.legal_person))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("联系人：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.baseData.linkman))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("联系电话：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.baseData.phone))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("联系地址：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.baseData.address))])])])]),s._v(" "),t("div",{staticClass:"block"},[t("div",{staticClass:"title"},[s._v("详细信息")]),s._v(" "),t("div",{staticClass:"text"},[t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("机构特长：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.detailData.speciality))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("机构简介：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.detailData.intro))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("机构资质：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.detailData.qualification))])])])]),s._v(" "),t("div",{staticClass:"fileContent"},[t("div",{staticClass:"title"},[s._v("基本信息")]),s._v(" "),t("ul",s._l(s.supportmaterial,function(a){return t("li",[t("span",[s._v(s._s(a.name))]),s._v(" "),t("button",{staticClass:"look",on:{click:function(t){s.look(a)}}},[s._v("预览")]),s._v(" "),t("button",{staticClass:"download",on:{click:function(t){s.download(a)}}},[s._v("下载")])])}))]),s._v(" "),t("div",{staticClass:"block"},[t("div",{staticClass:"title"},[s._v("考评表")]),s._v(" "),t("div",{staticClass:"text"},[t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("机构名称：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.org_name))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("评价年度：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.year))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("平均分：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.ave_score))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("最高分：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.max_score))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("最低分：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.min_score))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("综合评价等级：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.level))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("星级评价：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.star))])]),s._v(" "),t("div",{staticClass:"line"},[t("div",{staticClass:"l1"},[s._v("综合考评意见：")]),s._v(" "),t("div",{staticClass:"l2"},[s._v(s._s(s.evaluation.comprehensive_opinion))])])])]),s._v(" "),t("div",{staticClass:"bottom",on:{click:function(a){s.clickHistory()}}},[t("div",{staticClass:"title"},[s._v("历史评价项目("+s._s(s.history_num)+")")]),s._v(" "),s._m(0)])])])},staticRenderFns:[function(){var s=this.$createElement,a=this._self._c||s;return a("div",{staticClass:"imgdiv"},[a("img",{attrs:{src:t("LGnP"),width:"20px",height:"20px"}})])}]};var e=t("VU/8")(l,v,!1,function(s){t("lOKj")},"data-v-4b59ca34",null);a.default=e.exports},lOKj:function(s,a){}});