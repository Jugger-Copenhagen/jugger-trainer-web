import{r as le,D as Ba,o as hr}from"./chunk-LFPYN7LY-BjgEcc12.js";const cf={firebase:{apiKey:"AIzaSyBZJmUnbSqufRL64CSzdJMpy3hlRshd-9Q",authDomain:"juggertrainer.firebaseapp.com",databaseURL:"https://juggertrainer.firebaseio.com",projectId:"juggertrainer",storageBucket:"juggertrainer.appspot.com",messagingSenderId:"103859061629",appId:"1:103859061629:web:eff53ba99a8251f65cc214",measurementId:"G-KN7W5GRDM4"}},lf=2147483647;function fo(t){return[t[Math.floor(Math.random()*11)],t[Math.floor(Math.random()*11)]]}function FT(t){const e=fo(t);return{exertionLevel:"EASY",howToPlay:"",name:"",originCountry:"CA",playersMin:2,playersMax:lf,tags:[],images:e}}var Wa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(t,e){if(!t)throw gn(e)},gn=function(t){return new Error("Firebase Database ("+Hl.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),r.push(n[h],n[u],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw new hf;const f=s<<2|a>>4;if(r.push(f),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const p=l<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vl=function(t){const e=jl(t);return po.encodeByteArray(e,!0)},Vr=function(t){return Vl(t).replace(/\./g,"")},Gr=function(t){try{return po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t){return Gl(void 0,t)}function Gl(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ff(n)||(t[n]=Gl(t[n],e[n]));return t}function ff(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gf=()=>pf().__FIREBASE_DEFAULTS__,mf=()=>{if(typeof process>"u"||typeof Wa>"u")return;const t=Wa.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_f=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gr(t[1]);return e&&JSON.parse(e)},go=()=>{try{return gf()||mf()||_f()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zl=t=>{var e,n;return(n=(e=go())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yf=t=>{const e=zl(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ql=()=>{var t;return(t=go())===null||t===void 0?void 0:t.config},Kl=t=>{var e;return(e=go())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vr(JSON.stringify(n)),Vr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function bf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wf(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ql(){return Hl.NODE_ADMIN===!0}function Ef(){try{return typeof indexedDB=="object"}catch{return!1}}function Cf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf="FirebaseError";class Ct extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sf,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?If(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,a,r)}}function If(t,e){return t.replace(Tf,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Tf=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){return JSON.parse(t)}function ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Vn(Gr(s[0])||""),n=Vn(Gr(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Af=function(t){const e=Jl(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Rf=function(t){const e=Jl(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function on(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function xs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function qr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ha(s)&&Ha(o)){if(!qr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ha(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),h=1518500249):(l=s^o^a,h=1859775393):u<60?(l=s&o|a&(s|o),h=2400959708):(l=s^o^a,h=3395469782);const f=(i<<5|i>>>27)+l+c+h+r[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function kf(t,e){const n=new Of(t,e);return n.subscribe.bind(n)}class Of{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nf(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=hs),i.error===void 0&&(i.error=hs),i.complete===void 0&&(i.complete=hs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hs(){}function pi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,y(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gi=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){return t&&t._delegate?t._delegate:t}class Ot{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lf(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Mf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Mf(t){return t===St?void 0:t}function Lf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Df(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const $f={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Uf=$.INFO,Bf={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Wf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Bf[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _o{constructor(e){this.name=e,this._logLevel=Uf,this._logHandler=Wf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Hf=(t,e)=>e.some(n=>t instanceof n);let ja,Va;function jf(){return ja||(ja=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vf(){return Va||(Va=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xl=new WeakMap,Ds=new WeakMap,Zl=new WeakMap,ds=new WeakMap,yo=new WeakMap;function Gf(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Xl.set(n,t)}).catch(()=>{}),yo.set(e,t),e}function zf(t){if(Ds.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ds.set(t,e)}let Ms={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ds.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qf(t){Ms=t(Ms)}function Kf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fs(this),e,...n);return Zl.set(r,e.sort?e.sort():[e]),pt(r)}:Vf().includes(t)?function(...e){return t.apply(fs(this),e),pt(Xl.get(this))}:function(...e){return pt(t.apply(fs(this),e))}}function Yf(t){return typeof t=="function"?Kf(t):(t instanceof IDBTransaction&&zf(t),Hf(t,jf())?new Proxy(t,Ms):t)}function pt(t){if(t instanceof IDBRequest)return Gf(t);if(ds.has(t))return ds.get(t);const e=Yf(t);return e!==t&&(ds.set(t,e),yo.set(e,t)),e}const fs=t=>yo.get(t);function Qf(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(pt(o.result),c.oldVersion,c.newVersion,pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Jf=["get","getKey","getAll","getAllKeys","count"],Xf=["put","add","delete","clear"],ps=new Map;function Ga(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ps.get(e))return ps.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Xf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Jf.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return ps.set(e,s),s}qf(t=>({...t,get:(e,n,r)=>Ga(e,n)||t.get(e,n,r),has:(e,n)=>!!Ga(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ep(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ep(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ls="@firebase/app",za="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new _o("@firebase/app"),tp="@firebase/app-compat",np="@firebase/analytics-compat",rp="@firebase/analytics",ip="@firebase/app-check-compat",sp="@firebase/app-check",op="@firebase/auth",ap="@firebase/auth-compat",cp="@firebase/database",lp="@firebase/database-compat",up="@firebase/functions",hp="@firebase/functions-compat",dp="@firebase/installations",fp="@firebase/installations-compat",pp="@firebase/messaging",gp="@firebase/messaging-compat",mp="@firebase/performance",_p="@firebase/performance-compat",yp="@firebase/remote-config",vp="@firebase/remote-config-compat",bp="@firebase/storage",wp="@firebase/storage-compat",Ep="@firebase/firestore",Cp="@firebase/firestore-compat",Sp="firebase",Ip="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="[DEFAULT]",Tp={[Ls]:"fire-core",[tp]:"fire-core-compat",[rp]:"fire-analytics",[np]:"fire-analytics-compat",[sp]:"fire-app-check",[ip]:"fire-app-check-compat",[op]:"fire-auth",[ap]:"fire-auth-compat",[cp]:"fire-rtdb",[lp]:"fire-rtdb-compat",[up]:"fire-fn",[hp]:"fire-fn-compat",[dp]:"fire-iid",[fp]:"fire-iid-compat",[pp]:"fire-fcm",[gp]:"fire-fcm-compat",[mp]:"fire-perf",[_p]:"fire-perf-compat",[yp]:"fire-rc",[vp]:"fire-rc-compat",[bp]:"fire-gcs",[wp]:"fire-gcs-compat",[Ep]:"fire-fst",[Cp]:"fire-fst-compat","fire-js":"fire-js",[Sp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,$s=new Map;function Ap(t,e){try{t.container.addComponent(e)}catch(n){Nt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function an(t){const e=t.name;if($s.has(e))return Nt.debug(`There were multiple attempts to register component ${e}.`),!1;$s.set(e,t);for(const n of Kr.values())Ap(n,t);return!0}function vo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new fr("app","Firebase",Rp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=Ip;function eu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=ql()),!n)throw gt.create("no-options");const s=Kr.get(i);if(s){if(qr(n,s.options)&&qr(r,s.config))return s;throw gt.create("duplicate-app",{appName:i})}const o=new Ff(i);for(const c of $s.values())o.addComponent(c);const a=new Pp(n,r,o);return Kr.set(i,a),a}function tu(t=Fs){const e=Kr.get(t);if(!e&&t===Fs&&ql())return eu();if(!e)throw gt.create("no-app",{appName:t});return e}function mt(t,e,n){var r;let i=(r=Tp[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nt.warn(a.join(" "));return}an(new Ot(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="firebase-heartbeat-database",Op=1,Gn="firebase-heartbeat-store";let gs=null;function nu(){return gs||(gs=Qf(kp,Op,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gn)}catch(n){console.warn(n)}}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),gs}async function Np(t){try{const n=(await nu()).transaction(Gn),r=await n.objectStore(Gn).get(ru(t));return await n.done,r}catch(e){if(e instanceof Ct)Nt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nt.warn(n.message)}}}async function qa(t,e){try{const r=(await nu()).transaction(Gn,"readwrite");await r.objectStore(Gn).put(e,ru(t)),await r.done}catch(n){if(n instanceof Ct)Nt.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nt.warn(r.message)}}}function ru(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1024,Dp=30*24*60*60*1e3;class Mp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ka();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Dp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ka(),{heartbeatsToSend:r,unsentEntries:i}=Lp(this._heartbeatsCache.heartbeats),s=Vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ka(){return new Date().toISOString().substring(0,10)}function Lp(t,e=xp){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ya(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ya(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ef()?Cf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Np(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ya(t){return Vr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t){an(new Ot("platform-logger",e=>new Zf(e),"PRIVATE")),an(new Ot("heartbeat",e=>new Mp(e),"PRIVATE")),mt(Ls,za,t),mt(Ls,za,"esm2017"),mt("fire-js","")}$p("");var Up="firebase",Bp="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(Up,Bp,"app");function bo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function iu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wp=iu,su=new fr("auth","Firebase",iu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new _o("@firebase/auth");function Hp(t,...e){Yr.logLevel<=$.WARN&&Yr.warn(`Auth (${_n}): ${t}`,...e)}function Lr(t,...e){Yr.logLevel<=$.ERROR&&Yr.error(`Auth (${_n}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,...e){throw wo(t,...e)}function $e(t,...e){return wo(t,...e)}function ou(t,e,n){const r=Object.assign(Object.assign({},Wp()),{[e]:n});return new fr("auth","Firebase",r).create(e,{appName:t.name})}function jp(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Te(t,"argument-error"),ou(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function wo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return su.create(t,...e)}function T(t,e,...n){if(!t)throw wo(e,...n)}function Ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Lr(e),new Error(e)}function Qe(t,e){t||Ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vp(){return Qa()==="http:"||Qa()==="https:"}function Qa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||bf()||"connection"in navigator)?navigator.onLine:!0}function zp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=mo()||Yl()}get(){return Gp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new pr(3e4,6e4);function Ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function et(t,e,n,r,i={}){return cu(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=mn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),au.fetch()(lu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function cu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qp),e);try{const i=new Qp(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Rr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Rr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Rr(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ou(t,h,l);Te(t,h)}}catch(i){if(i instanceof Ct)throw i;Te(t,"network-request-failed",{message:String(i)})}}async function gr(t,e,n,r,i={}){const s=await et(t,e,n,r,i);return"mfaPendingCredential"in s&&Te(t,"multi-factor-auth-required",{_serverResponse:s}),s}function lu(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Eo(t.config,i):`${t.config.apiScheme}://${i}`}function Yp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($e(this.auth,"network-request-failed")),Kp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Rr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$e(t,e,r);return i.customData._tokenResponse=n,i}function Ja(t){return t!==void 0&&t.enterprise!==void 0}class Jp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Yp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Xp(t,e){return et(t,"GET","/v2/recaptchaConfig",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(t,e){return et(t,"POST","/v1/accounts:delete",e)}async function eg(t,e){return et(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tg(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=Co(r);T(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fn(ms(i.auth_time)),issuedAtTime:Fn(ms(i.iat)),expirationTime:Fn(ms(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ms(t){return Number(t)*1e3}function Co(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Lr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gr(n);return i?JSON.parse(i):(Lr("Failed to decode base64 JWT payload"),null)}catch(i){return Lr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ng(t){const e=Co(t);return T(e,"internal-error"),T(typeof e.exp<"u","internal-error"),T(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ct&&rg(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function rg({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fn(this.lastLoginAt),this.creationTime=Fn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t){var e;const n=t.auth,r=await t.getIdToken(),i=await zn(t,eg(n,{idToken:r}));T(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ag(s.providerUserInfo):[],a=og(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new uu(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function sg(t){const e=fe(t);await qn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function og(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ag(t){return t.map(e=>{var{providerId:n}=e,r=bo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(t,e){const n=await cu(t,{},async()=>{const r=mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=lu(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",au.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lg(t,e){return et(t,"POST","/v2/accounts:revokeToken",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){T(e.idToken,"internal-error"),T(typeof e.idToken<"u","internal-error"),T(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ng(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return T(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cg(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Kn;return r&&(T(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(T(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(T(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e){T(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await zn(this,this.stsTokenManager.getToken(this.auth,e));return T(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tg(this,e)}reload(){return sg(this)}_assign(e){this!==e&&(T(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){T(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zn(this,Zp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,h;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:v,isAnonymous:C,providerData:P,stsTokenManager:R}=n;T(E&&R,e,"internal-error");const oe=Kn.fromJSON(this.name,R);T(typeof E=="string",e,"internal-error"),ct(u,e.name),ct(f,e.name),T(typeof v=="boolean",e,"internal-error"),T(typeof C=="boolean",e,"internal-error"),ct(g,e.name),ct(p,e.name),ct(_,e.name),ct(b,e.name),ct(w,e.name),ct(I,e.name);const X=new Pt({uid:E,auth:e,email:f,emailVerified:v,displayName:u,isAnonymous:C,photoURL:p,phoneNumber:g,tenantId:_,stsTokenManager:oe,createdAt:w,lastLoginAt:I});return P&&Array.isArray(P)&&(X.providerData=P.map(d=>Object.assign({},d))),b&&(X._redirectEventId=b),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new Kn;i.updateFromServerResponse(n);const s=new Pt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qn(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map;function ze(t){Qe(t instanceof Function,"Expected a class definition");let e=Xa.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xa.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hu.type="NONE";const Za=hu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t,e,n){return`firebase:${t}:${e}:${n}`}class Xt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xt(ze(Za),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||ze(Za);const o=Fr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const u=Pt._fromJSON(e,h);l!==s&&(a=u),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Xt(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Xt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(du(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mu(e))return"Blackberry";if(_u(e))return"Webos";if(So(e))return"Safari";if((e.includes("chrome/")||fu(e))&&!e.includes("edge/"))return"Chrome";if(gu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function du(t=de()){return/firefox\//i.test(t)}function So(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fu(t=de()){return/crios\//i.test(t)}function pu(t=de()){return/iemobile/i.test(t)}function gu(t=de()){return/android/i.test(t)}function mu(t=de()){return/blackberry/i.test(t)}function _u(t=de()){return/webos/i.test(t)}function mi(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ug(t=de()){var e;return mi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hg(){return wf()&&document.documentMode===10}function yu(t=de()){return mi(t)||gu(t)||_u(t)||mu(t)||/windows phone/i.test(t)||pu(t)}function dg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t,e=[]){let n;switch(t){case"Browser":n=ec(de());break;case"Worker":n=`${ec(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_n}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e={}){return et(t,"GET","/v2/passwordPolicy",Ze(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=6;class mg{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tc(this),this.idTokenSubscription=new tc(this),this.beforeStateQueue=new fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Xt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return T(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&T(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&T(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pg(this),n=new mg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;T(n,this,"argument-error"),this.redirectPersistenceManager=await Xt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(T(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return T(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Hp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function tt(t){return fe(t)}class tc{constructor(e){this.auth=e,this.observer=null,this.addObserver=kf(n=>this.observer=n)}get next(){return T(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yg(t){_i=t}function bu(t){return _i.loadJS(t)}function vg(){return _i.recaptchaEnterpriseScript}function bg(){return _i.gapiScript}function wg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Eg="recaptcha-enterprise",Cg="NO_RECAPTCHA";class Sg{constructor(e){this.type=Eg,this.auth=tt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Xp(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Jp(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ja(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Cg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ja(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=vg();c.length!==0&&(c+=a),bu(c).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function nc(t,e,n,r=!1){const i=new Sg(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qr(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await nc(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await nc(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t,e){const n=vo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(qr(s,e??{}))return i;Te(i,"already-initialized")}return n.initialize({options:e})}function Tg(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ag(t,e,n){const r=tt(t);T(r._canInitEmulator,r,"emulator-config-failed"),T(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=wu(e),{host:o,port:a}=Rg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Pg()}function wu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rg(t){const e=wu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rc(o)}}}function rc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Pg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,n){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function kg(t,e){return et(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Og(t,e){return gr(t,"POST","/v1/accounts:signInWithPassword",Ze(t,e))}async function Ng(t,e){return et(t,"POST","/v1/accounts:sendOobCode",Ze(t,e))}async function xg(t,e){return Ng(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}async function Mg(t,e){return gr(t,"POST","/v1/accounts:signInWithEmailLink",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Io{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Yn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qr(e,n,"signInWithPassword",Og);case"emailLink":return Dg(e,{email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qr(e,r,"signUpPassword",kg);case"emailLink":return Mg(e,{idToken:n,email:this._email,oobCode:this._password});default:Te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(t,e){return gr(t,"POST","/v1/accounts:signInWithIdp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="http://localhost";class xt extends Io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zt(e,n)}buildRequest(){const e={requestUri:Lg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $g(t){const e=xn(Dn(t)).link,n=e?xn(Dn(e)).deep_link_id:null,r=xn(Dn(t)).deep_link_id;return(r?xn(Dn(r)).link:null)||r||n||e||t}class To{constructor(e){var n,r,i,s,o,a;const c=xn(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,u=Fg((i=c.mode)!==null&&i!==void 0?i:null);T(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$g(e);try{return new To(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.providerId=yn.PROVIDER_ID}static credential(e,n){return Yn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=To.parseLink(n);return T(r,"argument-error"),Yn._fromEmailAndCode(e,r.code,r.tenantId)}}yn.PROVIDER_ID="password";yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ao{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends mr{constructor(){super("facebook.com")}static credential(e){return xt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return xt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends mr{constructor(){super("github.com")}static credential(e){return xt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.GITHUB_SIGN_IN_METHOD="github.com";ht.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends mr{constructor(){super("twitter.com")}static credential(e,n){return xt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(t,e){return gr(t,"POST","/v1/accounts:signUp",Ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pt._fromIdTokenResponse(e,r,i),o=ic(r);return new Dt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ic(r);return new Dt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ic(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Ct{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Jr.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Jr(e,n,r,i)}}function Eu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Jr._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function Cu(t,e,n=!1){const r=await zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Dt._forOperation(t,"link",r)}async function Wg(t,e,n){await qn(e);const r=Bg(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";T(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hg(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await zn(t,Eu(r,i,e,t),n);T(s.idToken,r,"internal-error");const o=Co(s.idToken);T(o,r,"internal-error");const{sub:a}=o;return T(t.uid===a,r,"user-mismatch"),Dt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Te(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(t,e,n=!1){const r="signIn",i=await Eu(t,r,e),s=await Dt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function jg(t,e){return Su(tt(t),e)}async function $T(t,e){const n=fe(t);return await Wg(!1,n,e.providerId),Cu(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e,n){var r;T(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),T(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(T(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(T(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(t){const e=tt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function UT(t,e,n){const r=tt(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Vg(r,i,n),await Qr(r,i,"getOobCode",xg)}async function BT(t,e,n){const r=tt(t),o=await Qr(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ug).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Iu(t),c}),a=await Dt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function WT(t,e,n){return jg(fe(t),yn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Iu(t),r})}function Gg(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function zg(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function HT(t,e,n,r){return fe(t).onAuthStateChanged(e,n,r)}const Xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(){const t=de();return So(t)||mi(t)}const Kg=1e3,Yg=10;class Au extends Tu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qg()&&dg(),this.fallbackToPolling=yu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yg):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Au.type="LOCAL";const Qg=Au;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends Tu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ru.type="SESSION";const Pu=Ru;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new yi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Jg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Ro("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return window}function Zg(t){Ue().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){return typeof Ue().WorkerGlobalScope<"u"&&typeof Ue().importScripts=="function"}async function em(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nm(){return ku()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="firebaseLocalStorageDb",rm=1,Zr="firebaseLocalStorage",Nu="fbase_key";class _r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vi(t,e){return t.transaction([Zr],e?"readwrite":"readonly").objectStore(Zr)}function im(){const t=indexedDB.deleteDatabase(Ou);return new _r(t).toPromise()}function Bs(){const t=indexedDB.open(Ou,rm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zr,{keyPath:Nu})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zr)?e(r):(r.close(),await im(),e(await Bs()))})})}async function sc(t,e,n){const r=vi(t,!0).put({[Nu]:e,value:n});return new _r(r).toPromise()}async function sm(t,e){const n=vi(t,!1).get(e),r=await new _r(n).toPromise();return r===void 0?null:r.value}function oc(t,e){const n=vi(t,!0).delete(e);return new _r(n).toPromise()}const om=800,am=3;class xu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>am)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yi._getInstance(nm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await em(),!this.activeServiceWorker)return;this.sender=new Xg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bs();return await sc(e,Xr,"1"),await oc(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>oc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=vi(i,!1).getAll();return new _r(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),om)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xu.type="LOCAL";const cm=xu;new pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t,e){return e?ze(e):(T(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Io{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lm(t){return Su(t.auth,new Po(t),t.bypassAuthState)}function um(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Hg(n,new Po(t),t.bypassAuthState)}async function hm(t){const{auth:e,user:n}=t;return T(n,e,"internal-error"),Cu(n,new Po(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lm;case"linkViaPopup":case"linkViaRedirect":return hm;case"reauthViaPopup":case"reauthViaRedirect":return um;default:Te(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=new pr(2e3,1e4);async function jT(t,e,n){const r=tt(t);jp(t,e,Ao);const i=Du(r,n);return new At(r,"signInViaPopup",e,i).executeNotNull()}class At extends Mu{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return T(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($e(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($e(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($e(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dm.get())};e()}}At.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="pendingRedirect",$r=new Map;class pm extends Mu{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$r.get(this.auth._key());if(!e){try{const r=await gm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$r.set(this.auth._key(),e)}return this.bypassAuthState||$r.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gm(t,e){const n=ym(e),r=_m(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mm(t,e){$r.set(t._key(),e)}function _m(t){return ze(t._redirectPersistence)}function ym(t){return Fr(fm,t.config.apiKey,t.name)}async function vm(t,e,n=!1){const r=tt(t),i=Du(r,e),o=await new pm(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=10*60*1e3;class wm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Em(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($e(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bm&&this.cachedEventUids.clear(),this.cachedEventUids.has(ac(e))}saveEventToCache(e){this.cachedEventUids.add(ac(e)),this.lastProcessedEventTime=Date.now()}}function ac(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lu({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Em(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lu(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(t,e={}){return et(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Im=/^https?/;async function Tm(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cm(t);for(const n of e)try{if(Am(n))return}catch{}Te(t,"unauthorized-domain")}function Am(t){const e=Us(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Im.test(n))return!1;if(Sm.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm=new pr(3e4,6e4);function cc(){const t=Ue().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pm(t){return new Promise((e,n)=>{var r,i,s;function o(){cc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cc(),n($e(t,"network-request-failed"))},timeout:Rm.get()})}if(!((i=(r=Ue().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ue().gapi)===null||s===void 0)&&s.load)o();else{const a=wg("iframefcb");return Ue()[a]=()=>{gapi.load?o():n($e(t,"network-request-failed"))},bu(`${bg()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function km(t){return Ur=Ur||Pm(t),Ur}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=new pr(5e3,15e3),Nm="__/auth/iframe",xm="emulator/auth/iframe",Dm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lm(t){const e=t.config;T(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eo(e,xm):`https://${t.config.authDomain}/${Nm}`,r={apiKey:e.apiKey,appName:t.name,v:_n},i=Mm.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mn(r).slice(1)}`}async function Fm(t){const e=await km(t),n=Ue().gapi;return T(n,t,"internal-error"),e.open({where:document.body,url:Lm(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dm,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$e(t,"network-request-failed"),a=Ue().setTimeout(()=>{s(o)},Om.get());function c(){Ue().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Um=500,Bm=600,Wm="_blank",Hm="http://localhost";class lc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jm(t,e,n,r=Um,i=Bm){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$m),{width:r.toString(),height:i.toString(),top:s,left:o}),l=de().toLowerCase();n&&(a=fu(l)?Wm:n),du(l)&&(e=e||Hm,c.scrollbars="yes");const h=Object.entries(c).reduce((f,[g,p])=>`${f}${g}=${p},`,"");if(ug(l)&&a!=="_self")return Vm(e||"",a),new lc(null);const u=window.open(e||"",a,h);T(u,t,"popup-blocked");try{u.focus()}catch{}return new lc(u)}function Vm(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="__/auth/handler",zm="emulator/auth/handler",qm=encodeURIComponent("fac");async function uc(t,e,n,r,i,s){T(t.config.authDomain,t,"auth-domain-config-required"),T(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_n,eventId:i};if(e instanceof Ao){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(s||{}))o[h]=u}if(e instanceof mr){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${qm}=${encodeURIComponent(c)}`:"";return`${Km(t)}?${mn(a).slice(1)}${l}`}function Km({config:t}){return t.emulator?Eo(t,zm):`https://${t.authDomain}/${Gm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="webStorageSupport";class Ym{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pu,this._completeRedirectFn=vm,this._overrideRedirectResult=mm}async _openPopup(e,n,r,i){var s;Qe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await uc(e,n,r,Us(),i);return jm(e,o,Ro())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await uc(e,n,r,Us(),i);return Zg(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Fm(e),r=new wm(e);return n.register("authEvent",i=>(T(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_s,{type:_s},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_s];o!==void 0&&n(!!o),Te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tm(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yu()||So()||mi()}}const Qm=Ym;var hc="@firebase/auth",dc="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){T(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zm(t){an(new Ot("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;T(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vu(t)},l=new _g(r,i,s,c);return Tg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),an(new Ot("auth-internal",e=>{const n=tt(e.getProvider("auth").getImmediate());return(r=>new Jm(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(hc,dc,Xm(t)),mt(hc,dc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=5*60,t_=Kl("authIdTokenMaxAge")||e_;let fc=null;const n_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>t_)return;const i=n==null?void 0:n.token;fc!==i&&(fc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function r_(t=tu()){const e=vo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ig(t,{popupRedirectResolver:Qm,persistence:[cm,Qg,Pu]}),r=Kl("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=n_(r);zg(n,s,()=>s(n.currentUser)),Gg(n,o=>s(o))}const i=zl("auth");return i&&Ag(n,`http://${i}`),n}function i_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$e("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",i_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zm("Browser");var pc={};const gc="@firebase/database",mc="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fu="";function s_(t){Fu=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Vn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return je(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new o_(e)}}catch{}return new a_},Rt=$u("localStorage"),Ws=$u("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new _o("@firebase/database"),c_=function(){let t=1;return function(){return t++}}(),Uu=function(t){const e=xf(t),n=new Pf;n.update(e);const r=n.digest();return po.encodeByteArray(r)},yr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=yr.apply(null,r):typeof r=="object"?e+=ne(r):e+=r,e+=" "}return e};let kt=null,_c=!0;const l_=function(t,e){y(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(en.logLevel=$.VERBOSE,kt=en.log.bind(en),e&&Ws.set("logging_enabled",!0)):typeof t=="function"?kt=t:(kt=null,Ws.remove("logging_enabled"))},ce=function(...t){if(_c===!0&&(_c=!1,kt===null&&Ws.get("logging_enabled")===!0&&l_(!0)),kt){const e=yr.apply(null,t);kt(e)}},vr=function(t){return function(...e){ce(t,...e)}},Hs=function(...t){const e="FIREBASE INTERNAL ERROR: "+yr(...t);en.error(e)},Je=function(...t){const e=`FIREBASE FATAL ERROR: ${yr(...t)}`;throw en.error(e),new Error(e)},me=function(...t){const e="FIREBASE WARNING: "+yr(...t);en.warn(e)},u_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&me("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ko=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},h_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},cn="[MIN_NAME]",Mt="[MAX_NAME]",Wt=function(t,e){if(t===e)return 0;if(t===cn||e===Mt)return-1;if(e===cn||t===Mt)return 1;{const n=yc(t),r=yc(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},d_=function(t,e){return t===e?0:t<e?-1:1},Tn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ne(e))},Oo=function(t){if(typeof t!="object"||t===null)return ne(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ne(e[r]),n+=":",n+=Oo(t[e[r]]);return n+="}",n},Bu=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Wu=function(t){y(!ko(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let f=parseInt(h.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},f_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},p_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function g_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const m_=new RegExp("^-?(0*)\\d{1,10}$"),__=-2147483648,y_=2147483647,yc=function(t){if(m_.test(t)){const e=Number(t);if(e>=__&&e<=y_)return e}return null},vn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw me("Exception was thrown by user callback.",n),e},Math.floor(0))}},v_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$n=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){me(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',me(e)}}class tn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="5",Hu="v",ju="s",Vu="r",Gu="f",zu=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qu="ls",Ku="p",js="ac",Yu="websocket",Qu="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Rt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Rt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function E_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xu(t,e,n){y(typeof e=="string","typeof type must == string"),y(typeof n=="object","typeof params must == object");let r;if(e===Yu)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qu)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);E_(t)&&(n.ns=t.namespace);const i=[];return ue(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(){this.counters_={}}incrementCounter(e,n=1){je(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return df(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={},vs={};function xo(t){const e=t.toString();return ys[e]||(ys[e]=new C_),ys[e]}function S_(t,e){const n=t.toString();return vs[n]||(vs[n]=e()),vs[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&vn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="start",T_="close",A_="pLPCommand",R_="pRTLPCB",Zu="id",eh="pw",th="ser",P_="cb",k_="seg",O_="ts",N_="d",x_="dframe",nh=1870,rh=30,D_=nh-rh,M_=25e3,L_=3e4;class Jt{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vr(e),this.stats_=xo(n),this.urlFn=c=>(this.appCheckToken&&(c[js]=this.appCheckToken),Xu(n,Qu,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new I_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(L_)),h_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Do((...s)=>{const[o,a,c,l,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vc)this.id=a,this.password=c;else if(o===T_)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[vc]="t",r[th]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[P_]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Hu]=No,this.transportSessionId&&(r[ju]=this.transportSessionId),this.lastSessionId&&(r[qu]=this.lastSessionId),this.applicationId&&(r[Ku]=this.applicationId),this.appCheckToken&&(r[js]=this.appCheckToken),typeof location<"u"&&location.hostname&&zu.test(location.hostname)&&(r[Vu]=Gu);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jt.forceAllow_=!0}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){return Jt.forceAllow_?!0:!Jt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!f_()&&!p_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vl(n),i=Bu(r,D_);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[x_]="t",r[Zu]=e,r[eh]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Do{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=c_(),window[A_+this.uniqueCallbackIdentifier]=e,window[R_+this.uniqueCallbackIdentifier]=n,this.myIFrame=Do.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ce("frame writing exception"),a.stack&&ce(a.stack),ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zu]=this.myID,e[eh]=this.myPW,e[th]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rh+r.length<=nh;){const o=this.pendingSegs.shift();r=r+"&"+k_+i+"="+o.seg+"&"+O_+i+"="+o.ts+"&"+N_+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(M_)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_=16384,$_=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class ke{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vr(this.connId),this.stats_=xo(n),this.connURL=ke.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Hu]=No,typeof location<"u"&&location.hostname&&zu.test(location.hostname)&&(o[Vu]=Gu),n&&(o[ju]=n),r&&(o[qu]=r),i&&(o[js]=i),s&&(o[Ku]=s),Xu(e,Yu,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Rt.set("previous_websocket_failure",!0);try{let r;Ql(),this.mySock=new ei(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ei!==null&&!ke.forceDisallow_}static previouslyFailed(){return Rt.isInMemoryStorage||Rt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Rt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Vn(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Bu(n,F_);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ke.responsesRequiredToBeHealthy=2;ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jt,ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ke&&ke.isAvailable();let r=n&&!ke.previouslyFailed();if(e.webSocketOnly&&(n||me("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ke];else{const i=this.transports_=[];for(const s of Qn.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=6e4,B_=5e3,W_=10*1024,H_=100*1024,bs="t",bc="d",j_="s",wc="r",V_="e",Ec="o",Cc="a",Sc="n",Ic="p",G_="h";class z_{constructor(e,n,r,i,s,o,a,c,l,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vr("c:"+this.id+":"),this.transportManager_=new Qn(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$n(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>H_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>W_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bs in e){const n=e[bs];n===Cc?this.upgradeIfSecondaryHealthy_():n===wc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ec&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Tn("t",e),r=Tn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ic,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Cc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Sc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Tn("t",e),r=Tn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Tn(bs,e);if(bc in e){const r=e[bc];if(n===G_){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Sc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===j_?this.onConnectionShutdown_(r):n===wc?this.onReset_(r):n===V_?Hs("Server Error: "+r):n===Ec?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),No!==r&&me("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$n(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(U_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$n(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(B_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ic,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Rt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){y(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends sh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!mo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ti}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=32,Ac=768;class U{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function D(){return new U("")}function x(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vt(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new U(t.pieces_,e)}function Mo(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function q_(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Jn(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function oh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new U(e,0)}function Q(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof U)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new U(n,0)}function N(t){return t.pieceNum_>=t.pieces_.length}function ge(t,e){const n=x(t),r=x(e);if(n===null)return e;if(n===r)return ge(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function K_(t,e){const n=Jn(t,0),r=Jn(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Wt(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ah(t,e){if(vt(t)!==vt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ie(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(vt(t)>vt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Y_{constructor(e,n){this.errorPrefix_=n,this.parts_=Jn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gi(this.parts_[r]);ch(this)}}function Q_(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gi(e),ch(t)}function J_(t){const e=t.parts_.pop();t.byteLength_-=gi(e),t.parts_.length>0&&(t.byteLength_-=1)}function ch(t){if(t.byteLength_>Ac)throw new Error(t.errorPrefix_+"has a key path longer than "+Ac+" bytes ("+t.byteLength_+").");if(t.parts_.length>Tc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Tc+") or object contains a cycle "+It(t))}function It(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends sh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Lo}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=1e3,X_=60*5*1e3,Rc=30*1e3,Z_=1.3,ey=3e4,ty="server_kill",Pc=3;class Ke extends ih{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ke.nextPersistentConnectionId_++,this.log_=vr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=An,this.maxReconnectDelay_=X_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ql())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ne(s)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new dr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Ke.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&je(e,"w")){const r=on(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();me(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Rf(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Af(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ne(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hs("Unrecognized action received from server: "+ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ey&&(this.reconnectDelay_=An),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Z_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ke.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(u){y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?ce("getToken() completed but was canceled"):(ce("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new z_(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{me(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ty)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&me(u),c())}}}interrupt(e){ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xs(this.interruptReasons_)&&(this.reconnectDelay_=An,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Oo(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new U(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Pc&&(this.reconnectDelay_=Rc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Pc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fu.replace(/\./g,"-")]=1,mo()?e["framework.cordova"]=1:Yl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return xs(this.interruptReasons_)&&e}}Ke.nextPersistentConnectionId_=0;Ke.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new k(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new k(cn,e),i=new k(cn,n);return this.compare(r,i)!==0}minPost(){return k.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pr;class lh extends bi{static get __EMPTY_NODE(){return Pr}static set __EMPTY_NODE(e){Pr=e}compare(e,n){return Wt(e.name,n.name)}isDefinedOn(e){throw gn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return k.MIN}maxPost(){return new k(Mt,Pr)}makePost(e,n){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new k(e,Pr)}toString(){return".key"}}const nn=new lh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ie.RED,this.left=i??_e.EMPTY_NODE,this.right=s??_e.EMPTY_NODE}copy(e,n,r,i,s){return new ie(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ie.RED=!0;ie.BLACK=!1;class ny{copy(e,n,r,i,s){return this}insert(e,n,r){return new ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _e{constructor(e,n=_e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ie.BLACK,null,null))}remove(e){return new _e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ie.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kr(this.root_,null,this.comparator_,!0,e)}}_e.EMPTY_NODE=new ny;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e){return Wt(t.name,e.name)}function Fo(t,e){return Wt(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;function iy(t){Vs=t}const uh=function(t){return typeof t=="number"?"number:"+Wu(t):"string:"+t},hh=function(t){if(t.isLeafNode()){const e=t.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&je(e,".sv"),"Priority must be a string or number.")}else y(t===Vs||t.isEmpty(),"priority of unexpected type.");y(t===Vs||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc;class re{constructor(e,n=re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),hh(this.priorityNode_)}static set __childrenNodeConstructor(e){kc=e}static get __childrenNodeConstructor(){return kc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:x(e)===".priority"?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=x(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(y(r!==".priority"||vt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,re.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Wu(this.value_):e+=this.value_,this.lazyHash_=Uu(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof re.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=re.VALUE_TYPE_ORDER.indexOf(n),s=re.VALUE_TYPE_ORDER.indexOf(r);return y(i>=0,"Unknown leaf type: "+n),y(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dh,fh;function sy(t){dh=t}function oy(t){fh=t}class ay extends bi{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Wt(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return k.MIN}maxPost(){return new k(Mt,new re("[PRIORITY-POST]",fh))}makePost(e,n){const r=dh(e);return new k(n,new re("[PRIORITY-POST]",r))}toString(){return".priority"}}const J=new ay;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=Math.log(2);class ly{constructor(e){const n=s=>parseInt(Math.log(s)/cy,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(t,e,n,r){t.sort(e);const i=function(c,l){const h=l-c;let u,f;if(h===0)return null;if(h===1)return u=t[c],f=n?n(u):u,new ie(f,u.node,ie.BLACK,null,null);{const g=parseInt(h/2,10)+c,p=i(c,g),_=i(g+1,l);return u=t[g],f=n?n(u):u,new ie(f,u.node,ie.BLACK,p,_)}},s=function(c){let l=null,h=null,u=t.length;const f=function(p,_){const b=u-p,w=u;u-=p;const I=i(b+1,w),E=t[b],v=n?n(E):E;g(new ie(v,E.node,_,null,I))},g=function(p){l?(l.left=p,l=p):(h=p,l=p)};for(let p=0;p<c.count;++p){const _=c.nextBitIsOne(),b=Math.pow(2,c.count-(p+1));_?f(b,ie.BLACK):(f(b,ie.BLACK),f(b,ie.RED))}return h},o=new ly(t.length),a=s(o);return new _e(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;const Gt={};class qe{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return y(Gt&&J,"ChildrenNode.ts has not been loaded"),ws=ws||new qe({".priority":Gt},{".priority":J}),ws}get(e){const n=on(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _e?n:null}hasIndex(e){return je(this.indexSet_,e.toString())}addIndex(e,n){y(e!==nn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(k.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ni(r,e.getCompare()):a=Gt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new qe(h,l)}addToIndexes(e,n){const r=zr(this.indexes_,(i,s)=>{const o=on(this.indexSet_,s);if(y(o,"Missing index implementation for "+s),i===Gt)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(k.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),ni(a,o.getCompare())}else return Gt;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new k(e.name,a))),c.insert(e,e.node)}});return new qe(r,this.indexSet_)}removeFromIndexes(e,n){const r=zr(this.indexes_,i=>{if(i===Gt)return i;{const s=n.get(e.name);return s?i.remove(new k(e.name,s)):i}});return new qe(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rn;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&hh(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Rn||(Rn=new A(new _e(Fo),null,qe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rn}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Rn:n}}getChild(e){const n=x(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(y(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new k(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Rn:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=x(e);if(r===null)return n;{y(x(e)!==".priority"||vt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(J,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uh(this.getPriority().val())+":"),this.forEachChild(J,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Uu(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new k(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new k(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new k(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,k.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,k.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===br?-1:0}withIndex(e){if(e===nn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===nn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(J),i=n.getIterator(J);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===nn?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class uy extends A{constructor(){super(new _e(Fo),A.EMPTY_NODE,qe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const br=new uy;Object.defineProperties(k,{MIN:{value:new k(cn,A.EMPTY_NODE)},MAX:{value:new k(Mt,br)}});lh.__EMPTY_NODE=A.EMPTY_NODE;re.__childrenNodeConstructor=A;iy(br);oy(br);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=!0;function te(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new re(n,te(e))}if(!(t instanceof Array)&&hy){const n=[];let r=!1;if(ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=te(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new k(o,c)))}}),n.length===0)return A.EMPTY_NODE;const s=ni(n,ry,o=>o.name,Fo);if(r){const o=ni(n,J.getCompare());return new A(s,te(e),new qe({".priority":o},{".priority":J}))}else return new A(s,te(e),qe.Default)}else{let n=A.EMPTY_NODE;return ue(t,(r,i)=>{if(je(t,r)&&r.substring(0,1)!=="."){const s=te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(te(e))}}sy(te);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy extends bi{constructor(e){super(),this.indexPath_=e,y(!N(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Wt(e.name,n.name):s}makePost(e,n){const r=te(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new k(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,br);return new k(Mt,e)}toString(){return Jn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends bi{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Wt(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return k.MIN}maxPost(){return k.MAX}makePost(e,n){const r=te(e);return new k(n,r)}toString(){return".value"}}const py=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){return{type:"value",snapshotNode:t}}function ln(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xn(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Zn(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Xn(n,a)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ln(n,r)):o.trackChildChange(Zn(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(J,(i,s)=>{n.hasChild(i)||r.trackChildChange(Xn(i,s))}),n.isLeafNode()||n.forEachChild(J,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Zn(i,s,o))}else r.trackChildChange(ln(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.indexedFilter_=new $o(e.getIndex()),this.index_=e.getIndex(),this.startPost_=er.getStartPost_(e),this.endPost_=er.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new k(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(J,(o,a)=>{s.matches(new k(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new er(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new k(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,g)=>u(g,f)}else o=this.index_.getCompare();const a=e;y(a.numChildren()===this.limit_,"");const c=new k(n,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,l,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,c);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Zn(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Xn(n,u));const _=a.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ln(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:h&&o(l,c)>=0?(s!=null&&(s.trackChildChange(Xn(l.name,l.node)),s.trackChildChange(ln(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(l.name,A.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=J}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:cn}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Mt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===J}copy(){const e=new Uo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _y(t){return t.loadsAllData()?new $o(t.getIndex()):t.hasLimit()?new my(t):new er(t)}function Oc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===J?n="$priority":t.index_===py?n="$value":t.index_===nn?n="$key":(y(t.index_ instanceof dy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ne(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ne(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ne(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ne(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ne(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Nc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==J&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ih{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=vr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ri.getListenId_(e,r),a={};this.listens_[o]=a;const c=Oc(e._queryParams);this.restRequest_(s+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,r),on(this.listens_,o)===a){let f;l?l===401?f="permission_denied":f="rest_error:"+l:f="ok",i(f,null)}})}unlisten(e,n){const r=ri.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Oc(e._queryParams),r=e._path.toString(),i=new dr;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+mn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Vn(a.responseText)}catch{me("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&me("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(){return{value:null,children:new Map}}function gh(t,e,n){if(N(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=x(e);t.children.has(r)||t.children.set(r,ii());const i=t.children.get(r);e=G(e),gh(i,e,n)}}function Gs(t,e,n){t.value!==null?n(e,t.value):vy(t,(r,i)=>{const s=new U(e.toString()+"/"+r);Gs(i,s,n)})}function vy(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ue(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=10*1e3,wy=30*1e3,Ey=5*60*1e3;class Cy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new by(e);const r=xc+(wy-xc)*Math.random();$n(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ue(e,(i,s)=>{s>0&&je(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$n(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ey))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Oe||(Oe={}));function Bo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ho(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Oe.ACK_USER_WRITE,this.source=Bo()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new U(e));return new si(D(),n,this.revert)}}else return y(x(this.path)===e,"operationForChild called for unrelated child."),new si(G(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n){this.source=e,this.path=n,this.type=Oe.LISTEN_COMPLETE}operationForChild(e){return N(this.path)?new tr(this.source,D()):new tr(this.source,G(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Oe.OVERWRITE}operationForChild(e){return N(this.path)?new Lt(this.source,D(),this.snap.getImmediateChild(e)):new Lt(this.source,G(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Oe.MERGE}operationForChild(e){if(N(this.path)){const n=this.children.subtree(new U(e));return n.isEmpty()?null:n.value?new Lt(this.source,D(),n.value):new un(this.source,D(),n)}else return y(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new un(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const n=x(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Iy(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(gy(o.childName,o.snapshotNode))}),Pn(t,i,"child_removed",e,r,n),Pn(t,i,"child_added",e,r,n),Pn(t,i,"child_moved",s,r,n),Pn(t,i,"child_changed",e,r,n),Pn(t,i,"value",e,r,n),i}function Pn(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>Ay(t,a,c)),o.forEach(a=>{const c=Ty(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Ty(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ay(t,e,n){if(e.childName==null||n.childName==null)throw gn("Should only compare child_ events.");const r=new k(e.childName,e.snapshotNode),i=new k(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(t,e){return{eventCache:t,serverCache:e}}function Un(t,e,n,r){return wi(new bt(e,n,r),t.serverCache)}function mh(t,e,n,r){return wi(t.eventCache,new bt(e,n,r))}function oi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ft(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;const Ry=()=>(Es||(Es=new _e(d_)),Es);class V{constructor(e,n=Ry()){this.value=e,this.children=n}static fromObject(e){let n=new V(null);return ue(e,(r,i)=>{n=n.set(new U(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:D(),value:this.value};if(N(e))return null;{const r=x(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:Q(new U(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const n=x(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new V(null)}}set(e,n){if(N(e))return new V(n,this.children);{const r=x(e),s=(this.children.get(r)||new V(null)).set(G(e),n),o=this.children.insert(r,s);return new V(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new V(null):new V(null,this.children);{const n=x(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new V(null):new V(this.value,s)}else return this}}get(e){if(N(e))return this.value;{const n=x(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(N(e))return n;{const r=x(e),s=(this.children.get(r)||new V(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new V(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Q(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,D(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(N(e))return null;{const s=x(e),o=this.children.get(s);return o?o.findOnPath_(G(e),Q(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,D(),n)}foreachOnPath_(e,n,r){if(N(e))return this;{this.value&&r(n,this.value);const i=x(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),Q(n,i),r):new V(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Q(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.writeTree_=e}static empty(){return new Ne(new V(null))}}function Bn(t,e,n){if(N(e))return new Ne(new V(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ge(i,e);return s=s.updateChild(o,n),new Ne(t.writeTree_.set(i,s))}else{const i=new V(n),s=t.writeTree_.setTree(e,i);return new Ne(s)}}}function zs(t,e,n){let r=t;return ue(n,(i,s)=>{r=Bn(r,Q(e,i),s)}),r}function Dc(t,e){if(N(e))return Ne.empty();{const n=t.writeTree_.setTree(e,new V(null));return new Ne(n)}}function qs(t,e){return Ht(t,e)!=null}function Ht(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ge(n.path,e)):null}function Mc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(J,(r,i)=>{e.push(new k(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new k(r,i.value))}),e}function _t(t,e){if(N(e))return t;{const n=Ht(t,e);return n!=null?new Ne(new V(n)):new Ne(t.writeTree_.subtree(e))}}function Ks(t){return t.writeTree_.isEmpty()}function hn(t,e){return _h(D(),t.writeTree_,e)}function _h(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(y(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=_h(Q(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Q(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e){return wh(e,t)}function Py(t,e,n,r,i){y(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bn(t.visibleWrites,e,n)),t.lastWriteId=r}function ky(t,e,n,r){y(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=zs(t.visibleWrites,e,n),t.lastWriteId=r}function Oy(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ny(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);y(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&xy(a,r.path)?i=!1:Ie(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Dy(t),!0;if(r.snap)t.visibleWrites=Dc(t.visibleWrites,r.path);else{const a=r.children;ue(a,c=>{t.visibleWrites=Dc(t.visibleWrites,Q(r.path,c))})}return!0}else return!1}function xy(t,e){if(t.snap)return Ie(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ie(Q(t.path,n),e))return!0;return!1}function Dy(t){t.visibleWrites=yh(t.allWrites,My,D()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function My(t){return t.visible}function yh(t,e,n){let r=Ne.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ie(n,o)?(a=ge(n,o),r=Bn(r,a,s.snap)):Ie(o,n)&&(a=ge(o,n),r=Bn(r,D(),s.snap.getChild(a)));else if(s.children){if(Ie(n,o))a=ge(n,o),r=zs(r,a,s.children);else if(Ie(o,n))if(a=ge(o,n),N(a))r=zs(r,D(),s.children);else{const c=on(s.children,x(a));if(c){const l=c.getChild(G(a));r=Bn(r,D(),l)}}}else throw gn("WriteRecord should have .snap or .children")}}return r}function vh(t,e,n,r,i){if(!r&&!i){const s=Ht(t.visibleWrites,e);if(s!=null)return s;{const o=_t(t.visibleWrites,e);if(Ks(o))return n;if(n==null&&!qs(o,D()))return null;{const a=n||A.EMPTY_NODE;return hn(o,a)}}}else{const s=_t(t.visibleWrites,e);if(!i&&Ks(s))return n;if(!i&&n==null&&!qs(s,D()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Ie(l.path,e)||Ie(e,l.path))},a=yh(t.allWrites,o,e),c=n||A.EMPTY_NODE;return hn(a,c)}}}function Ly(t,e,n){let r=A.EMPTY_NODE;const i=Ht(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(J,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_t(t.visibleWrites,e);return n.forEachChild(J,(o,a)=>{const c=hn(_t(s,new U(o)),a);r=r.updateImmediateChild(o,c)}),Mc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_t(t.visibleWrites,e);return Mc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Fy(t,e,n,r,i){y(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Q(e,n);if(qs(t.visibleWrites,s))return null;{const o=_t(t.visibleWrites,s);return Ks(o)?i.getChild(n):hn(o,i.getChild(n))}}function $y(t,e,n,r){const i=Q(e,n),s=Ht(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_t(t.visibleWrites,i);return hn(o,r.getNode().getImmediateChild(n))}else return null}function Uy(t,e){return Ht(t.visibleWrites,e)}function By(t,e,n,r,i,s,o){let a;const c=_t(t.visibleWrites,e),l=Ht(c,D());if(l!=null)a=l;else if(n!=null)a=hn(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&h.length<i;)u(g,r)!==0&&h.push(g),g=f.getNext();return h}else return[]}function Wy(){return{visibleWrites:Ne.empty(),allWrites:[],lastWriteId:-1}}function ai(t,e,n,r){return vh(t.writeTree,t.treePath,e,n,r)}function jo(t,e){return Ly(t.writeTree,t.treePath,e)}function Lc(t,e,n,r){return Fy(t.writeTree,t.treePath,e,n,r)}function ci(t,e){return Uy(t.writeTree,Q(t.treePath,e))}function Hy(t,e,n,r,i,s){return By(t.writeTree,t.treePath,e,n,r,i,s)}function Vo(t,e,n){return $y(t.writeTree,t.treePath,e,n)}function bh(t,e){return wh(Q(t.treePath,e),t.writeTree)}function wh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;y(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),y(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Zn(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Xn(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ln(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Zn(r,e.snapshotNode,i.oldSnap));else throw gn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Eh=new Vy;class Go{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new bt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vo(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ft(this.viewCache_),s=Hy(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t){return{filter:t}}function zy(t,e){y(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qy(t,e,n,r,i){const s=new jy;let o,a;if(n.type===Oe.OVERWRITE){const l=n;l.source.fromUser?o=Ys(t,e,l.path,l.snap,r,i,s):(y(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!N(l.path),o=li(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===Oe.MERGE){const l=n;l.source.fromUser?o=Yy(t,e,l.path,l.children,r,i,s):(y(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Qs(t,e,l.path,l.children,r,i,a,s))}else if(n.type===Oe.ACK_USER_WRITE){const l=n;l.revert?o=Xy(t,e,l.path,r,i,s):o=Qy(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===Oe.LISTEN_COMPLETE)o=Jy(t,e,n.path,r,s);else throw gn("Unknown operation type: "+n.type);const c=s.getChanges();return Ky(e,o,c),{viewCache:o,changes:c}}function Ky(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=oi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(ph(oi(e)))}}function Ch(t,e,n,r,i,s){const o=e.eventCache;if(ci(r,n)!=null)return e;{let a,c;if(N(n))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ft(e),h=l instanceof A?l:A.EMPTY_NODE,u=jo(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=ai(r,Ft(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=x(n);if(l===".priority"){y(vt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Lc(r,n,h,c);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=G(n);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const f=Lc(r,n,o.getNode(),c);f!=null?u=o.getNode().getImmediateChild(l).updateChild(h,f):u=o.getNode().getImmediateChild(l)}else u=Vo(r,l,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),l,u,h,i,s):a=o.getNode()}}return Un(e,a,o.isFullyInitialized()||N(n),t.filter.filtersNodes())}}function li(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(N(n))l=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,r);l=h.updateFullNode(c.getNode(),g,null)}else{const g=x(n);if(!c.isCompleteForPath(n)&&vt(n)>1)return e;const p=G(n),b=c.getNode().getImmediateChild(g).updateChild(p,r);g===".priority"?l=h.updatePriority(c.getNode(),b):l=h.updateChild(c.getNode(),g,b,p,Eh,null)}const u=mh(e,l,c.isFullyInitialized()||N(n),h.filtersNodes()),f=new Go(i,u,s);return Ch(t,u,n,i,f,a)}function Ys(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const h=new Go(i,e,s);if(N(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=Un(e,l,!0,t.filter.filtersNodes());else{const u=x(n);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=Un(e,l,a.isFullyInitialized(),a.isFiltered());else{const f=G(n),g=a.getNode().getImmediateChild(u);let p;if(N(f))p=r;else{const _=h.getCompleteChild(u);_!=null?Mo(f)===".priority"&&_.getChild(oh(f)).isEmpty()?p=_:p=_.updateChild(f,r):p=A.EMPTY_NODE}if(g.equals(p))c=e;else{const _=t.filter.updateChild(a.getNode(),u,p,f,h,o);c=Un(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Fc(t,e){return t.eventCache.isCompleteForChild(e)}function Yy(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const h=Q(n,c);Fc(e,x(h))&&(a=Ys(t,a,h,l,i,s,o))}),r.foreach((c,l)=>{const h=Q(n,c);Fc(e,x(h))||(a=Ys(t,a,h,l,i,s,o))}),a}function $c(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Qs(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;N(n)?l=r:l=new V(null).setTree(n,r);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,f)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),p=$c(t,g,f);c=li(t,c,new U(u),p,i,s,o,a)}}),l.children.inorderTraversal((u,f)=>{const g=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!h.hasChild(u)&&!g){const p=e.serverCache.getNode().getImmediateChild(u),_=$c(t,p,f);c=li(t,c,new U(u),_,i,s,o,a)}}),c}function Qy(t,e,n,r,i,s,o){if(ci(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(N(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return li(t,e,n,c.getNode().getChild(n),i,s,a,o);if(N(n)){let l=new V(null);return c.getNode().forEachChild(nn,(h,u)=>{l=l.set(new U(h),u)}),Qs(t,e,n,l,i,s,a,o)}else return e}else{let l=new V(null);return r.foreach((h,u)=>{const f=Q(n,h);c.isCompleteForPath(f)&&(l=l.set(h,c.getNode().getChild(f)))}),Qs(t,e,n,l,i,s,a,o)}}function Jy(t,e,n,r,i){const s=e.serverCache,o=mh(e,s.getNode(),s.isFullyInitialized()||N(n),s.isFiltered());return Ch(t,o,n,r,Eh,i)}function Xy(t,e,n,r,i,s){let o;if(ci(r,n)!=null)return e;{const a=new Go(r,e,i),c=e.eventCache.getNode();let l;if(N(n)||x(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ai(r,Ft(e));else{const u=e.serverCache.getNode();y(u instanceof A,"serverChildren would be complete if leaf node"),h=jo(r,u)}h=h,l=t.filter.updateFullNode(c,h,s)}else{const h=x(n);let u=Vo(r,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=t.filter.updateChild(c,h,u,G(n),a,s):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(c,h,A.EMPTY_NODE,G(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ai(r,Ft(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||ci(r,D())!=null,Un(e,l,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new $o(r.getIndex()),s=_y(r);this.processor_=Gy(s);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),h=new bt(c,o.isFullyInitialized(),i.filtersNodes()),u=new bt(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=wi(u,h),this.eventGenerator_=new Sy(this.query_)}get query(){return this.query_}}function ev(t){return t.viewCache_.serverCache.getNode()}function tv(t){return oi(t.viewCache_)}function nv(t,e){const n=Ft(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!N(e)&&!n.getImmediateChild(x(e)).isEmpty())?n.getChild(e):null}function Uc(t){return t.eventRegistrations_.length===0}function rv(t,e){t.eventRegistrations_.push(e)}function Bc(t,e,n){const r=[];if(n){y(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Wc(t,e,n,r){e.type===Oe.MERGE&&e.source.queryId!==null&&(y(Ft(t.viewCache_),"We should always have a full cache before handling merges"),y(oi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=qy(t.processor_,i,e,n,r);return zy(t.processor_,s.viewCache),y(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Sh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function iv(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(J,(s,o)=>{r.push(ln(s,o))}),n.isFullyInitialized()&&r.push(ph(n.getNode())),Sh(t,r,n.getNode(),e)}function Sh(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Iy(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;class Ih{constructor(){this.views=new Map}}function sv(t){y(!ui,"__referenceConstructor has already been defined"),ui=t}function ov(){return y(ui,"Reference.ts has not been loaded"),ui}function av(t){return t.views.size===0}function zo(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return y(s!=null,"SyncTree gave us an op for an invalid query."),Wc(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Wc(o,e,n,r));return s}}function Th(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=ai(n,i?r:null),c=!1;a?c=!0:r instanceof A?(a=jo(n,r),c=!1):(a=A.EMPTY_NODE,c=!1);const l=wi(new bt(a,c,!1),new bt(r,i,!1));return new Zy(e,l)}return o}function cv(t,e,n,r,i,s){const o=Th(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rv(o,n),iv(o,n)}function lv(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=wt(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(Bc(l,n,r)),Uc(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(Bc(c,n,r)),Uc(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!wt(t)&&s.push(new(ov())(e._repo,e._path)),{removed:s,events:o}}function Ah(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function yt(t,e){let n=null;for(const r of t.views.values())n=n||nv(r,e);return n}function Rh(t,e){if(e._queryParams.loadsAllData())return Ci(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Ph(t,e){return Rh(t,e)!=null}function wt(t){return Ci(t)!=null}function Ci(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi;function uv(t){y(!hi,"__referenceConstructor has already been defined"),hi=t}function hv(){return y(hi,"Reference.ts has not been loaded"),hi}let dv=1;class Hc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=Wy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function kh(t,e,n,r,i){return Py(t.pendingWriteTree_,e,n,r,i),i?bn(t,new Lt(Bo(),e,n)):[]}function fv(t,e,n,r){ky(t.pendingWriteTree_,e,n,r);const i=V.fromObject(n);return bn(t,new un(Bo(),e,i))}function ft(t,e,n=!1){const r=Oy(t.pendingWriteTree_,e);if(Ny(t.pendingWriteTree_,e)){let s=new V(null);return r.snap!=null?s=s.set(D(),!0):ue(r.children,o=>{s=s.set(new U(o),!0)}),bn(t,new si(r.path,s,n))}else return[]}function wr(t,e,n){return bn(t,new Lt(Wo(),e,n))}function pv(t,e,n){const r=V.fromObject(n);return bn(t,new un(Wo(),e,r))}function gv(t,e){return bn(t,new tr(Wo(),e))}function mv(t,e,n){const r=Ko(t,n);if(r){const i=Yo(r),s=i.path,o=i.queryId,a=ge(s,e),c=new tr(Ho(o),a);return Qo(t,s,c)}else return[]}function Oh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Ph(o,e))){const c=lv(o,e,n,r);av(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const h=l.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(f,g)=>wt(g));if(h&&!u){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=bv(f);for(let p=0;p<g.length;++p){const _=g[p],b=_.query,w=Mh(t,_);t.listenProvider_.startListening(Wn(b),nr(t,b),w.hashFn,w.onComplete)}}}!u&&l.length>0&&!r&&(h?t.listenProvider_.stopListening(Wn(e),null):l.forEach(f=>{const g=t.queryToTagMap.get(Si(f));t.listenProvider_.stopListening(Wn(f),g)}))}wv(t,l)}return a}function Nh(t,e,n,r){const i=Ko(t,r);if(i!=null){const s=Yo(i),o=s.path,a=s.queryId,c=ge(o,e),l=new Lt(Ho(a),c,n);return Qo(t,o,l)}else return[]}function _v(t,e,n,r){const i=Ko(t,r);if(i){const s=Yo(i),o=s.path,a=s.queryId,c=ge(o,e),l=V.fromObject(n),h=new un(Ho(a),c,l);return Qo(t,o,h)}else return[]}function yv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const p=ge(f,i);s=s||yt(g,p),o=o||wt(g)});let a=t.syncPointTree_.get(i);a?(o=o||wt(a),s=s||yt(a,D())):(a=new Ih,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;s!=null?c=!0:(c=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,p)=>{const _=yt(p,D());_&&(s=s.updateImmediateChild(g,_))}));const l=Ph(a,e);if(!l&&!e._queryParams.loadsAllData()){const f=Si(e);y(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Ev();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const h=Ei(t.pendingWriteTree_,i);let u=cv(a,e,n,h,s,c);if(!l&&!o&&!r){const f=Rh(a,e);u=u.concat(Cv(t,e,f))}return u}function qo(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ge(o,e),l=yt(a,c);if(l)return l});return vh(i,e,s,n,!0)}function vv(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(l,h)=>{const u=ge(l,n);r=r||yt(h,u)});let i=t.syncPointTree_.get(n);i?r=r||yt(i,D()):(i=new Ih,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new bt(r,!0,!1):null,a=Ei(t.pendingWriteTree_,e._path),c=Th(i,e,a,s?o.getNode():A.EMPTY_NODE,s);return tv(c)}function bn(t,e){return xh(e,t.syncPointTree_,null,Ei(t.pendingWriteTree_,D()))}function xh(t,e,n,r){if(N(t.path))return Dh(t,e,n,r);{const i=e.get(D());n==null&&i!=null&&(n=yt(i,D()));let s=[];const o=x(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,h=bh(r,o);s=s.concat(xh(a,c,l,h))}return i&&(s=s.concat(zo(i,t,r,n))),s}}function Dh(t,e,n,r){const i=e.get(D());n==null&&i!=null&&(n=yt(i,D()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=bh(r,o),h=t.operationForChild(o);h&&(s=s.concat(Dh(h,a,c,l)))}),i&&(s=s.concat(zo(i,t,r,n))),s}function Mh(t,e){const n=e.query,r=nr(t,n);return{hashFn:()=>(ev(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?mv(t,n._path,r):gv(t,n._path);{const s=g_(i,n);return Oh(t,n,null,s)}}}}function nr(t,e){const n=Si(e);return t.queryToTagMap.get(n)}function Si(t){return t._path.toString()+"$"+t._queryIdentifier}function Ko(t,e){return t.tagToQueryMap.get(e)}function Yo(t){const e=t.indexOf("$");return y(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new U(t.substr(0,e))}}function Qo(t,e,n){const r=t.syncPointTree_.get(e);y(r,"Missing sync point for query tag that we're tracking");const i=Ei(t.pendingWriteTree_,e);return zo(r,n,i,null)}function bv(t){return t.fold((e,n,r)=>{if(n&&wt(n))return[Ci(n)];{let i=[];return n&&(i=Ah(n)),ue(r,(s,o)=>{i=i.concat(o)}),i}})}function Wn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hv())(t._repo,t._path):t}function wv(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Si(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Ev(){return dv++}function Cv(t,e,n){const r=e._path,i=nr(t,e),s=Mh(t,n),o=t.listenProvider_.startListening(Wn(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)y(!wt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,u)=>{if(!N(l)&&h&&wt(h))return[Ci(h).query];{let f=[];return h&&(f=f.concat(Ah(h).map(g=>g.query))),ue(u,(g,p)=>{f=f.concat(p)}),f}});for(let l=0;l<c.length;++l){const h=c[l];t.listenProvider_.stopListening(Wn(h),nr(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jo(n)}node(){return this.node_}}class Xo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Q(this.path_,e);return new Xo(this.syncTree_,n)}node(){return qo(this.syncTree_,this.path_)}}const Sv=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jc=function(t,e,n){if(!t||typeof t!="object")return t;if(y(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Iv(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Tv(t[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Iv=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:y(!1,"Unexpected server value: "+t)}},Tv=function(t,e,n){t.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&y(!1,"Unexpected increment value: "+r);const i=e.node();if(y(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Lh=function(t,e,n,r){return Zo(e,new Xo(n,t),r)},Fh=function(t,e,n){return Zo(t,new Jo(e),n)};function Zo(t,e,n){const r=t.getPriority().val(),i=jc(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=jc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new re(a,te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new re(i))),o.forEachChild(J,(a,c)=>{const l=Zo(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ta(t,e){let n=e instanceof U?e:new U(e),r=t,i=x(n);for(;i!==null;){const s=on(r.node.children,i)||{children:{},childCount:0};r=new ea(i,r,s),n=G(n),i=x(n)}return r}function wn(t){return t.node.value}function $h(t,e){t.node.value=e,Js(t)}function Uh(t){return t.node.childCount>0}function Av(t){return wn(t)===void 0&&!Uh(t)}function Ii(t,e){ue(t.node.children,(n,r)=>{e(new ea(n,t,r))})}function Bh(t,e,n,r){n&&!r&&e(t),Ii(t,i=>{Bh(i,e,!0,r)}),n&&r&&e(t)}function Rv(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Er(t){return new U(t.parent===null?t.name:Er(t.parent)+"/"+t.name)}function Js(t){t.parent!==null&&Pv(t.parent,t.name,t)}function Pv(t,e,n){const r=Av(n),i=je(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Js(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Js(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=/[\[\].#$\/\u0000-\u001F\u007F]/,Ov=/[\[\].#$\u0000-\u001F\u007F]/,Cs=10*1024*1024,na=function(t){return typeof t=="string"&&t.length!==0&&!kv.test(t)},Wh=function(t){return typeof t=="string"&&t.length!==0&&!Ov.test(t)},Nv=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wh(t)},xv=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ko(t)||t&&typeof t=="object"&&je(t,".sv")},Hh=function(t,e,n,r){r&&e===void 0||Ti(pi(t,"value"),e,n)},Ti=function(t,e,n){const r=n instanceof U?new Y_(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+It(r));if(typeof e=="function")throw new Error(t+"contains a function "+It(r)+" with contents = "+e.toString());if(ko(e))throw new Error(t+"contains "+e.toString()+" "+It(r));if(typeof e=="string"&&e.length>Cs/3&&gi(e)>Cs)throw new Error(t+"contains a string greater than "+Cs+" utf8 bytes "+It(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ue(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!na(o)))throw new Error(t+" contains an invalid key ("+o+") "+It(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Q_(r,o),Ti(t,a,r),J_(r)}),i&&s)throw new Error(t+' contains ".value" child '+It(r)+" in addition to actual children.")}},Dv=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Jn(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!na(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(K_);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ie(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Mv=function(t,e,n,r){if(r&&e===void 0)return;const i=pi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];ue(e,(o,a)=>{const c=new U(o);if(Ti(i,a,Q(n,c)),Mo(c)===".priority"&&!xv(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),Dv(i,s)},jh=function(t,e,n,r){if(!(r&&n===void 0)&&!Wh(n))throw new Error(pi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Lv=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jh(t,e,n,r)},Vh=function(t,e){if(x(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Fv=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!na(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Nv(n))throw new Error(pi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ra(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ah(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ae(t,e,n){ra(t,n),Uv(t,r=>Ie(r,e)||Ie(e,r))}function Uv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Bv(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Bv(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();kt&&ce("event: "+n.toString()),vn(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="repo_interrupt",Hv=25;class jv{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $v,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ii(),this.transactionQueueTree_=new ea,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Vv(t,e,n){if(t.stats_=xo(t.repoInfo_),t.forceRestClient_||v_())t.server_=new ri(t.repoInfo_,(r,i,s,o)=>{Vc(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Gc(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ne(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ke(t.repoInfo_,e,(r,i,s,o)=>{Vc(t,r,i,s,o)},r=>{Gc(t,r)},r=>{Gv(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=S_(t.repoInfo_,()=>new Cy(t.stats_,t.server_)),t.infoData_=new yy,t.infoSyncTree_=new Hc({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=wr(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ia(t,"connected",!1),t.serverSyncTree_=new Hc({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);Ae(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Gh(t){const n=t.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ai(t){return Sv({timestamp:Gh(t)})}function Vc(t,e,n,r,i){t.dataUpdateCount++;const s=new U(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=zr(n,l=>te(l));o=_v(t.serverSyncTree_,s,c,i)}else{const c=te(n);o=Nh(t.serverSyncTree_,s,c,i)}else if(r){const c=zr(n,l=>te(l));o=pv(t.serverSyncTree_,s,c)}else{const c=te(n);o=wr(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=dn(t,s)),Ae(t.eventQueue_,a,o)}function Gc(t,e){ia(t,"connected",e),e===!1&&Yv(t)}function Gv(t,e){ue(e,(n,r)=>{ia(t,n,r)})}function ia(t,e,n){const r=new U("/.info/"+e),i=te(n);t.infoData_.updateSnapshot(r,i);const s=wr(t.infoSyncTree_,r,i);Ae(t.eventQueue_,r,s)}function sa(t){return t.nextWriteId_++}function zv(t,e,n){const r=vv(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=te(i).withIndex(e._queryParams.getIndex());yv(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=wr(t.serverSyncTree_,e._path,s);else{const a=nr(t.serverSyncTree_,e);o=Nh(t.serverSyncTree_,e._path,s,a)}return Ae(t.eventQueue_,e._path,o),Oh(t.serverSyncTree_,e,n,null,!0),s},i=>(Cr(t,"get for query "+ne(e)+" failed: "+i),Promise.reject(new Error(i))))}function qv(t,e,n,r,i){Cr(t,"set",{path:e.toString(),value:n,priority:r});const s=Ai(t),o=te(n,r),a=qo(t.serverSyncTree_,e),c=Fh(o,a,s),l=sa(t),h=kh(t.serverSyncTree_,e,c,l,!0);ra(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const p=f==="ok";p||me("set at "+e+" failed: "+f);const _=ft(t.serverSyncTree_,l,!p);Ae(t.eventQueue_,e,_),Xs(t,i,f,g)});const u=aa(t,e);dn(t,u),Ae(t.eventQueue_,u,[])}function Kv(t,e,n,r){Cr(t,"update",{path:e.toString(),value:n});let i=!0;const s=Ai(t),o={};if(ue(n,(a,c)=>{i=!1,o[a]=Lh(Q(e,a),te(c),t.serverSyncTree_,s)}),i)ce("update() called with empty data.  Don't do anything."),Xs(t,r,"ok",void 0);else{const a=sa(t),c=fv(t.serverSyncTree_,e,o,a);ra(t.eventQueue_,c),t.server_.merge(e.toString(),n,(l,h)=>{const u=l==="ok";u||me("update at "+e+" failed: "+l);const f=ft(t.serverSyncTree_,a,!u),g=f.length>0?dn(t,e):e;Ae(t.eventQueue_,g,f),Xs(t,r,l,h)}),ue(n,l=>{const h=aa(t,Q(e,l));dn(t,h)}),Ae(t.eventQueue_,e,[])}}function Yv(t){Cr(t,"onDisconnectEvents");const e=Ai(t),n=ii();Gs(t.onDisconnect_,D(),(i,s)=>{const o=Lh(i,s,t.serverSyncTree_,e);gh(n,i,o)});let r=[];Gs(n,D(),(i,s)=>{r=r.concat(wr(t.serverSyncTree_,i,s));const o=aa(t,i);dn(t,o)}),t.onDisconnect_=ii(),Ae(t.eventQueue_,D(),r)}function Qv(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wv)}function Cr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ce(n,...e)}function Xs(t,e,n,r){e&&vn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function zh(t,e,n){return qo(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function oa(t,e=t.transactionQueueTree_){if(e||Ri(t,e),wn(e)){const n=Kh(t,e);y(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Jv(t,Er(e),n)}else Uh(e)&&Ii(e,n=>{oa(t,n)})}function Jv(t,e,n){const r=n.map(l=>l.currentWriteId),i=zh(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const h=n[l];y(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ge(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Cr(t,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,h=h.concat(ft(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ri(t,ta(t.transactionQueueTree_,e)),oa(t,t.transactionQueueTree_),Ae(t.eventQueue_,e,h);for(let f=0;f<u.length;f++)vn(u[f])}else{if(l==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{me("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=l}dn(t,e)}},o)}function dn(t,e){const n=qh(t,e),r=Er(n),i=Kh(t,n);return Xv(t,i,r),r}function Xv(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ge(n,c.path);let h=!1,u;if(y(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,i=i.concat(ft(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Hv)h=!0,u="maxretry",i=i.concat(ft(t.serverSyncTree_,c.currentWriteId,!0));else{const f=zh(t,c.path,o);c.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Ti("transaction failed: Data returned ",g,c.path);let p=te(g);typeof g=="object"&&g!=null&&je(g,".priority")||(p=p.updatePriority(f.getPriority()));const b=c.currentWriteId,w=Ai(t),I=Fh(p,f,w);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=I,c.currentWriteId=sa(t),o.splice(o.indexOf(b),1),i=i.concat(kh(t.serverSyncTree_,c.path,I,c.currentWriteId,c.applyLocally)),i=i.concat(ft(t.serverSyncTree_,b,!0))}else h=!0,u="nodata",i=i.concat(ft(t.serverSyncTree_,c.currentWriteId,!0))}Ae(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}Ri(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)vn(r[a]);oa(t,t.transactionQueueTree_)}function qh(t,e){let n,r=t.transactionQueueTree_;for(n=x(e);n!==null&&wn(r)===void 0;)r=ta(r,n),e=G(e),n=x(e);return r}function Kh(t,e){const n=[];return Yh(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Yh(t,e,n){const r=wn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ii(e,i=>{Yh(t,i,n)})}function Ri(t,e){const n=wn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,$h(e,n.length>0?n:void 0)}Ii(e,r=>{Ri(t,r)})}function aa(t,e){const n=Er(qh(t,e)),r=ta(t.transactionQueueTree_,e);return Rv(r,i=>{Ss(t,i)}),Ss(t,r),Bh(r,i=>{Ss(t,i)}),n}function Ss(t,e){const n=wn(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(y(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(y(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ft(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?$h(e,void 0):n.length=s+1,Ae(t.eventQueue_,Er(e),i);for(let o=0;o<r.length;o++)vn(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function e0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):me(`Invalid query segment '${n}' in query '${t}'`)}return e}const zc=function(t,e){const n=t0(t),r=n.namespace;n.domain==="firebase.com"&&Je(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Je("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||u_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ju(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new U(n.pathString)}},t0=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=Zv(t.substring(h,u)));const f=e0(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",n0=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=qc.charAt(n%64),n=Math.floor(n/64);y(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=qc.charAt(e[i]);return y(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ne(this.snapshot.exportVal())}}class i0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return N(this._path)?null:Mo(this._path)}get ref(){return new nt(this._repo,this._path)}get _queryIdentifier(){const e=Nc(this._queryParams),n=Oo(e);return n==="{}"?"default":n}get _queryObject(){return Nc(this._queryParams)}isEqual(e){if(e=fe(e),!(e instanceof ca))return!1;const n=this._repo===e._repo,r=ah(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+q_(this._path)}}class nt extends ca{constructor(e,n){super(e,n,new Uo,!1)}get parent(){const e=oh(this._path);return e===null?null:new nt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class rr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new U(e),r=ve(this.ref,e);return new rr(this._node.getChild(n),r,J)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new rr(i,ve(this.ref,r),J)))}hasChild(e){const n=new U(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rt(t,e){return t=fe(t),t._checkNotDeleted("ref"),e!==void 0?ve(t._root,e):t._root}function ve(t,e){return t=fe(t),x(t._path)===null?Lv("child","path",e,!1):jh("child","path",e,!1),new nt(t._repo,Q(t._path,e))}function Qh(t,e){t=fe(t),Vh("push",t._path),Hh("push",e,t._path,!0);const n=Gh(t._repo),r=n0(n),i=ve(t,r),s=ve(t,r);let o;return e!=null?o=En(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function En(t,e){t=fe(t),Vh("set",t._path),Hh("set",e,t._path,!1);const n=new dr;return qv(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function o0(t,e){Mv("update",e,t._path,!1);const n=new dr;return Kv(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Pi(t){t=fe(t);const e=new s0(()=>{}),n=new la(e);return zv(t._repo,t,n).then(r=>new rr(r,new nt(t._repo,t._path),t._queryParams.getIndex()))}class la{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new r0("value",this,new rr(e.snapshotNode,new nt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new i0(this,e,n):null}matches(e){return e instanceof la?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}sv(nt);uv(nt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="FIREBASE_DATABASE_EMULATOR_HOST",Zs={};let c0=!1;function l0(t,e,n,r){t.repoInfo_=new Ju(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function u0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Je("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zc(s,i),a=o.repoInfo,c,l;typeof process<"u"&&pc&&(l=pc[a0]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=zc(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const h=i&&c?new tn(tn.OWNER):new w_(t.name,t.options,e);Fv("Invalid Firebase Database URL",o),N(o.path)||Je("Database URL must point to the root of a Firebase Database (not including a child path).");const u=d0(a,t,h,new b_(t.name,n));return new f0(u,t)}function h0(t,e){const n=Zs[e];(!n||n[t.key]!==t)&&Je(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Qv(t),delete n[t.key]}function d0(t,e,n,r){let i=Zs[e.name];i||(i={},Zs[e.name]=i);let s=i[t.toURLString()];return s&&Je("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new jv(t,c0,n,r),i[t.toURLString()]=s,s}class f0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Vv(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nt(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(h0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Je("Cannot call "+e+" on a deleted database.")}}function p0(t=tu(),e){const n=vo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=yf("database");r&&g0(n,...r)}return n}function g0(t,e,n,r={}){t=fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Je("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Je('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new tn(tn.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:vf(r.mockUserToken,t.app.options.projectId);s=new tn(o)}l0(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){s_(_n),an(new Ot("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return u0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mt(gc,mc,t),mt(gc,mc,"esm2017")}Ke.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ke.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};m0();var Jh=typeof global=="object"&&global&&global.Object===Object&&global,_0=typeof self=="object"&&self&&self.Object===Object&&self,it=Jh||_0||Function("return this")(),We=it.Symbol,Xh=Object.prototype,y0=Xh.hasOwnProperty,v0=Xh.toString,kn=We?We.toStringTag:void 0;function b0(t){var e=y0.call(t,kn),n=t[kn];try{t[kn]=void 0;var r=!0}catch{}var i=v0.call(t);return r&&(e?t[kn]=n:delete t[kn]),i}var w0=Object.prototype,E0=w0.toString;function C0(t){return E0.call(t)}var S0="[object Null]",I0="[object Undefined]",Kc=We?We.toStringTag:void 0;function Cn(t){return t==null?t===void 0?I0:S0:Kc&&Kc in Object(t)?b0(t):C0(t)}function $t(t){return t!=null&&typeof t=="object"}var T0="[object Symbol]";function ua(t){return typeof t=="symbol"||$t(t)&&Cn(t)==T0}function Zh(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var He=Array.isArray,A0=1/0,Yc=We?We.prototype:void 0,Qc=Yc?Yc.toString:void 0;function ed(t){if(typeof t=="string")return t;if(He(t))return Zh(t,ed)+"";if(ua(t))return Qc?Qc.call(t):"";var e=t+"";return e=="0"&&1/t==-A0?"-0":e}function ha(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function da(t){return t}var R0="[object AsyncFunction]",P0="[object Function]",k0="[object GeneratorFunction]",O0="[object Proxy]";function td(t){if(!ha(t))return!1;var e=Cn(t);return e==P0||e==k0||e==R0||e==O0}var Is=it["__core-js_shared__"],Jc=function(){var t=/[^.]+$/.exec(Is&&Is.keys&&Is.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function N0(t){return!!Jc&&Jc in t}var x0=Function.prototype,D0=x0.toString;function jt(t){if(t!=null){try{return D0.call(t)}catch{}try{return t+""}catch{}}return""}var M0=/[\\^$.*+?()[\]{}|]/g,L0=/^\[object .+?Constructor\]$/,F0=Function.prototype,$0=Object.prototype,U0=F0.toString,B0=$0.hasOwnProperty,W0=RegExp("^"+U0.call(B0).replace(M0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function H0(t){if(!ha(t)||N0(t))return!1;var e=td(t)?W0:L0;return e.test(jt(t))}function j0(t,e){return t==null?void 0:t[e]}function Vt(t,e){var n=j0(t,e);return H0(n)?n:void 0}var eo=Vt(it,"WeakMap");function V0(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var G0=800,z0=16,q0=Date.now;function K0(t){var e=0,n=0;return function(){var r=q0(),i=z0-(r-n);if(n=r,i>0){if(++e>=G0)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Y0(t){return function(){return t}}var Xc=function(){try{var t=Vt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Q0=Xc?function(t,e){return Xc(t,"toString",{configurable:!0,enumerable:!1,value:Y0(e),writable:!0})}:da;const J0=Q0;var X0=K0(J0);function Z0(t,e,n,r){for(var i=t.length,s=n+(r?1:-1);r?s--:++s<i;)if(e(t[s],s,t))return s;return-1}function eb(t){return t!==t}function tb(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function nb(t,e,n){return e===e?tb(t,e,n):Z0(t,eb,n)}function rb(t,e){var n=t==null?0:t.length;return!!n&&nb(t,e,0)>-1}var ib=9007199254740991,sb=/^(?:0|[1-9]\d*)$/;function nd(t,e){var n=typeof t;return e=e??ib,!!e&&(n=="number"||n!="symbol"&&sb.test(t))&&t>-1&&t%1==0&&t<e}function rd(t,e){return t===e||t!==t&&e!==e}var Zc=Math.max;function ob(t,e,n){return e=Zc(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=Zc(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),V0(t,this,a)}}function ab(t,e){return X0(ob(t,e,da),t+"")}var cb=9007199254740991;function fa(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=cb}function id(t){return t!=null&&fa(t.length)&&!td(t)}var lb=Object.prototype;function ub(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||lb;return t===n}function hb(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var db="[object Arguments]";function el(t){return $t(t)&&Cn(t)==db}var sd=Object.prototype,fb=sd.hasOwnProperty,pb=sd.propertyIsEnumerable,pa=el(function(){return arguments}())?el:function(t){return $t(t)&&fb.call(t,"callee")&&!pb.call(t,"callee")};function gb(){return!1}var od=typeof exports=="object"&&exports&&!exports.nodeType&&exports,tl=od&&typeof module=="object"&&module&&!module.nodeType&&module,mb=tl&&tl.exports===od,nl=mb?it.Buffer:void 0,_b=nl?nl.isBuffer:void 0,to=_b||gb,yb="[object Arguments]",vb="[object Array]",bb="[object Boolean]",wb="[object Date]",Eb="[object Error]",Cb="[object Function]",Sb="[object Map]",Ib="[object Number]",Tb="[object Object]",Ab="[object RegExp]",Rb="[object Set]",Pb="[object String]",kb="[object WeakMap]",Ob="[object ArrayBuffer]",Nb="[object DataView]",xb="[object Float32Array]",Db="[object Float64Array]",Mb="[object Int8Array]",Lb="[object Int16Array]",Fb="[object Int32Array]",$b="[object Uint8Array]",Ub="[object Uint8ClampedArray]",Bb="[object Uint16Array]",Wb="[object Uint32Array]",z={};z[xb]=z[Db]=z[Mb]=z[Lb]=z[Fb]=z[$b]=z[Ub]=z[Bb]=z[Wb]=!0;z[yb]=z[vb]=z[Ob]=z[bb]=z[Nb]=z[wb]=z[Eb]=z[Cb]=z[Sb]=z[Ib]=z[Tb]=z[Ab]=z[Rb]=z[Pb]=z[kb]=!1;function Hb(t){return $t(t)&&fa(t.length)&&!!z[Cn(t)]}function ad(t){return function(e){return t(e)}}var cd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Hn=cd&&typeof module=="object"&&module&&!module.nodeType&&module,jb=Hn&&Hn.exports===cd,Ts=jb&&Jh.process,rl=function(){try{var t=Hn&&Hn.require&&Hn.require("util").types;return t||Ts&&Ts.binding&&Ts.binding("util")}catch{}}(),il=rl&&rl.isTypedArray,ld=il?ad(il):Hb,Vb=Object.prototype,Gb=Vb.hasOwnProperty;function zb(t,e){var n=He(t),r=!n&&pa(t),i=!n&&!r&&to(t),s=!n&&!r&&!i&&ld(t),o=n||r||i||s,a=o?hb(t.length,String):[],c=a.length;for(var l in t)(e||Gb.call(t,l))&&!(o&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||nd(l,c)))&&a.push(l);return a}function qb(t,e){return function(n){return t(e(n))}}var Kb=qb(Object.keys,Object),Yb=Object.prototype,Qb=Yb.hasOwnProperty;function Jb(t){if(!ub(t))return Kb(t);var e=[];for(var n in Object(t))Qb.call(t,n)&&n!="constructor"&&e.push(n);return e}function ud(t){return id(t)?zb(t):Jb(t)}var Xb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Zb=/^\w*$/;function ga(t,e){if(He(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||ua(t)?!0:Zb.test(t)||!Xb.test(t)||e!=null&&t in Object(e)}var ir=Vt(Object,"create");function ew(){this.__data__=ir?ir(null):{},this.size=0}function tw(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var nw="__lodash_hash_undefined__",rw=Object.prototype,iw=rw.hasOwnProperty;function sw(t){var e=this.__data__;if(ir){var n=e[t];return n===nw?void 0:n}return iw.call(e,t)?e[t]:void 0}var ow=Object.prototype,aw=ow.hasOwnProperty;function cw(t){var e=this.__data__;return ir?e[t]!==void 0:aw.call(e,t)}var lw="__lodash_hash_undefined__";function uw(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ir&&e===void 0?lw:e,this}function Ut(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Ut.prototype.clear=ew;Ut.prototype.delete=tw;Ut.prototype.get=sw;Ut.prototype.has=cw;Ut.prototype.set=uw;function hw(){this.__data__=[],this.size=0}function ki(t,e){for(var n=t.length;n--;)if(rd(t[n][0],e))return n;return-1}var dw=Array.prototype,fw=dw.splice;function pw(t){var e=this.__data__,n=ki(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():fw.call(e,n,1),--this.size,!0}function gw(t){var e=this.__data__,n=ki(e,t);return n<0?void 0:e[n][1]}function mw(t){return ki(this.__data__,t)>-1}function _w(t,e){var n=this.__data__,r=ki(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function st(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}st.prototype.clear=hw;st.prototype.delete=pw;st.prototype.get=gw;st.prototype.has=mw;st.prototype.set=_w;var sr=Vt(it,"Map");function yw(){this.size=0,this.__data__={hash:new Ut,map:new(sr||st),string:new Ut}}function vw(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Oi(t,e){var n=t.__data__;return vw(e)?n[typeof e=="string"?"string":"hash"]:n.map}function bw(t){var e=Oi(this,t).delete(t);return this.size-=e?1:0,e}function ww(t){return Oi(this,t).get(t)}function Ew(t){return Oi(this,t).has(t)}function Cw(t,e){var n=Oi(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function ot(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ot.prototype.clear=yw;ot.prototype.delete=bw;ot.prototype.get=ww;ot.prototype.has=Ew;ot.prototype.set=Cw;var Sw="Expected a function";function ma(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Sw);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(ma.Cache||ot),n}ma.Cache=ot;var Iw=500;function Tw(t){var e=ma(t,function(r){return n.size===Iw&&n.clear(),r}),n=e.cache;return e}var Aw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rw=/\\(\\)?/g,Pw=Tw(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Aw,function(n,r,i,s){e.push(i?s.replace(Rw,"$1"):r||n)}),e});function kw(t){return t==null?"":ed(t)}function hd(t,e){return He(t)?t:ga(t,e)?[t]:Pw(kw(t))}var Ow=1/0;function Ni(t){if(typeof t=="string"||ua(t))return t;var e=t+"";return e=="0"&&1/t==-Ow?"-0":e}function dd(t,e){e=hd(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Ni(e[n++])];return n&&n==r?t:void 0}function Nw(t,e,n){var r=t==null?void 0:dd(t,e);return r===void 0?n:r}function fd(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var sl=We?We.isConcatSpreadable:void 0;function xw(t){return He(t)||pa(t)||!!(sl&&t&&t[sl])}function pd(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=xw),i||(i=[]);++s<o;){var a=t[s];e>0&&n(a)?e>1?pd(a,e-1,n,r,i):fd(i,a):r||(i[i.length]=a)}return i}function Dw(){this.__data__=new st,this.size=0}function Mw(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Lw(t){return this.__data__.get(t)}function Fw(t){return this.__data__.has(t)}var $w=200;function Uw(t,e){var n=this.__data__;if(n instanceof st){var r=n.__data__;if(!sr||r.length<$w-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new ot(r)}return n.set(t,e),this.size=n.size,this}function Ye(t){var e=this.__data__=new st(t);this.size=e.size}Ye.prototype.clear=Dw;Ye.prototype.delete=Mw;Ye.prototype.get=Lw;Ye.prototype.has=Fw;Ye.prototype.set=Uw;function Bw(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Ww(){return[]}var Hw=Object.prototype,jw=Hw.propertyIsEnumerable,ol=Object.getOwnPropertySymbols,Vw=ol?function(t){return t==null?[]:(t=Object(t),Bw(ol(t),function(e){return jw.call(t,e)}))}:Ww;const Gw=Vw;function zw(t,e,n){var r=e(t);return He(t)?r:fd(r,n(t))}function al(t){return zw(t,ud,Gw)}var no=Vt(it,"DataView"),ro=Vt(it,"Promise"),io=Vt(it,"Set"),cl="[object Map]",qw="[object Object]",ll="[object Promise]",ul="[object Set]",hl="[object WeakMap]",dl="[object DataView]",Kw=jt(no),Yw=jt(sr),Qw=jt(ro),Jw=jt(io),Xw=jt(eo),Tt=Cn;(no&&Tt(new no(new ArrayBuffer(1)))!=dl||sr&&Tt(new sr)!=cl||ro&&Tt(ro.resolve())!=ll||io&&Tt(new io)!=ul||eo&&Tt(new eo)!=hl)&&(Tt=function(t){var e=Cn(t),n=e==qw?t.constructor:void 0,r=n?jt(n):"";if(r)switch(r){case Kw:return dl;case Yw:return cl;case Qw:return ll;case Jw:return ul;case Xw:return hl}return e});const fl=Tt;var Zw=it.Uint8Array;const pl=Zw;var eE="__lodash_hash_undefined__";function tE(t){return this.__data__.set(t,eE),this}function nE(t){return this.__data__.has(t)}function or(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new ot;++e<n;)this.add(t[e])}or.prototype.add=or.prototype.push=tE;or.prototype.has=nE;function rE(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function gd(t,e){return t.has(e)}var iE=1,sE=2;function md(t,e,n,r,i,s){var o=n&iE,a=t.length,c=e.length;if(a!=c&&!(o&&c>a))return!1;var l=s.get(t),h=s.get(e);if(l&&h)return l==e&&h==t;var u=-1,f=!0,g=n&sE?new or:void 0;for(s.set(t,e),s.set(e,t);++u<a;){var p=t[u],_=e[u];if(r)var b=o?r(_,p,u,e,t,s):r(p,_,u,t,e,s);if(b!==void 0){if(b)continue;f=!1;break}if(g){if(!rE(e,function(w,I){if(!gd(g,I)&&(p===w||i(p,w,n,r,s)))return g.push(I)})){f=!1;break}}else if(!(p===_||i(p,_,n,r,s))){f=!1;break}}return s.delete(t),s.delete(e),f}function oE(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function aE(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var cE=1,lE=2,uE="[object Boolean]",hE="[object Date]",dE="[object Error]",fE="[object Map]",pE="[object Number]",gE="[object RegExp]",mE="[object Set]",_E="[object String]",yE="[object Symbol]",vE="[object ArrayBuffer]",bE="[object DataView]",gl=We?We.prototype:void 0,As=gl?gl.valueOf:void 0;function wE(t,e,n,r,i,s,o){switch(n){case bE:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case vE:return!(t.byteLength!=e.byteLength||!s(new pl(t),new pl(e)));case uE:case hE:case pE:return rd(+t,+e);case dE:return t.name==e.name&&t.message==e.message;case gE:case _E:return t==e+"";case fE:var a=oE;case mE:var c=r&cE;if(a||(a=aE),t.size!=e.size&&!c)return!1;var l=o.get(t);if(l)return l==e;r|=lE,o.set(t,e);var h=md(a(t),a(e),r,i,s,o);return o.delete(t),h;case yE:if(As)return As.call(t)==As.call(e)}return!1}var EE=1,CE=Object.prototype,SE=CE.hasOwnProperty;function IE(t,e,n,r,i,s){var o=n&EE,a=al(t),c=a.length,l=al(e),h=l.length;if(c!=h&&!o)return!1;for(var u=c;u--;){var f=a[u];if(!(o?f in e:SE.call(e,f)))return!1}var g=s.get(t),p=s.get(e);if(g&&p)return g==e&&p==t;var _=!0;s.set(t,e),s.set(e,t);for(var b=o;++u<c;){f=a[u];var w=t[f],I=e[f];if(r)var E=o?r(I,w,f,e,t,s):r(w,I,f,t,e,s);if(!(E===void 0?w===I||i(w,I,n,r,s):E)){_=!1;break}b||(b=f=="constructor")}if(_&&!b){var v=t.constructor,C=e.constructor;v!=C&&"constructor"in t&&"constructor"in e&&!(typeof v=="function"&&v instanceof v&&typeof C=="function"&&C instanceof C)&&(_=!1)}return s.delete(t),s.delete(e),_}var TE=1,ml="[object Arguments]",_l="[object Array]",Or="[object Object]",AE=Object.prototype,yl=AE.hasOwnProperty;function RE(t,e,n,r,i,s){var o=He(t),a=He(e),c=o?_l:fl(t),l=a?_l:fl(e);c=c==ml?Or:c,l=l==ml?Or:l;var h=c==Or,u=l==Or,f=c==l;if(f&&to(t)){if(!to(e))return!1;o=!0,h=!1}if(f&&!h)return s||(s=new Ye),o||ld(t)?md(t,e,n,r,i,s):wE(t,e,c,n,r,i,s);if(!(n&TE)){var g=h&&yl.call(t,"__wrapped__"),p=u&&yl.call(e,"__wrapped__");if(g||p){var _=g?t.value():t,b=p?e.value():e;return s||(s=new Ye),i(_,b,n,r,s)}}return f?(s||(s=new Ye),IE(t,e,n,r,i,s)):!1}function _a(t,e,n,r,i){return t===e?!0:t==null||e==null||!$t(t)&&!$t(e)?t!==t&&e!==e:RE(t,e,n,r,_a,i)}var PE=1,kE=2;function OE(t,e,n,r){var i=n.length,s=i,o=!r;if(t==null)return!s;for(t=Object(t);i--;){var a=n[i];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<s;){a=n[i];var c=a[0],l=t[c],h=a[1];if(o&&a[2]){if(l===void 0&&!(c in t))return!1}else{var u=new Ye;if(r)var f=r(l,h,c,t,e,u);if(!(f===void 0?_a(h,l,PE|kE,r,u):f))return!1}}return!0}function _d(t){return t===t&&!ha(t)}function NE(t){for(var e=ud(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,_d(i)]}return e}function yd(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function xE(t){var e=NE(t);return e.length==1&&e[0][2]?yd(e[0][0],e[0][1]):function(n){return n===t||OE(n,t,e)}}function DE(t,e){return t!=null&&e in Object(t)}function ME(t,e,n){e=hd(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var o=Ni(e[r]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&fa(i)&&nd(o,i)&&(He(t)||pa(t)))}function LE(t,e){return t!=null&&ME(t,e,DE)}var FE=1,$E=2;function UE(t,e){return ga(t)&&_d(e)?yd(Ni(t),e):function(n){var r=Nw(n,t);return r===void 0&&r===e?LE(n,t):_a(e,r,FE|$E)}}function BE(t){return function(e){return e==null?void 0:e[t]}}function WE(t){return function(e){return dd(e,t)}}function HE(t){return ga(t)?BE(Ni(t)):WE(t)}function jE(t){return typeof t=="function"?t:t==null?da:typeof t=="object"?He(t)?UE(t[0],t[1]):xE(t):HE(t)}function Rs(t){return $t(t)&&id(t)}function VE(t,e,n){for(var r=-1,i=t==null?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}var GE=200;function zE(t,e,n,r){var i=-1,s=rb,o=!0,a=t.length,c=[],l=e.length;if(!a)return c;n&&(e=Zh(e,ad(n))),r?(s=VE,o=!1):e.length>=GE&&(s=gd,o=!1,e=new or(e));e:for(;++i<a;){var h=t[i],u=n==null?h:n(h);if(h=r||h!==0?h:0,o&&u===u){for(var f=l;f--;)if(e[f]===u)continue e;c.push(h)}else s(e,u,r)||c.push(h)}return c}function qE(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var KE=ab(function(t,e){var n=qE(e);return Rs(n)&&(n=void 0),Rs(t)?zE(t,pd(e,1,Rs,!0),jE(n)):[]});const YE=KE;var QE={BASE_URL:"/jugger-trainer-web/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const vd=eu(cf.firebase),at=p0(vd),VT=r_(vd),JE=2131165628,XE=2131165629;let Nr=null;async function ZE(){const e=(await Pi(ve(rt(at),"tags"))).val();return Object.values(e).map(n=>n)}async function bd(){return Nr!==null||(Nr=ZE()),Nr}async function ya(t){const e=await bd(),n=new Map(e.map(i=>[i.tagID,i])),r=[];for(const i of t){const s=n.get(i);s!==void 0&&r.push(s)}return r}async function wd(t){const e=await Qh(ve(rt(at),"tags"));if(e.key===null)throw new Error("Failed to create tag: tagRef key is null");const n={tagID:e.key,...t};return En(e,n),n}async function Ed(t,e){const n=ve(rt(at),`tags/${t.tagID}`),r=new Set(t.associatedExerciseIds);r.add(e);const i={...t,associatedExerciseIds:Array.from(r)};return En(n,i),i}async function eC(t,e){const n=ve(rt(at),`tags/${t.tagID}`),r=new Set(t.associatedExerciseIds);r.delete(e);const i={...t,associatedExerciseIds:Array.from(r)};return En(n,i),i}function Cd(t,e,n){const r=t,i=new Map(e.map(c=>[c.tagID,c])),s=new Set(r.tagIDs??[]),o=[];for(const c of s){const l=i.get(c);l!==void 0&&o.push(l)}o.sort((c,l)=>c.tag.localeCompare(l.tag));const a=fo(n);return{...r,tags:o,images:a}}async function GT(t){const e=await bd(),n=await va(),i=(await Pi(ve(rt(at),"exercises"))).val();return Object.values(i).map(s=>Cd(s,e,n)).filter(s=>!(s.name===void 0||t.tagIDs.length>0&&!s.tags.some(o=>t.tagIDs.includes(o.tagID))||t.exertionLevel!==void 0&&s.exertionLevel!==t.exertionLevel||t.name!==void 0&&!s.name.toLowerCase().includes(t.name.toLowerCase())||t.players!==void 0&&(s.playersMin>t.players||s.playersMax<t.players))).slice().sort((s,o)=>s.name.localeCompare(o.name))}async function zT(t){const e=await Pi(ve(rt(at),`exercises/${t}`));if(!e.exists())return null;const n=e.val(),r=await ya(n.tagIDs??[]),i=await va();return Cd(n,r,i)}async function qT(t,e){const{exertionLevel:n,howToPlay:r,name:i,originCountry:s,playersMin:o,playersMax:a,tags:c}=e,l=[],h=[];for(const v of c){const[C,P]=v.split(":");C==="s"?l.push(P):C==="t"&&h.push(P)}const u=await ya(h),f=l.map(v=>wd({tag:v,associatedExerciseIds:[]})),g=await Promise.all(f);let p=[...u,...g];const _=p.map(v=>v.tagID),b=await Qh(ve(rt(at),"exercises"));if(b.key===null)throw new Error("Failed to create exercise: exerciseRef key is null");const w={created:new Date().valueOf(),createdByName:t.displayName??t.email??"Some jugger",createdByUID:t.uid,eid:b.key,exertionLevel:n,howToPlay:r,imageResource:JE,imageResourceSmall:XE,name:i,originCountry:s,playersMax:a,playersMin:o,tagIDs:_};En(b,{...w});const I=p.map(v=>Ed(v,w.eid));return p=await Promise.all(I),{...w,tags:p,images:fo(await va())}}async function KT(t,e){const{exertionLevel:n,howToPlay:r,name:i,playersMin:s,playersMax:o,tags:a}=e,c=[],l=[];for(const v of a){const[C,P]=v.split(":");C==="s"?c.push(P):C==="t"&&l.push(P)}const h=await ya(l),u=c.map(v=>wd({tag:v,associatedExerciseIds:[]})),f=await Promise.all(u);let g=[...h,...f];const p=g.map(v=>v.tagID),b=YE(t.tags,g,v=>v.tagID).map(v=>eC(v,t.eid));await Promise.all(b);const w=ve(rt(at),`exercises/${t.eid}`);o0(w,{exertionLevel:n,howToPlay:r,name:i,playersMax:o,playersMin:s,tagIDs:p});const I=g.map(v=>Ed(v,t.eid));return g=await Promise.all(I),{...t,exertionLevel:n,howToPlay:r,name:i,playersMax:o,playersMin:s,tags:g}}const vl={role:"user"};async function YT(t){const e=ve(rt(at),`users/${t}`),n=await Pi(e);return n.exists()?n.val():(await En(e,vl),vl)}const{BASE_URL:tC}=QE,nC=Array.from({length:11},(t,e)=>`${tC}images/samples/sample${e}.jpg`);async function va(){return nC}const bl=t=>t,rC=()=>{let t=bl;return{configure(e){t=e},generate(e){return t(e)},reset(){t=bl}}},iC=rC(),sC=iC;function Bt(t,...e){const n=new URL(`https://mui.com/production-error/?code=${t}`);return e.forEach(r=>n.searchParams.append("args[]",r)),`Minified MUI error #${t}; visit ${n} for the full message.`}function Sd(t){if(typeof t!="string")throw new Error(Bt(7));return t.charAt(0).toUpperCase()+t.slice(1)}function Id(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=Id(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function QT(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=Id(t))&&(r&&(r+=" "),r+=e);return r}function JT(t,e,n=void 0){const r={};for(const i in t){const s=t[i];let o="",a=!0;for(let c=0;c<s.length;c+=1){const l=s[c];l&&(o+=(a===!0?"":" ")+e(l),a=!1,n&&n[l]&&(o+=" "+n[l]))}r[i]=o}return r}var Td={exports:{}},H={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.transitional.element"),wa=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),Di=Symbol.for("react.strict_mode"),Mi=Symbol.for("react.profiler"),Li=Symbol.for("react.consumer"),Fi=Symbol.for("react.context"),$i=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Bi=Symbol.for("react.suspense_list"),Wi=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),oC=Symbol.for("react.view_transition"),aC=Symbol.for("react.client.reference");function Re(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ba:switch(t=t.type,t){case xi:case Mi:case Di:case Ui:case Bi:case oC:return t;default:switch(t=t&&t.$$typeof,t){case Fi:case $i:case Hi:case Wi:return t;case Li:return t;default:return e}}case wa:return e}}}H.ContextConsumer=Li;H.ContextProvider=Fi;H.Element=ba;H.ForwardRef=$i;H.Fragment=xi;H.Lazy=Hi;H.Memo=Wi;H.Portal=wa;H.Profiler=Mi;H.StrictMode=Di;H.Suspense=Ui;H.SuspenseList=Bi;H.isContextConsumer=function(t){return Re(t)===Li};H.isContextProvider=function(t){return Re(t)===Fi};H.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba};H.isForwardRef=function(t){return Re(t)===$i};H.isFragment=function(t){return Re(t)===xi};H.isLazy=function(t){return Re(t)===Hi};H.isMemo=function(t){return Re(t)===Wi};H.isPortal=function(t){return Re(t)===wa};H.isProfiler=function(t){return Re(t)===Mi};H.isStrictMode=function(t){return Re(t)===Di};H.isSuspense=function(t){return Re(t)===Ui};H.isSuspenseList=function(t){return Re(t)===Bi};H.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===xi||t===Mi||t===Di||t===Ui||t===Bi||typeof t=="object"&&t!==null&&(t.$$typeof===Hi||t.$$typeof===Wi||t.$$typeof===Fi||t.$$typeof===Li||t.$$typeof===$i||t.$$typeof===aC||t.getModuleId!==void 0)};H.typeOf=Re;Td.exports=H;var Ad=Td.exports;function Fe(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Rd(t){if(le.isValidElement(t)||Ad.isValidElementType(t)||!Fe(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=Rd(t[n])}),e}function ye(t,e,n={clone:!0}){const r=n.clone?{...t}:t;return Fe(t)&&Fe(e)&&Object.keys(e).forEach(i=>{le.isValidElement(e[i])||Ad.isValidElementType(e[i])?r[i]=e[i]:Fe(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&Fe(t[i])?r[i]=ye(t[i],e[i],n):n.clone?r[i]=Fe(e[i])?Rd(e[i]):e[i]:r[i]=e[i]}),r}function jn(t,e){return e?ye(t,e,{clone:!1}):t}function cC(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,i)=>{var o,a;const s=/min-width:\s*([0-9.]+)/;return+(((o=r.match(s))==null?void 0:o[1])||0)-+(((a=i.match(s))==null?void 0:a[1])||0)});return n.length?n.reduce((r,i)=>{const s=e[i];return delete r[i],r[i]=s,r},{...e}):e}function lC(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function uC(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,i]=n,s=Number.isNaN(+r)?r||0:+r;return t.containerQueries(i).up(s)}function hC(t){const e=(s,o)=>s.replace("@media",o?`@container ${o}`:"@container");function n(s,o){s.up=(...a)=>e(t.breakpoints.up(...a),o),s.down=(...a)=>e(t.breakpoints.down(...a),o),s.between=(...a)=>e(t.breakpoints.between(...a),o),s.only=(...a)=>e(t.breakpoints.only(...a),o),s.not=(...a)=>{const c=e(t.breakpoints.not(...a),o);return c.includes("not all and")?c.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):c}}const r={},i=s=>(n(r,s),r);return n(i),{...t,containerQueries:i}}const ji={xs:0,sm:600,md:900,lg:1200,xl:1536},wl={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${ji[t]}px)`},dC={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:ji[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function Xe(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||wl;return e.reduce((o,a,c)=>(o[s.up(s.keys[c])]=n(e[c]),o),{})}if(typeof e=="object"){const s=r.breakpoints||wl;return Object.keys(e).reduce((o,a)=>{if(lC(s.keys,a)){const c=uC(r.containerQueries?r:dC,a);c&&(o[c]=n(e[a],a))}else if(Object.keys(s.values||ji).includes(a)){const c=s.up(a);o[c]=n(e[a],a)}else{const c=a;o[c]=e[c]}return o},{})}return n(e)}function Pd(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function kd(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function XT(t,...e){const n=Pd(t),r=[n,...e].reduce((i,s)=>ye(i,s),{});return kd(Object.keys(n),r)}function fC(t,e){if(typeof t!="object")return{};const n={},r=Object.keys(e);return Array.isArray(t)?r.forEach((i,s)=>{s<t.length&&(n[i]=!0)}):r.forEach(i=>{t[i]!=null&&(n[i]=!0)}),n}function ZT({values:t,breakpoints:e,base:n}){const r=n||fC(t,e),i=Object.keys(r);if(i.length===0)return t;let s;return i.reduce((o,a,c)=>(Array.isArray(t)?(o[a]=t[c]!=null?t[c]:t[s],s=c):typeof t=="object"?(o[a]=t[a]!=null?t[a]:t[s],s=a):o[a]=t,o),{})}function Vi(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function di(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=Vi(t,n)||r,e&&(i=e(i,r,t)),i}function Z(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],c=o.theme,l=Vi(c,r)||{};return Xe(o,a,u=>{let f=di(l,i,u);return u===f&&typeof u=="string"&&(f=di(l,i,`${e}${u==="default"?"":Sd(u)}`,u)),n===!1?f:{[n]:f}})};return s.propTypes={},s.filterProps=[e],s}function pC(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const gC={m:"margin",p:"padding"},mC={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},El={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},_C=pC(t=>{if(t.length>2)if(El[t])t=El[t];else return[t];const[e,n]=t.split(""),r=gC[e],i=mC[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),Ea=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ca=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ea,...Ca];function Sr(t,e,n,r){const i=Vi(t,e,!0)??n;return typeof i=="number"||typeof i=="string"?s=>typeof s=="string"?s:typeof i=="string"?i.startsWith("var(")&&s===0?0:i.startsWith("var(")&&s===1?i:`calc(${s} * ${i})`:i*s:Array.isArray(i)?s=>{if(typeof s=="string")return s;const o=Math.abs(s),a=i[o];return s>=0?a:typeof a=="number"?-a:typeof a=="string"&&a.startsWith("var(")?`calc(-1 * ${a})`:`-${a}`}:typeof i=="function"?i:()=>{}}function Sa(t){return Sr(t,"spacing",8)}function Ir(t,e){return typeof e=="string"||e==null?e:t(e)}function yC(t,e){return n=>t.reduce((r,i)=>(r[i]=Ir(e,n),r),{})}function vC(t,e,n,r){if(!e.includes(n))return null;const i=_C(n),s=yC(i,r),o=t[n];return Xe(t,o,s)}function Od(t,e){const n=Sa(t.theme);return Object.keys(t).map(r=>vC(t,e,r,n)).reduce(jn,{})}function K(t){return Od(t,Ea)}K.propTypes={};K.filterProps=Ea;function Y(t){return Od(t,Ca)}Y.propTypes={};Y.filterProps=Ca;function Gi(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?jn(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Se(t){return typeof t!="number"?t:`${t}px solid`}function Pe(t,e){return Z({prop:t,themeKey:"borders",transform:e})}const bC=Pe("border",Se),wC=Pe("borderTop",Se),EC=Pe("borderRight",Se),CC=Pe("borderBottom",Se),SC=Pe("borderLeft",Se),IC=Pe("borderColor"),TC=Pe("borderTopColor"),AC=Pe("borderRightColor"),RC=Pe("borderBottomColor"),PC=Pe("borderLeftColor"),kC=Pe("outline",Se),OC=Pe("outlineColor"),zi=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Sr(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Ir(e,r)});return Xe(t,t.borderRadius,n)}return null};zi.propTypes={};zi.filterProps=["borderRadius"];Gi(bC,wC,EC,CC,SC,IC,TC,AC,RC,PC,zi,kC,OC);const qi=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Sr(t.theme,"spacing",8),n=r=>({gap:Ir(e,r)});return Xe(t,t.gap,n)}return null};qi.propTypes={};qi.filterProps=["gap"];const Ki=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Sr(t.theme,"spacing",8),n=r=>({columnGap:Ir(e,r)});return Xe(t,t.columnGap,n)}return null};Ki.propTypes={};Ki.filterProps=["columnGap"];const Yi=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Sr(t.theme,"spacing",8),n=r=>({rowGap:Ir(e,r)});return Xe(t,t.rowGap,n)}return null};Yi.propTypes={};Yi.filterProps=["rowGap"];const NC=Z({prop:"gridColumn"}),xC=Z({prop:"gridRow"}),DC=Z({prop:"gridAutoFlow"}),MC=Z({prop:"gridAutoColumns"}),LC=Z({prop:"gridAutoRows"}),FC=Z({prop:"gridTemplateColumns"}),$C=Z({prop:"gridTemplateRows"}),UC=Z({prop:"gridTemplateAreas"}),BC=Z({prop:"gridArea"});Gi(qi,Ki,Yi,NC,xC,DC,MC,LC,FC,$C,UC,BC);function rn(t,e){return e==="grey"?e:t}const WC=Z({prop:"color",themeKey:"palette",transform:rn}),HC=Z({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:rn}),jC=Z({prop:"backgroundColor",themeKey:"palette",transform:rn});Gi(WC,HC,jC);function we(t){return t<=1&&t!==0?`${t*100}%`:t}const VC=Z({prop:"width",transform:we}),Ia=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,s,o,a,c;const r=((o=(s=(i=t.theme)==null?void 0:i.breakpoints)==null?void 0:s.values)==null?void 0:o[n])||ji[n];return r?((c=(a=t.theme)==null?void 0:a.breakpoints)==null?void 0:c.unit)!=="px"?{maxWidth:`${r}${t.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:we(n)}};return Xe(t,t.maxWidth,e)}return null};Ia.filterProps=["maxWidth"];const GC=Z({prop:"minWidth",transform:we}),zC=Z({prop:"height",transform:we}),qC=Z({prop:"maxHeight",transform:we}),KC=Z({prop:"minHeight",transform:we});Z({prop:"size",cssProperty:"width",transform:we});Z({prop:"size",cssProperty:"height",transform:we});const YC=Z({prop:"boxSizing"});Gi(VC,Ia,GC,zC,qC,KC,YC);const Tr={border:{themeKey:"borders",transform:Se},borderTop:{themeKey:"borders",transform:Se},borderRight:{themeKey:"borders",transform:Se},borderBottom:{themeKey:"borders",transform:Se},borderLeft:{themeKey:"borders",transform:Se},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Se},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:zi},color:{themeKey:"palette",transform:rn},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:rn},backgroundColor:{themeKey:"palette",transform:rn},p:{style:Y},pt:{style:Y},pr:{style:Y},pb:{style:Y},pl:{style:Y},px:{style:Y},py:{style:Y},padding:{style:Y},paddingTop:{style:Y},paddingRight:{style:Y},paddingBottom:{style:Y},paddingLeft:{style:Y},paddingX:{style:Y},paddingY:{style:Y},paddingInline:{style:Y},paddingInlineStart:{style:Y},paddingInlineEnd:{style:Y},paddingBlock:{style:Y},paddingBlockStart:{style:Y},paddingBlockEnd:{style:Y},m:{style:K},mt:{style:K},mr:{style:K},mb:{style:K},ml:{style:K},mx:{style:K},my:{style:K},margin:{style:K},marginTop:{style:K},marginRight:{style:K},marginBottom:{style:K},marginLeft:{style:K},marginX:{style:K},marginY:{style:K},marginInline:{style:K},marginInlineStart:{style:K},marginInlineEnd:{style:K},marginBlock:{style:K},marginBlockStart:{style:K},marginBlockEnd:{style:K},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:qi},rowGap:{style:Yi},columnGap:{style:Ki},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:we},maxWidth:{style:Ia},minWidth:{transform:we},height:{transform:we},maxHeight:{transform:we},minHeight:{transform:we},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function QC(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function JC(t,e){return typeof t=="function"?t(e):t}function XC(){function t(n,r,i,s){const o={[n]:r,theme:i},a=s[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:l,transform:h,style:u}=a;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[n]:r};const f=Vi(i,l)||{};return u?u(o):Xe(o,r,p=>{let _=di(f,h,p);return p===_&&typeof p=="string"&&(_=di(f,h,`${n}${p==="default"?"":Sd(p)}`,p)),c===!1?_:{[c]:_}})}function e(n){const{sx:r,theme:i={}}=n||{};if(!r)return null;const s=i.unstable_sxConfig??Tr;function o(a){let c=a;if(typeof a=="function")c=a(i);else if(typeof a!="object")return a;if(!c)return null;const l=Pd(i.breakpoints),h=Object.keys(l);let u=l;return Object.keys(c).forEach(f=>{const g=JC(c[f],i);if(g!=null)if(typeof g=="object")if(s[f])u=jn(u,t(f,g,i,s));else{const p=Xe({theme:i},g,_=>({[f]:_}));QC(p,g)?u[f]=e({sx:g,theme:i}):u=jn(u,p)}else u=jn(u,t(f,g,i,s))}),cC(i,kd(h,u))}return Array.isArray(r)?r.map(o):o(r)}return e}const fn=XC();fn.filterProps=["sx"];const ZC=t=>{var r;const e={systemProps:{},otherProps:{}},n=((r=t==null?void 0:t.theme)==null?void 0:r.unstable_sxConfig)??Tr;return Object.keys(t).forEach(i=>{n[i]?e.systemProps[i]=t[i]:e.otherProps[i]=t[i]}),e};function eS(t){const{sx:e,...n}=t,{systemProps:r,otherProps:i}=ZC(n);let s;return Array.isArray(e)?s=[r,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return Fe(a)?{...r,...a}:r}:s={...r,...e},{...i,sx:s}}function so(){return so=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},so.apply(null,arguments)}function tS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var nS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,rS=tS(function(t){return nS.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),iS=!1;function sS(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function oS(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var aS=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!iS:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(oS(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=sS(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},t}(),he="-ms-",fi="-moz-",M="-webkit-",Nd="comm",Ta="rule",Aa="decl",cS="@import",xd="@keyframes",lS="@layer",uS=Math.abs,Qi=String.fromCharCode,hS=Object.assign;function dS(t,e){return ae(t,0)^45?(((e<<2^ae(t,0))<<2^ae(t,1))<<2^ae(t,2))<<2^ae(t,3):0}function Dd(t){return t.trim()}function fS(t,e){return(t=e.exec(t))?t[0]:t}function L(t,e,n){return t.replace(e,n)}function oo(t,e){return t.indexOf(e)}function ae(t,e){return t.charCodeAt(e)|0}function ar(t,e,n){return t.slice(e,n)}function Me(t){return t.length}function Ra(t){return t.length}function xr(t,e){return e.push(t),t}function pS(t,e){return t.map(e).join("")}var Ji=1,pn=1,Md=0,be=0,ee=0,Sn="";function Xi(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Ji,column:pn,length:o,return:""}}function On(t,e){return hS(Xi("",null,null,"",null,null,0),t,{length:-t.length},e)}function gS(){return ee}function mS(){return ee=be>0?ae(Sn,--be):0,pn--,ee===10&&(pn=1,Ji--),ee}function Ee(){return ee=be<Md?ae(Sn,be++):0,pn++,ee===10&&(pn=1,Ji++),ee}function Be(){return ae(Sn,be)}function Br(){return be}function Ar(t,e){return ar(Sn,t,e)}function cr(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ld(t){return Ji=pn=1,Md=Me(Sn=t),be=0,[]}function Fd(t){return Sn="",t}function Wr(t){return Dd(Ar(be-1,ao(t===91?t+2:t===40?t+1:t)))}function _S(t){for(;(ee=Be())&&ee<33;)Ee();return cr(t)>2||cr(ee)>3?"":" "}function yS(t,e){for(;--e&&Ee()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Ar(t,Br()+(e<6&&Be()==32&&Ee()==32))}function ao(t){for(;Ee();)switch(ee){case t:return be;case 34:case 39:t!==34&&t!==39&&ao(ee);break;case 40:t===41&&ao(t);break;case 92:Ee();break}return be}function vS(t,e){for(;Ee()&&t+ee!==57;)if(t+ee===84&&Be()===47)break;return"/*"+Ar(e,be-1)+"*"+Qi(t===47?t:Ee())}function bS(t){for(;!cr(Be());)Ee();return Ar(t,be)}function wS(t){return Fd(Hr("",null,null,null,[""],t=Ld(t),0,[0],t))}function Hr(t,e,n,r,i,s,o,a,c){for(var l=0,h=0,u=o,f=0,g=0,p=0,_=1,b=1,w=1,I=0,E="",v=i,C=s,P=r,R=E;b;)switch(p=I,I=Ee()){case 40:if(p!=108&&ae(R,u-1)==58){oo(R+=L(Wr(I),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:R+=Wr(I);break;case 9:case 10:case 13:case 32:R+=_S(p);break;case 92:R+=yS(Br()-1,7);continue;case 47:switch(Be()){case 42:case 47:xr(ES(vS(Ee(),Br()),e,n),c);break;default:R+="/"}break;case 123*_:a[l++]=Me(R)*w;case 125*_:case 59:case 0:switch(I){case 0:case 125:b=0;case 59+h:w==-1&&(R=L(R,/\f/g,"")),g>0&&Me(R)-u&&xr(g>32?Sl(R+";",r,n,u-1):Sl(L(R," ","")+";",r,n,u-2),c);break;case 59:R+=";";default:if(xr(P=Cl(R,e,n,l,h,i,a,E,v=[],C=[],u),s),I===123)if(h===0)Hr(R,e,P,P,v,s,u,a,C);else switch(f===99&&ae(R,3)===110?100:f){case 100:case 108:case 109:case 115:Hr(t,P,P,r&&xr(Cl(t,P,P,0,0,i,a,E,i,v=[],u),C),i,C,u,a,r?v:C);break;default:Hr(R,P,P,P,[""],C,0,a,C)}}l=h=g=0,_=w=1,E=R="",u=o;break;case 58:u=1+Me(R),g=p;default:if(_<1){if(I==123)--_;else if(I==125&&_++==0&&mS()==125)continue}switch(R+=Qi(I),I*_){case 38:w=h>0?1:(R+="\f",-1);break;case 44:a[l++]=(Me(R)-1)*w,w=1;break;case 64:Be()===45&&(R+=Wr(Ee())),f=Be(),h=u=Me(E=R+=bS(Br())),I++;break;case 45:p===45&&Me(R)==2&&(_=0)}}return s}function Cl(t,e,n,r,i,s,o,a,c,l,h){for(var u=i-1,f=i===0?s:[""],g=Ra(f),p=0,_=0,b=0;p<r;++p)for(var w=0,I=ar(t,u+1,u=uS(_=o[p])),E=t;w<g;++w)(E=Dd(_>0?f[w]+" "+I:L(I,/&\f/g,f[w])))&&(c[b++]=E);return Xi(t,e,n,i===0?Ta:a,c,l,h)}function ES(t,e,n){return Xi(t,e,n,Nd,Qi(gS()),ar(t,2,-2),0)}function Sl(t,e,n,r){return Xi(t,e,n,Aa,ar(t,0,r),ar(t,r+1,-1),r)}function sn(t,e){for(var n="",r=Ra(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function CS(t,e,n,r){switch(t.type){case lS:if(t.children.length)break;case cS:case Aa:return t.return=t.return||t.value;case Nd:return"";case xd:return t.return=t.value+"{"+sn(t.children,r)+"}";case Ta:t.value=t.props.join(",")}return Me(n=sn(t.children,r))?t.return=t.value+"{"+n+"}":""}function SS(t){var e=Ra(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function IS(t){return function(e){e.root||(e=e.return)&&t(e)}}var TS=function(e,n,r){for(var i=0,s=0;i=s,s=Be(),i===38&&s===12&&(n[r]=1),!cr(s);)Ee();return Ar(e,be)},AS=function(e,n){var r=-1,i=44;do switch(cr(i)){case 0:i===38&&Be()===12&&(n[r]=1),e[r]+=TS(be-1,n,r);break;case 2:e[r]+=Wr(i);break;case 4:if(i===44){e[++r]=Be()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Qi(i)}while(i=Ee());return e},RS=function(e,n){return Fd(AS(Ld(e),n))},Il=new WeakMap,PS=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Il.get(r))&&!i){Il.set(e,!0);for(var s=[],o=RS(n,s),a=r.props,c=0,l=0;c<o.length;c++)for(var h=0;h<a.length;h++,l++)e.props[l]=s[c]?o[c].replace(/&\f/g,a[h]):a[h]+" "+o[c]}}},kS=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function $d(t,e){switch(dS(t,e)){case 5103:return M+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return M+t+fi+t+he+t+t;case 6828:case 4268:return M+t+he+t+t;case 6165:return M+t+he+"flex-"+t+t;case 5187:return M+t+L(t,/(\w+).+(:[^]+)/,M+"box-$1$2"+he+"flex-$1$2")+t;case 5443:return M+t+he+"flex-item-"+L(t,/flex-|-self/,"")+t;case 4675:return M+t+he+"flex-line-pack"+L(t,/align-content|flex-|-self/,"")+t;case 5548:return M+t+he+L(t,"shrink","negative")+t;case 5292:return M+t+he+L(t,"basis","preferred-size")+t;case 6060:return M+"box-"+L(t,"-grow","")+M+t+he+L(t,"grow","positive")+t;case 4554:return M+L(t,/([^-])(transform)/g,"$1"+M+"$2")+t;case 6187:return L(L(L(t,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),t,"")+t;case 5495:case 3959:return L(t,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return L(L(t,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+he+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+t+t;case 4095:case 3583:case 4068:case 2532:return L(t,/(.+)-inline(.+)/,M+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Me(t)-1-e>6)switch(ae(t,e+1)){case 109:if(ae(t,e+4)!==45)break;case 102:return L(t,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+fi+(ae(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~oo(t,"stretch")?$d(L(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ae(t,e+1)!==115)break;case 6444:switch(ae(t,Me(t)-3-(~oo(t,"!important")&&10))){case 107:return L(t,":",":"+M)+t;case 101:return L(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(ae(t,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+he+"$2box$3")+t}break;case 5936:switch(ae(t,e+11)){case 114:return M+t+he+L(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return M+t+he+L(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return M+t+he+L(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return M+t+he+t+t}return t}var OS=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Aa:e.return=$d(e.value,e.length);break;case xd:return sn([On(e,{value:L(e.value,"@","@"+M)})],i);case Ta:if(e.length)return pS(e.props,function(s){switch(fS(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return sn([On(e,{props:[L(s,/:(read-\w+)/,":"+fi+"$1")]})],i);case"::placeholder":return sn([On(e,{props:[L(s,/:(plac\w+)/,":"+M+"input-$1")]}),On(e,{props:[L(s,/:(plac\w+)/,":"+fi+"$1")]}),On(e,{props:[L(s,/:(plac\w+)/,he+"input-$1")]})],i)}return""})}},NS=[OS],xS=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var b=_.getAttribute("data-emotion");b.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=e.stylisPlugins||NS,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var b=_.getAttribute("data-emotion").split(" "),w=1;w<b.length;w++)s[b[w]]=!0;a.push(_)});var c,l=[PS,kS];{var h,u=[CS,IS(function(_){h.insert(_)})],f=SS(l.concat(i,u)),g=function(b){return sn(wS(b),f)};c=function(b,w,I,E){h=I,g(b?b+"{"+w.styles+"}":w.styles),E&&(p.inserted[w.name]=!0)}}var p={key:n,sheet:new aS({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return p.sheet.hydrate(a),p},Ud={exports:{}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,Pa=se?Symbol.for("react.element"):60103,ka=se?Symbol.for("react.portal"):60106,Zi=se?Symbol.for("react.fragment"):60107,es=se?Symbol.for("react.strict_mode"):60108,ts=se?Symbol.for("react.profiler"):60114,ns=se?Symbol.for("react.provider"):60109,rs=se?Symbol.for("react.context"):60110,Oa=se?Symbol.for("react.async_mode"):60111,is=se?Symbol.for("react.concurrent_mode"):60111,ss=se?Symbol.for("react.forward_ref"):60112,os=se?Symbol.for("react.suspense"):60113,DS=se?Symbol.for("react.suspense_list"):60120,as=se?Symbol.for("react.memo"):60115,cs=se?Symbol.for("react.lazy"):60116,MS=se?Symbol.for("react.block"):60121,LS=se?Symbol.for("react.fundamental"):60117,FS=se?Symbol.for("react.responder"):60118,$S=se?Symbol.for("react.scope"):60119;function Ce(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Pa:switch(t=t.type,t){case Oa:case is:case Zi:case ts:case es:case os:return t;default:switch(t=t&&t.$$typeof,t){case rs:case ss:case cs:case as:case ns:return t;default:return e}}case ka:return e}}}function Bd(t){return Ce(t)===is}F.AsyncMode=Oa;F.ConcurrentMode=is;F.ContextConsumer=rs;F.ContextProvider=ns;F.Element=Pa;F.ForwardRef=ss;F.Fragment=Zi;F.Lazy=cs;F.Memo=as;F.Portal=ka;F.Profiler=ts;F.StrictMode=es;F.Suspense=os;F.isAsyncMode=function(t){return Bd(t)||Ce(t)===Oa};F.isConcurrentMode=Bd;F.isContextConsumer=function(t){return Ce(t)===rs};F.isContextProvider=function(t){return Ce(t)===ns};F.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa};F.isForwardRef=function(t){return Ce(t)===ss};F.isFragment=function(t){return Ce(t)===Zi};F.isLazy=function(t){return Ce(t)===cs};F.isMemo=function(t){return Ce(t)===as};F.isPortal=function(t){return Ce(t)===ka};F.isProfiler=function(t){return Ce(t)===ts};F.isStrictMode=function(t){return Ce(t)===es};F.isSuspense=function(t){return Ce(t)===os};F.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Zi||t===is||t===ts||t===es||t===os||t===DS||typeof t=="object"&&t!==null&&(t.$$typeof===cs||t.$$typeof===as||t.$$typeof===ns||t.$$typeof===rs||t.$$typeof===ss||t.$$typeof===LS||t.$$typeof===FS||t.$$typeof===$S||t.$$typeof===MS)};F.typeOf=Ce;Ud.exports=F;var US=Ud.exports,Wd=US,BS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},WS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hd={};Hd[Wd.ForwardRef]=BS;Hd[Wd.Memo]=WS;var HS=!0;function jS(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):i&&(r+=i+" ")}),r}var jd=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||HS===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Vd=function(e,n,r){jd(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function VS(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var GS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function zS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var qS=!1,KS=/[A-Z]|^ms/g,YS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Gd=function(e){return e.charCodeAt(1)===45},Tl=function(e){return e!=null&&typeof e!="boolean"},Ps=zS(function(t){return Gd(t)?t:t.replace(KS,"-$&").toLowerCase()}),Al=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(YS,function(r,i,s){return Le={name:i,styles:s,next:Le},i})}return GS[e]!==1&&!Gd(e)&&typeof n=="number"&&n!==0?n+"px":n},QS="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function lr(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Le={name:i.name,styles:i.styles,next:Le},i.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)Le={name:o.name,styles:o.styles,next:Le},o=o.next;var a=s.styles+";";return a}return JS(t,e,n)}case"function":{if(t!==void 0){var c=Le,l=n(t);return Le=c,lr(t,e,l)}break}}var h=n;if(e==null)return h;var u=e[h];return u!==void 0?u:h}function JS(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=lr(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?r+=s+"{"+e[a]+"}":Tl(a)&&(r+=Ps(s)+":"+Al(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&qS)throw new Error(QS);if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var c=0;c<o.length;c++)Tl(o[c])&&(r+=Ps(s)+":"+Al(s,o[c])+";");else{var l=lr(t,e,o);switch(s){case"animation":case"animationName":{r+=Ps(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}}return r}var Rl=/label:\s*([^\s;{]+)\s*(;|$)/g,Le;function ls(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,i="";Le=void 0;var s=t[0];if(s==null||s.raw===void 0)r=!1,i+=lr(n,e,s);else{var o=s;i+=o[0]}for(var a=1;a<t.length;a++)if(i+=lr(n,e,t[a]),r){var c=s;i+=c[a]}Rl.lastIndex=0;for(var l="",h;(h=Rl.exec(i))!==null;)l+="-"+h[1];var u=VS(i)+l;return{name:u,styles:i,next:Le}}var XS=function(e){return e()},zd=Ba.useInsertionEffect?Ba.useInsertionEffect:!1,ZS=zd||XS,Pl=zd||le.useLayoutEffect,qd=le.createContext(typeof HTMLElement<"u"?xS({key:"css"}):null);qd.Provider;var Kd=function(e){return le.forwardRef(function(n,r){var i=le.useContext(qd);return e(n,i,r)})},Na=le.createContext({}),eI=Kd(function(t,e){var n=t.styles,r=ls([n],void 0,le.useContext(Na)),i=le.useRef();return Pl(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",s),o.hydrate([c])),i.current=[o,a],function(){o.flush()}},[e]),Pl(function(){var s=i.current,o=s[0],a=s[1];if(a){s[1]=!1;return}if(r.next!==void 0&&Vd(e,r.next,!0),o.tags.length){var c=o.tags[o.tags.length-1].nextElementSibling;o.before=c,o.flush()}e.insert("",r,o,!1)},[e,r.name]),null});function tI(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ls(e)}var eA=function(){var e=tI.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},nI=rS,rI=function(e){return e!=="theme"},kl=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?nI:rI},Ol=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},iI=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return jd(n,r,i),ZS(function(){return Vd(n,r,i)}),null},sI=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=Ol(e,n,r),c=a||kl(i),l=!c("as");return function(){var h=arguments,u=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&u.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)u.push.apply(u,h);else{u.push(h[0][0]);for(var f=h.length,g=1;g<f;g++)u.push(h[g],h[0][g])}var p=Kd(function(_,b,w){var I=l&&_.as||i,E="",v=[],C=_;if(_.theme==null){C={};for(var P in _)C[P]=_[P];C.theme=le.useContext(Na)}typeof _.className=="string"?E=jS(b.registered,v,_.className):_.className!=null&&(E=_.className+" ");var R=ls(u.concat(v),b.registered,C);E+=b.key+"-"+R.name,o!==void 0&&(E+=" "+o);var oe=l&&a===void 0?kl(I):c,X={};for(var d in _)l&&d==="as"||oe(d)&&(X[d]=_[d]);return X.className=E,X.ref=w,le.createElement(le.Fragment,null,le.createElement(iI,{cache:b,serialized:R,isStringTag:typeof I=="string"}),le.createElement(I,X))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=u,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(_,b){return t(_,so({},n,b,{shouldForwardProp:Ol(p,b,!0)})).apply(void 0,u)},p}},oI=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],co=sI.bind();oI.forEach(function(t){co[t]=co(t)});function aI(t){return t==null||Object.keys(t).length===0}function cI(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(aI(i)?n:i):e;return hr.jsx(eI,{styles:r})}function lI(t,e){return co(t,e)}function uI(t,e){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))}const Nl=[];function xl(t){return Nl[0]=t,ls(Nl)}const hI=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function dI(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=t,s=hI(e),o=Object.keys(s);function a(f){return`@media (min-width:${typeof e[f]=="number"?e[f]:f}${n})`}function c(f){return`@media (max-width:${(typeof e[f]=="number"?e[f]:f)-r/100}${n})`}function l(f,g){const p=o.indexOf(g);return`@media (min-width:${typeof e[f]=="number"?e[f]:f}${n}) and (max-width:${(p!==-1&&typeof e[o[p]]=="number"?e[o[p]]:g)-r/100}${n})`}function h(f){return o.indexOf(f)+1<o.length?l(f,o[o.indexOf(f)+1]):a(f)}function u(f){const g=o.indexOf(f);return g===0?a(o[1]):g===o.length-1?c(o[g]):l(f,o[o.indexOf(f)+1]).replace("@media","@media not all and")}return{keys:o,values:s,up:a,down:c,between:l,only:h,not:u,unit:n,...i}}const fI={borderRadius:4},pI=fI;function Yd(t=8,e=Sa({spacing:t})){if(t.mui)return t;const n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function gI(t,e){var r;const n=this;if(n.vars){if(!((r=n.colorSchemes)!=null&&r[t])||typeof n.getColorSchemeSelector!="function")return{};let i=n.getColorSchemeSelector(t);return i==="&"?e:((i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:e})}return n.palette.mode===t?e:{}}function xa(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={},...o}=t,a=dI(n),c=Yd(i);let l=ye({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:c,shape:{...pI,...s}},o);return l=hC(l),l.applyStyles=gI,l=e.reduce((h,u)=>ye(h,u),l),l.unstable_sxConfig={...Tr,...o==null?void 0:o.unstable_sxConfig},l.unstable_sx=function(u){return fn({sx:u,theme:this})},l}function mI(t){return Object.keys(t).length===0}function _I(t=null){const e=le.useContext(Na);return!e||mI(e)?t:e}const yI=xa();function vI(t=yI){return _I(t)}function bI({styles:t,themeId:e,defaultTheme:n={}}){const r=vI(n),i=typeof t=="function"?t(e&&r[e]||r):t;return hr.jsx(cI,{styles:i})}const wI={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function EI(t,e,n="Mui"){const r=wI[e];return r?`${n}-${r}`:`${sC.generate(t)}-${e}`}function tA(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=EI(t,i,n)}),r}function Qd(t){const{variants:e,...n}=t,r={variants:e,style:xl(n),isProcessed:!0};return r.style===n||e&&e.forEach(i=>{typeof i.style!="function"&&(i.style=xl(i.style))}),r}const CI=xa();function ks(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function SI(t){return t?(e,n)=>n[t]:null}function II(t,e,n){t.theme=RI(t.theme)?n:t.theme[e]||t.theme}function jr(t,e){const n=typeof e=="function"?e(t):e;if(Array.isArray(n))return n.flatMap(r=>jr(t,r));if(Array.isArray(n==null?void 0:n.variants)){let r;if(n.isProcessed)r=n.style;else{const{variants:i,...s}=n;r=s}return Jd(t,n.variants,[r])}return n!=null&&n.isProcessed?n.style:n}function Jd(t,e,n=[]){var i;let r;e:for(let s=0;s<e.length;s+=1){const o=e[s];if(typeof o.props=="function"){if(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),!o.props(r))continue}else for(const a in o.props)if(t[a]!==o.props[a]&&((i=t.ownerState)==null?void 0:i[a])!==o.props[a])continue e;typeof o.style=="function"?(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),n.push(o.style(r))):n.push(o.style)}return n}function TI(t={}){const{themeId:e,defaultTheme:n=CI,rootShouldForwardProp:r=ks,slotShouldForwardProp:i=ks}=t;function s(a){II(a,e,n)}return(a,c={})=>{uI(a,C=>C.filter(P=>P!==fn));const{name:l,slot:h,skipVariantsResolver:u,skipSx:f,overridesResolver:g=SI(kI(h)),...p}=c,_=u!==void 0?u:h&&h!=="Root"&&h!=="root"||!1,b=f||!1;let w=ks;h==="Root"||h==="root"?w=r:h?w=i:PI(a)&&(w=void 0);const I=lI(a,{shouldForwardProp:w,label:AI(),...p}),E=C=>{if(typeof C=="function"&&C.__emotion_real!==C)return function(R){return jr(R,C)};if(Fe(C)){const P=Qd(C);return P.variants?function(oe){return jr(oe,P)}:P.style}return C},v=(...C)=>{const P=[],R=C.map(E),oe=[];if(P.push(s),l&&g&&oe.push(function(O){var In,$a;const pe=($a=(In=O.theme.components)==null?void 0:In[l])==null?void 0:$a.styleOverrides;if(!pe)return null;const xe={};for(const Ua in pe)xe[Ua]=jr(O,pe[Ua]);return g(O,xe)}),l&&!_&&oe.push(function(O){var xe,In;const j=O.theme,pe=(In=(xe=j==null?void 0:j.components)==null?void 0:xe[l])==null?void 0:In.variants;return pe?Jd(O,pe):null}),b||oe.push(fn),Array.isArray(R[0])){const S=R.shift(),O=new Array(P.length).fill(""),j=new Array(oe.length).fill("");let pe;pe=[...O,...S,...j],pe.raw=[...O,...S.raw,...j],P.unshift(pe)}const X=[...P,...R,...oe],d=I(...X);return a.muiName&&(d.muiName=a.muiName),d};return I.withConfig&&(v.withConfig=I.withConfig),v}}function AI(t,e){return void 0}function RI(t){for(const e in t)return!1;return!0}function PI(t){return typeof t=="string"&&t.charCodeAt(0)>96}function kI(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}function lo(t,e){const n={...e};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const i=r;if(i==="components"||i==="slots")n[i]={...t[i],...n[i]};else if(i==="componentsProps"||i==="slotProps"){const s=t[i],o=e[i];if(!o)n[i]=s||{};else if(!s)n[i]=o;else{n[i]={...o};for(const a in s)if(Object.prototype.hasOwnProperty.call(s,a)){const c=a;n[i][c]=lo(s[c],o[c])}}}else n[i]===void 0&&(n[i]=t[i])}return n}function OI(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function Da(t,e=0,n=1){return OI(t,e,n)}function NI(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Et(t){if(t.type)return t;if(t.charAt(0)==="#")return Et(NI(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(Bt(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(i))throw new Error(Bt(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}const xI=t=>{const e=Et(t);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},Mn=(t,e)=>{try{return xI(t)}catch{return t}};function us(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.includes("rgb")?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function Xd(t){t=Et(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(l,h=(l+n/30)%12)=>i-s*Math.max(Math.min(h-3,9-h,1),-1);let a="rgb";const c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",c.push(e[3])),us({type:a,values:c})}function uo(t){t=Et(t);let e=t.type==="hsl"||t.type==="hsla"?Et(Xd(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function DI(t,e){const n=uo(t),r=uo(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function MI(t,e){return t=Et(t),e=Da(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,us(t)}function Dr(t,e,n){try{return MI(t,e)}catch{return t}}function Ma(t,e){if(t=Et(t),e=Da(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return us(t)}function B(t,e,n){try{return Ma(t,e)}catch{return t}}function La(t,e){if(t=Et(t),e=Da(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return us(t)}function W(t,e,n){try{return La(t,e)}catch{return t}}function LI(t,e=.15){return uo(t)>.5?Ma(t,e):La(t,e)}function Mr(t,e,n){try{return LI(t,e)}catch{return t}}const Zd=le.createContext(void 0);function nA({value:t,children:e}){return hr.jsx(Zd.Provider,{value:t,children:e})}function FI(t){const{theme:e,name:n,props:r}=t;if(!e||!e.components||!e.components[n])return r;const i=e.components[n];return i.defaultProps?lo(i.defaultProps,r):!i.styleOverrides&&!i.variants?lo(i,r):r}function $I({props:t,name:e}){const n=le.useContext(Zd);return FI({props:t,name:e,theme:{components:n}})}const Dl={theme:void 0};function UI(t){let e,n;return function(i){let s=e;return(s===void 0||i.theme!==n)&&(Dl.theme=i.theme,s=Qd(t(Dl)),e=s,n=i.theme),s}}function BI(t=""){function e(...r){if(!r.length)return"";const i=r[0];return typeof i=="string"&&!i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${i}${e(...r.slice(1))})`:`, ${i}`}return(r,...i)=>`var(--${t?`${t}-`:""}${r}${e(...i)})`}const Ml=(t,e,n,r=[])=>{let i=t;e.forEach((s,o)=>{o===e.length-1?Array.isArray(i)?i[Number(s)]=n:i&&typeof i=="object"&&(i[s]=n):i&&typeof i=="object"&&(i[s]||(i[s]=r.includes(s)?[]:{}),i=i[s])})},WI=(t,e,n)=>{function r(i,s=[],o=[]){Object.entries(i).forEach(([a,c])=>{(!n||n&&!n([...s,a]))&&c!=null&&(typeof c=="object"&&Object.keys(c).length>0?r(c,[...s,a],Array.isArray(c)?[...o,a]:o):e([...s,a],c,o))})}r(t)},HI=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>t.includes(r))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Os(t,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},i={},s={},o={};return WI(t,(a,c,l)=>{if((typeof c=="string"||typeof c=="number")&&(!r||!r(a,c))){const h=`--${n?`${n}-`:""}${a.join("-")}`,u=HI(a,c);Object.assign(i,{[h]:u}),Ml(s,a,`var(${h})`,l),Ml(o,a,`var(${h}, ${u})`,l)}},a=>a[0]==="vars"),{css:i,vars:s,varsWithDefaults:o}}function jI(t,e={}){const{getSelector:n=b,disableCssColorScheme:r,colorSchemeSelector:i}=e,{colorSchemes:s={},components:o,defaultColorScheme:a="light",...c}=t,{vars:l,css:h,varsWithDefaults:u}=Os(c,e);let f=u;const g={},{[a]:p,..._}=s;if(Object.entries(_||{}).forEach(([E,v])=>{const{vars:C,css:P,varsWithDefaults:R}=Os(v,e);f=ye(f,R),g[E]={css:P,vars:C}}),p){const{css:E,vars:v,varsWithDefaults:C}=Os(p,e);f=ye(f,C),g[a]={css:E,vars:v}}function b(E,v){var P,R;let C=i;if(i==="class"&&(C=".%s"),i==="data"&&(C="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(C=`[${i}="%s"]`),E){if(C==="media")return t.defaultColorScheme===E?":root":{[`@media (prefers-color-scheme: ${((R=(P=s[E])==null?void 0:P.palette)==null?void 0:R.mode)||E})`]:{":root":v}};if(C)return t.defaultColorScheme===E?`:root, ${C.replace("%s",String(E))}`:C.replace("%s",String(E))}return":root"}return{vars:f,generateThemeVars:()=>{let E={...l};return Object.entries(g).forEach(([,{vars:v}])=>{E=ye(E,v)}),E},generateStyleSheets:()=>{var oe,X;const E=[],v=t.defaultColorScheme||"light";function C(d,S){Object.keys(S).length&&E.push(typeof d=="string"?{[d]:{...S}}:d)}C(n(void 0,{...h}),h);const{[v]:P,...R}=g;if(P){const{css:d}=P,S=(X=(oe=s[v])==null?void 0:oe.palette)==null?void 0:X.mode,O=!r&&S?{colorScheme:S,...d}:{...d};C(n(v,{...O}),O)}return Object.entries(R).forEach(([d,{css:S}])=>{var pe,xe;const O=(xe=(pe=s[d])==null?void 0:pe.palette)==null?void 0:xe.mode,j=!r&&O?{colorScheme:O,...S}:{...S};C(n(d,{...j}),j)}),E}}}function VI(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}const ur={black:"#000",white:"#fff"},GI={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},zI=GI,zt={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},qI={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},qt=qI,KI={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Nn=KI,YI={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Kt=YI,QI={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Yt=QI,Qt={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function ef(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:ur.white,default:ur.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const JI=ef();function tf(){return{text:{primary:ur.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:ur.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const Ll=tf();function Fl(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=La(t.main,i):e==="dark"&&(t.dark=Ma(t.main,s)))}function XI(t="light"){return t==="dark"?{main:Kt[200],light:Kt[50],dark:Kt[400]}:{main:Kt[700],light:Kt[400],dark:Kt[800]}}function ZI(t="light"){return t==="dark"?{main:zt[200],light:zt[50],dark:zt[400]}:{main:zt[500],light:zt[300],dark:zt[700]}}function eT(t="light"){return t==="dark"?{main:qt[500],light:qt[300],dark:qt[700]}:{main:qt[700],light:qt[400],dark:qt[800]}}function tT(t="light"){return t==="dark"?{main:Yt[400],light:Yt[300],dark:Yt[700]}:{main:Yt[700],light:Yt[500],dark:Yt[900]}}function nT(t="light"){return t==="dark"?{main:Qt[400],light:Qt[300],dark:Qt[700]}:{main:Qt[800],light:Qt[500],dark:Qt[900]}}function rT(t="light"){return t==="dark"?{main:Nn[400],light:Nn[300],dark:Nn[700]}:{main:"#ed6c02",light:Nn[500],dark:Nn[900]}}function Fa(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=t,s=t.primary||XI(e),o=t.secondary||ZI(e),a=t.error||eT(e),c=t.info||tT(e),l=t.success||nT(e),h=t.warning||rT(e);function u(_){return DI(_,Ll.text.primary)>=n?Ll.text.primary:JI.text.primary}const f=({color:_,name:b,mainShade:w=500,lightShade:I=300,darkShade:E=700})=>{if(_={..._},!_.main&&_[w]&&(_.main=_[w]),!_.hasOwnProperty("main"))throw new Error(Bt(11,b?` (${b})`:"",w));if(typeof _.main!="string")throw new Error(Bt(12,b?` (${b})`:"",JSON.stringify(_.main)));return Fl(_,"light",I,r),Fl(_,"dark",E,r),_.contrastText||(_.contrastText=u(_.main)),_};let g;return e==="light"?g=ef():e==="dark"&&(g=tf()),ye({common:{...ur},mode:e,primary:f({color:s,name:"primary"}),secondary:f({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:h,name:"warning"}),info:f({color:c,name:"info"}),success:f({color:l,name:"success"}),grey:zI,contrastThreshold:n,getContrastText:u,augmentColor:f,tonalOffset:r,...g},i)}function iT(t){const e={};return Object.entries(t).forEach(r=>{const[i,s]=r;typeof s=="object"&&(e[i]=`${s.fontStyle?`${s.fontStyle} `:""}${s.fontVariant?`${s.fontVariant} `:""}${s.fontWeight?`${s.fontWeight} `:""}${s.fontStretch?`${s.fontStretch} `:""}${s.fontSize||""}${s.lineHeight?`/${s.lineHeight} `:""}${s.fontFamily||""}`)}),e}function sT(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function oT(t){return Math.round(t*1e5)/1e5}const $l={textTransform:"uppercase"},Ul='"Roboto", "Helvetica", "Arial", sans-serif';function aT(t,e){const{fontFamily:n=Ul,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:a=700,htmlFontSize:c=16,allVariants:l,pxToRem:h,...u}=typeof e=="function"?e(t):e,f=r/14,g=h||(b=>`${b/c*f}rem`),p=(b,w,I,E,v)=>({fontFamily:n,fontWeight:b,fontSize:g(w),lineHeight:I,...n===Ul?{letterSpacing:`${oT(E/w)}em`}:{},...v,...l}),_={h1:p(i,96,1.167,-1.5),h2:p(i,60,1.2,-.5),h3:p(s,48,1.167,0),h4:p(s,34,1.235,.25),h5:p(s,24,1.334,0),h6:p(o,20,1.6,.15),subtitle1:p(s,16,1.75,.15),subtitle2:p(o,14,1.57,.1),body1:p(s,16,1.5,.15),body2:p(s,14,1.43,.15),button:p(o,14,1.75,.4,$l),caption:p(s,12,1.66,.4),overline:p(s,12,2.66,1,$l),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ye({htmlFontSize:c,pxToRem:g,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:a,..._},u,{clone:!1})}const cT=.2,lT=.14,uT=.12;function q(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${cT})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${lT})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${uT})`].join(",")}const hT=["none",q(0,2,1,-1,0,1,1,0,0,1,3,0),q(0,3,1,-2,0,2,2,0,0,1,5,0),q(0,3,3,-2,0,3,4,0,0,1,8,0),q(0,2,4,-1,0,4,5,0,0,1,10,0),q(0,3,5,-1,0,5,8,0,0,1,14,0),q(0,3,5,-1,0,6,10,0,0,1,18,0),q(0,4,5,-2,0,7,10,1,0,2,16,1),q(0,5,5,-3,0,8,10,1,0,3,14,2),q(0,5,6,-3,0,9,12,1,0,3,16,2),q(0,6,6,-3,0,10,14,1,0,4,18,3),q(0,6,7,-4,0,11,15,1,0,4,20,3),q(0,7,8,-4,0,12,17,2,0,5,22,4),q(0,7,8,-4,0,13,19,2,0,5,24,4),q(0,7,9,-4,0,14,21,2,0,5,26,4),q(0,8,9,-5,0,15,22,2,0,6,28,5),q(0,8,10,-5,0,16,24,2,0,6,30,5),q(0,8,11,-5,0,17,26,2,0,6,32,5),q(0,9,11,-5,0,18,28,2,0,7,34,6),q(0,9,12,-6,0,19,29,2,0,7,36,6),q(0,10,13,-6,0,20,31,3,0,8,38,7),q(0,10,13,-6,0,21,33,3,0,8,40,7),q(0,10,14,-6,0,22,35,3,0,8,42,7),q(0,11,14,-7,0,23,36,3,0,9,44,8),q(0,11,15,-7,0,24,38,3,0,9,46,8)],dT={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},fT={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Bl(t){return`${Math.round(t)}ms`}function pT(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function gT(t){const e={...dT,...t.easing},n={...fT,...t.duration};return{getAutoHeightDuration:pT,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:c=0,...l}=s;return(Array.isArray(i)?i:[i]).map(h=>`${h} ${typeof o=="string"?o:Bl(o)} ${a} ${typeof c=="string"?c:Bl(c)}`).join(",")},...t,easing:e,duration:n}}const mT={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},_T=mT;function yT(t){return Fe(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function nf(t={}){const e={...t};function n(r){const i=Object.entries(r);for(let s=0;s<i.length;s++){const[o,a]=i[s];!yT(a)||o.startsWith("unstable_")?delete r[o]:Fe(a)&&(r[o]={...a},n(r[o]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function ho(t={},...e){const{breakpoints:n,mixins:r={},spacing:i,palette:s={},transitions:o={},typography:a={},shape:c,...l}=t;if(t.vars&&t.generateThemeVars===void 0)throw new Error(Bt(20));const h=Fa(s),u=xa(t);let f=ye(u,{mixins:sT(u.breakpoints,r),palette:h,shadows:hT.slice(),typography:aT(h,a),transitions:gT(o),zIndex:{..._T}});return f=ye(f,l),f=e.reduce((g,p)=>ye(g,p),f),f.unstable_sxConfig={...Tr,...l==null?void 0:l.unstable_sxConfig},f.unstable_sx=function(p){return fn({sx:p,theme:this})},f.toRuntimeSource=nf,f}function vT(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const bT=[...Array(25)].map((t,e)=>{if(e===0)return"none";const n=vT(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function rf(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function sf(t){return t==="dark"?bT:[]}function wT(t){const{palette:e={mode:"light"},opacity:n,overlays:r,...i}=t,s=Fa(e);return{palette:s,opacity:{...rf(s.mode),...n},overlays:r||sf(s.mode),...i}}function ET(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const CT=t=>[...[...Array(25)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],ST=t=>(e,n)=>{const r=t.rootSelector||":root",i=t.colorSchemeSelector;let s=i;if(i==="class"&&(s=".%s"),i==="data"&&(s="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(s=`[${i}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const o={};return CT(t.cssVarPrefix).forEach(a=>{o[a]=n[a],delete n[a]}),s==="media"?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:o}}:s?{[s.replace("%s",e)]:o,[`${r}, ${s.replace("%s",e)}`]:n}:{[r]:{...n,...o}}}if(s&&s!=="media")return`${r}, ${s.replace("%s",String(e))}`}else if(e){if(s==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:n}};if(s)return s.replace("%s",String(e))}return r};function IT(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function m(t,e,n){!t[e]&&n&&(t[e]=n)}function Ln(t){return typeof t!="string"||!t.startsWith("hsl")?t:Xd(t)}function Ve(t,e){`${e}Channel`in t||(t[`${e}Channel`]=Mn(Ln(t[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function TT(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const De=t=>{try{return t()}catch{}},AT=(t="mui")=>BI(t);function Ns(t,e,n,r){if(!e)return;e=e===!0?{}:e;const i=r==="dark"?"dark":"light";if(!n){t[r]=wT({...e,palette:{mode:i,...e==null?void 0:e.palette}});return}const{palette:s,...o}=ho({...n,palette:{mode:i,...e==null?void 0:e.palette}});return t[r]={...e,palette:s,opacity:{...rf(i),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||sf(i)},o}function RT(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:s="mui",shouldSkipGeneratingVar:o=ET,colorSchemeSelector:a=n.light&&n.dark?"media":void 0,rootSelector:c=":root",...l}=t,h=Object.keys(n)[0],u=r||(n.light&&h!=="light"?"light":h),f=AT(s),{[u]:g,light:p,dark:_,...b}=n,w={...b};let I=g;if((u==="dark"&&!("dark"in n)||u==="light"&&!("light"in n))&&(I=!0),!I)throw new Error(Bt(21,u));const E=Ns(w,I,l,u);p&&!w.light&&Ns(w,p,void 0,"light"),_&&!w.dark&&Ns(w,_,void 0,"dark");let v={defaultColorScheme:u,...E,cssVarPrefix:s,colorSchemeSelector:a,rootSelector:c,getCssVar:f,colorSchemes:w,font:{...iT(E.typography),...E.font},spacing:TT(l.spacing)};Object.keys(v.colorSchemes).forEach(X=>{const d=v.colorSchemes[X].palette,S=O=>{const j=O.split("-"),pe=j[1],xe=j[2];return f(O,d[pe][xe])};if(d.mode==="light"&&(m(d.common,"background","#fff"),m(d.common,"onBackground","#000")),d.mode==="dark"&&(m(d.common,"background","#000"),m(d.common,"onBackground","#fff")),IT(d,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),d.mode==="light"){m(d.Alert,"errorColor",B(d.error.light,.6)),m(d.Alert,"infoColor",B(d.info.light,.6)),m(d.Alert,"successColor",B(d.success.light,.6)),m(d.Alert,"warningColor",B(d.warning.light,.6)),m(d.Alert,"errorFilledBg",S("palette-error-main")),m(d.Alert,"infoFilledBg",S("palette-info-main")),m(d.Alert,"successFilledBg",S("palette-success-main")),m(d.Alert,"warningFilledBg",S("palette-warning-main")),m(d.Alert,"errorFilledColor",De(()=>d.getContrastText(d.error.main))),m(d.Alert,"infoFilledColor",De(()=>d.getContrastText(d.info.main))),m(d.Alert,"successFilledColor",De(()=>d.getContrastText(d.success.main))),m(d.Alert,"warningFilledColor",De(()=>d.getContrastText(d.warning.main))),m(d.Alert,"errorStandardBg",W(d.error.light,.9)),m(d.Alert,"infoStandardBg",W(d.info.light,.9)),m(d.Alert,"successStandardBg",W(d.success.light,.9)),m(d.Alert,"warningStandardBg",W(d.warning.light,.9)),m(d.Alert,"errorIconColor",S("palette-error-main")),m(d.Alert,"infoIconColor",S("palette-info-main")),m(d.Alert,"successIconColor",S("palette-success-main")),m(d.Alert,"warningIconColor",S("palette-warning-main")),m(d.AppBar,"defaultBg",S("palette-grey-100")),m(d.Avatar,"defaultBg",S("palette-grey-400")),m(d.Button,"inheritContainedBg",S("palette-grey-300")),m(d.Button,"inheritContainedHoverBg",S("palette-grey-A100")),m(d.Chip,"defaultBorder",S("palette-grey-400")),m(d.Chip,"defaultAvatarColor",S("palette-grey-700")),m(d.Chip,"defaultIconColor",S("palette-grey-700")),m(d.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),m(d.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),m(d.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),m(d.LinearProgress,"primaryBg",W(d.primary.main,.62)),m(d.LinearProgress,"secondaryBg",W(d.secondary.main,.62)),m(d.LinearProgress,"errorBg",W(d.error.main,.62)),m(d.LinearProgress,"infoBg",W(d.info.main,.62)),m(d.LinearProgress,"successBg",W(d.success.main,.62)),m(d.LinearProgress,"warningBg",W(d.warning.main,.62)),m(d.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.11)`),m(d.Slider,"primaryTrack",W(d.primary.main,.62)),m(d.Slider,"secondaryTrack",W(d.secondary.main,.62)),m(d.Slider,"errorTrack",W(d.error.main,.62)),m(d.Slider,"infoTrack",W(d.info.main,.62)),m(d.Slider,"successTrack",W(d.success.main,.62)),m(d.Slider,"warningTrack",W(d.warning.main,.62));const O=Mr(d.background.default,.8);m(d.SnackbarContent,"bg",O),m(d.SnackbarContent,"color",De(()=>d.getContrastText(O))),m(d.SpeedDialAction,"fabHoverBg",Mr(d.background.paper,.15)),m(d.StepConnector,"border",S("palette-grey-400")),m(d.StepContent,"border",S("palette-grey-400")),m(d.Switch,"defaultColor",S("palette-common-white")),m(d.Switch,"defaultDisabledColor",S("palette-grey-100")),m(d.Switch,"primaryDisabledColor",W(d.primary.main,.62)),m(d.Switch,"secondaryDisabledColor",W(d.secondary.main,.62)),m(d.Switch,"errorDisabledColor",W(d.error.main,.62)),m(d.Switch,"infoDisabledColor",W(d.info.main,.62)),m(d.Switch,"successDisabledColor",W(d.success.main,.62)),m(d.Switch,"warningDisabledColor",W(d.warning.main,.62)),m(d.TableCell,"border",W(Dr(d.divider,1),.88)),m(d.Tooltip,"bg",Dr(d.grey[700],.92))}if(d.mode==="dark"){m(d.Alert,"errorColor",W(d.error.light,.6)),m(d.Alert,"infoColor",W(d.info.light,.6)),m(d.Alert,"successColor",W(d.success.light,.6)),m(d.Alert,"warningColor",W(d.warning.light,.6)),m(d.Alert,"errorFilledBg",S("palette-error-dark")),m(d.Alert,"infoFilledBg",S("palette-info-dark")),m(d.Alert,"successFilledBg",S("palette-success-dark")),m(d.Alert,"warningFilledBg",S("palette-warning-dark")),m(d.Alert,"errorFilledColor",De(()=>d.getContrastText(d.error.dark))),m(d.Alert,"infoFilledColor",De(()=>d.getContrastText(d.info.dark))),m(d.Alert,"successFilledColor",De(()=>d.getContrastText(d.success.dark))),m(d.Alert,"warningFilledColor",De(()=>d.getContrastText(d.warning.dark))),m(d.Alert,"errorStandardBg",B(d.error.light,.9)),m(d.Alert,"infoStandardBg",B(d.info.light,.9)),m(d.Alert,"successStandardBg",B(d.success.light,.9)),m(d.Alert,"warningStandardBg",B(d.warning.light,.9)),m(d.Alert,"errorIconColor",S("palette-error-main")),m(d.Alert,"infoIconColor",S("palette-info-main")),m(d.Alert,"successIconColor",S("palette-success-main")),m(d.Alert,"warningIconColor",S("palette-warning-main")),m(d.AppBar,"defaultBg",S("palette-grey-900")),m(d.AppBar,"darkBg",S("palette-background-paper")),m(d.AppBar,"darkColor",S("palette-text-primary")),m(d.Avatar,"defaultBg",S("palette-grey-600")),m(d.Button,"inheritContainedBg",S("palette-grey-800")),m(d.Button,"inheritContainedHoverBg",S("palette-grey-700")),m(d.Chip,"defaultBorder",S("palette-grey-700")),m(d.Chip,"defaultAvatarColor",S("palette-grey-300")),m(d.Chip,"defaultIconColor",S("palette-grey-300")),m(d.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),m(d.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),m(d.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),m(d.LinearProgress,"primaryBg",B(d.primary.main,.5)),m(d.LinearProgress,"secondaryBg",B(d.secondary.main,.5)),m(d.LinearProgress,"errorBg",B(d.error.main,.5)),m(d.LinearProgress,"infoBg",B(d.info.main,.5)),m(d.LinearProgress,"successBg",B(d.success.main,.5)),m(d.LinearProgress,"warningBg",B(d.warning.main,.5)),m(d.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.13)`),m(d.Slider,"primaryTrack",B(d.primary.main,.5)),m(d.Slider,"secondaryTrack",B(d.secondary.main,.5)),m(d.Slider,"errorTrack",B(d.error.main,.5)),m(d.Slider,"infoTrack",B(d.info.main,.5)),m(d.Slider,"successTrack",B(d.success.main,.5)),m(d.Slider,"warningTrack",B(d.warning.main,.5));const O=Mr(d.background.default,.98);m(d.SnackbarContent,"bg",O),m(d.SnackbarContent,"color",De(()=>d.getContrastText(O))),m(d.SpeedDialAction,"fabHoverBg",Mr(d.background.paper,.15)),m(d.StepConnector,"border",S("palette-grey-600")),m(d.StepContent,"border",S("palette-grey-600")),m(d.Switch,"defaultColor",S("palette-grey-300")),m(d.Switch,"defaultDisabledColor",S("palette-grey-600")),m(d.Switch,"primaryDisabledColor",B(d.primary.main,.55)),m(d.Switch,"secondaryDisabledColor",B(d.secondary.main,.55)),m(d.Switch,"errorDisabledColor",B(d.error.main,.55)),m(d.Switch,"infoDisabledColor",B(d.info.main,.55)),m(d.Switch,"successDisabledColor",B(d.success.main,.55)),m(d.Switch,"warningDisabledColor",B(d.warning.main,.55)),m(d.TableCell,"border",B(Dr(d.divider,1),.68)),m(d.Tooltip,"bg",Dr(d.grey[700],.92))}Ve(d.background,"default"),Ve(d.background,"paper"),Ve(d.common,"background"),Ve(d.common,"onBackground"),Ve(d,"divider"),Object.keys(d).forEach(O=>{const j=d[O];O!=="tonalOffset"&&j&&typeof j=="object"&&(j.main&&m(d[O],"mainChannel",Mn(Ln(j.main))),j.light&&m(d[O],"lightChannel",Mn(Ln(j.light))),j.dark&&m(d[O],"darkChannel",Mn(Ln(j.dark))),j.contrastText&&m(d[O],"contrastTextChannel",Mn(Ln(j.contrastText))),O==="text"&&(Ve(d[O],"primary"),Ve(d[O],"secondary")),O==="action"&&(j.active&&Ve(d[O],"active"),j.selected&&Ve(d[O],"selected")))})}),v=e.reduce((X,d)=>ye(X,d),v);const C={prefix:s,disableCssColorScheme:i,shouldSkipGeneratingVar:o,getSelector:ST(v)},{vars:P,generateThemeVars:R,generateStyleSheets:oe}=jI(v,C);return v.vars=P,Object.entries(v.colorSchemes[v.defaultColorScheme]).forEach(([X,d])=>{v[X]=d}),v.generateThemeVars=R,v.generateStyleSheets=oe,v.generateSpacing=function(){return Yd(l.spacing,Sa(this))},v.getColorSchemeSelector=VI(a),v.spacing=v.generateSpacing(),v.shouldSkipGeneratingVar=o,v.unstable_sxConfig={...Tr,...l==null?void 0:l.unstable_sxConfig},v.unstable_sx=function(d){return fn({sx:d,theme:this})},v.toRuntimeSource=nf,v}function Wl(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:Fa({...n===!0?{}:n.palette,mode:e})})}function PT(t={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:s=n==null?void 0:n.mode,...o}=t,a=s||"light",c=i==null?void 0:i[a],l={...i,...n?{[a]:{...typeof c!="boolean"&&c,palette:n}}:void 0};if(r===!1){if(!("colorSchemes"in t))return ho(t,...e);let h=n;"palette"in t||l[a]&&(l[a]!==!0?h=l[a].palette:a==="dark"&&(h={mode:"dark"}));const u=ho({...t,palette:h},...e);return u.defaultColorScheme=a,u.colorSchemes=l,u.palette.mode==="light"&&(u.colorSchemes.light={...l.light!==!0&&l.light,palette:u.palette},Wl(u,"dark",l.dark)),u.palette.mode==="dark"&&(u.colorSchemes.dark={...l.dark!==!0&&l.dark,palette:u.palette},Wl(u,"light",l.light)),u}return!n&&!("light"in l)&&a==="light"&&(l.light=!0),RT({...o,colorSchemes:l,defaultColorScheme:a,...typeof r!="boolean"&&r},...e)}const kT=PT(),of=kT,af="$$material";function OT(t){return hr.jsx(bI,{...t,defaultTheme:of,themeId:af})}function NT(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const xT=t=>NT(t)&&t!=="classes",rA=TI({themeId:af,defaultTheme:of,rootShouldForwardProp:xT});function iA(t){return function(n){return hr.jsx(OT,{styles:typeof t=="function"?r=>t({theme:r,...n}):t})}}function sA(){return eS}const oA=UI;function aA(t){return $I(t)}function DT(t){return typeof t.main=="string"}function MT(t,e=[]){if(!DT(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function cA(t=[]){return([,e])=>e&&MT(e,t)}export{vI as $,zT as A,KT as B,xT as C,nA as D,of as E,Vi as F,cI as G,MI as H,Xe as I,ZT as J,Sa as K,ye as L,XT as M,eS as N,Ir as O,lf as P,WT as Q,$T as R,BT as S,Na as T,UT as U,ut as V,jT as W,Ct as X,Ma as Y,La as Z,LI as _,Sd as a,Bt as a0,NT as a1,lI as a2,TI as a3,lo as a4,so as a5,vT as a6,eA as a7,tI as a8,sC as a9,sA as aa,YT as ab,QT as b,xa as c,JT as d,af as e,PT as f,EI as g,aT as h,tA as i,rA as j,aA as k,cA as l,oA as m,iA as n,VT as o,Qt as p,zt as q,HT as r,fn as s,GT as t,_I as u,bd as v,va as w,r_ as x,qT as y,FT as z};
//# sourceMappingURL=createSimplePaletteValueFilter-CcV_G1Uj.js.map
