import{a as Se}from"./chunk-QSKESES6.js";import{s as De}from"./chunk-B746M63W.js";import{Ka as ke,Q as Re,Sa as B,a as y,b as v,c as $,d as E,e as w,h as P,i as S,j as R,n as Pe}from"./chunk-MNB4ZYY3.js";import{t as C,v as U}from"./chunk-BB7XAQ6R.js";import{b as Ce,c as ye,d as ve,e as $e,g as Ee,i as we,k as O}from"./chunk-JQUAI2LU.js";import{$a as A,Ba as re,Fa as k,Ga as b,Ha as ae,Ia as ne,Ja as se,La as ie,Ma as u,U as K,Ua as L,Vb as W,Wa as d,X as Z,Xa as ce,Y as i,Ya as le,_ as g,_a as I,ab as ue,ba as J,bb as de,bc as Ae,ca as s,db as me,eb as pe,fb as he,ga as N,gb as _,ha as c,hb as ge,ia as X,jb as fe,ka as Y,kb as be,mb as D,pa as ee,qa as te,ta as f,tb as Ie,ub as M,va as oe}from"./chunk-OZSVB7QB.js";import"./chunk-CQCHLVVT.js";var j=(t,e)=>!!JSON.parse(localStorage.getItem("user"));var Ke=[{path:"login",loadChildren:()=>import("./chunk-D452IJV7.js").then(t=>t.LoginModule)},{path:"not-found",loadChildren:()=>import("./chunk-XNH6XTAB.js").then(t=>t.NotFoundModule)},{path:"drink",loadChildren:()=>import("./chunk-X56EZJQB.js").then(t=>t.DrinkModule)},{path:"add",loadChildren:()=>import("./chunk-4HSVDXDX.js").then(t=>t.AddModule),canActivate:[j]},{path:"update/:id",loadChildren:()=>import("./chunk-CQGI3AHP.js").then(t=>t.UpdateModule),canActivate:[j]},{path:"",redirectTo:"/drink",pathMatch:"full"},{path:"**",redirectTo:"/not-found"}],Me=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=c({type:e}),e.\u0275inj=i({imports:[O.forRoot(Ke),O]});let t=e;return t})();var Ze=["*",[["mat-toolbar-row"]]],Je=["*","mat-toolbar-row"],Xe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=X({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let t=e;return t})(),Te=(()=>{let e=class e{constructor(o,a,n){this._elementRef=o,this._platform=a,this._document=n}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};e.\u0275fac=function(a){return new(a||e)(b(oe),b(ke),b(W))},e.\u0275cmp=N({type:e,selectors:[["mat-toolbar"]],contentQueries:function(a,n,l){if(a&1&&ge(l,Xe,5),a&2){let m;fe(m=be())&&(n._toolbarRows=m)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(a,n){a&2&&(le(n.color?"mat-"+n.color:""),ce("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[Ie],ngContentSelectors:Je,decls:2,vars:0,template:function(a,n){a&1&&(he(Ze),_(0),_(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let t=e;return t})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=c({type:e}),e.\u0275inj=i({imports:[B,B]});let t=e;return t})();var et=()=>["/drink"],tt=()=>["/add"],xe=()=>["/login"];function ot(t,e){t&1&&(I(0,"a",1),D(1,"Term\xE9k felv\xE9tele"),A()),t&2&&d("routerLink",M(1,tt))}function rt(t,e){t&1&&(I(0,"a",1),D(1,"Bel\xE9p\xE9s"),A()),t&2&&d("routerLink",M(1,xe))}function at(t,e){if(t&1){let r=de();I(0,"a",3),me("click",function(){ee(r);let a=pe();return te(a.logout())}),D(1,"Kijelentkez\xE9s"),A()}t&2&&d("routerLink",M(1,xe))}var Ne=(()=>{let e=class e{constructor(o){this.authService=o,this.title="italdiszkont"}logout(){this.authService.logout().then(()=>{console.log("logged out successfully.")}).catch(o=>{})}ngOnInit(){this.authService.isUserLoggedIn().subscribe(o=>{this.loggedInUser=o,localStorage.setItem("user",JSON.stringify(this.loggedInUser))},o=>{localStorage.setItem("user",JSON.stringify("null"))})}};e.\u0275fac=function(a){return new(a||e)(b(Se))},e.\u0275cmp=N({type:e,selectors:[["app-root"]],decls:7,vars:5,consts:[["class","navbara",3,"routerLink",4,"ngIf"],[1,"navbara",3,"routerLink"],["class","navbara",3,"routerLink","click",4,"ngIf"],[1,"navbara",3,"click","routerLink"]],template:function(a,n){a&1&&(I(0,"mat-toolbar"),L(1,ot,2,2,"a",0),I(2,"a",1),D(3,"\xC1ruk"),A(),L(4,rt,2,2,"a",0)(5,at,2,2,"a",2),A(),ue(6,"router-outlet")),a&2&&(k(),d("ngIf",n.loggedInUser),k(),d("routerLink",M(4,et)),k(2),d("ngIf",!n.loggedInUser),k(),d("ngIf",n.loggedInUser))},dependencies:[Ae,Ee,we,Te],styles:[".navbara[_ngcontent-%COMP%]{color:#5f9ea0;margin-right:1vh;text-decoration:none}"]});let t=e;return t})();var We="auth",T=class{constructor(e){return e}},h=class{constructor(){return $(We)}};var V=new g("angularfire2.auth-instances");function ao(t,e){let r=v(We,t,e);return r&&new T(r)}function no(t){return(e,r)=>{let o=e.runOutsideAngular(()=>t(r));return new T(o)}}var so={provide:h,deps:[[new s,V]]},io={provide:T,useFactory:ao,deps:[[new s,V],S]},co=(()=>{class t{constructor(){C("angularfire",y.full,"auth")}static \u0275fac=function(o){return new(o||t)};static \u0275mod=c({type:t});static \u0275inj=i({providers:[io,so]})}return t})();function Le(t,...e){return{ngModule:co,providers:[{provide:V,useFactory:no(t),multi:!0,deps:[u,f,w,R,[new s,E],...e]}]}}var _e=P(U,!0);var F=class{constructor(e){return e}},Oe="firestore",z=class{constructor(){return $(Oe)}};var q=new g("angularfire2.firestore-instances");function lo(t,e){let r=v(Oe,t,e);return r&&new F(r)}function uo(t){return(e,r)=>{let o=e.runOutsideAngular(()=>t(r));return new F(o)}}var mo={provide:z,deps:[[new s,q]]},po={provide:F,useFactory:lo,deps:[[new s,q],S]},ho=(()=>{class t{constructor(){C("angularfire",y.full,"fst")}static \u0275fac=function(o){return new(o||t)};static \u0275mod=c({type:t});static \u0275inj=i({providers:[po,mo]})}return t})();function Ue(t,...e){return{ngModule:ho,providers:[{provide:q,useFactory:uo(t),multi:!0,deps:[u,f,w,R,[new s,h],[new s,E],...e]}]}}var Be=P(Re,!0);var x=class{constructor(e){return e}},je="storage",G=class{constructor(){return $(je)}};var Q=new g("angularfire2.storage-instances");function go(t,e){let r=v(je,t,e);return r&&new x(r)}function fo(t){return(e,r)=>{let o=e.runOutsideAngular(()=>t(r));return new x(o)}}var bo={provide:G,deps:[[new s,Q]]},Io={provide:x,useFactory:go,deps:[[new s,Q],S]},Ao=(()=>{class t{constructor(){C("angularfire",y.full,"gcs")}static \u0275fac=function(o){return new(o||t)};static \u0275mod=c({type:t});static \u0275inj=i({providers:[Io,bo]})}return t})();function Ve(t,...e){return{ngModule:Ao,providers:[{provide:Q,useFactory:fo(t),multi:!0,deps:[u,f,w,R,[new s,h],[new s,E],...e]}]}}var ze=P(De,!0);var qe={production:!1,firebase:{apiKey:"AIzaSyDlPdWLxGKRvCDnS77MLXNLoZabKHbQSg8",authDomain:"italdiszkont-afc3a.firebaseapp.com",projectId:"italdiszkont-afc3a",storageBucket:"italdiszkont-afc3a.appspot.com",messagingSenderId:"975238435836",appId:"1:975238435836:web:635ae04264f694253b5879",measurementId:"G-ECPKYTWLDN"}};var Co="@",yo=(()=>{let e=class e{constructor(o,a,n,l,m){this.doc=o,this.delegate=a,this.zone=n,this.animationType=l,this.moduleImpl=m,this._rendererFactoryPromise=null,this.scheduler=J(ne,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-AR2N2JJI.js")).catch(a=>{throw new K(5300,!1)}).then(({\u0275createEngine:a,\u0275AnimationRendererFactory:n})=>{this._engine=a(this.animationType,this.doc,this.scheduler);let l=new n(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(o,a){let n=this.delegate.createRenderer(o,a);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let l=new H(n);return a?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(m=>{let He=m.createRenderer(o,a);l.use(He)}).catch(m=>{l.use(n)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(a){ae()},e.\u0275prov=Z({token:e,factory:e.\u0275fac});let t=e;return t})(),H=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,o,a){this.delegate.insertBefore(e,r,o,a)}removeChild(e,r,o){this.delegate.removeChild(e,r,o)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,o,a){this.delegate.setAttribute(e,r,o,a)}removeAttribute(e,r,o){this.delegate.removeAttribute(e,r,o)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,o,a){this.delegate.setStyle(e,r,o,a)}removeStyle(e,r,o){this.delegate.removeStyle(e,r,o)}setProperty(e,r,o){this.shouldReplay(r)&&this.replay.push(a=>a.setProperty(e,r,o)),this.delegate.setProperty(e,r,o)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,o){return this.shouldReplay(r)&&this.replay.push(a=>a.listen(e,r,o)),this.delegate.listen(e,r,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(Co)}};function Ge(t="animations"){return ie("NgAsyncAnimations"),Y([{provide:se,useFactory:(e,r,o)=>new yo(e,r,o,t),deps:[W,ye,u]},{provide:re,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Qe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=c({type:e,bootstrap:[Ne]}),e.\u0275inj=i({providers:[Ge()],imports:[$e,Me,Ce,Fe,Pe.initializeApp(qe.firebase),Le(()=>_e()),Ue(()=>Be()),Ve(()=>ze())]});let t=e;return t})();ve().bootstrapModule(Qe).catch(t=>console.error(t));
