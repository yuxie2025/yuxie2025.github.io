webpackJsonp([11],{"/Rto":function(t,s,e){"use strict";(function(t){var a=e("Au9i"),i=(e.n(a),e("IJDO")),o=e.n(i),n=e("0+L1"),c=e.n(n),r=e("pIRO");s.a={name:"ProjectProDetail",data:function(){return{isClickSlide:!1,arrow_img:c.a,data:{prj_name:"",app_type:"专项预算项目支出",charge_name:"王国国",unit_name:"省民政厅政务中心",unitno:"156006",office_code:"09",amt:"200.00",prj_attribute:"新建项目",prjtype_id:"6FB3C15B2D8775DAE055000000000001",whether_routine:"一次性项目",project_pro:[{status:1,pro_name:"分派",pro_time:"2018-10-09 13:21",pro_tips:"将项目分派给恒效",pro_expertList:[]},{status:1,pro_name:"派送资料",pro_time:"2018-10-10 13:21",pro_tips:"项目已发送",pro_expertList:[]},{status:1,pro_name:"审核专家",pro_time:"2018-10-11 13:21",pro_tips:"专家组已通过审核",pro_expertList:[]},{status:2,pro_name:"专家评审",pro_time:"2018-10-20 13:21",pro_tips:"等待专家评审",pro_expertList:[{expert:"张三",expert_time:"2018-10-20 13:21",pro_status:"1"},{expert:"李四",expert_time:"2018-10-22 13:21",pro_status:"0"}]},{status:0,pro_name:"意见汇总",pro_time:"2018-10-02 13:21",pro_tips:"",pro_expertList:[]},{status:0,pro_name:"结束",pro_time:"2018-10-02 13:21",pro_tips:"",pro_expertList:[]}]}}},created:function(){var s=this.$route.meta.title;t("#vue-title").html(s)},mounted:function(){this.data.prj_name=this.$route.params.project_name},methods:{clickArrow:function(){this.isClickSlide=!this.isClickSlide,this.arrow_img=this.isClickSlide?o.a:c.a},clickExpertStatus:function(t){Object(a.Toast)({message:1==t.pro_status?"查看":"催办",position:"center",duration:1e3})},clickUrgent:function(){a.MessageBox.confirm("已经催办该项目,是否分享通知？").then(function(t){Object(r.a)(function(t){t.callHandler("jumpNative",{name:"shareText",content:"需要分享的文本"},function(t){console.log(t)})})},function(t){})},clickDialogue:function(){Object(r.a)(function(t){t.callHandler("jumpNative",{name:"nativeChat"},function(t){console.log(t)})})},clickNotice:function(){this.$router.push({name:"TpMessageDetails",params:{}})},toProjectDetails:function(){this.$router.push("projectdetails")}}}}).call(s,e("7t+N"))},"0+L1":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABmklEQVRYR+3UTatNYRjG8d8pSVJKmRlIkokJRd4jR+d0ZKB8A9+MTyAvieRdFBOTkwwMxEApkiRKl+6l1e5sa+29z+kYrDVbrfU81//53/dzz1nnZ26d8w0Ag4HBwH9l4Cx+4u4az4YFfMGT5LQNXMZFnMGjNYI4jRu4gkujABtwDceRH5+tMsQx3MEtXMCvUYC8b8RVHC0TqwWR8AQ/xLkq9Z/zrdSEgbiJgziJlzOaOFR9lfDz+NHeb9wt2ITrOFDlmBZiP+7jORZHw8cZaAADcRv7qi9eTWgi4blRL7CE7yut75oDm2uTPTiC5Z4QgY7yQM+PC+8y0GRtqe7dhRM9IBIe7a+rfN/+Bd1loA3xADvKxJsxm+6tAZPwzJOvXcb6AmSfraV1e/XEKMTuCn9XpjrD+5agfYhtuIdAHMbb+pjw1PwDTuFz18mb75MYaNYE4jHSG4HIBH2Kj2Wmd/g0BhqIGEhP5KoGILozPT/1PfksBtoQMZGZntsRAxM/05SgHbKzptv7iZNrwawA0+b+XTcADAYGA78BWb5GIQKAWGAAAAAASUVORK5CYII="},IJDO:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVRYR+3UvS6FMQAG4OesNotYRGIxuAETibgJFgZhsOEqGG1sJrMr8BcrFyCRMBgsIhYmaaKJSM/52jrJiaTf2q95n7796Rnx1xtxvgZoDbQG/n0D81jAfu178pcGpnGLcazgtAZRC5jBJV5whzWs1iBqACH8Bs9YxBuOsFGDKAXE8Ecsf4fH5iNiHSe521ECmMUFQvgS3hMhh9hGNiIXEMKv8TAgPHqKEDmAkvBiRBegJrwIMQgwh/PM2vuduQPsYgvHqZ/6AUL4Fe4z9rzrwAfEHjZTiBRgmOER1xeRApxhcggr/91MQOxgDB9xMAWYwCs+u7qtGJ/C0895XbegIqNsSgO0BloDrYEvWWo7IWwe64IAAAAASUVORK5CYII="},gbL2:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("/Rto"),i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"all"},[e("div",{staticClass:"content_top_div"},[e("div",{staticClass:"projectoverview"},[t._m(0),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("项目名称：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.prj_name))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("资金类别：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.app_type))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("项目负责人：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.charge_name))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("申报单位：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.unit_name))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isClickSlide,expression:"isClickSlide"}],staticClass:"projectoverview_slide"},[e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("申报单位代码：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.unitno))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("财政主管处室：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.office_code))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("项目金额(万元)：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.amt))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("管理类别：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.prj_attribute))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("项目类别：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.prjtype_id))])]),t._v(" "),e("div",{staticClass:"projectcontent"},[e("span",{staticClass:"projectcontent_name"},[t._v("特征类别：")]),t._v(" "),e("span",{staticClass:"projectcontent_content"},[t._v(t._s(t.data.whether_routine))])]),t._v(" "),e("div",{staticClass:"more"},[e("span",{on:{click:function(s){t.toProjectDetails()}}},[t._v("查看全部项目资料")])])])]),t._v(" "),e("div",{staticClass:"project_arrow",on:{click:function(s){t.clickArrow()}}},[e("img",{attrs:{src:t.arrow_img}})]),t._v(" "),e("div",{staticClass:"projectpro"},[e("div",{staticClass:"projectpro_div"},t._l(t.data.project_pro,function(s,a){return e("div",{staticClass:"projectpro_item"},[e("div",{staticClass:"projectpro_item_view"},[e("div",{staticClass:"projectpro_item_left",class:{projectpro_item_left_bg:0==a,status_bg2:2==s.status,status_bg3:0==s.status}}),t._v(" "),e("div",{staticClass:"projectpro_item_right",class:{projectpro_item_left_bg:a==t.data.project_pro.length-1,status_bg3:2==s.status,status_bg4:0==s.status,status_bg2:1==s.status}}),t._v(" "),e("div",{staticClass:"projectpro_item_circle",class:{status_bg2:1==s.status,status_bg1:2==s.status,status_bg3:0==s.status}})]),t._v(" "),e("span",[t._v(t._s(s.pro_name))])])})),t._v(" "),e("div",t._l(t.data.project_pro,function(s,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:0!=s.status,expression:"item.status != 0"}],staticClass:"projectpro_item_content"},[e("div",{staticClass:"projectpro_item_list"},[e("div",{staticClass:"projectpro_item_list_top"},[e("span",{class:{projectpro_item_left_bg:0==a}})]),t._v(" "),e("div",{staticClass:"projectpro_item_list_middle"},[e("span",{class:{item_list_status_bg:2==s.status}})]),t._v(" "),e("div",{staticClass:"projectpro_item_list_bottom"},[e("span",{class:{projectpro_item_left_bg:2==s.status}})])]),t._v(" "),e("div",{staticClass:"projectpro_content"},[e("div",{staticClass:"projectpro_content_name"},[e("span",[t._v(t._s(s.pro_tips))])]),t._v(" "),t._l(s.pro_expertList,function(a){return e("div",{directives:[{name:"show",rawName:"v-show",value:s.pro_expertList.length>0,expression:"item.pro_expertList.length > 0"}],staticClass:"projectpro_exper_content"},[e("span",{staticClass:"projectpro_exper_name"},[t._v(t._s(a.expert)+t._s(1==a.pro_status?"已评审":"未评审"))]),t._v(" "),e("span",{staticClass:"projectpro_exper_time"},[t._v(t._s(a.expert_time))]),t._v(" "),e("span",{staticClass:"projectpro_exper_status",on:{click:function(s){s.stopPropagation(),t.clickExpertStatus(a)}}},[t._v(t._s(1==a.pro_status?"查看":"催办"))])])}),t._v(" "),e("div",{staticClass:"projectpro_content_time"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.pro_expertList.length<=0,expression:"item.pro_expertList.length <= 0"}]},[t._v(t._s(s.pro_time))])])],2)])}))])]),t._v(" "),e("div",{staticClass:"foot"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"foot_content"},[e("div",{staticClass:"foot_content_notice",on:{click:function(s){s.stopPropagation(),t.clickUrgent()}}},[e("span",[t._v("催办")])]),t._v(" "),e("div",{staticStyle:{width:"1px","background-color":"#f1f1f1","margin-top":"0","margin-bottom":"0"}}),t._v(" "),e("div",{staticClass:"foot_content_notice",on:{click:function(s){s.stopPropagation(),t.clickDialogue()}}},[e("span",[t._v("对话")])]),t._v(" "),e("div",{staticStyle:{width:"1px","background-color":"#f1f1f1","margin-top":"0","margin-bottom":"0"}}),t._v(" "),e("div",{staticClass:"foot_content_notice",on:{click:function(s){s.stopPropagation(),t.clickNotice()}}},[t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"projecttip"},[s("div",{staticClass:"topline"}),this._v(" "),s("span",[this._v("项目概况")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",[this._v("通知"),s("b",[this._v("6")])])}]};var o=function(t){e("umHL")},n=e("VU/8")(a.a,i,!1,o,"data-v-6564f03c",null);s.default=n.exports},umHL:function(t,s){}});