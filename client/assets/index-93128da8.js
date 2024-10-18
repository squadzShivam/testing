function Om(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Mm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rp={exports:{}},Al={},op={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),Dm=Symbol.for("react.portal"),Im=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Fm=Symbol.for("react.profiler"),Um=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Hm=Symbol.for("react.forward_ref"),Vm=Symbol.for("react.suspense"),Wm=Symbol.for("react.memo"),qm=Symbol.for("react.lazy"),td=Symbol.iterator;function Qm(e){return e===null||typeof e!="object"?null:(e=td&&e[td]||e["@@iterator"],typeof e=="function"?e:null)}var ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,ap={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||ip}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sp(){}sp.prototype=Yr.prototype;function Su(e,t,n){this.props=e,this.context=t,this.refs=ap,this.updater=n||ip}var bu=Su.prototype=new sp;bu.constructor=Su;lp(bu,Yr.prototype);bu.isPureReactComponent=!0;var nd=Array.isArray,up=Object.prototype.hasOwnProperty,Eu={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)up.call(t,r)&&!cp.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:si,type:e,key:i,ref:l,props:o,_owner:Eu.current}}function Km(e,t){return{$$typeof:si,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Cu(e){return typeof e=="object"&&e!==null&&e.$$typeof===si}function Ym(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rd=/\/+/g;function Sa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ym(""+e.key):t.toString(36)}function Fi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case si:case Dm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Sa(l,0):r,nd(o)?(n="",e!=null&&(n=e.replace(rd,"$&/")+"/"),Fi(o,t,n,"",function(u){return u})):o!=null&&(Cu(o)&&(o=Km(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(rd,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",nd(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Sa(i,a);l+=Fi(i,t,n,s,o)}else if(s=Qm(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Sa(i,a++),l+=Fi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ki(e,t,n){if(e==null)return e;var r=[],o=0;return Fi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ke={current:null},Ui={transition:null},Xm={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:Ui,ReactCurrentOwner:Eu};K.Children={map:ki,forEach:function(e,t,n){ki(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ki(e,function(){t++}),t},toArray:function(e){return ki(e,function(t){return t})||[]},only:function(e){if(!Cu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=Yr;K.Fragment=Im;K.Profiler=Fm;K.PureComponent=Su;K.StrictMode=Am;K.Suspense=Vm;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xm;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lp({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Eu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)up.call(t,s)&&!cp.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:si,type:e.type,key:o,ref:i,props:r,_owner:l}};K.createContext=function(e){return e={$$typeof:Bm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Um,_context:e},e.Consumer=e};K.createElement=dp;K.createFactory=function(e){var t=dp.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:Hm,render:e}};K.isValidElement=Cu;K.lazy=function(e){return{$$typeof:qm,_payload:{_status:-1,_result:e},_init:Gm}};K.memo=function(e,t){return{$$typeof:Wm,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=Ui.transition;Ui.transition={};try{e()}finally{Ui.transition=t}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(e,t){return Ke.current.useCallback(e,t)};K.useContext=function(e){return Ke.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Ke.current.useDeferredValue(e)};K.useEffect=function(e,t){return Ke.current.useEffect(e,t)};K.useId=function(){return Ke.current.useId()};K.useImperativeHandle=function(e,t,n){return Ke.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Ke.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Ke.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Ke.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Ke.current.useReducer(e,t,n)};K.useRef=function(e){return Ke.current.useRef(e)};K.useState=function(e){return Ke.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Ke.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Ke.current.useTransition()};K.version="18.2.0";op.exports=K;var S=op.exports;const ke=Mm(S),Zm=Om({__proto__:null,default:ke},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=S,e1=Symbol.for("react.element"),t1=Symbol.for("react.fragment"),n1=Object.prototype.hasOwnProperty,r1=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o1={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)n1.call(t,r)&&!o1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:e1,type:e,key:i,ref:l,props:o,_owner:r1.current}}Al.Fragment=t1;Al.jsx=fp;Al.jsxs=fp;rp.exports=Al;var c=rp.exports,ss={},pp={exports:{}},ct={},hp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,M){var D=L.length;L.push(M);e:for(;0<D;){var ie=D-1>>>1,de=L[ie];if(0<o(de,M))L[ie]=M,L[D]=de,D=ie;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var M=L[0],D=L.pop();if(D!==M){L[0]=D;e:for(var ie=0,de=L.length,Ct=de>>>1;ie<Ct;){var ne=2*(ie+1)-1,Ge=L[ne],Fe=ne+1,Xe=L[Fe];if(0>o(Ge,D))Fe<de&&0>o(Xe,Ge)?(L[ie]=Xe,L[Fe]=D,ie=Fe):(L[ie]=Ge,L[ne]=D,ie=ne);else if(Fe<de&&0>o(Xe,D))L[ie]=Xe,L[Fe]=D,ie=Fe;else break e}}return M}function o(L,M){var D=L.sortIndex-M.sortIndex;return D!==0?D:L.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,f=null,h=3,x=!1,y=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=L)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function g(L){if(w=!1,v(L),!y)if(n(s)!==null)y=!0,We(C);else{var M=n(u);M!==null&&je(g,M.startTime-L)}}function C(L,M){y=!1,w&&(w=!1,m(_),_=-1),x=!0;var D=h;try{for(v(M),f=n(s);f!==null&&(!(f.expirationTime>M)||L&&!Ce());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var de=ie(f.expirationTime<=M);M=e.unstable_now(),typeof de=="function"?f.callback=de:f===n(s)&&r(s),v(M)}else r(s);f=n(s)}if(f!==null)var Ct=!0;else{var ne=n(u);ne!==null&&je(g,ne.startTime-M),Ct=!1}return Ct}finally{f=null,h=D,x=!1}}var $=!1,R=null,_=-1,Y=5,F=-1;function Ce(){return!(e.unstable_now()-F<Y)}function te(){if(R!==null){var L=e.unstable_now();F=L;var M=!0;try{M=R(!0,L)}finally{M?Ot():($=!1,R=null)}}else $=!1}var Ot;if(typeof p=="function")Ot=function(){p(te)};else if(typeof MessageChannel<"u"){var fn=new MessageChannel,Mt=fn.port2;fn.port1.onmessage=te,Ot=function(){Mt.postMessage(null)}}else Ot=function(){E(te,0)};function We(L){R=L,$||($=!0,Ot())}function je(L,M){_=E(function(){L(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,We(C))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var D=h;h=M;try{return L()}finally{h=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,M){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var D=h;h=L;try{return M()}finally{h=D}},e.unstable_scheduleCallback=function(L,M,D){var ie=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ie+D:ie):D=ie,L){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=D+de,L={id:d++,callback:M,priorityLevel:L,startTime:D,expirationTime:de,sortIndex:-1},D>ie?(L.sortIndex=D,t(u,L),n(s)===null&&L===n(u)&&(w?(m(_),_=-1):w=!0,je(g,D-ie))):(L.sortIndex=de,t(s,L),y||x||(y=!0,We(C))),L},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(L){var M=h;return function(){var D=h;h=M;try{return L.apply(this,arguments)}finally{h=D}}}})(mp);hp.exports=mp;var i1=hp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=S,ut=i1;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,Mo={};function or(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Mo[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),us=Object.prototype.hasOwnProperty,l1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od={},id={};function a1(e){return us.call(id,e)?!0:us.call(od,e)?!1:l1.test(e)?id[e]=!0:(od[e]=!0,!1)}function s1(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function u1(e,t,n,r){if(t===null||typeof t>"u"||s1(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var ju=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ju,Ru);Ae[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ju,Ru);Ae[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ju,Ru);Ae[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Pu(e,t,n,r){var o=Ae.hasOwnProperty(t)?Ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(u1(t,n,o,r)&&(n=null),r||o===null?a1(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Si=Symbol.for("react.element"),fr=Symbol.for("react.portal"),pr=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),cs=Symbol.for("react.profiler"),vp=Symbol.for("react.provider"),xp=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),ds=Symbol.for("react.suspense"),fs=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),wp=Symbol.for("react.offscreen"),ld=Symbol.iterator;function lo(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,ba;function wo(e){if(ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ba=t&&t[1]||""}return`
`+ba+e}var Ea=!1;function Ca(e,t){if(!e||Ea)return"";Ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wo(e):""}function c1(e){switch(e.tag){case 5:return wo(e.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return e=Ca(e.type,!1),e;case 11:return e=Ca(e.type.render,!1),e;case 1:return e=Ca(e.type,!0),e;default:return""}}function ps(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case pr:return"Fragment";case fr:return"Portal";case cs:return"Profiler";case $u:return"StrictMode";case ds:return"Suspense";case fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xp:return(e.displayName||"Context")+".Consumer";case vp:return(e._context.displayName||"Context")+".Provider";case Nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lu:return t=e.displayName||null,t!==null?t:ps(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return ps(e(t))}catch{}}return null}function d1(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ps(t);case 8:return t===$u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function f1(e){var t=kp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=f1(e))}function Sp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hs(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ad(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bp(e,t){t=t.checked,t!=null&&Pu(e,"checked",t,!1)}function ms(e,t){bp(e,t);var n=Tn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gs(e,t.type,n):t.hasOwnProperty("defaultValue")&&gs(e,t.type,Tn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gs(e,t,n){(t!=="number"||sl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ko=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ys(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(ko(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tn(n)}}function Ep(e,t){var n=Tn(t.value),r=Tn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,jp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Do(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},p1=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){p1.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function Rp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function Pp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Rp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var h1=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xs(e,t){if(t){if(h1[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ws(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ks=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,Pr=null,$r=null;function dd(e){if(e=di(e)){if(typeof Ss!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Vl(t),Ss(e.stateNode,e.type,t))}}function $p(e){Pr?$r?$r.push(e):$r=[e]:Pr=e}function Np(){if(Pr){var e=Pr,t=$r;if($r=Pr=null,dd(e),t)for(e=0;e<t.length;e++)dd(t[e])}}function Lp(e,t){return e(t)}function _p(){}var ja=!1;function zp(e,t,n){if(ja)return e(t,n);ja=!0;try{return Lp(e,t,n)}finally{ja=!1,(Pr!==null||$r!==null)&&(_p(),Np())}}function Io(e,t){var n=e.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var bs=!1;if(on)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){bs=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{bs=!1}function m1(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var jo=!1,ul=null,cl=!1,Es=null,g1={onError:function(e){jo=!0,ul=e}};function y1(e,t,n,r,o,i,l,a,s){jo=!1,ul=null,m1.apply(g1,arguments)}function v1(e,t,n,r,o,i,l,a,s){if(y1.apply(this,arguments),jo){if(jo){var u=ul;jo=!1,ul=null}else throw Error(N(198));cl||(cl=!0,Es=u)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fd(e){if(ir(e)!==e)throw Error(N(188))}function x1(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return fd(o),e;if(i===r)return fd(o),t;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Op(e){return e=x1(e),e!==null?Mp(e):null}function Mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mp(e);if(t!==null)return t;e=e.sibling}return null}var Dp=ut.unstable_scheduleCallback,pd=ut.unstable_cancelCallback,w1=ut.unstable_shouldYield,k1=ut.unstable_requestPaint,we=ut.unstable_now,S1=ut.unstable_getCurrentPriorityLevel,zu=ut.unstable_ImmediatePriority,Ip=ut.unstable_UserBlockingPriority,dl=ut.unstable_NormalPriority,b1=ut.unstable_LowPriority,Ap=ut.unstable_IdlePriority,Fl=null,qt=null;function E1(e){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Fl,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:R1,C1=Math.log,j1=Math.LN2;function R1(e){return e>>>=0,e===0?32:31-(C1(e)/j1|0)|0}var Ci=64,ji=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function fl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=So(a):(i&=l,i!==0&&(r=So(i)))}else l=n&~o,l!==0?r=So(l):i!==0&&(r=So(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function P1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Lt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=P1(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fp(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function Ra(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function N1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function Up(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bp,Ou,Hp,Vp,Wp,js=!1,Ri=[],En=null,Cn=null,jn=null,Ao=new Map,Fo=new Map,xn=[],L1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function so(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=di(t),t!==null&&Ou(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _1(e,t,n,r,o){switch(t){case"focusin":return En=so(En,e,t,n,r,o),!0;case"dragenter":return Cn=so(Cn,e,t,n,r,o),!0;case"mouseover":return jn=so(jn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ao.set(i,so(Ao.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fo.set(i,so(Fo.get(i)||null,e,t,n,r,o)),!0}return!1}function qp(e){var t=Bn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Tp(n),t!==null){e.blockedOn=t,Wp(e.priority,function(){Hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ks=r,n.target.dispatchEvent(r),ks=null}else return t=di(n),t!==null&&Ou(t),e.blockedOn=n,!1;t.shift()}return!0}function md(e,t,n){Bi(e)&&n.delete(t)}function z1(){js=!1,En!==null&&Bi(En)&&(En=null),Cn!==null&&Bi(Cn)&&(Cn=null),jn!==null&&Bi(jn)&&(jn=null),Ao.forEach(md),Fo.forEach(md)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,js||(js=!0,ut.unstable_scheduleCallback(ut.unstable_NormalPriority,z1)))}function Uo(e){function t(o){return uo(o,e)}if(0<Ri.length){uo(Ri[0],e);for(var n=1;n<Ri.length;n++){var r=Ri[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&uo(En,e),Cn!==null&&uo(Cn,e),jn!==null&&uo(jn,e),Ao.forEach(t),Fo.forEach(t),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&xn.shift()}var Nr=un.ReactCurrentBatchConfig,pl=!0;function T1(e,t,n,r){var o=oe,i=Nr.transition;Nr.transition=null;try{oe=1,Mu(e,t,n,r)}finally{oe=o,Nr.transition=i}}function O1(e,t,n,r){var o=oe,i=Nr.transition;Nr.transition=null;try{oe=4,Mu(e,t,n,r)}finally{oe=o,Nr.transition=i}}function Mu(e,t,n,r){if(pl){var o=Rs(e,t,n,r);if(o===null)Da(e,t,r,hl,n),hd(e,r);else if(_1(o,e,t,n,r))r.stopPropagation();else if(hd(e,r),t&4&&-1<L1.indexOf(e)){for(;o!==null;){var i=di(o);if(i!==null&&Bp(i),i=Rs(e,t,n,r),i===null&&Da(e,t,r,hl,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Da(e,t,r,null,n)}}var hl=null;function Rs(e,t,n,r){if(hl=null,e=_u(r),e=Bn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hl=e,null}function Qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case zu:return 1;case Ip:return 4;case dl:case b1:return 16;case Ap:return 536870912;default:return 16}default:return 16}}var Sn=null,Du=null,Hi=null;function Kp(){if(Hi)return Hi;var e,t=Du,n=t.length,r,o="value"in Sn?Sn.value:Sn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Hi=o.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function gd(){return!1}function dt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Pi:gd,this.isPropagationStopped=gd,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=dt(Gr),ci=ye({},Gr,{view:0,detail:0}),M1=dt(ci),Pa,$a,co,Ul=ye({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Pa=e.screenX-co.screenX,$a=e.screenY-co.screenY):$a=Pa=0,co=e),Pa)},movementY:function(e){return"movementY"in e?e.movementY:$a}}),yd=dt(Ul),D1=ye({},Ul,{dataTransfer:0}),I1=dt(D1),A1=ye({},ci,{relatedTarget:0}),Na=dt(A1),F1=ye({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),U1=dt(F1),B1=ye({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H1=dt(B1),V1=ye({},Gr,{data:0}),vd=dt(V1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Q1[e])?!!t[e]:!1}function Au(){return K1}var Y1=ye({},ci,{key:function(e){if(e.key){var t=W1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?q1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),G1=dt(Y1),X1=ye({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=dt(X1),Z1=ye({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),J1=dt(Z1),eg=ye({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tg=dt(eg),ng=ye({},Ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=dt(ng),og=[9,13,27,32],Fu=on&&"CompositionEvent"in window,Ro=null;on&&"documentMode"in document&&(Ro=document.documentMode);var ig=on&&"TextEvent"in window&&!Ro,Yp=on&&(!Fu||Ro&&8<Ro&&11>=Ro),wd=String.fromCharCode(32),kd=!1;function Gp(e,t){switch(e){case"keyup":return og.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function lg(e,t){switch(e){case"compositionend":return Xp(t);case"keypress":return t.which!==32?null:(kd=!0,wd);case"textInput":return e=t.data,e===wd&&kd?null:e;default:return null}}function ag(e,t){if(hr)return e==="compositionend"||!Fu&&Gp(e,t)?(e=Kp(),Hi=Du=Sn=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yp&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function Zp(e,t,n,r){$p(r),t=ml(t,"onChange"),0<t.length&&(n=new Iu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Po=null,Bo=null;function ug(e){uh(e,0)}function Bl(e){var t=yr(e);if(Sp(t))return e}function cg(e,t){if(e==="change")return t}var Jp=!1;if(on){var La;if(on){var _a="oninput"in document;if(!_a){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),_a=typeof bd.oninput=="function"}La=_a}else La=!1;Jp=La&&(!document.documentMode||9<document.documentMode)}function Ed(){Po&&(Po.detachEvent("onpropertychange",eh),Bo=Po=null)}function eh(e){if(e.propertyName==="value"&&Bl(Bo)){var t=[];Zp(t,Bo,e,_u(e)),zp(ug,t)}}function dg(e,t,n){e==="focusin"?(Ed(),Po=t,Bo=n,Po.attachEvent("onpropertychange",eh)):e==="focusout"&&Ed()}function fg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bl(Bo)}function pg(e,t){if(e==="click")return Bl(t)}function hg(e,t){if(e==="input"||e==="change")return Bl(t)}function mg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:mg;function Ho(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!us.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jd(e,t){var n=Cd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cd(n)}}function th(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?th(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nh(){for(var e=window,t=sl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=sl(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gg(e){var t=nh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&th(n.ownerDocument.documentElement,n)){if(r!==null&&Uu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=jd(n,i);var l=jd(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yg=on&&"documentMode"in document&&11>=document.documentMode,mr=null,Ps=null,$o=null,$s=!1;function Rd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$s||mr==null||mr!==sl(r)||(r=mr,"selectionStart"in r&&Uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$o&&Ho($o,r)||($o=r,r=ml(Ps,"onSelect"),0<r.length&&(t=new Iu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function $i(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:$i("Animation","AnimationEnd"),animationiteration:$i("Animation","AnimationIteration"),animationstart:$i("Animation","AnimationStart"),transitionend:$i("Transition","TransitionEnd")},za={},rh={};on&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Hl(e){if(za[e])return za[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rh)return za[e]=t[n];return e}var oh=Hl("animationend"),ih=Hl("animationiteration"),lh=Hl("animationstart"),ah=Hl("transitionend"),sh=new Map,Pd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,t){sh.set(e,t),or(t,[e])}for(var Ta=0;Ta<Pd.length;Ta++){var Oa=Pd[Ta],vg=Oa.toLowerCase(),xg=Oa[0].toUpperCase()+Oa.slice(1);Mn(vg,"on"+xg)}Mn(oh,"onAnimationEnd");Mn(ih,"onAnimationIteration");Mn(lh,"onAnimationStart");Mn("dblclick","onDoubleClick");Mn("focusin","onFocus");Mn("focusout","onBlur");Mn(ah,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wg=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function $d(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,v1(r,t,void 0,e),e.currentTarget=null}function uh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;$d(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;$d(o,a,u),i=s}}}if(cl)throw e=Es,cl=!1,Es=null,e}function se(e,t){var n=t[Ts];n===void 0&&(n=t[Ts]=new Set);var r=e+"__bubble";n.has(r)||(ch(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),ch(n,e,r,t)}var Ni="_reactListening"+Math.random().toString(36).slice(2);function Vo(e){if(!e[Ni]){e[Ni]=!0,yp.forEach(function(n){n!=="selectionchange"&&(wg.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ni]||(t[Ni]=!0,Ma("selectionchange",!1,t))}}function ch(e,t,n,r){switch(Qp(t)){case 1:var o=T1;break;case 4:o=O1;break;default:o=Mu}n=o.bind(null,t,n,e),o=void 0,!bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Da(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Bn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}zp(function(){var u=i,d=_u(n),f=[];e:{var h=sh.get(e);if(h!==void 0){var x=Iu,y=e;switch(e){case"keypress":if(Vi(n)===0)break e;case"keydown":case"keyup":x=G1;break;case"focusin":y="focus",x=Na;break;case"focusout":y="blur",x=Na;break;case"beforeblur":case"afterblur":x=Na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=I1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=J1;break;case oh:case ih:case lh:x=U1;break;case ah:x=tg;break;case"scroll":x=M1;break;case"wheel":x=rg;break;case"copy":case"cut":case"paste":x=H1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=xd}var w=(t&4)!==0,E=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,v;p!==null;){v=p;var g=v.stateNode;if(v.tag===5&&g!==null&&(v=g,m!==null&&(g=Io(p,m),g!=null&&w.push(Wo(p,g,v)))),E)break;p=p.return}0<w.length&&(h=new x(h,y,null,n,d),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==ks&&(y=n.relatedTarget||n.fromElement)&&(Bn(y)||y[ln]))break e;if((x||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?Bn(y):null,y!==null&&(E=ir(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=yd,g="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=xd,g="onPointerLeave",m="onPointerEnter",p="pointer"),E=x==null?h:yr(x),v=y==null?h:yr(y),h=new w(g,p+"leave",x,n,d),h.target=E,h.relatedTarget=v,g=null,Bn(d)===u&&(w=new w(m,p+"enter",y,n,d),w.target=v,w.relatedTarget=E,g=w),E=g,x&&y)t:{for(w=x,m=y,p=0,v=w;v;v=ur(v))p++;for(v=0,g=m;g;g=ur(g))v++;for(;0<p-v;)w=ur(w),p--;for(;0<v-p;)m=ur(m),v--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=ur(w),m=ur(m)}w=null}else w=null;x!==null&&Nd(f,h,x,w,!1),y!==null&&E!==null&&Nd(f,E,y,w,!0)}}e:{if(h=u?yr(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var C=cg;else if(Sd(h))if(Jp)C=hg;else{C=fg;var $=dg}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=pg);if(C&&(C=C(e,u))){Zp(f,C,n,d);break e}$&&$(e,h,u),e==="focusout"&&($=h._wrapperState)&&$.controlled&&h.type==="number"&&gs(h,"number",h.value)}switch($=u?yr(u):window,e){case"focusin":(Sd($)||$.contentEditable==="true")&&(mr=$,Ps=u,$o=null);break;case"focusout":$o=Ps=mr=null;break;case"mousedown":$s=!0;break;case"contextmenu":case"mouseup":case"dragend":$s=!1,Rd(f,n,d);break;case"selectionchange":if(yg)break;case"keydown":case"keyup":Rd(f,n,d)}var R;if(Fu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else hr?Gp(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Yp&&n.locale!=="ko"&&(hr||_!=="onCompositionStart"?_==="onCompositionEnd"&&hr&&(R=Kp()):(Sn=d,Du="value"in Sn?Sn.value:Sn.textContent,hr=!0)),$=ml(u,_),0<$.length&&(_=new vd(_,e,null,n,d),f.push({event:_,listeners:$}),R?_.data=R:(R=Xp(n),R!==null&&(_.data=R)))),(R=ig?lg(e,n):ag(e,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(d=new vd("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}uh(f,t)})}function Wo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ml(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Io(e,n),i!=null&&r.unshift(Wo(e,i,o)),i=Io(e,t),i!=null&&r.push(Wo(e,i,o))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nd(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Io(n,i),s!=null&&l.unshift(Wo(n,s,a))):o||(s=Io(n,i),s!=null&&l.push(Wo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var kg=/\r\n?/g,Sg=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(kg,`
`).replace(Sg,"")}function Li(e,t,n){if(t=Ld(t),Ld(e)!==t&&n)throw Error(N(425))}function gl(){}var Ns=null,Ls=null;function _s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,_d=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof _d<"u"?function(e){return _d.resolve(null).then(e).catch(Cg)}:zs;function Cg(e){setTimeout(function(){throw e})}function Ia(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Uo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Uo(t)}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Xr,qo="__reactProps$"+Xr,ln="__reactContainer$"+Xr,Ts="__reactEvents$"+Xr,jg="__reactListeners$"+Xr,Rg="__reactHandles$"+Xr;function Bn(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ln]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=zd(e);e!==null;){if(n=e[Bt])return n;e=zd(e)}return t}e=n,n=e.parentNode}return null}function di(e){return e=e[Bt]||e[ln],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Vl(e){return e[qo]||null}var Os=[],vr=-1;function Dn(e){return{current:e}}function ce(e){0>vr||(e.current=Os[vr],Os[vr]=null,vr--)}function ae(e,t){vr++,Os[vr]=e.current,e.current=t}var On={},Ve=Dn(On),tt=Dn(!1),Gn=On;function Or(e,t){var n=e.type.contextTypes;if(!n)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function nt(e){return e=e.childContextTypes,e!=null}function yl(){ce(tt),ce(Ve)}function Td(e,t,n){if(Ve.current!==On)throw Error(N(168));ae(Ve,t),ae(tt,n)}function dh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,d1(e)||"Unknown",o));return ye({},n,r)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,Gn=Ve.current,ae(Ve,e),ae(tt,tt.current),!0}function Od(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=dh(e,t,Gn),r.__reactInternalMemoizedMergedChildContext=e,ce(tt),ce(Ve),ae(Ve,e)):ce(tt),ae(tt,n)}var Zt=null,Wl=!1,Aa=!1;function fh(e){Zt===null?Zt=[e]:Zt.push(e)}function Pg(e){Wl=!0,fh(e)}function In(){if(!Aa&&Zt!==null){Aa=!0;var e=0,t=oe;try{var n=Zt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zt=null,Wl=!1}catch(o){throw Zt!==null&&(Zt=Zt.slice(e+1)),Dp(zu,In),o}finally{oe=t,Aa=!1}}return null}var xr=[],wr=0,xl=null,wl=0,mt=[],gt=0,Xn=null,Jt=1,en="";function An(e,t){xr[wr++]=wl,xr[wr++]=xl,xl=e,wl=t}function ph(e,t,n){mt[gt++]=Jt,mt[gt++]=en,mt[gt++]=Xn,Xn=e;var r=Jt;e=en;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var i=32-Lt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Jt=1<<32-Lt(t)+o|n<<o|r,en=i+e}else Jt=1<<i|n<<o|r,en=e}function Bu(e){e.return!==null&&(An(e,1),ph(e,1,0))}function Hu(e){for(;e===xl;)xl=xr[--wr],xr[wr]=null,wl=xr[--wr],xr[wr]=null;for(;e===Xn;)Xn=mt[--gt],mt[gt]=null,en=mt[--gt],mt[gt]=null,Jt=mt[--gt],mt[gt]=null}var st=null,at=null,he=!1,Nt=null;function hh(e,t){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Md(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,at=Rn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Jt,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,at=null,!0):!1;default:return!1}}function Ms(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ds(e){if(he){var t=at;if(t){var n=t;if(!Md(e,t)){if(Ms(e))throw Error(N(418));t=Rn(n.nextSibling);var r=st;t&&Md(e,t)?hh(r,n):(e.flags=e.flags&-4097|2,he=!1,st=e)}}else{if(Ms(e))throw Error(N(418));e.flags=e.flags&-4097|2,he=!1,st=e}}}function Dd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function _i(e){if(e!==st)return!1;if(!he)return Dd(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_s(e.type,e.memoizedProps)),t&&(t=at)){if(Ms(e))throw mh(),Error(N(418));for(;t;)hh(e,t),t=Rn(t.nextSibling)}if(Dd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=Rn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=st?Rn(e.stateNode.nextSibling):null;return!0}function mh(){for(var e=at;e;)e=Rn(e.nextSibling)}function Mr(){at=st=null,he=!1}function Vu(e){Nt===null?Nt=[e]:Nt.push(e)}var $g=un.ReactCurrentBatchConfig;function Rt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var kl=Dn(null),Sl=null,kr=null,Wu=null;function qu(){Wu=kr=Sl=null}function Qu(e){var t=kl.current;ce(kl),e._currentValue=t}function Is(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lr(e,t){Sl=e,Wu=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Wu!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(Sl===null)throw Error(N(308));kr=e,Sl.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var Hn=null;function Ku(e){Hn===null?Hn=[e]:Hn.push(e)}function gh(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ku(t)):(n.next=o.next,o.next=n),t.interleaved=n,an(e,r)}function an(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vn=!1;function Yu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,an(e,n)}return o=r.interleaved,o===null?(t.next=t,Ku(r)):(t.next=o.next,o.next=t),r.interleaved=t,an(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}function Id(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bl(e,t,n,r){var o=e.updateQueue;vn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=u=s=null,a=i;do{var h=a.lane,x=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(h=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(x,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(x,f,h):y,h==null)break e;f=ye({},f,h);break e;case 2:vn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else x={eventTime:x,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=x,s=f):d=d.next=x,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Jn|=l,e.lanes=l,e.memoizedState=f}}function Ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var vh=new gp.Component().refs;function As(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ql={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Nn(e),i=tn(r,o);i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,o),t!==null&&(_t(t,e,o,r),Wi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),o=Nn(e),i=tn(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pn(e,i,o),t!==null&&(_t(t,e,o,r),Wi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Nn(e),o=tn(n,r);o.tag=2,t!=null&&(o.callback=t),t=Pn(e,o,r),t!==null&&(_t(t,e,r,n),Wi(t,e,r))}};function Fd(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Ho(n,r)||!Ho(o,i):!0}function xh(e,t,n){var r=!1,o=On,i=t.contextType;return typeof i=="object"&&i!==null?i=wt(i):(o=nt(t)?Gn:Ve.current,r=t.contextTypes,i=(r=r!=null)?Or(e,o):On),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ql,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ud(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ql.enqueueReplaceState(t,t.state,null)}function Fs(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=vh,Yu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=wt(i):(i=nt(t)?Gn:Ve.current,o.context=Or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(As(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ql.enqueueReplaceState(o,o.state,null),bl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function fo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===vh&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function zi(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bd(e){var t=e._init;return t(e._payload)}function wh(e){function t(m,p){if(e){var v=m.deletions;v===null?(m.deletions=[p],m.flags|=16):v.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=Ln(m,p),m.index=0,m.sibling=null,m}function i(m,p,v){return m.index=v,e?(v=m.alternate,v!==null?(v=v.index,v<p?(m.flags|=2,p):v):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,v,g){return p===null||p.tag!==6?(p=qa(v,m.mode,g),p.return=m,p):(p=o(p,v),p.return=m,p)}function s(m,p,v,g){var C=v.type;return C===pr?d(m,p,v.props.children,g,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yn&&Bd(C)===p.type)?(g=o(p,v.props),g.ref=fo(m,p,v),g.return=m,g):(g=Xi(v.type,v.key,v.props,null,m.mode,g),g.ref=fo(m,p,v),g.return=m,g)}function u(m,p,v,g){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Qa(v,m.mode,g),p.return=m,p):(p=o(p,v.children||[]),p.return=m,p)}function d(m,p,v,g,C){return p===null||p.tag!==7?(p=Kn(v,m.mode,g,C),p.return=m,p):(p=o(p,v),p.return=m,p)}function f(m,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=qa(""+p,m.mode,v),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Si:return v=Xi(p.type,p.key,p.props,null,m.mode,v),v.ref=fo(m,null,p),v.return=m,v;case fr:return p=Qa(p,m.mode,v),p.return=m,p;case yn:var g=p._init;return f(m,g(p._payload),v)}if(ko(p)||lo(p))return p=Kn(p,m.mode,v,null),p.return=m,p;zi(m,p)}return null}function h(m,p,v,g){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(m,p,""+v,g);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Si:return v.key===C?s(m,p,v,g):null;case fr:return v.key===C?u(m,p,v,g):null;case yn:return C=v._init,h(m,p,C(v._payload),g)}if(ko(v)||lo(v))return C!==null?null:d(m,p,v,g,null);zi(m,v)}return null}function x(m,p,v,g,C){if(typeof g=="string"&&g!==""||typeof g=="number")return m=m.get(v)||null,a(p,m,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Si:return m=m.get(g.key===null?v:g.key)||null,s(p,m,g,C);case fr:return m=m.get(g.key===null?v:g.key)||null,u(p,m,g,C);case yn:var $=g._init;return x(m,p,v,$(g._payload),C)}if(ko(g)||lo(g))return m=m.get(v)||null,d(p,m,g,C,null);zi(p,g)}return null}function y(m,p,v,g){for(var C=null,$=null,R=p,_=p=0,Y=null;R!==null&&_<v.length;_++){R.index>_?(Y=R,R=null):Y=R.sibling;var F=h(m,R,v[_],g);if(F===null){R===null&&(R=Y);break}e&&R&&F.alternate===null&&t(m,R),p=i(F,p,_),$===null?C=F:$.sibling=F,$=F,R=Y}if(_===v.length)return n(m,R),he&&An(m,_),C;if(R===null){for(;_<v.length;_++)R=f(m,v[_],g),R!==null&&(p=i(R,p,_),$===null?C=R:$.sibling=R,$=R);return he&&An(m,_),C}for(R=r(m,R);_<v.length;_++)Y=x(R,m,_,v[_],g),Y!==null&&(e&&Y.alternate!==null&&R.delete(Y.key===null?_:Y.key),p=i(Y,p,_),$===null?C=Y:$.sibling=Y,$=Y);return e&&R.forEach(function(Ce){return t(m,Ce)}),he&&An(m,_),C}function w(m,p,v,g){var C=lo(v);if(typeof C!="function")throw Error(N(150));if(v=C.call(v),v==null)throw Error(N(151));for(var $=C=null,R=p,_=p=0,Y=null,F=v.next();R!==null&&!F.done;_++,F=v.next()){R.index>_?(Y=R,R=null):Y=R.sibling;var Ce=h(m,R,F.value,g);if(Ce===null){R===null&&(R=Y);break}e&&R&&Ce.alternate===null&&t(m,R),p=i(Ce,p,_),$===null?C=Ce:$.sibling=Ce,$=Ce,R=Y}if(F.done)return n(m,R),he&&An(m,_),C;if(R===null){for(;!F.done;_++,F=v.next())F=f(m,F.value,g),F!==null&&(p=i(F,p,_),$===null?C=F:$.sibling=F,$=F);return he&&An(m,_),C}for(R=r(m,R);!F.done;_++,F=v.next())F=x(R,m,_,F.value,g),F!==null&&(e&&F.alternate!==null&&R.delete(F.key===null?_:F.key),p=i(F,p,_),$===null?C=F:$.sibling=F,$=F);return e&&R.forEach(function(te){return t(m,te)}),he&&An(m,_),C}function E(m,p,v,g){if(typeof v=="object"&&v!==null&&v.type===pr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Si:e:{for(var C=v.key,$=p;$!==null;){if($.key===C){if(C=v.type,C===pr){if($.tag===7){n(m,$.sibling),p=o($,v.props.children),p.return=m,m=p;break e}}else if($.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yn&&Bd(C)===$.type){n(m,$.sibling),p=o($,v.props),p.ref=fo(m,$,v),p.return=m,m=p;break e}n(m,$);break}else t(m,$);$=$.sibling}v.type===pr?(p=Kn(v.props.children,m.mode,g,v.key),p.return=m,m=p):(g=Xi(v.type,v.key,v.props,null,m.mode,g),g.ref=fo(m,p,v),g.return=m,m=g)}return l(m);case fr:e:{for($=v.key;p!==null;){if(p.key===$)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(m,p.sibling),p=o(p,v.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Qa(v,m.mode,g),p.return=m,m=p}return l(m);case yn:return $=v._init,E(m,p,$(v._payload),g)}if(ko(v))return y(m,p,v,g);if(lo(v))return w(m,p,v,g);zi(m,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,v),p.return=m,m=p):(n(m,p),p=qa(v,m.mode,g),p.return=m,m=p),l(m)):n(m,p)}return E}var Dr=wh(!0),kh=wh(!1),fi={},Qt=Dn(fi),Qo=Dn(fi),Ko=Dn(fi);function Vn(e){if(e===fi)throw Error(N(174));return e}function Gu(e,t){switch(ae(Ko,t),ae(Qo,e),ae(Qt,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vs(t,e)}ce(Qt),ae(Qt,t)}function Ir(){ce(Qt),ce(Qo),ce(Ko)}function Sh(e){Vn(Ko.current);var t=Vn(Qt.current),n=vs(t,e.type);t!==n&&(ae(Qo,e),ae(Qt,n))}function Xu(e){Qo.current===e&&(ce(Qt),ce(Qo))}var me=Dn(0);function El(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa=[];function Zu(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var qi=un.ReactCurrentDispatcher,Ua=un.ReactCurrentBatchConfig,Zn=0,ge=null,Pe=null,_e=null,Cl=!1,No=!1,Yo=0,Ng=0;function Ue(){throw Error(N(321))}function Ju(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function ec(e,t,n,r,o,i){if(Zn=i,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qi.current=e===null||e.memoizedState===null?Tg:Og,e=n(r,o),No){i=0;do{if(No=!1,Yo=0,25<=i)throw Error(N(301));i+=1,_e=Pe=null,t.updateQueue=null,qi.current=Mg,e=n(r,o)}while(No)}if(qi.current=jl,t=Pe!==null&&Pe.next!==null,Zn=0,_e=Pe=ge=null,Cl=!1,t)throw Error(N(300));return e}function tc(){var e=Yo!==0;return Yo=0,e}function Ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ge.memoizedState=_e=e:_e=_e.next=e,_e}function kt(){if(Pe===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=_e===null?ge.memoizedState:_e.next;if(t!==null)_e=t,Pe=e;else{if(e===null)throw Error(N(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},_e===null?ge.memoizedState=_e=e:_e=_e.next=e}return _e}function Go(e,t){return typeof t=="function"?t(e):t}function Ba(e){var t=kt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((Zn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,ge.lanes|=d,Jn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Tt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ge.lanes|=i,Jn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ha(e){var t=kt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Tt(i,t.memoizedState)||(et=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bh(){}function Eh(e,t){var n=ge,r=kt(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,et=!0),r=r.queue,nc(Rh.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,Xo(9,jh.bind(null,n,r,o,t),void 0,null),Oe===null)throw Error(N(349));Zn&30||Ch(n,t,o)}return o}function Ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function jh(e,t,n,r){t.value=n,t.getSnapshot=r,Ph(t)&&$h(e)}function Rh(e,t,n){return n(function(){Ph(t)&&$h(e)})}function Ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function $h(e){var t=an(e,1);t!==null&&_t(t,e,1,-1)}function Hd(e){var t=Ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},t.queue=e,e=e.dispatch=zg.bind(null,ge,e),[t.memoizedState,e]}function Xo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nh(){return kt().memoizedState}function Qi(e,t,n,r){var o=Ft();ge.flags|=e,o.memoizedState=Xo(1|t,n,void 0,r===void 0?null:r)}function Ql(e,t,n,r){var o=kt();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var l=Pe.memoizedState;if(i=l.destroy,r!==null&&Ju(r,l.deps)){o.memoizedState=Xo(t,n,i,r);return}}ge.flags|=e,o.memoizedState=Xo(1|t,n,i,r)}function Vd(e,t){return Qi(8390656,8,e,t)}function nc(e,t){return Ql(2048,8,e,t)}function Lh(e,t){return Ql(4,2,e,t)}function _h(e,t){return Ql(4,4,e,t)}function zh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Th(e,t,n){return n=n!=null?n.concat([e]):null,Ql(4,4,zh.bind(null,t,e),n)}function rc(){}function Oh(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ju(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Mh(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ju(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Dh(e,t,n){return Zn&21?(Tt(n,t)||(n=Fp(),ge.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function Lg(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Ua.transition;Ua.transition={};try{e(!1),t()}finally{oe=n,Ua.transition=r}}function Ih(){return kt().memoizedState}function _g(e,t,n){var r=Nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ah(e))Fh(t,n);else if(n=gh(e,t,n,r),n!==null){var o=Qe();_t(n,e,r,o),Uh(n,t,r)}}function zg(e,t,n){var r=Nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ah(e))Fh(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Tt(a,l)){var s=t.interleaved;s===null?(o.next=o,Ku(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=gh(e,t,o,r),n!==null&&(o=Qe(),_t(n,e,r,o),Uh(n,t,r))}}function Ah(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function Fh(e,t){No=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Uh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Tu(e,n)}}var jl={readContext:wt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},Tg={readContext:wt,useCallback:function(e,t){return Ft().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:Vd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4194308,4,zh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Qi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Qi(4,2,e,t)},useMemo:function(e,t){var n=Ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_g.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Ft();return e={current:e},t.memoizedState=e},useState:Hd,useDebugValue:rc,useDeferredValue:function(e){return Ft().memoizedState=e},useTransition:function(){var e=Hd(!1),t=e[0];return e=Lg.bind(null,e[1]),Ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,o=Ft();if(he){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Oe===null)throw Error(N(349));Zn&30||Ch(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Vd(Rh.bind(null,r,i,e),[e]),r.flags|=2048,Xo(9,jh.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ft(),t=Oe.identifierPrefix;if(he){var n=en,r=Jt;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ng++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Og={readContext:wt,useCallback:Oh,useContext:wt,useEffect:nc,useImperativeHandle:Th,useInsertionEffect:Lh,useLayoutEffect:_h,useMemo:Mh,useReducer:Ba,useRef:Nh,useState:function(){return Ba(Go)},useDebugValue:rc,useDeferredValue:function(e){var t=kt();return Dh(t,Pe.memoizedState,e)},useTransition:function(){var e=Ba(Go)[0],t=kt().memoizedState;return[e,t]},useMutableSource:bh,useSyncExternalStore:Eh,useId:Ih,unstable_isNewReconciler:!1},Mg={readContext:wt,useCallback:Oh,useContext:wt,useEffect:nc,useImperativeHandle:Th,useInsertionEffect:Lh,useLayoutEffect:_h,useMemo:Mh,useReducer:Ha,useRef:Nh,useState:function(){return Ha(Go)},useDebugValue:rc,useDeferredValue:function(e){var t=kt();return Pe===null?t.memoizedState=e:Dh(t,Pe.memoizedState,e)},useTransition:function(){var e=Ha(Go)[0],t=kt().memoizedState;return[e,t]},useMutableSource:bh,useSyncExternalStore:Eh,useId:Ih,unstable_isNewReconciler:!1};function Ar(e,t){try{var n="",r=t;do n+=c1(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Va(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Us(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dg=typeof WeakMap=="function"?WeakMap:Map;function Bh(e,t,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pl||(Pl=!0,Xs=r),Us(e,t)},n}function Hh(e,t,n){n=tn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Us(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Us(e,t),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Xg.bind(null,e,t,n),t.then(e,e))}function qd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qd(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tn(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var Ig=un.ReactCurrentOwner,et=!1;function qe(e,t,n,r){t.child=e===null?kh(t,null,n,r):Dr(t,e.child,n,r)}function Kd(e,t,n,r,o){n=n.render;var i=t.ref;return Lr(t,o),r=ec(e,t,n,r,i,o),n=tc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,sn(e,t,o)):(he&&n&&Bu(t),t.flags|=1,qe(e,t,r,o),t.child)}function Yd(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!dc(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Vh(e,t,i,r,o)):(e=Xi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(l,r)&&e.ref===t.ref)return sn(e,t,o)}return t.flags|=1,e=Ln(i,r),e.ref=t.ref,e.return=t,t.child=e}function Vh(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ho(i,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,sn(e,t,o)}return Bs(e,t,n,r,o)}function Wh(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(br,lt),lt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(br,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ae(br,lt),lt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ae(br,lt),lt|=r;return qe(e,t,o,n),t.child}function qh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,n,r,o){var i=nt(n)?Gn:Ve.current;return i=Or(t,i),Lr(t,o),n=ec(e,t,n,r,i,o),r=tc(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,sn(e,t,o)):(he&&r&&Bu(t),t.flags|=1,qe(e,t,n,o),t.child)}function Gd(e,t,n,r,o){if(nt(n)){var i=!0;vl(t)}else i=!1;if(Lr(t,o),t.stateNode===null)Ki(e,t),xh(t,n,r),Fs(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=nt(n)?Gn:Ve.current,u=Or(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Ud(t,l,r,u),vn=!1;var h=t.memoizedState;l.state=h,bl(t,r,l,o),s=t.memoizedState,a!==r||h!==s||tt.current||vn?(typeof d=="function"&&(As(t,n,d,r),s=t.memoizedState),(a=vn||Fd(t,n,a,r,h,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yh(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Rt(t.type,a),l.props=u,f=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=wt(s):(s=nt(n)?Gn:Ve.current,s=Or(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||h!==s)&&Ud(t,l,r,s),vn=!1,h=t.memoizedState,l.state=h,bl(t,r,l,o);var y=t.memoizedState;a!==f||h!==y||tt.current||vn?(typeof x=="function"&&(As(t,n,x,r),y=t.memoizedState),(u=vn||Fd(t,n,u,r,h,y,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,n,r,i,o)}function Hs(e,t,n,r,o,i){qh(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Od(t,n,!1),sn(e,t,i);r=t.stateNode,Ig.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Dr(t,e.child,null,i),t.child=Dr(t,null,a,i)):qe(e,t,a,i),t.memoizedState=r.state,o&&Od(t,n,!0),t.child}function Qh(e){var t=e.stateNode;t.pendingContext?Td(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Td(e,t.context,!1),Gu(e,t.containerInfo)}function Xd(e,t,n,r,o){return Mr(),Vu(o),t.flags|=256,qe(e,t,n,r),t.child}var Vs={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kh(e,t,n){var r=t.pendingProps,o=me.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(me,o&1),e===null)return Ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Gl(l,r,0,null),e=Kn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ws(n),t.memoizedState=Vs,e):oc(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ag(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ln(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Ln(a,i):(i=Kn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ws(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Vs,r}return i=e.child,e=i.sibling,r=Ln(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function oc(e,t){return t=Gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ti(e,t,n,r){return r!==null&&Vu(r),Dr(t,e.child,null,n),e=oc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ag(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Va(Error(N(422))),Ti(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Gl({mode:"visible",children:r.children},o,0,null),i=Kn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Dr(t,e.child,null,l),t.child.memoizedState=Ws(l),t.memoizedState=Vs,i);if(!(t.mode&1))return Ti(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=Va(i,r,void 0),Ti(e,t,l,r)}if(a=(l&e.childLanes)!==0,et||a){if(r=Oe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,an(e,o),_t(r,e,o,-1))}return cc(),r=Va(Error(N(421))),Ti(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Zg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,at=Rn(o.nextSibling),st=t,he=!0,Nt=null,e!==null&&(mt[gt++]=Jt,mt[gt++]=en,mt[gt++]=Xn,Jt=e.id,en=e.overflow,Xn=t),t=oc(t,r.children),t.flags|=4096,t)}function Zd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Is(e.return,t,n)}function Wa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Yh(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(qe(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zd(e,n,t);else if(e.tag===19)Zd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(me,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&El(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Wa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&El(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Wa(t,!0,n,null,i);break;case"together":Wa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Fg(e,t,n){switch(t.tag){case 3:Qh(t),Mr();break;case 5:Sh(t);break;case 1:nt(t.type)&&vl(t);break;case 4:Gu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ae(kl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?Kh(e,t,n):(ae(me,me.current&1),e=sn(e,t,n),e!==null?e.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yh(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Wh(e,t,n)}return sn(e,t,n)}var Gh,qs,Xh,Zh;Gh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qs=function(){};Xh=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vn(Qt.current);var i=null;switch(n){case"input":o=hs(e,o),r=hs(e,r),i=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":o=ys(e,o),r=ys(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=gl)}xs(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&se("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Zh=function(e,t,n,r){n!==r&&(t.flags|=4)};function po(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ug(e,t,n){var r=t.pendingProps;switch(Hu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return nt(t.type)&&yl(),Be(t),null;case 3:return r=t.stateNode,Ir(),ce(tt),ce(Ve),Zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_i(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Nt!==null&&(eu(Nt),Nt=null))),qs(e,t),Be(t),null;case 5:Xu(t);var o=Vn(Ko.current);if(n=t.type,e!==null&&t.stateNode!=null)Xh(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return Be(t),null}if(e=Vn(Qt.current),_i(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Bt]=t,r[qo]=i,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(o=0;o<bo.length;o++)se(bo[o],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":ad(r,i),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},se("invalid",r);break;case"textarea":ud(r,i),se("invalid",r)}xs(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Li(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Li(r.textContent,a,e),o=["children",""+a]):Mo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&se("scroll",r)}switch(n){case"input":bi(r),sd(r,i,!0);break;case"textarea":bi(r),cd(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=gl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Bt]=t,e[qo]=r,Gh(e,t,!1,!1),t.stateNode=e;e:{switch(l=ws(n,r),n){case"dialog":se("cancel",e),se("close",e),o=r;break;case"iframe":case"object":case"embed":se("load",e),o=r;break;case"video":case"audio":for(o=0;o<bo.length;o++)se(bo[o],e);o=r;break;case"source":se("error",e),o=r;break;case"img":case"image":case"link":se("error",e),se("load",e),o=r;break;case"details":se("toggle",e),o=r;break;case"input":ad(e,r),o=hs(e,r),se("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),se("invalid",e);break;case"textarea":ud(e,r),o=ys(e,r),se("invalid",e);break;default:o=r}xs(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Pp(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&jp(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Do(e,s):typeof s=="number"&&Do(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&se("scroll",e):s!=null&&Pu(e,i,s,l))}switch(n){case"input":bi(e),sd(e,r,!1);break;case"textarea":bi(e),cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Rr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)Zh(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Vn(Ko.current),Vn(Qt.current),_i(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:Li(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Li(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Be(t),null;case 13:if(ce(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&at!==null&&t.mode&1&&!(t.flags&128))mh(),Mr(),t.flags|=98560,i=!1;else if(i=_i(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(N(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Bt]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else Nt!==null&&(eu(Nt),Nt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?$e===0&&($e=3):cc())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Ir(),qs(e,t),e===null&&Vo(t.stateNode.containerInfo),Be(t),null;case 10:return Qu(t.type._context),Be(t),null;case 17:return nt(t.type)&&yl(),Be(t),null;case 19:if(ce(me),i=t.memoizedState,i===null)return Be(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)po(i,!1);else{if($e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=El(e),l!==null){for(t.flags|=128,po(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(me,me.current&1|2),t.child}e=e.sibling}i.tail!==null&&we()>Fr&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304)}else{if(!r)if(e=El(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!he)return Be(t),null}else 2*we()-i.renderingStartTime>Fr&&n!==1073741824&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=we(),t.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return uc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function Bg(e,t){switch(Hu(t),t.tag){case 1:return nt(t.type)&&yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),ce(tt),ce(Ve),Zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xu(t),null;case 13:if(ce(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(me),null;case 4:return Ir(),null;case 10:return Qu(t.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Oi=!1,He=!1,Hg=typeof WeakSet=="function"?WeakSet:Set,z=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Qs(e,t,n){try{n()}catch(r){ve(e,t,r)}}var Jd=!1;function Vg(e,t){if(Ns=pl,e=nh(),Uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++d===r&&(s=l),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ls={focusedElem:e,selectionRange:n},pl=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,E=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Rt(t.type,w),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(g){ve(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=Jd,Jd=!1,y}function Lo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Qs(t,n,i)}o=o.next}while(o!==r)}}function Kl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ks(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jh(e){var t=e.alternate;t!==null&&(e.alternate=null,Jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[qo],delete t[Ts],delete t[jg],delete t[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function e0(e){return e.tag===5||e.tag===3||e.tag===4}function ef(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||e0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,n),e=e.sibling;e!==null;)Ys(e,t,n),e=e.sibling}function Gs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gs(e,t,n),e=e.sibling;e!==null;)Gs(e,t,n),e=e.sibling}var De=null,Pt=!1;function hn(e,t,n){for(n=n.child;n!==null;)t0(e,t,n),n=n.sibling}function t0(e,t,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:He||Sr(n,t);case 6:var r=De,o=Pt;De=null,hn(e,t,n),De=r,Pt=o,De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Pt?(e=De,n=n.stateNode,e.nodeType===8?Ia(e.parentNode,n):e.nodeType===1&&Ia(e,n),Uo(e)):Ia(De,n.stateNode));break;case 4:r=De,o=Pt,De=n.stateNode.containerInfo,Pt=!0,hn(e,t,n),De=r,Pt=o;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Qs(n,t,l),o=o.next}while(o!==r)}hn(e,t,n);break;case 1:if(!He&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,hn(e,t,n),He=r):hn(e,t,n);break;default:hn(e,t,n)}}function tf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hg),t.forEach(function(r){var o=Jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function jt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,Pt=!1;break e;case 3:De=a.stateNode.containerInfo,Pt=!0;break e;case 4:De=a.stateNode.containerInfo,Pt=!0;break e}a=a.return}if(De===null)throw Error(N(160));t0(i,l,o),De=null,Pt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ve(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)n0(t,e),t=t.sibling}function n0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(t,e),At(e),r&4){try{Lo(3,e,e.return),Kl(3,e)}catch(w){ve(e,e.return,w)}try{Lo(5,e,e.return)}catch(w){ve(e,e.return,w)}}break;case 1:jt(t,e),At(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(jt(t,e),At(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var o=e.stateNode;try{Do(o,"")}catch(w){ve(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&bp(o,i),ws(a,l);var u=ws(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?Pp(o,f):d==="dangerouslySetInnerHTML"?jp(o,f):d==="children"?Do(o,f):Pu(o,d,f,u)}switch(a){case"input":ms(o,i);break;case"textarea":Ep(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Rr(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Rr(o,!!i.multiple,i.defaultValue,!0):Rr(o,!!i.multiple,i.multiple?[]:"",!1))}o[qo]=i}catch(w){ve(e,e.return,w)}}break;case 6:if(jt(t,e),At(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ve(e,e.return,w)}}break;case 3:if(jt(t,e),At(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(t.containerInfo)}catch(w){ve(e,e.return,w)}break;case 4:jt(t,e),At(e);break;case 13:jt(t,e),At(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ac=we())),r&4&&tf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||d,jt(t,e),He=u):jt(t,e),At(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(f=z=d;z!==null;){switch(h=z,x=h.child,h.tag){case 0:case 11:case 14:case 15:Lo(4,h,h.return);break;case 1:Sr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ve(r,n,w)}}break;case 5:Sr(h,h.return);break;case 22:if(h.memoizedState!==null){rf(f);continue}}x!==null?(x.return=h,z=x):rf(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Rp("display",l))}catch(w){ve(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ve(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jt(t,e),At(e),r&4&&tf(e);break;case 21:break;default:jt(t,e),At(e)}}function At(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(e0(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Do(o,""),r.flags&=-33);var i=ef(e);Gs(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ef(e);Ys(e,a,l);break;default:throw Error(N(161))}}catch(s){ve(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wg(e,t,n){z=e,r0(e)}function r0(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Oi;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||He;a=Oi;var u=He;if(Oi=l,(He=s)&&!u)for(z=o;z!==null;)l=z,s=l.child,l.tag===22&&l.memoizedState!==null?of(o):s!==null?(s.return=l,z=s):of(o);for(;i!==null;)z=i,r0(i),i=i.sibling;z=o,Oi=a,He=u}nf(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):nf(e)}}function nf(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||Kl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ad(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ad(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Uo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}He||t.flags&512&&Ks(t)}catch(h){ve(t,t.return,h)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function rf(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function of(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Kl(4,t)}catch(s){ve(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ve(t,o,s)}}var i=t.return;try{Ks(t)}catch(s){ve(t,i,s)}break;case 5:var l=t.return;try{Ks(t)}catch(s){ve(t,l,s)}}}catch(s){ve(t,t.return,s)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var qg=Math.ceil,Rl=un.ReactCurrentDispatcher,ic=un.ReactCurrentOwner,vt=un.ReactCurrentBatchConfig,J=0,Oe=null,Ee=null,Ie=0,lt=0,br=Dn(0),$e=0,Zo=null,Jn=0,Yl=0,lc=0,_o=null,Je=null,ac=0,Fr=1/0,Gt=null,Pl=!1,Xs=null,$n=null,Mi=!1,bn=null,$l=0,zo=0,Zs=null,Yi=-1,Gi=0;function Qe(){return J&6?we():Yi!==-1?Yi:Yi=we()}function Nn(e){return e.mode&1?J&2&&Ie!==0?Ie&-Ie:$g.transition!==null?(Gi===0&&(Gi=Fp()),Gi):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Qp(e.type)),e):1}function _t(e,t,n,r){if(50<zo)throw zo=0,Zs=null,Error(N(185));ui(e,n,r),(!(J&2)||e!==Oe)&&(e===Oe&&(!(J&2)&&(Yl|=n),$e===4&&wn(e,Ie)),rt(e,r),n===1&&J===0&&!(t.mode&1)&&(Fr=we()+500,Wl&&In()))}function rt(e,t){var n=e.callbackNode;$1(e,t);var r=fl(e,e===Oe?Ie:0);if(r===0)n!==null&&pd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pd(n),t===1)e.tag===0?Pg(lf.bind(null,e)):fh(lf.bind(null,e)),Eg(function(){!(J&6)&&In()}),n=null;else{switch(Up(r)){case 1:n=zu;break;case 4:n=Ip;break;case 16:n=dl;break;case 536870912:n=Ap;break;default:n=dl}n=d0(n,o0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function o0(e,t){if(Yi=-1,Gi=0,J&6)throw Error(N(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=fl(e,e===Oe?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Nl(e,r);else{t=r;var o=J;J|=2;var i=l0();(Oe!==e||Ie!==t)&&(Gt=null,Fr=we()+500,Qn(e,t));do try{Yg();break}catch(a){i0(e,a)}while(1);qu(),Rl.current=i,J=o,Ee!==null?t=0:(Oe=null,Ie=0,t=$e)}if(t!==0){if(t===2&&(o=Cs(e),o!==0&&(r=o,t=Js(e,o))),t===1)throw n=Zo,Qn(e,0),wn(e,r),rt(e,we()),n;if(t===6)wn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Qg(o)&&(t=Nl(e,r),t===2&&(i=Cs(e),i!==0&&(r=i,t=Js(e,i))),t===1))throw n=Zo,Qn(e,0),wn(e,r),rt(e,we()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Fn(e,Je,Gt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=ac+500-we(),10<t)){if(fl(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=zs(Fn.bind(null,e,Je,Gt),t);break}Fn(e,Je,Gt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Lt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qg(r/1960))-r,10<r){e.timeoutHandle=zs(Fn.bind(null,e,Je,Gt),r);break}Fn(e,Je,Gt);break;case 5:Fn(e,Je,Gt);break;default:throw Error(N(329))}}}return rt(e,we()),e.callbackNode===n?o0.bind(null,e):null}function Js(e,t){var n=_o;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=Nl(e,t),e!==2&&(t=Je,Je=n,t!==null&&eu(t)),e}function eu(e){Je===null?Je=e:Je.push.apply(Je,e)}function Qg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~lc,t&=~Yl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function lf(e){if(J&6)throw Error(N(327));_r();var t=fl(e,0);if(!(t&1))return rt(e,we()),null;var n=Nl(e,t);if(e.tag!==0&&n===2){var r=Cs(e);r!==0&&(t=r,n=Js(e,r))}if(n===1)throw n=Zo,Qn(e,0),wn(e,t),rt(e,we()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,Je,Gt),rt(e,we()),null}function sc(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(Fr=we()+500,Wl&&In())}}function er(e){bn!==null&&bn.tag===0&&!(J&6)&&_r();var t=J;J|=1;var n=vt.transition,r=oe;try{if(vt.transition=null,oe=1,e)return e()}finally{oe=r,vt.transition=n,J=t,!(J&6)&&In()}}function uc(){lt=br.current,ce(br)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Hu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&yl();break;case 3:Ir(),ce(tt),ce(Ve),Zu();break;case 5:Xu(r);break;case 4:Ir();break;case 13:ce(me);break;case 19:ce(me);break;case 10:Qu(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Oe=e,Ee=e=Ln(e.current,null),Ie=lt=t,$e=0,Zo=null,lc=Yl=Jn=0,Je=_o=null,Hn!==null){for(t=0;t<Hn.length;t++)if(n=Hn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Hn=null}return e}function i0(e,t){do{var n=Ee;try{if(qu(),qi.current=jl,Cl){for(var r=ge.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Cl=!1}if(Zn=0,_e=Pe=ge=null,No=!1,Yo=0,ic.current=null,n===null||n.return===null){$e=1,Zo=t,Ee=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Ie,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=qd(l);if(x!==null){x.flags&=-257,Qd(x,l,a,i,t),x.mode&1&&Wd(i,u,t),t=x,s=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(s),t.updateQueue=w}else y.add(s);break e}else{if(!(t&1)){Wd(i,u,t),cc();break e}s=Error(N(426))}}else if(he&&a.mode&1){var E=qd(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Qd(E,l,a,i,t),Vu(Ar(s,a));break e}}i=s=Ar(s,a),$e!==4&&($e=2),_o===null?_o=[i]:_o.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Bh(i,s,t);Id(i,m);break e;case 1:a=s;var p=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&($n===null||!$n.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Hh(i,a,t);Id(i,g);break e}}i=i.return}while(i!==null)}s0(n)}catch(C){t=C,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function l0(){var e=Rl.current;return Rl.current=jl,e===null?jl:e}function cc(){($e===0||$e===3||$e===2)&&($e=4),Oe===null||!(Jn&268435455)&&!(Yl&268435455)||wn(Oe,Ie)}function Nl(e,t){var n=J;J|=2;var r=l0();(Oe!==e||Ie!==t)&&(Gt=null,Qn(e,t));do try{Kg();break}catch(o){i0(e,o)}while(1);if(qu(),J=n,Rl.current=r,Ee!==null)throw Error(N(261));return Oe=null,Ie=0,$e}function Kg(){for(;Ee!==null;)a0(Ee)}function Yg(){for(;Ee!==null&&!w1();)a0(Ee)}function a0(e){var t=c0(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?s0(e):Ee=t,ic.current=null}function s0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Bg(n,t),n!==null){n.flags&=32767,Ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Ee=null;return}}else if(n=Ug(n,t,lt),n!==null){Ee=n;return}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);$e===0&&($e=5)}function Fn(e,t,n){var r=oe,o=vt.transition;try{vt.transition=null,oe=1,Gg(e,t,n,r)}finally{vt.transition=o,oe=r}return null}function Gg(e,t,n,r){do _r();while(bn!==null);if(J&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(N1(e,i),e===Oe&&(Ee=Oe=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mi||(Mi=!0,d0(dl,function(){return _r(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=vt.transition,vt.transition=null;var l=oe;oe=1;var a=J;J|=4,ic.current=null,Vg(e,n),n0(n,e),gg(Ls),pl=!!Ns,Ls=Ns=null,e.current=n,Wg(n),k1(),J=a,oe=l,vt.transition=i}else e.current=n;if(Mi&&(Mi=!1,bn=e,$l=o),i=e.pendingLanes,i===0&&($n=null),E1(n.stateNode),rt(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Pl)throw Pl=!1,e=Xs,Xs=null,e;return $l&1&&e.tag!==0&&_r(),i=e.pendingLanes,i&1?e===Zs?zo++:(zo=0,Zs=e):zo=0,In(),null}function _r(){if(bn!==null){var e=Up($l),t=vt.transition,n=oe;try{if(vt.transition=null,oe=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,$l=0,J&6)throw Error(N(331));var o=J;for(J|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(z=u;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:Lo(8,d,i)}var f=d.child;if(f!==null)f.return=d,z=f;else for(;z!==null;){d=z;var h=d.sibling,x=d.return;if(Jh(d),d===u){z=null;break}if(h!==null){h.return=x,z=h;break}z=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Lo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,z=m;break e}z=i.return}}var p=e.current;for(z=p;z!==null;){l=z;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,z=v;else e:for(l=p;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Kl(9,a)}}catch(C){ve(a,a.return,C)}if(a===l){z=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}if(J=o,In(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Fl,e)}catch{}r=!0}return r}finally{oe=n,vt.transition=t}}return!1}function af(e,t,n){t=Ar(n,t),t=Bh(e,t,1),e=Pn(e,t,1),t=Qe(),e!==null&&(ui(e,1,t),rt(e,t))}function ve(e,t,n){if(e.tag===3)af(e,e,n);else for(;t!==null;){if(t.tag===3){af(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=Ar(n,e),e=Hh(t,e,1),t=Pn(t,e,1),e=Qe(),t!==null&&(ui(t,1,e),rt(t,e));break}}t=t.return}}function Xg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ie&n)===n&&($e===4||$e===3&&(Ie&130023424)===Ie&&500>we()-ac?Qn(e,0):lc|=n),rt(e,t)}function u0(e,t){t===0&&(e.mode&1?(t=ji,ji<<=1,!(ji&130023424)&&(ji=4194304)):t=1);var n=Qe();e=an(e,t),e!==null&&(ui(e,t,n),rt(e,n))}function Zg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),u0(e,n)}function Jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),u0(e,n)}var c0;c0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||tt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,Fg(e,t,n);et=!!(e.flags&131072)}else et=!1,he&&t.flags&1048576&&ph(t,wl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ki(e,t),e=t.pendingProps;var o=Or(t,Ve.current);Lr(t,n),o=ec(null,t,r,e,o,n);var i=tc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,nt(r)?(i=!0,vl(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Yu(t),o.updater=ql,t.stateNode=o,o._reactInternals=t,Fs(t,r,e,n),t=Hs(null,t,r,!0,i,n)):(t.tag=0,he&&i&&Bu(t),qe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ty(r),e=Rt(r,e),o){case 0:t=Bs(null,t,r,e,n);break e;case 1:t=Gd(null,t,r,e,n);break e;case 11:t=Kd(null,t,r,e,n);break e;case 14:t=Yd(null,t,r,Rt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),Bs(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),Gd(e,t,r,o,n);case 3:e:{if(Qh(t),e===null)throw Error(N(387));r=t.pendingProps,i=t.memoizedState,o=i.element,yh(e,t),bl(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ar(Error(N(423)),t),t=Xd(e,t,r,n,o);break e}else if(r!==o){o=Ar(Error(N(424)),t),t=Xd(e,t,r,n,o);break e}else for(at=Rn(t.stateNode.containerInfo.firstChild),st=t,he=!0,Nt=null,n=kh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===o){t=sn(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return Sh(t),e===null&&Ds(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,_s(r,o)?l=null:i!==null&&_s(r,i)&&(t.flags|=32),qh(e,t),qe(e,t,l,n),t.child;case 6:return e===null&&Ds(t),null;case 13:return Kh(e,t,n);case 4:return Gu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Dr(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),Kd(e,t,r,o,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ae(kl,r._currentValue),r._currentValue=l,i!==null)if(Tt(i.value,l)){if(i.children===o.children&&!tt.current){t=sn(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=tn(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Is(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(N(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Is(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}qe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Lr(t,n),o=wt(o),r=r(o),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,o=Rt(r,t.pendingProps),o=Rt(r.type,o),Yd(e,t,r,o,n);case 15:return Vh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Rt(r,o),Ki(e,t),t.tag=1,nt(r)?(e=!0,vl(t)):e=!1,Lr(t,n),xh(t,r,o),Fs(t,r,o,n),Hs(null,t,r,!0,e,n);case 19:return Yh(e,t,n);case 22:return Wh(e,t,n)}throw Error(N(156,t.tag))};function d0(e,t){return Dp(e,t)}function ey(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,n,r){return new ey(e,t,n,r)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ty(e){if(typeof e=="function")return dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Nu)return 11;if(e===Lu)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=yt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")dc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case pr:return Kn(n.children,o,i,t);case $u:l=8,o|=8;break;case cs:return e=yt(12,n,t,o|2),e.elementType=cs,e.lanes=i,e;case ds:return e=yt(13,n,t,o),e.elementType=ds,e.lanes=i,e;case fs:return e=yt(19,n,t,o),e.elementType=fs,e.lanes=i,e;case wp:return Gl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vp:l=10;break e;case xp:l=9;break e;case Nu:l=11;break e;case Lu:l=14;break e;case yn:l=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=yt(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Kn(e,t,n,r){return e=yt(7,e,r,t),e.lanes=n,e}function Gl(e,t,n,r){return e=yt(22,e,r,t),e.elementType=wp,e.lanes=n,e.stateNode={isHidden:!1},e}function qa(e,t,n){return e=yt(6,e,null,t),e.lanes=n,e}function Qa(e,t,n){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ny(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ra(0),this.expirationTimes=Ra(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ra(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function fc(e,t,n,r,o,i,l,a,s){return e=new ny(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=yt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yu(i),e}function ry(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function f0(e){if(!e)return On;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(nt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(nt(n))return dh(e,n,t)}return t}function p0(e,t,n,r,o,i,l,a,s){return e=fc(n,r,!0,e,o,i,l,a,s),e.context=f0(null),n=e.current,r=Qe(),o=Nn(n),i=tn(r,o),i.callback=t??null,Pn(n,i,o),e.current.lanes=o,ui(e,o,r),rt(e,r),e}function Xl(e,t,n,r){var o=t.current,i=Qe(),l=Nn(o);return n=f0(n),t.context===null?t.context=n:t.pendingContext=n,t=tn(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(o,t,l),e!==null&&(_t(e,o,l,i),Wi(e,o,l)),l}function Ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function pc(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function oy(){return null}var h0=typeof reportError=="function"?reportError:function(e){console.error(e)};function hc(e){this._internalRoot=e}Zl.prototype.render=hc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Xl(e,t,null,null)};Zl.prototype.unmount=hc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Xl(null,e,null,null)}),t[ln]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xn.length&&t!==0&&t<xn[n].priority;n++);xn.splice(n,0,e),n===0&&qp(e)}};function mc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uf(){}function iy(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ll(l);i.call(u)}}var l=p0(t,r,e,0,null,!1,!1,"",uf);return e._reactRootContainer=l,e[ln]=l.current,Vo(e.nodeType===8?e.parentNode:e),er(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=Ll(s);a.call(u)}}var s=fc(e,0,!1,null,null,!1,!1,"",uf);return e._reactRootContainer=s,e[ln]=s.current,Vo(e.nodeType===8?e.parentNode:e),er(function(){Xl(t,s,n,r)}),s}function ea(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=Ll(l);a.call(s)}}Xl(t,l,e,o)}else l=iy(n,t,e,o,r);return Ll(l)}Bp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=So(t.pendingLanes);n!==0&&(Tu(t,n|1),rt(t,we()),!(J&6)&&(Fr=we()+500,In()))}break;case 13:er(function(){var r=an(e,1);if(r!==null){var o=Qe();_t(r,e,1,o)}}),pc(e,1)}};Ou=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var n=Qe();_t(t,e,134217728,n)}pc(e,134217728)}};Hp=function(e){if(e.tag===13){var t=Nn(e),n=an(e,t);if(n!==null){var r=Qe();_t(n,e,t,r)}pc(e,t)}};Vp=function(){return oe};Wp=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ss=function(e,t,n){switch(t){case"input":if(ms(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vl(r);if(!o)throw Error(N(90));Sp(r),ms(r,o)}}}break;case"textarea":Ep(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};Lp=sc;_p=er;var ly={usingClientEntryPoint:!1,Events:[di,yr,Vl,$p,Np,sc]},ho={findFiberByHostInstance:Bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ay={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Op(e),e===null?null:e.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Di=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Di.isDisabled&&Di.supportsFiber)try{Fl=Di.inject(ay),qt=Di}catch{}}ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly;ct.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(t))throw Error(N(200));return ry(e,t,null,n)};ct.createRoot=function(e,t){if(!mc(e))throw Error(N(299));var n=!1,r="",o=h0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=fc(e,1,!1,null,null,n,!1,r,o),e[ln]=t.current,Vo(e.nodeType===8?e.parentNode:e),new hc(t)};ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Op(t),e=e===null?null:e.stateNode,e};ct.flushSync=function(e){return er(e)};ct.hydrate=function(e,t,n){if(!Jl(t))throw Error(N(200));return ea(null,e,t,!0,n)};ct.hydrateRoot=function(e,t,n){if(!mc(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=h0;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=p0(t,null,e,1,n??null,o,!1,i,l),e[ln]=t.current,Vo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Zl(t)};ct.render=function(e,t,n){if(!Jl(t))throw Error(N(200));return ea(null,e,t,!1,n)};ct.unmountComponentAtNode=function(e){if(!Jl(e))throw Error(N(40));return e._reactRootContainer?(er(function(){ea(null,null,e,!1,function(){e._reactRootContainer=null,e[ln]=null})}),!0):!1};ct.unstable_batchedUpdates=sc;ct.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Jl(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return ea(e,t,n,!1,r)};ct.version="18.2.0-next-9e3b772b8-20220608";function m0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m0)}catch(e){console.error(e)}}m0(),pp.exports=ct;var Zr=pp.exports,cf=Zr;ss.createRoot=cf.createRoot,ss.hydrateRoot=cf.hydrateRoot;var Te=function(){return Te=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Te.apply(this,arguments)};function Ur(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ue="-ms-",To="-moz-",re="-webkit-",g0="comm",ta="rule",gc="decl",sy="@import",y0="@keyframes",uy="@layer",cy=Math.abs,yc=String.fromCharCode,tu=Object.assign;function dy(e,t){return ze(e,0)^45?(((t<<2^ze(e,0))<<2^ze(e,1))<<2^ze(e,2))<<2^ze(e,3):0}function v0(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function W(e,t,n){return e.replace(t,n)}function Zi(e,t){return e.indexOf(t)}function ze(e,t){return e.charCodeAt(t)|0}function Br(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function x0(e){return e.length}function Eo(e,t){return t.push(e),e}function fy(e,t){return e.map(t).join("")}function df(e,t){return e.filter(function(n){return!Xt(n,t)})}var na=1,Hr=1,w0=0,St=0,be=0,Jr="";function ra(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:na,column:Hr,length:l,return:"",siblings:a}}function gn(e,t){return tu(ra("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cr(e){for(;e.root;)e=gn(e.root,{children:[e]});Eo(e,e.siblings)}function py(){return be}function hy(){return be=St>0?ze(Jr,--St):0,Hr--,be===10&&(Hr=1,na--),be}function zt(){return be=St<w0?ze(Jr,St++):0,Hr++,be===10&&(Hr=1,na++),be}function Yn(){return ze(Jr,St)}function Ji(){return St}function oa(e,t){return Br(Jr,e,t)}function nu(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function my(e){return na=Hr=1,w0=Ut(Jr=e),St=0,[]}function gy(e){return Jr="",e}function Ka(e){return v0(oa(St-1,ru(e===91?e+2:e===40?e+1:e)))}function yy(e){for(;(be=Yn())&&be<33;)zt();return nu(e)>2||nu(be)>3?"":" "}function vy(e,t){for(;--t&&zt()&&!(be<48||be>102||be>57&&be<65||be>70&&be<97););return oa(e,Ji()+(t<6&&Yn()==32&&zt()==32))}function ru(e){for(;zt();)switch(be){case e:return St;case 34:case 39:e!==34&&e!==39&&ru(be);break;case 40:e===41&&ru(e);break;case 92:zt();break}return St}function xy(e,t){for(;zt()&&e+be!==47+10;)if(e+be===42+42&&Yn()===47)break;return"/*"+oa(t,St-1)+"*"+yc(e===47?e:zt())}function wy(e){for(;!nu(Yn());)zt();return oa(e,St)}function ky(e){return gy(el("",null,null,null,[""],e=my(e),0,[0],e))}function el(e,t,n,r,o,i,l,a,s){for(var u=0,d=0,f=l,h=0,x=0,y=0,w=1,E=1,m=1,p=0,v="",g=o,C=i,$=r,R=v;E;)switch(y=p,p=zt()){case 40:if(y!=108&&ze(R,f-1)==58){Zi(R+=W(Ka(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:R+=Ka(p);break;case 9:case 10:case 13:case 32:R+=yy(y);break;case 92:R+=vy(Ji()-1,7);continue;case 47:switch(Yn()){case 42:case 47:Eo(Sy(xy(zt(),Ji()),t,n,s),s);break;default:R+="/"}break;case 123*w:a[u++]=Ut(R)*m;case 125*w:case 59:case 0:switch(p){case 0:case 125:E=0;case 59+d:m==-1&&(R=W(R,/\f/g,"")),x>0&&Ut(R)-f&&Eo(x>32?pf(R+";",r,n,f-1,s):pf(W(R," ","")+";",r,n,f-2,s),s);break;case 59:R+=";";default:if(Eo($=ff(R,t,n,u,d,o,a,v,g=[],C=[],f,i),i),p===123)if(d===0)el(R,t,$,$,g,i,f,a,C);else switch(h===99&&ze(R,3)===110?100:h){case 100:case 108:case 109:case 115:el(e,$,$,r&&Eo(ff(e,$,$,0,0,o,a,v,o,g=[],f,C),C),o,C,f,a,r?g:C);break;default:el(R,$,$,$,[""],C,0,a,C)}}u=d=x=0,w=m=1,v=R="",f=l;break;case 58:f=1+Ut(R),x=y;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&hy()==125)continue}switch(R+=yc(p),p*w){case 38:m=d>0?1:(R+="\f",-1);break;case 44:a[u++]=(Ut(R)-1)*m,m=1;break;case 64:Yn()===45&&(R+=Ka(zt())),h=Yn(),d=f=Ut(v=R+=wy(Ji())),p++;break;case 45:y===45&&Ut(R)==2&&(w=0)}}return i}function ff(e,t,n,r,o,i,l,a,s,u,d,f){for(var h=o-1,x=o===0?i:[""],y=x0(x),w=0,E=0,m=0;w<r;++w)for(var p=0,v=Br(e,h+1,h=cy(E=l[w])),g=e;p<y;++p)(g=v0(E>0?x[p]+" "+v:W(v,/&\f/g,x[p])))&&(s[m++]=g);return ra(e,t,n,o===0?ta:a,s,u,d,f)}function Sy(e,t,n,r){return ra(e,t,n,g0,yc(py()),Br(e,2,-2),0,r)}function pf(e,t,n,r,o){return ra(e,t,n,gc,Br(e,0,r),Br(e,r+1,-1),r,o)}function k0(e,t,n){switch(dy(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return To+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+To+e+ue+e+e;case 5936:switch(ze(e,t+11)){case 114:return re+e+ue+W(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+ue+W(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+ue+W(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+ue+e+e;case 6165:return re+e+ue+"flex-"+e+e;case 5187:return re+e+W(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+ue+"flex-$1$2")+e;case 5443:return re+e+ue+"flex-item-"+W(e,/flex-|-self/g,"")+(Xt(e,/flex-|baseline/)?"":ue+"grid-row-"+W(e,/flex-|-self/g,""))+e;case 4675:return re+e+ue+"flex-line-pack"+W(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+ue+W(e,"shrink","negative")+e;case 5292:return re+e+ue+W(e,"basis","preferred-size")+e;case 6060:return re+"box-"+W(e,"-grow","")+re+e+ue+W(e,"grow","positive")+e;case 4554:return re+W(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return W(W(W(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return W(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return W(W(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+ue+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return ue+"grid-column-align"+Br(e,t)+e;break;case 2592:case 3360:return ue+W(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Xt(r.props,/grid-\w+-end/)})?~Zi(e+(n=n[t].value),"span")?e:ue+W(e,"-start","")+e+ue+"grid-row-span:"+(~Zi(n,"span")?Xt(n,/\d+/):+Xt(n,/\d+/)-+Xt(e,/\d+/))+";":ue+W(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Xt(r.props,/grid-\w+-start/)})?e:ue+W(W(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return W(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(ze(e,t+1)){case 109:if(ze(e,t+4)!==45)break;case 102:return W(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+To+(ze(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Zi(e,"stretch")?k0(W(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return W(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return ue+o+":"+i+u+(l?ue+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(ze(e,t+6)===121)return W(e,":",":"+re)+e;break;case 6444:switch(ze(e,ze(e,14)===45?18:11)){case 120:return W(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(ze(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+ue+"$2box$3")+e;case 100:return W(e,":",":"+ue)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return W(e,"scroll-","scroll-snap-")+e}return e}function _l(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function by(e,t,n,r){switch(e.type){case uy:if(e.children.length)break;case sy:case gc:return e.return=e.return||e.value;case g0:return"";case y0:return e.return=e.value+"{"+_l(e.children,r)+"}";case ta:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=_l(e.children,r))?e.return=e.value+"{"+n+"}":""}function Ey(e){var t=x0(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Cy(e){return function(t){t.root||(t=t.return)&&e(t)}}function jy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case gc:e.return=k0(e.value,e.length,n);return;case y0:return _l([gn(e,{value:W(e.value,"@","@"+re)})],r);case ta:if(e.length)return fy(n=e.props,function(o){switch(Xt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(gn(e,{props:[W(o,/:(read-\w+)/,":"+To+"$1")]})),cr(gn(e,{props:[o]})),tu(e,{props:df(n,r)});break;case"::placeholder":cr(gn(e,{props:[W(o,/:(plac\w+)/,":"+re+"input-$1")]})),cr(gn(e,{props:[W(o,/:(plac\w+)/,":"+To+"$1")]})),cr(gn(e,{props:[W(o,/:(plac\w+)/,ue+"input-$1")]})),cr(gn(e,{props:[o]})),tu(e,{props:df(n,r)});break}return""})}}var Ry={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Vr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vc=typeof window<"u"&&"HTMLElement"in window,Py=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),$y={},ia=Object.freeze([]),Wr=Object.freeze({});function S0(e,t,n){return n===void 0&&(n=Wr),e.theme!==n.theme&&e.theme||t||n.theme}var b0=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ny=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ly=/(^-|-$)/g;function hf(e){return e.replace(Ny,"-").replace(Ly,"")}var _y=/(a)(d)/gi,mf=function(e){return String.fromCharCode(e+(e>25?39:97))};function ou(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=mf(t%52)+n;return(mf(t%52)+n).replace(_y,"$1-$2")}var Ya,Er=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},E0=function(e){return Er(5381,e)};function xc(e){return ou(E0(e)>>>0)}function zy(e){return e.displayName||e.name||"Component"}function Ga(e){return typeof e=="string"&&!0}var C0=typeof Symbol=="function"&&Symbol.for,j0=C0?Symbol.for("react.memo"):60115,Ty=C0?Symbol.for("react.forward_ref"):60112,Oy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},My={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},R0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dy=((Ya={})[Ty]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ya[j0]=R0,Ya);function gf(e){return("type"in(t=e)&&t.type.$$typeof)===j0?R0:"$$typeof"in e?Dy[e.$$typeof]:Oy;var t}var Iy=Object.defineProperty,Ay=Object.getOwnPropertyNames,yf=Object.getOwnPropertySymbols,Fy=Object.getOwnPropertyDescriptor,Uy=Object.getPrototypeOf,vf=Object.prototype;function P0(e,t,n){if(typeof t!="string"){if(vf){var r=Uy(t);r&&r!==vf&&P0(e,r,n)}var o=Ay(t);yf&&(o=o.concat(yf(t)));for(var i=gf(e),l=gf(t),a=0;a<o.length;++a){var s=o[a];if(!(s in My||n&&n[s]||l&&s in l||i&&s in i)){var u=Fy(t,s);try{Iy(e,s,u)}catch{}}}}return e}function tr(e){return typeof e=="function"}function wc(e){return typeof e=="object"&&"styledComponentId"in e}function Wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function zl(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Jo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function iu(e,t,n){if(n===void 0&&(n=!1),!n&&!Jo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=iu(e[r],t[r]);else if(Jo(t))for(var r in t)e[r]=iu(e[r],t[r]);return e}function kc(e,t){Object.defineProperty(e,"toString",{value:t})}function nr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var By=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw nr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),tl=new Map,Tl=new Map,Xa=1,Ii=function(e){if(tl.has(e))return tl.get(e);for(;Tl.has(Xa);)Xa++;var t=Xa++;return tl.set(e,t),Tl.set(t,e),t},Hy=function(e,t){tl.set(e,t),Tl.set(t,e)},Vy="style[".concat(Vr,"][").concat("data-styled-version",'="').concat("6.0.4",'"]'),Wy=new RegExp("^".concat(Vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),qy=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Qy=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(Wy);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(Hy(d,u),qy(e,d,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function Ky(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Vr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Vr,"active"),r.setAttribute("data-styled-version","6.0.4");var l=Ky();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},Yy=function(){function e(t){this.element=$0(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw nr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Gy=function(){function e(t){this.element=$0(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Xy=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xf=vc,Zy={isServer:!vc,useCSSOMInjection:!Py},Ol=function(){function e(t,n,r){t===void 0&&(t=Wr),n===void 0&&(n={});var o=this;this.options=Te(Te({},Zy),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&vc&&xf&&(xf=!1,function(i){for(var l=document.querySelectorAll(Vy),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(Vr)!=="active"&&(Qy(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),kc(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(f){var h=function(m){return Tl.get(m)}(f);if(h===void 0)return"continue";var x=i.names.get(h),y=l.getGroup(f);if(x===void 0||y.length===0)return"continue";var w="".concat(Vr,".g").concat(f,'[id="').concat(h,'"]'),E="";x!==void 0&&x.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),s+="".concat(y).concat(w,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return s}(o)})}return e.registerId=function(t){return Ii(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Te(Te({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Xy(o):r?new Yy(o):new Gy(o)}(this.options),new By(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ii(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ii(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ii(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Jy=/&/g,ev=/^\s*\/\/.*$/gm;function N0(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=N0(n.children,t)),n})}function tv(e){var t,n,r,o=e===void 0?Wr:e,i=o.options,l=i===void 0?Wr:i,a=o.plugins,s=a===void 0?ia:a,u=function(h,x,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},d=s.slice();d.push(function(h){h.type===ta&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Jy,n).replace(r,u))}),l.prefix&&d.push(jy),d.push(by);var f=function(h,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var E=h.replace(ev,""),m=ky(y||x?"".concat(y," ").concat(x," { ").concat(E," }"):E);l.namespace&&(m=N0(m,l.namespace));var p=[];return _l(m,Ey(d.concat(Cy(function(v){return p.push(v)})))),p};return f.hash=s.length?s.reduce(function(h,x){return x.name||nr(15),Er(h,x.name)},5381).toString():"",f}var nv=new Ol,lu=tv(),L0=ke.createContext({shouldForwardProp:void 0,styleSheet:nv,stylis:lu});L0.Consumer;ke.createContext(void 0);function au(){return S.useContext(L0)}var _0=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=lu);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,kc(this,function(){throw nr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=lu),this.name+t.hash},e}(),rv=function(e){return e>="A"&&e<="Z"};function wf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;rv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var z0=function(e){return e==null||e===!1||e===""},T0=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!z0(i)&&(Array.isArray(i)&&i.isCss||tr(i)?r.push("".concat(wf(o),":"),i,";"):Jo(i)?r.push.apply(r,Ur(Ur(["".concat(o," {")],T0(i),!1),["}"],!1)):r.push("".concat(wf(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ry||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _n(e,t,n,r){if(z0(e))return[];if(wc(e))return[".".concat(e.styledComponentId)];if(tr(e)){if(!tr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return _n(o,t,n,r)}var i;return e instanceof _0?n?(e.inject(n,r),[e.getName(r)]):[e]:Jo(e)?T0(e):Array.isArray(e)?Array.prototype.concat.apply(ia,e.map(function(l){return _n(l,t,n,r)})):[e.toString()]}function O0(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(tr(n)&&!wc(n))return!1}return!0}var ov=E0("6.0.4"),iv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&O0(t),this.componentId=n,this.baseHash=Er(ov,n),this.baseStyle=r,Ol.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Wn(o,this.staticRulesId);else{var i=zl(_n(this.rules,t,n,r)),l=ou(Er(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=Wn(o,l),this.staticRulesId=l}else{for(var s=Er(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var h=zl(_n(f,t,n,r));s=Er(s,h),u+=h}}if(u){var x=ou(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=Wn(o,x)}}return o},e}(),ei=ke.createContext(void 0);ei.Consumer;function lv(e){var t=ke.useContext(ei),n=S.useMemo(function(){return function(r,o){if(!r)throw nr(14);if(tr(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw nr(8);return o?Te(Te({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?ke.createElement(ei.Provider,{value:n},e.children):null}var Za={};function av(e,t,n){var r=wc(e),o=e,i=!Ga(e),l=t.attrs,a=l===void 0?ia:l,s=t.componentId,u=s===void 0?function(v,g){var C=typeof v!="string"?"sc":hf(v);Za[C]=(Za[C]||0)+1;var $="".concat(C,"-").concat(xc("6.0.4"+C+Za[C]));return g?"".concat(g,"-").concat($):$}(t.displayName,t.parentComponentId):s,d=t.displayName;d===void 0&&function(v){return Ga(v)?"styled.".concat(v):"Styled(".concat(zy(v),")")}(e);var f=t.displayName&&t.componentId?"".concat(hf(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,x=t.shouldForwardProp;if(r&&o.shouldForwardProp){var y=o.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;x=function(v,g){return y(v,g)&&w(v,g)}}else x=y}var E=new iv(n,f,r?o.componentStyle:void 0);function m(v,g){return function(C,$,R){var _=C.attrs,Y=C.componentStyle,F=C.defaultProps,Ce=C.foldedComponentIds,te=C.styledComponentId,Ot=C.target,fn=ke.useContext(ei),Mt=au(),We=C.shouldForwardProp||Mt.shouldForwardProp,je=function(Ct,ne,Ge){for(var Fe,Xe=Te(Te({},ne),{className:void 0,theme:Ge}),ft=0;ft<Ct.length;ft+=1){var ar=tr(Fe=Ct[ft])?Fe(Xe):Fe;for(var Dt in ar)Xe[Dt]=Dt==="className"?Wn(Xe[Dt],ar[Dt]):Dt==="style"?Te(Te({},Xe[Dt]),ar[Dt]):ar[Dt]}return ne.className&&(Xe.className=Wn(Xe.className,ne.className)),Xe}(_,$,S0($,fn,F)||Wr),L=je.as||Ot,M={};for(var D in je)je[D]===void 0||D[0]==="$"||D==="as"||D==="theme"||(D==="forwardedAs"?M.as=je.forwardedAs:We&&!We(D,L)||(M[D]=je[D]));var ie=function(Ct,ne){var Ge=au(),Fe=Ct.generateAndInjectStyles(ne,Ge.styleSheet,Ge.stylis);return Fe}(Y,je),de=Wn(Ce,te);return ie&&(de+=" "+ie),je.className&&(de+=" "+je.className),M[Ga(L)&&!b0.has(L)?"class":"className"]=de,M.ref=R,S.createElement(L,M)}(p,v,g)}var p=ke.forwardRef(m);return p.attrs=h,p.componentStyle=E,p.shouldForwardProp=x,p.foldedComponentIds=r?Wn(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=f,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(g){for(var C=[],$=1;$<arguments.length;$++)C[$-1]=arguments[$];for(var R=0,_=C;R<_.length;R++)iu(g,_[R],!0);return g}({},o.defaultProps,v):v}}),kc(p,function(){return".".concat(p.styledComponentId)}),i&&P0(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function kf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Sf=function(e){return Object.assign(e,{isCss:!0})};function Sc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(tr(e)||Jo(e)){var r=e;return Sf(_n(kf(ia,Ur([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?_n(o):Sf(_n(kf(o,t)))}function su(e,t,n){if(n===void 0&&(n=Wr),!t)throw nr(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,Sc.apply(void 0,Ur([o],i,!1)))};return r.attrs=function(o){return su(e,t,Te(Te({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return su(e,t,Te(Te({},n),o))},r}var M0=function(e){return su(av,e)},A=M0;b0.forEach(function(e){A[e]=M0(e)});var sv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=O0(t),Ol.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(zl(_n(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Ol.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function uv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Sc.apply(void 0,Ur([e],t,!1)),o="sc-global-".concat(xc(JSON.stringify(r))),i=new sv(r,o),l=function(s){var u=au(),d=ke.useContext(ei),f=ke.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&a(f,s,u.styleSheet,d,u.stylis),(ke.useInsertionEffect||ke.useLayoutEffect)(function(){if(!u.styleSheet.server)return a(f,s,u.styleSheet,d,u.stylis),function(){return i.removeStyles(f,u.styleSheet)}},[f,s,u.styleSheet,d,u.stylis]),null};function a(s,u,d,f,h){if(i.isStatic)i.renderStyles(s,$y,d,h);else{var x=Te(Te({},u),{theme:S0(u,f,l.defaultProps)});i.renderStyles(s,x,d,h)}}return ke.memo(l)}function ot(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=zl(Sc.apply(void 0,Ur([e],t,!1))),o=xc(r);return new _0(o,r)}const H={colors:{light:{background:"white",cardBg:"#787878",logo:"red",inputBg:"grey",placeholder:"rgba(255, 255, 255, 0.75)",opposite:"white",primary:"#121212",secondary:"#30475E",secondaryVariant:"#7899ba",tertiary:"#F5F5F5",quaternary:"#F05454",playButton:"#f9bbbb"},dark:{background:"#0f0f0f",cardBg:"#303030",logo:"red",inputBg:"grey",placeholder:"rgba(255, 255, 255, 0.75)",opposite:"black",primary:"#bebebe",secondary:"#456687",secondaryVariant:"#7899ba",tertiary:"#4a4a4a",quaternary:"#F05454",playButton:"#f9bbbb"}},sizes:{inputWidth:"280px",video:{maxHeight:"360px",cover:{width:"160px",height:"96px"}}},swipperTimeout:1e3,modal:{width:"480px"},screen:{xs:"375px",s:"426px",m:"768px",l:"1024px",xl:"1440px"}},D0=S.createContext({theme:"light",toggleTheme:()=>{}});/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}var Se;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Se||(Se={}));const bf="popstate";function cv(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return ti("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:rr(o)}return fv(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function dv(){return Math.random().toString(36).substr(2,8)}function Ef(e,t){return{usr:e.state,key:e.key,idx:t}}function ti(e,t,n,r){return n===void 0&&(n=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?cn(t):t,{state:n,key:t&&t.key||r||dv()})}function rr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function cn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function fv(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=Se.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(pe({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=Se.Pop;let E=d(),m=E==null?null:E-u;u=E,s&&s({action:a,location:w.location,delta:m})}function h(E,m){a=Se.Push;let p=ti(w.location,E,m);n&&n(p,E),u=d()+1;let v=Ef(p,u),g=w.createHref(p);try{l.pushState(v,"",g)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(g)}i&&s&&s({action:a,location:w.location,delta:1})}function x(E,m){a=Se.Replace;let p=ti(w.location,E,m);n&&n(p,E),u=d();let v=Ef(p,u),g=w.createHref(p);l.replaceState(v,"",g),i&&s&&s({action:a,location:w.location,delta:0})}function y(E){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof E=="string"?E:rr(E);return Q(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return a},get location(){return e(o,l)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(bf,f),s=E,()=>{o.removeEventListener(bf,f),s=null}},createHref(E){return t(o,E)},createURL:y,encodeLocation(E){let m=y(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:x,go(E){return l.go(E)}};return w}var Re;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Re||(Re={}));const pv=new Set(["lazy","caseSensitive","path","id","index","children"]);function hv(e){return e.index===!0}function uu(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let l=[...n,i],a=typeof o.id=="string"?o.id:l.join("-");if(Q(o.index!==!0||!o.children,"Cannot specify children on an index route"),Q(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),hv(o)){let s=pe({},o,t(o),{id:a});return r[a]=s,s}else{let s=pe({},o,t(o),{id:a,children:void 0});return r[a]=s,o.children&&(s.children=uu(o.children,t,l,r)),s}})}function Cr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?cn(t):t,o=eo(r.pathname||"/",n);if(o==null)return null;let i=I0(e);mv(i);let l=null;for(let a=0;l==null&&a<i.length;++a)l=Ev(i[a],Rv(o));return l}function I0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=nn([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(Q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),I0(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Sv(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of A0(i.path))o(i,l,s)}),t}function A0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=A0(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function mv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:bv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const gv=/^:\w+$/,yv=3,vv=2,xv=1,wv=10,kv=-2,Cf=e=>e==="*";function Sv(e,t){let n=e.split("/"),r=n.length;return n.some(Cf)&&(r+=kv),t&&(r+=vv),n.filter(o=>!Cf(o)).reduce((o,i)=>o+(gv.test(i)?yv:i===""?xv:wv),r)}function bv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ev(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=Cv({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;i.push({params:r,pathname:nn([o,d.pathname]),pathnameBase:Lv(nn([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=nn([o,d.pathnameBase]))}return i}function Cv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=jv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let h=a[f]||"";l=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}return u[d]=Pv(a[f]||"",d),u},{}),pathname:i,pathnameBase:l,pattern:e}}function jv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Rv(e){try{return decodeURI(e)}catch(t){return qr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Pv(e,t){try{return decodeURIComponent(e)}catch(n){return qr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function eo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function $v(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?cn(e):e;return{pathname:n?n.startsWith("/")?n:Nv(n,t):t,search:_v(r),hash:zv(o)}}function Nv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ja(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function la(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bc(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=cn(e):(o=pe({},e),Q(!o.pathname||!o.pathname.includes("?"),Ja("?","pathname","search",o)),Q(!o.pathname||!o.pathname.includes("#"),Ja("#","pathname","hash",o)),Q(!o.search||!o.search.includes("#"),Ja("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(r||l==null)a=n;else{let f=t.length-1;if(l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;o.pathname=h.join("/")}a=f>=0?t[f]:"/"}let s=$v(o,a),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const nn=e=>e.join("/").replace(/\/\/+/g,"/"),Lv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),_v=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,zv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ec{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function F0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const U0=["post","put","patch","delete"],Tv=new Set(U0),Ov=["get",...U0],Mv=new Set(Ov),Dv=new Set([301,302,303,307,308]),Iv=new Set([307,308]),es={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Av={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},mo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},B0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fv=e=>({hasErrorBoundary:!!e.hasErrorBoundary});function Uv(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;o=b=>({hasErrorBoundary:k(b)})}else o=Fv;let i={},l=uu(e.routes,o,void 0,i),a,s=e.basename||"/",u=pe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},e.future),d=null,f=new Set,h=null,x=null,y=null,w=e.hydrationData!=null,E=Cr(l,e.history.location,s),m=null;if(E==null){let k=ht(404,{pathname:e.history.location.pathname}),{matches:b,route:P}=zf(l);E=b,m={[P.id]:k}}let p=!E.some(k=>k.route.lazy)&&(!E.some(k=>k.route.loader)||e.hydrationData!=null),v,g={historyAction:e.history.action,location:e.history.location,matches:E,initialized:p,navigation:es,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||m,fetchers:new Map,blockers:new Map},C=Se.Pop,$=!1,R,_=!1,Y=!1,F=[],Ce=[],te=new Map,Ot=0,fn=-1,Mt=new Map,We=new Set,je=new Map,L=new Map,M=new Map,D=!1;function ie(){return d=e.history.listen(k=>{let{action:b,location:P,delta:T}=k;if(D){D=!1;return}qr(M.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let V=Xc({currentLocation:g.location,nextLocation:P,historyAction:b});if(V&&T!=null){D=!0,e.history.go(T*-1),yi(V,{state:"blocked",location:P,proceed(){yi(V,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),e.history.go(T)},reset(){let U=new Map(g.blockers);U.set(V,mo),ne({blockers:U})}});return}return ft(b,P)}),g.initialized||ft(Se.Pop,g.location),v}function de(){d&&d(),f.clear(),R&&R.abort(),g.fetchers.forEach((k,b)=>ga(b)),g.blockers.forEach((k,b)=>Gc(b))}function Ct(k){return f.add(k),()=>f.delete(k)}function ne(k){g=pe({},g,k),f.forEach(b=>b(g))}function Ge(k,b){var P,T;let V=g.actionData!=null&&g.navigation.formMethod!=null&&$t(g.navigation.formMethod)&&g.navigation.state==="loading"&&((P=k.state)==null?void 0:P._isRedirect)!==!0,U;b.actionData?Object.keys(b.actionData).length>0?U=b.actionData:U=null:V?U=g.actionData:U=null;let B=b.loaderData?_f(g.loaderData,b.loaderData,b.matches||[],b.errors):g.loaderData,I=g.blockers;I.size>0&&(I=new Map(I),I.forEach((le,ee)=>I.set(ee,mo)));let O=$===!0||g.navigation.formMethod!=null&&$t(g.navigation.formMethod)&&((T=k.state)==null?void 0:T._isRedirect)!==!0;a&&(l=a,a=void 0),_||C===Se.Pop||(C===Se.Push?e.history.push(k,k.state):C===Se.Replace&&e.history.replace(k,k.state)),ne(pe({},b,{actionData:U,loaderData:B,historyAction:C,location:k,initialized:!0,navigation:es,revalidation:"idle",restoreScrollPosition:Jc(k,b.matches||g.matches),preventScrollReset:O,blockers:I})),C=Se.Pop,$=!1,_=!1,Y=!1,F=[],Ce=[]}async function Fe(k,b){if(typeof k=="number"){e.history.go(k);return}let P=cu(g.location,g.matches,s,u.v7_prependBasename,k,b==null?void 0:b.fromRouteId,b==null?void 0:b.relative),{path:T,submission:V,error:U}=jf(u.v7_normalizeFormMethod,!1,P,b),B=g.location,I=ti(g.location,T,b&&b.state);I=pe({},I,e.history.encodeLocation(I));let O=b&&b.replace!=null?b.replace:void 0,le=Se.Push;O===!0?le=Se.Replace:O===!1||V!=null&&$t(V.formMethod)&&V.formAction===g.location.pathname+g.location.search&&(le=Se.Replace);let ee=b&&"preventScrollReset"in b?b.preventScrollReset===!0:void 0,it=Xc({currentLocation:B,nextLocation:I,historyAction:le});if(it){yi(it,{state:"blocked",location:I,proceed(){yi(it,{state:"proceeding",proceed:void 0,reset:void 0,location:I}),Fe(k,b)},reset(){let Le=new Map(g.blockers);Le.set(it,mo),ne({blockers:Le})}});return}return await ft(le,I,{submission:V,pendingError:U,preventScrollReset:ee,replace:b&&b.replace})}function Xe(){if(ma(),ne({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){ft(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}ft(C||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function ft(k,b,P){R&&R.abort(),R=null,C=k,_=(P&&P.startUninterruptedRevalidation)===!0,_m(g.location,g.matches),$=(P&&P.preventScrollReset)===!0;let T=a||l,V=P&&P.overrideNavigation,U=Cr(T,b,s);if(!U){let Le=ht(404,{pathname:b.pathname}),{matches:Ze,route:It}=zf(T);ya(),Ge(b,{matches:Ze,loaderData:{},errors:{[It.id]:Le}});return}if(g.initialized&&!Y&&qv(g.location,b)&&!(P&&P.submission&&$t(P.submission.formMethod))){Ge(b,{matches:U});return}R=new AbortController;let B=yo(e.history,b,R.signal,P&&P.submission),I,O;if(P&&P.pendingError)O={[jr(U).route.id]:P.pendingError};else if(P&&P.submission&&$t(P.submission.formMethod)){let Le=await ar(B,b,P.submission,U,{replace:P.replace});if(Le.shortCircuited)return;I=Le.pendingActionData,O=Le.pendingActionError,V=Ai(b,P.submission),B=new Request(B.url,{signal:B.signal})}let{shortCircuited:le,loaderData:ee,errors:it}=await Dt(B,b,U,V,P&&P.submission,P&&P.fetcherSubmission,P&&P.replace,I,O);le||(R=null,Ge(b,pe({matches:U},I?{actionData:I}:{},{loaderData:ee,errors:it})))}async function ar(k,b,P,T,V){V===void 0&&(V={}),ma();let U=Xv(b,P);ne({navigation:U});let B,I=fu(T,b);if(!I.route.action&&!I.route.lazy)B={type:Re.error,error:ht(405,{method:k.method,pathname:b.pathname,routeId:I.route.id})};else if(B=await go("action",k,I,T,i,o,s),k.signal.aborted)return{shortCircuited:!0};if(zr(B)){let O;return V&&V.replace!=null?O=V.replace:O=B.location===g.location.pathname+g.location.search,await ro(g,B,{submission:P,replace:O}),{shortCircuited:!0}}if(Oo(B)){let O=jr(T,I.route.id);return(V&&V.replace)!==!0&&(C=Se.Push),{pendingActionData:{},pendingActionError:{[O.route.id]:B.error}}}if(qn(B))throw ht(400,{type:"defer-action"});return{pendingActionData:{[I.route.id]:B.data}}}async function Dt(k,b,P,T,V,U,B,I,O){let le=T||Ai(b,V),ee=V||U||Mf(le),it=a||l,[Le,Ze]=Rf(e.history,g,P,ee,b,Y,F,Ce,je,We,it,s,I,O);if(ya(fe=>!(P&&P.some(pt=>pt.route.id===fe))||Le&&Le.some(pt=>pt.route.id===fe)),Le.length===0&&Ze.length===0){let fe=Kc();return Ge(b,pe({matches:P,loaderData:{},errors:O||null},I?{actionData:I}:{},fe?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!_){Ze.forEach(pt=>{let sr=g.fetchers.get(pt.key),Me=vo(void 0,sr?sr.data:void 0);g.fetchers.set(pt.key,Me)});let fe=I||g.actionData;ne(pe({navigation:le},fe?Object.keys(fe).length===0?{actionData:null}:{actionData:fe}:{},Ze.length>0?{fetchers:new Map(g.fetchers)}:{}))}fn=++Ot,Ze.forEach(fe=>{te.has(fe.key)&&pn(fe.key),fe.controller&&te.set(fe.key,fe.controller)});let It=()=>Ze.forEach(fe=>pn(fe.key));R&&R.signal.addEventListener("abort",It);let{results:oo,loaderResults:va,fetcherResults:vi}=await qc(g.matches,P,Le,Ze,k);if(k.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",It),Ze.forEach(fe=>te.delete(fe.key));let Yt=Tf(oo);if(Yt)return await ro(g,Yt,{replace:B}),{shortCircuited:!0};let{loaderData:xi,errors:xa}=Lf(g,P,Le,va,O,Ze,vi,L);L.forEach((fe,pt)=>{fe.subscribe(sr=>{(sr||fe.done)&&L.delete(pt)})});let wa=Kc(),ka=Yc(fn),wi=wa||ka||Ze.length>0;return pe({loaderData:xi,errors:xa},wi?{fetchers:new Map(g.fetchers)}:{})}function Wc(k){return g.fetchers.get(k)||Av}function Rm(k,b,P,T){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");te.has(k)&&pn(k);let V=a||l,U=cu(g.location,g.matches,s,u.v7_prependBasename,P,b,T==null?void 0:T.relative),B=Cr(V,U,s);if(!B){gi(k,b,ht(404,{pathname:U}));return}let{path:I,submission:O,error:le}=jf(u.v7_normalizeFormMethod,!0,U,T);if(le){gi(k,b,le);return}let ee=fu(B,I);if($=(T&&T.preventScrollReset)===!0,O&&$t(O.formMethod)){Pm(k,b,I,ee,B,O);return}je.set(k,{routeId:b,path:I}),$m(k,b,I,ee,B,O)}async function Pm(k,b,P,T,V,U){if(ma(),je.delete(k),!T.route.action&&!T.route.lazy){let Me=ht(405,{method:U.formMethod,pathname:P,routeId:b});gi(k,b,Me);return}let B=g.fetchers.get(k),I=Zv(U,B);g.fetchers.set(k,I),ne({fetchers:new Map(g.fetchers)});let O=new AbortController,le=yo(e.history,P,O.signal,U);te.set(k,O);let ee=await go("action",le,T,V,i,o,s);if(le.signal.aborted){te.get(k)===O&&te.delete(k);return}if(zr(ee)){te.delete(k),We.add(k);let Me=vo(U);return g.fetchers.set(k,Me),ne({fetchers:new Map(g.fetchers)}),ro(g,ee,{submission:U,isFetchActionRedirect:!0})}if(Oo(ee)){gi(k,b,ee.error);return}if(qn(ee))throw ht(400,{type:"defer-action"});let it=g.navigation.location||g.location,Le=yo(e.history,it,O.signal),Ze=a||l,It=g.navigation.state!=="idle"?Cr(Ze,g.navigation.location,s):g.matches;Q(It,"Didn't find any matches after fetcher action");let oo=++Ot;Mt.set(k,oo);let va=vo(U,ee.data);g.fetchers.set(k,va);let[vi,Yt]=Rf(e.history,g,It,U,it,Y,F,Ce,je,We,Ze,s,{[T.route.id]:ee.data},void 0);Yt.filter(Me=>Me.key!==k).forEach(Me=>{let io=Me.key,ed=g.fetchers.get(io),Tm=vo(void 0,ed?ed.data:void 0);g.fetchers.set(io,Tm),te.has(io)&&pn(io),Me.controller&&te.set(io,Me.controller)}),ne({fetchers:new Map(g.fetchers)});let xi=()=>Yt.forEach(Me=>pn(Me.key));O.signal.addEventListener("abort",xi);let{results:xa,loaderResults:wa,fetcherResults:ka}=await qc(g.matches,It,vi,Yt,Le);if(O.signal.aborted)return;O.signal.removeEventListener("abort",xi),Mt.delete(k),te.delete(k),Yt.forEach(Me=>te.delete(Me.key));let wi=Tf(xa);if(wi)return ro(g,wi);let{loaderData:fe,errors:pt}=Lf(g,g.matches,vi,wa,void 0,Yt,ka,L);if(g.fetchers.has(k)){let Me=nl(ee.data);g.fetchers.set(k,Me)}let sr=Yc(oo);g.navigation.state==="loading"&&oo>fn?(Q(C,"Expected pending action"),R&&R.abort(),Ge(g.navigation.location,{matches:It,loaderData:fe,errors:pt,fetchers:new Map(g.fetchers)})):(ne(pe({errors:pt,loaderData:_f(g.loaderData,fe,It,pt)},sr||Yt.length>0?{fetchers:new Map(g.fetchers)}:{})),Y=!1)}async function $m(k,b,P,T,V,U){let B=g.fetchers.get(k),I=vo(U,B?B.data:void 0);g.fetchers.set(k,I),ne({fetchers:new Map(g.fetchers)});let O=new AbortController,le=yo(e.history,P,O.signal);te.set(k,O);let ee=await go("loader",le,T,V,i,o,s);if(qn(ee)&&(ee=await W0(ee,le.signal,!0)||ee),te.get(k)===O&&te.delete(k),le.signal.aborted)return;if(zr(ee)){We.add(k),await ro(g,ee);return}if(Oo(ee)){let Le=jr(g.matches,b);g.fetchers.delete(k),ne({fetchers:new Map(g.fetchers),errors:{[Le.route.id]:ee.error}});return}Q(!qn(ee),"Unhandled fetcher deferred data");let it=nl(ee.data);g.fetchers.set(k,it),ne({fetchers:new Map(g.fetchers)})}async function ro(k,b,P){let{submission:T,replace:V,isFetchActionRedirect:U}=P===void 0?{}:P;b.revalidate&&(Y=!0);let B=ti(k.location,b.location,pe({_isRedirect:!0},U?{_isFetchActionRedirect:!0}:{}));if(Q(B,"Expected a location on the redirect navigation"),B0.test(b.location)&&n){let le=e.history.createURL(b.location),ee=eo(le.pathname,s)==null;if(t.location.origin!==le.origin||ee){V?t.location.replace(b.location):t.location.assign(b.location);return}}R=null;let I=V===!0?Se.Replace:Se.Push,O=T||Mf(k.navigation);if(Iv.has(b.status)&&O&&$t(O.formMethod))await ft(I,B,{submission:pe({},O,{formAction:b.location}),preventScrollReset:$});else if(U)await ft(I,B,{overrideNavigation:Ai(B),fetcherSubmission:O,preventScrollReset:$});else{let le=Ai(B,O);await ft(I,B,{overrideNavigation:le,preventScrollReset:$})}}async function qc(k,b,P,T,V){let U=await Promise.all([...P.map(O=>go("loader",V,O,b,i,o,s)),...T.map(O=>O.matches&&O.match&&O.controller?go("loader",yo(e.history,O.path,O.controller.signal),O.match,O.matches,i,o,s):{type:Re.error,error:ht(404,{pathname:O.path})})]),B=U.slice(0,P.length),I=U.slice(P.length);return await Promise.all([Of(k,P,B,B.map(()=>V.signal),!1,g.loaderData),Of(k,T.map(O=>O.match),I,T.map(O=>O.controller?O.controller.signal:null),!0)]),{results:U,loaderResults:B,fetcherResults:I}}function ma(){Y=!0,F.push(...ya()),je.forEach((k,b)=>{te.has(b)&&(Ce.push(b),pn(b))})}function gi(k,b,P){let T=jr(g.matches,b);ga(k),ne({errors:{[T.route.id]:P},fetchers:new Map(g.fetchers)})}function ga(k){let b=g.fetchers.get(k);te.has(k)&&!(b&&b.state==="loading"&&Mt.has(k))&&pn(k),je.delete(k),Mt.delete(k),We.delete(k),g.fetchers.delete(k)}function pn(k){let b=te.get(k);Q(b,"Expected fetch controller: "+k),b.abort(),te.delete(k)}function Qc(k){for(let b of k){let P=Wc(b),T=nl(P.data);g.fetchers.set(b,T)}}function Kc(){let k=[],b=!1;for(let P of We){let T=g.fetchers.get(P);Q(T,"Expected fetcher: "+P),T.state==="loading"&&(We.delete(P),k.push(P),b=!0)}return Qc(k),b}function Yc(k){let b=[];for(let[P,T]of Mt)if(T<k){let V=g.fetchers.get(P);Q(V,"Expected fetcher: "+P),V.state==="loading"&&(pn(P),Mt.delete(P),b.push(P))}return Qc(b),b.length>0}function Nm(k,b){let P=g.blockers.get(k)||mo;return M.get(k)!==b&&M.set(k,b),P}function Gc(k){g.blockers.delete(k),M.delete(k)}function yi(k,b){let P=g.blockers.get(k)||mo;Q(P.state==="unblocked"&&b.state==="blocked"||P.state==="blocked"&&b.state==="blocked"||P.state==="blocked"&&b.state==="proceeding"||P.state==="blocked"&&b.state==="unblocked"||P.state==="proceeding"&&b.state==="unblocked","Invalid blocker state transition: "+P.state+" -> "+b.state);let T=new Map(g.blockers);T.set(k,b),ne({blockers:T})}function Xc(k){let{currentLocation:b,nextLocation:P,historyAction:T}=k;if(M.size===0)return;M.size>1&&qr(!1,"A router only supports one blocker at a time");let V=Array.from(M.entries()),[U,B]=V[V.length-1],I=g.blockers.get(U);if(!(I&&I.state==="proceeding")&&B({currentLocation:b,nextLocation:P,historyAction:T}))return U}function ya(k){let b=[];return L.forEach((P,T)=>{(!k||k(T))&&(P.cancel(),b.push(T),L.delete(T))}),b}function Lm(k,b,P){if(h=k,y=b,x=P||null,!w&&g.navigation===es){w=!0;let T=Jc(g.location,g.matches);T!=null&&ne({restoreScrollPosition:T})}return()=>{h=null,y=null,x=null}}function Zc(k,b){return x&&x(k,b.map(T=>Gv(T,g.loaderData)))||k.key}function _m(k,b){if(h&&y){let P=Zc(k,b);h[P]=y()}}function Jc(k,b){if(h){let P=Zc(k,b),T=h[P];if(typeof T=="number")return T}return null}function zm(k){i={},a=uu(k,o,void 0,i)}return v={get basename(){return s},get state(){return g},get routes(){return l},initialize:ie,subscribe:Ct,enableScrollRestoration:Lm,navigate:Fe,fetch:Rm,revalidate:Xe,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:Wc,deleteFetcher:ga,dispose:de,getBlocker:Nm,deleteBlocker:Gc,_internalFetchControllers:te,_internalActiveDeferreds:L,_internalSetRoutes:zm},v}function Bv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function cu(e,t,n,r,o,i,l){let a,s;if(i!=null&&l!=="path"){a=[];for(let d of t)if(a.push(d),d.route.id===i){s=d;break}}else a=t,s=t[t.length-1];let u=bc(o||".",la(a).map(d=>d.pathnameBase),eo(e.pathname,n)||e.pathname,l==="path");return o==null&&(u.search=e.search,u.hash=e.hash),(o==null||o===""||o===".")&&s&&s.route.index&&!Cc(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:nn([n,u.pathname])),rr(u)}function jf(e,t,n,r){if(!r||!Bv(r))return{path:n};if(r.formMethod&&!Yv(r.formMethod))return{path:n,error:ht(405,{method:r.formMethod})};let o=()=>({path:n,error:ht(400,{type:"invalid-body"})}),i=r.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=V0(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!$t(l))return o();let h=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,y)=>{let[w,E]=y;return""+x+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:h}}}else if(r.formEncType==="application/json"){if(!$t(l))return o();try{let h=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:h,text:void 0}}}catch{return o()}}}Q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=du(r.formData),u=r.formData;else if(r.body instanceof FormData)s=du(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Nf(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Nf(s)}catch{return o()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if($t(d.formMethod))return{path:n,submission:d};let f=cn(n);return t&&f.search&&Cc(f.search)&&s.append("index",""),f.search="?"+s,{path:rr(f),submission:d}}function Hv(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Rf(e,t,n,r,o,i,l,a,s,u,d,f,h,x){let y=x?Object.values(x)[0]:h?Object.values(h)[0]:void 0,w=e.createURL(t.location),E=e.createURL(o),m=x?Object.keys(x)[0]:void 0,v=Hv(n,m).filter((C,$)=>{if(C.route.lazy)return!0;if(C.route.loader==null)return!1;if(Vv(t.loaderData,t.matches[$],C)||l.some(Y=>Y===C.route.id))return!0;let R=t.matches[$],_=C;return Pf(C,pe({currentUrl:w,currentParams:R.params,nextUrl:E,nextParams:_.params},r,{actionResult:y,defaultShouldRevalidate:i||w.pathname+w.search===E.pathname+E.search||w.search!==E.search||H0(R,_)}))}),g=[];return s.forEach((C,$)=>{if(!n.some(te=>te.route.id===C.routeId))return;let R=Cr(d,C.path,f);if(!R){g.push({key:$,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let _=t.fetchers.get($),Y=_&&_.state!=="idle"&&_.data===void 0&&!u.has($),F=fu(R,C.path);(a.includes($)||Y||Pf(F,pe({currentUrl:w,currentParams:t.matches[t.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:y,defaultShouldRevalidate:i})))&&g.push({key:$,routeId:C.routeId,path:C.path,matches:R,match:F,controller:new AbortController})}),[v,g]}function Vv(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function H0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Pf(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function $f(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];Q(o,"No route found in manifest");let i={};for(let l in r){let s=o[l]!==void 0&&l!=="hasErrorBoundary";qr(!s,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!pv.has(l)&&(i[l]=r[l])}Object.assign(o,i),Object.assign(o,pe({},t(o),{lazy:void 0}))}async function go(e,t,n,r,o,i,l,a){a===void 0&&(a={});let s,u,d,f=y=>{let w,E=new Promise((m,p)=>w=p);return d=()=>w(),t.signal.addEventListener("abort",d),Promise.race([y({request:t,params:n.params,context:a.requestContext}),E])};try{let y=n.route[e];if(n.route.lazy)if(y)u=(await Promise.all([f(y),$f(n.route,i,o)]))[0];else if(await $f(n.route,i,o),y=n.route[e],y)u=await f(y);else if(e==="action"){let w=new URL(t.url),E=w.pathname+w.search;throw ht(405,{method:t.method,pathname:E,routeId:n.route.id})}else return{type:Re.data,data:void 0};else if(y)u=await f(y);else{let w=new URL(t.url),E=w.pathname+w.search;throw ht(404,{pathname:E})}Q(u!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(y){s=Re.error,u=y}finally{d&&t.signal.removeEventListener("abort",d)}if(Kv(u)){let y=u.status;if(Dv.has(y)){let m=u.headers.get("Location");if(Q(m,"Redirects returned/thrown from loaders/actions must have a Location header"),!B0.test(m))m=cu(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,m);else if(!a.isStaticRequest){let p=new URL(t.url),v=m.startsWith("//")?new URL(p.protocol+m):new URL(m),g=eo(v.pathname,l)!=null;v.origin===p.origin&&g&&(m=v.pathname+v.search+v.hash)}if(a.isStaticRequest)throw u.headers.set("Location",m),u;return{type:Re.redirect,status:y,location:m,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:s||Re.data,response:u};let w,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?w=await u.json():w=await u.text(),s===Re.error?{type:s,error:new Ec(y,u.statusText,w),headers:u.headers}:{type:Re.data,data:w,statusCode:u.status,headers:u.headers}}if(s===Re.error)return{type:s,error:u};if(Qv(u)){var h,x;return{type:Re.deferred,deferredData:u,statusCode:(h=u.init)==null?void 0:h.status,headers:((x=u.init)==null?void 0:x.headers)&&new Headers(u.init.headers)}}return{type:Re.data,data:u}}function yo(e,t,n,r){let o=e.createURL(V0(t)).toString(),i={signal:n};if(r&&$t(r.formMethod)){let{formMethod:l,formEncType:a}=r;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(r.json)):a==="text/plain"?i.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?i.body=du(r.formData):i.body=r.formData}return new Request(o,i)}function du(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Nf(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Wv(e,t,n,r,o){let i={},l=null,a,s=!1,u={};return n.forEach((d,f)=>{let h=t[f].route.id;if(Q(!zr(d),"Cannot handle redirect results in processLoaderData"),Oo(d)){let x=jr(e,h),y=d.error;r&&(y=Object.values(r)[0],r=void 0),l=l||{},l[x.route.id]==null&&(l[x.route.id]=y),i[h]=void 0,s||(s=!0,a=F0(d.error)?d.error.status:500),d.headers&&(u[h]=d.headers)}else qn(d)?(o.set(h,d.deferredData),i[h]=d.deferredData.data):i[h]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(a=d.statusCode),d.headers&&(u[h]=d.headers)}),r&&(l=r,i[Object.keys(r)[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:u}}function Lf(e,t,n,r,o,i,l,a){let{loaderData:s,errors:u}=Wv(t,n,r,o,a);for(let d=0;d<i.length;d++){let{key:f,match:h,controller:x}=i[d];Q(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let y=l[d];if(!(x&&x.signal.aborted))if(Oo(y)){let w=jr(e.matches,h==null?void 0:h.route.id);u&&u[w.route.id]||(u=pe({},u,{[w.route.id]:y.error})),e.fetchers.delete(f)}else if(zr(y))Q(!1,"Unhandled fetcher revalidation redirect");else if(qn(y))Q(!1,"Unhandled fetcher deferred data");else{let w=nl(y.data);e.fetchers.set(f,w)}}return{loaderData:s,errors:u}}function _f(e,t,n,r){let o=pe({},t);for(let i of n){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&i.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function jr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function zf(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ht(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",o&&n&&r?a="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",a='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?a="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(a='Invalid request method "'+o.toUpperCase()+'"')),new Ec(e||500,l,new Error(a),!0)}function Tf(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(zr(n))return n}}function V0(e){let t=typeof e=="string"?cn(e):e;return rr(pe({},t,{hash:""}))}function qv(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function qn(e){return e.type===Re.deferred}function Oo(e){return e.type===Re.error}function zr(e){return(e&&e.type)===Re.redirect}function Qv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Kv(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Yv(e){return Mv.has(e.toLowerCase())}function $t(e){return Tv.has(e.toLowerCase())}async function Of(e,t,n,r,o,i){for(let l=0;l<n.length;l++){let a=n[l],s=t[l];if(!s)continue;let u=e.find(f=>f.route.id===s.route.id),d=u!=null&&!H0(u,s)&&(i&&i[s.route.id])!==void 0;if(qn(a)&&(o||d)){let f=r[l];Q(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await W0(a,f,o).then(h=>{h&&(n[l]=h||n[l])})}}}async function W0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Re.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Re.error,error:o}}return{type:Re.data,data:e.deferredData.data}}}function Cc(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Gv(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function fu(e,t){let n=typeof t=="string"?cn(t).search:t.search;if(e[e.length-1].route.index&&Cc(n||""))return e[e.length-1];let r=la(e);return r[r.length-1]}function Mf(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:l}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Ai(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Xv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function vo(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}function Zv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0," _hasFetcherDoneAnything ":!0}}function nl(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}const aa=S.createContext(null),q0=S.createContext(null),to=S.createContext(null),sa=S.createContext(null),dn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Q0=S.createContext(null);function Jv(e,t){let{relative:n}=t===void 0?{}:t;pi()||Q(!1);let{basename:r,navigator:o}=S.useContext(to),{hash:i,pathname:l,search:a}=Y0(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:nn([r,l])),o.createHref({pathname:s,search:a,hash:i})}function pi(){return S.useContext(sa)!=null}function lr(){return pi()||Q(!1),S.useContext(sa).location}function K0(e){S.useContext(to).static||S.useLayoutEffect(e)}function Et(){let{isDataRoute:e}=S.useContext(dn);return e?p2():e2()}function e2(){pi()||Q(!1);let e=S.useContext(aa),{basename:t,navigator:n}=S.useContext(to),{matches:r}=S.useContext(dn),{pathname:o}=lr(),i=JSON.stringify(la(r).map(s=>s.pathnameBase)),l=S.useRef(!1);return K0(()=>{l.current=!0}),S.useCallback(function(s,u){if(u===void 0&&(u={}),!l.current)return;if(typeof s=="number"){n.go(s);return}let d=bc(s,JSON.parse(i),o,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:nn([t,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[t,n,i,o,e])}const t2=S.createContext(null);function n2(e){let t=S.useContext(dn).outlet;return t&&S.createElement(t2.Provider,{value:e},t)}function r2(){let{matches:e}=S.useContext(dn),t=e[e.length-1];return t?t.params:{}}function Y0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=S.useContext(dn),{pathname:o}=lr(),i=JSON.stringify(la(r).map(l=>l.pathnameBase));return S.useMemo(()=>bc(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}function o2(e,t,n){pi()||Q(!1);let{navigator:r}=S.useContext(to),{matches:o}=S.useContext(dn),i=o[o.length-1],l=i?i.params:{};i&&i.pathname;let a=i?i.pathnameBase:"/";i&&i.route;let s=lr(),u;if(t){var d;let w=typeof t=="string"?cn(t):t;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||Q(!1),u=w}else u=s;let f=u.pathname||"/",h=a==="/"?f:f.slice(a.length)||"/",x=Cr(e,{pathname:h}),y=u2(x&&x.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:nn([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:nn([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n);return t&&y?S.createElement(sa.Provider,{value:{location:Ml({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Se.Pop}},y):y}function i2(){let e=X0(),t=F0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,i)}const l2=S.createElement(i2,null);class a2 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?S.createElement(dn.Provider,{value:this.props.routeContext},S.createElement(Q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function s2(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(aa);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(dn.Provider,{value:t},r)}function u2(e,t,n){var r;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let i=e,l=(r=n)==null?void 0:r.errors;if(l!=null){let a=i.findIndex(s=>s.route.id&&(l==null?void 0:l[s.route.id]));a>=0||Q(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,s,u)=>{let d=s.route.id?l==null?void 0:l[s.route.id]:null,f=null;n&&(f=s.route.errorElement||l2);let h=t.concat(i.slice(0,u+1)),x=()=>{let y;return d?y=f:s.route.Component?y=S.createElement(s.route.Component,null):s.route.element?y=s.route.element:y=a,S.createElement(s2,{match:s,routeContext:{outlet:a,matches:h,isDataRoute:n!=null},children:y})};return n&&(s.route.ErrorBoundary||s.route.errorElement||u===0)?S.createElement(a2,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var pu;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(pu||(pu={}));var ni;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(ni||(ni={}));function c2(e){let t=S.useContext(aa);return t||Q(!1),t}function d2(e){let t=S.useContext(q0);return t||Q(!1),t}function f2(e){let t=S.useContext(dn);return t||Q(!1),t}function G0(e){let t=f2(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function X0(){var e;let t=S.useContext(Q0),n=d2(ni.UseRouteError),r=G0(ni.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function p2(){let{router:e}=c2(pu.UseNavigateStable),t=G0(ni.UseNavigateStable),n=S.useRef(!1);return K0(()=>{n.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Ml({fromRouteId:t},i)))},[e,t])}const h2="startTransition",Df=Zm[h2];function m2(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=S.useState(n.state),{v7_startTransition:l}=r||{},a=S.useCallback(f=>{l&&Df?Df(()=>i(f)):i(f)},[i,l]);S.useLayoutEffect(()=>n.subscribe(a),[n,a]);let s=S.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:f=>n.navigate(f),push:(f,h,x)=>n.navigate(f,{state:h,preventScrollReset:x==null?void 0:x.preventScrollReset}),replace:(f,h,x)=>n.navigate(f,{replace:!0,state:h,preventScrollReset:x==null?void 0:x.preventScrollReset})}),[n]),u=n.basename||"/",d=S.useMemo(()=>({router:n,navigator:s,static:!1,basename:u}),[n,s,u]);return S.createElement(S.Fragment,null,S.createElement(aa.Provider,{value:d},S.createElement(q0.Provider,{value:o},S.createElement(y2,{basename:u,location:o.location,navigationType:o.historyAction,navigator:s},o.initialized?S.createElement(g2,{routes:n.routes,state:o}):t))),null)}function g2(e){let{routes:t,state:n}=e;return o2(t,void 0,n)}function Z0(e){return n2(e.context)}function y2(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Se.Pop,navigator:i,static:l=!1}=e;pi()&&Q(!1);let a=t.replace(/^\/*/,"/"),s=S.useMemo(()=>({basename:a,navigator:i,static:l}),[a,i,l]);typeof r=="string"&&(r=cn(r));let{pathname:u="/",search:d="",hash:f="",state:h=null,key:x="default"}=r,y=S.useMemo(()=>{let w=eo(u,a);return w==null?null:{location:{pathname:w,search:d,hash:f,state:h,key:x},navigationType:o}},[a,u,d,f,h,x,o]);return y==null?null:S.createElement(to.Provider,{value:s},S.createElement(sa.Provider,{children:n,value:y}))}var If;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(If||(If={}));new Promise(()=>{});function v2(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:S.createElement(e.Component),Component:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:S.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ri(){return ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ri.apply(this,arguments)}function x2(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function w2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function k2(e,t){return e.button===0&&(!t||t==="_self")&&!w2(e)}const S2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function b2(e,t){return Uv({basename:t==null?void 0:t.basename,future:ri({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:cv({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||E2(),routes:e,mapRouteProperties:v2}).initialize()}function E2(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ri({},t,{errors:C2(t.errors)})),t}function C2(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Ec(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){let i=new Error(o.message);i.stack="",n[r]=i}else n[r]=o;return n}const j2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:d}=t,f=x2(t,S2),{basename:h}=S.useContext(to),x,y=!1;if(typeof u=="string"&&R2.test(u)&&(x=u,j2))try{let p=new URL(window.location.href),v=u.startsWith("//")?new URL(p.protocol+u):new URL(u),g=eo(v.pathname,h);v.origin===p.origin&&g!=null?u=g+v.search+v.hash:y=!0}catch{}let w=Jv(u,{relative:o}),E=P2(u,{replace:l,state:a,target:s,preventScrollReset:d,relative:o});function m(p){r&&r(p),p.defaultPrevented||E(p)}return S.createElement("a",ri({},f,{href:x||w,onClick:y||i?r:m,ref:n,target:s}))});var Af;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Af||(Af={}));var Ff;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ff||(Ff={}));function P2(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l}=t===void 0?{}:t,a=Et(),s=lr(),u=Y0(e,{relative:l});return S.useCallback(d=>{if(k2(d,n)){d.preventDefault();let f=r!==void 0?r:rr(s)===rr(u);a(e,{replace:f,state:o,preventScrollReset:i,relative:l})}},[s,a,u,r,o,n,e,i,l])}const $2="/assets/Archival-ca7e898f.png",N2=A.span`
  color: ${({theme:e})=>e.colors.logo};
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;function jc(){return c.jsx(N2,{children:c.jsx("div",{style:{width:"124px"},children:c.jsx("img",{src:$2,style:{width:"100%"}})})})}const L2=A.div`
  display: flex;
  flex-direction: column-reverse;

  input {
    color: ${({theme:e})=>e.colors.secondary};
    background: transparent;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({theme:e})=>e.colors.secondary};
    padding: 0 0 0.5rem;
  }

  label {
    color: ${({theme:e})=>e.colors.secondary};
    font-size: 0.85rem;
    transform: translateY(1rem);
    transition: transform 250ms;
    cursor: text;
    user-select: none;
  }

  label.outside {
    color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-0.5rem);
  }
`;function kn({name:e,inputRef:t,type:n,label:r,onChange:o,id:i}){const l=S.useRef(null),a=u=>{const d=l.current;d&&u.currentTarget.value===""&&d.classList.add("outside")},s=u=>{const d=l.current;d&&u.currentTarget.value===""&&d.classList.remove("outside")};return c.jsxs(L2,{children:[c.jsx("input",{ref:t,type:n||"text",name:e,id:i,required:!0,onFocus:a,onBlur:s,onChange:u=>{o&&o(u.currentTarget.value)}}),c.jsx("label",{htmlFor:i,ref:l,children:r})]})}function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}function _2(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ii(e,t){return ii=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},ii(e,t)}function z2(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,ii(e,t)}function hu(e){return hu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},hu(e)}function T2(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function O2(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function rl(e,t,n){return O2()?rl=Reflect.construct.bind():rl=function(o,i,l){var a=[null];a.push.apply(a,i);var s=Function.bind.apply(o,a),u=new s;return l&&ii(u,l.prototype),u},rl.apply(null,arguments)}function mu(e){var t=typeof Map=="function"?new Map:void 0;return mu=function(r){if(r===null||!T2(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,o)}function o(){return rl(r,arguments,hu(this).constructor)}return o.prototype=Object.create(r.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),ii(o,r)},mu(e)}var Vt=function(e){z2(t,e);function t(n){var r;return r=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,_2(r)}return t}(mu(Error));function ts(e){return Math.round(e*255)}function M2(e,t,n){return ts(e)+","+ts(t)+","+ts(n)}function li(e,t,n,r){if(r===void 0&&(r=M2),t===0)return r(n,n,n);var o=(e%360+360)%360/60,i=(1-Math.abs(2*n-1))*t,l=i*(1-Math.abs(o%2-1)),a=0,s=0,u=0;o>=0&&o<1?(a=i,s=l):o>=1&&o<2?(a=l,s=i):o>=2&&o<3?(s=i,u=l):o>=3&&o<4?(s=l,u=i):o>=4&&o<5?(a=l,u=i):o>=5&&o<6&&(a=i,u=l);var d=n-i/2,f=a+d,h=s+d,x=u+d;return r(f,h,x)}var Uf={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function D2(e){if(typeof e!="string")return e;var t=e.toLowerCase();return Uf[t]?"#"+Uf[t]:e}var I2=/^#[a-fA-F0-9]{6}$/,A2=/^#[a-fA-F0-9]{8}$/,F2=/^#[a-fA-F0-9]{3}$/,U2=/^#[a-fA-F0-9]{4}$/,ns=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,B2=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,H2=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,V2=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Rc(e){if(typeof e!="string")throw new Vt(3);var t=D2(e);if(t.match(I2))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(A2)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match(F2))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(U2)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var o=ns.exec(t);if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10)};var i=B2.exec(t.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var l=H2.exec(t);if(l){var a=parseInt(""+l[1],10),s=parseInt(""+l[2],10)/100,u=parseInt(""+l[3],10)/100,d="rgb("+li(a,s,u)+")",f=ns.exec(d);if(!f)throw new Vt(4,t,d);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10)}}var h=V2.exec(t.substring(0,50));if(h){var x=parseInt(""+h[1],10),y=parseInt(""+h[2],10)/100,w=parseInt(""+h[3],10)/100,E="rgb("+li(x,y,w)+")",m=ns.exec(E);if(!m)throw new Vt(4,t,E);return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10),alpha:parseFloat(""+h[4])>1?parseFloat(""+h[4])/100:parseFloat(""+h[4])}}throw new Vt(5)}function W2(e){var t=e.red/255,n=e.green/255,r=e.blue/255,o=Math.max(t,n,r),i=Math.min(t,n,r),l=(o+i)/2;if(o===i)return e.alpha!==void 0?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l};var a,s=o-i,u=l>.5?s/(2-o-i):s/(o+i);switch(o){case t:a=(n-r)/s+(n<r?6:0);break;case n:a=(r-t)/s+2;break;default:a=(t-n)/s+4;break}return a*=60,e.alpha!==void 0?{hue:a,saturation:u,lightness:l,alpha:e.alpha}:{hue:a,saturation:u,lightness:l}}function J0(e){return W2(Rc(e))}var q2=function(t){return t.length===7&&t[1]===t[2]&&t[3]===t[4]&&t[5]===t[6]?"#"+t[1]+t[3]+t[5]:t},gu=q2;function Un(e){var t=e.toString(16);return t.length===1?"0"+t:t}function rs(e){return Un(Math.round(e*255))}function Q2(e,t,n){return gu("#"+rs(e)+rs(t)+rs(n))}function Dl(e,t,n){return li(e,t,n,Q2)}function K2(e,t,n){if(typeof e=="number"&&typeof t=="number"&&typeof n=="number")return Dl(e,t,n);if(typeof e=="object"&&t===void 0&&n===void 0)return Dl(e.hue,e.saturation,e.lightness);throw new Vt(1)}function Y2(e,t,n,r){if(typeof e=="number"&&typeof t=="number"&&typeof n=="number"&&typeof r=="number")return r>=1?Dl(e,t,n):"rgba("+li(e,t,n)+","+r+")";if(typeof e=="object"&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?Dl(e.hue,e.saturation,e.lightness):"rgba("+li(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new Vt(2)}function yu(e,t,n){if(typeof e=="number"&&typeof t=="number"&&typeof n=="number")return gu("#"+Un(e)+Un(t)+Un(n));if(typeof e=="object"&&t===void 0&&n===void 0)return gu("#"+Un(e.red)+Un(e.green)+Un(e.blue));throw new Vt(6)}function Ht(e,t,n,r){if(typeof e=="string"&&typeof t=="number"){var o=Rc(e);return"rgba("+o.red+","+o.green+","+o.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof n=="number"&&typeof r=="number")return r>=1?yu(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if(typeof e=="object"&&t===void 0&&n===void 0&&r===void 0)return e.alpha>=1?yu(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new Vt(7)}var G2=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},X2=function(t){return typeof t.red=="number"&&typeof t.green=="number"&&typeof t.blue=="number"&&typeof t.alpha=="number"},Z2=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&(typeof t.alpha!="number"||typeof t.alpha>"u")},J2=function(t){return typeof t.hue=="number"&&typeof t.saturation=="number"&&typeof t.lightness=="number"&&typeof t.alpha=="number"};function em(e){if(typeof e!="object")throw new Vt(8);if(X2(e))return Ht(e);if(G2(e))return yu(e);if(J2(e))return Y2(e);if(Z2(e))return K2(e);throw new Vt(8)}function tm(e,t,n){return function(){var o=n.concat(Array.prototype.slice.call(arguments));return o.length>=t?e.apply(this,o):tm(e,t,o)}}function Pc(e){return tm(e,e.length,[])}function $c(e,t,n){return Math.max(e,Math.min(t,n))}function e5(e,t){if(t==="transparent")return t;var n=J0(t);return em(oi({},n,{lightness:$c(0,1,n.lightness-parseFloat(e))}))}var t5=Pc(e5),G=t5;function n5(e,t){if(t==="transparent")return t;var n=J0(t);return em(oi({},n,{lightness:$c(0,1,n.lightness+parseFloat(e))}))}var r5=Pc(n5),q=r5;function o5(e,t){if(t==="transparent")return t;var n=Rc(t),r=typeof n.alpha=="number"?n.alpha:1,o=oi({},n,{alpha:$c(0,1,+(r*100-parseFloat(e)*100).toFixed(2)/100)});return Ht(o)}var i5=Pc(o5),bt=i5,nm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bf=ke.createContext&&ke.createContext(nm),zn=globalThis&&globalThis.__assign||function(){return zn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},zn.apply(this,arguments)},l5=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function rm(e){return e&&e.map(function(t,n){return ke.createElement(t.tag,zn({key:n},t.attr),rm(t.child))})}function X(e){return function(t){return ke.createElement(a5,zn({attr:zn({},e.attr)},t),rm(e.child))}}function a5(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=l5(e,["attr","size","title"]),a=o||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),ke.createElement("svg",zn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:zn(zn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),i&&ke.createElement("title",null,i),e.children)};return Bf!==void 0?ke.createElement(Bf.Consumer,null,function(n){return t(n)}):t(nm)}function s5(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function u5(e){return X({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"}}]})(e)}function c5(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function d5(e){return X({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M347.94 129.86L203.6 195.83a31.938 31.938 0 0 0-15.77 15.77l-65.97 144.34c-7.61 16.65 9.54 33.81 26.2 26.2l144.34-65.97a31.938 31.938 0 0 0 15.77-15.77l65.97-144.34c7.61-16.66-9.54-33.81-26.2-26.2zm-77.36 148.72c-12.47 12.47-32.69 12.47-45.16 0-12.47-12.47-12.47-32.69 0-45.16 12.47-12.47 32.69-12.47 45.16 0 12.47 12.47 12.47 32.69 0 45.16zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"}}]})(e)}function f5(e){return X({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z"}}]})(e)}function p5(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"}}]})(e)}function h5(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z"}}]})(e)}function m5(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}function g5(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(e)}function y5(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(e)}function om(e,t){return function(){return e.apply(t,arguments)}}const{toString:v5}=Object.prototype,{getPrototypeOf:Nc}=Object,ua=(e=>t=>{const n=v5.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Kt=e=>(e=e.toLowerCase(),t=>ua(t)===e),ca=e=>t=>typeof t===e,{isArray:no}=Array,ai=ca("undefined");function x5(e){return e!==null&&!ai(e)&&e.constructor!==null&&!ai(e.constructor)&&xt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const im=Kt("ArrayBuffer");function w5(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&im(e.buffer),t}const k5=ca("string"),xt=ca("function"),lm=ca("number"),da=e=>e!==null&&typeof e=="object",S5=e=>e===!0||e===!1,ol=e=>{if(ua(e)!=="object")return!1;const t=Nc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},b5=Kt("Date"),E5=Kt("File"),C5=Kt("Blob"),j5=Kt("FileList"),R5=e=>da(e)&&xt(e.pipe),P5=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xt(e.append)&&((t=ua(e))==="formdata"||t==="object"&&xt(e.toString)&&e.toString()==="[object FormData]"))},$5=Kt("URLSearchParams"),N5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hi(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),no(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let a;for(r=0;r<l;r++)a=i[r],t.call(null,e[a],a,e)}}function am(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const sm=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),um=e=>!ai(e)&&e!==sm;function vu(){const{caseless:e}=um(this)&&this||{},t={},n=(r,o)=>{const i=e&&am(t,o)||o;ol(t[i])&&ol(r)?t[i]=vu(t[i],r):ol(r)?t[i]=vu({},r):no(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&hi(arguments[r],n);return t}const L5=(e,t,n,{allOwnKeys:r}={})=>(hi(t,(o,i)=>{n&&xt(o)?e[i]=om(o,n):e[i]=o},{allOwnKeys:r}),e),_5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),z5=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},T5=(e,t,n,r)=>{let o,i,l;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!a[l]&&(t[l]=e[l],a[l]=!0);e=n!==!1&&Nc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},O5=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},M5=e=>{if(!e)return null;if(no(e))return e;let t=e.length;if(!lm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},D5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Nc(Uint8Array)),I5=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},A5=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},F5=Kt("HTMLFormElement"),U5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Hf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),B5=Kt("RegExp"),cm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};hi(n,(o,i)=>{t(o,i,e)!==!1&&(r[i]=o)}),Object.defineProperties(e,r)},H5=e=>{cm(e,(t,n)=>{if(xt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},V5=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return no(e)?r(e):r(String(e).split(t)),n},W5=()=>{},q5=(e,t)=>(e=+e,Number.isFinite(e)?e:t),os="abcdefghijklmnopqrstuvwxyz",Vf="0123456789",dm={DIGIT:Vf,ALPHA:os,ALPHA_DIGIT:os+os.toUpperCase()+Vf},Q5=(e=16,t=dm.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function K5(e){return!!(e&&xt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Y5=e=>{const t=new Array(10),n=(r,o)=>{if(da(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=no(r)?[]:{};return hi(r,(l,a)=>{const s=n(l,o+1);!ai(s)&&(i[a]=s)}),t[o]=void 0,i}}return r};return n(e,0)},G5=Kt("AsyncFunction"),X5=e=>e&&(da(e)||xt(e))&&xt(e.then)&&xt(e.catch),j={isArray:no,isArrayBuffer:im,isBuffer:x5,isFormData:P5,isArrayBufferView:w5,isString:k5,isNumber:lm,isBoolean:S5,isObject:da,isPlainObject:ol,isUndefined:ai,isDate:b5,isFile:E5,isBlob:C5,isRegExp:B5,isFunction:xt,isStream:R5,isURLSearchParams:$5,isTypedArray:D5,isFileList:j5,forEach:hi,merge:vu,extend:L5,trim:N5,stripBOM:_5,inherits:z5,toFlatObject:T5,kindOf:ua,kindOfTest:Kt,endsWith:O5,toArray:M5,forEachEntry:I5,matchAll:A5,isHTMLForm:F5,hasOwnProperty:Hf,hasOwnProp:Hf,reduceDescriptors:cm,freezeMethods:H5,toObjectSet:V5,toCamelCase:U5,noop:W5,toFiniteNumber:q5,findKey:am,global:sm,isContextDefined:um,ALPHABET:dm,generateString:Q5,isSpecCompliantForm:K5,toJSONObject:Y5,isAsyncFn:G5,isThenable:X5};function Z(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}j.inherits(Z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const fm=Z.prototype,pm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{pm[e]={value:e}});Object.defineProperties(Z,pm);Object.defineProperty(fm,"isAxiosError",{value:!0});Z.from=(e,t,n,r,o,i)=>{const l=Object.create(fm);return j.toFlatObject(e,l,function(s){return s!==Error.prototype},a=>a!=="isAxiosError"),Z.call(l,e.message,t,n,r,o),l.cause=e,l.name=e.name,i&&Object.assign(l,i),l};const Z5=null;function xu(e){return j.isPlainObject(e)||j.isArray(e)}function hm(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Wf(e,t,n){return e?e.concat(t).map(function(o,i){return o=hm(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function J5(e){return j.isArray(e)&&!e.some(xu)}const ex=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function fa(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,E){return!j.isUndefined(E[w])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,l=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(j.isDate(y))return y.toISOString();if(!s&&j.isBlob(y))throw new Z("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(y)||j.isTypedArray(y)?s&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,w,E){let m=y;if(y&&!E&&typeof y=="object"){if(j.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(j.isArray(y)&&J5(y)||(j.isFileList(y)||j.endsWith(w,"[]"))&&(m=j.toArray(y)))return w=hm(w),m.forEach(function(v,g){!(j.isUndefined(v)||v===null)&&t.append(l===!0?Wf([w],g,i):l===null?w:w+"[]",u(v))}),!1}return xu(y)?!0:(t.append(Wf(E,w,i),u(y)),!1)}const f=[],h=Object.assign(ex,{defaultVisitor:d,convertValue:u,isVisitable:xu});function x(y,w){if(!j.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(y),j.forEach(y,function(m,p){(!(j.isUndefined(m)||m===null)&&o.call(t,m,j.isString(p)?p.trim():p,w,h))===!0&&x(m,w?w.concat(p):[p])}),f.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return x(e),t}function qf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Lc(e,t){this._pairs=[],e&&fa(e,this,t)}const mm=Lc.prototype;mm.append=function(t,n){this._pairs.push([t,n])};mm.toString=function(t){const n=t?function(r){return t.call(this,r,qf)}:qf;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function tx(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gm(e,t,n){if(!t)return e;const r=n&&n.encode||tx,o=n&&n.serialize;let i;if(o?i=o(t,n):i=j.isURLSearchParams(t)?t.toString():new Lc(t,n).toString(r),i){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class nx{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Qf=nx,ym={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rx=typeof URLSearchParams<"u"?URLSearchParams:Lc,ox=typeof FormData<"u"?FormData:null,ix=typeof Blob<"u"?Blob:null,lx=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ax=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Wt={isBrowser:!0,classes:{URLSearchParams:rx,FormData:ox,Blob:ix},isStandardBrowserEnv:lx,isStandardBrowserWebWorkerEnv:ax,protocols:["http","https","file","blob","url","data"]};function sx(e,t){return fa(e,new Wt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Wt.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function ux(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function cx(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function vm(e){function t(n,r,o,i){let l=n[i++];const a=Number.isFinite(+l),s=i>=n.length;return l=!l&&j.isArray(o)?o.length:l,s?(j.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!a):((!o[l]||!j.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&j.isArray(o[l])&&(o[l]=cx(o[l])),!a)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,o)=>{t(ux(r),o,n,0)}),n}return null}const dx={"Content-Type":void 0};function fx(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const pa={transitional:ym,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=j.isObject(t);if(i&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return o&&o?JSON.stringify(vm(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return sx(t,this.formSerializer).toString();if((a=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return fa(a?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),fx(t)):t}],transformResponse:[function(t){const n=this.transitional||pa.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(a){if(l)throw a.name==="SyntaxError"?Z.from(a,Z.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wt.classes.FormData,Blob:Wt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],function(t){pa.headers[t]={}});j.forEach(["post","put","patch"],function(t){pa.headers[t]=j.merge(dx)});const _c=pa,px=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hx=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&px[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Kf=Symbol("internals");function xo(e){return e&&String(e).trim().toLowerCase()}function il(e){return e===!1||e==null?e:j.isArray(e)?e.map(il):String(e)}function mx(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const gx=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function is(e,t,n,r,o){if(j.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function yx(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function vx(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}class ha{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,s,u){const d=xo(s);if(!d)throw new Error("header name must be a non-empty string");const f=j.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||s]=il(a))}const l=(a,s)=>j.forEach(a,(u,d)=>i(u,d,s));return j.isPlainObject(t)||t instanceof this.constructor?l(t,n):j.isString(t)&&(t=t.trim())&&!gx(t)?l(hx(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=xo(t),t){const r=j.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return mx(o);if(j.isFunction(n))return n.call(this,o,r);if(j.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=xo(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||is(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=xo(l),l){const a=j.findKey(r,l);a&&(!n||is(r,r[a],a,n))&&(delete r[a],o=!0)}}return j.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||is(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return j.forEach(this,(o,i)=>{const l=j.findKey(r,i);if(l){n[l]=il(o),delete n[i];return}const a=t?yx(i):String(i).trim();a!==i&&delete n[i],n[a]=il(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Kf]=this[Kf]={accessors:{}}).accessors,o=this.prototype;function i(l){const a=xo(l);r[a]||(vx(o,l),r[a]=!0)}return j.isArray(t)?t.forEach(i):i(t),this}}ha.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.freezeMethods(ha.prototype);j.freezeMethods(ha);const rn=ha;function ls(e,t){const n=this||_c,r=t||n,o=rn.from(r.headers);let i=r.data;return j.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function xm(e){return!!(e&&e.__CANCEL__)}function mi(e,t,n){Z.call(this,e??"canceled",Z.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(mi,Z,{__CANCEL__:!0});function xx(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new Z("Request failed with status code "+n.status,[Z.ERR_BAD_REQUEST,Z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const wx=Wt.isStandardBrowserEnv?function(){return{write:function(n,r,o,i,l,a){const s=[];s.push(n+"="+encodeURIComponent(r)),j.isNumber(o)&&s.push("expires="+new Date(o).toGMTString()),j.isString(i)&&s.push("path="+i),j.isString(l)&&s.push("domain="+l),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function kx(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Sx(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function wm(e,t){return e&&!kx(t)?Sx(e,t):t}const bx=Wt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(i){let l=i;return t&&(n.setAttribute("href",l),l=n.href),n.setAttribute("href",l),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(l){const a=j.isString(l)?o(l):l;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Ex(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Cx(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),d=r[i];l||(l=u),n[o]=s,r[o]=u;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-l<t)return;const x=d&&u-d;return x?Math.round(h*1e3/x):void 0}}function Yf(e,t){let n=0;const r=Cx(50,250);return o=>{const i=o.loaded,l=o.lengthComputable?o.total:void 0,a=i-n,s=r(a),u=i<=l;n=i;const d={loaded:i,total:l,progress:l?i/l:void 0,bytes:a,rate:s||void 0,estimated:s&&l&&u?(l-i)/s:void 0,event:o};d[t?"download":"upload"]=!0,e(d)}}const jx=typeof XMLHttpRequest<"u",Rx=jx&&function(e){return new Promise(function(n,r){let o=e.data;const i=rn.from(e.headers).normalize(),l=e.responseType;let a;function s(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}j.isFormData(o)&&(Wt.isStandardBrowserEnv||Wt.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(x+":"+y))}const d=wm(e.baseURL,e.url);u.open(e.method.toUpperCase(),gm(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function f(){if(!u)return;const x=rn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),w={data:!l||l==="text"||l==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:x,config:e,request:u};xx(function(m){n(m),s()},function(m){r(m),s()},w),u=null}if("onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(f)},u.onabort=function(){u&&(r(new Z("Request aborted",Z.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new Z("Network Error",Z.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||ym;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),r(new Z(y,w.clarifyTimeoutError?Z.ETIMEDOUT:Z.ECONNABORTED,e,u)),u=null},Wt.isStandardBrowserEnv){const x=(e.withCredentials||bx(d))&&e.xsrfCookieName&&wx.read(e.xsrfCookieName);x&&i.set(e.xsrfHeaderName,x)}o===void 0&&i.setContentType(null),"setRequestHeader"in u&&j.forEach(i.toJSON(),function(y,w){u.setRequestHeader(w,y)}),j.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),l&&l!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",Yf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Yf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=x=>{u&&(r(!x||x.type?new mi(null,e,u):x),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const h=Ex(d);if(h&&Wt.protocols.indexOf(h)===-1){r(new Z("Unsupported protocol "+h+":",Z.ERR_BAD_REQUEST,e));return}u.send(o||null)})},ll={http:Z5,xhr:Rx};j.forEach(ll,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Px={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=j.isString(n)?ll[n.toLowerCase()]:n));o++);if(!r)throw r===!1?new Z(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(j.hasOwnProp(ll,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!j.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ll};function as(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mi(null,e)}function Gf(e){return as(e),e.headers=rn.from(e.headers),e.data=ls.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Px.getAdapter(e.adapter||_c.adapter)(e).then(function(r){return as(e),r.data=ls.call(e,e.transformResponse,r),r.headers=rn.from(r.headers),r},function(r){return xm(r)||(as(e),r&&r.response&&(r.response.data=ls.call(e,e.transformResponse,r.response),r.response.headers=rn.from(r.response.headers))),Promise.reject(r)})}const Xf=e=>e instanceof rn?e.toJSON():e;function Kr(e,t){t=t||{};const n={};function r(u,d,f){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:f},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function o(u,d,f){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function i(u,d){if(!j.isUndefined(d))return r(void 0,d)}function l(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,f){if(f in t)return r(u,d);if(f in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(u,d)=>o(Xf(u),Xf(d),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=s[d]||o,h=f(e[d],t[d],d);j.isUndefined(h)&&f!==a||(n[d]=h)}),n}const km="1.4.0",zc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{zc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Zf={};zc.transitional=function(t,n,r){function o(i,l){return"[Axios v"+km+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,a)=>{if(t===!1)throw new Z(o(l," has been removed"+(n?" in "+n:"")),Z.ERR_DEPRECATED);return n&&!Zf[l]&&(Zf[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,a):!0}};function $x(e,t,n){if(typeof e!="object")throw new Z("options must be an object",Z.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const a=e[i],s=a===void 0||l(a,i,e);if(s!==!0)throw new Z("option "+i+" must be "+s,Z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Z("Unknown option "+i,Z.ERR_BAD_OPTION)}}const wu={assertOptions:$x,validators:zc},mn=wu.validators;class Il{constructor(t){this.defaults=t,this.interceptors={request:new Qf,response:new Qf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Kr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&wu.assertOptions(r,{silentJSONParsing:mn.transitional(mn.boolean),forcedJSONParsing:mn.transitional(mn.boolean),clarifyTimeoutError:mn.transitional(mn.boolean)},!1),o!=null&&(j.isFunction(o)?n.paramsSerializer={serialize:o}:wu.assertOptions(o,{encode:mn.function,serialize:mn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l;l=i&&j.merge(i.common,i[n.method]),l&&j.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=rn.concat(l,i);const a=[];let s=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(s=s&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let d,f=0,h;if(!s){const y=[Gf.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),h=y.length,d=Promise.resolve(n);f<h;)d=d.then(y[f++],y[f++]);return d}h=a.length;let x=n;for(f=0;f<h;){const y=a[f++],w=a[f++];try{x=y(x)}catch(E){w.call(this,E);break}}try{d=Gf.call(this,x)}catch(y){return Promise.reject(y)}for(f=0,h=u.length;f<h;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Kr(this.defaults,t);const n=wm(t.baseURL,t.url);return gm(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){Il.prototype[t]=function(n,r){return this.request(Kr(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,a){return this.request(Kr(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}Il.prototype[t]=n(),Il.prototype[t+"Form"]=n(!0)});const al=Il;class Tc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(a=>{r.subscribe(a),i=a}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,a){r.reason||(r.reason=new mi(i,l,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Tc(function(o){t=o}),cancel:t}}}const Nx=Tc;function Lx(e){return function(n){return e.apply(null,n)}}function _x(e){return j.isObject(e)&&e.isAxiosError===!0}const ku={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ku).forEach(([e,t])=>{ku[t]=e});const zx=ku;function Sm(e){const t=new al(e),n=om(al.prototype.request,t);return j.extend(n,al.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Sm(Kr(e,o))},n}const Ne=Sm(_c);Ne.Axios=al;Ne.CanceledError=mi;Ne.CancelToken=Nx;Ne.isCancel=xm;Ne.VERSION=km;Ne.toFormData=fa;Ne.AxiosError=Z;Ne.Cancel=Ne.CanceledError;Ne.all=function(t){return Promise.all(t)};Ne.spread=Lx;Ne.isAxiosError=_x;Ne.mergeConfig=Kr;Ne.AxiosHeaders=rn;Ne.formToJSON=e=>vm(j.isHTMLForm(e)?new FormData(e):e);Ne.HttpStatusCode=zx;Ne.default=Ne;const Tx=Ne;let dr=[];const xe=Tx.create({baseURL:"http://13.201.59.55:4000/api"});xe.interceptors.request.use(async e=>{const t=localStorage.getItem("token"),n=localStorage.getItem("refresh");return t&&e.headers.Authorization!==`Bearer ${n}`&&(e.headers.Authorization=`Bearer ${t}`),e});xe.interceptors.response.use(e=>{const t=e.config;return dr=dr.filter(n=>n.data!==t.data||n.url!==t.url),e},async e=>{var o;const t=e.config,n={data:t.data,url:t.url},r=dr.find(i=>i.data===n.data&&i.url===n.url)!==void 0;if(((o=e.response)==null?void 0:o.status)===401&&!r){dr.push(n);const i=localStorage.getItem("refresh");if(i){const l=await xe.get("/auth/refresh-tokens",{headers:{Authorization:`Bearer ${i}`}}),{accessToken:a,refreshToken:s}=l.data;return localStorage.setItem("token",a),localStorage.setItem("refresh",s),xe(t)}}else if(r){const i=localStorage.getItem("refresh");if(t.headers.Authorization===`Bearer ${i}`)localStorage.clear(),dr=dr.filter(l=>l.data!==n.data||l.url!==n.url);else{const l=localStorage.getItem("token");return t.headers.Authorization=`Bearer ${l}`,xe(t)}}return Promise.reject(e)});const Ox=ot`
  from {
    opacity: 0;
    transform: translateY(-5px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`,Mx=ot`
  from {
    opacity: 0;
    transform: translateX(50%);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`,Dx=A.nav`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  .left {
    display: flex;
    gap: 1rem;
    margin-left: 2rem;

    @media (max-width: ${H.screen.l}) {
      display: none;
    }
  }

  .menu-btn {
    all: unset;
    display: none;
    margin-left: 1.25rem;
    outline: 2px solid
      ${({theme:e})=>bt(.75,e.colors.primary)};
    width: 2.25rem;
    height: 2.25rem;
    font-size: 1.5rem;
    border-radius: 5px;

    @media (max-width: ${H.screen.m}) {
      display: grid;
      place-items: center;
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-right: 1.75rem;
    animation: ${Ox} 500ms both;

    & > * {
      cursor: pointer;
      color: ${({theme:e})=>e.colors.primary};
    }

    button {
      width: 32px;
      height: 32px;
      display: grid;
      place-items: center;
      font-size: 1.25rem;
      border: none;
      outline: none;
      border-radius: 5rem;
      background: transparent;
      transition: background 500ms;

      &:hover {
        background: ${({theme:e})=>Ht(e.colors.primary,.125)};
      }
    }

    .incoming {
      position: relative;

      &::after {
        display: block;
        content: "";
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 5rem;
        background: ${({theme:e})=>e.colors.quaternary};
        right: 6px;
        top: 6px;
      }
    }
  }

  .searchbar {
    position: relative;

    label {
      position: absolute;
      top: 0.95rem;
      left: 1rem;
    }

    input {
      height: 100%;
      width: 100%;
      outline: none;
      padding: 0;
      padding-left: 3rem;
      border: 1px solid ${({theme:e})=>Ht(e.colors.primary,.25)};
      border-radius: 1rem;
      min-width: ${({theme:e})=>e.sizes.inputWidth};
      background: transparent;
      color: ${({theme:e})=>e.colors.primary};

      &:focus {
        border: 1px solid ${({theme:e})=>e.colors.secondaryVariant};
      }
    }
  }

  .buttons {
    display: flex;

    button {
      outline: none;
      border: none;
      display: grid;
      place-items: center;
      padding: 0.75rem;
      border-radius: 10rem;
      font-size: 1.5rem;
      cursor: pointer;
      background: transparent;
      transition: background 250ms;
      color: ${({theme:e})=>e.colors.primary};

      &[disabled] {
        color: ${({theme:e})=>Ht(e.colors.primary,.25)};
      }

      &:hover {
        background: ${({theme:e})=>Ht(e.colors.primary,.125)};
      }

      &:active {
        box-shadow: 1px 1px 5px
          ${({theme:e})=>Ht(e.colors.primary,.265)} inset;
      }
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .name {
      font-weight: bold;
      margin-left: 0.5rem;
      animation: ${Mx} 500ms 750ms both;

      @media (max-width: ${H.screen.m}) {
        display: none;
      }
    }
  }

  .profil {
    padding: 2px;
    border: 2px solid ${({theme:e})=>e.colors.primary};
    border-radius: 10rem;
    display: grid;
    place-items: center;

    div {
      width: 32px;
      aspect-ratio: 1;
      background-size: cover;
      border-radius: 10rem;
    }
  }
`;function Ix({showSidebar:e}){const t=Et(),{theme:n,toggleTheme:r}=S.useContext(D0),[o,i]=S.useState(""),[l,a]=S.useState("/images/profile-pic.png");return S.useEffect(()=>{const s=localStorage.getItem("userId");s&&localStorage.getItem("token")?xe.get(`user/${s}`).then(u=>{const d=u.data,f=d.fullname.split(" ");let h=f[0];if(f.length>=1)for(let x=1;x<f.length;++x)h+=` ${f[x][0]}.`;i(h),d.avatar&&a(`http://13.201.59.55:4000/api/user/picture/${d.avatar}`)}).catch(u=>{console.error(u),t("/login")}):t("/login")},[]),c.jsxs(Dx,{children:[c.jsxs("div",{className:"right",children:[c.jsx("button",{}),c.jsx("button",{onClick:r,children:n==="dark"?c.jsx(s5,{}):c.jsx(c5,{})}),c.jsxs("div",{className:"user",children:[c.jsx("span",{className:"name",children:o}),c.jsx("div",{className:"profil",children:c.jsx("div",{style:{backgroundColor:"white",backgroundImage:`url(${l})`}})})]})]}),c.jsxs("div",{className:"left",children:[c.jsxs("div",{className:"buttons",children:[c.jsx("button",{disabled:!0,children:c.jsx(g5,{})}),c.jsx("button",{children:c.jsx(y5,{})})]}),c.jsxs("div",{className:"searchbar",children:[c.jsx("label",{htmlFor:"search-input",children:c.jsx(m5,{})}),c.jsx("input",{type:"text",id:"search-input",placeholder:"Search video..."})]})]}),c.jsx("button",{className:"menu-btn",onClick:e,children:c.jsx(p5,{})})]})}function Ax(e){return X({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"}}]})(e)}function Fx(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"}}]})(e)}function Ux(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"}}]})(e)}function Bx(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"}}]})(e)}function Hx(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(e)}function Vx(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48 1.3.75zm6.7-.75l1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23v-1.5z"}}]})(e)}function Oc(e){const[t,n]=S.useState(null),r=Et(),o=S.useRef(!1);return S.useEffect(()=>{if(o.current)return;(async()=>{const{data:l}=await xe.get(`/video?id=${e}`);l.uploadDate=new Date(l.uploadDate),n(l)})().catch(l=>{console.error(l),r("/login")})},[e]),t}function Mc(e){const[t,n]=S.useState([]),r=Et(),o=S.useRef(!1),i=async()=>{const{data:a}=await xe.get(e);a&&n(a.map(s=>{if(s.length){const u=s.length;if(u>=60){const d=Math.round(u/60);if(d>=60){const f=Math.round(d/60);s.length=`${f} h`}else s.length=`${d} min`}else s.length=`${u} sec`}return{...s,uploadDate:new Date(s.uploadDate)}}))},l=()=>{i().catch(a=>{console.error(a),r("/login")})};return S.useEffect(()=>{e&&!o.current&&l()},[e]),{videos:t,fetchVideos:l}}function Wx(){const[e,t]=S.useState(null);return S.useEffect(()=>{const n=localStorage.getItem("userId");xe.get(`/user/${n}`).then(r=>t(r.data)).catch(r=>console.error(r))},[]),e}const qx=ot`
0% {
  transform: translate(-50%, -50%) scale(0.5);
} 100% {
  transform: translate(-50%, -50%) scale(1);
}
`,Qx=ot`
from {
  opacity: 0;
  transform: translateY(50%);
} to {
  opacity: 1;
  transform: translateY(0);
}
`,Dc=A.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  max-width: ${({theme:e})=>e.modal.width};
  animation: ${qx} 250ms both ease;
  background: ${({theme:e})=>bt(.05,e.theme==="light"?e.colors.background:q(.1,e.colors.background))};
  box-shadow: 0 5px 15px
    ${({theme:e})=>e.theme==="light"?G(.25,e.colors.background):q(.25,e.colors.background)};

  @media (max-width: ${H.screen.s}) {
    width: 100%;
    animation: unset;
    top: unset;
    bottom: 0;
    left: 0;
    animation: ${Qx} 250ms both;

    h1 {
      font-size: 1.25rem !important;
      padding-top: 0.75rem !important;
      padding-bottom: 0.5rem !important;
    }
  }

  h1 {
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: unset;
    padding: 1rem 1.5rem;
    border-bottom: 1px solid
      ${({theme:e})=>e.theme==="light"?G(.25,e.colors.background):q(.25,e.colors.background)};

    button {
      all: unset;
      cursor: pointer;
      display: grid;
      place-items: center;
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      transition: background 300ms;

      &:hover {
        background: ${({theme:e})=>e.theme==="light"?G(.25,e.colors.background):q(.25,e.colors.background)};
      }
    }
  }
`;function Ic(e){return X({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M13.917 7A6.002 6.002 0 0 0 2.083 7H1.071a7.002 7.002 0 0 1 13.858 0h-1.012z"}}]})(e)}function Kx(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attr:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]})(e)}function bm(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]})(e)}function Jf(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"}},{tag:"path",attr:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"}}]})(e)}function ep(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]})(e)}function Ac(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]})(e)}function Yx(e){return X({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"}},{tag:"path",attr:{d:"M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z"}}]})(e)}function Gx(e){return X({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM120,80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}}]})(e)}function Em(e){return X({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"}}]})(e)}const Xx=ot`
from {
  transform: rotate(0);
} to {
  transform: rotate(360deg);
}
`,Zx=A.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(1px);
  z-index: 1;
`,Jx=A(Dc)`
  @media (min-width: ${H.screen.m}) {
    width: 380px;
  }

  & > div {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid
      ${({theme:e})=>e.theme==="light"?G(.2,e.colors.background):q(.2,e.colors.background)};

    & > div:first-of-type {
      color: ${({theme:e})=>e.colors.quaternary};
      font-size: 3.5rem;
    }
  }

  p {
    margin: unset;
    padding: 0.5em;
  }

  .buttons {
    padding: 1rem;
    justify-content: flex-end;

    button {
      all: unset;
      cursor: pointer;
      width: 6rem;
      text-align: center;
      padding: 2px 0;
      border-radius: 3px;
      outline: 2px solid ${({theme:e})=>e.colors.quaternary};
      transition: color 250ms, backkground-color 250ms;
    }

    svg {
      animation: ${Xx} 750ms ease-out infinite;
    }

    .cancel {
      &:hover {
        background-color: ${({theme:e})=>e.colors.quaternary};
        color: white;
      }

      &[disabled] {
        background: grey;
        outline: none;

        &:hover {
          background: grey;
          color: unset;
        }
      }
    }

    .yes {
      background-color: ${({theme:e})=>e.colors.quaternary};
      color: white;

      &[disabled] {
        background-color: ${({theme:e})=>e.colors.quaternary};

        &:hover {
          background-color: ${({theme:e})=>e.colors.quaternary};
        }
      }

      &:hover {
        background-color: transparent;
        color: unset;
      }
    }
  }

  .video-title {
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    position: relative;

    &::after {
      display: block;
      width: 100%;
      height: 0.25rem;
      content: "";
      background: ${({theme:e})=>e.theme==="light"?e.colors.background:q(.1,e.colors.background)};
      position: absolute;
      bottom: 0;
    }
  }
`;function ew({onClose:e,videoId:t}){var s;const n=document.querySelector("#modal-portal");if(!n)return null;const r=(s=Oc(t))==null?void 0:s.title,[o,i]=S.useState(!1),l=()=>{i(!0),xe.delete(`video/${t}`).catch(u=>console.error(u)).finally(()=>{e(),location.reload()})},a=S.useCallback(()=>{o||e()},[o]);return Zr.createPortal(c.jsxs(c.Fragment,{children:[c.jsx(Zx,{onClick:()=>{o||a()}}),c.jsxs(Jx,{children:[c.jsxs("h1",{children:[c.jsx("span",{children:"Are you sure ?"}),c.jsx("button",{onClick:a,children:c.jsx(bm,{})})]}),c.jsxs("div",{children:[c.jsx("div",{children:c.jsx(Gx,{})}),c.jsxs("div",{children:[c.jsx("p",{children:"You are about to delete :"}),c.jsx("p",{className:"video-title",children:r})]})]}),c.jsxs("div",{className:"buttons",children:[c.jsx("button",{onClick:a,className:"cancel",disabled:o,children:"Cancel"}),c.jsx("button",{onClick:l,className:"yes",disabled:o,children:o?c.jsx(Ic,{}):"Yes"})]})]})]}),n)}const tw=A.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  transition: box-shadow 500ms;
  display: flex;
  flex-direction: column;

  background: ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.1,e.colors.background)};

  &:hover {
    box-shadow: 0 1px 15px
      ${({theme:e})=>e.theme==="light"?G(.5,e.colors.background):q(.5,e.colors.background)};

    .play {
      transform: translate(0);
      opacity: 1;
    }
  }

  #title {
    display: block;
    letter-spacing: normal;
    font-weight: bold;
    font-size: 1rem;
    min-height: 3rem;
  }

  & > div:first-of-type {
    border-bottom: 2px solid ${({theme:e})=>e.colors.quaternary};
    background-color: grey;
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      max-height: 280px;
      object-fit: cover;
    }
  }

  .misc {
    padding: 0.5rem 1rem 2rem;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  .duration {
    position: absolute;
    top: 1rem;
    right: 1rem;
    border-radius: 7px;
    font-size: 0.75rem;
    padding: 5px 10px;
    color: white;
    background-color: #00000060;
  }

  .play {
    all: unset;
    cursor: pointer;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
    font-size: 1.5rem;
    opacity: 0;
    transform: translateY(10px);
    transition: transform 500ms, opacity 500ms;
    color: white;
    background: ${({theme:e})=>e.colors.playButton};
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    border-radius: 100%;
    box-shadow: 0 3px 5px #00000086;

    &:active {
      box-shadow: inset 0 0 5px #000000ba;
    }

    svg {
      transform: translateX(2px);
    }
  }

  .upload-date {
    margin-top: 1rem;
    color: ${({theme:e})=>e.theme==="light"?q(.125,e.colors.primary):G(.125,e.colors.primary)};
  }

  .user-name {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({theme:e})=>e.theme==="light"?q(.05,e.colors.primary):G(.05,e.colors.primary)};

    .dot {
      display: block;
      width: 7px;
      height: 7px;
      background: ${({theme:e})=>e.colors.quaternary};
      border-radius: 100%;
    }
  }
`,nw=A.div`
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    right: 1rem;
    transform: translateY(50%);
    width: 52px;
    height: 52px;
    border-radius: 50rem;
    padding: 2px;
    border: 2px solid ${({theme:e})=>e.colors.quaternary};
    background-image: url(${({$image:e})=>e});
    background-size: cover;
    background-color: ${({theme:e})=>e.colors.background};
  }
`,rw=A.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  button {
    all: unset;
    color: ${({theme:e})=>e.colors.background};
    width: 3rem;
    height: 3rem;
    display: grid;
    font-size: 1.25rem;
    place-items: center;
    cursor: pointer;
    border-radius: 3rem;
    transition: all 250ms;

    &:hover {
      background: transparent;
      color: ${({theme:e})=>e.colors.primary};
    }
  }

  .edit {
    background: #3f3fffa8;

    &:hover {
      outline: 3px solid #3f3fffa8;
    }
  }

  .delete {
    background: #ff1d1d88;

    svg {
      transform: translateX(-1px);
    }

    &:hover {
      outline: 3px solid #ff1d1d88;
    }
  }
`;function Cm(e){const[t,n]=S.useState(null),[r,o]=S.useState(!1),[i,l]=S.useState(!1),[a,s]=S.useState(""),u=Et();S.useEffect(()=>{const x=async()=>{const m=await xe.get(`/user/${e.userId}`),p=m.data.fullname;n({name:p.length>=20?p.split(" ").map((v,g)=>g>0?`${v[0].toUpperCase()}.`:v).join(" "):p,picture:m.data.avatar?`http://13.201.59.55:4000/api/user/picture/${m.data.avatar}`:"/images/profile-pic.png"})},y=+e.uploadDate,E=(Date.now()-y)/1e3/60;if(E<=1)s("now");else{const m=E/60;if(m<1){const p=Math.round(m);s(p===0?"Just now":`${p} minute${p>1?"s":""} ago`)}else if(m<24){const p=Math.round(m);s(`${p} hour${p>1?"s":""} ago`)}else{const p=Math.round(m/24);s(`${p} day${p>1?"s":""} ago`)}}e.hideUserData||x().catch(m=>console.error(m))},[]);const d=()=>{u(`/video/${e.id}`)},f=()=>{o(!0)},h=()=>{l(!0)};return c.jsxs(c.Fragment,{children:[i&&c.jsx(ew,{onClose:()=>l(!1),videoId:e.id}),r&&c.jsx(gw,{onClose:()=>o(!1),videoId:e.id}),c.jsxs(tw,{children:[c.jsxs("div",{children:[e.length&&c.jsx("div",{className:"duration",children:e.length}),c.jsx("img",{src:`http://13.201.59.55:4000/api/video/cover/${e.coverImage}`,alt:""}),c.jsx("button",{className:"play",onClick:d,children:c.jsx(u5,{})})]}),t&&c.jsx(nw,{$image:t.picture,children:c.jsx("div",{})}),c.jsxs("div",{className:"misc",children:[t&&c.jsxs("div",{className:"user-name",children:[c.jsx("span",{children:t.name}),c.jsx("span",{className:"dot"})]}),c.jsx("h1",{id:"title",children:e.title}),a&&c.jsx("div",{className:"upload-date",children:a})]}),e.showControls&&c.jsxs(rw,{children:[c.jsx("button",{className:"edit",onClick:f,children:c.jsx(Bx,{})}),c.jsx("button",{className:"delete",onClick:h,children:c.jsx(Ax,{})})]})]})]})}const ow=A.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  gap: 1rem;

  & > div {
    flex: 1;
  }

  & > div:first-of-type {
    flex-grow: 1;
    background-color: grey;
    background-image: ${({$cover:e})=>`url(${e})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: ${({theme:e})=>e.sizes.video.cover.width};
    height: ${({theme:e})=>e.sizes.video.cover.height};
    border-radius: 10px;

    box-shadow: 0 3px 7px
      ${({theme:e})=>e.theme==="light"?G(.25,e.colors.background):q(.25,e.colors.background)};
  }

  .datas {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;

      @media (max-width: ${H.screen.s}) {
        font-size: 0.9rem;
      }
    }

    .uploader {
      font-size: 0.95rem;
      color: ${({theme:e})=>bt(.25,e.colors.primary)};
    }

    .date {
      font-size: 0.75rem;
      color: ${({theme:e})=>bt(.25,e.colors.primary)};
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;function iw(e){const t=Et();return c.jsxs(ow,{$cover:e.cover,onClick:()=>{t(`/video/${e.id}`)},children:[c.jsx("div",{}),c.jsxs("div",{className:"datas",children:[c.jsxs("div",{children:[c.jsx("div",{className:"title",children:e.title}),c.jsx("div",{className:"uploader",children:e.uploader.length<48?e.uploader:e.uploader.slice(0,48)+"..."})]}),c.jsxs("div",{className:"date",children:[c.jsx("span",{children:e.uploadDate})," ",c.jsx(Kx,{})]})]})]})}function lw(e){return X({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Image_On"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M18.435,3.06H5.565a2.5,2.5,0,0,0-2.5,2.5V18.44a2.507,2.507,0,0,0,2.5,2.5h12.87a2.507,2.507,0,0,0,2.5-2.5V5.56A2.5,2.5,0,0,0,18.435,3.06ZM4.065,5.56a1.5,1.5,0,0,1,1.5-1.5h12.87a1.5,1.5,0,0,1,1.5,1.5v8.66l-3.88-3.88a1.509,1.509,0,0,0-2.12,0l-4.56,4.57a.513.513,0,0,1-.71,0l-.56-.56a1.522,1.522,0,0,0-2.12,0l-1.92,1.92Zm15.87,12.88a1.5,1.5,0,0,1-1.5,1.5H5.565a1.5,1.5,0,0,1-1.5-1.5v-.75L6.7,15.06a.5.5,0,0,1,.35-.14.524.524,0,0,1,.36.14l.55.56a1.509,1.509,0,0,0,2.12,0l4.57-4.57a.5.5,0,0,1,.71,0l4.58,4.58Z"}},{tag:"path",attr:{d:"M8.062,10.565a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,8.062,10.565Zm0-4a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,8.062,6.565Z"}}]}]}]})(e)}function aw(e){return X({tag:"svg",attr:{viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z M 13 13.21875 L 13 22.78125 L 14.5 21.84375 L 19.5 18.84375 L 20.9375 18 L 19.5 17.15625 L 14.5 14.15625 Z M 15 16.75 L 17.09375 18 L 15 19.25 Z"}}]})(e)}function sw(e){return X({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",fill:"currentColor"}}]})(e)}const uw=e=>ot`
from {
  color: ${e.colors.primary};
} to {
  color: ${e.colors.quaternary};
}
`,cw=A.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(1px);
`,dw=A(Dc)`
  width: 100%;
  
  @media (max-width: ${H.screen.s}) {
    form {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }
  }

  progress {
    appearance: none;
    -webkit-appearance: none;
    height: 10px;

    &::-webkit-progress-value {
      background: ${({theme:e})=>e.colors.quaternary};
      border-radius: 15px;
    }

    &::-webkit-progress-bar {
      border-radius: 15px;
      background: ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.2,e.colors.background)};
    }
  }

  form {
    padding: 0 1.5rem 1.5rem;

    & > div {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;

      &:first-of-type {
        gap: 0.5rem;
      }
    }

    label {
      font-size: 1.125rem;
    }

    input {
      outline: unset;
      background: transparent;
      border: 1px solid
        ${({theme:e})=>e.theme==="light"?G(.25,e.colors.background):q(.25,e.colors.background)};

      &[type="text"] {
        padding: 0.75rem 1rem;
        border-radius: 5px;
        transition: border 250ms;
        color: ${({theme:e})=>e.theme==="light"?G(.25,e.colors.primary):q(.25,e.colors.primary)};

        &:focus {
          border: 1px solid
            ${({theme:e})=>e.theme==="light"?G(.5,e.colors.background):q(.5,e.colors.background)};
        }
      }
    }

    .file {
      border: 1px solid
        ${({theme:e})=>e.theme==="light"?G(.75,e.colors.background):q(.75,e.colors.background)};
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      padding: 0.5rem 0;

      * {
        cursor: pointer;
        text-align: center;
      }

      input {
        display: none;
      }

      .icon {
        font-size: 3rem;
      }
    }
  }

  button[disabled] {
    outline: none !important;
    color: ${({theme:e})=>e.colors.primary} !important;
    background: ${({theme:e})=>e.colors.background} !important;
  }

  .blink {
    animation: ${({theme:e})=>uw(e)} 250ms 6 alternate;
  }

  .inputs {
    gap: 1rem;
  }

  .buttons {
    flex-direction: row;
    margin-top: 2rem;
    gap: 1rem;

    button {
      all: unset;
      cursor: pointer;
      flex-grow: 1;
      text-align: center;
      border-radius: 5px;
      padding: 12px 0;
      font-size: 1.1rem;
      transition: outline 500ms, background 500ms, color 500ms;

      &:first-of-type {
        outline: 1px solid ${({theme:e})=>e.colors.quaternary};

        &:hover {
          outline: none;
          background: ${({theme:e})=>e.colors.quaternary};
          color: ${({theme:e})=>e.colors.opposite};
        }
      }

      &:last-of-type {
        background: ${({theme:e})=>e.colors.quaternary};
        color: ${({theme:e})=>e.colors.opposite};

        &:hover {
          outline: 1px solid ${({theme:e})=>e.colors.quaternary};
          background: transparent;
          color: ${({theme:e})=>e.colors.primary};
        }
      }
    }
  }

  .cover-image {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-left: 1rem;

    & > div:first-of-type {
      width: 64px;
      height: 64px;
      background: grey;
      display: grid;
      place-items: center;
      border-radius: 10px;
      overflow: hidden;

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
  }

  .video {
    display: flex;
    gap: 1rem;
    padding: 5px 1rem;

    &__size {
      font-size: 0.75rem;
      color: ${({theme:e})=>bt(.25,e.colors.primary)};
    }

    &__upload {
      display: flex;
      align-items: center;
      gap: 1rem;

      progress {
        flex-grow: 1;
      }

      span {
        transform: translateY(-2px);
      }
    }

    & > div:first-of-type {
      font-size: 2rem;
      padding: 0 10px;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 10px;
      border: 1px solid
        ${({theme:e})=>e.theme==="light"?G(.35,e.colors.background):q(.35,e.colors.background)};
    }

    & > div:last-of-type {
      flex-grow: 1;
      display: flex;
      flex-direction: column;

      * {
        text-align: left;
      }
    }
  }
`;function fw({onClose:e}){const[t,n]=S.useState(null),[r,o]=S.useState(null),[i,l]=S.useState(null),[a,s]=S.useState(!1),u=document.querySelector("#modal-portal"),d=x=>{x.preventDefault();const y=x.currentTarget,w=localStorage.getItem("token"),E=new FormData(x.currentTarget);if(!y.cover.value){const v=y.querySelector("#cover");v.classList.remove("blink"),setTimeout(()=>{v.classList.add("blink")},0);return}if(!y.video.value){const v=y.querySelector("#video");v.classList.remove("blink"),setTimeout(()=>{v.classList.add("blink")},0);return}const p=y.querySelectorAll("button");for(let v of p)v.disabled=!0;s(!0),xe.post("/video",E,{headers:{Authorization:`Bearer ${w}`},onUploadProgress(v){l(g=>g?{started:!0,progress:v.loaded>g.total?g.total:v.loaded,total:g.total}:null)}}).then(()=>{e()}).catch(v=>console.error(v)).finally(()=>s(!1))},f=x=>{x.currentTarget.querySelector("input").click()},h=x=>x.length>64?x.slice(0,64)+"...":x;return Zr.createPortal(c.jsxs(c.Fragment,{children:[c.jsx(cw,{onClick:()=>{a||e()}}),c.jsxs(dw,{children:[c.jsxs("h1",{children:[c.jsx("span",{children:"Upload your Video"}),!i&&c.jsx("button",{onClick:e,children:c.jsx(sw,{})})]}),c.jsxs("form",{onSubmit:d,children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"video-title",children:"Enter video title"}),c.jsx("input",{required:!0,type:"text",placeholder:"Video title",name:"title",id:"video-title"})]}),c.jsxs("div",{className:"inputs",children:[c.jsxs("div",{id:"cover",className:"file",style:{borderStyle:t?"solid":"dashed"},onClick:f,children:[t?c.jsxs("div",{className:"cover-image",children:[c.jsx("div",{children:c.jsx("img",{src:t.url,alt:""})}),c.jsx("div",{children:t.name})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"icon",children:c.jsx(lw,{})}),c.jsx("label",{htmlFor:"cover-image",children:"Select cover image"})]}),c.jsx("input",{onChange:x=>{const y=x.currentTarget.files;y&&y.length>0&&n({name:h(y[0].name),url:URL.createObjectURL(y[0])})},type:"file",accept:"image/*",name:"cover",id:"cover-image"})]}),c.jsxs("div",{id:"video",className:"file",style:{borderStyle:r?"solid":"dashed"},onClick:f,children:[r?c.jsxs("div",{className:"video",children:[c.jsx("div",{children:c.jsx(Fx,{})}),c.jsxs("div",{children:[c.jsx("span",{children:r.name}),c.jsx("span",{className:"video__size",children:r.size}),i&&i.started&&c.jsxs("div",{className:"video__upload",children:[c.jsx("progress",{value:i.progress,max:i.total}),c.jsxs("span",{children:[Math.round(100*i.progress/i.total)," %"]})]})]})]}):c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"icon",children:c.jsx(aw,{})}),c.jsx("label",{htmlFor:"file-input",children:"Select video file"})]}),c.jsx("input",{onChange:x=>{const y=x.currentTarget.files;if(y&&y.length>0){let w;const E=y[0].size;E>=1e3*1e6?w=`${Math.round(E/1e9)} GB`:E>=1e6?w=`${Math.round(E/1e6)} MB`:E>=1e3?w=`${Math.round(E/1e3)} KB`:w=`${E} Bytes`,l({started:!1,progress:0,total:E}),o({name:h(y[0].name),size:w})}},type:"file",name:"video",id:"file-input",accept:"video/*"})]})]}),c.jsxs("div",{className:"buttons",children:[c.jsx("button",{type:"button",onClick:()=>{e()},children:"Cancel"}),c.jsx("button",{children:i&&i.progress===i.total?"Finalizing 🚀":"Import"})]})]})]})]}),u)}const pw=ot`
from {
  transform: rotate(0);
} to {
  transform: rotate(360deg);
}
`,hw=A.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(1px);
  z-index: 1;
`,mw=A(Dc)`
  @media (min-width: ${H.screen.m}) {
    width: 380px;
  }

  button {
    span {
      font-size: 0.75rem;
    }
  }

  form > div {
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
    border-bottom: 1px solid
      ${({theme:e})=>e.theme==="light"?G(.2,e.colors.background):q(.2,e.colors.background)};
  }

  .input-title {
    margin-top: 1rem;
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 0.5rem;

    input {
      all: unset;
      font-size: 0.85rem;
      background: ${({theme:e})=>e.theme==="light"?G(.2,e.colors.background):q(.2,e.colors.background)};
      padding: 0.125rem 0.5rem;
      border-radius: 3px;
    }
  }

  .input-cover {
    margin-top: 1rem;
    padding-bottom: 0.5rem;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    button {
      all: unset;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      svg {
        font-size: 2rem;
      }
    }

    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
      box-shadow: 0px 1px 15px #0000006c;
    }

    input {
      display: none;
    }
  }

  .buttons {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    justify-content: flex-end;

    button {
      all: unset;
      cursor: pointer;
      width: 6rem;
      text-align: center;
      padding: 2px 0;
      border-radius: 3px;
      outline: 2px solid ${({theme:e})=>e.colors.quaternary};
      transition: color 250ms, backkground-color 250ms;
    }

    svg {
      animation: ${pw} 750ms ease-out infinite;
    }

    .cancel {
      &:hover {
        background-color: ${({theme:e})=>e.colors.quaternary};
        color: white;
      }

      &[disabled] {
        background: grey;
        outline: none;

        &:hover {
          background: grey;
          color: unset;
        }
      }
    }

    .yes {
      background-color: ${({theme:e})=>e.colors.quaternary};
      color: white;

      &[disabled] {
        background-color: ${({theme:e})=>e.colors.quaternary};

        &:hover {
          background-color: ${({theme:e})=>e.colors.quaternary};
        }
      }

      &:hover {
        background-color: transparent;
        color: unset;
      }
    }
  }
`;function gw({onClose:e,videoId:t}){const n=document.querySelector("#modal-portal");if(!n)return null;const[r,o]=S.useState(""),[i,l]=S.useState(!1),a=S.useRef(null),s=Oc(t);S.useEffect(()=>{s&&o(`http://13.201.59.55:4000/api/video/cover/${s.coverImage}`)},[s]);const u=()=>{l(!0);const f=new FormData(a.current);xe.patch(`/video/${t}`,f).then(()=>{location.reload()}).catch(h=>console.error(h)).finally(()=>l(!1))},d=f=>{const h=f.currentTarget.files[0];o(URL.createObjectURL(h))};return Zr.createPortal(c.jsxs(c.Fragment,{children:[c.jsx(hw,{onClick:()=>{i||e()}}),c.jsxs(mw,{children:[c.jsxs("h1",{children:[c.jsx("span",{children:"Edit video metadatas"}),c.jsx("button",{onClick:()=>{i||e()},children:c.jsx(bm,{})})]}),c.jsxs("form",{ref:a,children:[c.jsxs("div",{className:"input-title",children:[c.jsx("label",{htmlFor:"video-title",children:"Video title"}),c.jsx("input",{type:"text",name:"title",id:"video-title",defaultValue:s==null?void 0:s.title,maxLength:50})]}),c.jsxs("div",{className:"input-cover",children:[c.jsxs("button",{type:"button",onClick:f=>{f.currentTarget.nextElementSibling.click()},children:[c.jsx("span",{children:"Change video cover"}),c.jsx(f5,{})]}),c.jsx("input",{onChange:d,type:"file",accept:"image/*",name:"cover"}),c.jsx("img",{src:r,alt:"video-cover"})]})]}),c.jsxs("div",{className:"buttons",children:[c.jsx("button",{onClick:e,className:"cancel",disabled:i,children:"Cancel"}),c.jsx("button",{onClick:u,className:"yes",disabled:i,children:i?c.jsx(Ic,{}):"Update"})]})]})]}),n)}const yw=ot`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
  }
`,vw=ot`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`,xw=A.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  @media (max-width: ${H.screen.l}) {
    position: relative;
  }
`,ww=A.div`
  background: url(/images/backgrounds/login-bg.jpg);
  background-size: cover;
  background-position: center;
  flex-grow: 1;
  min-width: 65%;

  @media (max-width: ${H.screen.l}) {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`,kw=A.div`
  background: ${({theme:e})=>e.colors.background};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: ${H.screen.s}) {
    color: white;

    input {
      color: #ffffff76 !important;
    }
  }

  @media (max-width: ${H.screen.l}) {
    background: #00000075;
  }

  h1 {
    text-transform: uppercase;
    margin: 0 0.25rem;
  }

  p {
    border-radius: 3px;
    overflow-x: hidden;
  }

  form {
    min-width: 280px;
  }

  input {
    width: 100%;
    border: none;
    background: ${({theme:e})=>e.colors.secondary};
    padding: 0.5rem 1rem;
    color: ${({theme:e})=>e.colors.primary};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({theme:e})=>e.colors.placeholder};
    }
  }

  button {
    background: ${({theme:e})=>e.colors.quaternary};
    border: none;
    color: ${({theme:e})=>e.colors.opposite};
    border-radius: 25px;
    padding: 0.75rem 4rem;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 1rem;
    transition: transform 350ms, box-shadow 350ms;

    &:not([disabled]):hover {
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.35);
      transform: translateY(-5px);
    }

    &[type="submit"] {
      display: flex;
      gap: 1rem;
      align-items: center;

      svg {
        font-size: 1.25rem;
        animation: ${yw} 1s ease-out infinite;
      }
    }

    &[disabled] {
      background: grey;
    }
  }

  .submit-btn {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  .greetings {
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
  }

  .buttons {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    font-size: 0.75rem;

    * {
      color: ${({theme:e})=>q(.3,e.colors.secondary)};
    }
  }

  .error {
    color: red;
    text-align: center;
    margin-top: 1rem;
    animation: ${vw} 250ms both;
  }
`;function Sw(){const[e,t]=S.useState(""),[n,r]=S.useState(!1),o=Et(),i=l=>{l.preventDefault();const a=new FormData(l.currentTarget);r(!0),xe.post("/auth/signin",{email:a.get("email"),password:a.get("password")}).then(s=>{const{id:u,token:d,refreshToken:f}=s.data;localStorage.setItem("userId",u),localStorage.setItem("token",d),localStorage.setItem("refresh",f),o("/")}).catch(s=>{console.error(s);const u=s.response.data.message;t(u)}).finally(()=>{r(!1)})};return c.jsxs(xw,{children:[c.jsx(ww,{}),c.jsxs(kw,{children:[c.jsx("h1",{children:"user login"}),c.jsxs("p",{className:"greetings",children:[c.jsx("span",{children:"Welcome to "}),c.jsx(jc,{})]}),c.jsxs("form",{onSubmit:i,children:[c.jsx("p",{children:c.jsx("input",{type:"email",name:"email",placeholder:"Your email"})}),c.jsx("p",{children:c.jsx("input",{type:"password",name:"password",placeholder:"Your password"})}),c.jsxs("div",{className:"buttons",children:[c.jsx(Qr,{to:"/signup",children:"Not registered ?"}),c.jsx(Qr,{to:"/forgot-password",children:"Forgot password ?"})]}),e.length>0&&c.jsx("p",{className:"error",children:e}),c.jsx("div",{className:"submit-btn",children:c.jsxs("button",{type:"submit",disabled:n,children:[c.jsx("span",{children:"login"}),n&&c.jsx(Ic,{})]})})]})]})]})}function bw(){const e=X0();return c.jsx("p",{children:e})}const Ew=ot`
  from {
    transform: translateY(5px);
    opacity: 0;
  } to {
    transform: translate(0);
    opacity: 1;
  }
`,Cw=A.div`
  display: none;
  height: 120px;
  background: url("/images/backgrounds/animated-bg.gif");
  background-size: cover;
  position: sticky;
  top: 0;

  @media (max-width: ${H.screen.s}) {
    display: block;
  }
`,jw=A.div`
  @media (min-width: ${H.screen.l}) {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 60% 40%;
  }
`,Rw=A.div`
  background: ${({theme:e})=>e.colors.background};
  padding: 0;
  display: grid;
  place-items: center;

  @media (max-width: ${H.screen.m}) {
    display: block;
    padding: 0 1.5rem 1rem;
  }

  p {
    font-size: 1.5rem;
    color: ${({theme:e})=>e.colors.secondary};
    margin-bottom: 2rem;
  }

  input {
    border-bottom: 1px solid ${({theme:e})=>e.colors.secondaryVariant};
    color: ${({theme:e})=>e.theme==="light"?G(.25,e.colors.primary):q(.25,e.colors.primary)};
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }

  .inner {
    @media (min-width: ${H.screen.m}) {
      min-width: 480px;
    }

    margin: 0 auto;
  }

  .names {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;

    @media (max-width: ${H.screen.s}) {
      grid-template-columns: 1fr;
    }
  }

  .confirm-pwd,
  .email-input {
    position: relative;
  }

  .error {
    color: red;
    animation: ${Ew} 500ms both;
    margin: unset;
    font-size: 0.95rem;
    font-weight: bold;
    position: absolute;
    top: -0.75rem;
    right: 0;
  }

  .submit-btn {
    padding-top: 0.75rem;
    display: flex;
    flex-direction: row !important;
    justify-content: center;

    button {
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.35);
      font-size: 1rem;
      cursor: pointer;
      border: none;
      background: ${({theme:e})=>e.colors.quaternary};
      padding: 0.75rem 3rem;
      border-radius: 25px;
      color: ${({theme:e})=>e.colors.opposite};
      transition: transform 250ms;

      &:hover {
        transform: translateY(-3px);
      }
    }
  }
`,Pw=A.div`
  background: url(/images/backgrounds/signup-bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;function $w(){const[e,t]=S.useState(!1),[n,r]=S.useState(!1),o=S.useRef(null),i=S.useRef(null),l=Et(),a=u=>{if(u.preventDefault(),!e){const d=new FormData(u.currentTarget);(async()=>{await xe.post("/auth/signup",{fullname:d.get("first-name")+" "+d.get("last-name"),email:d.get("email"),password:d.get("password")});const h=await xe.post("/auth/signin",{email:d.get("email"),password:d.get("password")}),{id:x,token:y,refreshToken:w}=h.data;localStorage.setItem("userId",x),localStorage.setItem("token",y),localStorage.setItem("refresh",w),l("/")})().catch(h=>{h.response.status===409&&r(!0),console.error(h)})}},s=()=>{const u=o.current,d=i.current;if(u&&d){const f=d.value;t(f?u.value!==f:!1)}};return c.jsxs(jw,{children:[c.jsx(Cw,{}),c.jsx(Rw,{children:c.jsxs("div",{className:"inner",children:[c.jsx("h1",{children:c.jsx(jc,{})}),c.jsx("p",{children:"Create your account"}),c.jsxs("form",{onSubmit:a,children:[c.jsxs("div",{className:"names",children:[c.jsx(kn,{label:"First Name",name:"first-name",id:"first_name"}),c.jsx(kn,{label:"Last Name",name:"last-name",id:"last_name"})]}),c.jsxs("div",{className:"email-input",children:[n&&c.jsx("p",{className:"error",children:"Email already in use"}),c.jsx(kn,{label:"Email",name:"email",id:"email",type:"email",onChange:()=>r(!1)})]}),c.jsx(kn,{label:"Password",name:"password",id:"password",type:"password",inputRef:o}),c.jsxs("div",{className:"confirm-pwd",children:[e&&c.jsx("p",{className:"error",children:"Passwords don't match"}),c.jsx(kn,{label:"Confirm password",name:"",id:"confirm_passowrd",type:"password",onChange:s,inputRef:i})]}),c.jsx("div",{className:"submit-btn",children:c.jsx("button",{type:"submit",children:"Register"})})]})]})}),c.jsx(Pw,{})]})}function Fc(e){return X({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function Nw(e){return X({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8.06 6.5a.5.5 0 0 1 .5.5v.776a11.5 11.5 0 0 1-.552 3.519l-1.331 4.14a.5.5 0 0 1-.952-.305l1.33-4.141a10.5 10.5 0 0 0 .504-3.213V7a.5.5 0 0 1 .5-.5Z"}},{tag:"path",attr:{d:"M6.06 7a2 2 0 1 1 4 0 .5.5 0 1 1-1 0 1 1 0 1 0-2 0v.332c0 .409-.022.816-.066 1.221A.5.5 0 0 1 6 8.447c.04-.37.06-.742.06-1.115V7Zm3.509 1a.5.5 0 0 1 .487.513 11.5 11.5 0 0 1-.587 3.339l-1.266 3.8a.5.5 0 0 1-.949-.317l1.267-3.8a10.5 10.5 0 0 0 .535-3.048A.5.5 0 0 1 9.569 8Zm-3.356 2.115a.5.5 0 0 1 .33.626L5.24 14.939a.5.5 0 1 1-.955-.296l1.303-4.199a.5.5 0 0 1 .625-.329Z"}},{tag:"path",attr:{d:"M4.759 5.833A3.501 3.501 0 0 1 11.559 7a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4.857-.833.5.5 0 1 1-.943-.334Zm.3 1.67a.5.5 0 0 1 .449.546 10.72 10.72 0 0 1-.4 2.031l-1.222 4.072a.5.5 0 1 1-.958-.287L4.15 9.793a9.72 9.72 0 0 0 .363-1.842.5.5 0 0 1 .546-.449Zm6 .647a.5.5 0 0 1 .5.5c0 1.28-.213 2.552-.632 3.762l-1.09 3.145a.5.5 0 0 1-.944-.327l1.089-3.145c.382-1.105.578-2.266.578-3.435a.5.5 0 0 1 .5-.5Z"}},{tag:"path",attr:{d:"M3.902 4.222a4.996 4.996 0 0 1 5.202-2.113.5.5 0 0 1-.208.979 3.996 3.996 0 0 0-4.163 1.69.5.5 0 0 1-.831-.556Zm6.72-.955a.5.5 0 0 1 .705-.052A4.99 4.99 0 0 1 13.059 7v1.5a.5.5 0 1 1-1 0V7a3.99 3.99 0 0 0-1.386-3.028.5.5 0 0 1-.051-.705ZM3.68 5.842a.5.5 0 0 1 .422.568c-.029.192-.044.39-.044.59 0 .71-.1 1.417-.298 2.1l-1.14 3.923a.5.5 0 1 1-.96-.279L2.8 8.821A6.531 6.531 0 0 0 3.058 7c0-.25.019-.496.054-.736a.5.5 0 0 1 .568-.422Zm8.882 3.66a.5.5 0 0 1 .456.54c-.084 1-.298 1.986-.64 2.934l-.744 2.068a.5.5 0 0 1-.941-.338l.745-2.07a10.51 10.51 0 0 0 .584-2.678.5.5 0 0 1 .54-.456Z"}},{tag:"path",attr:{d:"M4.81 1.37A6.5 6.5 0 0 1 14.56 7a.5.5 0 1 1-1 0 5.5 5.5 0 0 0-8.25-4.765.5.5 0 0 1-.5-.865Zm-.89 1.257a.5.5 0 0 1 .04.706A5.478 5.478 0 0 0 2.56 7a.5.5 0 0 1-1 0c0-1.664.626-3.184 1.655-4.333a.5.5 0 0 1 .706-.04ZM1.915 8.02a.5.5 0 0 1 .346.616l-.779 2.767a.5.5 0 1 1-.962-.27l.778-2.767a.5.5 0 0 1 .617-.346Zm12.15.481a.5.5 0 0 1 .49.51c-.03 1.499-.161 3.025-.727 4.533l-.07.187a.5.5 0 0 1-.936-.351l.07-.187c.506-1.35.634-2.74.663-4.202a.5.5 0 0 1 .51-.49Z"}}]})(e)}function Lw(e){return X({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}},{tag:"path",attr:{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"}}]})(e)}function _w(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"32",d:"M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40m64-160l80 80-80 80m-193-80h273"}}]})(e)}function zw(e){return X({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M1.41 292.9l44.82 76.97 98.14-56.38-44.73-77.37L1.41 292.9z"}},{tag:"path",attr:{d:"M287.87 252.34l23.67-13.81-63.42-110-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25 23.24-13.4L358 464h36zM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151 424.07 1.41z"}}]})(e)}const Tw=A.nav`
  display: flex;
  flex-direction: column;
  min-width: 180px;
  max-width: 280px;
  align-items: stretch;
  background: ${({theme:e})=>e.colors.background};
  padding-top: 1rem;
  border-right: 2px solid ${({theme:e})=>Ht(e.colors.secondary,.3)};
  transition: transform 250ms ease-out, opacity 250ms;

  @media (max-width: ${H.screen.m}) {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    padding: 0;
    opacity: ${({$show:e})=>e?1:0};
    transform: ${({$show:e})=>e?"translate(0)":"translateX(-100%)"};
    box-shadow: 0 0 15px
      ${({theme:e})=>bt(.75,e.colors.primary)};
  }

  ul {
    list-style: none;
    padding: unset;
  }

  a {
    color: ${({theme:e})=>e.colors.primary};
  }

  .section > p {
    font-size: 0.75rem;
    padding-left: 1.75rem;
    color: ${({theme:e})=>e.colors.secondaryVariant};
  }

  .logo {
    margin: 1rem 0;
    padding-left: 1.75rem;
    user-select: none;
  }
`,Ow=A.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1.75rem;
  position: relative;
  background: transparent;
  transition: background 250ms;

  & > a {
    color: ${({theme:e,$active:t})=>t?e.colors.primary:Ht(e.colors.primary,.6)} !important;
  }

  & > svg {
    color: ${({theme:e,$active:t})=>t?e.colors.quaternary:Ht(e.colors.primary,.6)} !important;
  }

  &:hover {
    background: ${({theme:e})=>e.colors.tertiary};
  }

  &::before {
    position: absolute;
    left: 1px;
    border-radius: 5px;
    display: ${({$active:e})=>e?"block":"none"};
    content: "";
    width: 5px;
    height: 1.5rem;
    background: ${({theme:e})=>e.colors.quaternary};
  }

  svg {
    font-size: 1.25rem;
  }

  a {
    flex-grow: 1;
    padding: 0.5rem 0;
  }
`,Mw=A.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  backdrop-filter: blur(2px);

  @media (max-width: ${H.screen.m}) {
    display: block;
  }
`,Dw=({onClick:e})=>{const t=document.querySelector("#modal-portal");return t===null?null:Zr.createPortal(c.jsx(Mw,{onClick:e}),t)};function Iw({show:e,hide:t}){const n=[{label:"Menu",links:[{icon:c.jsx(Yx,{}),label:"My Videos",to:"/"},{icon:c.jsx(d5,{}),label:"Explore",to:"/explore"}]},{label:"General",links:[{label:"Settings",icon:c.jsx(Lw,{}),to:"/settings"},{label:"Log out",icon:c.jsx(_w,{}),action(){localStorage.clear(),r("/login")}}]}],r=Et(),o=lr(),i=S.useMemo(()=>{const l=o.pathname;for(let a of n){const s=a.links.find(u=>l===u.to);if(s)return s.label}return null},[o]);return c.jsxs(Tw,{$show:e,children:[c.jsx("h1",{className:"logo",children:c.jsx(jc,{})}),n.map((l,a)=>c.jsxs("div",{className:"section",children:[c.jsx("p",{children:l.label}),c.jsx("ul",{children:l.links.map(s=>c.jsxs(Ow,{$active:s.label===i,children:[s.icon,s.action?c.jsx("a",{href:"#",onClick:u=>{u.preventDefault(),s.action()},children:s.label}):c.jsx(Qr,{to:s.to,children:s.label})]},s.label))})]},a)),e&&c.jsx(Dw,{onClick:t})]})}const jm=A.ul`
  display: grid;
  gap: 1rem;
  // grid-auto-rows: 360px;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: unset;
  margin-top: 1.5rem;
  padding-right: 2rem;

  h2 {
    display: none;
  }

  @media (max-width: ${H.screen.l}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${H.screen.s}) {
    grid-template-columns: 1fr;
   
    h2 {
      display: block;
      text-align: center;
    }

    .new-video-btn {
      display: none;
    }
  }
`,Aw=A.h2`
  justify-content: center;
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
`;function Fw(){const{videos:e}=Mc("/video/a");return c.jsxs("div",{children:[c.jsxs("h1",{children:[c.jsx("span",{children:"Discover"}),c.jsx(zw,{})]}),e.length>0?c.jsx(jm,{children:e.map((t,n)=>c.jsx("li",{children:c.jsx(Cm,{...t})},n))}):c.jsx(Aw,{children:c.jsx("span",{children:"No video found 😕"})})]})}const Uw=A.button`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  outline: none;
  color: ${({theme:e})=>e.colors.primary};
  cursor: pointer;
  width: 100%;
  height: 100%;
  min-height: 360px;
  border: 2px dashed
    ${({theme:e})=>bt(.65,e.colors.primary)};
  border-radius: 10px;
  transition: background 500ms;

  span {
    font-weight: bold;
    font-size: 1.25rem;
  }

  .plus {
    font-size: 1.5rem;
  }

  &:hover {
    background: ${({theme:e})=>e.theme==="light"?G(.05,e.colors.background):q(.05,e.colors.background)};
  }
`,Bw=A.h1`
  button {
    display: none;
  }

  &:after {
    display: none !important;
  }

  @media (max-width: ${H.screen.s}) {
    button {
      all: unset;
      display: grid;
      place-items: center;
      position: absolute;
      width: 3rem;
      transform: translateX(-1.5rem);
      height: 100%;
      background: ${({theme:e})=>e.theme==="light"?G(.05,e.colors.background):q(.05,e.colors.background)};
      left: 100%;
      border-top: 2px solid
        ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.1,e.colors.background)};
      border-bottom: 2px solid
        ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.1,e.colors.background)};
    }
  }
`,Hw=e=>c.jsxs(Uw,{onClick:e.toggleModal,children:[c.jsx("span",{className:"plus",children:c.jsx(Em,{})}),c.jsx("span",{children:"Upload video"})]});function Vw(){const{videos:e,fetchVideos:t}=Mc("/video"),[n,r]=S.useState(!1);return c.jsxs("div",{children:[n&&c.jsx(fw,{onClose:()=>{r(!1),t()}}),c.jsxs(Bw,{children:[c.jsx("span",{children:"Your videos"}),c.jsx(Ux,{}),c.jsx("button",{onClick:()=>r(!0),children:c.jsx(Hx,{})})]}),c.jsxs(jm,{children:[e.length?e.map((o,i)=>c.jsx("li",{children:c.jsx(Cm,{...o,hideUserData:!0,showControls:!0})},i)):c.jsx("h2",{children:"You don't have yet"}),c.jsx("li",{className:"new-video-btn",children:c.jsx(Hw,{toggleModal:()=>r(!0)})})]})]})}const Ww=A.div`
  margin-top: 10rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`,tp=A.div`
  display: grid;
  place-items: center;
  min-height: 240px;
  background: ${({theme:e})=>e.colors.background};

  @media (max-width: ${H.screen.s}) {
    margin-top: 1rem;
    border-bottom: 1px solid
      ${({theme:e})=>bt(.5,e.colors.primary)};

    video {
      height: 100%;
      border-radius: unset !important;
      box-shadow: unset !important;
    }
  }

  video {
    width: 100%;
    border-radius: 10px;
    max-height: ${({theme:e})=>e.sizes.video.maxHeight};
    box-shadow: 0 3px 10px
      ${({theme:e})=>e.theme==="light"?G(.5,e.colors.background):q(.25,e.colors.background)};
  }
`,qw=A.div`
  margin-top: 2rem;
  padding-right: 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${H.screen.s}) {
    margin-top: 0;

    h1 {
      font-size: 1.5rem;
    }
  }

  & > div:first-of-type {
    flex-grow: 1;
  }

  h1 {
    letter-spacing: normal !important;
    font-weight: bold !important;
    margin: 1rem 0 0;
  }

  .upload-date {
    font-size: 0.75rem;
    margin-bottom: 1rem;
    color: ${({theme:e})=>bt(.25,e.colors.primary)};
  }

  .more {
    max-width: 360px;
    max-height: calc(100vh - 180px);
    overflow-y: auto;

    @media (max-width: ${H.screen.s}) {
      max-height: unset;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        background: ${({theme:e})=>e.theme==="light"?G(.5,e.colors.background):q(.5,e.colors.background)};
      }
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: transparent;
      transition: background 300ms;
    }

    ul {
      padding: unset;
      margin: unset;
      list-style: none;
    }

    li {
      padding: unset;
      margin-bottom: 0.75rem;
    }
  }

  .user {
    display: flex;
    align-items: center;
    gap: 1rem;

    .name {
      font-size: 1.5rem;

      @media (max-width: ${H.screen.s}) {
        font-size: 1.25rem;
      }
    }
  }
`,Qw=A.div`
  width: 64px;
  height: 64px;
  border-radius: 5rem;
  overflow: hidden;
  padding: 2px;
  outline: 2px solid ${({theme:e})=>e.colors.quaternary};

  @media (max-width: ${H.screen.s}) {
    width: 48px;
    height: 48px;
  }

  div {
    width: 100%;
    height: 100%;
    background-image: ${({$src:e})=>`url(${e})`};
    background-color: white;
    background-size: cover;
    border-radius: 5rem;
  }
`;function np(e){const t=+e,r=(Date.now()-t)/1e3/60;if(r<=1)return"now";{const o=r/60;if(o<1){const i=Math.round(o);return i===0?"Just now":`${i} minute${i>1?"s":""} ago`}else if(o<24){const i=Math.round(o);return`${i} hour${i>1?"s":""} ago`}else{const i=Math.round(o/24);return`${i} day${i>1?"s":""} ago`}}}function Kw(){const{id:e}=r2(),t=Oc(e),n=Mc(t?`/video/a?user=${t.userId}`:"").videos,[r,o]=S.useState(screen.width>parseInt(H.screen.s)),[i,l]=S.useState(null),a=S.useRef(null),s=S.useRef(null),u=document.querySelector("#player-container"),d=S.useMemo(()=>t?np(t.uploadDate):"",[t]);return S.useEffect(()=>{const f=()=>{o(window.innerWidth>parseInt(H.screen.s))};return window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[]),S.useEffect(()=>{if(!t)return;const f=s.current;return f&&f.load(),document.title=t.title,xe.get(`/user/${t.userId}`).then(h=>{const{fullname:x,avatar:y}=h.data;l({name:x,avatar:y?`http://13.201.59.55:4000/api/user/picture/${y}`:""})}).catch(h=>console.error(h)),()=>{document.title=`${t.title}| PB OTT`}},[t,e]),t?c.jsxs(c.Fragment,{children:[u&&!r&&Zr.createPortal(c.jsx(tp,{children:c.jsx("video",{autoPlay:!0,controls:!0,ref:s,children:c.jsx("source",{src:`http://13.201.59.55:4000/api/video/${t.id}`})})}),u),c.jsxs(qw,{ref:a,children:[c.jsxs("div",{children:[r&&c.jsx(tp,{children:c.jsx("video",{autoPlay:!0,controls:!0,ref:s,children:c.jsx("source",{src:`http://13.201.59.55:4000/api/video/${t.id}`})})}),c.jsx("h1",{children:t.title.length>64?t.title.slice(0,64)+"...":t.title}),c.jsx("div",{className:"upload-date",children:d}),i&&c.jsxs("div",{className:"user",children:[c.jsx(Qw,{$src:i.avatar?i.avatar:"/images/profile-pic.png",children:c.jsx("div",{})}),c.jsx("div",{className:"name",children:i.name})]})]}),n&&n.length>1&&c.jsxs("div",{children:[c.jsx("div",{className:"more",children:c.jsx("ul",{children:n.map((f,h)=>f.id!==e?c.jsx("li",{children:c.jsx(iw,{id:f.id,cover:`http://13.201.59.55:4000/api/video/cover/${f.coverImage}`,title:f.title,uploader:i?i.name:"",uploadDate:np(f.uploadDate)})},h):null)})}),c.jsxs("p",{children:[n.length-1," other video",n.length>2?"s":""," found ✨"]})]})]})]}):c.jsxs(Ww,{children:[c.jsx("span",{children:"Video not found"}),c.jsx(Em,{})]})}const Yw=ot`
from {
  transform: rotate(0);
} to {
  transform: rotate(360deg);
}
`,Gw=A.div`
  h1 {
    border-bottom: 1px solid
      ${({theme:e})=>e.theme==="dark"?q(.15,e.colors.background):G(.15,e.colors.background)};
  }

  h2 {
    font-weight: normal;
  }

  form {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 1rem;
    flex-wrap: wrap;

    & > div:first-of-type {
      padding-right: 1rem;
    }

    & > div:last-of-type {
      width: 100%;
      max-width: 520px;

      & > div {
        padding-right: 1rem;
        margin-bottom: 1rem;
      }
    }
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  small {
    color: ${({theme:e})=>bt(.25,e.colors.primary)};
  }

  button[type="submit"] {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 10px 15px;
    color: white;
    font-weight: bold;
    background: ${({theme:e})=>e.colors.quaternary};
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 5px;
    transition: background 300ms;

    &:hover {
      background: ${({theme:e})=>q(.05,e.colors.quaternary)};
    }

    svg {
      animation: ${Yw} 1s ease-in-out infinite;
    }
  }

  input {
    box-sizing: border-box;
    color: ${({theme:e})=>e.colors.primary};
    padding: 5px 7px;
    border-radius: 5px;
    width: 100%;
    max-width: 360px;
    border: 1.5px solid
      ${({theme:e})=>e.theme==="light"?G(.5,e.colors.background):q(.5,e.colors.background)};
    background: ${({theme:e})=>e.theme==="light"?"transparent":G(.25,e.colors.background)};
  }

  .error {
    color: #d70000;
  }

  .edit {
    all: unset;
    background: ${({theme:e})=>e.theme==="light"?G(.125,e.colors.background):q(.125,e.colors.background)};
    position: absolute;
    top: 1rem;
    right: -1rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 2px 5px;
    border-radius: 5px;
    outline: 3px solid ${({theme:e})=>e.colors.background};
    cursor: pointer;
  }

  .security {
    & > div {
      margin-bottom: 1rem;
    }

    span {
      position: relative;
    }
  }

  .eye {
    all: unset;
    position: absolute;
    right: 10px;
    top: 1rem;
    cursor: pointer;
    transform: translateY(-50%);
  }

  #profil-pic {
    display: none;
  }
`,Xw=A.div`
  width: 186px;
  height: 186px;
  border-radius: 100%;
  position: relative;
  border: 1.5px solid
    ${({theme:e})=>e.theme==="light"?G(.5,e.colors.background):q(.5,e.colors.background)};
  background-color: grey;
  background-image: url(${e=>e.$image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;function Zw(){const e=Wx(),[t,n]=S.useState(""),[r,o]=S.useState(""),[i,l]=S.useState(!1),[a,s]=S.useState(!1),[u,d]=S.useState(!1),f=h=>{var m,p;h.preventDefault();const x=new FormData(h.currentTarget),y=(m=x.get("password"))==null?void 0:m.toString(),w=(p=x.get("confirm-password"))==null?void 0:p.toString();if(y){if(!w){o("Confirm your new password!");return}if(w!==y){o("Passwords don't match.");return}}x.delete("confirm-password"),l(!0);const E=localStorage.getItem("userId");xe.patch(`/user/${E}`,x).then(v=>console.log(v.data)).catch(v=>console.error(v)).finally(()=>{window.location.reload()})};return c.jsxs(Gw,{children:[c.jsx("h1",{children:"Account settings"}),c.jsxs("form",{onSubmit:f,children:[c.jsxs("div",{children:[c.jsx("label",{children:"Profile picture"}),c.jsxs(Xw,{$image:t||(e!=null&&e.avatar?`http://13.201.59.55:4000/api/user/picture/${e.avatar}`:"/images/profile-pic.png"),children:[c.jsxs("label",{htmlFor:"profil-pic",className:"edit",children:[c.jsx(h5,{}),c.jsx("span",{children:"Edit"})]}),c.jsx("input",{onChange:h=>{const x=h.currentTarget.files;x&&x.length>0&&n(URL.createObjectURL(x[0]))},type:"file",accept:"image/*",id:"profil-pic",name:"avatar"})]})]}),c.jsxs("div",{children:[c.jsxs("div",{children:[c.jsx("label",{htmlFor:"full-name",children:"Full name"}),c.jsx("input",{required:!0,type:"text",id:"full-name",name:"fullname",defaultValue:e==null?void 0:e.fullname}),c.jsx("div",{children:c.jsx("small",{children:"You can use alphabetic characters only."})})]}),c.jsxs("div",{children:[c.jsx("label",{htmlFor:"email",children:"Email address"}),c.jsx("input",{required:!0,type:"email",name:"email",id:"email",defaultValue:e==null?void 0:e.email})]}),c.jsxs("div",{className:"security",children:[c.jsx("h2",{children:"Security"}),c.jsxs("div",{children:[c.jsx("div",{children:c.jsx("small",{children:"Enter new password"})}),c.jsxs("span",{children:[c.jsx("input",{type:"password",name:"password",id:"password"}),c.jsx("button",{type:"button",className:"eye",onClick:()=>{s(h=>{const x=document.querySelector("#password");return x.type=h?"password":"text",!h})},children:a?c.jsx(Jf,{}):c.jsx(ep,{})})]})]}),c.jsxs("div",{children:[c.jsx("div",{children:c.jsx("small",{children:"Confirm password"})}),c.jsxs("span",{children:[c.jsx("input",{type:"password",name:"confirm-password",id:"confirm-password"}),c.jsx("button",{type:"button",className:"eye",onClick:()=>{d(h=>{const x=document.querySelector("#confirm-password");return x.type=h?"password":"text",!h})},children:u?c.jsx(Jf,{}):c.jsx(ep,{})})]})]})]}),c.jsxs("div",{children:[r&&c.jsx("p",{className:"error",children:r}),c.jsxs("button",{type:"submit",children:[c.jsx("span",{children:"Update datas"}),i&&c.jsx(Ac,{})]})]})]})]})]})}const Jw=A.div`
  display: flex;
  width: 100vw;
  height: 100dvh;

  & > * {
    flex-grow: 1;
  }

  main {
    overflow-y: auto;
  }

  .outlet {
    padding-left: 3rem;

    @media (max-width: ${H.screen.s}) {
      padding-left: 1.5rem;
    }

    & > div > h1 {
      color: ${({theme:e})=>e.colors.primary};
      display: flex;
      align-items: center;
      gap: 1rem;
      font-weight: unset;
      letter-spacing: 2px;

      @media (max-width: ${H.screen.s}) {
        font-size: 1.5rem;
        letter-spacing: unset;
        position: sticky;
        padding: 5px 0;
        top: 0;
        right: 0;
        z-index: 1;
        border-top: 2px solid
          ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.1,e.colors.background)};
        border-bottom: 2px solid
          ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.1,e.colors.background)};
        background: ${({theme:e})=>e.theme==="light"?G(.05,e.colors.background):q(.05,e.colors.background)};
        transform: translateX(-1.5rem);
        padding-left: 1rem;

        &:after {
          position: absolute;
          display: block;
          content: "";
          width: 3rem;
          transform: translateX(-50%);
          height: 100%;
          background: ${({theme:e})=>e.theme==="light"?G(.05,e.colors.background):q(.05,e.colors.background)};
          left: 100%;
          border-top: 2px solid
            ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.1,e.colors.background)};
          border-bottom: 2px solid
            ${({theme:e})=>e.theme==="light"?G(.1,e.colors.background):q(.1,e.colors.background)};
        }
      }
    }
  }
`;function e4(){const[e,t]=S.useState(!1);return c.jsxs(Jw,{children:[c.jsx(Iw,{show:e,hide:()=>t(!1)}),c.jsxs("main",{children:[c.jsx(Ix,{showSidebar:()=>t(!0)}),c.jsx("div",{id:"player-container"}),c.jsx("div",{className:"outlet",children:c.jsx(Z0,{})})]})]})}const t4=A.div`
  width: 100vw;
  height: 100dvh;
  display: flex;
  background: ${({theme:e})=>e.colors.background};

  & > div {
    flex-grow: 1;
  }
`,n4=A.div`
  max-width: 360px;
  margin: 0 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  position: relative;

  @media (max-width: ${H.screen.s}) {
    margin: 0 auto;
    padding: 10vh 1rem;
    justify-content: flex-start;
    background: ${({theme:e})=>bt(.25,e.colors.background)};
    z-index: 1;

    h1 {
      font-size: 1.75rem;
    }
  }
`,r4=A.div`
  background: url(/images/backgrounds/forgot-pwd-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 5px;

  @media (max-width: ${H.screen.s}) {
    all: unset;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(/images/backgrounds/typing.jpg);
    filter: blur(2px);
    background-size: cover;
  }
`;function o4(){return c.jsxs(t4,{children:[c.jsx(n4,{children:c.jsx(Z0,{})}),c.jsx(r4,{})]})}function i4(e){return X({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"}}]})(e)}const l4=A.p`
  font-size: 1.75rem;
  margin: 1.25rem 0;

  span {
    padding: 1rem;
    // border: 1px solid ${({theme:e})=>e.colors.secondary};
    box-shadow: 0 0 2px
      ${({theme:e})=>bt(.5,e.colors.primary)};
    display: grid;
    place-items: center;
    max-width: 28px;
    aspect-ratio: 1;
    border-radius: 15px;
  }
`;function Uc({children:e}){return c.jsx(l4,{children:c.jsx("span",{children:e})})}const Bc=A.button`
  padding: 0.5rem 0;
  cursor: pointer;
  border: none;
  outline: none;
  color: ${({theme:e})=>e.colors.opposite};
  background: ${({theme:e})=>e.colors.primary};
  transition: background 500ms;

  &:hover {
    background: ${({theme:e})=>e.colors.secondary};
  }
`,Hc=A.h1`
  margin: unset;
`,a4=A.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${H.screen.s}) {
    bottom: 5vh;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    justify-content: space-evenly;
    margin: unset;
    padding: 2rem 0;
    user-select: none;
  }

  li {
    width: 32px;
    aspect-ratio: 1;
    border-radius: 100%;
    overflow: hidden;
    display: grid;
    place-items: center;
    font-weight: bold;
    border: 2px solid ${({theme:e})=>e.colors.secondaryVariant};
    color: ${({theme:e})=>e.colors.secondaryVariant};
  }

  .active {
    border: 2px solid ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.primary};
  }
`;function Vc({active:e}){return c.jsx(a4,{children:c.jsx("ul",{children:[1,2,3].map(t=>c.jsx("li",{className:t===e?"active":"",children:c.jsx("span",{children:t})},t))})})}const s4=A.p`
  color: ${({theme:e})=>e.colors.primary};
  span {
    font-weight: bold;
  }
`,u4=A.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    max-width: 3.5rem;
    padding: 0.5rem 0;
    font-size: 2rem;
    text-align: center;
    background: transparent;
    color: ${({theme:e})=>e.colors.primary};
    border: none;
    outline: none;

    appearance: textfield;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  p {
    text-align: center;
    margin: unset;
    color: ${({theme:e})=>e.colors.secondary};
  }

  input {
    box-shadow: 0 0 3px ${({theme:e})=>e.colors.secondaryVariant};
  }

  .input {
    display: flex;
    justify-content: space-between;
  }

  p.back {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    transform: translateX(-1rem);

    & > * {
      color: ${({theme:e})=>e.colors.secondary};
      transition: color 500ms;
    }

    &:hover > * {
      color: ${({theme:e})=>e.colors.primary};
    }
  }

  .error {
    text-align: start;
    color: red;
  }

  input.filled {
    box-shadow: 0 0 3px ${({theme:e})=>e.colors.primary};
  }

  button.resend {
    border: unset;
    background: transparent;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    color: ${({theme:e})=>e.colors.primary};
  }
`;function c4(){var f;const e=lr(),[t,n]=S.useState((f=e.state)==null?void 0:f.email),[r,o]=S.useState(""),i=Et(),l=S.useRef(null),a=h=>{var w;h.preventDefault();const x=new FormData(h.currentTarget);let y="";for(let E=0;E<4;++E)y+=(w=x.get(`${E}`))==null?void 0:w.toString();xe.post("/auth/validate-code",{code:y}).then(()=>{i("/forgot-password/3",{state:{email:t,code:y}})}).catch(E=>{console.error(E),o(E.response.data.message)})},s=h=>{h.preventDefault(),xe.post("/auth/reset-password",{email:t}).then(()=>{o("Check your mailbox.")})},u=h=>{const x=h.currentTarget,y=parseInt(x.value);if(Number.isNaN(y))x.value="";else{x.classList.toggle("filled");const w=x.nextElementSibling;w&&w.focus()}x.value===""&&x.classList.remove("filled")},d=h=>{h.preventDefault();const x=h.clipboardData.getData("text"),y=parseInt(x);if(Number.isInteger(y)&&x.length===4){const w=l.current;if(w){const E=w.querySelectorAll("input");for(let m=0;m<4;++m){const p=E[m];p.value=x[m],p.classList.add("filled")}}}};return c.jsxs(c.Fragment,{children:[c.jsx(Uc,{children:c.jsx(i4,{})}),c.jsx(Hc,{children:"Password reset"}),c.jsxs(s4,{children:["We sent a code to ",c.jsx("span",{style:{fontWeight:"bold"},children:t})]}),c.jsxs(u4,{onSubmit:a,children:[c.jsxs("div",{className:"input",ref:l,children:[c.jsx("input",{required:!0,autoComplete:"off",type:"text",maxLength:1,name:"0",id:"0",onInput:u,onPaste:d,onFocus:()=>o("")}),c.jsx("input",{required:!0,autoComplete:"off",type:"text",maxLength:1,name:"1",id:"1",onInput:u,onPaste:d,onFocus:()=>o("")}),c.jsx("input",{required:!0,autoComplete:"off",type:"text",maxLength:1,name:"2",id:"2",onInput:u,onPaste:d,onFocus:()=>o("")}),c.jsx("input",{required:!0,autoComplete:"off",type:"text",maxLength:1,name:"3",id:"3",onInput:u,onPaste:d,onFocus:()=>o("")})]}),c.jsx(Bc,{type:"submit",children:"Continue"}),r&&c.jsx("p",{className:"error",children:r}),c.jsxs("p",{children:["Didn't receive the mail?"," ",c.jsx("button",{onClick:s,className:"resend",children:"Click to resend"})]}),c.jsxs("p",{className:"back",children:[c.jsx(Fc,{}),c.jsx(Qr,{to:"/",children:c.jsx("span",{children:"Back to log in"})})]})]}),c.jsx(Vc,{active:2})]})}const d4=ot`
  from {
    transform: rotate(360deg);
  } to {
    transform: rotate(0deg);
  }
`,f4=A.form`
  .buttons {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      color: ${({theme:e})=>e.colors.secondary};
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      svg {
        display: none;
        animation: ${d4} 750ms both linear infinite;
      }
    }

    button[disabled] {
      svg {
        display: block;
      }
    }
  }

  .error {
    color: red;
  }
`;function p4(){const e=Et(),[t,n]=S.useState(""),r=o=>{o.preventDefault();const i=o.currentTarget.email.value,l=document.querySelector("button[type=submit]");l.disabled=!0,xe.post("/auth/reset-password",{email:i}).then(()=>{e("/forgot-password/2",{state:{email:i}})}).catch(a=>{console.error(a),l.disabled=!1,n(a.response.data.message)})};return c.jsxs(c.Fragment,{children:[c.jsx(Uc,{children:c.jsx(Nw,{})}),c.jsx(Hc,{children:"Forgot password?"}),c.jsx("p",{children:"Don't panic, we'll send you reset instructions."}),c.jsxs(f4,{onSubmit:r,children:[c.jsx(kn,{name:"email",id:"email",type:"email",label:"Enter your email",onChange:()=>{n("")}}),c.jsxs("div",{className:"buttons",children:[c.jsxs(Bc,{type:"submit",children:[c.jsx("span",{children:"Reset password"}),c.jsx(Ac,{})]}),c.jsxs(Qr,{to:"/",children:[c.jsx(Fc,{}),c.jsx("span",{children:"Back to log in"})]})]}),t&&c.jsx("p",{className:"error",children:t})]}),c.jsx(Vc,{active:1})]})}const h4=ot`
from {
  transform: rotate(0deg);
} to {
  transform: rotate(360deg);
}
`,m4=A(Bc)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    animation: ${h4} 500ms infinite;
  }
`,g4=A.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  button {
    margin: 0.5rem 0;
  }

  .error {
    color: red;
    position: relative;
    margin-bottom: 0.5rem;

    p {
      margin: unset;
      position: absolute;
      top: 0;
      font-size: 0.75rem;
    }
  }

  .back {
    margin: unset;
    color: ${({theme:e})=>e.colors.secondary};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    & > * {
      color: ${({theme:e})=>e.colors.secondary};
      transition: color 500ms;
    }

    &:hover > * {
      color: ${({theme:e})=>e.colors.primary};
    }
  }
`;function y4(){var s;const e=lr(),[t,n]=S.useState(""),[r,o]=S.useState(!1),i=Et(),l=(s=e.state)==null?void 0:s.code,a=u=>{u.preventDefault();const d=new FormData(u.currentTarget);o(!0),xe.post("/user/password",{code:l,password:d.get("password")}).then(()=>{i("/login")}).catch(f=>{console.log({status:f.response.status}),f.response.status===400||f.response.status===403?n("Can not set password, invalid code provided."):n("Unable to set password, an error occured.")}).finally(()=>o(!1))};return c.jsxs(c.Fragment,{children:[c.jsx(Uc,{children:c.jsx(Vx,{})}),c.jsx(Hc,{children:"Set new password"}),c.jsxs(g4,{onSubmit:a,children:[c.jsx("div",{className:"error",children:t.length>0&&c.jsx("p",{children:t})}),c.jsx(kn,{label:"Password",name:"password",id:"password",type:"password",onChange:()=>{n("")}}),c.jsx(kn,{label:"Confirm password",name:"confirm-password",id:"confirm_password",type:"password",onChange:u=>{const d=document.querySelector("#password");u&&(u!==d.value?n("Passwords don't match."):n(""))}}),c.jsxs(m4,{type:"submit",disabled:r,children:[c.jsx("span",{children:"Reset password"}),r&&c.jsx(Ac,{})]}),c.jsxs("p",{className:"back",children:[c.jsx(Fc,{}),c.jsx(Qr,{to:"/",children:c.jsx("span",{children:"Back to log in"})})]})]}),c.jsx(Vc,{active:3})]})}const v4=b2([{path:"/login",element:c.jsx(Sw,{}),errorElement:c.jsx(bw,{})},{path:"/forgot-password",element:c.jsx(o4,{}),children:[{path:"",element:c.jsx(p4,{})},{path:"2",element:c.jsx(c4,{})},{path:"3",element:c.jsx(y4,{})}]},{path:"/signup",element:c.jsx($w,{})},{path:"/",element:c.jsx(e4,{}),children:[{path:"",element:c.jsx(Vw,{})},{path:"explore",element:c.jsx(Fw,{})},{path:"/video/:id",element:c.jsx(Kw,{})},{path:"/settings",element:c.jsx(Zw,{})}]}]),x4=uv`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  color: ${({theme:e})=>e.colors.primary};
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
}

a {
  text-decoration: none;
}

#player-container {
  position: sticky;
  top: 0;
}

`,w4=ot`
  form {
    transform: scale(0);
  } to {
    transform: scale(1);
  }
`,k4=A.div`
  z-index: -1;
  position: absolute;
  top: -50vh;
  right: -50vw;
  width: 200vw;
  height: 200vh;
  border-radius: 100%;
  background: ${({$color:e})=>e};
  transform: scale(0);
  transform-origin: top right;
  animation: ${w4} ${({theme:e})=>`${e.swipperTimeout}ms`} both;
`;function S4(){const[e,t]=S.useState(!1),n=sessionStorage.getItem("theme"),[r,o]=S.useState(n==="dark"||n==="light"?n:"dark");return S.useEffect(()=>{document.body.style.background=r==="dark"?H.colors.dark.background:H.colors.light.background},[]),c.jsx(D0.Provider,{value:{theme:r,toggleTheme(){t(!0),o(i=>{const l=i==="light"?"dark":"light";return sessionStorage.setItem("theme",l),setTimeout(()=>{t(!1);const a=document.querySelector("body");a&&(a.style.background=i==="light"?H.colors.dark.background:H.colors.light.background)},H.swipperTimeout),l})}},children:c.jsxs(lv,{theme:{...H,theme:r,colors:r==="light"?H.colors.light:H.colors.dark},children:[e&&c.jsx(k4,{$color:r==="dark"?H.colors.dark.background:H.colors.light.background}),c.jsx(x4,{}),c.jsx(m2,{router:v4})]})})}ss.createRoot(document.getElementById("root")).render(c.jsx(ke.StrictMode,{children:c.jsx(S4,{})}));
