webpackJsonp([36],{LZCc:function(t,e){},q7n7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("uIgg"),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[s("ul",{staticClass:"list"},t._l(t.list1,function(e,n){return s("li",{key:n,class:{active:e.showDetail}},[s("div",{staticClass:"info",on:{click:function(s){t.showDetail(e,t.list1)}}},[s("div",{staticClass:"text"},["待下发"==e.type?s("span",{staticClass:"s1"},[t._v(t._s(e.type))]):t._e(),t._v(" "),"待选定机构"==e.type?s("span",{staticClass:"s2"},[t._v(t._s(e.type))]):t._e(),t._v("\n          "+t._s(e.text)+"("+t._s(e.money)+")\n        ")])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showDetail,expression:"item.showDetail"}],staticClass:"details"},[s("button",{directives:[{name:"show",rawName:"v-show",value:"待下发"==e.type,expression:"item.type=='待下发'"}],on:{click:function(s){t.seeDetails(e)}}},[t._v("项目资料")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:"待下发"==e.type,expression:"item.type=='待下发'"}],on:{click:function(s){t.issueProject(e)}}},[t._v("下发")]),t._v(" "),s("button",{directives:[{name:"show",rawName:"v-show",value:"待选定机构"==e.type,expression:"item.type=='待选定机构'"}],on:{click:function(s){t.auditProject(e)}}},[t._v("审核")])])])],1)}))])},staticRenderFns:[]};var a=function(t){s("LZCc")},i=s("VU/8")(n.a,o,!1,a,"data-v-8d3fa5a6",null);e.default=i.exports},uIgg:function(t,e,s){"use strict";(function(t){var n=s("Au9i"),o=(s.n(n),s("pIRO"));e.a={name:"ProjectList",data:function(){return{value:"",searchImg:s("ZaBK"),list1:[{text:"省政协联谊会、委员活动中心活动费",money:"500万元",status:"1",type:"待下发"},{text:"医疗卫生健康事业发展专项资金（食品药品安全）--食品药品监管资金",money:"308万元",status:"1",type:"待下发"},{text:"中央财政保障性安居工程补助资金—租赁补贴",money:"40万元",status:"2",type:"待选定机构"},{text:"财政部提前下达2018年基本药物制度补助资金",money:"250万元",status:"2",type:"待选定机构"},{text:"机关专项补助经费",money:"438万元",status:"2",type:"待选定机构"},{text:"免征矿产资源补偿费收入保障经费",money:"245万元",status:"2",type:"待选定机构"},{text:"医疗卫生健康事业发展专项资金",money:"853万元",status:"2",type:"待选定机构"},{text:"财政部提前下达2018年现代职业教育质量提升计划专项资金",money:"255万元",status:"2",type:"待选定机构"},{text:"技工院校国家助学金",money:"12万元",status:"2",type:"待选定机构"},{text:"事业单位国有资产出租出借收入安排的支出（年初下达部门预算，广东省现代农业装备研究所，公益二类）",money:"45万元",status:"2",type:"待下发"},{text:"大学生村官补助经费",money:"752万元",status:"2",type:"待下发"},{text:"广东省级普法专项经费",money:"12万元",status:"2",type:"待下发"},{text:"精准康复及辅具适配服务补助",money:"202万元",status:"2",type:"待下发"},{text:"少数民族地区少数民族大学生资助资金",money:"421万元",status:"2",type:"待下发"},{text:"晋中市财政局-绩效目标表批量导入-系统演示004",money:"724万元",status:"2",type:"待选定机构"},{text:"宗教界代表人士工作经费",money:"425万元",status:"2",type:"待选定机构"}]}},computed:{},created:function(){var e=this.$route.meta.title;t("#vue-title").html(e);for(var s=0;s<this.list1.length;s++)this.$set(this.list1[s],"showDetail",!1)},mounted:function(){},methods:{auditProject:function(t){Object(o.a)(function(t){t.callHandler("jumpUrl",{url:"/po/poAuditProject"},function(t){console.log(t)})})},issueProject:function(t){var e=this;n.MessageBox.confirm("确定要下发此项目吗？").then(function(s){e.showDetail(t,list)},function(t){})},showDetail:function(t,e){if(t.showDetail)t.showDetail=!t.showDetail;else{for(var s=0;s<e.length;s++)e[s].showDetail=!1;t.showDetail=!t.showDetail}},seeDetails:function(t){Object(o.a)(function(t){t.callHandler("jumpUrl",{url:"/po/poIssuedProject"},function(t){console.log(t)})})},reload:function(t){n.Indicator.open(),setTimeout(function(){n.Indicator.close()},1500)}}}}).call(e,s("7t+N"))}});