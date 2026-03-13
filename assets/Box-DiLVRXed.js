var dp=Object.defineProperty;var hp=(t,e,n)=>e in t?dp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fn=(t,e,n)=>(hp(t,typeof e!="symbol"?e+"":e,n),n);import{r as I,H as yc,o as me,R as Gn}from"./chunk-LFPYN7LY-B7CfRXkv.js";const fp={firebase:{apiKey:"AIzaSyBZJmUnbSqufRL64CSzdJMpy3hlRshd-9Q",authDomain:"juggertrainer.firebaseapp.com",databaseURL:"https://juggertrainer.firebaseio.com",projectId:"juggertrainer",storageBucket:"juggertrainer.appspot.com",messagingSenderId:"103859061629",appId:"1:103859061629:web:eff53ba99a8251f65cc214",measurementId:"G-KN7W5GRDM4"}},pp=2147483647;function $o(t){return[t[Math.floor(Math.random()*11)],t[Math.floor(Math.random()*11)]]}function TR(t){const e=$o(t);return{exertionLevel:"EASY",howToPlay:"",name:"",originCountry:"CA",playersMin:2,playersMax:pp,tags:[],images:e}}var vc={};/**
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
 */const Su={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw An(e)},An=function(t){return new Error("Firebase Database ("+Su.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Iu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gp=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(h=64)),r.push(n[d],n[u],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Iu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw new mp;const h=s<<2|a>>4;if(r.push(h),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const p=l<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tu=function(t){const e=Iu(t);return Fo.encodeByteArray(e,!0)},ai=function(t){return Tu(t).replace(/\./g,"")},ci=function(t){try{return Fo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _p(t){return Au(void 0,t)}function Au(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yp(n)||(t[n]=Au(t[n],e[n]));return t}function yp(t){return t!=="__proto__"}/**
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
 */function vp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bp=()=>vp().__FIREBASE_DEFAULTS__,wp=()=>{if(typeof process>"u"||typeof vc>"u")return;const t=vc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ep=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ci(t[1]);return e&&JSON.parse(e)},Uo=()=>{try{return bp()||wp()||Ep()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ru=t=>{var e,n;return(n=(e=Uo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Cp=t=>{const e=Ru(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pu=()=>{var t;return(t=Uo())===null||t===void 0?void 0:t.config},ku=t=>{var e;return(e=Uo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Sp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ai(JSON.stringify(n)),ai(JSON.stringify(o)),""].join(".")}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Ip(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ou(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tp(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nu(){return Su.NODE_ADMIN===!0}function Ap(){try{return typeof indexedDB=="object"}catch{return!1}}function Rp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pp="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pp,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ar.prototype.create)}}class Ar{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?kp(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Nt(i,a,r)}}function kp(t,e){return t.replace(Op,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Op=/\{\$([^}]+)}/g;/**
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
 */function sr(t){return JSON.parse(t)}function oe(t){return JSON.stringify(t)}/**
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
 */const xu=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=sr(ci(s[0])||""),n=sr(ci(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Np=function(t){const e=xu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xp=function(t){const e=xu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Xe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function eo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function li(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ui(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bc(s)&&bc(o)){if(!ui(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bc(t){return t!==null&&typeof t=="object"}/**
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
 */function Rn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Kn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Dp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),d=1518500249):(l=s^o^a,d=1859775393):u<60?(l=s&o|a&(s|o),d=2400959708):(l=s^o^a,d=3395469782);const h=(i<<5|i>>>27)+l+c+d+r[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Mp(t,e){const n=new Lp(t,e);return n.subscribe.bind(n)}class Lp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$p(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ns),i.error===void 0&&(i.error=Ns),i.complete===void 0&&(i.complete=Ns);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $p(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ns(){}function xi(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Fp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Di=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ye(t){return t&&t._delegate?t._delegate:t}class jt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class Up{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wp(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bp(t){return t===Dt?void 0:t}function Wp(t){return t.instantiationMode==="EAGER"}/**
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
 */class jp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Up(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Hp={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Vp=W.INFO,zp={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Gp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=zp[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=Vp,this._logHandler=Gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const qp=(t,e)=>e.some(n=>t instanceof n);let wc,Ec;function Kp(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yp(){return Ec||(Ec=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Du=new WeakMap,to=new WeakMap,Mu=new WeakMap,xs=new WeakMap,jo=new WeakMap;function Qp(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ct(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Du.set(n,t)}).catch(()=>{}),jo.set(e,t),e}function Xp(t){if(to.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});to.set(t,e)}let no={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return to.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jp(t){no=t(no)}function Zp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ds(this),e,...n);return Mu.set(r,e.sort?e.sort():[e]),Ct(r)}:Yp().includes(t)?function(...e){return t.apply(Ds(this),e),Ct(Du.get(this))}:function(...e){return Ct(t.apply(Ds(this),e))}}function eg(t){return typeof t=="function"?Zp(t):(t instanceof IDBTransaction&&Xp(t),qp(t,Kp())?new Proxy(t,no):t)}function Ct(t){if(t instanceof IDBRequest)return Qp(t);if(xs.has(t))return xs.get(t);const e=eg(t);return e!==t&&(xs.set(t,e),jo.set(e,t)),e}const Ds=t=>jo.get(t);function tg(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ct(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const ng=["get","getKey","getAll","getAllKeys","count"],rg=["put","add","delete","clear"],Ms=new Map;function Cc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ms.get(e))return Ms.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ng.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Ms.set(e,s),s}Jp(t=>({...t,get:(e,n,r)=>Cc(e,n)||t.get(e,n,r),has:(e,n)=>!!Cc(e,n)||t.has(e,n)}));/**
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
 */class ig{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ro="@firebase/app",Sc="0.9.29";/**
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
 */const Ht=new Wo("@firebase/app"),og="@firebase/app-compat",ag="@firebase/analytics-compat",cg="@firebase/analytics",lg="@firebase/app-check-compat",ug="@firebase/app-check",dg="@firebase/auth",hg="@firebase/auth-compat",fg="@firebase/database",pg="@firebase/database-compat",gg="@firebase/functions",mg="@firebase/functions-compat",_g="@firebase/installations",yg="@firebase/installations-compat",vg="@firebase/messaging",bg="@firebase/messaging-compat",wg="@firebase/performance",Eg="@firebase/performance-compat",Cg="@firebase/remote-config",Sg="@firebase/remote-config-compat",Ig="@firebase/storage",Tg="@firebase/storage-compat",Ag="@firebase/firestore",Rg="@firebase/firestore-compat",Pg="firebase",kg="10.9.0";/**
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
 */const io="[DEFAULT]",Og={[ro]:"fire-core",[og]:"fire-core-compat",[cg]:"fire-analytics",[ag]:"fire-analytics-compat",[ug]:"fire-app-check",[lg]:"fire-app-check-compat",[dg]:"fire-auth",[hg]:"fire-auth-compat",[fg]:"fire-rtdb",[pg]:"fire-rtdb-compat",[gg]:"fire-fn",[mg]:"fire-fn-compat",[_g]:"fire-iid",[yg]:"fire-iid-compat",[vg]:"fire-fcm",[bg]:"fire-fcm-compat",[wg]:"fire-perf",[Eg]:"fire-perf-compat",[Cg]:"fire-rc",[Sg]:"fire-rc-compat",[Ig]:"fire-gcs",[Tg]:"fire-gcs-compat",[Ag]:"fire-fst",[Rg]:"fire-fst-compat","fire-js":"fire-js",[Pg]:"fire-js-all"};/**
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
 */const di=new Map,so=new Map;function Ng(t,e){try{t.container.addComponent(e)}catch(n){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(so.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;so.set(e,t);for(const n of di.values())Ng(n,t);return!0}function Ho(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},St=new Ar("app","Firebase",xg);/**
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
 */class Dg{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
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
 */const Pn=kg;function Lu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:io,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw St.create("bad-app-name",{appName:String(i)});if(n||(n=Pu()),!n)throw St.create("no-options");const s=di.get(i);if(s){if(ui(n,s.options)&&ui(r,s.config))return s;throw St.create("duplicate-app",{appName:i})}const o=new jp(i);for(const c of so.values())o.addComponent(c);const a=new Dg(n,r,o);return di.set(i,a),a}function $u(t=io){const e=di.get(t);if(!e&&t===io&&Pu())return Lu();if(!e)throw St.create("no-app",{appName:t});return e}function It(t,e,n){var r;let i=(r=Og[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(a.join(" "));return}vn(new jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Mg="firebase-heartbeat-database",Lg=1,or="firebase-heartbeat-store";let Ls=null;function Fu(){return Ls||(Ls=tg(Mg,Lg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(or)}catch(n){console.warn(n)}}}}).catch(t=>{throw St.create("idb-open",{originalErrorMessage:t.message})})),Ls}async function $g(t){try{const n=(await Fu()).transaction(or),r=await n.objectStore(or).get(Uu(t));return await n.done,r}catch(e){if(e instanceof Nt)Ht.warn(e.message);else{const n=St.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(n.message)}}}async function Ic(t,e){try{const r=(await Fu()).transaction(or,"readwrite");await r.objectStore(or).put(e,Uu(t)),await r.done}catch(n){if(n instanceof Nt)Ht.warn(n.message);else{const r=St.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(r.message)}}}function Uu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Fg=1024,Ug=30*24*60*60*1e3;class Bg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Tc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ug}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tc(),{heartbeatsToSend:r,unsentEntries:i}=Wg(this._heartbeatsCache.heartbeats),s=ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Tc(){return new Date().toISOString().substring(0,10)}function Wg(t,e=Fg){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ac(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ac(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ap()?Rp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $g(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ac(t){return ai(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hg(t){vn(new jt("platform-logger",e=>new ig(e),"PRIVATE")),vn(new jt("heartbeat",e=>new Bg(e),"PRIVATE")),It(ro,Sc,t),It(ro,Sc,"esm2017"),It("fire-js","")}Hg("");var Vg="firebase",zg="10.9.0";/**
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
 */It(Vg,zg,"app");function Vo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Bu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gg=Bu,Wu=new Ar("auth","Firebase",Bu());/**
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
 */const hi=new Wo("@firebase/auth");function qg(t,...e){hi.logLevel<=W.WARN&&hi.warn(`Auth (${Pn}): ${t}`,...e)}function Jr(t,...e){hi.logLevel<=W.ERROR&&hi.error(`Auth (${Pn}): ${t}`,...e)}/**
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
 */function xe(t,...e){throw zo(t,...e)}function Ge(t,...e){return zo(t,...e)}function ju(t,e,n){const r=Object.assign(Object.assign({},Gg()),{[e]:n});return new Ar("auth","Firebase",r).create(e,{appName:t.name})}function Kg(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xe(t,"argument-error"),ju(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zo(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wu.create(t,...e)}function P(t,e,...n){if(!t)throw zo(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Jr(e),new Error(e)}function st(t,e){t||et(e)}/**
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
 */function oo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yg(){return Rc()==="http:"||Rc()==="https:"}function Rc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Qg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yg()||Ip()||"connection"in navigator)?navigator.onLine:!0}function Xg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,st(n>e,"Short delay should be less than long delay!"),this.isMobile=Bo()||Ou()}get(){return Qg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Go(t,e){st(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zg=new Rr(3e4,6e4);function ct(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lt(t,e,n,r,i={}){return Vu(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Hu.fetch()(zu(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Vu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jg),e);try{const i=new tm(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw zr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw zr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw zr(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ju(t,d,l);xe(t,d)}}catch(i){if(i instanceof Nt)throw i;xe(t,"network-request-failed",{message:String(i)})}}async function Pr(t,e,n,r,i={}){const s=await lt(t,e,n,r,i);return"mfaPendingCredential"in s&&xe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function zu(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Go(t.config,i):`${t.config.apiScheme}://${i}`}function em(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),Zg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(t,e,r);return i.customData._tokenResponse=n,i}function Pc(t){return t!==void 0&&t.enterprise!==void 0}class nm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return em(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rm(t,e){return lt(t,"GET","/v2/recaptchaConfig",ct(t,e))}/**
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
 */async function im(t,e){return lt(t,"POST","/v1/accounts:delete",e)}async function sm(t,e){return lt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function om(t,e=!1){const n=ye(t),r=await n.getIdToken(e),i=qo(r);P(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jn($s(i.auth_time)),issuedAtTime:Jn($s(i.iat)),expirationTime:Jn($s(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $s(t){return Number(t)*1e3}function qo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=ci(n);return i?JSON.parse(i):(Jr("Failed to decode base64 JWT payload"),null)}catch(i){return Jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function am(t){const e=qo(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ar(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&cm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function cr(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ar(t,sm(n,{idToken:r}));P(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hm(s.providerUserInfo):[],a=dm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function um(t){const e=ye(t);await cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dm(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hm(t){return t.map(e=>{var{providerId:n}=e,r=Vo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function fm(t,e){const n=await Vu(t,{},async()=>{const r=Rn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=zu(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Hu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pm(t,e){return lt(t,"POST","/v2/accounts:revokeToken",ct(t,e))}/**
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
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return P(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fm(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new lr;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(P(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(P(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function _t(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Vo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ar(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return om(this,e)}reload(){return um(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ar(this,im(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:E,emailVerified:y,isAnonymous:C,providerData:A,stsTokenManager:R}=n;P(E&&R,e,"internal-error");const Y=lr.fromJSON(this.name,R);P(typeof E=="string",e,"internal-error"),_t(u,e.name),_t(h,e.name),P(typeof y=="boolean",e,"internal-error"),P(typeof C=="boolean",e,"internal-error"),_t(g,e.name),_t(p,e.name),_t(m,e.name),_t(v,e.name),_t(w,e.name),_t(T,e.name);const H=new Bt({uid:E,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:C,photoURL:p,phoneNumber:g,tenantId:m,stsTokenManager:Y,createdAt:w,lastLoginAt:T});return A&&Array.isArray(A)&&(H.providerData=A.map(f=>Object.assign({},f))),v&&(H._redirectEventId=v),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new lr;i.updateFromServerResponse(n);const s=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cr(s),s}}/**
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
 */const kc=new Map;function tt(t){st(t instanceof Function,"Expected a class definition");let e=kc.get(t);return e?(st(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kc.set(t,e),e)}/**
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
 */class qu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qu.type="NONE";const Oc=qu;/**
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
 */function Zr(t,e,n){return`firebase:${t}:${e}:${n}`}class dn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new dn(tt(Oc),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||tt(Oc);const o=Zr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const d=await l._get(o);if(d){const u=Bt._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new dn(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new dn(s,e,r))}}/**
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
 */function Nc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ku(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ju(e))return"Blackberry";if(Zu(e))return"Webos";if(Ko(e))return"Safari";if((e.includes("chrome/")||Yu(e))&&!e.includes("edge/"))return"Chrome";if(Xu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ku(t=_e()){return/firefox\//i.test(t)}function Ko(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yu(t=_e()){return/crios\//i.test(t)}function Qu(t=_e()){return/iemobile/i.test(t)}function Xu(t=_e()){return/android/i.test(t)}function Ju(t=_e()){return/blackberry/i.test(t)}function Zu(t=_e()){return/webos/i.test(t)}function Mi(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gm(t=_e()){var e;return Mi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mm(){return Tp()&&document.documentMode===10}function ed(t=_e()){return Mi(t)||Xu(t)||Zu(t)||Ju(t)||/windows phone/i.test(t)||Qu(t)}function _m(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function td(t,e=[]){let n;switch(t){case"Browser":n=Nc(_e());break;case"Worker":n=`${Nc(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pn}/${r}`}/**
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
 */class ym{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vm(t,e={}){return lt(t,"GET","/v2/passwordPolicy",ct(t,e))}/**
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
 */const bm=6;class wm{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Em{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xc(this),this.idTokenSubscription=new xc(this),this.beforeStateQueue=new ym(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ye(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vm(this),n=new wm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ar("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=td(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ut(t){return ye(t)}class xc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mp(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cm(t){Li=t}function nd(t){return Li.loadJS(t)}function Sm(){return Li.recaptchaEnterpriseScript}function Im(){return Li.gapiScript}function Tm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Am="recaptcha-enterprise",Rm="NO_RECAPTCHA";class Pm{constructor(e){this.type=Am,this.auth=ut(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{rm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new nm(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Pc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Rm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Pc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Sm();c.length!==0&&(c+=a),nd(c).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Dc(t,e,n,r=!1){const i=new Pm(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function fi(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Dc(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dc(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function km(t,e){const n=Ho(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ui(s,e??{}))return i;xe(i,"already-initialized")}return n.initialize({options:e})}function Om(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nm(t,e,n){const r=ut(t);P(r._canInitEmulator,r,"emulator-config-failed"),P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=rd(e),{host:o,port:a}=xm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dm()}function rd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function xm(t){const e=rd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Mc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Mc(o)}}}function Mc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Dm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Mm(t,e){return lt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Lm(t,e){return Pr(t,"POST","/v1/accounts:signInWithPassword",ct(t,e))}async function $m(t,e){return lt(t,"POST","/v1/accounts:sendOobCode",ct(t,e))}async function Fm(t,e){return $m(t,e)}/**
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
 */async function Um(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",ct(t,e))}async function Bm(t,e){return Pr(t,"POST","/v1/accounts:signInWithEmailLink",ct(t,e))}/**
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
 */class ur extends Yo{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ur(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ur(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fi(e,n,"signInWithPassword",Lm);case"emailLink":return Um(e,{email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fi(e,r,"signUpPassword",Mm);case"emailLink":return Bm(e,{idToken:n,email:this._email,oobCode:this._password});default:xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hn(t,e){return Pr(t,"POST","/v1/accounts:signInWithIdp",ct(t,e))}/**
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
 */const Wm="http://localhost";class Vt extends Yo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Vo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Vt(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hn(e,n)}buildRequest(){const e={requestUri:Wm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rn(n)}return e}}/**
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
 */function jm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hm(t){const e=qn(Kn(t)).link,n=e?qn(Kn(e)).deep_link_id:null,r=qn(Kn(t)).deep_link_id;return(r?qn(Kn(r)).link:null)||r||n||e||t}class Qo{constructor(e){var n,r,i,s,o,a;const c=qn(Kn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,u=jm((i=c.mode)!==null&&i!==void 0?i:null);P(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Hm(e);try{return new Qo(n)}catch{return null}}}/**
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
 */class kn{constructor(){this.providerId=kn.PROVIDER_ID}static credential(e,n){return ur._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qo.parseLink(n);return P(r,"argument-error"),ur._fromEmailAndCode(e,r.code,r.tenantId)}}kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Xo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends Xo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yt extends kr{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
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
 */class vt extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vt.credential(n,r)}catch{return null}}}vt.GOOGLE_SIGN_IN_METHOD="google.com";vt.PROVIDER_ID="google.com";/**
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
 */class bt extends kr{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
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
 */class wt extends kr{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.TWITTER_SIGN_IN_METHOD="twitter.com";wt.PROVIDER_ID="twitter.com";/**
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
 */async function Vm(t,e){return Pr(t,"POST","/v1/accounts:signUp",ct(t,e))}/**
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
 */class zt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Bt._fromIdTokenResponse(e,r,i),o=Lc(r);return new zt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lc(r);return new zt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pi extends Nt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pi(e,n,r,i)}}function id(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pi._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function zm(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function sd(t,e,n=!1){const r=await ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zt._forOperation(t,"link",r)}async function Gm(t,e,n){await cr(e);const r=zm(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";P(r.has(n)===t,e.auth,i)}/**
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
 */async function qm(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ar(t,id(r,i,e,t),n);P(s.idToken,r,"internal-error");const o=qo(s.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),zt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xe(r,"user-mismatch"),s}}/**
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
 */async function od(t,e,n=!1){const r="signIn",i=await id(t,r,e),s=await zt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Km(t,e){return od(ut(t),e)}async function AR(t,e){const n=ye(t);return await Gm(!1,n,e.providerId),sd(n,e)}/**
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
 */function Ym(t,e,n){var r;P(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),P(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(P(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(P(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function ad(t){const e=ut(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function RR(t,e,n){const r=ut(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Ym(r,i,n),await fi(r,i,"getOobCode",Fm)}async function PR(t,e,n){const r=ut(t),o=await fi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ad(t),c}),a=await zt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function kR(t,e,n){return Km(ye(t),kn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ad(t),r})}function Qm(t,e,n,r){return ye(t).onIdTokenChanged(e,n,r)}function Xm(t,e,n){return ye(t).beforeAuthStateChanged(e,n)}function OR(t,e,n,r){return ye(t).onAuthStateChanged(e,n,r)}const gi="__sak";/**
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
 */class cd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gi,"1"),this.storage.removeItem(gi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Jm(){const t=_e();return Ko(t)||Mi(t)}const Zm=1e3,e_=10;class ld extends cd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Jm()&&_m(),this.fallbackToPolling=ed(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);mm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,e_):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ld.type="LOCAL";const t_=ld;/**
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
 */class ud extends cd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ud.type="SESSION";const dd=ud;/**
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
 */function n_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $i{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $i(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await n_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$i.receivers=[];/**
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
 */function Jo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class r_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Jo("",20);i.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function i_(t){qe().location.href=t}/**
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
 */function hd(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function s_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o_(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function a_(){return hd()?self:null}/**
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
 */const fd="firebaseLocalStorageDb",c_=1,mi="firebaseLocalStorage",pd="fbase_key";class Or{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fi(t,e){return t.transaction([mi],e?"readwrite":"readonly").objectStore(mi)}function l_(){const t=indexedDB.deleteDatabase(fd);return new Or(t).toPromise()}function ao(){const t=indexedDB.open(fd,c_);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mi,{keyPath:pd})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mi)?e(r):(r.close(),await l_(),e(await ao()))})})}async function $c(t,e,n){const r=Fi(t,!0).put({[pd]:e,value:n});return new Or(r).toPromise()}async function u_(t,e){const n=Fi(t,!1).get(e),r=await new Or(n).toPromise();return r===void 0?null:r.value}function Fc(t,e){const n=Fi(t,!0).delete(e);return new Or(n).toPromise()}const d_=800,h_=3;class gd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ao(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$i._getInstance(a_()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s_(),!this.activeServiceWorker)return;this.sender=new r_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||o_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ao();return await $c(e,gi,"1"),await Fc(e,gi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$c(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>u_(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Fi(i,!1).getAll();return new Or(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),d_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gd.type="LOCAL";const f_=gd;new Rr(3e4,6e4);/**
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
 */function md(t,e){return e?tt(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zo extends Yo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p_(t){return od(t.auth,new Zo(t),t.bypassAuthState)}function g_(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),qm(n,new Zo(t),t.bypassAuthState)}async function m_(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),sd(n,new Zo(t),t.bypassAuthState)}/**
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
 */class _d{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p_;case"linkViaPopup":case"linkViaRedirect":return m_;case"reauthViaPopup":case"reauthViaRedirect":return g_;default:xe(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const __=new Rr(2e3,1e4);async function NR(t,e,n){const r=ut(t);Kg(t,e,Xo);const i=md(r,n);return new $t(r,"signInViaPopup",e,i).executeNotNull()}class $t extends _d{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=Jo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,__.get())};e()}}$t.currentPopupAction=null;/**
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
 */const y_="pendingRedirect",ei=new Map;class v_ extends _d{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ei.get(this.auth._key());if(!e){try{const r=await b_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ei.set(this.auth._key(),e)}return this.bypassAuthState||ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b_(t,e){const n=C_(e),r=E_(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function w_(t,e){ei.set(t._key(),e)}function E_(t){return tt(t._redirectPersistence)}function C_(t){return Zr(y_,t.config.apiKey,t.name)}async function S_(t,e,n=!1){const r=ut(t),i=md(r,e),o=await new v_(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const I_=10*60*1e3;class T_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!yd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uc(e))}saveEventToCache(e){this.cachedEventUids.add(Uc(e)),this.lastProcessedEventTime=Date.now()}}function Uc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function yd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yd(t);default:return!1}}/**
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
 */async function R_(t,e={}){return lt(t,"GET","/v1/projects",e)}/**
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
 */const P_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k_=/^https?/;async function O_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await R_(t);for(const n of e)try{if(N_(n))return}catch{}xe(t,"unauthorized-domain")}function N_(t){const e=oo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!k_.test(n))return!1;if(P_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const x_=new Rr(3e4,6e4);function Bc(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function D_(t){return new Promise((e,n)=>{var r,i,s;function o(){Bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bc(),n(Ge(t,"network-request-failed"))},timeout:x_.get()})}if(!((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qe().gapi)===null||s===void 0)&&s.load)o();else{const a=Tm("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Ge(t,"network-request-failed"))},nd(`${Im()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ti=null,e})}let ti=null;function M_(t){return ti=ti||D_(t),ti}/**
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
 */const L_=new Rr(5e3,15e3),$_="__/auth/iframe",F_="emulator/auth/iframe",U_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function W_(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Go(e,F_):`https://${t.config.authDomain}/${$_}`,r={apiKey:e.apiKey,appName:t.name,v:Pn},i=B_.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Rn(r).slice(1)}`}async function j_(t){const e=await M_(t),n=qe().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:W_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(t,"network-request-failed"),a=qe().setTimeout(()=>{s(o)},L_.get());function c(){qe().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const H_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},V_=500,z_=600,G_="_blank",q_="http://localhost";class Wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K_(t,e,n,r=V_,i=z_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},H_),{width:r.toString(),height:i.toString(),top:s,left:o}),l=_e().toLowerCase();n&&(a=Yu(l)?G_:n),Ku(l)&&(e=e||q_,c.scrollbars="yes");const d=Object.entries(c).reduce((h,[g,p])=>`${h}${g}=${p},`,"");if(gm(l)&&a!=="_self")return Y_(e||"",a),new Wc(null);const u=window.open(e||"",a,d);P(u,t,"popup-blocked");try{u.focus()}catch{}return new Wc(u)}function Y_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Q_="__/auth/handler",X_="emulator/auth/handler",J_=encodeURIComponent("fac");async function jc(t,e,n,r,i,s){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pn,eventId:i};if(e instanceof Xo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",eo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof kr){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),l=c?`#${J_}=${encodeURIComponent(c)}`:"";return`${Z_(t)}?${Rn(a).slice(1)}${l}`}function Z_({config:t}){return t.emulator?Go(t,X_):`https://${t.authDomain}/${Q_}`}/**
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
 */const Fs="webStorageSupport";class ey{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dd,this._completeRedirectFn=S_,this._overrideRedirectResult=w_}async _openPopup(e,n,r,i){var s;st((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jc(e,n,r,oo(),i);return K_(e,o,Jo())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jc(e,n,r,oo(),i);return i_(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(st(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await j_(e),r=new T_(e);return n.register("authEvent",i=>(P(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fs,{type:Fs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fs];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=O_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ed()||Ko()||Mi()}}const ty=ey;var Hc="@firebase/auth",Vc="1.6.2";/**
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
 */class ny{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ry(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iy(t){vn(new jt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:td(t)},l=new Em(r,i,s,c);return Om(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new jt("auth-internal",e=>{const n=ut(e.getProvider("auth").getImmediate());return(r=>new ny(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(Hc,Vc,ry(t)),It(Hc,Vc,"esm2017")}/**
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
 */const sy=5*60,oy=ku("authIdTokenMaxAge")||sy;let zc=null;const ay=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oy)return;const i=n==null?void 0:n.token;zc!==i&&(zc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cy(t=$u()){const e=Ho(t,"auth");if(e.isInitialized())return e.getImmediate();const n=km(t,{popupRedirectResolver:ty,persistence:[f_,t_,dd]}),r=ku("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=ay(r);Xm(n,s,()=>s(n.currentUser)),Qm(n,o=>s(o))}const i=Ru("auth");return i&&Nm(n,`http://${i}`),n}function ly(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Cm({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ge("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ly().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iy("Browser");var Gc={};const qc="@firebase/database",Kc="1.0.3";/**
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
 */let vd="";function uy(t){vd=t}/**
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
 */class dy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),oe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:sr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class hy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Xe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dy(e)}}catch{}return new hy},Ft=bd("localStorage"),co=bd("sessionStorage");/**
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
 */const fn=new Wo("@firebase/database"),fy=function(){let t=1;return function(){return t++}}(),wd=function(t){const e=Fp(t),n=new Dp;n.update(e);const r=n.digest();return Fo.encodeByteArray(r)},Nr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Nr.apply(null,r):typeof r=="object"?e+=oe(r):e+=r,e+=" "}return e};let Wt=null,Yc=!0;const py=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(fn.logLevel=W.VERBOSE,Wt=fn.log.bind(fn),e&&co.set("logging_enabled",!0)):typeof t=="function"?Wt=t:(Wt=null,co.remove("logging_enabled"))},he=function(...t){if(Yc===!0&&(Yc=!1,Wt===null&&co.get("logging_enabled")===!0&&py(!0)),Wt){const e=Nr.apply(null,t);Wt(e)}},xr=function(t){return function(...e){he(t,...e)}},lo=function(...t){const e="FIREBASE INTERNAL ERROR: "+Nr(...t);fn.error(e)},ot=function(...t){const e=`FIREBASE FATAL ERROR: ${Nr(...t)}`;throw fn.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Nr(...t);fn.warn(e)},gy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ea=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},my=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},bn="[MIN_NAME]",Gt="[MAX_NAME]",Zt=function(t,e){if(t===e)return 0;if(t===bn||e===Gt)return-1;if(e===bn||t===Gt)return 1;{const n=Qc(t),r=Qc(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_y=function(t,e){return t===e?0:t<e?-1:1},Un=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+oe(e))},ta=function(t){if(typeof t!="object"||t===null)return oe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=oe(e[r]),n+=":",n+=ta(t[e[r]]);return n+="}",n},Ed=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Cd=function(t){b(!ea(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const d=l.join("");let u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},yy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},vy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function by(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const wy=new RegExp("^-?(0*)\\d{1,10}$"),Ey=-2147483648,Cy=2147483647,Qc=function(t){if(wy.test(t)){const e=Number(t);if(e>=Ey&&e<=Cy)return e}return null},On=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Iy{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ty{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class pn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pn.OWNER="owner";/**
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
 */const na="5",Sd="v",Id="s",Td="r",Ad="f",Rd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pd="ls",kd="p",uo="ac",Od="websocket",Nd="long_polling";/**
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
 */class xd{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ft.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ft.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ay(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Dd(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===Od)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Nd)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ay(t)&&(n.ns=t.namespace);const i=[];return fe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class Ry{constructor(){this.counters_={}}incrementCounter(e,n=1){Xe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _p(this.counters_)}}/**
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
 */const Us={},Bs={};function ra(t){const e=t.toString();return Us[e]||(Us[e]=new Ry),Us[e]}function Py(t,e){const n=t.toString();return Bs[n]||(Bs[n]=e()),Bs[n]}/**
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
 */class ky{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&On(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Xc="start",Oy="close",Ny="pLPCommand",xy="pRTLPCB",Md="id",Ld="pw",$d="ser",Dy="cb",My="seg",Ly="ts",$y="d",Fy="dframe",Fd=1870,Ud=30,Uy=Fd-Ud,By=25e3,Wy=3e4;class un{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xr(e),this.stats_=ra(n),this.urlFn=c=>(this.appCheckToken&&(c[uo]=this.appCheckToken),Dd(n,Nd,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ky(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Wy)),my(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ia((...s)=>{const[o,a,c,l,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xc)this.id=a,this.password=c;else if(o===Oy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xc]="t",r[$d]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Dy]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Sd]=na,this.transportSessionId&&(r[Id]=this.transportSessionId),this.lastSessionId&&(r[Pd]=this.lastSessionId),this.applicationId&&(r[kd]=this.applicationId),this.appCheckToken&&(r[uo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rd.test(location.hostname)&&(r[Td]=Ad);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){un.forceAllow_=!0}static forceDisallow(){un.forceDisallow_=!0}static isAvailable(){return un.forceAllow_?!0:!un.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!yy()&&!vy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tu(n),i=Ed(r,Uy);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Fy]="t",r[Md]=e,r[Ld]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=oe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class ia{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fy(),window[Ny+this.uniqueCallbackIdentifier]=e,window[xy+this.uniqueCallbackIdentifier]=n,this.myIFrame=ia.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){he("frame writing exception"),a.stack&&he(a.stack),he(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Md]=this.myID,e[Ld]=this.myPW,e[$d]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ud+r.length<=Fd;){const o=this.pendingSegs.shift();r=r+"&"+My+i+"="+o.seg+"&"+Ly+i+"="+o.ts+"&"+$y+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(By)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const jy=16384,Hy=45e3;let _i=null;typeof MozWebSocket<"u"?_i=MozWebSocket:typeof WebSocket<"u"&&(_i=WebSocket);class Ue{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xr(this.connId),this.stats_=ra(n),this.connURL=Ue.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Sd]=na,typeof location<"u"&&location.hostname&&Rd.test(location.hostname)&&(o[Td]=Ad),n&&(o[Id]=n),r&&(o[Pd]=r),i&&(o[uo]=i),s&&(o[kd]=s),Dd(e,Od,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ft.set("previous_websocket_failure",!0);try{let r;Nu(),this.mySock=new _i(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ue.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&_i!==null&&!Ue.forceDisallow_}static previouslyFailed(){return Ft.isInMemoryStorage||Ft.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ft.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=sr(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=oe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ed(n,jy);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Hy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ue.responsesRequiredToBeHealthy=2;Ue.healthyTimeout=3e4;/**
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
 */class dr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[un,Ue]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ue&&Ue.isAvailable();let r=n&&!Ue.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ue];else{const i=this.transports_=[];for(const s of dr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);dr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}dr.globalTransportInitialized_=!1;/**
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
 */const Vy=6e4,zy=5e3,Gy=10*1024,qy=100*1024,Ws="t",Jc="d",Ky="s",Zc="r",Yy="e",el="o",tl="a",nl="n",rl="p",Qy="h";class Xy{constructor(e,n,r,i,s,o,a,c,l,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xr("c:"+this.id+":"),this.transportManager_=new dr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ws in e){const n=e[Ws];n===tl?this.upgradeIfSecondaryHealthy_():n===Zc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===el&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Un("t",e),r=Un("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:tl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:nl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Un("t",e),r=Un("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Un(Ws,e);if(Jc in e){const r=e[Jc];if(n===Qy){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===nl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ky?this.onConnectionShutdown_(r):n===Zc?this.onReset_(r):n===Yy?lo("Server Error: "+r):n===el?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lo("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),na!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Zn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ft.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Bd{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Wd{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class yi extends Wd{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yi}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const il=32,sl=768;class j{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function $(){return new j("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rt(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new j(t.pieces_,e)}function sa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Jy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function jd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new j(e,0)}function te(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof j)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new j(n,0)}function D(t){return t.pieceNum_>=t.pieces_.length}function ve(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return ve(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zy(t,e){const n=hr(t,0),r=hr(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Zt(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Hd(t,e){if(Rt(t)!==Rt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ne(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rt(t)>Rt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ev{constructor(e,n){this.errorPrefix_=n,this.parts_=hr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Di(this.parts_[r]);Vd(this)}}function tv(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Di(e),Vd(t)}function nv(t){const e=t.parts_.pop();t.byteLength_-=Di(e),t.parts_.length>0&&(t.byteLength_-=1)}function Vd(t){if(t.byteLength_>sl)throw new Error(t.errorPrefix_+"has a key path longer than "+sl+" bytes ("+t.byteLength_+").");if(t.parts_.length>il)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+il+") or object contains a cycle "+Mt(t))}function Mt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class oa extends Wd{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new oa}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bn=1e3,rv=60*5*1e3,ol=30*1e3,iv=1.3,sv=3e4,ov="server_kill",al=3;class rt extends Bd{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=rt.nextPersistentConnectionId_++,this.log_=xr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bn,this.maxReconnectDelay_=rv,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Nu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");oa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(oe(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Tr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;rt.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Xe(e,"w")){const r=yn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ol)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Np(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+oe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):lo("Unrecognized action received from server: "+oe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sv&&(this.reconnectDelay_=Bn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*iv)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(u){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Xy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(ov)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&be(u),c())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],eo(this.interruptReasons_)&&(this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ta(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new j(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){he("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=al&&(this.reconnectDelay_=ol,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){he("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=al&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+vd.replace(/\./g,"-")]=1,Bo()?e["framework.cordova"]=1:Ou()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yi.getInstance().currentlyOnline();return eo(this.interruptReasons_)&&e}}rt.nextPersistentConnectionId_=0;rt.nextConnectionId_=0;/**
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
 */class x{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new x(e,n)}}/**
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
 */class Ui{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new x(bn,e),i=new x(bn,n);return this.compare(r,i)!==0}minPost(){return x.MIN}}/**
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
 */let Gr;class zd extends Ui{static get __EMPTY_NODE(){return Gr}static set __EMPTY_NODE(e){Gr=e}compare(e,n){return Zt(e.name,n.name)}isDefinedOn(e){throw An("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return x.MIN}maxPost(){return new x(Gt,Gr)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,Gr)}toString(){return".key"}}const gn=new zd;/**
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
 */class qr{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ce.RED,this.left=i??Ce.EMPTY_NODE,this.right=s??Ce.EMPTY_NODE}copy(e,n,r,i,s){return new ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ce.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ce.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class av{copy(e,n,r,i,s){return this}insert(e,n,r){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ce{constructor(e,n=Ce.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ce(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Ce(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qr(this.root_,null,this.comparator_,!0,e)}}Ce.EMPTY_NODE=new av;/**
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
 */function cv(t,e){return Zt(t.name,e.name)}function aa(t,e){return Zt(t,e)}/**
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
 */let ho;function lv(t){ho=t}const Gd=function(t){return typeof t=="number"?"number:"+Cd(t):"string:"+t},qd=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Xe(e,".sv"),"Priority must be a string or number.")}else b(t===ho||t.isEmpty(),"priority of unexpected type.");b(t===ho||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let cl;class ae{constructor(e,n=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qd(this.priorityNode_)}static set __childrenNodeConstructor(e){cl=e}static get __childrenNodeConstructor(){return cl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return D(e)?this:L(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||Rt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Gd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Cd(this.value_):e+=this.value_,this.lazyHash_=wd(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ae.VALUE_TYPE_ORDER.indexOf(n),s=ae.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Kd,Yd;function uv(t){Kd=t}function dv(t){Yd=t}class hv extends Ui{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Zt(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return x.MIN}maxPost(){return new x(Gt,new ae("[PRIORITY-POST]",Yd))}makePost(e,n){const r=Kd(e);return new x(n,new ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new hv;/**
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
 */const fv=Math.log(2);class pv{constructor(e){const n=s=>parseInt(Math.log(s)/fv,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const vi=function(t,e,n,r){t.sort(e);const i=function(c,l){const d=l-c;let u,h;if(d===0)return null;if(d===1)return u=t[c],h=n?n(u):u,new ce(h,u.node,ce.BLACK,null,null);{const g=parseInt(d/2,10)+c,p=i(c,g),m=i(g+1,l);return u=t[g],h=n?n(u):u,new ce(h,u.node,ce.BLACK,p,m)}},s=function(c){let l=null,d=null,u=t.length;const h=function(p,m){const v=u-p,w=u;u-=p;const T=i(v+1,w),E=t[v],y=n?n(E):E;g(new ce(y,E.node,m,null,T))},g=function(p){l?(l.left=p,l=p):(d=p,l=p)};for(let p=0;p<c.count;++p){const m=c.nextBitIsOne(),v=Math.pow(2,c.count-(p+1));m?h(v,ce.BLACK):(h(v,ce.BLACK),h(v,ce.RED))}return d},o=new pv(t.length),a=s(o);return new Ce(r||e,a)};/**
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
 */let js;const rn={};class nt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(rn&&ne,"ChildrenNode.ts has not been loaded"),js=js||new nt({".priority":rn},{".priority":ne}),js}get(e){const n=yn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ce?n:null}hasIndex(e){return Xe(this.indexSet_,e.toString())}addIndex(e,n){b(e!==gn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(x.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=vi(r,e.getCompare()):a=rn;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const d=Object.assign({},this.indexes_);return d[c]=a,new nt(d,l)}addToIndexes(e,n){const r=li(this.indexes_,(i,s)=>{const o=yn(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===rn)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(x.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),vi(a,o.getCompare())}else return rn;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new x(e.name,a))),c.insert(e,e.node)}});return new nt(r,this.indexSet_)}removeFromIndexes(e,n){const r=li(this.indexes_,i=>{if(i===rn)return i;{const s=n.get(e.name);return s?i.remove(new x(e.name,s)):i}});return new nt(r,this.indexSet_)}}/**
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
 */let Wn;class k{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qd(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wn||(Wn=new k(new Ce(aa),null,nt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wn}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wn:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new x(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wn:this.priorityNode_;return new k(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{b(L(e)!==".priority"||Rt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,a)=>{n[o]=a.val(e),r++,s&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Gd(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":wd(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new x(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new x(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new x(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,x.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dr?-1:0}withIndex(e){if(e===gn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===gn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===gn?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gv extends k{constructor(){super(new Ce(aa),k.EMPTY_NODE,nt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const Dr=new gv;Object.defineProperties(x,{MIN:{value:new x(bn,k.EMPTY_NODE)},MAX:{value:new x(Gt,Dr)}});zd.__EMPTY_NODE=k.EMPTY_NODE;ae.__childrenNodeConstructor=k;lv(Dr);dv(Dr);/**
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
 */const mv=!0;function se(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ae(n,se(e))}if(!(t instanceof Array)&&mv){const n=[];let r=!1;if(fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=se(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new x(o,c)))}}),n.length===0)return k.EMPTY_NODE;const s=vi(n,cv,o=>o.name,aa);if(r){const o=vi(n,ne.getCompare());return new k(s,se(e),new nt({".priority":o},{".priority":ne}))}else return new k(s,se(e),nt.Default)}else{let n=k.EMPTY_NODE;return fe(t,(r,i)=>{if(Xe(t,r)&&r.substring(0,1)!=="."){const s=se(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(se(e))}}uv(se);/**
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
 */class _v extends Ui{constructor(e){super(),this.indexPath_=e,b(!D(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Zt(e.name,n.name):s}makePost(e,n){const r=se(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,r);return new x(n,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,Dr);return new x(Gt,e)}toString(){return hr(this.indexPath_,0).join("/")}}/**
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
 */class yv extends Ui{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Zt(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,n){const r=se(e);return new x(n,r)}toString(){return".value"}}const vv=new yv;/**
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
 */function Qd(t){return{type:"value",snapshotNode:t}}function wn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function fr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function pr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bv(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ca{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(fr(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(wn(n,r)):o.trackChildChange(pr(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(fr(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(pr(i,s,o))}else r.trackChildChange(wn(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gr{constructor(e){this.indexedFilter_=new ca(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gr.getStartPost_(e),this.endPost_=gr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new x(n,r))||(r=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=k.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,a)=>{s.matches(new x(o,a))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class wv{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new gr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new x(n,r))||(r=k.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(h,g)=>u(g,h)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const c=new x(n,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(n)){const u=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,c);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(pr(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(fr(n,u));const m=a.updateImmediateChild(n,k.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(wn(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return r.isEmpty()?e:d&&o(l,c)>=0?(s!=null&&(s.trackChildChange(fr(l.name,l.node)),s.trackChildChange(wn(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(l.name,k.EMPTY_NODE)):e}}/**
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
 */class la{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:bn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new la;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ev(t){return t.loadsAllData()?new ca(t.getIndex()):t.hasLimit()?new wv(t):new gr(t)}function ll(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===vv?n="$value":t.index_===gn?n="$key":(b(t.index_ instanceof _v,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=oe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=oe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+oe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=oe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+oe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ul(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
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
 */class bi extends Bd{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=xr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=bi.getListenId_(e,r),a={};this.listens_[o]=a;const c=ll(e._queryParams);this.restRequest_(s+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,r),yn(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",i(h,null)}})}unlisten(e,n){const r=bi.getListenId_(e,n);delete this.listens_[r]}get(e){const n=ll(e._queryParams),r=e._path.toString(),i=new Tr;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=sr(a.responseText)}catch{be("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Cv{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wi(){return{value:null,children:new Map}}function Xd(t,e,n){if(D(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,wi());const i=t.children.get(r);e=K(e),Xd(i,e,n)}}function fo(t,e,n){t.value!==null?n(e,t.value):Sv(t,(r,i)=>{const s=new j(e.toString()+"/"+r);fo(i,s,n)})}function Sv(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class Iv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const dl=10*1e3,Tv=30*1e3,Av=5*60*1e3;class Rv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Iv(e);const r=dl+(Tv-dl)*Math.random();Zn(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;fe(e,(i,s)=>{s>0&&Xe(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Zn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Av))}}/**
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
 */var Be;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Be||(Be={}));function ua(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function da(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ha(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ei{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Be.ACK_USER_WRITE,this.source=ua()}operationForChild(e){if(D(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new j(e));return new Ei($(),n,this.revert)}}else return b(L(this.path)===e,"operationForChild called for unrelated child."),new Ei(K(this.path),this.affectedTree,this.revert)}}/**
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
 */class mr{constructor(e,n){this.source=e,this.path=n,this.type=Be.LISTEN_COMPLETE}operationForChild(e){return D(this.path)?new mr(this.source,$()):new mr(this.source,K(this.path))}}/**
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
 */class qt{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Be.OVERWRITE}operationForChild(e){return D(this.path)?new qt(this.source,$(),this.snap.getImmediateChild(e)):new qt(this.source,K(this.path),this.snap)}}/**
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
 */class En{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Be.MERGE}operationForChild(e){if(D(this.path)){const n=this.children.subtree(new j(e));return n.isEmpty()?null:n.value?new qt(this.source,$(),n.value):new En(this.source,$(),n)}else return b(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new En(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pt{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(D(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Pv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kv(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(bv(o.childName,o.snapshotNode))}),jn(t,i,"child_removed",e,r,n),jn(t,i,"child_added",e,r,n),jn(t,i,"child_moved",s,r,n),jn(t,i,"child_changed",e,r,n),jn(t,i,"value",e,r,n),i}function jn(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>Nv(t,a,c)),o.forEach(a=>{const c=Ov(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function Ov(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Nv(t,e,n){if(e.childName==null||n.childName==null)throw An("Should only compare child_ events.");const r=new x(e.childName,e.snapshotNode),i=new x(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Bi(t,e){return{eventCache:t,serverCache:e}}function er(t,e,n,r){return Bi(new Pt(e,n,r),t.serverCache)}function Jd(t,e,n,r){return Bi(t.eventCache,new Pt(e,n,r))}function Ci(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Kt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Hs;const xv=()=>(Hs||(Hs=new Ce(_y)),Hs);class q{constructor(e,n=xv()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return fe(e,(r,i)=>{n=n.set(new j(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:$(),value:this.value};if(D(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:te(new j(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(D(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new q(null)}}set(e,n){if(D(e))return new q(n,this.children);{const r=L(e),s=(this.children.get(r)||new q(null)).set(K(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(D(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(D(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(D(e))return n;{const r=L(e),s=(this.children.get(r)||new q(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_($(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(te(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,$(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(D(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(K(e),te(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,$(),n)}foreachOnPath_(e,n,r){if(D(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),te(n,i),r):new q(null)}}foreach(e){this.foreach_($(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(te(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class We{constructor(e){this.writeTree_=e}static empty(){return new We(new q(null))}}function tr(t,e,n){if(D(e))return new We(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ve(i,e);return s=s.updateChild(o,n),new We(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new We(s)}}}function po(t,e,n){let r=t;return fe(n,(i,s)=>{r=tr(r,te(e,i),s)}),r}function hl(t,e){if(D(e))return We.empty();{const n=t.writeTree_.setTree(e,new q(null));return new We(n)}}function go(t,e){return en(t,e)!=null}function en(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ve(n.path,e)):null}function fl(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new x(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new x(r,i.value))}),e}function Tt(t,e){if(D(e))return t;{const n=en(t,e);return n!=null?new We(new q(n)):new We(t.writeTree_.subtree(e))}}function mo(t){return t.writeTree_.isEmpty()}function Cn(t,e){return Zd($(),t.writeTree_,e)}function Zd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Zd(te(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(te(t,".priority"),r)),n}}/**
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
 */function Wi(t,e){return rh(e,t)}function Dv(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=tr(t.visibleWrites,e,n)),t.lastWriteId=r}function Mv(t,e,n,r){b(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=po(t.visibleWrites,e,n),t.lastWriteId=r}function Lv(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $v(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Fv(a,r.path)?i=!1:Ne(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Uv(t),!0;if(r.snap)t.visibleWrites=hl(t.visibleWrites,r.path);else{const a=r.children;fe(a,c=>{t.visibleWrites=hl(t.visibleWrites,te(r.path,c))})}return!0}else return!1}function Fv(t,e){if(t.snap)return Ne(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ne(te(t.path,n),e))return!0;return!1}function Uv(t){t.visibleWrites=eh(t.allWrites,Bv,$()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Bv(t){return t.visible}function eh(t,e,n){let r=We.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ne(n,o)?(a=ve(n,o),r=tr(r,a,s.snap)):Ne(o,n)&&(a=ve(o,n),r=tr(r,$(),s.snap.getChild(a)));else if(s.children){if(Ne(n,o))a=ve(n,o),r=po(r,a,s.children);else if(Ne(o,n))if(a=ve(o,n),D(a))r=po(r,$(),s.children);else{const c=yn(s.children,L(a));if(c){const l=c.getChild(K(a));r=tr(r,$(),l)}}}else throw An("WriteRecord should have .snap or .children")}}return r}function th(t,e,n,r,i){if(!r&&!i){const s=en(t.visibleWrites,e);if(s!=null)return s;{const o=Tt(t.visibleWrites,e);if(mo(o))return n;if(n==null&&!go(o,$()))return null;{const a=n||k.EMPTY_NODE;return Cn(o,a)}}}else{const s=Tt(t.visibleWrites,e);if(!i&&mo(s))return n;if(!i&&n==null&&!go(s,$()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(Ne(l.path,e)||Ne(e,l.path))},a=eh(t.allWrites,o,e),c=n||k.EMPTY_NODE;return Cn(a,c)}}}function Wv(t,e,n){let r=k.EMPTY_NODE;const i=en(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tt(t.visibleWrites,e);return n.forEachChild(ne,(o,a)=>{const c=Cn(Tt(s,new j(o)),a);r=r.updateImmediateChild(o,c)}),fl(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tt(t.visibleWrites,e);return fl(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function jv(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=te(e,n);if(go(t.visibleWrites,s))return null;{const o=Tt(t.visibleWrites,s);return mo(o)?i.getChild(n):Cn(o,i.getChild(n))}}function Hv(t,e,n,r){const i=te(e,n),s=en(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tt(t.visibleWrites,i);return Cn(o,r.getNode().getImmediateChild(n))}else return null}function Vv(t,e){return en(t.visibleWrites,e)}function zv(t,e,n,r,i,s,o){let a;const c=Tt(t.visibleWrites,e),l=en(c,$());if(l!=null)a=l;else if(n!=null)a=Cn(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&d.length<i;)u(g,r)!==0&&d.push(g),g=h.getNext();return d}else return[]}function Gv(){return{visibleWrites:We.empty(),allWrites:[],lastWriteId:-1}}function Si(t,e,n,r){return th(t.writeTree,t.treePath,e,n,r)}function fa(t,e){return Wv(t.writeTree,t.treePath,e)}function pl(t,e,n,r){return jv(t.writeTree,t.treePath,e,n,r)}function Ii(t,e){return Vv(t.writeTree,te(t.treePath,e))}function qv(t,e,n,r,i,s){return zv(t.writeTree,t.treePath,e,n,r,i,s)}function pa(t,e,n){return Hv(t.writeTree,t.treePath,e,n)}function nh(t,e){return rh(te(t.treePath,e),t.writeTree)}function rh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Kv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,pr(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,fr(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,wn(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,pr(r,e.snapshotNode,i.oldSnap));else throw An("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Yv{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const ih=new Yv;class ga{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Pt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pa(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Kt(this.viewCache_),s=qv(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Qv(t){return{filter:t}}function Xv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Jv(t,e,n,r,i){const s=new Kv;let o,a;if(n.type===Be.OVERWRITE){const l=n;l.source.fromUser?o=_o(t,e,l.path,l.snap,r,i,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!D(l.path),o=Ti(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===Be.MERGE){const l=n;l.source.fromUser?o=e0(t,e,l.path,l.children,r,i,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=yo(t,e,l.path,l.children,r,i,a,s))}else if(n.type===Be.ACK_USER_WRITE){const l=n;l.revert?o=r0(t,e,l.path,r,i,s):o=t0(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===Be.LISTEN_COMPLETE)o=n0(t,e,n.path,r,s);else throw An("Unknown operation type: "+n.type);const c=s.getChanges();return Zv(e,o,c),{viewCache:o,changes:c}}function Zv(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ci(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Qd(Ci(e)))}}function sh(t,e,n,r,i,s){const o=e.eventCache;if(Ii(r,n)!=null)return e;{let a,c;if(D(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Kt(e),d=l instanceof k?l:k.EMPTY_NODE,u=fa(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=Si(r,Kt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=L(n);if(l===".priority"){b(Rt(n)===1,"Can't have a priority with additional path components");const d=o.getNode();c=e.serverCache.getNode();const u=pl(r,n,d,c);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=K(n);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=pl(r,n,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=pa(r,l,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),l,u,d,i,s):a=o.getNode()}}return er(e,a,o.isFullyInitialized()||D(n),t.filter.filtersNodes())}}function Ti(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const d=o?t.filter:t.filter.getIndexedFilter();if(D(n))l=d.updateFullNode(c.getNode(),r,null);else if(d.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,r);l=d.updateFullNode(c.getNode(),g,null)}else{const g=L(n);if(!c.isCompleteForPath(n)&&Rt(n)>1)return e;const p=K(n),v=c.getNode().getImmediateChild(g).updateChild(p,r);g===".priority"?l=d.updatePriority(c.getNode(),v):l=d.updateChild(c.getNode(),g,v,p,ih,null)}const u=Jd(e,l,c.isFullyInitialized()||D(n),d.filtersNodes()),h=new ga(i,u,s);return sh(t,u,n,i,h,a)}function _o(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const d=new ga(i,e,s);if(D(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=er(e,l,!0,t.filter.filtersNodes());else{const u=L(n);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=er(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=K(n),g=a.getNode().getImmediateChild(u);let p;if(D(h))p=r;else{const m=d.getCompleteChild(u);m!=null?sa(h)===".priority"&&m.getChild(jd(h)).isEmpty()?p=m:p=m.updateChild(h,r):p=k.EMPTY_NODE}if(g.equals(p))c=e;else{const m=t.filter.updateChild(a.getNode(),u,p,h,d,o);c=er(e,m,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function gl(t,e){return t.eventCache.isCompleteForChild(e)}function e0(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const d=te(n,c);gl(e,L(d))&&(a=_o(t,a,d,l,i,s,o))}),r.foreach((c,l)=>{const d=te(n,c);gl(e,L(d))||(a=_o(t,a,d,l,i,s,o))}),a}function ml(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function yo(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;D(n)?l=r:l=new q(null).setTree(n,r);const d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),p=ml(t,g,h);c=Ti(t,c,new j(u),p,i,s,o,a)}}),l.children.inorderTraversal((u,h)=>{const g=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!g){const p=e.serverCache.getNode().getImmediateChild(u),m=ml(t,p,h);c=Ti(t,c,new j(u),m,i,s,o,a)}}),c}function t0(t,e,n,r,i,s,o){if(Ii(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(D(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Ti(t,e,n,c.getNode().getChild(n),i,s,a,o);if(D(n)){let l=new q(null);return c.getNode().forEachChild(gn,(d,u)=>{l=l.set(new j(d),u)}),yo(t,e,n,l,i,s,a,o)}else return e}else{let l=new q(null);return r.foreach((d,u)=>{const h=te(n,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),yo(t,e,n,l,i,s,a,o)}}function n0(t,e,n,r,i){const s=e.serverCache,o=Jd(e,s.getNode(),s.isFullyInitialized()||D(n),s.isFiltered());return sh(t,o,n,r,ih,i)}function r0(t,e,n,r,i,s){let o;if(Ii(r,n)!=null)return e;{const a=new ga(r,e,i),c=e.eventCache.getNode();let l;if(D(n)||L(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Si(r,Kt(e));else{const u=e.serverCache.getNode();b(u instanceof k,"serverChildren would be complete if leaf node"),d=fa(r,u)}d=d,l=t.filter.updateFullNode(c,d,s)}else{const d=L(n);let u=pa(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=t.filter.updateChild(c,d,u,K(n),a,s):e.eventCache.getNode().hasChild(d)?l=t.filter.updateChild(c,d,k.EMPTY_NODE,K(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Si(r,Kt(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Ii(r,$())!=null,er(e,l,o,t.filter.filtersNodes())}}/**
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
 */class i0{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new ca(r.getIndex()),s=Ev(r);this.processor_=Qv(s);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(k.EMPTY_NODE,a.getNode(),null),d=new Pt(c,o.isFullyInitialized(),i.filtersNodes()),u=new Pt(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bi(u,d),this.eventGenerator_=new Pv(this.query_)}get query(){return this.query_}}function s0(t){return t.viewCache_.serverCache.getNode()}function o0(t){return Ci(t.viewCache_)}function a0(t,e){const n=Kt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!D(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function _l(t){return t.eventRegistrations_.length===0}function c0(t,e){t.eventRegistrations_.push(e)}function yl(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function vl(t,e,n,r){e.type===Be.MERGE&&e.source.queryId!==null&&(b(Kt(t.viewCache_),"We should always have a full cache before handling merges"),b(Ci(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Jv(t.processor_,i,e,n,r);return Xv(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,oh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function l0(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(wn(s,o))}),n.isFullyInitialized()&&r.push(Qd(n.getNode())),oh(t,r,n.getNode(),e)}function oh(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return kv(t.eventGenerator_,e,n,i)}/**
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
 */let Ai;class ah{constructor(){this.views=new Map}}function u0(t){b(!Ai,"__referenceConstructor has already been defined"),Ai=t}function d0(){return b(Ai,"Reference.ts has not been loaded"),Ai}function h0(t){return t.views.size===0}function ma(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),vl(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(vl(o,e,n,r));return s}}function ch(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Si(n,i?r:null),c=!1;a?c=!0:r instanceof k?(a=fa(n,r),c=!1):(a=k.EMPTY_NODE,c=!1);const l=Bi(new Pt(a,c,!1),new Pt(r,i,!1));return new i0(e,l)}return o}function f0(t,e,n,r,i,s){const o=ch(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),c0(o,n),l0(o,n)}function p0(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=kt(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(yl(l,n,r)),_l(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(yl(c,n,r)),_l(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!kt(t)&&s.push(new(d0())(e._repo,e._path)),{removed:s,events:o}}function lh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function At(t,e){let n=null;for(const r of t.views.values())n=n||a0(r,e);return n}function uh(t,e){if(e._queryParams.loadsAllData())return ji(t);{const r=e._queryIdentifier;return t.views.get(r)}}function dh(t,e){return uh(t,e)!=null}function kt(t){return ji(t)!=null}function ji(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ri;function g0(t){b(!Ri,"__referenceConstructor has already been defined"),Ri=t}function m0(){return b(Ri,"Reference.ts has not been loaded"),Ri}let _0=1;class bl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=Gv(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hh(t,e,n,r,i){return Dv(t.pendingWriteTree_,e,n,r,i),i?Nn(t,new qt(ua(),e,n)):[]}function y0(t,e,n,r){Mv(t.pendingWriteTree_,e,n,r);const i=q.fromObject(n);return Nn(t,new En(ua(),e,i))}function Et(t,e,n=!1){const r=Lv(t.pendingWriteTree_,e);if($v(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set($(),!0):fe(r.children,o=>{s=s.set(new j(o),!0)}),Nn(t,new Ei(r.path,s,n))}else return[]}function Mr(t,e,n){return Nn(t,new qt(da(),e,n))}function v0(t,e,n){const r=q.fromObject(n);return Nn(t,new En(da(),e,r))}function b0(t,e){return Nn(t,new mr(da(),e))}function w0(t,e,n){const r=ya(t,n);if(r){const i=va(r),s=i.path,o=i.queryId,a=ve(s,e),c=new mr(ha(o),a);return ba(t,s,c)}else return[]}function fh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||dh(o,e))){const c=p0(o,e,n,r);h0(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(h,g)=>kt(g));if(d&&!u){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=I0(h);for(let p=0;p<g.length;++p){const m=g[p],v=m.query,w=_h(t,m);t.listenProvider_.startListening(nr(v),_r(t,v),w.hashFn,w.onComplete)}}}!u&&l.length>0&&!r&&(d?t.listenProvider_.stopListening(nr(e),null):l.forEach(h=>{const g=t.queryToTagMap.get(Hi(h));t.listenProvider_.stopListening(nr(h),g)}))}T0(t,l)}return a}function ph(t,e,n,r){const i=ya(t,r);if(i!=null){const s=va(i),o=s.path,a=s.queryId,c=ve(o,e),l=new qt(ha(a),c,n);return ba(t,o,l)}else return[]}function E0(t,e,n,r){const i=ya(t,r);if(i){const s=va(i),o=s.path,a=s.queryId,c=ve(o,e),l=q.fromObject(n),d=new En(ha(a),c,l);return ba(t,o,d)}else return[]}function C0(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const p=ve(h,i);s=s||At(g,p),o=o||kt(g)});let a=t.syncPointTree_.get(i);a?(o=o||kt(a),s=s||At(a,$())):(a=new ah,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;s!=null?c=!0:(c=!1,s=k.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,p)=>{const m=At(p,$());m&&(s=s.updateImmediateChild(g,m))}));const l=dh(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=Hi(e);b(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=A0();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const d=Wi(t.pendingWriteTree_,i);let u=f0(a,e,n,d,s,c);if(!l&&!o&&!r){const h=uh(a,e);u=u.concat(R0(t,e,h))}return u}function _a(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ve(o,e),l=At(a,c);if(l)return l});return th(i,e,s,n,!0)}function S0(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(l,d)=>{const u=ve(l,n);r=r||At(d,u)});let i=t.syncPointTree_.get(n);i?r=r||At(i,$()):(i=new ah,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Pt(r,!0,!1):null,a=Wi(t.pendingWriteTree_,e._path),c=ch(i,e,a,s?o.getNode():k.EMPTY_NODE,s);return o0(c)}function Nn(t,e){return gh(e,t.syncPointTree_,null,Wi(t.pendingWriteTree_,$()))}function gh(t,e,n,r){if(D(t.path))return mh(t,e,n,r);{const i=e.get($());n==null&&i!=null&&(n=At(i,$()));let s=[];const o=L(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,d=nh(r,o);s=s.concat(gh(a,c,l,d))}return i&&(s=s.concat(ma(i,t,r,n))),s}}function mh(t,e,n,r){const i=e.get($());n==null&&i!=null&&(n=At(i,$()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=nh(r,o),d=t.operationForChild(o);d&&(s=s.concat(mh(d,a,c,l)))}),i&&(s=s.concat(ma(i,t,r,n))),s}function _h(t,e){const n=e.query,r=_r(t,n);return{hashFn:()=>(s0(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?w0(t,n._path,r):b0(t,n._path);{const s=by(i,n);return fh(t,n,null,s)}}}}function _r(t,e){const n=Hi(e);return t.queryToTagMap.get(n)}function Hi(t){return t._path.toString()+"$"+t._queryIdentifier}function ya(t,e){return t.tagToQueryMap.get(e)}function va(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new j(t.substr(0,e))}}function ba(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=Wi(t.pendingWriteTree_,e);return ma(r,n,i,null)}function I0(t){return t.fold((e,n,r)=>{if(n&&kt(n))return[ji(n)];{let i=[];return n&&(i=lh(n)),fe(r,(s,o)=>{i=i.concat(o)}),i}})}function nr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(m0())(t._repo,t._path):t}function T0(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Hi(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function A0(){return _0++}function R0(t,e,n){const r=e._path,i=_r(t,e),s=_h(t,n),o=t.listenProvider_.startListening(nr(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!kt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,d,u)=>{if(!D(l)&&d&&kt(d))return[ji(d).query];{let h=[];return d&&(h=h.concat(lh(d).map(g=>g.query))),fe(u,(g,p)=>{h=h.concat(p)}),h}});for(let l=0;l<c.length;++l){const d=c[l];t.listenProvider_.stopListening(nr(d),_r(t,d))}}return o}/**
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
 */class wa{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new wa(n)}node(){return this.node_}}class Ea{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=te(this.path_,e);return new Ea(this.syncTree_,n)}node(){return _a(this.syncTree_,this.path_)}}const P0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wl=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return k0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return O0(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},k0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},O0=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},yh=function(t,e,n,r){return Ca(e,new Ea(n,t),r)},vh=function(t,e,n){return Ca(t,new wa(e),n)};function Ca(t,e,n){const r=t.getPriority().val(),i=wl(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=wl(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ae(a,se(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ae(i))),o.forEachChild(ne,(a,c)=>{const l=Ca(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class Sa{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Ia(t,e){let n=e instanceof j?e:new j(e),r=t,i=L(n);for(;i!==null;){const s=yn(r.node.children,i)||{children:{},childCount:0};r=new Sa(i,r,s),n=K(n),i=L(n)}return r}function xn(t){return t.node.value}function bh(t,e){t.node.value=e,vo(t)}function wh(t){return t.node.childCount>0}function N0(t){return xn(t)===void 0&&!wh(t)}function Vi(t,e){fe(t.node.children,(n,r)=>{e(new Sa(n,t,r))})}function Eh(t,e,n,r){n&&!r&&e(t),Vi(t,i=>{Eh(i,e,!0,r)}),n&&r&&e(t)}function x0(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Lr(t){return new j(t.parent===null?t.name:Lr(t.parent)+"/"+t.name)}function vo(t){t.parent!==null&&D0(t.parent,t.name,t)}function D0(t,e,n){const r=N0(n),i=Xe(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,vo(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,vo(t))}/**
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
 */const M0=/[\[\].#$\/\u0000-\u001F\u007F]/,L0=/[\[\].#$\u0000-\u001F\u007F]/,Vs=10*1024*1024,Ta=function(t){return typeof t=="string"&&t.length!==0&&!M0.test(t)},Ch=function(t){return typeof t=="string"&&t.length!==0&&!L0.test(t)},$0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ch(t)},F0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!ea(t)||t&&typeof t=="object"&&Xe(t,".sv")},Sh=function(t,e,n,r){r&&e===void 0||zi(xi(t,"value"),e,n)},zi=function(t,e,n){const r=n instanceof j?new ev(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Mt(r));if(typeof e=="function")throw new Error(t+"contains a function "+Mt(r)+" with contents = "+e.toString());if(ea(e))throw new Error(t+"contains "+e.toString()+" "+Mt(r));if(typeof e=="string"&&e.length>Vs/3&&Di(e)>Vs)throw new Error(t+"contains a string greater than "+Vs+" utf8 bytes "+Mt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ta(o)))throw new Error(t+" contains an invalid key ("+o+") "+Mt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);tv(r,o),zi(t,a,r),nv(r)}),i&&s)throw new Error(t+' contains ".value" child '+Mt(r)+" in addition to actual children.")}},U0=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=hr(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Ta(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Zy);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ne(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},B0=function(t,e,n,r){if(r&&e===void 0)return;const i=xi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];fe(e,(o,a)=>{const c=new j(o);if(zi(i,a,te(n,c)),sa(c)===".priority"&&!F0(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),U0(i,s)},Ih=function(t,e,n,r){if(!(r&&n===void 0)&&!Ch(n))throw new Error(xi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},W0=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ih(t,e,n,r)},Th=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},j0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ta(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!$0(n))throw new Error(xi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class H0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Aa(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Hd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function De(t,e,n){Aa(t,n),V0(t,r=>Ne(r,e)||Ne(e,r))}function V0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(z0(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function z0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Wt&&he("event: "+n.toString()),On(r)}}}/**
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
 */const G0="repo_interrupt",q0=25;class K0{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new H0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wi(),this.transactionQueueTree_=new Sa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y0(t,e,n){if(t.stats_=ra(t.repoInfo_),t.forceRestClient_||Sy())t.server_=new bi(t.repoInfo_,(r,i,s,o)=>{El(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Cl(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{oe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new rt(t.repoInfo_,e,(r,i,s,o)=>{El(t,r,i,s,o)},r=>{Cl(t,r)},r=>{Q0(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Py(t.repoInfo_,()=>new Rv(t.stats_,t.server_)),t.infoData_=new Cv,t.infoSyncTree_=new bl({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Mr(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ra(t,"connected",!1),t.serverSyncTree_=new bl({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);De(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Ah(t){const n=t.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gi(t){return P0({timestamp:Ah(t)})}function El(t,e,n,r,i){t.dataUpdateCount++;const s=new j(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=li(n,l=>se(l));o=E0(t.serverSyncTree_,s,c,i)}else{const c=se(n);o=ph(t.serverSyncTree_,s,c,i)}else if(r){const c=li(n,l=>se(l));o=v0(t.serverSyncTree_,s,c)}else{const c=se(n);o=Mr(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=Sn(t,s)),De(t.eventQueue_,a,o)}function Cl(t,e){Ra(t,"connected",e),e===!1&&eb(t)}function Q0(t,e){fe(e,(n,r)=>{Ra(t,n,r)})}function Ra(t,e,n){const r=new j("/.info/"+e),i=se(n);t.infoData_.updateSnapshot(r,i);const s=Mr(t.infoSyncTree_,r,i);De(t.eventQueue_,r,s)}function Pa(t){return t.nextWriteId_++}function X0(t,e,n){const r=S0(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=se(i).withIndex(e._queryParams.getIndex());C0(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Mr(t.serverSyncTree_,e._path,s);else{const a=_r(t.serverSyncTree_,e);o=ph(t.serverSyncTree_,e._path,s,a)}return De(t.eventQueue_,e._path,o),fh(t.serverSyncTree_,e,n,null,!0),s},i=>($r(t,"get for query "+oe(e)+" failed: "+i),Promise.reject(new Error(i))))}function J0(t,e,n,r,i){$r(t,"set",{path:e.toString(),value:n,priority:r});const s=Gi(t),o=se(n,r),a=_a(t.serverSyncTree_,e),c=vh(o,a,s),l=Pa(t),d=hh(t.serverSyncTree_,e,c,l,!0);Aa(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const p=h==="ok";p||be("set at "+e+" failed: "+h);const m=Et(t.serverSyncTree_,l,!p);De(t.eventQueue_,e,m),bo(t,i,h,g)});const u=Oa(t,e);Sn(t,u),De(t.eventQueue_,u,[])}function Z0(t,e,n,r){$r(t,"update",{path:e.toString(),value:n});let i=!0;const s=Gi(t),o={};if(fe(n,(a,c)=>{i=!1,o[a]=yh(te(e,a),se(c),t.serverSyncTree_,s)}),i)he("update() called with empty data.  Don't do anything."),bo(t,r,"ok",void 0);else{const a=Pa(t),c=y0(t.serverSyncTree_,e,o,a);Aa(t.eventQueue_,c),t.server_.merge(e.toString(),n,(l,d)=>{const u=l==="ok";u||be("update at "+e+" failed: "+l);const h=Et(t.serverSyncTree_,a,!u),g=h.length>0?Sn(t,e):e;De(t.eventQueue_,g,h),bo(t,r,l,d)}),fe(n,l=>{const d=Oa(t,te(e,l));Sn(t,d)}),De(t.eventQueue_,e,[])}}function eb(t){$r(t,"onDisconnectEvents");const e=Gi(t),n=wi();fo(t.onDisconnect_,$(),(i,s)=>{const o=yh(i,s,t.serverSyncTree_,e);Xd(n,i,o)});let r=[];fo(n,$(),(i,s)=>{r=r.concat(Mr(t.serverSyncTree_,i,s));const o=Oa(t,i);Sn(t,o)}),t.onDisconnect_=wi(),De(t.eventQueue_,$(),r)}function tb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(G0)}function $r(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),he(n,...e)}function bo(t,e,n,r){e&&On(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Rh(t,e,n){return _a(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function ka(t,e=t.transactionQueueTree_){if(e||qi(t,e),xn(e)){const n=kh(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nb(t,Lr(e),n)}else wh(e)&&Vi(e,n=>{ka(t,n)})}function nb(t,e,n){const r=n.map(l=>l.currentWriteId),i=Rh(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const d=n[l];b(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=ve(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{$r(t,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Et(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();qi(t,Ia(t.transactionQueueTree_,e)),ka(t,t.transactionQueueTree_),De(t.eventQueue_,e,d);for(let h=0;h<u.length;h++)On(u[h])}else{if(l==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{be("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=l}Sn(t,e)}},o)}function Sn(t,e){const n=Ph(t,e),r=Lr(n),i=kh(t,n);return rb(t,i,r),r}function rb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ve(n,c.path);let d=!1,u;if(b(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,i=i.concat(Et(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=q0)d=!0,u="maxretry",i=i.concat(Et(t.serverSyncTree_,c.currentWriteId,!0));else{const h=Rh(t,c.path,o);c.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){zi("transaction failed: Data returned ",g,c.path);let p=se(g);typeof g=="object"&&g!=null&&Xe(g,".priority")||(p=p.updatePriority(h.getPriority()));const v=c.currentWriteId,w=Gi(t),T=vh(p,h,w);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=T,c.currentWriteId=Pa(t),o.splice(o.indexOf(v),1),i=i.concat(hh(t.serverSyncTree_,c.path,T,c.currentWriteId,c.applyLocally)),i=i.concat(Et(t.serverSyncTree_,v,!0))}else d=!0,u="nodata",i=i.concat(Et(t.serverSyncTree_,c.currentWriteId,!0))}De(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}qi(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)On(r[a]);ka(t,t.transactionQueueTree_)}function Ph(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&xn(r)===void 0;)r=Ia(r,n),e=K(e),n=L(e);return r}function kh(t,e){const n=[];return Oh(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Oh(t,e,n){const r=xn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Vi(e,i=>{Oh(t,i,n)})}function qi(t,e){const n=xn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,bh(e,n.length>0?n:void 0)}Vi(e,r=>{qi(t,r)})}function Oa(t,e){const n=Lr(Ph(t,e)),r=Ia(t.transactionQueueTree_,e);return x0(r,i=>{zs(t,i)}),zs(t,r),Eh(r,i=>{zs(t,i)}),n}function zs(t,e){const n=xn(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Et(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?bh(e,void 0):n.length=s+1,De(t.eventQueue_,Lr(e),i);for(let o=0;o<r.length;o++)On(r[o])}}/**
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
 */function ib(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sb(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sl=function(t,e){const n=ob(t),r=n.namespace;n.domain==="firebase.com"&&ot(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ot("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||gy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xd(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new j(n.pathString)}},ob=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=ib(t.substring(d,u)));const h=sb(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const Il="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",ab=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Il.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Il.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class cb{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+oe(this.snapshot.exportVal())}}class lb{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ub{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Na{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return D(this._path)?null:sa(this._path)}get ref(){return new dt(this._repo,this._path)}get _queryIdentifier(){const e=ul(this._queryParams),n=ta(e);return n==="{}"?"default":n}get _queryObject(){return ul(this._queryParams)}isEqual(e){if(e=ye(e),!(e instanceof Na))return!1;const n=this._repo===e._repo,r=Hd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jy(this._path)}}class dt extends Na{constructor(e,n){super(e,n,new la,!1)}get parent(){const e=jd(this._path);return e===null?null:new dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class yr{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new j(e),r=we(this.ref,e);return new yr(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new yr(i,we(this.ref,r),ne)))}hasChild(e){const n=new j(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Me(t,e){return t=ye(t),t._checkNotDeleted("ref"),e!==void 0?we(t._root,e):t._root}function we(t,e){return t=ye(t),L(t._path)===null?W0("child","path",e,!1):Ih("child","path",e,!1),new dt(t._repo,te(t._path,e))}function Nh(t,e){t=ye(t),Th("push",t._path),Sh("push",e,t._path,!0);const n=Ah(t._repo),r=ab(n),i=we(t,r),s=we(t,r);let o;return e!=null?o=Dn(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Dn(t,e){t=ye(t),Th("set",t._path),Sh("set",e,t._path,!1);const n=new Tr;return J0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function xa(t,e){B0("update",e,t._path,!1);const n=new Tr;return Z0(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Fr(t){t=ye(t);const e=new ub(()=>{}),n=new Da(e);return X0(t._repo,t,n).then(r=>new yr(r,new dt(t._repo,t._path),t._queryParams.getIndex()))}class Da{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new cb("value",this,new yr(e.snapshotNode,new dt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new lb(this,e,n):null}matches(e){return e instanceof Da?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}u0(dt);g0(dt);/**
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
 */const db="FIREBASE_DATABASE_EMULATOR_HOST",wo={};let hb=!1;function fb(t,e,n,r){t.repoInfo_=new xd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function pb(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ot("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sl(s,i),a=o.repoInfo,c,l;typeof process<"u"&&Gc&&(l=Gc[db]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Sl(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const d=i&&c?new pn(pn.OWNER):new Ty(t.name,t.options,e);j0("Invalid Firebase Database URL",o),D(o.path)||ot("Database URL must point to the root of a Firebase Database (not including a child path).");const u=mb(a,t,d,new Iy(t.name,n));return new _b(u,t)}function gb(t,e){const n=wo[e];(!n||n[t.key]!==t)&&ot(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tb(t),delete n[t.key]}function mb(t,e,n,r){let i=wo[e.name];i||(i={},wo[e.name]=i);let s=i[t.toURLString()];return s&&ot("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new K0(t,hb,n,r),i[t.toURLString()]=s,s}class _b{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dt(this._repo,$())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ot("Cannot call "+e+" on a deleted database.")}}function yb(t=$u(),e){const n=Ho(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Cp("database");r&&vb(n,...r)}return n}function vb(t,e,n,r={}){t=ye(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ot("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ot('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new pn(pn.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Sp(r.mockUserToken,t.app.options.projectId);s=new pn(o)}fb(i,e,n,s)}/**
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
 */function bb(t){uy(Pn),vn(new jt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pb(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),It(qc,Kc,t),It(qc,Kc,"esm2017")}rt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bb();var xh=typeof global=="object"&&global&&global.Object===Object&&global,wb=typeof self=="object"&&self&&self.Object===Object&&self,ht=xh||wb||Function("return this")(),Ye=ht.Symbol,Dh=Object.prototype,Eb=Dh.hasOwnProperty,Cb=Dh.toString,Hn=Ye?Ye.toStringTag:void 0;function Sb(t){var e=Eb.call(t,Hn),n=t[Hn];try{t[Hn]=void 0;var r=!0}catch{}var i=Cb.call(t);return r&&(e?t[Hn]=n:delete t[Hn]),i}var Ib=Object.prototype,Tb=Ib.toString;function Ab(t){return Tb.call(t)}var Rb="[object Null]",Pb="[object Undefined]",Tl=Ye?Ye.toStringTag:void 0;function Mn(t){return t==null?t===void 0?Pb:Rb:Tl&&Tl in Object(t)?Sb(t):Ab(t)}function Yt(t){return t!=null&&typeof t=="object"}var kb="[object Symbol]";function Ma(t){return typeof t=="symbol"||Yt(t)&&Mn(t)==kb}function Mh(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var Qe=Array.isArray,Ob=1/0,Al=Ye?Ye.prototype:void 0,Rl=Al?Al.toString:void 0;function Lh(t){if(typeof t=="string")return t;if(Qe(t))return Mh(t,Lh)+"";if(Ma(t))return Rl?Rl.call(t):"";var e=t+"";return e=="0"&&1/t==-Ob?"-0":e}function La(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function $a(t){return t}var Nb="[object AsyncFunction]",xb="[object Function]",Db="[object GeneratorFunction]",Mb="[object Proxy]";function $h(t){if(!La(t))return!1;var e=Mn(t);return e==xb||e==Db||e==Nb||e==Mb}var Gs=ht["__core-js_shared__"],Pl=function(){var t=/[^.]+$/.exec(Gs&&Gs.keys&&Gs.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Lb(t){return!!Pl&&Pl in t}var $b=Function.prototype,Fb=$b.toString;function tn(t){if(t!=null){try{return Fb.call(t)}catch{}try{return t+""}catch{}}return""}var Ub=/[\\^$.*+?()[\]{}|]/g,Bb=/^\[object .+?Constructor\]$/,Wb=Function.prototype,jb=Object.prototype,Hb=Wb.toString,Vb=jb.hasOwnProperty,zb=RegExp("^"+Hb.call(Vb).replace(Ub,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Gb(t){if(!La(t)||Lb(t))return!1;var e=$h(t)?zb:Bb;return e.test(tn(t))}function qb(t,e){return t==null?void 0:t[e]}function nn(t,e){var n=qb(t,e);return Gb(n)?n:void 0}var Eo=nn(ht,"WeakMap");function Kb(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var Yb=800,Qb=16,Xb=Date.now;function Jb(t){var e=0,n=0;return function(){var r=Xb(),i=Qb-(r-n);if(n=r,i>0){if(++e>=Yb)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Zb(t){return function(){return t}}var kl=function(){try{var t=nn(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ew=kl?function(t,e){return kl(t,"toString",{configurable:!0,enumerable:!1,value:Zb(e),writable:!0})}:$a;const tw=ew;var nw=Jb(tw);function rw(t,e,n,r){for(var i=t.length,s=n+(r?1:-1);r?s--:++s<i;)if(e(t[s],s,t))return s;return-1}function iw(t){return t!==t}function sw(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function ow(t,e,n){return e===e?sw(t,e,n):rw(t,iw,n)}function aw(t,e){var n=t==null?0:t.length;return!!n&&ow(t,e,0)>-1}var cw=9007199254740991,lw=/^(?:0|[1-9]\d*)$/;function Fh(t,e){var n=typeof t;return e=e??cw,!!e&&(n=="number"||n!="symbol"&&lw.test(t))&&t>-1&&t%1==0&&t<e}function Uh(t,e){return t===e||t!==t&&e!==e}var Ol=Math.max;function uw(t,e,n){return e=Ol(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=Ol(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),Kb(t,this,a)}}function dw(t,e){return nw(uw(t,e,$a),t+"")}var hw=9007199254740991;function Fa(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=hw}function Bh(t){return t!=null&&Fa(t.length)&&!$h(t)}var fw=Object.prototype;function pw(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||fw;return t===n}function gw(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var mw="[object Arguments]";function Nl(t){return Yt(t)&&Mn(t)==mw}var Wh=Object.prototype,_w=Wh.hasOwnProperty,yw=Wh.propertyIsEnumerable,Ua=Nl(function(){return arguments}())?Nl:function(t){return Yt(t)&&_w.call(t,"callee")&&!yw.call(t,"callee")};function vw(){return!1}var jh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,xl=jh&&typeof module=="object"&&module&&!module.nodeType&&module,bw=xl&&xl.exports===jh,Dl=bw?ht.Buffer:void 0,ww=Dl?Dl.isBuffer:void 0,Co=ww||vw,Ew="[object Arguments]",Cw="[object Array]",Sw="[object Boolean]",Iw="[object Date]",Tw="[object Error]",Aw="[object Function]",Rw="[object Map]",Pw="[object Number]",kw="[object Object]",Ow="[object RegExp]",Nw="[object Set]",xw="[object String]",Dw="[object WeakMap]",Mw="[object ArrayBuffer]",Lw="[object DataView]",$w="[object Float32Array]",Fw="[object Float64Array]",Uw="[object Int8Array]",Bw="[object Int16Array]",Ww="[object Int32Array]",jw="[object Uint8Array]",Hw="[object Uint8ClampedArray]",Vw="[object Uint16Array]",zw="[object Uint32Array]",Q={};Q[$w]=Q[Fw]=Q[Uw]=Q[Bw]=Q[Ww]=Q[jw]=Q[Hw]=Q[Vw]=Q[zw]=!0;Q[Ew]=Q[Cw]=Q[Mw]=Q[Sw]=Q[Lw]=Q[Iw]=Q[Tw]=Q[Aw]=Q[Rw]=Q[Pw]=Q[kw]=Q[Ow]=Q[Nw]=Q[xw]=Q[Dw]=!1;function Gw(t){return Yt(t)&&Fa(t.length)&&!!Q[Mn(t)]}function Hh(t){return function(e){return t(e)}}var Vh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rr=Vh&&typeof module=="object"&&module&&!module.nodeType&&module,qw=rr&&rr.exports===Vh,qs=qw&&xh.process,Ml=function(){try{var t=rr&&rr.require&&rr.require("util").types;return t||qs&&qs.binding&&qs.binding("util")}catch{}}(),Ll=Ml&&Ml.isTypedArray,zh=Ll?Hh(Ll):Gw,Kw=Object.prototype,Yw=Kw.hasOwnProperty;function Qw(t,e){var n=Qe(t),r=!n&&Ua(t),i=!n&&!r&&Co(t),s=!n&&!r&&!i&&zh(t),o=n||r||i||s,a=o?gw(t.length,String):[],c=a.length;for(var l in t)(e||Yw.call(t,l))&&!(o&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Fh(l,c)))&&a.push(l);return a}function Xw(t,e){return function(n){return t(e(n))}}var Jw=Xw(Object.keys,Object),Zw=Object.prototype,eE=Zw.hasOwnProperty;function tE(t){if(!pw(t))return Jw(t);var e=[];for(var n in Object(t))eE.call(t,n)&&n!="constructor"&&e.push(n);return e}function Gh(t){return Bh(t)?Qw(t):tE(t)}var nE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rE=/^\w*$/;function Ba(t,e){if(Qe(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Ma(t)?!0:rE.test(t)||!nE.test(t)||e!=null&&t in Object(e)}var vr=nn(Object,"create");function iE(){this.__data__=vr?vr(null):{},this.size=0}function sE(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var oE="__lodash_hash_undefined__",aE=Object.prototype,cE=aE.hasOwnProperty;function lE(t){var e=this.__data__;if(vr){var n=e[t];return n===oE?void 0:n}return cE.call(e,t)?e[t]:void 0}var uE=Object.prototype,dE=uE.hasOwnProperty;function hE(t){var e=this.__data__;return vr?e[t]!==void 0:dE.call(e,t)}var fE="__lodash_hash_undefined__";function pE(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=vr&&e===void 0?fE:e,this}function Qt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Qt.prototype.clear=iE;Qt.prototype.delete=sE;Qt.prototype.get=lE;Qt.prototype.has=hE;Qt.prototype.set=pE;function gE(){this.__data__=[],this.size=0}function Ki(t,e){for(var n=t.length;n--;)if(Uh(t[n][0],e))return n;return-1}var mE=Array.prototype,_E=mE.splice;function yE(t){var e=this.__data__,n=Ki(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():_E.call(e,n,1),--this.size,!0}function vE(t){var e=this.__data__,n=Ki(e,t);return n<0?void 0:e[n][1]}function bE(t){return Ki(this.__data__,t)>-1}function wE(t,e){var n=this.__data__,r=Ki(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function ft(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ft.prototype.clear=gE;ft.prototype.delete=yE;ft.prototype.get=vE;ft.prototype.has=bE;ft.prototype.set=wE;var br=nn(ht,"Map");function EE(){this.size=0,this.__data__={hash:new Qt,map:new(br||ft),string:new Qt}}function CE(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Yi(t,e){var n=t.__data__;return CE(e)?n[typeof e=="string"?"string":"hash"]:n.map}function SE(t){var e=Yi(this,t).delete(t);return this.size-=e?1:0,e}function IE(t){return Yi(this,t).get(t)}function TE(t){return Yi(this,t).has(t)}function AE(t,e){var n=Yi(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function pt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}pt.prototype.clear=EE;pt.prototype.delete=SE;pt.prototype.get=IE;pt.prototype.has=TE;pt.prototype.set=AE;var RE="Expected a function";function Wa(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(RE);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Wa.Cache||pt),n}Wa.Cache=pt;var PE=500;function kE(t){var e=Wa(t,function(r){return n.size===PE&&n.clear(),r}),n=e.cache;return e}var OE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,NE=/\\(\\)?/g,xE=kE(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(OE,function(n,r,i,s){e.push(i?s.replace(NE,"$1"):r||n)}),e});function DE(t){return t==null?"":Lh(t)}function qh(t,e){return Qe(t)?t:Ba(t,e)?[t]:xE(DE(t))}var ME=1/0;function Qi(t){if(typeof t=="string"||Ma(t))return t;var e=t+"";return e=="0"&&1/t==-ME?"-0":e}function Kh(t,e){e=qh(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Qi(e[n++])];return n&&n==r?t:void 0}function LE(t,e,n){var r=t==null?void 0:Kh(t,e);return r===void 0?n:r}function Yh(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var $l=Ye?Ye.isConcatSpreadable:void 0;function $E(t){return Qe(t)||Ua(t)||!!($l&&t&&t[$l])}function Qh(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=$E),i||(i=[]);++s<o;){var a=t[s];e>0&&n(a)?e>1?Qh(a,e-1,n,r,i):Yh(i,a):r||(i[i.length]=a)}return i}function FE(){this.__data__=new ft,this.size=0}function UE(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function BE(t){return this.__data__.get(t)}function WE(t){return this.__data__.has(t)}var jE=200;function HE(t,e){var n=this.__data__;if(n instanceof ft){var r=n.__data__;if(!br||r.length<jE-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new pt(r)}return n.set(t,e),this.size=n.size,this}function it(t){var e=this.__data__=new ft(t);this.size=e.size}it.prototype.clear=FE;it.prototype.delete=UE;it.prototype.get=BE;it.prototype.has=WE;it.prototype.set=HE;function VE(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function zE(){return[]}var GE=Object.prototype,qE=GE.propertyIsEnumerable,Fl=Object.getOwnPropertySymbols,KE=Fl?function(t){return t==null?[]:(t=Object(t),VE(Fl(t),function(e){return qE.call(t,e)}))}:zE;const YE=KE;function QE(t,e,n){var r=e(t);return Qe(t)?r:Yh(r,n(t))}function Ul(t){return QE(t,Gh,YE)}var So=nn(ht,"DataView"),Io=nn(ht,"Promise"),To=nn(ht,"Set"),Bl="[object Map]",XE="[object Object]",Wl="[object Promise]",jl="[object Set]",Hl="[object WeakMap]",Vl="[object DataView]",JE=tn(So),ZE=tn(br),eC=tn(Io),tC=tn(To),nC=tn(Eo),Lt=Mn;(So&&Lt(new So(new ArrayBuffer(1)))!=Vl||br&&Lt(new br)!=Bl||Io&&Lt(Io.resolve())!=Wl||To&&Lt(new To)!=jl||Eo&&Lt(new Eo)!=Hl)&&(Lt=function(t){var e=Mn(t),n=e==XE?t.constructor:void 0,r=n?tn(n):"";if(r)switch(r){case JE:return Vl;case ZE:return Bl;case eC:return Wl;case tC:return jl;case nC:return Hl}return e});const zl=Lt;var rC=ht.Uint8Array;const Gl=rC;var iC="__lodash_hash_undefined__";function sC(t){return this.__data__.set(t,iC),this}function oC(t){return this.__data__.has(t)}function wr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new pt;++e<n;)this.add(t[e])}wr.prototype.add=wr.prototype.push=sC;wr.prototype.has=oC;function aC(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function Xh(t,e){return t.has(e)}var cC=1,lC=2;function Jh(t,e,n,r,i,s){var o=n&cC,a=t.length,c=e.length;if(a!=c&&!(o&&c>a))return!1;var l=s.get(t),d=s.get(e);if(l&&d)return l==e&&d==t;var u=-1,h=!0,g=n&lC?new wr:void 0;for(s.set(t,e),s.set(e,t);++u<a;){var p=t[u],m=e[u];if(r)var v=o?r(m,p,u,e,t,s):r(p,m,u,t,e,s);if(v!==void 0){if(v)continue;h=!1;break}if(g){if(!aC(e,function(w,T){if(!Xh(g,T)&&(p===w||i(p,w,n,r,s)))return g.push(T)})){h=!1;break}}else if(!(p===m||i(p,m,n,r,s))){h=!1;break}}return s.delete(t),s.delete(e),h}function uC(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function dC(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var hC=1,fC=2,pC="[object Boolean]",gC="[object Date]",mC="[object Error]",_C="[object Map]",yC="[object Number]",vC="[object RegExp]",bC="[object Set]",wC="[object String]",EC="[object Symbol]",CC="[object ArrayBuffer]",SC="[object DataView]",ql=Ye?Ye.prototype:void 0,Ks=ql?ql.valueOf:void 0;function IC(t,e,n,r,i,s,o){switch(n){case SC:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case CC:return!(t.byteLength!=e.byteLength||!s(new Gl(t),new Gl(e)));case pC:case gC:case yC:return Uh(+t,+e);case mC:return t.name==e.name&&t.message==e.message;case vC:case wC:return t==e+"";case _C:var a=uC;case bC:var c=r&hC;if(a||(a=dC),t.size!=e.size&&!c)return!1;var l=o.get(t);if(l)return l==e;r|=fC,o.set(t,e);var d=Jh(a(t),a(e),r,i,s,o);return o.delete(t),d;case EC:if(Ks)return Ks.call(t)==Ks.call(e)}return!1}var TC=1,AC=Object.prototype,RC=AC.hasOwnProperty;function PC(t,e,n,r,i,s){var o=n&TC,a=Ul(t),c=a.length,l=Ul(e),d=l.length;if(c!=d&&!o)return!1;for(var u=c;u--;){var h=a[u];if(!(o?h in e:RC.call(e,h)))return!1}var g=s.get(t),p=s.get(e);if(g&&p)return g==e&&p==t;var m=!0;s.set(t,e),s.set(e,t);for(var v=o;++u<c;){h=a[u];var w=t[h],T=e[h];if(r)var E=o?r(T,w,h,e,t,s):r(w,T,h,t,e,s);if(!(E===void 0?w===T||i(w,T,n,r,s):E)){m=!1;break}v||(v=h=="constructor")}if(m&&!v){var y=t.constructor,C=e.constructor;y!=C&&"constructor"in t&&"constructor"in e&&!(typeof y=="function"&&y instanceof y&&typeof C=="function"&&C instanceof C)&&(m=!1)}return s.delete(t),s.delete(e),m}var kC=1,Kl="[object Arguments]",Yl="[object Array]",Kr="[object Object]",OC=Object.prototype,Ql=OC.hasOwnProperty;function NC(t,e,n,r,i,s){var o=Qe(t),a=Qe(e),c=o?Yl:zl(t),l=a?Yl:zl(e);c=c==Kl?Kr:c,l=l==Kl?Kr:l;var d=c==Kr,u=l==Kr,h=c==l;if(h&&Co(t)){if(!Co(e))return!1;o=!0,d=!1}if(h&&!d)return s||(s=new it),o||zh(t)?Jh(t,e,n,r,i,s):IC(t,e,c,n,r,i,s);if(!(n&kC)){var g=d&&Ql.call(t,"__wrapped__"),p=u&&Ql.call(e,"__wrapped__");if(g||p){var m=g?t.value():t,v=p?e.value():e;return s||(s=new it),i(m,v,n,r,s)}}return h?(s||(s=new it),PC(t,e,n,r,i,s)):!1}function ja(t,e,n,r,i){return t===e?!0:t==null||e==null||!Yt(t)&&!Yt(e)?t!==t&&e!==e:NC(t,e,n,r,ja,i)}var xC=1,DC=2;function MC(t,e,n,r){var i=n.length,s=i,o=!r;if(t==null)return!s;for(t=Object(t);i--;){var a=n[i];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<s;){a=n[i];var c=a[0],l=t[c],d=a[1];if(o&&a[2]){if(l===void 0&&!(c in t))return!1}else{var u=new it;if(r)var h=r(l,d,c,t,e,u);if(!(h===void 0?ja(d,l,xC|DC,r,u):h))return!1}}return!0}function Zh(t){return t===t&&!La(t)}function LC(t){for(var e=Gh(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Zh(i)]}return e}function ef(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function $C(t){var e=LC(t);return e.length==1&&e[0][2]?ef(e[0][0],e[0][1]):function(n){return n===t||MC(n,t,e)}}function FC(t,e){return t!=null&&e in Object(t)}function UC(t,e,n){e=qh(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var o=Qi(e[r]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&Fa(i)&&Fh(o,i)&&(Qe(t)||Ua(t)))}function BC(t,e){return t!=null&&UC(t,e,FC)}var WC=1,jC=2;function HC(t,e){return Ba(t)&&Zh(e)?ef(Qi(t),e):function(n){var r=LE(n,t);return r===void 0&&r===e?BC(n,t):ja(e,r,WC|jC)}}function VC(t){return function(e){return e==null?void 0:e[t]}}function zC(t){return function(e){return Kh(e,t)}}function GC(t){return Ba(t)?VC(Qi(t)):zC(t)}function qC(t){return typeof t=="function"?t:t==null?$a:typeof t=="object"?Qe(t)?HC(t[0],t[1]):$C(t):GC(t)}function Ys(t){return Yt(t)&&Bh(t)}function KC(t,e,n){for(var r=-1,i=t==null?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}var YC=200;function QC(t,e,n,r){var i=-1,s=aw,o=!0,a=t.length,c=[],l=e.length;if(!a)return c;n&&(e=Mh(e,Hh(n))),r?(s=KC,o=!1):e.length>=YC&&(s=Xh,o=!1,e=new wr(e));e:for(;++i<a;){var d=t[i],u=n==null?d:n(d);if(d=r||d!==0?d:0,o&&u===u){for(var h=l;h--;)if(e[h]===u)continue e;c.push(d)}else s(e,u,r)||c.push(d)}return c}function XC(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var JC=dw(function(t,e){var n=XC(e);return Ys(n)&&(n=void 0),Ys(t)?QC(t,Qh(e,1,Ys,!0),qC(n)):[]});const ZC=JC;var eS={BASE_URL:"/jugger-trainer-web/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const tf=Lu(fp.firebase),Le=yb(tf),xR=cy(tf),tS=2131165628,nS=2131165629;let Yn=null;async function rS(){const e=(await Fr(we(Me(Le),"tags"))).val();return Object.values(e).map(n=>n)}async function Ha(){return Yn!==null||(Yn=rS()),Yn}async function Va(t){const e=await Ha(),n=new Map(e.map(i=>[i.tagID,i])),r=[];for(const i of t){const s=n.get(i);s!==void 0&&r.push(s)}return r}async function nf(t){const e=await Nh(we(Me(Le),"tags"));if(e.key===null)throw new Error("Failed to create tag: tagRef key is null");const n={tagID:e.key,...t};return Dn(e,n),n}async function rf(t,e){const n=we(Me(Le),`tags/${t.tagID}`),r=new Set(t.associatedExerciseIds);r.add(e);const i={...t,associatedExerciseIds:Array.from(r)};return Dn(n,i),i}async function iS(t,e){const n=we(Me(Le),`tags/${t.tagID}`),r=new Set(t.associatedExerciseIds);r.delete(e);const i={...t,associatedExerciseIds:Array.from(r)};return Dn(n,i),i}function sf(){Yn=null}async function DR(t,e){const n={[`tags/${t}`]:null};for(const r of e){const i=new Set(r.tagIDs??[]);i.has(t)&&(i.delete(t),n[`exercises/${r.eid}/tagIDs`]=Array.from(i))}await xa(Me(Le),n),sf()}async function MR(t,e){const[n,r]=await Promise.all([Ha(),sS()]),i=n.find(c=>c.tagID===t),s=n.find(c=>c.tagID===e);if(!i||!s)throw new Error("Source or target tag not found");const o={};for(const c of r){const l=new Set(c.tagIDs??[]);l.has(t)&&(l.delete(t),l.add(e),o[`exercises/${c.eid}/tagIDs`]=Array.from(l))}const a=Array.from(new Set([...s.associatedExerciseIds,...i.associatedExerciseIds]));o[`tags/${e}/associatedExerciseIds`]=a,o[`tags/${t}`]=null,await xa(Me(Le),o),sf()}async function sS(){const e=(await Fr(we(Me(Le),"exercises"))).val();return Object.values(e).filter(n=>n.name!==void 0)}function of(t,e,n){const r=t,i=new Map(e.map(c=>[c.tagID,c])),s=new Set(r.tagIDs??[]),o=[];for(const c of s){const l=i.get(c);l!==void 0&&o.push(l)}o.sort((c,l)=>c.tag.localeCompare(l.tag));const a=$o(n);return{...r,tags:o,images:a}}async function LR(t){const e=await Ha(),n=await za(),i=(await Fr(we(Me(Le),"exercises"))).val();return Object.values(i).map(s=>of(s,e,n)).filter(s=>!(s.name===void 0||t.tagIDs.length>0&&!s.tags.some(o=>t.tagIDs.includes(o.tagID))||t.exertionLevel!==void 0&&s.exertionLevel!==t.exertionLevel||t.name!==void 0&&!s.name.toLowerCase().includes(t.name.toLowerCase())||t.players!==void 0&&(s.playersMin>t.players||s.playersMax<t.players))).slice().sort((s,o)=>s.name.localeCompare(o.name))}async function $R(t){const e=await Fr(we(Me(Le),`exercises/${t}`));if(!e.exists())return null;const n=e.val(),r=await Va(n.tagIDs??[]),i=await za();return of(n,r,i)}async function FR(t,e){const{exertionLevel:n,howToPlay:r,name:i,originCountry:s,playersMin:o,playersMax:a,tags:c}=e,l=[],d=[];for(const y of c){const[C,A]=y.split(":");C==="s"?l.push(A):C==="t"&&d.push(A)}const u=await Va(d),h=l.map(y=>nf({tag:y,associatedExerciseIds:[]})),g=await Promise.all(h);let p=[...u,...g];const m=p.map(y=>y.tagID),v=await Nh(we(Me(Le),"exercises"));if(v.key===null)throw new Error("Failed to create exercise: exerciseRef key is null");const w={created:new Date().valueOf(),createdByName:t.displayName??t.email??"Some jugger",createdByUID:t.uid,eid:v.key,exertionLevel:n,howToPlay:r,imageResource:tS,imageResourceSmall:nS,name:i,originCountry:s,playersMax:a,playersMin:o,tagIDs:m};Dn(v,{...w});const T=p.map(y=>rf(y,w.eid));return p=await Promise.all(T),{...w,tags:p,images:$o(await za())}}async function UR(t,e){const{exertionLevel:n,howToPlay:r,name:i,playersMin:s,playersMax:o,tags:a}=e,c=[],l=[];for(const y of a){const[C,A]=y.split(":");C==="s"?c.push(A):C==="t"&&l.push(A)}const d=await Va(l),u=c.map(y=>nf({tag:y,associatedExerciseIds:[]})),h=await Promise.all(u);let g=[...d,...h];const p=g.map(y=>y.tagID),v=ZC(t.tags,g,y=>y.tagID).map(y=>iS(y,t.eid));await Promise.all(v);const w=we(Me(Le),`exercises/${t.eid}`);xa(w,{exertionLevel:n,howToPlay:r,name:i,playersMax:o,playersMin:s,tagIDs:p});const T=g.map(y=>rf(y,t.eid));return g=await Promise.all(T),{...t,exertionLevel:n,howToPlay:r,name:i,playersMax:o,playersMin:s,tags:g}}const Xl={role:"user"};async function BR(t){const e=we(Me(Le),`users/${t}`),n=await Fr(e);return n.exists()?n.val():(await Dn(e,Xl),Xl)}const{BASE_URL:oS}=eS,aS=Array.from({length:11},(t,e)=>`${oS}images/samples/sample${e}.jpg`);async function za(){return aS}const Jl=t=>t,cS=()=>{let t=Jl;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Jl}}},lS=cS(),af=lS;function Xt(t,...e){const n=new URL(`https://mui.com/production-error/?code=${t}`);return e.forEach(r=>n.searchParams.append("args[]",r)),`Minified MUI error #${t}; visit ${n} for the full message.`}function In(t){if(typeof t!="string")throw new Error(Xt(7));return t.charAt(0).toUpperCase()+t.slice(1)}function cf(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=cf(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Ee(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=cf(t))&&(r&&(r+=" "),r+=e);return r}function lf(t,e,n=void 0){const r={};for(const i in t){const s=t[i];let o="",a=!0;for(let c=0;c<s.length;c+=1){const l=s[c];l&&(o+=(a===!0?"":" ")+e(l),a=!1,n&&n[l]&&(o+=" "+n[l]))}r[i]=o}return r}var uf={exports:{}},G={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.transitional.element"),qa=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Ji=Symbol.for("react.strict_mode"),Zi=Symbol.for("react.profiler"),es=Symbol.for("react.consumer"),ts=Symbol.for("react.context"),ns=Symbol.for("react.forward_ref"),rs=Symbol.for("react.suspense"),is=Symbol.for("react.suspense_list"),ss=Symbol.for("react.memo"),os=Symbol.for("react.lazy"),uS=Symbol.for("react.view_transition"),dS=Symbol.for("react.client.reference");function $e(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ga:switch(t=t.type,t){case Xi:case Zi:case Ji:case rs:case is:case uS:return t;default:switch(t=t&&t.$$typeof,t){case ts:case ns:case os:case ss:return t;case es:return t;default:return e}}case qa:return e}}}G.ContextConsumer=es;G.ContextProvider=ts;G.Element=Ga;G.ForwardRef=ns;G.Fragment=Xi;G.Lazy=os;G.Memo=ss;G.Portal=qa;G.Profiler=Zi;G.StrictMode=Ji;G.Suspense=rs;G.SuspenseList=is;G.isContextConsumer=function(t){return $e(t)===es};G.isContextProvider=function(t){return $e(t)===ts};G.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga};G.isForwardRef=function(t){return $e(t)===ns};G.isFragment=function(t){return $e(t)===Xi};G.isLazy=function(t){return $e(t)===os};G.isMemo=function(t){return $e(t)===ss};G.isPortal=function(t){return $e(t)===qa};G.isProfiler=function(t){return $e(t)===Zi};G.isStrictMode=function(t){return $e(t)===Ji};G.isSuspense=function(t){return $e(t)===rs};G.isSuspenseList=function(t){return $e(t)===is};G.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Xi||t===Zi||t===Ji||t===rs||t===is||typeof t=="object"&&t!==null&&(t.$$typeof===os||t.$$typeof===ss||t.$$typeof===ts||t.$$typeof===es||t.$$typeof===ns||t.$$typeof===dS||t.getModuleId!==void 0)};G.typeOf=$e;uf.exports=G;var df=uf.exports;function ze(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function hf(t){if(I.isValidElement(t)||df.isValidElementType(t)||!ze(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=hf(t[n])}),e}function Se(t,e,n={clone:!0}){const r=n.clone?{...t}:t;return ze(t)&&ze(e)&&Object.keys(e).forEach(i=>{I.isValidElement(e[i])||df.isValidElementType(e[i])?r[i]=e[i]:ze(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&ze(t[i])?r[i]=Se(t[i],e[i],n):n.clone?r[i]=ze(e[i])?hf(e[i]):e[i]:r[i]=e[i]}),r}function ir(t,e){return e?Se(t,e,{clone:!1}):t}function hS(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,i)=>{var o,a;const s=/min-width:\s*([0-9.]+)/;return+(((o=r.match(s))==null?void 0:o[1])||0)-+(((a=i.match(s))==null?void 0:a[1])||0)});return n.length?n.reduce((r,i)=>{const s=e[i];return delete r[i],r[i]=s,r},{...e}):e}function fS(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function pS(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,i]=n,s=Number.isNaN(+r)?r||0:+r;return t.containerQueries(i).up(s)}function gS(t){const e=(s,o)=>s.replace("@media",o?`@container ${o}`:"@container");function n(s,o){s.up=(...a)=>e(t.breakpoints.up(...a),o),s.down=(...a)=>e(t.breakpoints.down(...a),o),s.between=(...a)=>e(t.breakpoints.between(...a),o),s.only=(...a)=>e(t.breakpoints.only(...a),o),s.not=(...a)=>{const c=e(t.breakpoints.not(...a),o);return c.includes("not all and")?c.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):c}}const r={},i=s=>(n(r,s),r);return n(i),{...t,containerQueries:i}}const as={xs:0,sm:600,md:900,lg:1200,xl:1536},Zl={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${as[t]}px)`},mS={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:as[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function at(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||Zl;return e.reduce((o,a,c)=>(o[s.up(s.keys[c])]=n(e[c]),o),{})}if(typeof e=="object"){const s=r.breakpoints||Zl;return Object.keys(e).reduce((o,a)=>{if(fS(s.keys,a)){const c=pS(r.containerQueries?r:mS,a);c&&(o[c]=n(e[a],a))}else if(Object.keys(s.values||as).includes(a)){const c=s.up(a);o[c]=n(e[a],a)}else{const c=a;o[c]=e[c]}return o},{})}return n(e)}function ff(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function pf(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function WR(t,...e){const n=ff(t),r=[n,...e].reduce((i,s)=>Se(i,s),{});return pf(Object.keys(n),r)}function _S(t,e){if(typeof t!="object")return{};const n={},r=Object.keys(e);return Array.isArray(t)?r.forEach((i,s)=>{s<t.length&&(n[i]=!0)}):r.forEach(i=>{t[i]!=null&&(n[i]=!0)}),n}function jR({values:t,breakpoints:e,base:n}){const r=n||_S(t,e),i=Object.keys(r);if(i.length===0)return t;let s;return i.reduce((o,a,c)=>(Array.isArray(t)?(o[a]=t[c]!=null?t[c]:t[s],s=c):typeof t=="object"?(o[a]=t[a]!=null?t[a]:t[s],s=a):o[a]=t,o),{})}function cs(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function Pi(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=cs(t,n)||r,e&&(i=e(i,r,t)),i}function re(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],c=o.theme,l=cs(c,r)||{};return at(o,a,u=>{let h=Pi(l,i,u);return u===h&&typeof u=="string"&&(h=Pi(l,i,`${e}${u==="default"?"":In(u)}`,u)),n===!1?h:{[n]:h}})};return s.propTypes={},s.filterProps=[e],s}function yS(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const vS={m:"margin",p:"padding"},bS={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},eu={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},wS=yS(t=>{if(t.length>2)if(eu[t])t=eu[t];else return[t];const[e,n]=t.split(""),r=vS[e],i=bS[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),Ka=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ya=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ka,...Ya];function Ur(t,e,n,r){const i=cs(t,e,!0)??n;return typeof i=="number"||typeof i=="string"?s=>typeof s=="string"?s:typeof i=="string"?i.startsWith("var(")&&s===0?0:i.startsWith("var(")&&s===1?i:`calc(${s} * ${i})`:i*s:Array.isArray(i)?s=>{if(typeof s=="string")return s;const o=Math.abs(s),a=i[o];return s>=0?a:typeof a=="number"?-a:typeof a=="string"&&a.startsWith("var(")?`calc(-1 * ${a})`:`-${a}`}:typeof i=="function"?i:()=>{}}function Qa(t){return Ur(t,"spacing",8)}function Br(t,e){return typeof e=="string"||e==null?e:t(e)}function ES(t,e){return n=>t.reduce((r,i)=>(r[i]=Br(e,n),r),{})}function CS(t,e,n,r){if(!e.includes(n))return null;const i=wS(n),s=ES(i,r),o=t[n];return at(t,o,s)}function gf(t,e){const n=Qa(t.theme);return Object.keys(t).map(r=>CS(t,e,r,n)).reduce(ir,{})}function Z(t){return gf(t,Ka)}Z.propTypes={};Z.filterProps=Ka;function ee(t){return gf(t,Ya)}ee.propTypes={};ee.filterProps=Ya;function ls(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?ir(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Oe(t){return typeof t!="number"?t:`${t}px solid`}function Fe(t,e){return re({prop:t,themeKey:"borders",transform:e})}const SS=Fe("border",Oe),IS=Fe("borderTop",Oe),TS=Fe("borderRight",Oe),AS=Fe("borderBottom",Oe),RS=Fe("borderLeft",Oe),PS=Fe("borderColor"),kS=Fe("borderTopColor"),OS=Fe("borderRightColor"),NS=Fe("borderBottomColor"),xS=Fe("borderLeftColor"),DS=Fe("outline",Oe),MS=Fe("outlineColor"),us=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Ur(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Br(e,r)});return at(t,t.borderRadius,n)}return null};us.propTypes={};us.filterProps=["borderRadius"];ls(SS,IS,TS,AS,RS,PS,kS,OS,NS,xS,us,DS,MS);const ds=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Ur(t.theme,"spacing",8),n=r=>({gap:Br(e,r)});return at(t,t.gap,n)}return null};ds.propTypes={};ds.filterProps=["gap"];const hs=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Ur(t.theme,"spacing",8),n=r=>({columnGap:Br(e,r)});return at(t,t.columnGap,n)}return null};hs.propTypes={};hs.filterProps=["columnGap"];const fs=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Ur(t.theme,"spacing",8),n=r=>({rowGap:Br(e,r)});return at(t,t.rowGap,n)}return null};fs.propTypes={};fs.filterProps=["rowGap"];const LS=re({prop:"gridColumn"}),$S=re({prop:"gridRow"}),FS=re({prop:"gridAutoFlow"}),US=re({prop:"gridAutoColumns"}),BS=re({prop:"gridAutoRows"}),WS=re({prop:"gridTemplateColumns"}),jS=re({prop:"gridTemplateRows"}),HS=re({prop:"gridTemplateAreas"}),VS=re({prop:"gridArea"});ls(ds,hs,fs,LS,$S,FS,US,BS,WS,jS,HS,VS);function mn(t,e){return e==="grey"?e:t}const zS=re({prop:"color",themeKey:"palette",transform:mn}),GS=re({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:mn}),qS=re({prop:"backgroundColor",themeKey:"palette",transform:mn});ls(zS,GS,qS);function Ae(t){return t<=1&&t!==0?`${t*100}%`:t}const KS=re({prop:"width",transform:Ae}),Xa=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,s,o,a,c;const r=((o=(s=(i=t.theme)==null?void 0:i.breakpoints)==null?void 0:s.values)==null?void 0:o[n])||as[n];return r?((c=(a=t.theme)==null?void 0:a.breakpoints)==null?void 0:c.unit)!=="px"?{maxWidth:`${r}${t.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:Ae(n)}};return at(t,t.maxWidth,e)}return null};Xa.filterProps=["maxWidth"];const YS=re({prop:"minWidth",transform:Ae}),QS=re({prop:"height",transform:Ae}),XS=re({prop:"maxHeight",transform:Ae}),JS=re({prop:"minHeight",transform:Ae});re({prop:"size",cssProperty:"width",transform:Ae});re({prop:"size",cssProperty:"height",transform:Ae});const ZS=re({prop:"boxSizing"});ls(KS,Xa,YS,QS,XS,JS,ZS);const Wr={border:{themeKey:"borders",transform:Oe},borderTop:{themeKey:"borders",transform:Oe},borderRight:{themeKey:"borders",transform:Oe},borderBottom:{themeKey:"borders",transform:Oe},borderLeft:{themeKey:"borders",transform:Oe},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Oe},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:us},color:{themeKey:"palette",transform:mn},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:mn},backgroundColor:{themeKey:"palette",transform:mn},p:{style:ee},pt:{style:ee},pr:{style:ee},pb:{style:ee},pl:{style:ee},px:{style:ee},py:{style:ee},padding:{style:ee},paddingTop:{style:ee},paddingRight:{style:ee},paddingBottom:{style:ee},paddingLeft:{style:ee},paddingX:{style:ee},paddingY:{style:ee},paddingInline:{style:ee},paddingInlineStart:{style:ee},paddingInlineEnd:{style:ee},paddingBlock:{style:ee},paddingBlockStart:{style:ee},paddingBlockEnd:{style:ee},m:{style:Z},mt:{style:Z},mr:{style:Z},mb:{style:Z},ml:{style:Z},mx:{style:Z},my:{style:Z},margin:{style:Z},marginTop:{style:Z},marginRight:{style:Z},marginBottom:{style:Z},marginLeft:{style:Z},marginX:{style:Z},marginY:{style:Z},marginInline:{style:Z},marginInlineStart:{style:Z},marginInlineEnd:{style:Z},marginBlock:{style:Z},marginBlockStart:{style:Z},marginBlockEnd:{style:Z},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:ds},rowGap:{style:fs},columnGap:{style:hs},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Ae},maxWidth:{style:Xa},minWidth:{transform:Ae},height:{transform:Ae},maxHeight:{transform:Ae},minHeight:{transform:Ae},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function eI(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function tI(t,e){return typeof t=="function"?t(e):t}function nI(){function t(n,r,i,s){const o={[n]:r,theme:i},a=s[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:l,transform:d,style:u}=a;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[n]:r};const h=cs(i,l)||{};return u?u(o):at(o,r,p=>{let m=Pi(h,d,p);return p===m&&typeof p=="string"&&(m=Pi(h,d,`${n}${p==="default"?"":In(p)}`,p)),c===!1?m:{[c]:m}})}function e(n){const{sx:r,theme:i={}}=n||{};if(!r)return null;const s=i.unstable_sxConfig??Wr;function o(a){let c=a;if(typeof a=="function")c=a(i);else if(typeof a!="object")return a;if(!c)return null;const l=ff(i.breakpoints),d=Object.keys(l);let u=l;return Object.keys(c).forEach(h=>{const g=tI(c[h],i);if(g!=null)if(typeof g=="object")if(s[h])u=ir(u,t(h,g,i,s));else{const p=at({theme:i},g,m=>({[h]:m}));eI(p,g)?u[h]=e({sx:g,theme:i}):u=ir(u,p)}else u=ir(u,t(h,g,i,s))}),hS(i,pf(d,u))}return Array.isArray(r)?r.map(o):o(r)}return e}const Jt=nI();Jt.filterProps=["sx"];const rI=t=>{var r;const e={systemProps:{},otherProps:{}},n=((r=t==null?void 0:t.theme)==null?void 0:r.unstable_sxConfig)??Wr;return Object.keys(t).forEach(i=>{n[i]?e.systemProps[i]=t[i]:e.otherProps[i]=t[i]}),e};function mf(t){const{sx:e,...n}=t,{systemProps:r,otherProps:i}=rI(n);let s;return Array.isArray(e)?s=[r,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return ze(a)?{...r,...a}:r}:s={...r,...e},{...i,sx:s}}function ki(){return ki=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ki.apply(null,arguments)}function iI(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var sI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,oI=iI(function(t){return sI.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),aI=!1;function cI(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function lI(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var uI=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!aI:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(lI(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=cI(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},t}(),ge="-ms-",Oi="-moz-",F="-webkit-",_f="comm",Ja="rule",Za="decl",dI="@import",yf="@keyframes",hI="@layer",fI=Math.abs,ps=String.fromCharCode,pI=Object.assign;function gI(t,e){return de(t,0)^45?(((e<<2^de(t,0))<<2^de(t,1))<<2^de(t,2))<<2^de(t,3):0}function vf(t){return t.trim()}function mI(t,e){return(t=e.exec(t))?t[0]:t}function U(t,e,n){return t.replace(e,n)}function Ao(t,e){return t.indexOf(e)}function de(t,e){return t.charCodeAt(e)|0}function Er(t,e,n){return t.slice(e,n)}function He(t){return t.length}function ec(t){return t.length}function Yr(t,e){return e.push(t),t}function _I(t,e){return t.map(e).join("")}var gs=1,Tn=1,bf=0,Ie=0,ie=0,Ln="";function ms(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:gs,column:Tn,length:o,return:""}}function Vn(t,e){return pI(ms("",null,null,"",null,null,0),t,{length:-t.length},e)}function yI(){return ie}function vI(){return ie=Ie>0?de(Ln,--Ie):0,Tn--,ie===10&&(Tn=1,gs--),ie}function Re(){return ie=Ie<bf?de(Ln,Ie++):0,Tn++,ie===10&&(Tn=1,gs++),ie}function Ke(){return de(Ln,Ie)}function ni(){return Ie}function jr(t,e){return Er(Ln,t,e)}function Cr(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wf(t){return gs=Tn=1,bf=He(Ln=t),Ie=0,[]}function Ef(t){return Ln="",t}function ri(t){return vf(jr(Ie-1,Ro(t===91?t+2:t===40?t+1:t)))}function bI(t){for(;(ie=Ke())&&ie<33;)Re();return Cr(t)>2||Cr(ie)>3?"":" "}function wI(t,e){for(;--e&&Re()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return jr(t,ni()+(e<6&&Ke()==32&&Re()==32))}function Ro(t){for(;Re();)switch(ie){case t:return Ie;case 34:case 39:t!==34&&t!==39&&Ro(ie);break;case 40:t===41&&Ro(t);break;case 92:Re();break}return Ie}function EI(t,e){for(;Re()&&t+ie!==57;)if(t+ie===84&&Ke()===47)break;return"/*"+jr(e,Ie-1)+"*"+ps(t===47?t:Re())}function CI(t){for(;!Cr(Ke());)Re();return jr(t,Ie)}function SI(t){return Ef(ii("",null,null,null,[""],t=wf(t),0,[0],t))}function ii(t,e,n,r,i,s,o,a,c){for(var l=0,d=0,u=o,h=0,g=0,p=0,m=1,v=1,w=1,T=0,E="",y=i,C=s,A=r,R=E;v;)switch(p=T,T=Re()){case 40:if(p!=108&&de(R,u-1)==58){Ao(R+=U(ri(T),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:R+=ri(T);break;case 9:case 10:case 13:case 32:R+=bI(p);break;case 92:R+=wI(ni()-1,7);continue;case 47:switch(Ke()){case 42:case 47:Yr(II(EI(Re(),ni()),e,n),c);break;default:R+="/"}break;case 123*m:a[l++]=He(R)*w;case 125*m:case 59:case 0:switch(T){case 0:case 125:v=0;case 59+d:w==-1&&(R=U(R,/\f/g,"")),g>0&&He(R)-u&&Yr(g>32?nu(R+";",r,n,u-1):nu(U(R," ","")+";",r,n,u-2),c);break;case 59:R+=";";default:if(Yr(A=tu(R,e,n,l,d,i,a,E,y=[],C=[],u),s),T===123)if(d===0)ii(R,e,A,A,y,s,u,a,C);else switch(h===99&&de(R,3)===110?100:h){case 100:case 108:case 109:case 115:ii(t,A,A,r&&Yr(tu(t,A,A,0,0,i,a,E,i,y=[],u),C),i,C,u,a,r?y:C);break;default:ii(R,A,A,A,[""],C,0,a,C)}}l=d=g=0,m=w=1,E=R="",u=o;break;case 58:u=1+He(R),g=p;default:if(m<1){if(T==123)--m;else if(T==125&&m++==0&&vI()==125)continue}switch(R+=ps(T),T*m){case 38:w=d>0?1:(R+="\f",-1);break;case 44:a[l++]=(He(R)-1)*w,w=1;break;case 64:Ke()===45&&(R+=ri(Re())),h=Ke(),d=u=He(E=R+=CI(ni())),T++;break;case 45:p===45&&He(R)==2&&(m=0)}}return s}function tu(t,e,n,r,i,s,o,a,c,l,d){for(var u=i-1,h=i===0?s:[""],g=ec(h),p=0,m=0,v=0;p<r;++p)for(var w=0,T=Er(t,u+1,u=fI(m=o[p])),E=t;w<g;++w)(E=vf(m>0?h[w]+" "+T:U(T,/&\f/g,h[w])))&&(c[v++]=E);return ms(t,e,n,i===0?Ja:a,c,l,d)}function II(t,e,n){return ms(t,e,n,_f,ps(yI()),Er(t,2,-2),0)}function nu(t,e,n,r){return ms(t,e,n,Za,Er(t,0,r),Er(t,r+1,-1),r)}function _n(t,e){for(var n="",r=ec(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function TI(t,e,n,r){switch(t.type){case hI:if(t.children.length)break;case dI:case Za:return t.return=t.return||t.value;case _f:return"";case yf:return t.return=t.value+"{"+_n(t.children,r)+"}";case Ja:t.value=t.props.join(",")}return He(n=_n(t.children,r))?t.return=t.value+"{"+n+"}":""}function AI(t){var e=ec(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function RI(t){return function(e){e.root||(e=e.return)&&t(e)}}var PI=function(e,n,r){for(var i=0,s=0;i=s,s=Ke(),i===38&&s===12&&(n[r]=1),!Cr(s);)Re();return jr(e,Ie)},kI=function(e,n){var r=-1,i=44;do switch(Cr(i)){case 0:i===38&&Ke()===12&&(n[r]=1),e[r]+=PI(Ie-1,n,r);break;case 2:e[r]+=ri(i);break;case 4:if(i===44){e[++r]=Ke()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=ps(i)}while(i=Re());return e},OI=function(e,n){return Ef(kI(wf(e),n))},ru=new WeakMap,NI=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!ru.get(r))&&!i){ru.set(e,!0);for(var s=[],o=OI(n,s),a=r.props,c=0,l=0;c<o.length;c++)for(var d=0;d<a.length;d++,l++)e.props[l]=s[c]?o[c].replace(/&\f/g,a[d]):a[d]+" "+o[c]}}},xI=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Cf(t,e){switch(gI(t,e)){case 5103:return F+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return F+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return F+t+Oi+t+ge+t+t;case 6828:case 4268:return F+t+ge+t+t;case 6165:return F+t+ge+"flex-"+t+t;case 5187:return F+t+U(t,/(\w+).+(:[^]+)/,F+"box-$1$2"+ge+"flex-$1$2")+t;case 5443:return F+t+ge+"flex-item-"+U(t,/flex-|-self/,"")+t;case 4675:return F+t+ge+"flex-line-pack"+U(t,/align-content|flex-|-self/,"")+t;case 5548:return F+t+ge+U(t,"shrink","negative")+t;case 5292:return F+t+ge+U(t,"basis","preferred-size")+t;case 6060:return F+"box-"+U(t,"-grow","")+F+t+ge+U(t,"grow","positive")+t;case 4554:return F+U(t,/([^-])(transform)/g,"$1"+F+"$2")+t;case 6187:return U(U(U(t,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),t,"")+t;case 5495:case 3959:return U(t,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return U(U(t,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+F+t+t;case 4095:case 3583:case 4068:case 2532:return U(t,/(.+)-inline(.+)/,F+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(He(t)-1-e>6)switch(de(t,e+1)){case 109:if(de(t,e+4)!==45)break;case 102:return U(t,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Oi+(de(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ao(t,"stretch")?Cf(U(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(de(t,e+1)!==115)break;case 6444:switch(de(t,He(t)-3-(~Ao(t,"!important")&&10))){case 107:return U(t,":",":"+F)+t;case 101:return U(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+F+(de(t,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+ge+"$2box$3")+t}break;case 5936:switch(de(t,e+11)){case 114:return F+t+ge+U(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return F+t+ge+U(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return F+t+ge+U(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return F+t+ge+t+t}return t}var DI=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Za:e.return=Cf(e.value,e.length);break;case yf:return _n([Vn(e,{value:U(e.value,"@","@"+F)})],i);case Ja:if(e.length)return _I(e.props,function(s){switch(mI(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return _n([Vn(e,{props:[U(s,/:(read-\w+)/,":"+Oi+"$1")]})],i);case"::placeholder":return _n([Vn(e,{props:[U(s,/:(plac\w+)/,":"+F+"input-$1")]}),Vn(e,{props:[U(s,/:(plac\w+)/,":"+Oi+"$1")]}),Vn(e,{props:[U(s,/:(plac\w+)/,ge+"input-$1")]})],i)}return""})}},MI=[DI],LI=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(m){var v=m.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var i=e.stylisPlugins||MI,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(m){for(var v=m.getAttribute("data-emotion").split(" "),w=1;w<v.length;w++)s[v[w]]=!0;a.push(m)});var c,l=[NI,xI];{var d,u=[TI,RI(function(m){d.insert(m)})],h=AI(l.concat(i,u)),g=function(v){return _n(SI(v),h)};c=function(v,w,T,E){d=T,g(v?v+"{"+w.styles+"}":w.styles),E&&(p.inserted[w.name]=!0)}}var p={key:n,sheet:new uI({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return p.sheet.hydrate(a),p},Sf={exports:{}},B={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,tc=le?Symbol.for("react.element"):60103,nc=le?Symbol.for("react.portal"):60106,_s=le?Symbol.for("react.fragment"):60107,ys=le?Symbol.for("react.strict_mode"):60108,vs=le?Symbol.for("react.profiler"):60114,bs=le?Symbol.for("react.provider"):60109,ws=le?Symbol.for("react.context"):60110,rc=le?Symbol.for("react.async_mode"):60111,Es=le?Symbol.for("react.concurrent_mode"):60111,Cs=le?Symbol.for("react.forward_ref"):60112,Ss=le?Symbol.for("react.suspense"):60113,$I=le?Symbol.for("react.suspense_list"):60120,Is=le?Symbol.for("react.memo"):60115,Ts=le?Symbol.for("react.lazy"):60116,FI=le?Symbol.for("react.block"):60121,UI=le?Symbol.for("react.fundamental"):60117,BI=le?Symbol.for("react.responder"):60118,WI=le?Symbol.for("react.scope"):60119;function Pe(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case tc:switch(t=t.type,t){case rc:case Es:case _s:case vs:case ys:case Ss:return t;default:switch(t=t&&t.$$typeof,t){case ws:case Cs:case Ts:case Is:case bs:return t;default:return e}}case nc:return e}}}function If(t){return Pe(t)===Es}B.AsyncMode=rc;B.ConcurrentMode=Es;B.ContextConsumer=ws;B.ContextProvider=bs;B.Element=tc;B.ForwardRef=Cs;B.Fragment=_s;B.Lazy=Ts;B.Memo=Is;B.Portal=nc;B.Profiler=vs;B.StrictMode=ys;B.Suspense=Ss;B.isAsyncMode=function(t){return If(t)||Pe(t)===rc};B.isConcurrentMode=If;B.isContextConsumer=function(t){return Pe(t)===ws};B.isContextProvider=function(t){return Pe(t)===bs};B.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===tc};B.isForwardRef=function(t){return Pe(t)===Cs};B.isFragment=function(t){return Pe(t)===_s};B.isLazy=function(t){return Pe(t)===Ts};B.isMemo=function(t){return Pe(t)===Is};B.isPortal=function(t){return Pe(t)===nc};B.isProfiler=function(t){return Pe(t)===vs};B.isStrictMode=function(t){return Pe(t)===ys};B.isSuspense=function(t){return Pe(t)===Ss};B.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===_s||t===Es||t===vs||t===ys||t===Ss||t===$I||typeof t=="object"&&t!==null&&(t.$$typeof===Ts||t.$$typeof===Is||t.$$typeof===bs||t.$$typeof===ws||t.$$typeof===Cs||t.$$typeof===UI||t.$$typeof===BI||t.$$typeof===WI||t.$$typeof===FI)};B.typeOf=Pe;Sf.exports=B;var jI=Sf.exports,Tf=jI,HI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},VI={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Af={};Af[Tf.ForwardRef]=HI;Af[Tf.Memo]=VI;var zI=!0;function GI(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):i&&(r+=i+" ")}),r}var Rf=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||zI===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Pf=function(e,n,r){Rf(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function qI(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var KI={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function YI(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var QI=!1,XI=/[A-Z]|^ms/g,JI=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kf=function(e){return e.charCodeAt(1)===45},iu=function(e){return e!=null&&typeof e!="boolean"},Qs=YI(function(t){return kf(t)?t:t.replace(XI,"-$&").toLowerCase()}),su=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(JI,function(r,i,s){return Ve={name:i,styles:s,next:Ve},i})}return KI[e]!==1&&!kf(e)&&typeof n=="number"&&n!==0?n+"px":n},ZI="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Sr(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Ve={name:i.name,styles:i.styles,next:Ve},i.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)Ve={name:o.name,styles:o.styles,next:Ve},o=o.next;var a=s.styles+";";return a}return eT(t,e,n)}case"function":{if(t!==void 0){var c=Ve,l=n(t);return Ve=c,Sr(t,e,l)}break}}var d=n;if(e==null)return d;var u=e[d];return u!==void 0?u:d}function eT(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Sr(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?r+=s+"{"+e[a]+"}":iu(a)&&(r+=Qs(s)+":"+su(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&QI)throw new Error(ZI);if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var c=0;c<o.length;c++)iu(o[c])&&(r+=Qs(s)+":"+su(s,o[c])+";");else{var l=Sr(t,e,o);switch(s){case"animation":case"animationName":{r+=Qs(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}}return r}var ou=/label:\s*([^\s;{]+)\s*(;|$)/g,Ve;function As(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,i="";Ve=void 0;var s=t[0];if(s==null||s.raw===void 0)r=!1,i+=Sr(n,e,s);else{var o=s;i+=o[0]}for(var a=1;a<t.length;a++)if(i+=Sr(n,e,t[a]),r){var c=s;i+=c[a]}ou.lastIndex=0;for(var l="",d;(d=ou.exec(i))!==null;)l+="-"+d[1];var u=qI(i)+l;return{name:u,styles:i,next:Ve}}var tT=function(e){return e()},Of=yc.useInsertionEffect?yc.useInsertionEffect:!1,nT=Of||tT,au=Of||I.useLayoutEffect,Nf=I.createContext(typeof HTMLElement<"u"?LI({key:"css"}):null);Nf.Provider;var xf=function(e){return I.forwardRef(function(n,r){var i=I.useContext(Nf);return e(n,i,r)})},ic=I.createContext({}),rT=xf(function(t,e){var n=t.styles,r=As([n],void 0,I.useContext(ic)),i=I.useRef();return au(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",s),o.hydrate([c])),i.current=[o,a],function(){o.flush()}},[e]),au(function(){var s=i.current,o=s[0],a=s[1];if(a){s[1]=!1;return}if(r.next!==void 0&&Pf(e,r.next,!0),o.tags.length){var c=o.tags[o.tags.length-1].nextElementSibling;o.before=c,o.flush()}e.insert("",r,o,!1)},[e,r.name]),null});function iT(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return As(e)}var sc=function(){var e=iT.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},sT=oI,oT=function(e){return e!=="theme"},cu=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?sT:oT},lu=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},aT=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Rf(n,r,i),nT(function(){return Pf(n,r,i)}),null},cT=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=lu(e,n,r),c=a||cu(i),l=!c("as");return function(){var d=arguments,u=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&u.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)u.push.apply(u,d);else{u.push(d[0][0]);for(var h=d.length,g=1;g<h;g++)u.push(d[g],d[0][g])}var p=xf(function(m,v,w){var T=l&&m.as||i,E="",y=[],C=m;if(m.theme==null){C={};for(var A in m)C[A]=m[A];C.theme=I.useContext(ic)}typeof m.className=="string"?E=GI(v.registered,y,m.className):m.className!=null&&(E=m.className+" ");var R=As(u.concat(y),v.registered,C);E+=v.key+"-"+R.name,o!==void 0&&(E+=" "+o);var Y=l&&a===void 0?cu(T):c,H={};for(var f in m)l&&f==="as"||Y(f)&&(H[f]=m[f]);return H.className=E,H.ref=w,I.createElement(I.Fragment,null,I.createElement(aT,{cache:v,serialized:R,isStringTag:typeof T=="string"}),I.createElement(T,H))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=u,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(m,v){return t(m,ki({},n,v,{shouldForwardProp:lu(p,v,!0)})).apply(void 0,u)},p}},lT=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Po=cT.bind();lT.forEach(function(t){Po[t]=Po(t)});function uT(t){return t==null||Object.keys(t).length===0}function dT(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(uT(i)?n:i):e;return me.jsx(rT,{styles:r})}function Df(t,e){return Po(t,e)}function hT(t,e){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))}const uu=[];function du(t){return uu[0]=t,As(uu)}const fT=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function pT(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=t,s=fT(e),o=Object.keys(s);function a(h){return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n})`}function c(h){return`@media (max-width:${(typeof e[h]=="number"?e[h]:h)-r/100}${n})`}function l(h,g){const p=o.indexOf(g);return`@media (min-width:${typeof e[h]=="number"?e[h]:h}${n}) and (max-width:${(p!==-1&&typeof e[o[p]]=="number"?e[o[p]]:g)-r/100}${n})`}function d(h){return o.indexOf(h)+1<o.length?l(h,o[o.indexOf(h)+1]):a(h)}function u(h){const g=o.indexOf(h);return g===0?a(o[1]):g===o.length-1?c(o[g]):l(h,o[o.indexOf(h)+1]).replace("@media","@media not all and")}return{keys:o,values:s,up:a,down:c,between:l,only:d,not:u,unit:n,...i}}const gT={borderRadius:4},mT=gT;function Mf(t=8,e=Qa({spacing:t})){if(t.mui)return t;const n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function _T(t,e){var r;const n=this;if(n.vars){if(!((r=n.colorSchemes)!=null&&r[t])||typeof n.getColorSchemeSelector!="function")return{};let i=n.getColorSchemeSelector(t);return i==="&"?e:((i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:e})}return n.palette.mode===t?e:{}}function oc(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={},...o}=t,a=pT(n),c=Mf(i);let l=Se({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:c,shape:{...mT,...s}},o);return l=gS(l),l.applyStyles=_T,l=e.reduce((d,u)=>Se(d,u),l),l.unstable_sxConfig={...Wr,...o==null?void 0:o.unstable_sxConfig},l.unstable_sx=function(u){return Jt({sx:u,theme:this})},l}function yT(t){return Object.keys(t).length===0}function vT(t=null){const e=I.useContext(ic);return!e||yT(e)?t:e}const bT=oc();function Lf(t=bT){return vT(t)}function wT({styles:t,themeId:e,defaultTheme:n={}}){const r=Lf(n),i=typeof t=="function"?t(e&&r[e]||r):t;return me.jsx(dT,{styles:i})}function ET(t={}){const{themeId:e,defaultTheme:n,defaultClassName:r="MuiBox-root",generateClassName:i}=t,s=Df("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(Jt);return I.forwardRef(function(c,l){const d=Lf(n),{className:u,component:h="div",...g}=mf(c);return me.jsx(s,{as:h,ref:l,className:Ee(u,i?i(r):r),theme:e&&d[e]||d,...g})})}const CT={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function ac(t,e,n="Mui"){const r=CT[e];return r?`${n}-${r}`:`${af.generate(t)}-${e}`}function Rs(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=ac(t,i,n)}),r}function $f(t){const{variants:e,...n}=t,r={variants:e,style:du(n),isProcessed:!0};return r.style===n||e&&e.forEach(i=>{typeof i.style!="function"&&(i.style=du(i.style))}),r}const ST=oc();function Xs(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function IT(t){return t?(e,n)=>n[t]:null}function TT(t,e,n){t.theme=PT(t.theme)?n:t.theme[e]||t.theme}function si(t,e){const n=typeof e=="function"?e(t):e;if(Array.isArray(n))return n.flatMap(r=>si(t,r));if(Array.isArray(n==null?void 0:n.variants)){let r;if(n.isProcessed)r=n.style;else{const{variants:i,...s}=n;r=s}return Ff(t,n.variants,[r])}return n!=null&&n.isProcessed?n.style:n}function Ff(t,e,n=[]){var i;let r;e:for(let s=0;s<e.length;s+=1){const o=e[s];if(typeof o.props=="function"){if(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),!o.props(r))continue}else for(const a in o.props)if(t[a]!==o.props[a]&&((i=t.ownerState)==null?void 0:i[a])!==o.props[a])continue e;typeof o.style=="function"?(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),n.push(o.style(r))):n.push(o.style)}return n}function AT(t={}){const{themeId:e,defaultTheme:n=ST,rootShouldForwardProp:r=Xs,slotShouldForwardProp:i=Xs}=t;function s(a){TT(a,e,n)}return(a,c={})=>{hT(a,C=>C.filter(A=>A!==Jt));const{name:l,slot:d,skipVariantsResolver:u,skipSx:h,overridesResolver:g=IT(OT(d)),...p}=c,m=u!==void 0?u:d&&d!=="Root"&&d!=="root"||!1,v=h||!1;let w=Xs;d==="Root"||d==="root"?w=r:d?w=i:kT(a)&&(w=void 0);const T=Df(a,{shouldForwardProp:w,label:RT(),...p}),E=C=>{if(typeof C=="function"&&C.__emotion_real!==C)return function(R){return si(R,C)};if(ze(C)){const A=$f(C);return A.variants?function(Y){return si(Y,A)}:A.style}return C},y=(...C)=>{const A=[],R=C.map(E),Y=[];if(A.push(s),l&&g&&Y.push(function(O){var Te,gt;const X=(gt=(Te=O.theme.components)==null?void 0:Te[l])==null?void 0:gt.styleOverrides;if(!X)return null;const pe={};for(const mt in X)pe[mt]=si(O,X[mt]);return g(O,pe)}),l&&!m&&Y.push(function(O){var pe,Te;const M=O.theme,X=(Te=(pe=M==null?void 0:M.components)==null?void 0:pe[l])==null?void 0:Te.variants;return X?Ff(O,X):null}),v||Y.push(Jt),Array.isArray(R[0])){const S=R.shift(),O=new Array(A.length).fill(""),M=new Array(Y.length).fill("");let X;X=[...O,...S,...M],X.raw=[...O,...S.raw,...M],A.unshift(X)}const H=[...A,...R,...Y],f=T(...H);return a.muiName&&(f.muiName=a.muiName),f};return T.withConfig&&(y.withConfig=T.withConfig),y}}function RT(t,e){return void 0}function PT(t){for(const e in t)return!1;return!0}function kT(t){return typeof t=="string"&&t.charCodeAt(0)>96}function OT(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}function ko(t,e){const n={...e};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const i=r;if(i==="components"||i==="slots")n[i]={...t[i],...n[i]};else if(i==="componentsProps"||i==="slotProps"){const s=t[i],o=e[i];if(!o)n[i]=s||{};else if(!s)n[i]=o;else{n[i]={...o};for(const a in s)if(Object.prototype.hasOwnProperty.call(s,a)){const c=a;n[i][c]=ko(s[c],o[c])}}}else n[i]===void 0&&(n[i]=t[i])}return n}const NT=typeof window<"u"?I.useLayoutEffect:I.useEffect;function xT(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function cc(t,e=0,n=1){return xT(t,e,n)}function DT(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function Ot(t){if(t.type)return t;if(t.charAt(0)==="#")return Ot(DT(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(Xt(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(i))throw new Error(Xt(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}const MT=t=>{const e=Ot(t);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},Qn=(t,e)=>{try{return MT(t)}catch{return t}};function Ps(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.includes("rgb")?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function Uf(t){t=Ot(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(l,d=(l+n/30)%12)=>i-s*Math.max(Math.min(d-3,9-d,1),-1);let a="rgb";const c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",c.push(e[3])),Ps({type:a,values:c})}function Oo(t){t=Ot(t);let e=t.type==="hsl"||t.type==="hsla"?Ot(Uf(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function LT(t,e){const n=Oo(t),r=Oo(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function $T(t,e){return t=Ot(t),e=cc(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Ps(t)}function Qr(t,e,n){try{return $T(t,e)}catch{return t}}function lc(t,e){if(t=Ot(t),e=cc(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Ps(t)}function V(t,e,n){try{return lc(t,e)}catch{return t}}function uc(t,e){if(t=Ot(t),e=cc(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Ps(t)}function z(t,e,n){try{return uc(t,e)}catch{return t}}function FT(t,e=.15){return Oo(t)>.5?lc(t,e):uc(t,e)}function Xr(t,e,n){try{return FT(t,e)}catch{return t}}const Bf=I.createContext(void 0);function HR({value:t,children:e}){return me.jsx(Bf.Provider,{value:t,children:e})}function UT(t){const{theme:e,name:n,props:r}=t;if(!e||!e.components||!e.components[n])return r;const i=e.components[n];return i.defaultProps?ko(i.defaultProps,r):!i.styleOverrides&&!i.variants?ko(i,r):r}function BT({props:t,name:e}){const n=I.useContext(Bf);return UT({props:t,name:e,theme:{components:n}})}const hu={theme:void 0};function WT(t){let e,n;return function(i){let s=e;return(s===void 0||i.theme!==n)&&(hu.theme=i.theme,s=$f(t(hu)),e=s,n=i.theme),s}}function jT(t=""){function e(...r){if(!r.length)return"";const i=r[0];return typeof i=="string"&&!i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${i}${e(...r.slice(1))})`:`, ${i}`}return(r,...i)=>`var(--${t?`${t}-`:""}${r}${e(...i)})`}const fu=(t,e,n,r=[])=>{let i=t;e.forEach((s,o)=>{o===e.length-1?Array.isArray(i)?i[Number(s)]=n:i&&typeof i=="object"&&(i[s]=n):i&&typeof i=="object"&&(i[s]||(i[s]=r.includes(s)?[]:{}),i=i[s])})},HT=(t,e,n)=>{function r(i,s=[],o=[]){Object.entries(i).forEach(([a,c])=>{(!n||n&&!n([...s,a]))&&c!=null&&(typeof c=="object"&&Object.keys(c).length>0?r(c,[...s,a],Array.isArray(c)?[...o,a]:o):e([...s,a],c,o))})}r(t)},VT=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>t.includes(r))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Js(t,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},i={},s={},o={};return HT(t,(a,c,l)=>{if((typeof c=="string"||typeof c=="number")&&(!r||!r(a,c))){const d=`--${n?`${n}-`:""}${a.join("-")}`,u=VT(a,c);Object.assign(i,{[d]:u}),fu(s,a,`var(${d})`,l),fu(o,a,`var(${d}, ${u})`,l)}},a=>a[0]==="vars"),{css:i,vars:s,varsWithDefaults:o}}function zT(t,e={}){const{getSelector:n=v,disableCssColorScheme:r,colorSchemeSelector:i}=e,{colorSchemes:s={},components:o,defaultColorScheme:a="light",...c}=t,{vars:l,css:d,varsWithDefaults:u}=Js(c,e);let h=u;const g={},{[a]:p,...m}=s;if(Object.entries(m||{}).forEach(([E,y])=>{const{vars:C,css:A,varsWithDefaults:R}=Js(y,e);h=Se(h,R),g[E]={css:A,vars:C}}),p){const{css:E,vars:y,varsWithDefaults:C}=Js(p,e);h=Se(h,C),g[a]={css:E,vars:y}}function v(E,y){var A,R;let C=i;if(i==="class"&&(C=".%s"),i==="data"&&(C="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(C=`[${i}="%s"]`),E){if(C==="media")return t.defaultColorScheme===E?":root":{[`@media (prefers-color-scheme: ${((R=(A=s[E])==null?void 0:A.palette)==null?void 0:R.mode)||E})`]:{":root":y}};if(C)return t.defaultColorScheme===E?`:root, ${C.replace("%s",String(E))}`:C.replace("%s",String(E))}return":root"}return{vars:h,generateThemeVars:()=>{let E={...l};return Object.entries(g).forEach(([,{vars:y}])=>{E=Se(E,y)}),E},generateStyleSheets:()=>{var Y,H;const E=[],y=t.defaultColorScheme||"light";function C(f,S){Object.keys(S).length&&E.push(typeof f=="string"?{[f]:{...S}}:f)}C(n(void 0,{...d}),d);const{[y]:A,...R}=g;if(A){const{css:f}=A,S=(H=(Y=s[y])==null?void 0:Y.palette)==null?void 0:H.mode,O=!r&&S?{colorScheme:S,...f}:{...f};C(n(y,{...O}),O)}return Object.entries(R).forEach(([f,{css:S}])=>{var X,pe;const O=(pe=(X=s[f])==null?void 0:X.palette)==null?void 0:pe.mode,M=!r&&O?{colorScheme:O,...S}:{...S};C(n(f,{...M}),M)}),E}}}function GT(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}const Ir={black:"#000",white:"#fff"},qT={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},KT=qT,sn={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},YT={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},on=YT,QT={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},zn=QT,XT={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},an=XT,JT={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},cn=JT,ln={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function Wf(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ir.white,default:Ir.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const ZT=Wf();function jf(){return{text:{primary:Ir.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ir.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const pu=jf();function gu(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=uc(t.main,i):e==="dark"&&(t.dark=lc(t.main,s)))}function eA(t="light"){return t==="dark"?{main:an[200],light:an[50],dark:an[400]}:{main:an[700],light:an[400],dark:an[800]}}function tA(t="light"){return t==="dark"?{main:sn[200],light:sn[50],dark:sn[400]}:{main:sn[500],light:sn[300],dark:sn[700]}}function nA(t="light"){return t==="dark"?{main:on[500],light:on[300],dark:on[700]}:{main:on[700],light:on[400],dark:on[800]}}function rA(t="light"){return t==="dark"?{main:cn[400],light:cn[300],dark:cn[700]}:{main:cn[700],light:cn[500],dark:cn[900]}}function iA(t="light"){return t==="dark"?{main:ln[400],light:ln[300],dark:ln[700]}:{main:ln[800],light:ln[500],dark:ln[900]}}function sA(t="light"){return t==="dark"?{main:zn[400],light:zn[300],dark:zn[700]}:{main:"#ed6c02",light:zn[500],dark:zn[900]}}function dc(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=t,s=t.primary||eA(e),o=t.secondary||tA(e),a=t.error||nA(e),c=t.info||rA(e),l=t.success||iA(e),d=t.warning||sA(e);function u(m){return LT(m,pu.text.primary)>=n?pu.text.primary:ZT.text.primary}const h=({color:m,name:v,mainShade:w=500,lightShade:T=300,darkShade:E=700})=>{if(m={...m},!m.main&&m[w]&&(m.main=m[w]),!m.hasOwnProperty("main"))throw new Error(Xt(11,v?` (${v})`:"",w));if(typeof m.main!="string")throw new Error(Xt(12,v?` (${v})`:"",JSON.stringify(m.main)));return gu(m,"light",T,r),gu(m,"dark",E,r),m.contrastText||(m.contrastText=u(m.main)),m};let g;return e==="light"?g=Wf():e==="dark"&&(g=jf()),Se({common:{...Ir},mode:e,primary:h({color:s,name:"primary"}),secondary:h({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:h({color:a,name:"error"}),warning:h({color:d,name:"warning"}),info:h({color:c,name:"info"}),success:h({color:l,name:"success"}),grey:KT,contrastThreshold:n,getContrastText:u,augmentColor:h,tonalOffset:r,...g},i)}function oA(t){const e={};return Object.entries(t).forEach(r=>{const[i,s]=r;typeof s=="object"&&(e[i]=`${s.fontStyle?`${s.fontStyle} `:""}${s.fontVariant?`${s.fontVariant} `:""}${s.fontWeight?`${s.fontWeight} `:""}${s.fontStretch?`${s.fontStretch} `:""}${s.fontSize||""}${s.lineHeight?`/${s.lineHeight} `:""}${s.fontFamily||""}`)}),e}function aA(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function cA(t){return Math.round(t*1e5)/1e5}const mu={textTransform:"uppercase"},_u='"Roboto", "Helvetica", "Arial", sans-serif';function lA(t,e){const{fontFamily:n=_u,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:a=700,htmlFontSize:c=16,allVariants:l,pxToRem:d,...u}=typeof e=="function"?e(t):e,h=r/14,g=d||(v=>`${v/c*h}rem`),p=(v,w,T,E,y)=>({fontFamily:n,fontWeight:v,fontSize:g(w),lineHeight:T,...n===_u?{letterSpacing:`${cA(E/w)}em`}:{},...y,...l}),m={h1:p(i,96,1.167,-1.5),h2:p(i,60,1.2,-.5),h3:p(s,48,1.167,0),h4:p(s,34,1.235,.25),h5:p(s,24,1.334,0),h6:p(o,20,1.6,.15),subtitle1:p(s,16,1.75,.15),subtitle2:p(o,14,1.57,.1),body1:p(s,16,1.5,.15),body2:p(s,14,1.43,.15),button:p(o,14,1.75,.4,mu),caption:p(s,12,1.66,.4),overline:p(s,12,2.66,1,mu),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Se({htmlFontSize:c,pxToRem:g,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:a,...m},u,{clone:!1})}const uA=.2,dA=.14,hA=.12;function J(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${uA})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${dA})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${hA})`].join(",")}const fA=["none",J(0,2,1,-1,0,1,1,0,0,1,3,0),J(0,3,1,-2,0,2,2,0,0,1,5,0),J(0,3,3,-2,0,3,4,0,0,1,8,0),J(0,2,4,-1,0,4,5,0,0,1,10,0),J(0,3,5,-1,0,5,8,0,0,1,14,0),J(0,3,5,-1,0,6,10,0,0,1,18,0),J(0,4,5,-2,0,7,10,1,0,2,16,1),J(0,5,5,-3,0,8,10,1,0,3,14,2),J(0,5,6,-3,0,9,12,1,0,3,16,2),J(0,6,6,-3,0,10,14,1,0,4,18,3),J(0,6,7,-4,0,11,15,1,0,4,20,3),J(0,7,8,-4,0,12,17,2,0,5,22,4),J(0,7,8,-4,0,13,19,2,0,5,24,4),J(0,7,9,-4,0,14,21,2,0,5,26,4),J(0,8,9,-5,0,15,22,2,0,6,28,5),J(0,8,10,-5,0,16,24,2,0,6,30,5),J(0,8,11,-5,0,17,26,2,0,6,32,5),J(0,9,11,-5,0,18,28,2,0,7,34,6),J(0,9,12,-6,0,19,29,2,0,7,36,6),J(0,10,13,-6,0,20,31,3,0,8,38,7),J(0,10,13,-6,0,21,33,3,0,8,40,7),J(0,10,14,-6,0,22,35,3,0,8,42,7),J(0,11,14,-7,0,23,36,3,0,9,44,8),J(0,11,15,-7,0,24,38,3,0,9,46,8)],pA={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},gA={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function yu(t){return`${Math.round(t)}ms`}function mA(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function _A(t){const e={...pA,...t.easing},n={...gA,...t.duration};return{getAutoHeightDuration:mA,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:c=0,...l}=s;return(Array.isArray(i)?i:[i]).map(d=>`${d} ${typeof o=="string"?o:yu(o)} ${a} ${typeof c=="string"?c:yu(c)}`).join(",")},...t,easing:e,duration:n}}const yA={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},vA=yA;function bA(t){return ze(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function Hf(t={}){const e={...t};function n(r){const i=Object.entries(r);for(let s=0;s<i.length;s++){const[o,a]=i[s];!bA(a)||o.startsWith("unstable_")?delete r[o]:ze(a)&&(r[o]={...a},n(r[o]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function No(t={},...e){const{breakpoints:n,mixins:r={},spacing:i,palette:s={},transitions:o={},typography:a={},shape:c,...l}=t;if(t.vars&&t.generateThemeVars===void 0)throw new Error(Xt(20));const d=dc(s),u=oc(t);let h=Se(u,{mixins:aA(u.breakpoints,r),palette:d,shadows:fA.slice(),typography:lA(d,a),transitions:_A(o),zIndex:{...vA}});return h=Se(h,l),h=e.reduce((g,p)=>Se(g,p),h),h.unstable_sxConfig={...Wr,...l==null?void 0:l.unstable_sxConfig},h.unstable_sx=function(p){return Jt({sx:p,theme:this})},h.toRuntimeSource=Hf,h}function wA(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const EA=[...Array(25)].map((t,e)=>{if(e===0)return"none";const n=wA(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function Vf(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function zf(t){return t==="dark"?EA:[]}function CA(t){const{palette:e={mode:"light"},opacity:n,overlays:r,...i}=t,s=dc(e);return{palette:s,opacity:{...Vf(s.mode),...n},overlays:r||zf(s.mode),...i}}function SA(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const IA=t=>[...[...Array(25)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],TA=t=>(e,n)=>{const r=t.rootSelector||":root",i=t.colorSchemeSelector;let s=i;if(i==="class"&&(s=".%s"),i==="data"&&(s="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(s=`[${i}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const o={};return IA(t.cssVarPrefix).forEach(a=>{o[a]=n[a],delete n[a]}),s==="media"?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:o}}:s?{[s.replace("%s",e)]:o,[`${r}, ${s.replace("%s",e)}`]:n}:{[r]:{...n,...o}}}if(s&&s!=="media")return`${r}, ${s.replace("%s",String(e))}`}else if(e){if(s==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:n}};if(s)return s.replace("%s",String(e))}return r};function AA(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function _(t,e,n){!t[e]&&n&&(t[e]=n)}function Xn(t){return typeof t!="string"||!t.startsWith("hsl")?t:Uf(t)}function Je(t,e){`${e}Channel`in t||(t[`${e}Channel`]=Qn(Xn(t[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function RA(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const je=t=>{try{return t()}catch{}},PA=(t="mui")=>jT(t);function Zs(t,e,n,r){if(!e)return;e=e===!0?{}:e;const i=r==="dark"?"dark":"light";if(!n){t[r]=CA({...e,palette:{mode:i,...e==null?void 0:e.palette}});return}const{palette:s,...o}=No({...n,palette:{mode:i,...e==null?void 0:e.palette}});return t[r]={...e,palette:s,opacity:{...Vf(i),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||zf(i)},o}function kA(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:s="mui",shouldSkipGeneratingVar:o=SA,colorSchemeSelector:a=n.light&&n.dark?"media":void 0,rootSelector:c=":root",...l}=t,d=Object.keys(n)[0],u=r||(n.light&&d!=="light"?"light":d),h=PA(s),{[u]:g,light:p,dark:m,...v}=n,w={...v};let T=g;if((u==="dark"&&!("dark"in n)||u==="light"&&!("light"in n))&&(T=!0),!T)throw new Error(Xt(21,u));const E=Zs(w,T,l,u);p&&!w.light&&Zs(w,p,void 0,"light"),m&&!w.dark&&Zs(w,m,void 0,"dark");let y={defaultColorScheme:u,...E,cssVarPrefix:s,colorSchemeSelector:a,rootSelector:c,getCssVar:h,colorSchemes:w,font:{...oA(E.typography),...E.font},spacing:RA(l.spacing)};Object.keys(y.colorSchemes).forEach(H=>{const f=y.colorSchemes[H].palette,S=O=>{const M=O.split("-"),X=M[1],pe=M[2];return h(O,f[X][pe])};if(f.mode==="light"&&(_(f.common,"background","#fff"),_(f.common,"onBackground","#000")),f.mode==="dark"&&(_(f.common,"background","#000"),_(f.common,"onBackground","#fff")),AA(f,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),f.mode==="light"){_(f.Alert,"errorColor",V(f.error.light,.6)),_(f.Alert,"infoColor",V(f.info.light,.6)),_(f.Alert,"successColor",V(f.success.light,.6)),_(f.Alert,"warningColor",V(f.warning.light,.6)),_(f.Alert,"errorFilledBg",S("palette-error-main")),_(f.Alert,"infoFilledBg",S("palette-info-main")),_(f.Alert,"successFilledBg",S("palette-success-main")),_(f.Alert,"warningFilledBg",S("palette-warning-main")),_(f.Alert,"errorFilledColor",je(()=>f.getContrastText(f.error.main))),_(f.Alert,"infoFilledColor",je(()=>f.getContrastText(f.info.main))),_(f.Alert,"successFilledColor",je(()=>f.getContrastText(f.success.main))),_(f.Alert,"warningFilledColor",je(()=>f.getContrastText(f.warning.main))),_(f.Alert,"errorStandardBg",z(f.error.light,.9)),_(f.Alert,"infoStandardBg",z(f.info.light,.9)),_(f.Alert,"successStandardBg",z(f.success.light,.9)),_(f.Alert,"warningStandardBg",z(f.warning.light,.9)),_(f.Alert,"errorIconColor",S("palette-error-main")),_(f.Alert,"infoIconColor",S("palette-info-main")),_(f.Alert,"successIconColor",S("palette-success-main")),_(f.Alert,"warningIconColor",S("palette-warning-main")),_(f.AppBar,"defaultBg",S("palette-grey-100")),_(f.Avatar,"defaultBg",S("palette-grey-400")),_(f.Button,"inheritContainedBg",S("palette-grey-300")),_(f.Button,"inheritContainedHoverBg",S("palette-grey-A100")),_(f.Chip,"defaultBorder",S("palette-grey-400")),_(f.Chip,"defaultAvatarColor",S("palette-grey-700")),_(f.Chip,"defaultIconColor",S("palette-grey-700")),_(f.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),_(f.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),_(f.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),_(f.LinearProgress,"primaryBg",z(f.primary.main,.62)),_(f.LinearProgress,"secondaryBg",z(f.secondary.main,.62)),_(f.LinearProgress,"errorBg",z(f.error.main,.62)),_(f.LinearProgress,"infoBg",z(f.info.main,.62)),_(f.LinearProgress,"successBg",z(f.success.main,.62)),_(f.LinearProgress,"warningBg",z(f.warning.main,.62)),_(f.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.11)`),_(f.Slider,"primaryTrack",z(f.primary.main,.62)),_(f.Slider,"secondaryTrack",z(f.secondary.main,.62)),_(f.Slider,"errorTrack",z(f.error.main,.62)),_(f.Slider,"infoTrack",z(f.info.main,.62)),_(f.Slider,"successTrack",z(f.success.main,.62)),_(f.Slider,"warningTrack",z(f.warning.main,.62));const O=Xr(f.background.default,.8);_(f.SnackbarContent,"bg",O),_(f.SnackbarContent,"color",je(()=>f.getContrastText(O))),_(f.SpeedDialAction,"fabHoverBg",Xr(f.background.paper,.15)),_(f.StepConnector,"border",S("palette-grey-400")),_(f.StepContent,"border",S("palette-grey-400")),_(f.Switch,"defaultColor",S("palette-common-white")),_(f.Switch,"defaultDisabledColor",S("palette-grey-100")),_(f.Switch,"primaryDisabledColor",z(f.primary.main,.62)),_(f.Switch,"secondaryDisabledColor",z(f.secondary.main,.62)),_(f.Switch,"errorDisabledColor",z(f.error.main,.62)),_(f.Switch,"infoDisabledColor",z(f.info.main,.62)),_(f.Switch,"successDisabledColor",z(f.success.main,.62)),_(f.Switch,"warningDisabledColor",z(f.warning.main,.62)),_(f.TableCell,"border",z(Qr(f.divider,1),.88)),_(f.Tooltip,"bg",Qr(f.grey[700],.92))}if(f.mode==="dark"){_(f.Alert,"errorColor",z(f.error.light,.6)),_(f.Alert,"infoColor",z(f.info.light,.6)),_(f.Alert,"successColor",z(f.success.light,.6)),_(f.Alert,"warningColor",z(f.warning.light,.6)),_(f.Alert,"errorFilledBg",S("palette-error-dark")),_(f.Alert,"infoFilledBg",S("palette-info-dark")),_(f.Alert,"successFilledBg",S("palette-success-dark")),_(f.Alert,"warningFilledBg",S("palette-warning-dark")),_(f.Alert,"errorFilledColor",je(()=>f.getContrastText(f.error.dark))),_(f.Alert,"infoFilledColor",je(()=>f.getContrastText(f.info.dark))),_(f.Alert,"successFilledColor",je(()=>f.getContrastText(f.success.dark))),_(f.Alert,"warningFilledColor",je(()=>f.getContrastText(f.warning.dark))),_(f.Alert,"errorStandardBg",V(f.error.light,.9)),_(f.Alert,"infoStandardBg",V(f.info.light,.9)),_(f.Alert,"successStandardBg",V(f.success.light,.9)),_(f.Alert,"warningStandardBg",V(f.warning.light,.9)),_(f.Alert,"errorIconColor",S("palette-error-main")),_(f.Alert,"infoIconColor",S("palette-info-main")),_(f.Alert,"successIconColor",S("palette-success-main")),_(f.Alert,"warningIconColor",S("palette-warning-main")),_(f.AppBar,"defaultBg",S("palette-grey-900")),_(f.AppBar,"darkBg",S("palette-background-paper")),_(f.AppBar,"darkColor",S("palette-text-primary")),_(f.Avatar,"defaultBg",S("palette-grey-600")),_(f.Button,"inheritContainedBg",S("palette-grey-800")),_(f.Button,"inheritContainedHoverBg",S("palette-grey-700")),_(f.Chip,"defaultBorder",S("palette-grey-700")),_(f.Chip,"defaultAvatarColor",S("palette-grey-300")),_(f.Chip,"defaultIconColor",S("palette-grey-300")),_(f.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),_(f.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),_(f.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),_(f.LinearProgress,"primaryBg",V(f.primary.main,.5)),_(f.LinearProgress,"secondaryBg",V(f.secondary.main,.5)),_(f.LinearProgress,"errorBg",V(f.error.main,.5)),_(f.LinearProgress,"infoBg",V(f.info.main,.5)),_(f.LinearProgress,"successBg",V(f.success.main,.5)),_(f.LinearProgress,"warningBg",V(f.warning.main,.5)),_(f.Skeleton,"bg",`rgba(${S("palette-text-primaryChannel")} / 0.13)`),_(f.Slider,"primaryTrack",V(f.primary.main,.5)),_(f.Slider,"secondaryTrack",V(f.secondary.main,.5)),_(f.Slider,"errorTrack",V(f.error.main,.5)),_(f.Slider,"infoTrack",V(f.info.main,.5)),_(f.Slider,"successTrack",V(f.success.main,.5)),_(f.Slider,"warningTrack",V(f.warning.main,.5));const O=Xr(f.background.default,.98);_(f.SnackbarContent,"bg",O),_(f.SnackbarContent,"color",je(()=>f.getContrastText(O))),_(f.SpeedDialAction,"fabHoverBg",Xr(f.background.paper,.15)),_(f.StepConnector,"border",S("palette-grey-600")),_(f.StepContent,"border",S("palette-grey-600")),_(f.Switch,"defaultColor",S("palette-grey-300")),_(f.Switch,"defaultDisabledColor",S("palette-grey-600")),_(f.Switch,"primaryDisabledColor",V(f.primary.main,.55)),_(f.Switch,"secondaryDisabledColor",V(f.secondary.main,.55)),_(f.Switch,"errorDisabledColor",V(f.error.main,.55)),_(f.Switch,"infoDisabledColor",V(f.info.main,.55)),_(f.Switch,"successDisabledColor",V(f.success.main,.55)),_(f.Switch,"warningDisabledColor",V(f.warning.main,.55)),_(f.TableCell,"border",V(Qr(f.divider,1),.68)),_(f.Tooltip,"bg",Qr(f.grey[700],.92))}Je(f.background,"default"),Je(f.background,"paper"),Je(f.common,"background"),Je(f.common,"onBackground"),Je(f,"divider"),Object.keys(f).forEach(O=>{const M=f[O];O!=="tonalOffset"&&M&&typeof M=="object"&&(M.main&&_(f[O],"mainChannel",Qn(Xn(M.main))),M.light&&_(f[O],"lightChannel",Qn(Xn(M.light))),M.dark&&_(f[O],"darkChannel",Qn(Xn(M.dark))),M.contrastText&&_(f[O],"contrastTextChannel",Qn(Xn(M.contrastText))),O==="text"&&(Je(f[O],"primary"),Je(f[O],"secondary")),O==="action"&&(M.active&&Je(f[O],"active"),M.selected&&Je(f[O],"selected")))})}),y=e.reduce((H,f)=>Se(H,f),y);const C={prefix:s,disableCssColorScheme:i,shouldSkipGeneratingVar:o,getSelector:TA(y)},{vars:A,generateThemeVars:R,generateStyleSheets:Y}=zT(y,C);return y.vars=A,Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([H,f])=>{y[H]=f}),y.generateThemeVars=R,y.generateStyleSheets=Y,y.generateSpacing=function(){return Mf(l.spacing,Qa(this))},y.getColorSchemeSelector=GT(a),y.spacing=y.generateSpacing(),y.shouldSkipGeneratingVar=o,y.unstable_sxConfig={...Wr,...l==null?void 0:l.unstable_sxConfig},y.unstable_sx=function(f){return Jt({sx:f,theme:this})},y.toRuntimeSource=Hf,y}function vu(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:dc({...n===!0?{}:n.palette,mode:e})})}function Gf(t={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:s=n==null?void 0:n.mode,...o}=t,a=s||"light",c=i==null?void 0:i[a],l={...i,...n?{[a]:{...typeof c!="boolean"&&c,palette:n}}:void 0};if(r===!1){if(!("colorSchemes"in t))return No(t,...e);let d=n;"palette"in t||l[a]&&(l[a]!==!0?d=l[a].palette:a==="dark"&&(d={mode:"dark"}));const u=No({...t,palette:d},...e);return u.defaultColorScheme=a,u.colorSchemes=l,u.palette.mode==="light"&&(u.colorSchemes.light={...l.light!==!0&&l.light,palette:u.palette},vu(u,"dark",l.dark)),u.palette.mode==="dark"&&(u.colorSchemes.dark={...l.dark!==!0&&l.dark,palette:u.palette},vu(u,"light",l.light)),u}return!n&&!("light"in l)&&a==="light"&&(l.light=!0),kA({...o,colorSchemes:l,defaultColorScheme:a,...typeof r!="boolean"&&r},...e)}const OA=Gf(),qf=OA,hc="$$material";function NA(t){return me.jsx(wT,{...t,defaultTheme:qf,themeId:hc})}function xA(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const DA=t=>xA(t)&&t!=="classes",ks=AT({themeId:hc,defaultTheme:qf,rootShouldForwardProp:DA});function VR(t){return function(n){return me.jsx(NA,{styles:typeof t=="function"?r=>t({theme:r,...n}):t})}}function zR(){return mf}const MA=WT;function fc(t){return BT(t)}function LA(t){return ac("MuiSvgIcon",t)}Rs("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const $A=t=>{const{color:e,fontSize:n,classes:r}=t,i={root:["root",e!=="inherit"&&`color${In(e)}`,`fontSize${In(n)}`]};return lf(i,LA,r)},FA=ks("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${In(n.color)}`],e[`fontSize${In(n.fontSize)}`]]}})(MA(({theme:t})=>{var e,n,r,i,s,o,a,c,l,d,u,h,g,p;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:(i=(e=t.transitions)==null?void 0:e.create)==null?void 0:i.call(e,"fill",{duration:(r=(n=(t.vars??t).transitions)==null?void 0:n.duration)==null?void 0:r.shorter}),variants:[{props:m=>!m.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:((o=(s=t.typography)==null?void 0:s.pxToRem)==null?void 0:o.call(s,20))||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:((c=(a=t.typography)==null?void 0:a.pxToRem)==null?void 0:c.call(a,24))||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:((d=(l=t.typography)==null?void 0:l.pxToRem)==null?void 0:d.call(l,35))||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter(([,m])=>m&&m.main).map(([m])=>{var v,w;return{props:{color:m},style:{color:(w=(v=(t.vars??t).palette)==null?void 0:v[m])==null?void 0:w.main}}}),{props:{color:"action"},style:{color:(h=(u=(t.vars??t).palette)==null?void 0:u.action)==null?void 0:h.active}},{props:{color:"disabled"},style:{color:(p=(g=(t.vars??t).palette)==null?void 0:g.action)==null?void 0:p.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}})),xo=I.forwardRef(function(e,n){const r=fc({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:c="medium",htmlColor:l,inheritViewBox:d=!1,titleAccess:u,viewBox:h="0 0 24 24",...g}=r,p=I.isValidElement(i)&&i.type==="svg",m={...r,color:o,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:d,viewBox:h,hasSvgAsChild:p},v={};d||(v.viewBox=h);const w=$A(m);return me.jsxs(FA,{as:a,className:Ee(w.root,s),focusable:"false",color:l,"aria-hidden":u?void 0:!0,role:u?"img":void 0,ref:n,...v,...g,...p&&i.props,ownerState:m,children:[p?i.props.children:i,u?me.jsx("title",{children:u}):null]})});xo.muiName="SvgIcon";function GR(t,e){function n(r,i){return me.jsx(xo,{"data-testid":void 0,ref:i,...r,children:t})}return n.muiName=xo.muiName,I.memo(I.forwardRef(n))}function oi(t){const e=I.useRef(t);return NT(()=>{e.current=t}),I.useRef((...n)=>(0,e.current)(...n)).current}function Do(...t){const e=I.useRef(void 0),n=I.useCallback(r=>{const i=t.map(s=>{if(s==null)return null;if(typeof s=="function"){const o=s,a=o(r);return typeof a=="function"?a:()=>{o(null)}}return s.current=r,()=>{s.current=null}});return()=>{i.forEach(s=>s==null?void 0:s())}},t);return I.useMemo(()=>t.every(r=>r==null)?null:r=>{e.current&&(e.current(),e.current=void 0),r!=null&&(e.current=n(r))},t)}function UA(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function Mo(t,e){return Mo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Mo(t,e)}function BA(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Mo(t,e)}const bu=Gn.createContext(null);function WA(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function pc(t,e){var n=function(s){return e&&I.isValidElement(s)?e(s):s},r=Object.create(null);return t&&I.Children.map(t,function(i){return i}).forEach(function(i){r[i.key]=n(i)}),r}function jA(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var r=Object.create(null),i=[];for(var s in t)s in e?i.length&&(r[s]=i,i=[]):i.push(s);var o,a={};for(var c in e){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];a[r[c][o]]=n(l)}a[c]=n(c)}for(o=0;o<i.length;o++)a[i[o]]=n(i[o]);return a}function Ut(t,e,n){return n[e]!=null?n[e]:t.props[e]}function HA(t,e){return pc(t.children,function(n){return I.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:Ut(n,"appear",t),enter:Ut(n,"enter",t),exit:Ut(n,"exit",t)})})}function VA(t,e,n){var r=pc(t.children),i=jA(e,r);return Object.keys(i).forEach(function(s){var o=i[s];if(I.isValidElement(o)){var a=s in e,c=s in r,l=e[s],d=I.isValidElement(l)&&!l.props.in;c&&(!a||d)?i[s]=I.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:Ut(o,"exit",t),enter:Ut(o,"enter",t)}):!c&&a&&!d?i[s]=I.cloneElement(o,{in:!1}):c&&a&&I.isValidElement(l)&&(i[s]=I.cloneElement(o,{onExited:n.bind(null,o),in:l.props.in,exit:Ut(o,"exit",t),enter:Ut(o,"enter",t)}))}}),i}var zA=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},GA={component:"div",childFactory:function(e){return e}},gc=function(t){BA(e,t);function e(r,i){var s;s=t.call(this,r,i)||this;var o=s.handleExited.bind(WA(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,s){var o=s.children,a=s.handleExited,c=s.firstRender;return{children:c?HA(i,a):VA(i,o,a),firstRender:!1}},n.handleExited=function(i,s){var o=pc(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(a){var c=ki({},a.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,s=i.component,o=i.childFactory,a=UA(i,["component","childFactory"]),c=this.state.contextValue,l=zA(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?Gn.createElement(bu.Provider,{value:c},l):Gn.createElement(bu.Provider,{value:c},Gn.createElement(s,a,l))},e}(Gn.Component);gc.propTypes={};gc.defaultProps=GA;const qA=gc,wu={};function Kf(t,e){const n=I.useRef(wu);return n.current===wu&&(n.current=t(e)),n}const KA=[];function YA(t){I.useEffect(t,KA)}class mc{constructor(){Fn(this,"currentId",null);Fn(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});Fn(this,"disposeEffect",()=>this.clear)}static create(){return new mc}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function QA(){const t=Kf(mc.create).current;return YA(t.disposeEffect),t}function XA(t){return typeof t=="string"}function JA(t,e,n){return t===void 0||XA(t)?e:{...e,ownerState:{...e.ownerState,...n}}}function ZA(t,e,n){return typeof t=="function"?t(e,n):t}function eR(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(r=>r.match(/^on[A-Z]/)&&typeof t[r]=="function"&&!e.includes(r)).forEach(r=>{n[r]=t[r]}),n}function Eu(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function tR(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:r,externalForwardedProps:i,className:s}=t;if(!e){const g=Ee(n==null?void 0:n.className,s,i==null?void 0:i.className,r==null?void 0:r.className),p={...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},m={...n,...i,...r};return g.length>0&&(m.className=g),Object.keys(p).length>0&&(m.style=p),{props:m,internalRef:void 0}}const o=eR({...i,...r}),a=Eu(r),c=Eu(i),l=e(o),d=Ee(l==null?void 0:l.className,n==null?void 0:n.className,s,i==null?void 0:i.className,r==null?void 0:r.className),u={...l==null?void 0:l.style,...n==null?void 0:n.style,...i==null?void 0:i.style,...r==null?void 0:r.style},h={...l,...n,...c,...a};return d.length>0&&(h.className=d),Object.keys(u).length>0&&(h.style=u),{props:h,internalRef:l.ref}}function qR(t,e){const{className:n,elementType:r,ownerState:i,externalForwardedProps:s,internalForwardedProps:o,shouldForwardComponentProp:a=!1,...c}=e,{component:l,slots:d={[t]:void 0},slotProps:u={[t]:void 0},...h}=s,g=d[t]||r,p=ZA(u[t],i),{props:{component:m,...v},internalRef:w}=tR({className:n,...c,externalForwardedProps:t==="root"?h:void 0,externalSlotProps:p}),T=Do(w,p==null?void 0:p.ref,e.ref),E=t==="root"?m||l:m,y=JA(g,{...t==="root"&&!l&&!d[t]&&o,...t!=="root"&&!d[t]&&o,...v,...E&&!a&&{as:E},...E&&a&&{component:E},ref:T},i);return[g,y]}function Cu(t){try{return t.matches(":focus-visible")}catch{}return!1}class Ni{constructor(){Fn(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new Ni}static use(){const e=Kf(Ni.create).current,[n,r]=I.useState(!1);return e.shouldMount=n,e.setShouldMount=r,I.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=rR(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function nR(){return Ni.use()}function rR(){let t,e;const n=new Promise((r,i)=>{t=r,e=i});return n.resolve=t,n.reject=e,n}function iR(t){const{className:e,classes:n,pulsate:r=!1,rippleX:i,rippleY:s,rippleSize:o,in:a,onExited:c,timeout:l}=t,[d,u]=I.useState(!1),h=Ee(e,n.ripple,n.rippleVisible,r&&n.ripplePulsate),g={width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},p=Ee(n.child,d&&n.childLeaving,r&&n.childPulsate);return!a&&!d&&u(!0),I.useEffect(()=>{if(!a&&c!=null){const m=setTimeout(c,l);return()=>{clearTimeout(m)}}},[c,a,l]),me.jsx("span",{className:h,style:g,children:me.jsx("span",{className:p})})}const ke=Rs("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Lo=550,sR=80,oR=sc`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,aR=sc`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,cR=sc`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,lR=ks("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),uR=ks(iR,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${ke.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${oR};
    animation-duration: ${Lo}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${ke.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${ke.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ke.childLeaving} {
    opacity: 0;
    animation-name: ${aR};
    animation-duration: ${Lo}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${ke.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${cR};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,dR=I.forwardRef(function(e,n){const r=fc({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:o,...a}=r,[c,l]=I.useState([]),d=I.useRef(0),u=I.useRef(null);I.useEffect(()=>{u.current&&(u.current(),u.current=null)},[c]);const h=I.useRef(!1),g=QA(),p=I.useRef(null),m=I.useRef(null),v=I.useCallback(y=>{const{pulsate:C,rippleX:A,rippleY:R,rippleSize:Y,cb:H}=y;l(f=>[...f,me.jsx(uR,{classes:{ripple:Ee(s.ripple,ke.ripple),rippleVisible:Ee(s.rippleVisible,ke.rippleVisible),ripplePulsate:Ee(s.ripplePulsate,ke.ripplePulsate),child:Ee(s.child,ke.child),childLeaving:Ee(s.childLeaving,ke.childLeaving),childPulsate:Ee(s.childPulsate,ke.childPulsate)},timeout:Lo,pulsate:C,rippleX:A,rippleY:R,rippleSize:Y},d.current)]),d.current+=1,u.current=H},[s]),w=I.useCallback((y={},C={},A=()=>{})=>{const{pulsate:R=!1,center:Y=i||C.pulsate,fakeElement:H=!1}=C;if((y==null?void 0:y.type)==="mousedown"&&h.current){h.current=!1;return}(y==null?void 0:y.type)==="touchstart"&&(h.current=!0);const f=H?null:m.current,S=f?f.getBoundingClientRect():{width:0,height:0,left:0,top:0};let O,M,X;if(Y||y===void 0||y.clientX===0&&y.clientY===0||!y.clientX&&!y.touches)O=Math.round(S.width/2),M=Math.round(S.height/2);else{const{clientX:pe,clientY:Te}=y.touches&&y.touches.length>0?y.touches[0]:y;O=Math.round(pe-S.left),M=Math.round(Te-S.top)}if(Y)X=Math.sqrt((2*S.width**2+S.height**2)/3),X%2===0&&(X+=1);else{const pe=Math.max(Math.abs((f?f.clientWidth:0)-O),O)*2+2,Te=Math.max(Math.abs((f?f.clientHeight:0)-M),M)*2+2;X=Math.sqrt(pe**2+Te**2)}y!=null&&y.touches?p.current===null&&(p.current=()=>{v({pulsate:R,rippleX:O,rippleY:M,rippleSize:X,cb:A})},g.start(sR,()=>{p.current&&(p.current(),p.current=null)})):v({pulsate:R,rippleX:O,rippleY:M,rippleSize:X,cb:A})},[i,v,g]),T=I.useCallback(()=>{w({},{pulsate:!0})},[w]),E=I.useCallback((y,C)=>{if(g.clear(),(y==null?void 0:y.type)==="touchend"&&p.current){p.current(),p.current=null,g.start(0,()=>{E(y,C)});return}p.current=null,l(A=>A.length>0?A.slice(1):A),u.current=C},[g]);return I.useImperativeHandle(n,()=>({pulsate:T,start:w,stop:E}),[T,w,E]),me.jsx(lR,{className:Ee(ke.root,s.root,o),ref:m,...a,children:me.jsx(qA,{component:null,exit:!0,children:c})})}),hR=dR;function fR(t){return ac("MuiButtonBase",t)}const pR=Rs("MuiButtonBase",["root","disabled","focusVisible"]),gR=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:r,classes:i}=t,o=lf({root:["root",e&&"disabled",n&&"focusVisible"]},fR,i);return n&&r&&(o.root+=` ${r}`),o},mR=ks("button",{name:"MuiButtonBase",slot:"Root"})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${pR.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),_R=I.forwardRef(function(e,n){const r=fc({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:o,className:a,component:c="button",disabled:l=!1,disableRipple:d=!1,disableTouchRipple:u=!1,focusRipple:h=!1,focusVisibleClassName:g,LinkComponent:p="a",onBlur:m,onClick:v,onContextMenu:w,onDragLeave:T,onFocus:E,onFocusVisible:y,onKeyDown:C,onKeyUp:A,onMouseDown:R,onMouseLeave:Y,onMouseUp:H,onTouchEnd:f,onTouchMove:S,onTouchStart:O,tabIndex:M=0,TouchRippleProps:X,touchRippleRef:pe,type:Te,...gt}=r,mt=I.useRef(null),ue=nR(),Yf=Do(ue.ref,pe),[xt,Hr]=I.useState(!1);l&&xt&&Hr(!1),I.useImperativeHandle(i,()=>({focusVisible:()=>{Hr(!0),mt.current.focus()}}),[]);const Qf=ue.shouldMount&&!d&&!l;I.useEffect(()=>{xt&&h&&!d&&ue.pulsate()},[d,h,xt,ue]);const Xf=Ze(ue,"start",R,u),Jf=Ze(ue,"stop",w,u),Zf=Ze(ue,"stop",T,u),ep=Ze(ue,"stop",H,u),tp=Ze(ue,"stop",N=>{xt&&N.preventDefault(),Y&&Y(N)},u),np=Ze(ue,"start",O,u),rp=Ze(ue,"stop",f,u),ip=Ze(ue,"stop",S,u),sp=Ze(ue,"stop",N=>{Cu(N.target)||Hr(!1),m&&m(N)},!1),op=oi(N=>{mt.current||(mt.current=N.currentTarget),Cu(N.target)&&(Hr(!0),y&&y(N)),E&&E(N)}),Os=()=>{const N=mt.current;return c&&c!=="button"&&!(N.tagName==="A"&&N.href)},ap=oi(N=>{h&&!N.repeat&&xt&&N.key===" "&&ue.stop(N,()=>{ue.start(N)}),N.target===N.currentTarget&&Os()&&N.key===" "&&N.preventDefault(),C&&C(N),N.target===N.currentTarget&&Os()&&N.key==="Enter"&&!l&&(N.preventDefault(),v&&v(N))}),cp=oi(N=>{h&&N.key===" "&&xt&&!N.defaultPrevented&&ue.stop(N,()=>{ue.pulsate(N)}),A&&A(N),v&&N.target===N.currentTarget&&Os()&&N.key===" "&&!N.defaultPrevented&&v(N)});let Vr=c;Vr==="button"&&(gt.href||gt.to)&&(Vr=p);const $n={};Vr==="button"?($n.type=Te===void 0?"button":Te,$n.disabled=l):(!gt.href&&!gt.to&&($n.role="button"),l&&($n["aria-disabled"]=l));const lp=Do(n,mt),_c={...r,centerRipple:s,component:c,disabled:l,disableRipple:d,disableTouchRipple:u,focusRipple:h,tabIndex:M,focusVisible:xt},up=gR(_c);return me.jsxs(mR,{as:Vr,className:Ee(up.root,a),ownerState:_c,onBlur:sp,onClick:v,onContextMenu:Jf,onFocus:op,onKeyDown:ap,onKeyUp:cp,onMouseDown:Xf,onMouseLeave:tp,onMouseUp:ep,onDragLeave:Zf,onTouchEnd:rp,onTouchMove:ip,onTouchStart:np,ref:lp,tabIndex:l?-1:M,type:Te,...$n,...gt,children:[o,Qf?me.jsx(hR,{ref:Yf,center:s,...X}):null]})});function Ze(t,e,n,r=!1){return oi(i=>(n&&n(i),r||t[e](i),!0))}const KR=_R;function yR(t){return typeof t.main=="string"}function vR(t,e=[]){if(!yR(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function YR(t=[]){return([,e])=>e&&vR(e,t)}const bR=Rs("MuiBox",["root"]),wR=bR,ER=Gf(),CR=ET({themeId:hc,defaultTheme:ER,defaultClassName:wR.root,generateClassName:af.generate}),QR=CR;export{vt as $,cy as A,QR as B,FR as C,HR as D,TR as E,$R as F,dT as G,UR as H,KR as I,DA as J,qf as K,cs as L,$T as M,Cu as N,at as O,pp as P,jR as Q,Qa as R,Se as S,ic as T,WR as U,mf as V,Br as W,kR as X,AR as Y,PR as Z,RR as _,NT as a,NR as a0,Nt as a1,lc as a2,uc as a3,Do as a4,oi as a5,QA as a6,eR as a7,FT as a8,Lf as a9,AT as aa,ko as ab,sS as ac,DR as ad,MR as ae,Xt as af,xA as ag,BA as ah,UA as ai,bu as aj,wA as ak,sc as al,iT as am,BR as an,ZA as ao,tR as ap,JA as aq,zR as ar,In as b,oc as c,Ee as d,lf as e,GR as f,ac as g,hc as h,Gf as i,lA as j,Rs as k,ks as l,MA as m,fc as n,YR as o,VR as p,qR as q,xR as r,Jt as s,ln as t,vT as u,sn as v,OR as w,LR as x,Ha as y,za as z};
//# sourceMappingURL=Box-DiLVRXed.js.map
