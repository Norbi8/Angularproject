import{b as ge,d as be,h as Re,k as U,l as Te,o as ke,p as we,q as ye,r as Ee,t as te}from"./chunk-BB7XAQ6R.js";import{f as H}from"./chunk-CQCHLVVT.js";var Ce="firebasestorage.googleapis.com",ve="storageBucket",Je=2*60*1e3,Qe=10*60*1e3,et=1e3;var d=class t extends Re{constructor(e,n,s=0){super(ne(e),`Firebase Storage: ${n} (${ne(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,t.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ne(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}},h=function(t){return t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment",t}(h||{});function ne(t){return"storage/"+t}function de(){let t="An unknown error occurred, please check the error payload for server response.";return new d(h.UNKNOWN,t)}function tt(t){return new d(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nt(t){return new d(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function st(){let t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(h.UNAUTHENTICATED,t)}function rt(){return new d(h.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ot(t){return new d(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function De(){return new d(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Le(){return new d(h.CANCELED,"User canceled the upload/download.")}function it(t){return new d(h.INVALID_URL,"Invalid URL '"+t+"'.")}function at(t){return new d(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ut(){return new d(h.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ve+"' property when initializing the app?")}function Be(){return new d(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ct(){return new d(h.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function lt(){return new d(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ht(t){return new d(h.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function re(t){return new d(h.INVALID_ARGUMENT,t)}function qe(){return new d(h.APP_DELETED,"The Firebase app was deleted.")}function dt(t){return new d(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function z(t,e){return new d(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function $(t){throw new d(h.INTERNAL_ERROR,"Internal error: "+t)}var w=class t{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){let e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=t.makeFromUrl(e,n)}catch{return new t(e,"")}if(s.path==="")return s;throw at(e)}static makeFromUrl(e,n){let s=null,r="([A-Za-z0-9.\\-_]+)";function o(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}let i="(/(.*))?$",u=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function c(b){b.path_=decodeURIComponent(b.path)}let l="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${l}/b/${r}/o${p}`,"i"),g={bucket:1,path:3},y=n===Ce?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",P=new RegExp(`^https?://${y}/${r}/${_}`,"i"),T=[{regex:u,indices:a,postModify:o},{regex:m,indices:g,postModify:c},{regex:P,indices:{bucket:1,path:2},postModify:c}];for(let b=0;b<T.length;b++){let N=T[b],C=N.regex.exec(e);if(C){let Q=C[N.indices.bucket],F=C[N.indices.path];F||(F=""),s=new t(Q,F),N.postModify(s);break}}if(s==null)throw it(e);return s}},oe=class{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}};function ft(t,e,n){let s=1,r=null,o=null,i=!1,u=0;function a(){return u===2}let c=!1;function l(..._){c||(c=!0,e.apply(null,_))}function f(_){r=setTimeout(()=>{r=null,t(m,a())},_)}function p(){o&&clearTimeout(o)}function m(_,...P){if(c){p();return}if(_){p(),l.call(null,_,...P);return}if(a()||i){p(),l.call(null,_,...P);return}s<64&&(s*=2);let T;u===1?(u=2,T=0):T=(s+Math.random())*1e3,f(T)}let g=!1;function y(_){g||(g=!0,p(),!c&&(r!==null?(_||(u=2),clearTimeout(r),f(0)):_||(u=1)))}return f(0),o=setTimeout(()=>{i=!0,y(!0)},n),y}function _t(t){t(!1)}function pt(t){return t!==void 0}function mt(t){return typeof t=="function"}function gt(t){return typeof t=="object"&&!Array.isArray(t)}function K(t){return typeof t=="string"||t instanceof String}function Ue(t){return fe()&&t instanceof Blob}function fe(){return typeof Blob<"u"}function ie(t,e,n,s){if(s<e)throw re(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw re(`Invalid value for '${t}'. Expected ${n} or less.`)}function x(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function Me(t){let e=encodeURIComponent,n="?";for(let s in t)if(t.hasOwnProperty(s)){let r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var L=function(t){return t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT",t}(L||{});function Fe(t,e){let n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}var ae=class{constructor(e,n,s,r,o,i,u,a,c,l,f,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=u,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){let e=(s,r)=>{if(r){s(!1,new D(!1,null,!0));return}let o=this.connectionFactory_();this.pendingConnection_=o;let i=u=>{let a=u.loaded,c=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,c)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;let u=o.getErrorCode()===L.NO_ERROR,a=o.getStatus();if(!u||Fe(a,this.additionalRetryCodes_)&&this.retry){let l=o.getErrorCode()===L.ABORT;s(!1,new D(!1,null,l));return}let c=this.successCodes_.indexOf(a)!==-1;s(!0,new D(c,o))})},n=(s,r)=>{let o=this.resolve_,i=this.reject_,u=r.connection;if(r.wasSuccessCode)try{let a=this.callback_(u,u.getResponse());pt(a)?o(a):o()}catch(a){i(a)}else if(u!==null){let a=de();a.serverResponse=u.getErrorText(),this.errorCallback_?i(this.errorCallback_(u,a)):i(a)}else if(r.canceled){let a=this.appDelete_?qe():Le();i(a)}else{let a=De();i(a)}};this.canceled_?n(!1,new D(!1,null,!0)):this.backoffId_=ft(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&_t(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}},D=class{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}};function bt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Rt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Tt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function wt(t,e,n,s,r,o,i=!0){let u=Me(t.urlParams),a=t.url+u,c=Object.assign({},t.headers);return Tt(c,e),bt(c,n),Rt(c,o),kt(c,s),new ae(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}function yt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Et(...t){let e=yt();if(e!==void 0){let n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(fe())return new Blob(t);throw new d(h.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ut(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}function At(t){if(typeof atob>"u")throw ht("base-64");return atob(t)}var O={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"},j=class{constructor(e,n){this.data=e,this.contentType=n||null}};function Ot(t,e){switch(t){case O.RAW:return new j(He(e));case O.BASE64:case O.BASE64URL:return new j($e(t,e));case O.DATA_URL:return new j(Pt(e),St(e))}throw de()}function He(t){let e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{let o=s,i=t.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function It(t){let e;try{e=decodeURIComponent(t)}catch{throw z(O.DATA_URL,"Malformed data URL.")}return He(e)}function $e(t,e){switch(t){case O.BASE64:{let r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw z(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case O.BASE64URL:{let r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw z(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=At(e)}catch(r){throw r.message.includes("polyfill")?r:z(t,"Invalid character found")}let s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}var V=class{constructor(e){this.base64=!1,this.contentType=null;let n=e.match(/^data:([^,]+)?,/);if(n===null)throw z(O.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let s=n[1]||null;s!=null&&(this.base64=xt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}};function Pt(t){let e=new V(t);return e.base64?$e(O.BASE64,e.rest):It(e.rest)}function St(t){return new V(t).contentType}function xt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}var X=class t{constructor(e,n){let s=0,r="";Ue(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ue(this.data_)){let s=this.data_,r=Ut(s,e,n);return r===null?null:new t(r)}else{let s=new Uint8Array(this.data_.buffer,e,n-e);return new t(s,!0)}}static getBlob(...e){if(fe()){let n=e.map(s=>s instanceof t?s.data_:s);return new t(Et.apply(null,n))}else{let n=e.map(i=>K(i)?Ot(O.RAW,i).data:i.data_),s=0;n.forEach(i=>{s+=i.byteLength});let r=new Uint8Array(s),o=0;return n.forEach(i=>{for(let u=0;u<i.length;u++)r[o++]=i[u]}),new t(r,!0)}}uploadData(){return this.data_}};function _e(t){let e;try{e=JSON.parse(t)}catch{return null}return gt(e)?e:null}function Nt(t){if(t.length===0)return null;let e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Ct(t,e){let n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function ze(t){let e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}function vt(t,e){return e}var R=class{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||vt}},W=null;function Dt(t){return!K(t)||t.length<2?t:ze(t)}function Y(){if(W)return W;let t=[];t.push(new R("bucket")),t.push(new R("generation")),t.push(new R("metageneration")),t.push(new R("name","fullPath",!0));function e(o,i){return Dt(i)}let n=new R("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}let r=new R("size");return r.xform=s,t.push(r),t.push(new R("timeCreated")),t.push(new R("updated")),t.push(new R("md5Hash",null,!0)),t.push(new R("cacheControl",null,!0)),t.push(new R("contentDisposition",null,!0)),t.push(new R("contentEncoding",null,!0)),t.push(new R("contentLanguage",null,!0)),t.push(new R("contentType",null,!0)),t.push(new R("metadata","customMetadata",!0)),W=t,W}function Lt(t,e){function n(){let s=t.bucket,r=t.fullPath,o=new w(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Bt(t,e,n){let s={};s.type="file";let r=n.length;for(let o=0;o<r;o++){let i=n[o];s[i.local]=i.xform(s,e[i.server])}return Lt(s,t),s}function je(t,e,n){let s=_e(e);return s===null?null:Bt(t,s,n)}function qt(t,e,n,s){let r=_e(e);if(r===null||!K(r.downloadTokens))return null;let o=r.downloadTokens;if(o.length===0)return null;let i=encodeURIComponent;return o.split(",").map(c=>{let l=t.bucket,f=t.fullPath,p="/b/"+i(l)+"/o/"+i(f),m=x(p,n,s),g=Me({alt:"media",token:c});return m+g})[0]}function pe(t,e){let n={},s=e.length;for(let r=0;r<s;r++){let o=e[r];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}var Ae="prefixes",Oe="items";function Mt(t,e,n){let s={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Ae])for(let r of n[Ae]){let o=r.replace(/\/$/,""),i=t._makeStorageReference(new w(e,o));s.prefixes.push(i)}if(n[Oe])for(let r of n[Oe]){let o=t._makeStorageReference(new w(e,r.name));s.items.push(o)}return s}function Ft(t,e,n){let s=_e(n);return s===null?null:Mt(t,e,s)}var E=class{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}};function I(t){if(!t)throw de()}function Z(t,e){function n(s,r){let o=je(t,r,e);return I(o!==null),o}return n}function Ht(t,e){function n(s,r){let o=Ft(t,e,r);return I(o!==null),o}return n}function $t(t,e){function n(s,r){let o=je(t,r,e);return I(o!==null),qt(o,r,t.host,t._protocol)}return n}function M(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=rt():r=st():n.getStatus()===402?r=nt(t.bucket):n.getStatus()===403?r=ot(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function J(t){let e=M(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=tt(t.path)),o.serverResponse=r.serverResponse,o}return n}function Ge(t,e,n){let s=e.fullServerUrl(),r=x(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,u=new E(r,o,Z(t,n),i);return u.errorHandler=J(e),u}function zt(t,e,n,s,r){let o={};e.isRoot?o.prefix="":o.prefix=e.path+"/",n&&n.length>0&&(o.delimiter=n),s&&(o.pageToken=s),r&&(o.maxResults=r);let i=e.bucketOnlyServerUrl(),u=x(i,t.host,t._protocol),a="GET",c=t.maxOperationRetryTime,l=new E(u,a,Ht(t,e.bucket),c);return l.urlParams=o,l.errorHandler=M(e),l}function jt(t,e,n){let s=e.fullServerUrl(),r=x(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,u=new E(r,o,$t(t,n),i);return u.errorHandler=J(e),u}function Gt(t,e,n,s){let r=e.fullServerUrl(),o=x(r,t.host,t._protocol),i="PATCH",u=pe(n,s),a={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,l=new E(o,i,Z(t,s),c);return l.headers=a,l.body=u,l.errorHandler=J(e),l}function Wt(t,e){let n=e.fullServerUrl(),s=x(n,t.host,t._protocol),r="DELETE",o=t.maxOperationRetryTime;function i(a,c){}let u=new E(s,r,i,o);return u.successCodes=[200,204],u.errorHandler=J(e),u}function Vt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function We(t,e,n){let s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Vt(null,e)),s}function Xt(t,e,n,s,r){let o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function u(){let T="";for(let b=0;b<2;b++)T=T+Math.random().toString().slice(2);return T}let a=u();i["Content-Type"]="multipart/related; boundary="+a;let c=We(e,s,r),l=pe(c,n),f="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+a+`\r
Content-Type: `+c.contentType+`\r
\r
`,p=`\r
--`+a+"--",m=X.getBlob(f,s,p);if(m===null)throw Be();let g={name:c.fullPath},y=x(o,t.host,t._protocol),_="POST",P=t.maxUploadRetryTime,S=new E(y,_,Z(t,n),P);return S.urlParams=g,S.headers=i,S.body=m.uploadData(),S.errorHandler=M(e),S}var B=class{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}};function me(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{I(!1)}return I(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Kt(t,e,n,s,r){let o=e.bucketOnlyServerUrl(),i=We(e,s,r),u={name:i.fullPath},a=x(o,t.host,t._protocol),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":i.contentType,"Content-Type":"application/json; charset=utf-8"},f=pe(i,n),p=t.maxUploadRetryTime;function m(y){me(y);let _;try{_=y.getResponseHeader("X-Goog-Upload-URL")}catch{I(!1)}return I(K(_)),_}let g=new E(a,c,m,p);return g.urlParams=u,g.headers=l,g.body=f,g.errorHandler=M(e),g}function Yt(t,e,n,s){let r={"X-Goog-Upload-Command":"query"};function o(c){let l=me(c,["active","final"]),f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{I(!1)}f||I(!1);let p=Number(f);return I(!isNaN(p)),new B(p,s.size(),l==="final")}let i="POST",u=t.maxUploadRetryTime,a=new E(n,i,o,u);return a.headers=r,a.errorHandler=M(e),a}var Ie=256*1024;function Zt(t,e,n,s,r,o,i,u){let a=new B(0,0);if(i?(a.current=i.current,a.total=i.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw ct();let c=a.total-a.current,l=c;r>0&&(l=Math.min(l,r));let f=a.current,p=f+l,m="";l===0?m="finalize":c===l?m="upload, finalize":m="upload";let g={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${a.current}`},y=s.slice(f,p);if(y===null)throw Be();function _(b,N){let C=me(b,["active","final"]),Q=a.current+l,F=s.size(),ee;return C==="final"?ee=Z(e,o)(b,N):ee=null,new B(Q,F,C==="final",ee)}let P="POST",S=e.maxUploadRetryTime,T=new E(n,P,_,S);return T.headers=g,T.body=y.uploadData(),T.progressCallback=u||null,T.errorHandler=M(t),T}var pn={STATE_CHANGED:"state_changed"},k={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function se(t){switch(t){case"running":case"pausing":case"canceling":return k.RUNNING;case"paused":return k.PAUSED;case"success":return k.SUCCESS;case"canceled":return k.CANCELED;case"error":return k.ERROR;default:return k.ERROR}}var ue=class{constructor(e,n,s){if(mt(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{let o=e;this.next=o.next,this.error=o.error,this.complete=o.complete}}};function v(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}var Pe=null,ce=class{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw $("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(let o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw $("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw $("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}},le=class extends ce{initXhr(){this.xhr_.responseType="text"}};function A(){return Pe?Pe():new le}var he=class{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Y(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(h.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{let o=this.isExponentialBackoffExpired();if(Fe(r.status,[]))if(o)r=De();else{this.sleepTime=Math.max(this.sleepTime*2,et),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(h.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,o)=>{this._resolve=r,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){let e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{let s=Kt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,A,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){let e=this._uploadUrl;this._resolveToken((n,s)=>{let r=Yt(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,A,n,s);this._request=o,o.getPromise().then(i=>{i=i,this._request=void 0,this._updateProgress(i.current),this._needToFetchStatus=!1,i.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){let e=Ie*this._chunkMultiplier,n=new B(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,o)=>{let i;try{i=Zt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}let u=this._ref.storage._makeRequest(i,A,r,o,!1);this._request=u,u.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ie*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{let s=Ge(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,A,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{let s=Xt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,A,e,n);this._request=r,r.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){let n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":let n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Le(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){let e=se(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){let o=new ue(n||void 0,s||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){let n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(se(this._state)){case k.SUCCESS:v(this._resolve.bind(null,this.snapshot))();break;case k.CANCELED:case k.ERROR:let n=this._reject;v(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(se(this._state)){case k.RUNNING:case k.PAUSED:e.next&&v(e.next.bind(e,this.snapshot))();break;case k.SUCCESS:e.complete&&v(e.complete.bind(e))();break;case k.CANCELED:case k.ERROR:e.error&&v(e.error.bind(e,this._error))();break;default:e.error&&v(e.error.bind(e,this._error))()}}resume(){let e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){let e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){let e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}};var q=class t{constructor(e,n){this._service=e,n instanceof w?this._location=n:this._location=w.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new t(e,n)}get root(){let e=new w(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ze(this._location.path)}get storage(){return this._service}get parent(){let e=Nt(this._location.path);if(e===null)return null;let n=new w(this._location.bucket,e);return new t(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dt(e)}};function Jt(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new he(t,new X(e),n)}function Qt(t){let e={prefixes:[],items:[]};return Ve(t,e).then(()=>e)}function Ve(t,e,n){return H(this,null,function*(){let r=yield Xe(t,{pageToken:n});e.prefixes.push(...r.prefixes),e.items.push(...r.items),r.nextPageToken!=null&&(yield Ve(t,e,r.nextPageToken))})}function Xe(t,e){e!=null&&typeof e.maxResults=="number"&&ie("options.maxResults",1,1e3,e.maxResults);let n=e||{},s=zt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(s,A)}function en(t){t._throwIfRoot("getMetadata");let e=Ge(t.storage,t._location,Y());return t.storage.makeRequestWithTokens(e,A)}function tn(t,e){t._throwIfRoot("updateMetadata");let n=Gt(t.storage,t._location,e,Y());return t.storage.makeRequestWithTokens(n,A)}function nn(t){t._throwIfRoot("getDownloadURL");let e=jt(t.storage,t._location,Y());return t.storage.makeRequestWithTokens(e,A).then(n=>{if(n===null)throw lt();return n})}function sn(t){t._throwIfRoot("deleteObject");let e=Wt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,A)}function Ke(t,e){let n=Ct(t._location.path,e),s=new w(t._location.bucket,n);return new q(t.storage,s)}function rn(t){return/^[A-Za-z]+:\/\//.test(t)}function on(t,e){return new q(t,e)}function Ye(t,e){if(t instanceof G){let n=t;if(n._bucket==null)throw ut();let s=new q(n,n._bucket);return e!=null?Ye(s,e):s}else return e!==void 0?Ke(t,e):t}function an(t,e){if(e&&rn(e)){if(t instanceof G)return on(t,e);throw re("To use ref(service, url), the first argument must be a Storage instance.")}else return Ye(t,e)}function Se(t,e){let n=e?.[ve];return n==null?null:w.makeFromBucketSpec(n,t)}function un(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";let{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:be(r,t.app.options.projectId))}var G=class{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=Ce,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Je,this._maxUploadRetryTime=Qe,this._requests=new Set,r!=null?this._bucket=w.makeFromBucketSpec(r,this._host):this._bucket=Se(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=w.makeFromBucketSpec(this._url,e):this._bucket=Se(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ie("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ie("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return H(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;let e=this._authProvider.getImmediate({optional:!0});if(e){let n=yield e.getToken();if(n!==null)return n.accessToken}return null})}_getAppCheckToken(){return H(this,null,function*(){let e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new q(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new oe(qe());{let i=wt(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(e,n){return H(this,null,function*(){let[s,r]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()})}},xe="@firebase/storage",Ne="0.12.3";var Ze="storage";function mn(t,e,n){return t=U(t),Jt(t,e,n)}function gn(t){return t=U(t),en(t)}function bn(t,e){return t=U(t),tn(t,e)}function Rn(t,e){return t=U(t),Xe(t,e)}function Tn(t){return t=U(t),Qt(t)}function kn(t){return t=U(t),nn(t)}function wn(t){return t=U(t),sn(t)}function yn(t,e){return t=U(t),an(t,e)}function En(t,e){return Ke(t,e)}function Un(t=Ee(),e){t=U(t);let s=we(t,Ze).getImmediate({identifier:e}),r=ge("storage");return r&&cn(s,...r),s}function cn(t,e,n,s={}){un(t,e,n,s)}function ln(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new G(n,s,r,e,ye)}function hn(){ke(new Te(Ze,ln,"PUBLIC").setMultipleInstances(!0)),te(xe,Ne,""),te(xe,Ne,"esm2017")}hn();export{re as a,dt as b,w as c,O as d,Ot as e,X as f,pn as g,k as h,he as i,mn as j,gn as k,bn as l,Rn as m,Tn as n,kn as o,wn as p,yn as q,En as r,Un as s,cn as t};
