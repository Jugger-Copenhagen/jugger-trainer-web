import{r as de,D as nc,o as yr}from"./chunk-LFPYN7LY-42L3dXPP.js";const Gf={firebase:{apiKey:"AIzaSyBZJmUnbSqufRL64CSzdJMpy3hlRshd-9Q",authDomain:"juggertrainer.firebaseapp.com",databaseURL:"https://juggertrainer.firebaseio.com",projectId:"juggertrainer",storageBucket:"juggertrainer.appspot.com",messagingSenderId:"103859061629",appId:"1:103859061629:web:eff53ba99a8251f65cc214",measurementId:"G-KN7W5GRDM4"}},zf=2147483647;function So(t){return[t[Math.floor(Math.random()*11)],t[Math.floor(Math.random()*11)]]}function wA(t){const e=So(t);return{exertionLevel:"EASY",howToPlay:"",name:"",originCountry:"CA",playersMin:2,playersMax:zf,tags:[],images:e}}var rc={};/**
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
 */const lu={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const b=function(t,e){if(!t)throw En(e)},En=function(t){return new Error("Firebase Database ("+lu.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const uu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,h=s>>2,u=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[h],n[u],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||u==null)throw new Kf;const d=s<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const p=l<<6&192|u;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hu=function(t){const e=uu(t);return Ro.encodeByteArray(e,!0)},Zr=function(t){return hu(t).replace(/\./g,"")},ei=function(t){try{return Ro.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yf(t){return du(void 0,t)}function du(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Qf(n)||(t[n]=du(t[n],e[n]));return t}function Qf(t){return t!=="__proto__"}/**
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
 */function Xf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jf=()=>Xf().__FIREBASE_DEFAULTS__,Zf=()=>{if(typeof process>"u"||typeof rc>"u")return;const t=rc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ep=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ei(t[1]);return e&&JSON.parse(e)},Ao=()=>{try{return Jf()||Zf()||ep()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fu=t=>{var e,n;return(n=(e=Ao())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pu=t=>{const e=fu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gu=()=>{var t;return(t=Ao())===null||t===void 0?void 0:t.config},mu=t=>{var e;return(e=Ao())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Zr(JSON.stringify(n)),Zr(JSON.stringify(o)),""].join(".")}/**
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
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ko(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function tp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function np(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vu(){return lu.NODE_ADMIN===!0}function rp(){try{return typeof indexedDB=="object"}catch{return!1}}function ip(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const sp="FirebaseError";class it extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sp,Object.setPrototypeOf(this,it.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?op(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new it(i,a,r)}}function op(t,e){return t.replace(ap,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ap=/\{\$([^}]+)}/g;/**
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
 */function Xn(t){return JSON.parse(t)}function ie(t){return JSON.stringify(t)}/**
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
 */const bu=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Xn(ei(s[0])||""),n=Xn(ei(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},cp=function(t){const e=bu(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lp=function(t){const e=bu(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ke(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function pn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Vs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ni(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ic(s)&&ic(o)){if(!ni(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ic(t){return t!==null&&typeof t=="object"}/**
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
 */function Cn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Wn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class up{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,h;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),h=1518500249):(l=s^o^a,h=1859775393):u<60?(l=s&o|a&(s|o),h=2400959708):(l=s^o^a,h=3395469782);const d=(i<<5|i>>>27)+l+c+h+r[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function hp(t,e){const n=new dp(t,e);return n.subscribe.bind(n)}class dp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fp(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ws),i.error===void 0&&(i.error=ws),i.complete===void 0&&(i.complete=ws);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ws(){}function Ci(t,e){return`${t} failed: ${e} argument `}/**
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
 */const pp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,b(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ii=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class It{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const kt="[DEFAULT]";/**
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
 */class gp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_p(e))try{this.getOrInitializeService({instanceIdentifier:kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kt){return this.instances.has(e)}getOptions(e=kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kt){return this.component?this.component.multipleInstances?e:kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mp(t){return t===kt?void 0:t}function _p(t){return t.instantiationMode==="EAGER"}/**
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
 */class yp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const vp={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},bp=$.INFO,wp={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Ep=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wp[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Po{constructor(e){this.name=e,this._logLevel=bp,this._logHandler=Ep,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Cp=(t,e)=>e.some(n=>t instanceof n);let sc,oc;function Ip(){return sc||(sc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tp(){return oc||(oc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wu=new WeakMap,Gs=new WeakMap,Eu=new WeakMap,Es=new WeakMap,Oo=new WeakMap;function Sp(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(bt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wu.set(n,t)}).catch(()=>{}),Oo.set(e,t),e}function Rp(t){if(Gs.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gs.set(t,e)}let zs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Eu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ap(t){zs=t(zs)}function kp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Cs(this),e,...n);return Eu.set(r,e.sort?e.sort():[e]),bt(r)}:Tp().includes(t)?function(...e){return t.apply(Cs(this),e),bt(wu.get(this))}:function(...e){return bt(t.apply(Cs(this),e))}}function Pp(t){return typeof t=="function"?kp(t):(t instanceof IDBTransaction&&Rp(t),Cp(t,Ip())?new Proxy(t,zs):t)}function bt(t){if(t instanceof IDBRequest)return Sp(t);if(Es.has(t))return Es.get(t);const e=Pp(t);return e!==t&&(Es.set(t,e),Oo.set(e,t)),e}const Cs=t=>Oo.get(t);function Op(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=bt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bt(o.result),c.oldVersion,c.newVersion,bt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Np=["get","getKey","getAll","getAllKeys","count"],xp=["put","add","delete","clear"],Is=new Map;function ac(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Is.get(e))return Is.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=xp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Np.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Is.set(e,s),s}Ap(t=>({...t,get:(e,n,r)=>ac(e,n)||t.get(e,n,r),has:(e,n)=>!!ac(e,n)||t.has(e,n)}));/**
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
 */class Dp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qs="@firebase/app",cc="0.9.29";/**
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
 */const Ft=new Po("@firebase/app"),Lp="@firebase/app-compat",Fp="@firebase/analytics-compat",$p="@firebase/analytics",Up="@firebase/app-check-compat",Bp="@firebase/app-check",Wp="@firebase/auth",Hp="@firebase/auth-compat",jp="@firebase/database",Vp="@firebase/database-compat",Gp="@firebase/functions",zp="@firebase/functions-compat",qp="@firebase/installations",Kp="@firebase/installations-compat",Yp="@firebase/messaging",Qp="@firebase/messaging-compat",Xp="@firebase/performance",Jp="@firebase/performance-compat",Zp="@firebase/remote-config",eg="@firebase/remote-config-compat",tg="@firebase/storage",ng="@firebase/storage-compat",rg="@firebase/firestore",ig="@firebase/firestore-compat",sg="firebase",og="10.9.0";/**
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
 */const Ks="[DEFAULT]",ag={[qs]:"fire-core",[Lp]:"fire-core-compat",[$p]:"fire-analytics",[Fp]:"fire-analytics-compat",[Bp]:"fire-app-check",[Up]:"fire-app-check-compat",[Wp]:"fire-auth",[Hp]:"fire-auth-compat",[jp]:"fire-rtdb",[Vp]:"fire-rtdb-compat",[Gp]:"fire-fn",[zp]:"fire-fn-compat",[qp]:"fire-iid",[Kp]:"fire-iid-compat",[Yp]:"fire-fcm",[Qp]:"fire-fcm-compat",[Xp]:"fire-perf",[Jp]:"fire-perf-compat",[Zp]:"fire-rc",[eg]:"fire-rc-compat",[tg]:"fire-gcs",[ng]:"fire-gcs-compat",[rg]:"fire-fst",[ig]:"fire-fst-compat","fire-js":"fire-js",[sg]:"fire-js-all"};/**
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
 */const ri=new Map,Ys=new Map;function cg(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $t(t){const e=t.name;if(Ys.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;Ys.set(e,t);for(const n of ri.values())cg(n,t);return!0}function Ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wt=new br("app","Firebase",lg);/**
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
 */class ug{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Kt=og;function Cu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ks,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(n||(n=gu()),!n)throw wt.create("no-options");const s=ri.get(i);if(s){if(ni(n,s.options)&&ni(r,s.config))return s;throw wt.create("duplicate-app",{appName:i})}const o=new yp(i);for(const c of Ys.values())o.addComponent(c);const a=new ug(n,r,o);return ri.set(i,a),a}function No(t=Ks){const e=ri.get(t);if(!e&&t===Ks&&gu())return Cu();if(!e)throw wt.create("no-app",{appName:t});return e}function He(t,e,n){var r;let i=(r=ag[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}$t(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hg="firebase-heartbeat-database",dg=1,Jn="firebase-heartbeat-store";let Ts=null;function Iu(){return Ts||(Ts=Op(hg,dg,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jn)}catch(n){console.warn(n)}}}}).catch(t=>{throw wt.create("idb-open",{originalErrorMessage:t.message})})),Ts}async function fg(t){try{const n=(await Iu()).transaction(Jn),r=await n.objectStore(Jn).get(Tu(t));return await n.done,r}catch(e){if(e instanceof it)Ft.warn(e.message);else{const n=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function lc(t,e){try{const r=(await Iu()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(e,Tu(t)),await r.done}catch(n){if(n instanceof it)Ft.warn(n.message);else{const r=wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(r.message)}}}function Tu(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pg=1024,gg=30*24*60*60*1e3;class mg{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=uc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=uc(),{heartbeatsToSend:r,unsentEntries:i}=_g(this._heartbeatsCache.heartbeats),s=Zr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function uc(){return new Date().toISOString().substring(0,10)}function _g(t,e=pg){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),hc(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),hc(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rp()?ip().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fg(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function hc(t){return Zr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function vg(t){$t(new It("platform-logger",e=>new Dp(e),"PRIVATE")),$t(new It("heartbeat",e=>new mg(e),"PRIVATE")),He(qs,cc,t),He(qs,cc,"esm2017"),He("fire-js","")}vg("");var bg="firebase",wg="10.9.0";/**
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
 */He(bg,wg,"app");function xo(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Su(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eg=Su,Ru=new br("auth","Firebase",Su());/**
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
 */const ii=new Po("@firebase/auth");function Cg(t,...e){ii.logLevel<=$.WARN&&ii.warn(`Auth (${Kt}): ${t}`,...e)}function Gr(t,...e){ii.logLevel<=$.ERROR&&ii.error(`Auth (${Kt}): ${t}`,...e)}/**
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
 */function Pe(t,...e){throw Do(t,...e)}function je(t,...e){return Do(t,...e)}function Au(t,e,n){const r=Object.assign(Object.assign({},Eg()),{[e]:n});return new br("auth","Firebase",r).create(e,{appName:t.name})}function Ig(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Pe(t,"argument-error"),Au(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Do(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ru.create(t,...e)}function S(t,e,...n){if(!t)throw Do(e,...n)}function Qe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gr(e),new Error(e)}function tt(t,e){t||Qe(e)}/**
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
 */function Qs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Tg(){return dc()==="http:"||dc()==="https:"}function dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Sg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Tg()||tp()||"connection"in navigator)?navigator.onLine:!0}function Rg(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class wr{constructor(e,n){this.shortDelay=e,this.longDelay=n,tt(n>e,"Short delay should be less than long delay!"),this.isMobile=ko()||yu()}get(){return Sg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mo(t,e){tt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ku{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ag={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const kg=new wr(3e4,6e4);function st(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ot(t,e,n,r,i={}){return Pu(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Cn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ku.fetch()(Ou(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Pu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ag),e);try{const i=new Og(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Mr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Mr(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Au(t,h,l);Pe(t,h)}}catch(i){if(i instanceof it)throw i;Pe(t,"network-request-failed",{message:String(i)})}}async function Er(t,e,n,r,i={}){const s=await ot(t,e,n,r,i);return"mfaPendingCredential"in s&&Pe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ou(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mo(t.config,i):`${t.config.apiScheme}://${i}`}function Pg(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Og{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(je(this.auth,"network-request-failed")),kg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=je(t,e,r);return i.customData._tokenResponse=n,i}function fc(t){return t!==void 0&&t.enterprise!==void 0}class Ng{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Pg(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xg(t,e){return ot(t,"GET","/v2/recaptchaConfig",st(t,e))}/**
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
 */async function Dg(t,e){return ot(t,"POST","/v1/accounts:delete",e)}async function Mg(t,e){return ot(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Lg(t,e=!1){const n=ne(t),r=await n.getIdToken(e),i=Lo(r);S(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vn(Ss(i.auth_time)),issuedAtTime:Vn(Ss(i.iat)),expirationTime:Vn(Ss(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ss(t){return Number(t)*1e3}function Lo(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gr("JWT malformed, contained fewer than 3 sections"),null;try{const i=ei(n);return i?JSON.parse(i):(Gr("Failed to decode base64 JWT payload"),null)}catch(i){return Gr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fg(t){const e=Lo(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof it&&$g(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $g({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ug{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function er(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zn(t,Mg(n,{idToken:r}));S(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Hg(s.providerUserInfo):[],a=Wg(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nu(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,u)}async function Bg(t){const e=ne(t);await er(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wg(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Hg(t){return t.map(e=>{var{providerId:n}=e,r=xo(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jg(t,e){const n=await Pu(t,{},async()=>{const r=Cn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ou(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ku.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Vg(t,e){return ot(t,"POST","/v2/accounts:revokeToken",st(t,e))}/**
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
 */class tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jg(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new tr;return r&&(S(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(S(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tr,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function pt(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=xo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ug(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Lg(this,e)}reload(){return Bg(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await er(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,Dg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,l,h;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,w=(l=n.createdAt)!==null&&l!==void 0?l:void 0,T=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:y,isAnonymous:C,providerData:R,stsTokenManager:A}=n;S(E&&A,e,"internal-error");const J=tr.fromJSON(this.name,A);S(typeof E=="string",e,"internal-error"),pt(u,e.name),pt(d,e.name),S(typeof y=="boolean",e,"internal-error"),S(typeof C=="boolean",e,"internal-error"),pt(g,e.name),pt(p,e.name),pt(_,e.name),pt(v,e.name),pt(w,e.name),pt(T,e.name);const Z=new Dt({uid:E,auth:e,email:d,emailVerified:y,displayName:u,isAnonymous:C,photoURL:p,phoneNumber:g,tenantId:_,stsTokenManager:J,createdAt:w,lastLoginAt:T});return R&&Array.isArray(R)&&(Z.providerData=R.map(f=>Object.assign({},f))),v&&(Z._redirectEventId=v),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new tr;i.updateFromServerResponse(n);const s=new Dt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await er(s),s}}/**
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
 */const pc=new Map;function Xe(t){tt(t instanceof Function,"Expected a class definition");let e=pc.get(t);return e?(tt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pc.set(t,e),e)}/**
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
 */class xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xu.type="NONE";const gc=xu;/**
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
 */function zr(t,e,n){return`firebase:${t}:${e}:${n}`}class an{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zr(this.userKey,i.apiKey,s),this.fullPersistenceKey=zr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Dt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new an(Xe(gc),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Xe(gc);const o=zr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const h=await l._get(o);if(h){const u=Dt._fromJSON(e,h);l!==s&&(a=u),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new an(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new an(s,e,r))}}/**
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
 */function mc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Du(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($u(e))return"Blackberry";if(Uu(e))return"Webos";if(Fo(e))return"Safari";if((e.includes("chrome/")||Mu(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Du(t=ge()){return/firefox\//i.test(t)}function Fo(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mu(t=ge()){return/crios\//i.test(t)}function Lu(t=ge()){return/iemobile/i.test(t)}function Fu(t=ge()){return/android/i.test(t)}function $u(t=ge()){return/blackberry/i.test(t)}function Uu(t=ge()){return/webos/i.test(t)}function Si(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gg(t=ge()){var e;return Si(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zg(){return np()&&document.documentMode===10}function Bu(t=ge()){return Si(t)||Fu(t)||Uu(t)||$u(t)||/windows phone/i.test(t)||Lu(t)}function qg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wu(t,e=[]){let n;switch(t){case"Browser":n=mc(ge());break;case"Worker":n=`${mc(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Kt}/${r}`}/**
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
 */class Kg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Yg(t,e={}){return ot(t,"GET","/v2/passwordPolicy",st(t,e))}/**
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
 */const Qg=6;class Xg{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Qg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Jg{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _c(this),this.idTokenSubscription=new _c(this),this.beforeStateQueue=new Kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ru,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await er(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Rg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ne(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yg(this),n=new Xg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Vg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function at(t){return ne(t)}class _c{constructor(e){this.auth=e,this.observer=null,this.addObserver=hp(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ri={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zg(t){Ri=t}function Hu(t){return Ri.loadJS(t)}function em(){return Ri.recaptchaEnterpriseScript}function tm(){return Ri.gapiScript}function nm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rm="recaptcha-enterprise",im="NO_RECAPTCHA";class sm{constructor(e){this.type=rm,this.auth=at(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{xg(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Ng(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;fc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(im)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=em();c.length!==0&&(c+=a),Hu(c).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function yc(t,e,n,r=!1){const i=new sm(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function si(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yc(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yc(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function om(t,e){const n=Ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ni(s,e??{}))return i;Pe(i,"already-initialized")}return n.initialize({options:e})}function am(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cm(t,e,n){const r=at(t);S(r._canInitEmulator,r,"emulator-config-failed"),S(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ju(e),{host:o,port:a}=lm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||um()}function ju(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lm(t){const e=ju(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vc(o)}}}function vc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function um(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $o{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(e){return Qe("not implemented")}_linkToIdToken(e,n){return Qe("not implemented")}_getReauthenticationResolver(e){return Qe("not implemented")}}async function hm(t,e){return ot(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function dm(t,e){return Er(t,"POST","/v1/accounts:signInWithPassword",st(t,e))}async function fm(t,e){return ot(t,"POST","/v1/accounts:sendOobCode",st(t,e))}async function pm(t,e){return fm(t,e)}/**
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
 */async function gm(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}async function mm(t,e){return Er(t,"POST","/v1/accounts:signInWithEmailLink",st(t,e))}/**
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
 */class nr extends $o{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,n,"signInWithPassword",dm);case"emailLink":return gm(e,{email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,r,"signUpPassword",hm);case"emailLink":return mm(e,{idToken:n,email:this._email,oobCode:this._password});default:Pe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function cn(t,e){return Er(t,"POST","/v1/accounts:signInWithIdp",st(t,e))}/**
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
 */const _m="http://localhost";class Ut extends $o{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=xo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ut(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return cn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,cn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cn(e,n)}buildRequest(){const e={requestUri:_m,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cn(n)}return e}}/**
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
 */function ym(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vm(t){const e=Bn(Wn(t)).link,n=e?Bn(Wn(e)).deep_link_id:null,r=Bn(Wn(t)).deep_link_id;return(r?Bn(Wn(r)).link:null)||r||n||e||t}class Uo{constructor(e){var n,r,i,s,o,a;const c=Bn(Wn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,u=ym((i=c.mode)!==null&&i!==void 0?i:null);S(l&&h&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vm(e);try{return new Uo(n)}catch{return null}}}/**
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
 */class In{constructor(){this.providerId=In.PROVIDER_ID}static credential(e,n){return nr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uo.parseLink(n);return S(r,"argument-error"),nr._fromEmailAndCode(e,r.code,r.tenantId)}}In.PROVIDER_ID="password";In.EMAIL_PASSWORD_SIGN_IN_METHOD="password";In.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Bo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cr extends Bo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gt extends Cr{constructor(){super("facebook.com")}static credential(e){return Ut._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
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
 */class mt extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ut._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mt.credential(n,r)}catch{return null}}}mt.GOOGLE_SIGN_IN_METHOD="google.com";mt.PROVIDER_ID="google.com";/**
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
 */class _t extends Cr{constructor(){super("github.com")}static credential(e){return Ut._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
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
 */class yt extends Cr{constructor(){super("twitter.com")}static credential(e,n){return Ut._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yt.credential(n,r)}catch{return null}}}yt.TWITTER_SIGN_IN_METHOD="twitter.com";yt.PROVIDER_ID="twitter.com";/**
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
 */async function bm(t,e){return Er(t,"POST","/v1/accounts:signUp",st(t,e))}/**
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
 */class Bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Dt._fromIdTokenResponse(e,r,i),o=bc(r);return new Bt({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bc(r);return new Bt({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oi extends it{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oi(e,n,r,i)}}function Vu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function wm(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}async function Gu(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bt._forOperation(t,"link",r)}async function Em(t,e,n){await er(e);const r=wm(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";S(r.has(n)===t,e.auth,i)}/**
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
 */async function Cm(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zn(t,Vu(r,i,e,t),n);S(s.idToken,r,"internal-error");const o=Lo(s.idToken);S(o,r,"internal-error");const{sub:a}=o;return S(t.uid===a,r,"user-mismatch"),Bt._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Pe(r,"user-mismatch"),s}}/**
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
 */async function zu(t,e,n=!1){const r="signIn",i=await Vu(t,r,e),s=await Bt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Im(t,e){return zu(at(t),e)}async function EA(t,e){const n=ne(t);return await Em(!1,n,e.providerId),Gu(n,e)}/**
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
 */function Tm(t,e,n){var r;S(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function qu(t){const e=at(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CA(t,e,n){const r=at(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Tm(r,i,n),await si(r,i,"getOobCode",pm)}async function IA(t,e,n){const r=at(t),o=await si(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qu(t),c}),a=await Bt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function TA(t,e,n){return Im(ne(t),In.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qu(t),r})}function Sm(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function Rm(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function SA(t,e,n,r){return ne(t).onAuthStateChanged(e,n,r)}const ai="__sak";/**
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
 */class Ku{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ai,"1"),this.storage.removeItem(ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Am(){const t=ge();return Fo(t)||Si(t)}const km=1e3,Pm=10;class Yu extends Ku{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Am()&&qg(),this.fallbackToPolling=Bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);zg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pm):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yu.type="LOCAL";const Om=Yu;/**
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
 */class Qu extends Ku{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qu.type="SESSION";const Xu=Qu;/**
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
 */function Nm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ai{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ai(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await Nm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ai.receivers=[];/**
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
 */function Wo(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class xm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Wo("",20);i.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ve(){return window}function Dm(t){Ve().location.href=t}/**
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
 */function Ju(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function Mm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fm(){return Ju()?self:null}/**
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
 */const Zu="firebaseLocalStorageDb",$m=1,ci="firebaseLocalStorage",eh="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ki(t,e){return t.transaction([ci],e?"readwrite":"readonly").objectStore(ci)}function Um(){const t=indexedDB.deleteDatabase(Zu);return new Ir(t).toPromise()}function Xs(){const t=indexedDB.open(Zu,$m);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ci,{keyPath:eh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ci)?e(r):(r.close(),await Um(),e(await Xs()))})})}async function wc(t,e,n){const r=ki(t,!0).put({[eh]:e,value:n});return new Ir(r).toPromise()}async function Bm(t,e){const n=ki(t,!1).get(e),r=await new Ir(n).toPromise();return r===void 0?null:r.value}function Ec(t,e){const n=ki(t,!0).delete(e);return new Ir(n).toPromise()}const Wm=800,Hm=3;class th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Hm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ju()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ai._getInstance(Fm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mm(),!this.activeServiceWorker)return;this.sender=new xm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xs();return await wc(e,ai,"1"),await Ec(e,ai),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Bm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ec(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ki(i,!1).getAll();return new Ir(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}th.type="LOCAL";const jm=th;new wr(3e4,6e4);/**
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
 */function nh(t,e){return e?Xe(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ho extends $o{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vm(t){return zu(t.auth,new Ho(t),t.bypassAuthState)}function Gm(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Cm(n,new Ho(t),t.bypassAuthState)}async function zm(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Gu(n,new Ho(t),t.bypassAuthState)}/**
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
 */class rh{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vm;case"linkViaPopup":case"linkViaRedirect":return zm;case"reauthViaPopup":case"reauthViaRedirect":return Gm;default:Pe(this.auth,"internal-error")}}resolve(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qm=new wr(2e3,1e4);async function RA(t,e,n){const r=at(t);Ig(t,e,Bo);const i=nh(r,n);return new Nt(r,"signInViaPopup",e,i).executeNotNull()}class Nt extends rh{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nt.currentPopupAction&&Nt.currentPopupAction.cancel(),Nt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){tt(this.filter.length===1,"Popup operations only handle one event");const e=Wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qm.get())};e()}}Nt.currentPopupAction=null;/**
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
 */const Km="pendingRedirect",qr=new Map;class Ym extends rh{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qr.get(this.auth._key());if(!e){try{const r=await Qm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qr.set(this.auth._key(),e)}return this.bypassAuthState||qr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qm(t,e){const n=Zm(e),r=Jm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Xm(t,e){qr.set(t._key(),e)}function Jm(t){return Xe(t._redirectPersistence)}function Zm(t){return zr(Km,t.config.apiKey,t.name)}async function e_(t,e,n=!1){const r=at(t),i=nh(r,e),o=await new Ym(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const t_=10*60*1e3;class n_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ih(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(je(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=t_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cc(e))}saveEventToCache(e){this.cachedEventUids.add(Cc(e)),this.lastProcessedEventTime=Date.now()}}function Cc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ih({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(t);default:return!1}}/**
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
 */async function i_(t,e={}){return ot(t,"GET","/v1/projects",e)}/**
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
 */const s_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,o_=/^https?/;async function a_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await i_(t);for(const n of e)try{if(c_(n))return}catch{}Pe(t,"unauthorized-domain")}function c_(t){const e=Qs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!o_.test(n))return!1;if(s_.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const l_=new wr(3e4,6e4);function Ic(){const t=Ve().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function u_(t){return new Promise((e,n)=>{var r,i,s;function o(){Ic(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ic(),n(je(t,"network-request-failed"))},timeout:l_.get()})}if(!((i=(r=Ve().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ve().gapi)===null||s===void 0)&&s.load)o();else{const a=nm("iframefcb");return Ve()[a]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},Hu(`${tm()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Kr=null,e})}let Kr=null;function h_(t){return Kr=Kr||u_(t),Kr}/**
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
 */const d_=new wr(5e3,15e3),f_="__/auth/iframe",p_="emulator/auth/iframe",g_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},m_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function __(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mo(e,p_):`https://${t.config.authDomain}/${f_}`,r={apiKey:e.apiKey,appName:t.name,v:Kt},i=m_.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Cn(r).slice(1)}`}async function y_(t){const e=await h_(t),n=Ve().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:__(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:g_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),a=Ve().setTimeout(()=>{s(o)},d_.get());function c(){Ve().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const v_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b_=500,w_=600,E_="_blank",C_="http://localhost";class Tc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function I_(t,e,n,r=b_,i=w_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},v_),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ge().toLowerCase();n&&(a=Mu(l)?E_:n),Du(l)&&(e=e||C_,c.scrollbars="yes");const h=Object.entries(c).reduce((d,[g,p])=>`${d}${g}=${p},`,"");if(Gg(l)&&a!=="_self")return T_(e||"",a),new Tc(null);const u=window.open(e||"",a,h);S(u,t,"popup-blocked");try{u.focus()}catch{}return new Tc(u)}function T_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const S_="__/auth/handler",R_="emulator/auth/handler",A_=encodeURIComponent("fac");async function Sc(t,e,n,r,i,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Kt,eventId:i};if(e instanceof Bo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Vs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(s||{}))o[h]=u}if(e instanceof Cr){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),l=c?`#${A_}=${encodeURIComponent(c)}`:"";return`${k_(t)}?${Cn(a).slice(1)}${l}`}function k_({config:t}){return t.emulator?Mo(t,R_):`https://${t.authDomain}/${S_}`}/**
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
 */const Rs="webStorageSupport";class P_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xu,this._completeRedirectFn=e_,this._overrideRedirectResult=Xm}async _openPopup(e,n,r,i){var s;tt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Sc(e,n,r,Qs(),i);return I_(e,o,Wo())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sc(e,n,r,Qs(),i);return Dm(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(tt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await y_(e),r=new n_(e);return n.register("authEvent",i=>(S(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rs,{type:Rs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Rs];o!==void 0&&n(!!o),Pe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=a_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bu()||Fo()||Si()}}const O_=P_;var Rc="@firebase/auth",Ac="1.6.2";/**
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
 */class N_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function x_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function D_(t){$t(new It("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wu(t)},l=new Jg(r,i,s,c);return am(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$t(new It("auth-internal",e=>{const n=at(e.getProvider("auth").getImmediate());return(r=>new N_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Rc,Ac,x_(t)),He(Rc,Ac,"esm2017")}/**
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
 */const M_=5*60,L_=mu("authIdTokenMaxAge")||M_;let kc=null;const F_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>L_)return;const i=n==null?void 0:n.token;kc!==i&&(kc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $_(t=No()){const e=Ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=om(t,{popupRedirectResolver:O_,persistence:[jm,Om,Xu]}),r=mu("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const s=F_(r);Rm(n,s,()=>s(n.currentUser)),Sm(n,o=>s(o))}const i=fu("auth");return i&&cm(n,`http://${i}`),n}function U_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Zg({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=je("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",U_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});D_("Browser");var Pc={};const Oc="@firebase/database",Nc="1.0.3";/**
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
 */let sh="";function B_(t){sh=t}/**
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
 */class W_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class H_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ke(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const oh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new W_(e)}}catch{}return new H_},xt=oh("localStorage"),Js=oh("sessionStorage");/**
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
 */const ln=new Po("@firebase/database"),j_=function(){let t=1;return function(){return t++}}(),ah=function(t){const e=pp(t),n=new up;n.update(e);const r=n.digest();return Ro.encodeByteArray(r)},Tr=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Tr.apply(null,r):typeof r=="object"?e+=ie(r):e+=r,e+=" "}return e};let Mt=null,xc=!0;const V_=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ln.logLevel=$.VERBOSE,Mt=ln.log.bind(ln),e&&Js.set("logging_enabled",!0)):typeof t=="function"?Mt=t:(Mt=null,Js.remove("logging_enabled"))},he=function(...t){if(xc===!0&&(xc=!1,Mt===null&&Js.get("logging_enabled")===!0&&V_(!0)),Mt){const e=Tr.apply(null,t);Mt(e)}},Sr=function(t){return function(...e){he(t,...e)}},Zs=function(...t){const e="FIREBASE INTERNAL ERROR: "+Tr(...t);ln.error(e)},nt=function(...t){const e=`FIREBASE FATAL ERROR: ${Tr(...t)}`;throw ln.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Tr(...t);ln.warn(e)},G_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},jo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},z_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gn="[MIN_NAME]",Wt="[MAX_NAME]",Yt=function(t,e){if(t===e)return 0;if(t===gn||e===Wt)return-1;if(e===gn||t===Wt)return 1;{const n=Dc(t),r=Dc(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},q_=function(t,e){return t===e?0:t<e?-1:1},Nn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ie(e))},Vo=function(t){if(typeof t!="object"||t===null)return ie(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ie(e[r]),n+=":",n+=Vo(t[e[r]]);return n+="}",n},ch=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function fe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const lh=function(t){b(!jo(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,c;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const l=[];for(c=n;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(i?1:0),l.reverse();const h=l.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},K_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Q_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const X_=new RegExp("^-?(0*)\\d{1,10}$"),J_=-2147483648,Z_=2147483647,Dc=function(t){if(X_.test(t)){const e=Number(t);if(e>=J_&&e<=Z_)return e}return null},Tn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},ey=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ty{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ny{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(he("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class un{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}un.OWNER="owner";/**
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
 */const Go="5",uh="v",hh="s",dh="r",fh="f",ph=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gh="ls",mh="p",eo="ac",_h="websocket",yh="long_polling";/**
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
 */class vh{constructor(e,n,r,i,s=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ry(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bh(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let r;if(e===_h)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yh)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ry(t)&&(n.ns=t.namespace);const i=[];return fe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class iy{constructor(){this.counters_={}}incrementCounter(e,n=1){Ke(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Yf(this.counters_)}}/**
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
 */const As={},ks={};function zo(t){const e=t.toString();return As[e]||(As[e]=new iy),As[e]}function sy(t,e){const n=t.toString();return ks[n]||(ks[n]=e()),ks[n]}/**
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
 */class oy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Tn(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mc="start",ay="close",cy="pLPCommand",ly="pRTLPCB",wh="id",Eh="pw",Ch="ser",uy="cb",hy="seg",dy="ts",fy="d",py="dframe",Ih=1870,Th=30,gy=Ih-Th,my=25e3,_y=3e4;class on{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sr(e),this.stats_=zo(n),this.urlFn=c=>(this.appCheckToken&&(c[eo]=this.appCheckToken),bh(n,yh,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new oy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(_y)),z_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qo((...s)=>{const[o,a,c,l,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Mc)this.id=a,this.password=c;else if(o===ay)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mc]="t",r[Ch]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[uy]=this.scriptTagHolder.uniqueCallbackIdentifier),r[uh]=Go,this.transportSessionId&&(r[hh]=this.transportSessionId),this.lastSessionId&&(r[gh]=this.lastSessionId),this.applicationId&&(r[mh]=this.applicationId),this.appCheckToken&&(r[eo]=this.appCheckToken),typeof location<"u"&&location.hostname&&ph.test(location.hostname)&&(r[dh]=fh);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){on.forceAllow_=!0}static forceDisallow(){on.forceDisallow_=!0}static isAvailable(){return on.forceAllow_?!0:!on.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!K_()&&!Y_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=hu(n),i=ch(r,gy);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[py]="t",r[wh]=e,r[Eh]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qo{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=j_(),window[cy+this.uniqueCallbackIdentifier]=e,window[ly+this.uniqueCallbackIdentifier]=n,this.myIFrame=qo.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){he("frame writing exception"),a.stack&&he(a.stack),he(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||he("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wh]=this.myID,e[Eh]=this.myPW,e[Ch]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Th+r.length<=Ih;){const o=this.pendingSegs.shift();r=r+"&"+hy+i+"="+o.seg+"&"+dy+i+"="+o.ts+"&"+fy+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(my)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{he("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const yy=16384,vy=45e3;let li=null;typeof MozWebSocket<"u"?li=MozWebSocket:typeof WebSocket<"u"&&(li=WebSocket);class De{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sr(this.connId),this.stats_=zo(n),this.connURL=De.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[uh]=Go,typeof location<"u"&&location.hostname&&ph.test(location.hostname)&&(o[dh]=fh),n&&(o[hh]=n),r&&(o[gh]=r),i&&(o[eo]=i),s&&(o[mh]=s),bh(e,_h,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xt.set("previous_websocket_failure",!0);try{let r;vu(),this.mySock=new li(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&li!==null&&!De.forceDisallow_}static previouslyFailed(){return xt.isInMemoryStorage||xt.get("previous_websocket_failure")===!0}markConnectionHealthy(){xt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Xn(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ch(n,yy);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}De.responsesRequiredToBeHealthy=2;De.healthyTimeout=3e4;/**
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
 */class rr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[on,De]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=De&&De.isAvailable();let r=n&&!De.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[De];else{const i=this.transports_=[];for(const s of rr.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);rr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rr.globalTransportInitialized_=!1;/**
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
 */const by=6e4,wy=5e3,Ey=10*1024,Cy=100*1024,Ps="t",Lc="d",Iy="s",Fc="r",Ty="e",$c="o",Uc="a",Bc="n",Wc="p",Sy="h";class Ry{constructor(e,n,r,i,s,o,a,c,l,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sr("c:"+this.id+":"),this.transportManager_=new rr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Gn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Cy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ey?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ps in e){const n=e[Ps];n===Uc?this.upgradeIfSecondaryHealthy_():n===Fc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===$c&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Nn("t",e),r=Nn("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Bc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Nn("t",e),r=Nn("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Nn(Ps,e);if(Lc in e){const r=e[Lc];if(n===Sy){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Bc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Iy?this.onConnectionShutdown_(r):n===Fc?this.onReset_(r):n===Ty?Zs("Server Error: "+r):n===$c?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zs("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Go!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Gn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(by))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Sh{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Rh{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ui extends Rh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ko()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ui}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hc=32,jc=768;class U{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function D(){return new U("")}function x(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tt(t){return t.pieces_.length-t.pieceNum_}function G(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new U(t.pieces_,e)}function Ko(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ay(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ir(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ah(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new U(e,0)}function Q(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof U)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new U(n,0)}function N(t){return t.pieceNum_>=t.pieces_.length}function ye(t,e){const n=x(t),r=x(e);if(n===null)return e;if(n===r)return ye(G(t),G(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ky(t,e){const n=ir(t,0),r=ir(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Yt(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function kh(t,e){if(Tt(t)!==Tt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ke(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tt(t)>Tt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Py{constructor(e,n){this.errorPrefix_=n,this.parts_=ir(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ii(this.parts_[r]);Ph(this)}}function Oy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ii(e),Ph(t)}function Ny(t){const e=t.parts_.pop();t.byteLength_-=Ii(e),t.parts_.length>0&&(t.byteLength_-=1)}function Ph(t){if(t.byteLength_>jc)throw new Error(t.errorPrefix_+"has a key path longer than "+jc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hc)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hc+") or object contains a cycle "+Pt(t))}function Pt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Yo extends Rh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Yo}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const xn=1e3,xy=60*5*1e3,Vc=30*1e3,Dy=1.3,My=3e4,Ly="server_kill",Gc=3;class Ze extends Sh{constructor(e,n,r,i,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ze.nextPersistentConnectionId_++,this.log_=Sr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=xn,this.maxReconnectDelay_=xy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!vu())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ui.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ie(s)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new vr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const c=a.d,l=a.s;Ze.warnOnListenWarnings_(c,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ke(e,"w")){const r=pn(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cp(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ie(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Zs("Unrecognized action received from server: "+ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=xn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=xn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>My&&(this.reconnectDelay_=xn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Dy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ze.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,r())},l=function(u){b(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?he("getToken() completed but was canceled"):(he("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new Ry(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ly)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&be(u),c())}}}interrupt(e){he("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){he("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vs(this.interruptReasons_)&&(this.reconnectDelay_=xn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Vo(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new U(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){he("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Gc&&(this.reconnectDelay_=Vc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){he("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Gc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+sh.replace(/\./g,"-")]=1,ko()?e["framework.cordova"]=1:yu()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ui.getInstance().currentlyOnline();return Vs(this.interruptReasons_)&&e}}Ze.nextPersistentConnectionId_=0;Ze.nextConnectionId_=0;/**
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
 */class P{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new P(e,n)}}/**
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
 */class Pi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new P(gn,e),i=new P(gn,n);return this.compare(r,i)!==0}minPost(){return P.MIN}}/**
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
 */let Lr;class Oh extends Pi{static get __EMPTY_NODE(){return Lr}static set __EMPTY_NODE(e){Lr=e}compare(e,n){return Yt(e.name,n.name)}isDefinedOn(e){throw En("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return P.MIN}maxPost(){return new P(Wt,Lr)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,Lr)}toString(){return".key"}}const hn=new Oh;/**
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
 */class Fr{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??oe.RED,this.left=i??we.EMPTY_NODE,this.right=s??we.EMPTY_NODE}copy(e,n,r,i,s){return new oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return we.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return we.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}oe.RED=!0;oe.BLACK=!1;class Fy{copy(e,n,r,i,s){return this}insert(e,n,r){return new oe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class we{constructor(e,n=we.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new we(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,oe.BLACK,null,null))}remove(e){return new we(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,oe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Fr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Fr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Fr(this.root_,null,this.comparator_,!0,e)}}we.EMPTY_NODE=new Fy;/**
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
 */function $y(t,e){return Yt(t.name,e.name)}function Qo(t,e){return Yt(t,e)}/**
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
 */let to;function Uy(t){to=t}const Nh=function(t){return typeof t=="number"?"number:"+lh(t):"string:"+t},xh=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ke(e,".sv"),"Priority must be a string or number.")}else b(t===to||t.isEmpty(),"priority of unexpected type.");b(t===to||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let zc;class se{constructor(e,n=se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),xh(this.priorityNode_)}static set __childrenNodeConstructor(e){zc=e}static get __childrenNodeConstructor(){return zc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:x(e)===".priority"?this.priorityNode_:se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=x(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(b(r!==".priority"||Tt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,se.__childrenNodeConstructor.EMPTY_NODE.updateChild(G(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=lh(this.value_):e+=this.value_,this.lazyHash_=ah(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof se.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=se.VALUE_TYPE_ORDER.indexOf(n),s=se.VALUE_TYPE_ORDER.indexOf(r);return b(i>=0,"Unknown leaf type: "+n),b(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Dh,Mh;function By(t){Dh=t}function Wy(t){Mh=t}class Hy extends Pi{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Yt(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return P.MIN}maxPost(){return new P(Wt,new se("[PRIORITY-POST]",Mh))}makePost(e,n){const r=Dh(e);return new P(n,new se("[PRIORITY-POST]",r))}toString(){return".priority"}}const X=new Hy;/**
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
 */const jy=Math.log(2);class Vy{constructor(e){const n=s=>parseInt(Math.log(s)/jy,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hi=function(t,e,n,r){t.sort(e);const i=function(c,l){const h=l-c;let u,d;if(h===0)return null;if(h===1)return u=t[c],d=n?n(u):u,new oe(d,u.node,oe.BLACK,null,null);{const g=parseInt(h/2,10)+c,p=i(c,g),_=i(g+1,l);return u=t[g],d=n?n(u):u,new oe(d,u.node,oe.BLACK,p,_)}},s=function(c){let l=null,h=null,u=t.length;const d=function(p,_){const v=u-p,w=u;u-=p;const T=i(v+1,w),E=t[v],y=n?n(E):E;g(new oe(y,E.node,_,null,T))},g=function(p){l?(l.left=p,l=p):(h=p,l=p)};for(let p=0;p<c.count;++p){const _=c.nextBitIsOne(),v=Math.pow(2,c.count-(p+1));_?d(v,oe.BLACK):(d(v,oe.BLACK),d(v,oe.RED))}return h},o=new Vy(t.length),a=s(o);return new we(r||e,a)};/**
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
 */let Os;const Zt={};class Je{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(Zt&&X,"ChildrenNode.ts has not been loaded"),Os=Os||new Je({".priority":Zt},{".priority":X}),Os}get(e){const n=pn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof we?n:null}hasIndex(e){return Ke(this.indexSet_,e.toString())}addIndex(e,n){b(e!==hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(P.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=hi(r,e.getCompare()):a=Zt;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new Je(h,l)}addToIndexes(e,n){const r=ti(this.indexes_,(i,s)=>{const o=pn(this.indexSet_,s);if(b(o,"Missing index implementation for "+s),i===Zt)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(P.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),hi(a,o.getCompare())}else return Zt;else{const a=n.get(e.name);let c=i;return a&&(c=c.remove(new P(e.name,a))),c.insert(e,e.node)}});return new Je(r,this.indexSet_)}removeFromIndexes(e,n){const r=ti(this.indexes_,i=>{if(i===Zt)return i;{const s=n.get(e.name);return s?i.remove(new P(e.name,s)):i}});return new Je(r,this.indexSet_)}}/**
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
 */let Dn;class k{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&xh(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Dn||(Dn=new k(new we(Qo),null,Je.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Dn}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Dn:n}}getChild(e){const n=x(e);return n===null?this:this.getImmediateChild(n).getChild(G(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new P(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Dn:this.priorityNode_;return new k(i,o,s)}}updateChild(e,n){const r=x(e);if(r===null)return n;{b(x(e)!==".priority"||Tt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(G(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(X,(o,a)=>{n[o]=a.val(e),r++,s&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nh(this.getPriority().val())+":"),this.forEachChild(X,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ah(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new P(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new P(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new P(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,P.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,P.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===hn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(X),i=n.getIterator(X);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hn?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Gy extends k{constructor(){super(new we(Qo),k.EMPTY_NODE,Je.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const Rr=new Gy;Object.defineProperties(P,{MIN:{value:new P(gn,k.EMPTY_NODE)},MAX:{value:new P(Wt,Rr)}});Oh.__EMPTY_NODE=k.EMPTY_NODE;se.__childrenNodeConstructor=k;Uy(Rr);Wy(Rr);/**
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
 */const zy=!0;function re(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new se(n,re(e))}if(!(t instanceof Array)&&zy){const n=[];let r=!1;if(fe(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=re(a);c.isEmpty()||(r=r||!c.getPriority().isEmpty(),n.push(new P(o,c)))}}),n.length===0)return k.EMPTY_NODE;const s=hi(n,$y,o=>o.name,Qo);if(r){const o=hi(n,X.getCompare());return new k(s,re(e),new Je({".priority":o},{".priority":X}))}else return new k(s,re(e),Je.Default)}else{let n=k.EMPTY_NODE;return fe(t,(r,i)=>{if(Ke(t,r)&&r.substring(0,1)!=="."){const s=re(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(re(e))}}By(re);/**
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
 */class qy extends Pi{constructor(e){super(),this.indexPath_=e,b(!N(e)&&x(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Yt(e.name,n.name):s}makePost(e,n){const r=re(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,r);return new P(n,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new P(Wt,e)}toString(){return ir(this.indexPath_,0).join("/")}}/**
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
 */class Ky extends Pi{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Yt(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,n){const r=re(e);return new P(n,r)}toString(){return".value"}}const Yy=new Ky;/**
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
 */function Lh(t){return{type:"value",snapshotNode:t}}function mn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function or(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Qy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Xo{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(sr(n,a)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(mn(n,r)):o.trackChildChange(or(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(X,(i,s)=>{n.hasChild(i)||r.trackChildChange(sr(i,s))}),n.isLeafNode()||n.forEachChild(X,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(or(i,s,o))}else r.trackChildChange(mn(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ar{constructor(e){this.indexedFilter_=new Xo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ar.getStartPost_(e),this.endPost_=ar.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new P(n,r))||(r=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=k.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const s=this;return n.forEachChild(X,(o,a)=>{s.matches(new P(o,a))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Xy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ar(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new P(n,r))||(r=k.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,g)=>u(g,d)}else o=this.index_.getCompare();const a=e;b(a.numChildren()===this.limit_,"");const c=new P(n,r),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(n)){const u=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,l,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,c);if(h&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(or(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(sr(n,u));const _=a.updateImmediateChild(n,k.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(mn(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?e:h&&o(l,c)>=0?(s!=null&&(s.trackChildChange(sr(l.name,l.node)),s.trackChildChange(mn(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(l.name,k.EMPTY_NODE)):e}}/**
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
 */class Jo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=X}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===X}copy(){const e=new Jo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Jy(t){return t.loadsAllData()?new Xo(t.getIndex()):t.hasLimit()?new Xy(t):new ar(t)}function qc(t){const e={};if(t.isDefault())return e;let n;if(t.index_===X?n="$priority":t.index_===Yy?n="$value":t.index_===hn?n="$key":(b(t.index_ instanceof qy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ie(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ie(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ie(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ie(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==X&&(e.i=t.index_.toString()),e}/**
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
 */class di extends Sh{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Sr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=di.getListenId_(e,r),a={};this.listens_[o]=a;const c=qc(e._queryParams);this.restRequest_(s+".json",c,(l,h)=>{let u=h;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,r),pn(this.listens_,o)===a){let d;l?l===401?d="permission_denied":d="rest_error:"+l:d="ok",i(d,null)}})}unlisten(e,n){const r=di.getListenId_(e,n);delete this.listens_[r]}get(e){const n=qc(e._queryParams),r=e._path.toString(),i=new vr;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cn(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Xn(a.responseText)}catch{be("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,c)}else a.status!==401&&a.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Zy{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function fi(){return{value:null,children:new Map}}function Fh(t,e,n){if(N(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=x(e);t.children.has(r)||t.children.set(r,fi());const i=t.children.get(r);e=G(e),Fh(i,e,n)}}function no(t,e,n){t.value!==null?n(e,t.value):ev(t,(r,i)=>{const s=new U(e.toString()+"/"+r);no(i,s,n)})}function ev(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class tv{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Yc=10*1e3,nv=30*1e3,rv=5*60*1e3;class iv{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tv(e);const r=Yc+(nv-Yc)*Math.random();Gn(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;fe(e,(i,s)=>{s>0&&Ke(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Gn(this.reportStats_.bind(this),Math.floor(Math.random()*2*rv))}}/**
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
 */var Me;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Me||(Me={}));function Zo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ea(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ta(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class pi{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Me.ACK_USER_WRITE,this.source=Zo()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new U(e));return new pi(D(),n,this.revert)}}else return b(x(this.path)===e,"operationForChild called for unrelated child."),new pi(G(this.path),this.affectedTree,this.revert)}}/**
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
 */class cr{constructor(e,n){this.source=e,this.path=n,this.type=Me.LISTEN_COMPLETE}operationForChild(e){return N(this.path)?new cr(this.source,D()):new cr(this.source,G(this.path))}}/**
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
 */class Ht{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Me.OVERWRITE}operationForChild(e){return N(this.path)?new Ht(this.source,D(),this.snap.getImmediateChild(e)):new Ht(this.source,G(this.path),this.snap)}}/**
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
 */class _n{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Me.MERGE}operationForChild(e){if(N(this.path)){const n=this.children.subtree(new U(e));return n.isEmpty()?null:n.value?new Ht(this.source,D(),n.value):new _n(this.source,D(),n)}else return b(x(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _n(this.source,G(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class St{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const n=x(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class sv{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ov(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Qy(o.childName,o.snapshotNode))}),Mn(t,i,"child_removed",e,r,n),Mn(t,i,"child_added",e,r,n),Mn(t,i,"child_moved",s,r,n),Mn(t,i,"child_changed",e,r,n),Mn(t,i,"value",e,r,n),i}function Mn(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,c)=>cv(t,a,c)),o.forEach(a=>{const c=av(t,a,s);i.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,t.query_))})})}function av(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function cv(t,e,n){if(e.childName==null||n.childName==null)throw En("Should only compare child_ events.");const r=new P(e.childName,e.snapshotNode),i=new P(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Oi(t,e){return{eventCache:t,serverCache:e}}function zn(t,e,n,r){return Oi(new St(e,n,r),t.serverCache)}function $h(t,e,n,r){return Oi(t.eventCache,new St(e,n,r))}function gi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function jt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ns;const lv=()=>(Ns||(Ns=new we(q_)),Ns);class V{constructor(e,n=lv()){this.value=e,this.children=n}static fromObject(e){let n=new V(null);return fe(e,(r,i)=>{n=n.set(new U(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:D(),value:this.value};if(N(e))return null;{const r=x(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(G(e),n);return s!=null?{path:Q(new U(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const n=x(e),r=this.children.get(n);return r!==null?r.subtree(G(e)):new V(null)}}set(e,n){if(N(e))return new V(n,this.children);{const r=x(e),s=(this.children.get(r)||new V(null)).set(G(e),n),o=this.children.insert(r,s);return new V(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new V(null):new V(null,this.children);{const n=x(e),r=this.children.get(n);if(r){const i=r.remove(G(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new V(null):new V(this.value,s)}else return this}}get(e){if(N(e))return this.value;{const n=x(e),r=this.children.get(n);return r?r.get(G(e)):null}}setTree(e,n){if(N(e))return n;{const r=x(e),s=(this.children.get(r)||new V(null)).setTree(G(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new V(this.value,o)}}fold(e){return this.fold_(D(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Q(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,D(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(N(e))return null;{const s=x(e),o=this.children.get(s);return o?o.findOnPath_(G(e),Q(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,D(),n)}foreachOnPath_(e,n,r){if(N(e))return this;{this.value&&r(n,this.value);const i=x(e),s=this.children.get(i);return s?s.foreachOnPath_(G(e),Q(n,i),r):new V(null)}}foreach(e){this.foreach_(D(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Q(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Le{constructor(e){this.writeTree_=e}static empty(){return new Le(new V(null))}}function qn(t,e,n){if(N(e))return new Le(new V(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ye(i,e);return s=s.updateChild(o,n),new Le(t.writeTree_.set(i,s))}else{const i=new V(n),s=t.writeTree_.setTree(e,i);return new Le(s)}}}function ro(t,e,n){let r=t;return fe(n,(i,s)=>{r=qn(r,Q(e,i),s)}),r}function Qc(t,e){if(N(e))return Le.empty();{const n=t.writeTree_.setTree(e,new V(null));return new Le(n)}}function io(t,e){return Qt(t,e)!=null}function Qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ye(n.path,e)):null}function Xc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(X,(r,i)=>{e.push(new P(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new P(r,i.value))}),e}function Et(t,e){if(N(e))return t;{const n=Qt(t,e);return n!=null?new Le(new V(n)):new Le(t.writeTree_.subtree(e))}}function so(t){return t.writeTree_.isEmpty()}function yn(t,e){return Uh(D(),t.writeTree_,e)}function Uh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(b(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Uh(Q(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Q(t,".priority"),r)),n}}/**
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
 */function Ni(t,e){return jh(e,t)}function uv(t,e,n,r,i){b(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=qn(t.visibleWrites,e,n)),t.lastWriteId=r}function hv(t,e,n,r){b(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=ro(t.visibleWrites,e,n),t.lastWriteId=r}function dv(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function fv(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&pv(a,r.path)?i=!1:ke(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return gv(t),!0;if(r.snap)t.visibleWrites=Qc(t.visibleWrites,r.path);else{const a=r.children;fe(a,c=>{t.visibleWrites=Qc(t.visibleWrites,Q(r.path,c))})}return!0}else return!1}function pv(t,e){if(t.snap)return ke(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ke(Q(t.path,n),e))return!0;return!1}function gv(t){t.visibleWrites=Bh(t.allWrites,mv,D()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mv(t){return t.visible}function Bh(t,e,n){let r=Le.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ke(n,o)?(a=ye(n,o),r=qn(r,a,s.snap)):ke(o,n)&&(a=ye(o,n),r=qn(r,D(),s.snap.getChild(a)));else if(s.children){if(ke(n,o))a=ye(n,o),r=ro(r,a,s.children);else if(ke(o,n))if(a=ye(o,n),N(a))r=ro(r,D(),s.children);else{const c=pn(s.children,x(a));if(c){const l=c.getChild(G(a));r=qn(r,D(),l)}}}else throw En("WriteRecord should have .snap or .children")}}return r}function Wh(t,e,n,r,i){if(!r&&!i){const s=Qt(t.visibleWrites,e);if(s!=null)return s;{const o=Et(t.visibleWrites,e);if(so(o))return n;if(n==null&&!io(o,D()))return null;{const a=n||k.EMPTY_NODE;return yn(o,a)}}}else{const s=Et(t.visibleWrites,e);if(!i&&so(s))return n;if(!i&&n==null&&!io(s,D()))return null;{const o=function(l){return(l.visible||i)&&(!r||!~r.indexOf(l.writeId))&&(ke(l.path,e)||ke(e,l.path))},a=Bh(t.allWrites,o,e),c=n||k.EMPTY_NODE;return yn(a,c)}}}function _v(t,e,n){let r=k.EMPTY_NODE;const i=Qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(X,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Et(t.visibleWrites,e);return n.forEachChild(X,(o,a)=>{const c=yn(Et(s,new U(o)),a);r=r.updateImmediateChild(o,c)}),Xc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Et(t.visibleWrites,e);return Xc(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function yv(t,e,n,r,i){b(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Q(e,n);if(io(t.visibleWrites,s))return null;{const o=Et(t.visibleWrites,s);return so(o)?i.getChild(n):yn(o,i.getChild(n))}}function vv(t,e,n,r){const i=Q(e,n),s=Qt(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Et(t.visibleWrites,i);return yn(o,r.getNode().getImmediateChild(n))}else return null}function bv(t,e){return Qt(t.visibleWrites,e)}function wv(t,e,n,r,i,s,o){let a;const c=Et(t.visibleWrites,e),l=Qt(c,D());if(l!=null)a=l;else if(n!=null)a=yn(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=d.getNext();for(;g&&h.length<i;)u(g,r)!==0&&h.push(g),g=d.getNext();return h}else return[]}function Ev(){return{visibleWrites:Le.empty(),allWrites:[],lastWriteId:-1}}function mi(t,e,n,r){return Wh(t.writeTree,t.treePath,e,n,r)}function na(t,e){return _v(t.writeTree,t.treePath,e)}function Jc(t,e,n,r){return yv(t.writeTree,t.treePath,e,n,r)}function _i(t,e){return bv(t.writeTree,Q(t.treePath,e))}function Cv(t,e,n,r,i,s){return wv(t.writeTree,t.treePath,e,n,r,i,s)}function ra(t,e,n){return vv(t.writeTree,t.treePath,e,n)}function Hh(t,e){return jh(Q(t.treePath,e),t.writeTree)}function jh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Iv{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,or(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,sr(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,mn(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,or(r,e.snapshotNode,i.oldSnap));else throw En("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Tv{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Vh=new Tv;class ia{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new St(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ra(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jt(this.viewCache_),s=Cv(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Sv(t){return{filter:t}}function Rv(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Av(t,e,n,r,i){const s=new Iv;let o,a;if(n.type===Me.OVERWRITE){const l=n;l.source.fromUser?o=oo(t,e,l.path,l.snap,r,i,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!N(l.path),o=yi(t,e,l.path,l.snap,r,i,a,s))}else if(n.type===Me.MERGE){const l=n;l.source.fromUser?o=Pv(t,e,l.path,l.children,r,i,s):(b(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=ao(t,e,l.path,l.children,r,i,a,s))}else if(n.type===Me.ACK_USER_WRITE){const l=n;l.revert?o=xv(t,e,l.path,r,i,s):o=Ov(t,e,l.path,l.affectedTree,r,i,s)}else if(n.type===Me.LISTEN_COMPLETE)o=Nv(t,e,n.path,r,s);else throw En("Unknown operation type: "+n.type);const c=s.getChanges();return kv(e,o,c),{viewCache:o,changes:c}}function kv(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=gi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Lh(gi(e)))}}function Gh(t,e,n,r,i,s){const o=e.eventCache;if(_i(r,n)!=null)return e;{let a,c;if(N(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=jt(e),h=l instanceof k?l:k.EMPTY_NODE,u=na(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=mi(r,jt(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=x(n);if(l===".priority"){b(Tt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Jc(r,n,h,c);u!=null?a=t.filter.updatePriority(h,u):a=o.getNode()}else{const h=G(n);let u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const d=Jc(r,n,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(l).updateChild(h,d):u=o.getNode().getImmediateChild(l)}else u=ra(r,l,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),l,u,h,i,s):a=o.getNode()}}return zn(e,a,o.isFullyInitialized()||N(n),t.filter.filtersNodes())}}function yi(t,e,n,r,i,s,o,a){const c=e.serverCache;let l;const h=o?t.filter:t.filter.getIndexedFilter();if(N(n))l=h.updateFullNode(c.getNode(),r,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,r);l=h.updateFullNode(c.getNode(),g,null)}else{const g=x(n);if(!c.isCompleteForPath(n)&&Tt(n)>1)return e;const p=G(n),v=c.getNode().getImmediateChild(g).updateChild(p,r);g===".priority"?l=h.updatePriority(c.getNode(),v):l=h.updateChild(c.getNode(),g,v,p,Vh,null)}const u=$h(e,l,c.isFullyInitialized()||N(n),h.filtersNodes()),d=new ia(i,u,s);return Gh(t,u,n,i,d,a)}function oo(t,e,n,r,i,s,o){const a=e.eventCache;let c,l;const h=new ia(i,e,s);if(N(n))l=t.filter.updateFullNode(e.eventCache.getNode(),r,o),c=zn(e,l,!0,t.filter.filtersNodes());else{const u=x(n);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),r),c=zn(e,l,a.isFullyInitialized(),a.isFiltered());else{const d=G(n),g=a.getNode().getImmediateChild(u);let p;if(N(d))p=r;else{const _=h.getCompleteChild(u);_!=null?Ko(d)===".priority"&&_.getChild(Ah(d)).isEmpty()?p=_:p=_.updateChild(d,r):p=k.EMPTY_NODE}if(g.equals(p))c=e;else{const _=t.filter.updateChild(a.getNode(),u,p,d,h,o);c=zn(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Zc(t,e){return t.eventCache.isCompleteForChild(e)}function Pv(t,e,n,r,i,s,o){let a=e;return r.foreach((c,l)=>{const h=Q(n,c);Zc(e,x(h))&&(a=oo(t,a,h,l,i,s,o))}),r.foreach((c,l)=>{const h=Q(n,c);Zc(e,x(h))||(a=oo(t,a,h,l,i,s,o))}),a}function el(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ao(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;N(n)?l=r:l=new V(null).setTree(n,r);const h=e.serverCache.getNode();return l.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),p=el(t,g,d);c=yi(t,c,new U(u),p,i,s,o,a)}}),l.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!g){const p=e.serverCache.getNode().getImmediateChild(u),_=el(t,p,d);c=yi(t,c,new U(u),_,i,s,o,a)}}),c}function Ov(t,e,n,r,i,s,o){if(_i(i,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(r.value!=null){if(N(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return yi(t,e,n,c.getNode().getChild(n),i,s,a,o);if(N(n)){let l=new V(null);return c.getNode().forEachChild(hn,(h,u)=>{l=l.set(new U(h),u)}),ao(t,e,n,l,i,s,a,o)}else return e}else{let l=new V(null);return r.foreach((h,u)=>{const d=Q(n,h);c.isCompleteForPath(d)&&(l=l.set(h,c.getNode().getChild(d)))}),ao(t,e,n,l,i,s,a,o)}}function Nv(t,e,n,r,i){const s=e.serverCache,o=$h(e,s.getNode(),s.isFullyInitialized()||N(n),s.isFiltered());return Gh(t,o,n,r,Vh,i)}function xv(t,e,n,r,i,s){let o;if(_i(r,n)!=null)return e;{const a=new ia(r,e,i),c=e.eventCache.getNode();let l;if(N(n)||x(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=mi(r,jt(e));else{const u=e.serverCache.getNode();b(u instanceof k,"serverChildren would be complete if leaf node"),h=na(r,u)}h=h,l=t.filter.updateFullNode(c,h,s)}else{const h=x(n);let u=ra(r,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?l=t.filter.updateChild(c,h,u,G(n),a,s):e.eventCache.getNode().hasChild(h)?l=t.filter.updateChild(c,h,k.EMPTY_NODE,G(n),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=mi(r,jt(e)),o.isLeafNode()&&(l=t.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||_i(r,D())!=null,zn(e,l,o,t.filter.filtersNodes())}}/**
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
 */class Dv{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xo(r.getIndex()),s=Jy(r);this.processor_=Sv(s);const o=n.serverCache,a=n.eventCache,c=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(k.EMPTY_NODE,a.getNode(),null),h=new St(c,o.isFullyInitialized(),i.filtersNodes()),u=new St(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Oi(u,h),this.eventGenerator_=new sv(this.query_)}get query(){return this.query_}}function Mv(t){return t.viewCache_.serverCache.getNode()}function Lv(t){return gi(t.viewCache_)}function Fv(t,e){const n=jt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!N(e)&&!n.getImmediateChild(x(e)).isEmpty())?n.getChild(e):null}function tl(t){return t.eventRegistrations_.length===0}function $v(t,e){t.eventRegistrations_.push(e)}function nl(t,e,n){const r=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function rl(t,e,n,r){e.type===Me.MERGE&&e.source.queryId!==null&&(b(jt(t.viewCache_),"We should always have a full cache before handling merges"),b(gi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Av(t.processor_,i,e,n,r);return Rv(t.processor_,s.viewCache),b(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zh(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Uv(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(X,(s,o)=>{r.push(mn(s,o))}),n.isFullyInitialized()&&r.push(Lh(n.getNode())),zh(t,r,n.getNode(),e)}function zh(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ov(t.eventGenerator_,e,n,i)}/**
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
 */let vi;class qh{constructor(){this.views=new Map}}function Bv(t){b(!vi,"__referenceConstructor has already been defined"),vi=t}function Wv(){return b(vi,"Reference.ts has not been loaded"),vi}function Hv(t){return t.views.size===0}function sa(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return b(s!=null,"SyncTree gave us an op for an invalid query."),rl(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(rl(o,e,n,r));return s}}function Kh(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=mi(n,i?r:null),c=!1;a?c=!0:r instanceof k?(a=na(n,r),c=!1):(a=k.EMPTY_NODE,c=!1);const l=Oi(new St(a,c,!1),new St(r,i,!1));return new Dv(e,l)}return o}function jv(t,e,n,r,i,s){const o=Kh(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),$v(o,n),Uv(o,n)}function Vv(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Rt(t);if(i==="default")for(const[c,l]of t.views.entries())o=o.concat(nl(l,n,r)),tl(l)&&(t.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{const c=t.views.get(i);c&&(o=o.concat(nl(c,n,r)),tl(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!Rt(t)&&s.push(new(Wv())(e._repo,e._path)),{removed:s,events:o}}function Yh(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ct(t,e){let n=null;for(const r of t.views.values())n=n||Fv(r,e);return n}function Qh(t,e){if(e._queryParams.loadsAllData())return xi(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Xh(t,e){return Qh(t,e)!=null}function Rt(t){return xi(t)!=null}function xi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let bi;function Gv(t){b(!bi,"__referenceConstructor has already been defined"),bi=t}function zv(){return b(bi,"Reference.ts has not been loaded"),bi}let qv=1;class il{constructor(e){this.listenProvider_=e,this.syncPointTree_=new V(null),this.pendingWriteTree_=Ev(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Jh(t,e,n,r,i){return uv(t.pendingWriteTree_,e,n,r,i),i?Sn(t,new Ht(Zo(),e,n)):[]}function Kv(t,e,n,r){hv(t.pendingWriteTree_,e,n,r);const i=V.fromObject(n);return Sn(t,new _n(Zo(),e,i))}function vt(t,e,n=!1){const r=dv(t.pendingWriteTree_,e);if(fv(t.pendingWriteTree_,e)){let s=new V(null);return r.snap!=null?s=s.set(D(),!0):fe(r.children,o=>{s=s.set(new U(o),!0)}),Sn(t,new pi(r.path,s,n))}else return[]}function Ar(t,e,n){return Sn(t,new Ht(ea(),e,n))}function Yv(t,e,n){const r=V.fromObject(n);return Sn(t,new _n(ea(),e,r))}function Qv(t,e){return Sn(t,new cr(ea(),e))}function Xv(t,e,n){const r=aa(t,n);if(r){const i=ca(r),s=i.path,o=i.queryId,a=ye(s,e),c=new cr(ta(o),a);return la(t,s,c)}else return[]}function Zh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Xh(o,e))){const c=Vv(o,e,n,r);Hv(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const l=c.removed;if(a=c.events,!i){const h=l.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(d,g)=>Rt(g));if(h&&!u){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const g=t0(d);for(let p=0;p<g.length;++p){const _=g[p],v=_.query,w=rd(t,_);t.listenProvider_.startListening(Kn(v),lr(t,v),w.hashFn,w.onComplete)}}}!u&&l.length>0&&!r&&(h?t.listenProvider_.stopListening(Kn(e),null):l.forEach(d=>{const g=t.queryToTagMap.get(Di(d));t.listenProvider_.stopListening(Kn(d),g)}))}n0(t,l)}return a}function ed(t,e,n,r){const i=aa(t,r);if(i!=null){const s=ca(i),o=s.path,a=s.queryId,c=ye(o,e),l=new Ht(ta(a),c,n);return la(t,o,l)}else return[]}function Jv(t,e,n,r){const i=aa(t,r);if(i){const s=ca(i),o=s.path,a=s.queryId,c=ye(o,e),l=V.fromObject(n),h=new _n(ta(a),c,l);return la(t,o,h)}else return[]}function Zv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const p=ye(d,i);s=s||Ct(g,p),o=o||Rt(g)});let a=t.syncPointTree_.get(i);a?(o=o||Rt(a),s=s||Ct(a,D())):(a=new qh,t.syncPointTree_=t.syncPointTree_.set(i,a));let c;s!=null?c=!0:(c=!1,s=k.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,p)=>{const _=Ct(p,D());_&&(s=s.updateImmediateChild(g,_))}));const l=Xh(a,e);if(!l&&!e._queryParams.loadsAllData()){const d=Di(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=r0();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const h=Ni(t.pendingWriteTree_,i);let u=jv(a,e,n,h,s,c);if(!l&&!o&&!r){const d=Qh(a,e);u=u.concat(i0(t,e,d))}return u}function oa(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=ye(o,e),l=Ct(a,c);if(l)return l});return Wh(i,e,s,n,!0)}function e0(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(l,h)=>{const u=ye(l,n);r=r||Ct(h,u)});let i=t.syncPointTree_.get(n);i?r=r||Ct(i,D()):(i=new qh,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new St(r,!0,!1):null,a=Ni(t.pendingWriteTree_,e._path),c=Kh(i,e,a,s?o.getNode():k.EMPTY_NODE,s);return Lv(c)}function Sn(t,e){return td(e,t.syncPointTree_,null,Ni(t.pendingWriteTree_,D()))}function td(t,e,n,r){if(N(t.path))return nd(t,e,n,r);{const i=e.get(D());n==null&&i!=null&&(n=Ct(i,D()));let s=[];const o=x(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const l=n?n.getImmediateChild(o):null,h=Hh(r,o);s=s.concat(td(a,c,l,h))}return i&&(s=s.concat(sa(i,t,r,n))),s}}function nd(t,e,n,r){const i=e.get(D());n==null&&i!=null&&(n=Ct(i,D()));let s=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,l=Hh(r,o),h=t.operationForChild(o);h&&(s=s.concat(nd(h,a,c,l)))}),i&&(s=s.concat(sa(i,t,r,n))),s}function rd(t,e){const n=e.query,r=lr(t,n);return{hashFn:()=>(Mv(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Xv(t,n._path,r):Qv(t,n._path);{const s=Q_(i,n);return Zh(t,n,null,s)}}}}function lr(t,e){const n=Di(e);return t.queryToTagMap.get(n)}function Di(t){return t._path.toString()+"$"+t._queryIdentifier}function aa(t,e){return t.tagToQueryMap.get(e)}function ca(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new U(t.substr(0,e))}}function la(t,e,n){const r=t.syncPointTree_.get(e);b(r,"Missing sync point for query tag that we're tracking");const i=Ni(t.pendingWriteTree_,e);return sa(r,n,i,null)}function t0(t){return t.fold((e,n,r)=>{if(n&&Rt(n))return[xi(n)];{let i=[];return n&&(i=Yh(n)),fe(r,(s,o)=>{i=i.concat(o)}),i}})}function Kn(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zv())(t._repo,t._path):t}function n0(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Di(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function r0(){return qv++}function i0(t,e,n){const r=e._path,i=lr(t,e),s=rd(t,n),o=t.listenProvider_.startListening(Kn(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)b(!Rt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,h,u)=>{if(!N(l)&&h&&Rt(h))return[xi(h).query];{let d=[];return h&&(d=d.concat(Yh(h).map(g=>g.query))),fe(u,(g,p)=>{d=d.concat(p)}),d}});for(let l=0;l<c.length;++l){const h=c[l];t.listenProvider_.stopListening(Kn(h),lr(t,h))}}return o}/**
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
 */class ua{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ua(n)}node(){return this.node_}}class ha{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Q(this.path_,e);return new ha(this.syncTree_,n)}node(){return oa(this.syncTree_,this.path_)}}const s0=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sl=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return o0(t[".sv"],e,n);if(typeof t[".sv"]=="object")return a0(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},o0=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},a0=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&b(!1,"Unexpected increment value: "+r);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},id=function(t,e,n,r){return da(e,new ha(n,t),r)},sd=function(t,e,n){return da(t,new ua(e),n)};function da(t,e,n){const r=t.getPriority().val(),i=sl(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=sl(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new se(a,re(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new se(i))),o.forEachChild(X,(a,c)=>{const l=da(c,e.getImmediateChild(a),n);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class fa{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function pa(t,e){let n=e instanceof U?e:new U(e),r=t,i=x(n);for(;i!==null;){const s=pn(r.node.children,i)||{children:{},childCount:0};r=new fa(i,r,s),n=G(n),i=x(n)}return r}function Rn(t){return t.node.value}function od(t,e){t.node.value=e,co(t)}function ad(t){return t.node.childCount>0}function c0(t){return Rn(t)===void 0&&!ad(t)}function Mi(t,e){fe(t.node.children,(n,r)=>{e(new fa(n,t,r))})}function cd(t,e,n,r){n&&!r&&e(t),Mi(t,i=>{cd(i,e,!0,r)}),n&&r&&e(t)}function l0(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function kr(t){return new U(t.parent===null?t.name:kr(t.parent)+"/"+t.name)}function co(t){t.parent!==null&&u0(t.parent,t.name,t)}function u0(t,e,n){const r=c0(n),i=Ke(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,co(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,co(t))}/**
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
 */const h0=/[\[\].#$\/\u0000-\u001F\u007F]/,d0=/[\[\].#$\u0000-\u001F\u007F]/,xs=10*1024*1024,ga=function(t){return typeof t=="string"&&t.length!==0&&!h0.test(t)},ld=function(t){return typeof t=="string"&&t.length!==0&&!d0.test(t)},f0=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ld(t)},p0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!jo(t)||t&&typeof t=="object"&&Ke(t,".sv")},ud=function(t,e,n,r){r&&e===void 0||Li(Ci(t,"value"),e,n)},Li=function(t,e,n){const r=n instanceof U?new Py(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pt(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pt(r)+" with contents = "+e.toString());if(jo(e))throw new Error(t+"contains "+e.toString()+" "+Pt(r));if(typeof e=="string"&&e.length>xs/3&&Ii(e)>xs)throw new Error(t+"contains a string greater than "+xs+" utf8 bytes "+Pt(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(fe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ga(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pt(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Oy(r,o),Li(t,a,r),Ny(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pt(r)+" in addition to actual children.")}},g0=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=ir(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ga(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ky);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ke(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},m0=function(t,e,n,r){if(r&&e===void 0)return;const i=Ci(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];fe(e,(o,a)=>{const c=new U(o);if(Li(i,a,Q(n,c)),Ko(c)===".priority"&&!p0(a))throw new Error(i+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),g0(i,s)},hd=function(t,e,n,r){if(!(r&&n===void 0)&&!ld(n))throw new Error(Ci(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_0=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hd(t,e,n,r)},dd=function(t,e){if(x(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},y0=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ga(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!f0(n))throw new Error(Ci(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class v0{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ma(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!kh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Oe(t,e,n){ma(t,n),b0(t,r=>ke(r,e)||ke(e,r))}function b0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(w0(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function w0(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Mt&&he("event: "+n.toString()),Tn(r)}}}/**
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
 */const E0="repo_interrupt",C0=25;class I0{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new v0,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=fi(),this.transactionQueueTree_=new fa,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T0(t,e,n){if(t.stats_=zo(t.repoInfo_),t.forceRestClient_||ey())t.server_=new di(t.repoInfo_,(r,i,s,o)=>{ol(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>al(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ie(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ze(t.repoInfo_,e,(r,i,s,o)=>{ol(t,r,i,s,o)},r=>{al(t,r)},r=>{S0(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=sy(t.repoInfo_,()=>new iv(t.stats_,t.server_)),t.infoData_=new Zy,t.infoSyncTree_=new il({startListening:(r,i,s,o)=>{let a=[];const c=t.infoData_.getNode(r._path);return c.isEmpty()||(a=Ar(t.infoSyncTree_,r._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_a(t,"connected",!1),t.serverSyncTree_=new il({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,c)=>{const l=o(a,c);Oe(t.eventQueue_,r._path,l)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function fd(t){const n=t.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fi(t){return s0({timestamp:fd(t)})}function ol(t,e,n,r,i){t.dataUpdateCount++;const s=new U(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const c=ti(n,l=>re(l));o=Jv(t.serverSyncTree_,s,c,i)}else{const c=re(n);o=ed(t.serverSyncTree_,s,c,i)}else if(r){const c=ti(n,l=>re(l));o=Yv(t.serverSyncTree_,s,c)}else{const c=re(n);o=Ar(t.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=vn(t,s)),Oe(t.eventQueue_,a,o)}function al(t,e){_a(t,"connected",e),e===!1&&P0(t)}function S0(t,e){fe(e,(n,r)=>{_a(t,n,r)})}function _a(t,e,n){const r=new U("/.info/"+e),i=re(n);t.infoData_.updateSnapshot(r,i);const s=Ar(t.infoSyncTree_,r,i);Oe(t.eventQueue_,r,s)}function ya(t){return t.nextWriteId_++}function R0(t,e,n){const r=e0(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=re(i).withIndex(e._queryParams.getIndex());Zv(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ar(t.serverSyncTree_,e._path,s);else{const a=lr(t.serverSyncTree_,e);o=ed(t.serverSyncTree_,e._path,s,a)}return Oe(t.eventQueue_,e._path,o),Zh(t.serverSyncTree_,e,n,null,!0),s},i=>(Pr(t,"get for query "+ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function A0(t,e,n,r,i){Pr(t,"set",{path:e.toString(),value:n,priority:r});const s=Fi(t),o=re(n,r),a=oa(t.serverSyncTree_,e),c=sd(o,a,s),l=ya(t),h=Jh(t.serverSyncTree_,e,c,l,!0);ma(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const p=d==="ok";p||be("set at "+e+" failed: "+d);const _=vt(t.serverSyncTree_,l,!p);Oe(t.eventQueue_,e,_),lo(t,i,d,g)});const u=ba(t,e);vn(t,u),Oe(t.eventQueue_,u,[])}function k0(t,e,n,r){Pr(t,"update",{path:e.toString(),value:n});let i=!0;const s=Fi(t),o={};if(fe(n,(a,c)=>{i=!1,o[a]=id(Q(e,a),re(c),t.serverSyncTree_,s)}),i)he("update() called with empty data.  Don't do anything."),lo(t,r,"ok",void 0);else{const a=ya(t),c=Kv(t.serverSyncTree_,e,o,a);ma(t.eventQueue_,c),t.server_.merge(e.toString(),n,(l,h)=>{const u=l==="ok";u||be("update at "+e+" failed: "+l);const d=vt(t.serverSyncTree_,a,!u),g=d.length>0?vn(t,e):e;Oe(t.eventQueue_,g,d),lo(t,r,l,h)}),fe(n,l=>{const h=ba(t,Q(e,l));vn(t,h)}),Oe(t.eventQueue_,e,[])}}function P0(t){Pr(t,"onDisconnectEvents");const e=Fi(t),n=fi();no(t.onDisconnect_,D(),(i,s)=>{const o=id(i,s,t.serverSyncTree_,e);Fh(n,i,o)});let r=[];no(n,D(),(i,s)=>{r=r.concat(Ar(t.serverSyncTree_,i,s));const o=ba(t,i);vn(t,o)}),t.onDisconnect_=fi(),Oe(t.eventQueue_,D(),r)}function O0(t){t.persistentConnection_&&t.persistentConnection_.interrupt(E0)}function Pr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),he(n,...e)}function lo(t,e,n,r){e&&Tn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function pd(t,e,n){return oa(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function va(t,e=t.transactionQueueTree_){if(e||$i(t,e),Rn(e)){const n=md(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&N0(t,kr(e),n)}else ad(e)&&Mi(e,n=>{va(t,n)})}function N0(t,e,n){const r=n.map(l=>l.currentWriteId),i=pd(t,e,r);let s=i;const o=i.hash();for(let l=0;l<n.length;l++){const h=n[l];b(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=ye(e,h.path);s=s.updateChild(u,h.currentOutputSnapshotRaw)}const a=s.val(!0),c=e;t.server_.put(c.toString(),a,l=>{Pr(t,"transaction put response",{path:c.toString(),status:l});let h=[];if(l==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(vt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();$i(t,pa(t.transactionQueueTree_,e)),va(t,t.transactionQueueTree_),Oe(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Tn(u[d])}else{if(l==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{be("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=l}vn(t,e)}},o)}function vn(t,e){const n=gd(t,e),r=kr(n),i=md(t,n);return x0(t,i,r),r}function x0(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=ye(n,c.path);let h=!1,u;if(b(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,i=i.concat(vt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=C0)h=!0,u="maxretry",i=i.concat(vt(t.serverSyncTree_,c.currentWriteId,!0));else{const d=pd(t,c.path,o);c.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){Li("transaction failed: Data returned ",g,c.path);let p=re(g);typeof g=="object"&&g!=null&&Ke(g,".priority")||(p=p.updatePriority(d.getPriority()));const v=c.currentWriteId,w=Fi(t),T=sd(p,d,w);c.currentOutputSnapshotRaw=p,c.currentOutputSnapshotResolved=T,c.currentWriteId=ya(t),o.splice(o.indexOf(v),1),i=i.concat(Jh(t.serverSyncTree_,c.path,T,c.currentWriteId,c.applyLocally)),i=i.concat(vt(t.serverSyncTree_,v,!0))}else h=!0,u="nodata",i=i.concat(vt(t.serverSyncTree_,c.currentWriteId,!0))}Oe(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}$i(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Tn(r[a]);va(t,t.transactionQueueTree_)}function gd(t,e){let n,r=t.transactionQueueTree_;for(n=x(e);n!==null&&Rn(r)===void 0;)r=pa(r,n),e=G(e),n=x(e);return r}function md(t,e){const n=[];return _d(t,e,n),n.sort((r,i)=>r.order-i.order),n}function _d(t,e,n){const r=Rn(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Mi(e,i=>{_d(t,i,n)})}function $i(t,e){const n=Rn(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,od(e,n.length>0?n:void 0)}Mi(e,r=>{$i(t,r)})}function ba(t,e){const n=kr(gd(t,e)),r=pa(t.transactionQueueTree_,e);return l0(r,i=>{Ds(t,i)}),Ds(t,r),cd(r,i=>{Ds(t,i)}),n}function Ds(t,e){const n=Rn(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(vt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?od(e,void 0):n.length=s+1,Oe(t.eventQueue_,kr(e),i);for(let o=0;o<r.length;o++)Tn(r[o])}}/**
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
 */function D0(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function M0(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const cl=function(t,e){const n=L0(t),r=n.namespace;n.domain==="firebase.com"&&nt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&nt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||G_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vh(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new U(n.pathString)}},L0=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",c=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=D0(t.substring(h,u)));const d=M0(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const g=e.slice(0,l);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const p=e.indexOf(".");r=e.substring(0,p).toLowerCase(),n=e.substring(p+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:c,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const ll="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",F0=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=ll.charAt(n%64),n=Math.floor(n/64);b(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ll.charAt(e[i]);return b(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class $0{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ie(this.snapshot.exportVal())}}class U0{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class B0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class wa{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return N(this._path)?null:Ko(this._path)}get ref(){return new ct(this._repo,this._path)}get _queryIdentifier(){const e=Kc(this._queryParams),n=Vo(e);return n==="{}"?"default":n}get _queryObject(){return Kc(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof wa))return!1;const n=this._repo===e._repo,r=kh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ay(this._path)}}class ct extends wa{constructor(e,n){super(e,n,new Jo,!1)}get parent(){const e=Ah(this._path);return e===null?null:new ct(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ur{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new U(e),r=Ce(this.ref,e);return new ur(this._node.getChild(n),r,X)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ur(i,Ce(this.ref,r),X)))}hasChild(e){const n=new U(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function lt(t,e){return t=ne(t),t._checkNotDeleted("ref"),e!==void 0?Ce(t._root,e):t._root}function Ce(t,e){return t=ne(t),x(t._path)===null?_0("child","path",e,!1):hd("child","path",e,!1),new ct(t._repo,Q(t._path,e))}function yd(t,e){t=ne(t),dd("push",t._path),ud("push",e,t._path,!0);const n=fd(t._repo),r=F0(n),i=Ce(t,r),s=Ce(t,r);let o;return e!=null?o=An(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function An(t,e){t=ne(t),dd("set",t._path),ud("set",e,t._path,!1);const n=new vr;return A0(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function W0(t,e){m0("update",e,t._path,!1);const n=new vr;return k0(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ui(t){t=ne(t);const e=new B0(()=>{}),n=new Ea(e);return R0(t._repo,t,n).then(r=>new ur(r,new ct(t._repo,t._path),t._queryParams.getIndex()))}class Ea{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new $0("value",this,new ur(e.snapshotNode,new ct(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new U0(this,e,n):null}matches(e){return e instanceof Ea?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Bv(ct);Gv(ct);/**
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
 */const H0="FIREBASE_DATABASE_EMULATOR_HOST",uo={};let j0=!1;function V0(t,e,n,r){t.repoInfo_=new vh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function G0(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||nt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),he("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cl(s,i),a=o.repoInfo,c,l;typeof process<"u"&&Pc&&(l=Pc[H0]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=cl(s,i),a=o.repoInfo):c=!o.repoInfo.secure;const h=i&&c?new un(un.OWNER):new ny(t.name,t.options,e);y0("Invalid Firebase Database URL",o),N(o.path)||nt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=q0(a,t,h,new ty(t.name,n));return new K0(u,t)}function z0(t,e){const n=uo[e];(!n||n[t.key]!==t)&&nt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),O0(t),delete n[t.key]}function q0(t,e,n,r){let i=uo[e.name];i||(i={},uo[e.name]=i);let s=i[t.toURLString()];return s&&nt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new I0(t,j0,n,r),i[t.toURLString()]=s,s}class K0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T0(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ct(this._repo,D())),this._rootInternal}_delete(){return this._rootInternal!==null&&(z0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&nt("Cannot call "+e+" on a deleted database.")}}function Y0(t=No(),e){const n=Ti(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=pu("database");r&&Q0(n,...r)}return n}function Q0(t,e,n,r={}){t=ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&nt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&nt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new un(un.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:_u(r.mockUserToken,t.app.options.projectId);s=new un(o)}V0(i,e,n,s)}/**
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
 */function X0(t){B_(Kt),$t(new It("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return G0(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),He(Oc,Nc,t),He(Oc,Nc,"esm2017")}Ze.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ze.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};X0();/**
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
 */const vd="firebasestorage.googleapis.com",bd="storageBucket",J0=2*60*1e3,Z0=10*60*1e3;/**
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
 */class ce extends it{constructor(e,n,r=0){super(Ms(e),`Firebase Storage: ${n} (${Ms(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ms(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function Ms(t){return"storage/"+t}function wd(){const t="An unknown error occurred, please check the error payload for server response.";return new ce(ae.UNKNOWN,t)}function eb(t){return new ce(ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tb(t){return new ce(ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nb(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(ae.UNAUTHENTICATED,t)}function rb(){return new ce(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ib(t){return new ce(ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sb(){return new ce(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function ob(){return new ce(ae.CANCELED,"User canceled the upload/download.")}function ab(t){return new ce(ae.INVALID_URL,"Invalid URL '"+t+"'.")}function cb(t){return new ce(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lb(){return new ce(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+bd+"' property when initializing the app?")}function ub(){return new ce(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ho(t){return new ce(ae.INVALID_ARGUMENT,t)}function Ed(){return new ce(ae.APP_DELETED,"The Firebase app was deleted.")}function hb(t){return new ce(ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ln(t){throw new ce(ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class ve{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ve.makeFromUrl(e,n)}catch{return new ve(e,"")}if(r.path==="")return r;throw cb(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function l(y){y.path_=decodeURIComponent(y.path)}const h="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${u}/${h}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},_=n===vd?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",w=new RegExp(`^https?://${_}/${i}/${v}`,"i"),E=[{regex:a,indices:c,postModify:s},{regex:g,indices:p,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let y=0;y<E.length;y++){const C=E[y],R=C.regex.exec(e);if(R){const A=R[C.indices.bucket];let J=R[C.indices.path];J||(J=""),r=new ve(A,J),C.postModify(r);break}}if(r==null)throw ab(e);return r}}class db{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fb(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return a===2}let l=!1;function h(...v){l||(l=!0,e.apply(null,v))}function u(v){i=setTimeout(()=>{i=null,t(g,c())},v)}function d(){s&&clearTimeout(s)}function g(v,...w){if(l){d();return}if(v){d(),h.call(null,v,...w);return}if(c()||o){d(),h.call(null,v,...w);return}r<64&&(r*=2);let E;a===1?(a=2,E=0):E=(r+Math.random())*1e3,u(E)}let p=!1;function _(v){p||(p=!0,d(),!l&&(i!==null?(v||(a=2),clearTimeout(i),u(0)):v||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function pb(t){t(!1)}/**
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
 */function gb(t){return t!==void 0}function mb(t){return typeof t=="object"&&!Array.isArray(t)}function Cd(t){return typeof t=="string"||t instanceof String}function fo(t,e,n,r){if(r<e)throw ho(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ho(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ca(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Id(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Lt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Lt||(Lt={}));/**
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
 */function _b(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class yb{constructor(e,n,r,i,s,o,a,c,l,h,u,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,p)=>{this.resolve_=g,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new $r(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Lt.NO_ERROR,c=s.getStatus();if(!a||_b(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Lt.ABORT;r(!1,new $r(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new $r(l,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());gb(c)?s(c):s()}catch(c){o(c)}else if(a!==null){const c=wd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Ed():ob();o(c)}else{const c=sb();o(c)}};this.canceled_?n(!1,new $r(!1,null,!0)):this.backoffId_=fb(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class $r{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vb(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bb(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wb(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Eb(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Cb(t,e,n,r,i,s,o=!0){const a=Id(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return wb(l,e),vb(l,n),bb(l,s),Eb(l,r),new yb(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Ia(t){let e;try{e=JSON.parse(t)}catch{return null}return mb(e)?e:null}/**
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
 */function Ib(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Tb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Td(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Sb(t,e){return e}class _e{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Sb}}let Ur=null;function Rb(t){return!Cd(t)||t.length<2?t:Td(t)}function Ab(){if(Ur)return Ur;const t=[];t.push(new _e("bucket")),t.push(new _e("generation")),t.push(new _e("metageneration")),t.push(new _e("name","fullPath",!0));function e(s,o){return Rb(o)}const n=new _e("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new _e("size");return i.xform=r,t.push(i),t.push(new _e("timeCreated")),t.push(new _e("updated")),t.push(new _e("md5Hash",null,!0)),t.push(new _e("cacheControl",null,!0)),t.push(new _e("contentDisposition",null,!0)),t.push(new _e("contentEncoding",null,!0)),t.push(new _e("contentLanguage",null,!0)),t.push(new _e("contentType",null,!0)),t.push(new _e("metadata","customMetadata",!0)),Ur=t,Ur}function kb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ve(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Pb(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return kb(r,t),r}function Ob(t,e,n){const r=Ia(e);return r===null?null:Pb(t,r,n)}function Nb(t,e,n,r){const i=Ia(e);if(i===null||!Cd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(l=>{const h=t.bucket,u=t.fullPath,d="/b/"+o(h)+"/o/"+o(u),g=Ca(d,n,r),p=Id({alt:"media",token:l});return g+p})[0]}/**
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
 */const ul="prefixes",hl="items";function xb(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ul])for(const i of n[ul]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ve(e,s));r.prefixes.push(o)}if(n[hl])for(const i of n[hl]){const s=t._makeStorageReference(new ve(e,i.name));r.items.push(s)}return r}function Db(t,e,n){const r=Ia(n);return r===null?null:xb(t,e,r)}class Sd{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Rd(t){if(!t)throw wd()}function Mb(t,e){function n(r,i){const s=Db(t,e,i);return Rd(s!==null),s}return n}function Lb(t,e){function n(r,i){const s=Ob(t,i,e);return Rd(s!==null),Nb(s,i,t.host,t._protocol)}return n}function Ad(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=rb():i=nb():n.getStatus()===402?i=tb(t.bucket):n.getStatus()===403?i=ib(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Fb(t){const e=Ad(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=eb(t.path)),s.serverResponse=i.serverResponse,s}return n}function $b(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Ca(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,h=new Sd(a,c,Mb(t,e.bucket),l);return h.urlParams=s,h.errorHandler=Ad(e),h}function Ub(t,e,n){const r=e.fullServerUrl(),i=Ca(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Sd(i,s,Lb(t,n),o);return a.errorHandler=Fb(e),a}class Bb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ln("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ln("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ln("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ln("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ln("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Wb extends Bb{initXhr(){this.xhr_.responseType="text"}}function kd(){return new Wb}/**
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
 */class Vt{constructor(e,n){this._service=e,n instanceof ve?this._location=n:this._location=ve.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vt(e,n)}get root(){const e=new ve(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Td(this._location.path)}get storage(){return this._service}get parent(){const e=Ib(this._location.path);if(e===null)return null;const n=new ve(this._location.bucket,e);return new Vt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hb(e)}}function Hb(t){const e={prefixes:[],items:[]};return Pd(t,e).then(()=>e)}async function Pd(t,e,n){const i=await jb(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await Pd(t,e,i.nextPageToken)}function jb(t,e){e!=null&&typeof e.maxResults=="number"&&fo("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=$b(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,kd)}function Vb(t){t._throwIfRoot("getDownloadURL");const e=Ub(t.storage,t._location,Ab());return t.storage.makeRequestWithTokens(e,kd).then(n=>{if(n===null)throw ub();return n})}function Gb(t,e){const n=Tb(t._location.path,e),r=new ve(t._location.bucket,n);return new Vt(t.storage,r)}/**
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
 */function zb(t){return/^[A-Za-z]+:\/\//.test(t)}function qb(t,e){return new Vt(t,e)}function Od(t,e){if(t instanceof Ta){const n=t;if(n._bucket==null)throw lb();const r=new Vt(n,n._bucket);return e!=null?Od(r,e):r}else return e!==void 0?Gb(t,e):t}function Kb(t,e){if(e&&zb(e)){if(t instanceof Ta)return qb(t,e);throw ho("To use ref(service, url), the first argument must be a Storage instance.")}else return Od(t,e)}function dl(t,e){const n=e==null?void 0:e[bd];return n==null?null:ve.makeFromBucketSpec(n,t)}function Yb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_u(i,t.app.options.projectId))}class Ta{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=J0,this._maxUploadRetryTime=Z0,this._requests=new Set,i!=null?this._bucket=ve.makeFromBucketSpec(i,this._host):this._bucket=dl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ve.makeFromBucketSpec(this._url,e):this._bucket=dl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vt(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new db(Ed());{const o=Cb(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const fl="@firebase/storage",pl="0.12.2";/**
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
 */const Nd="storage";function Qb(t){return t=ne(t),Hb(t)}function Xb(t){return t=ne(t),Vb(t)}function xd(t,e){return t=ne(t),Kb(t,e)}function Jb(t=No(),e){t=ne(t);const r=Ti(t,Nd).getImmediate({identifier:e}),i=pu("storage");return i&&Zb(r,...i),r}function Zb(t,e,n,r={}){Yb(t,e,n,r)}function ew(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ta(n,r,i,e,Kt)}function tw(){$t(new It(Nd,ew,"PUBLIC").setMultipleInstances(!0)),He(fl,pl,""),He(fl,pl,"esm2017")}tw();var Dd=typeof global=="object"&&global&&global.Object===Object&&global,nw=typeof self=="object"&&self&&self.Object===Object&&self,ut=Dd||nw||Function("return this")(),ze=ut.Symbol,Md=Object.prototype,rw=Md.hasOwnProperty,iw=Md.toString,Fn=ze?ze.toStringTag:void 0;function sw(t){var e=rw.call(t,Fn),n=t[Fn];try{t[Fn]=void 0;var r=!0}catch{}var i=iw.call(t);return r&&(e?t[Fn]=n:delete t[Fn]),i}var ow=Object.prototype,aw=ow.toString;function cw(t){return aw.call(t)}var lw="[object Null]",uw="[object Undefined]",gl=ze?ze.toStringTag:void 0;function kn(t){return t==null?t===void 0?uw:lw:gl&&gl in Object(t)?sw(t):cw(t)}function Gt(t){return t!=null&&typeof t=="object"}var hw="[object Symbol]";function Sa(t){return typeof t=="symbol"||Gt(t)&&kn(t)==hw}function Ld(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var qe=Array.isArray,dw=1/0,ml=ze?ze.prototype:void 0,_l=ml?ml.toString:void 0;function Fd(t){if(typeof t=="string")return t;if(qe(t))return Ld(t,Fd)+"";if(Sa(t))return _l?_l.call(t):"";var e=t+"";return e=="0"&&1/t==-dw?"-0":e}function Ra(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}function Aa(t){return t}var fw="[object AsyncFunction]",pw="[object Function]",gw="[object GeneratorFunction]",mw="[object Proxy]";function $d(t){if(!Ra(t))return!1;var e=kn(t);return e==pw||e==gw||e==fw||e==mw}var Ls=ut["__core-js_shared__"],yl=function(){var t=/[^.]+$/.exec(Ls&&Ls.keys&&Ls.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function _w(t){return!!yl&&yl in t}var yw=Function.prototype,vw=yw.toString;function Xt(t){if(t!=null){try{return vw.call(t)}catch{}try{return t+""}catch{}}return""}var bw=/[\\^$.*+?()[\]{}|]/g,ww=/^\[object .+?Constructor\]$/,Ew=Function.prototype,Cw=Object.prototype,Iw=Ew.toString,Tw=Cw.hasOwnProperty,Sw=RegExp("^"+Iw.call(Tw).replace(bw,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Rw(t){if(!Ra(t)||_w(t))return!1;var e=$d(t)?Sw:ww;return e.test(Xt(t))}function Aw(t,e){return t==null?void 0:t[e]}function Jt(t,e){var n=Aw(t,e);return Rw(n)?n:void 0}var po=Jt(ut,"WeakMap");function kw(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}var Pw=800,Ow=16,Nw=Date.now;function xw(t){var e=0,n=0;return function(){var r=Nw(),i=Ow-(r-n);if(n=r,i>0){if(++e>=Pw)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Dw(t){return function(){return t}}var vl=function(){try{var t=Jt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Mw=vl?function(t,e){return vl(t,"toString",{configurable:!0,enumerable:!1,value:Dw(e),writable:!0})}:Aa;const Lw=Mw;var Fw=xw(Lw);function $w(t,e,n,r){for(var i=t.length,s=n+(r?1:-1);r?s--:++s<i;)if(e(t[s],s,t))return s;return-1}function Uw(t){return t!==t}function Bw(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Ww(t,e,n){return e===e?Bw(t,e,n):$w(t,Uw,n)}function Hw(t,e){var n=t==null?0:t.length;return!!n&&Ww(t,e,0)>-1}var jw=9007199254740991,Vw=/^(?:0|[1-9]\d*)$/;function Ud(t,e){var n=typeof t;return e=e??jw,!!e&&(n=="number"||n!="symbol"&&Vw.test(t))&&t>-1&&t%1==0&&t<e}function Bd(t,e){return t===e||t!==t&&e!==e}var bl=Math.max;function Gw(t,e,n){return e=bl(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=bl(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),kw(t,this,a)}}function zw(t,e){return Fw(Gw(t,e,Aa),t+"")}var qw=9007199254740991;function ka(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=qw}function Wd(t){return t!=null&&ka(t.length)&&!$d(t)}var Kw=Object.prototype;function Yw(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Kw;return t===n}function Qw(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Xw="[object Arguments]";function wl(t){return Gt(t)&&kn(t)==Xw}var Hd=Object.prototype,Jw=Hd.hasOwnProperty,Zw=Hd.propertyIsEnumerable,Pa=wl(function(){return arguments}())?wl:function(t){return Gt(t)&&Jw.call(t,"callee")&&!Zw.call(t,"callee")};function eE(){return!1}var jd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,El=jd&&typeof module=="object"&&module&&!module.nodeType&&module,tE=El&&El.exports===jd,Cl=tE?ut.Buffer:void 0,nE=Cl?Cl.isBuffer:void 0,go=nE||eE,rE="[object Arguments]",iE="[object Array]",sE="[object Boolean]",oE="[object Date]",aE="[object Error]",cE="[object Function]",lE="[object Map]",uE="[object Number]",hE="[object Object]",dE="[object RegExp]",fE="[object Set]",pE="[object String]",gE="[object WeakMap]",mE="[object ArrayBuffer]",_E="[object DataView]",yE="[object Float32Array]",vE="[object Float64Array]",bE="[object Int8Array]",wE="[object Int16Array]",EE="[object Int32Array]",CE="[object Uint8Array]",IE="[object Uint8ClampedArray]",TE="[object Uint16Array]",SE="[object Uint32Array]",z={};z[yE]=z[vE]=z[bE]=z[wE]=z[EE]=z[CE]=z[IE]=z[TE]=z[SE]=!0;z[rE]=z[iE]=z[mE]=z[sE]=z[_E]=z[oE]=z[aE]=z[cE]=z[lE]=z[uE]=z[hE]=z[dE]=z[fE]=z[pE]=z[gE]=!1;function RE(t){return Gt(t)&&ka(t.length)&&!!z[kn(t)]}function Vd(t){return function(e){return t(e)}}var Gd=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Yn=Gd&&typeof module=="object"&&module&&!module.nodeType&&module,AE=Yn&&Yn.exports===Gd,Fs=AE&&Dd.process,Il=function(){try{var t=Yn&&Yn.require&&Yn.require("util").types;return t||Fs&&Fs.binding&&Fs.binding("util")}catch{}}(),Tl=Il&&Il.isTypedArray,zd=Tl?Vd(Tl):RE,kE=Object.prototype,PE=kE.hasOwnProperty;function OE(t,e){var n=qe(t),r=!n&&Pa(t),i=!n&&!r&&go(t),s=!n&&!r&&!i&&zd(t),o=n||r||i||s,a=o?Qw(t.length,String):[],c=a.length;for(var l in t)(e||PE.call(t,l))&&!(o&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Ud(l,c)))&&a.push(l);return a}function NE(t,e){return function(n){return t(e(n))}}var xE=NE(Object.keys,Object),DE=Object.prototype,ME=DE.hasOwnProperty;function LE(t){if(!Yw(t))return xE(t);var e=[];for(var n in Object(t))ME.call(t,n)&&n!="constructor"&&e.push(n);return e}function qd(t){return Wd(t)?OE(t):LE(t)}var FE=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$E=/^\w*$/;function Oa(t,e){if(qe(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Sa(t)?!0:$E.test(t)||!FE.test(t)||e!=null&&t in Object(e)}var hr=Jt(Object,"create");function UE(){this.__data__=hr?hr(null):{},this.size=0}function BE(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var WE="__lodash_hash_undefined__",HE=Object.prototype,jE=HE.hasOwnProperty;function VE(t){var e=this.__data__;if(hr){var n=e[t];return n===WE?void 0:n}return jE.call(e,t)?e[t]:void 0}var GE=Object.prototype,zE=GE.hasOwnProperty;function qE(t){var e=this.__data__;return hr?e[t]!==void 0:zE.call(e,t)}var KE="__lodash_hash_undefined__";function YE(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=hr&&e===void 0?KE:e,this}function zt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}zt.prototype.clear=UE;zt.prototype.delete=BE;zt.prototype.get=VE;zt.prototype.has=qE;zt.prototype.set=YE;function QE(){this.__data__=[],this.size=0}function Bi(t,e){for(var n=t.length;n--;)if(Bd(t[n][0],e))return n;return-1}var XE=Array.prototype,JE=XE.splice;function ZE(t){var e=this.__data__,n=Bi(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():JE.call(e,n,1),--this.size,!0}function eC(t){var e=this.__data__,n=Bi(e,t);return n<0?void 0:e[n][1]}function tC(t){return Bi(this.__data__,t)>-1}function nC(t,e){var n=this.__data__,r=Bi(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function ht(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ht.prototype.clear=QE;ht.prototype.delete=ZE;ht.prototype.get=eC;ht.prototype.has=tC;ht.prototype.set=nC;var dr=Jt(ut,"Map");function rC(){this.size=0,this.__data__={hash:new zt,map:new(dr||ht),string:new zt}}function iC(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Wi(t,e){var n=t.__data__;return iC(e)?n[typeof e=="string"?"string":"hash"]:n.map}function sC(t){var e=Wi(this,t).delete(t);return this.size-=e?1:0,e}function oC(t){return Wi(this,t).get(t)}function aC(t){return Wi(this,t).has(t)}function cC(t,e){var n=Wi(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function dt(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dt.prototype.clear=rC;dt.prototype.delete=sC;dt.prototype.get=oC;dt.prototype.has=aC;dt.prototype.set=cC;var lC="Expected a function";function Na(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(lC);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Na.Cache||dt),n}Na.Cache=dt;var uC=500;function hC(t){var e=Na(t,function(r){return n.size===uC&&n.clear(),r}),n=e.cache;return e}var dC=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,fC=/\\(\\)?/g,pC=hC(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(dC,function(n,r,i,s){e.push(i?s.replace(fC,"$1"):r||n)}),e});function gC(t){return t==null?"":Fd(t)}function Kd(t,e){return qe(t)?t:Oa(t,e)?[t]:pC(gC(t))}var mC=1/0;function Hi(t){if(typeof t=="string"||Sa(t))return t;var e=t+"";return e=="0"&&1/t==-mC?"-0":e}function Yd(t,e){e=Kd(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Hi(e[n++])];return n&&n==r?t:void 0}function _C(t,e,n){var r=t==null?void 0:Yd(t,e);return r===void 0?n:r}function Qd(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var Sl=ze?ze.isConcatSpreadable:void 0;function yC(t){return qe(t)||Pa(t)||!!(Sl&&t&&t[Sl])}function Xd(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=yC),i||(i=[]);++s<o;){var a=t[s];e>0&&n(a)?e>1?Xd(a,e-1,n,r,i):Qd(i,a):r||(i[i.length]=a)}return i}function vC(){this.__data__=new ht,this.size=0}function bC(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function wC(t){return this.__data__.get(t)}function EC(t){return this.__data__.has(t)}var CC=200;function IC(t,e){var n=this.__data__;if(n instanceof ht){var r=n.__data__;if(!dr||r.length<CC-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new dt(r)}return n.set(t,e),this.size=n.size,this}function et(t){var e=this.__data__=new ht(t);this.size=e.size}et.prototype.clear=vC;et.prototype.delete=bC;et.prototype.get=wC;et.prototype.has=EC;et.prototype.set=IC;function TC(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function SC(){return[]}var RC=Object.prototype,AC=RC.propertyIsEnumerable,Rl=Object.getOwnPropertySymbols,kC=Rl?function(t){return t==null?[]:(t=Object(t),TC(Rl(t),function(e){return AC.call(t,e)}))}:SC;const PC=kC;function OC(t,e,n){var r=e(t);return qe(t)?r:Qd(r,n(t))}function Al(t){return OC(t,qd,PC)}var mo=Jt(ut,"DataView"),_o=Jt(ut,"Promise"),yo=Jt(ut,"Set"),kl="[object Map]",NC="[object Object]",Pl="[object Promise]",Ol="[object Set]",Nl="[object WeakMap]",xl="[object DataView]",xC=Xt(mo),DC=Xt(dr),MC=Xt(_o),LC=Xt(yo),FC=Xt(po),Ot=kn;(mo&&Ot(new mo(new ArrayBuffer(1)))!=xl||dr&&Ot(new dr)!=kl||_o&&Ot(_o.resolve())!=Pl||yo&&Ot(new yo)!=Ol||po&&Ot(new po)!=Nl)&&(Ot=function(t){var e=kn(t),n=e==NC?t.constructor:void 0,r=n?Xt(n):"";if(r)switch(r){case xC:return xl;case DC:return kl;case MC:return Pl;case LC:return Ol;case FC:return Nl}return e});const Dl=Ot;var $C=ut.Uint8Array;const Ml=$C;var UC="__lodash_hash_undefined__";function BC(t){return this.__data__.set(t,UC),this}function WC(t){return this.__data__.has(t)}function fr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new dt;++e<n;)this.add(t[e])}fr.prototype.add=fr.prototype.push=BC;fr.prototype.has=WC;function HC(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function Jd(t,e){return t.has(e)}var jC=1,VC=2;function Zd(t,e,n,r,i,s){var o=n&jC,a=t.length,c=e.length;if(a!=c&&!(o&&c>a))return!1;var l=s.get(t),h=s.get(e);if(l&&h)return l==e&&h==t;var u=-1,d=!0,g=n&VC?new fr:void 0;for(s.set(t,e),s.set(e,t);++u<a;){var p=t[u],_=e[u];if(r)var v=o?r(_,p,u,e,t,s):r(p,_,u,t,e,s);if(v!==void 0){if(v)continue;d=!1;break}if(g){if(!HC(e,function(w,T){if(!Jd(g,T)&&(p===w||i(p,w,n,r,s)))return g.push(T)})){d=!1;break}}else if(!(p===_||i(p,_,n,r,s))){d=!1;break}}return s.delete(t),s.delete(e),d}function GC(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function zC(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var qC=1,KC=2,YC="[object Boolean]",QC="[object Date]",XC="[object Error]",JC="[object Map]",ZC="[object Number]",eI="[object RegExp]",tI="[object Set]",nI="[object String]",rI="[object Symbol]",iI="[object ArrayBuffer]",sI="[object DataView]",Ll=ze?ze.prototype:void 0,$s=Ll?Ll.valueOf:void 0;function oI(t,e,n,r,i,s,o){switch(n){case sI:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case iI:return!(t.byteLength!=e.byteLength||!s(new Ml(t),new Ml(e)));case YC:case QC:case ZC:return Bd(+t,+e);case XC:return t.name==e.name&&t.message==e.message;case eI:case nI:return t==e+"";case JC:var a=GC;case tI:var c=r&qC;if(a||(a=zC),t.size!=e.size&&!c)return!1;var l=o.get(t);if(l)return l==e;r|=KC,o.set(t,e);var h=Zd(a(t),a(e),r,i,s,o);return o.delete(t),h;case rI:if($s)return $s.call(t)==$s.call(e)}return!1}var aI=1,cI=Object.prototype,lI=cI.hasOwnProperty;function uI(t,e,n,r,i,s){var o=n&aI,a=Al(t),c=a.length,l=Al(e),h=l.length;if(c!=h&&!o)return!1;for(var u=c;u--;){var d=a[u];if(!(o?d in e:lI.call(e,d)))return!1}var g=s.get(t),p=s.get(e);if(g&&p)return g==e&&p==t;var _=!0;s.set(t,e),s.set(e,t);for(var v=o;++u<c;){d=a[u];var w=t[d],T=e[d];if(r)var E=o?r(T,w,d,e,t,s):r(w,T,d,t,e,s);if(!(E===void 0?w===T||i(w,T,n,r,s):E)){_=!1;break}v||(v=d=="constructor")}if(_&&!v){var y=t.constructor,C=e.constructor;y!=C&&"constructor"in t&&"constructor"in e&&!(typeof y=="function"&&y instanceof y&&typeof C=="function"&&C instanceof C)&&(_=!1)}return s.delete(t),s.delete(e),_}var hI=1,Fl="[object Arguments]",$l="[object Array]",Br="[object Object]",dI=Object.prototype,Ul=dI.hasOwnProperty;function fI(t,e,n,r,i,s){var o=qe(t),a=qe(e),c=o?$l:Dl(t),l=a?$l:Dl(e);c=c==Fl?Br:c,l=l==Fl?Br:l;var h=c==Br,u=l==Br,d=c==l;if(d&&go(t)){if(!go(e))return!1;o=!0,h=!1}if(d&&!h)return s||(s=new et),o||zd(t)?Zd(t,e,n,r,i,s):oI(t,e,c,n,r,i,s);if(!(n&hI)){var g=h&&Ul.call(t,"__wrapped__"),p=u&&Ul.call(e,"__wrapped__");if(g||p){var _=g?t.value():t,v=p?e.value():e;return s||(s=new et),i(_,v,n,r,s)}}return d?(s||(s=new et),uI(t,e,n,r,i,s)):!1}function xa(t,e,n,r,i){return t===e?!0:t==null||e==null||!Gt(t)&&!Gt(e)?t!==t&&e!==e:fI(t,e,n,r,xa,i)}var pI=1,gI=2;function mI(t,e,n,r){var i=n.length,s=i,o=!r;if(t==null)return!s;for(t=Object(t);i--;){var a=n[i];if(o&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<s;){a=n[i];var c=a[0],l=t[c],h=a[1];if(o&&a[2]){if(l===void 0&&!(c in t))return!1}else{var u=new et;if(r)var d=r(l,h,c,t,e,u);if(!(d===void 0?xa(h,l,pI|gI,r,u):d))return!1}}return!0}function ef(t){return t===t&&!Ra(t)}function _I(t){for(var e=qd(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,ef(i)]}return e}function tf(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function yI(t){var e=_I(t);return e.length==1&&e[0][2]?tf(e[0][0],e[0][1]):function(n){return n===t||mI(n,t,e)}}function vI(t,e){return t!=null&&e in Object(t)}function bI(t,e,n){e=Kd(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var o=Hi(e[r]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&ka(i)&&Ud(o,i)&&(qe(t)||Pa(t)))}function wI(t,e){return t!=null&&bI(t,e,vI)}var EI=1,CI=2;function II(t,e){return Oa(t)&&ef(e)?tf(Hi(t),e):function(n){var r=_C(n,t);return r===void 0&&r===e?wI(n,t):xa(e,r,EI|CI)}}function TI(t){return function(e){return e==null?void 0:e[t]}}function SI(t){return function(e){return Yd(e,t)}}function RI(t){return Oa(t)?TI(Hi(t)):SI(t)}function AI(t){return typeof t=="function"?t:t==null?Aa:typeof t=="object"?qe(t)?II(t[0],t[1]):yI(t):RI(t)}function Us(t){return Gt(t)&&Wd(t)}function kI(t,e,n){for(var r=-1,i=t==null?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}var PI=200;function OI(t,e,n,r){var i=-1,s=Hw,o=!0,a=t.length,c=[],l=e.length;if(!a)return c;n&&(e=Ld(e,Vd(n))),r?(s=kI,o=!1):e.length>=PI&&(s=Jd,o=!1,e=new fr(e));e:for(;++i<a;){var h=t[i],u=n==null?h:n(h);if(h=r||h!==0?h:0,o&&u===u){for(var d=l;d--;)if(e[d]===u)continue e;c.push(h)}else s(e,u,r)||c.push(h)}return c}function NI(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var xI=zw(function(t,e){var n=NI(e);return Us(n)&&(n=void 0),Us(t)?OI(t,Xd(e,1,Us,!0),AI(n)):[]});const DI=xI,nf=Cu(Gf.firebase),ft=Y0(nf),MI=Jb(),LI=xd(MI),AA=$_(nf),FI=2131165628,$I=2131165629;let Wr=null;async function UI(){const e=(await Ui(Ce(lt(ft),"tags"))).val();return Object.values(e).map(n=>n)}async function rf(){return Wr!==null||(Wr=UI()),Wr}async function Da(t){const e=await rf(),n=new Map(e.map(i=>[i.tagID,i])),r=[];for(const i of t){const s=n.get(i);s!==void 0&&r.push(s)}return r}async function sf(t){const e=await yd(Ce(lt(ft),"tags"));if(e.key===null)throw new Error("Failed to create tag: tagRef key is null");const n={tagID:e.key,...t};return An(e,n),n}async function of(t,e){const n=Ce(lt(ft),`tags/${t.tagID}`),r=new Set(t.associatedExerciseIds);r.add(e);const i={...t,associatedExerciseIds:Array.from(r)};return An(n,i),i}async function BI(t,e){const n=Ce(lt(ft),`tags/${t.tagID}`),r=new Set(t.associatedExerciseIds);r.delete(e);const i={...t,associatedExerciseIds:Array.from(r)};return An(n,i),i}function af(t,e,n){const r=t,i=new Map(e.map(c=>[c.tagID,c])),s=new Set(r.tagIDs??[]),o=[];for(const c of s){const l=i.get(c);l!==void 0&&o.push(l)}o.sort((c,l)=>c.tag.localeCompare(l.tag));const a=So(n);return{...r,tags:o,images:a}}async function kA(t){const e=await rf(),n=await Ma(),i=(await Ui(Ce(lt(ft),"exercises"))).val();return Object.values(i).map(s=>af(s,e,n)).filter(s=>!(s.name===void 0||t.tagIDs.length>0&&!s.tags.some(o=>t.tagIDs.includes(o.tagID))||t.exertionLevel!==void 0&&s.exertionLevel!==t.exertionLevel||t.name!==void 0&&!s.name.toLowerCase().includes(t.name.toLowerCase())||t.players!==void 0&&(s.playersMin>t.players||s.playersMax<t.players))).toSorted((s,o)=>s.name.localeCompare(o.name))}async function PA(t){const e=await Ui(Ce(lt(ft),`exercises/${t}`));if(!e.exists())return null;const n=e.val(),r=await Da(n.tagIDs??[]),i=await Ma();return af(n,r,i)}async function OA(t,e){const{exertionLevel:n,howToPlay:r,name:i,originCountry:s,playersMin:o,playersMax:a,tags:c}=e,l=[],h=[];for(const y of c){const[C,R]=y.split(":");C==="s"?l.push(R):C==="t"&&h.push(R)}const u=await Da(h),d=l.map(y=>sf({tag:y,associatedExerciseIds:[]})),g=await Promise.all(d);let p=[...u,...g];const _=p.map(y=>y.tagID),v=await yd(Ce(lt(ft),"exercises"));if(v.key===null)throw new Error("Failed to create exercise: exerciseRef key is null");const w={created:new Date().valueOf(),createdByName:t.displayName??t.email??"Some jugger",createdByUID:t.uid,eid:v.key,exertionLevel:n,howToPlay:r,imageResource:FI,imageResourceSmall:$I,name:i,originCountry:s,playersMax:a,playersMin:o,tagIDs:_};An(v,{...w});const T=p.map(y=>of(y,w.eid));return p=await Promise.all(T),{...w,tags:p,images:So(await Ma())}}async function NA(t,e){const{exertionLevel:n,howToPlay:r,name:i,playersMin:s,playersMax:o,tags:a}=e,c=[],l=[];for(const y of a){const[C,R]=y.split(":");C==="s"?c.push(R):C==="t"&&l.push(R)}const h=await Da(l),u=c.map(y=>sf({tag:y,associatedExerciseIds:[]})),d=await Promise.all(u);let g=[...h,...d];const p=g.map(y=>y.tagID),v=DI(t.tags,g,y=>y.tagID).map(y=>BI(y,t.eid));await Promise.all(v);const w=Ce(lt(ft),`exercises/${t.eid}`);W0(w,{exertionLevel:n,howToPlay:r,name:i,playersMax:o,playersMin:s,tagIDs:p});const T=g.map(y=>of(y,t.eid));return g=await Promise.all(T),{...t,exertionLevel:n,howToPlay:r,name:i,playersMax:o,playersMin:s,tags:g}}const Bl={role:"user"};async function xA(t){const e=Ce(lt(ft),`users/${t}`),n=await Ui(e);return n.exists()?n.val():(await An(e,Bl),Bl)}async function Ma(){const t=xd(LI,"samples/"),e=await Qb(t);return await Promise.all(e.items.map(r=>Xb(r)))}const Wl=t=>t,WI=()=>{let t=Wl;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Wl}}},HI=WI(),jI=HI;function qt(t,...e){const n=new URL(`https://mui.com/production-error/?code=${t}`);return e.forEach(r=>n.searchParams.append("args[]",r)),`Minified MUI error #${t}; visit ${n} for the full message.`}function cf(t){if(typeof t!="string")throw new Error(qt(7));return t.charAt(0).toUpperCase()+t.slice(1)}function lf(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=lf(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function DA(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=lf(t))&&(r&&(r+=" "),r+=e);return r}function MA(t,e,n=void 0){const r={};for(const i in t){const s=t[i];let o="",a=!0;for(let c=0;c<s.length;c+=1){const l=s[c];l&&(o+=(a===!0?"":" ")+e(l),a=!1,n&&n[l]&&(o+=" "+n[l]))}r[i]=o}return r}var uf={exports:{}},H={};/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.transitional.element"),Fa=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),Vi=Symbol.for("react.strict_mode"),Gi=Symbol.for("react.profiler"),zi=Symbol.for("react.consumer"),qi=Symbol.for("react.context"),Ki=Symbol.for("react.forward_ref"),Yi=Symbol.for("react.suspense"),Qi=Symbol.for("react.suspense_list"),Xi=Symbol.for("react.memo"),Ji=Symbol.for("react.lazy"),VI=Symbol.for("react.view_transition"),GI=Symbol.for("react.client.reference");function Ne(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case La:switch(t=t.type,t){case ji:case Gi:case Vi:case Yi:case Qi:case VI:return t;default:switch(t=t&&t.$$typeof,t){case qi:case Ki:case Ji:case Xi:return t;case zi:return t;default:return e}}case Fa:return e}}}H.ContextConsumer=zi;H.ContextProvider=qi;H.Element=La;H.ForwardRef=Ki;H.Fragment=ji;H.Lazy=Ji;H.Memo=Xi;H.Portal=Fa;H.Profiler=Gi;H.StrictMode=Vi;H.Suspense=Yi;H.SuspenseList=Qi;H.isContextConsumer=function(t){return Ne(t)===zi};H.isContextProvider=function(t){return Ne(t)===qi};H.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===La};H.isForwardRef=function(t){return Ne(t)===Ki};H.isFragment=function(t){return Ne(t)===ji};H.isLazy=function(t){return Ne(t)===Ji};H.isMemo=function(t){return Ne(t)===Xi};H.isPortal=function(t){return Ne(t)===Fa};H.isProfiler=function(t){return Ne(t)===Gi};H.isStrictMode=function(t){return Ne(t)===Vi};H.isSuspense=function(t){return Ne(t)===Yi};H.isSuspenseList=function(t){return Ne(t)===Qi};H.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ji||t===Gi||t===Vi||t===Yi||t===Qi||typeof t=="object"&&t!==null&&(t.$$typeof===Ji||t.$$typeof===Xi||t.$$typeof===qi||t.$$typeof===zi||t.$$typeof===Ki||t.$$typeof===GI||t.getModuleId!==void 0)};H.typeOf=Ne;uf.exports=H;var hf=uf.exports;function We(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function df(t){if(de.isValidElement(t)||hf.isValidElementType(t)||!We(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=df(t[n])}),e}function Ee(t,e,n={clone:!0}){const r=n.clone?{...t}:t;return We(t)&&We(e)&&Object.keys(e).forEach(i=>{de.isValidElement(e[i])||hf.isValidElementType(e[i])?r[i]=e[i]:We(e[i])&&Object.prototype.hasOwnProperty.call(t,i)&&We(t[i])?r[i]=Ee(t[i],e[i],n):n.clone?r[i]=We(e[i])?df(e[i]):e[i]:r[i]=e[i]}),r}function Qn(t,e){return e?Ee(t,e,{clone:!1}):t}function zI(t,e){if(!t.containerQueries)return e;const n=Object.keys(e).filter(r=>r.startsWith("@container")).sort((r,i)=>{var o,a;const s=/min-width:\s*([0-9.]+)/;return+(((o=r.match(s))==null?void 0:o[1])||0)-+(((a=i.match(s))==null?void 0:a[1])||0)});return n.length?n.reduce((r,i)=>{const s=e[i];return delete r[i],r[i]=s,r},{...e}):e}function qI(t,e){return e==="@"||e.startsWith("@")&&(t.some(n=>e.startsWith(`@${n}`))||!!e.match(/^@\d/))}function KI(t,e){const n=e.match(/^@([^/]+)?\/?(.+)?$/);if(!n)return null;const[,r,i]=n,s=Number.isNaN(+r)?r||0:+r;return t.containerQueries(i).up(s)}function YI(t){const e=(s,o)=>s.replace("@media",o?`@container ${o}`:"@container");function n(s,o){s.up=(...a)=>e(t.breakpoints.up(...a),o),s.down=(...a)=>e(t.breakpoints.down(...a),o),s.between=(...a)=>e(t.breakpoints.between(...a),o),s.only=(...a)=>e(t.breakpoints.only(...a),o),s.not=(...a)=>{const c=e(t.breakpoints.not(...a),o);return c.includes("not all and")?c.replace("not all and ","").replace("min-width:","width<").replace("max-width:","width>").replace("and","or"):c}}const r={},i=s=>(n(r,s),r);return n(i),{...t,containerQueries:i}}const Zi={xs:0,sm:600,md:900,lg:1200,xl:1536},Hl={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Zi[t]}px)`},QI={containerQueries:t=>({up:e=>{let n=typeof e=="number"?e:Zi[e]||e;return typeof n=="number"&&(n=`${n}px`),t?`@container ${t} (min-width:${n})`:`@container (min-width:${n})`}})};function rt(t,e,n){const r=t.theme||{};if(Array.isArray(e)){const s=r.breakpoints||Hl;return e.reduce((o,a,c)=>(o[s.up(s.keys[c])]=n(e[c]),o),{})}if(typeof e=="object"){const s=r.breakpoints||Hl;return Object.keys(e).reduce((o,a)=>{if(qI(s.keys,a)){const c=KI(r.containerQueries?r:QI,a);c&&(o[c]=n(e[a],a))}else if(Object.keys(s.values||Zi).includes(a)){const c=s.up(a);o[c]=n(e[a],a)}else{const c=a;o[c]=e[c]}return o},{})}return n(e)}function ff(t={}){var n;return((n=t.keys)==null?void 0:n.reduce((r,i)=>{const s=t.up(i);return r[s]={},r},{}))||{}}function pf(t,e){return t.reduce((n,r)=>{const i=n[r];return(!i||Object.keys(i).length===0)&&delete n[r],n},e)}function LA(t,...e){const n=ff(t),r=[n,...e].reduce((i,s)=>Ee(i,s),{});return pf(Object.keys(n),r)}function XI(t,e){if(typeof t!="object")return{};const n={},r=Object.keys(e);return Array.isArray(t)?r.forEach((i,s)=>{s<t.length&&(n[i]=!0)}):r.forEach(i=>{t[i]!=null&&(n[i]=!0)}),n}function FA({values:t,breakpoints:e,base:n}){const r=n||XI(t,e),i=Object.keys(r);if(i.length===0)return t;let s;return i.reduce((o,a,c)=>(Array.isArray(t)?(o[a]=t[c]!=null?t[c]:t[s],s=c):typeof t=="object"?(o[a]=t[a]!=null?t[a]:t[s],s=a):o[a]=t,o),{})}function es(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const r=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(r!=null)return r}return e.split(".").reduce((r,i)=>r&&r[i]!=null?r[i]:null,t)}function wi(t,e,n,r=n){let i;return typeof t=="function"?i=t(n):Array.isArray(t)?i=t[n]||r:i=es(t,n)||r,e&&(i=e(i,r,t)),i}function ee(t){const{prop:e,cssProperty:n=t.prop,themeKey:r,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],c=o.theme,l=es(c,r)||{};return rt(o,a,u=>{let d=wi(l,i,u);return u===d&&typeof u=="string"&&(d=wi(l,i,`${e}${u==="default"?"":cf(u)}`,u)),n===!1?d:{[n]:d}})};return s.propTypes={},s.filterProps=[e],s}function JI(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const ZI={m:"margin",p:"padding"},eT={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},jl={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},tT=JI(t=>{if(t.length>2)if(jl[t])t=jl[t];else return[t];const[e,n]=t.split(""),r=ZI[e],i=eT[n]||"";return Array.isArray(i)?i.map(s=>r+s):[r+i]}),$a=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],Ua=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...$a,...Ua];function Or(t,e,n,r){const i=es(t,e,!0)??n;return typeof i=="number"||typeof i=="string"?s=>typeof s=="string"?s:typeof i=="string"?i.startsWith("var(")&&s===0?0:i.startsWith("var(")&&s===1?i:`calc(${s} * ${i})`:i*s:Array.isArray(i)?s=>{if(typeof s=="string")return s;const o=Math.abs(s),a=i[o];return s>=0?a:typeof a=="number"?-a:typeof a=="string"&&a.startsWith("var(")?`calc(-1 * ${a})`:`-${a}`}:typeof i=="function"?i:()=>{}}function Ba(t){return Or(t,"spacing",8)}function Nr(t,e){return typeof e=="string"||e==null?e:t(e)}function nT(t,e){return n=>t.reduce((r,i)=>(r[i]=Nr(e,n),r),{})}function rT(t,e,n,r){if(!e.includes(n))return null;const i=tT(n),s=nT(i,r),o=t[n];return rt(t,o,s)}function gf(t,e){const n=Ba(t.theme);return Object.keys(t).map(r=>rT(t,e,r,n)).reduce(Qn,{})}function K(t){return gf(t,$a)}K.propTypes={};K.filterProps=$a;function Y(t){return gf(t,Ua)}Y.propTypes={};Y.filterProps=Ua;function ts(...t){const e=t.reduce((r,i)=>(i.filterProps.forEach(s=>{r[s]=i}),r),{}),n=r=>Object.keys(r).reduce((i,s)=>e[s]?Qn(i,e[s](r)):i,{});return n.propTypes={},n.filterProps=t.reduce((r,i)=>r.concat(i.filterProps),[]),n}function Ae(t){return typeof t!="number"?t:`${t}px solid`}function xe(t,e){return ee({prop:t,themeKey:"borders",transform:e})}const iT=xe("border",Ae),sT=xe("borderTop",Ae),oT=xe("borderRight",Ae),aT=xe("borderBottom",Ae),cT=xe("borderLeft",Ae),lT=xe("borderColor"),uT=xe("borderTopColor"),hT=xe("borderRightColor"),dT=xe("borderBottomColor"),fT=xe("borderLeftColor"),pT=xe("outline",Ae),gT=xe("outlineColor"),ns=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Or(t.theme,"shape.borderRadius",4),n=r=>({borderRadius:Nr(e,r)});return rt(t,t.borderRadius,n)}return null};ns.propTypes={};ns.filterProps=["borderRadius"];ts(iT,sT,oT,aT,cT,lT,uT,hT,dT,fT,ns,pT,gT);const rs=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Or(t.theme,"spacing",8),n=r=>({gap:Nr(e,r)});return rt(t,t.gap,n)}return null};rs.propTypes={};rs.filterProps=["gap"];const is=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Or(t.theme,"spacing",8),n=r=>({columnGap:Nr(e,r)});return rt(t,t.columnGap,n)}return null};is.propTypes={};is.filterProps=["columnGap"];const ss=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Or(t.theme,"spacing",8),n=r=>({rowGap:Nr(e,r)});return rt(t,t.rowGap,n)}return null};ss.propTypes={};ss.filterProps=["rowGap"];const mT=ee({prop:"gridColumn"}),_T=ee({prop:"gridRow"}),yT=ee({prop:"gridAutoFlow"}),vT=ee({prop:"gridAutoColumns"}),bT=ee({prop:"gridAutoRows"}),wT=ee({prop:"gridTemplateColumns"}),ET=ee({prop:"gridTemplateRows"}),CT=ee({prop:"gridTemplateAreas"}),IT=ee({prop:"gridArea"});ts(rs,is,ss,mT,_T,yT,vT,bT,wT,ET,CT,IT);function dn(t,e){return e==="grey"?e:t}const TT=ee({prop:"color",themeKey:"palette",transform:dn}),ST=ee({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:dn}),RT=ee({prop:"backgroundColor",themeKey:"palette",transform:dn});ts(TT,ST,RT);function Te(t){return t<=1&&t!==0?`${t*100}%`:t}const AT=ee({prop:"width",transform:Te}),Wa=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,s,o,a,c;const r=((o=(s=(i=t.theme)==null?void 0:i.breakpoints)==null?void 0:s.values)==null?void 0:o[n])||Zi[n];return r?((c=(a=t.theme)==null?void 0:a.breakpoints)==null?void 0:c.unit)!=="px"?{maxWidth:`${r}${t.theme.breakpoints.unit}`}:{maxWidth:r}:{maxWidth:Te(n)}};return rt(t,t.maxWidth,e)}return null};Wa.filterProps=["maxWidth"];const kT=ee({prop:"minWidth",transform:Te}),PT=ee({prop:"height",transform:Te}),OT=ee({prop:"maxHeight",transform:Te}),NT=ee({prop:"minHeight",transform:Te});ee({prop:"size",cssProperty:"width",transform:Te});ee({prop:"size",cssProperty:"height",transform:Te});const xT=ee({prop:"boxSizing"});ts(AT,Wa,kT,PT,OT,NT,xT);const xr={border:{themeKey:"borders",transform:Ae},borderTop:{themeKey:"borders",transform:Ae},borderRight:{themeKey:"borders",transform:Ae},borderBottom:{themeKey:"borders",transform:Ae},borderLeft:{themeKey:"borders",transform:Ae},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Ae},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:ns},color:{themeKey:"palette",transform:dn},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:dn},backgroundColor:{themeKey:"palette",transform:dn},p:{style:Y},pt:{style:Y},pr:{style:Y},pb:{style:Y},pl:{style:Y},px:{style:Y},py:{style:Y},padding:{style:Y},paddingTop:{style:Y},paddingRight:{style:Y},paddingBottom:{style:Y},paddingLeft:{style:Y},paddingX:{style:Y},paddingY:{style:Y},paddingInline:{style:Y},paddingInlineStart:{style:Y},paddingInlineEnd:{style:Y},paddingBlock:{style:Y},paddingBlockStart:{style:Y},paddingBlockEnd:{style:Y},m:{style:K},mt:{style:K},mr:{style:K},mb:{style:K},ml:{style:K},mx:{style:K},my:{style:K},margin:{style:K},marginTop:{style:K},marginRight:{style:K},marginBottom:{style:K},marginLeft:{style:K},marginX:{style:K},marginY:{style:K},marginInline:{style:K},marginInlineStart:{style:K},marginInlineEnd:{style:K},marginBlock:{style:K},marginBlockStart:{style:K},marginBlockEnd:{style:K},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:rs},rowGap:{style:ss},columnGap:{style:is},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Te},maxWidth:{style:Wa},minWidth:{transform:Te},height:{transform:Te},maxHeight:{transform:Te},minHeight:{transform:Te},boxSizing:{},font:{themeKey:"font"},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function DT(...t){const e=t.reduce((r,i)=>r.concat(Object.keys(i)),[]),n=new Set(e);return t.every(r=>n.size===Object.keys(r).length)}function MT(t,e){return typeof t=="function"?t(e):t}function LT(){function t(n,r,i,s){const o={[n]:r,theme:i},a=s[n];if(!a)return{[n]:r};const{cssProperty:c=n,themeKey:l,transform:h,style:u}=a;if(r==null)return null;if(l==="typography"&&r==="inherit")return{[n]:r};const d=es(i,l)||{};return u?u(o):rt(o,r,p=>{let _=wi(d,h,p);return p===_&&typeof p=="string"&&(_=wi(d,h,`${n}${p==="default"?"":cf(p)}`,p)),c===!1?_:{[c]:_}})}function e(n){const{sx:r,theme:i={}}=n||{};if(!r)return null;const s=i.unstable_sxConfig??xr;function o(a){let c=a;if(typeof a=="function")c=a(i);else if(typeof a!="object")return a;if(!c)return null;const l=ff(i.breakpoints),h=Object.keys(l);let u=l;return Object.keys(c).forEach(d=>{const g=MT(c[d],i);if(g!=null)if(typeof g=="object")if(s[d])u=Qn(u,t(d,g,i,s));else{const p=rt({theme:i},g,_=>({[d]:_}));DT(p,g)?u[d]=e({sx:g,theme:i}):u=Qn(u,p)}else u=Qn(u,t(d,g,i,s))}),zI(i,pf(h,u))}return Array.isArray(r)?r.map(o):o(r)}return e}const bn=LT();bn.filterProps=["sx"];const FT=t=>{var r;const e={systemProps:{},otherProps:{}},n=((r=t==null?void 0:t.theme)==null?void 0:r.unstable_sxConfig)??xr;return Object.keys(t).forEach(i=>{n[i]?e.systemProps[i]=t[i]:e.otherProps[i]=t[i]}),e};function $T(t){const{sx:e,...n}=t,{systemProps:r,otherProps:i}=FT(n);let s;return Array.isArray(e)?s=[r,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return We(a)?{...r,...a}:r}:s={...r,...e},{...i,sx:s}}function vo(){return vo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vo.apply(null,arguments)}function UT(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var BT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,WT=UT(function(t){return BT.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),HT=!1;function jT(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function VT(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var GT=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!HT:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(VT(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=jT(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},t}(),pe="-ms-",Ei="-moz-",M="-webkit-",mf="comm",Ha="rule",ja="decl",zT="@import",_f="@keyframes",qT="@layer",KT=Math.abs,os=String.fromCharCode,YT=Object.assign;function QT(t,e){return ue(t,0)^45?(((e<<2^ue(t,0))<<2^ue(t,1))<<2^ue(t,2))<<2^ue(t,3):0}function yf(t){return t.trim()}function XT(t,e){return(t=e.exec(t))?t[0]:t}function L(t,e,n){return t.replace(e,n)}function bo(t,e){return t.indexOf(e)}function ue(t,e){return t.charCodeAt(e)|0}function pr(t,e,n){return t.slice(e,n)}function Ue(t){return t.length}function Va(t){return t.length}function Hr(t,e){return e.push(t),t}function JT(t,e){return t.map(e).join("")}var as=1,wn=1,vf=0,Ie=0,te=0,Pn="";function cs(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:as,column:wn,length:o,return:""}}function $n(t,e){return YT(cs("",null,null,"",null,null,0),t,{length:-t.length},e)}function ZT(){return te}function eS(){return te=Ie>0?ue(Pn,--Ie):0,wn--,te===10&&(wn=1,as--),te}function Se(){return te=Ie<vf?ue(Pn,Ie++):0,wn++,te===10&&(wn=1,as++),te}function Ge(){return ue(Pn,Ie)}function Yr(){return Ie}function Dr(t,e){return pr(Pn,t,e)}function gr(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bf(t){return as=wn=1,vf=Ue(Pn=t),Ie=0,[]}function wf(t){return Pn="",t}function Qr(t){return yf(Dr(Ie-1,wo(t===91?t+2:t===40?t+1:t)))}function tS(t){for(;(te=Ge())&&te<33;)Se();return gr(t)>2||gr(te)>3?"":" "}function nS(t,e){for(;--e&&Se()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return Dr(t,Yr()+(e<6&&Ge()==32&&Se()==32))}function wo(t){for(;Se();)switch(te){case t:return Ie;case 34:case 39:t!==34&&t!==39&&wo(te);break;case 40:t===41&&wo(t);break;case 92:Se();break}return Ie}function rS(t,e){for(;Se()&&t+te!==57;)if(t+te===84&&Ge()===47)break;return"/*"+Dr(e,Ie-1)+"*"+os(t===47?t:Se())}function iS(t){for(;!gr(Ge());)Se();return Dr(t,Ie)}function sS(t){return wf(Xr("",null,null,null,[""],t=bf(t),0,[0],t))}function Xr(t,e,n,r,i,s,o,a,c){for(var l=0,h=0,u=o,d=0,g=0,p=0,_=1,v=1,w=1,T=0,E="",y=i,C=s,R=r,A=E;v;)switch(p=T,T=Se()){case 40:if(p!=108&&ue(A,u-1)==58){bo(A+=L(Qr(T),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:A+=Qr(T);break;case 9:case 10:case 13:case 32:A+=tS(p);break;case 92:A+=nS(Yr()-1,7);continue;case 47:switch(Ge()){case 42:case 47:Hr(oS(rS(Se(),Yr()),e,n),c);break;default:A+="/"}break;case 123*_:a[l++]=Ue(A)*w;case 125*_:case 59:case 0:switch(T){case 0:case 125:v=0;case 59+h:w==-1&&(A=L(A,/\f/g,"")),g>0&&Ue(A)-u&&Hr(g>32?Gl(A+";",r,n,u-1):Gl(L(A," ","")+";",r,n,u-2),c);break;case 59:A+=";";default:if(Hr(R=Vl(A,e,n,l,h,i,a,E,y=[],C=[],u),s),T===123)if(h===0)Xr(A,e,R,R,y,s,u,a,C);else switch(d===99&&ue(A,3)===110?100:d){case 100:case 108:case 109:case 115:Xr(t,R,R,r&&Hr(Vl(t,R,R,0,0,i,a,E,i,y=[],u),C),i,C,u,a,r?y:C);break;default:Xr(A,R,R,R,[""],C,0,a,C)}}l=h=g=0,_=w=1,E=A="",u=o;break;case 58:u=1+Ue(A),g=p;default:if(_<1){if(T==123)--_;else if(T==125&&_++==0&&eS()==125)continue}switch(A+=os(T),T*_){case 38:w=h>0?1:(A+="\f",-1);break;case 44:a[l++]=(Ue(A)-1)*w,w=1;break;case 64:Ge()===45&&(A+=Qr(Se())),d=Ge(),h=u=Ue(E=A+=iS(Yr())),T++;break;case 45:p===45&&Ue(A)==2&&(_=0)}}return s}function Vl(t,e,n,r,i,s,o,a,c,l,h){for(var u=i-1,d=i===0?s:[""],g=Va(d),p=0,_=0,v=0;p<r;++p)for(var w=0,T=pr(t,u+1,u=KT(_=o[p])),E=t;w<g;++w)(E=yf(_>0?d[w]+" "+T:L(T,/&\f/g,d[w])))&&(c[v++]=E);return cs(t,e,n,i===0?Ha:a,c,l,h)}function oS(t,e,n){return cs(t,e,n,mf,os(ZT()),pr(t,2,-2),0)}function Gl(t,e,n,r){return cs(t,e,n,ja,pr(t,0,r),pr(t,r+1,-1),r)}function fn(t,e){for(var n="",r=Va(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function aS(t,e,n,r){switch(t.type){case qT:if(t.children.length)break;case zT:case ja:return t.return=t.return||t.value;case mf:return"";case _f:return t.return=t.value+"{"+fn(t.children,r)+"}";case Ha:t.value=t.props.join(",")}return Ue(n=fn(t.children,r))?t.return=t.value+"{"+n+"}":""}function cS(t){var e=Va(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function lS(t){return function(e){e.root||(e=e.return)&&t(e)}}var uS=function(e,n,r){for(var i=0,s=0;i=s,s=Ge(),i===38&&s===12&&(n[r]=1),!gr(s);)Se();return Dr(e,Ie)},hS=function(e,n){var r=-1,i=44;do switch(gr(i)){case 0:i===38&&Ge()===12&&(n[r]=1),e[r]+=uS(Ie-1,n,r);break;case 2:e[r]+=Qr(i);break;case 4:if(i===44){e[++r]=Ge()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=os(i)}while(i=Se());return e},dS=function(e,n){return wf(hS(bf(e),n))},zl=new WeakMap,fS=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!zl.get(r))&&!i){zl.set(e,!0);for(var s=[],o=dS(n,s),a=r.props,c=0,l=0;c<o.length;c++)for(var h=0;h<a.length;h++,l++)e.props[l]=s[c]?o[c].replace(/&\f/g,a[h]):a[h]+" "+o[c]}}},pS=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function Ef(t,e){switch(QT(t,e)){case 5103:return M+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return M+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return M+t+Ei+t+pe+t+t;case 6828:case 4268:return M+t+pe+t+t;case 6165:return M+t+pe+"flex-"+t+t;case 5187:return M+t+L(t,/(\w+).+(:[^]+)/,M+"box-$1$2"+pe+"flex-$1$2")+t;case 5443:return M+t+pe+"flex-item-"+L(t,/flex-|-self/,"")+t;case 4675:return M+t+pe+"flex-line-pack"+L(t,/align-content|flex-|-self/,"")+t;case 5548:return M+t+pe+L(t,"shrink","negative")+t;case 5292:return M+t+pe+L(t,"basis","preferred-size")+t;case 6060:return M+"box-"+L(t,"-grow","")+M+t+pe+L(t,"grow","positive")+t;case 4554:return M+L(t,/([^-])(transform)/g,"$1"+M+"$2")+t;case 6187:return L(L(L(t,/(zoom-|grab)/,M+"$1"),/(image-set)/,M+"$1"),t,"")+t;case 5495:case 3959:return L(t,/(image-set\([^]*)/,M+"$1$`$1");case 4968:return L(L(t,/(.+:)(flex-)?(.*)/,M+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+M+t+t;case 4095:case 3583:case 4068:case 2532:return L(t,/(.+)-inline(.+)/,M+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ue(t)-1-e>6)switch(ue(t,e+1)){case 109:if(ue(t,e+4)!==45)break;case 102:return L(t,/(.+:)(.+)-([^]+)/,"$1"+M+"$2-$3$1"+Ei+(ue(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~bo(t,"stretch")?Ef(L(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(ue(t,e+1)!==115)break;case 6444:switch(ue(t,Ue(t)-3-(~bo(t,"!important")&&10))){case 107:return L(t,":",":"+M)+t;case 101:return L(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+M+(ue(t,14)===45?"inline-":"")+"box$3$1"+M+"$2$3$1"+pe+"$2box$3")+t}break;case 5936:switch(ue(t,e+11)){case 114:return M+t+pe+L(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return M+t+pe+L(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return M+t+pe+L(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return M+t+pe+t+t}return t}var gS=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case ja:e.return=Ef(e.value,e.length);break;case _f:return fn([$n(e,{value:L(e.value,"@","@"+M)})],i);case Ha:if(e.length)return JT(e.props,function(s){switch(XT(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return fn([$n(e,{props:[L(s,/:(read-\w+)/,":"+Ei+"$1")]})],i);case"::placeholder":return fn([$n(e,{props:[L(s,/:(plac\w+)/,":"+M+"input-$1")]}),$n(e,{props:[L(s,/:(plac\w+)/,":"+Ei+"$1")]}),$n(e,{props:[L(s,/:(plac\w+)/,pe+"input-$1")]})],i)}return""})}},mS=[gS],_S=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(_){var v=_.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(_),_.setAttribute("data-s",""))})}var i=e.stylisPlugins||mS,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(_){for(var v=_.getAttribute("data-emotion").split(" "),w=1;w<v.length;w++)s[v[w]]=!0;a.push(_)});var c,l=[fS,pS];{var h,u=[aS,lS(function(_){h.insert(_)})],d=cS(l.concat(i,u)),g=function(v){return fn(sS(v),d)};c=function(v,w,T,E){h=T,g(v?v+"{"+w.styles+"}":w.styles),E&&(p.inserted[w.name]=!0)}}var p={key:n,sheet:new GT({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return p.sheet.hydrate(a),p},Cf={exports:{}},F={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=typeof Symbol=="function"&&Symbol.for,Ga=le?Symbol.for("react.element"):60103,za=le?Symbol.for("react.portal"):60106,ls=le?Symbol.for("react.fragment"):60107,us=le?Symbol.for("react.strict_mode"):60108,hs=le?Symbol.for("react.profiler"):60114,ds=le?Symbol.for("react.provider"):60109,fs=le?Symbol.for("react.context"):60110,qa=le?Symbol.for("react.async_mode"):60111,ps=le?Symbol.for("react.concurrent_mode"):60111,gs=le?Symbol.for("react.forward_ref"):60112,ms=le?Symbol.for("react.suspense"):60113,yS=le?Symbol.for("react.suspense_list"):60120,_s=le?Symbol.for("react.memo"):60115,ys=le?Symbol.for("react.lazy"):60116,vS=le?Symbol.for("react.block"):60121,bS=le?Symbol.for("react.fundamental"):60117,wS=le?Symbol.for("react.responder"):60118,ES=le?Symbol.for("react.scope"):60119;function Re(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ga:switch(t=t.type,t){case qa:case ps:case ls:case hs:case us:case ms:return t;default:switch(t=t&&t.$$typeof,t){case fs:case gs:case ys:case _s:case ds:return t;default:return e}}case za:return e}}}function If(t){return Re(t)===ps}F.AsyncMode=qa;F.ConcurrentMode=ps;F.ContextConsumer=fs;F.ContextProvider=ds;F.Element=Ga;F.ForwardRef=gs;F.Fragment=ls;F.Lazy=ys;F.Memo=_s;F.Portal=za;F.Profiler=hs;F.StrictMode=us;F.Suspense=ms;F.isAsyncMode=function(t){return If(t)||Re(t)===qa};F.isConcurrentMode=If;F.isContextConsumer=function(t){return Re(t)===fs};F.isContextProvider=function(t){return Re(t)===ds};F.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga};F.isForwardRef=function(t){return Re(t)===gs};F.isFragment=function(t){return Re(t)===ls};F.isLazy=function(t){return Re(t)===ys};F.isMemo=function(t){return Re(t)===_s};F.isPortal=function(t){return Re(t)===za};F.isProfiler=function(t){return Re(t)===hs};F.isStrictMode=function(t){return Re(t)===us};F.isSuspense=function(t){return Re(t)===ms};F.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ls||t===ps||t===hs||t===us||t===ms||t===yS||typeof t=="object"&&t!==null&&(t.$$typeof===ys||t.$$typeof===_s||t.$$typeof===ds||t.$$typeof===fs||t.$$typeof===gs||t.$$typeof===bS||t.$$typeof===wS||t.$$typeof===ES||t.$$typeof===vS)};F.typeOf=Re;Cf.exports=F;var CS=Cf.exports,Tf=CS,IS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},TS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Sf={};Sf[Tf.ForwardRef]=IS;Sf[Tf.Memo]=TS;var SS=!0;function RS(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):i&&(r+=i+" ")}),r}var Rf=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||SS===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Af=function(e,n,r){Rf(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function AS(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var kS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function PS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OS=!1,NS=/[A-Z]|^ms/g,xS=/_EMO_([^_]+?)_([^]*?)_EMO_/g,kf=function(e){return e.charCodeAt(1)===45},ql=function(e){return e!=null&&typeof e!="boolean"},Bs=PS(function(t){return kf(t)?t:t.replace(NS,"-$&").toLowerCase()}),Kl=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(xS,function(r,i,s){return Be={name:i,styles:s,next:Be},i})}return kS[e]!==1&&!kf(e)&&typeof n=="number"&&n!==0?n+"px":n},DS="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function mr(t,e,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Be={name:i.name,styles:i.styles,next:Be},i.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)Be={name:o.name,styles:o.styles,next:Be},o=o.next;var a=s.styles+";";return a}return MS(t,e,n)}case"function":{if(t!==void 0){var c=Be,l=n(t);return Be=c,mr(t,e,l)}break}}var h=n;if(e==null)return h;var u=e[h];return u!==void 0?u:h}function MS(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=mr(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?r+=s+"{"+e[a]+"}":ql(a)&&(r+=Bs(s)+":"+Kl(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&OS)throw new Error(DS);if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var c=0;c<o.length;c++)ql(o[c])&&(r+=Bs(s)+":"+Kl(s,o[c])+";");else{var l=mr(t,e,o);switch(s){case"animation":case"animationName":{r+=Bs(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}}return r}var Yl=/label:\s*([^\s;{]+)\s*(;|$)/g,Be;function vs(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var r=!0,i="";Be=void 0;var s=t[0];if(s==null||s.raw===void 0)r=!1,i+=mr(n,e,s);else{var o=s;i+=o[0]}for(var a=1;a<t.length;a++)if(i+=mr(n,e,t[a]),r){var c=s;i+=c[a]}Yl.lastIndex=0;for(var l="",h;(h=Yl.exec(i))!==null;)l+="-"+h[1];var u=AS(i)+l;return{name:u,styles:i,next:Be}}var LS=function(e){return e()},Pf=nc.useInsertionEffect?nc.useInsertionEffect:!1,FS=Pf||LS,Ql=Pf||de.useLayoutEffect,Of=de.createContext(typeof HTMLElement<"u"?_S({key:"css"}):null);Of.Provider;var Nf=function(e){return de.forwardRef(function(n,r){var i=de.useContext(Of);return e(n,i,r)})},Ka=de.createContext({}),$S=Nf(function(t,e){var n=t.styles,r=vs([n],void 0,de.useContext(Ka)),i=de.useRef();return Ql(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,c=document.querySelector('style[data-emotion="'+s+" "+r.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),c!==null&&(a=!0,c.setAttribute("data-emotion",s),o.hydrate([c])),i.current=[o,a],function(){o.flush()}},[e]),Ql(function(){var s=i.current,o=s[0],a=s[1];if(a){s[1]=!1;return}if(r.next!==void 0&&Af(e,r.next,!0),o.tags.length){var c=o.tags[o.tags.length-1].nextElementSibling;o.before=c,o.flush()}e.insert("",r,o,!1)},[e,r.name]),null});function US(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return vs(e)}var $A=function(){var e=US.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},BS=WT,WS=function(e){return e!=="theme"},Xl=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?BS:WS},Jl=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},HS=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return Rf(n,r,i),FS(function(){return Af(n,r,i)}),null},jS=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=Jl(e,n,r),c=a||Xl(i),l=!c("as");return function(){var h=arguments,u=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&u.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)u.push.apply(u,h);else{u.push(h[0][0]);for(var d=h.length,g=1;g<d;g++)u.push(h[g],h[0][g])}var p=Nf(function(_,v,w){var T=l&&_.as||i,E="",y=[],C=_;if(_.theme==null){C={};for(var R in _)C[R]=_[R];C.theme=de.useContext(Ka)}typeof _.className=="string"?E=RS(v.registered,y,_.className):_.className!=null&&(E=_.className+" ");var A=vs(u.concat(y),v.registered,C);E+=v.key+"-"+A.name,o!==void 0&&(E+=" "+o);var J=l&&a===void 0?Xl(T):c,Z={};for(var f in _)l&&f==="as"||J(f)&&(Z[f]=_[f]);return Z.className=E,Z.ref=w,de.createElement(de.Fragment,null,de.createElement(HS,{cache:v,serialized:A,isStringTag:typeof T=="string"}),de.createElement(T,Z))});return p.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",p.defaultProps=e.defaultProps,p.__emotion_real=p,p.__emotion_base=i,p.__emotion_styles=u,p.__emotion_forwardProp=a,Object.defineProperty(p,"toString",{value:function(){return"."+o}}),p.withComponent=function(_,v){return t(_,vo({},n,v,{shouldForwardProp:Jl(p,v,!0)})).apply(void 0,u)},p}},VS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Eo=jS.bind();VS.forEach(function(t){Eo[t]=Eo(t)});function GS(t){return t==null||Object.keys(t).length===0}function zS(t){const{styles:e,defaultTheme:n={}}=t,r=typeof e=="function"?i=>e(GS(i)?n:i):e;return yr.jsx($S,{styles:r})}function qS(t,e){return Eo(t,e)}function KS(t,e){Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))}const Zl=[];function eu(t){return Zl[0]=t,vs(Zl)}const YS=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,r)=>n.val-r.val),e.reduce((n,r)=>({...n,[r.key]:r.val}),{})};function QS(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:r=5,...i}=t,s=YS(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function c(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-r/100}${n})`}function l(d,g){const p=o.indexOf(g);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(p!==-1&&typeof e[o[p]]=="number"?e[o[p]]:g)-r/100}${n})`}function h(d){return o.indexOf(d)+1<o.length?l(d,o[o.indexOf(d)+1]):a(d)}function u(d){const g=o.indexOf(d);return g===0?a(o[1]):g===o.length-1?c(o[g]):l(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return{keys:o,values:s,up:a,down:c,between:l,only:h,not:u,unit:n,...i}}const XS={borderRadius:4},JS=XS;function xf(t=8,e=Ba({spacing:t})){if(t.mui)return t;const n=(...r)=>(r.length===0?[1]:r).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function ZS(t,e){var r;const n=this;if(n.vars){if(!((r=n.colorSchemes)!=null&&r[t])||typeof n.getColorSchemeSelector!="function")return{};let i=n.getColorSchemeSelector(t);return i==="&"?e:((i.includes("data-")||i.includes("."))&&(i=`*:where(${i.replace(/\s*&$/,"")}) &`),{[i]:e})}return n.palette.mode===t?e:{}}function Ya(t={},...e){const{breakpoints:n={},palette:r={},spacing:i,shape:s={},...o}=t,a=QS(n),c=xf(i);let l=Ee({breakpoints:a,direction:"ltr",components:{},palette:{mode:"light",...r},spacing:c,shape:{...JS,...s}},o);return l=YI(l),l.applyStyles=ZS,l=e.reduce((h,u)=>Ee(h,u),l),l.unstable_sxConfig={...xr,...o==null?void 0:o.unstable_sxConfig},l.unstable_sx=function(u){return bn({sx:u,theme:this})},l}function eR(t){return Object.keys(t).length===0}function tR(t=null){const e=de.useContext(Ka);return!e||eR(e)?t:e}const nR=Ya();function rR(t=nR){return tR(t)}function iR({styles:t,themeId:e,defaultTheme:n={}}){const r=rR(n),i=typeof t=="function"?t(e&&r[e]||r):t;return yr.jsx(zS,{styles:i})}const sR={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function oR(t,e,n="Mui"){const r=sR[e];return r?`${n}-${r}`:`${jI.generate(t)}-${e}`}function UA(t,e,n="Mui"){const r={};return e.forEach(i=>{r[i]=oR(t,i,n)}),r}function Df(t){const{variants:e,...n}=t,r={variants:e,style:eu(n),isProcessed:!0};return r.style===n||e&&e.forEach(i=>{typeof i.style!="function"&&(i.style=eu(i.style))}),r}const aR=Ya();function Ws(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}function cR(t){return t?(e,n)=>n[t]:null}function lR(t,e,n){t.theme=dR(t.theme)?n:t.theme[e]||t.theme}function Jr(t,e){const n=typeof e=="function"?e(t):e;if(Array.isArray(n))return n.flatMap(r=>Jr(t,r));if(Array.isArray(n==null?void 0:n.variants)){let r;if(n.isProcessed)r=n.style;else{const{variants:i,...s}=n;r=s}return Mf(t,n.variants,[r])}return n!=null&&n.isProcessed?n.style:n}function Mf(t,e,n=[]){var i;let r;e:for(let s=0;s<e.length;s+=1){const o=e[s];if(typeof o.props=="function"){if(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),!o.props(r))continue}else for(const a in o.props)if(t[a]!==o.props[a]&&((i=t.ownerState)==null?void 0:i[a])!==o.props[a])continue e;typeof o.style=="function"?(r??(r={...t,...t.ownerState,ownerState:t.ownerState}),n.push(o.style(r))):n.push(o.style)}return n}function uR(t={}){const{themeId:e,defaultTheme:n=aR,rootShouldForwardProp:r=Ws,slotShouldForwardProp:i=Ws}=t;function s(a){lR(a,e,n)}return(a,c={})=>{KS(a,C=>C.filter(R=>R!==bn));const{name:l,slot:h,skipVariantsResolver:u,skipSx:d,overridesResolver:g=cR(pR(h)),...p}=c,_=u!==void 0?u:h&&h!=="Root"&&h!=="root"||!1,v=d||!1;let w=Ws;h==="Root"||h==="root"?w=r:h?w=i:fR(a)&&(w=void 0);const T=qS(a,{shouldForwardProp:w,label:hR(),...p}),E=C=>{if(typeof C=="function"&&C.__emotion_real!==C)return function(A){return Jr(A,C)};if(We(C)){const R=Df(C);return R.variants?function(J){return Jr(J,R)}:R.style}return C},y=(...C)=>{const R=[],A=C.map(E),J=[];if(R.push(s),l&&g&&J.push(function(O){var On,ec;const me=(ec=(On=O.theme.components)==null?void 0:On[l])==null?void 0:ec.styleOverrides;if(!me)return null;const Fe={};for(const tc in me)Fe[tc]=Jr(O,me[tc]);return g(O,Fe)}),l&&!_&&J.push(function(O){var Fe,On;const j=O.theme,me=(On=(Fe=j==null?void 0:j.components)==null?void 0:Fe[l])==null?void 0:On.variants;return me?Mf(O,me):null}),v||J.push(bn),Array.isArray(A[0])){const I=A.shift(),O=new Array(R.length).fill(""),j=new Array(J.length).fill("");let me;me=[...O,...I,...j],me.raw=[...O,...I.raw,...j],R.unshift(me)}const Z=[...R,...A,...J],f=T(...Z);return a.muiName&&(f.muiName=a.muiName),f};return T.withConfig&&(y.withConfig=T.withConfig),y}}function hR(t,e){return void 0}function dR(t){for(const e in t)return!1;return!0}function fR(t){return typeof t=="string"&&t.charCodeAt(0)>96}function pR(t){return t&&t.charAt(0).toLowerCase()+t.slice(1)}function Co(t,e){const n={...e};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const i=r;if(i==="components"||i==="slots")n[i]={...t[i],...n[i]};else if(i==="componentsProps"||i==="slotProps"){const s=t[i],o=e[i];if(!o)n[i]=s||{};else if(!s)n[i]=o;else{n[i]={...o};for(const a in s)if(Object.prototype.hasOwnProperty.call(s,a)){const c=a;n[i][c]=Co(s[c],o[c])}}}else n[i]===void 0&&(n[i]=t[i])}return n}function gR(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}function Qa(t,e=0,n=1){return gR(t,e,n)}function mR(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(r=>r+r)),n?`rgb${n.length===4?"a":""}(${n.map((r,i)=>i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})`:""}function At(t){if(t.type)return t;if(t.charAt(0)==="#")return At(mR(t));const e=t.indexOf("("),n=t.substring(0,e);if(!["rgb","rgba","hsl","hsla","color"].includes(n))throw new Error(qt(9,t));let r=t.substring(e+1,t.length-1),i;if(n==="color"){if(r=r.split(" "),i=r.shift(),r.length===4&&r[3].charAt(0)==="/"&&(r[3]=r[3].slice(1)),!["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].includes(i))throw new Error(qt(10,i))}else r=r.split(",");return r=r.map(s=>parseFloat(s)),{type:n,values:r,colorSpace:i}}const _R=t=>{const e=At(t);return e.values.slice(0,3).map((n,r)=>e.type.includes("hsl")&&r!==0?`${n}%`:n).join(" ")},Hn=(t,e)=>{try{return _R(t)}catch{return t}};function bs(t){const{type:e,colorSpace:n}=t;let{values:r}=t;return e.includes("rgb")?r=r.map((i,s)=>s<3?parseInt(i,10):i):e.includes("hsl")&&(r[1]=`${r[1]}%`,r[2]=`${r[2]}%`),e.includes("color")?r=`${n} ${r.join(" ")}`:r=`${r.join(", ")}`,`${e}(${r})`}function Lf(t){t=At(t);const{values:e}=t,n=e[0],r=e[1]/100,i=e[2]/100,s=r*Math.min(i,1-i),o=(l,h=(l+n/30)%12)=>i-s*Math.max(Math.min(h-3,9-h,1),-1);let a="rgb";const c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",c.push(e[3])),bs({type:a,values:c})}function Io(t){t=At(t);let e=t.type==="hsl"||t.type==="hsla"?At(Lf(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function yR(t,e){const n=Io(t),r=Io(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function vR(t,e){return t=At(t),e=Qa(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,bs(t)}function jr(t,e,n){try{return vR(t,e)}catch{return t}}function Xa(t,e){if(t=At(t),e=Qa(e),t.type.includes("hsl"))t.values[2]*=1-e;else if(t.type.includes("rgb")||t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]*=1-e;return bs(t)}function B(t,e,n){try{return Xa(t,e)}catch{return t}}function Ja(t,e){if(t=At(t),e=Qa(e),t.type.includes("hsl"))t.values[2]+=(100-t.values[2])*e;else if(t.type.includes("rgb"))for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.includes("color"))for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return bs(t)}function W(t,e,n){try{return Ja(t,e)}catch{return t}}function bR(t,e=.15){return Io(t)>.5?Xa(t,e):Ja(t,e)}function Vr(t,e,n){try{return bR(t,e)}catch{return t}}const Ff=de.createContext(void 0);function BA({value:t,children:e}){return yr.jsx(Ff.Provider,{value:t,children:e})}function wR(t){const{theme:e,name:n,props:r}=t;if(!e||!e.components||!e.components[n])return r;const i=e.components[n];return i.defaultProps?Co(i.defaultProps,r):!i.styleOverrides&&!i.variants?Co(i,r):r}function ER({props:t,name:e}){const n=de.useContext(Ff);return wR({props:t,name:e,theme:{components:n}})}const tu={theme:void 0};function CR(t){let e,n;return function(i){let s=e;return(s===void 0||i.theme!==n)&&(tu.theme=i.theme,s=Df(t(tu)),e=s,n=i.theme),s}}function IR(t=""){function e(...r){if(!r.length)return"";const i=r[0];return typeof i=="string"&&!i.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)?`, var(--${t?`${t}-`:""}${i}${e(...r.slice(1))})`:`, ${i}`}return(r,...i)=>`var(--${t?`${t}-`:""}${r}${e(...i)})`}const nu=(t,e,n,r=[])=>{let i=t;e.forEach((s,o)=>{o===e.length-1?Array.isArray(i)?i[Number(s)]=n:i&&typeof i=="object"&&(i[s]=n):i&&typeof i=="object"&&(i[s]||(i[s]=r.includes(s)?[]:{}),i=i[s])})},TR=(t,e,n)=>{function r(i,s=[],o=[]){Object.entries(i).forEach(([a,c])=>{(!n||n&&!n([...s,a]))&&c!=null&&(typeof c=="object"&&Object.keys(c).length>0?r(c,[...s,a],Array.isArray(c)?[...o,a]:o):e([...s,a],c,o))})}r(t)},SR=(t,e)=>typeof e=="number"?["lineHeight","fontWeight","opacity","zIndex"].some(r=>t.includes(r))||t[t.length-1].toLowerCase().includes("opacity")?e:`${e}px`:e;function Hs(t,e){const{prefix:n,shouldSkipGeneratingVar:r}=e||{},i={},s={},o={};return TR(t,(a,c,l)=>{if((typeof c=="string"||typeof c=="number")&&(!r||!r(a,c))){const h=`--${n?`${n}-`:""}${a.join("-")}`,u=SR(a,c);Object.assign(i,{[h]:u}),nu(s,a,`var(${h})`,l),nu(o,a,`var(${h}, ${u})`,l)}},a=>a[0]==="vars"),{css:i,vars:s,varsWithDefaults:o}}function RR(t,e={}){const{getSelector:n=v,disableCssColorScheme:r,colorSchemeSelector:i}=e,{colorSchemes:s={},components:o,defaultColorScheme:a="light",...c}=t,{vars:l,css:h,varsWithDefaults:u}=Hs(c,e);let d=u;const g={},{[a]:p,..._}=s;if(Object.entries(_||{}).forEach(([E,y])=>{const{vars:C,css:R,varsWithDefaults:A}=Hs(y,e);d=Ee(d,A),g[E]={css:R,vars:C}}),p){const{css:E,vars:y,varsWithDefaults:C}=Hs(p,e);d=Ee(d,C),g[a]={css:E,vars:y}}function v(E,y){var R,A;let C=i;if(i==="class"&&(C=".%s"),i==="data"&&(C="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(C=`[${i}="%s"]`),E){if(C==="media")return t.defaultColorScheme===E?":root":{[`@media (prefers-color-scheme: ${((A=(R=s[E])==null?void 0:R.palette)==null?void 0:A.mode)||E})`]:{":root":y}};if(C)return t.defaultColorScheme===E?`:root, ${C.replace("%s",String(E))}`:C.replace("%s",String(E))}return":root"}return{vars:d,generateThemeVars:()=>{let E={...l};return Object.entries(g).forEach(([,{vars:y}])=>{E=Ee(E,y)}),E},generateStyleSheets:()=>{var J,Z;const E=[],y=t.defaultColorScheme||"light";function C(f,I){Object.keys(I).length&&E.push(typeof f=="string"?{[f]:{...I}}:f)}C(n(void 0,{...h}),h);const{[y]:R,...A}=g;if(R){const{css:f}=R,I=(Z=(J=s[y])==null?void 0:J.palette)==null?void 0:Z.mode,O=!r&&I?{colorScheme:I,...f}:{...f};C(n(y,{...O}),O)}return Object.entries(A).forEach(([f,{css:I}])=>{var me,Fe;const O=(Fe=(me=s[f])==null?void 0:me.palette)==null?void 0:Fe.mode,j=!r&&O?{colorScheme:O,...I}:{...I};C(n(f,{...j}),j)}),E}}}function AR(t){return function(n){return t==="media"?`@media (prefers-color-scheme: ${n})`:t?t.startsWith("data-")&&!t.includes("%s")?`[${t}="${n}"] &`:t==="class"?`.${n} &`:t==="data"?`[data-${n}] &`:`${t.replace("%s",n)} &`:"&"}}const _r={black:"#000",white:"#fff"},kR={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},PR=kR,en={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},OR={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},tn=OR,NR={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Un=NR,xR={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},nn=xR,DR={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},rn=DR,sn={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function $f(){return{text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:_r.white,default:_r.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}}}const MR=$f();function Uf(){return{text:{primary:_r.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:_r.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}}}const ru=Uf();function iu(t,e,n,r){const i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=Ja(t.main,i):e==="dark"&&(t.dark=Xa(t.main,s)))}function LR(t="light"){return t==="dark"?{main:nn[200],light:nn[50],dark:nn[400]}:{main:nn[700],light:nn[400],dark:nn[800]}}function FR(t="light"){return t==="dark"?{main:en[200],light:en[50],dark:en[400]}:{main:en[500],light:en[300],dark:en[700]}}function $R(t="light"){return t==="dark"?{main:tn[500],light:tn[300],dark:tn[700]}:{main:tn[700],light:tn[400],dark:tn[800]}}function UR(t="light"){return t==="dark"?{main:rn[400],light:rn[300],dark:rn[700]}:{main:rn[700],light:rn[500],dark:rn[900]}}function BR(t="light"){return t==="dark"?{main:sn[400],light:sn[300],dark:sn[700]}:{main:sn[800],light:sn[500],dark:sn[900]}}function WR(t="light"){return t==="dark"?{main:Un[400],light:Un[300],dark:Un[700]}:{main:"#ed6c02",light:Un[500],dark:Un[900]}}function Za(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:r=.2,...i}=t,s=t.primary||LR(e),o=t.secondary||FR(e),a=t.error||$R(e),c=t.info||UR(e),l=t.success||BR(e),h=t.warning||WR(e);function u(_){return yR(_,ru.text.primary)>=n?ru.text.primary:MR.text.primary}const d=({color:_,name:v,mainShade:w=500,lightShade:T=300,darkShade:E=700})=>{if(_={..._},!_.main&&_[w]&&(_.main=_[w]),!_.hasOwnProperty("main"))throw new Error(qt(11,v?` (${v})`:"",w));if(typeof _.main!="string")throw new Error(qt(12,v?` (${v})`:"",JSON.stringify(_.main)));return iu(_,"light",T,r),iu(_,"dark",E,r),_.contrastText||(_.contrastText=u(_.main)),_};let g;return e==="light"?g=$f():e==="dark"&&(g=Uf()),Ee({common:{..._r},mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:h,name:"warning"}),info:d({color:c,name:"info"}),success:d({color:l,name:"success"}),grey:PR,contrastThreshold:n,getContrastText:u,augmentColor:d,tonalOffset:r,...g},i)}function HR(t){const e={};return Object.entries(t).forEach(r=>{const[i,s]=r;typeof s=="object"&&(e[i]=`${s.fontStyle?`${s.fontStyle} `:""}${s.fontVariant?`${s.fontVariant} `:""}${s.fontWeight?`${s.fontWeight} `:""}${s.fontStretch?`${s.fontStretch} `:""}${s.fontSize||""}${s.lineHeight?`/${s.lineHeight} `:""}${s.fontFamily||""}`)}),e}function jR(t,e){return{toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}},...e}}function VR(t){return Math.round(t*1e5)/1e5}const su={textTransform:"uppercase"},ou='"Roboto", "Helvetica", "Arial", sans-serif';function GR(t,e){const{fontFamily:n=ou,fontSize:r=14,fontWeightLight:i=300,fontWeightRegular:s=400,fontWeightMedium:o=500,fontWeightBold:a=700,htmlFontSize:c=16,allVariants:l,pxToRem:h,...u}=typeof e=="function"?e(t):e,d=r/14,g=h||(v=>`${v/c*d}rem`),p=(v,w,T,E,y)=>({fontFamily:n,fontWeight:v,fontSize:g(w),lineHeight:T,...n===ou?{letterSpacing:`${VR(E/w)}em`}:{},...y,...l}),_={h1:p(i,96,1.167,-1.5),h2:p(i,60,1.2,-.5),h3:p(s,48,1.167,0),h4:p(s,34,1.235,.25),h5:p(s,24,1.334,0),h6:p(o,20,1.6,.15),subtitle1:p(s,16,1.75,.15),subtitle2:p(o,14,1.57,.1),body1:p(s,16,1.5,.15),body2:p(s,14,1.43,.15),button:p(o,14,1.75,.4,su),caption:p(s,12,1.66,.4),overline:p(s,12,2.66,1,su),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Ee({htmlFontSize:c,pxToRem:g,fontFamily:n,fontSize:r,fontWeightLight:i,fontWeightRegular:s,fontWeightMedium:o,fontWeightBold:a,..._},u,{clone:!1})}const zR=.2,qR=.14,KR=.12;function q(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${zR})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${qR})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${KR})`].join(",")}const YR=["none",q(0,2,1,-1,0,1,1,0,0,1,3,0),q(0,3,1,-2,0,2,2,0,0,1,5,0),q(0,3,3,-2,0,3,4,0,0,1,8,0),q(0,2,4,-1,0,4,5,0,0,1,10,0),q(0,3,5,-1,0,5,8,0,0,1,14,0),q(0,3,5,-1,0,6,10,0,0,1,18,0),q(0,4,5,-2,0,7,10,1,0,2,16,1),q(0,5,5,-3,0,8,10,1,0,3,14,2),q(0,5,6,-3,0,9,12,1,0,3,16,2),q(0,6,6,-3,0,10,14,1,0,4,18,3),q(0,6,7,-4,0,11,15,1,0,4,20,3),q(0,7,8,-4,0,12,17,2,0,5,22,4),q(0,7,8,-4,0,13,19,2,0,5,24,4),q(0,7,9,-4,0,14,21,2,0,5,26,4),q(0,8,9,-5,0,15,22,2,0,6,28,5),q(0,8,10,-5,0,16,24,2,0,6,30,5),q(0,8,11,-5,0,17,26,2,0,6,32,5),q(0,9,11,-5,0,18,28,2,0,7,34,6),q(0,9,12,-6,0,19,29,2,0,7,36,6),q(0,10,13,-6,0,20,31,3,0,8,38,7),q(0,10,13,-6,0,21,33,3,0,8,40,7),q(0,10,14,-6,0,22,35,3,0,8,42,7),q(0,11,14,-7,0,23,36,3,0,9,44,8),q(0,11,15,-7,0,24,38,3,0,9,46,8)],QR={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},XR={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function au(t){return`${Math.round(t)}ms`}function JR(t){if(!t)return 0;const e=t/36;return Math.min(Math.round((4+15*e**.25+e/5)*10),3e3)}function ZR(t){const e={...QR,...t.easing},n={...XR,...t.duration};return{getAutoHeightDuration:JR,create:(i=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:c=0,...l}=s;return(Array.isArray(i)?i:[i]).map(h=>`${h} ${typeof o=="string"?o:au(o)} ${a} ${typeof c=="string"?c:au(c)}`).join(",")},...t,easing:e,duration:n}}const eA={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},tA=eA;function nA(t){return We(t)||typeof t>"u"||typeof t=="string"||typeof t=="boolean"||typeof t=="number"||Array.isArray(t)}function Bf(t={}){const e={...t};function n(r){const i=Object.entries(r);for(let s=0;s<i.length;s++){const[o,a]=i[s];!nA(a)||o.startsWith("unstable_")?delete r[o]:We(a)&&(r[o]={...a},n(r[o]))}}return n(e),`import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(e,null,2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`}function To(t={},...e){const{breakpoints:n,mixins:r={},spacing:i,palette:s={},transitions:o={},typography:a={},shape:c,...l}=t;if(t.vars&&t.generateThemeVars===void 0)throw new Error(qt(20));const h=Za(s),u=Ya(t);let d=Ee(u,{mixins:jR(u.breakpoints,r),palette:h,shadows:YR.slice(),typography:GR(h,a),transitions:ZR(o),zIndex:{...tA}});return d=Ee(d,l),d=e.reduce((g,p)=>Ee(g,p),d),d.unstable_sxConfig={...xr,...l==null?void 0:l.unstable_sxConfig},d.unstable_sx=function(p){return bn({sx:p,theme:this})},d.toRuntimeSource=Bf,d}function rA(t){let e;return t<1?e=5.11916*t**2:e=4.5*Math.log(t+1)+2,Math.round(e*10)/1e3}const iA=[...Array(25)].map((t,e)=>{if(e===0)return"none";const n=rA(e);return`linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`});function Wf(t){return{inputPlaceholder:t==="dark"?.5:.42,inputUnderline:t==="dark"?.7:.42,switchTrackDisabled:t==="dark"?.2:.12,switchTrack:t==="dark"?.3:.38}}function Hf(t){return t==="dark"?iA:[]}function sA(t){const{palette:e={mode:"light"},opacity:n,overlays:r,...i}=t,s=Za(e);return{palette:s,opacity:{...Wf(s.mode),...n},overlays:r||Hf(s.mode),...i}}function oA(t){var e;return!!t[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/)||!!t[0].match(/sxConfig$/)||t[0]==="palette"&&!!((e=t[1])!=null&&e.match(/(mode|contrastThreshold|tonalOffset)/))}const aA=t=>[...[...Array(25)].map((e,n)=>`--${t?`${t}-`:""}overlays-${n}`),`--${t?`${t}-`:""}palette-AppBar-darkBg`,`--${t?`${t}-`:""}palette-AppBar-darkColor`],cA=t=>(e,n)=>{const r=t.rootSelector||":root",i=t.colorSchemeSelector;let s=i;if(i==="class"&&(s=".%s"),i==="data"&&(s="[data-%s]"),i!=null&&i.startsWith("data-")&&!i.includes("%s")&&(s=`[${i}="%s"]`),t.defaultColorScheme===e){if(e==="dark"){const o={};return aA(t.cssVarPrefix).forEach(a=>{o[a]=n[a],delete n[a]}),s==="media"?{[r]:n,"@media (prefers-color-scheme: dark)":{[r]:o}}:s?{[s.replace("%s",e)]:o,[`${r}, ${s.replace("%s",e)}`]:n}:{[r]:{...n,...o}}}if(s&&s!=="media")return`${r}, ${s.replace("%s",String(e))}`}else if(e){if(s==="media")return{[`@media (prefers-color-scheme: ${String(e)})`]:{[r]:n}};if(s)return s.replace("%s",String(e))}return r};function lA(t,e){e.forEach(n=>{t[n]||(t[n]={})})}function m(t,e,n){!t[e]&&n&&(t[e]=n)}function jn(t){return typeof t!="string"||!t.startsWith("hsl")?t:Lf(t)}function Ye(t,e){`${e}Channel`in t||(t[`${e}Channel`]=Hn(jn(t[e]),`MUI: Can't create \`palette.${e}Channel\` because \`palette.${e}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${e}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`))}function uA(t){return typeof t=="number"?`${t}px`:typeof t=="string"||typeof t=="function"||Array.isArray(t)?t:"8px"}const $e=t=>{try{return t()}catch{}},hA=(t="mui")=>IR(t);function js(t,e,n,r){if(!e)return;e=e===!0?{}:e;const i=r==="dark"?"dark":"light";if(!n){t[r]=sA({...e,palette:{mode:i,...e==null?void 0:e.palette}});return}const{palette:s,...o}=To({...n,palette:{mode:i,...e==null?void 0:e.palette}});return t[r]={...e,palette:s,opacity:{...Wf(i),...e==null?void 0:e.opacity},overlays:(e==null?void 0:e.overlays)||Hf(i)},o}function dA(t={},...e){const{colorSchemes:n={light:!0},defaultColorScheme:r,disableCssColorScheme:i=!1,cssVarPrefix:s="mui",shouldSkipGeneratingVar:o=oA,colorSchemeSelector:a=n.light&&n.dark?"media":void 0,rootSelector:c=":root",...l}=t,h=Object.keys(n)[0],u=r||(n.light&&h!=="light"?"light":h),d=hA(s),{[u]:g,light:p,dark:_,...v}=n,w={...v};let T=g;if((u==="dark"&&!("dark"in n)||u==="light"&&!("light"in n))&&(T=!0),!T)throw new Error(qt(21,u));const E=js(w,T,l,u);p&&!w.light&&js(w,p,void 0,"light"),_&&!w.dark&&js(w,_,void 0,"dark");let y={defaultColorScheme:u,...E,cssVarPrefix:s,colorSchemeSelector:a,rootSelector:c,getCssVar:d,colorSchemes:w,font:{...HR(E.typography),...E.font},spacing:uA(l.spacing)};Object.keys(y.colorSchemes).forEach(Z=>{const f=y.colorSchemes[Z].palette,I=O=>{const j=O.split("-"),me=j[1],Fe=j[2];return d(O,f[me][Fe])};if(f.mode==="light"&&(m(f.common,"background","#fff"),m(f.common,"onBackground","#000")),f.mode==="dark"&&(m(f.common,"background","#000"),m(f.common,"onBackground","#fff")),lA(f,["Alert","AppBar","Avatar","Button","Chip","FilledInput","LinearProgress","Skeleton","Slider","SnackbarContent","SpeedDialAction","StepConnector","StepContent","Switch","TableCell","Tooltip"]),f.mode==="light"){m(f.Alert,"errorColor",B(f.error.light,.6)),m(f.Alert,"infoColor",B(f.info.light,.6)),m(f.Alert,"successColor",B(f.success.light,.6)),m(f.Alert,"warningColor",B(f.warning.light,.6)),m(f.Alert,"errorFilledBg",I("palette-error-main")),m(f.Alert,"infoFilledBg",I("palette-info-main")),m(f.Alert,"successFilledBg",I("palette-success-main")),m(f.Alert,"warningFilledBg",I("palette-warning-main")),m(f.Alert,"errorFilledColor",$e(()=>f.getContrastText(f.error.main))),m(f.Alert,"infoFilledColor",$e(()=>f.getContrastText(f.info.main))),m(f.Alert,"successFilledColor",$e(()=>f.getContrastText(f.success.main))),m(f.Alert,"warningFilledColor",$e(()=>f.getContrastText(f.warning.main))),m(f.Alert,"errorStandardBg",W(f.error.light,.9)),m(f.Alert,"infoStandardBg",W(f.info.light,.9)),m(f.Alert,"successStandardBg",W(f.success.light,.9)),m(f.Alert,"warningStandardBg",W(f.warning.light,.9)),m(f.Alert,"errorIconColor",I("palette-error-main")),m(f.Alert,"infoIconColor",I("palette-info-main")),m(f.Alert,"successIconColor",I("palette-success-main")),m(f.Alert,"warningIconColor",I("palette-warning-main")),m(f.AppBar,"defaultBg",I("palette-grey-100")),m(f.Avatar,"defaultBg",I("palette-grey-400")),m(f.Button,"inheritContainedBg",I("palette-grey-300")),m(f.Button,"inheritContainedHoverBg",I("palette-grey-A100")),m(f.Chip,"defaultBorder",I("palette-grey-400")),m(f.Chip,"defaultAvatarColor",I("palette-grey-700")),m(f.Chip,"defaultIconColor",I("palette-grey-700")),m(f.FilledInput,"bg","rgba(0, 0, 0, 0.06)"),m(f.FilledInput,"hoverBg","rgba(0, 0, 0, 0.09)"),m(f.FilledInput,"disabledBg","rgba(0, 0, 0, 0.12)"),m(f.LinearProgress,"primaryBg",W(f.primary.main,.62)),m(f.LinearProgress,"secondaryBg",W(f.secondary.main,.62)),m(f.LinearProgress,"errorBg",W(f.error.main,.62)),m(f.LinearProgress,"infoBg",W(f.info.main,.62)),m(f.LinearProgress,"successBg",W(f.success.main,.62)),m(f.LinearProgress,"warningBg",W(f.warning.main,.62)),m(f.Skeleton,"bg",`rgba(${I("palette-text-primaryChannel")} / 0.11)`),m(f.Slider,"primaryTrack",W(f.primary.main,.62)),m(f.Slider,"secondaryTrack",W(f.secondary.main,.62)),m(f.Slider,"errorTrack",W(f.error.main,.62)),m(f.Slider,"infoTrack",W(f.info.main,.62)),m(f.Slider,"successTrack",W(f.success.main,.62)),m(f.Slider,"warningTrack",W(f.warning.main,.62));const O=Vr(f.background.default,.8);m(f.SnackbarContent,"bg",O),m(f.SnackbarContent,"color",$e(()=>f.getContrastText(O))),m(f.SpeedDialAction,"fabHoverBg",Vr(f.background.paper,.15)),m(f.StepConnector,"border",I("palette-grey-400")),m(f.StepContent,"border",I("palette-grey-400")),m(f.Switch,"defaultColor",I("palette-common-white")),m(f.Switch,"defaultDisabledColor",I("palette-grey-100")),m(f.Switch,"primaryDisabledColor",W(f.primary.main,.62)),m(f.Switch,"secondaryDisabledColor",W(f.secondary.main,.62)),m(f.Switch,"errorDisabledColor",W(f.error.main,.62)),m(f.Switch,"infoDisabledColor",W(f.info.main,.62)),m(f.Switch,"successDisabledColor",W(f.success.main,.62)),m(f.Switch,"warningDisabledColor",W(f.warning.main,.62)),m(f.TableCell,"border",W(jr(f.divider,1),.88)),m(f.Tooltip,"bg",jr(f.grey[700],.92))}if(f.mode==="dark"){m(f.Alert,"errorColor",W(f.error.light,.6)),m(f.Alert,"infoColor",W(f.info.light,.6)),m(f.Alert,"successColor",W(f.success.light,.6)),m(f.Alert,"warningColor",W(f.warning.light,.6)),m(f.Alert,"errorFilledBg",I("palette-error-dark")),m(f.Alert,"infoFilledBg",I("palette-info-dark")),m(f.Alert,"successFilledBg",I("palette-success-dark")),m(f.Alert,"warningFilledBg",I("palette-warning-dark")),m(f.Alert,"errorFilledColor",$e(()=>f.getContrastText(f.error.dark))),m(f.Alert,"infoFilledColor",$e(()=>f.getContrastText(f.info.dark))),m(f.Alert,"successFilledColor",$e(()=>f.getContrastText(f.success.dark))),m(f.Alert,"warningFilledColor",$e(()=>f.getContrastText(f.warning.dark))),m(f.Alert,"errorStandardBg",B(f.error.light,.9)),m(f.Alert,"infoStandardBg",B(f.info.light,.9)),m(f.Alert,"successStandardBg",B(f.success.light,.9)),m(f.Alert,"warningStandardBg",B(f.warning.light,.9)),m(f.Alert,"errorIconColor",I("palette-error-main")),m(f.Alert,"infoIconColor",I("palette-info-main")),m(f.Alert,"successIconColor",I("palette-success-main")),m(f.Alert,"warningIconColor",I("palette-warning-main")),m(f.AppBar,"defaultBg",I("palette-grey-900")),m(f.AppBar,"darkBg",I("palette-background-paper")),m(f.AppBar,"darkColor",I("palette-text-primary")),m(f.Avatar,"defaultBg",I("palette-grey-600")),m(f.Button,"inheritContainedBg",I("palette-grey-800")),m(f.Button,"inheritContainedHoverBg",I("palette-grey-700")),m(f.Chip,"defaultBorder",I("palette-grey-700")),m(f.Chip,"defaultAvatarColor",I("palette-grey-300")),m(f.Chip,"defaultIconColor",I("palette-grey-300")),m(f.FilledInput,"bg","rgba(255, 255, 255, 0.09)"),m(f.FilledInput,"hoverBg","rgba(255, 255, 255, 0.13)"),m(f.FilledInput,"disabledBg","rgba(255, 255, 255, 0.12)"),m(f.LinearProgress,"primaryBg",B(f.primary.main,.5)),m(f.LinearProgress,"secondaryBg",B(f.secondary.main,.5)),m(f.LinearProgress,"errorBg",B(f.error.main,.5)),m(f.LinearProgress,"infoBg",B(f.info.main,.5)),m(f.LinearProgress,"successBg",B(f.success.main,.5)),m(f.LinearProgress,"warningBg",B(f.warning.main,.5)),m(f.Skeleton,"bg",`rgba(${I("palette-text-primaryChannel")} / 0.13)`),m(f.Slider,"primaryTrack",B(f.primary.main,.5)),m(f.Slider,"secondaryTrack",B(f.secondary.main,.5)),m(f.Slider,"errorTrack",B(f.error.main,.5)),m(f.Slider,"infoTrack",B(f.info.main,.5)),m(f.Slider,"successTrack",B(f.success.main,.5)),m(f.Slider,"warningTrack",B(f.warning.main,.5));const O=Vr(f.background.default,.98);m(f.SnackbarContent,"bg",O),m(f.SnackbarContent,"color",$e(()=>f.getContrastText(O))),m(f.SpeedDialAction,"fabHoverBg",Vr(f.background.paper,.15)),m(f.StepConnector,"border",I("palette-grey-600")),m(f.StepContent,"border",I("palette-grey-600")),m(f.Switch,"defaultColor",I("palette-grey-300")),m(f.Switch,"defaultDisabledColor",I("palette-grey-600")),m(f.Switch,"primaryDisabledColor",B(f.primary.main,.55)),m(f.Switch,"secondaryDisabledColor",B(f.secondary.main,.55)),m(f.Switch,"errorDisabledColor",B(f.error.main,.55)),m(f.Switch,"infoDisabledColor",B(f.info.main,.55)),m(f.Switch,"successDisabledColor",B(f.success.main,.55)),m(f.Switch,"warningDisabledColor",B(f.warning.main,.55)),m(f.TableCell,"border",B(jr(f.divider,1),.68)),m(f.Tooltip,"bg",jr(f.grey[700],.92))}Ye(f.background,"default"),Ye(f.background,"paper"),Ye(f.common,"background"),Ye(f.common,"onBackground"),Ye(f,"divider"),Object.keys(f).forEach(O=>{const j=f[O];O!=="tonalOffset"&&j&&typeof j=="object"&&(j.main&&m(f[O],"mainChannel",Hn(jn(j.main))),j.light&&m(f[O],"lightChannel",Hn(jn(j.light))),j.dark&&m(f[O],"darkChannel",Hn(jn(j.dark))),j.contrastText&&m(f[O],"contrastTextChannel",Hn(jn(j.contrastText))),O==="text"&&(Ye(f[O],"primary"),Ye(f[O],"secondary")),O==="action"&&(j.active&&Ye(f[O],"active"),j.selected&&Ye(f[O],"selected")))})}),y=e.reduce((Z,f)=>Ee(Z,f),y);const C={prefix:s,disableCssColorScheme:i,shouldSkipGeneratingVar:o,getSelector:cA(y)},{vars:R,generateThemeVars:A,generateStyleSheets:J}=RR(y,C);return y.vars=R,Object.entries(y.colorSchemes[y.defaultColorScheme]).forEach(([Z,f])=>{y[Z]=f}),y.generateThemeVars=A,y.generateStyleSheets=J,y.generateSpacing=function(){return xf(l.spacing,Ba(this))},y.getColorSchemeSelector=AR(a),y.spacing=y.generateSpacing(),y.shouldSkipGeneratingVar=o,y.unstable_sxConfig={...xr,...l==null?void 0:l.unstable_sxConfig},y.unstable_sx=function(f){return bn({sx:f,theme:this})},y.toRuntimeSource=Bf,y}function cu(t,e,n){t.colorSchemes&&n&&(t.colorSchemes[e]={...n!==!0&&n,palette:Za({...n===!0?{}:n.palette,mode:e})})}function fA(t={},...e){const{palette:n,cssVariables:r=!1,colorSchemes:i=n?void 0:{light:!0},defaultColorScheme:s=n==null?void 0:n.mode,...o}=t,a=s||"light",c=i==null?void 0:i[a],l={...i,...n?{[a]:{...typeof c!="boolean"&&c,palette:n}}:void 0};if(r===!1){if(!("colorSchemes"in t))return To(t,...e);let h=n;"palette"in t||l[a]&&(l[a]!==!0?h=l[a].palette:a==="dark"&&(h={mode:"dark"}));const u=To({...t,palette:h},...e);return u.defaultColorScheme=a,u.colorSchemes=l,u.palette.mode==="light"&&(u.colorSchemes.light={...l.light!==!0&&l.light,palette:u.palette},cu(u,"dark",l.dark)),u.palette.mode==="dark"&&(u.colorSchemes.dark={...l.dark!==!0&&l.dark,palette:u.palette},cu(u,"light",l.light)),u}return!n&&!("light"in l)&&a==="light"&&(l.light=!0),dA({...o,colorSchemes:l,defaultColorScheme:a,...typeof r!="boolean"&&r},...e)}const pA=fA(),jf=pA,Vf="$$material";function gA(t){return yr.jsx(iR,{...t,defaultTheme:jf,themeId:Vf})}function mA(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const _A=t=>mA(t)&&t!=="classes",WA=uR({themeId:Vf,defaultTheme:jf,rootShouldForwardProp:_A});function HA(t){return function(n){return yr.jsx(gA,{styles:typeof t=="function"?r=>t({theme:r,...n}):t})}}function jA(){return $T}const VA=CR;function GA(t){return ER(t)}function yA(t){return typeof t.main=="string"}function vA(t,e=[]){if(!yA(t))return!1;for(const n of e)if(!t.hasOwnProperty(n)||typeof t[n]!="string")return!1;return!0}function zA(t=[]){return([,e])=>e&&vA(e,t)}export{Xa as $,PA as A,NA as B,_A as C,BA as D,jf as E,es as F,zS as G,vR as H,rt as I,FA as J,Ba as K,Ee as L,LA as M,$T as N,Nr as O,zf as P,uR as Q,Co as R,rR as S,Ka as T,TA as U,EA as V,IA as W,CA as X,mt as Y,RA as Z,it as _,cf as a,Ja as a0,bR as a1,qt as a2,mA as a3,qS as a4,vo as a5,rA as a6,$A as a7,US as a8,jI as a9,jA as aa,xA as ab,DA as b,Ya as c,MA as d,Vf as e,fA as f,oR as g,GR as h,UA as i,WA as j,GA as k,zA as l,VA as m,HA as n,AA as o,sn as p,en as q,SA as r,bn as s,kA as t,tR as u,rf as v,Ma as w,$_ as x,OA as y,wA as z};
//# sourceMappingURL=createSimplePaletteValueFilter-C-rVefkh.js.map
