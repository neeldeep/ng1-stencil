import{h}from"../sidedrawercomponent.core.js";var UrlObj={API_KEY:""},SideDrawer=function(){function e(){}return e.prototype.InitCompVariables=function(e){UrlObj.API_KEY=e},e.prototype.render=function(){return h("div",null,h("header",null,h("h1",null," ",this.title)),h("a",{href:UrlObj.API_KEY},"Some External Link"),h("main",null,h("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"uc-side-drawer"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{extLink:{type:String,attr:"ext-link",reflectToAttr:!0,mutable:!0},InitCompVariables:{method:!0},open:{type:Boolean,attr:"open",reflectToAttr:!0},title:{type:String,attr:"title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"div.sc-uc-side-drawer{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background:#f3f3f3;-webkit-transition:left .3s ease-out;transition:left .3s ease-out}[open].sc-uc-side-drawer-h   div.sc-uc-side-drawer{left:0}"},enumerable:!0,configurable:!0}),e}();export{SideDrawer as UcSideDrawer};