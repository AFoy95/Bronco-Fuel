(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/xiO":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),b=u("ZZ/e"),r=u("gIcY"),a=u("Ip0R"),c=u("iqUP"),s=function(){function l(l){var n=this;this.navCtrl=l,this.foodDB=c.database().ref("foodSheet/"),this.foodDB.on("value",function(l){var u=[];l.forEach(function(l){return u.push(l.val()),!1}),n.foodList=u}),this.foodList.shift(),this.loadedFoodList=this.foodList}return l.prototype.foodListClick=function(){this.navCtrl.navigateForward("foodlist")},l.prototype.initializeFoodList=function(){this.foodList=this.loadedFoodList},l.prototype.getFoodItems=function(l){var n=this,u=l.srcElement.value;this.initializeFoodList(),u&&(this.foodList=this.foodList.filter(function(l){if(l&&u)return(l[0].indexOf(u)>-1||l[0].toLowerCase().indexOf(u)>-1)&&(n.componentFoodItem=u,!0)}))},l}(),h=o.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh}ion-label[_ngcontent-%COMP%]{font-weight:700}"]],data:{}});function d(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,5,"ion-item",[],null,null,null,e.bb,e.s)),o.ob(1,49152,null,0,b.H,[o.h,o.k],null,null),(l()(),o.Eb(2,0,[" "," "])),(l()(),o.pb(3,0,null,0,2,"ion-label",[["item-right",""],["text-right",""]],null,null,null,e.cb,e.w)),o.ob(4,49152,null,0,b.N,[o.h,o.k],null,null),(l()(),o.Eb(5,0,["",""]))],null,function(l,n){l(n,2,0,n.context.$implicit[0]),l(n,5,0,n.context.$implicit[1])})}function p(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,10,"ion-header",[],null,null,null,e.U,e.o)),o.ob(1,49152,null,0,b.B,[o.h,o.k],null,null),(l()(),o.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,e.lb,e.F)),o.ob(3,49152,null,0,b.Bb,[o.h,o.k],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,e.K,e.e)),o.ob(5,49152,null,0,b.l,[o.h,o.k],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,e.eb,e.z)),o.ob(7,49152,null,0,b.R,[o.h,o.k],null,null),(l()(),o.pb(8,0,null,0,2,"ion-title",[],null,null,null,e.kb,e.E)),o.ob(9,49152,null,0,b.zb,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,[" Food Items "])),(l()(),o.pb(11,0,null,null,11,"ion-content",[],null,null,null,e.S,e.m)),o.ob(12,49152,null,0,b.u,[o.h,o.k],null,null),(l()(),o.pb(13,0,null,0,9,"ion-card",[],null,null,null,e.P,e.f)),o.ob(14,49152,null,0,b.m,[o.h,o.k],null,null),(l()(),o.pb(15,0,null,0,3,"ion-searchbar",[["animated",""],["debounce","500"],["name","search"],["placeholder","Search Here"]],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==o.zb(l,18)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==o.zb(l,18)._handleInputEvent(u.target.value)&&t),"ionInput"===n&&(t=!1!==i.getFoodItems(u)&&t),t},e.ib,e.C)),o.Bb(5120,null,r.c,function(l){return[l]},[b.Lb]),o.ob(17,49152,null,0,b.jb,[o.h,o.k],{animated:[0,"animated"],debounce:[1,"debounce"],placeholder:[2,"placeholder"]},null),o.ob(18,16384,null,0,b.Lb,[o.k],null,null),(l()(),o.pb(19,0,null,0,3,"ion-list",[],null,null,null,e.db,e.x)),o.ob(20,49152,null,0,b.O,[o.h,o.k],null,null),(l()(),o.gb(16777216,null,0,1,null,d)),o.ob(22,278528,null,0,a.h,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,17,0,"","500","Search Here"),l(n,22,0,u.foodList)},null)}function f(l){return o.Fb(0,[(l()(),o.pb(0,0,null,null,1,"app-list",[],null,null,null,p,h)),o.ob(1,49152,null,0,s,[b.Hb],null,null)],null,null)}var m=o.lb("app-list",s,f,{},{},[]),x=u("ZYCi");u.d(n,"BrowsePageModuleNgFactory",function(){return g});var g=o.mb(t,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[i.a,m]],[3,o.j],o.x]),o.xb(4608,a.j,a.i,[o.u,[2,a.p]]),o.xb(4608,r.k,r.k,[]),o.xb(4608,b.b,b.b,[o.z,o.g]),o.xb(4608,b.Gb,b.Gb,[b.b,o.j,o.q,a.c]),o.xb(4608,b.Jb,b.Jb,[b.b,o.j,o.q,a.c]),o.xb(1073742336,a.b,a.b,[]),o.xb(1073742336,r.i,r.i,[]),o.xb(1073742336,r.b,r.b,[]),o.xb(1073742336,b.Db,b.Db,[]),o.xb(1073742336,x.p,x.p,[[2,x.v],[2,x.m]]),o.xb(1073742336,t,t,[]),o.xb(1024,x.k,function(){return[[{path:"",component:s}]]},[])])})}}]);