(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/eXX":function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),i=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),s=u("gIcY"),c=u("Ip0R"),a=u("qXBG"),b=u("414F"),p=function(){function l(l,n,u){this.navCtrl=l,this.toastController=n,this.afAuth=u,this.ingredients=[],this.steps=[],this.inc=0,this.recipeBook=[],this.recipeCheckMarked=!1,this.testinc=[],this.recipeToDisplay=b.b.getRecipeToDisplay,this.recipeTitle=this.recipeToDisplay.getRecipeTitle,this.servingSize=this.recipeToDisplay.getNumServings,this.prepTime=this.recipeToDisplay.getPrepTime,this.macros=this.recipeToDisplay.getMacros,this.setupIngredientsList(),this.setupStepsList(),this.macroString=this.getMacroString();var e=this.isRecipeBookmarked();this.recipeCheckMarked=e}return l.prototype.bookmarkClick=function(){this.presentToast(),this.bookmarkRecipe()},l.prototype.presentToast=function(){return l=this,void 0,u=function(){return function(l,n){var u,e,t,i,o={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,e&&(t=2&i[0]?e.return:i[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,i[1])).done)return t;switch(e=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,e=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(t=(t=o.trys).length>0&&t[t.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){o.label=i[1];break}if(6===i[0]&&o.label<t[1]){o.label=t[1],t=i;break}if(t&&o.label<t[2]){o.label=t[2],o.ops.push(i);break}t[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(l,o)}catch(r){i=[6,r],e=0}finally{u=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}}(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:"Recipe Bookmarked",duration:1500})];case 1:return l.sent().present(),[2]}})},new((n=void 0)||(n=Promise))(function(e,t){function i(l){try{r(u.next(l))}catch(n){t(n)}}function o(l){try{r(u.throw(l))}catch(n){t(n)}}function r(l){l.done?e(l.value):new n(function(n){n(l.value)}).then(i,o)}r((u=u.apply(l,[])).next())});var l,n,u},l.prototype.bookmarkRecipe=function(){this.recipeBook=JSON.parse(localStorage.getItem(this.afAuth.user.email)),console.log(this.recipeBook),null!==this.recipeBook?(this.recipeBook.push(this.recipeToDisplay),localStorage.setItem(this.afAuth.user.email,JSON.stringify(this.recipeBook))):localStorage.setItem(this.afAuth.user.email,JSON.stringify(Array(this.recipeToDisplay)));var l=this.isRecipeBookmarked();this.recipeCheckMarked=l},l.prototype.isRecipeBookmarked=function(){if(this.recipeBook=JSON.parse(localStorage.getItem(this.afAuth.user.email)),null!==this.recipeBook)for(var l=0;l<this.recipeBook.length;l++)this.recipeToDisplay.getRecipeTitle===this.recipeBook[l].title&&(this.recipeCheckMarked=!0);return this.recipeCheckMarked},l.prototype.setupIngredientsList=function(){for(var l=0;l<this.recipeToDisplay.getIngredients.length;l++)this.ingredients.push({name:this.recipeToDisplay.getIngredients[l]})},l.prototype.setupStepsList=function(){for(var l=0;l<this.recipeToDisplay.getSteps.length;l++)this.steps.push({str:this.recipeToDisplay.getSteps[l]})},l.prototype.stringifyMacro=function(l){return l===b.a.Carbohydrates?"Carbohydrates":l===b.a.Fat?"Fats":"Protein"},l.prototype.getMacroString=function(){for(var l="",n=0;n<this.macros.length;n++)l+=this.stringifyMacro(this.macros[n]),n<this.macros.length-1&&(l+=", ");return l},l.prototype.ngOnInit=function(){},l}(),h=e.nb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh}"]],data:{}});function k(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,11,"ion-item",[],null,null,null,o.bb,o.s)),e.ob(1,49152,null,0,r.H,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,2,"ion-label",[["text-wrap",""]],null,null,null,o.cb,o.w)),e.ob(3,49152,null,0,r.N,[e.h,e.k],null,null),(l()(),e.Eb(4,0,["",""])),(l()(),e.pb(5,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.zb(l,6)._handleBlurEvent()&&t),"ionChange"===n&&(t=!1!==e.zb(l,6)._handleIonChange(u.target.checked)&&t),"ngModelChange"===n&&(t=!1!==(l.context.$implicit.isChecked=u)&&t),t},o.Q,o.k)),e.ob(6,16384,null,0,r.c,[e.k],null,null),e.Bb(1024,null,s.c,function(l){return[l]},[r.c]),e.ob(8,671744,null,0,s.h,[[8,null],[8,null],[8,null],[6,s.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Bb(2048,null,s.d,null,[s.h]),e.ob(10,16384,null,0,s.e,[[4,s.d]],null,null),e.ob(11,49152,null,0,r.r,[e.h,e.k],null,null)],function(l,n){l(n,8,0,n.context.$implicit.isChecked)},function(l,n){l(n,4,0,n.context.$implicit.name),l(n,5,0,e.zb(n,10).ngClassUntouched,e.zb(n,10).ngClassTouched,e.zb(n,10).ngClassPristine,e.zb(n,10).ngClassDirty,e.zb(n,10).ngClassValid,e.zb(n,10).ngClassInvalid,e.zb(n,10).ngClassPending)})}function d(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,2,"ion-item",[],null,null,null,o.bb,o.s)),e.ob(1,49152,null,0,r.H,[e.h,e.k],null,null),(l()(),e.Eb(2,0,[" "," "]))],null,function(l,n){l(n,2,0,n.context.$implicit.str)})}function g(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,17,"ion-header",[],null,null,null,o.U,o.o)),e.ob(1,49152,null,0,r.B,[e.h,e.k],null,null),(l()(),e.pb(2,0,null,0,15,"ion-toolbar",[],null,null,null,o.lb,o.F)),e.ob(3,49152,null,0,r.Bb,[e.h,e.k],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.K,o.e)),e.ob(5,49152,null,0,r.l,[e.h,e.k],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.zb(l,8).onClick(u)&&t),t},o.I,o.c)),e.ob(7,49152,null,0,r.g,[e.h,e.k],null,null),e.ob(8,16384,null,0,r.h,[[2,r.hb],r.Hb],null,null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,o.kb,o.E)),e.ob(10,49152,null,0,r.zb,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Details"])),(l()(),e.pb(12,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,o.K,o.e)),e.ob(13,49152,null,0,r.l,[e.h,e.k],null,null),(l()(),e.pb(14,0,null,0,3,"ion-button",[["fill","outline"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.bookmarkClick()&&e),e},o.J,o.d)),e.ob(15,49152,null,0,r.k,[e.h,e.k],{disabled:[0,"disabled"],fill:[1,"fill"]},null),(l()(),e.pb(16,0,null,0,1,"ion-icon",[["name","bookmark"]],null,null,null,o.V,o.p)),e.ob(17,49152,null,0,r.C,[e.h,e.k],{name:[0,"name"]},null),(l()(),e.pb(18,0,null,null,55,"ion-content",[],null,null,null,o.S,o.m)),e.ob(19,49152,null,0,r.u,[e.h,e.k],null,null),(l()(),e.pb(20,0,null,0,7,"ion-card",[],null,null,null,o.P,o.f)),e.ob(21,49152,null,0,r.m,[e.h,e.k],null,null),(l()(),e.pb(22,0,null,0,5,"ion-card-header",[],null,null,null,o.M,o.h)),e.ob(23,49152,null,0,r.o,[e.h,e.k],null,null),(l()(),e.pb(24,0,null,0,2,"ion-card-title",[],null,null,null,o.O,o.j)),e.ob(25,49152,null,0,r.q,[e.h,e.k],null,null),(l()(),e.Eb(26,0,["",""])),(l()(),e.Eb(27,0,[" "," "])),(l()(),e.pb(28,0,null,0,9,"ion-card",[],null,null,null,o.P,o.f)),e.ob(29,49152,null,0,r.m,[e.h,e.k],null,null),(l()(),e.pb(30,0,null,0,7,"ion-card-header",[],null,null,null,o.M,o.h)),e.ob(31,49152,null,0,r.o,[e.h,e.k],null,null),(l()(),e.pb(32,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.N,o.i)),e.ob(33,49152,null,0,r.p,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Serving Size (People)"])),(l()(),e.pb(35,0,null,0,2,"ion-card-title",[],null,null,null,o.O,o.j)),e.ob(36,49152,null,0,r.q,[e.h,e.k],null,null),(l()(),e.Eb(37,0,["",""])),(l()(),e.pb(38,0,null,0,9,"ion-card",[],null,null,null,o.P,o.f)),e.ob(39,49152,null,0,r.m,[e.h,e.k],null,null),(l()(),e.pb(40,0,null,0,7,"ion-card-header",[],null,null,null,o.M,o.h)),e.ob(41,49152,null,0,r.o,[e.h,e.k],null,null),(l()(),e.pb(42,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.N,o.i)),e.ob(43,49152,null,0,r.p,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Prep Time"])),(l()(),e.pb(45,0,null,0,2,"ion-card-title",[],null,null,null,o.O,o.j)),e.ob(46,49152,null,0,r.q,[e.h,e.k],null,null),(l()(),e.Eb(47,0,["",""])),(l()(),e.pb(48,0,null,0,12,"ion-card",[],null,null,null,o.P,o.f)),e.ob(49,49152,null,0,r.m,[e.h,e.k],null,null),(l()(),e.pb(50,0,null,0,4,"ion-card-header",[],null,null,null,o.M,o.h)),e.ob(51,49152,null,0,r.o,[e.h,e.k],null,null),(l()(),e.pb(52,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.N,o.i)),e.ob(53,49152,null,0,r.p,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Ingredients"])),(l()(),e.pb(55,0,null,0,5,"ion-card-content",[],null,null,null,o.L,o.g)),e.ob(56,49152,null,0,r.n,[e.h,e.k],null,null),(l()(),e.pb(57,0,null,0,3,"ion-list",[],null,null,null,o.db,o.x)),e.ob(58,49152,null,0,r.O,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,k)),e.ob(60,278528,null,0,c.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(61,0,null,0,12,"ion-card",[],null,null,null,o.P,o.f)),e.ob(62,49152,null,0,r.m,[e.h,e.k],null,null),(l()(),e.pb(63,0,null,0,4,"ion-card-header",[],null,null,null,o.M,o.h)),e.ob(64,49152,null,0,r.o,[e.h,e.k],null,null),(l()(),e.pb(65,0,null,0,2,"ion-card-subtitle",[],null,null,null,o.N,o.i)),e.ob(66,49152,null,0,r.p,[e.h,e.k],null,null),(l()(),e.Eb(-1,0,["Steps"])),(l()(),e.pb(68,0,null,0,5,"ion-card-content",[],null,null,null,o.L,o.g)),e.ob(69,49152,null,0,r.n,[e.h,e.k],null,null),(l()(),e.pb(70,0,null,0,3,"ion-list",[],null,null,null,o.db,o.x)),e.ob(71,49152,null,0,r.O,[e.h,e.k],null,null),(l()(),e.gb(16777216,null,0,1,null,d)),e.ob(73,278528,null,0,c.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,15,0,e.rb(1,"",u.recipeCheckMarked,""),"outline"),l(n,17,0,"bookmark"),l(n,60,0,u.ingredients),l(n,73,0,u.steps)},function(l,n){var u=n.component;l(n,26,0,u.recipeTitle),l(n,27,0,u.macroString),l(n,37,0,u.servingSize),l(n,47,0,u.prepTime)})}function f(l){return e.Fb(0,[(l()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,g,h)),e.ob(1,114688,null,0,p,[r.Hb,r.Mb,a.a],null,null)],function(l,n){l(n,1,0)},null)}var m=e.lb("app-home",p,f,{},{},[]),y=u("ZYCi");u.d(n,"RecipeDetailsPageModuleNgFactory",function(){return v});var v=e.mb(t,[],function(l){return e.wb([e.xb(512,e.j,e.bb,[[8,[i.a,m]],[3,e.j],e.x]),e.xb(4608,c.j,c.i,[e.u,[2,c.p]]),e.xb(4608,s.k,s.k,[]),e.xb(4608,r.b,r.b,[e.z,e.g]),e.xb(4608,r.Gb,r.Gb,[r.b,e.j,e.q,c.c]),e.xb(4608,r.Jb,r.Jb,[r.b,e.j,e.q,c.c]),e.xb(1073742336,c.b,c.b,[]),e.xb(1073742336,s.i,s.i,[]),e.xb(1073742336,s.b,s.b,[]),e.xb(1073742336,r.Db,r.Db,[]),e.xb(1073742336,y.p,y.p,[[2,y.v],[2,y.m]]),e.xb(1073742336,t,t,[]),e.xb(1024,y.k,function(){return[[{path:"",component:p}]]},[])])})}}]);