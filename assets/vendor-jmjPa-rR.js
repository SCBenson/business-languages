var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=Reflect.get,l=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(r)for(var n of r(t))o.call(t,n)&&l(e,n,t[n]);return e},u=(e,r)=>t(e,n(r)),h=(e,t,n)=>a(s(e),n,t),d=(e,t,n)=>new Promise(((r,s)=>{var i=e=>{try{a(n.next(e))}catch(t){s(t)}},o=e=>{try{a(n.throw(e))}catch(t){s(t)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,o);a((n=n.apply(e,t)).next())}));
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function f(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return e=>e in t}const p={},m=[],g=()=>{},y=()=>!1,v=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_=e=>e.startsWith("onUpdate:"),b=Object.assign,w=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},E=Object.prototype.hasOwnProperty,T=(e,t)=>E.call(e,t),I=Array.isArray,k=e=>"[object Map]"===L(e),S=e=>"[object Set]"===L(e),C=e=>"function"==typeof e,A=e=>"string"==typeof e,R=e=>"symbol"==typeof e,O=e=>null!==e&&"object"==typeof e,N=e=>(O(e)||C(e))&&C(e.then)&&C(e.catch),x=Object.prototype.toString,L=e=>x.call(e),D=e=>"[object Object]"===L(e),P=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,M=f(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),F=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},U=/-(\w)/g,$=F((e=>e.replace(U,((e,t)=>t?t.toUpperCase():"")))),V=/\B([A-Z])/g,j=F((e=>e.replace(V,"-$1").toLowerCase())),B=F((e=>e.charAt(0).toUpperCase()+e.slice(1))),q=F((e=>e?`on${B(e)}`:"")),z=(e,t)=>!Object.is(e,t),W=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},H=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},K=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let G;const Q=()=>G||(G="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{});function Y(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=A(r)?ee(r):Y(r);if(s)for(const e in s)t[e]=s[e]}return t}if(A(e)||O(e))return e}const J=/;(?![^(]*\))/g,X=/:([^]+)/,Z=/\/\*[^]*?\*\//g;function ee(e){const t={};return e.replace(Z,"").split(J).forEach((e=>{if(e){const n=e.split(X);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function te(e){let t="";if(A(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const r=te(e[n]);r&&(t+=r+" ")}else if(O(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ne=f("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function re(e){return!!e||""===e}const se=e=>!(!e||!0!==e.__v_isRef),ie=e=>A(e)?e:null==e?"":I(e)||O(e)&&(e.toString===x||!C(e.toString))?se(e)?ie(e.value):JSON.stringify(e,oe,2):String(e),oe=(e,t)=>se(t)?oe(e,t.value):k(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n],r)=>(e[ae(t,r)+" =>"]=n,e)),{})}:S(t)?{[`Set(${t.size})`]:[...t.values()].map((e=>ae(e)))}:R(t)?ae(t):!O(t)||I(t)||D(t)?t:String(t),ae=(e,t="")=>{var n;return R(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let le,ce;class ue{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=le,!e&&le&&(this.index=(le.scopes||(le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){let e,t;if(this._isPaused=!0,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){let e,t;if(this._isPaused=!1,this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=le;try{return le=this,e()}finally{le=t}}}on(){le=this}off(){le=this.parent}stop(e){if(this._active){let t,n;for(this._active=!1,t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}}function he(e){return new ue(e)}function de(){return le}function fe(e,t=!1){le&&le.cleanups.push(e)}const pe=new WeakSet;class me{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,le&&le.active&&le.effects.push(this)}pause(){this.flags|=64}resume(){64&this.flags&&(this.flags&=-65,pe.has(this)&&(pe.delete(this),this.trigger()))}notify(){2&this.flags&&!(32&this.flags)||8&this.flags||_e(this)}run(){if(!(1&this.flags))return this.fn();this.flags|=2,xe(this),Ee(this);const e=ce,t=Ae;ce=this,Ae=!0;try{return this.fn()}finally{Te(this),ce=e,Ae=t,this.flags&=-3}}stop(){if(1&this.flags){for(let e=this.deps;e;e=e.nextDep)Se(e);this.deps=this.depsTail=void 0,xe(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){64&this.flags?pe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ie(this)&&this.run()}get dirty(){return Ie(this)}}let ge,ye,ve=0;function _e(e,t=!1){if(e.flags|=8,t)return e.next=ye,void(ye=e);e.next=ge,ge=e}function be(){ve++}function we(){if(--ve>0)return;if(ye){let e=ye;for(ye=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ge;){let n=ge;for(ge=void 0;n;){const r=n.next;if(n.next=void 0,n.flags&=-9,1&n.flags)try{n.trigger()}catch(t){e||(e=t)}n=r}}if(e)throw e}function Ee(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Te(e){let t,n=e.depsTail,r=n;for(;r;){const e=r.prevDep;-1===r.version?(r===n&&(n=e),Se(r),Ce(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ie(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ke(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ke(e){if(4&e.flags&&!(16&e.flags))return;if(e.flags&=-17,e.globalVersion===Le)return;e.globalVersion=Le;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&e.deps&&!Ie(e))return void(e.flags&=-3);const n=ce,r=Ae;ce=e,Ae=!0;try{Ee(e);const n=e.fn(e._value);(0===t.version||z(n,e._value))&&(e._value=n,t.version++)}catch(s){throw t.version++,s}finally{ce=n,Ae=r,Te(e),e.flags&=-3}}function Se(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Se(e,!0)}t||--n.sc||!n.map||n.map.delete(n.key)}function Ce(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ae=!0;const Re=[];function Oe(){Re.push(Ae),Ae=!1}function Ne(){const e=Re.pop();Ae=void 0===e||e}function xe(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const e=ce;ce=void 0;try{t()}finally{ce=e}}}let Le=0;class De{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pe{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!Ae||ce===this.computed)return;let t=this.activeLink;if(void 0===t||t.sub!==ce)t=this.activeLink=new De(ce,this),ce.deps?(t.prevDep=ce.depsTail,ce.depsTail.nextDep=t,ce.depsTail=t):ce.deps=ce.depsTail=t,Me(t);else if(-1===t.version&&(t.version=this.version,t.nextDep)){const e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=ce.depsTail,t.nextDep=void 0,ce.depsTail.nextDep=t,ce.depsTail=t,ce.deps===t&&(ce.deps=e)}return t}trigger(e){this.version++,Le++,this.notify(e)}notify(e){be();try{0;for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{we()}}}function Me(e){if(e.dep.sc++,4&e.sub.flags){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Me(e)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Fe=new WeakMap,Ue=Symbol(""),$e=Symbol(""),Ve=Symbol("");function je(e,t,n){if(Ae&&ce){let t=Fe.get(e);t||Fe.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Pe),r.map=t,r.key=n),r.track()}}function Be(e,t,n,r,s,i){const o=Fe.get(e);if(!o)return void Le++;const a=e=>{e&&e.trigger()};if(be(),"clear"===t)o.forEach(a);else{const s=I(e),i=s&&P(n);if(s&&"length"===n){const e=Number(r);o.forEach(((t,n)=>{("length"===n||n===Ve||!R(n)&&n>=e)&&a(t)}))}else switch((void 0!==n||o.has(void 0))&&a(o.get(n)),i&&a(o.get(Ve)),t){case"add":s?i&&a(o.get("length")):(a(o.get(Ue)),k(e)&&a(o.get($e)));break;case"delete":s||(a(o.get(Ue)),k(e)&&a(o.get($e)));break;case"set":k(e)&&a(o.get(Ue))}}we()}function qe(e){const t=At(e);return t===e?t:(je(t,0,Ve),St(e)?t:t.map(Ot))}function ze(e){return je(e=At(e),0,Ve),e}const We={__proto__:null,[Symbol.iterator](){return He(this,Symbol.iterator,Ot)},concat(...e){return qe(this).concat(...e.map((e=>I(e)?qe(e):e)))},entries(){return He(this,"entries",(e=>(e[1]=Ot(e[1]),e)))},every(e,t){return Ge(this,"every",e,t,void 0,arguments)},filter(e,t){return Ge(this,"filter",e,t,(e=>e.map(Ot)),arguments)},find(e,t){return Ge(this,"find",e,t,Ot,arguments)},findIndex(e,t){return Ge(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ge(this,"findLast",e,t,Ot,arguments)},findLastIndex(e,t){return Ge(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ge(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ye(this,"includes",e)},indexOf(...e){return Ye(this,"indexOf",e)},join(e){return qe(this).join(e)},lastIndexOf(...e){return Ye(this,"lastIndexOf",e)},map(e,t){return Ge(this,"map",e,t,void 0,arguments)},pop(){return Je(this,"pop")},push(...e){return Je(this,"push",e)},reduce(e,...t){return Qe(this,"reduce",e,t)},reduceRight(e,...t){return Qe(this,"reduceRight",e,t)},shift(){return Je(this,"shift")},some(e,t){return Ge(this,"some",e,t,void 0,arguments)},splice(...e){return Je(this,"splice",e)},toReversed(){return qe(this).toReversed()},toSorted(e){return qe(this).toSorted(e)},toSpliced(...e){return qe(this).toSpliced(...e)},unshift(...e){return Je(this,"unshift",e)},values(){return He(this,"values",Ot)}};function He(e,t,n){const r=ze(e),s=r[t]();return r===e||St(e)||(s._next=s.next,s.next=()=>{const e=s._next();return e.value&&(e.value=n(e.value)),e}),s}const Ke=Array.prototype;function Ge(e,t,n,r,s,i){const o=ze(e),a=o!==e&&!St(e),l=o[t];if(l!==Ke[t]){const t=l.apply(e,i);return a?Ot(t):t}let c=n;o!==e&&(a?c=function(t,r){return n.call(this,Ot(t),r,e)}:n.length>2&&(c=function(t,r){return n.call(this,t,r,e)}));const u=l.call(o,c,r);return a&&s?s(u):u}function Qe(e,t,n,r){const s=ze(e);let i=n;return s!==e&&(St(e)?n.length>3&&(i=function(t,r,s){return n.call(this,t,r,s,e)}):i=function(t,r,s){return n.call(this,t,Ot(r),s,e)}),s[t](i,...r)}function Ye(e,t,n){const r=At(e);je(r,0,Ve);const s=r[t](...n);return-1!==s&&!1!==s||!Ct(n[0])?s:(n[0]=At(n[0]),r[t](...n))}function Je(e,t,n=[]){Oe(),be();const r=At(e)[t].apply(e,n);return we(),Ne(),r}const Xe=f("__proto__,__v_isRef,__isVue"),Ze=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(R));function et(e){R(e)||(e=String(e));const t=At(this);return je(t,0,e),t.hasOwnProperty(e)}class tt{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if("__v_skip"===t)return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return s;if("__v_raw"===t)return n===(r?s?vt:yt:s?gt:mt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const i=I(e);if(!r){let e;if(i&&(e=We[t]))return e;if("hasOwnProperty"===t)return et}const o=Reflect.get(e,t,xt(e)?e:n);return(R(t)?Ze.has(t):Xe(t))?o:(r||je(e,0,t),s?o:xt(o)?i&&P(t)?o:o.value:O(o)?r?Et(o):bt(o):o)}}class nt extends tt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let s=e[t];if(!this._isShallow){const t=kt(s);if(St(n)||kt(n)||(s=At(s),n=At(n)),!I(e)&&xt(s)&&!xt(n))return!t&&(s.value=n,!0)}const i=I(e)&&P(t)?Number(t)<e.length:T(e,t),o=Reflect.set(e,t,n,xt(e)?e:r);return e===At(r)&&(i?z(n,s)&&Be(e,"set",t,n):Be(e,"add",t,n)),o}deleteProperty(e,t){const n=T(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Be(e,"delete",t,void 0),r}has(e,t){const n=Reflect.has(e,t);return R(t)&&Ze.has(t)||je(e,0,t),n}ownKeys(e){return je(e,0,I(e)?"length":Ue),Reflect.ownKeys(e)}}class rt extends tt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const st=new nt,it=new rt,ot=new nt(!0),at=e=>e,lt=e=>Reflect.getPrototypeOf(e);function ct(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}function ut(e,t){const n={get(n){const r=this.__v_raw,s=At(r),i=At(n);e||(z(n,i)&&je(s,0,n),je(s,0,i));const{has:o}=lt(s),a=t?at:e?Nt:Ot;return o.call(s,n)?a(r.get(n)):o.call(s,i)?a(r.get(i)):void(r!==s&&r.get(n))},get size(){const t=this.__v_raw;return!e&&je(At(t),0,Ue),Reflect.get(t,"size",t)},has(t){const n=this.__v_raw,r=At(n),s=At(t);return e||(z(t,s)&&je(r,0,t),je(r,0,s)),t===s?n.has(t):n.has(t)||n.has(s)},forEach(n,r){const s=this,i=s.__v_raw,o=At(i),a=t?at:e?Nt:Ot;return!e&&je(o,0,Ue),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}};b(n,e?{add:ct("add"),set:ct("set"),delete:ct("delete"),clear:ct("clear")}:{add(e){t||St(e)||kt(e)||(e=At(e));const n=At(this);return lt(n).has.call(n,e)||(n.add(e),Be(n,"add",e,e)),this},set(e,n){t||St(n)||kt(n)||(n=At(n));const r=At(this),{has:s,get:i}=lt(r);let o=s.call(r,e);o||(e=At(e),o=s.call(r,e));const a=i.call(r,e);return r.set(e,n),o?z(n,a)&&Be(r,"set",e,n):Be(r,"add",e,n),this},delete(e){const t=At(this),{has:n,get:r}=lt(t);let s=n.call(t,e);s||(e=At(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&Be(t,"delete",e,void 0),i},clear(){const e=At(this),t=0!==e.size,n=e.clear();return t&&Be(e,"clear",void 0,void 0),n}});return["keys","values","entries",Symbol.iterator].forEach((r=>{n[r]=function(e,t,n){return function(...r){const s=this.__v_raw,i=At(s),o=k(i),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=s[e](...r),u=n?at:t?Nt:Ot;return!t&&je(i,0,l?$e:Ue),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}(r,e,t)})),n}function ht(e,t){const n=ut(e,t);return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(T(n,r)&&r in t?n:t,r,s)}const dt={get:ht(!1,!1)},ft={get:ht(!1,!0)},pt={get:ht(!0,!1)},mt=new WeakMap,gt=new WeakMap,yt=new WeakMap,vt=new WeakMap;function _t(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>L(e).slice(8,-1))(e))}function bt(e){return kt(e)?e:Tt(e,!1,st,dt,mt)}function wt(e){return Tt(e,!1,ot,ft,gt)}function Et(e){return Tt(e,!0,it,pt,yt)}function Tt(e,t,n,r,s){if(!O(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=_t(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return s.set(e,a),a}function It(e){return kt(e)?It(e.__v_raw):!(!e||!e.__v_isReactive)}function kt(e){return!(!e||!e.__v_isReadonly)}function St(e){return!(!e||!e.__v_isShallow)}function Ct(e){return!!e&&!!e.__v_raw}function At(e){const t=e&&e.__v_raw;return t?At(t):e}function Rt(e){return!T(e,"__v_skip")&&Object.isExtensible(e)&&H(e,"__v_skip",!0),e}const Ot=e=>O(e)?bt(e):e,Nt=e=>O(e)?Et(e):e;function xt(e){return!!e&&!0===e.__v_isRef}function Lt(e){return Pt(e,!1)}function Dt(e){return Pt(e,!0)}function Pt(e,t){return xt(e)?e:new Mt(e,t)}class Mt{constructor(e,t){this.dep=new Pe,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:At(e),this._value=t?e:Ot(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,n=this.__v_isShallow||St(e)||kt(e);e=n?e:At(e),z(e,t)&&(this._rawValue=e,this._value=n?e:Ot(e),this.dep.trigger())}}function Ft(e){return xt(e)?e.value:e}const Ut={get:(e,t,n)=>"__v_raw"===t?e:Ft(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return xt(s)&&!xt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function $t(e){return It(e)?e:new Proxy(e,Ut)}function Vt(e){const t=I(e)?new Array(e.length):{};for(const n in e)t[n]=zt(e,n);return t}class jt{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return function(e,t){const n=Fe.get(e);return n&&n.get(t)}(At(this._object),this._key)}}class Bt{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function qt(e,t,n){return xt(e)?e:C(e)?new Bt(e):O(e)&&arguments.length>1?zt(e,t,n):Lt(e)}function zt(e,t,n){const r=e[t];return xt(r)?r:new jt(e,t,n)}class Wt{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pe(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Le-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(8&this.flags)&&ce!==this)return _e(this,!0),!0}get value(){const e=this.dep.track();return ke(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}const Ht={},Kt=new WeakMap;let Gt;function Qt(e,t,n=p){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,c=e=>s?e:St(e)||!1===s||0===s?Yt(e,1):Yt(e);let u,h,d,f,m=!1,y=!1;if(xt(e)?(h=()=>e.value,m=St(e)):It(e)?(h=()=>c(e),m=!0):I(e)?(y=!0,m=e.some((e=>It(e)||St(e))),h=()=>e.map((e=>xt(e)?e.value:It(e)?c(e):C(e)?l?l(e,2):e():void 0))):h=C(e)?t?l?()=>l(e,2):e:()=>{if(d){Oe();try{d()}finally{Ne()}}const t=Gt;Gt=u;try{return l?l(e,3,[f]):e(f)}finally{Gt=t}}:g,t&&s){const e=h,t=!0===s?1/0:s;h=()=>Yt(e(),t)}const v=de(),_=()=>{u.stop(),v&&v.active&&w(v.effects,u)};if(i&&t){const e=t;t=(...t)=>{e(...t),_()}}let b=y?new Array(e.length).fill(Ht):Ht;const E=e=>{if(1&u.flags&&(u.dirty||e))if(t){const e=u.run();if(s||m||(y?e.some(((e,t)=>z(e,b[t]))):z(e,b))){d&&d();const n=Gt;Gt=u;try{const n=[e,b===Ht?void 0:y&&b[0]===Ht?[]:b,f];l?l(t,3,n):t(...n),b=e}finally{Gt=n}}}else u.run()};return a&&a(E),u=new me(h),u.scheduler=o?()=>o(E,!1):E,f=e=>function(e,t=!1,n=Gt){if(n){let t=Kt.get(n);t||Kt.set(n,t=[]),t.push(e)}}(e,!1,u),d=u.onStop=()=>{const e=Kt.get(u);if(e){if(l)l(e,4);else for(const t of e)t();Kt.delete(u)}},t?r?E(!0):b=u.run():o?o(E.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Yt(e,t=1/0,n){if(t<=0||!O(e)||e.__v_skip)return e;if((n=n||new Set).has(e))return e;if(n.add(e),t--,xt(e))Yt(e.value,t,n);else if(I(e))for(let r=0;r<e.length;r++)Yt(e[r],t,n);else if(S(e)||k(e))e.forEach((e=>{Yt(e,t,n)}));else if(D(e)){for(const r in e)Yt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&Yt(e[r],t,n)}return e}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Jt(e,t,n,r){try{return r?e(...r):e()}catch(s){Zt(s,t,n)}}function Xt(e,t,n,r){if(C(e)){const s=Jt(e,t,n,r);return s&&N(s)&&s.catch((e=>{Zt(e,t,n)})),s}if(I(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Xt(e[i],t,n,r));return s}}function Zt(e,t,n,r=!0){t&&t.vnode;const{errorHandler:s,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||p;if(t){let r=t.parent;const i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}if(s)return Oe(),Jt(s,null,10,[e,i,o]),void Ne()}!function(e,t,n,r=!0,s=!1){if(s)throw e}(e,0,0,r,i)}const en=[];let tn=-1;const nn=[];let rn=null,sn=0;const on=Promise.resolve();let an=null;function ln(e){const t=an||on;return e?t.then(this?e.bind(this):e):t}function cn(e){if(!(1&e.flags)){const t=fn(e),n=en[en.length-1];!n||!(2&e.flags)&&t>=fn(n)?en.push(e):en.splice(function(e){let t=tn+1,n=en.length;for(;t<n;){const r=t+n>>>1,s=en[r],i=fn(s);i<e||i===e&&2&s.flags?t=r+1:n=r}return t}(t),0,e),e.flags|=1,un()}}function un(){an||(an=on.then(pn))}function hn(e,t,n=tn+1){for(;n<en.length;n++){const t=en[n];if(t&&2&t.flags){if(e&&t.id!==e.uid)continue;en.splice(n,1),n--,4&t.flags&&(t.flags&=-2),t(),4&t.flags||(t.flags&=-2)}}}function dn(e){if(nn.length){const e=[...new Set(nn)].sort(((e,t)=>fn(e)-fn(t)));if(nn.length=0,rn)return void rn.push(...e);for(rn=e,sn=0;sn<rn.length;sn++){const e=rn[sn];4&e.flags&&(e.flags&=-2),8&e.flags||e(),e.flags&=-2}rn=null,sn=0}}const fn=e=>null==e.id?2&e.flags?-1:1/0:e.id;function pn(e){try{for(tn=0;tn<en.length;tn++){const e=en[tn];!e||8&e.flags||(4&e.flags&&(e.flags&=-2),Jt(e,e.i,e.i?15:14),4&e.flags||(e.flags&=-2))}}finally{for(;tn<en.length;tn++){const e=en[tn];e&&(e.flags&=-2)}tn=-1,en.length=0,dn(),an=null,(en.length||nn.length)&&pn()}}let mn=null,gn=null;function yn(e){const t=mn;return mn=e,gn=e&&e.type.__scopeId||null,t}function vn(e,t=mn,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ms(-1);const s=yn(t);let i;try{i=e(...n)}finally{yn(s),r._d&&Ms(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function _n(e,t){if(null===mn)return e;const n=fi(mn),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,i,o,a=p]=t[s];e&&(C(e)&&(e={mounted:e,updated:e}),e.deep&&Yt(i),r.push({dir:e,instance:n,value:i,oldValue:void 0,arg:o,modifiers:a}))}return e}function bn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Oe(),Xt(l,n,8,[e.el,a,e,t]),Ne())}}const wn=Symbol("_vte"),En=e=>e.__isTeleport,Tn=e=>e&&(e.disabled||""===e.disabled),In=e=>e&&(e.defer||""===e.defer),kn=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,Sn=e=>"function"==typeof MathMLElement&&e instanceof MathMLElement,Cn=(e,t)=>{const n=e&&e.to;if(A(n)){if(t){return t(n)}return null}return n},An={name:"Teleport",__isTeleport:!0,process(e,t,n,r,s,i,o,a,l,c){const{mc:u,pc:h,pbc:d,o:{insert:f,querySelector:p,createText:m,createComment:g}}=c,y=Tn(t.props);let{shapeFlag:v,children:_,dynamicChildren:b}=t;if(null==e){const e=t.el=m(""),c=t.anchor=m("");f(e,n,r),f(c,n,r);const h=(e,t)=>{16&v&&(s&&s.isCE&&(s.ce._teleportTarget=e),u(_,e,t,s,i,o,a,l))},d=()=>{const e=t.target=Cn(t.props,p),n=xn(e,t,m,f);e&&("svg"!==o&&kn(e)?o="svg":"mathml"!==o&&Sn(e)&&(o="mathml"),y||(h(e,n),Nn(t,!1)))};y&&(h(n,c),Nn(t,!0)),In(t.props)?is((()=>{d(),t.el.__isMounted=!0}),i):d()}else{if(In(t.props)&&!e.el.__isMounted)return void is((()=>{An.process(e,t,n,r,s,i,o,a,l,c),delete e.el.__isMounted}),i);t.el=e.el,t.targetStart=e.targetStart;const u=t.anchor=e.anchor,f=t.target=e.target,m=t.targetAnchor=e.targetAnchor,g=Tn(e.props),v=g?n:f,_=g?u:m;if("svg"===o||kn(f)?o="svg":("mathml"===o||Sn(f))&&(o="mathml"),b?(d(e.dynamicChildren,b,v,s,i,o,a),cs(e,t,!0)):l||h(e,t,v,_,s,i,o,a,!1),y)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):Rn(t,n,u,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=Cn(t.props,p);e&&Rn(t,e,null,c,0)}else g&&Rn(t,f,m,c,1);Nn(t,y)}},remove(e,t,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:d}=e;if(h&&(s(c),s(u)),i&&s(l),16&o){const e=i||!Tn(d);for(let s=0;s<a.length;s++){const i=a[s];r(i,t,n,e,!!i.dynamicChildren)}}},move:Rn,hydrate:function(e,t,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){const d=t.target=Cn(t.props,l);if(d){const l=Tn(t.props),f=d._lpa||d.firstChild;if(16&t.shapeFlag)if(l)t.anchor=h(o(e),t,a(e),n,r,s,i),t.targetStart=f,t.targetAnchor=f&&o(f);else{t.anchor=o(e);let a=f;for(;a;){if(a&&8===a.nodeType)if("teleport start anchor"===a.data)t.targetStart=a;else if("teleport anchor"===a.data){t.targetAnchor=a,d._lpa=t.targetAnchor&&o(t.targetAnchor);break}a=o(a)}t.targetAnchor||xn(d,t,u,c),h(f&&o(f),t,d,n,r,s,i)}Nn(t,l)}return t.anchor&&o(t.anchor)}};function Rn(e,t,n,{o:{insert:r},m:s},i=2){0===i&&r(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=e,h=2===i;if(h&&r(o,t,n),(!h||Tn(u))&&16&l)for(let d=0;d<c.length;d++)s(c[d],t,n,2);h&&r(a,t,n)}const On=An;function Nn(e,t){const n=e.ctx;if(n&&n.ut){let r,s;for(t?(r=e.el,s=e.anchor):(r=e.targetStart,s=e.targetAnchor);r&&r!==s;)1===r.nodeType&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function xn(e,t,n,r){const s=t.targetStart=n(""),i=t.targetAnchor=n("");return s[wn]=i,e&&(r(s,e),r(i,e)),i}const Ln=Symbol("_leaveCb"),Dn=Symbol("_enterCb");function Pn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ir((()=>{e.isMounted=!0})),lr((()=>{e.isUnmounting=!0})),e}const Mn=[Function,Array],Fn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mn,onEnter:Mn,onAfterEnter:Mn,onEnterCancelled:Mn,onBeforeLeave:Mn,onLeave:Mn,onAfterLeave:Mn,onLeaveCancelled:Mn,onBeforeAppear:Mn,onAppear:Mn,onAfterAppear:Mn,onAppearCancelled:Mn},Un=e=>{const t=e.subTree;return t.component?Un(t.component):t};function $n(e){let t=e[0];if(e.length>1)for(const n of e)if(n.type!==Os){t=n;break}return t}const Vn={name:"BaseTransition",props:Fn,setup(e,{slots:t}){const n=ri(),r=Pn();return()=>{const s=t.default&&Hn(t.default(),!0);if(!s||!s.length)return;const i=$n(s),o=At(e),{mode:a}=o;if(r.isLeaving)return qn(i);const l=zn(i);if(!l)return qn(i);let c=Bn(l,o,r,n,(e=>c=e));l.type!==Os&&Wn(l,c);let u=n.subTree&&zn(n.subTree);if(u&&u.type!==Os&&!js(l,u)&&Un(n).type!==Os){let e=Bn(u,o,r,n);if(Wn(u,e),"out-in"===a&&l.type!==Os)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,8&n.job.flags||n.update(),delete e.afterLeave,u=void 0},qn(i);"in-out"===a&&l.type!==Os?e.delayLeave=(e,t,n)=>{jn(r,u)[String(u.key)]=u,e[Ln]=()=>{t(),e[Ln]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{n(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function jn(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Bn(e,t,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:d,onLeave:f,onAfterLeave:p,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:v,onAppearCancelled:_}=t,b=String(e.key),w=jn(n,e),E=(e,t)=>{e&&Xt(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),I(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:o,persisted:a,beforeEnter(t){let r=l;if(!n.isMounted){if(!i)return;r=g||l}t[Ln]&&t[Ln](!0);const s=w[b];s&&js(e,s)&&s.el[Ln]&&s.el[Ln](),E(r,[t])},enter(e){let t=c,r=u,s=h;if(!n.isMounted){if(!i)return;t=y||c,r=v||u,s=_||h}let o=!1;const a=e[Dn]=t=>{o||(o=!0,E(t?s:r,[e]),k.delayedLeave&&k.delayedLeave(),e[Dn]=void 0)};t?T(t,[e,a]):a()},leave(t,r){const s=String(e.key);if(t[Dn]&&t[Dn](!0),n.isUnmounting)return r();E(d,[t]);let i=!1;const o=t[Ln]=n=>{i||(i=!0,r(),E(n?m:p,[t]),t[Ln]=void 0,w[s]===e&&delete w[s])};w[s]=e,f?T(f,[t,o]):o()},clone(e){const i=Bn(e,t,n,r,s);return s&&s(i),i}};return k}function qn(e){if(Jn(e))return(e=Hs(e)).children=null,e}function zn(e){if(!Jn(e))return En(e.type)&&e.children?$n(e.children):e;const{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&C(n.default))return n.default()}}function Wn(e,t){6&e.shapeFlag&&e.component?(e.transition=t,Wn(e.component.subTree,t)):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Hn(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===As?(128&o.patchFlag&&s++,r=r.concat(Hn(o.children,t,a))):(t||o.type!==Os)&&r.push(null!=a?Hs(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}
/*! #__NO_SIDE_EFFECTS__ */function Kn(e,t){return C(e)?(()=>b({name:e.name},t,{setup:e}))():e}function Gn(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Qn(e,t,n,r,s=!1){if(I(e))return void e.forEach(((e,i)=>Qn(e,t&&(I(t)?t[i]:t),n,r,s)));if(Yn(r)&&!s)return void(512&r.shapeFlag&&r.type.__asyncResolved&&r.component.subTree.component&&Qn(e,t,n,r.component.subTree));const i=4&r.shapeFlag?fi(r.component):r.el,o=s?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===p?a.refs={}:a.refs,h=a.setupState,d=At(h),f=h===p?()=>!1:e=>T(d,e);if(null!=c&&c!==l&&(A(c)?(u[c]=null,f(c)&&(h[c]=null)):xt(c)&&(c.value=null)),C(l))Jt(l,a,12,[o,u]);else{const t=A(l),r=xt(l);if(t||r){const a=()=>{if(e.f){const n=t?f(l)?h[l]:u[l]:l.value;s?I(n)&&w(n,i):I(n)?n.includes(i)||n.push(i):t?(u[l]=[i],f(l)&&(h[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else t?(u[l]=o,f(l)&&(h[l]=o)):r&&(l.value=o,e.k&&(u[e.k]=o))};o?(a.id=-1,is(a,n)):a()}}}Q().requestIdleCallback,Q().cancelIdleCallback;const Yn=e=>!!e.type.__asyncLoader,Jn=e=>e.type.__isKeepAlive;function Xn(e,t){er(e,"a",t)}function Zn(e,t){er(e,"da",t)}function er(e,t,n=ni){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(nr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Jn(e.parent.vnode)&&tr(r,t,n,e),e=e.parent}}function tr(e,t,n,r){const s=nr(t,e,r,!0);cr((()=>{w(r[t],s)}),n)}function nr(e,t,n=ni,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{Oe();const s=oi(n),i=Xt(t,n,e,r);return s(),Ne(),i});return r?s.unshift(i):s.push(i),i}}const rr=e=>(t,n=ni)=>{ci&&"sp"!==e||nr(e,((...e)=>t(...e)),n)},sr=rr("bm"),ir=rr("m"),or=rr("bu"),ar=rr("u"),lr=rr("bum"),cr=rr("um"),ur=rr("sp"),hr=rr("rtg"),dr=rr("rtc");function fr(e,t=ni){nr("ec",e,t)}const pr="components";function mr(e,t){return _r(pr,e,!0,t)||e}const gr=Symbol.for("v-ndc");function yr(e){return A(e)&&_r(pr,e,!1)||e}function vr(e){return _r("directives",e)}function _r(e,t,n=!0,r=!1){const s=mn||ni;if(s){const n=s.type;if(e===pr){const e=pi(n,!1);if(e&&(e===t||e===$(t)||e===B($(t))))return n}const i=br(s[e]||n[e],t)||br(s.appContext[e],t);return!i&&r?n:i}}function br(e,t){return e&&(e[t]||e[$(t)]||e[B($(t))])}function wr(e,t,n,r){let s;const i=n,o=I(e);if(o||A(e)){let n=!1;o&&It(e)&&(n=!St(e),e=ze(e)),s=new Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=t(n?Ot(e[r]):e[r],r,void 0,i)}else if("number"==typeof e){s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,i)}else if(O(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,i)));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];s[r]=t(e[o],o,r,i)}}else s=[];return s}const Er=e=>e?li(e)?fi(e):Er(e.parent):null,Tr=b(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Nr(e),$forceUpdate:e=>e.f||(e.f=()=>{cn(e.update)}),$nextTick:e=>e.n||(e.n=ln.bind(e.proxy)),$watch:e=>ys.bind(e)}),Ir=(e,t)=>e!==p&&!e.__isScriptSetup&&T(e,t),kr={get({_:e},t){if("__v_skip"===t)return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ir(r,t))return o[t]=1,r[t];if(s!==p&&T(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&T(c,t))return o[t]=3,i[t];if(n!==p&&T(n,t))return o[t]=4,n[t];Cr&&(o[t]=0)}}const u=Tr[t];let h,d;return u?("$attrs"===t&&je(e.attrs,0,""),u(e)):(h=a.__cssModules)&&(h=h[t])?h:n!==p&&T(n,t)?(o[t]=4,n[t]):(d=l.config.globalProperties,T(d,t)?d[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ir(s,t)?(s[t]=n,!0):r!==p&&T(r,t)?(r[t]=n,!0):!T(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(i[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==p&&T(e,o)||Ir(t,o)||(a=i[0])&&T(a,o)||T(r,o)||T(Tr,o)||T(s.config.globalProperties,o)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:T(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Sr(e){return I(e)?e.reduce(((e,t)=>(e[t]=null,e)),{}):e}let Cr=!0;function Ar(e){const t=Nr(e),n=e.proxy,r=e.ctx;Cr=!1,t.beforeCreate&&Rr(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:p,activated:m,deactivated:y,beforeDestroy:v,beforeUnmount:_,destroyed:b,unmounted:w,render:E,renderTracked:T,renderTriggered:k,errorCaptured:S,serverPrefetch:A,expose:R,inheritAttrs:N,components:x,directives:L,filters:D}=t;if(c&&function(e,t){I(e)&&(e=Pr(e));for(const n in e){const r=e[n];let s;s=O(r)?"default"in r?zr(r.from||n,r.default,!0):zr(r.from||n):zr(r),xt(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[n]=s}}(c,r,null),o)for(const g in o){const e=o[g];C(e)&&(r[g]=e.bind(n))}if(s){const t=s.call(n,n);O(t)&&(e.data=bt(t))}if(Cr=!0,i)for(const I in i){const e=i[I],t=C(e)?e.bind(n,n):C(e.get)?e.get.bind(n,n):g,s=!C(e)&&C(e.set)?e.set.bind(n):g,o=mi({get:t,set:s});Object.defineProperty(r,I,{enumerable:!0,configurable:!0,get:()=>o.value,set:e=>o.value=e})}if(a)for(const g in a)Or(a[g],r,n,g);if(l){const e=C(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{qr(t,e[t])}))}function P(e,t){I(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&Rr(u,e,"c"),P(sr,h),P(ir,d),P(or,f),P(ar,p),P(Xn,m),P(Zn,y),P(fr,S),P(dr,T),P(hr,k),P(lr,_),P(cr,w),P(ur,A),I(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===g&&(e.render=E),null!=N&&(e.inheritAttrs=N),x&&(e.components=x),L&&(e.directives=L),A&&Gn(e)}function Rr(e,t,n){Xt(I(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Or(e,t,n,r){let s=r.includes(".")?vs(n,r):()=>n[r];if(A(e)){const n=t[e];C(n)&&ms(s,n)}else if(C(e))ms(s,e.bind(n));else if(O(e))if(I(e))e.forEach((e=>Or(e,t,n,r)));else{const r=C(e.handler)?e.handler.bind(n):t[e.handler];C(r)&&ms(s,r,e)}}function Nr(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:s.length||n||r?(l={},s.length&&s.forEach((e=>xr(l,e,o,!0))),xr(l,t,o)):l=t,O(t)&&i.set(t,l),l}function xr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&xr(e,i,n,!0),s&&s.forEach((t=>xr(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=Lr[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const Lr={data:Dr,props:Ur,emits:Ur,methods:Fr,computed:Fr,beforeCreate:Mr,created:Mr,beforeMount:Mr,mounted:Mr,beforeUpdate:Mr,updated:Mr,beforeDestroy:Mr,beforeUnmount:Mr,destroyed:Mr,unmounted:Mr,activated:Mr,deactivated:Mr,errorCaptured:Mr,serverPrefetch:Mr,components:Fr,directives:Fr,watch:function(e,t){if(!e)return t;if(!t)return e;const n=b(Object.create(null),e);for(const r in t)n[r]=Mr(e[r],t[r]);return n},provide:Dr,inject:function(e,t){return Fr(Pr(e),Pr(t))}};function Dr(e,t){return t?e?function(){return b(C(e)?e.call(this,this):e,C(t)?t.call(this,this):t)}:t:e}function Pr(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Mr(e,t){return e?[...new Set([].concat(e,t))]:t}function Fr(e,t){return e?b(Object.create(null),e,t):t}function Ur(e,t){return e?I(e)&&I(t)?[...new Set([...e,...t])]:b(Object.create(null),Sr(e),Sr(null!=t?t:{})):t}function $r(){return{app:null,config:{isNativeTag:y,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vr=0;function jr(e,t){return function(t,n=null){C(t)||(t=b({},t)),null==n||O(n)||(n=null);const r=$r(),s=new WeakSet,i=[];let o=!1;const a=r.app={_uid:Vr++,_component:t,_props:n,_container:null,_context:r,_instance:null,version:yi,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&C(e.install)?(s.add(e),e.install(a,...t)):C(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),a),component:(e,t)=>t?(r.components[e]=t,a):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,a):r.directives[e],mount(s,i,l){if(!o){const i=a._ceVNode||Ws(t,n);return i.appContext=r,!0===l?l="svg":!1===l&&(l=void 0),e(i,s,l),o=!0,a._container=s,s.__vue_app__=a,fi(i.component)}},onUnmount(e){i.push(e)},unmount(){o&&(Xt(i,a._instance,16),e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,a),runWithContext(e){const t=Br;Br=a;try{return e()}finally{Br=t}}};return a}}let Br=null;function qr(e,t){if(ni){let n=ni.provides;const r=ni.parent&&ni.parent.provides;r===n&&(n=ni.provides=Object.create(r)),n[e]=t}else;}function zr(e,t,n=!1){const r=ni||mn;if(r||Br){const s=Br?Br._context.provides:r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&C(t)?t.call(r&&r.proxy):t}}const Wr={},Hr=()=>Object.create(Wr),Kr=e=>Object.getPrototypeOf(e)===Wr;function Gr(e,t,n,r){const[s,i]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(M(l))continue;const c=t[l];let u;s&&T(s,u=$(l))?i&&i.includes(u)?(o||(o={}))[u]=c:n[u]=c:Es(e.emitsOptions,l)||l in r&&c===r[l]||(r[l]=c,a=!0)}if(i){const t=At(n),r=o||p;for(let o=0;o<i.length;o++){const a=i[o];n[a]=Qr(s,t,a,r[a],e,!T(r,a))}}return a}function Qr(e,t,n,r,s,i){const o=e[n];if(null!=o){const e=T(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&!o.skipFactory&&C(e)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=oi(s);r=i[n]=e.call(null,t),o()}}else r=e;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!e?r=!1:!o[1]||""!==r&&r!==j(n)||(r=!0))}return r}const Yr=new WeakMap;function Jr(e,t,n=!1){const r=n?Yr:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!C(e)){const r=e=>{l=!0;const[n,r]=Jr(e,t,!0);b(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!i&&!l)return O(e)&&r.set(e,m),m;if(I(i))for(let u=0;u<i.length;u++){const e=$(i[u]);Xr(e)&&(o[e]=p)}else if(i)for(const u in i){const e=$(u);if(Xr(e)){const t=i[u],n=o[e]=I(t)||C(t)?{type:t}:b({},t),r=n.type;let s=!1,l=!0;if(I(r))for(let e=0;e<r.length;++e){const t=r[e],n=C(t)&&t.name;if("Boolean"===n){s=!0;break}"String"===n&&(l=!1)}else s=C(r)&&"Boolean"===r.name;n[0]=s,n[1]=l,(s||T(n,"default"))&&a.push(e)}}const c=[o,a];return O(e)&&r.set(e,c),c}function Xr(e){return"$"!==e[0]&&!M(e)}const Zr=e=>"_"===e[0]||"$stable"===e,es=e=>I(e)?e.map(Qs):[Qs(e)],ts=(e,t,n)=>{if(t._n)return t;const r=vn(((...e)=>es(t(...e))),n);return r._c=!1,r},ns=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Zr(s))continue;const n=e[s];if(C(n))t[s]=ts(0,n,r);else if(null!=n){const e=es(n);t[s]=()=>e}}},rs=(e,t)=>{const n=es(t);e.slots.default=()=>n},ss=(e,t,n)=>{for(const r in t)(n||"_"!==r)&&(e[r]=t[r])},is=function(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):(I(n=e)?nn.push(...n):rn&&-1===n.id?rn.splice(sn+1,0,n):1&n.flags||(nn.push(n),n.flags|=1),un());var n};function os(e){return function(e){Q().__VUE__=!0;const{insert:t,remove:n,patchProp:r,createElement:s,createText:i,createComment:o,setText:a,setElementText:l,parentNode:c,nextSibling:u,setScopeId:h=g,insertStaticContent:d}=e,f=(e,t,n,r=null,s=null,i=null,o=void 0,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!js(e,t)&&(r=X(e),z(e,s,i,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Rs:y(e,t,n,r);break;case Os:v(e,t,n,r);break;case Ns:null==e&&_(t,n,r,o);break;case As:O(e,t,n,r,s,i,o,a,l);break;default:1&h?E(e,t,n,r,s,i,o,a,l):6&h?x(e,t,n,r,s,i,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,s,i,o,a,l,te)}null!=u&&s&&Qn(u,e&&e.ref,i,t||e,!t)},y=(e,n,r,s)=>{if(null==e)t(n.el=i(n.children),r,s);else{const t=n.el=e.el;n.children!==e.children&&a(t,n.children)}},v=(e,n,r,s)=>{null==e?t(n.el=o(n.children||""),r,s):n.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=d(e.children,t,n,r,e.el,e.anchor)},b=({el:e,anchor:n},r,s)=>{let i;for(;e&&e!==n;)i=u(e),t(e,r,s),e=i;t(n,r,s)},w=({el:e,anchor:t})=>{let r;for(;e&&e!==t;)r=u(e),n(e),e=r;n(t)},E=(e,t,n,r,s,i,o,a,l)=>{"svg"===t.type?o="svg":"math"===t.type&&(o="mathml"),null==e?I(t,n,r,s,i,o,a,l):C(e,t,s,i,o,a,l)},I=(e,n,i,o,a,c,u,h)=>{let d,f;const{props:p,shapeFlag:m,transition:g,dirs:y}=e;if(d=e.el=s(e.type,c,p&&p.is,p),8&m?l(d,e.children):16&m&&S(e.children,d,null,o,a,as(e,c),u,h),y&&bn(e,null,o,"created"),k(d,e,e.scopeId,u,o),p){for(const e in p)"value"===e||M(e)||r(d,e,null,p[e],c,o);"value"in p&&r(d,"value",null,p.value,c),(f=p.onVnodeBeforeMount)&&Zs(f,o,e)}y&&bn(e,null,o,"beforeMount");const v=function(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}(a,g);v&&g.beforeEnter(d),t(d,n,i),((f=p&&p.onVnodeMounted)||v||y)&&is((()=>{f&&Zs(f,o,e),v&&g.enter(d),y&&bn(e,null,o,"mounted")}),a)},k=(e,t,n,r,s)=>{if(n&&h(e,n),r)for(let i=0;i<r.length;i++)h(e,r[i]);if(s){let n=s.subTree;if(t===n||Cs(n.type)&&(n.ssContent===t||n.ssFallback===t)){const t=s.vnode;k(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},S=(e,t,n,r,s,i,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?Ys(e[c]):Qs(e[c]);f(null,l,t,n,r,s,i,o,a)}},C=(e,t,n,s,i,o,a)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=t;u|=16&e.patchFlag;const f=e.props||p,m=t.props||p;let g;if(n&&ls(n,!1),(g=m.onVnodeBeforeUpdate)&&Zs(g,n,t,e),d&&bn(t,e,n,"beforeUpdate"),n&&ls(n,!0),(f.innerHTML&&null==m.innerHTML||f.textContent&&null==m.textContent)&&l(c,""),h?A(e.dynamicChildren,h,c,n,s,as(t,i),o):a||U(e,t,c,null,n,s,as(t,i),o,!1),u>0){if(16&u)R(c,f,m,n,i);else if(2&u&&f.class!==m.class&&r(c,"class",null,m.class,i),4&u&&r(c,"style",f.style,m.style,i),8&u){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const s=e[t],o=f[s],a=m[s];a===o&&"value"!==s||r(c,s,o,a,i,n)}}1&u&&e.children!==t.children&&l(c,t.children)}else a||null!=h||R(c,f,m,n,i);((g=m.onVnodeUpdated)||d)&&is((()=>{g&&Zs(g,n,t,e),d&&bn(t,e,n,"updated")}),s)},A=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const l=e[a],u=t[a],h=l.el&&(l.type===As||!js(l,u)||70&l.shapeFlag)?c(l.el):n;f(l,u,h,null,r,s,i,o,!0)}},R=(e,t,n,s,i)=>{if(t!==n){if(t!==p)for(const o in t)M(o)||o in n||r(e,o,t[o],null,i,s);for(const o in n){if(M(o))continue;const a=n[o],l=t[o];a!==l&&"value"!==o&&r(e,o,l,a,i,s)}"value"in n&&r(e,"value",t.value,n.value,i)}},O=(e,n,r,s,o,a,l,c,u)=>{const h=n.el=e?e.el:i(""),d=n.anchor=e?e.anchor:i("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=n;m&&(c=c?c.concat(m):m),null==e?(t(h,r,s),t(d,r,s),S(n.children||[],r,d,o,a,l,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(A(e.dynamicChildren,p,r,o,a,l,c),(null!=n.key||o&&n===o.subTree)&&cs(e,n,!0)):U(e,n,r,d,o,a,l,c,u)},x=(e,t,n,r,s,i,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,l):L(t,n,r,s,i,o,l):D(e,t,l)},L=(e,t,n,r,s,i,o)=>{const a=e.component=function(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ei,i={uid:ti++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ue(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jr(r,s),emitsOptions:ws(r,s),emit:null,emitted:null,propsDefaults:p,inheritAttrs:r.inheritAttrs,ctx:p,data:p,props:p,attrs:p,slots:p,refs:p,setupState:p,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};i.ctx={_:i},i.root=t?t.root:i,i.emit=bs.bind(null,i),e.ce&&e.ce(i);return i}(e,r,s);if(Jn(e)&&(a.ctx.renderer=te),function(e,t=!1,n=!1){t&&ii(t);const{props:r,children:s}=e.vnode,i=li(e);(function(e,t,n,r=!1){const s={},i=Hr();e.propsDefaults=Object.create(null),Gr(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:wt(s):e.type.props?e.props=s:e.props=i,e.attrs=i})(e,r,i,t),((e,t,n)=>{const r=e.slots=Hr();if(32&e.vnode.shapeFlag){const e=t._;e?(ss(r,t,n),n&&H(r,"_",e,!0)):ns(t,r)}else t&&rs(e,t)})(e,s,n);const o=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,kr);const{setup:r}=n;if(r){Oe();const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,di),slots:e.slots,emit:e.emit,expose:t}}(e):null,s=oi(e),i=Jt(r,e,0,[e.props,n]),o=N(i);if(Ne(),s(),!o&&!e.sp||Yn(e)||Gn(e),o){if(i.then(ai,ai),t)return i.then((t=>{ui(e,t)})).catch((t=>{Zt(t,e,0)}));e.asyncDep=i}else ui(e,i)}else hi(e)}(e,t):void 0;t&&ii(!1)}(a,!1,o),a.asyncDep){if(s&&s.registerDep(a,P,o),!e.el){const e=a.subTree=Ws(Os);v(null,e,t,n)}}else P(a,e,t,n,s,i,o)},D=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||Ss(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?Ss(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Es(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,r.update()}else t.el=e.el,r.vnode=t},P=(e,t,n,r,s,i,o)=>{const a=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:l,vnode:u}=e;{const n=us(e);if(n)return t&&(t.el=u.el,F(e,t,o)),void n.asyncDep.then((()=>{e.isUnmounted||a()}))}let h,d=t;ls(e,!1),t?(t.el=u.el,F(e,t,o)):t=u,n&&W(n),(h=t.props&&t.props.onVnodeBeforeUpdate)&&Zs(h,l,t,u),ls(e,!0);const p=Ts(e),m=e.subTree;e.subTree=p,f(m,p,c(m.el),X(m),e,s,i),t.el=p.el,null===d&&function({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r!==e)break;(e=t.vnode).el=n,t=t.parent}}(e,p.el),r&&is(r,s),(h=t.props&&t.props.onVnodeUpdated)&&is((()=>Zs(h,l,t,u)),s)}else{let o;const{el:a,props:l}=t,{bm:c,m:u,parent:h,root:d,type:p}=e,m=Yn(t);ls(e,!1),c&&W(c),!m&&(o=l&&l.onVnodeBeforeMount)&&Zs(o,h,t),ls(e,!0);{d.ce&&d.ce._injectChildStyle(p);const o=e.subTree=Ts(e);f(null,o,n,r,e,s,i),t.el=o.el}if(u&&is(u,s),!m&&(o=l&&l.onVnodeMounted)){const e=t;is((()=>Zs(o,h,e)),s)}(256&t.shapeFlag||h&&Yn(h.vnode)&&256&h.vnode.shapeFlag)&&e.a&&is(e.a,s),e.isMounted=!0,t=n=r=null}};e.scope.on();const l=e.effect=new me(a);e.scope.off();const u=e.update=l.run.bind(l),h=e.job=l.runIfDirty.bind(l);h.i=e,h.id=e.uid,l.scheduler=()=>cn(h),ls(e,!0),u()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=At(s),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;Gr(e,t,s,i)&&(c=!0);for(const i in a)t&&(T(t,i)||(r=j(i))!==i&&T(t,r))||(l?!n||void 0===n[i]&&void 0===n[r]||(s[i]=Qr(l,a,i,void 0,e,!0)):delete s[i]);if(i!==a)for(const e in i)t&&T(t,e)||(delete i[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Es(e.emitsOptions,o))continue;const u=t[o];if(l)if(T(i,o))u!==i[o]&&(i[o]=u,c=!0);else{const t=$(o);s[t]=Qr(l,a,t,u,e,!1)}else u!==i[o]&&(i[o]=u,c=!0)}}c&&Be(e.attrs,"set","")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=p;if(32&r.shapeFlag){const e=t._;e?n&&1===e?i=!1:ss(s,t,n):(i=!t.$stable,ns(t,s)),o=t}else t&&(rs(e,t),o={default:1});if(i)for(const a in s)Zr(a)||null!=o[a]||delete s[a]})(e,t.children,n),Oe(),hn(e),Ne()},U=(e,t,n,r,s,i,o,a,c=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void B(u,d,n,r,s,i,o,a,c);if(256&f)return void V(u,d,n,r,s,i,o,a,c)}8&p?(16&h&&J(u,s,i),d!==u&&l(n,d)):16&h?16&p?B(u,d,n,r,s,i,o,a,c):J(u,s,i,!0):(8&h&&l(n,""),16&p&&S(d,n,r,s,i,o,a,c))},V=(e,t,n,r,s,i,o,a,l)=>{t=t||m;const c=(e=e||m).length,u=t.length,h=Math.min(c,u);let d;for(d=0;d<h;d++){const r=t[d]=l?Ys(t[d]):Qs(t[d]);f(e[d],r,n,null,s,i,o,a,l)}c>u?J(e,s,i,!0,!1,h):S(t,n,r,s,i,o,a,l,h)},B=(e,t,n,r,s,i,o,a,l)=>{let c=0;const u=t.length;let h=e.length-1,d=u-1;for(;c<=h&&c<=d;){const r=e[c],u=t[c]=l?Ys(t[c]):Qs(t[c]);if(!js(r,u))break;f(r,u,n,null,s,i,o,a,l),c++}for(;c<=h&&c<=d;){const r=e[h],c=t[d]=l?Ys(t[d]):Qs(t[d]);if(!js(r,c))break;f(r,c,n,null,s,i,o,a,l),h--,d--}if(c>h){if(c<=d){const e=d+1,h=e<u?t[e].el:r;for(;c<=d;)f(null,t[c]=l?Ys(t[c]):Qs(t[c]),n,h,s,i,o,a,l),c++}}else if(c>d)for(;c<=h;)z(e[c],s,i,!0),c++;else{const p=c,g=c,y=new Map;for(c=g;c<=d;c++){const e=t[c]=l?Ys(t[c]):Qs(t[c]);null!=e.key&&y.set(e.key,c)}let v,_=0;const b=d-g+1;let w=!1,E=0;const T=new Array(b);for(c=0;c<b;c++)T[c]=0;for(c=p;c<=h;c++){const r=e[c];if(_>=b){z(r,s,i,!0);continue}let u;if(null!=r.key)u=y.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&js(r,t[v])){u=v;break}void 0===u?z(r,s,i,!0):(T[u-g]=c+1,u>=E?E=u:w=!0,f(r,t[u],n,null,s,i,o,a,l),_++)}const I=w?function(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];for(;i-- >0;)n[i]=o,o=t[o];return n}(T):m;for(v=I.length-1,c=b-1;c>=0;c--){const e=g+c,h=t[e],d=e+1<u?t[e+1].el:r;0===T[c]?f(null,h,n,d,s,i,o,a,l):w&&(v<0||c!==I[v]?q(h,n,d,2):v--)}}},q=(e,n,r,s,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,n,r,s);if(128&u)return void e.suspense.move(n,r,s);if(64&u)return void a.move(e,n,r,te);if(a===As){t(o,n,r);for(let e=0;e<c.length;e++)q(c[e],n,r,s);return void t(e.anchor,n,r)}if(a===Ns)return void b(e,n,r);if(2!==s&&1&u&&l)if(0===s)l.beforeEnter(o),t(o,n,r),is((()=>l.enter(o)),i);else{const{leave:e,delayLeave:s,afterLeave:i}=l,a=()=>t(o,n,r),c=()=>{e(o,(()=>{a(),i&&i()}))};s?s(o,a,c):c()}else t(o,n,r)},z=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d,cacheIndex:f}=e;if(-2===h&&(s=!1),null!=a&&Qn(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,m=!Yn(e);let g;if(m&&(g=o&&o.onVnodeBeforeUnmount)&&Zs(g,t,e),6&u)Y(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&bn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,te,r):c&&!c.hasOnce&&(i!==As||h>0&&64&h)?J(c,t,n,!1,!0):(i===As&&384&h||!s&&16&u)&&J(l,t,n),r&&K(e)}(m&&(g=o&&o.onVnodeUnmounted)||p)&&is((()=>{g&&Zs(g,t,e),p&&bn(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:r,anchor:s,transition:i}=e;if(t===As)return void G(r,s);if(t===Ns)return void w(e);const o=()=>{n(r),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:n}=i,s=()=>t(r,o);n?n(e.el,o,s):s()}else o()},G=(e,t)=>{let r;for(;e!==t;)r=u(e),n(e),e=r;n(t)},Y=(e,t,n)=>{const{bum:r,scope:s,job:i,subTree:o,um:a,m:l,a:c}=e;hs(l),hs(c),r&&W(r),s.stop(),i&&(i.flags|=8,z(o,e,t,n)),a&&is(a,t),is((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)z(e[o],t,n,r,s)},X=e=>{if(6&e.shapeFlag)return X(e.component.subTree);if(128&e.shapeFlag)return e.suspense.next();const t=u(e.anchor||e.el),n=t&&t[wn];return n?u(n):t};let Z=!1;const ee=(e,t,n)=>{null==e?t._vnode&&z(t._vnode,null,null,!0):f(t._vnode||null,e,t,null,null,null,n),t._vnode=e,Z||(Z=!0,hn(),dn(),Z=!1)},te={p:f,um:z,m:q,r:K,mt:L,mc:S,pc:U,pbc:A,n:X,o:e};let ne;return{render:ee,hydrate:ne,createApp:jr(ee)}}(e)}function as({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function ls({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function cs(e,t,n=!1){const r=e.children,s=t.children;if(I(r)&&I(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Ys(s[i]),t.el=e.el),n||-2===t.patchFlag||cs(e,t)),t.type===Rs&&(t.el=e.el)}}function us(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:us(t)}function hs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ds=Symbol.for("v-scx"),fs=()=>zr(ds);function ps(e,t){return gs(e,null,t)}function ms(e,t,n){return gs(e,t,n)}function gs(e,t,n=p){const{immediate:r,deep:s,flush:i,once:o}=n,a=b({},n),l=t&&r||!t&&"post"!==i;let c;if(ci)if("sync"===i){const e=fs();c=e.__watcherHandles||(e.__watcherHandles=[])}else if(!l){const e=()=>{};return e.stop=g,e.resume=g,e.pause=g,e}const u=ni;a.call=(e,t,n)=>Xt(e,u,t,n);let h=!1;"post"===i?a.scheduler=e=>{is(e,u&&u.suspense)}:"sync"!==i&&(h=!0,a.scheduler=(e,t)=>{t?e():cn(e)}),a.augmentJob=e=>{t&&(e.flags|=4),h&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};const d=Qt(e,t,a);return ci&&(c?c.push(d):l&&d()),d}function ys(e,t,n){const r=this.proxy,s=A(e)?e.includes(".")?vs(r,e):()=>r[e]:e.bind(r,r);let i;C(t)?i=t:(i=t.handler,n=t);const o=oi(this),a=gs(s,i.bind(r),n);return o(),a}function vs(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}const _s=(e,t)=>"modelValue"===t||"model-value"===t?e.modelModifiers:e[`${t}Modifiers`]||e[`${$(t)}Modifiers`]||e[`${j(t)}Modifiers`];function bs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||p;let s=n;const i=t.startsWith("update:"),o=i&&_s(r,t.slice(7));let a;o&&(o.trim&&(s=n.map((e=>A(e)?e.trim():e))),o.number&&(s=n.map(K)));let l=r[a=q(t)]||r[a=q($(t))];!l&&i&&(l=r[a=q(j(t))]),l&&Xt(l,e,6,s);const c=r[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Xt(c,e,6,s)}}function ws(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const i=e.emits;let o={},a=!1;if(!C(e)){const r=e=>{const n=ws(e,t,!0);n&&(a=!0,b(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return i||a?(I(i)?i.forEach((e=>o[e]=null)):b(o,i),O(e)&&r.set(e,o),o):(O(e)&&r.set(e,null),null)}function Es(e,t){return!(!e||!v(t))&&(t=t.slice(2).replace(/Once$/,""),T(e,t[0].toLowerCase()+t.slice(1))||T(e,j(t))||T(e,t))}function Ts(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:p,inheritAttrs:m}=e,g=yn(e);let y,v;try{if(4&n.shapeFlag){const e=s||r,t=e;y=Qs(c.call(t,e,u,h,f,d,p)),v=a}else{const e=t;0,y=Qs(e.length>1?e(h,{attrs:a,slots:o,emit:l}):e(h,null)),v=t.props?a:Is(a)}}catch(w){xs.length=0,Zt(w,e,1),y=Ws(Os)}let b=y;if(v&&!1!==m){const e=Object.keys(v),{shapeFlag:t}=b;e.length&&7&t&&(i&&e.some(_)&&(v=ks(v,i)),b=Hs(b,v,!1,!0))}return n.dirs&&(b=Hs(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Wn(b,n.transition),y=b,yn(g),y}const Is=e=>{let t;for(const n in e)("class"===n||"style"===n||v(n))&&((t||(t={}))[n]=e[n]);return t},ks=(e,t)=>{const n={};for(const r in e)_(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Ss(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Es(n,i))return!0}return!1}const Cs=e=>e.__isSuspense;const As=Symbol.for("v-fgt"),Rs=Symbol.for("v-txt"),Os=Symbol.for("v-cmt"),Ns=Symbol.for("v-stc"),xs=[];let Ls=null;function Ds(e=!1){xs.push(Ls=e?null:[])}let Ps=1;function Ms(e,t=!1){Ps+=e,e<0&&Ls&&t&&(Ls.hasOnce=!0)}function Fs(e){return e.dynamicChildren=Ps>0?Ls||m:null,xs.pop(),Ls=xs[xs.length-1]||null,Ps>0&&Ls&&Ls.push(e),e}function Us(e,t,n,r,s,i){return Fs(zs(e,t,n,r,s,i,!0))}function $s(e,t,n,r,s){return Fs(Ws(e,t,n,r,s,!0))}function Vs(e){return!!e&&!0===e.__v_isVNode}function js(e,t){return e.type===t.type&&e.key===t.key}const Bs=({key:e})=>null!=e?e:null,qs=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?A(e)||xt(e)||C(e)?{i:mn,r:e,k:t,f:!!n}:e:null);function zs(e,t=null,n=null,r=0,s=null,i=(e===As?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bs(t),ref:t&&qs(t),scopeId:gn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(Js(l,n),128&i&&e.normalize(l)):n&&(l.shapeFlag|=A(n)?8:16),Ps>0&&!o&&Ls&&(l.patchFlag>0||6&i)&&32!==l.patchFlag&&Ls.push(l),l}const Ws=function(e,t=null,n=null,r=0,s=null,i=!1){e&&e!==gr||(e=Os);if(Vs(e)){const r=Hs(e,t,!0);return n&&Js(r,n),Ps>0&&!i&&Ls&&(6&r.shapeFlag?Ls[Ls.indexOf(e)]=r:Ls.push(r)),r.patchFlag=-2,r}o=e,C(o)&&"__vccOpts"in o&&(e=e.__vccOpts);var o;if(t){t=function(e){return e?Ct(e)||Kr(e)?b({},e):e:null}(t);let{class:e,style:n}=t;e&&!A(e)&&(t.class=te(e)),O(n)&&(Ct(n)&&!I(n)&&(n=b({},n)),t.style=Y(n))}const a=A(e)?1:Cs(e)?128:En(e)?64:O(e)?4:C(e)?2:0;return zs(e,t,n,r,s,a,i,!0)};function Hs(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=e,c=t?Xs(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Bs(c),ref:t&&t.ref?n&&i?I(i)?i.concat(qs(t)):[i,qs(t)]:qs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==As?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hs(e.ssContent),ssFallback:e.ssFallback&&Hs(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&Wn(u,l.clone(u)),u}function Ks(e=" ",t=0){return Ws(Rs,null,e,t)}function Gs(e="",t=!1){return t?(Ds(),$s(Os,null,e)):Ws(Os,null,e)}function Qs(e){return null==e||"boolean"==typeof e?Ws(Os):I(e)?Ws(As,null,e.slice()):Vs(e)?Ys(e):Ws(Rs,null,String(e))}function Ys(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:Hs(e)}function Js(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(I(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Js(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Kr(t)?3===r&&mn&&(1===mn.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=mn}}else C(t)?(t={default:t,_ctx:mn},n=32):(t=String(t),64&r?(n=16,t=[Ks(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xs(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=te([t.class,r.class]));else if("style"===e)t.style=Y([t.style,r.style]);else if(v(e)){const n=t[e],s=r[e];!s||n===s||I(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function Zs(e,t,n,r=null){Xt(e,t,7,[n,r])}const ei=$r();let ti=0;let ni=null;const ri=()=>ni||mn;let si,ii;{const e=Q(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach((t=>t(e))):r[0](e)}};si=t("__VUE_INSTANCE_SETTERS__",(e=>ni=e)),ii=t("__VUE_SSR_SETTERS__",(e=>ci=e))}const oi=e=>{const t=ni;return si(e),e.scope.on(),()=>{e.scope.off(),si(t)}},ai=()=>{ni&&ni.scope.off(),si(null)};function li(e){return 4&e.vnode.shapeFlag}let ci=!1;function ui(e,t,n){C(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:O(t)&&(e.setupState=$t(t)),hi(e)}function hi(e,t,n){const r=e.type;e.render||(e.render=r.render||g);{const t=oi(e);Oe();try{Ar(e)}finally{Ne(),t()}}}const di={get:(e,t)=>(je(e,0,""),e[t])};function fi(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy($t(Rt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Tr?Tr[n](e):void 0,has:(e,t)=>t in e||t in Tr})):e.proxy}function pi(e,t=!0){return C(e)?e.displayName||e.name:e.name||t&&e.__name}const mi=(e,t)=>{const n=function(e,t,n=!1){let r,s;return C(e)?r=e:(r=e.get,s=e.set),new Wt(r,s,n)}(e,0,ci);return n};function gi(e,t,n){const r=arguments.length;return 2===r?O(t)&&!I(t)?Vs(t)?Ws(e,null,[t]):Ws(e,t):Ws(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Vs(n)&&(n=[n]),Ws(e,t,n))}const yi="3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vi;const _i="undefined"!=typeof window&&window.trustedTypes;if(_i)try{vi=_i.createPolicy("vue",{createHTML:e=>e})}catch(qk){}const bi=vi?e=>vi.createHTML(e):e=>e,wi="undefined"!=typeof document?document:null,Ei=wi&&wi.createElement("template"),Ti={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s="svg"===t?wi.createElementNS("http://www.w3.org/2000/svg",e):"mathml"===t?wi.createElementNS("http://www.w3.org/1998/Math/MathML",e):n?wi.createElement(e,{is:n}):wi.createElement(e);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>wi.createTextNode(e),createComment:e=>wi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),s!==i&&(s=s.nextSibling););else{Ei.innerHTML=bi("svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e);const s=Ei.content;if("svg"===r||"mathml"===r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ii="transition",ki="animation",Si=Symbol("_vtc"),Ci={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ai=b({},Fn,Ci),Ri=(e=>(e.displayName="Transition",e.props=Ai,e))(((e,{slots:t})=>gi(Vn,xi(e),t))),Oi=(e,t=[])=>{I(e)?e.forEach((e=>e(...t))):e&&e(...t)},Ni=e=>!!e&&(I(e)?e.some((e=>e.length>1)):e.length>1);function xi(e){const t={};for(const b in e)b in Ci||(t[b]=e[b]);if(!1===e.css)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,p=function(e){if(null==e)return null;if(O(e))return[Li(e.enter),Li(e.leave)];{const t=Li(e);return[t,t]}}(s),m=p&&p[0],g=p&&p[1],{onBeforeEnter:y,onEnter:v,onEnterCancelled:_,onLeave:w,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:I=v,onAppearCancelled:k=_}=t,S=(e,t,n,r)=>{e._enterCancelled=r,Pi(e,t?u:a),Pi(e,t?c:o),n&&n()},C=(e,t)=>{e._isLeaving=!1,Pi(e,h),Pi(e,f),Pi(e,d),t&&t()},A=e=>(t,n)=>{const s=e?I:v,o=()=>S(t,e,n);Oi(s,[t,o]),Mi((()=>{Pi(t,e?l:i),Di(t,e?u:a),Ni(s)||Ui(t,r,m,o)}))};return b(t,{onBeforeEnter(e){Oi(y,[e]),Di(e,i),Di(e,o)},onBeforeAppear(e){Oi(T,[e]),Di(e,l),Di(e,c)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);Di(e,h),e._enterCancelled?(Di(e,d),Bi()):(Bi(),Di(e,d)),Mi((()=>{e._isLeaving&&(Pi(e,h),Di(e,f),Ni(w)||Ui(e,r,g,n))})),Oi(w,[e,n])},onEnterCancelled(e){S(e,!1,void 0,!0),Oi(_,[e])},onAppearCancelled(e){S(e,!0,void 0,!0),Oi(k,[e])},onLeaveCancelled(e){C(e),Oi(E,[e])}})}function Li(e){const t=(e=>{const t=A(e)?Number(e):NaN;return isNaN(t)?e:t})(e);return t}function Di(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[Si]||(e[Si]=new Set)).add(t)}function Pi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[Si];n&&(n.delete(t),n.size||(e[Si]=void 0))}function Mi(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Fi=0;function Ui(e,t,n,r){const s=e._endId=++Fi,i=()=>{s===e._endId&&r()};if(null!=n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=$i(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),i()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function $i(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),s=r(`${Ii}Delay`),i=r(`${Ii}Duration`),o=Vi(s,i),a=r(`${ki}Delay`),l=r(`${ki}Duration`),c=Vi(a,l);let u=null,h=0,d=0;t===Ii?o>0&&(u=Ii,h=o,d=i.length):t===ki?c>0&&(u=ki,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Ii:ki:null,d=u?u===Ii?i.length:l.length:0);return{type:u,timeout:h,propCount:d,hasTransform:u===Ii&&/\b(transform|all)(,|$)/.test(r(`${Ii}Property`).toString())}}function Vi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>ji(t)+ji(e[n]))))}function ji(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function Bi(){return document.body.offsetHeight}const qi=Symbol("_vod"),zi=Symbol("_vsh"),Wi={beforeMount(e,{value:t},{transition:n}){e[qi]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):Hi(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Hi(e,!0),r.enter(e)):r.leave(e,(()=>{Hi(e,!1)})):Hi(e,t))},beforeUnmount(e,{value:t}){Hi(e,t)}};function Hi(e,t){e.style.display=t?e[qi]:"none",e[zi]=!t}const Ki=Symbol(""),Gi=/(^|;)\s*display\s*:/;const Qi=/\s*!important$/;function Yi(e,t,n){if(I(n))n.forEach((n=>Yi(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=Xi[t];if(n)return n;let r=$(t);if("filter"!==r&&r in e)return Xi[t]=r;r=B(r);for(let s=0;s<Ji.length;s++){const n=Ji[s]+r;if(n in e)return Xi[t]=n}return t}(e,t);Qi.test(n)?e.setProperty(j(r),n.replace(Qi,""),"important"):e[r]=n}}const Ji=["Webkit","Moz","ms"],Xi={};const Zi="http://www.w3.org/1999/xlink";function eo(e,t,n,r,s,i=ne(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(Zi,t.slice(6,t.length)):e.setAttributeNS(Zi,t,n):null==n||i&&!re(n)?e.removeAttribute(t):e.setAttribute(t,i?"":R(n)?String(n):n)}function to(e,t,n,r,s){if("innerHTML"===t||"textContent"===t)return void(null!=n&&(e[t]="innerHTML"===t?bi(n):n));const i=e.tagName;if("value"===t&&"PROGRESS"!==i&&!i.includes("-")){const r="OPTION"===i?e.getAttribute("value")||"":e.value,s=null==n?"checkbox"===e.type?"on":"":String(n);return r===s&&"_value"in e||(e.value=s),null==n&&e.removeAttribute(t),void(e._value=n)}let o=!1;if(""===n||null==n){const r=typeof e[t];"boolean"===r?n=re(n):null==n&&"string"===r?(n="",o=!0):"number"===r&&(n=0,o=!0)}try{e[t]=n}catch(qk){}o&&e.removeAttribute(s||t)}function no(e,t,n,r){e.addEventListener(t,n,r)}const ro=Symbol("_vei");function so(e,t,n,r,s=null){const i=e[ro]||(e[ro]={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(io.test(e)){let n;for(t={};n=e.match(io);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):j(e.slice(2));return[n,t]}(t);if(r){const o=i[t]=function(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();Xt(function(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=lo(),n}(r,s);no(e,n,o,a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),i[t]=void 0)}}const io=/(?:Once|Passive|Capture)$/;let oo=0;const ao=Promise.resolve(),lo=()=>oo||(ao.then((()=>oo=0)),oo=Date.now());const co=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123;const uo=new WeakMap,ho=new WeakMap,fo=Symbol("_moveCb"),po=Symbol("_enterCb"),mo=(e=>(delete e.props.mode,e))({name:"TransitionGroup",props:b({},Ai,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=ri(),r=Pn();let s,i;return ar((()=>{if(!s.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){const r=e.cloneNode(),s=e[Si];s&&s.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))}));n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:o}=$i(r);return i.removeChild(r),o}(s[0].el,n.vnode.el,t))return;s.forEach(go),s.forEach(yo);const r=s.filter(vo);Bi(),r.forEach((e=>{const n=e.el,r=n.style;Di(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const s=n[fo]=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",s),n[fo]=null,Pi(n,t))};n.addEventListener("transitionend",s)}))})),()=>{const o=At(e),a=xi(o);let l=o.tag||As;if(s=[],i)for(let e=0;e<i.length;e++){const t=i[e];t.el&&t.el instanceof Element&&(s.push(t),Wn(t,Bn(t,a,r,n)),uo.set(t,t.el.getBoundingClientRect()))}i=t.default?Hn(t.default()):[];for(let e=0;e<i.length;e++){const t=i[e];null!=t.key&&Wn(t,Bn(t,a,r,n))}return Ws(l,null,i)}}});function go(e){const t=e.el;t[fo]&&t[fo](),t[po]&&t[po]()}function yo(e){ho.set(e,e.el.getBoundingClientRect())}function vo(e){const t=uo.get(e),n=ho.get(e),r=t.left-n.left,s=t.top-n.top;if(r||s){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${s}px)`,t.transitionDuration="0s",e}}const _o=e=>{const t=e.props["onUpdate:modelValue"]||!1;return I(t)?e=>W(t,e):t};function bo(e){e.target.composing=!0}function wo(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Eo=Symbol("_assign"),To={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[Eo]=_o(s);const i=r||s.props&&"number"===s.props.type;no(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),i&&(r=K(r)),e[Eo](r)})),n&&no(e,"change",(()=>{e.value=e.value.trim()})),t||(no(e,"compositionstart",bo),no(e,"compositionend",wo),no(e,"change",wo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(e[Eo]=_o(o),e.composing)return;const a=null==t?"":t;if((!i&&"number"!==e.type||/^0\d/.test(e.value)?e.value:K(e.value))!==a){if(document.activeElement===e&&"range"!==e.type){if(r&&t===n)return;if(s&&e.value.trim()===a)return}e.value=a}}},Io=["ctrl","shift","alt","meta"],ko={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Io.some((n=>e[`${n}Key`]&&!t.includes(n)))},So=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){const r=ko[t[e]];if(r&&r(n,t))return}return e(n,...r)})},Co=b({patchProp:(e,t,n,r,s,i)=>{const o="svg"===s;"class"===t?function(e,t,n){const r=e[Si];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,o):"style"===t?function(e,t,n){const r=e.style,s=A(n);let i=!1;if(n&&!s){if(t)if(A(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&Yi(r,t,"")}else for(const e in t)null==n[e]&&Yi(r,e,"");for(const e in n)"display"===e&&(i=!0),Yi(r,e,n[e])}else if(s){if(t!==n){const e=r[Ki];e&&(n+=";"+e),r.cssText=n,i=Gi.test(n)}}else t&&e.removeAttribute("style");qi in e&&(e[qi]=i?r.display:"",e[zi]&&(r.display="none"))}(e,n,r):v(t)?_(t)||so(e,t,0,r,i):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&co(t)&&C(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}if(co(t)&&A(n))return!1;return t in e}(e,t,r,o))?(to(e,t,r),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||eo(e,t,r,o,0,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&A(r)?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),eo(e,t,r,o)):to(e,$(t),r,0,t)}},Ti);let Ao;const Ro=(...e)=>{const t=(Ao||(Ao=os(Co))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(A(e)){return document.querySelector(e)}return e}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */(e);if(!r)return;const s=t._component;C(s)||s.render||s.template||(s.template=r.innerHTML),1===r.nodeType&&(r.textContent="");const i=n(r,!1,function(e){if(e instanceof SVGElement)return"svg";if("function"==typeof MathMLElement&&e instanceof MathMLElement)return"mathml"}(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};let Oo;const No=e=>Oo=e,xo=Symbol();function Lo(e){return e&&"object"==typeof e&&"[object Object]"===Object.prototype.toString.call(e)&&"function"!=typeof e.toJSON}var Do,Po;function Mo(){const e=he(!0),t=e.run((()=>Lt({})));let n=[],r=[];const s=Rt({install(e){No(s),s._a=e,e.provide(xo,s),e.config.globalProperties.$pinia=s,r.forEach((e=>n.push(e))),r=[]},use(e){return this._a?n.push(e):r.push(e),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}(Po=Do||(Do={})).direct="direct",Po.patchObject="patch object",Po.patchFunction="patch function";const Fo=()=>{};function Uo(e,t,n,r=Fo){e.push(t);const s=()=>{const n=e.indexOf(t);n>-1&&(e.splice(n,1),r())};return!n&&de()&&fe(s),s}function $o(e,...t){e.slice().forEach((e=>{e(...t)}))}const Vo=e=>e(),jo=Symbol(),Bo=Symbol();function qo(e,t){e instanceof Map&&t instanceof Map?t.forEach(((t,n)=>e.set(n,t))):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];Lo(s)&&Lo(r)&&e.hasOwnProperty(n)&&!xt(r)&&!It(r)?e[n]=qo(s,r):e[n]=r}return e}const zo=Symbol();const{assign:Wo}=Object;function Ho(e,t,n={},r,s,i){let o;const a=Wo({actions:{}},n),l={deep:!0};let c,u,h,d=[],f=[];const p=r.state.value[e];let m;function g(t){let n;c=u=!1,"function"==typeof t?(t(r.state.value[e]),n={type:Do.patchFunction,storeId:e,events:h}):(qo(r.state.value[e],t),n={type:Do.patchObject,payload:t,storeId:e,events:h});const s=m=Symbol();ln().then((()=>{m===s&&(c=!0)})),u=!0,$o(d,n,r.state.value[e])}i||p||(r.state.value[e]={}),Lt({});const y=i?function(){const{state:e}=n,t=e?e():{};this.$patch((e=>{Wo(e,t)}))}:Fo;const v=(t,n="")=>{if(jo in t)return t[Bo]=n,t;const s=function(){No(r);const n=Array.from(arguments),i=[],o=[];let a;$o(f,{args:n,name:s[Bo],store:_,after:function(e){i.push(e)},onError:function(e){o.push(e)}});try{a=t.apply(this&&this.$id===e?this:_,n)}catch(l){throw $o(o,l),l}return a instanceof Promise?a.then((e=>($o(i,e),e))).catch((e=>($o(o,e),Promise.reject(e)))):($o(i,a),a)};return s[jo]=!0,s[Bo]=n,s},_=bt({_p:r,$id:e,$onAction:Uo.bind(null,f),$patch:g,$reset:y,$subscribe(t,n={}){const s=Uo(d,t,n.detached,(()=>i())),i=o.run((()=>ms((()=>r.state.value[e]),(r=>{("sync"===n.flush?u:c)&&t({storeId:e,type:Do.direct,events:h},r)}),Wo({},l,n))));return s},$dispose:function(){o.stop(),d=[],f=[],r._s.delete(e)}});r._s.set(e,_);const b=(r._a&&r._a.runWithContext||Vo)((()=>r._e.run((()=>(o=he()).run((()=>t({action:v})))))));for(const T in b){const t=b[T];if(xt(t)&&(!xt(E=t)||!E.effect)||It(t))i||(!p||Lo(w=t)&&w.hasOwnProperty(zo)||(xt(t)?t.value=p[T]:qo(t,p[T])),r.state.value[e][T]=t);else if("function"==typeof t){const e=v(t,T);b[T]=e,a.actions[T]=t}}var w,E;return Wo(_,b),Wo(At(_),b),Object.defineProperty(_,"$state",{get:()=>r.state.value[e],set:e=>{g((t=>{Wo(t,e)}))}}),r._p.forEach((e=>{Wo(_,o.run((()=>e({store:_,app:r._a,pinia:r,options:a}))))})),p&&i&&n.hydrate&&n.hydrate(_.$state,p),c=!0,u=!0,_}
/*! #__NO_SIDE_EFFECTS__ */function Ko(e,t,n){let r,s;const i="function"==typeof t;function o(e,n){(e=e||(!!(ni||mn||Br)?zr(xo,null):null))&&No(e),(e=Oo)._s.has(r)||(i?Ho(r,t,s,e):function(e,t,n){const{state:r,actions:s,getters:i}=t,o=n.state.value[e];let a;a=Ho(e,(function(){o||(n.state.value[e]=r?r():{});const t=Vt(n.state.value[e]);return Wo(t,s,Object.keys(i||{}).reduce(((t,r)=>(t[r]=Rt(mi((()=>{No(n);const t=n._s.get(e);return i[r].call(t,t)}))),t)),{}))}),t,n,0,!0)}(r,s,e));return e._s.get(r)}return r=e,s=i?n:t,o.$id=r,o}var Go={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Yo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,l=a?e[s+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,i||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length?n[e.charAt(s)]:0;++s;const o=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==i||null==o||null==a)throw new Jo;const l=t<<2|i>>4;if(r.push(l),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Jo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xo=function(e){return function(e){const t=Qo(e);return Yo.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Zo=function(e){try{return Yo.decodeString(e,!0)}catch(qk){}return null};
/**
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
 */
const ea=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ta=()=>{try{return ea()||(()=>{if("undefined"==typeof process)return;const e=Go.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(qk){return}const t=e&&Zo(e[1]);return t&&JSON.parse(t)})()}catch(qk){return}},na=e=>{var t,n;return null===(n=null===(t=ta())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ra=e=>{const t=na(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},sa=()=>{var e;return null===(e=ta())||void 0===e?void 0:e.config},ia=e=>{var t;return null===(t=ta())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function aa(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Xo(JSON.stringify({alg:"none",type:"JWT"})),Xo(JSON.stringify(i)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ca(){return!function(){var e;const t=null===(e=ta())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(qk){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class ua extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ua.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(da,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new ua(r,o,n)}}const da=/\{\$([^}]+)}/g;function fa(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(pa(n)&&pa(i)){if(!fa(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function pa(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ga(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function ya(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class va{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=_a),void 0===r.error&&(r.error=_a),void 0===r.complete&&(r.complete=_a);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(qk){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(qk){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function _a(){}
/**
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
 */function ba(e){return e&&e._delegate?e._delegate:e}class wa{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const Ea="[DEFAULT]";
/**
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
 */class Ta{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new oa;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(qk){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(qk){if(r)return null;throw qk}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ea})}catch(qk){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(qk){}}}}clearInstance(e=Ea){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return d(this,null,(function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}))}isComponentSet(){return null!=this.component}isInitialized(e=Ea){return this.instances.has(e)}getOptions(e=Ea){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Ea?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}var r;return n||null}normalizeInstanceIdentifier(e=Ea){return this.component?this.component.multipleInstances?e:Ea:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ia{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ta(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ka,Sa;(Sa=ka||(ka={}))[Sa.DEBUG=0]="DEBUG",Sa[Sa.VERBOSE=1]="VERBOSE",Sa[Sa.INFO=2]="INFO",Sa[Sa.WARN=3]="WARN",Sa[Sa.ERROR=4]="ERROR",Sa[Sa.SILENT=5]="SILENT";const Ca={debug:ka.DEBUG,verbose:ka.VERBOSE,info:ka.INFO,warn:ka.WARN,error:ka.ERROR,silent:ka.SILENT},Aa=ka.INFO,Ra={[ka.DEBUG]:"log",[ka.VERBOSE]:"log",[ka.INFO]:"info",[ka.WARN]:"warn",[ka.ERROR]:"error"},Oa=(e,t,...n)=>{if(t<e.logLevel)return;(new Date).toISOString();if(!Ra[t])throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Na{constructor(e){this.name=e,this._logLevel=Aa,this._logHandler=Oa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ka))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ca[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ka.DEBUG,...e),this._logHandler(this,ka.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ka.VERBOSE,...e),this._logHandler(this,ka.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ka.INFO,...e),this._logHandler(this,ka.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ka.WARN,...e),this._logHandler(this,ka.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ka.ERROR,...e),this._logHandler(this,ka.ERROR,...e)}}let xa,La;const Da=new WeakMap,Pa=new WeakMap,Ma=new WeakMap,Fa=new WeakMap,Ua=new WeakMap;let $a={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Pa.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ma.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ba(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Va(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(La||(La=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(qa(this),t),Ba(Da.get(this))}:function(...t){return Ba(e.apply(qa(this),t))}:function(t,...n){const r=e.call(qa(this),t,...n);return Ma.set(r,t.sort?t.sort():[t]),Ba(r)}}function ja(e){return"function"==typeof e?Va(e):(e instanceof IDBTransaction&&function(e){if(Pa.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));Pa.set(e,t)}(e),t=e,(xa||(xa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,$a):e);var t}function Ba(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(Ba(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Da.set(t,e)})).catch((()=>{})),Ua.set(t,e),t}(e);if(Fa.has(e))return Fa.get(e);const t=ja(e);return t!==e&&(Fa.set(e,t),Ua.set(t,e)),t}const qa=e=>Ua.get(e);const za=["get","getKey","getAll","getAllKeys","count"],Wa=["put","add","delete","clear"],Ha=new Map;function Ka(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ha.get(t))return Ha.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Wa.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!za.includes(n))return;const i=function(e,...t){return d(this,null,(function*(){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(yield Promise.all([o[n](...t),s&&i.done]))[0]}))};return Ha.set(t,i),i}$a=(e=>u(c({},e),{get:(t,n,r)=>Ka(t,n)||e.get(t,n,r),has:(t,n)=>!!Ka(t,n)||e.has(t,n)}))($a);
/**
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
 */
class Ga{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Qa="@firebase/app",Ya="0.11.3",Ja=new Na("@firebase/app"),Xa="@firebase/app-compat",Za="@firebase/analytics-compat",el="@firebase/analytics",tl="@firebase/app-check-compat",nl="@firebase/app-check",rl="@firebase/auth",sl="@firebase/auth-compat",il="@firebase/database",ol="@firebase/data-connect",al="@firebase/database-compat",ll="@firebase/functions",cl="@firebase/functions-compat",ul="@firebase/installations",hl="@firebase/installations-compat",dl="@firebase/messaging",fl="@firebase/messaging-compat",pl="@firebase/performance",ml="@firebase/performance-compat",gl="@firebase/remote-config",yl="@firebase/remote-config-compat",vl="@firebase/storage",_l="@firebase/storage-compat",bl="@firebase/firestore",wl="@firebase/vertexai",El="@firebase/firestore-compat",Tl="firebase",Il="[DEFAULT]",kl={[Qa]:"fire-core",[Xa]:"fire-core-compat",[el]:"fire-analytics",[Za]:"fire-analytics-compat",[nl]:"fire-app-check",[tl]:"fire-app-check-compat",[rl]:"fire-auth",[sl]:"fire-auth-compat",[il]:"fire-rtdb",[ol]:"fire-data-connect",[al]:"fire-rtdb-compat",[ll]:"fire-fn",[cl]:"fire-fn-compat",[ul]:"fire-iid",[hl]:"fire-iid-compat",[dl]:"fire-fcm",[fl]:"fire-fcm-compat",[pl]:"fire-perf",[ml]:"fire-perf-compat",[gl]:"fire-rc",[yl]:"fire-rc-compat",[vl]:"fire-gcs",[_l]:"fire-gcs-compat",[bl]:"fire-fst",[El]:"fire-fst-compat",[wl]:"fire-vertex","fire-js":"fire-js",[Tl]:"fire-js-all"},Sl=new Map,Cl=new Map,Al=new Map;function Rl(e,t){try{e.container.addComponent(t)}catch(qk){Ja.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,qk)}}function Ol(e){const t=e.name;if(Al.has(t))return Ja.debug(`There were multiple attempts to register component ${t}.`),!1;Al.set(t,e);for(const n of Sl.values())Rl(n,e);for(const n of Cl.values())Rl(n,e);return!0}function Nl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function xl(e){return null!=e&&void 0!==e.settings}
/**
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
 */const Ll=new ha("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
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
 */
class Dl{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wa("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ll.create("app-deleted",{appName:this._name})}}
/**
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
 */const Pl="11.5.0";function Ml(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Il,automaticDataCollectionEnabled:!1},t),s=r.name;if("string"!=typeof s||!s)throw Ll.create("bad-app-name",{appName:String(s)});if(n||(n=sa()),!n)throw Ll.create("no-options");const i=Sl.get(s);if(i){if(fa(n,i.options)&&fa(r,i.config))return i;throw Ll.create("duplicate-app",{appName:s})}const o=new Ia(s);for(const l of Al.values())o.addComponent(l);const a=new Dl(n,r,o);return Sl.set(s,a),a}function Fl(e=Il){const t=Sl.get(e);if(!t&&e===Il&&sa())return Ml();if(!t)throw Ll.create("no-app",{appName:e});return t}function Ul(e,t,n){var r;let s=null!==(r=kl[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ja.warn(e.join(" "))}Ol(new wa(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
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
 */const $l="firebase-heartbeat-store";let Vl=null;function jl(){return Vl||(Vl=function(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ba(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Ba(o.result),e.oldVersion,e.newVersion,Ba(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore($l)}catch(qk){}}}).catch((e=>{throw Ll.create("idb-open",{originalErrorMessage:e.message})}))),Vl}function Bl(e,t){return d(this,null,(function*(){try{const n=(yield jl()).transaction($l,"readwrite"),r=n.objectStore($l);yield r.put(t,ql(e)),yield n.done}catch(qk){if(qk instanceof ua)Ja.warn(qk.message);else{const t=Ll.create("idb-set",{originalErrorMessage:null==qk?void 0:qk.message});Ja.warn(t.message)}}}))}function ql(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class zl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hl(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}triggerHeartbeat(){return d(this,null,(function*(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wl();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(qk){Ja.warn(qk)}}))}getHeartbeatsHeader(){return d(this,null,(function*(){var e;try{if(null===this._heartbeatsCache&&(yield this._heartbeatsCachePromise),null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Wl(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Kl(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kl(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=Xo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(qk){return Ja.warn(qk),""}}))}}function Wl(){return(new Date).toISOString().substring(0,10)}class Hl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return d(this,null,(function*(){return!!function(){try{return"object"==typeof indexedDB}catch(qk){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}))}read(){return d(this,null,(function*(){if(yield this._canUseIndexedDBPromise){const e=yield function(e){return d(this,null,(function*(){try{const t=(yield jl()).transaction($l),n=yield t.objectStore($l).get(ql(e));return yield t.done,n}catch(qk){if(qk instanceof ua)Ja.warn(qk.message);else{const t=Ll.create("idb-get",{originalErrorMessage:null==qk?void 0:qk.message});Ja.warn(t.message)}}}))}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}))}overwrite(e){return d(this,null,(function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Bl(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}))}add(e){return d(this,null,(function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Bl(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}))}}function Kl(e){return Xo(JSON.stringify({version:2,heartbeats:e})).length}var Gl;Gl="",Ol(new wa("platform-logger",(e=>new Ga(e)),"PRIVATE")),Ol(new wa("heartbeat",(e=>new zl(e)),"PRIVATE")),Ul(Qa,Ya,Gl),Ul(Qa,Ya,"esm2017"),Ul("fire-js","");function Ql(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}function Yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
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
 */
Ul("firebase","11.5.0","app"),"function"==typeof SuppressedError&&SuppressedError;const Jl=Yl,Xl=new ha("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Zl=new Na("@firebase/auth");function ec(e,...t){Zl.logLevel<=ka.ERROR&&Zl.error(`Auth (${Pl}): ${e}`,...t)}
/**
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
 */function tc(e,...t){throw ic(e,...t)}function nc(e,...t){return ic(e,...t)}function rc(e,t,n){const r=Object.assign(Object.assign({},Jl()),{[t]:n});return new ha("auth","Firebase",r).create(t,{appName:e.name})}function sc(e){return rc(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ic(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Xl.create(e,...t)}function oc(e,t,...n){if(!e)throw ic(t,...n)}function ac(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ec(t),new Error(t)}function lc(e,t){e||ac(t)}
/**
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
 */function cc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function uc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */function hc(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==uc()&&"https:"!==uc()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
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
 */
class dc{constructor(e,t){this.shortDelay=e,this.longDelay=t,lc(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(la())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return hc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
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
 */function fc(e,t){lc(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class pc{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ac("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ac("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ac("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const mc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},gc=new dc(3e4,6e4);
/**
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
 */function yc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function vc(e,t,n,r){return d(this,arguments,(function*(e,t,n,r,s={}){return _c(e,s,(()=>d(this,null,(function*(){let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=ma(Object.assign({key:e.config.apiKey},i)).slice(1),a=yield e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:a},s);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),pc.fetch()(wc(e,e.config.apiHost,n,o),l)}))))}))}function _c(e,t,n){return d(this,null,(function*(){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},mc),t);try{const t=new Tc(e),s=yield Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=yield s.json();if("needConfirmation"in i)throw Ic(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ic(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Ic(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Ic(e,"user-disabled",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw rc(e,a,o);tc(e,a)}}catch(qk){if(qk instanceof ua)throw qk;tc(e,"network-request-failed",{message:String(qk)})}}))}function bc(e,t,n,r){return d(this,arguments,(function*(e,t,n,r,s={}){const i=yield vc(e,t,n,r,s);return"mfaPendingCredential"in i&&tc(e,"multi-factor-auth-required",{_serverResponse:i}),i}))}function wc(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?fc(e.config,s):`${e.config.apiScheme}://${s}`}function Ec(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(nc(this.auth,"network-request-failed"))),gc.get())}))}}function Ic(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nc(e,t,r);return s.customData._tokenResponse=n,s}function kc(e){return void 0!==e&&void 0!==e.enterprise}class Sc{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ec(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}function Cc(e,t){return d(this,null,(function*(){return vc(e,"POST","/v1/accounts:lookup",t)}))}
/**
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
 */function Ac(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(qk){}}function Rc(e){return 1e3*Number(e)}function Oc(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const e=Zo(n);return e?JSON.parse(e):(ec("Failed to decode base64 JWT payload"),null)}catch(qk){return ec("Caught error parsing JWT payload as JSON",null==qk?void 0:qk.toString()),null}}function Nc(e){const t=Oc(e);return oc(t,"internal-error"),oc(void 0!==t.exp,"internal-error"),oc(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
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
 */function xc(e,t,n=!1){return d(this,null,(function*(){if(n)return t;try{return yield t}catch(qk){throw qk instanceof ua&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(qk)&&e.auth.currentUser===e&&(yield e.auth.signOut()),qk}}))}class Lc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((()=>d(this,null,(function*(){yield this.iteration()}))),t)}iteration(){return d(this,null,(function*(){try{yield this.user.getIdToken(!0)}catch(qk){return void("auth/network-request-failed"===(null==qk?void 0:qk.code)&&this.schedule(!0))}this.schedule()}))}}
/**
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
 */class Dc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ac(this.lastLoginAt),this.creationTime=Ac(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */function Pc(e){return d(this,null,(function*(){var t;const n=e.auth,r=yield e.getIdToken(),s=yield xc(e,Cc(n,{idToken:r}));oc(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?Mc(i.providerUserInfo):[],a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dc(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}))}function Mc(e){return e.map((e=>{var{providerId:t}=e,n=Ql(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
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
 */
/**
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
 */
class Fc{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oc(e.idToken,"internal-error"),oc(void 0!==e.idToken,"internal-error"),oc(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Nc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){oc(0!==e.length,"internal-error");const t=Nc(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return d(this,null,(function*(){return t||!this.accessToken||this.isExpired?(oc(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}))}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return d(this,null,(function*(){const{accessToken:n,refreshToken:r,expiresIn:s}=yield function(e,t){return d(this,null,(function*(){const n=yield _c(e,{},(()=>d(this,null,(function*(){const n=ma({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=wc(e,r,"/v1/token",`key=${s}`),o=yield e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",pc.fetch()(i,{method:"POST",headers:o,body:n})}))));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}))}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Fc;return n&&(oc("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(oc("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(oc("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fc,this.toJSON())}_performRefresh(){return ac("not implemented")}}
/**
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
 */function Uc(e,t){oc("string"==typeof e||void 0===e,"internal-error",{appName:t})}class $c{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=Ql(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Lc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dc(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return d(this,null,(function*(){const t=yield xc(this,this.stsTokenManager.getToken(this.auth,e));return oc(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}))}getIdTokenResult(e){return function(e,t=!1){return d(this,null,(function*(){const n=ba(e),r=yield n.getIdToken(t),s=Oc(r);oc(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ac(Rc(s.auth_time)),issuedAtTime:Ac(Rc(s.iat)),expirationTime:Ac(Rc(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}))}(this,e)}reload(){return function(e){return d(this,null,(function*(){const t=ba(e);yield Pc(t),yield t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}))}(this)}_assign(e){this!==e&&(oc(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $c(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){oc(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return d(this,null,(function*(){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&(yield Pc(this)),yield this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}))}delete(){return d(this,null,(function*(){if(xl(this.auth.app))return Promise.reject(sc(this.auth));const e=yield this.getIdToken();return yield xc(this,
/**
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
 */
function(e,t){return d(this,null,(function*(){return vc(e,"POST","/v1/accounts:delete",t)}))}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}))}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:_,isAnonymous:b,providerData:w,stsTokenManager:E}=t;oc(v&&E,e,"internal-error");const T=Fc.fromJSON(this.name,E);oc("string"==typeof v,e,"internal-error"),Uc(u,e.name),Uc(h,e.name),oc("boolean"==typeof _,e,"internal-error"),oc("boolean"==typeof b,e,"internal-error"),Uc(d,e.name),Uc(f,e.name),Uc(p,e.name),Uc(m,e.name),Uc(g,e.name),Uc(y,e.name);const I=new $c({uid:v,auth:e,email:h,emailVerified:_,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static _fromIdTokenResponse(e,t,n=!1){return d(this,null,(function*(){const r=new Fc;r.updateFromServerResponse(t);const s=new $c({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return yield Pc(s),s}))}static _fromGetAccountInfoResponse(e,t,n){return d(this,null,(function*(){const r=t.users[0];oc(void 0!==r.localId,"internal-error");const s=void 0!==r.providerUserInfo?Mc(r.providerUserInfo):[],i=!(r.email&&r.passwordHash||(null==s?void 0:s.length)),o=new Fc;o.updateFromIdToken(n);const a=new $c({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:i}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Dc(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==s?void 0:s.length))};return Object.assign(a,l),a}))}}
/**
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
 */const Vc=new Map;function jc(e){lc(e instanceof Function,"Expected a class definition");let t=Vc.get(e);return t?(lc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Vc.set(e,t),t)}
/**
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
 */class Bc{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return d(this,null,(function*(){return!0}))}_set(e,t){return d(this,null,(function*(){this.storage[e]=t}))}_get(e){return d(this,null,(function*(){const t=this.storage[e];return void 0===t?null:t}))}_remove(e){return d(this,null,(function*(){delete this.storage[e]}))}_addListener(e,t){}_removeListener(e,t){}}Bc.type="NONE";const qc=Bc;
/**
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
 */function zc(e,t,n){return`firebase:${e}:${t}:${n}`}class Wc{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=zc(this.userKey,r.apiKey,s),this.fullPersistenceKey=zc("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return d(this,null,(function*(){const e=yield this.persistence._get(this.fullUserKey);return e?$c._fromJSON(this.auth,e):null}))}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return d(this,null,(function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();return yield this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}))}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,n="authUser"){return d(this,null,(function*(){if(!t.length)return new Wc(jc(qc),e,n);const r=(yield Promise.all(t.map((e=>d(this,null,(function*(){if(yield e._isAvailable())return e})))))).filter((e=>e));let s=r[0]||jc(qc);const i=zc(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=yield n._get(i);if(t){const r=$c._fromJSON(e,t);n!==s&&(o=r),s=n;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&(yield s._set(i,o.toJSON())),yield Promise.all(t.map((e=>d(this,null,(function*(){if(e!==s)try{yield e._remove(i)}catch(l){}}))))),new Wc(s,e,n)):new Wc(s,e,n)}))}}
/**
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
 */function Hc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Yc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Kc(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xc(t))return"Blackberry";if(Zc(t))return"Webos";if(Gc(t))return"Safari";if((t.includes("chrome/")||Qc(t))&&!t.includes("edge/"))return"Chrome";if(Jc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Kc(e=la()){return/firefox\//i.test(e)}function Gc(e=la()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qc(e=la()){return/crios\//i.test(e)}function Yc(e=la()){return/iemobile/i.test(e)}function Jc(e=la()){return/android/i.test(e)}function Xc(e=la()){return/blackberry/i.test(e)}function Zc(e=la()){return/webos/i.test(e)}function eu(e=la()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tu(){return function(){const e=la();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function nu(e=la()){return eu(e)||Jc(e)||Zc(e)||Xc(e)||/windows phone/i.test(e)||Yc(e)}
/**
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
 */function ru(e,t=[]){let n;switch(e){case"Browser":n=Hc(la());break;case"Worker":n=`${Hc(la())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pl}/${r}`}
/**
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
 */class su{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(qk){r(qk)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}runMiddleware(e){return d(this,null,(function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)yield n(e),n.onAbort&&t.push(n.onAbort)}catch(qk){t.reverse();for(const r of t)try{r()}catch(n){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==qk?void 0:qk.message})}}))}}
/**
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
 */class iu{constructor(e){var t,n,r,s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=i.minPasswordLength)&&void 0!==t?t:6,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),void 0!==i.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),void 0!==i.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),void 0!==i.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),void 0!==i.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(s=e.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,s,i,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsUppercaseLetter)||void 0===s||s),a.isValid&&(a.isValid=null===(i=a.containsNumericCharacter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}
/**
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
 */class ou{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lu(this),this.idTokenSubscription=new lu(this),this.beforeStateQueue=new su(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jc(t)),this._initializationPromise=this.queue((()=>d(this,null,(function*(){var n,r;if(!this._deleted&&(this.persistenceManager=yield Wc.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(qk){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})))),this._initializationPromise}_onStorageEvent(){return d(this,null,(function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(yield this.currentUser.getIdToken())):void(yield this._updateCurrentUser(e,!0)):void 0}))}initializeCurrentUserFromIdToken(e){return d(this,null,(function*(){try{const t=yield Cc(this,{idToken:e}),n=yield $c._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(n)}catch(t){yield this.directlySetCurrentUser(null)}}))}initializeCurrentUser(e){return d(this,null,(function*(){var t;if(xl(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=yield this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==r?void 0:r._redirectEventId,o=yield this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(r)}catch(qk){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(qk)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oc(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}))}tryRedirectSignIn(e){return d(this,null,(function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(qk){yield this._setRedirectUser(null)}return t}))}reloadAndSetCurrentUserOrClear(e){return d(this,null,(function*(){try{yield Pc(e)}catch(qk){if("auth/network-request-failed"!==(null==qk?void 0:qk.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}))}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}_delete(){return d(this,null,(function*(){this._deleted=!0}))}updateCurrentUser(e){return d(this,null,(function*(){if(xl(this.app))return Promise.reject(sc(this));const t=e?ba(e):null;return t&&oc(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}))}_updateCurrentUser(e,t=!1){return d(this,null,(function*(){if(!this._deleted)return e&&oc(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue((()=>d(this,null,(function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))))}))}signOut(){return d(this,null,(function*(){return xl(this.app)?Promise.reject(sc(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))}))}setPersistence(e){return xl(this.app)?Promise.reject(sc(this)):this.queue((()=>d(this,null,(function*(){yield this.assertedPersistence.setPersistence(jc(e))}))))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return d(this,null,(function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}))}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return d(this,null,(function*(){const e=yield function(e){return d(this,arguments,(function*(e,t={}){return vc(e,"GET","/v2/passwordPolicy",yc(e,t))}))}
/**
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
 */(this),t=new iu(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}revokeAccessToken(e){return d(this,null,(function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};null!=this.tenantId&&(n.tenantId=this.tenantId),yield function(e,t){return d(this,null,(function*(){return vc(e,"POST","/v2/accounts:revokeToken",yc(e,t))}))}(this,n)}}))}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}_setRedirectUser(e,t){return d(this,null,(function*(){const n=yield this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}))}getOrInitRedirectPersistenceManager(e){return d(this,null,(function*(){if(!this.redirectPersistenceManager){const t=e&&jc(e)||this._popupRedirectResolver;oc(t,this,"argument-error"),this.redirectPersistenceManager=yield Wc.create(this,[jc(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}))}_redirectUserForId(e){return d(this,null,(function*(){var t,n;return this._isInitialized&&(yield this.queue((()=>d(this,null,(function*(){}))))),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}))}_persistUserIfCurrent(e){return d(this,null,(function*(){if(e===this.currentUser)return this.queue((()=>d(this,null,(function*(){return this.directlySetCurrentUser(e)}))))}))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t);let i=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(oc(o,this,"internal-error"),o.then((()=>{i||s(this.currentUser)})),"function"==typeof t){const s=e.addObserver(t,n,r);return()=>{i=!0,s()}}{const n=e.addObserver(t);return()=>{i=!0,n()}}}directlySetCurrentUser(e){return d(this,null,(function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()}))}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oc(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ru(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return d(this,null,(function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=yield null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader();n&&(t["X-Firebase-Client"]=n);const r=yield this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}))}_getAppCheckToken(){return d(this,null,(function*(){var e;if(xl(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken();return(null==t?void 0:t.error)&&function(e,...t){Zl.logLevel<=ka.WARN&&Zl.warn(`Auth (${Pl}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}))}}function au(e){return ba(e)}class lu{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new va(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return oc(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */let cu={loadJS(){return d(this,null,(function*(){throw new Error("Unable to load external scripts")}))},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uu(e){return cu.loadJS(e)}class hu{constructor(){this.enterprise=new du}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class du{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fu="NO_RECAPTCHA";class pu{constructor(e){this.type="recaptcha-enterprise",this.auth=au(e)}verify(e="verify",t=!1){return d(this,null,(function*(){function n(e){return d(this,null,(function*(){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(((t,n)=>d(this,null,(function*(){(function(e,t){return d(this,null,(function*(){return vc(e,"GET","/v2/recaptchaConfig",yc(e,t))}))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Sc(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))))}))}function r(t,n,r){const s=window.grecaptcha;kc(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(fu)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}if(this.auth.settings.appVerificationDisabledForTesting){return(new hu).execute("siteKey",{action:"verify"})}return new Promise(((e,s)=>{n(this.auth).then((n=>{if(!t&&kc(window.grecaptcha))r(n,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));let t=cu.recaptchaEnterpriseScript;0!==t.length&&(t+=n),uu(t).then((()=>{r(n,e,s)})).catch((e=>{s(e)}))}})).catch((e=>{s(e)}))}))}))}}function mu(e,t,n,r=!1,s=!1){return d(this,null,(function*(){const i=new pu(e);let o;if(s)o=fu;else try{o=yield i.verify(n)}catch(l){o=yield i.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}))}function gu(e,t,n,r,s){return d(this,null,(function*(){var s;if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=yield mu(e,t,n,"getOobCode"===n);return r(e,s)}return r(e,t).catch((s=>d(this,null,(function*(){if("auth/missing-recaptcha-token"===s.code){const s=yield mu(e,t,n,"getOobCode"===n);return r(e,s)}return Promise.reject(s)}))))}))}
/**
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
 */function yu(e,t,n){const r=au(e);oc(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const s=vu(t),{host:i,port:o}=function(e){const t=vu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const e=s[1];return{host:e,port:_u(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:_u(t)}}}(t),a={url:`${s}//${i}${null===o?"":`:${o}`}/`},l=Object.freeze({host:i,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return oc(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void oc(fa(a,r.config.emulator)&&fa(l,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=a,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info;"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function vu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _u(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class bu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ac("not implemented")}_getIdTokenResponse(e){return ac("not implemented")}_linkToIdToken(e,t){return ac("not implemented")}_getReauthenticationResolver(e){return ac("not implemented")}}function wu(e,t){return d(this,null,(function*(){return vc(e,"POST","/v1/accounts:signUp",t)}))}
/**
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
 */function Eu(e,t){return d(this,null,(function*(){return bc(e,"POST","/v1/accounts:signInWithPassword",yc(e,t))}))}
/**
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
 */
/**
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
 */
class Tu extends bu{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Tu(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Tu(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return d(this,null,(function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,t,"signInWithPassword",Eu);case"emailLink":return function(e,t){return d(this,null,(function*(){return bc(e,"POST","/v1/accounts:signInWithEmailLink",yc(e,t))}))}(e,{email:this._email,oobCode:this._password});default:tc(e,"internal-error")}}))}_linkToIdToken(e,t){return d(this,null,(function*(){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,n,"signUpPassword",wu);case"emailLink":return function(e,t){return d(this,null,(function*(){return bc(e,"POST","/v1/accounts:signInWithEmailLink",yc(e,t))}))}(e,{idToken:t,email:this._email,oobCode:this._password});default:tc(e,"internal-error")}}))}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */function Iu(e,t){return d(this,null,(function*(){return bc(e,"POST","/v1/accounts:signInWithIdp",yc(e,t))}))}
/**
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
 */class ku extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ku(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tc("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=Ql(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new ku(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return Iu(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Iu(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Iu(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ma(t)}return e}}
/**
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
 */class Su{constructor(e){var t,n,r,s,i,o;const a=ga(ya(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);oc(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=ga(ya(e)).link,n=t?ga(ya(t)).deep_link_id:null,r=ga(ya(e)).deep_link_id;return(r?ga(ya(r)).link:null)||r||n||t||e}(e);try{return new Su(t)}catch(n){return null}}}
/**
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
 */class Cu{constructor(){this.providerId=Cu.PROVIDER_ID}static credential(e,t){return Tu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Su.parseLink(t);return oc(n,"argument-error"),Tu._fromEmailAndCode(e,n.code,n.tenantId)}}Cu.PROVIDER_ID="password",Cu.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Cu.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ru extends Au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */class Ou extends Ru{constructor(){super("facebook.com")}static credential(e){return ku._fromParams({providerId:Ou.PROVIDER_ID,signInMethod:Ou.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ou.credentialFromTaggedObject(e)}static credentialFromError(e){return Ou.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ou.credential(e.oauthAccessToken)}catch(t){return null}}}Ou.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ou.PROVIDER_ID="facebook.com";
/**
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
 */
class Nu extends Ru{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ku._fromParams({providerId:Nu.PROVIDER_ID,signInMethod:Nu.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Nu.credentialFromTaggedObject(e)}static credentialFromError(e){return Nu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Nu.credential(t,n)}catch(r){return null}}}Nu.GOOGLE_SIGN_IN_METHOD="google.com",Nu.PROVIDER_ID="google.com";
/**
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
 */
class xu extends Ru{constructor(){super("github.com")}static credential(e){return ku._fromParams({providerId:xu.PROVIDER_ID,signInMethod:xu.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xu.credentialFromTaggedObject(e)}static credentialFromError(e){return xu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xu.credential(e.oauthAccessToken)}catch(t){return null}}}xu.GITHUB_SIGN_IN_METHOD="github.com",xu.PROVIDER_ID="github.com";
/**
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
 */
class Lu extends Ru{constructor(){super("twitter.com")}static credential(e,t){return ku._fromParams({providerId:Lu.PROVIDER_ID,signInMethod:Lu.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Lu.credentialFromTaggedObject(e)}static credentialFromError(e){return Lu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Lu.credential(t,n)}catch(r){return null}}}
/**
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
 */
function Du(e,t){return d(this,null,(function*(){return bc(e,"POST","/v1/accounts:signUp",yc(e,t))}))}
/**
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
 */Lu.TWITTER_SIGN_IN_METHOD="twitter.com",Lu.PROVIDER_ID="twitter.com";class Pu{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,n,r=!1){return d(this,null,(function*(){const s=yield $c._fromIdTokenResponse(e,n,r),i=Mu(n);return new Pu({user:s,providerId:i,_tokenResponse:n,operationType:t})}))}static _forOperation(e,t,n){return d(this,null,(function*(){yield e._updateTokensIfNecessary(n,!0);const r=Mu(n);return new Pu({user:e,providerId:r,_tokenResponse:n,operationType:t})}))}}function Mu(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */class Fu extends ua{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Fu(e,t,n,r)}}function Uu(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Fu._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
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
 */
function $u(e,t,n=!1){return d(this,null,(function*(){if(xl(e.app))return Promise.reject(sc(e));const r="signIn",s=yield Uu(e,r,t),i=yield Pu._fromIdTokenResponse(e,r,s);return n||(yield e._updateCurrentUser(i.user)),i}))}
/**
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
 */
function Vu(e){return d(this,null,(function*(){const t=au(e);t._getPasswordPolicyInternal()&&(yield t._updatePasswordPolicy())}))}function ju(e,t,n){return d(this,null,(function*(){if(xl(e.app))return Promise.reject(sc(e));const r=au(e),s=gu(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Du),i=yield s.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Vu(e),t})),o=yield Pu._fromIdTokenResponse(r,"signIn",i);return yield r._updateCurrentUser(o.user),o}))}function Bu(e,t,n){return xl(e.app)?Promise.reject(sc(e)):function(e,t){return d(this,null,(function*(){return $u(au(e),t)}))}(ba(e),Cu.credential(t,n)).catch((t=>d(this,null,(function*(){throw"auth/password-does-not-meet-requirements"===t.code&&Vu(e),t}))))}function qu(e,t,n,r){return ba(e).onAuthStateChanged(t,n,r)}function zu(e){return ba(e).signOut()}const Wu="__sak";
/**
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
 */class Hu{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wu,"1"),this.storage.removeItem(Wu),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class Ku extends Hu{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);tu()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}_set(e,t){return d(this,null,(function*(){yield h(Ku.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)}))}_get(e){return d(this,null,(function*(){const t=yield h(Ku.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t}))}_remove(e){return d(this,null,(function*(){yield h(Ku.prototype,this,"_remove").call(this,e),delete this.localCache[e]}))}}Ku.type="LOCAL";const Gu=Ku;
/**
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
 */class Qu extends Hu{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qu.type="SESSION";const Yu=Qu;
/**
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
 */
/**
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
 */
class Ju{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ju(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}handleEvent(e){return d(this,null,(function*(){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((e=>d(this,null,(function*(){return e(t.origin,s)})))),a=yield function(e){return Promise.all(e.map((e=>d(this,null,(function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}))}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function Xu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Ju.receivers=[];class Zu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,n=50){return d(this,null,(function*(){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const l=Xu("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}))}}
/**
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
 */function eh(){return window}
/**
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
 */
function th(){return void 0!==eh().WorkerGlobalScope&&"function"==typeof eh().importScripts}
/**
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
 */
const nh="firebaseLocalStorageDb",rh="firebaseLocalStorage",sh="fbase_key";class ih{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function oh(e,t){return e.transaction([rh],t?"readwrite":"readonly").objectStore(rh)}function ah(){const e=indexedDB.open(nh,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(rh,{keyPath:sh})}catch(qk){n(qk)}})),e.addEventListener("success",(()=>d(this,null,(function*(){const n=e.result;n.objectStoreNames.contains(rh)?t(n):(n.close(),yield function(){const e=indexedDB.deleteDatabase(nh);return new ih(e).toPromise()}(),t(yield ah()))}))))}))}function lh(e,t,n){return d(this,null,(function*(){const r=oh(e,!0).put({[sh]:t,value:n});return new ih(r).toPromise()}))}function ch(e,t){const n=oh(e,!0).delete(t);return new ih(n).toPromise()}class uh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}_openDb(){return d(this,null,(function*(){return this.db||(this.db=yield ah()),this.db}))}_withRetries(e){return d(this,null,(function*(){let t=0;for(;;)try{const t=yield this._openDb();return yield e(t)}catch(qk){if(t++>3)throw qk;this.db&&(this.db.close(),this.db=void 0)}}))}initializeServiceWorkerMessaging(){return d(this,null,(function*(){return th()?this.initializeReceiver():this.initializeSender()}))}initializeReceiver(){return d(this,null,(function*(){this.receiver=Ju._getInstance(th()?self:null),this.receiver._subscribe("keyChanged",((e,t)=>d(this,null,(function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})))),this.receiver._subscribe("ping",((e,t)=>d(this,null,(function*(){return["keyChanged"]}))))}))}initializeSender(){return d(this,null,(function*(){var e,t;if(this.activeServiceWorker=yield function(){return d(this,null,(function*(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(e){return null}}))}(),!this.activeServiceWorker)return;this.sender=new Zu(this.activeServiceWorker);const n=yield this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}))}notifyServiceWorker(e){return d(this,null,(function*(){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}))}_isAvailable(){return d(this,null,(function*(){try{if(!indexedDB)return!1;const e=yield ah();return yield lh(e,Wu,"1"),yield ch(e,Wu),!0}catch(e){}return!1}))}_withPendingWrite(e){return d(this,null,(function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}}))}_set(e,t){return d(this,null,(function*(){return this._withPendingWrite((()=>d(this,null,(function*(){return yield this._withRetries((n=>lh(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e)}))))}))}_get(e){return d(this,null,(function*(){const t=yield this._withRetries((t=>function(e,t){return d(this,null,(function*(){const n=oh(e,!1).get(t),r=yield new ih(n).toPromise();return void 0===r?null:r.value}))}(t,e)));return this.localCache[e]=t,t}))}_remove(e){return d(this,null,(function*(){return this._withPendingWrite((()=>d(this,null,(function*(){return yield this._withRetries((t=>ch(t,e))),delete this.localCache[e],this.notifyServiceWorker(e)}))))}))}_poll(){return d(this,null,(function*(){const e=yield this._withRetries((e=>{const t=oh(e,!1).getAll();return new ih(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}))}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>d(this,null,(function*(){return this._poll()}))),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}uh.type="LOCAL";const hh=uh;new dc(3e4,6e4);
/**
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
 */
class dh extends bu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Iu(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Iu(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Iu(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fh(e){return $u(e.auth,new dh(e),e.bypassAuthState)}function ph(e){const{auth:t,user:n}=e;return oc(n,t,"internal-error"),
/**
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
 */
function(e,t,n=!1){return d(this,null,(function*(){const{auth:r}=e;if(xl(r.app))return Promise.reject(sc(r));const s="reauthenticate";try{const i=yield xc(e,Uu(r,s,t,e),n);oc(i.idToken,r,"internal-error");const o=Oc(i.idToken);oc(o,r,"internal-error");const{sub:a}=o;return oc(e.uid===a,r,"user-mismatch"),Pu._forOperation(e,s,i)}catch(qk){throw"auth/user-not-found"===(null==qk?void 0:qk.code)&&tc(r,"user-mismatch"),qk}}))}(n,new dh(e),e.bypassAuthState)}function mh(e){return d(this,null,(function*(){const{auth:t,user:n}=e;return oc(n,t,"internal-error"),function(e,t,n=!1){return d(this,null,(function*(){const r=yield xc(e,t._linkToIdToken(e.auth,yield e.getIdToken()),n);return Pu._forOperation(e,"link",r)}))}(n,new dh(e),e.bypassAuthState)}))}
/**
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
 */class gh{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(((e,t)=>d(this,null,(function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(qk){this.reject(qk)}}))))}onAuthEvent(e){return d(this,null,(function*(){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(o)(a))}catch(qk){this.reject(qk)}}))}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fh;case"linkViaPopup":case"linkViaRedirect":return mh;case"reauthViaPopup":case"reauthViaRedirect":return ph;default:tc(this.auth,"internal-error")}}resolve(e){lc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const yh=new dc(2e3,1e4);class vh extends gh{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,vh.currentPopupAction&&vh.currentPopupAction.cancel(),vh.currentPopupAction=this}executeNotNull(){return d(this,null,(function*(){const e=yield this.execute();return oc(e,this.auth,"internal-error"),e}))}onExecution(){return d(this,null,(function*(){lc(1===this.filter.length,"Popup operations only handle one event");const e=Xu();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(nc(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}))}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(nc(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vh.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(nc(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,yh.get())};e()}}vh.currentPopupAction=null;
/**
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
 */
const _h="pendingRedirect",bh=new Map;class wh extends gh{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}execute(){return d(this,null,(function*(){let e=bh.get(this.auth._key());if(!e){try{const t=(yield function(e,t){return d(this,null,(function*(){const n=function(e){return zc(_h,e.config.apiKey,e.name)}(t),r=function(e){return jc(e._redirectPersistence)}(e);if(!(yield r._isAvailable()))return!1;const s="true"===(yield r._get(n));return yield r._remove(n),s}))}(this.resolver,this.auth))?yield h(wh.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(t)}catch(qk){e=()=>Promise.reject(qk)}bh.set(this.auth._key(),e)}return this.bypassAuthState||bh.set(this.auth._key(),(()=>Promise.resolve(null))),e()}))}onAuthEvent(e){return d(this,null,(function*(){if("signInViaRedirect"===e.type)return h(wh.prototype,this,"onAuthEvent").call(this,e);if("unknown"!==e.type){if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,h(wh.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}}else this.resolve(null)}))}onExecution(){return d(this,null,(function*(){}))}cleanUp(){}}function Eh(e,t){bh.set(e._key(),t)}function Th(e,t,n=!1){return d(this,null,(function*(){if(xl(e.app))return Promise.reject(sc(e));const r=au(e),s=
/**
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
 */
function(e,t){return t?jc(t):(oc(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),i=new wh(r,s,n),o=yield i.execute();return o&&!n&&(delete o.user._redirectEventId,yield r._persistUserIfCurrent(o.user),yield r._setRedirectUser(null,t)),o}))}
/**
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
 */class Ih{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sh(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Sh(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(nc(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(kh(e))}saveEventToCache(e){this.cachedEventUids.add(kh(e)),this.lastProcessedEventTime=Date.now()}}function kh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Sh({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Ch=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ah=/^https?/;function Rh(e){return d(this,null,(function*(){if(e.config.emulator)return;const{authorizedDomains:t}=yield function(e){return d(this,arguments,(function*(e,t={}){return vc(e,"GET","/v1/projects",t)}))}(e);for(const e of t)try{if(Oh(e))return}catch(n){}tc(e,"unauthorized-domain")}))}function Oh(e){const t=cc(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!Ah.test(n))return!1;if(Ch.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
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
 */const Nh=new dc(3e4,6e4);function xh(){const e=eh().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Lh(e){return new Promise(((t,n)=>{var r,s,i;function o(){xh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xh(),n(nc(e,"network-request-failed"))},timeout:Nh.get()})}if(null===(s=null===(r=eh().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=eh().gapi)||void 0===i?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return eh()[t]=()=>{gapi.load?o():n(nc(e,"network-request-failed"))},uu(`${cu.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Dh=null,e}))}let Dh=null;
/**
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
 */
const Ph=new dc(5e3,15e3),Mh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uh(e){const t=e.config;oc(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fc(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Pl},s=Fh.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ma(r).slice(1)}`}function $h(e){return d(this,null,(function*(){const t=yield function(e){return Dh=Dh||Lh(e),Dh}(e),n=eh().gapi;return oc(n,e,"internal-error"),t.open({where:document.body,url:Uh(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mh,dontclear:!0},(t=>new Promise(((n,r)=>d(this,null,(function*(){yield t.restyle({setHideOnLeave:!1});const s=nc(e,"network-request-failed"),i=eh().setTimeout((()=>{r(s)}),Ph.get());function o(){eh().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))))}))}
/**
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
 */const Vh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(qk){}}}function Bh(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Vh),{width:r.toString(),height:s.toString(),top:i,left:o}),c=la().toLowerCase();n&&(a=Qc(c)?"_blank":n),Kc(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=la()){var t;return eu(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */(t||"",a),new jh(null);const h=window.open(t||"",a,u);oc(h,e,"popup-blocked");try{h.focus()}catch(qk){}return new jh(h)}const qh="__/auth/handler",zh="emulator/auth/handler",Wh=encodeURIComponent("fac");function Hh(e,t,n,r,s,i){return d(this,null,(function*(){oc(e.config.authDomain,e,"auth-domain-config-required"),oc(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Pl,eventId:s};if(t instanceof Au){t.setDefaultLanguage(e.languageCode),i.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(i.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))i[e]=t}if(t instanceof Ru){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(i.scopes=e.join(","))}e.tenantId&&(i.tid=e.tenantId);const o=i;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const a=yield e._getAppCheckToken(),l=a?`#${Wh}=${encodeURIComponent(a)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${qh}`;return fc(e,zh)}
/**
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
 */(e)}?${ma(o).slice(1)}${l}`}))}const Kh="webStorageSupport";const Gh=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yu,this._completeRedirectFn=Th,this._overrideRedirectResult=Eh}_openPopup(e,t,n,r){return d(this,null,(function*(){var s;lc(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");const i=yield Hh(e,t,n,cc(),r);return Bh(e,i,Xu())}))}_openRedirect(e,t,n,r){return d(this,null,(function*(){yield this._originValidation(e);return function(e){eh().location.href=e}(yield Hh(e,t,n,cc(),r)),new Promise((()=>{}))}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(lc(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}initAndGetManager(e){return d(this,null,(function*(){const t=yield $h(e),n=new Ih(e);return t.register("authEvent",(t=>{oc(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}))}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kh,{type:Kh},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Kh];void 0!==s&&t(!!s),tc(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Rh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return nu()||Gc()||eu()}};var Qh="@firebase/auth",Yh="1.9.1";
/**
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
 */
class Jh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}getToken(e){return d(this,null,(function*(){if(this.assertAuthConfigured(),yield this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:yield this.auth.currentUser.getIdToken(e)}}))}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){oc(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const Xh=ia("authIdTokenMaxAge")||300;let Zh=null;function ed(e=Fl()){const t=Nl(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Nl(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(fa(n.getOptions(),null!=t?t:{}))return e;tc(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Gh,persistence:[hh,Gu,Yu]}),r=ia("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(s=e.toString(),e=>d(void 0,null,(function*(){const t=e&&(yield e.getIdTokenResult()),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Xh)return;const r=null==t?void 0:t.token;Zh!==r&&(Zh=r,yield fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))})));!function(e,t,n){ba(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){ba(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var s;const i=na("auth");return i&&yu(n,`http://${i}`),n}var td;cu={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=nc("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},td="Browser",Ol(new wa("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;oc(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:td,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ru(td)},l=new ou(n,r,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(jc);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ol(new wa("auth-internal",(e=>{const t=au(e.getProvider("auth").getImmediate());return new Jh(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ul(Qh,Yh,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(td)),Ul(Qh,Yh,"esm2017");var nd,rd,sd="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=n+(o<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(t=n+((o=t+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(t^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,s=this.B,i=this.h,o=0;o<t;){if(0==i)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(s[i++]=e.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<t;)if(s[i++]=e[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var s={};function i(e){return-128<=e&&128>e?function(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=4294967296;return new r(t,0)}var a=i(0),l=i(1),c=i(16777216);function u(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(u(t))throw Error("division by zero");if(u(e))return new m(a,a);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var s=v(n,1),i=v(r,1);for(r=v(r,2),n=v(n,2);!u(r);){var c=i.add(r);0>=c.l(e)&&(s=s.add(n),i=c),r=v(r,1),n=v(n,1)}return t=f(e,s.j(t)),new m(s,t)}for(s=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(i=o(n)).j(t);h(c)||0<c.l(e);)c=(i=o(n-=r)).j(t);u(i)&&(i=l),s=s.add(i),e=f(e,c)}return new m(s,e)}function y(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.i(s)<<1|e.i(s-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],o=0;o<s;o++)i[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(i,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(u(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var s=g(n,t).g,i=((0<(n=f(n,s.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(u(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:u(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var o=s+(65535&this.i(i))+(65535&e.i(i)),a=(o>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);s=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(u(this)||u(e))return a;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(c)&&0>e.l(c))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var l=this.i(s)>>>16,f=65535&this.i(s),m=e.i(i)>>>16,g=65535&e.i(i);n[2*s+2*i]+=f*g,p(n,2*s+2*i),n[2*s+2*i+1]+=l*g,p(n,2*s+2*i+1),n[2*s+2*i+1]+=f*m,p(n,2*s+2*i+1),n[2*s+2*i+2]+=l*m,p(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)&e.i(s);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)|e.i(s);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)^e.i(s);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,rd=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),s=a,i=0;i<t.length;i+=8){var l=Math.min(8,t.length-i),c=parseInt(t.substring(i,i+l),n);8>l?(l=o(Math.pow(n,l)),s=s.j(l).add(o(c))):s=(s=s.j(r)).add(o(c))}return s},nd=r}).apply(void 0!==sd?sd:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var id,od,ad,ld,cd,ud,hd,dd,fd="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof fd&&fd];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var s=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in s))break e;s=s[o]}(r=r(i=s[e=e[e.length-1]]))!=i&&null!=r&&t(s,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,s={next:function(){if(!r&&n<e.length){var s=n++;return{value:t(s,e[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},s=this||self;function i(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function u(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(i(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=s.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function _(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function T(e){s.setTimeout((()=>{throw e}),0)}function I(){var e=R;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var k=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new S),(e=>e.reset()));class S{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let C,A=!1,R=new class{constructor(){this.h=this.g=null}add(e,t){const n=k.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},O=()=>{const e=s.Promise.resolve(void 0);C=()=>{e.then(N)}};var N=()=>{for(var e;e=I();){try{e.h.call(e.g)}catch(n){T(n)}var t=k;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}A=!1};function x(){this.s=this.s,this.C=this.C}function L(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}x.prototype.s=!1,x.prototype.ma=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},L.prototype.h=function(){this.defaultPrevented=!0};var D=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function P(e,t){if(L.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&P.aa.h.call(this)}}h(P,L);var M={2:"touch",3:"pen",4:"mouse"};P.prototype.h=function(){P.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),U=0;function $(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++U,this.da=this.fa=!1}function V(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function j(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(V(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function q(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}j.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=q(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new $(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var z="closure_lm_"+(1e6*Math.random()|0),W={};function H(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)H(e,t[i],n,r,s);return null}return n=Z(n),e&&e[F]?e.K(t,n,!!o(r)&&!!r.capture,s):function(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var a=o(s)?!!s.capture:!!s,l=J(e);if(l||(e[z]=l=new j(e)),n=l.add(t,n,r,a,i),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Y;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)D||(s=a),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,s)}function K(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)K(e,t[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[F]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=q(i=e.g[t],n,r,s))&&(V(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=J(e))&&(t=e.g[t.toString()],e=-1,t&&(e=q(t,n,r,s)),(n=-1<e?t[e]:null)&&G(n))}function G(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[F])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=J(t))?(B(n,e),0==n.h&&(n.src=null,t[z]=null)):V(e)}}}function Q(e){return e in W?W[e]:W[e]="on"+e}function Y(e,t){if(e.da)e=!0;else{t=new P(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&G(e),e=n.call(r,t)}return e}function J(e){return(e=e[z])instanceof j?e:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[X]||(e[X]=function(t){return e.handleEvent(t)}),e[X])}function ee(){x.call(this),this.i=new j(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new L(t,e);else if(t instanceof L)t.target=t.target||e;else{var s=t;w(t=new L(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ne(o,r,!0,t)&&s}if(s=ne(o=t.g=e,r,!0,t)&&s,s=ne(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=ne(o=t.g=n[i],r,!1,t)&&s}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&B(e.i,o),s=!1!==a.call(l,r)&&s}}return s&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:s.setTimeout(e,t||0)}function se(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,se(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,x),ee.prototype[F]=!0,ee.prototype.removeEventListener=function(e,t,n,r){K(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)V(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class ie extends x{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:se(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){x.call(this),this.h=e,this.g={}}h(oe,x);var ae=[];function le(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&G(e)}),e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),le(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ce=s.JSON.stringify,ue=s.JSON.parse,he=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){L.call(this,"d")}function ye(){L.call(this,"c")}h(ge,L),h(ye,L);var ve={},_e=null;function be(){return _e=_e||new ee}function we(e){L.call(this,ve.La,e)}function Ee(e){const t=be();te(t,new we(t))}function Te(e,t){L.call(this,ve.STAT_EVENT,e),this.stat=t}function Ie(e){const t=be();te(t,new Te(t,e))}function ke(e,t){L.call(this,ve.Ma,e),this.size=t}function Se(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){e()}),t)}function Ce(){this.g=!0}function Ae(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ce(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(we,L),ve.STAT_EVENT="statevent",h(Te,L),ve.Ma="timingevent",h(ke,L),Ce.prototype.xa=function(){this.g=!1},Ce.prototype.info=function(){};var Re,Oe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ne={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function xe(){}function Le(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new De}function De(){this.i=null,this.g="",this.h=!1}h(xe,de),xe.prototype.g=function(){return new XMLHttpRequest},xe.prototype.i=function(){return{}},Re=new xe;var Pe={},Me={};function Fe(e,t,n){e.L=1,e.v=ct(st(t)),e.m=n,e.P=!0,Ue(e,null)}function Ue(e,t){e.F=Date.now(),je(e),e.A=st(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Et(n.i,"t",r),e.C=0,n=e.j.J,e.h=new De,e.g=un(e.j,n?t:null,!e.m),0<e.O&&(e.M=new ie(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var s="readystatechange";Array.isArray(s)||(s&&(ae[0]=s.toString()),s=ae);for(var i=0;i<s.length;i++){var o=H(n,s[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?_(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function $e(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function Ve(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Pe:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function je(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Se(c(e.ba,e),t)}function qe(e){e.B&&(s.clearTimeout(e.B),e.B=null)}function ze(e){0==e.j.G||e.J||sn(e.j,e)}function We(e){qe(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function He(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Je(n.h,e)))if(!e.K&&Je(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;rn(n),Kt(n)}en(n),Ie(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Se(c(n.Za,n),6e3));if(1>=Ye(n.h)&&n.ca){try{n.ca()}catch(u){}n.ca=void 0}}else an(n,11)}else if((e.K||n.g==e)&&rn(n),!p(t))for(s=n.Da.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const t=c[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const s=c[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Xe(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,lt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),o.K){Ze(r.h,o);var a=o,l=r.L;l&&(a.I=l),a.B&&(qe(a),je(a)),r.g=o}else Zt(r);0<n.i.length&&Qt(n)}else"stop"!=c[0]&&"close"!=c[0]||an(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?an(n,7):Ht(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Ee()}catch(u){}}Le.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Bt(e)?t.j():this.Y(e)},Le.prototype.Y=function(e){try{if(e==this.g)e:{const d=Bt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||qt(this.g)))){this.J||4!=d||7==t||Ee(),qe(this);var n=this.g.Z();this.X=n;t:if($e(this)){var r=qt(this.g);e="";var i=r.length,o=4==Bt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){We(this),ze(this);var a="";break t}this.h.i=new s.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var u=l;break t}}u=null}if(!(n=u)){this.o=!1,this.s=3,Ie(12),We(this),ze(this);break e}Ae(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,He(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=Ve(this,a),e==Me){4==d&&(this.s=4,Ie(14),n=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}if(e==Pe){this.s=4,Ie(15),Ae(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ae(this.i,this.l,e,null),He(this,e)}if($e(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Ie(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tn(h),h.M=!0,Ie(11))}}else Ae(this.i,this.l,a,"[Invalid Chunked Response]"),We(this),ze(this)}else Ae(this.i,this.l,a,null),He(this,a);4==d&&We(this),this.o&&!this.J&&(4==d?sn(this.j,this):(this.o=!1,je(this)))}else(function(e){const t={};e=(e.g&&2<=Bt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Ie(12)):(this.s=0,Ie(13)),We(this),ze(this)}}}catch(d){}},Le.prototype.cancel=function(){this.J=!0,We(this)},Le.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ee(),Ie(17)),We(this),this.s=2,ze(this)):Be(this,this.S-e)};var Ke=class{constructor(e,t){this.g=e,this.map=t}};function Ge(e){this.l=e||10,s.PerformanceNavigationTiming?e=0<(e=s.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ye(e){return e.h?1:e.g?e.g.size:0}function Je(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Xe(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(i(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(i(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(i(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),s=r.length,o=0;o<s;o++)t.call(void 0,r[o],n&&n[o],e)}Ge.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,it(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.s),this.l=e.l;var t=e.i,n=new vt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,it(this,t[1]||"",!0),this.o=ut(t[2]||""),this.g=ut(t[3]||"",!0),ot(this,t[4]),this.l=ut(t[5]||"",!0),at(this,t[6]||"",!0),this.m=ut(t[7]||"")):(this.h=!1,this.i=new vt(null,this.h))}function st(e){return new rt(e)}function it(e,t,n){e.j=n?ut(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof vt?(e.i=t,function(e,t){t&&!e.j&&(_t(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(bt(this,t),Et(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ht(t,gt)),e.i=new vt(t,e.h))}function lt(e,t,n){e.i.set(t,n)}function ct(e){return lt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ut(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ht(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,dt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ht(t,ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ht(t,ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ht(n,"/"==n.charAt(0)?mt:pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",ht(n,yt)),e.join("")};var ft=/[#\/\?@]/g,pt=/[#\?:]/g,mt=/[#\?]/g,gt=/[#\?@]/g,yt=/#/g;function vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function _t(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function bt(e,t){_t(e),t=Tt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function wt(e,t){return _t(e),t=Tt(e,t),e.g.has(t)}function Et(e,t,n){bt(e,t),0<n.length&&(e.i=null,e.g.set(Tt(e,t),d(n)),e.h+=n.length)}function Tt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function It(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function kt(){this.g=new he}function St(e,t,n){const r=n||"";try{tt(e,(function(e,n){let s=e;o(e)&&(s=ce(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(qk){throw t.push(r+"type="+encodeURIComponent("_badmap")),qk}}function Ct(e){this.l=e.Ub||null,this.j=e.eb||!1}function At(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Rt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Ot(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Nt(e)}function Nt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function xt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Lt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):lt(e,t,n))}function Dt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=vt.prototype).add=function(e,t){_t(this),this.i=null,e=Tt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){_t(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){_t(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let e=0;e<s.length;e++)n.push(t[r])}return n},e.V=function(e){_t(this);let t=[];if("string"==typeof e)wt(this,e)&&(t=t.concat(this.g.get(Tt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return _t(this),this.i=null,wt(this,e=Tt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")},h(Ct,de),Ct.prototype.g=function(){return new At(this.l,this.j)},Ct.prototype.i=function(e){return function(){return e}}({}),h(At,ee),(e=At.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Nt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||s).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ot(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Nt(this)),this.g&&(this.readyState=3,Nt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Ot(this):Nt(this),3==this.readyState&&Rt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Ot(this))},e.Qa=function(e){this.g&&(this.response=e,Ot(this))},e.ga=function(){this.g&&Ot(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(At.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Dt,ee);var Pt=/^https?$/i,Mt=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ut(e),Vt(e)}function Ut(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function $t(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Bt(e)||2!=e.Z()))if(e.u&&4==Bt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==Bt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===r){var o=String(e.D).match(nt)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),i=!Pt.test(o?o.toLowerCase():"")}n=i}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<Bt(e)?e.g.statusText:""}catch(l){a=""}e.l=a+" ["+e.Z()+"]",Ut(e)}}finally{Vt(e)}}}function Vt(e,t){if(e.g){jt(e);const n=e.g,r=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{n.onreadystatechange=r}catch(qk){}}}function jt(e){e.I&&(s.clearTimeout(e.I),e.I=null)}function Bt(e){return e.g?e.g.readyState:0}function qt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wt(e){this.Aa=0,this.i=[],this.j=new Ce,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zt("baseRetryDelayMs",5e3,e),this.cb=zt("retryDelaySeedMs",1e4,e),this.Wa=zt("forwardChannelMaxRetries",2,e),this.wa=zt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new Ge(e&&e.concurrentRequestLimit),this.Da=new kt,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Ht(e){if(Gt(e),3==e.G){var t=e.U++,n=st(e.I);if(lt(n,"SID",e.K),lt(n,"RID",t),lt(n,"TYPE","terminate"),Jt(e,n),(t=new Le(e,e.j,t)).L=2,t.v=ct(st(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=t.v,n=!0),n||(t.g=un(t.j,null),t.g.ea(t.v)),t.F=Date.now(),je(t)}ln(e)}function Kt(e){e.g&&(tn(e),e.g.cancel(),e.g=null)}function Gt(e){Kt(e),e.u&&(s.clearTimeout(e.u),e.u=null),rn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&s.clearTimeout(e.s),e.s=null)}function Qt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;C||O(),A||(C(),A=!0),R.add(t,e),e.B=0}}function Yt(e,t){var n;n=t?t.l:e.U++;const r=st(e.I);lt(r,"SID",e.K),lt(r,"RID",n),lt(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Lt(r,e.m,e.o),n=new Le(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Xt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Xe(e.h,n),Fe(n,r,t)}function Jt(e,t){e.H&&v(e.H,(function(e,n){lt(t,n,e)})),e.l&&tt({},(function(e,n){lt(t,n,e)}))}function Xt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const l=s[a].map;if(n-=t,0>n)t=Math.max(0,s[a].g-100),o=!1;else try{St(l,e,"req"+n+"_")}catch(i){r&&r(l)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Zt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;C||O(),A||(C(),A=!0),R.add(t,e),e.v=0}}function en(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Se(c(e.Fa,e),on(e,e.v)),e.v++,!0)}function tn(e){null!=e.A&&(s.clearTimeout(e.A),e.A=null)}function nn(e){e.g=new Le(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=st(e.qa);lt(t,"RID","rpc"),lt(t,"SID",e.K),lt(t,"AID",e.T),lt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&lt(t,"TO",e.ja),lt(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Lt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ct(st(t)),n.m=null,n.P=!0,Ue(n,e)}function rn(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){rn(e),tn(e),e.g=null;var r=2}else{if(!Je(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var s=e.B;te(r=be(),new ke(r,n)),Qt(e)}else Zt(e);else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&function(e,t){return!(Ye(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Se(c(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&en(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||it(r,"https"),ct(r),t?function(e,t){const n=new Ce;if(s.Image){const r=new Image;r.onload=u(It,n,"TestLoadImage: loaded",!0,t,r),r.onerror=u(It,n,"TestLoadImage: error",!1,t,r),r.onabort=u(It,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=u(It,n,"TestLoadImage: timeout",!1,t,r),s.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ce;const n=new AbortController,r=setTimeout((()=>{n.abort(),It(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?It(0,0,!0,t):It(0,0,!1,t)})).catch((()=>{clearTimeout(r),It(0,0,!1,t)}))}(r.toString(),n)}else Ie(2);e.G=0,e.l&&e.l.sa(t),ln(e),Gt(e)}function ln(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?st(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.s);else{var i=s.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new rt(null);r&&it(o,r),t&&(o.g=t),i&&ot(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&lt(r,n,t),lt(r,"VER",e.la),Jt(e,r),r}function un(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Dt(new Ct({eb:n})):new Dt(e.pa)).Ha(e.J),t}function hn(){}function dn(){}function fn(e,t){ee.call(this),this.g=new Wt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new gn(this)}function pn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mn(){ye.call(this),this.status=1}function gn(e){this.g=e}(e=Dt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Re.g(),this.v=this.o?fe(this.o):fe(Re),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Ft(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=s.FormData&&e instanceof s.FormData,!(0<=Array.prototype.indexOf.call(Mt,t,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Ft(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),Vt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vt(this,!0)),Dt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?$t(this):this.bb())},e.bb=function(){$t(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ue(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Wt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Ie(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Qt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new Le(this,this.j,e);let i=this.o;if(this.S&&(i?(i=_(i),w(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Xt(this,s,t),lt(n=st(this.I),"RID",e),lt(n,"CVER",22),this.D&&lt(n,"X-HTTP-Session-Id",this.D),Jt(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(xt(i)))+"&"+t:this.m&&Lt(n,this.m,i)),Xe(this.h,s),this.Ua&&lt(n,"TYPE","init"),this.P?(lt(n,"$req",t),lt(n,"SID","null"),s.T=!0,Fe(s,n,null)):Fe(s,n,t),this.G=2}}else 3==this.G&&(e?Yt(this,e):0==this.i.length||Qe(this.h)||Yt(this))},e.Fa=function(){if(this.u=null,nn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Se(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ie(10),Kt(this),nn(this))},e.Za=function(){null!=this.C&&(this.C=null,Kt(this),en(this),Ie(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ie(2)):(this.j.info("Failed to ping google.com"),Ie(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=hn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},dn.prototype.g=function(e,t){return new fn(e,t)},h(fn,ee),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Ht(this.g)},fn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ce(e),e=n);t.i.push(new Ke(t.Ya++,e)),3==t.G&&Qt(t)},fn.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,fn.aa.N.call(this)},h(pn,ge),h(mn,ye),h(gn,hn),gn.prototype.ua=function(){te(this.g,"a")},gn.prototype.ta=function(e){te(this.g,new pn(e))},gn.prototype.sa=function(e){te(this.g,new mn)},gn.prototype.ra=function(){te(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,dd=function(){return new dn},hd=function(){return be()},ud=ve,cd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oe.NO_ERROR=0,Oe.TIMEOUT=8,Oe.HTTP_ERROR=6,ld=Oe,Ne.COMPLETE="complete",ad=Ne,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,od=pe,Dt.prototype.listenOnce=Dt.prototype.L,Dt.prototype.getLastError=Dt.prototype.Ka,Dt.prototype.getLastErrorCode=Dt.prototype.Ba,Dt.prototype.getStatus=Dt.prototype.Z,Dt.prototype.getResponseJson=Dt.prototype.Oa,Dt.prototype.getResponseText=Dt.prototype.oa,Dt.prototype.send=Dt.prototype.ea,Dt.prototype.setWithCredentials=Dt.prototype.Ha,id=Dt}).apply(void 0!==fd?fd:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const pd="@firebase/firestore",md="4.7.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gd.UNAUTHENTICATED=new gd(null),gd.GOOGLE_CREDENTIALS=new gd("google-credentials-uid"),gd.FIRST_PARTY=new gd("first-party-uid"),gd.MOCK_USER=new gd("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let yd="11.5.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new Na("@firebase/firestore");function _d(){return vd.logLevel}function bd(e,...t){if(vd.logLevel<=ka.DEBUG){const n=t.map(Td);vd.debug(`Firestore (${yd}): ${e}`,...n)}}function wd(e,...t){if(vd.logLevel<=ka.ERROR){const n=t.map(Td);vd.error(`Firestore (${yd}): ${e}`,...n)}}function Ed(e,...t){if(vd.logLevel<=ka.WARN){const n=t.map(Td);vd.warn(`Firestore (${yd}): ${e}`,...n)}}function Td(e){if("string"==typeof e)return e;try{
/**
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
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(e="Unexpected state"){const t=`FIRESTORE (${yd}) INTERNAL ASSERTION FAILED: `+e;throw wd(t),new Error(t)}function kd(e,t){e||Id()}function Sd(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ad extends ua{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(gd.UNAUTHENTICATED)))}shutdown(){}}class xd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ld{constructor(e){this.t=e,this.currentUser=gd.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){kd(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Rd;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rd,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((()=>d(this,null,(function*(){yield t.promise,yield r(this.currentUser)}))))},o=e=>{bd("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(bd("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rd)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(bd("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(kd("string"==typeof t.accessToken),new Od(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return kd(null===e||"string"==typeof e),new gd(e)}}class Dd{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=gd.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Pd{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new Dd(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(gd.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Md{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fd{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,xl(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){kd(void 0===this.o);const n=e=>{null!=e.error&&bd("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,bd("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{bd("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):bd("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new Md(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(kd("string"==typeof e.token),this.R=e.token,new Md(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
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
 */function Ud(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */function $d(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Ud(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function jd(e,t){return e<t?-1:e>t?1:0}function Bd(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return jd(r,s);{const i=$d(),o=zd(i.encode(qd(e,n)),i.encode(qd(t,n)));return 0!==o?o:jd(r,s)}}n+=r>65535?2:1}return jd(e.length,t.length)}function qd(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function zd(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return jd(e[n],t[n]);return jd(e.length,t.length)}function Wd(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=-62135596800,Kd=1e6;class Gd{static now(){return Gd.fromMillis(Date.now())}static fromDate(e){return Gd.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Kd);return new Gd(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ad(Cd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ad(Cd.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hd)throw new Ad(Cd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ad(Cd.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kd}_compareTo(e){return this.seconds===e.seconds?jd(this.nanoseconds,e.nanoseconds):jd(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Hd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{static fromTimestamp(e){return new Qd(e)}static min(){return new Qd(new Gd(0,0))}static max(){return new Qd(new Gd(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="__name__";class Jd{constructor(e,t,n){void 0===t?t=0:t>e.length&&Id(),void 0===n?n=e.length-t:n>e.length-t&&Id(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Jd.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jd?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Jd.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return jd(e.length,t.length)}static compareSegments(e,t){const n=Jd.isNumericId(e),r=Jd.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Jd.extractNumericId(e).compare(Jd.extractNumericId(t)):Bd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nd.fromString(e.substring(4,e.length-2))}}class Xd extends Jd{construct(e,t,n){return new Xd(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ad(Cd.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Xd(t)}static emptyPath(){return new Xd([])}}const Zd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ef extends Jd{construct(e,t,n){return new ef(e,t,n)}static isValidIdentifier(e){return Zd.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ef.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Yd}static keyField(){return new ef([Yd])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Ad(Cd.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ad(Cd.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ad(Cd.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Ad(Cd.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ef(t)}static emptyPath(){return new ef([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e){this.path=e}static fromPath(e){return new tf(Xd.fromString(e))}static fromName(e){return new tf(Xd.fromString(e).popFirst(5))}static empty(){return new tf(Xd.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Xd.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Xd.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new tf(new Xd(e.slice()))}}
/**
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
 */function nf(e){return new rf(e.readTime,e.key,-1)}class rf{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new rf(Qd.min(),tf.empty(),-1)}static max(){return new rf(Qd.max(),tf.empty(),-1)}}function sf(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=tf.comparator(e.documentKey,t.documentKey),0!==n?n:jd(e.largestBatchId,t.largestBatchId)
/**
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
 */)}class of{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(e){return d(this,null,(function*(){if(e.code!==Cd.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;bd("LocalStore","Unexpectedly lost primary lease")}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Id(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new lf(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof lf?t:lf.resolve(t)}catch(t){return lf.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):lf.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):lf.reject(t)}static resolve(e){return new lf(((t,n)=>{t(e)}))}static reject(e){return new lf(((t,n)=>{n(e)}))}static waitFor(e){return new lf(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=lf.resolve(!1);for(const n of e)t=t.next((e=>e?lf.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new lf(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next((e=>{i[l]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new lf(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}function cf(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}uf.ae=-1;function hf(e){return null==e}function df(e){return 0===e&&1/e==-1/0}function ff(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function pf(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function gf(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function yf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t){this.comparator=e,this.root=t||bf.EMPTY}insert(e,t){return new vf(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bf.BLACK,null,null))}remove(e){return new vf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bf.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _f(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _f(this.root,e,this.comparator,!1)}getReverseIterator(){return new _f(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _f(this.root,e,this.comparator,!0)}}class _f{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bf{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:bf.RED,this.left=null!=r?r:bf.EMPTY,this.right=null!=s?s:bf.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new bf(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return bf.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return bf.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bf.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bf.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Id();if(this.right.isRed())throw Id();const e=this.left.check();if(e!==this.right.check())throw Id();return e+(this.isRed()?0:1)}}bf.EMPTY=null,bf.RED=!0,bf.BLACK=!1,bf.EMPTY=new class{constructor(){this.size=0}get key(){throw Id()}get value(){throw Id()}get color(){throw Id()}get left(){throw Id()}get right(){throw Id()}copy(e,t,n,r,s){return this}insert(e,t,n){return new bf(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wf{constructor(e){this.comparator=e,this.data=new vf(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ef(this.data.getIterator())}getIteratorFrom(e){return new Ef(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof wf))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new wf(this.comparator);return t.data=e,t}}class Ef{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */class Tf{constructor(e){this.fields=e,e.sort(ef.comparator)}static empty(){return new Tf([])}unionWith(e){let t=new wf(ef.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Tf(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wd(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class If extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */class kf{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new If("Invalid base64 string: "+t):t}}(e);return new kf(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new kf(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return jd(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}kf.EMPTY_BYTE_STRING=new kf("");const Sf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cf(e){if(kd(!!e),"string"==typeof e){let t=0;const n=Sf.exec(e);if(kd(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Af(e.seconds),nanos:Af(e.nanos)}}function Af(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Rf(e){return"string"==typeof e?kf.fromBase64String(e):kf.fromUint8Array(e)}
/**
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
 */const Of="server_timestamp",Nf="__type__",xf="__previous_value__",Lf="__local_write_time__";function Df(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Nf])||void 0===n?void 0:n.stringValue)===Of}function Pf(e){const t=e.mapValue.fields[xf];return Df(t)?Pf(t):t}function Mf(e){const t=Cf(e.mapValue.fields[Lf].timestampValue);return new Gd(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t,n,r,s,i,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}const Uf="(default)";class $f{constructor(e,t){this.projectId=e,this.database=t||Uf}static empty(){return new $f("","")}get isDefaultDatabase(){return this.database===Uf}isEqual(e){return e instanceof $f&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const Vf="__type__",jf="__max__",Bf={},qf="__vector__",zf="value";function Wf(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Df(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===jf}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Vf])||void 0===n?void 0:n.stringValue)===qf}(e)?10:11:Id()}function Hf(e,t){if(e===t)return!0;const n=Wf(e);if(n!==Wf(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Mf(e).isEqual(Mf(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Cf(e.timestampValue),r=Cf(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Rf(e.bytesValue).isEqual(Rf(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Af(e.geoPointValue.latitude)===Af(t.geoPointValue.latitude)&&Af(e.geoPointValue.longitude)===Af(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Af(e.integerValue)===Af(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Af(e.doubleValue),r=Af(t.doubleValue);return n===r?df(n)===df(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Wd(e.arrayValue.values||[],t.arrayValue.values||[],Hf);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(mf(n)!==mf(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Hf(n[s],r[s])))return!1;return!0}(e,t);default:return Id()}var r}function Kf(e,t){return void 0!==(e.values||[]).find((e=>Hf(e,t)))}function Gf(e,t){if(e===t)return 0;const n=Wf(e),r=Wf(t);if(n!==r)return jd(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return jd(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Af(e.integerValue||e.doubleValue),r=Af(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Qf(e.timestampValue,t.timestampValue);case 4:return Qf(Mf(e),Mf(t));case 5:return Bd(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Rf(e),r=Rf(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=jd(n[s],r[s]);if(0!==e)return e}return jd(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=jd(Af(e.latitude),Af(t.latitude));return 0!==n?n:jd(Af(e.longitude),Af(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Yf(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,s,i;const o=e.fields||{},a=t.fields||{},l=null===(n=o[zf])||void 0===n?void 0:n.arrayValue,c=null===(r=a[zf])||void 0===r?void 0:r.arrayValue,u=jd((null===(s=null==l?void 0:l.values)||void 0===s?void 0:s.length)||0,(null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0);return 0!==u?u:Yf(l,c)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Bf&&t===Bf)return 0;if(e===Bf)return 1;if(t===Bf)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Bd(r[o],i[o]);if(0!==e)return e;const t=Gf(n[r[o]],s[i[o]]);if(0!==t)return t}return jd(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Id()}}function Qf(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return jd(e,t);const n=Cf(e),r=Cf(t),s=jd(n.seconds,r.seconds);return 0!==s?s:jd(n.nanos,r.nanos)}function Yf(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Gf(n[s],r[s]);if(e)return e}return jd(n.length,r.length)}function Jf(e){return Xf(e)}function Xf(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Cf(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Rf(e.bytesValue).toBase64():"referenceValue"in e?function(e){return tf.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Xf(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Xf(e.fields[s])}`;return n+"}"}(e.mapValue):Id()}function Zf(e){switch(Wf(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Pf(e);return t?16+Zf(t):16;case 5:return 2*e.stringValue.length;case 6:return Rf(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce(((e,t)=>e+Zf(t)),0);case 10:case 11:return function(e){let t=0;return gf(e.fields,((e,n)=>{t+=e.length+Zf(n)})),t}(e.mapValue);default:throw Id()}}function ep(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function tp(e){return!!e&&"integerValue"in e}function np(e){return!!e&&"arrayValue"in e}function rp(e){return!!e&&"nullValue"in e}function sp(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ip(e){return!!e&&"mapValue"in e}function op(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return gf(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=op(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=op(e.arrayValue.values[n]);return t}return Object.assign({},e)}class ap{constructor(e){this.value=e}static empty(){return new ap({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ip(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=op(t)}setAll(e){let t=ef.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=op(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());ip(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Hf(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];ip(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){gf(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ap(op(this.value))}}function lp(e){const t=[];return gf(e.fields,((e,n)=>{const r=new ef([e]);if(ip(n)){const e=lp(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Tf(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class cp{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new cp(e,0,Qd.min(),Qd.min(),Qd.min(),ap.empty(),0)}static newFoundDocument(e,t,n,r){return new cp(e,1,t,Qd.min(),n,r,0)}static newNoDocument(e,t){return new cp(e,2,t,Qd.min(),Qd.min(),ap.empty(),0)}static newUnknownDocument(e,t){return new cp(e,3,t,Qd.min(),Qd.min(),ap.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Qd.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ap.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ap.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qd.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof cp&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new cp(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class up{constructor(e,t){this.position=e,this.inclusive=t}}function hp(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?tf.comparator(tf.fromName(o.referenceValue),n.key):Gf(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function dp(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Hf(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class fp{constructor(e,t="asc"){this.field=e,this.dir=t}}function pp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class mp{}class gp extends mp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Tp(e,t,n):"array-contains"===t?new Cp(e,n):"in"===t?new Ap(e,n):"not-in"===t?new Rp(e,n):"array-contains-any"===t?new Op(e,n):new gp(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ip(e,n):new kp(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Gf(t,this.value)):null!==t&&Wf(this.value)===Wf(t)&&this.matchesComparison(Gf(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Id()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yp extends mp{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new yp(e,t)}matches(e){return vp(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function vp(e){return"and"===e.op}function _p(e){return function(e){for(const t of e.filters)if(t instanceof yp)return!1;return!0}(e)&&vp(e)}function bp(e){if(e instanceof gp)return e.field.canonicalString()+e.op.toString()+Jf(e.value);if(_p(e))return e.filters.map((e=>bp(e))).join(",");{const t=e.filters.map((e=>bp(e))).join(",");return`${e.op}(${t})`}}function wp(e,t){return e instanceof gp?(n=e,(r=t)instanceof gp&&n.op===r.op&&n.field.isEqual(r.field)&&Hf(n.value,r.value)):e instanceof yp?function(e,t){return t instanceof yp&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&wp(n,t.filters[r])),!0)}(e,t):void Id();var n,r}function Ep(e){return e instanceof gp?`${(t=e).field.canonicalString()} ${t.op} ${Jf(t.value)}`:e instanceof yp?function(e){return e.op.toString()+" {"+e.getFilters().map(Ep).join(" ,")+"}"}(e):"Filter";var t}class Tp extends gp{constructor(e,t,n){super(e,t,n),this.key=tf.fromName(n.referenceValue)}matches(e){const t=tf.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ip extends gp{constructor(e,t){super(e,"in",t),this.keys=Sp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class kp extends gp{constructor(e,t){super(e,"not-in",t),this.keys=Sp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Sp(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>tf.fromName(e.referenceValue)))}class Cp extends gp{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return np(t)&&Kf(t.arrayValue,this.value)}}class Ap extends gp{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Kf(this.value.arrayValue,t)}}class Rp extends gp{constructor(e,t){super(e,"not-in",t)}matches(e){if(Kf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Kf(this.value.arrayValue,t)}}class Op extends gp{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!np(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Kf(this.value.arrayValue,e)))}}
/**
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
 */class Np{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.le=null}}function xp(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Np(e,t,n,r,s,i,o)}function Lp(e){const t=Sd(e);if(null===t.le){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>bp(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),hf(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Jf(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Jf(e))).join(",")),t.le=e}return t.le}function Dp(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!pp(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!wp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!dp(e.startAt,t.startAt)&&dp(e.endAt,t.endAt)}function Pp(e){return tf.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Fp(e){return new Mp(e)}function Up(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function $p(e){return null!==e.collectionGroup}function Vp(e){const t=Sd(e);if(null===t.he){t.he=[];const e=new Set;for(const r of t.explicitOrderBy)t.he.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new wf(ef.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.he.push(new fp(r,n))})),e.has(ef.keyField().canonicalString())||t.he.push(new fp(ef.keyField(),n))}return t.he}function jp(e){const t=Sd(e);return t.Pe||(t.Pe=function(e,t){if("F"===e.limitType)return xp(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new fp(e.field,t)}));const n=e.endAt?new up(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new up(e.startAt.position,e.startAt.inclusive):null;return xp(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Vp(e))),t.Pe}function Bp(e,t){const n=e.filters.concat([t]);return new Mp(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function qp(e,t,n){return new Mp(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zp(e,t){return Dp(jp(e),jp(t))&&e.limitType===t.limitType}function Wp(e){return`${Lp(jp(e))}|lt:${e.limitType}`}function Hp(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Ep(e))).join(", ")}]`),hf(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Jf(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Jf(e))).join(",")),`Target(${t})`}(jp(e))}; limitType=${e.limitType})`}function Kp(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):tf.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Vp(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=hp(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Vp(n),r)||n.endAt&&!function(e,t,n){const r=hp(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Vp(n),r)));var n,r}function Gp(e){return(t,n)=>{let r=!1;for(const s of Vp(e)){const e=Qp(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Qp(e,t,n){const r=e.field.isKeyField()?tf.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Gf(r,s):Id()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Id()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){gf(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return yf(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new vf(tf.comparator);function Xp(){return Jp}const Zp=new vf(tf.comparator);function em(...e){let t=Zp;for(const n of e)t=t.insert(n.key,n);return t}function tm(e){let t=Zp;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function nm(){return sm()}function rm(){return sm()}function sm(){return new Yp((e=>e.toString()),((e,t)=>e.isEqual(t)))}const im=new vf(tf.comparator),om=new wf(tf.comparator);function am(...e){let t=om;for(const n of e)t=t.add(n);return t}const lm=new wf(jd);
/**
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
 */
function cm(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:df(t)?"-0":t}}function um(e){return{integerValue:""+e}}function hm(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!df(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?um(t):cm(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(){this._=void 0}}function fm(e,t,n){return e instanceof gm?function(e,t){const n={fields:{[Nf]:{stringValue:Of},[Lf]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Df(t)&&(t=Pf(t)),t&&(n.fields[xf]=t),{mapValue:n}}(n,t):e instanceof ym?vm(e,t):e instanceof _m?bm(e,t):function(e,t){const n=mm(e,t),r=Em(n)+Em(e.Ie);return tp(n)&&tp(e.Ie)?um(r):cm(e.serializer,r)}(e,t)}function pm(e,t,n){return e instanceof ym?vm(e,t):e instanceof _m?bm(e,t):n}function mm(e,t){return e instanceof wm?tp(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class gm extends dm{}class ym extends dm{constructor(e){super(),this.elements=e}}function vm(e,t){const n=Tm(t);for(const r of e.elements)n.some((e=>Hf(e,r)))||n.push(r);return{arrayValue:{values:n}}}class _m extends dm{constructor(e){super(),this.elements=e}}function bm(e,t){let n=Tm(t);for(const r of e.elements)n=n.filter((e=>!Hf(e,r)));return{arrayValue:{values:n}}}class wm extends dm{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Em(e){return Af(e.integerValue||e.doubleValue)}function Tm(e){return np(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Im{constructor(e,t){this.version=e,this.transformResults=t}}class km{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new km}static exists(e){return new km(void 0,e)}static updateTime(e){return new km(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sm(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Cm{}function Am(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Um(e.key,km.none()):new Lm(e.key,e.data,km.none());{const n=e.data,r=ap.empty();let s=new wf(ef.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new Dm(e.key,r,new Tf(s.toArray()),km.none())}}function Rm(e,t,n){var r;e instanceof Lm?function(e,t,n){const r=e.value.clone(),s=Mm(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Dm?function(e,t,n){if(!Sm(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Mm(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Pm(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Om(e,t,n,r){return e instanceof Lm?function(e,t,n,r){if(!Sm(e.precondition,t))return n;const s=e.value.clone(),i=Fm(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof Dm?function(e,t,n,r){if(!Sm(e.precondition,t))return n;const s=Fm(e.fieldTransforms,r,t),i=t.data;return i.setAll(Pm(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(s=t,i=n,Sm(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function Nm(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=mm(r.transform,e||null);null!=s&&(null===n&&(n=ap.empty()),n.set(r.field,s))}return n||null}function xm(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Wd(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ym&&r instanceof ym||n instanceof _m&&r instanceof _m?Wd(n.elements,r.elements,Hf):n instanceof wm&&r instanceof wm?Hf(n.Ie,r.Ie):n instanceof gm&&r instanceof gm);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class Lm extends Cm{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Dm extends Cm{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pm(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Mm(e,t,n){const r=new Map;kd(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,pm(o,a,n[s]))}return r}function Fm(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,fm(e,i,t))}return r}class Um extends Cm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $m extends Cm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Rm(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Om(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Om(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=rm();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Am(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Qd.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),am())}isEqual(e){return this.batchId===e.batchId&&Wd(this.mutations,e.mutations,((e,t)=>xm(e,t)))&&Wd(this.baseMutations,e.baseMutations,((e,t)=>xm(e,t)))}}class jm{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){kd(e.mutations.length===n.length);let r=function(){return im}();const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new jm(e,t,n,r)}}
/**
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
 */class Bm{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zm,Wm;function Hm(e){if(void 0===e)return wd("GRPC error has no .code"),Cd.UNKNOWN;switch(e){case zm.OK:return Cd.OK;case zm.CANCELLED:return Cd.CANCELLED;case zm.UNKNOWN:return Cd.UNKNOWN;case zm.DEADLINE_EXCEEDED:return Cd.DEADLINE_EXCEEDED;case zm.RESOURCE_EXHAUSTED:return Cd.RESOURCE_EXHAUSTED;case zm.INTERNAL:return Cd.INTERNAL;case zm.UNAVAILABLE:return Cd.UNAVAILABLE;case zm.UNAUTHENTICATED:return Cd.UNAUTHENTICATED;case zm.INVALID_ARGUMENT:return Cd.INVALID_ARGUMENT;case zm.NOT_FOUND:return Cd.NOT_FOUND;case zm.ALREADY_EXISTS:return Cd.ALREADY_EXISTS;case zm.PERMISSION_DENIED:return Cd.PERMISSION_DENIED;case zm.FAILED_PRECONDITION:return Cd.FAILED_PRECONDITION;case zm.ABORTED:return Cd.ABORTED;case zm.OUT_OF_RANGE:return Cd.OUT_OF_RANGE;case zm.UNIMPLEMENTED:return Cd.UNIMPLEMENTED;case zm.DATA_LOSS:return Cd.DATA_LOSS;default:return Id()}}(Wm=zm||(zm={}))[Wm.OK=0]="OK",Wm[Wm.CANCELLED=1]="CANCELLED",Wm[Wm.UNKNOWN=2]="UNKNOWN",Wm[Wm.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wm[Wm.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wm[Wm.NOT_FOUND=5]="NOT_FOUND",Wm[Wm.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wm[Wm.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wm[Wm.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wm[Wm.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wm[Wm.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wm[Wm.ABORTED=10]="ABORTED",Wm[Wm.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wm[Wm.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wm[Wm.INTERNAL=13]="INTERNAL",Wm[Wm.UNAVAILABLE=14]="UNAVAILABLE",Wm[Wm.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
const Km=new nd([4294967295,4294967295],0);function Gm(e){const t=$d().encode(e),n=new rd;return n.update(t),new Uint8Array(n.digest())}function Qm(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new nd([n,r],0),new nd([s,i],0)]}class Ym{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Jm(`Invalid padding: ${t}`);if(n<0)throw new Jm(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Jm(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Jm(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=nd.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(nd.fromNumber(n)));return 1===r.compare(Km)&&(r=new nd([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;const t=Gm(e),[n,r]=Qm(t);for(let s=0;s<this.hashCount;s++){const e=this.Ae(n,r,s);if(!this.Re(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new Ym(s,r,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.Ee)return;const t=Gm(e),[n,r]=Qm(t);for(let s=0;s<this.hashCount;s++){const e=this.Ae(n,r,s);this.Ve(e)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Jm extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,Zm.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Xm(Qd.min(),r,new vf(jd),Xp(),am())}}class Zm{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Zm(n,t,am(),am(),am())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class tg{constructor(e,t){this.targetId=e,this.ge=t}}class ng{constructor(e,t,n=kf.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class rg{constructor(){this.pe=0,this.ye=og(),this.we=kf.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=am(),t=am(),n=am();return this.ye.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Id()}})),new Zm(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=og()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,kd(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class sg{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Xp(),this.$e=ig(),this.Ue=ig(),this.Ke=new vf(jd)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:Id()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){const t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){const s=r.target;if(Pp(s))if(0===n){const e=new tf(s.path);this.ze(t,e,cp.newNoDocument(e,Qd.min()))}else kd(1===n);else{const r=this.et(t);if(r!==n){const n=this.tt(e),s=n?this.nt(n,e,r):1;if(0!==s){this.Ye(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=Rf(n).toUint8Array()}catch(a){if(a instanceof If)return Ed("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new Ym(i,r,s)}catch(a){return Ed(a instanceof Jm?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ee?null:o}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const s=this.ke.it(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.ze(t,n,null),r++)})),r}ot(e){const t=new Map;this.qe.forEach(((n,r)=>{const s=this.Xe(r);if(s){if(n.current&&Pp(s.target)){const t=new tf(s.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,cp.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}}));let n=am();this.Ue.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qe.forEach(((t,n)=>n.setReadTime(e)));const r=new Xm(e,t,this.Ke,this.Qe,n);return this.Qe=Xp(),this.$e=ig(),this.Ue=ig(),this.Ke=new vf(jd),r}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new rg,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new wf(jd),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new wf(jd),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||bd("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new rg),this.ke.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ig(){return new vf(tf.comparator)}function og(){return new vf(tf.comparator)}const ag=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cg=(()=>({and:"AND",or:"OR"}))();class ug{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function hg(e,t){return e.useProto3Json||hf(t)?t:{value:t}}function dg(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function fg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function pg(e,t){return dg(e,t.toTimestamp())}function mg(e){return kd(!!e),Qd.fromTimestamp(function(e){const t=Cf(e);return new Gd(t.seconds,t.nanos)}(e))}function gg(e,t){return yg(e,t).canonicalString()}function yg(e,t){const n=(r=e,new Xd(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function vg(e){const t=Xd.fromString(e);return kd(Mg(t)),t}function _g(e,t){return gg(e.databaseId,t.path)}function bg(e,t){const n=vg(t);if(n.get(1)!==e.databaseId.projectId)throw new Ad(Cd.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ad(Cd.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new tf(Tg(n))}function wg(e,t){return gg(e.databaseId,t)}function Eg(e){return new Xd(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Tg(e){return kd(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ig(e,t,n){return{name:_g(e,t),fields:n.value.mapValue.fields}}function kg(e,t){return{documents:[wg(e,t.path)]}}function Sg(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=wg(e,s);const i=function(e){if(0!==e.length)return Dg(yp.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:xg((t=e).field),direction:Rg(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hg(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ht:n,parent:s};var l}function Cg(e){let t=function(e){const t=vg(e);return 4===t.length?Xd.emptyPath():Tg(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){kd(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Ag(e);return t instanceof yp&&_p(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new fp(Lg((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,hf(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new up(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new up(n,t)}(n.endAt)),function(e,t,n,r,s,i,o,a){return new Mp(e,t,n,r,s,i,o,a)}(t,s,o,i,a,"F",l,c)}function Ag(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Lg(e.unaryFilter.field);return gp.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Lg(e.unaryFilter.field);return gp.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Lg(e.unaryFilter.field);return gp.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Lg(e.unaryFilter.field);return gp.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Id()}}(e):void 0!==e.fieldFilter?(t=e,gp.create(Lg(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Id()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return yp.create(e.compositeFilter.filters.map((e=>Ag(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Id()}}(e.compositeFilter.op))}(e):Id();var t}function Rg(e){return ag[e]}function Og(e){return lg[e]}function Ng(e){return cg[e]}function xg(e){return{fieldPath:e.canonicalString()}}function Lg(e){return ef.fromServerFormat(e.fieldPath)}function Dg(e){return e instanceof gp?function(e){if("=="===e.op){if(sp(e.value))return{unaryFilter:{field:xg(e.field),op:"IS_NAN"}};if(rp(e.value))return{unaryFilter:{field:xg(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(sp(e.value))return{unaryFilter:{field:xg(e.field),op:"IS_NOT_NAN"}};if(rp(e.value))return{unaryFilter:{field:xg(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xg(e.field),op:Og(e.op),value:e.value}}}(e):e instanceof yp?function(e){const t=e.getFilters().map((e=>Dg(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ng(e.op),filters:t}}}(e):Id()}function Pg(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Mg(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e,t,n,r,s=Qd.min(),i=Qd.min(),o=kf.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Fg(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fg(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.Tt=e}}function $g(e){const t=Cg({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?qp(t,t.limit,"L"):t}
/**
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
 */class Vg{constructor(){this.Tn=new jg}addToCollectionParentIndex(e,t){return this.Tn.add(t),lf.resolve()}getCollectionParents(e,t){return lf.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return lf.resolve()}deleteFieldIndex(e,t){return lf.resolve()}deleteAllFieldIndexes(e){return lf.resolve()}createTargetIndexes(e,t){return lf.resolve()}getDocumentsMatchingTarget(e,t){return lf.resolve(null)}getIndexType(e,t){return lf.resolve(0)}getFieldIndexes(e,t){return lf.resolve([])}getNextCollectionGroupToUpdate(e){return lf.resolve(null)}getMinOffset(e,t){return lf.resolve(rf.min())}getMinOffsetFromCollectionGroup(e,t){return lf.resolve(rf.min())}updateCollectionGroup(e,t,n){return lf.resolve()}updateIndexEntries(e,t){return lf.resolve()}}class jg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new wf(Xd.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new wf(Xd.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qg=41943040;class zg{static withCacheSize(e){return new zg(e,zg.DEFAULT_COLLECTION_PERCENTILE,zg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zg.DEFAULT_COLLECTION_PERCENTILE=10,zg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zg.DEFAULT=new zg(qg,zg.DEFAULT_COLLECTION_PERCENTILE,zg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zg.DISABLED=new zg(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wg{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Wg(0)}static Kn(){return new Wg(-1)}}
/**
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
 */const Hg="LruGarbageCollector";function Kg([e,t],[n,r]){const s=jd(e,n);return 0===s?jd(t,r):s}class Gg{constructor(e){this.Hn=e,this.buffer=new wf(Kg),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Kg(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Qg{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){bd(Hg,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(()=>d(this,null,(function*(){this.Xn=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(e){cf(e)?bd(Hg,"Ignoring IndexedDB error during garbage collection: ",e):yield af(e)}yield this.er(3e5)}))))}}class Yg{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return lf.resolve(uf.ae);const n=new Gg(t);return this.tr.forEachTarget(e,(e=>n.Zn(e.sequenceNumber))).next((()=>this.tr.rr(e,(e=>n.Zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(bd("LruGarbageCollector","Garbage collection skipped; disabled"),lf.resolve(Bg)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(bd("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bg):this.ir(e,t)))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,s,i,o,a,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(bd("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),_d()<=ka.DEBUG&&bd("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-c}ms\n\tDetermined least recently used ${r} in `+(o-i)+`ms\n\tRemoved ${s} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(l-a)+`ms\nTotal Duration: ${l-c}ms`),lf.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jg{constructor(){this.changes=new Yp((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,cp.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?lf.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */class Xg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Om(n.mutation,e,Tf.empty(),Gd.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,am()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=am()){const r=nm();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=em();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=nm();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,am())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=Xp();const i=sm(),o=sm();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Dm)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),Om(o.mutation,t,o.mutation.getFieldMask(),Gd.now())):i.set(t.key,Tf.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Xg(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=sm();let r=new vf(((e,t)=>e-t)),s=am();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Tf.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||am()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=rm();l.forEach((e=>{if(!s.has(e)){const r=Am(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return lf.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return s=t,tf.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):$p(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var s}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):lf.resolve(nm());let o=-1,a=s;return i.next((t=>lf.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?lf.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,am()))).next((e=>({batchId:o,changes:tm(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new tf(t)).next((e=>{let t=em();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=em();return this.indexManager.getCollectionParents(e,s).next((o=>lf.forEach(o,(o=>{const a=(l=t,c=o.child(s),new Mp(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,c;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r)))).next((e=>{s.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,cp.newInvalidDocument(r)))}));let n=em();return e.forEach(((e,r)=>{const i=s.get(e);void 0!==i&&Om(i.mutation,r,Tf.empty(),Gd.now()),Kp(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
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
 */class ey{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return lf.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:(n=t).id,version:n.version,createTime:mg(n.createTime)}),lf.resolve();var n}getNamedQuery(e,t){return lf.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:(n=t).name,query:$g(n.bundledQuery),readTime:mg(n.readTime)}),lf.resolve();var n}}
/**
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
 */class ty{constructor(){this.overlays=new vf(tf.comparator),this.Rr=new Map}getOverlay(e,t){return lf.resolve(this.overlays.get(t))}getOverlays(e,t){const n=nm();return lf.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Et(e,t,r)})),lf.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Rr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Rr.delete(n)),lf.resolve()}getOverlaysForCollection(e,t,n){const r=nm(),s=t.length+1,i=new tf(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return lf.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new vf(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=nm(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=nm(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return lf.resolve(o)}Et(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Bm(t,n));let s=this.Rr.get(t);void 0===s&&(s=am(),this.Rr.set(t,s)),this.Rr.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(){this.sessionToken=kf.EMPTY_BYTE_STRING}getSessionToken(e){return lf.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,lf.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(){this.Vr=new wf(sy.mr),this.gr=new wf(sy.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new sy(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.wr(new sy(e,t))}Sr(e,t){e.forEach((e=>this.removeReference(e,t)))}br(e){const t=new tf(new Xd([])),n=new sy(t,e),r=new sy(t,e+1),s=[];return this.gr.forEachInRange([n,r],(e=>{this.wr(e),s.push(e.key)})),s}Dr(){this.Vr.forEach((e=>this.wr(e)))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new tf(new Xd([])),n=new sy(t,e),r=new sy(t,e+1);let s=am();return this.gr.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new sy(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sy{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return tf.comparator(e.key,t.key)||jd(e.Cr,t.Cr)}static pr(e,t){return jd(e.Cr,t.Cr)||tf.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new wf(sy.mr)}checkEmpty(e){return lf.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Vm(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.Mr=this.Mr.add(new sy(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return lf.resolve(i)}lookupMutationBatch(e,t){return lf.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Nr(n),s=r<0?0:r;return lf.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return lf.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return lf.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new sy(t,0),r=new sy(t,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([n,r],(e=>{const t=this.Or(e.Cr);s.push(t)})),lf.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new wf(jd);return t.forEach((e=>{const t=new sy(e,0),r=new sy(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],(e=>{n=n.add(e.Cr)}))})),lf.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;tf.isDocumentKey(s)||(s=s.child(""));const i=new sy(new tf(s),0);let o=new wf(jd);return this.Mr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Cr)),!0)}),i),lf.resolve(this.Br(o))}Br(e){const t=[];return e.forEach((e=>{const n=this.Or(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){kd(0===this.Lr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Mr;return lf.forEach(t.mutations,(r=>{const s=new sy(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Mr=n}))}qn(e){}containsKey(e,t){const n=new sy(t,0),r=this.Mr.firstAfterOrEqual(n);return lf.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,lf.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.kr=e,this.docs=new vf(tf.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return lf.resolve(n?n.document.mutableCopy():cp.newInvalidDocument(t))}getEntries(e,t){let n=Xp();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():cp.newInvalidDocument(e))})),lf.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=Xp();const i=t.path,o=new tf(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||sf(nf(o),n)<=0||(r.has(o.key)||Kp(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return lf.resolve(s)}getAllFromCollectionGroup(e,t,n,r){Id()}qr(e,t){return lf.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ay(this)}getSize(e){return lf.resolve(this.size)}}class ay extends Jg{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)})),lf.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.persistence=e,this.Qr=new Yp((e=>Lp(e)),Dp),this.lastRemoteSnapshotVersion=Qd.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ry,this.targetCount=0,this.Kr=Wg.Un()}forEachTarget(e,t){return this.Qr.forEach(((e,n)=>t(n))),lf.resolve()}getLastRemoteSnapshotVersion(e){return lf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return lf.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),lf.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),lf.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Wg(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,lf.resolve()}updateTargetData(e,t){return this.zn(t),lf.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,lf.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Qr.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Qr.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),lf.waitFor(s).next((()=>r))}getTargetCount(e){return lf.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return lf.resolve(n)}addMatchingKeys(e,t,n){return this.Ur.yr(t,n),lf.resolve()}removeMatchingKeys(e,t,n){this.Ur.Sr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),lf.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),lf.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ur.vr(t);return lf.resolve(n)}containsKey(e,t){return lf.resolve(this.Ur.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new uf(0),this.zr=!1,this.zr=!0,this.jr=new ny,this.referenceDelegate=e(this),this.Hr=new ly(this),this.indexManager=new Vg,this.remoteDocumentCache=new oy((e=>this.referenceDelegate.Jr(e))),this.serializer=new Ug(t),this.Yr=new ey(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ty,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new iy(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){bd("MemoryPersistence","Starting transaction:",e);const r=new uy(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next((e=>this.referenceDelegate.Xr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}ei(e,t){return lf.or(Object.values(this.Wr).map((n=>()=>n.containsKey(e,t))))}}class uy extends of{constructor(e){super(),this.currentSequenceNumber=e}}class hy{constructor(e){this.persistence=e,this.ti=new ry,this.ni=null}static ri(e){return new hy(e)}get ii(){if(this.ni)return this.ni;throw Id()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),lf.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),lf.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),lf.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach((e=>this.ii.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.ii.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lf.forEach(this.ii,(n=>{const r=tf.fromPath(n);return this.si(e,r).next((e=>{e||t.removeEntry(r,Qd.min())}))})).next((()=>(this.ni=null,t.apply(e))))}updateLimboDocument(e,t){return this.si(e,t).next((e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())}))}Jr(e){return 0}si(e,t){return lf.or([()=>lf.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class dy{constructor(e,t){this.persistence=e,this.oi=new Yp((e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=pf(t)),t=ff(e.get(n),t);return pf(t)}(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=function(e,t){return new Yg(e,t)}(this,t)}static ri(e,t){return new dy(e,t)}Zr(){}Xr(e){return lf.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}sr(e){let t=0;return this.rr(e,(e=>{t++})).next((()=>t))}rr(e,t){return lf.forEach(this.oi,((n,r)=>this.ar(e,n,r).next((e=>e?lf.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.qr(e,(r=>this.ar(e,r,t).next((e=>{e||(n++,s.removeEntry(r,Qd.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),lf.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),lf.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),lf.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),lf.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zf(e.data.value)),t}ar(e,t,n){return lf.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.oi.get(t);return lf.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=am(),r=am();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new fy(e,t.fromCache,n,r)}}
/**
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
 */class py{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class my{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=ca()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(la())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.rs(e,t).next((e=>{s.result=e})).next((()=>{if(!s.result)return this.ss(e,t,r,n).next((e=>{s.result=e}))})).next((()=>{if(s.result)return;const n=new py;return this._s(e,t,n).next((r=>{if(s.result=r,this.Xi)return this.us(e,t,n,r.size)}))})).next((()=>s.result))}us(e,t,n,r){return n.documentReadCount<this.es?(_d()<=ka.DEBUG&&bd("QueryEngine","SDK will not create cache indexes for query:",Hp(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),lf.resolve()):(_d()<=ka.DEBUG&&bd("QueryEngine","Query:",Hp(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(_d()<=ka.DEBUG&&bd("QueryEngine","The SDK decides to create cache indexes for query:",Hp(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jp(t))):lf.resolve())}rs(e,t){if(Up(t))return lf.resolve(null);let n=jp(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=qp(t,null,"F"),n=jp(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const s=am(...r);return this.ns.getDocuments(e,s).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.cs(t,r);return this.ls(t,i,s,n.readTime)?this.rs(e,qp(t,null,"F")):this.hs(e,i,t,n)}))))})))))}ss(e,t,n,r){return Up(t)||r.isEqual(Qd.min())?lf.resolve(null):this.ns.getDocuments(e,n).next((s=>{const i=this.cs(t,s);return this.ls(t,i,n,r)?lf.resolve(null):(_d()<=ka.DEBUG&&bd("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hp(t)),this.hs(e,i,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Qd.fromTimestamp(1e9===r?new Gd(n+1,0):new Gd(n,r));return new rf(s,tf.empty(),t)}(r,-1)).next((e=>e)))}))}cs(e,t){let n=new wf(Gp(e));return t.forEach(((t,r)=>{Kp(e,r)&&(n=n.add(r))})),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}_s(e,t,n){return _d()<=ka.DEBUG&&bd("QueryEngine","Using full collection scan to execute query:",Hp(t)),this.ns.getDocumentsMatchingQuery(e,t,rf.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */const gy="LocalStore";class yy{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new vf(jd),this.Is=new Yp((e=>Lp(e)),Dp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Zg(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ts)))}}function vy(e,t){return d(this,null,(function*(){const n=Sd(e);return yield n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.As(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=am();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Rs:e,removedBatchIds:s,addedBatchIds:i})))}))}))}))}function _y(e){const t=Sd(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Hr.getLastRemoteSnapshotVersion(e)))}function by(e,t){const n=Sd(e),r=t.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const o=[];t.targetChanges.forEach(((i,a)=>{const l=s.get(a);if(!l)return;o.push(n.Hr.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Hr.addMatchingKeys(e,i.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(kf.EMPTY_BYTE_STRING,Qd.min()).withLastLimboFreeSnapshotVersion(Qd.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,i)&&o.push(n.Hr.updateTargetData(e,c))}));let a=Xp(),l=am();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=am(),s=am();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Xp();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Qd.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):bd(gy,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Vs:r,fs:s}}))}(e,i,t.documentUpdates).next((e=>{a=e.Vs,l=e.fs}))),!r.isEqual(Qd.min())){const t=n.Hr.getLastRemoteSnapshotVersion(e).next((t=>n.Hr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return lf.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ts=s,e)))}function wy(e,t){const n=Sd(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ey(e,t,n){return d(this,null,(function*(){const r=Sd(e),s=r.Ts.get(t),i=n?"readwrite":"readwrite-primary";try{n||(yield r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s))))}catch(o){if(!cf(o))throw o;bd(gy,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}))}function Ty(e,t,n){const r=Sd(e);let s=Qd.min(),i=am();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=Sd(e),s=r.Is.get(n);return void 0!==s?lf.resolve(r.Ts.get(s)):r.Hr.getTargetData(t,n)}(r,e,jp(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Ps.getDocumentsMatchingQuery(e,t,n?s:Qd.min(),n?i:am()))).next((e=>(function(e,t,n){let r=e.Es.get(t)||Qd.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Es.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,gs:i})))))}class Iy{constructor(){this.activeTargetIds=lm}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ky{constructor(){this.ho=new Iy,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Iy,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Sy{To(e){}shutdown(){}}
/**
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
 */const Cy="ConnectivityMonitor";class Ay{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){bd(Cy,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){bd(Cy,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Ry=null;function Oy(){return null===Ry?Ry=268435456+Math.round(2147483648*Math.random()):Ry++,"0x"+Ry.toString(16)
/**
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
 */}const Ny="RestConnection",xy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ly{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===Uf?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,s){const i=Oy(),o=this.bo(e,t.toUriEncodedString());bd(Ny,`Sending RPC '${e}' ${i}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,s),this.vo(e,o,a,n).then((t=>(bd(Ny,`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw Ed(Ny,`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t}))}Co(e,t,n,r,s,i){return this.So(e,t,n,r,s)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+yd,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=xy[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="WebChannelConnection";class My extends Ly{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const s=Oy();return new Promise(((i,o)=>{const a=new id;a.setWithCredentials(!0),a.listenOnce(ad.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ld.NO_ERROR:const t=a.getResponseJson();bd(Py,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case ld.TIMEOUT:bd(Py,`RPC '${e}' ${s} timed out`),o(new Ad(Cd.DEADLINE_EXCEEDED,"Request time out"));break;case ld.HTTP_ERROR:const n=a.getStatus();if(bd(Py,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Cd).indexOf(t)>=0?t:Cd.UNKNOWN}(t.status);o(new Ad(e,t.message))}else o(new Ad(Cd.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ad(Cd.UNAVAILABLE,"Connection failed."));break;default:Id()}}finally{bd(Py,`RPC '${e}' ${s} completed.`)}}));const l=JSON.stringify(r);bd(Py,`RPC '${e}' ${s} sending request:`,r),a.send(t,"POST",l,n,15)}))}Wo(e,t,n){const r=Oy(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=dd(),o=hd(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");bd(Py,`Creating RPC '${e}' stream ${r}: ${c}`,a);const u=i.createWebChannel(c,a);let h=!1,d=!1;const f=new Dy({Fo:t=>{d?bd(Py,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(bd(Py,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),bd(Py,`RPC '${e}' stream ${r} sending:`,t),u.send(t))},Mo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(u,od.EventType.OPEN,(()=>{d||(bd(Py,`RPC '${e}' stream ${r} transport opened.`),f.Qo())})),p(u,od.EventType.CLOSE,(()=>{d||(d=!0,bd(Py,`RPC '${e}' stream ${r} transport closed`),f.Uo())})),p(u,od.EventType.ERROR,(t=>{d||(d=!0,Ed(Py,`RPC '${e}' stream ${r} transport errored:`,t),f.Uo(new Ad(Cd.UNAVAILABLE,"The operation could not be completed")))})),p(u,od.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];kd(!!s);const i=s,o=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){bd(Py,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=zm[e];if(void 0!==t)return Hm(t)}(t),s=o.message;void 0===n&&(n=Cd.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.Uo(new Ad(n,s)),u.close()}else bd(Py,`RPC '${e}' stream ${r} received:`,s),f.Ko(s)}})),p(o,ud.STAT_EVENT,(t=>{t.stat===cd.PROXY?bd(Py,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===cd.NOPROXY&&bd(Py,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.$o()}),0),f}}function Fy(){return"undefined"!=typeof document?document:null}
/**
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
 */function Uy(e){return new ug(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&bd("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,(()=>(this.Yo=Date.now(),e()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy="PersistentStream";class jy{constructor(e,t,n,r,s,i,o,a){this.Ti=e,this.n_=n,this.r_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new $y(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}stop(){return d(this,null,(function*(){this.u_()&&(yield this.close(0))}))}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(e){this.E_(),this.stream.send(e)}T_(){return d(this,null,(function*(){if(this.c_())return this.close(0)}))}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}close(e,t){return d(this,null,(function*(){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===Cd.RESOURCE_EXHAUSTED?(wd(t.toString()),wd("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Cd.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.Lo(t)}))}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.i_===t&&this.V_(e,n)}),(t=>{e((()=>{const e=new Ad(Cd.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)}))}))}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((e=>{n((()=>this.m_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.__?this.g_(e):this.onNext(e)))}))}l_(){this.state=5,this.a_.Xo((()=>d(this,null,(function*(){this.state=0,this.start()}))))}m_(e){return bd(Vy,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget((()=>this.i_===e?t():(bd(Vy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class By extends jy{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Id(),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(kd(void 0===t||"string"==typeof t),kf.fromBase64String(t||"")):(kd(void 0===t||t instanceof Buffer||t instanceof Uint8Array),kf.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?Cd.UNKNOWN:Hm(e.code);return new Ad(t,e.message||"")}(a);n=new ng(s,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=bg(e,r.document.name),i=mg(r.document.updateTime),o=r.document.createTime?mg(r.document.createTime):Qd.min(),a=new ap({mapValue:{fields:r.document.fields}}),l=cp.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new eg(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=bg(e,r.document),i=r.readTime?mg(r.readTime):Qd.min(),o=cp.newNoDocument(s,i),a=r.removedTargetIds||[];n=new eg([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=bg(e,r.document),i=r.removedTargetIds||[];n=new eg([],i,s,null)}else{if(!("filter"in t))return Id();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new qm(r,s),o=e.targetId;n=new tg(o,i)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Qd.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Qd.min():t.readTime?mg(t.readTime):Qd.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=Eg(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Pp(r)?{documents:kg(e,r)}:{query:Sg(e,r).ht},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=fg(e,t.resumeToken);const r=hg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Qd.min())>0){n.readTime=dg(e,t.snapshotVersion.toTimestamp());const r=hg(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Id()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=Eg(this.serializer),t.removeTarget=e,this.I_(t)}}class qy extends jy{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return kd(!!e.streamToken),this.lastStreamToken=e.streamToken,kd(!e.writeResults||0===e.writeResults.length),this.listener.D_()}onNext(e){kd(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=function(e,t){return e&&e.length>0?(kd(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?mg(e.updateTime):mg(t);return n.isEqual(Qd.min())&&(n=mg(t)),new Im(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=mg(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=Eg(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Lm)n={update:Ig(e,t.key,t.value)};else if(t instanceof Um)n={delete:_g(e,t.key)};else if(t instanceof Dm)n={update:Ig(e,t.key,t.data),updateMask:Pg(t.fieldMask)};else{if(!(t instanceof $m))return Id();n={verify:_g(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof gm)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ym)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _m)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof wm)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw Id()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:pg(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Id())),n;var r,s}(this.serializer,e)))};this.I_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{}class Wy extends zy{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new Ad(Cd.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.So(e,yg(t,n),r,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Cd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ad(Cd.UNKNOWN,e.toString())}))}Co(e,t,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Co(e,yg(t,n),r,i,o,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Cd.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ad(Cd.UNKNOWN,e.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Hy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(wd(t),this.N_=!1):bd("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="RemoteStore";class Gy{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To((e=>{n.enqueueAndForget((()=>d(this,null,(function*(){rv(this)&&(bd(Ky,"Restarting streams for network reachability change."),yield function(e){return d(this,null,(function*(){const t=Sd(e);t.W_.add(4),yield Yy(t),t.j_.set("Unknown"),t.W_.delete(4),yield Qy(t)}))}(this))}))))})),this.j_=new Hy(n,r)}}function Qy(e){return d(this,null,(function*(){if(rv(e))for(const t of e.G_)yield t(!0)}))}function Yy(e){return d(this,null,(function*(){for(const t of e.G_)yield t(!1)}))}function Jy(e,t){const n=Sd(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),nv(n)?tv(n):wv(n).c_()&&Zy(n,t))}function Xy(e,t){const n=Sd(e),r=wv(n);n.K_.delete(t),r.c_()&&ev(n,t),0===n.K_.size&&(r.c_()?r.P_():rv(n)&&n.j_.set("Unknown"))}function Zy(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Qd.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}wv(e).y_(t)}function ev(e,t){e.H_.Ne(t),wv(e).w_(t)}function tv(e){e.H_=new sg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),wv(e).start(),e.j_.B_()}function nv(e){return rv(e)&&!wv(e).u_()&&e.K_.size>0}function rv(e){return 0===Sd(e).W_.size}function sv(e){e.H_=void 0}function iv(e){return d(this,null,(function*(){e.j_.set("Online")}))}function ov(e){return d(this,null,(function*(){e.K_.forEach(((t,n)=>{Zy(e,t)}))}))}function av(e,t){return d(this,null,(function*(){sv(e),nv(e)?(e.j_.q_(t),tv(e)):e.j_.set("Unknown")}))}function lv(e,t,n){return d(this,null,(function*(){if(e.j_.set("Online"),t instanceof ng&&2===t.state&&t.cause)try{yield function(e,t){return d(this,null,(function*(){const n=t.cause;for(const r of t.targetIds)e.K_.has(r)&&(yield e.remoteSyncer.rejectListen(r,n),e.K_.delete(r),e.H_.removeTarget(r))}))}(e,t)}catch(r){bd(Ky,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),yield cv(e,r)}else if(t instanceof eg?e.H_.We(t):t instanceof tg?e.H_.Ze(t):e.H_.je(t),!n.isEqual(Qd.min()))try{const t=yield _y(e.localStore);n.compareTo(t)>=0&&(yield function(e,t){const n=e.H_.ot(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.K_.get(r);s&&e.K_.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.K_.get(t);if(!r)return;e.K_.set(t,r.withResumeToken(kf.EMPTY_BYTE_STRING,r.snapshotVersion)),ev(e,t);const s=new Fg(r.target,t,n,r.sequenceNumber);Zy(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n))}catch(s){bd(Ky,"Failed to raise snapshot:",s),yield cv(e,s)}}))}function cv(e,t,n){return d(this,null,(function*(){if(!cf(t))throw t;e.W_.add(1),yield Yy(e),e.j_.set("Offline"),n||(n=()=>_y(e.localStore)),e.asyncQueue.enqueueRetryable((()=>d(this,null,(function*(){bd(Ky,"Retrying IndexedDB access"),yield n(),e.W_.delete(1),yield Qy(e)}))))}))}function uv(e,t){return t().catch((n=>cv(e,n,t)))}function hv(e){return d(this,null,(function*(){const t=Sd(e),n=Ev(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:-1;for(;dv(t);)try{const e=yield wy(t.localStore,r);if(null===e){0===t.U_.length&&n.P_();break}r=e.batchId,fv(t,e)}catch(s){yield cv(t,s)}pv(t)&&mv(t)}))}function dv(e){return rv(e)&&e.U_.length<10}function fv(e,t){e.U_.push(t);const n=Ev(e);n.c_()&&n.S_&&n.b_(t.mutations)}function pv(e){return rv(e)&&!Ev(e).u_()&&e.U_.length>0}function mv(e){Ev(e).start()}function gv(e){return d(this,null,(function*(){Ev(e).C_()}))}function yv(e){return d(this,null,(function*(){const t=Ev(e);for(const n of e.U_)t.b_(n.mutations)}))}function vv(e,t,n){return d(this,null,(function*(){const r=e.U_.shift(),s=jm.from(r,t,n);yield uv(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),yield hv(e)}))}function _v(e,t){return d(this,null,(function*(){t&&Ev(e).S_&&(yield function(e,t){return d(this,null,(function*(){if(function(e){switch(e){case Cd.OK:return Id();case Cd.CANCELLED:case Cd.UNKNOWN:case Cd.DEADLINE_EXCEEDED:case Cd.RESOURCE_EXHAUSTED:case Cd.INTERNAL:case Cd.UNAVAILABLE:case Cd.UNAUTHENTICATED:return!1;case Cd.INVALID_ARGUMENT:case Cd.NOT_FOUND:case Cd.ALREADY_EXISTS:case Cd.PERMISSION_DENIED:case Cd.FAILED_PRECONDITION:case Cd.ABORTED:case Cd.OUT_OF_RANGE:case Cd.UNIMPLEMENTED:case Cd.DATA_LOSS:return!0;default:return Id()}}(n=t.code)&&n!==Cd.ABORTED){const n=e.U_.shift();Ev(e).h_(),yield uv(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),yield hv(e)}var n}))}(e,t)),pv(e)&&mv(e)}))}function bv(e,t){return d(this,null,(function*(){const n=Sd(e);n.asyncQueue.verifyOperationInProgress(),bd(Ky,"RemoteStore received new credentials");const r=rv(n);n.W_.add(3),yield Yy(n),r&&n.j_.set("Unknown"),yield n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),yield Qy(n)}))}function wv(e){return e.J_||(e.J_=function(e,t,n){const r=Sd(e);return r.M_(),new By(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:iv.bind(null,e),No:ov.bind(null,e),Lo:av.bind(null,e),p_:lv.bind(null,e)}),e.G_.push((t=>d(this,null,(function*(){t?(e.J_.h_(),nv(e)?tv(e):e.j_.set("Unknown")):(yield e.J_.stop(),sv(e))}))))),e.J_}function Ev(e){return e.Y_||(e.Y_=function(e,t,n){const r=Sd(e);return r.M_(),new qy(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:gv.bind(null,e),Lo:_v.bind(null,e),D_:yv.bind(null,e),v_:vv.bind(null,e)}),e.G_.push((t=>d(this,null,(function*(){t?(e.Y_.h_(),yield hv(e)):(yield e.Y_.stop(),e.U_.length>0&&(bd(Ky,`Stopping write stream with ${e.U_.length} pending writes`),e.U_=[]))}))))),e.Y_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Tv{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Rd,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Tv(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ad(Cd.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iv(e,t){if(wd("AsyncQueue",`${t}: ${e}`),cf(e))return new Ad(Cd.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{static emptySet(e){return new kv(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||tf.comparator(t.key,n.key):(e,t)=>tf.comparator(e.key,t.key),this.keyedMap=em(),this.sortedSet=new vf(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof kv))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new kv;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(){this.Z_=new vf(tf.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Id():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Cv{constructor(e,t,n,r,s,i,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Cv(e,t,kv.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((e=>e.ra()))}}class Rv{constructor(){this.queries=Ov(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){const n=Sd(e),r=n.queries;n.queries=Ov(),r.forEach(((e,n)=>{for(const r of n.ta)r.onError(t)}))}(this,new Ad(Cd.ABORTED,"Firestore shutting down"))}}function Ov(){return new Yp((e=>Wp(e)),zp)}function Nv(e,t){return d(this,null,(function*(){const n=Sd(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.na()&&t.ra()&&(r=2):(i=new Av,r=t.ra()?0:1);try{switch(r){case 0:i.ea=yield n.onListen(s,!0);break;case 1:i.ea=yield n.onListen(s,!1);break;case 2:yield n.onFirstRemoteStoreListen(s)}}catch(o){const e=Iv(o,`Initialization of query '${Hp(t.query)}' failed`);return void t.onError(e)}n.queries.set(s,i),i.ta.push(t),t.sa(n.onlineState),i.ea&&t.oa(i.ea)&&Pv(n)}))}function xv(e,t){return d(this,null,(function*(){const n=Sd(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}))}function Lv(e,t){const n=Sd(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.ta)e.oa(s)&&(r=!0);t.ea=s}}r&&Pv(n)}function Dv(e,t,n){const r=Sd(e),s=r.queries.get(t);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(t)}function Pv(e){e.ia.forEach((e=>{e.next()}))}var Mv,Fv;(Fv=Mv||(Mv={}))._a="default",Fv.Cache="cache";class Uv{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Cv(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache)return!0;if(!this.ra())return!0;const n="Offline"!==t;return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=Cv.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Mv.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e){this.key=e}}class Vv{constructor(e){this.key=e}}class jv{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=am(),this.mutatedKeys=am(),this.ya=Gp(e),this.wa=new kv(this.ya)}get Sa(){return this.fa}ba(e,t){const n=t?t.Da:new Sv,r=t?t.wa:this.wa;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=Kp(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.va(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.ya(u,a)>0||l&&this.ya(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{wa:i,Da:n,ls:o,mutatedKeys:s}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const i=e.Da.X_();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Id()}};return n(e)-n(t)}(e.type,t.type)||this.ya(e.doc,t.doc))),this.Ca(n),r=null!=r&&r;const o=t&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,l=a!==this.ga;return this.ga=a,0!==i.length||l?{snapshot:new Cv(this.query,e.wa,s,i,e.mutatedKeys,0===a,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Sv,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach((e=>this.fa=this.fa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.fa=this.fa.delete(e))),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=am(),this.wa.forEach((e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))}));const t=[];return e.forEach((e=>{this.pa.has(e)||t.push(new Vv(e))})),this.pa.forEach((n=>{e.has(n)||t.push(new $v(n))})),t}Oa(e){this.fa=e.gs,this.pa=am();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Cv.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const Bv="SyncEngine";class qv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class zv{constructor(e){this.key=e,this.Ba=!1}}class Wv{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.La={},this.ka=new Yp((e=>Wp(e)),zp),this.qa=new Map,this.Qa=new Set,this.$a=new vf(tf.comparator),this.Ua=new Map,this.Ka=new ry,this.Wa={},this.Ga=new Map,this.za=Wg.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}function Hv(e,t,n=!0){return d(this,null,(function*(){const r=f_(e);let s;const i=r.ka.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=yield Gv(r,t,n,!0),s}))}function Kv(e,t){return d(this,null,(function*(){const n=f_(e);yield Gv(n,t,!0,!1)}))}function Gv(e,t,n,r){return d(this,null,(function*(){const s=yield function(e,t){const n=Sd(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Hr.getTargetData(e,t).next((s=>s?(r=s,lf.resolve(r)):n.Hr.allocateTargetId(e).next((s=>(r=new Fg(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Hr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(e.targetId,e),n.Is.set(t,e.targetId)),e}))}(e.localStore,jp(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=yield function(e,t,n,r,s){return d(this,null,(function*(){e.Ha=(t,n,r)=>function(e,t,n,r){return d(this,null,(function*(){let s=t.view.ba(n);s.ls&&(s=yield Ty(e.localStore,t.query,!1).then((({documents:e})=>t.view.ba(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i,o);return a_(e,t.targetId,a.Ma),a.snapshot}))}(e,t,n,r);const i=yield Ty(e.localStore,t,!0),o=new jv(t,i.gs),a=o.ba(i.documents),l=Zm.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);a_(e,n,c.Ma);const u=new qv(t,n,o);return e.ka.set(t,u),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),c.snapshot}))}(e,t,i,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&Jy(e.remoteStore,s),a}))}function Qv(e,t,n){return d(this,null,(function*(){const r=Sd(e),s=r.ka.get(t),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter((e=>!zp(e,t)))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||(yield Ey(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xy(r.remoteStore,s.targetId),i_(r,s.targetId)})).catch(af))):(i_(r,s.targetId),yield Ey(r.localStore,s.targetId,!0))}))}function Yv(e,t){return d(this,null,(function*(){const n=Sd(e),r=n.ka.get(t),s=n.qa.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xy(n.remoteStore,r.targetId))}))}function Jv(e,t,n){return d(this,null,(function*(){const r=function(e){const t=Sd(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=t_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=n_.bind(null,t),t}(e);try{const e=yield function(e,t){const n=Sd(e),r=Gd.now(),s=t.reduce(((e,t)=>e.add(t.key)),am());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Xp(),l=am();return n.ds.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=Nm(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new Dm(e.key,t,lp(t.value.mapValue),km.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:tm(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Wa[e.currentUser.toKey()];r||(r=new vf(jd)),r=r.insert(t,n),e.Wa[e.currentUser.toKey()]=r}(r,e.batchId,n),yield u_(r,e.changes),yield hv(r.remoteStore)}catch(s){const e=Iv(s,"Failed to persist write");n.reject(e)}}))}function Xv(e,t){return d(this,null,(function*(){const n=Sd(e);try{const e=yield by(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Ua.get(t);r&&(kd(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ba=!0:e.modifiedDocuments.size>0?kd(r.Ba):e.removedDocuments.size>0&&(kd(r.Ba),r.Ba=!1))})),yield u_(n,e,t)}catch(r){yield af(r)}}))}function Zv(e,t,n){const r=Sd(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ka.forEach(((n,r)=>{const s=r.view.sa(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Sd(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.ta)s.sa(t)&&(r=!0)})),r&&Pv(n)}(r.eventManager,t),e.length&&r.La.p_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function e_(e,t,n){return d(this,null,(function*(){const r=Sd(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ua.get(t),i=s&&s.key;if(i){let e=new vf(tf.comparator);e=e.insert(i,cp.newNoDocument(i,Qd.min()));const n=am().add(i),s=new Xm(Qd.min(),new Map,new vf(jd),e,n);yield Xv(r,s),r.$a=r.$a.remove(i),r.Ua.delete(t),c_(r)}else yield Ey(r.localStore,t,!1).then((()=>i_(r,t,n))).catch(af)}))}function t_(e,t){return d(this,null,(function*(){const n=Sd(e),r=t.batch.batchId;try{const e=yield function(e,t){const n=Sd(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.ds.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=lf.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);kd(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=am();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);s_(n,r,null),r_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),yield u_(n,e)}catch(s){yield af(s)}}))}function n_(e,t,n){return d(this,null,(function*(){const r=Sd(e);try{const e=yield function(e,t){const n=Sd(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(kd(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);s_(r,t,n),r_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),yield u_(r,e)}catch(s){yield af(s)}}))}function r_(e,t){(e.Ga.get(t)||[]).forEach((e=>{e.resolve()})),e.Ga.delete(t)}function s_(e,t,n){const r=Sd(e);let s=r.Wa[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function i_(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach((t=>{e.Ka.containsKey(t)||o_(e,t)}))}function o_(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);null!==n&&(Xy(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),c_(e))}function a_(e,t,n){for(const r of n)r instanceof $v?(e.Ka.addReference(r.key,t),l_(e,r)):r instanceof Vv?(bd(Bv,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||o_(e,r.key)):Id()}function l_(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(bd(Bv,"New document in limbo: "+n),e.Qa.add(r),c_(e))}function c_(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new tf(Xd.fromString(t)),r=e.za.next();e.Ua.set(r,new zv(n)),e.$a=e.$a.insert(n,r),Jy(e.remoteStore,new Fg(jp(Fp(n.path)),r,"TargetPurposeLimboResolution",uf.ae))}}function u_(e,t,n){return d(this,null,(function*(){const r=Sd(e),s=[],i=[],o=[];r.ka.isEmpty()||(r.ka.forEach(((e,a)=>{o.push(r.Ha(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const s=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(e){s.push(e);const t=fy.Yi(a.targetId,e);i.push(t)}})))})),yield Promise.all(o),r.La.p_(s),yield function(e,t){return d(this,null,(function*(){const n=Sd(e);try{yield n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>lf.forEach(t,(t=>lf.forEach(t.Hi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>lf.forEach(t.Ji,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!cf(r))throw r;bd(gy,"Failed to update sequence numbers: "+r)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ts.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.Ts=n.Ts.insert(t,s)}}}))}(r.localStore,i))}))}function h_(e,t){return d(this,null,(function*(){const n=Sd(e);if(!n.currentUser.isEqual(t)){bd(Bv,"User change. New user:",t.toKey());const e=yield vy(n.localStore,t);n.currentUser=t,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Ga.forEach((e=>{e.forEach((e=>{e.reject(new Ad(Cd.CANCELLED,s))}))})),r.Ga.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),yield u_(n,e.Rs)}var r,s}))}function d_(e,t){const n=Sd(e),r=n.Ua.get(t);if(r&&r.Ba)return am().add(r.key);{let e=am();const r=n.qa.get(t);if(!r)return e;for(const t of r){const r=n.ka.get(t);e=e.unionWith(r.view.Sa)}return e}}function f_(e){const t=Sd(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Xv.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=d_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=e_.bind(null,t),t.La.p_=Lv.bind(null,t.eventManager),t.La.Ja=Dv.bind(null,t.eventManager),t}class p_{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return d(this,null,(function*(){this.serializer=Uy(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),yield this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}))}tu(e,t){return null}nu(e,t){return null}eu(e){return function(e,t,n,r){return new yy(e,t,n,r)}(this.persistence,new my,e.initialUser,this.serializer)}Xa(e){return new cy(hy.ri,this.serializer)}Za(e){return new ky}terminate(){return d(this,null,(function*(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()}))}}p_.provider={build:()=>new p_};class m_ extends p_{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){kd(this.persistence.referenceDelegate instanceof dy);const n=this.persistence.referenceDelegate.garbageCollector;return new Qg(n,e.asyncQueue,t)}Xa(e){const t=void 0!==this.cacheSizeBytes?zg.withCacheSize(this.cacheSizeBytes):zg.DEFAULT;return new cy((e=>dy.ri(e,t)),this.serializer)}}class g_{initialize(e,t){return d(this,null,(function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Zv(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=h_.bind(null,this.syncEngine),yield function(e,t){return d(this,null,(function*(){const n=Sd(e);t?(n.W_.delete(2),yield Qy(n)):t||(n.W_.add(2),yield Yy(n),n.j_.set("Unknown"))}))}(this.remoteStore,this.syncEngine.isPrimaryClient))}))}createEventManager(e){return new Rv}createDatastore(e){const t=Uy(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new My(r));var r;return function(e,t,n,r){return new Wy(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Zv(this.syncEngine,e,0),i=Ay.D()?new Ay:new Sy,new Gy(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Wv(e,t,n,r,s,i);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return d(this,null,(function*(){var e,t;yield function(e){return d(this,null,(function*(){const t=Sd(e);bd(Ky,"RemoteStore shutting down."),t.W_.add(5),yield Yy(t),t.z_.shutdown(),t.j_.set("Unknown")}))}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}))}}g_.provider={build:()=>new g_};
/**
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
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):wd("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="FirestoreClient";class __{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=gd.UNAUTHENTICATED,this.clientId=Vd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(e=>d(this,null,(function*(){bd(v_,"Received user=",e.uid),yield this.authCredentialListener(e),this.user=e})))),this.appCheckCredentials.start(n,(e=>(bd(v_,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rd;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((()=>d(this,null,(function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Iv(t,"Failed to shutdown persistence");e.reject(n)}})))),e.promise}}function b_(e,t){return d(this,null,(function*(){e.asyncQueue.verifyOperationInProgress(),bd(v_,"Initializing OfflineComponentProvider");const n=e.configuration;yield t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((e=>d(this,null,(function*(){r.isEqual(e)||(yield vy(t.localStore,e),r=e)})))),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}))}function w_(e,t){return d(this,null,(function*(){e.asyncQueue.verifyOperationInProgress();const n=yield function(e){return d(this,null,(function*(){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){bd(v_,"Using user provided OfflineComponentProvider");try{yield b_(e,e._uninitializedComponentsProvider._offline)}catch(t){const s=t;if(!("FirebaseError"===(n=s).name?n.code===Cd.FAILED_PRECONDITION||n.code===Cd.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw s;Ed("Error using user provided cache. Falling back to memory cache: "+s),yield b_(e,new p_)}}else bd(v_,"Using default OfflineComponentProvider"),yield b_(e,new m_(void 0));var n;return e._offlineComponents}))}(e);bd(v_,"Initializing OnlineComponentProvider"),yield t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>bv(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>bv(t.remoteStore,n))),e._onlineComponents=t}))}function E_(e){return d(this,null,(function*(){return e._onlineComponents||(e._uninitializedComponentsProvider?(bd(v_,"Using user provided OnlineComponentProvider"),yield w_(e,e._uninitializedComponentsProvider._online)):(bd(v_,"Using default OnlineComponentProvider"),yield w_(e,new g_))),e._onlineComponents}))}function T_(e){return d(this,null,(function*(){const t=yield E_(e),n=t.eventManager;return n.onListen=Hv.bind(null,t.syncEngine),n.onUnlisten=Qv.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Kv.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Yv.bind(null,t.syncEngine),n}))}
/**
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
 */
function I_(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const k_=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(e,t,n){if(!n)throw new Ad(Cd.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function C_(e){if(!tf.isDocumentKey(e))throw new Ad(Cd.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function A_(e){if(tf.isDocumentKey(e))throw new Ad(Cd.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function R_(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Id()}function O_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ad(Cd.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=R_(e);throw new Ad(Cd.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */const N_="firestore.googleapis.com",x_=!0;class L_{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Ad(Cd.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=N_,this.ssl=x_}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:x_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=qg;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ad(Cd.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Ad(Cd.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=I_(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ad(Cd.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ad(Cd.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ad(Cd.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class D_{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ad(Cd.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ad(Cd.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Nd;switch(e.type){case"firstParty":return new Pd(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ad(Cd.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return d(this,null,(function*(){"notTerminated"===this._terminateTask?yield this._terminate():this._terminateTask="notTerminated"}))}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=k_.get(e);t&&(bd("ComponentProvider","Removing Datastore"),k_.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
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
 */
class P_{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new P_(this.firestore,e,this._query)}}class M_{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new F_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new M_(this.firestore,e,this._key)}}class F_ extends P_{constructor(e,t,n){super(e,t,Fp(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new M_(this.firestore,null,new tf(e))}withConverter(e){return new F_(this.firestore,e,this._path)}}function U_(e,t,...n){if(e=ba(e),S_("collection","path",t),e instanceof D_){const r=Xd.fromString(t,...n);return A_(r),new F_(e,null,r)}{if(!(e instanceof M_||e instanceof F_))throw new Ad(Cd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Xd.fromString(t,...n));return A_(r),new F_(e.firestore,null,r)}}function $_(e,t,...n){if(e=ba(e),1===arguments.length&&(t=Vd.newId()),S_("doc","path",t),e instanceof D_){const r=Xd.fromString(t,...n);return C_(r),new M_(e,null,new tf(r))}{if(!(e instanceof M_||e instanceof F_))throw new Ad(Cd.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Xd.fromString(t,...n));return C_(r),new M_(e.firestore,e instanceof F_?e.converter:null,new tf(r))}}
/**
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
 */const V_="AsyncQueue";class j_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new $y(this,"async_queue_retry"),this.Su=()=>{const e=Fy();e&&bd(V_,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;const t=Fy();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Fy();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise((()=>{}));const t=new Rd;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Vu.push(e),this.Cu())))}Cu(){return d(this,null,(function*(){if(0!==this.Vu.length){try{yield this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(qk){if(!cf(qk))throw qk;bd(V_,"Operation failed with retryable error: "+qk)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}))}vu(e){const t=this.bu.then((()=>(this.pu=!0,e().catch((e=>{this.gu=e,this.pu=!1;throw wd("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.pu=!1,e))))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const r=Tv.createAndSchedule(this,e,t,n,(e=>this.Fu(e)));return this.fu.push(r),r}Du(){this.gu&&Id()}verifyOperationInProgress(){}Mu(){return d(this,null,(function*(){let e;do{e=this.bu,yield e}while(e!==this.bu)}))}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then((()=>{this.fu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.fu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()}))}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class B_ extends D_{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new j_,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return d(this,null,(function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new j_(e),this._firestoreClient=void 0,yield e}}))}}function q_(e,t){const n="object"==typeof e?e:Fl(),r="string"==typeof e?e:Uf,s=Nl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=ra("firestore");e&&function(e,t,n,r={}){var s;const i=(e=O_(e,D_))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:e._getEmulatorOptions()}),a=`${t}:${n}`;i.host!==N_&&i.host!==a&&Ed("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:r});if(!fa(l,o)&&(e._setSettings(l),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=gd.MOCK_USER;else{t=aa(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new Ad(Cd.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new gd(i)}e._authCredentials=new xd(new Od(t,n))}}(s,...e)}return s}function z_(e){if(e._terminated)throw new Ad(Cd.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const s=e._freezeSettings(),i=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,c=s,new Ff(o,a,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,I_(c.experimentalLongPollingOptions),c.useFetchStreams));var o,a,l,c;e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new __(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
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
 */(e),e._firestoreClient}class W_{constructor(e){this._byteString=e}static fromBase64String(e){try{return new W_(kf.fromBase64String(e))}catch(t){throw new Ad(Cd.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new W_(kf.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class H_{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ad(Cd.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ef(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */class K_{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ad(Cd.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ad(Cd.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return jd(this._lat,e._lat)||jd(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=/^__.*__$/;class J_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Dm(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lm(e,this.data,t,this.fieldTransforms)}}class X_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Dm(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Z_(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Id()}}class eb{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new eb(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Uu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return db(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(Z_(this.Lu)&&Y_.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class tb{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Uy(e)}ju(e,t,n,r=!1){return new eb({Lu:e,methodName:t,zu:n,path:ef.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nb(e){const t=e._freezeSettings(),n=Uy(e._databaseId);return new tb(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rb(e,t,n,r,s,i={}){const o=e.ju(i.merge||i.mergeFields?2:0,t,n,s);lb("Data must be an object, but it was:",o,r);const a=ob(r,o);let l,c;if(i.merge)l=new Tf(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=cb(t,r,n);if(!o.contains(s))throw new Ad(Cd.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);fb(e,s)||e.push(s)}l=new Tf(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new J_(new ap(a),l,c)}class sb extends K_{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sb}}function ib(e,t){if(ab(e=ba(e)))return lb("Unsupported field value:",t,e),ob(e,t);if(e instanceof K_)return function(e,t){if(!Z_(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=ib(s,t.Ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=ba(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return hm(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Gd.fromDate(e);return{timestampValue:dg(t.serializer,n)}}if(e instanceof Gd){const n=new Gd(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:dg(t.serializer,n)}}if(e instanceof G_)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof W_)return{bytesValue:fg(t.serializer,e._byteString)};if(e instanceof M_){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:gg(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Q_)return n=e,r=t,{mapValue:{fields:{[Vf]:{stringValue:qf},[zf]:{arrayValue:{values:n.toArray().map((e=>{if("number"!=typeof e)throw r.Wu("VectorValues must only contain numeric values.");return cm(r.serializer,e)}))}}}}};var n,r;throw t.Wu(`Unsupported field value: ${R_(e)}`)}(e,t)}function ob(e,t){const n={};return yf(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):gf(e,((e,r)=>{const s=ib(r,t.qu(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function ab(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Gd||e instanceof G_||e instanceof W_||e instanceof M_||e instanceof K_||e instanceof Q_)}function lb(e,t,n){if(!ab(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=R_(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}var r}function cb(e,t,n){if((t=ba(t))instanceof H_)return t._internalPath;if("string"==typeof t)return hb(e,t);throw db("Field path arguments must be of type string or ",e,!1,void 0,n)}const ub=new RegExp("[~\\*/\\[\\]]");function hb(e,t,n){if(t.search(ub)>=0)throw db(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new H_(...t.split("."))._internalPath}catch(r){throw db(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function db(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Ad(Cd.INVALID_ARGUMENT,a+e+l)}function fb(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class pb{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new M_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new mb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gb("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class mb extends pb{data(){return super.data()}}function gb(e,t){return"string"==typeof t?hb(e,t):t instanceof H_?t._internalPath:t._delegate._internalPath}
/**
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
 */class yb{}class vb extends yb{}function _b(e,t,...n){let r=[];t instanceof yb&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Eb)).length,n=e.filter((e=>e instanceof bb)).length;if(t>1||t>0&&n>0)throw new Ad(Cd.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class bb extends vb{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new bb(e,t,n)}_apply(e){const t=this._parse(e);return Cb(e._query,t),new P_(e.firestore,e.converter,Bp(e._query,t))}_parse(e){const t=nb(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new Ad(Cd.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Sb(o,i);const t=[];for(const n of o)t.push(kb(r,e,n));a={arrayValue:{values:t}}}else a=kb(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Sb(o,i),a=function(e,t,n,r=!1){return ib(n,e.ju(r?4:3,t))}(n,t,o,"in"===i||"not-in"===i);return gp.create(s,i,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function wb(e,t,n){const r=t,s=gb("where",e);return bb._create(s,r,n)}class Eb extends yb{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Eb(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:yp.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const s of r)Cb(n,s),n=Bp(n,s)}(e._query,t),new P_(e.firestore,e.converter,Bp(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Tb extends vb{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tb(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Ad(Cd.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Ad(Cd.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fp(t,n)}(e._query,this._field,this._direction);return new P_(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Mp(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Ib(e,t="asc"){const n=t,r=gb("orderBy",e);return Tb._create(r,n)}function kb(e,t,n){if("string"==typeof(n=ba(n))){if(""===n)throw new Ad(Cd.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$p(t)&&-1!==n.indexOf("/"))throw new Ad(Cd.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Xd.fromString(n));if(!tf.isDocumentKey(r))throw new Ad(Cd.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ep(e,new tf(r))}if(n instanceof M_)return ep(e,n._key);throw new Ad(Cd.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${R_(n)}.`)}function Sb(e,t){if(!Array.isArray(e)||0===e.length)throw new Ad(Cd.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Cb(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Ad(Cd.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ad(Cd.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Ab{convertValue(e,t="none"){switch(Wf(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Af(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Rf(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Id()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return gf(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const s=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[zf].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Af(e.doubleValue)));return new Q_(s)}convertGeoPoint(e){return new G_(Af(e.latitude),Af(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Pf(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Mf(e));default:return null}}convertTimestamp(e){const t=Cf(e);return new Gd(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Xd.fromString(e);kd(Mg(n));const r=new $f(n.get(1),n.get(3)),s=new tf(n.popFirst(5));return r.isEqual(t)||wd(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
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
 */
/**
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
 */
class Rb{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ob extends pb{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nb(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(gb("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Nb extends Ob{data(e={}){return super.data(e)}}class xb{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Rb(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Nb(this._firestore,this._userDataWriter,n.key,n,new Rb(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ad(Cd.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Nb(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Rb(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Nb(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Rb(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Lb(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Lb(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Id()}}
/**
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
 */function Db(e){e=O_(e,M_);const t=O_(e.firestore,B_);return function(e,t,n={}){const r=new Rd;return e.asyncQueue.enqueueAndForget((()=>d(this,null,(function*(){return function(e,t,n,r,s){const i=new y_({next:a=>{i.su(),t.enqueueAndForget((()=>xv(e,o)));const l=a.docs.has(n);!l&&a.fromCache?s.reject(new Ad(Cd.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&r&&"server"===r.source?s.reject(new Ad(Cd.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:e=>s.reject(e)}),o=new Uv(Fp(n.path),i,{includeMetadataChanges:!0,Ta:!0});return Nv(e,o)}(yield T_(e),e.asyncQueue,t,n,r)})))),r.promise}(z_(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),s=new Pb(e);return new Ob(e,s,t._key,r,new Rb(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class Pb extends Ab{constructor(e){super(),this.firestore=e}convertBytes(e){return new W_(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new M_(this.firestore,null,t)}}function Mb(e){e=O_(e,P_);const t=O_(e.firestore,B_),n=z_(t),r=new Pb(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ad(Cd.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new Rd;return e.asyncQueue.enqueueAndForget((()=>d(this,null,(function*(){return function(e,t,n,r,s){const i=new y_({next:n=>{i.su(),t.enqueueAndForget((()=>xv(e,o))),n.fromCache&&"server"===r.source?s.reject(new Ad(Cd.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Uv(n,i,{includeMetadataChanges:!0,Ta:!0});return Nv(e,o)}(yield T_(e),e.asyncQueue,t,n,r)})))),r.promise}(n,e._query).then((n=>new xb(t,r,e,n)))}function Fb(e,t,n,...r){e=O_(e,M_);const s=O_(e.firestore,B_),i=nb(s);let o;return o="string"==typeof(t=ba(t))||t instanceof H_?function(e,t,n,r,s,i){const o=e.ju(1,t,n),a=[cb(t,r,n)],l=[s];if(i.length%2!=0)throw new Ad(Cd.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(cb(t,i[d])),l.push(i[d+1]);const c=[],u=ap.empty();for(let d=a.length-1;d>=0;--d)if(!fb(c,a[d])){const e=a[d];let t=l[d];t=ba(t);const n=o.Uu(e);if(t instanceof sb)c.push(e);else{const r=ib(t,n);null!=r&&(c.push(e),u.set(e,r))}}const h=new Tf(c);return new X_(u,h,o.fieldTransforms)}(i,"updateDoc",e._key,t,n,r):function(e,t,n,r){const s=e.ju(1,t,n);lb("Data must be an object, but it was:",s,r);const i=[],o=ap.empty();gf(r,((e,r)=>{const a=hb(t,e,n);r=ba(r);const l=s.Uu(a);if(r instanceof sb)i.push(a);else{const e=ib(r,l);null!=e&&(i.push(a),o.set(a,e))}}));const a=new Tf(i);return new X_(o,a,s.fieldTransforms)}(i,"updateDoc",e._key,t),$b(s,[o.toMutation(e._key,km.exists(!0))])}function Ub(e,t){const n=O_(e.firestore,B_),r=$_(e),s=function(e,t){let n;return n=e?e.toFirestore(t):t,n}(e.converter,t);return $b(n,[rb(nb(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,km.exists(!1))]).then((()=>r))}function $b(e,t){return function(e,t){const n=new Rd;return e.asyncQueue.enqueueAndForget((()=>d(this,null,(function*(){return Jv(yield function(e){return E_(e).then((e=>e.syncEngine))}(e),t,n)})))),n.promise}(z_(e),t)}!function(e,t=!0){yd=Pl,Ol(new wa("firestore",((e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new B_(new Ld(e.getProvider("auth-internal")),new Fd(s,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ad(Cd.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $f(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i}),"PUBLIC").setMultipleInstances(!0)),Ul(pd,md,e),Ul(pd,md,"esm2017")}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vb="firebasestorage.googleapis.com",jb="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bb extends ua{constructor(e,t,n=0){super(Kb(e),`Firebase Storage: ${t} (${Kb(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Bb.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kb(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var qb,zb,Wb,Hb;function Kb(e){return"storage/"+e}function Gb(){return new Bb(qb.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Qb(e){return new Bb(qb.INVALID_ARGUMENT,e)}function Yb(){return new Bb(qb.APP_DELETED,"The Firebase app was deleted.")}function Jb(e,t){return new Bb(qb.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Xb(e){throw new Bb(qb.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(zb=qb||(qb={})).UNKNOWN="unknown",zb.OBJECT_NOT_FOUND="object-not-found",zb.BUCKET_NOT_FOUND="bucket-not-found",zb.PROJECT_NOT_FOUND="project-not-found",zb.QUOTA_EXCEEDED="quota-exceeded",zb.UNAUTHENTICATED="unauthenticated",zb.UNAUTHORIZED="unauthorized",zb.UNAUTHORIZED_APP="unauthorized-app",zb.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",zb.INVALID_CHECKSUM="invalid-checksum",zb.CANCELED="canceled",zb.INVALID_EVENT_NAME="invalid-event-name",zb.INVALID_URL="invalid-url",zb.INVALID_DEFAULT_BUCKET="invalid-default-bucket",zb.NO_DEFAULT_BUCKET="no-default-bucket",zb.CANNOT_SLICE_BLOB="cannot-slice-blob",zb.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",zb.NO_DOWNLOAD_URL="no-download-url",zb.INVALID_ARGUMENT="invalid-argument",zb.INVALID_ARGUMENT_COUNT="invalid-argument-count",zb.APP_DELETED="app-deleted",zb.INVALID_ROOT_OPERATION="invalid-root-operation",zb.INVALID_FORMAT="invalid-format",zb.INTERNAL_ERROR="internal-error",zb.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class Zb{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=Zb.makeFromUrl(e,t)}catch(qk){return new Zb(e,"")}if(""===n.path)return n;throw r=e,new Bb(qb.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+r+"'.");var r}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+r+"(/(.*))?$","i");function i(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${t===Vb?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let l=0;l<a.length;l++){const t=a[l],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let s=r[t.indices.path];s||(s=""),n=new Zb(e,s),t.postModify(n);break}}if(null==n)throw function(e){return new Bb(qb.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class ew{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(e){return"string"==typeof e||e instanceof String}function nw(e){return rw()&&e instanceof Blob}function rw(){return"undefined"!=typeof Blob}function sw(e,t,n,r){if(r<t)throw Qb(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Qb(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function ow(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}(Hb=Wb||(Wb={}))[Hb.NO_ERROR=0]="NO_ERROR",Hb[Hb.NETWORK_ERROR=1]="NETWORK_ERROR",Hb[Hb.ABORT=2]="ABORT";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aw{constructor(e,t,n,r,s,i,o,a,l,c,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new lw(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===Wb.NO_ERROR,s=n.getStatus();if(!t||
/**
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
 */
function(e,t){const n=e>=500&&e<600,r=-1!==[408,429].indexOf(e),s=-1!==t.indexOf(e);return n||r||s}(s,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===Wb.ABORT;return void e(!1,new lw(!1,null,t))}const i=-1!==this.successCodes_.indexOf(s);e(!0,new lw(i,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,s=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(s,s.getResponse());!
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){return void 0!==e}(e)?n():n(e)}catch(qk){r(qk)}else if(null!==s){const e=Gb();e.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,e)):r(e)}else if(t.canceled){r(this.appDelete_?Yb():new Bb(qb.CANCELED,"User canceled the upload/download."))}else{r(new Bb(qb.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new lw(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function h(t){s=setTimeout((()=>{s=null,e(f,l())}),t)}function d(){i&&clearTimeout(i)}function f(e,...t){if(c)return void d();if(e)return d(),void u.call(null,e,...t);if(l()||o)return d(),void u.call(null,e,...t);let n;r<64&&(r*=2),1===a?(a=2,n=0):n=1e3*(r+Math.random()),h(n)}let p=!1;function m(e){p||(p=!0,d(),c||(null!==s?(e||(a=2),clearTimeout(s),h(0)):e||(a=1)))}return h(0),i=setTimeout((()=>{o=!0,m(!0)}),n),m}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class lw{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function cw(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(rw())return new Blob(e);throw new Bb(qb.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}
/**
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
 */
function uw(e){if("undefined"==typeof atob)throw t="base-64",new Bb(qb.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`);var t;return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hw="raw",dw="base64",fw="base64url",pw="data_url";class mw{constructor(e,t){this.data=e,this.contentType=t||null}}function gw(e,t){switch(e){case hw:return new mw(yw(t));case dw:case fw:return new mw(vw(e,t));case pw:return new mw(function(e){const t=new _w(e);return t.base64?vw(dw,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(qk){throw Jb(pw,"Malformed data URL.")}return yw(t)}(t.rest)}(t),new _w(t).contentType)}throw Gb()}function yw(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function vw(e,t){switch(e){case dw:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw Jb(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case fw:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw Jb(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=uw(t)}catch(qk){if(qk.message.includes("polyfill"))throw qk;throw Jb(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class _w{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw Jb(pw,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=e.substring(e.indexOf(",")+1)}}class bw{constructor(e,t){let n=0,r="";nw(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(nw(this.data_)){const i=this.data_,o=(r=e,s=t,(n=i).webkitSlice?n.webkitSlice(r,s):n.mozSlice?n.mozSlice(r,s):n.slice?n.slice(r,s):null);return null===o?null:new bw(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new bw(n,!0)}var n,r,s}static getBlob(...e){if(rw()){const t=e.map((e=>e instanceof bw?e.data_:e));return new bw(cw.apply(null,t))}{const t=e.map((e=>tw(e)?gw(hw,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let s=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[s++]=e[t]})),new bw(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(e){let t;try{t=JSON.parse(e)}catch(qk){return null}return function(e){return"object"==typeof e&&!Array.isArray(e)}(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(e,t){return t}class Iw{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||Tw}}let kw=null;function Sw(){if(kw)return kw;const e=[];e.push(new Iw("bucket")),e.push(new Iw("generation")),e.push(new Iw("metageneration")),e.push(new Iw("name","fullPath",!0));const t=new Iw("name");t.xform=function(e,t){return function(e){return!tw(e)||e.length<2?e:Ew(e)}(t)},e.push(t);const n=new Iw("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new Iw("timeCreated")),e.push(new Iw("updated")),e.push(new Iw("md5Hash",null,!0)),e.push(new Iw("cacheControl",null,!0)),e.push(new Iw("contentDisposition",null,!0)),e.push(new Iw("contentEncoding",null,!0)),e.push(new Iw("contentLanguage",null,!0)),e.push(new Iw("contentType",null,!0)),e.push(new Iw("metadata","customMetadata",!0)),kw=e,kw}function Cw(e,t,n){const r={type:"file"},s=n.length;for(let i=0;i<s;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,s=new Zb(n,r);return t._makeStorageReference(s)}})}(r,e),r}function Aw(e,t,n){const r=ww(t);if(null===r)return null;return Cw(e,r,n)}class Rw{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(e){if(!e)throw Gb()}function Nw(e,t){return function(n,r){const s=Aw(e,r,t);return Ow(null!==s),function(e,t,n,r){const s=ww(t);if(null===s)return null;if(!tw(s.downloadTokens))return null;const i=s.downloadTokens;if(0===i.length)return null;const o=encodeURIComponent;return i.split(",").map((t=>{const s=e.bucket,i=e.fullPath;return iw("/b/"+o(s)+"/o/"+o(i),n,r)+ow({alt:"media",token:t})}))[0]}(s,r,e.host,e._protocol)}}function xw(e){return function(t,n){let r;var s,i;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new Bb(qb.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new Bb(qb.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(i=e.bucket,r=new Bb(qb.QUOTA_EXCEEDED,"Quota for bucket '"+i+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(s=e.path,r=new Bb(qb.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):r=n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}}function Lw(e){const t=xw(e);return function(n,r){let s=t(n,r);var i;return 404===n.getStatus()&&(i=e.path,s=new Bb(qb.OBJECT_NOT_FOUND,"Object '"+i+"' does not exist.")),s.serverResponse=r.serverResponse,s}}function Dw(e,t,n,r,s){const i=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=function(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}(t,r,s),c=function(e,t){const n={},r=t.length;for(let s=0;s<r;s++){const r=t[s];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}(l,n),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",h="\r\n--"+a+"--",d=bw.getBlob(u,r,h);if(null===d)throw new Bb(qb.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");const f={name:l.fullPath},p=iw(i,e.host,e._protocol),m=e.maxUploadRetryTime,g=new Rw(p,"POST",function(e,t){return function(n,r){const s=Aw(e,r,t);return Ow(null!==s),s}}(e,n),m);return g.urlParams=f,g.headers=o,g.body=d.uploadData(),g.errorHandler=xw(t),g}class Pw{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wb.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Wb.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Wb.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw Xb("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const s in r)r.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,r[s].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xb("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xb("cannot .getStatus() before sending");try{return this.xhr_.status}catch(qk){return-1}}getResponse(){if(!this.sent_)throw Xb("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xb("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class Mw extends Pw{initXhr(){this.xhr_.responseType="text"}}function Fw(){return new Mw}
/**
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
 */class Uw{constructor(e,t){this._service=e,this._location=t instanceof Zb?t:Zb.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Uw(e,t)}get root(){const e=new Zb(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ew(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new Zb(this._location.bucket,e);return new Uw(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new Bb(qb.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}function $w(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=iw(t.fullServerUrl(),e.host,e._protocol),s=e.maxOperationRetryTime,i=new Rw(r,"GET",Nw(e,n),s);return i.errorHandler=Lw(t),i}(e.storage,e._location,Sw());return e.storage.makeRequestWithTokens(t,Fw).then((e=>{if(null===e)throw new Bb(qb.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return e}))}function Vw(e,t){if(e instanceof qw){const n=e;if(null==n._bucket)throw new Bb(qb.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jb+"' property when initializing the app?");const r=new Uw(n,n._bucket);return null!=t?Vw(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new Zb(e._location.bucket,n);return new Uw(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function jw(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof qw)return new Uw(e,t);throw Qb("To use ref(service, url), the first argument must be a Storage instance.")}return Vw(e,t)}function Bw(e,t){const n=null==t?void 0:t[jb];return null==n?null:Zb.makeFromBucketSpec(n,e)}class qw{constructor(e,t,n,r,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=Vb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?Zb.makeFromBucketSpec(r,this._host):Bw(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=Zb.makeFromBucketSpec(this._url,e):this._bucket=Bw(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){sw("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){sw("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return d(this,null,(function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(null!==t)return t.accessToken}return null}))}_getAppCheckToken(){return d(this,null,(function*(){if(xl(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(yield e.getToken()).token}return null}))}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Uw(this,e)}_makeRequest(e,t,n,r,s=!0){if(this._deleted)return new ew(Yb());{const i=function(e,t,n,r,s,i,o=!0){const a=ow(e.urlParams),l=e.url+a,c=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(c,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(c,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(c,i),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(c,r),new aw(l,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,n,r,t,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then((()=>this._requests.delete(i)),(()=>this._requests.delete(i))),i}}makeRequestWithTokens(e,t){return d(this,null,(function*(){const[n,r]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}))}}const zw="@firebase/storage",Ww="0.13.7",Hw="storage";function Kw(e,t,n){return function(e,t,n){e._throwIfRoot("uploadBytes");const r=Dw(e.storage,e._location,Sw(),new bw(t,!0),n);return e.storage.makeRequestWithTokens(r,Fw).then((t=>({metadata:t,ref:e})))}(e=ba(e),t,n)}function Gw(e){return $w(e=ba(e))}function Qw(e,t){return jw(e=ba(e),t)}function Yw(e=Fl(),t){const n=Nl(e=ba(e),Hw).getImmediate({identifier:t}),r=ra("storage");return r&&function(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"==typeof s?s:aa(s,e.app.options.projectId))}(e,t,n,r)}(n,...r),n}function Jw(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new qw(n,r,s,t,Pl)}Ol(new wa(Hw,Jw,"PUBLIC").setMultipleInstances(!0)),Ul(zw,Ww,""),Ul(zw,Ww,"esm2017");
/*!
  * shared v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Xw="undefined"!=typeof window,Zw=(e,t=!1)=>t?Symbol.for(e):Symbol(e),eE=e=>JSON.stringify(e).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),tE=e=>"number"==typeof e&&isFinite(e),nE=e=>"[object RegExp]"===vE(e),rE=e=>_E(e)&&0===Object.keys(e).length,sE=Object.assign,iE=Object.create,oE=(e=null)=>iE(e);let aE;const lE=()=>aE||(aE="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:oE());function cE(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const uE=Object.prototype.hasOwnProperty;function hE(e,t){return uE.call(e,t)}const dE=Array.isArray,fE=e=>"function"==typeof e,pE=e=>"string"==typeof e,mE=e=>"boolean"==typeof e,gE=e=>null!==e&&"object"==typeof e,yE=Object.prototype.toString,vE=e=>yE.call(e),_E=e=>"[object Object]"===vE(e);function bE(e,t=""){return e.reduce(((e,n,r)=>0===r?e+n:e+t+n),"")}function wE(e,t){}const EE=e=>!gE(e)||dE(e);function TE(e,t){if(EE(e)||EE(t))throw new Error("Invalid value");const n=[{src:e,des:t}];for(;n.length;){const{src:e,des:t}=n.pop();Object.keys(e).forEach((r=>{"__proto__"!==r&&(gE(e[r])&&!gE(t[r])&&(t[r]=Array.isArray(e[r])?[]:oE()),EE(t[r])||EE(e[r])?t[r]=e[r]:n.push({src:e[r],des:t[r]}))}))}}
/*!
  * message-compiler v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function IE(e,t,n){return{start:e,end:t}}const kE=1,SE=2,CE=3,AE=4,RE=5,OE=6,NE=7,xE=8,LE=9,DE=10,PE=11,ME=12,FE=13,UE=14;function $E(e,t,n={}){const{domain:r,messages:s,args:i}=n,o=new SyntaxError(String(e));return o.code=e,t&&(o.location=t),o.domain=r,o}function VE(e){throw e}const jE=" ",BE="\n",qE=String.fromCharCode(8232),zE=String.fromCharCode(8233);function WE(e){const t=e;let n=0,r=1,s=1,i=0;const o=e=>"\r"===t[e]&&t[e+1]===BE,a=e=>t[e]===zE,l=e=>t[e]===qE,c=e=>o(e)||(e=>t[e]===BE)(e)||a(e)||l(e),u=e=>o(e)||a(e)||l(e)?BE:t[e];function h(){return i=0,c(n)&&(r++,s=0),o(n)&&n++,n++,s++,t[n]}return{index:()=>n,line:()=>r,column:()=>s,peekOffset:()=>i,charAt:u,currentChar:()=>u(n),currentPeek:()=>u(n+i),next:h,peek:function(){return o(n+i)&&i++,i++,t[n+i]},reset:function(){n=0,r=1,s=1,i=0},resetPeek:function(e=0){i=e},skipToPeek:function(){const e=n+i;for(;e!==n;)h();i=0}}}const HE=void 0;function KE(e,t={}){const n=!1!==t.location,r=WE(e),s=()=>r.index(),i=()=>{return e=r.line(),t=r.column(),n=r.index(),{line:e,column:t,offset:n};var e,t,n},o=i(),a=s(),l={currentType:13,offset:a,startLoc:o,endLoc:o,lastType:13,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=t;function h(e,t,r,...s){const i=c();if(t.column+=r,t.offset+=r,u){const r=$E(e,n?IE(i.startLoc,t):null,{domain:"tokenizer",args:s});u(r)}}function d(e,t,r){e.endLoc=i(),e.currentType=t;const s={type:t};return n&&(s.loc=IE(e.startLoc,e.endLoc)),null!=r&&(s.value=r),s}const f=e=>d(e,13);function p(e,t){return e.currentChar()===t?(e.next(),t):(h(kE,i(),0,t),"")}function m(e){let t="";for(;e.currentPeek()===jE||e.currentPeek()===BE;)t+=e.currentPeek(),e.peek();return t}function g(e){const t=m(e);return e.skipToPeek(),t}function y(e){if(e===HE)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||95===t}function v(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=function(e){if(e===HE)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}("-"===e.currentPeek()?e.peek():e.currentPeek());return e.resetPeek(),r}function _(e){m(e);const t="|"===e.currentPeek();return e.resetPeek(),t}function b(e,t=!0){const n=(t=!1,r="")=>{const s=e.currentPeek();return"{"===s?t:"@"!==s&&s?"|"===s?!(r===jE||r===BE):s===jE?(e.peek(),n(!0,jE)):s!==BE||(e.peek(),n(!0,BE)):t},r=n();return t&&e.resetPeek(),r}function w(e,t){const n=e.currentChar();return n===HE?HE:t(n)?(e.next(),n):null}function E(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t}function T(e){return w(e,E)}function I(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||95===t||36===t||45===t}function k(e){return w(e,I)}function S(e){const t=e.charCodeAt(0);return t>=48&&t<=57}function C(e){return w(e,S)}function A(e){const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function R(e){return w(e,A)}function O(e){let t="",n="";for(;t=C(e);)n+=t;return n}function N(e){return"'"!==e&&e!==BE}function x(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return L(e,t,4);case"U":return L(e,t,6);default:return h(AE,i(),0,t),""}}function L(e,t,n){p(e,t);let r="";for(let s=0;s<n;s++){const n=R(e);if(!n){h(RE,i(),0,`\\${t}${r}${e.currentChar()}`);break}r+=n}return`\\${t}${r}`}function D(e){return"{"!==e&&"}"!==e&&e!==jE&&e!==BE}function P(e){g(e);const t=p(e,"|");return g(e),t}function M(e,t){let n=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&h(LE,i(),0),e.next(),n=d(t,2,"{"),g(e),t.braceNest++,n;case"}":return t.braceNest>0&&2===t.currentType&&h(xE,i(),0),e.next(),n=d(t,3,"}"),t.braceNest--,t.braceNest>0&&g(e),t.inLinked&&0===t.braceNest&&(t.inLinked=!1),n;case"@":return t.braceNest>0&&h(NE,i(),0),n=F(e,t)||f(t),t.braceNest=0,n;default:{let r=!0,s=!0,o=!0;if(_(e))return t.braceNest>0&&h(NE,i(),0),n=d(t,1,P(e)),t.braceNest=0,t.inLinked=!1,n;if(t.braceNest>0&&(4===t.currentType||5===t.currentType||6===t.currentType))return h(NE,i(),0),t.braceNest=0,U(e,t);if(r=function(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r=y(e.currentPeek());return e.resetPeek(),r}(e,t))return n=d(t,4,function(e){g(e);let t="",n="";for(;t=k(e);)n+=t;return e.currentChar()===HE&&h(NE,i(),0),n}(e)),g(e),n;if(s=v(e,t))return n=d(t,5,function(e){g(e);let t="";return"-"===e.currentChar()?(e.next(),t+=`-${O(e)}`):t+=O(e),e.currentChar()===HE&&h(NE,i(),0),t}(e)),g(e),n;if(o=function(e,t){const{currentType:n}=t;if(2!==n)return!1;m(e);const r="'"===e.currentPeek();return e.resetPeek(),r}(e,t))return n=d(t,6,function(e){g(e),p(e,"'");let t="",n="";for(;t=w(e,N);)n+="\\"===t?x(e):t;const r=e.currentChar();return r===BE||r===HE?(h(CE,i(),0),r===BE&&(e.next(),p(e,"'")),n):(p(e,"'"),n)}(e)),g(e),n;if(!r&&!s&&!o)return n=d(t,12,function(e){g(e);let t="",n="";for(;t=w(e,D);)n+=t;return n}(e)),h(SE,i(),0,n.value),g(e),n;break}}return n}function F(e,t){const{currentType:n}=t;let r=null;const s=e.currentChar();switch(7!==n&&8!==n&&11!==n&&9!==n||s!==BE&&s!==jE||h(DE,i(),0),s){case"@":return e.next(),r=d(t,7,"@"),t.inLinked=!0,r;case".":return g(e),e.next(),d(t,8,".");case":":return g(e),e.next(),d(t,9,":");default:return _(e)?(r=d(t,1,P(e)),t.braceNest=0,t.inLinked=!1,r):function(e,t){const{currentType:n}=t;if(7!==n)return!1;m(e);const r="."===e.currentPeek();return e.resetPeek(),r}(e,t)||function(e,t){const{currentType:n}=t;if(7!==n&&11!==n)return!1;m(e);const r=":"===e.currentPeek();return e.resetPeek(),r}(e,t)?(g(e),F(e,t)):function(e,t){const{currentType:n}=t;if(8!==n)return!1;m(e);const r=y(e.currentPeek());return e.resetPeek(),r}(e,t)?(g(e),d(t,11,function(e){let t="",n="";for(;t=T(e);)n+=t;return n}(e))):function(e,t){const{currentType:n}=t;if(9!==n)return!1;const r=()=>{const t=e.currentPeek();return"{"===t?y(e.peek()):!("@"===t||"|"===t||":"===t||"."===t||t===jE||!t)&&(t===BE?(e.peek(),r()):b(e,!1))},s=r();return e.resetPeek(),s}(e,t)?(g(e),"{"===s?M(e,t)||r:d(t,10,function(e){const t=n=>{const r=e.currentChar();return"{"!==r&&"@"!==r&&"|"!==r&&"("!==r&&")"!==r&&r?r===jE?n:(n+=r,e.next(),t(n)):n};return t("")}(e))):(7===n&&h(DE,i(),0),t.braceNest=0,t.inLinked=!1,U(e,t))}}function U(e,t){let n={type:13};if(t.braceNest>0)return M(e,t)||f(t);if(t.inLinked)return F(e,t)||f(t);switch(e.currentChar()){case"{":return M(e,t)||f(t);case"}":return h(OE,i(),0),e.next(),d(t,3,"}");case"@":return F(e,t)||f(t);default:if(_(e))return n=d(t,1,P(e)),t.braceNest=0,t.inLinked=!1,n;if(b(e))return d(t,0,function(e){let t="";for(;;){const n=e.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if(n===jE||n===BE)if(b(e))t+=n,e.next();else{if(_(e))break;t+=n,e.next()}else t+=n,e.next()}return t}(e))}return n}return{nextToken:function(){const{currentType:e,offset:t,startLoc:n,endLoc:o}=l;return l.lastType=e,l.lastOffset=t,l.lastStartLoc=n,l.lastEndLoc=o,l.offset=s(),l.startLoc=i(),r.currentChar()===HE?d(l,13):U(r,l)},currentOffset:s,currentPosition:i,context:c}}const GE=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function QE(e,t,n){switch(e){case"\\\\":return"\\";case"\\'":return"'";default:{const e=parseInt(t||n,16);return e<=55295||e>=57344?String.fromCodePoint(e):"�"}}}function YE(e={}){const t=!1!==e.location,{onError:n}=e;function r(e,r,s,i,...o){const a=e.currentPosition();if(a.offset+=i,a.column+=i,n){const e=$E(r,t?IE(s,a):null,{domain:"parser",args:o});n(e)}}function s(e,n,r){const s={type:e};return t&&(s.start=n,s.end=n,s.loc={start:r,end:r}),s}function i(e,n,r,s){t&&(e.end=n,e.loc&&(e.loc.end=r))}function o(e,t){const n=e.context(),r=s(3,n.offset,n.startLoc);return r.value=t,i(r,e.currentOffset(),e.currentPosition()),r}function a(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=s(5,r,o);return a.index=parseInt(t,10),e.nextToken(),i(a,e.currentOffset(),e.currentPosition()),a}function l(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=s(4,r,o);return a.key=t,e.nextToken(),i(a,e.currentOffset(),e.currentPosition()),a}function c(e,t){const n=e.context(),{lastOffset:r,lastStartLoc:o}=n,a=s(9,r,o);return a.value=t.replace(GE,QE),e.nextToken(),i(a,e.currentOffset(),e.currentPosition()),a}function u(e){const t=e.context(),n=s(6,t.offset,t.startLoc);let o=e.nextToken();if(8===o.type){const t=function(e){const t=e.nextToken(),n=e.context(),{lastOffset:o,lastStartLoc:a}=n,l=s(8,o,a);return 11!==t.type?(r(e,ME,n.lastStartLoc,0),l.value="",i(l,o,a),{nextConsumeToken:t,node:l}):(null==t.value&&r(e,UE,n.lastStartLoc,0,JE(t)),l.value=t.value||"",i(l,e.currentOffset(),e.currentPosition()),{node:l})}(e);n.modifier=t.node,o=t.nextConsumeToken||e.nextToken()}switch(9!==o.type&&r(e,UE,t.lastStartLoc,0,JE(o)),o=e.nextToken(),2===o.type&&(o=e.nextToken()),o.type){case 10:null==o.value&&r(e,UE,t.lastStartLoc,0,JE(o)),n.key=function(e,t){const n=e.context(),r=s(7,n.offset,n.startLoc);return r.value=t,i(r,e.currentOffset(),e.currentPosition()),r}(e,o.value||"");break;case 4:null==o.value&&r(e,UE,t.lastStartLoc,0,JE(o)),n.key=l(e,o.value||"");break;case 5:null==o.value&&r(e,UE,t.lastStartLoc,0,JE(o)),n.key=a(e,o.value||"");break;case 6:null==o.value&&r(e,UE,t.lastStartLoc,0,JE(o)),n.key=c(e,o.value||"");break;default:{r(e,FE,t.lastStartLoc,0);const a=e.context(),l=s(7,a.offset,a.startLoc);return l.value="",i(l,a.offset,a.startLoc),n.key=l,i(n,a.offset,a.startLoc),{nextConsumeToken:o,node:n}}}return i(n,e.currentOffset(),e.currentPosition()),{node:n}}function h(e){const t=e.context(),n=s(2,1===t.currentType?e.currentOffset():t.offset,1===t.currentType?t.endLoc:t.startLoc);n.items=[];let h=null;do{const s=h||e.nextToken();switch(h=null,s.type){case 0:null==s.value&&r(e,UE,t.lastStartLoc,0,JE(s)),n.items.push(o(e,s.value||""));break;case 5:null==s.value&&r(e,UE,t.lastStartLoc,0,JE(s)),n.items.push(a(e,s.value||""));break;case 4:null==s.value&&r(e,UE,t.lastStartLoc,0,JE(s)),n.items.push(l(e,s.value||""));break;case 6:null==s.value&&r(e,UE,t.lastStartLoc,0,JE(s)),n.items.push(c(e,s.value||""));break;case 7:{const t=u(e);n.items.push(t.node),h=t.nextConsumeToken||null;break}}}while(13!==t.currentType&&1!==t.currentType);return i(n,1===t.currentType?t.lastOffset:e.currentOffset(),1===t.currentType?t.lastEndLoc:e.currentPosition()),n}function d(e){const t=e.context(),{offset:n,startLoc:o}=t,a=h(e);return 13===t.currentType?a:function(e,t,n,o){const a=e.context();let l=0===o.items.length;const c=s(1,t,n);c.cases=[],c.cases.push(o);do{const t=h(e);l||(l=0===t.items.length),c.cases.push(t)}while(13!==a.currentType);return l&&r(e,PE,n,0),i(c,e.currentOffset(),e.currentPosition()),c}(e,n,o,a)}return{parse:function(n){const o=KE(n,sE({},e)),a=o.context(),l=s(0,a.offset,a.startLoc);return t&&l.loc&&(l.loc.source=n),l.body=d(o),e.onCacheKey&&(l.cacheKey=e.onCacheKey(n)),13!==a.currentType&&r(o,UE,a.lastStartLoc,0,n[a.offset]||""),i(l,o.currentOffset(),o.currentPosition()),l}}}function JE(e){if(13===e.type)return"EOF";const t=(e.value||"").replace(/\r?\n/gu,"\\n");return t.length>10?t.slice(0,9)+"…":t}function XE(e,t){for(let n=0;n<e.length;n++)ZE(e[n],t)}function ZE(e,t){switch(e.type){case 1:XE(e.cases,t),t.helper("plural");break;case 2:XE(e.items,t);break;case 6:ZE(e.key,t),t.helper("linked"),t.helper("type");break;case 5:t.helper("interpolate"),t.helper("list");break;case 4:t.helper("interpolate"),t.helper("named")}}function eT(e,t={}){const n=function(e){const t={ast:e,helpers:new Set};return{context:()=>t,helper:e=>(t.helpers.add(e),e)}}(e);n.helper("normalize"),e.body&&ZE(e.body,n);const r=n.context();e.helpers=Array.from(r.helpers)}function tT(e){if(1===e.items.length){const t=e.items[0];3!==t.type&&9!==t.type||(e.static=t.value,delete t.value)}else{const t=[];for(let n=0;n<e.items.length;n++){const r=e.items[n];if(3!==r.type&&9!==r.type)break;if(null==r.value)break;t.push(r.value)}if(t.length===e.items.length){e.static=bE(t);for(let t=0;t<e.items.length;t++){const n=e.items[t];3!==n.type&&9!==n.type||delete n.value}}}}function nT(e){switch(e.t=e.type,e.type){case 0:{const t=e;nT(t.body),t.b=t.body,delete t.body;break}case 1:{const t=e,n=t.cases;for(let e=0;e<n.length;e++)nT(n[e]);t.c=n,delete t.cases;break}case 2:{const t=e,n=t.items;for(let e=0;e<n.length;e++)nT(n[e]);t.i=n,delete t.items,t.static&&(t.s=t.static,delete t.static);break}case 3:case 9:case 8:case 7:{const t=e;t.value&&(t.v=t.value,delete t.value);break}case 6:{const t=e;nT(t.key),t.k=t.key,delete t.key,t.modifier&&(nT(t.modifier),t.m=t.modifier,delete t.modifier);break}case 5:{const t=e;t.i=t.index,delete t.index;break}case 4:{const t=e;t.k=t.key,delete t.key;break}}delete e.type}function rT(e,t){const{helper:n}=e;switch(t.type){case 0:!function(e,t){t.body?rT(e,t.body):e.push("null")}(e,t);break;case 1:!function(e,t){const{helper:n,needIndent:r}=e;if(t.cases.length>1){e.push(`${n("plural")}([`),e.indent(r());const s=t.cases.length;for(let n=0;n<s&&(rT(e,t.cases[n]),n!==s-1);n++)e.push(", ");e.deindent(r()),e.push("])")}}(e,t);break;case 2:!function(e,t){const{helper:n,needIndent:r}=e;e.push(`${n("normalize")}([`),e.indent(r());const s=t.items.length;for(let i=0;i<s&&(rT(e,t.items[i]),i!==s-1);i++)e.push(", ");e.deindent(r()),e.push("])")}(e,t);break;case 6:!function(e,t){const{helper:n}=e;e.push(`${n("linked")}(`),rT(e,t.key),t.modifier?(e.push(", "),rT(e,t.modifier),e.push(", _type")):e.push(", undefined, _type"),e.push(")")}(e,t);break;case 8:case 7:case 9:case 3:e.push(JSON.stringify(t.value),t);break;case 5:e.push(`${n("interpolate")}(${n("list")}(${t.index}))`,t);break;case 4:e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`,t)}}function sT(e,t={}){const n=sE({},t),r=!!n.jit,s=!!n.minify,i=null==n.optimize||n.optimize,o=YE(n).parse(e);return r?(i&&function(e){const t=e.body;2===t.type?tT(t):t.cases.forEach((e=>tT(e)))}(o),s&&nT(o),{ast:o,code:""}):(eT(o,n),((e,t={})=>{const n=pE(t.mode)?t.mode:"normal",r=pE(t.filename)?t.filename:"message.intl";t.sourceMap;const s=null!=t.breakLineCode?t.breakLineCode:"arrow"===n?";":"\n",i=t.needIndent?t.needIndent:"arrow"!==n,o=e.helpers||[],a=function(e,t){const{filename:n,breakLineCode:r,needIndent:s}=t,i=!1!==t.location,o={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:r,needIndent:s,indentLevel:0};function a(e,t){o.code+=e}function l(e,t=!0){const n=t?r:"";a(s?n+"  ".repeat(e):n)}return i&&e.loc&&(o.source=e.loc.source),{context:()=>o,push:a,indent:function(e=!0){const t=++o.indentLevel;e&&l(t)},deindent:function(e=!0){const t=--o.indentLevel;e&&l(t)},newline:function(){l(o.indentLevel)},helper:e=>`_${e}`,needIndent:()=>o.needIndent}}(e,{filename:r,breakLineCode:s,needIndent:i});a.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),a.indent(i),o.length>0&&(a.push(`const { ${bE(o.map((e=>`${e}: _${e}`)),", ")} } = ctx`),a.newline()),a.push("return "),rT(a,e),a.deindent(i),a.push("}"),delete e.helpers;const{code:l,map:c}=a.context();return{ast:e,code:l,map:c?c.toJSON():void 0}})(o,n))}
/*!
  * core-base v11.1.2
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function iT(e){return t=>function(e,t){const n=(r=t,vT(r,oT));var r;if(null==n)throw _T(0);if(1===fT(n)){const t=function(e){return vT(e,aT,[])}(n);return e.plural(t.reduce(((t,n)=>[...t,lT(e,n)]),[]))}return lT(e,n)}(t,e)}const oT=["b","body"];const aT=["c","cases"];function lT(e,t){const n=function(e){return vT(e,cT)}(t);if(null!=n)return"text"===e.type?n:e.normalize([n]);{const n=function(e){return vT(e,uT,[])}(t).reduce(((t,n)=>[...t,hT(e,n)]),[]);return e.normalize(n)}}const cT=["s","static"];const uT=["i","items"];function hT(e,t){const n=fT(t);switch(n){case 3:case 9:case 7:case 8:return mT(t,n);case 4:{const r=t;if(hE(r,"k")&&r.k)return e.interpolate(e.named(r.k));if(hE(r,"key")&&r.key)return e.interpolate(e.named(r.key));throw _T(n)}case 5:{const r=t;if(hE(r,"i")&&tE(r.i))return e.interpolate(e.list(r.i));if(hE(r,"index")&&tE(r.index))return e.interpolate(e.list(r.index));throw _T(n)}case 6:{const n=t,r=function(e){return vT(e,gT)}(n),s=function(e){const t=vT(e,yT);if(t)return t;throw _T(6)}(n);return e.linked(hT(e,s),r?hT(e,r):void 0,e.type)}default:throw new Error(`unhandled node on format message part: ${n}`)}}const dT=["t","type"];function fT(e){return vT(e,dT)}const pT=["v","value"];function mT(e,t){const n=vT(e,pT);if(n)return n;throw _T(t)}const gT=["m","modifier"];const yT=["k","key"];function vT(e,t,n){for(let r=0;r<t.length;r++){const n=t[r];if(hE(e,n)&&null!=e[n])return e[n]}return n}function _T(e){return new Error(`unhandled node type: ${e}`)}const bT=e=>e;let wT=oE();function ET(e){return gE(e)&&0===fT(e)&&(hE(e,"b")||hE(e,"body"))}let TT=null;const IT=kT("function:translate");function kT(e){return t=>TT&&TT.emit(e,t)}const ST=17,CT=18,AT=19,RT=21,OT=22,NT=23;function xT(e){return $E(e,null,void 0)}function LT(e,t){return null!=t.locale?PT(t.locale):PT(e.locale)}let DT;function PT(e){if(pE(e))return e;if(fE(e)){if(e.resolvedOnce&&null!=DT)return DT;if("Function"===e.constructor.name){const n=e();if(gE(t=n)&&fE(t.then)&&fE(t.catch))throw xT(RT);return DT=n}throw xT(OT)}throw xT(NT);var t}function MT(e,t,n){return[...new Set([n,...dE(t)?t:gE(t)?Object.keys(t):pE(t)?[t]:[n]])]}function FT(e,t,n){const r=pE(n)?n:KT,s=e;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let e=[n];for(;dE(e);)e=UT(i,e,t);const o=dE(t)||!_E(t)?t:t.default?t.default:null;e=pE(o)?[o]:o,dE(e)&&UT(i,e,!1),s.__localeChainCache.set(r,i)}return i}function UT(e,t,n){let r=!0;for(let s=0;s<t.length&&mE(r);s++){const i=t[s];pE(i)&&(r=$T(e,t[s],n))}return r}function $T(e,t,n){let r;const s=t.split("-");do{r=VT(e,s.join("-"),n),s.splice(-1,1)}while(s.length&&!0===r);return r}function VT(e,t,n){let r=!1;if(!e.includes(t)&&(r=!0,t)){r="!"!==t[t.length-1];const s=t.replace(/!/g,"");e.push(s),(dE(n)||_E(n))&&n[s]&&(r=n[s])}return r}const jT=[];jT[0]={w:[0],i:[3,0],"[":[4],o:[7]},jT[1]={w:[1],".":[2],"[":[4],o:[7]},jT[2]={w:[2],i:[3,0],0:[3,0]},jT[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]},jT[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]},jT[5]={"'":[4,0],o:8,l:[5,0]},jT[6]={'"':[4,0],o:8,l:[6,0]};const BT=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function qT(e){if(null==e)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function zT(e){const t=e.trim();return("0"!==e.charAt(0)||!isNaN(parseInt(e)))&&(n=t,BT.test(n)?function(e){const t=e.charCodeAt(0);return t!==e.charCodeAt(e.length-1)||34!==t&&39!==t?e:e.slice(1,-1)}(t):"*"+t);var n}const WT=new Map;function HT(e,t){return gE(e)?e[t]:null}const KT="en-US",GT=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;let QT,YT,JT;let XT=null;const ZT=()=>XT;let eI=null;const tI=e=>{eI=e};let nI=0;function rI(e={}){const t=fE(e.onWarn)?e.onWarn:wE,n=pE(e.version)?e.version:"11.1.2",r=pE(e.locale)||fE(e.locale)?e.locale:KT,s=fE(r)?KT:r,i=dE(e.fallbackLocale)||_E(e.fallbackLocale)||pE(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:s,o=_E(e.messages)?e.messages:sI(s),a=_E(e.datetimeFormats)?e.datetimeFormats:sI(s),l=_E(e.numberFormats)?e.numberFormats:sI(s),c=sE(oE(),e.modifiers,{upper:(e,t)=>"text"===t&&pE(e)?e.toUpperCase():"vnode"===t&&gE(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>"text"===t&&pE(e)?e.toLowerCase():"vnode"===t&&gE(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>"text"===t&&pE(e)?GT(e):"vnode"===t&&gE(e)&&"__v_isVNode"in e?GT(e.children):e}),u=e.pluralRules||oE(),h=fE(e.missing)?e.missing:null,d=!mE(e.missingWarn)&&!nE(e.missingWarn)||e.missingWarn,f=!mE(e.fallbackWarn)&&!nE(e.fallbackWarn)||e.fallbackWarn,p=!!e.fallbackFormat,m=!!e.unresolving,g=fE(e.postTranslation)?e.postTranslation:null,y=_E(e.processor)?e.processor:null,v=!mE(e.warnHtmlMessage)||e.warnHtmlMessage,_=!!e.escapeParameter,b=fE(e.messageCompiler)?e.messageCompiler:QT,w=fE(e.messageResolver)?e.messageResolver:YT||HT,E=fE(e.localeFallbacker)?e.localeFallbacker:JT||MT,T=gE(e.fallbackContext)?e.fallbackContext:void 0,I=e,k=gE(I.__datetimeFormatters)?I.__datetimeFormatters:new Map,S=gE(I.__numberFormatters)?I.__numberFormatters:new Map,C=gE(I.__meta)?I.__meta:{};nI++;const A={version:n,cid:nI,locale:r,fallbackLocale:i,messages:o,modifiers:c,pluralRules:u,missing:h,missingWarn:d,fallbackWarn:f,fallbackFormat:p,unresolving:m,postTranslation:g,processor:y,warnHtmlMessage:v,escapeParameter:_,messageCompiler:b,messageResolver:w,localeFallbacker:E,fallbackContext:T,onWarn:t,__meta:C};return A.datetimeFormats=a,A.numberFormats=l,A.__datetimeFormatters=k,A.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&function(e,t,n){TT&&TT.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:n})}(A,n,C),A}const sI=e=>({[e]:oE()});function iI(e,t,n,r,s){const{missing:i,onWarn:o}=e;if(null!==i){const r=i(e,n,t,s);return pE(r)?r:t}return t}function oI(e,t,n){e.__localeChainCache=new Map,e.localeFallbacker(e,n,t)}function aI(e,t){const n=t.indexOf(e);if(-1===n)return!1;for(let i=n+1;i<t.length;i++)if(r=e,s=t[i],r!==s&&r.split("-")[0]===s.split("-")[0])return!0;var r,s;return!1}function lI(e,...t){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=e,{__datetimeFormatters:a}=e,[l,c,u,h]=uI(...t);mE(u.missingWarn)?u.missingWarn:e.missingWarn;mE(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const d=!!u.part,f=LT(e,u),p=o(e,s,f);if(!pE(l)||""===l)return new Intl.DateTimeFormat(f,h).format(c);let m,g={},y=null;for(let b=0;b<p.length&&(m=p[b],g=n[m]||{},y=g[l],!_E(y));b++)iI(e,l,m,0,"datetime format");if(!_E(y)||!pE(m))return r?-1:l;let v=`${m}__${l}`;rE(h)||(v=`${v}__${JSON.stringify(h)}`);let _=a.get(v);return _||(_=new Intl.DateTimeFormat(m,sE({},y,h)),a.set(v,_)),d?_.formatToParts(c):_.format(c)}const cI=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function uI(...e){const[t,n,r,s]=e,i=oE();let o,a=oE();if(pE(t)){const e=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!e)throw xT(AT);const n=e[3]?e[3].trim().startsWith("T")?`${e[1].trim()}${e[3].trim()}`:`${e[1].trim()}T${e[3].trim()}`:e[1].trim();o=new Date(n);try{o.toISOString()}catch(qk){throw xT(AT)}}else if("[object Date]"===vE(t)){if(isNaN(t.getTime()))throw xT(CT);o=t}else{if(!tE(t))throw xT(ST);o=t}return pE(n)?i.key=n:_E(n)&&Object.keys(n).forEach((e=>{cI.includes(e)?a[e]=n[e]:i[e]=n[e]})),pE(r)?i.locale=r:_E(r)&&(a=r),_E(s)&&(a=s),[i.key||"",o,i,a]}function hI(e,t,n){const r=e;for(const s in n){const e=`${t}__${s}`;r.__datetimeFormatters.has(e)&&r.__datetimeFormatters.delete(e)}}function dI(e,...t){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=e,{__numberFormatters:a}=e,[l,c,u,h]=pI(...t);mE(u.missingWarn)?u.missingWarn:e.missingWarn;mE(u.fallbackWarn)?u.fallbackWarn:e.fallbackWarn;const d=!!u.part,f=LT(e,u),p=o(e,s,f);if(!pE(l)||""===l)return new Intl.NumberFormat(f,h).format(c);let m,g={},y=null;for(let b=0;b<p.length&&(m=p[b],g=n[m]||{},y=g[l],!_E(y));b++)iI(e,l,m,0,"number format");if(!_E(y)||!pE(m))return r?-1:l;let v=`${m}__${l}`;rE(h)||(v=`${v}__${JSON.stringify(h)}`);let _=a.get(v);return _||(_=new Intl.NumberFormat(m,sE({},y,h)),a.set(v,_)),d?_.formatToParts(c):_.format(c)}const fI=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function pI(...e){const[t,n,r,s]=e,i=oE();let o=oE();if(!tE(t))throw xT(ST);const a=t;return pE(n)?i.key=n:_E(n)&&Object.keys(n).forEach((e=>{fI.includes(e)?o[e]=n[e]:i[e]=n[e]})),pE(r)?i.locale=r:_E(r)&&(o=r),_E(s)&&(o=s),[i.key||"",a,i,o]}function mI(e,t,n){const r=e;for(const s in n){const e=`${t}__${s}`;r.__numberFormatters.has(e)&&r.__numberFormatters.delete(e)}}const gI=e=>e,yI=e=>"",vI=e=>0===e.length?"":bE(e),_I=e=>null==e?"":dE(e)||_E(e)&&e.toString===yE?JSON.stringify(e,null,2):String(e);function bI(e,t){return e=Math.abs(e),2===t?e?e>1?1:0:1:e?Math.min(e,2):0}function wI(e={}){const t=e.locale,n=function(e){const t=tE(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(tE(e.named.count)||tE(e.named.n))?tE(e.named.count)?e.named.count:tE(e.named.n)?e.named.n:t:t}(e),r=gE(e.pluralRules)&&pE(t)&&fE(e.pluralRules[t])?e.pluralRules[t]:bI,s=gE(e.pluralRules)&&pE(t)&&fE(e.pluralRules[t])?bI:void 0,i=e.list||[],o=e.named||oE();tE(e.pluralIndex)&&function(e,t){t.count||(t.count=e),t.n||(t.n=e)}(n,o);function a(t,n){const r=fE(e.messages)?e.messages(t,!!n):!!gE(e.messages)&&e.messages[t];return r||(e.parent?e.parent.message(t):yI)}const l=_E(e.processor)&&fE(e.processor.normalize)?e.processor.normalize:vI,c=_E(e.processor)&&fE(e.processor.interpolate)?e.processor.interpolate:_I,u={list:e=>i[e],named:e=>o[e],plural:e=>e[r(n,e.length,s)],linked:(t,...n)=>{const[r,s]=n;let i="text",o="";1===n.length?gE(r)?(o=r.modifier||o,i=r.type||i):pE(r)&&(o=r||o):2===n.length&&(pE(r)&&(o=r||o),pE(s)&&(i=s||i));const l=a(t,!0)(u),c="vnode"===i&&dE(l)&&o?l[0]:l;return o?(h=o,e.modifiers?e.modifiers[h]:gI)(c,i):c;var h},message:a,type:_E(e.processor)&&pE(e.processor.type)?e.processor.type:"text",interpolate:c,normalize:l,values:sE(oE(),i,o)};return u}const EI=()=>"",TI=e=>fE(e);function II(e,...t){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:a}=e,[l,c]=CI(...t),u=mE(c.missingWarn)?c.missingWarn:e.missingWarn,h=mE(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,d=mE(c.escapeParameter)?c.escapeParameter:e.escapeParameter,f=!!c.resolvedMessage,p=pE(c.default)||mE(c.default)?mE(c.default)?i?l:()=>l:c.default:n?i?l:()=>l:null,m=n||null!=p&&(pE(p)||fE(p)),g=LT(e,c);d&&function(e){dE(e.list)?e.list=e.list.map((e=>pE(e)?cE(e):e)):gE(e.named)&&Object.keys(e.named).forEach((t=>{pE(e.named[t])&&(e.named[t]=cE(e.named[t]))}))}(c);let[y,v,_]=f?[l,g,a[g]||oE()]:kI(e,l,g,o,h,u),b=y,w=l;if(f||pE(b)||ET(b)||TI(b)||m&&(b=p,w=b),!(f||(pE(b)||ET(b)||TI(b))&&pE(v)))return s?-1:l;let E=!1;const T=TI(b)?b:SI(e,l,v,b,w,(()=>{E=!0}));if(E)return b;const I=function(e,t,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:c,fallbackContext:u}=e,h=(r,s)=>{let i=o(n,r);if(null==i&&(u||s)){const[,,n]=kI(u||e,r,t,a,l,c);i=o(n,r)}if(pE(i)||ET(i)){let n=!1;const s=SI(e,r,t,i,r,(()=>{n=!0}));return n?EI:s}return TI(i)?i:EI},d={locale:t,modifiers:s,pluralRules:i,messages:h};e.processor&&(d.processor=e.processor);r.list&&(d.list=r.list);r.named&&(d.named=r.named);tE(r.plural)&&(d.pluralIndex=r.plural);return d}(e,v,_,c),k=function(e,t,n){const r=t(n);return r}(0,T,wI(I)),S=r?r(k,l):k;if(__INTLIFY_PROD_DEVTOOLS__){const t={timestamp:Date.now(),key:pE(l)?l:TI(b)?b.key:"",locale:v||(TI(b)?b.locale:""),format:pE(b)?b:TI(b)?b.source:"",message:S};t.meta=sE({},e.__meta,ZT()||{}),IT(t)}return S}function kI(e,t,n,r,s,i){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:c}=e,u=c(e,r,n);let h,d=oE(),f=null;for(let p=0;p<u.length&&(h=u[p],d=o[h]||oE(),null===(f=l(d,t))&&(f=d[t]),!(pE(f)||ET(f)||TI(f)));p++)if(!aI(h,u)){const n=iI(e,t,h,0,"translate");n!==t&&(f=n)}return[f,h,d]}function SI(e,t,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:a}=e;if(TI(r)){const e=r;return e.locale=e.locale||n,e.key=e.key||t,e}if(null==o){const e=()=>r;return e.locale=n,e.key=t,e}const l=o(r,function(e,t,n,r,s,i){return{locale:t,key:n,warnHtmlMessage:s,onError:e=>{throw i&&i(e),e},onCacheKey:e=>((e,t,n)=>eE({l:e,k:t,s:n}))(t,n,e)}}(0,n,s,0,a,i));return l.locale=n,l.key=t,l.source=r,l}function CI(...e){const[t,n,r]=e,s=oE();if(!(pE(t)||tE(t)||TI(t)||ET(t)))throw xT(ST);const i=tE(t)?String(t):(TI(t),t);return tE(n)?s.plural=n:pE(n)?s.default=n:_E(n)&&!rE(n)?s.named=n:dE(n)&&(s.list=n),tE(r)?s.plural=r:pE(r)?s.default=r:_E(r)&&sE(s,r),[i,s]}"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(lE().__INTLIFY_PROD_DEVTOOLS__=!1),"boolean"!=typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(lE().__INTLIFY_DROP_MESSAGE_COMPILER__=!1);const AI=24,RI=25,OI=26,NI=27,xI=28,LI=29,DI=31,PI=32;function MI(e,...t){return $E(e,null,void 0)}const FI=Zw("__translateVNode"),UI=Zw("__datetimeParts"),$I=Zw("__numberParts"),VI=Zw("__setPluralRules"),jI=Zw("__injectWithOption"),BI=Zw("__dispose");function qI(e){if(!gE(e))return e;for(const t in e)if(hE(e,t))if(t.includes(".")){const n=t.split("."),r=n.length-1;let s=e,i=!1;for(let e=0;e<r;e++){if("__proto__"===n[e])throw new Error(`unsafe key: ${n[e]}`);if(n[e]in s||(s[n[e]]=oE()),!gE(s[n[e]])){i=!0;break}s=s[n[e]]}i||(s[n[r]]=e[t],delete e[t]),gE(s[n[r]])&&qI(s[n[r]])}else gE(e[t])&&qI(e[t]);return e}function zI(e,t){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=t,o=_E(n)?n:dE(r)?oE():{[e]:oE()};if(dE(r)&&r.forEach((e=>{if("locale"in e&&"resource"in e){const{locale:t,resource:n}=e;t?(o[t]=o[t]||oE(),TE(n,o[t])):TE(n,o)}else pE(e)&&TE(JSON.parse(e),o)})),null==s&&i)for(const a in o)hE(o,a)&&qI(o[a]);return o}function WI(e){return e.type}function HI(e,t,n){let r=gE(t.messages)?t.messages:oE();"__i18nGlobal"in n&&(r=zI(e.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);if(s.length&&s.forEach((t=>{e.mergeLocaleMessage(t,r[t])})),gE(t.datetimeFormats)){const n=Object.keys(t.datetimeFormats);n.length&&n.forEach((n=>{e.mergeDateTimeFormat(n,t.datetimeFormats[n])}))}if(gE(t.numberFormats)){const n=Object.keys(t.numberFormats);n.length&&n.forEach((n=>{e.mergeNumberFormat(n,t.numberFormats[n])}))}}function KI(e){return Ws(Rs,null,e,0)}const GI=()=>[],QI=()=>!1;let YI=0;function JI(e){return(t,n,r,s)=>e(n,r,ri()||void 0,s)}function XI(e={}){const{__root:t,__injectWithOption:n}=e,r=void 0===t,s=e.flatJson,i=Xw?Lt:Dt;let o=!mE(e.inheritLocale)||e.inheritLocale;const a=i(t&&o?t.locale.value:pE(e.locale)?e.locale:KT),l=i(t&&o?t.fallbackLocale.value:pE(e.fallbackLocale)||dE(e.fallbackLocale)||_E(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:a.value),c=i(zI(a.value,e)),u=i(_E(e.datetimeFormats)?e.datetimeFormats:{[a.value]:{}}),h=i(_E(e.numberFormats)?e.numberFormats:{[a.value]:{}});let d=t?t.missingWarn:!mE(e.missingWarn)&&!nE(e.missingWarn)||e.missingWarn,f=t?t.fallbackWarn:!mE(e.fallbackWarn)&&!nE(e.fallbackWarn)||e.fallbackWarn,p=t?t.fallbackRoot:!mE(e.fallbackRoot)||e.fallbackRoot,m=!!e.fallbackFormat,g=fE(e.missing)?e.missing:null,y=fE(e.missing)?JI(e.missing):null,v=fE(e.postTranslation)?e.postTranslation:null,_=t?t.warnHtmlMessage:!mE(e.warnHtmlMessage)||e.warnHtmlMessage,b=!!e.escapeParameter;const w=t?t.modifiers:_E(e.modifiers)?e.modifiers:{};let E,T=e.pluralRules||t&&t.pluralRules;E=(()=>{r&&tI(null);const t={version:"11.1.2",locale:a.value,fallbackLocale:l.value,messages:c.value,modifiers:w,pluralRules:T,missing:null===y?void 0:y,missingWarn:d,fallbackWarn:f,fallbackFormat:m,unresolving:!0,postTranslation:null===v?void 0:v,warnHtmlMessage:_,escapeParameter:b,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};t.datetimeFormats=u.value,t.numberFormats=h.value,t.__datetimeFormatters=_E(E)?E.__datetimeFormatters:void 0,t.__numberFormatters=_E(E)?E.__numberFormatters:void 0;const n=rI(t);return r&&tI(n),n})(),oI(E,a.value,l.value);const I=mi({get:()=>a.value,set:e=>{E.locale=e,a.value=e}}),k=mi({get:()=>l.value,set:e=>{E.fallbackLocale=e,l.value=e,oI(E,a.value,e)}}),S=mi((()=>c.value)),C=mi((()=>u.value)),A=mi((()=>h.value));const R=(e,n,s,i,o,d)=>{let f;a.value,l.value,c.value,u.value,h.value;try{__INTLIFY_PROD_DEVTOOLS__,r||(E.fallbackContext=t?eI:void 0),f=e(E)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(E.fallbackContext=void 0)}if("translate exists"!==s&&tE(f)&&-1===f||"translate exists"===s&&!f){const[e,r]=n();return t&&p?i(t):o(e)}if(d(f))return f;throw MI(AI)};function O(...e){return R((t=>Reflect.apply(II,null,[t,...e])),(()=>CI(...e)),"translate",(t=>Reflect.apply(t.t,t,[...e])),(e=>e),(e=>pE(e)))}const N={normalize:function(e){return e.map((e=>pE(e)||tE(e)||mE(e)?KI(String(e)):e))},interpolate:e=>e,type:"vnode"};function x(e){return c.value[e]||{}}YI++,t&&Xw&&(ms(t.locale,(e=>{o&&(a.value=e,E.locale=e,oI(E,a.value,l.value))})),ms(t.fallbackLocale,(e=>{o&&(l.value=e,E.fallbackLocale=e,oI(E,a.value,l.value))})));const L={id:YI,locale:I,fallbackLocale:k,get inheritLocale(){return o},set inheritLocale(e){o=e,e&&t&&(a.value=t.locale.value,l.value=t.fallbackLocale.value,oI(E,a.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:S,get modifiers(){return w},get pluralRules(){return T||{}},get isGlobal(){return r},get missingWarn(){return d},set missingWarn(e){d=e,E.missingWarn=d},get fallbackWarn(){return f},set fallbackWarn(e){f=e,E.fallbackWarn=f},get fallbackRoot(){return p},set fallbackRoot(e){p=e},get fallbackFormat(){return m},set fallbackFormat(e){m=e,E.fallbackFormat=m},get warnHtmlMessage(){return _},set warnHtmlMessage(e){_=e,E.warnHtmlMessage=e},get escapeParameter(){return b},set escapeParameter(e){b=e,E.escapeParameter=e},t:O,getLocaleMessage:x,setLocaleMessage:function(e,t){if(s){const n={[e]:t};for(const e in n)hE(n,e)&&qI(n[e]);t=n[e]}c.value[e]=t,E.messages=c.value},mergeLocaleMessage:function(e,t){c.value[e]=c.value[e]||{};const n={[e]:t};if(s)for(const r in n)hE(n,r)&&qI(n[r]);TE(t=n[e],c.value[e]),E.messages=c.value},getPostTranslationHandler:function(){return fE(v)?v:null},setPostTranslationHandler:function(e){v=e,E.postTranslation=e},getMissingHandler:function(){return g},setMissingHandler:function(e){null!==e&&(y=JI(e)),g=e,E.missing=y},[VI]:function(e){T=e,E.pluralRules=T}};return L.datetimeFormats=C,L.numberFormats=A,L.rt=function(...e){const[t,n,r]=e;if(r&&!gE(r))throw MI(RI);return O(t,n,sE({resolvedMessage:!0},r||{}))},L.te=function(e,t){return R((()=>{if(!e)return!1;const n=x(pE(t)?t:a.value),r=E.messageResolver(n,e);return ET(r)||TI(r)||pE(r)}),(()=>[e]),"translate exists",(n=>Reflect.apply(n.te,n,[e,t])),QI,(e=>mE(e)))},L.tm=function(e){const n=function(e){let t=null;const n=FT(E,l.value,a.value);for(let r=0;r<n.length;r++){const s=c.value[n[r]]||{},i=E.messageResolver(s,e);if(null!=i){t=i;break}}return t}(e);return null!=n?n:t&&t.tm(e)||{}},L.d=function(...e){return R((t=>Reflect.apply(lI,null,[t,...e])),(()=>uI(...e)),"datetime format",(t=>Reflect.apply(t.d,t,[...e])),(()=>""),(e=>pE(e)))},L.n=function(...e){return R((t=>Reflect.apply(dI,null,[t,...e])),(()=>pI(...e)),"number format",(t=>Reflect.apply(t.n,t,[...e])),(()=>""),(e=>pE(e)))},L.getDateTimeFormat=function(e){return u.value[e]||{}},L.setDateTimeFormat=function(e,t){u.value[e]=t,E.datetimeFormats=u.value,hI(E,e,t)},L.mergeDateTimeFormat=function(e,t){u.value[e]=sE(u.value[e]||{},t),E.datetimeFormats=u.value,hI(E,e,t)},L.getNumberFormat=function(e){return h.value[e]||{}},L.setNumberFormat=function(e,t){h.value[e]=t,E.numberFormats=h.value,mI(E,e,t)},L.mergeNumberFormat=function(e,t){h.value[e]=sE(h.value[e]||{},t),E.numberFormats=h.value,mI(E,e,t)},L[jI]=n,L[FI]=function(...e){return R((t=>{let n;const r=t;try{r.processor=N,n=Reflect.apply(II,null,[r,...e])}finally{r.processor=null}return n}),(()=>CI(...e)),"translate",(t=>t[FI](...e)),(e=>[KI(e)]),(e=>dE(e)))},L[UI]=function(...e){return R((t=>Reflect.apply(lI,null,[t,...e])),(()=>uI(...e)),"datetime format",(t=>t[UI](...e)),GI,(e=>pE(e)||dE(e)))},L[$I]=function(...e){return R((t=>Reflect.apply(dI,null,[t,...e])),(()=>pI(...e)),"number format",(t=>t[$I](...e)),GI,(e=>pE(e)||dE(e)))},L}function ZI(e={}){const t=XI(function(e){const t=pE(e.locale)?e.locale:KT,n=pE(e.fallbackLocale)||dE(e.fallbackLocale)||_E(e.fallbackLocale)||!1===e.fallbackLocale?e.fallbackLocale:t,r=fE(e.missing)?e.missing:void 0,s=!mE(e.silentTranslationWarn)&&!nE(e.silentTranslationWarn)||!e.silentTranslationWarn,i=!mE(e.silentFallbackWarn)&&!nE(e.silentFallbackWarn)||!e.silentFallbackWarn,o=!mE(e.fallbackRoot)||e.fallbackRoot,a=!!e.formatFallbackMessages,l=_E(e.modifiers)?e.modifiers:{},c=e.pluralizationRules,u=fE(e.postTranslation)?e.postTranslation:void 0,h=!pE(e.warnHtmlInMessage)||"off"!==e.warnHtmlInMessage,d=!!e.escapeParameterHtml,f=!mE(e.sync)||e.sync;let p=e.messages;if(_E(e.sharedMessages)){const t=e.sharedMessages;p=Object.keys(t).reduce(((e,n)=>{const r=e[n]||(e[n]={});return sE(r,t[n]),e}),p||{})}const{__i18n:m,__root:g,__injectWithOption:y}=e,v=e.datetimeFormats,_=e.numberFormats;return{locale:t,fallbackLocale:n,messages:p,flatJson:e.flatJson,datetimeFormats:v,numberFormats:_,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:h,escapeParameter:d,messageResolver:e.messageResolver,inheritLocale:f,__i18n:m,__root:g,__injectWithOption:y}}(e)),{__extender:n}=e,r={id:t.id,get locale(){return t.locale.value},set locale(e){t.locale.value=e},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(e){t.fallbackLocale.value=e},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get missing(){return t.getMissingHandler()},set missing(e){t.setMissingHandler(e)},get silentTranslationWarn(){return mE(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(e){t.missingWarn=mE(e)?!e:e},get silentFallbackWarn(){return mE(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(e){t.fallbackWarn=mE(e)?!e:e},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(e){t.fallbackFormat=e},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(e){t.setPostTranslationHandler(e)},get sync(){return t.inheritLocale},set sync(e){t.inheritLocale=e},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(e){t.warnHtmlMessage="off"!==e},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(e){t.escapeParameter=e},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t:(...e)=>Reflect.apply(t.t,t,[...e]),rt:(...e)=>Reflect.apply(t.rt,t,[...e]),te:(e,n)=>t.te(e,n),tm:e=>t.tm(e),getLocaleMessage:e=>t.getLocaleMessage(e),setLocaleMessage(e,n){t.setLocaleMessage(e,n)},mergeLocaleMessage(e,n){t.mergeLocaleMessage(e,n)},d:(...e)=>Reflect.apply(t.d,t,[...e]),getDateTimeFormat:e=>t.getDateTimeFormat(e),setDateTimeFormat(e,n){t.setDateTimeFormat(e,n)},mergeDateTimeFormat(e,n){t.mergeDateTimeFormat(e,n)},n:(...e)=>Reflect.apply(t.n,t,[...e]),getNumberFormat:e=>t.getNumberFormat(e),setNumberFormat(e,n){t.setNumberFormat(e,n)},mergeNumberFormat(e,n){t.mergeNumberFormat(e,n)}};return r.__extender=n,r}function ek(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[VI](t.pluralizationRules||e.pluralizationRules);const n=zI(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(n).forEach((t=>e.mergeLocaleMessage(t,n[t]))),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach((n=>e.mergeDateTimeFormat(n,t.datetimeFormats[n]))),t.numberFormats&&Object.keys(t.numberFormats).forEach((n=>e.mergeNumberFormat(n,t.numberFormats[n]))),e}const tk={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>"parent"===e||"global"===e,default:"parent"},i18n:{type:Object}};function nk(){return As}const rk=Kn({name:"i18n-t",props:sE({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>tE(e)||!isNaN(e)}},tk),setup(e,t){const{slots:n,attrs:r}=t,s=e.i18n||hk({useScope:e.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter((e=>"_"!==e)),o=oE();e.locale&&(o.locale=e.locale),void 0!==e.plural&&(o.plural=pE(e.plural)?+e.plural:e.plural);const a=function({slots:e},t){if(1===t.length&&"default"===t[0])return(e.default?e.default():[]).reduce(((e,t)=>[...e,...t.type===As?t.children:[t]]),[]);return t.reduce(((t,n)=>{const r=e[n];return r&&(t[n]=r()),t}),oE())}(t,i),l=s[FI](e.keypath,a,o),c=sE(oE(),r);return gi(pE(e.tag)||gE(e.tag)?e.tag:nk(),c,l)}}});function sk(e,t,n,r){const{slots:s,attrs:i}=t;return()=>{const t={part:!0};let o=oE();e.locale&&(t.locale=e.locale),pE(e.format)?t.key=e.format:gE(e.format)&&(pE(e.format.key)&&(t.key=e.format.key),o=Object.keys(e.format).reduce(((t,r)=>n.includes(r)?sE(oE(),t,{[r]:e.format[r]}):t),oE()));const a=r(e.value,t,o);let l=[t.key];dE(a)?l=a.map(((e,t)=>{const n=s[e.type],r=n?n({[e.type]:e.value,index:t,parts:a}):[e.value];var i;return dE(i=r)&&!pE(i[0])&&(r[0].key=`${e.type}-${t}`),r})):pE(a)&&(l=[a]);const c=sE(oE(),i);return gi(pE(e.tag)||gE(e.tag)?e.tag:nk(),c,l)}}const ik=Kn({name:"i18n-n",props:sE({value:{type:Number,required:!0},format:{type:[String,Object]}},tk),setup(e,t){const n=e.i18n||hk({useScope:e.scope,__useComponent:!0});return sk(e,t,fI,((...e)=>n[$I](...e)))}});function ok(e){if(pE(e))return{path:e};if(_E(e)){if(!("path"in e))throw MI(xI);return e}throw MI(LI)}function ak(e){const{path:t,locale:n,args:r,choice:s,plural:i}=e,o={},a=r||{};return pE(n)&&(o.locale=n),tE(s)&&(o.plural=s),tE(i)&&(o.plural=i),[t,a,o]}function lk(e,t,...n){const r=_E(n[0])?n[0]:{};(!mE(r.globalInstall)||r.globalInstall)&&([rk.name,"I18nT"].forEach((t=>e.component(t,rk))),[ik.name,"I18nN"].forEach((t=>e.component(t,ik))),[pk.name,"I18nD"].forEach((t=>e.component(t,pk)))),e.directive("t",function(e){const t=t=>{const{instance:n,value:r}=t;if(!n||!n.$)throw MI(PI);const s=function(e,t){const n=e;if("composition"===e.mode)return n.__getInstance(t)||e.global;{const r=n.__getInstance(t);return null!=r?r.__composer:e.global.__composer}}(e,n.$),i=ok(r);return[Reflect.apply(s.t,s,[...ak(i)]),s]};return{created:(n,r)=>{const[s,i]=t(r);Xw&&e.global===i&&(n.__i18nWatcher=ms(i.locale,(()=>{r.instance&&r.instance.$forceUpdate()}))),n.__composer=i,n.textContent=s},unmounted:e=>{Xw&&e.__i18nWatcher&&(e.__i18nWatcher(),e.__i18nWatcher=void 0,delete e.__i18nWatcher),e.__composer&&(e.__composer=void 0,delete e.__composer)},beforeUpdate:(e,{value:t})=>{if(e.__composer){const n=e.__composer,r=ok(t);e.textContent=Reflect.apply(n.t,n,[...ak(r)])}},getSSRProps:e=>{const[n]=t(e);return{textContent:n}}}}(t))}const ck=Zw("global-vue-i18n");function uk(e={}){const t=__VUE_I18N_LEGACY_API__&&mE(e.legacy)?e.legacy:__VUE_I18N_LEGACY_API__,n=!mE(e.globalInjection)||e.globalInjection,r=new Map,[s,i]=function(e,t){const n=he(),r=__VUE_I18N_LEGACY_API__&&t?n.run((()=>ZI(e))):n.run((()=>XI(e)));if(null==r)throw MI(PI);return[n,r]}(e,t),o=Zw("");const a={get mode(){return __VUE_I18N_LEGACY_API__&&t?"legacy":"composition"},install(e,...r){return d(this,null,(function*(){if(e.__VUE_I18N_SYMBOL__=o,e.provide(e.__VUE_I18N_SYMBOL__,a),_E(r[0])){const e=r[0];a.__composerExtend=e.__composerExtend,a.__vueI18nExtend=e.__vueI18nExtend}let s=null;!t&&n&&(s=function(e,t){const n=Object.create(null);dk.forEach((e=>{const r=Object.getOwnPropertyDescriptor(t,e);if(!r)throw MI(PI);const s=xt(r.value)?{get:()=>r.value.value,set(e){r.value.value=e}}:{get:()=>r.get&&r.get()};Object.defineProperty(n,e,s)})),e.config.globalProperties.$i18n=n,fk.forEach((n=>{const r=Object.getOwnPropertyDescriptor(t,n);if(!r||!r.value)throw MI(PI);Object.defineProperty(e.config.globalProperties,`$${n}`,r)}));const r=()=>{delete e.config.globalProperties.$i18n,fk.forEach((t=>{delete e.config.globalProperties[`$${t}`]}))};return r}(e,a.global)),__VUE_I18N_FULL_INSTALL__&&lk(e,a,...r),__VUE_I18N_LEGACY_API__&&t&&e.mixin(function(e,t,n){return{beforeCreate(){const r=ri();if(!r)throw MI(PI);const s=this.$options;if(s.i18n){const r=s.i18n;if(s.__i18n&&(r.__i18n=s.__i18n),r.__root=t,this===this.$root)this.$i18n=ek(e,r);else{r.__injectWithOption=!0,r.__extender=n.__vueI18nExtend,this.$i18n=ZI(r);const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=ek(e,s);else{this.$i18n=ZI({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:t});const e=this.$i18n;e.__extender&&(e.__disposer=e.__extender(this.$i18n))}else this.$i18n=e;s.__i18nGlobal&&HI(t,s,s),this.$t=(...e)=>this.$i18n.t(...e),this.$rt=(...e)=>this.$i18n.rt(...e),this.$te=(e,t)=>this.$i18n.te(e,t),this.$d=(...e)=>this.$i18n.d(...e),this.$n=(...e)=>this.$i18n.n(...e),this.$tm=e=>this.$i18n.tm(e),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const e=ri();if(!e)throw MI(PI);const t=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,t.__disposer&&(t.__disposer(),delete t.__disposer,delete t.__extender),n.__deleteInstance(e),delete this.$i18n}}}(i,i.__composer,a));const l=e.unmount;e.unmount=()=>{s&&s(),a.dispose(),l()}}))},get global(){return i},dispose(){s.stop()},__instances:r,__getInstance:function(e){return r.get(e)||null},__setInstance:function(e,t){r.set(e,t)},__deleteInstance:function(e){r.delete(e)}};return a}function hk(e={}){const t=ri();if(null==t)throw MI(OI);if(!t.isCE&&null!=t.appContext.app&&!t.appContext.app.__VUE_I18N_SYMBOL__)throw MI(NI);const n=function(e){const t=zr(e.isCE?ck:e.appContext.app.__VUE_I18N_SYMBOL__);if(!t)throw MI(e.isCE?DI:PI);return t}(t),r=function(e){return"composition"===e.mode?e.global:e.global.__composer}(n),s=WI(t),i=function(e,t){return rE(e)?"__i18n"in t?"local":"global":e.useScope?e.useScope:"local"}(e,s);if("global"===i)return HI(r,e,s),r;if("parent"===i){let s=function(e,t,n=!1){let r=null;const s=t.root;let i=function(e,t=!1){if(null==e)return null;return t&&e.vnode.ctx||e.parent}(t,n);for(;null!=i;){const t=e;if("composition"===e.mode)r=t.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const e=t.__getInstance(i);null!=e&&(r=e.__composer,n&&r&&!r[jI]&&(r=null))}if(null!=r)break;if(s===i)break;i=i.parent}return r}(n,t,e.__useComponent);return null==s&&(s=r),s}const o=n;let a=o.__getInstance(t);if(null==a){const n=sE({},e);"__i18n"in s&&(n.__i18n=s.__i18n),r&&(n.__root=r),a=XI(n),o.__composerExtend&&(a[BI]=o.__composerExtend(a)),function(e,t,n){ir((()=>{}),t),cr((()=>{const r=n;e.__deleteInstance(t);const s=r[BI];s&&(s(),delete r[BI])}),t)}(o,t,a),o.__setInstance(t,a)}return a}const dk=["locale","fallbackLocale","availableLocales"],fk=["t","rt","d","n","tm","te"];const pk=Kn({name:"i18n-d",props:sE({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},tk),setup(e,t){const n=e.i18n||hk({useScope:e.scope,__useComponent:!0});return sk(e,t,cI,((...e)=>n[UI](...e)))}});var mk;if("boolean"!=typeof __VUE_I18N_FULL_INSTALL__&&(lE().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!=typeof __VUE_I18N_LEGACY_API__&&(lE().__VUE_I18N_LEGACY_API__=!0),"boolean"!=typeof __INTLIFY_DROP_MESSAGE_COMPILER__&&(lE().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),"boolean"!=typeof __INTLIFY_PROD_DEVTOOLS__&&(lE().__INTLIFY_PROD_DEVTOOLS__=!1),QT=function(e,t){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&pE(e)){!mE(t.warnHtmlMessage)||t.warnHtmlMessage;const n=(t.onCacheKey||bT)(e),r=wT[n];if(r)return r;const{ast:s,detectError:i}=function(e,t={}){let n=!1;const r=t.onError||VE;return t.onError=e=>{n=!0,r(e)},u(c({},sT(e,t)),{detectError:n})}(e,u(c({},t),{location:!1,jit:!0})),o=iT(s);return i?o:wT[n]=o}{const t=e.cacheKey;if(t){const n=wT[t];return n||(wT[t]=iT(e))}return iT(e)}},YT=function(e,t){if(!gE(e))return null;let n=WT.get(t);if(n||(n=function(e){const t=[];let n,r,s,i,o,a,l,c=-1,u=0,h=0;const d=[];function f(){const t=e[c+1];if(5===u&&"'"===t||6===u&&'"'===t)return c++,s="\\"+t,d[0](),!0}for(d[0]=()=>{void 0===r?r=s:r+=s},d[1]=()=>{void 0!==r&&(t.push(r),r=void 0)},d[2]=()=>{d[0](),h++},d[3]=()=>{if(h>0)h--,u=4,d[0]();else{if(h=0,void 0===r)return!1;if(r=zT(r),!1===r)return!1;d[1]()}};null!==u;)if(c++,n=e[c],"\\"!==n||!f()){if(i=qT(n),l=jT[u],o=l[i]||l.l||8,8===o)return;if(u=o[0],void 0!==o[1]&&(a=d[o[1]],a&&(s=n,!1===a())))return;if(7===u)return t}}(t),n&&WT.set(t,n)),!n)return null;const r=n.length;let s=e,i=0;for(;i<r;){const e=s[n[i]];if(void 0===e)return null;if(fE(s))return null;s=e,i++}return s},JT=FT,__INTLIFY_PROD_DEVTOOLS__){const e=lE();e.__INTLIFY__=!0,mk=e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__,TT=mk}function gk(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function yk(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?gk(Object(n),!0).forEach((function(t){vk(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gk(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function vk(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _k(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object.keys(e).reduce(((n,r)=>(t.includes(r)||(n[r]=Ft(e[r])),n)),{})}function bk(e){return"function"==typeof e}function wk(e,t,n){let r=e;const s=t.split(".");for(let i=0;i<s.length;i++){if(!r[s[i]])return n;r=r[s[i]]}return r}function Ek(e,t,n){return mi((()=>e.some((e=>wk(t,e,{[n]:!1})[n]))))}function Tk(e,t,n){return mi((()=>e.reduce(((e,r)=>{const s=wk(t,r,{[n]:!1})[n]||[];return e.concat(s)}),[])))}function Ik(e,t,n,r){return e.call(r,Ft(t),Ft(n),r)}function kk(e){return void 0!==e.$valid?!e.$valid:!e}function Sk(e,t,n,r,s,i,o,a,l,c,u){const h=Lt(!1),d=e.$params||{},f=Lt(null);let p,m;e.$async?({$invalid:p,$unwatch:m}=function(e,t,n,r,s,i,o){let{$lazy:a,$rewardEarly:l}=s,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[],u=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0,d=arguments.length>10?arguments[10]:void 0;const f=Lt(!!r.value),p=Lt(0);n.value=!1;const m=ms([t,r].concat(c,d),(()=>{if(a&&!r.value||l&&!h.value&&!n.value)return;let s;try{s=Ik(e,t,u,o)}catch(c){s=Promise.reject(c)}p.value++,n.value=!!p.value,f.value=!1,Promise.resolve(s).then((e=>{p.value--,n.value=!!p.value,i.value=e,f.value=kk(e)})).catch((e=>{p.value--,n.value=!!p.value,i.value=e,f.value=!0}))}),{immediate:!0,deep:"object"==typeof t});return{$invalid:f,$unwatch:m}}(e.$validator,t,h,n,r,f,s,e.$watchTargets,l,c,u)):({$invalid:p,$unwatch:m}=function(e,t,n,r,s,i,o,a){let{$lazy:l,$rewardEarly:c}=r;return{$unwatch:()=>({}),$invalid:mi((()=>{if(l&&!n.value||c&&!a.value)return!1;let r=!0;try{const n=Ik(e,t,o,i);s.value=n,r=kk(n)}catch(u){s.value=u}return r}))}}(e.$validator,t,n,r,f,s,l,c));const g=e.$message;return{$message:bk(g)?mi((()=>g(_k({$pending:h,$invalid:p,$params:_k(d),$model:t,$response:f,$validator:i,$propertyPath:a,$property:o})))):g||"",$params:d,$pending:h,$invalid:p,$response:f,$unwatch:m}}function Ck(e){let{validations:t,state:n,key:r,parentKey:s,childResults:i,resultsCache:o,globalConfig:a={},instance:l,externalResults:c}=e;const u=s?`${s}.${r}`:r,{rules:h,nestedValidators:f,config:p,validationGroups:m}=function(){const e=Ft(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),t=Object.keys(e),n={},r={},s={};let i=null;return t.forEach((t=>{const o=e[t];switch(!0){case bk(o.$validator):n[t]=o;break;case bk(o):n[t]={$validator:o};break;case"$validationGroups"===t:i=o;break;case t.startsWith("$"):s[t]=o;break;default:r[t]=o}})),{rules:n,nestedValidators:r,config:s,validationGroups:i}}(t),g=yk(yk({},a),p),y=r?mi((()=>{const e=Ft(n);return e?Ft(e[r]):void 0})):n,v=yk({},Ft(c)||{}),_=mi((()=>{const e=Ft(c);return r?e?Ft(e[r]):void 0:e})),b=function(e,t,n,r,s,i,o,a,l){const c=Object.keys(e),u=r.get(s,e),h=Lt(!1),d=Lt(!1),f=Lt(0);if(u){if(!u.$partial)return u;u.$unwatch(),h.value=u.$dirty.value}const p={$dirty:h,$path:s,$touch:()=>{h.value||(h.value=!0)},$reset:()=>{h.value&&(h.value=!1)},$commit:()=>{}};return c.length?(c.forEach((r=>{p[r]=Sk(e[r],t,p.$dirty,i,o,r,n,s,l,d,f)})),p.$externalResults=mi((()=>a.value?[].concat(a.value).map(((e,t)=>({$propertyPath:s,$property:n,$validator:"$externalResults",$uid:`${s}-externalResult-${t}`,$message:e,$params:{},$response:null,$pending:!1}))):[])),p.$invalid=mi((()=>{const e=c.some((e=>Ft(p[e].$invalid)));return d.value=e,!!p.$externalResults.value.length||e})),p.$pending=mi((()=>c.some((e=>Ft(p[e].$pending))))),p.$error=mi((()=>!!p.$dirty.value&&(p.$pending.value||p.$invalid.value))),p.$silentErrors=mi((()=>c.filter((e=>Ft(p[e].$invalid))).map((e=>{const t=p[e];return bt({$propertyPath:s,$property:n,$validator:e,$uid:`${s}-${e}`,$message:t.$message,$params:t.$params,$response:t.$response,$pending:t.$pending})})).concat(p.$externalResults.value))),p.$errors=mi((()=>p.$dirty.value?p.$silentErrors.value:[])),p.$unwatch=()=>c.forEach((e=>{p[e].$unwatch()})),p.$commit=()=>{d.value=!0,f.value=Date.now()},r.set(s,e,p),p):(u&&r.set(s,e,p),p)}(h,y,r,o,u,g,l,_,n),w=function(e,t,n,r,s,i,o){const a=Object.keys(e);return a.length?a.reduce(((a,l)=>(a[l]=Ck({validations:e[l],state:t,key:l,parentKey:n,resultsCache:r,globalConfig:s,instance:i,externalResults:o}),a)),{}):{}}(f,y,u,o,g,l,_),E={};m&&Object.entries(m).forEach((e=>{let[t,n]=e;E[t]={$invalid:Ek(n,w,"$invalid"),$error:Ek(n,w,"$error"),$pending:Ek(n,w,"$pending"),$errors:Tk(n,w,"$errors"),$silentErrors:Tk(n,w,"$silentErrors")}}));const{$dirty:T,$errors:I,$invalid:k,$anyDirty:S,$error:C,$pending:A,$touch:R,$reset:O,$silentErrors:N,$commit:x}=function(e,t,n){const r=mi((()=>[t,n].filter((e=>e)).reduce(((e,t)=>e.concat(Object.values(Ft(t)))),[]))),s=mi({get:()=>e.$dirty.value||!!r.value.length&&r.value.every((e=>e.$dirty)),set(t){e.$dirty.value=t}}),i=mi((()=>{const t=Ft(e.$silentErrors)||[],n=r.value.filter((e=>(Ft(e).$silentErrors||[]).length)).reduce(((e,t)=>e.concat(...t.$silentErrors)),[]);return t.concat(n)})),o=mi((()=>{const t=Ft(e.$errors)||[],n=r.value.filter((e=>(Ft(e).$errors||[]).length)).reduce(((e,t)=>e.concat(...t.$errors)),[]);return t.concat(n)})),a=mi((()=>r.value.some((e=>e.$invalid))||Ft(e.$invalid)||!1)),l=mi((()=>r.value.some((e=>Ft(e.$pending)))||Ft(e.$pending)||!1)),c=mi((()=>r.value.some((e=>e.$dirty))||r.value.some((e=>e.$anyDirty))||s.value)),u=mi((()=>!!s.value&&(l.value||a.value))),h=()=>{e.$touch(),r.value.forEach((e=>{e.$touch()}))};return r.value.length&&r.value.every((e=>e.$dirty))&&h(),{$dirty:s,$errors:o,$invalid:a,$anyDirty:c,$error:u,$pending:l,$touch:h,$reset:()=>{e.$reset(),r.value.forEach((e=>{e.$reset()}))},$silentErrors:i,$commit:()=>{e.$commit(),r.value.forEach((e=>{e.$commit()}))}}}(b,w,i),L=r?mi({get:()=>Ft(y),set:e=>{T.value=!0;const t=Ft(n),s=Ft(c);s&&(s[r]=v[r]),xt(t[r])?t[r].value=e:t[r]=e}}):null;return r&&g.$autoDirty&&ms(y,(()=>{T.value||R();const e=Ft(c);e&&(e[r]=v[r])}),{flush:"sync"}),bt(yk(yk(yk({},b),{},{$model:L,$dirty:T,$error:C,$errors:I,$invalid:k,$anyDirty:S,$pending:A,$touch:R,$reset:O,$path:u||"__root",$silentErrors:N,$validate:function(){return d(this,null,(function*(){return R(),g.$rewardEarly&&(x(),yield ln()),yield ln(),new Promise((e=>{if(!A.value)return e(!k.value);const t=ms(A,(()=>{e(!k.value),t()}))}))}))},$commit:x},i&&{$getResultsForChild:function(e){return(i.value||{})[e]},$clearExternalResults:function(){xt(c)?c.value=v:0===Object.keys(v).length?Object.keys(c).forEach((e=>{delete c[e]})):Object.assign(c,v)},$validationGroups:E}),w))}class Ak{constructor(){this.storage=new Map}set(e,t,n){this.storage.set(e,{rules:t,result:n})}checkRulesValidity(e,t,n){const r=Object.keys(n),s=Object.keys(t);if(s.length!==r.length)return!1;return!!s.every((e=>r.includes(e)))&&s.every((e=>!t[e].$params||Object.keys(t[e].$params).every((r=>Ft(n[e].$params[r])===Ft(t[e].$params[r])))))}get(e,t){const n=this.storage.get(e);if(!n)return;const{rules:r,result:s}=n,i=this.checkRulesValidity(e,t,r),o=s.$unwatch?s.$unwatch:()=>({});return i?s:{$dirty:s.$dirty,$partial:!0,$unwatch:o}}}const Rk={COLLECT_ALL:!0,COLLECT_NONE:!1},Ok=Symbol("vuelidate#injectChildResults"),Nk=Symbol("vuelidate#removeChildResults");function xk(e){return new Proxy(e,{get:(e,t)=>"object"==typeof e[t]?xk(e[t]):mi((()=>e[t]))})}let Lk=0;function Dk(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};1===arguments.length&&(r=e,e=void 0,t=void 0);let{$registerAs:s,$scope:i=Rk.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:l}=r;const c=l||(null===(n=ri())||void 0===n?void 0:n.proxy),u=c?c.$options:{};s||(Lk+=1,s=`_vuelidate_${Lk}`);const h=Lt({}),d=new Ak,{childResults:f,sendValidationResultsToParent:p,removeValidationResultsFromParent:m}=c?function(e){let{$scope:t,instance:n}=e;const r={},s=Lt([]),i=mi((()=>s.value.reduce(((e,t)=>(e[t]=Ft(r[t]),e)),{})));n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],(function(e,n){let{$registerAs:i,$scope:o,$stopPropagation:a}=n;a||t===Rk.COLLECT_NONE||o===Rk.COLLECT_NONE||t!==Rk.COLLECT_ALL&&t!==o||(r[i]=e,s.value.push(i))})),n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],(function(e){s.value=s.value.filter((t=>t!==e)),delete r[e]}));const o=zr(Ok,[]);qr(Ok,n.__vuelidateInjectInstances);const a=zr(Nk,[]);return qr(Nk,n.__vuelidateRemoveInstances),{childResults:i,sendValidationResultsToParent:o,removeValidationResultsFromParent:a}}({$scope:i,instance:c}):{childResults:Lt({})};if(!e&&u.validations){const e=u.validations;t=Lt({}),sr((()=>{t.value=c,ms((()=>bk(e)?e.call(t.value,new xk(t.value)):e),(e=>{h.value=Ck({validations:e,state:t,childResults:f,resultsCache:d,globalConfig:r,instance:c,externalResults:a||c.vuelidateExternalResults})}),{immediate:!0})})),r=u.validationsConfig||r}else{ms(xt(e)||(It(g=e)||kt(g))?e:bt(e||{}),(e=>{h.value=Ck({validations:e,state:t,childResults:f,resultsCache:d,globalConfig:r,instance:null!=c?c:{},externalResults:a})}),{immediate:!0})}var g;return c&&(p.forEach((e=>e(h,{$registerAs:s,$scope:i,$stopPropagation:o}))),lr((()=>m.forEach((e=>e(s)))))),mi((()=>yk(yk({},Ft(h.value)),f.value)))}const Pk=e=>{if(e=Ft(e),Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"==typeof e){for(let t in e)return!0;return!1}return!!String(e).length};function Mk(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>(e=Ft(e),!Pk(e)||t.every((t=>(t.lastIndex=0,t.test(e)))))}Mk(/^[a-zA-Z]*$/),Mk(/^[a-zA-Z0-9]*$/),Mk(/^\d*(\.\d+)?$/);var Fk={$validator:Mk(/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i),$message:"Value is not a valid email address",$params:{type:"email"}};function Uk(e){return t=>!Pk(t)||(e=>(e=Ft(e),Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length))(t)>=Ft(e)}function $k(e){return{$validator:Uk(e),$message:e=>{let{$params:t}=e;return`This field should be at least ${t.min} characters long`},$params:{min:e,type:"minLength"}}}var Vk={$validator:function(e){return"string"==typeof e&&(e=e.trim()),Pk(e)},$message:"Value is required",$params:{type:"required"}};function jk(e){return t=>Ft(t)===Ft(e)}function Bk(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"other";return{$validator:jk(e),$message:e=>`The value must be equal to the ${t} value`,$params:{equalTo:e,otherName:t,type:"sameAs"}}}Mk(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i),Mk(/(^[0-9]*$)|(^-[0-9]+$)/),Mk(/^[-]?\d*(\.\d+)?$/);export{mr as $,Xn as A,ir as B,Os as C,Ri as D,xt as E,As as F,qt as G,sr as H,_n as I,vr as J,Wi as K,ar as L,Rs as M,yr as N,On as O,Rt as P,Hs as Q,To as R,Ks as S,mo as T,Ml as U,q_ as V,ed as W,Yw as X,Ko as Y,hk as Z,qu as _,wt as a,Us as a0,Ds as a1,vn as a2,zs as a3,$s as a4,Gs as a5,wr as a6,ie as a7,So as a8,zu as a9,uk as aa,Ro as ab,Mo as ac,cr as ad,U_ as ae,_b as af,Ib as ag,Mb as ah,Y as ai,Qw as aj,Kw as ak,Gw as al,Ub as am,Gd as an,Fb as ao,wb as ap,Bk as aq,Vk as ar,$k as as,Fk as at,Dk as au,Bu as av,ju as aw,$_ as ax,Db as ay,bt as b,mi as c,Kn as d,he as e,B as f,ps as g,gi as h,zr as i,Vs as j,ri as k,$ as l,At as m,ln as n,fe as o,qr as p,Ws as q,Lt as r,Dt as s,Vt as t,Ft as u,Xs as v,ms as w,lr as x,Et as y,Zn as z};
