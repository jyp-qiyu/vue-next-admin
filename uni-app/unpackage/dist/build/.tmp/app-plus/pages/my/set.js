(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/set"],{4761:function(t,e,n){"use strict";n.r(e);var a=n("7a54"),i=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);e["default"]=i.a},"7a54":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(n("b663")),i=n("2f62");function s(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var r={components:{setList:a.default},data:function(){return{setListData:[{title:"资料修改",path:"/pages/my/set/my-info-update"},{title:"修改密码",path:"/pages/my/set/password"},{title:"手机号绑定",path:"/pages/my/set/phone"},{title:"昵称修改",path:"/pages/my/set/nickname"}],isShow:""}},methods:o({},(0,i.mapActions)(["setUserInfo"]),{navigateGoTo:function(e){t.navigateTo({url:e})},singOut:function(){var e=this;t.showModal({title:"提示",content:"是否退出登录？",success:function(n){if(n.confirm){var a={photo:"../../static/my/logo.png",name:"去登录",isRenz:"未认证",badge:10};e.setUserInfo(a),t.navigateBack({delta:1})}else n.cancel&&console.log("用户点击取消")}})},goToSignIn:function(){this.navigateGoTo("/pages/my/login/sign-in")}}),onLoad:function(t){this.isShow=t.title}};e.default=r}).call(this,n("649d")["default"])},"992e":function(t,e,n){"use strict";n.r(e);var a=n("ec3c"),i=n("4761");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("d018");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},c3f6:function(t,e,n){"use strict";n("d005");var a=s(n("b0ce")),i=s(n("992e"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},d018:function(t,e,n){"use strict";var a=n("fd53"),i=n.n(a);i.a},ec3c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",["去登录"!=t.isShow?n("view",[n("setList",{attrs:{"sel-data":t.setListData,mpcomid:"d0ab4af4-0"}}),n("view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("button",{staticClass:"btn-color",attrs:{type:"primary",eventid:"d0ab4af4-0"},on:{click:t.singOut}},[t._v("退出登录")])],1)],1):n("view",[t._m(0),t._m(1),n("view",{staticClass:"btn"},[n("text",{staticClass:"btn-msg",attrs:{eventid:"d0ab4af4-1"},on:{click:t.goToSignIn}},[t._v("去登录")])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"phone"},[n("image",{staticClass:"img",attrs:{src:"../../../static/my/phone.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"text"},[n("text",{staticClass:"txt color"},[t._v("您还未登录，登录查看更多功能")])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},fd53:function(t,e,n){}},[["c3f6","common/runtime","common/vendor"]]]);