(function(t){function e(e){for(var o,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("8589"),n=a.n(o);n.a},5159:function(t,e,a){"use strict";var o=a("e585"),n=a.n(o);n.a},"56a0":function(t,e,a){"use strict";var o=a("bf96"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("a133"),a("ed0d"),a("f09c"),a("e117");var o=a("a593"),n=a("fe4f"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex col-8",attrs:{id:"home"}},[a("div",{staticClass:"col-3 m-3",attrs:{id:"sidebar"}},t._l(t.sidebars,(function(e){return a("div",{key:e.text,staticClass:"btn p-4 m-4 rounded-lg d-flex align-items-center flex-column",class:t.activeItem===e.id?"btn-light":"btn-dark",on:{click:function(a){return t.toPage(e.to)}}},[a("i",{staticClass:"iconfont lg-icon",class:e.icon}),t._v(" "+t._s(e.text)+" ")])})),0),a("div",{staticClass:"col-9 m-3",attrs:{id:"content"}},[a("div",{staticClass:"p-4 bg-light m-4 rounded-lg"},[a("router-view")],1)])])},i=[],s={name:"Home",data:function(){return{sidebars:[{text:"状态",icon:"iconzhuangtai",id:"Status",to:"Status"},{text:"配置",icon:"iconpeizhi",id:"Config",to:"Config"},{text:"重启",icon:"iconstart",to:!1}],activeItem:"Status"}},created:function(){var t=sessionStorage.getItem("loginStatus");0==t&&this.$router.push("")},mounted:function(){var t=this.$route.path;switch(t){case"/home":this.activeItem="Status";break;case"/home/Config":this.activeItem="Config";break}},methods:{toPage:function(t){!1!==t&&(this.activeItem=t),"/home"==this.$route.path?this.$router.push("home/"+t):this.$router.push(t)}}},c=s,l=(a("cead"),a("9ca4")),u=Object(l["a"])(c,r,i,!1,null,"c59152e2",null),d=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light col-7 p-5 d-flex rounded",attrs:{id:"configGuide"}},[t._m(0),a("div",{staticClass:"border m-5"}),a("form",{staticClass:"col ",attrs:{id:"configInfo"}},[t._l(t.configs,(function(e){return a("div",{key:e.text,staticClass:"form-group"},[a("label",{attrs:{for:"config"}},[t._v(t._s(e.text))]),"checkbox"===e.type&&"select"!==e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"config.value"}],staticClass:"form-control form-control-sm",attrs:{id:e,type:"checkbox"},domProps:{checked:Array.isArray(e.value)?t._i(e.value,null)>-1:e.value},on:{change:function(a){var o=e.value,n=a.target,r=!!n.checked;if(Array.isArray(o)){var i=null,s=t._i(o,i);n.checked?s<0&&t.$set(e,"value",o.concat([i])):s>-1&&t.$set(e,"value",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(e,"value",r)}}}):"radio"===e.type&&"select"!==e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"config.value"}],staticClass:"form-control form-control-sm",attrs:{id:e,type:"radio"},domProps:{checked:t._q(e.value,null)},on:{change:function(a){return t.$set(e,"value",null)}}}):"select"!==e.type?a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"config.value"}],staticClass:"form-control form-control-sm",attrs:{id:e,type:e.type},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}}):a("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"config.value"}],staticClass:"form-control form-control-sm",attrs:{id:e},on:{change:function(a){var o=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"value",a.target.multiple?o:o[0])}}},t._l(e.items,(function(e){return a("option",{key:e},[t._v(t._s(e))])})),0)])})),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-secondary rounded-circle p-0 m-0 iconfont iconlogin_loginjump_right m-3",attrs:{type:"button",id:"submit"},on:{click:t.submit}})])],2)])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"display-4 d-flex align-items-center"},[a("h4",{staticClass:"display-4"},[t._v("V2Manager")])])}],g={name:"ConfigGuide",data:function(){return{configs:{V2rayCorePath:{text:"V2rayCore路径",type:"text",value:""},V2rayLogPath:{text:"V2ray日志路径",type:"text",value:""},V2rayLogLevel:{text:"V2ray日志等级",type:"select",items:["Warning","Info","Error","Debug","None"],value:""},ListenPort:{text:"监听端口",type:"text",value:""},Protocol:{text:"协议",type:"select",items:["tcp","mkcp"],value:""},UUID:{text:"UUID",type:"text",value:"",readonly:!0}}}},created:function(){var t=this;this.$ajax.get("/api/getConfig").then((function(e){t.configs.V2rayCorePath.value=e.data.V2rayCorePath,t.configs.V2rayLogPath.value=e.data.V2rayLogPath,t.configs.V2rayLogLevel.value=e.data.V2rayLogLevel,t.configs.ListenPort.value=e.data.ListenPort,t.configs.Protocol.value=e.data.Protocol,t.configs.UUID.value=e.data.UUID}))},methods:{submit:function(){this.$ajax.post("/api/updateConfig",{configs:this.configs}).then((function(t){1===t.data.code?alert("配置已更新"):1==t.data.code&&alert("修改配置失败")})),this.$router.push("home")}}},v=g,m=(a("5159"),Object(l["a"])(v,f,p,!1,null,"003e78bb",null)),h=m.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"display-4 text-light m-5",attrs:{id:"logo"}},[t._v("V2Manager")]),a("form",{staticClass:"mb-5 pb-5 d-flex flex-column",attrs:{id:"info"}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"text-light",attrs:{for:"pwd"}},[t._v("密码/Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.pwd,expression:"pwd"}],staticClass:"form-control",attrs:{id:"pwd",type:"password"},domProps:{value:t.pwd},on:{input:function(e){e.target.composing||(t.pwd=e.target.value)}}})]),a("div",{staticClass:"d-flex justify-content-center"},[a("button",{staticClass:"btn btn-light rounded-circle p-0 m-0 iconfont iconlogin_loginjump_right m-3",attrs:{type:"button",id:"submit"},on:{click:t.login}})])])])},b=[],C={name:"LogIn",data:function(){return{pwd:""}},methods:{login:function(){var t=this;this.$ajax.post("/api/login",{pwd:t.pwd}).then((function(e){0!=e.data.code&&(sessionStorage.setItem("loginStatus",!0),t.$router.push("home"))})).catch((function(t){console.error(t)}))}},created:function(){1==sessionStorage.getItem("loginStatus")&&this.$router.push("home")}},x=C,_=(a("56a0"),Object(l["a"])(x,y,b,!1,null,"5e28ffdc",null)),w=_.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Status"}},[a("div",{staticClass:"alert",class:0==t.StatusCode?"alert-danger":"alert-success"},[t._v(t._s(t.StatusMsg))]),a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.V2rayLog,expression:"V2rayLog"}],staticClass:"form-control",attrs:{rows:"14",disabled:""},domProps:{value:t.V2rayLog},on:{input:function(e){e.target.composing||(t.V2rayLog=e.target.value)}}})])])},V=[],$={name:"Status",created:function(){var t=this;t.$ajax.get("/api/getStatus").then((function(e){var a=e.data;t.StatusCode=a.StatusCode,0==a.StatusCode?t.StatusMsg="已停止":t.StatusMsg="运行中"})),t.$ajax.get("/api/getLog").then((function(e){var a=e.data;t.V2rayLog=a.V2rayLog}))},data:function(){return{StatusCode:0,StatusMsg:"正在运行",V2rayLog:""}}},L=$,S=Object(l["a"])(L,P,V,!1,null,"30fce337",null),j=S.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-3",attrs:{id:"Config"}},[a("h3",[t._v("网卡信息")]),a("table",{staticClass:"table table-borderless"},[a("tbody",t._l(t.configs,(function(e,o){return a("tr",{key:o},[a("th",{attrs:{scope:"row"}},[t._v(t._s(o))]),a("td",[t._v(t._s(e))])])})),0)]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.changeConfig}},[a("i",{staticClass:"iconfont iconchange m-1"}),t._v("修改")])])},I=[],O={name:"Config",data:function(){return{configs:{"V2rayCore路径":"","V2rayLog路径":"","V2rayLog等级":"","监听地址":"","传输协议":"",UUID:""}}},created:function(){var t=this;t.$ajax.get("/api/getConfig").then((function(e){console.log(e.data);var a=e.data;for(var o in a)console.log("i: "+o+", result[i]:"+a[o]),t.configs["V2rayCore路径"]=a["V2rayCorePath"],t.configs["V2rayLog路径"]=a["V2rayLogPath"],t.configs["V2rayLog等级"]=a["V2rayLogLevel"],t.configs["监听地址"]=a["ListenPort"],t.configs["传输协议"]=a["Protocol"],t.configs["UUID"]=a["UUID"];console.log(t.configs)}))},methods:{changeConfig:function(){this.$router.push("/configGuide")}}},U=O,M=Object(l["a"])(U,k,I,!1,null,"7d991678",null),D=M.exports,E=[{path:"/home",name:"home",component:d,children:[{path:"",component:j},{path:"Status",component:j},{path:"Config",component:D}]},{path:"/configGuide",name:"configGuide",component:h},{path:"/",component:w}],N=E,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-dark d-flex justify-content-center align-items-center",attrs:{id:"app"}},[a("router-view")],1)},G=[],T={name:"App",components:{}},z=T,J=(a("034f"),Object(l["a"])(z,A,G,!1,null,null,null)),q=J.exports,H=a("5976"),W=a.n(H);o["a"].prototype.$ajax=W.a,o["a"].config.productionTip=!1,o["a"].config.devtools=!0,o["a"].use(n["a"]);var B=new n["a"]({mode:"history",routes:N});new o["a"]({render:function(t){return t(q)},router:B}).$mount("#app")},8589:function(t,e,a){},"9b23":function(t,e,a){},bf96:function(t,e,a){},cead:function(t,e,a){"use strict";var o=a("9b23"),n=a.n(o);n.a},e585:function(t,e,a){}});
//# sourceMappingURL=app.031fb923.js.map