webpackJsonp([8],{"9Dho":function(t,a){},W3qd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("1HIy"),r=e("rHil"),l=e("1DHf"),s=e("oWtu"),n=(i.a,r.a,l.a,s.a,Array,Object,{name:"RecordPage",components:{GroupTitle:i.a,Group:r.a,Cell:l.a,Icon:s.a},props:{recordInfoList:{type:[Array,Object],default:function(){return[{paramName:"参数名称参数名称参数名称参数名称参数名称",type:0,displayable:1,text:"文本",image:{imageUrl:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"},link:{linkName:"百度0",linkUrl:"http://www.baidu.com"},textarea:"多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本"},{paramName:"我是图片",type:1,displayable:1,text:"文本",image:{imageUrl:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"},link:{linkName:"百度1",linkUrl:"http://www.baidu.com"},textarea:"多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本"},{paramName:"我是链接",type:2,displayable:1,text:"文本",image:{imageUrl:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"},link:{linkName:"百度2",linkUrl:"http://www.baidu.com"},textarea:"多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本"},{paramName:"我是分组",type:4,displayable:1,text:"分组名称分组名称分组名称分组名称分组名称",image:{imageUrl:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"},link:{linkName:"百度4",linkUrl:"http://www.baidu.com"},textarea:"多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本"},{paramName:"我是多行文本",type:3,displayable:1,text:"文本",image:{imageUrl:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"},link:{linkName:"百度3",linkUrl:"http://www.baidu.com"},textarea:"多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本"},{paramName:"我不存在",type:0,displayable:0,text:"不存在的",image:{imageUrl:"https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"},link:{linkName:"百度5",linkUrl:"http://www.baidu.com"},textarea:"多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本多行文本"}]}}},data:function(){return{showImg:!0}},computed:{},methods:{},filters:{judgeGroup:function(t,a){return 4==a.type?a.text:a.paramName},judgeType:function(t,a){switch(t){case 0:return a.text;case 1:return"";case 2:return a.link.linkName;case 3:return a.textarea;case 4:return a.text}}}}),c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"record-info"},[e("div",{staticClass:"record-base-info"},[e("icon",{staticClass:"icon",attrs:{type:"success","is-msg":""}}),t._v(" "),e("h1",[t._v("维修中")]),t._v(" "),e("h2",[t._v("塔吊日常巡检记录")]),t._v(" "),e("p",{staticClass:"time"},[t._v("2018-06-06 14:34:40")]),t._v(" "),e("p",{staticClass:"user"},[t._v("公开用户")])],1),t._v(" "),e("group",{attrs:{title:"日常巡检内容","label-width":"4.5em","label-margin-right":"2em","label-align":"left",gutter:"0"}},t._l(t.recordInfoList,function(a,i){return 1==a.displayable?e("cell",{key:i,staticClass:"record-info-cell",attrs:{"value-align":"left"}},[e("div",{staticClass:"cell-left"},[e("p",[t._v(t._s(a.paramName))])]),t._v(" "),e("div",{staticClass:"cell-right"},[t._v("\n        "+t._s(t._f("judgeType")(a.type,a))+"\n        "),1==a.type?e("img",{attrs:{src:a.image.imageUrl}}):t._e(),t._v(" "),1==a.type?e("img",{attrs:{src:a.image.imageUrl}}):t._e(),t._v(" "),1==a.type?e("img",{attrs:{src:a.image.imageUrl}}):t._e(),t._v(" "),1==a.type?e("img",{attrs:{src:a.image.imageUrl}}):t._e(),t._v(" "),1==a.type?e("img",{attrs:{src:a.image.imageUrl}}):t._e()])]):t._e()})),t._v(" "),e("group",{attrs:{title:"分组名称","label-width":"4.5em","label-margin-right":"2em","label-align":"left",gutter:"0"}},t._l(t.recordInfoList,function(a,i){return 1==a.displayable?e("cell",{key:i,staticClass:"record-group-cell",attrs:{"value-align":"left"}},[e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-close-empty group-icon",attrs:{type:"ios-close-empty",size:"30",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"}},[e("path",{staticClass:"st0",attrs:{d:"M340.2 160l-84.4 84.3-84-83.9-11.8 11.8 84 83.8-84 83.9 11.8 11.7 84-83.8 84.4 84.2 11.8-11.7-84.4-84.3 84.4-84.2z"}})]),t._v(" "),e("span",[t._v("1 2dddwsd")])]):t._e()})),t._v(" "),e("div",{staticClass:"footer",on:{click:function(a){t.$router.go(-1)}}},[e("svg",{staticClass:"vux-x-icon vux-x-icon-ios-arrow-left footer-icon",attrs:{type:"ios-arrow-left",size:"30",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 512 512"}},[e("path",{attrs:{d:"M352 115.4L331.3 96 160 256l171.3 160 20.7-19.3L201.5 256z"}})]),t._v(" "),e("span",[t._v("返回")])])],1)},staticRenderFns:[]};var g=e("VU/8")(n,c,!1,function(t){e("9Dho")},"data-v-14234c37",null);a.default=g.exports}});