webpackJsonp([7],{CLyK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("OBKE"),a("wwuN"),a("EJ+h");var o=a("5n83"),d=a("EG6i"),i=a("QXHl"),l=a("VNb4"),u=a("iKMS"),s=a("MK60"),m=a("ZoBU"),n=a("YV6h"),c=a("FkO2"),r=a("3qcA"),v=a("ftIz"),b=a("LadL"),h=a("EzIO"),p=a("D+SN"),O=(o.a,d.a,i.a,n.a,c.a,r.a,l.a,u.a,s.a,m.a,h.a,v.a,b.a,p.a,{name:"ClassifyPage",components:{ModuleAtlas:o.a,ModuleImage:d.a,ModuleImageText:i.a,ModuleFile:n.a,ModuleAudio:c.a,ModuleVideo:r.a,ModuleCard:l.a,ModuleLink:u.a,ModuleContact:s.a,ModuleNavigationInfo:m.a,ModuleProductParameter:h.a,ModuleMaterial:v.a,ModuleClassify:b.a,ModuleRecord:p.a},data:function(){return{templateId:this.$route.query.templateId,templateData:"",componentList:[]}},computed:{moduleVOList:function(){return templateData.moduleVOList}},mounted:function(){var e=this;console.log(this.$route.query.templateId);this.$route.query.templateId;this.$axios.get("../../../static/server/qrcode.json").then(function(t){t?(console.log("请求成功"),console.log(t),e.templateData=t.data,e.afterData()):console.log("请求失败")}).catch(function(e){console.log(e)})},methods:{add:function(e,t){this.componentList.push({component:e,params:t})},afterData:function(){console.log("进入afterData");for(var e=this.templateData.moduleVOList,t=0;t<e.length;t++){var a=e[t];switch(a.moduleType){case 0:this.add("ModuleImage");break;case 1:this.add("ModuleImageText",{displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 2:this.add("ModuleProductParameter",{displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 3:this.add("ModuleFile",{moduleTitle:a.moduleTitle,displayAuthState:a.moduleObject.displayAuthState,fileList:a.moduleObject.fileList});break;case 4:this.add("ModuleAtlas",{displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 5:this.add("ModuleLink",{displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 6:this.add("ModuleCard",{displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 7:this.add("ModuleVideo",{moduleTitle:a.moduleTitle,displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 8:this.add("ModuleAudio",{moduleTitle:a.moduleTitle,displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 9:this.add("ModuleContact",{moduleTitle:a.moduleTitle,image:a.moduleObject.image,navigationType:a.moduleObject.navigationType,navigationList:a.moduleObject.navigationList});break;case 10:this.add("ModuleMaterial",{moduleTitle:a.moduleTitle,displayAuthState:a.moduleObject.displayAuthState,videoName:a.moduleObject.videoName,videoUrl:a.moduleObject.videoUrl});break;case 11:this.add("ModuleClassify",{moduleTitle:a.moduleTitle,image:a.moduleObject.image,navigationType:a.moduleObject.navigationType,navigationList:a.moduleObject.navigationList});break;case 12:this.add("ModuleNavigationInfo",{moduleTitle:a.moduleTitle,image:a.moduleObject.image,navigationType:a.moduleObject.navigationType,navigationList:a.moduleObject.navigationList});break;case 13:this.add("ModuleRecord",{moduleTitle:a.moduleTitle,image:a.moduleObject.image,navigationType:a.moduleObject.navigationType,navigationList:a.moduleObject.navigationList})}}}}}),g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"classifyPage"},this._l(this.componentList,function(e,a){return t(e.component,{key:a,tag:"component",attrs:{params:e.params}})}))},staticRenderFns:[]};var j=a("VU/8")(O,g,!1,function(e){a("KNcM")},"data-v-a8f71214",null);t.default=j.exports},KNcM:function(e,t){}});