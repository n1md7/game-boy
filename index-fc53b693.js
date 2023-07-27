var td=Object.defineProperty;var nd=(u,t,e)=>t in u?td(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e;var ut=(u,t,e)=>(nd(u,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function id(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}function rd(u){if(u.__esModule)return u;var t=u.default;if(typeof t=="function"){var e=function i(){if(this instanceof i){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(u).forEach(function(i){var n=Object.getOwnPropertyDescriptor(u,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:function(){return u[i]}})}),e}function kn(u){throw new Error('Could not dynamically require "'+u+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Ja={exports:{}};const sd={},od=Object.freeze(Object.defineProperty({__proto__:null,default:sd},Symbol.toStringTag,{value:"Module"})),ad=rd(od);(function(u,t){(function e(i,n,r){function o(d,c){if(!n[d]){if(!i[d]){var h=typeof kn=="function"&&kn;if(!c&&h)return h(d,!0);if(a)return a(d,!0);var s=new Error("Cannot find module '"+d+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[d]={exports:{}};i[d][0].call(f.exports,function(p){return o(i[d][1][p]||p)},f,f.exports,e,i,n,r)}return n[d].exports}for(var a=typeof kn=="function"&&kn,l=0;l<r.length;l++)o(r[l]);return o})({1:[function(e,i,n){var r=e("./utils");function o(){var a={},l=0,d=0,c=0;return{add:function(h,s){s||(s=h,h=0),h>d?d=h:h<c&&(c=h),a[h]||(a[h]=[]),a[h].push(s),l++},process:function(){for(var h=c;h<=d;h++)for(var s=a[h],f=0;f<s.length;f++)(0,s[f])()},size:function(){return l}}}i.exports=function(a){var l=(a=a||{}).reporter,d=r.getOption(a,"async",!0),c=r.getOption(a,"auto",!0);c&&!d&&(l&&l.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),d=!0);var h,s=o(),f=!1;function p(){for(f=!0;s.size();){var g=s;s=o(),g.process()}f=!1}function v(){h=setTimeout(p,0)}return{add:function(g,m){!f&&c&&d&&s.size()===0&&v(),s.add(g,m)},force:function(g){f||(g===void 0&&(g=d),h&&(clearTimeout(h),h=null),g?v():p())}}}},{"./utils":2}],2:[function(e,i,n){(i.exports={}).getOption=function(r,o,a){var l=r[o];return l==null&&a!==void 0?a:l}},{}],3:[function(e,i,n){var r=i.exports={};r.isIE=function(o){return!((a=navigator.userAgent.toLowerCase()).indexOf("msie")===-1&&a.indexOf("trident")===-1&&a.indexOf(" edge/")===-1||o&&o!==function(){var l=3,d=document.createElement("div"),c=d.getElementsByTagName("i");do d.innerHTML="<!--[if gt IE "+ ++l+"]><i></i><![endif]-->";while(c[0]);return l>4?l:void 0}());var a},r.isLegacyOpera=function(){return!!window.opera}},{}],4:[function(e,i,n){(i.exports={}).forEach=function(r,o){for(var a=0;a<r.length;a++){var l=o(r[a]);if(l)return l}}},{}],5:[function(e,i,n){var r=e("../browser-detector");i.exports=function(o){var a=(o=o||{}).reporter,l=o.batchProcessor,d=o.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");function c(s){var f=o.important?" !important; ":"; ";return(s.join(f)+f).trim()}function h(s){return d(s).object}return{makeDetectable:function(s,f,p){p||(p=f,f=s,s=null),(s=s||{}).debug,r.isIE(8)?p(f):function(v,g){var m=c(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),y=!1,_=window.getComputedStyle(v),b=v.offsetWidth,w=v.offsetHeight;function A(){function E(){if(_.position==="static"){v.style.setProperty("position","relative",s.important?"important":"");var S=function(T,U,N,x){var M=N[x];M!=="auto"&&function(P){return P.replace(/[^-\d\.]/g,"")}(M)!=="0"&&(T.warn("An element that is positioned static has style."+x+"="+M+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+x+" will be set to 0. Element: ",U),U.style.setProperty(x,"0",s.important?"important":""))};S(a,v,_,"top"),S(a,v,_,"right"),S(a,v,_,"bottom"),S(a,v,_,"left")}}_.position!==""&&(E(),y=!0);var I=document.createElement("object");I.style.cssText=m,I.tabIndex=-1,I.type="text/html",I.setAttribute("aria-hidden","true"),I.onload=function(){y||E(),function S(T,U){if(!T.contentDocument){var N=d(T);return N.checkForObjectDocumentTimeoutId&&window.clearTimeout(N.checkForObjectDocumentTimeoutId),void(N.checkForObjectDocumentTimeoutId=setTimeout(function(){N.checkForObjectDocumentTimeoutId=0,S(T,U)},100))}U(T.contentDocument)}(this,function(S){g(v)})},r.isIE()||(I.data="about:blank"),d(v)&&(v.appendChild(I),d(v).object=I,r.isIE()&&(I.data="about:blank"))}d(v).startSize={width:b,height:w},l?l.add(A):A()}(f,p)},addListener:function(s,f){function p(){f(s)}if(r.isIE(8))d(s).object={proxy:p},s.attachEvent("onresize",p);else{var v=h(s);if(!v)throw new Error("Element is not detectable by this strategy.");v.contentDocument.defaultView.addEventListener("resize",p)}},uninstall:function(s){if(d(s)){var f=h(s);f&&(r.isIE(8)?s.detachEvent("onresize",f.proxy):s.removeChild(f),d(s).checkForObjectDocumentTimeoutId&&window.clearTimeout(d(s).checkForObjectDocumentTimeoutId),delete d(s).object)}}}}},{"../browser-detector":3}],6:[function(e,i,n){var r=e("../collection-utils").forEach;i.exports=function(o){var a=(o=o||{}).reporter,l=o.batchProcessor,d=o.stateHandler.getState,c=(o.stateHandler.hasState,o.idHandler);if(!l)throw new Error("Missing required dependency: batchProcessor");if(!a)throw new Error("Missing required dependency: reporter.");var h=function(){var _=document.createElement("div");_.style.cssText=p(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var b=document.createElement("div");b.style.cssText=p(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),b.appendChild(_),document.body.insertBefore(b,document.body.firstChild);var w=500-b.clientWidth,A=500-b.clientHeight;return document.body.removeChild(b),{width:w,height:A}}(),s="erd_scroll_detection_container";function f(_){(function(b,w,A){if(!b.getElementById(w)){var E=A+"_animation",I=`/* Created by the element-resize-detector library. */
`;I+="."+A+" > div::-webkit-scrollbar { "+p(["display: none"])+` }

`,I+=".erd_scroll_detection_container_animation_active { "+p(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+E,"animation-name: "+E])+` }
`,I+="@-webkit-keyframes "+E+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,function(S,T){T=T||function(N){b.head.appendChild(N)};var U=b.createElement("style");U.innerHTML=S,U.id=w,T(U)}(I+="@keyframes "+E+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}})(_,"erd_scroll_detection_scrollbar_style",s)}function p(_){var b=o.important?" !important; ":"; ";return(_.join(b)+b).trim()}function v(_,b,w){if(_.addEventListener)_.addEventListener(b,w);else{if(!_.attachEvent)return a.error("[scroll] Don't know how to add event listeners.");_.attachEvent("on"+b,w)}}function g(_,b,w){if(_.removeEventListener)_.removeEventListener(b,w);else{if(!_.detachEvent)return a.error("[scroll] Don't know how to remove event listeners.");_.detachEvent("on"+b,w)}}function m(_){return d(_).container.childNodes[0].childNodes[0].childNodes[0]}function y(_){return d(_).container.childNodes[0].childNodes[0].childNodes[1]}return f(window.document),{makeDetectable:function(_,b,w){function A(){if(_.debug){var C=Array.prototype.slice.call(arguments);if(C.unshift(c.get(b),"Scroll: "),a.log.apply)a.log.apply(null,C);else for(var R=0;R<C.length;R++)a.log(C[R])}}function E(C){var R=d(C).container.childNodes[0],O=window.getComputedStyle(R);return!O.width||O.width.indexOf("px")===-1}function I(){var C=window.getComputedStyle(b),R={};return R.position=C.position,R.width=b.offsetWidth,R.height=b.offsetHeight,R.top=C.top,R.right=C.right,R.bottom=C.bottom,R.left=C.left,R.widthCSS=C.width,R.heightCSS=C.height,R}function S(){if(A("storeStyle invoked."),d(b)){var C=I();d(b).style=C}else A("Aborting because element has been uninstalled")}function T(C,R,O){d(C).lastWidth=R,d(C).lastHeight=O}function U(){return 2*h.width+1}function N(){return 2*h.height+1}function x(C){return C+10+U()}function M(C){return C+10+N()}function P(C,R,O){var B=m(C),G=y(C),Y=x(R),H=M(O),te=function(_e){return 2*_e+U()}(R),ue=function(_e){return 2*_e+N()}(O);B.scrollLeft=Y,B.scrollTop=H,G.scrollLeft=te,G.scrollTop=ue}function L(){var C=d(b).container;if(!C){(C=document.createElement("div")).className=s,C.style.cssText=p(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),d(b).container=C,function(O){O.className+=" "+s+"_animation_active"}(C),b.appendChild(C);var R=function(){d(b).onRendered&&d(b).onRendered()};v(C,"animationstart",R),d(b).onAnimationStart=R}return C}function F(){if(A("Injecting elements"),d(b)){(function(){var K=d(b).style;if(K.position==="static"){b.style.setProperty("position","relative",_.important?"important":"");var X=function(fe,Pe,Le,Ne){var ze=Le[Ne];ze!=="auto"&&function(De){return De.replace(/[^-\d\.]/g,"")}(ze)!=="0"&&(fe.warn("An element that is positioned static has style."+Ne+"="+ze+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+Ne+" will be set to 0. Element: ",Pe),Pe.style[Ne]=0)};X(a,b,K,"top"),X(a,b,K,"right"),X(a,b,K,"bottom"),X(a,b,K,"left")}})();var C=d(b).container;C||(C=L());var R,O,B,G,Y=h.width,H=h.height,te=p(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),ue=p(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(["left: "+(R=(R=-(1+Y))?R+"px":"0"),"top: "+(O=(O=-(1+H))?O+"px":"0"),"right: "+(G=(G=-Y)?G+"px":"0"),"bottom: "+(B=(B=-H)?B+"px":"0")])),_e=p(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),J=p(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),re=p(["position: absolute","left: 0","top: 0"]),pe=p(["position: absolute","width: 200%","height: 200%"]),we=document.createElement("div"),me=document.createElement("div"),ye=document.createElement("div"),$e=document.createElement("div"),Fe=document.createElement("div"),Je=document.createElement("div");we.dir="ltr",we.style.cssText=te,we.className=s,me.className=s,me.style.cssText=ue,ye.style.cssText=_e,$e.style.cssText=re,Fe.style.cssText=J,Je.style.cssText=pe,ye.appendChild($e),Fe.appendChild(Je),me.appendChild(ye),me.appendChild(Fe),we.appendChild(me),C.appendChild(we),v(ye,"scroll",ct),v(Fe,"scroll",mt),d(b).onExpandScroll=ct,d(b).onShrinkScroll=mt}else A("Aborting because element has been uninstalled");function ct(){var K=d(b);K&&K.onExpand?K.onExpand():A("Aborting expand scroll handler: element has been uninstalled")}function mt(){var K=d(b);K&&K.onShrink?K.onShrink():A("Aborting shrink scroll handler: element has been uninstalled")}}function q(){function C(H,te,ue){var _e=function(pe){return m(pe).childNodes[0]}(H),J=x(te),re=M(ue);_e.style.setProperty("width",J+"px",_.important?"important":""),_e.style.setProperty("height",re+"px",_.important?"important":"")}function R(H){var te=b.offsetWidth,ue=b.offsetHeight,_e=te!==d(b).lastWidth||ue!==d(b).lastHeight;A("Storing current size",te,ue),T(b,te,ue),l.add(0,function(){if(_e)if(d(b))if(O()){if(_.debug){var J=b.offsetWidth,re=b.offsetHeight;J===te&&re===ue||a.warn(c.get(b),"Scroll: Size changed before updating detector elements.")}C(b,te,ue)}else A("Aborting because element container has not been initialized");else A("Aborting because element has been uninstalled")}),l.add(1,function(){d(b)?O()?P(b,te,ue):A("Aborting because element container has not been initialized"):A("Aborting because element has been uninstalled")}),_e&&H&&l.add(2,function(){d(b)?O()?H():A("Aborting because element container has not been initialized"):A("Aborting because element has been uninstalled")})}function O(){return!!d(b).container}function B(){A("notifyListenersIfNeeded invoked");var H=d(b);return d(b).lastNotifiedWidth===void 0&&H.lastWidth===H.startSize.width&&H.lastHeight===H.startSize.height?A("Not notifying: Size is the same as the start size, and there has been no notification yet."):H.lastWidth===H.lastNotifiedWidth&&H.lastHeight===H.lastNotifiedHeight?A("Not notifying: Size already notified"):(A("Current size not notified, notifying..."),H.lastNotifiedWidth=H.lastWidth,H.lastNotifiedHeight=H.lastHeight,void r(d(b).listeners,function(te){te(b)}))}function G(){A("Scroll detected."),E(b)?A("Scroll event fired while unrendered. Ignoring..."):R(B)}if(A("registerListenersAndPositionElements invoked."),d(b)){d(b).onRendered=function(){if(A("startanimation triggered."),E(b))A("Ignoring since element is still unrendered...");else{A("Element rendered.");var H=m(b),te=y(b);H.scrollLeft!==0&&H.scrollTop!==0&&te.scrollLeft!==0&&te.scrollTop!==0||(A("Scrollbars out of sync. Updating detector elements..."),R(B))}},d(b).onExpand=G,d(b).onShrink=G;var Y=d(b).style;C(b,Y.width,Y.height)}else A("Aborting because element has been uninstalled")}function j(){if(A("finalizeDomMutation invoked."),d(b)){var C=d(b).style;T(b,C.width,C.height),P(b,C.width,C.height)}else A("Aborting because element has been uninstalled")}function W(){w(b)}function D(){var C;A("Installing..."),d(b).listeners=[],C=I(),d(b).startSize={width:C.width,height:C.height},A("Element start size",d(b).startSize),l.add(0,S),l.add(1,F),l.add(2,q),l.add(3,j),l.add(4,W)}w||(w=b,b=_,_=null),_=_||{},A("Making detectable..."),function(C){return!function(R){var O=R.getRootNode&&R.getRootNode().contains(R);return R===R.ownerDocument.body||R.ownerDocument.body.contains(R)||O}(C)||window.getComputedStyle(C)===null}(b)?(A("Element is detached"),L(),A("Waiting until element is attached..."),d(b).onRendered=function(){A("Element is now attached"),D()}):D()},addListener:function(_,b){if(!d(_).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");d(_).listeners.push(b)},uninstall:function(_){var b=d(_);b&&(b.onExpandScroll&&g(m(_),"scroll",b.onExpandScroll),b.onShrinkScroll&&g(y(_),"scroll",b.onShrinkScroll),b.onAnimationStart&&g(b.container,"animationstart",b.onAnimationStart),b.container&&_.removeChild(b.container))},initDocument:f}}},{"../collection-utils":4}],7:[function(e,i,n){var r=e("./collection-utils").forEach,o=e("./element-utils"),a=e("./listener-handler"),l=e("./id-generator"),d=e("./id-handler"),c=e("./reporter"),h=e("./browser-detector"),s=e("batch-processor"),f=e("./state-handler"),p=e("./detection-strategy/object.js"),v=e("./detection-strategy/scroll.js");function g(b){return Array.isArray(b)||b.length!==void 0}function m(b){if(Array.isArray(b))return b;var w=[];return r(b,function(A){w.push(A)}),w}function y(b){return b&&b.nodeType===1}function _(b,w,A){var E=b[w];return E==null&&A!==void 0?A:E}i.exports=function(b){var w;if((b=b||{}).idHandler)w={get:function(q){return b.idHandler.get(q,!0)},set:b.idHandler.set};else{var A=l(),E=d({idGenerator:A,stateHandler:f});w=E}var I=b.reporter;I||(I=c(I===!1));var S=_(b,"batchProcessor",s({reporter:I})),T={};T.callOnAdd=!!_(b,"callOnAdd",!0),T.debug=!!_(b,"debug",!1);var U,N=a(w),x=o({stateHandler:f}),M=_(b,"strategy","object"),P=_(b,"important",!1),L={reporter:I,batchProcessor:S,stateHandler:f,idHandler:w,important:P};if(M==="scroll"&&(h.isLegacyOpera()?(I.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),M="object"):h.isIE(9)&&(I.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),M="object")),M==="scroll")U=v(L);else{if(M!=="object")throw new Error("Invalid strategy name: "+M);U=p(L)}var F={};return{listenTo:function(q,j,W){function D(Y){var H=N.get(Y);r(H,function(te){te(Y)})}function C(Y,H,te){N.add(H,te),Y&&te(H)}if(W||(W=j,j=q,q={}),!j)throw new Error("At least one element required.");if(!W)throw new Error("Listener required.");if(y(j))j=[j];else{if(!g(j))return I.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");j=m(j)}var R=0,O=_(q,"callOnAdd",T.callOnAdd),B=_(q,"onReady",function(){}),G=_(q,"debug",T.debug);r(j,function(Y){f.getState(Y)||(f.initState(Y),w.set(Y));var H=w.get(Y);if(G&&I.log("Attaching listener to element",H,Y),!x.isDetectable(Y))return G&&I.log(H,"Not detectable."),x.isBusy(Y)?(G&&I.log(H,"System busy making it detectable"),C(O,Y,W),F[H]=F[H]||[],void F[H].push(function(){++R===j.length&&B()})):(G&&I.log(H,"Making detectable..."),x.markBusy(Y,!0),U.makeDetectable({debug:G,important:P},Y,function(te){if(G&&I.log(H,"onElementDetectable"),f.getState(te)){x.markAsDetectable(te),x.markBusy(te,!1),U.addListener(te,D),C(O,te,W);var ue=f.getState(te);if(ue&&ue.startSize){var _e=te.offsetWidth,J=te.offsetHeight;ue.startSize.width===_e&&ue.startSize.height===J||D(te)}F[H]&&r(F[H],function(re){re()})}else G&&I.log(H,"Element uninstalled before being detectable.");delete F[H],++R===j.length&&B()}));G&&I.log(H,"Already detecable, adding listener."),C(O,Y,W),R++}),R===j.length&&B()},removeListener:N.removeListener,removeAllListeners:N.removeAllListeners,uninstall:function(q){if(!q)return I.error("At least one element is required.");if(y(q))q=[q];else{if(!g(q))return I.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");q=m(q)}r(q,function(j){N.removeAllListeners(j),U.uninstall(j),f.cleanState(j)})},initDocument:function(q){U.initDocument&&U.initDocument(q)}}}},{"./browser-detector":3,"./collection-utils":4,"./detection-strategy/object.js":5,"./detection-strategy/scroll.js":6,"./element-utils":8,"./id-generator":9,"./id-handler":10,"./listener-handler":11,"./reporter":12,"./state-handler":13,"batch-processor":1}],8:[function(e,i,n){i.exports=function(r){var o=r.stateHandler.getState;return{isDetectable:function(a){var l=o(a);return l&&!!l.isDetectable},markAsDetectable:function(a){o(a).isDetectable=!0},isBusy:function(a){return!!o(a).busy},markBusy:function(a,l){o(a).busy=!!l}}}},{}],9:[function(e,i,n){i.exports=function(){var r=1;return{generate:function(){return r++}}}},{}],10:[function(e,i,n){i.exports=function(r){var o=r.idGenerator,a=r.stateHandler.getState;return{get:function(l){var d=a(l);return d&&d.id!==void 0?d.id:null},set:function(l){var d=a(l);if(!d)throw new Error("setId required the element to have a resize detection state.");var c=o.generate();return d.id=c,c}}}},{}],11:[function(e,i,n){i.exports=function(r){var o={};function a(l){var d=r.get(l);return d===void 0?[]:o[d]||[]}return{get:a,add:function(l,d){var c=r.get(l);o[c]||(o[c]=[]),o[c].push(d)},removeListener:function(l,d){for(var c=a(l),h=0,s=c.length;h<s;++h)if(c[h]===d){c.splice(h,1);break}},removeAllListeners:function(l){var d=a(l);d&&(d.length=0)}}}},{}],12:[function(e,i,n){i.exports=function(r){function o(){}var a={log:o,warn:o,error:o};if(!r&&window.console){var l=function(d,c){d[c]=function(){var h=console[c];if(h.apply)h.apply(console,arguments);else for(var s=0;s<arguments.length;s++)h(arguments[s])}};l(a,"log"),l(a,"warn"),l(a,"error")}return a}},{}],13:[function(e,i,n){function r(o){return o._erd}i.exports={initState:function(o){return o._erd={},r(o)},getState:r,cleanState:function(o){delete o._erd}}},{}],14:[function(e,i,n){var r,o;r=window,o=function(){return function(a){var l={};function d(c){if(l[c])return l[c].exports;var h=l[c]={i:c,l:!1,exports:{}};return a[c].call(h.exports,h,h.exports,d),h.l=!0,h.exports}return d.m=a,d.c=l,d.d=function(c,h,s){d.o(c,h)||Object.defineProperty(c,h,{enumerable:!0,get:s})},d.r=function(c){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},d.t=function(c,h){if(1&h&&(c=d(c)),8&h||4&h&&typeof c=="object"&&c&&c.__esModule)return c;var s=Object.create(null);if(d.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:c}),2&h&&typeof c!="string")for(var f in c)d.d(s,f,function(p){return c[p]}.bind(null,f));return s},d.n=function(c){var h=c&&c.__esModule?function(){return c.default}:function(){return c};return d.d(h,"a",h),h},d.o=function(c,h){return Object.prototype.hasOwnProperty.call(c,h)},d.p="",d(d.s=0)}([function(a,l,d){d.r(l);var c,h=function(D,C){var R=C.x-D.x,O=C.y-D.y;return Math.sqrt(R*R+O*O)},s=function(D){return D*(Math.PI/180)},f=new Map,p=function(D){f.has(D)&&clearTimeout(f.get(D)),f.set(D,setTimeout(D,100))},v=function(D,C,R){for(var O,B=C.split(/[ ,]+/g),G=0;G<B.length;G+=1)O=B[G],D.addEventListener?D.addEventListener(O,R,!1):D.attachEvent&&D.attachEvent(O,R)},g=function(D,C,R){for(var O,B=C.split(/[ ,]+/g),G=0;G<B.length;G+=1)O=B[G],D.removeEventListener?D.removeEventListener(O,R):D.detachEvent&&D.detachEvent(O,R)},m=function(D){return D.preventDefault(),D.type.match(/^touch/)?D.changedTouches:D},y=function(){return{x:window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},_=function(D,C){C.top||C.right||C.bottom||C.left?(D.style.top=C.top,D.style.right=C.right,D.style.bottom=C.bottom,D.style.left=C.left):(D.style.left=C.x+"px",D.style.top=C.y+"px")},b=function(D,C,R){var O=w(D);for(var B in O)if(O.hasOwnProperty(B))if(typeof C=="string")O[B]=C+" "+R;else{for(var G="",Y=0,H=C.length;Y<H;Y+=1)G+=C[Y]+" "+R+", ";O[B]=G.slice(0,-2)}return O},w=function(D){var C={};return C[D]="",["webkit","Moz","o"].forEach(function(R){C[R+D.charAt(0).toUpperCase()+D.slice(1)]=""}),C},A=function(D,C){for(var R in C)C.hasOwnProperty(R)&&(D[R]=C[R]);return D},E=function(D,C){if(D.length)for(var R=0,O=D.length;R<O;R+=1)C(D[R]);else C(D)},I="ontouchstart"in window,S=!!window.PointerEvent,T=!!window.MSPointerEvent,U={start:"mousedown",move:"mousemove",end:"mouseup"},N={};function x(){}S?c={start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"}:T?c={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:I?(c={start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},N=U):c=U,x.prototype.on=function(D,C){var R,O=D.split(/[ ,]+/g);this._handlers_=this._handlers_||{};for(var B=0;B<O.length;B+=1)R=O[B],this._handlers_[R]=this._handlers_[R]||[],this._handlers_[R].push(C);return this},x.prototype.off=function(D,C){return this._handlers_=this._handlers_||{},D===void 0?this._handlers_={}:C===void 0?this._handlers_[D]=null:this._handlers_[D]&&this._handlers_[D].indexOf(C)>=0&&this._handlers_[D].splice(this._handlers_[D].indexOf(C),1),this},x.prototype.trigger=function(D,C){var R,O=this,B=D.split(/[ ,]+/g);O._handlers_=O._handlers_||{};for(var G=0;G<B.length;G+=1)R=B[G],O._handlers_[R]&&O._handlers_[R].length&&O._handlers_[R].forEach(function(Y){Y.call(O,{type:R,target:O},C)})},x.prototype.config=function(D){this.options=this.defaults||{},D&&(this.options=function(C,R){var O={};for(var B in C)C.hasOwnProperty(B)&&R.hasOwnProperty(B)?O[B]=R[B]:C.hasOwnProperty(B)&&(O[B]=C[B]);return O}(this.options,D))},x.prototype.bindEvt=function(D,C){var R=this;return R._domHandlers_=R._domHandlers_||{},R._domHandlers_[C]=function(){typeof R["on"+C]=="function"?R["on"+C].apply(R,arguments):console.warn('[WARNING] : Missing "on'+C+'" handler.')},v(D,c[C],R._domHandlers_[C]),N[C]&&v(D,N[C],R._domHandlers_[C]),R},x.prototype.unbindEvt=function(D,C){return this._domHandlers_=this._domHandlers_||{},g(D,c[C],this._domHandlers_[C]),N[C]&&g(D,N[C],this._domHandlers_[C]),delete this._domHandlers_[C],this};var M=x;function P(D,C){return this.identifier=C.identifier,this.position=C.position,this.frontPosition=C.frontPosition,this.collection=D,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(C),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=P.id,P.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}P.prototype=new M,P.constructor=P,P.id=0,P.prototype.buildEl=function(D){return this.ui={},this.options.dataOnly||(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front)),this},P.prototype.stylize=function(){if(this.options.dataOnly)return this;var D=this.options.fadeTime+"ms",C=function(B,G){var Y=w("borderRadius");for(var H in Y)Y.hasOwnProperty(H)&&(Y[H]="50%");return Y}(),R=b("transition","opacity",D),O={};return O.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},O.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},O.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5"},A(O.el,R),this.options.shape==="circle"&&A(O.back,C),A(O.front,C),this.applyStyles(O),this},P.prototype.applyStyles=function(D){for(var C in this.ui)if(this.ui.hasOwnProperty(C))for(var R in D[C])this.ui[C].style[R]=D[C][R];return this},P.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)||this.options.zone.appendChild(this.ui.el),this},P.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)||this.options.zone.removeChild(this.ui.el),this},P.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},P.prototype.show=function(D){var C=this;return C.options.dataOnly||(clearTimeout(C.removeTimeout),clearTimeout(C.showTimeout),clearTimeout(C.restTimeout),C.addToDom(),C.restCallback(),setTimeout(function(){C.ui.el.style.opacity=1},0),C.showTimeout=setTimeout(function(){C.trigger("shown",C.instance),typeof D=="function"&&D.call(this)},C.options.fadeTime)),C},P.prototype.hide=function(D){var C=this;if(C.options.dataOnly)return C;if(C.ui.el.style.opacity=C.options.restOpacity,clearTimeout(C.removeTimeout),clearTimeout(C.showTimeout),clearTimeout(C.restTimeout),C.removeTimeout=setTimeout(function(){var B=C.options.mode==="dynamic"?"none":"block";C.ui.el.style.display=B,typeof D=="function"&&D.call(C),C.trigger("hidden",C.instance)},C.options.fadeTime),C.options.restJoystick){var R=C.options.restJoystick,O={};O.x=R===!0||R.x!==!1?0:C.instance.frontPosition.x,O.y=R===!0||R.y!==!1?0:C.instance.frontPosition.y,C.setPosition(D,O)}return C},P.prototype.setPosition=function(D,C){var R=this;R.frontPosition={x:C.x,y:C.y};var O=R.options.fadeTime+"ms",B={};B.front=b("transition",["top","left"],O);var G={front:{}};G.front={left:R.frontPosition.x+"px",top:R.frontPosition.y+"px"},R.applyStyles(B),R.applyStyles(G),R.restTimeout=setTimeout(function(){typeof D=="function"&&D.call(R),R.restCallback()},R.options.fadeTime)},P.prototype.restCallback=function(){var D={};D.front=b("transition","none",""),this.applyStyles(D),this.trigger("rested",this.instance)},P.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},P.prototype.computeDirection=function(D){var C,R,O,B=D.angle.radian,G=Math.PI/4,Y=Math.PI/2;if(B>G&&B<3*G&&!D.lockX?C="up":B>-G&&B<=G&&!D.lockY?C="left":B>3*-G&&B<=-G&&!D.lockX?C="down":D.lockY||(C="right"),D.lockY||(R=B>-Y&&B<Y?"left":"right"),D.lockX||(O=B>0?"up":"down"),D.force>this.options.threshold){var H,te={};for(H in this.direction)this.direction.hasOwnProperty(H)&&(te[H]=this.direction[H]);var ue={};for(H in this.direction={x:R,y:O,angle:C},D.direction=this.direction,te)te[H]===this.direction[H]&&(ue[H]=!0);if(ue.x&&ue.y&&ue.angle)return D;ue.x&&ue.y||this.trigger("plain",D),ue.x||this.trigger("plain:"+R,D),ue.y||this.trigger("plain:"+O,D),ue.angle||this.trigger("dir dir:"+C,D)}else this.resetDirection();return D};var L=P;function F(D,C){this.nipples=[],this.idles=[],this.actives=[],this.ids=[],this.pressureIntervals={},this.manager=D,this.id=F.id,F.id+=1,this.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},this.config(C),this.options.mode!=="static"&&this.options.mode!=="semi"||(this.options.multitouch=!1),this.options.multitouch||(this.options.maxNumberOfNipples=1);var R=getComputedStyle(this.options.zone.parentElement);return R&&R.display==="flex"&&(this.parentIsFlex=!0),this.updateBox(),this.prepareNipples(),this.bindings(),this.begin(),this.nipples}F.prototype=new M,F.constructor=F,F.id=0,F.prototype.prepareNipples=function(){var D=this.nipples;D.on=this.on.bind(this),D.off=this.off.bind(this),D.options=this.options,D.destroy=this.destroy.bind(this),D.ids=this.ids,D.id=this.id,D.processOnMove=this.processOnMove.bind(this),D.processOnEnd=this.processOnEnd.bind(this),D.get=function(C){if(C===void 0)return D[0];for(var R=0,O=D.length;R<O;R+=1)if(D[R].identifier===C)return D[R];return!1}},F.prototype.bindings=function(){this.bindEvt(this.options.zone,"start"),this.options.zone.style.touchAction="none",this.options.zone.style.msTouchAction="none"},F.prototype.begin=function(){var D=this.options;if(D.mode==="static"){var C=this.createNipple(D.position,this.manager.getIdentifier());C.add(),this.idles.push(C)}},F.prototype.createNipple=function(D,C){var R=this.manager.scroll,O={},B=this.options,G=this.parentIsFlex?R.x:R.x+this.box.left,Y=this.parentIsFlex?R.y:R.y+this.box.top;if(D.x&&D.y)O={x:D.x-G,y:D.y-Y};else if(D.top||D.right||D.bottom||D.left){var H=document.createElement("DIV");H.style.display="hidden",H.style.top=D.top,H.style.right=D.right,H.style.bottom=D.bottom,H.style.left=D.left,H.style.position="absolute",B.zone.appendChild(H);var te=H.getBoundingClientRect();B.zone.removeChild(H),O=D,D={x:te.left+R.x,y:te.top+R.y}}var ue=new L(this,{color:B.color,size:B.size,threshold:B.threshold,fadeTime:B.fadeTime,dataOnly:B.dataOnly,restJoystick:B.restJoystick,restOpacity:B.restOpacity,mode:B.mode,identifier:C,position:D,zone:B.zone,frontPosition:{x:0,y:0},shape:B.shape});return B.dataOnly||(_(ue.ui.el,O),_(ue.ui.front,ue.frontPosition)),this.nipples.push(ue),this.trigger("added "+ue.identifier+":added",ue),this.manager.trigger("added "+ue.identifier+":added",ue),this.bindNipple(ue),ue},F.prototype.updateBox=function(){this.box=this.options.zone.getBoundingClientRect()},F.prototype.bindNipple=function(D){var C,R=this,O=function(B,G){C=B.type+" "+G.id+":"+B.type,R.trigger(C,G)};D.on("destroyed",R.onDestroyed.bind(R)),D.on("shown hidden rested dir plain",O),D.on("dir:up dir:right dir:down dir:left",O),D.on("plain:up plain:right plain:down plain:left",O)},F.prototype.pressureFn=function(D,C,R){var O=this,B=0;clearInterval(O.pressureIntervals[R]),O.pressureIntervals[R]=setInterval(function(){var G=D.force||D.pressure||D.webkitForce||0;G!==B&&(C.trigger("pressure",G),O.trigger("pressure "+C.identifier+":pressure",G),B=G)}.bind(O),100)},F.prototype.onstart=function(D){var C=this,R=C.options,O=D;return D=m(D),C.updateBox(),E(D,function(B){C.actives.length<R.maxNumberOfNipples?C.processOnStart(B):O.type.match(/^touch/)&&(Object.keys(C.manager.ids).forEach(function(G){if(Object.values(O.touches).findIndex(function(H){return H.identifier===G})<0){var Y=[D[0]];Y.identifier=G,C.processOnEnd(Y)}}),C.actives.length<R.maxNumberOfNipples&&C.processOnStart(B))}),C.manager.bindDocument(),!1},F.prototype.processOnStart=function(D){var C,R=this,O=R.options,B=R.manager.getIdentifier(D),G=D.force||D.pressure||D.webkitForce||0,Y={x:D.pageX,y:D.pageY},H=R.getOrCreate(B,Y);H.identifier!==B&&R.manager.removeIdentifier(H.identifier),H.identifier=B;var te=function(ue){ue.trigger("start",ue),R.trigger("start "+ue.id+":start",ue),ue.show(),G>0&&R.pressureFn(D,ue,ue.identifier),R.processOnMove(D)};if((C=R.idles.indexOf(H))>=0&&R.idles.splice(C,1),R.actives.push(H),R.ids.push(H.identifier),O.mode!=="semi")te(H);else{if(!(h(Y,H.position)<=O.catchDistance))return H.destroy(),void R.processOnStart(D);te(H)}return H},F.prototype.getOrCreate=function(D,C){var R,O=this.options;return/(semi|static)/.test(O.mode)?(R=this.idles[0])?(this.idles.splice(0,1),R):O.mode==="semi"?this.createNipple(C,D):(console.warn("Coudln't find the needed nipple."),!1):R=this.createNipple(C,D)},F.prototype.processOnMove=function(D){var C=this.options,R=this.manager.getIdentifier(D),O=this.nipples.get(R),B=this.manager.scroll;if(function(ze){return isNaN(ze.buttons)?ze.pressure!==0:ze.buttons!==0}(D)){if(!O)return console.error("Found zombie joystick with ID "+R),void this.manager.removeIdentifier(R);if(C.dynamicPage){var G=O.el.getBoundingClientRect();O.position={x:B.x+G.left,y:B.y+G.top}}O.identifier=R;var Y=O.options.size/2,H={x:D.pageX,y:D.pageY};C.lockX&&(H.y=O.position.y),C.lockY&&(H.x=O.position.x);var te,ue,_e,J,re,pe,we,me,ye,$e,Fe=h(H,O.position),Je=(te=H,_e=(ue=O.position).x-te.x,J=ue.y-te.y,function(ze){return ze*(180/Math.PI)}(Math.atan2(J,_e))),ct=s(Je),mt=Fe/Y,K={distance:Fe,position:H};if(O.options.shape==="circle"?(re=Math.min(Fe,Y),we=O.position,me=re,$e={x:0,y:0},ye=s(ye=Je),$e.x=we.x-me*Math.cos(ye),$e.y=we.y-me*Math.sin(ye),pe=$e):(pe=function(ze,De,ve){return{x:Math.min(Math.max(ze.x,De.x-ve),De.x+ve),y:Math.min(Math.max(ze.y,De.y-ve),De.y+ve)}}(H,O.position,Y),re=h(pe,O.position)),C.follow){if(Fe>Y){var X=H.x-pe.x,fe=H.y-pe.y;O.position.x+=X,O.position.y+=fe,O.el.style.top=O.position.y-(this.box.top+B.y)+"px",O.el.style.left=O.position.x-(this.box.left+B.x)+"px",Fe=h(H,O.position)}}else H=pe,Fe=re;var Pe=H.x-O.position.x,Le=H.y-O.position.y;O.frontPosition={x:Pe,y:Le},C.dataOnly||_(O.ui.front,O.frontPosition);var Ne={identifier:O.identifier,position:H,force:mt,pressure:D.force||D.pressure||D.webkitForce||0,distance:Fe,angle:{radian:ct,degree:Je},vector:{x:Pe/Y,y:-Le/Y},raw:K,instance:O,lockX:C.lockX,lockY:C.lockY};(Ne=O.computeDirection(Ne)).angle={radian:s(180-Je),degree:180-Je},O.trigger("move",Ne),this.trigger("move "+O.id+":move",Ne)}else this.processOnEnd(D)},F.prototype.processOnEnd=function(D){var C=this,R=C.options,O=C.manager.getIdentifier(D),B=C.nipples.get(O),G=C.manager.removeIdentifier(B.identifier);B&&(R.dataOnly||B.hide(function(){R.mode==="dynamic"&&(B.trigger("removed",B),C.trigger("removed "+B.id+":removed",B),C.manager.trigger("removed "+B.id+":removed",B),B.destroy())}),clearInterval(C.pressureIntervals[B.identifier]),B.resetDirection(),B.trigger("end",B),C.trigger("end "+B.id+":end",B),C.ids.indexOf(B.identifier)>=0&&C.ids.splice(C.ids.indexOf(B.identifier),1),C.actives.indexOf(B)>=0&&C.actives.splice(C.actives.indexOf(B),1),/(semi|static)/.test(R.mode)?C.idles.push(B):C.nipples.indexOf(B)>=0&&C.nipples.splice(C.nipples.indexOf(B),1),C.manager.unbindDocument(),/(semi|static)/.test(R.mode)&&(C.manager.ids[G.id]=G.identifier))},F.prototype.onDestroyed=function(D,C){this.nipples.indexOf(C)>=0&&this.nipples.splice(this.nipples.indexOf(C),1),this.actives.indexOf(C)>=0&&this.actives.splice(this.actives.indexOf(C),1),this.idles.indexOf(C)>=0&&this.idles.splice(this.idles.indexOf(C),1),this.ids.indexOf(C.identifier)>=0&&this.ids.splice(this.ids.indexOf(C.identifier),1),this.manager.removeIdentifier(C.identifier),this.manager.unbindDocument()},F.prototype.destroy=function(){for(var D in this.unbindEvt(this.options.zone,"start"),this.nipples.forEach(function(C){C.destroy()}),this.pressureIntervals)this.pressureIntervals.hasOwnProperty(D)&&clearInterval(this.pressureIntervals[D]);this.trigger("destroyed",this.nipples),this.manager.unbindDocument(),this.off()};var q=F;function j(D){var C=this;C.ids={},C.index=0,C.collections=[],C.scroll=y(),C.config(D),C.prepareCollections();var R=function(){var B;C.collections.forEach(function(G){G.forEach(function(Y){B=Y.el.getBoundingClientRect(),Y.position={x:C.scroll.x+B.left,y:C.scroll.y+B.top}})})};v(window,"resize",function(){p(R)});var O=function(){C.scroll=y()};return v(window,"scroll",function(){p(O)}),C.collections}j.prototype=new M,j.constructor=j,j.prototype.prepareCollections=function(){var D=this;D.collections.create=D.create.bind(D),D.collections.on=D.on.bind(D),D.collections.off=D.off.bind(D),D.collections.destroy=D.destroy.bind(D),D.collections.get=function(C){var R;return D.collections.every(function(O){return!(R=O.get(C))}),R}},j.prototype.create=function(D){return this.createCollection(D)},j.prototype.createCollection=function(D){var C=new q(this,D);return this.bindCollection(C),this.collections.push(C),C},j.prototype.bindCollection=function(D){var C,R=this,O=function(B,G){C=B.type+" "+G.id+":"+B.type,R.trigger(C,G)};D.on("destroyed",R.onDestroyed.bind(R)),D.on("shown hidden rested dir plain",O),D.on("dir:up dir:right dir:down dir:left",O),D.on("plain:up plain:right plain:down plain:left",O)},j.prototype.bindDocument=function(){this.binded||(this.bindEvt(document,"move").bindEvt(document,"end"),this.binded=!0)},j.prototype.unbindDocument=function(D){Object.keys(this.ids).length&&D!==!0||(this.unbindEvt(document,"move").unbindEvt(document,"end"),this.binded=!1)},j.prototype.getIdentifier=function(D){var C;return D?(C=D.identifier===void 0?D.pointerId:D.identifier)===void 0&&(C=this.latest||0):C=this.index,this.ids[C]===void 0&&(this.ids[C]=this.index,this.index+=1),this.latest=C,this.ids[C]},j.prototype.removeIdentifier=function(D){var C={};for(var R in this.ids)if(this.ids[R]===D){C.id=R,C.identifier=this.ids[R],delete this.ids[R];break}return C},j.prototype.onmove=function(D){return this.onAny("move",D),!1},j.prototype.onend=function(D){return this.onAny("end",D),!1},j.prototype.oncancel=function(D){return this.onAny("end",D),!1},j.prototype.onAny=function(D,C){var R,O=this,B="processOn"+D.charAt(0).toUpperCase()+D.slice(1);return C=m(C),E(C,function(G){R=O.getIdentifier(G),E(O.collections,function(Y,H,te){te.ids.indexOf(H)>=0&&(te[B](Y),Y._found_=!0)}.bind(null,G,R)),G._found_||O.removeIdentifier(R)}),!1},j.prototype.destroy=function(){this.unbindDocument(!0),this.ids={},this.index=0,this.collections.forEach(function(D){D.destroy()}),this.off()},j.prototype.onDestroyed=function(D,C){if(this.collections.indexOf(C)<0)return!1;this.collections.splice(this.collections.indexOf(C),1)};var W=new j;l.default={create:function(D){return W.create(D)},factory:W}}]).default},typeof n=="object"&&typeof i=="object"?i.exports=o():typeof n=="object"?n.nipplejs=o():r.nipplejs=o()},{}],15:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0});/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */var r,o=function(){return o=Object.assign||function(f){for(var p,v=1,g=arguments.length;v<g;v++)for(var m in p=arguments[v])Object.prototype.hasOwnProperty.call(p,m)&&(f[m]=p[m]);return f},o.apply(this,arguments)},a=function(){function f(p){this.options=p,this.listeners={}}return f.prototype.on=function(p,v){var g=this.listeners[p]||[];this.listeners[p]=g.concat([v])},f.prototype.triggerEvent=function(p,v){var g=this;(this.listeners[p]||[]).forEach(function(m){return m({target:g,event:v})})},f}();(r=n.NotyfArrayEvent||(n.NotyfArrayEvent={}))[r.Add=0]="Add",r[r.Remove=1]="Remove";var l,d=function(){function f(){this.notifications=[]}return f.prototype.push=function(p){this.notifications.push(p),this.updateFn(p,n.NotyfArrayEvent.Add,this.notifications)},f.prototype.splice=function(p,v){var g=this.notifications.splice(p,v)[0];return this.updateFn(g,n.NotyfArrayEvent.Remove,this.notifications),g},f.prototype.indexOf=function(p){return this.notifications.indexOf(p)},f.prototype.onUpdate=function(p){this.updateFn=p},f}();(l=n.NotyfEvent||(n.NotyfEvent={})).Dismiss="dismiss",l.Click="click";var c={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},h=function(){function f(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var p=document.createDocumentFragment(),v=this._createHTMLElement({tagName:"div",className:"notyf"});p.appendChild(v),document.body.appendChild(p),this.container=v,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return f.prototype.on=function(p,v){var g;this.events=o(o({},this.events),((g={})[p]=v,g))},f.prototype.update=function(p,v){v===n.NotyfArrayEvent.Add?this.addNotification(p):v===n.NotyfArrayEvent.Remove&&this.removeNotification(p)},f.prototype.removeNotification=function(p){var v,g,m=this,y=this._popRenderedNotification(p);y&&((v=y.node).classList.add("notyf__toast--disappear"),v.addEventListener(this.animationEndEventName,g=function(_){_.target===v&&(v.removeEventListener(m.animationEndEventName,g),m.container.removeChild(v))}))},f.prototype.addNotification=function(p){var v=this._renderNotification(p);this.notifications.push({notification:p,node:v}),this._announce(p.options.message||"Notification")},f.prototype._renderNotification=function(p){var v,g=this._buildNotificationCard(p),m=p.options.className;return m&&(v=g.classList).add.apply(v,m.split(" ")),this.container.appendChild(g),g},f.prototype._popRenderedNotification=function(p){for(var v=-1,g=0;g<this.notifications.length&&v<0;g++)this.notifications[g].notification===p&&(v=g);if(v!==-1)return this.notifications.splice(v,1)[0]},f.prototype.getXPosition=function(p){var v;return((v=p==null?void 0:p.position)===null||v===void 0?void 0:v.x)||"right"},f.prototype.getYPosition=function(p){var v;return((v=p==null?void 0:p.position)===null||v===void 0?void 0:v.y)||"bottom"},f.prototype.adjustContainerAlignment=function(p){var v=this.X_POSITION_FLEX_MAP[this.getXPosition(p)],g=this.Y_POSITION_FLEX_MAP[this.getYPosition(p)],m=this.container.style;m.setProperty("justify-content",g),m.setProperty("align-items",v)},f.prototype._buildNotificationCard=function(p){var v=this,g=p.options,m=g.icon;this.adjustContainerAlignment(g);var y=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),_=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),b=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),w=this._createHTMLElement({tagName:"div",className:"notyf__message"});w.innerHTML=g.message||"";var A=g.background||g.backgroundColor;if(m){var E=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof m=="string"||m instanceof String)&&(E.innerHTML=new String(m).valueOf()),typeof m=="object"){var I=m.tagName,S=I===void 0?"i":I,T=m.className,U=m.text,N=m.color,x=N===void 0?A:N,M=this._createHTMLElement({tagName:S,className:T,text:U});x&&(M.style.color=x),E.appendChild(M)}b.appendChild(E)}if(b.appendChild(w),y.appendChild(b),A&&(g.ripple?(_.style.background=A,y.appendChild(_)):y.style.background=A),g.dismissible){var P=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),L=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});P.appendChild(L),b.appendChild(P),y.classList.add("notyf__toast--dismissible"),L.addEventListener("click",function(q){var j,W;(W=(j=v.events)[n.NotyfEvent.Dismiss])===null||W===void 0||W.call(j,{target:p,event:q}),q.stopPropagation()})}y.addEventListener("click",function(q){var j,W;return(W=(j=v.events)[n.NotyfEvent.Click])===null||W===void 0?void 0:W.call(j,{target:p,event:q})});var F=this.getYPosition(g)==="top"?"upper":"lower";return y.classList.add("notyf__toast--"+F),y},f.prototype._createHTMLElement=function(p){var v=p.tagName,g=p.className,m=p.text,y=document.createElement(v);return g&&(y.className=g),y.textContent=m||null,y},f.prototype._createA11yContainer=function(){var p=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});p.setAttribute("aria-atomic","true"),p.setAttribute("aria-live","polite"),p.style.border="0",p.style.clip="rect(0 0 0 0)",p.style.height="1px",p.style.margin="-1px",p.style.overflow="hidden",p.style.padding="0",p.style.position="absolute",p.style.width="1px",p.style.outline="0",document.body.appendChild(p),this.a11yContainer=p},f.prototype._announce=function(p){var v=this;this.a11yContainer.textContent="",setTimeout(function(){v.a11yContainer.textContent=p},100)},f.prototype._getAnimationEndEventName=function(){var p,v=document.createElement("_fake"),g={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(p in g)if(v.style[p]!==void 0)return g[p];return"animationend"},f}(),s=function(){function f(p){var v=this;this.dismiss=this._removeNotification,this.notifications=new d,this.view=new h;var g=this.registerTypes(p);this.options=o(o({},c),p),this.options.types=g,this.notifications.onUpdate(function(m,y){return v.view.update(m,y)}),this.view.on(n.NotyfEvent.Dismiss,function(m){var y=m.target,_=m.event;v._removeNotification(y),y.triggerEvent(n.NotyfEvent.Dismiss,_)}),this.view.on(n.NotyfEvent.Click,function(m){var y=m.target,_=m.event;return y.triggerEvent(n.NotyfEvent.Click,_)})}return f.prototype.error=function(p){var v=this.normalizeOptions("error",p);return this.open(v)},f.prototype.success=function(p){var v=this.normalizeOptions("success",p);return this.open(v)},f.prototype.open=function(p){var v=this.options.types.find(function(y){return y.type===p.type})||{},g=o(o({},v),p);this.assignProps(["ripple","position","dismissible"],g);var m=new a(g);return this._pushNotification(m),m},f.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},f.prototype.assignProps=function(p,v){var g=this;p.forEach(function(m){v[m]=v[m]==null?g.options[m]:v[m]})},f.prototype._pushNotification=function(p){var v=this;this.notifications.push(p);var g=p.options.duration!==void 0?p.options.duration:this.options.duration;g&&setTimeout(function(){return v._removeNotification(p)},g)},f.prototype._removeNotification=function(p){var v=this.notifications.indexOf(p);v!==-1&&this.notifications.splice(v,1)},f.prototype.normalizeOptions=function(p,v){var g={type:p};return typeof v=="string"?g.message=v:typeof v=="object"&&(g=o(o({},g),v)),g},f.prototype.registerTypes=function(p){var v=(p&&p.types||[]).slice();return c.types.map(function(g){var m=-1;v.forEach(function(_,b){_.type===g.type&&(m=b)});var y=m!==-1?v.splice(m,1)[0]:{};return o(o({},g),y)}).concat(v)},f}();n.DEFAULT_OPTIONS=c,n.Notyf=s,n.NotyfArray=d,n.NotyfNotification=a,n.NotyfView=h},{}],16:[function(e,i,n){var r;r=function(){return function(){var o={9662:function(c,h,s){var f=s(614),p=s(6330),v=TypeError;c.exports=function(g){if(f(g))return g;throw v(p(g)+" is not a function")}},9483:function(c,h,s){var f=s(4411),p=s(6330),v=TypeError;c.exports=function(g){if(f(g))return g;throw v(p(g)+" is not a constructor")}},6077:function(c,h,s){var f=s(614),p=String,v=TypeError;c.exports=function(g){if(typeof g=="object"||f(g))return g;throw v("Can't set "+p(g)+" as a prototype")}},1223:function(c,h,s){var f=s(5112),p=s(30),v=s(3070).f,g=f("unscopables"),m=Array.prototype;m[g]==null&&v(m,g,{configurable:!0,value:p(null)}),c.exports=function(y){m[g][y]=!0}},1530:function(c,h,s){var f=s(8710).charAt;c.exports=function(p,v,g){return v+(g?f(p,v).length:1)}},9670:function(c,h,s){var f=s(111),p=String,v=TypeError;c.exports=function(g){if(f(g))return g;throw v(p(g)+" is not an object")}},8533:function(c,h,s){var f=s(2092).forEach,p=s(9341)("forEach");c.exports=p?[].forEach:function(v){return f(this,v,arguments.length>1?arguments[1]:void 0)}},8457:function(c,h,s){var f=s(9974),p=s(6916),v=s(7908),g=s(3411),m=s(7659),y=s(4411),_=s(6244),b=s(6135),w=s(8554),A=s(1246),E=Array;c.exports=function(I){var S=v(I),T=y(this),U=arguments.length,N=U>1?arguments[1]:void 0,x=N!==void 0;x&&(N=f(N,U>2?arguments[2]:void 0));var M,P,L,F,q,j,W=A(S),D=0;if(!W||this===E&&m(W))for(M=_(S),P=T?new this(M):E(M);M>D;D++)j=x?N(S[D],D):S[D],b(P,D,j);else for(q=(F=w(S,W)).next,P=T?new this:[];!(L=p(q,F)).done;D++)j=x?g(F,N,[L.value,D],!0):L.value,b(P,D,j);return P.length=D,P}},1318:function(c,h,s){var f=s(5656),p=s(1400),v=s(6244),g=function(m){return function(y,_,b){var w,A=f(y),E=v(A),I=p(b,E);if(m&&_!=_){for(;E>I;)if((w=A[I++])!=w)return!0}else for(;E>I;I++)if((m||I in A)&&A[I]===_)return m||I||0;return!m&&-1}};c.exports={includes:g(!0),indexOf:g(!1)}},2092:function(c,h,s){var f=s(9974),p=s(1702),v=s(8361),g=s(7908),m=s(6244),y=s(5417),_=p([].push),b=function(w){var A=w==1,E=w==2,I=w==3,S=w==4,T=w==6,U=w==7,N=w==5||T;return function(x,M,P,L){for(var F,q,j=g(x),W=v(j),D=f(M,P),C=m(W),R=0,O=L||y,B=A?O(x,C):E||U?O(x,0):void 0;C>R;R++)if((N||R in W)&&(q=D(F=W[R],R,j),w))if(A)B[R]=q;else if(q)switch(w){case 3:return!0;case 5:return F;case 6:return R;case 2:_(B,F)}else switch(w){case 4:return!1;case 7:_(B,F)}return T?-1:I||S?S:B}};c.exports={forEach:b(0),map:b(1),filter:b(2),some:b(3),every:b(4),find:b(5),findIndex:b(6),filterReject:b(7)}},1194:function(c,h,s){var f=s(7293),p=s(5112),v=s(7392),g=p("species");c.exports=function(m){return v>=51||!f(function(){var y=[];return(y.constructor={})[g]=function(){return{foo:1}},y[m](Boolean).foo!==1})}},9341:function(c,h,s){var f=s(7293);c.exports=function(p,v){var g=[][p];return!!g&&f(function(){g.call(null,v||function(){return 1},1)})}},3671:function(c,h,s){var f=s(9662),p=s(7908),v=s(8361),g=s(6244),m=TypeError,y=function(_){return function(b,w,A,E){f(w);var I=p(b),S=v(I),T=g(I),U=_?T-1:0,N=_?-1:1;if(A<2)for(;;){if(U in S){E=S[U],U+=N;break}if(U+=N,_?U<0:T<=U)throw m("Reduce of empty array with no initial value")}for(;_?U>=0:T>U;U+=N)U in S&&(E=w(E,S[U],U,I));return E}};c.exports={left:y(!1),right:y(!0)}},1589:function(c,h,s){var f=s(1400),p=s(6244),v=s(6135),g=Array,m=Math.max;c.exports=function(y,_,b){for(var w=p(y),A=f(_,w),E=f(b===void 0?w:b,w),I=g(m(E-A,0)),S=0;A<E;A++,S++)v(I,S,y[A]);return I.length=S,I}},206:function(c,h,s){var f=s(1702);c.exports=f([].slice)},4362:function(c,h,s){var f=s(1589),p=Math.floor,v=function(y,_){var b=y.length,w=p(b/2);return b<8?g(y,_):m(y,v(f(y,0,w),_),v(f(y,w),_),_)},g=function(y,_){for(var b,w,A=y.length,E=1;E<A;){for(w=E,b=y[E];w&&_(y[w-1],b)>0;)y[w]=y[--w];w!==E++&&(y[w]=b)}return y},m=function(y,_,b,w){for(var A=_.length,E=b.length,I=0,S=0;I<A||S<E;)y[I+S]=I<A&&S<E?w(_[I],b[S])<=0?_[I++]:b[S++]:I<A?_[I++]:b[S++];return y};c.exports=v},7475:function(c,h,s){var f=s(3157),p=s(4411),v=s(111),g=s(5112)("species"),m=Array;c.exports=function(y){var _;return f(y)&&(_=y.constructor,(p(_)&&(_===m||f(_.prototype))||v(_)&&(_=_[g])===null)&&(_=void 0)),_===void 0?m:_}},5417:function(c,h,s){var f=s(7475);c.exports=function(p,v){return new(f(p))(v===0?0:v)}},3411:function(c,h,s){var f=s(9670),p=s(9212);c.exports=function(v,g,m,y){try{return y?g(f(m)[0],m[1]):g(m)}catch(_){p(v,"throw",_)}}},7072:function(c,h,s){var f=s(5112)("iterator"),p=!1;try{var v=0,g={next:function(){return{done:!!v++}},return:function(){p=!0}};g[f]=function(){return this},Array.from(g,function(){throw 2})}catch{}c.exports=function(m,y){if(!y&&!p)return!1;var _=!1;try{var b={};b[f]=function(){return{next:function(){return{done:_=!0}}}},m(b)}catch{}return _}},4326:function(c,h,s){var f=s(1702),p=f({}.toString),v=f("".slice);c.exports=function(g){return v(p(g),8,-1)}},648:function(c,h,s){var f=s(1694),p=s(614),v=s(4326),g=s(5112)("toStringTag"),m=Object,y=v(function(){return arguments}())=="Arguments";c.exports=f?v:function(_){var b,w,A;return _===void 0?"Undefined":_===null?"Null":typeof(w=function(E,I){try{return E[I]}catch{}}(b=m(_),g))=="string"?w:y?v(b):(A=v(b))=="Object"&&p(b.callee)?"Arguments":A}},9920:function(c,h,s){var f=s(2597),p=s(3887),v=s(1236),g=s(3070);c.exports=function(m,y,_){for(var b=p(y),w=g.f,A=v.f,E=0;E<b.length;E++){var I=b[E];f(m,I)||_&&f(_,I)||w(m,I,A(y,I))}}},4964:function(c,h,s){var f=s(5112)("match");c.exports=function(p){var v=/./;try{"/./"[p](v)}catch{try{return v[f]=!1,"/./"[p](v)}catch{}}return!1}},8544:function(c,h,s){var f=s(7293);c.exports=!f(function(){function p(){}return p.prototype.constructor=null,Object.getPrototypeOf(new p)!==p.prototype})},4994:function(c,h,s){var f=s(3383).IteratorPrototype,p=s(30),v=s(9114),g=s(8003),m=s(7497),y=function(){return this};c.exports=function(_,b,w,A){var E=b+" Iterator";return _.prototype=p(f,{next:v(+!A,w)}),g(_,E,!1,!0),m[E]=y,_}},8880:function(c,h,s){var f=s(9781),p=s(3070),v=s(9114);c.exports=f?function(g,m,y){return p.f(g,m,v(1,y))}:function(g,m,y){return g[m]=y,g}},9114:function(c){c.exports=function(h,s){return{enumerable:!(1&h),configurable:!(2&h),writable:!(4&h),value:s}}},6135:function(c,h,s){var f=s(4948),p=s(3070),v=s(9114);c.exports=function(g,m,y){var _=f(m);_ in g?p.f(g,_,v(0,y)):g[_]=y}},8052:function(c,h,s){var f=s(614),p=s(3070),v=s(6339),g=s(3072);c.exports=function(m,y,_,b){b||(b={});var w=b.enumerable,A=b.name!==void 0?b.name:y;if(f(_)&&v(_,A,b),b.global)w?m[y]=_:g(y,_);else{try{b.unsafe?m[y]&&(w=!0):delete m[y]}catch{}w?m[y]=_:p.f(m,y,{value:_,enumerable:!1,configurable:!b.nonConfigurable,writable:!b.nonWritable})}return m}},3072:function(c,h,s){var f=s(7854),p=Object.defineProperty;c.exports=function(v,g){try{p(f,v,{value:g,configurable:!0,writable:!0})}catch{f[v]=g}return g}},654:function(c,h,s){var f=s(2109),p=s(6916),v=s(1913),g=s(6530),m=s(614),y=s(4994),_=s(9518),b=s(7674),w=s(8003),A=s(8880),E=s(8052),I=s(5112),S=s(7497),T=s(3383),U=g.PROPER,N=g.CONFIGURABLE,x=T.IteratorPrototype,M=T.BUGGY_SAFARI_ITERATORS,P=I("iterator"),L="keys",F="values",q="entries",j=function(){return this};c.exports=function(W,D,C,R,O,B,G){y(C,D,R);var Y,H,te,ue=function(ye){if(ye===O&&we)return we;if(!M&&ye in re)return re[ye];switch(ye){case L:case F:case q:return function(){return new C(this,ye)}}return function(){return new C(this)}},_e=D+" Iterator",J=!1,re=W.prototype,pe=re[P]||re["@@iterator"]||O&&re[O],we=!M&&pe||ue(O),me=D=="Array"&&re.entries||pe;if(me&&(Y=_(me.call(new W)))!==Object.prototype&&Y.next&&(v||_(Y)===x||(b?b(Y,x):m(Y[P])||E(Y,P,j)),w(Y,_e,!0,!0),v&&(S[_e]=j)),U&&O==F&&pe&&pe.name!==F&&(!v&&N?A(re,"name",F):(J=!0,we=function(){return p(pe,this)})),O)if(H={values:ue(F),keys:B?we:ue(L),entries:ue(q)},G)for(te in H)(M||J||!(te in re))&&E(re,te,H[te]);else f({target:D,proto:!0,forced:M||J},H);return v&&!G||re[P]===we||E(re,P,we,{name:O}),S[D]=we,H}},7235:function(c,h,s){var f=s(857),p=s(2597),v=s(6061),g=s(3070).f;c.exports=function(m){var y=f.Symbol||(f.Symbol={});p(y,m)||g(y,m,{value:v.f(m)})}},5117:function(c,h,s){var f=s(6330),p=TypeError;c.exports=function(v,g){if(!delete v[g])throw p("Cannot delete property "+f(g)+" of "+f(v))}},9781:function(c,h,s){var f=s(7293);c.exports=!f(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},317:function(c,h,s){var f=s(7854),p=s(111),v=f.document,g=p(v)&&p(v.createElement);c.exports=function(m){return g?v.createElement(m):{}}},7207:function(c){var h=TypeError;c.exports=function(s){if(s>9007199254740991)throw h("Maximum allowed index exceeded");return s}},8324:function(c){c.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(c,h,s){var f=s(317)("span").classList,p=f&&f.constructor&&f.constructor.prototype;c.exports=p===Object.prototype?void 0:p},8886:function(c,h,s){var f=s(8113).match(/firefox\/(\d+)/i);c.exports=!!f&&+f[1]},256:function(c,h,s){var f=s(8113);c.exports=/MSIE|Trident/.test(f)},5268:function(c,h,s){var f=s(4326),p=s(7854);c.exports=f(p.process)=="process"},8113:function(c,h,s){var f=s(5005);c.exports=f("navigator","userAgent")||""},7392:function(c,h,s){var f,p,v=s(7854),g=s(8113),m=v.process,y=v.Deno,_=m&&m.versions||y&&y.version,b=_&&_.v8;b&&(p=(f=b.split("."))[0]>0&&f[0]<4?1:+(f[0]+f[1])),!p&&g&&(!(f=g.match(/Edge\/(\d+)/))||f[1]>=74)&&(f=g.match(/Chrome\/(\d+)/))&&(p=+f[1]),c.exports=p},8008:function(c,h,s){var f=s(8113).match(/AppleWebKit\/(\d+)\./);c.exports=!!f&&+f[1]},748:function(c){c.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(c,h,s){var f=s(7854),p=s(1236).f,v=s(8880),g=s(8052),m=s(3072),y=s(9920),_=s(4705);c.exports=function(b,w){var A,E,I,S,T,U=b.target,N=b.global,x=b.stat;if(A=N?f:x?f[U]||m(U,{}):(f[U]||{}).prototype)for(E in w){if(S=w[E],I=b.dontCallGetSet?(T=p(A,E))&&T.value:A[E],!_(N?E:U+(x?".":"#")+E,b.forced)&&I!==void 0){if(typeof S==typeof I)continue;y(S,I)}(b.sham||I&&I.sham)&&v(S,"sham",!0),g(A,E,S,b)}}},7293:function(c){c.exports=function(h){try{return!!h()}catch{return!0}}},7007:function(c,h,s){s(4916);var f=s(1702),p=s(8052),v=s(2261),g=s(7293),m=s(5112),y=s(8880),_=m("species"),b=RegExp.prototype;c.exports=function(w,A,E,I){var S=m(w),T=!g(function(){var M={};return M[S]=function(){return 7},""[w](M)!=7}),U=T&&!g(function(){var M=!1,P=/a/;return w==="split"&&((P={}).constructor={},P.constructor[_]=function(){return P},P.flags="",P[S]=/./[S]),P.exec=function(){return M=!0,null},P[S](""),!M});if(!T||!U||E){var N=f(/./[S]),x=A(S,""[w],function(M,P,L,F,q){var j=f(M),W=P.exec;return W===v||W===b.exec?T&&!q?{done:!0,value:N(P,L,F)}:{done:!0,value:j(L,P,F)}:{done:!1}});p(String.prototype,w,x[0]),p(b,S,x[1])}I&&y(b[S],"sham",!0)}},2104:function(c,h,s){var f=s(4374),p=Function.prototype,v=p.apply,g=p.call;c.exports=typeof Reflect=="object"&&Reflect.apply||(f?g.bind(v):function(){return g.apply(v,arguments)})},9974:function(c,h,s){var f=s(1702),p=s(9662),v=s(4374),g=f(f.bind);c.exports=function(m,y){return p(m),y===void 0?m:v?g(m,y):function(){return m.apply(y,arguments)}}},4374:function(c,h,s){var f=s(7293);c.exports=!f(function(){var p=function(){}.bind();return typeof p!="function"||p.hasOwnProperty("prototype")})},6916:function(c,h,s){var f=s(4374),p=Function.prototype.call;c.exports=f?p.bind(p):function(){return p.apply(p,arguments)}},6530:function(c,h,s){var f=s(9781),p=s(2597),v=Function.prototype,g=f&&Object.getOwnPropertyDescriptor,m=p(v,"name"),y=m&&function(){}.name==="something",_=m&&(!f||f&&g(v,"name").configurable);c.exports={EXISTS:m,PROPER:y,CONFIGURABLE:_}},1702:function(c,h,s){var f=s(4374),p=Function.prototype,v=p.bind,g=p.call,m=f&&v.bind(g,g);c.exports=f?function(y){return y&&m(y)}:function(y){return y&&function(){return g.apply(y,arguments)}}},5005:function(c,h,s){var f=s(7854),p=s(614),v=function(g){return p(g)?g:void 0};c.exports=function(g,m){return arguments.length<2?v(f[g]):f[g]&&f[g][m]}},1246:function(c,h,s){var f=s(648),p=s(8173),v=s(7497),g=s(5112)("iterator");c.exports=function(m){if(m!=null)return p(m,g)||p(m,"@@iterator")||v[f(m)]}},8554:function(c,h,s){var f=s(6916),p=s(9662),v=s(9670),g=s(6330),m=s(1246),y=TypeError;c.exports=function(_,b){var w=arguments.length<2?m(_):b;if(p(w))return v(f(w,_));throw y(g(_)+" is not iterable")}},8173:function(c,h,s){var f=s(9662);c.exports=function(p,v){var g=p[v];return g==null?void 0:f(g)}},647:function(c,h,s){var f=s(1702),p=s(7908),v=Math.floor,g=f("".charAt),m=f("".replace),y=f("".slice),_=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,b=/\$([$&'`]|\d{1,2})/g;c.exports=function(w,A,E,I,S,T){var U=E+w.length,N=I.length,x=b;return S!==void 0&&(S=p(S),x=_),m(T,x,function(M,P){var L;switch(g(P,0)){case"$":return"$";case"&":return w;case"`":return y(A,0,E);case"'":return y(A,U);case"<":L=S[y(P,1,-1)];break;default:var F=+P;if(F===0)return M;if(F>N){var q=v(F/10);return q===0?M:q<=N?I[q-1]===void 0?g(P,1):I[q-1]+g(P,1):M}L=I[F-1]}return L===void 0?"":L})}},7854:function(c,h,s){var f=function(p){return p&&p.Math==Math&&p};c.exports=f(typeof globalThis=="object"&&globalThis)||f(typeof window=="object"&&window)||f(typeof self=="object"&&self)||f(typeof s.g=="object"&&s.g)||function(){return this}()||Function("return this")()},2597:function(c,h,s){var f=s(1702),p=s(7908),v=f({}.hasOwnProperty);c.exports=Object.hasOwn||function(g,m){return v(p(g),m)}},3501:function(c){c.exports={}},490:function(c,h,s){var f=s(5005);c.exports=f("document","documentElement")},4664:function(c,h,s){var f=s(9781),p=s(7293),v=s(317);c.exports=!f&&!p(function(){return Object.defineProperty(v("div"),"a",{get:function(){return 7}}).a!=7})},8361:function(c,h,s){var f=s(1702),p=s(7293),v=s(4326),g=Object,m=f("".split);c.exports=p(function(){return!g("z").propertyIsEnumerable(0)})?function(y){return v(y)=="String"?m(y,""):g(y)}:g},9587:function(c,h,s){var f=s(614),p=s(111),v=s(7674);c.exports=function(g,m,y){var _,b;return v&&f(_=m.constructor)&&_!==y&&p(b=_.prototype)&&b!==y.prototype&&v(g,b),g}},2788:function(c,h,s){var f=s(1702),p=s(614),v=s(5465),g=f(Function.toString);p(v.inspectSource)||(v.inspectSource=function(m){return g(m)}),c.exports=v.inspectSource},9909:function(c,h,s){var f,p,v,g=s(8536),m=s(7854),y=s(1702),_=s(111),b=s(8880),w=s(2597),A=s(5465),E=s(6200),I=s(3501),S="Object already initialized",T=m.TypeError,U=m.WeakMap;if(g||A.state){var N=A.state||(A.state=new U),x=y(N.get),M=y(N.has),P=y(N.set);f=function(F,q){if(M(N,F))throw new T(S);return q.facade=F,P(N,F,q),q},p=function(F){return x(N,F)||{}},v=function(F){return M(N,F)}}else{var L=E("state");I[L]=!0,f=function(F,q){if(w(F,L))throw new T(S);return q.facade=F,b(F,L,q),q},p=function(F){return w(F,L)?F[L]:{}},v=function(F){return w(F,L)}}c.exports={set:f,get:p,has:v,enforce:function(F){return v(F)?p(F):f(F,{})},getterFor:function(F){return function(q){var j;if(!_(q)||(j=p(q)).type!==F)throw T("Incompatible receiver, "+F+" required");return j}}}},7659:function(c,h,s){var f=s(5112),p=s(7497),v=f("iterator"),g=Array.prototype;c.exports=function(m){return m!==void 0&&(p.Array===m||g[v]===m)}},3157:function(c,h,s){var f=s(4326);c.exports=Array.isArray||function(p){return f(p)=="Array"}},614:function(c){c.exports=function(h){return typeof h=="function"}},4411:function(c,h,s){var f=s(1702),p=s(7293),v=s(614),g=s(648),m=s(5005),y=s(2788),_=function(){},b=[],w=m("Reflect","construct"),A=/^\s*(?:class|function)\b/,E=f(A.exec),I=!A.exec(_),S=function(U){if(!v(U))return!1;try{return w(_,b,U),!0}catch{return!1}},T=function(U){if(!v(U))return!1;switch(g(U)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return I||!!E(A,y(U))}catch{return!0}};T.sham=!0,c.exports=!w||p(function(){var U;return S(S.call)||!S(Object)||!S(function(){U=!0})||U})?T:S},4705:function(c,h,s){var f=s(7293),p=s(614),v=/#|\.prototype\./,g=function(w,A){var E=y[m(w)];return E==b||E!=_&&(p(A)?f(A):!!A)},m=g.normalize=function(w){return String(w).replace(v,".").toLowerCase()},y=g.data={},_=g.NATIVE="N",b=g.POLYFILL="P";c.exports=g},5988:function(c,h,s){var f=s(111),p=Math.floor;c.exports=Number.isInteger||function(v){return!f(v)&&isFinite(v)&&p(v)===v}},111:function(c,h,s){var f=s(614);c.exports=function(p){return typeof p=="object"?p!==null:f(p)}},1913:function(c){c.exports=!1},7850:function(c,h,s){var f=s(111),p=s(4326),v=s(5112)("match");c.exports=function(g){var m;return f(g)&&((m=g[v])!==void 0?!!m:p(g)=="RegExp")}},2190:function(c,h,s){var f=s(5005),p=s(614),v=s(7976),g=s(3307),m=Object;c.exports=g?function(y){return typeof y=="symbol"}:function(y){var _=f("Symbol");return p(_)&&v(_.prototype,m(y))}},9212:function(c,h,s){var f=s(6916),p=s(9670),v=s(8173);c.exports=function(g,m,y){var _,b;p(g);try{if(!(_=v(g,"return"))){if(m==="throw")throw y;return y}_=f(_,g)}catch(w){b=!0,_=w}if(m==="throw")throw y;if(b)throw _;return p(_),y}},3383:function(c,h,s){var f,p,v,g=s(7293),m=s(614),y=s(30),_=s(9518),b=s(8052),w=s(5112),A=s(1913),E=w("iterator"),I=!1;[].keys&&("next"in(v=[].keys())?(p=_(_(v)))!==Object.prototype&&(f=p):I=!0),f==null||g(function(){var S={};return f[E].call(S)!==S})?f={}:A&&(f=y(f)),m(f[E])||b(f,E,function(){return this}),c.exports={IteratorPrototype:f,BUGGY_SAFARI_ITERATORS:I}},7497:function(c){c.exports={}},6244:function(c,h,s){var f=s(7466);c.exports=function(p){return f(p.length)}},6339:function(c,h,s){var f=s(7293),p=s(614),v=s(2597),g=s(9781),m=s(6530).CONFIGURABLE,y=s(2788),_=s(9909),b=_.enforce,w=_.get,A=Object.defineProperty,E=g&&!f(function(){return A(function(){},"length",{value:8}).length!==8}),I=String(String).split("String"),S=c.exports=function(T,U,N){String(U).slice(0,7)==="Symbol("&&(U="["+String(U).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),N&&N.getter&&(U="get "+U),N&&N.setter&&(U="set "+U),(!v(T,"name")||m&&T.name!==U)&&(g?A(T,"name",{value:U,configurable:!0}):T.name=U),E&&N&&v(N,"arity")&&T.length!==N.arity&&A(T,"length",{value:N.arity});try{N&&v(N,"constructor")&&N.constructor?g&&A(T,"prototype",{writable:!1}):T.prototype&&(T.prototype=void 0)}catch{}var x=b(T);return v(x,"source")||(x.source=I.join(typeof U=="string"?U:"")),T};Function.prototype.toString=S(function(){return p(this)&&w(this).source||y(this)},"toString")},4758:function(c){var h=Math.ceil,s=Math.floor;c.exports=Math.trunc||function(f){var p=+f;return(p>0?s:h)(p)}},735:function(c,h,s){var f=s(133);c.exports=f&&!!Symbol.for&&!!Symbol.keyFor},133:function(c,h,s){var f=s(7392),p=s(7293);c.exports=!!Object.getOwnPropertySymbols&&!p(function(){var v=Symbol();return!String(v)||!(Object(v)instanceof Symbol)||!Symbol.sham&&f&&f<41})},8536:function(c,h,s){var f=s(7854),p=s(614),v=s(2788),g=f.WeakMap;c.exports=p(g)&&/native code/.test(v(g))},3929:function(c,h,s){var f=s(7850),p=TypeError;c.exports=function(v){if(f(v))throw p("The method doesn't accept regular expressions");return v}},1574:function(c,h,s){var f=s(9781),p=s(1702),v=s(6916),g=s(7293),m=s(1956),y=s(5181),_=s(5296),b=s(7908),w=s(8361),A=Object.assign,E=Object.defineProperty,I=p([].concat);c.exports=!A||g(function(){if(f&&A({b:1},A(E({},"a",{enumerable:!0,get:function(){E(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var S={},T={},U=Symbol(),N="abcdefghijklmnopqrst";return S[U]=7,N.split("").forEach(function(x){T[x]=x}),A({},S)[U]!=7||m(A({},T)).join("")!=N})?function(S,T){for(var U=b(S),N=arguments.length,x=1,M=y.f,P=_.f;N>x;)for(var L,F=w(arguments[x++]),q=M?I(m(F),M(F)):m(F),j=q.length,W=0;j>W;)L=q[W++],f&&!v(P,F,L)||(U[L]=F[L]);return U}:A},30:function(c,h,s){var f,p=s(9670),v=s(6048),g=s(748),m=s(3501),y=s(490),_=s(317),b=s(6200)("IE_PROTO"),w=function(){},A=function(S){return"<script>"+S+"<\/script>"},E=function(S){S.write(A("")),S.close();var T=S.parentWindow.Object;return S=null,T},I=function(){try{f=new ActiveXObject("htmlfile")}catch{}var S,T;I=typeof document<"u"?document.domain&&f?E(f):((T=_("iframe")).style.display="none",y.appendChild(T),T.src="javascript:",(S=T.contentWindow.document).open(),S.write(A("document.F=Object")),S.close(),S.F):E(f);for(var U=g.length;U--;)delete I.prototype[g[U]];return I()};m[b]=!0,c.exports=Object.create||function(S,T){var U;return S!==null?(w.prototype=p(S),U=new w,w.prototype=null,U[b]=S):U=I(),T===void 0?U:v.f(U,T)}},6048:function(c,h,s){var f=s(9781),p=s(3353),v=s(3070),g=s(9670),m=s(5656),y=s(1956);h.f=f&&!p?Object.defineProperties:function(_,b){g(_);for(var w,A=m(b),E=y(b),I=E.length,S=0;I>S;)v.f(_,w=E[S++],A[w]);return _}},3070:function(c,h,s){var f=s(9781),p=s(4664),v=s(3353),g=s(9670),m=s(4948),y=TypeError,_=Object.defineProperty,b=Object.getOwnPropertyDescriptor;h.f=f?v?function(w,A,E){if(g(w),A=m(A),g(E),typeof w=="function"&&A==="prototype"&&"value"in E&&"writable"in E&&!E.writable){var I=b(w,A);I&&I.writable&&(w[A]=E.value,E={configurable:"configurable"in E?E.configurable:I.configurable,enumerable:"enumerable"in E?E.enumerable:I.enumerable,writable:!1})}return _(w,A,E)}:_:function(w,A,E){if(g(w),A=m(A),g(E),p)try{return _(w,A,E)}catch{}if("get"in E||"set"in E)throw y("Accessors not supported");return"value"in E&&(w[A]=E.value),w}},1236:function(c,h,s){var f=s(9781),p=s(6916),v=s(5296),g=s(9114),m=s(5656),y=s(4948),_=s(2597),b=s(4664),w=Object.getOwnPropertyDescriptor;h.f=f?w:function(A,E){if(A=m(A),E=y(E),b)try{return w(A,E)}catch{}if(_(A,E))return g(!p(v.f,A,E),A[E])}},1156:function(c,h,s){var f=s(4326),p=s(5656),v=s(8006).f,g=s(1589),m=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];c.exports.f=function(y){return m&&f(y)=="Window"?function(_){try{return v(_)}catch{return g(m)}}(y):v(p(y))}},8006:function(c,h,s){var f=s(6324),p=s(748).concat("length","prototype");h.f=Object.getOwnPropertyNames||function(v){return f(v,p)}},5181:function(c,h){h.f=Object.getOwnPropertySymbols},9518:function(c,h,s){var f=s(2597),p=s(614),v=s(7908),g=s(6200),m=s(8544),y=g("IE_PROTO"),_=Object,b=_.prototype;c.exports=m?_.getPrototypeOf:function(w){var A=v(w);if(f(A,y))return A[y];var E=A.constructor;return p(E)&&A instanceof E?E.prototype:A instanceof _?b:null}},7976:function(c,h,s){var f=s(1702);c.exports=f({}.isPrototypeOf)},6324:function(c,h,s){var f=s(1702),p=s(2597),v=s(5656),g=s(1318).indexOf,m=s(3501),y=f([].push);c.exports=function(_,b){var w,A=v(_),E=0,I=[];for(w in A)!p(m,w)&&p(A,w)&&y(I,w);for(;b.length>E;)p(A,w=b[E++])&&(~g(I,w)||y(I,w));return I}},1956:function(c,h,s){var f=s(6324),p=s(748);c.exports=Object.keys||function(v){return f(v,p)}},5296:function(c,h){var s={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,p=f&&!s.call({1:2},1);h.f=p?function(v){var g=f(this,v);return!!g&&g.enumerable}:s},9026:function(c,h,s){var f=s(1913),p=s(7854),v=s(7293),g=s(8008);c.exports=f||!v(function(){if(!(g&&g<535)){var m=Math.random();__defineSetter__.call(null,m,function(){}),delete p[m]}})},7674:function(c,h,s){var f=s(1702),p=s(9670),v=s(6077);c.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var g,m=!1,y={};try{(g=f(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(y,[]),m=y instanceof Array}catch{}return function(_,b){return p(_),v(b),m?g(_,b):_.__proto__=b,_}}():void 0)},288:function(c,h,s){var f=s(1694),p=s(648);c.exports=f?{}.toString:function(){return"[object "+p(this)+"]"}},2140:function(c,h,s){var f=s(6916),p=s(614),v=s(111),g=TypeError;c.exports=function(m,y){var _,b;if(y==="string"&&p(_=m.toString)&&!v(b=f(_,m))||p(_=m.valueOf)&&!v(b=f(_,m))||y!=="string"&&p(_=m.toString)&&!v(b=f(_,m)))return b;throw g("Can't convert object to primitive value")}},3887:function(c,h,s){var f=s(5005),p=s(1702),v=s(8006),g=s(5181),m=s(9670),y=p([].concat);c.exports=f("Reflect","ownKeys")||function(_){var b=v.f(m(_)),w=g.f;return w?y(b,w(_)):b}},857:function(c,h,s){var f=s(7854);c.exports=f},2626:function(c,h,s){var f=s(3070).f;c.exports=function(p,v,g){g in p||f(p,g,{configurable:!0,get:function(){return v[g]},set:function(m){v[g]=m}})}},7651:function(c,h,s){var f=s(6916),p=s(9670),v=s(614),g=s(4326),m=s(2261),y=TypeError;c.exports=function(_,b){var w=_.exec;if(v(w)){var A=f(w,_,b);return A!==null&&p(A),A}if(g(_)==="RegExp")return f(m,_,b);throw y("RegExp#exec called on incompatible receiver")}},2261:function(c,h,s){var f,p,v=s(6916),g=s(1702),m=s(1340),y=s(7066),_=s(2999),b=s(2309),w=s(30),A=s(9909).get,E=s(9441),I=s(7168),S=b("native-string-replace",String.prototype.replace),T=RegExp.prototype.exec,U=T,N=g("".charAt),x=g("".indexOf),M=g("".replace),P=g("".slice),L=(p=/b*/g,v(T,f=/a/,"a"),v(T,p,"a"),f.lastIndex!==0||p.lastIndex!==0),F=_.BROKEN_CARET,q=/()??/.exec("")[1]!==void 0;(L||q||F||E||I)&&(U=function(j){var W,D,C,R,O,B,G,Y=this,H=A(Y),te=m(j),ue=H.raw;if(ue)return ue.lastIndex=Y.lastIndex,W=v(U,ue,te),Y.lastIndex=ue.lastIndex,W;var _e=H.groups,J=F&&Y.sticky,re=v(y,Y),pe=Y.source,we=0,me=te;if(J&&(re=M(re,"y",""),x(re,"g")===-1&&(re+="g"),me=P(te,Y.lastIndex),Y.lastIndex>0&&(!Y.multiline||Y.multiline&&N(te,Y.lastIndex-1)!==`
`)&&(pe="(?: "+pe+")",me=" "+me,we++),D=new RegExp("^(?:"+pe+")",re)),q&&(D=new RegExp("^"+pe+"$(?!\\s)",re)),L&&(C=Y.lastIndex),R=v(T,J?D:Y,me),J?R?(R.input=P(R.input,we),R[0]=P(R[0],we),R.index=Y.lastIndex,Y.lastIndex+=R[0].length):Y.lastIndex=0:L&&R&&(Y.lastIndex=Y.global?R.index+R[0].length:C),q&&R&&R.length>1&&v(S,R[0],D,function(){for(O=1;O<arguments.length-2;O++)arguments[O]===void 0&&(R[O]=void 0)}),R&&_e)for(R.groups=B=w(null),O=0;O<_e.length;O++)B[(G=_e[O])[0]]=R[G[1]];return R}),c.exports=U},7066:function(c,h,s){var f=s(9670);c.exports=function(){var p=f(this),v="";return p.hasIndices&&(v+="d"),p.global&&(v+="g"),p.ignoreCase&&(v+="i"),p.multiline&&(v+="m"),p.dotAll&&(v+="s"),p.unicode&&(v+="u"),p.unicodeSets&&(v+="v"),p.sticky&&(v+="y"),v}},4706:function(c,h,s){var f=s(6916),p=s(2597),v=s(7976),g=s(7066),m=RegExp.prototype;c.exports=function(y){var _=y.flags;return _!==void 0||"flags"in m||p(y,"flags")||!v(m,y)?_:f(g,y)}},2999:function(c,h,s){var f=s(7293),p=s(7854).RegExp,v=f(function(){var y=p("a","y");return y.lastIndex=2,y.exec("abcd")!=null}),g=v||f(function(){return!p("a","y").sticky}),m=v||f(function(){var y=p("^r","gy");return y.lastIndex=2,y.exec("str")!=null});c.exports={BROKEN_CARET:m,MISSED_STICKY:g,UNSUPPORTED_Y:v}},9441:function(c,h,s){var f=s(7293),p=s(7854).RegExp;c.exports=f(function(){var v=p(".","s");return!(v.dotAll&&v.exec(`
`)&&v.flags==="s")})},7168:function(c,h,s){var f=s(7293),p=s(7854).RegExp;c.exports=f(function(){var v=p("(?<a>b)","g");return v.exec("b").groups.a!=="b"||"b".replace(v,"$<a>c")!=="bc"})},4488:function(c){var h=TypeError;c.exports=function(s){if(s==null)throw h("Can't call method on "+s);return s}},6340:function(c,h,s){var f=s(5005),p=s(3070),v=s(5112),g=s(9781),m=v("species");c.exports=function(y){var _=f(y),b=p.f;g&&_&&!_[m]&&b(_,m,{configurable:!0,get:function(){return this}})}},8003:function(c,h,s){var f=s(3070).f,p=s(2597),v=s(5112)("toStringTag");c.exports=function(g,m,y){g&&!y&&(g=g.prototype),g&&!p(g,v)&&f(g,v,{configurable:!0,value:m})}},6200:function(c,h,s){var f=s(2309),p=s(9711),v=f("keys");c.exports=function(g){return v[g]||(v[g]=p(g))}},5465:function(c,h,s){var f=s(7854),p=s(3072),v="__core-js_shared__",g=f[v]||p(v,{});c.exports=g},2309:function(c,h,s){var f=s(1913),p=s(5465);(c.exports=function(v,g){return p[v]||(p[v]=g!==void 0?g:{})})("versions",[]).push({version:"3.23.5",mode:f?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(c,h,s){var f=s(9670),p=s(9483),v=s(5112)("species");c.exports=function(g,m){var y,_=f(g).constructor;return _===void 0||(y=f(_)[v])==null?m:p(y)}},8710:function(c,h,s){var f=s(1702),p=s(9303),v=s(1340),g=s(4488),m=f("".charAt),y=f("".charCodeAt),_=f("".slice),b=function(w){return function(A,E){var I,S,T=v(g(A)),U=p(E),N=T.length;return U<0||U>=N?w?"":void 0:(I=y(T,U))<55296||I>56319||U+1===N||(S=y(T,U+1))<56320||S>57343?w?m(T,U):I:w?_(T,U,U+2):S-56320+(I-55296<<10)+65536}};c.exports={codeAt:b(!1),charAt:b(!0)}},6091:function(c,h,s){var f=s(6530).PROPER,p=s(7293),v=s(1361);c.exports=function(g){return p(function(){return!!v[g]()||"​᠎"[g]()!=="​᠎"||f&&v[g].name!==g})}},3111:function(c,h,s){var f=s(1702),p=s(4488),v=s(1340),g=s(1361),m=f("".replace),y="["+g+"]",_=RegExp("^"+y+y+"*"),b=RegExp(y+y+"*$"),w=function(A){return function(E){var I=v(p(E));return 1&A&&(I=m(I,_,"")),2&A&&(I=m(I,b,"")),I}};c.exports={start:w(1),end:w(2),trim:w(3)}},6532:function(c,h,s){var f=s(6916),p=s(5005),v=s(5112),g=s(8052);c.exports=function(){var m=p("Symbol"),y=m&&m.prototype,_=y&&y.valueOf,b=v("toPrimitive");y&&!y[b]&&g(y,b,function(w){return f(_,this)},{arity:1})}},863:function(c,h,s){var f=s(1702);c.exports=f(1 .valueOf)},1400:function(c,h,s){var f=s(9303),p=Math.max,v=Math.min;c.exports=function(g,m){var y=f(g);return y<0?p(y+m,0):v(y,m)}},5656:function(c,h,s){var f=s(8361),p=s(4488);c.exports=function(v){return f(p(v))}},9303:function(c,h,s){var f=s(4758);c.exports=function(p){var v=+p;return v!=v||v===0?0:f(v)}},7466:function(c,h,s){var f=s(9303),p=Math.min;c.exports=function(v){return v>0?p(f(v),9007199254740991):0}},7908:function(c,h,s){var f=s(4488),p=Object;c.exports=function(v){return p(f(v))}},7593:function(c,h,s){var f=s(6916),p=s(111),v=s(2190),g=s(8173),m=s(2140),y=s(5112),_=TypeError,b=y("toPrimitive");c.exports=function(w,A){if(!p(w)||v(w))return w;var E,I=g(w,b);if(I){if(A===void 0&&(A="default"),E=f(I,w,A),!p(E)||v(E))return E;throw _("Can't convert object to primitive value")}return A===void 0&&(A="number"),m(w,A)}},4948:function(c,h,s){var f=s(7593),p=s(2190);c.exports=function(v){var g=f(v,"string");return p(g)?g:g+""}},1694:function(c,h,s){var f={};f[s(5112)("toStringTag")]="z",c.exports=String(f)==="[object z]"},1340:function(c,h,s){var f=s(648),p=String;c.exports=function(v){if(f(v)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return p(v)}},6330:function(c){var h=String;c.exports=function(s){try{return h(s)}catch{return"Object"}}},9711:function(c,h,s){var f=s(1702),p=0,v=Math.random(),g=f(1 .toString);c.exports=function(m){return"Symbol("+(m===void 0?"":m)+")_"+g(++p+v,36)}},3307:function(c,h,s){var f=s(133);c.exports=f&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},3353:function(c,h,s){var f=s(9781),p=s(7293);c.exports=f&&p(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},6061:function(c,h,s){var f=s(5112);h.f=f},5112:function(c,h,s){var f=s(7854),p=s(2309),v=s(2597),g=s(9711),m=s(133),y=s(3307),_=p("wks"),b=f.Symbol,w=b&&b.for,A=y?b:b&&b.withoutSetter||g;c.exports=function(E){if(!v(_,E)||!m&&typeof _[E]!="string"){var I="Symbol."+E;m&&v(b,E)?_[E]=b[E]:_[E]=y&&w?w(I):A(I)}return _[E]}},1361:function(c){c.exports=`	
\v\f\r                　\u2028\u2029\uFEFF`},2222:function(c,h,s){var f=s(2109),p=s(7293),v=s(3157),g=s(111),m=s(7908),y=s(6244),_=s(7207),b=s(6135),w=s(5417),A=s(1194),E=s(5112),I=s(7392),S=E("isConcatSpreadable"),T=I>=51||!p(function(){var x=[];return x[S]=!1,x.concat()[0]!==x}),U=A("concat"),N=function(x){if(!g(x))return!1;var M=x[S];return M!==void 0?!!M:v(x)};f({target:"Array",proto:!0,arity:1,forced:!T||!U},{concat:function(x){var M,P,L,F,q,j=m(this),W=w(j,0),D=0;for(M=-1,L=arguments.length;M<L;M++)if(N(q=M===-1?j:arguments[M]))for(F=y(q),_(D+F),P=0;P<F;P++,D++)P in q&&b(W,D,q[P]);else _(D+1),b(W,D++,q);return W.length=D,W}})},7327:function(c,h,s){var f=s(2109),p=s(2092).filter;f({target:"Array",proto:!0,forced:!s(1194)("filter")},{filter:function(v){return p(this,v,arguments.length>1?arguments[1]:void 0)}})},1038:function(c,h,s){var f=s(2109),p=s(8457);f({target:"Array",stat:!0,forced:!s(7072)(function(v){Array.from(v)})},{from:p})},6699:function(c,h,s){var f=s(2109),p=s(1318).includes,v=s(7293),g=s(1223);f({target:"Array",proto:!0,forced:v(function(){return!Array(1).includes()})},{includes:function(m){return p(this,m,arguments.length>1?arguments[1]:void 0)}}),g("includes")},2772:function(c,h,s){var f=s(2109),p=s(1702),v=s(1318).indexOf,g=s(9341),m=p([].indexOf),y=!!m&&1/m([1],1,-0)<0,_=g("indexOf");f({target:"Array",proto:!0,forced:y||!_},{indexOf:function(b){var w=arguments.length>1?arguments[1]:void 0;return y?m(this,b,w)||0:v(this,b,w)}})},6992:function(c,h,s){var f=s(5656),p=s(1223),v=s(7497),g=s(9909),m=s(3070).f,y=s(654),_=s(1913),b=s(9781),w="Array Iterator",A=g.set,E=g.getterFor(w);c.exports=y(Array,"Array",function(S,T){A(this,{type:w,target:f(S),index:0,kind:T})},function(){var S=E(this),T=S.target,U=S.kind,N=S.index++;return!T||N>=T.length?(S.target=void 0,{value:void 0,done:!0}):U=="keys"?{value:N,done:!1}:U=="values"?{value:T[N],done:!1}:{value:[N,T[N]],done:!1}},"values");var I=v.Arguments=v.Array;if(p("keys"),p("values"),p("entries"),!_&&b&&I.name!=="values")try{m(I,"name",{value:"values"})}catch{}},9600:function(c,h,s){var f=s(2109),p=s(1702),v=s(8361),g=s(5656),m=s(9341),y=p([].join),_=v!=Object,b=m("join",",");f({target:"Array",proto:!0,forced:_||!b},{join:function(w){return y(g(this),w===void 0?",":w)}})},1249:function(c,h,s){var f=s(2109),p=s(2092).map;f({target:"Array",proto:!0,forced:!s(1194)("map")},{map:function(v){return p(this,v,arguments.length>1?arguments[1]:void 0)}})},5827:function(c,h,s){var f=s(2109),p=s(3671).left,v=s(9341),g=s(7392),m=s(5268);f({target:"Array",proto:!0,forced:!v("reduce")||!m&&g>79&&g<83},{reduce:function(y){var _=arguments.length;return p(this,y,_,_>1?arguments[1]:void 0)}})},7042:function(c,h,s){var f=s(2109),p=s(3157),v=s(4411),g=s(111),m=s(1400),y=s(6244),_=s(5656),b=s(6135),w=s(5112),A=s(1194),E=s(206),I=A("slice"),S=w("species"),T=Array,U=Math.max;f({target:"Array",proto:!0,forced:!I},{slice:function(N,x){var M,P,L,F=_(this),q=y(F),j=m(N,q),W=m(x===void 0?q:x,q);if(p(F)&&(M=F.constructor,(v(M)&&(M===T||p(M.prototype))||g(M)&&(M=M[S])===null)&&(M=void 0),M===T||M===void 0))return E(F,j,W);for(P=new(M===void 0?T:M)(U(W-j,0)),L=0;j<W;j++,L++)j in F&&b(P,L,F[j]);return P.length=L,P}})},2707:function(c,h,s){var f=s(2109),p=s(1702),v=s(9662),g=s(7908),m=s(6244),y=s(5117),_=s(1340),b=s(7293),w=s(4362),A=s(9341),E=s(8886),I=s(256),S=s(7392),T=s(8008),U=[],N=p(U.sort),x=p(U.push),M=b(function(){U.sort(void 0)}),P=b(function(){U.sort(null)}),L=A("sort"),F=!b(function(){if(S)return S<70;if(!(E&&E>3)){if(I)return!0;if(T)return T<603;var q,j,W,D,C="";for(q=65;q<76;q++){switch(j=String.fromCharCode(q),q){case 66:case 69:case 70:case 72:W=3;break;case 68:case 71:W=4;break;default:W=2}for(D=0;D<47;D++)U.push({k:j+D,v:W})}for(U.sort(function(R,O){return O.v-R.v}),D=0;D<U.length;D++)j=U[D].k.charAt(0),C.charAt(C.length-1)!==j&&(C+=j);return C!=="DGBEFHACIJK"}});f({target:"Array",proto:!0,forced:M||!P||!L||!F},{sort:function(q){q!==void 0&&v(q);var j=g(this);if(F)return q===void 0?N(j):N(j,q);var W,D,C=[],R=m(j);for(D=0;D<R;D++)D in j&&x(C,j[D]);for(w(C,function(O){return function(B,G){return G===void 0?-1:B===void 0?1:O!==void 0?+O(B,G)||0:_(B)>_(G)?1:-1}}(q)),W=C.length,D=0;D<W;)j[D]=C[D++];for(;D<R;)y(j,D++);return j}})},561:function(c,h,s){var f=s(2109),p=s(7908),v=s(1400),g=s(9303),m=s(6244),y=s(7207),_=s(5417),b=s(6135),w=s(5117),A=s(1194)("splice"),E=Math.max,I=Math.min;f({target:"Array",proto:!0,forced:!A},{splice:function(S,T){var U,N,x,M,P,L,F=p(this),q=m(F),j=v(S,q),W=arguments.length;for(W===0?U=N=0:W===1?(U=0,N=q-j):(U=W-2,N=I(E(g(T),0),q-j)),y(q+U-N),x=_(F,N),M=0;M<N;M++)(P=j+M)in F&&b(x,M,F[P]);if(x.length=N,U<N){for(M=j;M<q-N;M++)L=M+U,(P=M+N)in F?F[L]=F[P]:w(F,L);for(M=q;M>q-N+U;M--)w(F,M-1)}else if(U>N)for(M=q-N;M>j;M--)L=M+U-1,(P=M+N-1)in F?F[L]=F[P]:w(F,L);for(M=0;M<U;M++)F[M+j]=arguments[M+2];return F.length=q-N+U,x}})},8309:function(c,h,s){var f=s(9781),p=s(6530).EXISTS,v=s(1702),g=s(3070).f,m=Function.prototype,y=v(m.toString),_=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,b=v(_.exec);f&&!p&&g(m,"name",{configurable:!0,get:function(){try{return b(_,y(this))[1]}catch{return""}}})},8862:function(c,h,s){var f=s(2109),p=s(5005),v=s(2104),g=s(6916),m=s(1702),y=s(7293),_=s(3157),b=s(614),w=s(111),A=s(2190),E=s(206),I=s(133),S=p("JSON","stringify"),T=m(/./.exec),U=m("".charAt),N=m("".charCodeAt),x=m("".replace),M=m(1 .toString),P=/[\uD800-\uDFFF]/g,L=/^[\uD800-\uDBFF]$/,F=/^[\uDC00-\uDFFF]$/,q=!I||y(function(){var C=p("Symbol")();return S([C])!="[null]"||S({a:C})!="{}"||S(Object(C))!="{}"}),j=y(function(){return S("\uDF06\uD834")!=='"\\udf06\\ud834"'||S("\uDEAD")!=='"\\udead"'}),W=function(C,R){var O=E(arguments),B=R;if((w(R)||C!==void 0)&&!A(C))return _(R)||(R=function(G,Y){if(b(B)&&(Y=g(B,this,G,Y)),!A(Y))return Y}),O[1]=R,v(S,null,O)},D=function(C,R,O){var B=U(O,R-1),G=U(O,R+1);return T(L,C)&&!T(F,G)||T(F,C)&&!T(L,B)?"\\u"+M(N(C,0),16):C};S&&f({target:"JSON",stat:!0,arity:3,forced:q||j},{stringify:function(C,R,O){var B=E(arguments),G=v(q?W:S,null,B);return j&&typeof G=="string"?x(G,P,D):G}})},9653:function(c,h,s){var f=s(9781),p=s(7854),v=s(1702),g=s(4705),m=s(8052),y=s(2597),_=s(9587),b=s(7976),w=s(2190),A=s(7593),E=s(7293),I=s(8006).f,S=s(1236).f,T=s(3070).f,U=s(863),N=s(3111).trim,x="Number",M=p.Number,P=M.prototype,L=p.TypeError,F=v("".slice),q=v("".charCodeAt),j=function(B){var G=A(B,"number");return typeof G=="bigint"?G:W(G)},W=function(B){var G,Y,H,te,ue,_e,J,re,pe=A(B,"number");if(w(pe))throw L("Cannot convert a Symbol value to a number");if(typeof pe=="string"&&pe.length>2){if(pe=N(pe),(G=q(pe,0))===43||G===45){if((Y=q(pe,2))===88||Y===120)return NaN}else if(G===48){switch(q(pe,1)){case 66:case 98:H=2,te=49;break;case 79:case 111:H=8,te=55;break;default:return+pe}for(_e=(ue=F(pe,2)).length,J=0;J<_e;J++)if((re=q(ue,J))<48||re>te)return NaN;return parseInt(ue,H)}}return+pe};if(g(x,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var D,C=function(B){var G=arguments.length<1?0:M(j(B)),Y=this;return b(P,Y)&&E(function(){U(Y)})?_(Object(G),Y,C):G},R=f?I(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;R.length>O;O++)y(M,D=R[O])&&!y(C,D)&&T(C,D,S(M,D));C.prototype=P,P.constructor=C,m(p,x,C,{constructor:!0})}},3161:function(c,h,s){s(2109)({target:"Number",stat:!0},{isInteger:s(5988)})},9601:function(c,h,s){var f=s(2109),p=s(1574);f({target:"Object",stat:!0,arity:2,forced:Object.assign!==p},{assign:p})},9595:function(c,h,s){var f=s(2109),p=s(9781),v=s(9026),g=s(9662),m=s(7908),y=s(3070);p&&f({target:"Object",proto:!0,forced:v},{__defineGetter__:function(_,b){y.f(m(this),_,{get:g(b),enumerable:!0,configurable:!0})}})},5003:function(c,h,s){var f=s(2109),p=s(7293),v=s(5656),g=s(1236).f,m=s(9781),y=p(function(){g(1)});f({target:"Object",stat:!0,forced:!m||y,sham:!m},{getOwnPropertyDescriptor:function(_,b){return g(v(_),b)}})},9337:function(c,h,s){var f=s(2109),p=s(9781),v=s(3887),g=s(5656),m=s(1236),y=s(6135);f({target:"Object",stat:!0,sham:!p},{getOwnPropertyDescriptors:function(_){for(var b,w,A=g(_),E=m.f,I=v(A),S={},T=0;I.length>T;)(w=E(A,b=I[T++]))!==void 0&&y(S,b,w);return S}})},6210:function(c,h,s){var f=s(2109),p=s(7293),v=s(1156).f;f({target:"Object",stat:!0,forced:p(function(){return!Object.getOwnPropertyNames(1)})},{getOwnPropertyNames:v})},9660:function(c,h,s){var f=s(2109),p=s(133),v=s(7293),g=s(5181),m=s(7908);f({target:"Object",stat:!0,forced:!p||v(function(){g.f(1)})},{getOwnPropertySymbols:function(y){var _=g.f;return _?_(m(y)):[]}})},7941:function(c,h,s){var f=s(2109),p=s(7908),v=s(1956);f({target:"Object",stat:!0,forced:s(7293)(function(){v(1)})},{keys:function(g){return v(p(g))}})},1539:function(c,h,s){var f=s(1694),p=s(8052),v=s(288);f||p(Object.prototype,"toString",v,{unsafe:!0})},4603:function(c,h,s){var f=s(9781),p=s(7854),v=s(1702),g=s(4705),m=s(9587),y=s(8880),_=s(8006).f,b=s(7976),w=s(7850),A=s(1340),E=s(4706),I=s(2999),S=s(2626),T=s(8052),U=s(7293),N=s(2597),x=s(9909).enforce,M=s(6340),P=s(5112),L=s(9441),F=s(7168),q=P("match"),j=p.RegExp,W=j.prototype,D=p.SyntaxError,C=v(W.exec),R=v("".charAt),O=v("".replace),B=v("".indexOf),G=v("".slice),Y=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,H=/a/g,te=/a/g,ue=new j(H)!==H,_e=I.MISSED_STICKY,J=I.UNSUPPORTED_Y;if(g("RegExp",f&&(!ue||_e||L||F||U(function(){return te[q]=!1,j(H)!=H||j(te)==te||j(H,"i")!="/a/i"})))){for(var re=function(me,ye){var $e,Fe,Je,ct,mt,K,X=b(W,this),fe=w(me),Pe=ye===void 0,Le=[],Ne=me;if(!X&&fe&&Pe&&me.constructor===re)return me;if((fe||b(W,me))&&(me=me.source,Pe&&(ye=E(Ne))),me=me===void 0?"":A(me),ye=ye===void 0?"":A(ye),Ne=me,L&&"dotAll"in H&&(Fe=!!ye&&B(ye,"s")>-1)&&(ye=O(ye,/s/g,"")),$e=ye,_e&&"sticky"in H&&(Je=!!ye&&B(ye,"y")>-1)&&J&&(ye=O(ye,/y/g,"")),F&&(me=(ct=function(ze){for(var De,ve=ze.length,Xe=0,je="",Oe=[],Ke={},He=!1,Te=!1,We=0,$="";Xe<=ve;Xe++){if((De=R(ze,Xe))==="\\")De+=R(ze,++Xe);else if(De==="]")He=!1;else if(!He)switch(!0){case De==="[":He=!0;break;case De==="(":C(Y,G(ze,Xe+1))&&(Xe+=2,Te=!0),je+=De,We++;continue;case(De===">"&&Te):if($===""||N(Ke,$))throw new D("Invalid capture group name");Ke[$]=!0,Oe[Oe.length]=[$,We],Te=!1,$="";continue}Te?$+=De:je+=De}return[je,Oe]}(me))[0],Le=ct[1]),mt=m(j(me,ye),X?this:W,re),(Fe||Je||Le.length)&&(K=x(mt),Fe&&(K.dotAll=!0,K.raw=re(function(ze){for(var De,ve=ze.length,Xe=0,je="",Oe=!1;Xe<=ve;Xe++)(De=R(ze,Xe))!=="\\"?Oe||De!=="."?(De==="["?Oe=!0:De==="]"&&(Oe=!1),je+=De):je+="[\\s\\S]":je+=De+R(ze,++Xe);return je}(me),$e)),Je&&(K.sticky=!0),Le.length&&(K.groups=Le)),me!==Ne)try{y(mt,"source",Ne===""?"(?:)":Ne)}catch{}return mt},pe=_(j),we=0;pe.length>we;)S(re,j,pe[we++]);W.constructor=re,re.prototype=W,T(p,"RegExp",re,{constructor:!0})}M("RegExp")},4916:function(c,h,s){var f=s(2109),p=s(2261);f({target:"RegExp",proto:!0,forced:/./.exec!==p},{exec:p})},9714:function(c,h,s){var f=s(6530).PROPER,p=s(8052),v=s(9670),g=s(1340),m=s(7293),y=s(4706),_="toString",b=RegExp.prototype.toString,w=m(function(){return b.call({source:"a",flags:"b"})!="/a/b"}),A=f&&b.name!=_;(w||A)&&p(RegExp.prototype,_,function(){var E=v(this);return"/"+g(E.source)+"/"+g(y(E))},{unsafe:!0})},2023:function(c,h,s){var f=s(2109),p=s(1702),v=s(3929),g=s(4488),m=s(1340),y=s(4964),_=p("".indexOf);f({target:"String",proto:!0,forced:!y("includes")},{includes:function(b){return!!~_(m(g(this)),m(v(b)),arguments.length>1?arguments[1]:void 0)}})},8783:function(c,h,s){var f=s(8710).charAt,p=s(1340),v=s(9909),g=s(654),m="String Iterator",y=v.set,_=v.getterFor(m);g(String,"String",function(b){y(this,{type:m,string:p(b),index:0})},function(){var b,w=_(this),A=w.string,E=w.index;return E>=A.length?{value:void 0,done:!0}:(b=f(A,E),w.index+=b.length,{value:b,done:!1})})},6373:function(c,h,s){var f=s(2109),p=s(6916),v=s(1702),g=s(4994),m=s(4488),y=s(7466),_=s(1340),b=s(9670),w=s(4326),A=s(7850),E=s(4706),I=s(8173),S=s(8052),T=s(7293),U=s(5112),N=s(6707),x=s(1530),M=s(7651),P=s(9909),L=s(1913),F=U("matchAll"),q="RegExp String Iterator",j=P.set,W=P.getterFor(q),D=RegExp.prototype,C=TypeError,R=v("".indexOf),O=v("".matchAll),B=!!O&&!T(function(){O("a",/./)}),G=g(function(H,te,ue,_e){j(this,{type:q,regexp:H,string:te,global:ue,unicode:_e,done:!1})},"RegExp String",function(){var H=W(this);if(H.done)return{value:void 0,done:!0};var te=H.regexp,ue=H.string,_e=M(te,ue);return _e===null?{value:void 0,done:H.done=!0}:H.global?(_(_e[0])===""&&(te.lastIndex=x(ue,y(te.lastIndex),H.unicode)),{value:_e,done:!1}):(H.done=!0,{value:_e,done:!1})}),Y=function(H){var te,ue,_e,J=b(this),re=_(H),pe=N(J,RegExp),we=_(E(J));return te=new pe(pe===RegExp?J.source:J,we),ue=!!~R(we,"g"),_e=!!~R(we,"u"),te.lastIndex=y(J.lastIndex),new G(te,re,ue,_e)};f({target:"String",proto:!0,forced:B},{matchAll:function(H){var te,ue,_e,J,re=m(this);if(H!=null){if(A(H)&&(te=_(m(E(H))),!~R(te,"g")))throw C("`.matchAll` does not allow non-global regexes");if(B)return O(re,H);if((_e=I(H,F))===void 0&&L&&w(H)=="RegExp"&&(_e=Y),_e)return p(_e,H,re)}else if(B)return O(re,H);return ue=_(re),J=new RegExp(H,"g"),L?p(Y,J,ue):J[F](ue)}}),L||F in D||S(D,F,Y)},4723:function(c,h,s){var f=s(6916),p=s(7007),v=s(9670),g=s(7466),m=s(1340),y=s(4488),_=s(8173),b=s(1530),w=s(7651);p("match",function(A,E,I){return[function(S){var T=y(this),U=S==null?void 0:_(S,A);return U?f(U,S,T):new RegExp(S)[A](m(T))},function(S){var T=v(this),U=m(S),N=I(E,T,U);if(N.done)return N.value;if(!T.global)return w(T,U);var x=T.unicode;T.lastIndex=0;for(var M,P=[],L=0;(M=w(T,U))!==null;){var F=m(M[0]);P[L]=F,F===""&&(T.lastIndex=b(U,g(T.lastIndex),x)),L++}return L===0?null:P}]})},5306:function(c,h,s){var f=s(2104),p=s(6916),v=s(1702),g=s(7007),m=s(7293),y=s(9670),_=s(614),b=s(9303),w=s(7466),A=s(1340),E=s(4488),I=s(1530),S=s(8173),T=s(647),U=s(7651),N=s(5112)("replace"),x=Math.max,M=Math.min,P=v([].concat),L=v([].push),F=v("".indexOf),q=v("".slice),j="a".replace(/./,"$0")==="$0",W=!!/./[N]&&/./[N]("a","$0")==="";g("replace",function(D,C,R){var O=W?"$":"$0";return[function(B,G){var Y=E(this),H=B==null?void 0:S(B,N);return H?p(H,B,Y,G):p(C,A(Y),B,G)},function(B,G){var Y=y(this),H=A(B);if(typeof G=="string"&&F(G,O)===-1&&F(G,"$<")===-1){var te=R(C,Y,H,G);if(te.done)return te.value}var ue=_(G);ue||(G=A(G));var _e=Y.global;if(_e){var J=Y.unicode;Y.lastIndex=0}for(var re=[];;){var pe=U(Y,H);if(pe===null||(L(re,pe),!_e))break;A(pe[0])===""&&(Y.lastIndex=I(H,w(Y.lastIndex),J))}for(var we,me="",ye=0,$e=0;$e<re.length;$e++){for(var Fe=A((pe=re[$e])[0]),Je=x(M(b(pe.index),H.length),0),ct=[],mt=1;mt<pe.length;mt++)L(ct,(we=pe[mt])===void 0?we:String(we));var K=pe.groups;if(ue){var X=P([Fe],ct,Je,H);K!==void 0&&L(X,K);var fe=A(f(G,void 0,X))}else fe=T(Fe,H,Je,ct,K,G);Je>=ye&&(me+=q(H,ye,Je)+fe,ye=Je+Fe.length)}return me+q(H,ye)}]},!!m(function(){var D=/./;return D.exec=function(){var C=[];return C.groups={a:"7"},C},"".replace(D,"$<a>")!=="7"})||!j||W)},3123:function(c,h,s){var f=s(2104),p=s(6916),v=s(1702),g=s(7007),m=s(7850),y=s(9670),_=s(4488),b=s(6707),w=s(1530),A=s(7466),E=s(1340),I=s(8173),S=s(1589),T=s(7651),U=s(2261),N=s(2999),x=s(7293),M=N.UNSUPPORTED_Y,P=4294967295,L=Math.min,F=[].push,q=v(/./.exec),j=v(F),W=v("".slice);g("split",function(D,C,R){var O;return O="abbc".split(/(b)*/)[1]=="c"||"test".split(/(?:)/,-1).length!=4||"ab".split(/(?:ab)*/).length!=2||".".split(/(.?)(.?)/).length!=4||".".split(/()()/).length>1||"".split(/.?/).length?function(B,G){var Y=E(_(this)),H=G===void 0?P:G>>>0;if(H===0)return[];if(B===void 0)return[Y];if(!m(B))return p(C,Y,B,H);for(var te,ue,_e,J=[],re=(B.ignoreCase?"i":"")+(B.multiline?"m":"")+(B.unicode?"u":"")+(B.sticky?"y":""),pe=0,we=new RegExp(B.source,re+"g");(te=p(U,we,Y))&&!((ue=we.lastIndex)>pe&&(j(J,W(Y,pe,te.index)),te.length>1&&te.index<Y.length&&f(F,J,S(te,1)),_e=te[0].length,pe=ue,J.length>=H));)we.lastIndex===te.index&&we.lastIndex++;return pe===Y.length?!_e&&q(we,"")||j(J,""):j(J,W(Y,pe)),J.length>H?S(J,0,H):J}:"0".split(void 0,0).length?function(B,G){return B===void 0&&G===0?[]:p(C,this,B,G)}:C,[function(B,G){var Y=_(this),H=B==null?void 0:I(B,D);return H?p(H,B,Y,G):p(O,E(Y),B,G)},function(B,G){var Y=y(this),H=E(B),te=R(O,Y,H,G,O!==C);if(te.done)return te.value;var ue=b(Y,RegExp),_e=Y.unicode,J=(Y.ignoreCase?"i":"")+(Y.multiline?"m":"")+(Y.unicode?"u":"")+(M?"g":"y"),re=new ue(M?"^(?:"+Y.source+")":Y,J),pe=G===void 0?P:G>>>0;if(pe===0)return[];if(H.length===0)return T(re,H)===null?[H]:[];for(var we=0,me=0,ye=[];me<H.length;){re.lastIndex=M?0:me;var $e,Fe=T(re,M?W(H,me):H);if(Fe===null||($e=L(A(re.lastIndex+(M?me:0)),H.length))===we)me=w(H,me,_e);else{if(j(ye,W(H,we,me)),ye.length===pe)return ye;for(var Je=1;Je<=Fe.length-1;Je++)if(j(ye,Fe[Je]),ye.length===pe)return ye;me=we=$e}}return j(ye,W(H,we)),ye}]},!!x(function(){var D=/(?:)/,C=D.exec;D.exec=function(){return C.apply(this,arguments)};var R="ab".split(D);return R.length!==2||R[0]!=="a"||R[1]!=="b"}),M)},3210:function(c,h,s){var f=s(2109),p=s(3111).trim;f({target:"String",proto:!0,forced:s(6091)("trim")},{trim:function(){return p(this)}})},4032:function(c,h,s){var f=s(2109),p=s(7854),v=s(6916),g=s(1702),m=s(1913),y=s(9781),_=s(133),b=s(7293),w=s(2597),A=s(7976),E=s(9670),I=s(5656),S=s(4948),T=s(1340),U=s(9114),N=s(30),x=s(1956),M=s(8006),P=s(1156),L=s(5181),F=s(1236),q=s(3070),j=s(6048),W=s(5296),D=s(8052),C=s(2309),R=s(6200),O=s(3501),B=s(9711),G=s(5112),Y=s(6061),H=s(7235),te=s(6532),ue=s(8003),_e=s(9909),J=s(2092).forEach,re=R("hidden"),pe="Symbol",we=_e.set,me=_e.getterFor(pe),ye=Object.prototype,$e=p.Symbol,Fe=$e&&$e.prototype,Je=p.TypeError,ct=p.QObject,mt=F.f,K=q.f,X=P.f,fe=W.f,Pe=g([].push),Le=C("symbols"),Ne=C("op-symbols"),ze=C("wks"),De=!ct||!ct.prototype||!ct.prototype.findChild,ve=y&&b(function(){return N(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a!=7})?function($,Se,se){var Ce=mt(ye,Se);Ce&&delete ye[Se],K($,Se,se),Ce&&$!==ye&&K(ye,Se,Ce)}:K,Xe=function($,Se){var se=Le[$]=N(Fe);return we(se,{type:pe,tag:$,description:Se}),y||(se.description=Se),se},je=function($,Se,se){$===ye&&je(Ne,Se,se),E($);var Ce=S(Se);return E(se),w(Le,Ce)?(se.enumerable?(w($,re)&&$[re][Ce]&&($[re][Ce]=!1),se=N(se,{enumerable:U(0,!1)})):(w($,re)||K($,re,U(1,{})),$[re][Ce]=!0),ve($,Ce,se)):K($,Ce,se)},Oe=function($,Se){E($);var se=I(Se),Ce=x(se).concat(We(se));return J(Ce,function(Ge){y&&!v(Ke,se,Ge)||je($,Ge,se[Ge])}),$},Ke=function($){var Se=S($),se=v(fe,this,Se);return!(this===ye&&w(Le,Se)&&!w(Ne,Se))&&(!(se||!w(this,Se)||!w(Le,Se)||w(this,re)&&this[re][Se])||se)},He=function($,Se){var se=I($),Ce=S(Se);if(se!==ye||!w(Le,Ce)||w(Ne,Ce)){var Ge=mt(se,Ce);return!Ge||!w(Le,Ce)||w(se,re)&&se[re][Ce]||(Ge.enumerable=!0),Ge}},Te=function($){var Se=X(I($)),se=[];return J(Se,function(Ce){w(Le,Ce)||w(O,Ce)||Pe(se,Ce)}),se},We=function($){var Se=$===ye,se=X(Se?Ne:I($)),Ce=[];return J(se,function(Ge){!w(Le,Ge)||Se&&!w(ye,Ge)||Pe(Ce,Le[Ge])}),Ce};_||(D(Fe=($e=function(){if(A(Fe,this))throw Je("Symbol is not a constructor");var $=arguments.length&&arguments[0]!==void 0?T(arguments[0]):void 0,Se=B($),se=function(Ce){this===ye&&v(se,Ne,Ce),w(this,re)&&w(this[re],Se)&&(this[re][Se]=!1),ve(this,Se,U(1,Ce))};return y&&De&&ve(ye,Se,{configurable:!0,set:se}),Xe(Se,$)}).prototype,"toString",function(){return me(this).tag}),D($e,"withoutSetter",function($){return Xe(B($),$)}),W.f=Ke,q.f=je,j.f=Oe,F.f=He,M.f=P.f=Te,L.f=We,Y.f=function($){return Xe(G($),$)},y&&(K(Fe,"description",{configurable:!0,get:function(){return me(this).description}}),m||D(ye,"propertyIsEnumerable",Ke,{unsafe:!0}))),f({global:!0,constructor:!0,wrap:!0,forced:!_,sham:!_},{Symbol:$e}),J(x(ze),function($){H($)}),f({target:pe,stat:!0,forced:!_},{useSetter:function(){De=!0},useSimple:function(){De=!1}}),f({target:"Object",stat:!0,forced:!_,sham:!y},{create:function($,Se){return Se===void 0?N($):Oe(N($),Se)},defineProperty:je,defineProperties:Oe,getOwnPropertyDescriptor:He}),f({target:"Object",stat:!0,forced:!_},{getOwnPropertyNames:Te}),te(),ue($e,pe),O[re]=!0},1817:function(c,h,s){var f=s(2109),p=s(9781),v=s(7854),g=s(1702),m=s(2597),y=s(614),_=s(7976),b=s(1340),w=s(3070).f,A=s(9920),E=v.Symbol,I=E&&E.prototype;if(p&&y(E)&&(!("description"in I)||E().description!==void 0)){var S={},T=function(){var F=arguments.length<1||arguments[0]===void 0?void 0:b(arguments[0]),q=_(I,this)?new E(F):F===void 0?E():E(F);return F===""&&(S[q]=!0),q};A(T,E),T.prototype=I,I.constructor=T;var U=String(E("test"))=="Symbol(test)",N=g(I.toString),x=g(I.valueOf),M=/^Symbol\((.*)\)[^)]+$/,P=g("".replace),L=g("".slice);w(I,"description",{configurable:!0,get:function(){var F=x(this),q=N(F);if(m(S,F))return"";var j=U?L(q,7,-1):P(q,M,"$1");return j===""?void 0:j}}),f({global:!0,constructor:!0,forced:!0},{Symbol:T})}},763:function(c,h,s){var f=s(2109),p=s(5005),v=s(2597),g=s(1340),m=s(2309),y=s(735),_=m("string-to-symbol-registry"),b=m("symbol-to-string-registry");f({target:"Symbol",stat:!0,forced:!y},{for:function(w){var A=g(w);if(v(_,A))return _[A];var E=p("Symbol")(A);return _[A]=E,b[E]=A,E}})},2165:function(c,h,s){s(7235)("iterator")},2526:function(c,h,s){s(4032),s(763),s(6620),s(8862),s(9660)},6620:function(c,h,s){var f=s(2109),p=s(2597),v=s(2190),g=s(6330),m=s(2309),y=s(735),_=m("symbol-to-string-registry");f({target:"Symbol",stat:!0,forced:!y},{keyFor:function(b){if(!v(b))throw TypeError(g(b)+" is not a symbol");if(p(_,b))return _[b]}})},3728:function(c,h,s){s(6373)},4747:function(c,h,s){var f=s(7854),p=s(8324),v=s(8509),g=s(8533),m=s(8880),y=function(b){if(b&&b.forEach!==g)try{m(b,"forEach",g)}catch{b.forEach=g}};for(var _ in p)p[_]&&y(f[_]&&f[_].prototype);y(v)},3948:function(c,h,s){var f=s(7854),p=s(8324),v=s(8509),g=s(6992),m=s(8880),y=s(5112),_=y("iterator"),b=y("toStringTag"),w=g.values,A=function(I,S){if(I){if(I[_]!==w)try{m(I,_,w)}catch{I[_]=w}if(I[b]||m(I,b,S),p[S]){for(var T in g)if(I[T]!==g[T])try{m(I,T,g[T])}catch{I[T]=g[T]}}}};for(var E in p)A(f[E]&&f[E].prototype,E);A(v,"DOMTokenList")}},a={};function l(c){var h=a[c];if(h!==void 0)return h.exports;var s=a[c]={exports:{}};return o[c](s,s.exports,l),s.exports}l.d=function(c,h){for(var s in h)l.o(h,s)&&!l.o(c,s)&&Object.defineProperty(c,s,{enumerable:!0,get:h[s]})},l.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),l.o=function(c,h){return Object.prototype.hasOwnProperty.call(c,h)},l.r=function(c){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})};var d={};return function(){function c(T){return function(U){if(Array.isArray(U))return s(U)}(T)||function(U){if(typeof Symbol<"u"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}(T)||h(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function h(T,U){if(T){if(typeof T=="string")return s(T,U);var N=Object.prototype.toString.call(T).slice(8,-1);return N==="Object"&&T.constructor&&(N=T.constructor.name),N==="Map"||N==="Set"?Array.from(T):N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N)?s(T,U):void 0}}function s(T,U){(U==null||U>T.length)&&(U=T.length);for(var N=0,x=new Array(U);N<U;N++)x[N]=T[N];return x}function f(T){return(f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U})(T)}function p(T,U){for(var N=0;N<U.length;N++){var x=U[N];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(T,x.key,x)}}function v(T,U,N){return U in T?Object.defineProperty(T,U,{value:N,enumerable:!0,configurable:!0,writable:!0}):T[U]=N,T}l.r(d),l.d(d,{default:function(){return S}}),l(3210),l(4916),l(5306),l(2772),l(8309),l(3123),l(1539),l(9714),l(561),l(9600),l(9595),l(7042),typeof Element>"u"||"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof self<"u"&&"document"in self&&((!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))&&function(T){if("Element"in T){var U="classList",N=T.Element.prototype,x=Object,M=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},P=Array.prototype.indexOf||function(C){for(var R=0,O=this.length;R<O;R++)if(R in this&&this[R]===C)return R;return-1},L=function(C,R){this.name=C,this.code=DOMException[C],this.message=R},F=function(C,R){if(R==="")throw new L("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(R))throw new L("INVALID_CHARACTER_ERR","The token must not contain space characters.");return P.call(C,R)},q=function(C){for(var R=M.call(C.getAttribute("class")||""),O=R?R.split(/\s+/):[],B=0,G=O.length;B<G;B++)this.push(O[B]);this._updateClassName=function(){C.setAttribute("class",this.toString())}},j=q.prototype=[],W=function(){return new q(this)};if(L.prototype=Error.prototype,j.item=function(C){return this[C]||null},j.contains=function(C){return~F(this,C+"")},j.add=function(){var C,R=arguments,O=0,B=R.length,G=!1;do C=R[O]+"",~F(this,C)||(this.push(C),G=!0);while(++O<B);G&&this._updateClassName()},j.remove=function(){var C,R,O=arguments,B=0,G=O.length,Y=!1;do for(C=O[B]+"",R=F(this,C);~R;)this.splice(R,1),Y=!0,R=F(this,C);while(++B<G);Y&&this._updateClassName()},j.toggle=function(C,R){var O=this.contains(C),B=O?R!==!0&&"remove":R!==!1&&"add";return B&&this[B](C),R===!0||R===!1?R:!O},j.replace=function(C,R){var O=F(C+"");~O&&(this.splice(O,1,R),this._updateClassName())},j.toString=function(){return this.join(" ")},x.defineProperty){var D={get:W,enumerable:!0,configurable:!0};try{x.defineProperty(N,U,D)}catch(C){C.number!==void 0&&C.number!==-2146823252||(D.enumerable=!1,x.defineProperty(N,U,D))}}else x.prototype.__defineGetter__&&N.__defineGetter__(U,W)}}(self),function(){var T=document.createElement("_");if(T.classList.add("c1","c2"),!T.classList.contains("c2")){var U=function(x){var M=DOMTokenList.prototype[x];DOMTokenList.prototype[x]=function(P){var L,F=arguments.length;for(L=0;L<F;L++)P=arguments[L],M.call(this,P)}};U("add"),U("remove")}if(T.classList.toggle("c3",!1),T.classList.contains("c3")){var N=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(x,M){return 1 in arguments&&!this.contains(x)==!M?M:N.call(this,x)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(x,M){var P=this.toString().split(" "),L=P.indexOf(x+"");~L&&(P=P.slice(L),this.remove.apply(this,P),this.add(M),this.add.apply(this,P.slice(1)))}),T=null}()),l(7327),l(2222),l(7941),l(4603),l(3728),l(2707),l(6699),l(2023),l(4747),l(9601),l(1249),l(1038),l(8783),l(2526),l(5003),l(9337),l(1817),l(2165),l(6992),l(3948),l(3161),l(9653),l(4723),l(5827),l(6210);var g=function(){function T(M){var P=M.getOptions,L=M.getCaretPosition,F=M.getCaretPositionEnd,q=M.dispatch;(function(j,W){if(!(j instanceof W))throw new TypeError("Cannot call a class as a function")})(this,T),v(this,"isStandardButton",function(j){return j&&!(j[0]==="{"&&j[j.length-1]==="}")}),this.getOptions=P,this.getCaretPosition=L,this.getCaretPositionEnd=F,this.dispatch=q,T.bindMethods(T,this)}var U,N,x;return U=T,x=[{key:"bindMethods",value:function(M,P){var L,F=function(j,W){var D=typeof Symbol<"u"&&j[Symbol.iterator]||j["@@iterator"];if(!D){if(Array.isArray(j)||(D=h(j))){D&&(j=D);var C=0,R=function(){};return{s:R,n:function(){return C>=j.length?{done:!0}:{done:!1,value:j[C++]}},e:function(Y){throw Y},f:R}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O,B=!0,G=!1;return{s:function(){D=D.call(j)},n:function(){var Y=D.next();return B=Y.done,Y},e:function(Y){G=!0,O=Y},f:function(){try{B||D.return==null||D.return()}finally{if(G)throw O}}}}(Object.getOwnPropertyNames(M.prototype));try{for(F.s();!(L=F.n()).done;){var q=L.value;q==="constructor"||q==="bindMethods"||(P[q]=P[q].bind(P))}}catch(j){F.e(j)}finally{F.f()}}}],(N=[{key:"getButtonType",value:function(M){return M.includes("{")&&M.includes("}")&&M!=="{//}"?"functionBtn":"standardBtn"}},{key:"getButtonClass",value:function(M){var P=this.getButtonType(M),L=M.replace("{","").replace("}",""),F="";return P!=="standardBtn"&&(F=" hg-button-".concat(L)),"hg-".concat(P).concat(F)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"↑","{arrowleft}":"←","{arrowdown}":"↓","{arrowright}":"→","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{forwarddelete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(M,P,L){return(P=L?Object.assign({},this.getDefaultDiplay(),P):P||this.getDefaultDiplay())[M]||M}},{key:"getUpdatedInput",value:function(M,P,L){var F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:L,q=arguments.length>4&&arguments[4]!==void 0&&arguments[4],j=this.getOptions(),W=[L,F,q],D=P;return(M==="{bksp}"||M==="{backspace}")&&D.length>0?D=this.removeAt.apply(this,[D].concat(W)):(M==="{delete}"||M==="{forwarddelete}")&&D.length>0?D=this.removeForwardsAt.apply(this,[D].concat(W)):M==="{space}"?D=this.addStringAt.apply(this,[D," "].concat(W)):M!=="{tab}"||typeof j.tabCharOnTab=="boolean"&&j.tabCharOnTab===!1?M!=="{enter}"&&M!=="{numpadenter}"||!j.newLineOnEnter?M.includes("numpad")&&Number.isInteger(Number(M[M.length-2]))?D=this.addStringAt.apply(this,[D,M[M.length-2]].concat(W)):M==="{numpaddivide}"?D=this.addStringAt.apply(this,[D,"/"].concat(W)):M==="{numpadmultiply}"?D=this.addStringAt.apply(this,[D,"*"].concat(W)):M==="{numpadsubtract}"?D=this.addStringAt.apply(this,[D,"-"].concat(W)):M==="{numpadadd}"?D=this.addStringAt.apply(this,[D,"+"].concat(W)):M==="{numpaddecimal}"?D=this.addStringAt.apply(this,[D,"."].concat(W)):M==="{"||M==="}"?D=this.addStringAt.apply(this,[D,M].concat(W)):M.includes("{")||M.includes("}")||(D=this.addStringAt.apply(this,[D,M].concat(W))):D=this.addStringAt.apply(this,[D,`
`].concat(W)):D=this.addStringAt.apply(this,[D,"	"].concat(W)),D}},{key:"updateCaretPos",value:function(M){var P=arguments.length>1&&arguments[1]!==void 0&&arguments[1],L=this.updateCaretPosAction(M,P);this.dispatch(function(F){F.setCaretPosition(L)})}},{key:"updateCaretPosAction",value:function(M){var P=arguments.length>1&&arguments[1]!==void 0&&arguments[1],L=this.getOptions(),F=this.getCaretPosition();return F!=null&&(P?F>0&&(F-=M):F+=M),L.debug&&console.log("Caret at:",F),F}},{key:"addStringAt",value:function(M,P){var L,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M.length,q=arguments.length>3&&arguments[3]!==void 0?arguments[3]:M.length,j=arguments.length>4&&arguments[4]!==void 0&&arguments[4];return F||F===0?(L=[M.slice(0,F),P,M.slice(q)].join(""),this.isMaxLengthReached()||j&&this.updateCaretPos(P.length)):L=M+P,L}},{key:"removeAt",value:function(M){var P,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M.length,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M.length,q=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(L===0&&F===0)return M;if(L===F){var j=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;L&&L>=0?M.substring(L-2,L).match(j)?(P=M.substr(0,L-2)+M.substr(L),q&&this.updateCaretPos(2,!0)):(P=M.substr(0,L-1)+M.substr(L),q&&this.updateCaretPos(1,!0)):M.slice(-2).match(j)?(P=M.slice(0,-2),q&&this.updateCaretPos(2,!0)):(P=M.slice(0,-1),q&&this.updateCaretPos(1,!0))}else P=M.slice(0,L)+M.slice(F),q&&this.dispatch(function(W){W.setCaretPosition(L)});return P}},{key:"removeForwardsAt",value:function(M){var P,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M.length,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M.length,q=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(M==null||!M.length||L===null)return M;if(L===F){var j=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g,W=M.substring(L,L+2),D=W.match(j);P=D?M.substr(0,L)+M.substr(L+2):M.substr(0,L)+M.substr(L+1)}else P=M.slice(0,L)+M.slice(F),q&&this.dispatch(function(C){C.setCaretPosition(L)});return P}},{key:"handleMaxLength",value:function(M,P){var L=this.getOptions(),F=L.maxLength,q=M[L.inputName||"default"],j=P.length-1>=F;if(P.length<=q.length)return!1;if(Number.isInteger(F))return L.debug&&console.log("maxLength (num) reached:",j),j?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if(f(F)==="object"){var W=P.length-1>=F[L.inputName||"default"];return L.debug&&console.log("maxLength (obj) reached:",W),W?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return!!this.maxLengthReached}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return!!window.PointerEvent}},{key:"camelCase",value:function(M){return M?M.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(P,L){return L.length?P+L[0].toUpperCase()+L.slice(1):P}):""}},{key:"chunkArray",value:function(M,P){return c(Array(Math.ceil(M.length/P))).map(function(L,F){return M.slice(P*F,P+P*F)})}}])&&p(U.prototype,N),x&&p(U,x),Object.defineProperty(U,"prototype",{writable:!1}),T}();v(g,"noop",function(){});var m=g,y=function(){function T(x){var M=x.dispatch,P=x.getOptions;(function(L,F){if(!(L instanceof F))throw new TypeError("Cannot call a class as a function")})(this,T),this.dispatch=M,this.getOptions=P,m.bindMethods(T,this)}var U,N;return U=T,(N=[{key:"handleHighlightKeyDown",value:function(x){var M=this.getOptions(),P=this.getSimpleKeyboardLayoutKey(x);this.dispatch(function(L){var F,q,j=L.getButtonElement(P),W=L.getButtonElement("{".concat(P,"}"));if(j)F=j,q=P;else{if(!W)return;F=W,q="{".concat(P,"}")}F&&(F.style.backgroundColor=M.physicalKeyboardHighlightBgColor||"#dadce4",F.style.color=M.physicalKeyboardHighlightTextColor||"black",M.physicalKeyboardHighlightPress&&(M.physicalKeyboardHighlightPressUsePointerEvents?F.onpointerdown():M.physicalKeyboardHighlightPressUseClick?F.click():L.handleButtonClicked(q,x)))})}},{key:"handleHighlightKeyUp",value:function(x){var M=this.getOptions(),P=this.getSimpleKeyboardLayoutKey(x);this.dispatch(function(L){var F=L.getButtonElement(P)||L.getButtonElement("{".concat(P,"}"));F&&F.removeAttribute&&(F.removeAttribute("style"),M.physicalKeyboardHighlightPressUsePointerEvents&&F.onpointerup())})}},{key:"getSimpleKeyboardLayoutKey",value:function(x){var M,P,L=x.code||x.key||this.keyCodeToKey(x==null?void 0:x.keyCode);return(P=L!=null&&L.includes("Numpad")||L!=null&&L.includes("Shift")||L!=null&&L.includes("Space")||L!=null&&L.includes("Backspace")||L!=null&&L.includes("Control")||L!=null&&L.includes("Alt")||L!=null&&L.includes("Meta")?x.code||"":x.key||this.keyCodeToKey(x==null?void 0:x.keyCode)||"").length>1?(M=P)===null||M===void 0?void 0:M.toLowerCase():P}},{key:"keyCodeToKey",value:function(x){return{8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Meta",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9",106:"NumpadMultiply",107:"NumpadAdd",109:"NumpadSubtract",110:"NumpadDecimal",111:"NumpadDivide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}[x]}}])&&function(x,M){for(var P=0;P<M.length;P++){var L=M[P];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(x,L.key,L)}}(U.prototype,N),Object.defineProperty(U,"prototype",{writable:!1}),T}(),_=function(){function T(x){var M,P=x.utilities;(function(L,F){if(!(L instanceof F))throw new TypeError("Cannot call a class as a function")})(this,T),(M="pageIndex")in this?Object.defineProperty(this,M,{value:0,enumerable:!0,configurable:!0,writable:!0}):this[M]=0,this.utilities=P,m.bindMethods(T,this),this.pageSize=this.utilities.getOptions().layoutCandidatesPageSize||5}var U,N;return U=T,(N=[{key:"destroy",value:function(){this.candidateBoxElement&&(this.candidateBoxElement.remove(),this.pageIndex=0)}},{key:"show",value:function(x){var M=this,P=x.candidateValue,L=x.targetElement,F=x.onSelect;if(P&&P.length){var q=this.utilities.chunkArray(P.split(" "),this.pageSize);this.renderPage({candidateListPages:q,targetElement:L,pageIndex:this.pageIndex,nbPages:q.length,onItemSelected:function(j,W){F(j,W),M.destroy()}})}}},{key:"renderPage",value:function(x){var M,P=this,L=x.candidateListPages,F=x.targetElement,q=x.pageIndex,j=x.nbPages,W=x.onItemSelected;(M=this.candidateBoxElement)===null||M===void 0||M.remove(),this.candidateBoxElement=document.createElement("div"),this.candidateBoxElement.className="hg-candidate-box";var D=document.createElement("ul");D.className="hg-candidate-box-list",L[q].forEach(function(G){var Y=document.createElement("li"),H=function(){var te=new MouseEvent("click");return Object.defineProperty(te,"target",{value:Y}),te};Y.className="hg-candidate-box-list-item",Y.textContent=G,Y.onclick=function(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:H();return W(G,te)},D.appendChild(Y)});var C=q>0,R=document.createElement("div");R.classList.add("hg-candidate-box-prev"),C&&R.classList.add("hg-candidate-box-btn-active"),R.onclick=function(){C&&P.renderPage({candidateListPages:L,targetElement:F,pageIndex:q-1,nbPages:j,onItemSelected:W})},this.candidateBoxElement.appendChild(R),this.candidateBoxElement.appendChild(D);var O=q<j-1,B=document.createElement("div");B.classList.add("hg-candidate-box-next"),O&&B.classList.add("hg-candidate-box-btn-active"),B.onclick=function(){O&&P.renderPage({candidateListPages:L,targetElement:F,pageIndex:q+1,nbPages:j,onItemSelected:W})},this.candidateBoxElement.appendChild(B),F.prepend(this.candidateBoxElement)}}])&&function(x,M){for(var P=0;P<M.length;P++){var L=M[P];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(x,L.key,L)}}(U.prototype,N),Object.defineProperty(U,"prototype",{writable:!1}),T}();function b(T){return function(U){if(Array.isArray(U))return w(U)}(T)||function(U){if(typeof Symbol<"u"&&U[Symbol.iterator]!=null||U["@@iterator"]!=null)return Array.from(U)}(T)||function(U,N){if(U){if(typeof U=="string")return w(U,N);var x=Object.prototype.toString.call(U).slice(8,-1);return x==="Object"&&U.constructor&&(x=U.constructor.name),x==="Map"||x==="Set"?Array.from(U):x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)?w(U,N):void 0}}(T)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(T,U){(U==null||U>T.length)&&(U=T.length);for(var N=0,x=new Array(U);N<U;N++)x[N]=T[N];return x}function A(T){return(A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U})(T)}function E(T,U){var N=Object.keys(T);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(T);U&&(x=x.filter(function(M){return Object.getOwnPropertyDescriptor(T,M).enumerable})),N.push.apply(N,x)}return N}function I(T,U,N){return U in T?Object.defineProperty(T,U,{value:N,enumerable:!0,configurable:!0,writable:!0}):T[U]=N,T}var S=function(){function T(x,M){var P=this;if(function(R,O){if(!(R instanceof O))throw new TypeError("Cannot call a class as a function")}(this,T),I(this,"defaultName","default"),I(this,"activeInputElement",null),I(this,"handleParams",function(R,O){var B,G,Y;if(typeof R=="string")B=R.split(".").join(""),G=document.querySelector(".".concat(B)),Y=O;else if(R instanceof HTMLDivElement){if(!R.className)throw console.warn("Any DOM element passed as parameter must have a class."),new Error("KEYBOARD_DOM_CLASS_ERROR");B=R.className.split(" ")[0],G=R,Y=O}else B="simple-keyboard",G=document.querySelector(".".concat(B)),Y=R;return{keyboardDOMClass:B,keyboardDOM:G,options:Y}}),I(this,"getOptions",function(){return P.options}),I(this,"getCaretPosition",function(){return P.caretPosition}),I(this,"getCaretPositionEnd",function(){return P.caretPositionEnd}),I(this,"registerModule",function(R,O){P.modules[R]||(P.modules[R]={}),O(P.modules[R])}),I(this,"getKeyboardClassString",function(){for(var R=arguments.length,O=new Array(R),B=0;B<R;B++)O[B]=arguments[B];var G=[P.keyboardDOMClass].concat(O).filter(function(Y){return!!Y});return G.join(" ")}),typeof window<"u"){var L=this.handleParams(x,M),F=L.keyboardDOMClass,q=L.keyboardDOM,j=L.options,W=j===void 0?{}:j;this.utilities=new m({getOptions:this.getOptions,getCaretPosition:this.getCaretPosition,getCaretPositionEnd:this.getCaretPositionEnd,dispatch:this.dispatch}),this.caretPosition=null,this.caretPositionEnd=null,this.keyboardDOM=q,this.options=function(R){for(var O=1;O<arguments.length;O++){var B=arguments[O]!=null?arguments[O]:{};O%2?E(Object(B),!0).forEach(function(G){I(R,G,B[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(B)):E(Object(B)).forEach(function(G){Object.defineProperty(R,G,Object.getOwnPropertyDescriptor(B,G))})}return R}({layoutName:"default",theme:"hg-theme-default",inputName:"default",preventMouseDownDefault:!1,enableLayoutCandidates:!0,excludeFromLayout:{}},W),this.keyboardPluginClasses="",m.bindMethods(T,this);var D=this.options.inputName,C=D===void 0?this.defaultName:D;if(this.input={},this.input[C]="",this.keyboardDOMClass=F,this.buttonElements={},window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),this.currentInstanceName=this.utilities.camelCase(this.keyboardDOMClass),window.SimpleKeyboardInstances[this.currentInstanceName]=this,this.allKeyboardInstances=window.SimpleKeyboardInstances,this.keyboardInstanceNames=Object.keys(window.SimpleKeyboardInstances),this.isFirstKeyboardInstance=this.keyboardInstanceNames[0]===this.currentInstanceName,this.physicalKeyboard=new y({dispatch:this.dispatch,getOptions:this.getOptions}),this.candidateBox=this.options.enableLayoutCandidates?new _({utilities:this.utilities}):null,!this.keyboardDOM)throw console.warn('".'.concat(F,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),this.modules={},this.loadModules()}}var U,N;return U=T,(N=[{key:"setCaretPosition",value:function(x){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x;this.caretPosition=x,this.caretPositionEnd=M}},{key:"getInputCandidates",value:function(x){var M=this,P=this.options,L=P.layoutCandidates,F=P.layoutCandidatesCaseSensitiveMatch;if(!L||A(L)!=="object")return{};var q=Object.keys(L).filter(function(D){var C=x.substring(0,M.getCaretPositionEnd()||0)||x,R=new RegExp("".concat(D,"$"),F?"g":"gi");return!!b(C.matchAll(R)).length});if(q.length>1){var j=q.sort(function(D,C){return C.length-D.length})[0];return{candidateKey:j,candidateValue:L[j]}}if(q.length){var W=q[0];return{candidateKey:W,candidateValue:L[W]}}return{}}},{key:"showCandidatesBox",value:function(x,M,P){var L=this;this.candidateBox&&this.candidateBox.show({candidateValue:M,targetElement:P,onSelect:function(F,q){var j=L.options.layoutCandidatesCaseSensitiveMatch,W=F.normalize("NFD"),D=L.getInput(L.options.inputName,!0),C=L.getCaretPositionEnd()||0,R=D.substring(0,C||0)||D,O=new RegExp("".concat(x,"$"),j?"g":"gi"),B=R.replace(O,W),G=D.replace(R,B),Y=B.length-R.length,H=(C||D.length)+Y;H<0&&(H=0),L.setInput(G,L.options.inputName,!0),L.setCaretPosition(H),typeof L.options.onChange=="function"&&L.options.onChange(L.getInput(L.options.inputName,!0),q),typeof L.options.onChangeAll=="function"&&L.options.onChangeAll(L.getAllInputs(),q)}})}},{key:"handleButtonClicked",value:function(x,M){var P=this.options,L=P.inputName,F=L===void 0?this.defaultName:L,q=P.debug;if(x!=="{//}"){this.input[F]||(this.input[F]="");var j=this.utilities.getUpdatedInput(x,this.input[F],this.caretPosition,this.caretPositionEnd);if(this.utilities.isStandardButton(x)&&this.activeInputElement&&this.input[F]&&this.input[F]===j&&this.caretPosition===0&&this.caretPositionEnd===j.length)return this.setInput("",this.options.inputName,!0),this.setCaretPosition(0),this.activeInputElement.value="",this.activeInputElement.setSelectionRange(0,0),void this.handleButtonClicked(x,M);if(typeof this.options.onKeyPress=="function"&&this.options.onKeyPress(x,M),this.input[F]!==j&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(j))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,j))return;var W=this.utilities.getUpdatedInput(x,this.input[F],this.caretPosition,this.caretPositionEnd,!0);if(this.setInput(W,this.options.inputName,!0),q&&console.log("Input changed:",this.getAllInputs()),this.options.debug&&console.log("Caret at: ",this.getCaretPosition(),this.getCaretPositionEnd(),"(".concat(this.keyboardDOMClass,")")),this.options.syncInstanceInputs&&this.syncInstanceInputs(),typeof this.options.onChange=="function"&&this.options.onChange(this.getInput(this.options.inputName,!0),M),typeof this.options.onChangeAll=="function"&&this.options.onChangeAll(this.getAllInputs(),M),M!=null&&M.target&&this.options.enableLayoutCandidates){var D,C=this.getInputCandidates(j),R=C.candidateKey,O=C.candidateValue;R&&O?this.showCandidatesBox(R,O,this.keyboardDOM):(D=this.candidateBox)===null||D===void 0||D.destroy()}}q&&console.log("Key pressed:",x)}}},{key:"getMouseHold",value:function(){return this.isMouseHold}},{key:"setMouseHold",value:function(x){this.options.syncInstanceInputs?this.dispatch(function(M){M.isMouseHold=x}):this.isMouseHold=x}},{key:"handleButtonMouseDown",value:function(x,M){var P=this;M&&(this.options.preventMouseDownDefault&&M.preventDefault(),this.options.stopMouseDownPropagation&&M.stopPropagation(),M.target.classList.add(this.activeButtonClass)),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.setMouseHold(!0),this.options.disableButtonHold||(this.holdTimeout=window.setTimeout(function(){(P.getMouseHold()&&(!x.includes("{")&&!x.includes("}")||x==="{delete}"||x==="{backspace}"||x==="{bksp}"||x==="{space}"||x==="{tab}")||x==="{arrowright}"||x==="{arrowleft}"||x==="{arrowup}"||x==="{arrowdown}")&&(P.options.debug&&console.log("Button held:",x),P.handleButtonHold(x)),clearTimeout(P.holdTimeout)},500))}},{key:"handleButtonMouseUp",value:function(x,M){var P=this;M&&(this.options.preventMouseUpDefault&&M.preventDefault&&M.preventDefault(),this.options.stopMouseUpPropagation&&M.stopPropagation&&M.stopPropagation(),!(M.target===this.keyboardDOM||M.target&&this.keyboardDOM.contains(M.target)||this.candidateBox&&this.candidateBox.candidateBoxElement&&(M.target===this.candidateBox.candidateBoxElement||M.target&&this.candidateBox.candidateBoxElement.contains(M.target)))&&this.candidateBox&&this.candidateBox.destroy()),this.recurseButtons(function(L){L.classList.remove(P.activeButtonClass)}),this.setMouseHold(!1),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),x&&typeof this.options.onKeyReleased=="function"&&this.options.onKeyReleased(x)}},{key:"handleKeyboardContainerMouseDown",value:function(x){this.options.preventMouseDownDefault&&x.preventDefault()}},{key:"handleButtonHold",value:function(x){var M=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=window.setTimeout(function(){M.getMouseHold()?(M.handleButtonClicked(x),M.handleButtonHold(x)):clearTimeout(M.holdInteractionTimeout)},100)}},{key:"syncInstanceInputs",value:function(){var x=this;this.dispatch(function(M){M.replaceInput(x.input),M.setCaretPosition(x.caretPosition,x.caretPositionEnd)})}},{key:"clearInput",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.inputName||this.defaultName;this.input[x]="",this.setCaretPosition(0),this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"getInput",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.inputName||this.defaultName,M=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(this.options.syncInstanceInputs&&!M&&this.syncInstanceInputs(),this.options.rtl){var P=this.input[x].replace("‫","").replace("‬","");return"‫"+P+"‬"}return this.input[x]}},{key:"getAllInputs",value:function(){var x=this,M={};return Object.keys(this.input).forEach(function(P){M[P]=x.getInput(P,!0)}),M}},{key:"setInput",value:function(x){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.inputName||this.defaultName,P=arguments.length>2?arguments[2]:void 0;this.input[M]=x,!P&&this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"replaceInput",value:function(x){this.input=x}},{key:"setOptions",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},M=this.changedOptions(x);this.options=Object.assign(this.options,x),M.length&&(this.options.debug&&console.log("changedOptions",M),this.onSetOptions(M),this.render())}},{key:"changedOptions",value:function(x){var M=this;return Object.keys(x).filter(function(P){return JSON.stringify(x[P])!==JSON.stringify(M.options[P])})}},{key:"onSetOptions",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];x.includes("layoutName")&&this.candidateBox&&this.candidateBox.destroy(),(x.includes("layoutCandidatesPageSize")||x.includes("layoutCandidates"))&&this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=new _({utilities:this.utilities}))}},{key:"resetRows",value:function(){this.keyboardRowsDOM&&this.keyboardRowsDOM.remove(),this.keyboardDOM.className=this.keyboardDOMClass,this.keyboardDOM.setAttribute("data-skInstance",this.currentInstanceName),this.buttonElements={}}},{key:"dispatch",value:function(x){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach(function(M){x(window.SimpleKeyboardInstances[M],M)})}},{key:"addButtonTheme",value:function(x,M){var P=this;M&&x&&(x.split(" ").forEach(function(L){M.split(" ").forEach(function(F){P.options.buttonTheme||(P.options.buttonTheme=[]);var q=!1;P.options.buttonTheme.map(function(j){if(j!=null&&j.class.split(" ").includes(F)){q=!0;var W=j.buttons.split(" ");W.includes(L)||(q=!0,W.push(L),j.buttons=W.join(" "))}return j}),q||P.options.buttonTheme.push({class:F,buttons:x})})}),this.render())}},{key:"removeButtonTheme",value:function(x,M){var P=this;if(!x&&!M)return this.options.buttonTheme=[],void this.render();x&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(x.split(" ").forEach(function(L){var F,q;(F=P.options)===null||F===void 0||(q=F.buttonTheme)===null||q===void 0||q.map(function(j,W){if(j&&M&&M.includes(j.class)||!M){var D,C,R=(D=j)===null||D===void 0?void 0:D.buttons.split(" ").filter(function(O){return O!==L});j&&R!=null&&R.length?j.buttons=R.join(" "):((C=P.options.buttonTheme)===null||C===void 0||C.splice(W,1),j=null)}return j})}),this.render())}},{key:"getButtonElement",value:function(x){var M,P=this.buttonElements[x];return P&&(M=P.length>1?P:P[0]),M}},{key:"inputPatternIsValid",value:function(x){var M,P=this.options.inputPattern;if((M=P instanceof RegExp?P:P[this.options.inputName||this.defaultName])&&x){var L=M.test(x);return this.options.debug&&console.log('inputPattern ("'.concat(M,'"): ').concat(L?"passed":"did not pass!")),L}return!0}},{key:"setEventListeners",value:function(){!this.isFirstKeyboardInstance&&this.allKeyboardInstances||(this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")")),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleTouchEnd),document.addEventListener("select",this.handleSelect),document.addEventListener("selectionchange",this.handleSelectionChange))}},{key:"handleKeyUp",value:function(x){this.caretEventHandler(x),this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyUp(x)}},{key:"handleKeyDown",value:function(x){this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyDown(x)}},{key:"handleMouseUp",value:function(x){this.caretEventHandler(x)}},{key:"handleTouchEnd",value:function(x){this.caretEventHandler(x)}},{key:"handleSelect",value:function(x){this.caretEventHandler(x)}},{key:"handleSelectionChange",value:function(x){this.caretEventHandler(x)}},{key:"caretEventHandler",value:function(x){var M,P=this;x.target.tagName&&(M=x.target.tagName.toLowerCase()),this.dispatch(function(L){var F=x.target===L.keyboardDOM||x.target&&L.keyboardDOM.contains(x.target);P.options.syncInstanceInputs&&Array.isArray(x.path)&&(F=x.path.some(function(q){var j;return q==null||(j=q.hasAttribute)===null||j===void 0?void 0:j.call(q,"data-skInstance")})),(M==="textarea"||M==="input"&&["text","search","url","tel","password"].includes(x.target.type))&&!L.options.disableCaretPositioning?(L.setCaretPosition(x.target.selectionStart,x.target.selectionEnd),P.activeInputElement=x.target,L.options.debug&&console.log("Caret at: ",L.getCaretPosition(),L.getCaretPositionEnd(),x&&x.target.tagName.toLowerCase(),"(".concat(L.keyboardDOMClass,")"))):!L.options.disableCaretPositioning&&F||(x==null?void 0:x.type)==="selectionchange"||(L.setCaretPosition(null),P.activeInputElement=null,L.options.debug&&console.log('Caret position reset due to "'.concat(x==null?void 0:x.type,'" event'),x))})}},{key:"recurseButtons",value:function(x){var M=this;x&&Object.keys(this.buttonElements).forEach(function(P){return M.buttonElements[P].forEach(x)})}},{key:"destroy",value:function(){this.options.debug&&console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName)),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleTouchEnd),document.removeEventListener("select",this.handleSelect),document.removeEventListener("selectionchange",this.handleSelectionChange),document.onpointerup=null,document.ontouchend=null,document.ontouchcancel=null,document.onmouseup=null,this.recurseButtons(function(x){x&&(x.onpointerdown=null,x.onpointerup=null,x.onpointercancel=null,x.ontouchstart=null,x.ontouchend=null,x.ontouchcancel=null,x.onclick=null,x.onmousedown=null,x.onmouseup=null,x.remove(),x=null)}),this.keyboardDOM.onpointerdown=null,this.keyboardDOM.ontouchstart=null,this.keyboardDOM.onmousedown=null,this.resetRows(),this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=null),this.activeInputElement=null,this.keyboardDOM.removeAttribute("data-skInstance"),this.keyboardDOM.innerHTML="",window.SimpleKeyboardInstances[this.currentInstanceName]=null,delete window.SimpleKeyboardInstances[this.currentInstanceName],this.initialized=!1}},{key:"getButtonThemeClasses",value:function(x){var M=this.options.buttonTheme,P=[];return Array.isArray(M)&&M.forEach(function(L){if(L&&L.class&&typeof L.class=="string"&&L.buttons&&typeof L.buttons=="string"){var F=L.class.split(" ");L.buttons.split(" ").includes(x)&&(P=[].concat(b(P),b(F)))}else console.warn('Incorrect "buttonTheme". Please check the documentation.',L)}),P}},{key:"setDOMButtonAttributes",value:function(x,M){var P=this.options.buttonAttributes;Array.isArray(P)&&P.forEach(function(L){L.attribute&&typeof L.attribute=="string"&&L.value&&typeof L.value=="string"&&L.buttons&&typeof L.buttons=="string"?L.buttons.split(" ").includes(x)&&M(L.attribute,L.value):console.warn('Incorrect "buttonAttributes". Please check the documentation.',L)})}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(x){if(x.target.classList.contains("hg-button"))return x.preventDefault(),x.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.setEventListeners(),typeof this.options.onInit=="function"&&this.options.onInit(this)}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),typeof this.options.beforeFirstRender=="function"&&this.options.beforeFirstRender(this),this.isFirstKeyboardInstance&&this.utilities.pointerEventsSupported()&&!this.options.useTouchEvents&&!this.options.useMouseEvents&&this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){typeof this.options.beforeRender=="function"&&this.options.beforeRender(this)}},{key:"onRender",value:function(){typeof this.options.onRender=="function"&&this.options.onRender(this)}},{key:"onModulesLoaded",value:function(){typeof this.options.onModulesLoaded=="function"&&this.options.onModulesLoaded(this)}},{key:"loadModules",value:function(){var x=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach(function(M){var P=new M(x);P.init&&P.init(x)}),this.keyboardPluginClasses="modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(x,M){return!!this.modules[x]&&this.modules[x][M]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(x,M,P,L){var F=this,q=Array.from(x.children),j=0;return q.length&&P.forEach(function(W,D){var C=L[D];if(!(C&&C>W))return!1;var R=W-j,O=C-j,B=document.createElement("div");B.className+="hg-button-container";var G="".concat(F.options.layoutName,"-r").concat(M,"c").concat(D);B.setAttribute("data-skUID",G);var Y=q.splice(R,O-R+1);j=O-R,Y.forEach(function(H){return B.appendChild(H)}),q.splice(R,0,B),x.innerHTML="",q.forEach(function(H){return x.appendChild(H)}),F.options.debug&&console.log("rowDOMContainer",Y,R,O,j+1)}),x}},{key:"render",value:function(){var x=this;this.resetRows(),this.initialized||this.beforeFirstRender(),this.beforeRender();var M="hg-layout-".concat(this.options.layoutName),P=this.options.layout||{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},L=this.options.useTouchEvents||!1,F=L?"hg-touch-events":"",q=this.options.useMouseEvents||!1,j=this.options.disableRowButtonContainers;this.keyboardDOM.className=this.getKeyboardClassString(this.options.theme,M,this.keyboardPluginClasses,F),this.keyboardDOM.setAttribute("data-skInstance",this.currentInstanceName),this.keyboardRowsDOM=document.createElement("div"),this.keyboardRowsDOM.className="hg-rows",P[this.options.layoutName||this.defaultName].forEach(function(W,D){var C=W.split(" ");x.options.excludeFromLayout&&x.options.excludeFromLayout[x.options.layoutName||x.defaultName]&&(C=C.filter(function(G){return x.options.excludeFromLayout&&!x.options.excludeFromLayout[x.options.layoutName||x.defaultName].includes(G)}));var R=document.createElement("div");R.className+="hg-row";var O=[],B=[];C.forEach(function(G,Y){var H,te=!j&&typeof G=="string"&&G.length>1&&G.indexOf("[")===0,ue=!j&&typeof G=="string"&&G.length>1&&G.indexOf("]")===G.length-1;te&&(O.push(Y),G=G.replace(/\[/g,"")),ue&&(B.push(Y),G=G.replace(/\]/g,""));var _e=x.utilities.getButtonClass(G),J=x.utilities.getButtonDisplayName(G,x.options.display,x.options.mergeDisplay),re=x.options.useButtonTag?"button":"div",pe=document.createElement(re);pe.className+="hg-button ".concat(_e),(H=pe.classList).add.apply(H,b(x.getButtonThemeClasses(G))),x.setDOMButtonAttributes(G,function(ye,$e){pe.setAttribute(ye,$e)}),x.activeButtonClass="hg-activeButton",!x.utilities.pointerEventsSupported()||L||q?L?(pe.ontouchstart=function(ye){x.handleButtonClicked(G,ye),x.handleButtonMouseDown(G,ye)},pe.ontouchend=function(ye){x.handleButtonMouseUp(G,ye)},pe.ontouchcancel=function(ye){x.handleButtonMouseUp(G,ye)}):(pe.onclick=function(ye){x.setMouseHold(!1),typeof x.options.onKeyReleased!="function"&&x.handleButtonClicked(G,ye)},pe.onmousedown=function(ye){typeof x.options.onKeyReleased!="function"||x.isMouseHold||x.handleButtonClicked(G,ye),x.handleButtonMouseDown(G,ye)},pe.onmouseup=function(ye){x.handleButtonMouseUp(G,ye)}):(pe.onpointerdown=function(ye){x.handleButtonClicked(G,ye),x.handleButtonMouseDown(G,ye)},pe.onpointerup=function(ye){x.handleButtonMouseUp(G,ye)},pe.onpointercancel=function(ye){x.handleButtonMouseUp(G,ye)}),pe.setAttribute("data-skBtn",G);var we="".concat(x.options.layoutName,"-r").concat(D,"b").concat(Y);pe.setAttribute("data-skBtnUID",we);var me=document.createElement("span");me.innerHTML=J,pe.appendChild(me),x.buttonElements[G]||(x.buttonElements[G]=[]),x.buttonElements[G].push(pe),R.appendChild(pe)}),R=x.parseRowDOMContainers(R,D,O,B),x.keyboardRowsDOM.appendChild(R)}),this.keyboardDOM.appendChild(this.keyboardRowsDOM),this.onRender(),this.initialized||(this.initialized=!0,!this.utilities.pointerEventsSupported()||L||q?L?(document.ontouchend=function(W){return x.handleButtonMouseUp(void 0,W)},document.ontouchcancel=function(W){return x.handleButtonMouseUp(void 0,W)},this.keyboardDOM.ontouchstart=function(W){return x.handleKeyboardContainerMouseDown(W)}):L||(document.onmouseup=function(W){return x.handleButtonMouseUp(void 0,W)},this.keyboardDOM.onmousedown=function(W){return x.handleKeyboardContainerMouseDown(W)}):(document.onpointerup=function(W){return x.handleButtonMouseUp(void 0,W)},this.keyboardDOM.onpointerdown=function(W){return x.handleKeyboardContainerMouseDown(W)}),this.onInit())}}])&&function(x,M){for(var P=0;P<M.length;P++){var L=M[P];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(x,L.key,L)}}(U.prototype,N),Object.defineProperty(U,"prototype",{writable:!1}),T}()}(),d}()},typeof n=="object"&&typeof i=="object"?i.exports=r():typeof n=="object"?n.SimpleKeyboard=r():this.SimpleKeyboard=r()},{}],17:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Build=void 0,n.Build={short:"0.73.9",version:"0.73.9 (2b193a42bb8728577711b215f2ee7fa1)",buildSeed:1673510059952}},{}],18:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deprecatedButton=n.createButton=void 0;const r=e("../dom/keys"),o=e("../dom/pointer"),a=function(){const m={};for(const y of Object.keys(r.namedKeyCodes))m[r.namedKeyCodes[y]]=y.substr(4,2);return m}();function l(m,y,_){const b=Math.round(.6*_),w=Math.round(.5*_),A=Math.max(1,Math.round(_/20)),E=g[m.toLowerCase()],I=E===void 0?m:"",S=d("emulator-button-touch-zone"),T=d("emulator-button"),U=d("emulator-button-text",E===void 0?I===void 0||I.length===0?"□":I.substr(0,1).toUpperCase():"");E!==void 0&&(T.style.backgroundImage='url("'+E+'")'),T.style.width=b+"px",T.style.height=b+"px",U.style.fontSize=w+"px",S.widthPx=_-2*A,S.heightPx=_-2*A,S.style.width=S.widthPx+"px",S.style.height=S.heightPx+"px",S.style.borderWidth=A+"px",S.appendChild(T),S.appendChild(U);const N=L=>{y.onDown!==void 0&&y.onDown(),y.onClick!==void 0&&y.onClick(),L.stopPropagation(),L.preventDefault()},x=L=>{y.onUp!==void 0&&y.onUp(),L.stopPropagation(),L.preventDefault()},M=L=>{L.stopPropagation(),L.preventDefault()},P={capture:!0};for(const L of o.pointer.starters)S.addEventListener(L,N,P);for(const L of o.pointer.enders)S.addEventListener(L,x,P);for(const L of o.pointer.changers)S.addEventListener(L,M,P);for(const L of o.pointer.leavers)S.addEventListener(L,M,P);for(const L of o.pointer.prevents)S.addEventListener(L,M,P);return S}function d(m,y){const _=document.createElement("div");return _.className=m,y!==void 0&&(_.innerHTML=y),_}function c(m){return typeof m=="number"?a[m]:m}function h(m,y){return m.action==="click"?{onClick:()=>y.fireKeyPress(m.mapTo)}:{onDown:()=>y.fireKeyDown(m.mapTo),onUp:()=>y.fireKeyUp(m.mapTo)}}n.createButton=l,n.deprecatedButton=function(m,y,_,b){const w=Math.round(b/4),A=[];for(const E of _){if(E.mapTo===r.KBD_NONE)continue;const I=l((E.symbol||c(E.mapTo)).toUpperCase(),h(E,m),b);I.style.position="absolute";const S=E.style;if(S)for(const T of Object.keys(S))I.style[T]=S[T];if(E.position!==void 0){const T=E.position.left,U=E.position.top,N=E.position.bottom,x=E.position.right;T!==void 0&&(I.style.left=w*T+b*(T-1)+"px"),x!==void 0&&(I.style.right=w*x+b*(x-1)+"px"),U!==void 0&&(I.style.top=w*U+b*(U-1)+"px"),N!==void 0&&(I.style.bottom=w*N+b*(N-1)+"px")}m.mouseOverlay.appendChild(I),A.push(I)}return()=>{for(const E of A)E.parentElement===m.mouseOverlay&&m.mouseOverlay.removeChild(E)}};const s="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19,12c-0.3,0-0.5,0.1-0.7,0.3L14,16.6V3c0-0.5-0.4-1-1-1s-1,0.5-1,1v13.6 l-4.3-4.3C7.5,12.1,7.3,12,7,12c-0.5,0-1,0.4-1,1c0,0.3,0.1,0.5,0.3,0.7l6,6c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6-6 c0.2-0.2,0.3-0.4,0.3-0.7C20,12.4,19.5,12,19,12L19,12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",f="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='left_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,9H4.41l4.29-4.29C8.89,4.53,9,4.28,9,4c0-0.55-0.45-1-1-1 C7.72,3,7.47,3.11,7.29,3.29l-6,6C1.11,9.47,1,9.72,1,10c0,0.28,0.11,0.53,0.29,0.71l6,6C7.47,16.89,7.72,17,8,17 c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,11H18c0.55,0,1-0.45,1-1C19,9.45,18.55,9,18,9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",p="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='right_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.71,9.29l-6-6C12.53,3.11,12.28,3,12,3c-0.55,0-1,0.45-1,1 c0,0.28,0.11,0.53,0.29,0.71L15.59,9H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h13.59l-4.29,4.29C11.11,15.47,11,15.72,11,16 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l6-6C18.89,10.53,19,10.28,19,10C19,9.72,18.89,9.47,18.71,9.29z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",v="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='key_enter_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,2c-0.55,0-1,0.45-1,1v5c0,2.21-1.79,4-4,4H4.41l2.29-2.29 C6.89,9.53,7,9.28,7,9c0-0.55-0.45-1-1-1C5.72,8,5.47,8.11,5.29,8.29l-4,4C1.11,12.47,1,12.72,1,13c0,0.28,0.11,0.53,0.29,0.71 l4,4C5.47,17.89,5.72,18,6,18c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,14H13c3.31,0,6-2.69,6-6V3C19,2.45,18.55,2,18,2 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",g={fullscreen:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='maximize_1_' fill='%23FFFFFF'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",save:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' fill='%23FFFFFF' xml:space='preserve'%3E%3Cg id='floppy_disk'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",options:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='cog_2_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19,8h-2.31c-0.14-0.46-0.33-0.89-0.56-1.3l1.7-1.7c0.39-0.39,0.39-1.02,0-1.41 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.7,1.7c-0.41-0.22-0.84-0.41-1.3-0.55V1c0-0.55-0.45-1-1-1H9C8.45,0,8,0.45,8,1v2.33 C7.52,3.47,7.06,3.67,6.63,3.91L5,2.28c-0.37-0.37-0.98-0.37-1.36,0L2.28,3.64C1.91,4.02,1.91,4.63,2.28,5l1.62,1.62 C3.66,7.06,3.46,7.51,3.31,8H1C0.45,8,0,8.45,0,9v2c0,0.55,0.45,1,1,1h2.31c0.14,0.46,0.33,0.89,0.56,1.3L2.17,15 c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l1.7-1.7c0.41,0.22,0.84,0.41,1.3,0.55V19c0,0.55,0.45,1,1,1h2 c0.55,0,1-0.45,1-1v-2.33c0.48-0.14,0.94-0.35,1.37-0.59L15,17.72c0.37,0.37,0.98,0.37,1.36,0l1.36-1.36 c0.37-0.37,0.37-0.98,0-1.36l-1.62-1.62c0.24-0.43,0.45-0.89,0.6-1.38H19c0.55,0,1-0.45,1-1V9C20,8.45,19.55,8,19,8z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",keyboard:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='manually_entered_data_2_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' clip-rule='evenodd' d='M1,8h3.76l2-2H1C0.45,6,0,6.45,0,7C0,7.55,0.45,8,1,8z M15.49,3.99 C15.8,3.67,16,3.23,16,2.75C16,1.78,15.22,1,14.25,1c-0.48,0-0.92,0.2-1.24,0.51l-1.44,1.44l2.47,2.47L15.49,3.99z M1,4h7.76l2-2 H1C0.45,2,0,2.45,0,3C0,3.55,0.45,4,1,4z M1,10c-0.55,0-1,0.45-1,1c0,0.48,0.35,0.86,0.8,0.96L2.76,10H1z M10.95,3.57l-6.69,6.69 l2.47,2.47l6.69-6.69L10.95,3.57z M15.2,6.04L13.24,8H15c0.55,0,1-0.45,1-1C16,6.52,15.65,6.14,15.2,6.04z M2,15l3.86-1.39 l-2.46-2.44L2,15z M15,10h-3.76l-2,2H15c0.55,0,1-0.45,1-1C16,10.45,15.55,10,15,10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",up:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19.7,8.3l-6-6C13.5,2.1,13.3,2,13,2s-0.5,0.1-0.7,0.3l-6,6C6.1,8.5,6,8.7,6,9 c0,0.6,0.5,1,1,1c0.3,0,0.5-0.1,0.7-0.3L12,5.4V19c0,0.5,0.4,1,1,1s1-0.5,1-1V5.4l4.3,4.3C18.5,9.9,18.7,10,19,10c0.5,0,1-0.4,1-1 C20,8.7,19.9,8.5,19.7,8.3L19.7,8.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",down:s,do:s,dw:s,dwn:s,left:f,le:f,lft:f,right:p,ri:p,rght:p,rgh:p,enter:v,en:v,enr:v,ent:v,entr:v}},{"../dom/keys":32,"../dom/pointer":36}],19:[function(e,i,n){function r(o,a,l){return a in o?Object.defineProperty(o,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[a]=l,o}Object.defineProperty(n,"__esModule",{value:!0}),n.getGrid=void 0,n.getGrid=function(o){switch(o){case"square":return new class{constructor(){r(this,"aspect",.625)}getConfiguration(a,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;const c=this.getCols(),h=this.getRows(),s=Math.floor(c/2),f=Math.floor(h/2),p=5*a/100/2,v=p,g=(a-2*p)/c*d,m=(l-2*v)/h*d,y=Math.min(g,m),_=[];for(let b=0;b<h;++b){const w=[];for(let A=0;A<c;++A)w.push({centerX:A<s?p+y*(A+.5):a-p-y*(c-A-1+.5),centerY:b<f?v+y*(b+.5):l-v-y*(h-b-1+.5)});_.push(w)}return{gridType:"square",cells:_,columnWidth:y,rowHeight:y,columnsPadding:p,rowsPadding:v,width:a,height:l}}getCols(){return 10}getRows(){return Math.floor(this.getCols()*this.aspect)+1}};case"honeycomb":return new class{constructor(){r(this,"aspect",.625)}getConfiguration(a,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;const c=this.getCols(),h=this.getRows(),s=Math.floor(c/2),f=Math.floor(h/2),p=5*a/100/2,v=p,g=(a-2*p)/c*d,m=(l-2*v)/h*d,y=Math.min(g,m),_=[];for(let b=0;b<h;++b){const w=[],A=b%2==0?c:c-1,E=b%2==0?0:y/2;for(let I=0;I<A;++I)w.push({centerX:I<s?E+p+y*(I+.5):E+a-p-y*(c-I-1+.5),centerY:b<f?v+y*(b+.5):l-v-y*(h-b-1+.5)});_.push(w)}return{gridType:"honeycomb",cells:_,columnWidth:y,rowHeight:y,columnsPadding:p,rowsPadding:v,width:a,height:l}}getCols(){return 10}getRows(){return Math.floor(this.getCols()*this.aspect)+1}}}throw new Error("Unknown grid type "+o)}},{}],20:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.keyboard=void 0,n.keyboard=function(r,o,a){const l=a||{};function d(c){return l[c]!==void 0?l[c]:c}return r.setOnKeyDown(c=>{o.sendKeyEvent(d(c),!0)}),r.setOnKeyUp(c=>{o.sendKeyEvent(d(c),!1)}),r.setOnKeyPress(c=>{o.simulateKeyPress(d(c))}),r.setOnKeysPress(c=>{o.simulateKeyPress(...c)}),()=>{r.setOnKeyDown(c=>{}),r.setOnKeyUp(c=>{}),r.setOnKeyPress(c=>{}),r.setOnKeysPress(c=>{})}}},{}],21:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.extractLayersConfig=void 0,n.extractLayersConfig=function(r){return r.layersConfig!==void 0?(r.layersConfig.version===1&&function(o){for(const a of o.layers)for(const l of a.controls)if(l.type==="Key"){const d=l;typeof d.mapTo=="number"&&(d.mapTo=[d.mapTo])}}(r.layersConfig),r.layersConfig):r.layers!==void 0?r.layers:null}},{}],22:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.initLayersControl=void 0;const r=e("./grid"),o=e("./button"),a=e("./keyboard"),l=e("./mouse/mouse-common"),d=e("./options"),c=e("../dom/pointer"),h=e("nipplejs");n.initLayersControl=function(m,y,_,b,w,A,E){let I=y.layers[0];if(E!==void 0){for(const S of y.layers)if(S.title===E){I=S;break}}return function(S,T,U,N,x,M){const P=(0,a.keyboard)(T,U),L=(0,l.mouse)(N.autolock,N.sensitivity,T,U),F=[];function q(j,W){var D;for(const G of F)G();F.splice(0,F.length);const C=(0,r.getGrid)(S.grid).getConfiguration(j,W,M),R=new s;for(const G of S.controls){const{row:Y,column:H,type:te}=G;te==="NippleActivator"&&g(C,Y,H)}let O=-1;if(((D=T.options.optionControls)===null||D===void 0?void 0:D.length)===0)for(const G of S.controls){const{row:Y,type:H}=G;if(H==="Options"){O=Y;break}}const B={};if(x)for(const G of S.controls){const{row:Y}=G;let H=G.column;const te=C.cells[Y].length,ue=te/2;Y===O&&H>=ue&&(H=Math.min(H+1,te-1)),B[Y]===void 0&&(B[Y]={leftStart:ue,leftEnd:0,rightStart:te-1,rightEnd:ue}),H<ue?(B[Y].leftStart=Math.min(B[Y].leftStart,H),B[Y].leftEnd=Math.max(B[Y].leftEnd,H)):(B[Y].rightStart=Math.min(B[Y].rightStart,H),B[Y].rightEnd=Math.max(B[Y].rightEnd,H))}for(const G of S.controls){const Y=f[G.type];if(Y===void 0){console.error("Factory for control '"+G.type+"' is not defined");continue}const H={...G},te=C.cells[G.row].length,ue=te/2;if(O===G.row&&G.column>=ue&&(H.column=Math.min(H.column+1,te-1)),x){const{leftStart:J,leftEnd:re,rightStart:pe,rightEnd:we}=B[H.row],me=H.column<ue;me?H.column+=ue+(ue-re)-J-1:H.column-=ue+(pe-ue)-(te-we)+1,H.column>=te?(console.error("Column",H.column,"is out of bound",te,me?"[leftSide]":"[rightSide]",B),H.column=te-1):H.column<0&&(console.error("Column",H.column,"is out of bound",0,me?"[leftSide]":"[rightSide]",B),H.column=0)}const _e=Y(H,T,U,C,R,N);F.push(_e)}}return T.addOnResize(q),q(T.width,T.height),()=>{T.removeOnResize(q),P(),L();for(const j of F)j()}}(I,m,_,b,w,A)};class s{constructor(){var y,_;_={},(y="sensors")in this?Object.defineProperty(this,y,{value:_,enumerable:!0,configurable:!0,writable:!0}):this[y]=_}activate(y,_){const b=this.sensors[_+"_"+y];b!==void 0&&b.activate()}deactivate(y,_){const b=this.sensors[_+"_"+y];b!==void 0&&b.deactivate()}register(y,_,b){this.sensors[_+"_"+y]=b}}const f={Key:function(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T}=m,{centerX:U,centerY:N}=E[S][T],x={onDown:()=>{for(const P of m.mapTo)_.sendKeyEvent(P,!0)},onUp:()=>{for(const P of m.mapTo)_.sendKeyEvent(P,!1)}};if(w.register(S,T,{activate:x.onDown,deactivate:x.onUp}),v(b,S,T))return()=>{};const M=(0,o.createButton)(m.symbol,x,I);return M.style.position="absolute",M.style.left=U-M.widthPx/2+"px",M.style.top=N-M.heightPx/2+"px",y.mouseOverlay.appendChild(M),()=>y.mouseOverlay.removeChild(M)},Options:function(m,y,_,b,w,A){var E;if(((E=y.options.optionControls)===null||E===void 0?void 0:E.length)===0)return()=>{};if(y.options.optionControls!==void 0&&y.options.optionControls.length===1&&y.options.optionControls[0]==="keyboard")return p(m,y,_,b);const{cells:I,columnWidth:S,rowHeight:T}=b,{row:U,column:N}=m,{centerX:x,centerY:M}=I[U][N],P=M-T/2,L=x-S/2,F=b.width-L-S;return(0,d.options)(y,["default"],()=>{},S,P,F)},Keyboard:p,Switch:function(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T}=m,{centerX:U,centerY:N}=E[S][T],x=(0,o.createButton)(m.symbol,{onUp:()=>A.setLayersConfig(A.getLayersConfig(),m.layerName)},I);return x.style.position="absolute",x.style.left=U-x.widthPx/2+"px",x.style.top=N-x.heightPx/2+"px",y.mouseOverlay.appendChild(x),()=>{y.mouseOverlay.removeChild(x)}},ScreenMove:function(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T}=m,{centerX:U,centerY:N}=E[S][T];let x=.5,M=.5;m.direction.indexOf("up")>=0&&(M=0),m.direction.indexOf("down")>=0&&(M=1),m.direction.indexOf("left")>=0&&(x=0),m.direction.indexOf("right")>=0&&(x=1);const P={onDown:()=>{_.sendMouseMotion(x,M)},onUp:()=>{_.sendMouseMotion(.5,.5)}};if(w.register(S,T,{activate:P.onDown,deactivate:P.onUp}),v(b,S,T))return()=>{};const L=(0,o.createButton)(m.symbol,P,I);return L.style.position="absolute",L.style.left=U-L.widthPx/2+"px",L.style.top=N-L.heightPx/2+"px",y.mouseOverlay.appendChild(L),()=>y.mouseOverlay.removeChild(L)},PointerButton:function(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T,click:U}=m,{centerX:N,centerY:x}=E[S][T],M={onDown:()=>{U?_.sendMouseButton(m.button,!0):y.pointerButton=m.button},onUp:()=>{U?_.sendMouseButton(m.button,!1):y.pointerButton=0}};if(w.register(S,T,{activate:M.onDown,deactivate:M.onUp}),v(b,S,T))return()=>{};const P=(0,o.createButton)(m.symbol,M,I);return P.style.position="absolute",P.style.left=N-P.widthPx/2+"px",P.style.top=x-P.heightPx/2+"px",y.mouseOverlay.appendChild(P),()=>y.mouseOverlay.removeChild(P)},PointerMove:function(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T,x:U,y:N}=m,{centerX:x,centerY:M}=E[S][T],P={onDown:()=>{_.sendMouseMotion(U,N)},onUp:()=>{_.sendMouseMotion(U,N)}};if(w.register(S,T,{activate:P.onDown,deactivate:P.onUp}),v(b,S,T))return()=>{};const L=(0,o.createButton)(m.symbol,P,I);return L.style.position="absolute",L.style.left=x-L.widthPx/2+"px",L.style.top=M-L.heightPx/2+"px",y.mouseOverlay.appendChild(L),()=>y.mouseOverlay.removeChild(L)},PointerReset:function(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T}=m,{centerX:U,centerY:N}=E[S][T],x={onDown:()=>{_.sendMouseSync()}};if(w.register(S,T,{activate:x.onDown,deactivate:()=>{}}),v(b,S,T))return()=>{};const M=(0,o.createButton)(m.symbol,x,I);return M.style.position="absolute",M.style.left=U-M.widthPx/2+"px",M.style.top=N-M.heightPx/2+"px",y.mouseOverlay.appendChild(M),()=>y.mouseOverlay.removeChild(M)},PointerToggle:function(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T}=m,{centerX:U,centerY:N}=E[S][T],x={onDown:()=>{y.pointerDisabled=!y.pointerDisabled,y.pointerDisabled?M.classList.contains("emulator-button-highlight")||M.classList.add("emulator-button-highlight"):M.classList.remove("emulator-button-highlight")}};if(w.register(S,T,{activate:x.onDown,deactivate:()=>{}}),v(b,S,T))return()=>{};const M=(0,o.createButton)(m.symbol,x,I);return M.style.position="absolute",M.style.left=U-M.widthPx/2+"px",M.style.top=N-M.heightPx/2+"px",y.mouseOverlay.appendChild(M),()=>y.mouseOverlay.removeChild(M)},NippleActivator:function(m,y,_,b,w,A){const{cells:E,columnWidth:I,rowHeight:S,width:T,height:U}=b,{row:N,column:x}=m,{centerX:M,centerY:P}=E[N][x],L=document.createElement("div"),F=1.5,q=Math.max(0,M-I*F),j=Math.max(0,P-S*F),W=Math.max(0,T-M-I*F),D=Math.max(0,U-P-S*F);L.style.position="absolute",L.style.zIndex="999",L.style.left=q+"px",L.style.top=j+"px",L.style.right=W+"px",L.style.bottom=D+"px",y.mouseOverlay.appendChild(L);const C=h.create({zone:L,multitouch:!1,maxNumberOfNipples:1,mode:"static",follow:!1,dynamicPage:!0,size:1.5*Math.max(I,S),position:{left:(T-W-q)/2+"px",top:(U-D-j)/2+"px"}});let R=-1,O=-1;C.on("move",(H,te)=>{if(te.distance<10)return w.deactivate(O,R),R=-1,void(O=-1);let ue=-1,_e=-1;const J=te.angle.degree;J>22.5&&J<=67.5?(ue=x+1,_e=N-1):J>67.5&&J<=112.5?(ue=x,_e=N-1):J>112.5&&J<=157.5?(ue=x-1,_e=N-1):J>157.5&&J<=202.5?(ue=x-1,_e=N):J>202.5&&J<=247.5?(ue=x-1,_e=N+1):J>247.5&&J<=292.5?(ue=x,_e=N+1):J>292.5&&J<=337.5?(ue=x+1,_e=N+1):(ue=x+1,_e=N),R===ue&&O===_e||(w.deactivate(O,R),w.activate(_e,ue),R=ue,O=_e)});let B=!1;C.on("start",()=>{B=!0}),C.on("end",()=>{B=!1,w.deactivate(O,R),O=-1,R=-1});const G={capture:!0};function Y(H){B&&C.processOnEnd(H)}for(const H of c.pointer.enders)y.mouseOverlay.addEventListener(H,Y,G);return()=>{C.destroy(),y.mouseOverlay.removeChild(L);for(const H of c.pointer.enders)y.mouseOverlay.removeEventListener(H,Y,G)}}};function p(m,y,_,b,w,A){const{cells:E,columnWidth:I}=b,{row:S,column:T}=m,{centerX:U,centerY:N}=E[S][T],x=(0,o.createButton)("keyboard",{onUp:()=>y.toggleKeyboard()},I),M=P=>{P?x.children[0].classList.add("emulator-control-close-icon"):x.children[0].classList.remove("emulator-control-close-icon")};return y.setOnKeyboardVisibility(M),x.style.position="absolute",x.style.left=U-x.widthPx/2+"px",x.style.top=N-x.heightPx/2+"px",y.mouseOverlay.appendChild(x),()=>{y.mouseOverlay.removeChild(x),y.removeOnKeyboardVisibility(M)}}function v(m,y,_){return m.cells[y][_].hidden===!0}function g(m,y,_){function b(w,A){if((w!==y||A!==_)&&w>=0&&w<m.cells.length){const E=m.cells[w];A>=0&&A<E.length&&(E[A].hidden=!0)}}for(let w=y-1;w<=y+1;++w)for(let A=_-1;A<=_+1;++A)b(w,A)}},{"../dom/pointer":36,"./button":18,"./grid":19,"./keyboard":20,"./mouse/mouse-common":24,"./options":30,nipplejs:14}],23:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.initLegacyLayersControl=void 0;const r=e("./button"),o=e("./mouse/mouse-common"),a=e("./nipple"),l=e("./options"),d=e("./keyboard");n.initLegacyLayersControl=function(c,h,s,f){var p;const v=Object.keys(s),g={keyboard:()=>{},mouse:()=>{},gestures:()=>{},buttons:()=>{}},m=_=>{g.keyboard(),g.mouse(),g.gestures(),g.buttons(),g.keyboard=()=>{},g.mouse=()=>{},g.gestures=()=>{},g.buttons=()=>{};const b=s[_];b!==void 0&&(g.keyboard=(0,d.keyboard)(h,f,b.mapper),b.gestures!==void 0&&b.gestures.length>0?g.gestures=(0,a.nipple)(h,f,b.gestures):g.mouse=(0,o.mouse)(c.autolock,c.sensitivity,h,f),b.buttons!==void 0&&b.buttons.length&&(g.buttons=(0,r.deprecatedButton)(h,f,b.buttons,54)))},y=((p=h.options.optionControls)===null||p===void 0?void 0:p.length)===0?()=>{}:(0,l.options)(h,v,m,54,13.5,0);return m("default"),()=>{g.gestures(),g.buttons(),g.mouse(),g.keyboard(),y()}}},{"./button":18,"./keyboard":20,"./mouse/mouse-common":24,"./nipple":28,"./options":30}],24:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouse=n.mount=n.mapXY=void 0;const r=e("../../dom/pointer"),o=e("./mouse-swipe"),a=e("./mouse-not-locked"),l=e("./mouse-locked");n.mapXY=function(d,c,h,s){const f=h.width(),p=h.height(),v=s.width,g=s.height,m=f/p;let y=v,_=v/m;_>g&&(_=g,y=g*m);const b=(g-_)/2,w=(v-y)/2;let A=Math.max(0,Math.min(1,(d-w)/y)),E=Math.max(0,Math.min(1,(c-b)/_));return A<=.01&&(A=0),A>=.99&&(A=1),E<=.01&&(E=0),E>=.99&&(E=1),{x:A,y:E}},n.mount=function(d,c,h,s,f,p){let v=0;const g=A=>{if(A.target!==d)return;if(c.pointerDisabled)return void A.stopPropagation();const E=(0,r.getPointerState)(A,d);v=E.button||c.pointerButton,h(E.x,E.y,v),A.stopPropagation()},m=A=>{if(A.target!==d)return;if(c.pointerDisabled)return void A.stopPropagation();const E=(0,r.getPointerState)(A,d);s(E.x,E.y,E.mX,E.mY),A.stopPropagation()},y=A=>{if(c.pointerDisabled)return void A.stopPropagation();const E=(0,r.getPointerState)(A,d);f(E.x,E.y,v),A.stopPropagation()},_=A=>{if(A.target!==d)return;if(c.pointerDisabled)return void A.stopPropagation();const E=(0,r.getPointerState)(A,d);p(E.x,E.y),A.stopPropagation()},b=A=>{A.stopPropagation()},w={capture:!1};for(const A of r.pointer.starters)d.addEventListener(A,g,w);for(const A of r.pointer.changers)d.addEventListener(A,m,w);for(const A of r.pointer.enders)d.addEventListener(A,y,w);for(const A of r.pointer.prevents)d.addEventListener(A,b,w);for(const A of r.pointer.leavers)d.addEventListener(A,_,w);return()=>{for(const A of r.pointer.starters)d.removeEventListener(A,g,w);for(const A of r.pointer.changers)d.removeEventListener(A,m,w);for(const A of r.pointer.enders)d.removeEventListener(A,y,w);for(const A of r.pointer.prevents)d.removeEventListener(A,b,w);for(const A of r.pointer.leavers)d.removeEventListener(A,_,w)}},n.mouse=function(d,c,h,s){return d&&!r.pointer.canLock?(0,o.mouseSwipe)(c,h,s):d?(0,l.mouseLocked)(c,h,s):(0,a.mouseNotLocked)(h,s)}},{"../../dom/pointer":36,"./mouse-locked":25,"./mouse-not-locked":26,"./mouse-swipe":27}],25:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouseLocked=void 0;const r=e("./mouse-common");n.mouseLocked=function(o,a,l){const d=a.mouseOverlay;function c(){return document.pointerLockElement!==d}return(0,r.mount)(d,a,function(h,s,f){c()?(d.requestPointerLock||d.mozRequestPointerLock||d.webkitRequestPointerLock).call(d):l.sendMouseButton(f,!0)},function(h,s,f,p){c()||f===0&&p===0||l.sendMouseRelativeMotion(f*o,p*o)},function(h,s,f){c()||l.sendMouseButton(f,!1)},function(h,s){})}},{"./mouse-common":24}],26:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouseNotLocked=void 0;const r=e("./mouse-common");n.mouseNotLocked=function(o,a){const l=o.mouseOverlay,d=(c,h)=>(0,r.mapXY)(c,h,a,o);return document.pointerLockElement===l&&document.exitPointerLock(),(0,r.mount)(l,o,function(c,h,s){const f=d(c,h);a.sendMouseMotion(f.x,f.y),a.sendMouseButton(s,!0)},function(c,h,s,f){const p=d(c,h);a.sendMouseMotion(p.x,p.y)},function(c,h,s){const f=d(c,h);a.sendMouseMotion(f.x,f.y),a.sendMouseButton(s,!1)},function(c,h){const s=d(c,h);a.sendMouseMotion(s.x,s.y)})}},{"./mouse-common":24}],27:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouseSwipe=void 0;const r=e("./mouse-common");n.mouseSwipe=function(o,a,l){const d=a.mouseOverlay;let c=-1,h=0,s=0,f=0;return(0,r.mount)(d,a,(p,v)=>{c=Date.now(),h=0,s=p,f=v},function(p,v,g,m){g===void 0&&(g=p-s),m===void 0&&(m=v-f),s=p,f=v,g===0&&m===0||(h+=Math.abs(g)+Math.abs(m),l.sendMouseRelativeMotion(g*o*2,m*o*2))},(p,v)=>{if(Date.now()-c<500&&h<50){const g=a.pointerButton||0;l.sendMouseButton(g,!0),setTimeout(()=>l.sendMouseButton(g,!1),60)}},()=>{})}},{"./mouse-common":24}],28:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.nipple=void 0;const r=e("nipplejs"),o=e("../dom/keys");n.nipple=function(a,l,d){const c=r.create({zone:a.mouseOverlay,multitouch:!0,maxNumberOfNipples:2});let h=-1;const s=()=>{h!==-1&&(a.fireKeyUp(h),h=-1)},f={},p={},v={};for(const m of d)m.event==="end:release"?f[m.joystickId]=!0:m.mapTo!==o.KBD_NONE&&(m.event==="tap"?p[m.joystickId]=m.mapTo:c.on(m.event,()=>{var y;v[m.joystickId]=Date.now(),s(),y=m.mapTo,a.fireKeyDown(y),h=y}));const g={};return c.on("start",()=>{const m=c.ids.length-1;g[m]=Date.now()}),c.on("end",()=>{const m=c.ids.length-1,y=Date.now()-g[m];f[m]===!0&&s(),p[m]&&y<500&&v[m]<g[m]&&a.fireKeyPress(p[m])}),()=>c.destroy()}},{"../dom/keys":32,nipplejs:14}],29:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.initNullLayersControl=void 0;const r=e("./keyboard"),o=e("./mouse/mouse-common"),a=e("./options");n.initNullLayersControl=function(l,d,c){var h;const s=(0,r.keyboard)(d,c),f=(0,o.mouse)(l.autolock,l.sensitivity,d,c),p=((h=d.options.optionControls)===null||h===void 0?void 0:h.length)===0?()=>{}:(0,a.options)(d,["default"],()=>{},54,13.5,0);return()=>{s(),f(),p()}}},{"./keyboard":20,"./mouse/mouse-common":24,"./options":30}],30:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.options=void 0;const r=e("./button"),o=e("../dom/helpers");function a(l,d){if(l.length<=1)return document.createElement("div");const c=document.createElement("select");c.classList.add("emulator-control-select");for(const h of l){const s=document.createElement("option");s.value=h,s.innerHTML=h,c.appendChild(s)}return c.onchange=h=>{const s=h.target.value;d(s)},(0,o.stopPropagation)(c,!1),c}n.options=function(l,d,c,h,s,f){const p=Math.round(h/4);let v=!1,g=!1;const m=()=>{const T=v?"flex":"none";for(const U of _)U!=b&&(U.style.display=T)},y=()=>{v=!v,!v&&g&&l.toggleKeyboard(),m()},_=[a(d,c),(0,r.createButton)("keyboard",{onClick:()=>{l.toggleKeyboard(),v&&!g&&(v=!1,m())}},h),(0,r.createButton)("save",{onClick:()=>{l.save(),v&&y()}},h),(0,r.createButton)("fullscreen",{onClick:()=>{l.toggleFullscreen(),v&&y()}},h),(0,r.createButton)("options",{onClick:y},h)],b=_[_.length-1],w=_[_.length-2].children[0],A=_[_.length-4].children[0],E=T=>{g=T,T?A.classList.add("emulator-control-close-icon"):A.classList.remove("emulator-control-close-icon")};l.setOnKeyboardVisibility(E),E(l.keyboardVisible),l.setOnFullscreen(T=>{T?w.classList.contains("emulator-control-exit-fullscreen-icon")||w.classList.add("emulator-control-exit-fullscreen-icon"):w.classList.remove("emulator-control-exit-fullscreen-icon")}),l.fullscreen&&w.classList.add("emulator-control-exit-fullscreen-icon");const I=(0,o.createDiv)("emulator-options"),S=g?"flex":"none";for(const T of _)T!==b&&T.classList.add("emulator-button-control"),T.style.marginRight=p+"px",T.style.marginBottom=p+"px",T!==b&&(T.style.display=S),I.appendChild(T);return I.style.position="absolute",I.style.right=f+"px",I.style.top=s+"px",l.mouseOverlay.appendChild(I),()=>{l.mouseOverlay.removeChild(I),l.setOnFullscreen(()=>{}),l.removeOnKeyboardVisibility(E)}}},{"../dom/helpers":31,"./button":18}],31:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.stopPropagation=n.createDiv=void 0;const r=e("./pointer");n.createDiv=function(o,a){const l=document.createElement("div");return l.className=o,a!==void 0&&(l.innerHTML=a),l},n.stopPropagation=function(o){let a=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const l=h=>{h.stopPropagation()},d=h=>{h.stopPropagation(),a&&h.preventDefault()},c={capture:!1};for(const h of r.pointer.starters)o.addEventListener(h,l,c);for(const h of r.pointer.enders)o.addEventListener(h,l,c);for(const h of r.pointer.prevents)o.addEventListener(h,d,c)}},{"./pointer":36}],32:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.KBD_kp0=n.KBD_f12=n.KBD_f11=n.KBD_f10=n.KBD_f9=n.KBD_f8=n.KBD_f7=n.KBD_f6=n.KBD_f5=n.KBD_f4=n.KBD_f3=n.KBD_f2=n.KBD_f1=n.KBD_z=n.KBD_y=n.KBD_x=n.KBD_w=n.KBD_v=n.KBD_u=n.KBD_t=n.KBD_s=n.KBD_r=n.KBD_q=n.KBD_p=n.KBD_o=n.KBD_n=n.KBD_m=n.KBD_l=n.KBD_k=n.KBD_j=n.KBD_i=n.KBD_h=n.KBD_g=n.KBD_f=n.KBD_e=n.KBD_d=n.KBD_c=n.KBD_b=n.KBD_a=n.KBD_9=n.KBD_8=n.KBD_7=n.KBD_6=n.KBD_5=n.KBD_4=n.KBD_3=n.KBD_2=n.KBD_1=n.KBD_0=n.KBD_NONE=void 0,n.KBD_up=n.KBD_left=n.KBD_pagedown=n.KBD_end=n.KBD_delete=n.KBD_pageup=n.KBD_home=n.KBD_insert=n.KBD_pause=n.KBD_printscreen=n.KBD_slash=n.KBD_comma=n.KBD_period=n.KBD_quote=n.KBD_semicolon=n.KBD_rightbracket=n.KBD_leftbracket=n.KBD_backslash=n.KBD_equals=n.KBD_minus=n.KBD_grave=n.KBD_numlock=n.KBD_scrolllock=n.KBD_capslock=n.KBD_rightshift=n.KBD_leftshift=n.KBD_rightctrl=n.KBD_leftctrl=n.KBD_rightalt=n.KBD_leftalt=n.KBD_space=n.KBD_enter=n.KBD_backspace=n.KBD_tab=n.KBD_esc=n.KBD_kpenter=n.KBD_kpplus=n.KBD_kpminus=n.KBD_kpmultiply=n.KBD_kpdivide=n.KBD_kpperiod=n.KBD_kp9=n.KBD_kp8=n.KBD_kp7=n.KBD_kp6=n.KBD_kp5=n.KBD_kp4=n.KBD_kp3=n.KBD_kp2=n.KBD_kp1=void 0,n.domToKeyCode=n.keyCodesToDom=n.namedKeyCodes=n.domToKeyCodes=n.KBD_extra_lt_gt=n.KBD_right=n.KBD_down=void 0,n.KBD_NONE=0,n.KBD_0=48,n.KBD_1=49,n.KBD_2=50,n.KBD_3=51,n.KBD_4=52,n.KBD_5=53,n.KBD_6=54,n.KBD_7=55,n.KBD_8=56,n.KBD_9=57,n.KBD_a=65,n.KBD_b=66,n.KBD_c=67,n.KBD_d=68,n.KBD_e=69,n.KBD_f=70,n.KBD_g=71,n.KBD_h=72,n.KBD_i=73,n.KBD_j=74,n.KBD_k=75,n.KBD_l=76,n.KBD_m=77,n.KBD_n=78,n.KBD_o=79,n.KBD_p=80,n.KBD_q=81,n.KBD_r=82,n.KBD_s=83,n.KBD_t=84,n.KBD_u=85,n.KBD_v=86,n.KBD_w=87,n.KBD_x=88,n.KBD_y=89,n.KBD_z=90,n.KBD_f1=290,n.KBD_f2=291,n.KBD_f3=292,n.KBD_f4=293,n.KBD_f5=294,n.KBD_f6=295,n.KBD_f7=296,n.KBD_f8=297,n.KBD_f9=298,n.KBD_f10=299,n.KBD_f11=300,n.KBD_f12=301,n.KBD_kp0=320,n.KBD_kp1=321,n.KBD_kp2=322,n.KBD_kp3=323,n.KBD_kp4=324,n.KBD_kp5=325,n.KBD_kp6=326,n.KBD_kp7=327,n.KBD_kp8=328,n.KBD_kp9=329,n.KBD_kpperiod=330,n.KBD_kpdivide=331,n.KBD_kpmultiply=332,n.KBD_kpminus=333,n.KBD_kpplus=334,n.KBD_kpenter=335,n.KBD_esc=256,n.KBD_tab=258,n.KBD_backspace=259,n.KBD_enter=257,n.KBD_space=32,n.KBD_leftalt=342,n.KBD_rightalt=346,n.KBD_leftctrl=341,n.KBD_rightctrl=345,n.KBD_leftshift=340,n.KBD_rightshift=344,n.KBD_capslock=280,n.KBD_scrolllock=281,n.KBD_numlock=282,n.KBD_grave=96,n.KBD_minus=45,n.KBD_equals=61,n.KBD_backslash=92,n.KBD_leftbracket=91,n.KBD_rightbracket=93,n.KBD_semicolon=59,n.KBD_quote=39,n.KBD_period=46,n.KBD_comma=44,n.KBD_slash=47,n.KBD_printscreen=283,n.KBD_pause=284,n.KBD_insert=260,n.KBD_home=268,n.KBD_pageup=266,n.KBD_delete=261,n.KBD_end=269,n.KBD_pagedown=267,n.KBD_left=263,n.KBD_up=265,n.KBD_down=264,n.KBD_right=262,n.KBD_extra_lt_gt=348,n.domToKeyCodes={8:n.KBD_backspace,9:n.KBD_tab,13:n.KBD_enter,16:n.KBD_leftshift,17:n.KBD_leftctrl,18:n.KBD_leftalt,19:n.KBD_pause,27:n.KBD_esc,32:n.KBD_space,33:n.KBD_pageup,34:n.KBD_pagedown,35:n.KBD_end,36:n.KBD_home,37:n.KBD_left,38:n.KBD_up,39:n.KBD_right,40:n.KBD_down,45:n.KBD_insert,46:n.KBD_delete,48:n.KBD_0,49:n.KBD_1,50:n.KBD_2,51:n.KBD_3,52:n.KBD_4,53:n.KBD_5,54:n.KBD_6,55:n.KBD_7,56:n.KBD_8,57:n.KBD_9,59:n.KBD_semicolon,64:n.KBD_equals,65:n.KBD_a,66:n.KBD_b,67:n.KBD_c,68:n.KBD_d,69:n.KBD_e,70:n.KBD_f,71:n.KBD_g,72:n.KBD_h,73:n.KBD_i,74:n.KBD_j,75:n.KBD_k,76:n.KBD_l,77:n.KBD_m,78:n.KBD_n,79:n.KBD_o,80:n.KBD_p,81:n.KBD_q,82:n.KBD_r,83:n.KBD_s,84:n.KBD_t,85:n.KBD_u,86:n.KBD_v,87:n.KBD_w,88:n.KBD_x,89:n.KBD_y,90:n.KBD_z,91:n.KBD_leftbracket,93:n.KBD_rightbracket,96:n.KBD_kp0,97:n.KBD_kp1,98:n.KBD_kp2,99:n.KBD_kp3,100:n.KBD_kp4,101:n.KBD_kp5,102:n.KBD_kp6,103:n.KBD_kp7,104:n.KBD_kp8,105:n.KBD_kp9,111:n.KBD_kpdivide,112:n.KBD_f1,113:n.KBD_f2,114:n.KBD_f3,115:n.KBD_f4,116:n.KBD_f5,117:n.KBD_f6,118:n.KBD_f7,119:n.KBD_f8,120:n.KBD_f9,121:n.KBD_f10,122:n.KBD_f11,123:n.KBD_f12,144:n.KBD_numlock,145:n.KBD_scrolllock,173:n.KBD_minus,186:n.KBD_semicolon,187:n.KBD_equals,188:n.KBD_comma,189:n.KBD_minus,190:n.KBD_period,191:n.KBD_slash,219:n.KBD_leftbracket,220:n.KBD_backslash,221:n.KBD_rightbracket},n.namedKeyCodes={KBD_NONE:n.KBD_NONE,KBD_0:n.KBD_0,KBD_1:n.KBD_1,KBD_2:n.KBD_2,KBD_3:n.KBD_3,KBD_4:n.KBD_4,KBD_5:n.KBD_5,KBD_6:n.KBD_6,KBD_7:n.KBD_7,KBD_8:n.KBD_8,KBD_9:n.KBD_9,KBD_a:n.KBD_a,KBD_b:n.KBD_b,KBD_c:n.KBD_c,KBD_d:n.KBD_d,KBD_e:n.KBD_e,KBD_f:n.KBD_f,KBD_g:n.KBD_g,KBD_h:n.KBD_h,KBD_i:n.KBD_i,KBD_j:n.KBD_j,KBD_k:n.KBD_k,KBD_l:n.KBD_l,KBD_m:n.KBD_m,KBD_n:n.KBD_n,KBD_o:n.KBD_o,KBD_p:n.KBD_p,KBD_q:n.KBD_q,KBD_r:n.KBD_r,KBD_s:n.KBD_s,KBD_t:n.KBD_t,KBD_u:n.KBD_u,KBD_v:n.KBD_v,KBD_w:n.KBD_w,KBD_x:n.KBD_x,KBD_y:n.KBD_y,KBD_z:n.KBD_z,KBD_f1:n.KBD_f1,KBD_f2:n.KBD_f2,KBD_f3:n.KBD_f3,KBD_f4:n.KBD_f4,KBD_f5:n.KBD_f5,KBD_f6:n.KBD_f6,KBD_f7:n.KBD_f7,KBD_f8:n.KBD_f8,KBD_f9:n.KBD_f9,KBD_f10:n.KBD_f10,KBD_f11:n.KBD_f11,KBD_f12:n.KBD_f12,KBD_kp0:n.KBD_kp0,KBD_kp1:n.KBD_kp1,KBD_kp2:n.KBD_kp2,KBD_kp3:n.KBD_kp3,KBD_kp4:n.KBD_kp4,KBD_kp5:n.KBD_kp5,KBD_kp6:n.KBD_kp6,KBD_kp7:n.KBD_kp7,KBD_kp8:n.KBD_kp8,KBD_kp9:n.KBD_kp9,KBD_kpperiod:n.KBD_kpperiod,KBD_kpdivide:n.KBD_kpdivide,KBD_kpmultiply:n.KBD_kpmultiply,KBD_kpminus:n.KBD_kpminus,KBD_kpplus:n.KBD_kpplus,KBD_kpenter:n.KBD_kpenter,KBD_esc:n.KBD_esc,KBD_tab:n.KBD_tab,KBD_backspace:n.KBD_backspace,KBD_enter:n.KBD_enter,KBD_space:n.KBD_space,KBD_leftalt:n.KBD_leftalt,KBD_rightalt:n.KBD_rightalt,KBD_leftctrl:n.KBD_leftctrl,KBD_rightctrl:n.KBD_rightctrl,KBD_leftshift:n.KBD_leftshift,KBD_rightshift:n.KBD_rightshift,KBD_capslock:n.KBD_capslock,KBD_scrolllock:n.KBD_scrolllock,KBD_numlock:n.KBD_numlock,KBD_grave:n.KBD_grave,KBD_minus:n.KBD_minus,KBD_equals:n.KBD_equals,KBD_backslash:n.KBD_backslash,KBD_leftbracket:n.KBD_leftbracket,KBD_rightbracket:n.KBD_rightbracket,KBD_semicolon:n.KBD_semicolon,KBD_quote:n.KBD_quote,KBD_period:n.KBD_period,KBD_comma:n.KBD_comma,KBD_slash:n.KBD_slash,KBD_printscreen:n.KBD_printscreen,KBD_pause:n.KBD_pause,KBD_insert:n.KBD_insert,KBD_home:n.KBD_home,KBD_pageup:n.KBD_pageup,KBD_delete:n.KBD_delete,KBD_end:n.KBD_end,KBD_pagedown:n.KBD_pagedown,KBD_left:n.KBD_left,KBD_up:n.KBD_up,KBD_down:n.KBD_down,KBD_right:n.KBD_right,KBD_extra_lt_gt:n.KBD_extra_lt_gt},n.keyCodesToDom={};for(const r of Object.keys(n.domToKeyCodes)){const o=Number.parseInt(r,10);n.keyCodesToDom[n.domToKeyCodes[o]]=o}n.domToKeyCode=function(r){return n.domToKeyCodes[r]||0}},{}],33:[function(e,i,n){function r(f,p,v){return p in f?Object.defineProperty(f,p,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[p]=v,f}Object.defineProperty(n,"__esModule",{value:!0}),n.Layers=n.layers=void 0;const o=e("notyf"),a=function(f){return f&&f.__esModule?f:{default:f}}(e("simple-keyboard")),l=e("./helpers"),d=e("./keys"),c=e("element-resize-detector")({});n.layers=function(f,p){return new h(f,p||{})};class h{constructor(p,v){r(this,"options",void 0),r(this,"root",void 0),r(this,"loading",void 0),r(this,"canvas",void 0),r(this,"video",void 0),r(this,"mouseOverlay",void 0),r(this,"width",void 0),r(this,"height",void 0),r(this,"fullscreen",!1),r(this,"keyboardVisible",!1),r(this,"pointerLock",!1),r(this,"pointerDisabled",!1),r(this,"pointerButton",0),r(this,"notyf",new o.Notyf),r(this,"toggleKeyboard",()=>!1),r(this,"fullscreenElement",void 0),r(this,"clickToStart",void 0),r(this,"loaderText",void 0),r(this,"onResize",void 0),r(this,"onKeyDown",void 0),r(this,"onKeyUp",void 0),r(this,"onKeyPress",void 0),r(this,"onKeysPress",void 0),r(this,"onSave",void 0),r(this,"onSaveStarted",void 0),r(this,"onSaveEnded",void 0),r(this,"onFullscreenChanged",[]),r(this,"onKeyboardChanged",[]),this.options=v,this.root=p,this.root.classList.add("emulator-root"),this.fullscreenElement=v.fullscreenElement||this.root,this.canvas=document.createElement("canvas"),this.canvas.className="emulator-canvas",this.video=document.createElement("video"),this.video.setAttribute("autoplay",""),this.video.setAttribute("playsinline",""),this.video.className="emulator-video",this.loading=(0,l.createDiv)("emulator-loading",`
<div class='emulator-loading-inner'>
<pre class='emulator-loading-pre-1'>
        _                __
       (_)____      ____/ /___  _____ _________  ____ ___
      / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ \`__ \\
     / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /
  __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/
 /___/
</pre>
<pre class='emulator-loading-pre-2'>
</pre>
<div class='emulator-loader'>
</div>
</div>
`),this.loaderText=this.loading.querySelector(".emulator-loading-pre-2"),this.mouseOverlay=(0,l.createDiv)("emulator-mouse-overlay",""),this.clickToStart=(0,l.createDiv)("emulator-click-to-start-overlay",`
<div class="emulator-click-to-start-text">Press to start</div>
<div class="emulator-click-to-start-icon"></div>
`),this.clickToStart.onclick=()=>{this.clickToStart.style.display="none",this.video.play()},this.root.appendChild(this.canvas),this.root.appendChild(this.video),this.root.appendChild(this.mouseOverlay),this.root.appendChild(this.clickToStart),this.root.appendChild(this.loading),this.width=p.offsetWidth,this.height=p.offsetHeight,this.onResize=[],this.onKeyDown=()=>{},this.onKeyUp=()=>{},this.onKeyPress=()=>{},this.onKeysPress=()=>{},this.onSave=()=>Promise.reject(new Error("Not implemented")),this.onSaveStarted=()=>{},this.onSaveEnded=()=>{},c.listenTo(this.root,g=>{if(g===p){this.width=g.offsetWidth,this.height=g.offsetHeight;for(const m of this.onResize)m(this.width,this.height)}}),this.initKeyEvents(),this.initKeyboard(),this.preventContextMenu(),this.fullscreenElement.onfullscreenchange=()=>{if(document.fullscreenElement!==this.fullscreenElement){this.fullscreen=!1;for(const g of this.onFullscreenChanged)g(this.fullscreen)}}}initKeyEvents(){const p=this.options.keyboardInputDiv??this.root;p.style.outline="none",p.tabIndex&&p.tabIndex!==-1||(p.tabIndex=0),p.addEventListener("keydown",v=>{const g=(0,d.domToKeyCode)(v.keyCode);this.onKeyDown(g),v.stopPropagation(),v.preventDefault()}),p.addEventListener("keyup",v=>{const g=(0,d.domToKeyCode)(v.keyCode);this.onKeyUp(g),v.stopPropagation(),v.preventDefault()})}preventContextMenu(){this.root.addEventListener("contextmenu",p=>(p.stopPropagation(),p.preventDefault(),!1))}addOnResize(p){this.onResize.push(p)}removeOnResize(p){this.onResize=this.onResize.filter(v=>v!==p)}setOnKeyDown(p){this.onKeyDown=p}fireKeyDown(p){this.onKeyDown(p)}setOnKeyUp(p){this.onKeyUp=p}fireKeyUp(p){this.onKeyUp(p)}setOnKeyPress(p){this.onKeyPress=p}fireKeyPress(p){this.onKeyPress(p)}setOnKeysPress(p){this.onKeysPress=p}fireKeysPress(p){this.onKeysPress(p)}toggleFullscreen(){if(this.fullscreen){this.fullscreen=!1,this.fullscreenElement.classList.contains("emulator-fullscreen-workaround")?this.fullscreenElement.classList.remove("emulator-fullscreen-workaround"):document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();for(const p of this.onFullscreenChanged)p(!1)}else{this.fullscreen=!0;const p=this.fullscreenElement;p.requestFullscreen?p.requestFullscreen():p.webkitRequestFullscreen?p.webkitRequestFullscreen():p.mozRequestFullScreen?p.mozRequestFullScreen():p.msRequestFullscreen?p.msRequestFullscreen():p.webkitEnterFullscreen?p.webkitEnterFullscreen():this.fullscreenElement.classList.add("emulator-fullscreen-workaround");for(const v of this.onFullscreenChanged)v(!0)}}setOnFullscreen(p){this.onFullscreenChanged.push(p)}removeOnFullscreen(p){this.onFullscreenChanged=this.onFullscreenChanged.filter(v=>v!==p)}setOnKeyboardVisibility(p){this.onKeyboardChanged.push(p)}removeOnKeyboardVisibility(p){this.onKeyboardChanged=this.onKeyboardChanged.filter(v=>v!==p)}save(){return this.onSaveStarted(),this.onSave().then(()=>{this.notyf.success("Saved"),this.onSaveEnded()}).catch(p=>{this.notyf.error(p.message),this.onSaveEnded()})}setOnSave(p){this.onSave=p}getOnSave(){return this.onSave}setOnSaveStarted(p){this.onSaveStarted=p}setOnSaveEnded(p){this.onSaveEnded=p}hideLoadingLayer(){this.loading.style.visibility="hidden"}showLoadingLayer(){this.loading.style.visibility="visible"}setLoadingMessage(p){this.loaderText.innerHTML=p}switchToVideo(){this.video.style.display="block",this.canvas.style.display="none"}showClickToStart(){this.clickToStart.style.display="flex"}initKeyboard(){let p=!1;const v=[{"{esc}":"␛","{bksp}":"⌫","{enter}":"↵","{space}":"Space","{up}":"↑","{down}":"↓","{left}":"←","{right}":"→","{shift}":"⇑","{ctrl}":"Ctrl","{alt}":"Alt","{tab}":"Tab"},{"{esc}":"␛","{bksp}":"⌫","{enter}":"↵","{space}":"Space","{up}":"↑","{down}":"↓","{left}":"←","{right}":"→","{shift}":"⇑","{alt}":"Alt","{ctrl}":"Ctrl","{tab}":"Tab",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","{":"х","}":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю"}];let g=0;const m=this.options.keyboardDiv||(0,l.createDiv)("");m.classList.add("emulator-keyboard"),m.style.display="none",(0,l.stopPropagation)(m);const y=new a.default(m,{layout:{en:["{esc} ` 1 2 3 4 5 6 7 8 9 0 () - = {bksp} {enter}","{tab} q w e r t y u i o p { } \\ {up}","{shift} {left} {right} a s d f g h j k l ; ' [ {down}","⎘ {alt} {ctrl} z x c v b n m , . / ] {space}"]},layoutName:"en",display:v[g],onKeyPress:_=>{if(_==="⎘")return;const b=s(_);for(const w of b)this.fireKeyDown(w)},onKeyReleased:_=>{if(_==="⎘")return g=(g+1)%v.length,void y.setOptions({display:v[g]});const b=s(_);for(const w of b)this.fireKeyUp(w)},preventMouseDownDefault:!0,preventMouseUpDefault:!0,stopMouseDownPropagation:!0,stopMouseUpPropagation:!0,physicalKeyboardHighlight:!1,physicalKeyboardHighlightPress:!1,physicalKeyboardHighlightPressUseClick:!1,physicalKeyboardHighlightPressUsePointerEvents:!1});this.toggleKeyboard=()=>{p=!p;const _=p?"block":"none";m.style.display=_;for(const b of this.onKeyboardChanged)b(p);return this.keyboardVisible=p,p},this.options.keyboardDiv||this.mouseOverlay.appendChild(m)}}function s(f){if(f.length>1)return f==="{enter}"?[d.KBD_enter]:f==="{shift}"?[d.KBD_leftshift]:f==="{bksp}"?[d.KBD_backspace]:f==="{lock}"?[d.KBD_capslock]:f==="{tab}"?[d.KBD_tab]:f==="{space}"?[d.KBD_space]:f==="{esc}"?[d.KBD_esc]:f==="{ctrl}"?[d.KBD_leftctrl]:f==="{alt}"?[d.KBD_leftalt]:f==="{up}"?[d.KBD_up]:f==="{down}"?[d.KBD_down]:f==="{left}"?[d.KBD_left]:f==="{right}"?[d.KBD_right]:(console.warn("Unknown button",f),[]);if(f===",")return[d.KBD_comma];if(f===".")return[d.KBD_period];if(f==="'")return[d.KBD_quote];if(f===":")return[d.KBD_semicolon];if(f==="{")return[d.KBD_leftshift,d.KBD_leftbracket];if(f==="}")return[d.KBD_leftshift,d.KBD_rightbracket];const p=(0,d.domToKeyCode)(f.toUpperCase().charCodeAt(0));return p===0?[]:[p]}n.Layers=h},{"./helpers":31,"./keys":32,"element-resize-detector":7,notyf:15,"simple-keyboard":16}],34:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.lifecycle=void 0,n.lifecycle=function(r){let o="",a="";function l(){document[o]?r.pause():r.resume()}document.hidden!==void 0?(o="hidden",a="visibilitychange"):document.mozHidden!==void 0?(o="mozHidden",a="mozvisibilitychange"):document.msHidden!==void 0?(o="msHidden",a="msvisibilitychange"):document.webkitHidden!==void 0&&(o="webkitHidden",a="webkitvisibilitychange"),document.addEventListener(a,l),r.events().onExit(()=>{document.removeEventListener(a,l)})}},{}],35:[function(e,i,n){function r(o,a,l){return a in o?Object.defineProperty(o,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[a]=l,o}Object.defineProperty(n,"__esModule",{value:!0}),n.MemStorage=void 0,n.MemStorage=class{constructor(){r(this,"length",0),r(this,"storage",{})}setItem(o,a){this.storage[o]=a,this.length=Object.keys(this.storage).length}getItem(o){const a=this.storage[o];return a===void 0?null:a}removeItem(o){delete this.storage[o],this.length=Object.keys(this.storage).length}key(o){const a=Object.keys(this.storage);return a[o]===void 0?null:a[o]}clear(){this.length=0,this.storage={}}}},{}],36:[function(e,i,n){function r(o,a){if(o.type.match(/^touch/)){const l=o,d=a.getBoundingClientRect();return{x:l.targetTouches[0].clientX-d.x,y:l.targetTouches[0].clientY-d.y,mX:0,mY:0}}if(o.type.match(/^pointer/)){const l=o;return{x:l.offsetX,y:l.offsetY,mX:l.movementX,mY:l.movementY}}{const l=o;return{x:l.offsetX,y:l.offsetY,mX:l.movementX,mY:l.movementY,button:l.button===0?0:1}}}Object.defineProperty(n,"__esModule",{value:!0}),n.pointers=n.getPointerState=n.pointer=void 0,n.pointer=function(){const o=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),a=o&&"ontouchstart"in window,l=o&&!!window.PointerEvent,d=o&&!!window.MSPointerEvent;let c=!o;const h=[],s=[],f=[],p=[],v=[];return l?(h.push("pointerdown"),f.push("pointerup","pointercancel"),s.push("pointermove"),v.push("touchstart","touchmove","touchend")):d?(h.push("MSPointerDown"),s.push("MSPointerMove"),f.push("MSPointerUp")):a?(c=!1,h.push("touchstart","mousedown"),s.push("touchmove"),f.push("touchend","touchcancel","mouseup")):(h.push("mousedown"),s.push("mousemove"),f.push("mouseup"),p.push("mouseleave")),{mobile:o,canLock:c,starters:h,changers:s,enders:f,prevents:v,leavers:p}}(),n.getPointerState=r,n.pointers={bind:n.pointer,getPointerState:r}},{}],37:[function(e,i,n){function r(a,l,d){return l in a?Object.defineProperty(a,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[l]=d,a}Object.defineProperty(n,"__esModule",{value:!0}),n.LStorage=void 0;const o=e("./mem-storage");n.LStorage=class{constructor(a,l){r(this,"backend",void 0),r(this,"length",void 0),r(this,"prefix",void 0),this.prefix=l;try{this.backend=a||localStorage,this.testBackend()}catch{this.backend=new o.MemStorage}this.length=this.backend.length,typeof this.backend.sync=="function"&&(this.sync=d=>{this.backend.sync(d)})}testBackend(){const a=this.prefix+".test.record";this.backend.setItem(a,"123");const l=this.backend.getItem(a);if(this.backend.removeItem(a),l!=="123"||this.backend.getItem(a)!==null)throw new Error("Storage backend is not working properly")}setLocalStoragePrefix(a){this.prefix=a}clear(){if(!this.backend.length)return;const a=[];for(let l=0;l<this.backend.length;++l){const d=this.backend.key(l);d&&d.startsWith(this.prefix)&&a.push(d)}for(const l of a)this.backend.removeItem(l);this.length=this.backend.length}key(a){return this.backend.key(a)}setItem(a,l){if(!l||l.length===void 0||l.length===0)return void this.writeStringToKey(a,"");let d=0;for(;d<l.length;){let c=l.substr(d,1024);d+=c.length,d<l.length&&(c+="@"),this.writeStringToKey(a,c),a+="."}}getItem(a){let l=this.readStringFromKey(a);if(l===null)return null;if(l.length===0)return l;for(;l[l.length-1]==="@";){l=l.substr(0,l.length-1),a+=".";const d=this.readStringFromKey(a);l+=d===null?"":d}return l}removeItem(a){this.backend.removeItem(this.prefix+a),this.length=this.backend.length}writeStringToKey(a,l){this.backend.setItem(this.prefix+a,l),this.length=this.backend.length}readStringFromKey(a){return this.backend.getItem(this.prefix+a)}}},{"./mem-storage":35}],38:[function(e,i,n){function r(U,N,x){return N in U?Object.defineProperty(U,N,{value:x,enumerable:!0,configurable:!0,writable:!0}):U[N]=x,U}Object.defineProperty(n,"__esModule",{value:!0}),n.EmulatorsUi=void 0;const o=e("./build"),a=e("./dom/layers"),l=e("./dom/lifecycle"),d=e("./network/xhr"),c=e("./graphics/_2d"),h=e("./graphics/webgl"),s=e("./graphics/video"),f=e("./controls/keyboard"),p=e("./controls/mouse/mouse-common"),v=e("./controls/nipple"),g=e("./controls/options"),m=e("./dom/keys"),y=e("./sound/audio-node"),_=e("./notification/notyf"),b=e("./persist/save-load"),w=e("./controls/grid"),A=e("./dom/pointer"),E=e("./dom/storage"),I=e("./js-dos");class S{constructor(){r(this,"build",o.Build),r(this,"dom",{layers:a.layers,lifecycle:l.lifecycle,pointers:A.pointers,storage:new E.LStorage(void 0,"emulators.ui.")}),r(this,"network",{resolveBundle:d.resolveBundle}),r(this,"graphics",{webGl:h.webGl,_2d:c._2d,video:s.video}),r(this,"sound",{audioNode:y.audioNode}),r(this,"persist",{save:b.save,load:b.load}),r(this,"controls",{getGrid:w.getGrid,namedKeyCodes:m.namedKeyCodes,domToKeyCodes:m.domToKeyCodes,domToKeyCode:m.domToKeyCode,keyCodesToDom:m.keyCodesToDom,keyboard:f.keyboard,mouse:p.mouse,nipple:v.nipple,options:g.options}),r(this,"notifications",{notyf:_.notyf}),r(this,"dos",(N,x)=>new I.DosInstance(N,T,x||{}))}}n.EmulatorsUi=S;const T=new S;window.emulatorsUi=T,window.Dos=T.dos},{"./build":17,"./controls/grid":19,"./controls/keyboard":20,"./controls/mouse/mouse-common":24,"./controls/nipple":28,"./controls/options":30,"./dom/keys":32,"./dom/layers":33,"./dom/lifecycle":34,"./dom/pointer":36,"./dom/storage":37,"./graphics/_2d":39,"./graphics/video":40,"./graphics/webgl":41,"./js-dos":42,"./network/xhr":43,"./notification/notyf":44,"./persist/save-load":46,"./sound/audio-node":47}],39:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n._2d=void 0,n._2d=function(r,o,a){const l=r.canvas,d=l.getContext("2d");if(d===null)throw new Error("Unable to create 2d context on given canvas");let c=r.width,h=r.height,s=0,f=0;const p=()=>{const y=a??s/f;let _=c,b=c/y;b>h&&(b=h,_=h*y),l.style.position="relative",l.style.top=(h-b)/2+"px",l.style.left=(c-_)/2+"px",l.style.width=_+"px",l.style.height=b+"px"},v=(y,_)=>{c=y,h=_,p()};r.addOnResize(v);let g=new Uint8ClampedArray(0);const m=(y,_)=>{s=y,f=_,l.width=s,l.height=f,g=new Uint8ClampedArray(y*_*4),p()};o.events().onFrameSize(m),o.events().onFrame((y,_)=>{if(y===null&&_===null)return;const b=y!==null?y:_;let w=0,A=0;for(;A<g.length;)g[A++]=b[w++],g[A++]=b[w++],g[A++]=b[w++],g[A++]=255,b.length===g.length&&w++;d.putImageData(new ImageData(g,s,f),0,0)}),m(o.width(),o.height()),o.events().onExit(()=>{r.removeOnResize(v)})}},{}],40:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.video=void 0,n.video=function(r,o){r.switchToVideo(),o.events().onMessage((a,l)=>{a==="onremotestream"&&window.Janus.attachMediaStream(r.video,l)})}},{}],41:[function(e,i,n){function r(o,a,l){const d=o.createShader(a);if(o.shaderSource(d,l),o.compileShader(d),!o.getShaderParameter(d,o.COMPILE_STATUS)){const c=o.getShaderInfoLog(d);throw o.deleteShader(d),new Error("An error occurred compiling the shaders: "+c)}return d}Object.defineProperty(n,"__esModule",{value:!0}),n.webGl=void 0,n.webGl=function(o,a,l){const d=o.canvas,c=d.getContext("webgl");if(c===null)throw new Error("Unable to create webgl context on given canvas");const h=function(N,x,M){const P=r(N,N.VERTEX_SHADER,`
attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;

varying highp vec2 vTextureCoord;

void main(void) {
  gl_Position = aVertexPosition;
  vTextureCoord = aTextureCoord;
}
`),L=r(N,N.FRAGMENT_SHADER,`
varying highp vec2 vTextureCoord;
uniform sampler2D uSampler;


void main(void) {
  highp vec4 color = texture2D(uSampler, vTextureCoord);
  gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}
`),F=N.createProgram();if(N.attachShader(F,P),N.attachShader(F,L),N.linkProgram(F),!N.getProgramParameter(F,N.LINK_STATUS))throw new Error("Unable to initialize the shader program: "+N.getProgramInfoLog(F));return F}(c),s=c.getAttribLocation(h,"aVertexPosition"),f=c.getAttribLocation(h,"aTextureCoord"),p=c.getUniformLocation(h,"uSampler");(function(N,x,M){const P=N.createBuffer();N.bindBuffer(N.ARRAY_BUFFER,P),N.bufferData(N.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),N.STATIC_DRAW),N.vertexAttribPointer(x,3,N.FLOAT,!1,0,0),N.enableVertexAttribArray(x);const L=N.createBuffer();N.bindBuffer(N.ARRAY_BUFFER,L),N.bufferData(N.ARRAY_BUFFER,new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),N.STATIC_DRAW),N.vertexAttribPointer(M,2,N.FLOAT,!1,0,0),N.enableVertexAttribArray(M)})(c,s,f);const v=c.createTexture();c.bindTexture(c.TEXTURE_2D,v),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.LINEAR),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.LINEAR);const g=new Uint8Array([0,0,0]);c.texImage2D(c.TEXTURE_2D,0,c.RGB,1,1,0,c.RGB,c.UNSIGNED_BYTE,g),c.useProgram(h),c.activeTexture(c.TEXTURE0),c.uniform1i(p,0);let m=o.width,y=o.height,_=0,b=0;const w=()=>{const N=l??_/b;let x=m,M=m/N;M>y&&(M=y,x=y*N),d.style.position="relative",d.style.top=(y-M)/2+"px",d.style.left=(m-x)/2+"px",d.style.width=x+"px",d.style.height=M+"px"},A=(N,x)=>{m=N,y=x,w()};o.addOnResize(A);const E=(N,x)=>{_=N,b=x,d.width=_,d.height=b,c.viewport(0,0,_,b),w()};a.events().onFrameSize(E),E(a.width(),a.height());let I=null,S=null,T=0;a.events().onFrame((N,x)=>{S=N??x,T=N!=null?c.RGB:c.RGBA,I===null&&(I=requestAnimationFrame(U))});const U=()=>{c.texImage2D(c.TEXTURE_2D,0,T,_,b,0,T,c.UNSIGNED_BYTE,S),c.drawArrays(c.TRIANGLES,0,6),I=null,S=null};a.events().onExit(()=>{o.removeOnResize(A)})}},{}],42:[function(e,i,n){function r(h,s,f){return s in h?Object.defineProperty(h,s,{value:f,enumerable:!0,configurable:!0,writable:!0}):h[s]=f,h}Object.defineProperty(n,"__esModule",{value:!0}),n.DosInstance=void 0;const o=e("./controls/layers-config"),a=e("./controls/legacy-layers-control"),l=e("./controls/null-layers-control"),d=e("./controls/layers-control"),c=e("./dom/pointer");n.DosInstance=class{constructor(h,s,f){r(this,"emulatorsUi",void 0),r(this,"emulatorFunction",void 0),r(this,"createTransportLayer",void 0),r(this,"layers",void 0),r(this,"layersConfig",null),r(this,"ciPromise",void 0),r(this,"options",void 0),r(this,"mobileControls",void 0),r(this,"mirroredControls",void 0),r(this,"scaleControls",void 0),r(this,"autolock",void 0),r(this,"sensitivity",void 0),r(this,"storage",void 0),r(this,"volume",void 0),r(this,"clickToStart",void 0),r(this,"unbindControls",()=>{}),r(this,"storedLayersConfig",null),r(this,"onMobileControlsChanged",void 0),r(this,"onSensitivityChanged",[]),r(this,"onScaleChanged",[]),r(this,"onVolumeChanged",[]),r(this,"setVolumeImplFn",()=>{}),r(this,"registerOnSensitivityChanged",m=>{this.onSensitivityChanged.push(m)}),r(this,"removeOnSensitivityChanged",m=>{this.onSensitivityChanged=this.onSensitivityChanged.filter(y=>y!==m)}),r(this,"registerOnScaleChanged",m=>{this.onScaleChanged.push(m)}),r(this,"removeOnScaleChanged",m=>{this.onScaleChanged=this.onScaleChanged.filter(y=>y!==m)}),r(this,"registerOnVolumeChanged",m=>{this.onVolumeChanged.push(m)}),r(this,"removeOnVolumeChanged",m=>{this.onVolumeChanged=this.onVolumeChanged.filter(y=>y!==m)}),this.options=f,this.emulatorsUi=s,this.storage=s.dom.storage,this.emulatorFunction=f.emulatorFunction||"dosboxWorker",this.clickToStart=f.clickToStart||!1,this.layers=this.emulatorsUi.dom.layers(h,f.layersOptions),this.layers.showLoadingLayer(),this.createTransportLayer=f.createTransportLayer,this.mobileControls=c.pointers.bind.mobile,this.autolock=!1,this.mirroredControls=this.options.mirroredControls===!0||this.storage.getItem("mirroredControls")==="true";const p=this.options.scaleControls??Number.parseFloat(this.storage.getItem("scaleControls")??"1.0");this.scaleControls=Number.isNaN(p)?1:p;const v=this.options.sensitivityValue??Number.parseFloat(this.storage.getItem("sensitivity")??"1.0");this.sensitivity=Number.isNaN(v)?1:v;const g=Number.parseFloat(this.storage.getItem("volume")??"1.0");if(this.volume=Number.isNaN(g)?1:g,this.onMobileControlsChanged=()=>{},this.emulatorFunction==="backend"&&this.createTransportLayer===void 0)throw new Error("Emulator function set to 'backend' but 'createTransportLayer' is not a function")}async run(h,s,f){var p,v,g;await this.stop(),this.layers.setLoadingMessage("Starting...");const m=f!=null&&f.length>0?f:h+".changes";let y;try{y=await this.runBundle(h,s,m)}catch(w){throw this.layers.setLoadingMessage("Unexpected error occured..."),this.layers.notyf.error({message:"Can't start emulator look browser logs for more info"}),console.error(w),w}const _=this.emulatorsUi;if(this.emulatorFunction==="janus")_.graphics.video(this.layers,y);else{_.persist.save(m,this.layers,y,emulators);try{if(this.options.noWebGL===!0)throw new Error("WebGL is disabled by options");_.graphics.webGl(this.layers,y,this.options.aspect)}catch{console.error("Unable to create webgl canvas, fallback to 2d rendering"),_.graphics._2d(this.layers,y,this.options.aspect)}this.setVolumeImplFn=_.sound.audioNode(y),this.setVolumeImplFn(this.volume)}_.dom.lifecycle(y);const b=await y.config();return this.autolock=((p=b.output)===null||p===void 0||(v=p.options)===null||v===void 0||(g=v.autolock)===null||g===void 0?void 0:g.value)===!0,await this.setLayersConfig((0,o.extractLayersConfig)(b)),this.mobileControls||(this.mobileControls=!0,this.disableMobileControls()),this.layers.setLoadingMessage("Ready"),this.layers.hideLoadingLayer(),this.clickToStart&&this.layers.showClickToStart(),y}async stop(){if(this.layers.showLoadingLayer(),this.ciPromise===void 0)return;const h=await this.ciPromise;delete this.ciPromise,await h.exit()}async setLayersConfig(h,s){if(this.ciPromise===void 0)return;const f=await this.ciPromise;this.layersConfig=h,this.unbindControls(),h===null?this.unbindControls=(0,l.initNullLayersControl)(this,this.layers,f):h.version===void 0?this.unbindControls=(0,a.initLegacyLayersControl)(this,this.layers,h,f):this.unbindControls=(0,d.initLayersControl)(this.layers,h,f,this,this.mirroredControls,this.scaleControls,s)}getLayersConfig(){return this.layersConfig}async enableMobileControls(){this.mobileControls||(this.mobileControls=!0,await this.setLayersConfig(this.storedLayersConfig),this.storedLayersConfig=null,this.onMobileControlsChanged(!0))}async disableMobileControls(){this.mobileControls&&(this.mobileControls=!1,this.storedLayersConfig=this.layersConfig,await this.setLayersConfig(null),this.onMobileControlsChanged(!1))}async setMirroredControls(h){this.mirroredControls!==h&&(this.mirroredControls=h,this.storage.setItem("mirroredControls",h+""),h?this.mobileControls?await this.setLayersConfig(this.layersConfig):await this.enableMobileControls():this.mobileControls&&await this.setLayersConfig(this.layersConfig))}async setScaleControls(h){if(h!==this.scaleControls){this.scaleControls=h,this.storage.setItem("scaleControls",h+""),this.mobileControls&&await this.setLayersConfig(this.layersConfig);for(const s of this.onScaleChanged)s(this.scaleControls)}}async setSensitivity(h){if(h!==this.sensitivity){this.sensitivity=h,this.storage.setItem("sensitivity",h+""),await this.setLayersConfig(this.layersConfig);for(const s of this.onSensitivityChanged)s(this.sensitivity)}}async setVolume(h){this.volume=h,this.storage.setItem("volume",h+""),this.setVolumeImplFn(h);for(const s of this.onVolumeChanged)s(this.volume)}async setAutolock(h){h!==this.autolock&&(this.autolock=h,await this.setLayersConfig(this.layersConfig))}setOnMobileControlsChanged(h){this.onMobileControlsChanged=h}async runBundle(h,s,f){const p=this.emulatorsUi;if(this.emulatorFunction==="janus")this.layers.setLoadingMessage("Connecting..."),this.ciPromise=emulators.janus(h);else{this.layers.setLoadingMessage("Downloading bundle ...");const v=p.network.resolveBundle(h,{onprogress:m=>this.layers.setLoadingMessage("Downloading bundle "+m+"%")}),g={onExtractProgress:(m,y,_,b)=>{if(m!==0)return;const w=Math.round(_/b*100),A=y.lastIndexOf("/"),E=y.substring(A+1);this.layers.setLoadingMessage("Extracting "+w+"% ("+E+")")}};try{let m;m=s!=null&&s.length>0?await p.network.resolveBundle(s,{httpCache:!1}):await p.persist.load(f,emulators);const y=await v;this.emulatorFunction==="backend"?this.ciPromise=emulators.backend([y,m],this.createTransportLayer(),g):this.ciPromise=emulators[this.emulatorFunction]([y,m],g)}catch{const m=await v;this.emulatorFunction==="backend"?this.ciPromise=emulators.backend([m],this.createTransportLayer(),g):this.ciPromise=emulators[this.emulatorFunction]([m],g)}}return this.ciPromise}}},{"./controls/layers-config":21,"./controls/layers-control":22,"./controls/legacy-layers-control":23,"./controls/null-layers-control":29,"./dom/pointer":36}],43:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.resolveBundle=void 0,n.resolveBundle=async function(r,o){const a=o==null?void 0:o.onprogress,l=(o==null?void 0:o.httpCache)!==!1;return new Promise((d,c)=>{const h=new XMLHttpRequest;h.open("GET",r,!0),h.overrideMimeType("text/plain; charset=x-user-defined"),h.addEventListener("error",()=>{c(new Error("Network error, can't download "+r))}),h.addEventListener("abort",()=>{c(new Error("Request canceled for url "+r))},!1),h.responseType="arraybuffer",h.onreadystatechange=()=>{h.readyState===4&&(h.status===200?(a!==void 0&&a(100),d(new Uint8Array(h.response))):c(new Error("Network error, can't download "+r)))},a!==void 0&&(h.onprogress=s=>{if(s.total&&s.total>0){const f=Math.round(1e4*s.loaded/s.total)/100;a(f)}}),l===!1&&(h.setRequestHeader("Cache-Control","no-cache, no-store, max-age=0"),h.setRequestHeader("Expires","Tue, 01 Jan 1980 1:00:00 GMT"),h.setRequestHeader("Pragma","no-cache")),h.send()})}},{}],44:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.notyf=void 0,n.notyf=function(r,o){const a=r.notyf;o.events().onMessage(function(l){if(l==="error"){for(var d=arguments.length,c=new Array(d>1?d-1:0),h=1;h<d;h++)c[h-1]=arguments[h];a.error({message:JSON.stringify(c)})}})}},{}],45:[function(e,i,n){function r(l,d,c){return d in l?Object.defineProperty(l,d,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[d]=c,l}Object.defineProperty(n,"__esModule",{value:!0}),n.makeCache=void 0;class o{close(){}put(d,c){return Promise.resolve()}get(d,c){return c!==void 0?Promise.resolve(c):Promise.reject(new Error("Cache is not supported on this host"))}forEach(d,c){c()}}n.makeCache=function(l,d){return new Promise(c=>{new a(l,c,h=>{d.onErr(h),c(new o)})})};class a{constructor(d,c,h){if(r(this,"version",void 0),r(this,"storeName","files"),r(this,"indexedDB",void 0),r(this,"db",null),this.version=d,this.indexedDB=typeof window>"u"?void 0:window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,this.indexedDB)try{const s=this.indexedDB.open("js-dos-cache ("+d+")",1);s.onerror=f=>{var p;h("Can't open cache database: "+((p=s.error)===null||p===void 0?void 0:p.message))},s.onsuccess=f=>{this.db=s.result,c(this)},s.onupgradeneeded=f=>{try{this.db=s.result,this.db.onerror=p=>{h("Can't upgrade cache database")},this.db.createObjectStore(this.storeName)}catch{h("Can't upgrade cache database")}}}catch(s){h("Can't open cache database: "+s.message)}else h("Indexed db is not supported on this host")}close(){this.db!==null&&(this.db.close(),this.db=null)}put(d,c){return new Promise(h=>{if(this.db===null)return void h();const s=this.db.transaction(this.storeName,"readwrite");s.oncomplete=()=>h(),s.objectStore(this.storeName).put(c,d)})}get(d,c){return new Promise((h,s)=>{function f(v){c===void 0?s(new Error(v)):h(c)}if(this.db===null)return void f("db is not initalized");const p=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).get(d);p.onerror=()=>s(new Error("Can't read value for key '"+d+"'")),p.onsuccess=()=>{p.result?h(p.result):f("Result is empty for key '"+d+"', result: "+p.result)}})}forEach(d,c){if(this.db===null)return void c();const h=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).openCursor();h.onerror=()=>c(),h.onsuccess=s=>{const f=s.target.result;f?(d(f.key.toString(),f.value),f.continue()):c()}}}},{}],46:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.load=n.save=void 0;const r=(0,e("./cache").makeCache)("emulators-ui-saves",{onErr:console.error});n.save=function(o,a,l,d){a.setOnSave(async()=>{const c=await r,h=await l.persist();return c.put(o,h.buffer)})},n.load=async function(o,a){return(await r).get(o).then(l=>new Uint8Array(l))}},{"./cache":45}],47:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.audioNode=void 0;class r{constructor(){var a,l;l=[],(a="samplesQueue")in this?Object.defineProperty(this,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):this[a]=l}push(a){this.samplesQueue.push(a)}length(){let a=0;for(const l of this.samplesQueue)a+=l.length;return a}writeTo(a,l){let d=0;for(;this.samplesQueue.length>0;){const c=this.samplesQueue[0],h=Math.min(l-d,c.length);if(h===c.length?(a.set(c,d),this.samplesQueue.shift()):(a.set(c.slice(0,h),d),this.samplesQueue[0]=c.slice(h)),d+=h,d===l)break}d<l&&a.fill(0,d)}}n.audioNode=function(o){const a=o.soundFrequency();if(a===0)return console.warn("Can't create audio node with sampleRate === 0, ingnoring"),()=>{};let l=null;if(typeof AudioContext<"u"?l=new AudioContext({sampleRate:a,latencyHint:"interactive"}):window.webkitAudioContext!==void 0&&(l=new window.webkitAudioContext({sampleRate:a,latencyHint:"interactive"})),l==null)return()=>{};const d=new r;o.events().onSoundPush(g=>{d.length()<6144&&d.push(g)});const c=l.createScriptProcessor(2048,0,1);let h=!1,s=0;const f=o.directSound;c.onaudioprocess=o.directSound!==void 0?g=>{if(!h){const A=f.buffer[0];h=Math.ceil(A[A.length-1])>0}if(!h)return;let m=0,y=g.outputBuffer.length;const _=g.outputBuffer.numberOfChannels;let b,w=f.buffer[s];for(;y>0&&(b=Math.ceil(w[w.length-1]))>0;)if(y>=b){const A=w.subarray(0,b);for(let E=0;E<_;++E)g.outputBuffer.getChannelData(E).set(A,m);m+=b,y-=b,w[w.length-1]=0,s=(s+1)%f.ringSize,w=f.buffer[s]}else{const A=w.subarray(0,y);for(let E=0;E<_;++E)g.outputBuffer.getChannelData(E).set(A,m);w[w.length-1]=b-y,w.set(w.subarray(y,y+w[w.length-1])),y=0}}:g=>{const m=g.outputBuffer.length,y=g.outputBuffer.numberOfChannels,_=d.length();if(h||(h=_>=2048),h)for(let b=0;b<y;b++){const w=g.outputBuffer.getChannelData(b);d.writeTo(w,m)}};const p=l.createGain();p.connect(l.destination),c.connect(p),p.gain.value=1;const v=()=>{l!==null&&l.state==="suspended"&&l.resume()};return document.addEventListener("click",v,{once:!0}),document.addEventListener("touchstart",v,{once:!0}),document.addEventListener("keydown",v,{once:!0}),o.events().onExit(()=>{l!==null&&(c.disconnect(),p.disconnect(),l.close()),document.removeEventListener("click",v),document.removeEventListener("touchstart",v),document.removeEventListener("keydown",v)}),g=>{p.gain.value=g}}},{}]},{},[38]),function e(i,n,r){function o(d,c){if(!n[d]){if(!i[d]){var h=typeof kn=="function"&&kn;if(!c&&h)return h(d,!0);if(a)return a(d,!0);var s=new Error("Cannot find module '"+d+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[d]={exports:{}};i[d][0].call(f.exports,function(p){return o(i[d][1][p]||p)},f,f.exports,e,i,n,r)}return n[d].exports}for(var a=typeof kn=="function"&&kn,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/try-to-string"),a=TypeError;i.exports=function(l){if(r(l))return l;throw a(o(l)+" is not a function")}},{"../internals/is-callable":67,"../internals/try-to-string":120}],2:[function(e,i,n){var r=e("../internals/is-constructor"),o=e("../internals/try-to-string"),a=TypeError;i.exports=function(l){if(r(l))return l;throw a(o(l)+" is not a constructor")}},{"../internals/is-constructor":68,"../internals/try-to-string":120}],3:[function(e,i,n){var r=e("../internals/is-callable"),o=String,a=TypeError;i.exports=function(l){if(typeof l=="object"||r(l))return l;throw a("Can't set "+o(l)+" as a prototype")}},{"../internals/is-callable":67}],4:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/object-create"),a=e("../internals/object-define-property").f,l=r("unscopables"),d=Array.prototype;d[l]==null&&a(d,l,{configurable:!0,value:o(null)}),i.exports=function(c){d[l][c]=!0}},{"../internals/object-create":81,"../internals/object-define-property":83,"../internals/well-known-symbol":127}],5:[function(e,i,n){var r=e("../internals/string-multibyte").charAt;i.exports=function(o,a,l){return a+(l?r(o,a).length:1)}},{"../internals/string-multibyte":107}],6:[function(e,i,n){var r=e("../internals/object-is-prototype-of"),o=TypeError;i.exports=function(a,l){if(r(l,a))return a;throw o("Incorrect invocation")}},{"../internals/object-is-prototype-of":88}],7:[function(e,i,n){var r=e("../internals/is-object"),o=String,a=TypeError;i.exports=function(l){if(r(l))return l;throw a(o(l)+" is not an object")}},{"../internals/is-object":71}],8:[function(e,i,n){i.exports=typeof ArrayBuffer<"u"&&typeof DataView<"u"},{}],9:[function(e,i,n){var r,o,a,l=e("../internals/array-buffer-native"),d=e("../internals/descriptors"),c=e("../internals/global"),h=e("../internals/is-callable"),s=e("../internals/is-object"),f=e("../internals/has-own-property"),p=e("../internals/classof"),v=e("../internals/try-to-string"),g=e("../internals/create-non-enumerable-property"),m=e("../internals/define-built-in"),y=e("../internals/object-define-property").f,_=e("../internals/object-is-prototype-of"),b=e("../internals/object-get-prototype-of"),w=e("../internals/object-set-prototype-of"),A=e("../internals/well-known-symbol"),E=e("../internals/uid"),I=e("../internals/internal-state"),S=I.enforce,T=I.get,U=c.Int8Array,N=U&&U.prototype,x=c.Uint8ClampedArray,M=x&&x.prototype,P=U&&b(U),L=N&&b(N),F=Object.prototype,q=c.TypeError,j=A("toStringTag"),W=E("TYPED_ARRAY_TAG"),D=l&&!!w&&p(c.opera)!=="Opera",C=!1,R={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},O={BigInt64Array:8,BigUint64Array:8},B=function(Y){var H=b(Y);if(s(H)){var te=T(H);return te&&f(te,"TypedArrayConstructor")?te.TypedArrayConstructor:B(H)}},G=function(Y){if(!s(Y))return!1;var H=p(Y);return f(R,H)||f(O,H)};for(r in R)(a=(o=c[r])&&o.prototype)?S(a).TypedArrayConstructor=o:D=!1;for(r in O)(a=(o=c[r])&&o.prototype)&&(S(a).TypedArrayConstructor=o);if((!D||!h(P)||P===Function.prototype)&&(P=function(){throw q("Incorrect invocation")},D))for(r in R)c[r]&&w(c[r],P);if((!D||!L||L===F)&&(L=P.prototype,D))for(r in R)c[r]&&w(c[r].prototype,L);if(D&&b(M)!==L&&w(M,L),d&&!f(L,j))for(r in C=!0,y(L,j,{get:function(){return s(this)?this[W]:void 0}}),R)c[r]&&g(c[r],W,r);i.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_TAG:C&&W,aTypedArray:function(Y){if(G(Y))return Y;throw q("Target is not a typed array")},aTypedArrayConstructor:function(Y){if(h(Y)&&(!w||_(P,Y)))return Y;throw q(v(Y)+" is not a typed array constructor")},exportTypedArrayMethod:function(Y,H,te,ue){if(d){if(te)for(var _e in R){var J=c[_e];if(J&&f(J.prototype,Y))try{delete J.prototype[Y]}catch{try{J.prototype[Y]=H}catch{}}}L[Y]&&!te||m(L,Y,te?H:D&&N[Y]||H,ue)}},exportTypedArrayStaticMethod:function(Y,H,te){var ue,_e;if(d){if(w){if(te){for(ue in R)if((_e=c[ue])&&f(_e,Y))try{delete _e[Y]}catch{}}if(P[Y]&&!te)return;try{return m(P,Y,te?H:D&&P[Y]||H)}catch{}}for(ue in R)!(_e=c[ue])||_e[Y]&&!te||m(_e,Y,H)}},getTypedArrayConstructor:B,isView:function(Y){if(!s(Y))return!1;var H=p(Y);return H==="DataView"||f(R,H)||f(O,H)},isTypedArray:G,TypedArray:P,TypedArrayPrototype:L}},{"../internals/array-buffer-native":8,"../internals/classof":20,"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/descriptors":31,"../internals/global":55,"../internals/has-own-property":56,"../internals/internal-state":64,"../internals/is-callable":67,"../internals/is-object":71,"../internals/object-define-property":83,"../internals/object-get-prototype-of":87,"../internals/object-is-prototype-of":88,"../internals/object-set-prototype-of":92,"../internals/try-to-string":120,"../internals/uid":124,"../internals/well-known-symbol":127}],10:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/function-uncurry-this"),a=e("../internals/descriptors"),l=e("../internals/array-buffer-native"),d=e("../internals/function-name"),c=e("../internals/create-non-enumerable-property"),h=e("../internals/define-built-ins"),s=e("../internals/fails"),f=e("../internals/an-instance"),p=e("../internals/to-integer-or-infinity"),v=e("../internals/to-length"),g=e("../internals/to-index"),m=e("../internals/ieee754"),y=e("../internals/object-get-prototype-of"),_=e("../internals/object-set-prototype-of"),b=e("../internals/object-get-own-property-names").f,w=e("../internals/object-define-property").f,A=e("../internals/array-fill"),E=e("../internals/array-slice-simple"),I=e("../internals/set-to-string-tag"),S=e("../internals/internal-state"),T=d.PROPER,U=d.CONFIGURABLE,N=S.get,x=S.set,M="ArrayBuffer",P="Wrong index",L=r.ArrayBuffer,F=L,q=F&&F.prototype,j=r.DataView,W=j&&j.prototype,D=Object.prototype,C=r.Array,R=r.RangeError,O=o(A),B=o([].reverse),G=m.pack,Y=m.unpack,H=function(K){return[255&K]},te=function(K){return[255&K,K>>8&255]},ue=function(K){return[255&K,K>>8&255,K>>16&255,K>>24&255]},_e=function(K){return K[3]<<24|K[2]<<16|K[1]<<8|K[0]},J=function(K){return G(K,23,4)},re=function(K){return G(K,52,8)},pe=function(K,X){w(K.prototype,X,{get:function(){return N(this)[X]}})},we=function(K,X,fe,Pe){var Le=g(fe),Ne=N(K);if(Le+X>Ne.byteLength)throw R(P);var ze=N(Ne.buffer).bytes,De=Le+Ne.byteOffset,ve=E(ze,De,De+X);return Pe?ve:B(ve)},me=function(K,X,fe,Pe,Le,Ne){var ze=g(fe),De=N(K);if(ze+X>De.byteLength)throw R(P);for(var ve=N(De.buffer).bytes,Xe=ze+De.byteOffset,je=Pe(+Le),Oe=0;Oe<X;Oe++)ve[Xe+Oe]=je[Ne?Oe:X-Oe-1]};if(l){var ye=T&&L.name!==M;if(s(function(){L(1)})&&s(function(){new L(-1)})&&!s(function(){return new L,new L(1.5),new L(NaN),ye&&!U}))ye&&U&&c(L,"name",M);else{(F=function(K){return f(this,q),new L(g(K))}).prototype=q;for(var $e,Fe=b(L),Je=0;Fe.length>Je;)($e=Fe[Je++])in F||c(F,$e,L[$e]);q.constructor=F}_&&y(W)!==D&&_(W,D);var ct=new j(new F(2)),mt=o(W.setInt8);ct.setInt8(0,2147483648),ct.setInt8(1,2147483649),!ct.getInt8(0)&&ct.getInt8(1)||h(W,{setInt8:function(K,X){mt(this,K,X<<24>>24)},setUint8:function(K,X){mt(this,K,X<<24>>24)}},{unsafe:!0})}else q=(F=function(K){f(this,q);var X=g(K);x(this,{bytes:O(C(X),0),byteLength:X}),a||(this.byteLength=X)}).prototype,W=(j=function(K,X,fe){f(this,W),f(K,q);var Pe=N(K).byteLength,Le=p(X);if(Le<0||Le>Pe)throw R("Wrong offset");if(Le+(fe=fe===void 0?Pe-Le:v(fe))>Pe)throw R("Wrong length");x(this,{buffer:K,byteLength:fe,byteOffset:Le}),a||(this.buffer=K,this.byteLength=fe,this.byteOffset=Le)}).prototype,a&&(pe(F,"byteLength"),pe(j,"buffer"),pe(j,"byteLength"),pe(j,"byteOffset")),h(W,{getInt8:function(K){return we(this,1,K)[0]<<24>>24},getUint8:function(K){return we(this,1,K)[0]},getInt16:function(K){var X=we(this,2,K,arguments.length>1?arguments[1]:void 0);return(X[1]<<8|X[0])<<16>>16},getUint16:function(K){var X=we(this,2,K,arguments.length>1?arguments[1]:void 0);return X[1]<<8|X[0]},getInt32:function(K){return _e(we(this,4,K,arguments.length>1?arguments[1]:void 0))},getUint32:function(K){return _e(we(this,4,K,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(K){return Y(we(this,4,K,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(K){return Y(we(this,8,K,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(K,X){me(this,1,K,H,X)},setUint8:function(K,X){me(this,1,K,H,X)},setInt16:function(K,X){me(this,2,K,te,X,arguments.length>2?arguments[2]:void 0)},setUint16:function(K,X){me(this,2,K,te,X,arguments.length>2?arguments[2]:void 0)},setInt32:function(K,X){me(this,4,K,ue,X,arguments.length>2?arguments[2]:void 0)},setUint32:function(K,X){me(this,4,K,ue,X,arguments.length>2?arguments[2]:void 0)},setFloat32:function(K,X){me(this,4,K,J,X,arguments.length>2?arguments[2]:void 0)},setFloat64:function(K,X){me(this,8,K,re,X,arguments.length>2?arguments[2]:void 0)}});I(F,M),I(j,"DataView"),i.exports={ArrayBuffer:F,DataView:j}},{"../internals/an-instance":6,"../internals/array-buffer-native":8,"../internals/array-fill":11,"../internals/array-slice-simple":14,"../internals/create-non-enumerable-property":24,"../internals/define-built-ins":28,"../internals/descriptors":31,"../internals/fails":42,"../internals/function-name":48,"../internals/function-uncurry-this":49,"../internals/global":55,"../internals/ieee754":60,"../internals/internal-state":64,"../internals/object-define-property":83,"../internals/object-get-own-property-names":85,"../internals/object-get-prototype-of":87,"../internals/object-set-prototype-of":92,"../internals/set-to-string-tag":103,"../internals/to-index":109,"../internals/to-integer-or-infinity":111,"../internals/to-length":112}],11:[function(e,i,n){var r=e("../internals/to-object"),o=e("../internals/to-absolute-index"),a=e("../internals/length-of-array-like");i.exports=function(l){for(var d=r(this),c=a(d),h=arguments.length,s=o(h>1?arguments[1]:void 0,c),f=h>2?arguments[2]:void 0,p=f===void 0?c:o(f,c);p>s;)d[s++]=l;return d}},{"../internals/length-of-array-like":76,"../internals/to-absolute-index":108,"../internals/to-object":113}],12:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/to-absolute-index"),a=e("../internals/length-of-array-like"),l=function(d){return function(c,h,s){var f,p=r(c),v=a(p),g=o(s,v);if(d&&h!=h){for(;v>g;)if((f=p[g++])!=f)return!0}else for(;v>g;g++)if((d||g in p)&&p[g]===h)return d||g||0;return!d&&-1}};i.exports={includes:l(!0),indexOf:l(!1)}},{"../internals/length-of-array-like":76,"../internals/to-absolute-index":108,"../internals/to-indexed-object":110}],13:[function(e,i,n){var r=e("../internals/function-bind-context"),o=e("../internals/function-uncurry-this"),a=e("../internals/indexed-object"),l=e("../internals/to-object"),d=e("../internals/length-of-array-like"),c=e("../internals/array-species-create"),h=o([].push),s=function(f){var p=f==1,v=f==2,g=f==3,m=f==4,y=f==6,_=f==7,b=f==5||y;return function(w,A,E,I){for(var S,T,U=l(w),N=a(U),x=r(A,E),M=d(N),P=0,L=I||c,F=p?L(w,M):v||_?L(w,0):void 0;M>P;P++)if((b||P in N)&&(T=x(S=N[P],P,U),f))if(p)F[P]=T;else if(T)switch(f){case 3:return!0;case 5:return S;case 6:return P;case 2:h(F,S)}else switch(f){case 4:return!1;case 7:h(F,S)}return y?-1:g||m?m:F}};i.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},{"../internals/array-species-create":17,"../internals/function-bind-context":45,"../internals/function-uncurry-this":49,"../internals/indexed-object":61,"../internals/length-of-array-like":76,"../internals/to-object":113}],14:[function(e,i,n){var r=e("../internals/to-absolute-index"),o=e("../internals/length-of-array-like"),a=e("../internals/create-property"),l=Array,d=Math.max;i.exports=function(c,h,s){for(var f=o(c),p=r(h,f),v=r(s===void 0?f:s,f),g=l(d(v-p,0)),m=0;p<v;p++,m++)a(g,m,c[p]);return g.length=m,g}},{"../internals/create-property":26,"../internals/length-of-array-like":76,"../internals/to-absolute-index":108}],15:[function(e,i,n){var r=e("../internals/array-slice-simple"),o=Math.floor,a=function(c,h){var s=c.length,f=o(s/2);return s<8?l(c,h):d(c,a(r(c,0,f),h),a(r(c,f),h),h)},l=function(c,h){for(var s,f,p=c.length,v=1;v<p;){for(f=v,s=c[v];f&&h(c[f-1],s)>0;)c[f]=c[--f];f!==v++&&(c[f]=s)}return c},d=function(c,h,s,f){for(var p=h.length,v=s.length,g=0,m=0;g<p||m<v;)c[g+m]=g<p&&m<v?f(h[g],s[m])<=0?h[g++]:s[m++]:g<p?h[g++]:s[m++];return c};i.exports=a},{"../internals/array-slice-simple":14}],16:[function(e,i,n){var r=e("../internals/is-array"),o=e("../internals/is-constructor"),a=e("../internals/is-object"),l=e("../internals/well-known-symbol")("species"),d=Array;i.exports=function(c){var h;return r(c)&&(h=c.constructor,(o(h)&&(h===d||r(h.prototype))||a(h)&&(h=h[l])===null)&&(h=void 0)),h===void 0?d:h}},{"../internals/is-array":66,"../internals/is-constructor":68,"../internals/is-object":71,"../internals/well-known-symbol":127}],17:[function(e,i,n){var r=e("../internals/array-species-constructor");i.exports=function(o,a){return new(r(o))(a===0?0:a)}},{"../internals/array-species-constructor":16}],18:[function(e,i,n){var r=e("../internals/well-known-symbol")("iterator"),o=!1;try{var a=0,l={next:function(){return{done:!!a++}},return:function(){o=!0}};l[r]=function(){return this},Array.from(l,function(){throw 2})}catch{}i.exports=function(d,c){if(!c&&!o)return!1;var h=!1;try{var s={};s[r]=function(){return{next:function(){return{done:h=!0}}}},d(s)}catch{}return h}},{"../internals/well-known-symbol":127}],19:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=r({}.toString),a=r("".slice);i.exports=function(l){return a(o(l),8,-1)}},{"../internals/function-uncurry-this":49}],20:[function(e,i,n){var r=e("../internals/to-string-tag-support"),o=e("../internals/is-callable"),a=e("../internals/classof-raw"),l=e("../internals/well-known-symbol")("toStringTag"),d=Object,c=a(function(){return arguments}())=="Arguments";i.exports=r?a:function(h){var s,f,p;return h===void 0?"Undefined":h===null?"Null":typeof(f=function(v,g){try{return v[g]}catch{}}(s=d(h),l))=="string"?f:c?a(s):(p=a(s))=="Object"&&o(s.callee)?"Arguments":p}},{"../internals/classof-raw":19,"../internals/is-callable":67,"../internals/to-string-tag-support":118,"../internals/well-known-symbol":127}],21:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/own-keys"),a=e("../internals/object-get-own-property-descriptor"),l=e("../internals/object-define-property");i.exports=function(d,c,h){for(var s=o(c),f=l.f,p=a.f,v=0;v<s.length;v++){var g=s[v];r(d,g)||h&&r(h,g)||f(d,g,p(c,g))}}},{"../internals/has-own-property":56,"../internals/object-define-property":83,"../internals/object-get-own-property-descriptor":84,"../internals/own-keys":94}],22:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},{"../internals/fails":42}],23:[function(e,i,n){var r=e("../internals/iterators-core").IteratorPrototype,o=e("../internals/object-create"),a=e("../internals/create-property-descriptor"),l=e("../internals/set-to-string-tag"),d=e("../internals/iterators"),c=function(){return this};i.exports=function(h,s,f,p){var v=s+" Iterator";return h.prototype=o(r,{next:a(+!p,f)}),l(h,v,!1,!0),d[v]=c,h}},{"../internals/create-property-descriptor":25,"../internals/iterators":75,"../internals/iterators-core":74,"../internals/object-create":81,"../internals/set-to-string-tag":103}],24:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=r?function(l,d,c){return o.f(l,d,a(1,c))}:function(l,d,c){return l[d]=c,l}},{"../internals/create-property-descriptor":25,"../internals/descriptors":31,"../internals/object-define-property":83}],25:[function(e,i,n){i.exports=function(r,o){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:o}}},{}],26:[function(e,i,n){var r=e("../internals/to-property-key"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=function(l,d,c){var h=r(d);h in l?o.f(l,h,a(0,c)):l[h]=c}},{"../internals/create-property-descriptor":25,"../internals/object-define-property":83,"../internals/to-property-key":117}],27:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/object-define-property"),a=e("../internals/make-built-in"),l=e("../internals/define-global-property");i.exports=function(d,c,h,s){s||(s={});var f=s.enumerable,p=s.name!==void 0?s.name:c;if(r(h)&&a(h,p,s),s.global)f?d[c]=h:l(c,h);else{try{s.unsafe?d[c]&&(f=!0):delete d[c]}catch{}f?d[c]=h:o.f(d,c,{value:h,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return d}},{"../internals/define-global-property":29,"../internals/is-callable":67,"../internals/make-built-in":77,"../internals/object-define-property":83}],28:[function(e,i,n){var r=e("../internals/define-built-in");i.exports=function(o,a,l){for(var d in a)r(o,d,a[d],l);return o}},{"../internals/define-built-in":27}],29:[function(e,i,n){var r=e("../internals/global"),o=Object.defineProperty;i.exports=function(a,l){try{o(r,a,{value:l,configurable:!0,writable:!0})}catch{r[a]=l}return l}},{"../internals/global":55}],30:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/function-call"),a=e("../internals/is-pure"),l=e("../internals/function-name"),d=e("../internals/is-callable"),c=e("../internals/create-iterator-constructor"),h=e("../internals/object-get-prototype-of"),s=e("../internals/object-set-prototype-of"),f=e("../internals/set-to-string-tag"),p=e("../internals/create-non-enumerable-property"),v=e("../internals/define-built-in"),g=e("../internals/well-known-symbol"),m=e("../internals/iterators"),y=e("../internals/iterators-core"),_=l.PROPER,b=l.CONFIGURABLE,w=y.IteratorPrototype,A=y.BUGGY_SAFARI_ITERATORS,E=g("iterator"),I="keys",S="values",T="entries",U=function(){return this};i.exports=function(N,x,M,P,L,F,q){c(M,x,P);var j,W,D,C=function(te){if(te===L&&Y)return Y;if(!A&&te in B)return B[te];switch(te){case I:case S:case T:return function(){return new M(this,te)}}return function(){return new M(this)}},R=x+" Iterator",O=!1,B=N.prototype,G=B[E]||B["@@iterator"]||L&&B[L],Y=!A&&G||C(L),H=x=="Array"&&B.entries||G;if(H&&(j=h(H.call(new N)))!==Object.prototype&&j.next&&(a||h(j)===w||(s?s(j,w):d(j[E])||v(j,E,U)),f(j,R,!0,!0),a&&(m[R]=U)),_&&L==S&&G&&G.name!==S&&(!a&&b?p(B,"name",S):(O=!0,Y=function(){return o(G,this)})),L)if(W={values:C(S),keys:F?Y:C(I),entries:C(T)},q)for(D in W)(A||O||!(D in B))&&v(B,D,W[D]);else r({target:x,proto:!0,forced:A||O},W);return a&&!q||B[E]===Y||v(B,E,Y,{name:L}),m[x]=Y,W}},{"../internals/create-iterator-constructor":23,"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/export":41,"../internals/function-call":47,"../internals/function-name":48,"../internals/is-callable":67,"../internals/is-pure":72,"../internals/iterators":75,"../internals/iterators-core":74,"../internals/object-get-prototype-of":87,"../internals/object-set-prototype-of":92,"../internals/set-to-string-tag":103,"../internals/well-known-symbol":127}],31:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},{"../internals/fails":42}],32:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-object"),a=r.document,l=o(a)&&o(a.createElement);i.exports=function(d){return l?a.createElement(d):{}}},{"../internals/global":55,"../internals/is-object":71}],33:[function(e,i,n){i.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},{}],34:[function(e,i,n){var r=e("../internals/document-create-element")("span").classList,o=r&&r.constructor&&r.constructor.prototype;i.exports=o===Object.prototype?void 0:o},{"../internals/document-create-element":32}],35:[function(e,i,n){var r=e("../internals/engine-user-agent").match(/firefox\/(\d+)/i);i.exports=!!r&&+r[1]},{"../internals/engine-user-agent":37}],36:[function(e,i,n){var r=e("../internals/engine-user-agent");i.exports=/MSIE|Trident/.test(r)},{"../internals/engine-user-agent":37}],37:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("navigator","userAgent")||""},{"../internals/get-built-in":50}],38:[function(e,i,n){var r,o,a=e("../internals/global"),l=e("../internals/engine-user-agent"),d=a.process,c=a.Deno,h=d&&d.versions||c&&c.version,s=h&&h.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&l&&(!(r=l.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=l.match(/Chrome\/(\d+)/))&&(o=+r[1]),i.exports=o},{"../internals/engine-user-agent":37,"../internals/global":55}],39:[function(e,i,n){var r=e("../internals/engine-user-agent").match(/AppleWebKit\/(\d+)\./);i.exports=!!r&&+r[1]},{"../internals/engine-user-agent":37}],40:[function(e,i,n){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],41:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/object-get-own-property-descriptor").f,a=e("../internals/create-non-enumerable-property"),l=e("../internals/define-built-in"),d=e("../internals/define-global-property"),c=e("../internals/copy-constructor-properties"),h=e("../internals/is-forced");i.exports=function(s,f){var p,v,g,m,y,_=s.target,b=s.global,w=s.stat;if(p=b?r:w?r[_]||d(_,{}):(r[_]||{}).prototype)for(v in f){if(m=f[v],g=s.dontCallGetSet?(y=o(p,v))&&y.value:p[v],!h(b?v:_+(w?".":"#")+v,s.forced)&&g!==void 0){if(typeof m==typeof g)continue;c(m,g)}(s.sham||g&&g.sham)&&a(m,"sham",!0),l(p,v,m,s)}}},{"../internals/copy-constructor-properties":21,"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/define-global-property":29,"../internals/global":55,"../internals/is-forced":69,"../internals/object-get-own-property-descriptor":84}],42:[function(e,i,n){i.exports=function(r){try{return!!r()}catch{return!0}}},{}],43:[function(e,i,n){e("../modules/es.regexp.exec");var r=e("../internals/function-uncurry-this"),o=e("../internals/define-built-in"),a=e("../internals/regexp-exec"),l=e("../internals/fails"),d=e("../internals/well-known-symbol"),c=e("../internals/create-non-enumerable-property"),h=d("species"),s=RegExp.prototype;i.exports=function(f,p,v,g){var m=d(f),y=!l(function(){var A={};return A[m]=function(){return 7},""[f](A)!=7}),_=y&&!l(function(){var A=!1,E=/a/;return f==="split"&&((E={}).constructor={},E.constructor[h]=function(){return E},E.flags="",E[m]=/./[m]),E.exec=function(){return A=!0,null},E[m](""),!A});if(!y||!_||v){var b=r(/./[m]),w=p(m,""[f],function(A,E,I,S,T){var U=r(A),N=E.exec;return N===a||N===s.exec?y&&!T?{done:!0,value:b(E,I,S)}:{done:!0,value:U(I,E,S)}:{done:!1}});o(String.prototype,f,w[0]),o(s,m,w[1])}g&&c(s[m],"sham",!0)}},{"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/fails":42,"../internals/function-uncurry-this":49,"../internals/regexp-exec":96,"../internals/well-known-symbol":127,"../modules/es.regexp.exec":129}],44:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.apply,l=o.call;i.exports=typeof Reflect=="object"&&Reflect.apply||(r?l.bind(a):function(){return l.apply(a,arguments)})},{"../internals/function-bind-native":46}],45:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/a-callable"),a=e("../internals/function-bind-native"),l=r(r.bind);i.exports=function(d,c){return o(d),c===void 0?d:a?l(d,c):function(){return d.apply(c,arguments)}}},{"../internals/a-callable":1,"../internals/function-bind-native":46,"../internals/function-uncurry-this":49}],46:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){var o=function(){}.bind();return typeof o!="function"||o.hasOwnProperty("prototype")})},{"../internals/fails":42}],47:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype.call;i.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},{"../internals/function-bind-native":46}],48:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/has-own-property"),a=Function.prototype,l=r&&Object.getOwnPropertyDescriptor,d=o(a,"name"),c=d&&function(){}.name==="something",h=d&&(!r||r&&l(a,"name").configurable);i.exports={EXISTS:d,PROPER:c,CONFIGURABLE:h}},{"../internals/descriptors":31,"../internals/has-own-property":56}],49:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.bind,l=o.call,d=r&&a.bind(l,l);i.exports=r?function(c){return c&&d(c)}:function(c){return c&&function(){return l.apply(c,arguments)}}},{"../internals/function-bind-native":46}],50:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=function(l){return o(l)?l:void 0};i.exports=function(l,d){return arguments.length<2?a(r[l]):r[l]&&r[l][d]}},{"../internals/global":55,"../internals/is-callable":67}],51:[function(e,i,n){var r=e("../internals/classof"),o=e("../internals/get-method"),a=e("../internals/iterators"),l=e("../internals/well-known-symbol")("iterator");i.exports=function(d){if(d!=null)return o(d,l)||o(d,"@@iterator")||a[r(d)]}},{"../internals/classof":20,"../internals/get-method":53,"../internals/iterators":75,"../internals/well-known-symbol":127}],52:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/a-callable"),a=e("../internals/an-object"),l=e("../internals/try-to-string"),d=e("../internals/get-iterator-method"),c=TypeError;i.exports=function(h,s){var f=arguments.length<2?d(h):s;if(o(f))return a(r(f,h));throw c(l(h)+" is not iterable")}},{"../internals/a-callable":1,"../internals/an-object":7,"../internals/function-call":47,"../internals/get-iterator-method":51,"../internals/try-to-string":120}],53:[function(e,i,n){var r=e("../internals/a-callable");i.exports=function(o,a){var l=o[a];return l==null?void 0:r(l)}},{"../internals/a-callable":1}],54:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=Math.floor,l=r("".charAt),d=r("".replace),c=r("".slice),h=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;i.exports=function(f,p,v,g,m,y){var _=v+f.length,b=g.length,w=s;return m!==void 0&&(m=o(m),w=h),d(y,w,function(A,E){var I;switch(l(E,0)){case"$":return"$";case"&":return f;case"`":return c(p,0,v);case"'":return c(p,_);case"<":I=m[c(E,1,-1)];break;default:var S=+E;if(S===0)return A;if(S>b){var T=a(S/10);return T===0?A:T<=b?g[T-1]===void 0?l(E,1):g[T-1]+l(E,1):A}I=g[S-1]}return I===void 0?"":I})}},{"../internals/function-uncurry-this":49,"../internals/to-object":113}],55:[function(e,i,n){(function(r){(function(){var o=function(a){return a&&a.Math==Math&&a};i.exports=o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||o(typeof r=="object"&&r)||function(){return this}()||Function("return this")()}).call(this)}).call(this,typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{})},{}],56:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=r({}.hasOwnProperty);i.exports=Object.hasOwn||function(l,d){return a(o(l),d)}},{"../internals/function-uncurry-this":49,"../internals/to-object":113}],57:[function(e,i,n){i.exports={}},{}],58:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("document","documentElement")},{"../internals/get-built-in":50}],59:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails"),a=e("../internals/document-create-element");i.exports=!r&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},{"../internals/descriptors":31,"../internals/document-create-element":32,"../internals/fails":42}],60:[function(e,i,n){var r=Array,o=Math.abs,a=Math.pow,l=Math.floor,d=Math.log,c=Math.LN2;i.exports={pack:function(h,s,f){var p,v,g,m=r(f),y=8*f-s-1,_=(1<<y)-1,b=_>>1,w=s===23?a(2,-24)-a(2,-77):0,A=h<0||h===0&&1/h<0?1:0,E=0;for((h=o(h))!=h||h===1/0?(v=h!=h?1:0,p=_):(p=l(d(h)/c),h*(g=a(2,-p))<1&&(p--,g*=2),(h+=p+b>=1?w/g:w*a(2,1-b))*g>=2&&(p++,g/=2),p+b>=_?(v=0,p=_):p+b>=1?(v=(h*g-1)*a(2,s),p+=b):(v=h*a(2,b-1)*a(2,s),p=0));s>=8;)m[E++]=255&v,v/=256,s-=8;for(p=p<<s|v,y+=s;y>0;)m[E++]=255&p,p/=256,y-=8;return m[--E]|=128*A,m},unpack:function(h,s){var f,p=h.length,v=8*p-s-1,g=(1<<v)-1,m=g>>1,y=v-7,_=p-1,b=h[_--],w=127&b;for(b>>=7;y>0;)w=256*w+h[_--],y-=8;for(f=w&(1<<-y)-1,w>>=-y,y+=s;y>0;)f=256*f+h[_--],y-=8;if(w===0)w=1-m;else{if(w===g)return f?NaN:b?-1/0:1/0;f+=a(2,s),w-=m}return(b?-1:1)*f*a(2,w-s)}}},{}],61:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/classof-raw"),l=Object,d=r("".split);i.exports=o(function(){return!l("z").propertyIsEnumerable(0)})?function(c){return a(c)=="String"?d(c,""):l(c)}:l},{"../internals/classof-raw":19,"../internals/fails":42,"../internals/function-uncurry-this":49}],62:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/is-object"),a=e("../internals/object-set-prototype-of");i.exports=function(l,d,c){var h,s;return a&&r(h=d.constructor)&&h!==c&&o(s=h.prototype)&&s!==c.prototype&&a(l,s),l}},{"../internals/is-callable":67,"../internals/is-object":71,"../internals/object-set-prototype-of":92}],63:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/is-callable"),a=e("../internals/shared-store"),l=r(Function.toString);o(a.inspectSource)||(a.inspectSource=function(d){return l(d)}),i.exports=a.inspectSource},{"../internals/function-uncurry-this":49,"../internals/is-callable":67,"../internals/shared-store":105}],64:[function(e,i,n){var r,o,a,l=e("../internals/native-weak-map"),d=e("../internals/global"),c=e("../internals/function-uncurry-this"),h=e("../internals/is-object"),s=e("../internals/create-non-enumerable-property"),f=e("../internals/has-own-property"),p=e("../internals/shared-store"),v=e("../internals/shared-key"),g=e("../internals/hidden-keys"),m="Object already initialized",y=d.TypeError,_=d.WeakMap;if(l||p.state){var b=p.state||(p.state=new _),w=c(b.get),A=c(b.has),E=c(b.set);r=function(S,T){if(A(b,S))throw new y(m);return T.facade=S,E(b,S,T),T},o=function(S){return w(b,S)||{}},a=function(S){return A(b,S)}}else{var I=v("state");g[I]=!0,r=function(S,T){if(f(S,I))throw new y(m);return T.facade=S,s(S,I,T),T},o=function(S){return f(S,I)?S[I]:{}},a=function(S){return f(S,I)}}i.exports={set:r,get:o,has:a,enforce:function(S){return a(S)?o(S):r(S,{})},getterFor:function(S){return function(T){var U;if(!h(T)||(U=o(T)).type!==S)throw y("Incompatible receiver, "+S+" required");return U}}}},{"../internals/create-non-enumerable-property":24,"../internals/function-uncurry-this":49,"../internals/global":55,"../internals/has-own-property":56,"../internals/hidden-keys":57,"../internals/is-object":71,"../internals/native-weak-map":80,"../internals/shared-key":104,"../internals/shared-store":105}],65:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/iterators"),a=r("iterator"),l=Array.prototype;i.exports=function(d){return d!==void 0&&(o.Array===d||l[a]===d)}},{"../internals/iterators":75,"../internals/well-known-symbol":127}],66:[function(e,i,n){var r=e("../internals/classof-raw");i.exports=Array.isArray||function(o){return r(o)=="Array"}},{"../internals/classof-raw":19}],67:[function(e,i,n){i.exports=function(r){return typeof r=="function"}},{}],68:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/is-callable"),l=e("../internals/classof"),d=e("../internals/get-built-in"),c=e("../internals/inspect-source"),h=function(){},s=[],f=d("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=r(p.exec),g=!p.exec(h),m=function(_){if(!a(_))return!1;try{return f(h,s,_),!0}catch{return!1}},y=function(_){if(!a(_))return!1;switch(l(_)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return g||!!v(p,c(_))}catch{return!0}};y.sham=!0,i.exports=!f||o(function(){var _;return m(m.call)||!m(Object)||!m(function(){_=!0})||_})?y:m},{"../internals/classof":20,"../internals/fails":42,"../internals/function-uncurry-this":49,"../internals/get-built-in":50,"../internals/inspect-source":63,"../internals/is-callable":67}],69:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=/#|\.prototype\./,l=function(f,p){var v=c[d(f)];return v==s||v!=h&&(o(p)?r(p):!!p)},d=l.normalize=function(f){return String(f).replace(a,".").toLowerCase()},c=l.data={},h=l.NATIVE="N",s=l.POLYFILL="P";i.exports=l},{"../internals/fails":42,"../internals/is-callable":67}],70:[function(e,i,n){var r=e("../internals/is-object"),o=Math.floor;i.exports=Number.isInteger||function(a){return!r(a)&&isFinite(a)&&o(a)===a}},{"../internals/is-object":71}],71:[function(e,i,n){var r=e("../internals/is-callable");i.exports=function(o){return typeof o=="object"?o!==null:r(o)}},{"../internals/is-callable":67}],72:[function(e,i,n){i.exports=!1},{}],73:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/is-callable"),a=e("../internals/object-is-prototype-of"),l=e("../internals/use-symbol-as-uid"),d=Object;i.exports=l?function(c){return typeof c=="symbol"}:function(c){var h=r("Symbol");return o(h)&&a(h.prototype,d(c))}},{"../internals/get-built-in":50,"../internals/is-callable":67,"../internals/object-is-prototype-of":88,"../internals/use-symbol-as-uid":125}],74:[function(e,i,n){var r,o,a,l=e("../internals/fails"),d=e("../internals/is-callable"),c=e("../internals/object-create"),h=e("../internals/object-get-prototype-of"),s=e("../internals/define-built-in"),f=e("../internals/well-known-symbol"),p=e("../internals/is-pure"),v=f("iterator"),g=!1;[].keys&&("next"in(a=[].keys())?(o=h(h(a)))!==Object.prototype&&(r=o):g=!0),r==null||l(function(){var m={};return r[v].call(m)!==m})?r={}:p&&(r=c(r)),d(r[v])||s(r,v,function(){return this}),i.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},{"../internals/define-built-in":27,"../internals/fails":42,"../internals/is-callable":67,"../internals/is-pure":72,"../internals/object-create":81,"../internals/object-get-prototype-of":87,"../internals/well-known-symbol":127}],75:[function(e,i,n){arguments[4][57][0].apply(n,arguments)},{dup:57}],76:[function(e,i,n){var r=e("../internals/to-length");i.exports=function(o){return r(o.length)}},{"../internals/to-length":112}],77:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=e("../internals/has-own-property"),l=e("../internals/descriptors"),d=e("../internals/function-name").CONFIGURABLE,c=e("../internals/inspect-source"),h=e("../internals/internal-state"),s=h.enforce,f=h.get,p=Object.defineProperty,v=l&&!r(function(){return p(function(){},"length",{value:8}).length!==8}),g=String(String).split("String"),m=i.exports=function(y,_,b){String(_).slice(0,7)==="Symbol("&&(_="["+String(_).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),b&&b.getter&&(_="get "+_),b&&b.setter&&(_="set "+_),(!a(y,"name")||d&&y.name!==_)&&(l?p(y,"name",{value:_,configurable:!0}):y.name=_),v&&b&&a(b,"arity")&&y.length!==b.arity&&p(y,"length",{value:b.arity});try{b&&a(b,"constructor")&&b.constructor?l&&p(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch{}var w=s(y);return a(w,"source")||(w.source=g.join(typeof _=="string"?_:"")),y};Function.prototype.toString=m(function(){return o(this)&&f(this).source||c(this)},"toString")},{"../internals/descriptors":31,"../internals/fails":42,"../internals/function-name":48,"../internals/has-own-property":56,"../internals/inspect-source":63,"../internals/internal-state":64,"../internals/is-callable":67}],78:[function(e,i,n){var r=Math.ceil,o=Math.floor;i.exports=Math.trunc||function(a){var l=+a;return(l>0?o:r)(l)}},{}],79:[function(e,i,n){var r=e("../internals/engine-v8-version"),o=e("../internals/fails");i.exports=!!Object.getOwnPropertySymbols&&!o(function(){var a=Symbol();return!String(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&r&&r<41})},{"../internals/engine-v8-version":38,"../internals/fails":42}],80:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=e("../internals/inspect-source"),l=r.WeakMap;i.exports=o(l)&&/native code/.test(a(l))},{"../internals/global":55,"../internals/inspect-source":63,"../internals/is-callable":67}],81:[function(e,i,n){var r,o=e("../internals/an-object"),a=e("../internals/object-define-properties"),l=e("../internals/enum-bug-keys"),d=e("../internals/hidden-keys"),c=e("../internals/html"),h=e("../internals/document-create-element"),s=e("../internals/shared-key")("IE_PROTO"),f=function(){},p=function(m){return"<script>"+m+"<\/script>"},v=function(m){m.write(p("")),m.close();var y=m.parentWindow.Object;return m=null,y},g=function(){try{r=new ActiveXObject("htmlfile")}catch{}var m,y;g=typeof document<"u"?document.domain&&r?v(r):((y=h("iframe")).style.display="none",c.appendChild(y),y.src="javascript:",(m=y.contentWindow.document).open(),m.write(p("document.F=Object")),m.close(),m.F):v(r);for(var _=l.length;_--;)delete g.prototype[l[_]];return g()};d[s]=!0,i.exports=Object.create||function(m,y){var _;return m!==null?(f.prototype=o(m),_=new f,f.prototype=null,_[s]=m):_=g(),y===void 0?_:a.f(_,y)}},{"../internals/an-object":7,"../internals/document-create-element":32,"../internals/enum-bug-keys":40,"../internals/hidden-keys":57,"../internals/html":58,"../internals/object-define-properties":82,"../internals/shared-key":104}],82:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/v8-prototype-define-bug"),a=e("../internals/object-define-property"),l=e("../internals/an-object"),d=e("../internals/to-indexed-object"),c=e("../internals/object-keys");n.f=r&&!o?Object.defineProperties:function(h,s){l(h);for(var f,p=d(s),v=c(s),g=v.length,m=0;g>m;)a.f(h,f=v[m++],p[f]);return h}},{"../internals/an-object":7,"../internals/descriptors":31,"../internals/object-define-property":83,"../internals/object-keys":90,"../internals/to-indexed-object":110,"../internals/v8-prototype-define-bug":126}],83:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/ie8-dom-define"),a=e("../internals/v8-prototype-define-bug"),l=e("../internals/an-object"),d=e("../internals/to-property-key"),c=TypeError,h=Object.defineProperty,s=Object.getOwnPropertyDescriptor;n.f=r?a?function(f,p,v){if(l(f),p=d(p),l(v),typeof f=="function"&&p==="prototype"&&"value"in v&&"writable"in v&&!v.writable){var g=s(f,p);g&&g.writable&&(f[p]=v.value,v={configurable:"configurable"in v?v.configurable:g.configurable,enumerable:"enumerable"in v?v.enumerable:g.enumerable,writable:!1})}return h(f,p,v)}:h:function(f,p,v){if(l(f),p=d(p),l(v),o)try{return h(f,p,v)}catch{}if("get"in v||"set"in v)throw c("Accessors not supported");return"value"in v&&(f[p]=v.value),f}},{"../internals/an-object":7,"../internals/descriptors":31,"../internals/ie8-dom-define":59,"../internals/to-property-key":117,"../internals/v8-prototype-define-bug":126}],84:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/function-call"),a=e("../internals/object-property-is-enumerable"),l=e("../internals/create-property-descriptor"),d=e("../internals/to-indexed-object"),c=e("../internals/to-property-key"),h=e("../internals/has-own-property"),s=e("../internals/ie8-dom-define"),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(p,v){if(p=d(p),v=c(v),s)try{return f(p,v)}catch{}if(h(p,v))return l(!o(a.f,p,v),p[v])}},{"../internals/create-property-descriptor":25,"../internals/descriptors":31,"../internals/function-call":47,"../internals/has-own-property":56,"../internals/ie8-dom-define":59,"../internals/object-property-is-enumerable":91,"../internals/to-indexed-object":110,"../internals/to-property-key":117}],85:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(a){return r(a,o)}},{"../internals/enum-bug-keys":40,"../internals/object-keys-internal":89}],86:[function(e,i,n){n.f=Object.getOwnPropertySymbols},{}],87:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/is-callable"),a=e("../internals/to-object"),l=e("../internals/shared-key"),d=e("../internals/correct-prototype-getter"),c=l("IE_PROTO"),h=Object,s=h.prototype;i.exports=d?h.getPrototypeOf:function(f){var p=a(f);if(r(p,c))return p[c];var v=p.constructor;return o(v)&&p instanceof v?v.prototype:p instanceof h?s:null}},{"../internals/correct-prototype-getter":22,"../internals/has-own-property":56,"../internals/is-callable":67,"../internals/shared-key":104,"../internals/to-object":113}],88:[function(e,i,n){var r=e("../internals/function-uncurry-this");i.exports=r({}.isPrototypeOf)},{"../internals/function-uncurry-this":49}],89:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/has-own-property"),a=e("../internals/to-indexed-object"),l=e("../internals/array-includes").indexOf,d=e("../internals/hidden-keys"),c=r([].push);i.exports=function(h,s){var f,p=a(h),v=0,g=[];for(f in p)!o(d,f)&&o(p,f)&&c(g,f);for(;s.length>v;)o(p,f=s[v++])&&(~l(g,f)||c(g,f));return g}},{"../internals/array-includes":12,"../internals/function-uncurry-this":49,"../internals/has-own-property":56,"../internals/hidden-keys":57,"../internals/to-indexed-object":110}],90:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys");i.exports=Object.keys||function(a){return r(a,o)}},{"../internals/enum-bug-keys":40,"../internals/object-keys-internal":89}],91:[function(e,i,n){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);n.f=a?function(l){var d=o(this,l);return!!d&&d.enumerable}:r},{}],92:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/an-object"),a=e("../internals/a-possible-prototype");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var l,d=!1,c={};try{(l=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(c,[]),d=c instanceof Array}catch{}return function(h,s){return o(h),a(s),d?l(h,s):h.__proto__=s,h}}():void 0)},{"../internals/a-possible-prototype":3,"../internals/an-object":7,"../internals/function-uncurry-this":49}],93:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-callable"),a=e("../internals/is-object"),l=TypeError;i.exports=function(d,c){var h,s;if(c==="string"&&o(h=d.toString)&&!a(s=r(h,d))||o(h=d.valueOf)&&!a(s=r(h,d))||c!=="string"&&o(h=d.toString)&&!a(s=r(h,d)))return s;throw l("Can't convert object to primitive value")}},{"../internals/function-call":47,"../internals/is-callable":67,"../internals/is-object":71}],94:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/function-uncurry-this"),a=e("../internals/object-get-own-property-names"),l=e("../internals/object-get-own-property-symbols"),d=e("../internals/an-object"),c=o([].concat);i.exports=r("Reflect","ownKeys")||function(h){var s=a.f(d(h)),f=l.f;return f?c(s,f(h)):s}},{"../internals/an-object":7,"../internals/function-uncurry-this":49,"../internals/get-built-in":50,"../internals/object-get-own-property-names":85,"../internals/object-get-own-property-symbols":86}],95:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/an-object"),a=e("../internals/is-callable"),l=e("../internals/classof-raw"),d=e("../internals/regexp-exec"),c=TypeError;i.exports=function(h,s){var f=h.exec;if(a(f)){var p=r(f,h,s);return p!==null&&o(p),p}if(l(h)==="RegExp")return r(d,h,s);throw c("RegExp#exec called on incompatible receiver")}},{"../internals/an-object":7,"../internals/classof-raw":19,"../internals/function-call":47,"../internals/is-callable":67,"../internals/regexp-exec":96}],96:[function(e,i,n){var r,o,a=e("../internals/function-call"),l=e("../internals/function-uncurry-this"),d=e("../internals/to-string"),c=e("../internals/regexp-flags"),h=e("../internals/regexp-sticky-helpers"),s=e("../internals/shared"),f=e("../internals/object-create"),p=e("../internals/internal-state").get,v=e("../internals/regexp-unsupported-dot-all"),g=e("../internals/regexp-unsupported-ncg"),m=s("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,_=y,b=l("".charAt),w=l("".indexOf),A=l("".replace),E=l("".slice),I=(o=/b*/g,a(y,r=/a/,"a"),a(y,o,"a"),r.lastIndex!==0||o.lastIndex!==0),S=h.BROKEN_CARET,T=/()??/.exec("")[1]!==void 0;(I||T||S||v||g)&&(_=function(U){var N,x,M,P,L,F,q,j=this,W=p(j),D=d(U),C=W.raw;if(C)return C.lastIndex=j.lastIndex,N=a(_,C,D),j.lastIndex=C.lastIndex,N;var R=W.groups,O=S&&j.sticky,B=a(c,j),G=j.source,Y=0,H=D;if(O&&(B=A(B,"y",""),w(B,"g")===-1&&(B+="g"),H=E(D,j.lastIndex),j.lastIndex>0&&(!j.multiline||j.multiline&&b(D,j.lastIndex-1)!==`
`)&&(G="(?: "+G+")",H=" "+H,Y++),x=new RegExp("^(?:"+G+")",B)),T&&(x=new RegExp("^"+G+"$(?!\\s)",B)),I&&(M=j.lastIndex),P=a(y,O?x:j,H),O?P?(P.input=E(P.input,Y),P[0]=E(P[0],Y),P.index=j.lastIndex,j.lastIndex+=P[0].length):j.lastIndex=0:I&&P&&(j.lastIndex=j.global?P.index+P[0].length:M),T&&P&&P.length>1&&a(m,P[0],x,function(){for(L=1;L<arguments.length-2;L++)arguments[L]===void 0&&(P[L]=void 0)}),P&&R)for(P.groups=F=f(null),L=0;L<R.length;L++)F[(q=R[L])[0]]=P[q[1]];return P}),i.exports=_},{"../internals/function-call":47,"../internals/function-uncurry-this":49,"../internals/internal-state":64,"../internals/object-create":81,"../internals/regexp-flags":97,"../internals/regexp-sticky-helpers":98,"../internals/regexp-unsupported-dot-all":99,"../internals/regexp-unsupported-ncg":100,"../internals/shared":106,"../internals/to-string":119}],97:[function(e,i,n){var r=e("../internals/an-object");i.exports=function(){var o=r(this),a="";return o.hasIndices&&(a+="d"),o.global&&(a+="g"),o.ignoreCase&&(a+="i"),o.multiline&&(a+="m"),o.dotAll&&(a+="s"),o.unicode&&(a+="u"),o.unicodeSets&&(a+="v"),o.sticky&&(a+="y"),a}},{"../internals/an-object":7}],98:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp,a=r(function(){var c=o("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),l=a||r(function(){return!o("a","y").sticky}),d=a||r(function(){var c=o("^r","gy");return c.lastIndex=2,c.exec("str")!=null});i.exports={BROKEN_CARET:d,MISSED_STICKY:l,UNSUPPORTED_Y:a}},{"../internals/fails":42,"../internals/global":55}],99:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o(".","s");return!(a.dotAll&&a.exec(`
`)&&a.flags==="s")})},{"../internals/fails":42,"../internals/global":55}],100:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o("(?<a>b)","g");return a.exec("b").groups.a!=="b"||"b".replace(a,"$<a>c")!=="bc"})},{"../internals/fails":42,"../internals/global":55}],101:[function(e,i,n){var r=TypeError;i.exports=function(o){if(o==null)throw r("Can't call method on "+o);return o}},{}],102:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/object-define-property"),a=e("../internals/well-known-symbol"),l=e("../internals/descriptors"),d=a("species");i.exports=function(c){var h=r(c),s=o.f;l&&h&&!h[d]&&s(h,d,{configurable:!0,get:function(){return this}})}},{"../internals/descriptors":31,"../internals/get-built-in":50,"../internals/object-define-property":83,"../internals/well-known-symbol":127}],103:[function(e,i,n){var r=e("../internals/object-define-property").f,o=e("../internals/has-own-property"),a=e("../internals/well-known-symbol")("toStringTag");i.exports=function(l,d,c){l&&!c&&(l=l.prototype),l&&!o(l,a)&&r(l,a,{configurable:!0,value:d})}},{"../internals/has-own-property":56,"../internals/object-define-property":83,"../internals/well-known-symbol":127}],104:[function(e,i,n){var r=e("../internals/shared"),o=e("../internals/uid"),a=r("keys");i.exports=function(l){return a[l]||(a[l]=o(l))}},{"../internals/shared":106,"../internals/uid":124}],105:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/define-global-property"),a="__core-js_shared__",l=r[a]||o(a,{});i.exports=l},{"../internals/define-global-property":29,"../internals/global":55}],106:[function(e,i,n){var r=e("../internals/is-pure"),o=e("../internals/shared-store");(i.exports=function(a,l){return o[a]||(o[a]=l!==void 0?l:{})})("versions",[]).push({version:"3.23.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",source:"https://github.com/zloirock/core-js"})},{"../internals/is-pure":72,"../internals/shared-store":105}],107:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-integer-or-infinity"),a=e("../internals/to-string"),l=e("../internals/require-object-coercible"),d=r("".charAt),c=r("".charCodeAt),h=r("".slice),s=function(f){return function(p,v){var g,m,y=a(l(p)),_=o(v),b=y.length;return _<0||_>=b?f?"":void 0:(g=c(y,_))<55296||g>56319||_+1===b||(m=c(y,_+1))<56320||m>57343?f?d(y,_):g:f?h(y,_,_+2):m-56320+(g-55296<<10)+65536}};i.exports={codeAt:s(!1),charAt:s(!0)}},{"../internals/function-uncurry-this":49,"../internals/require-object-coercible":101,"../internals/to-integer-or-infinity":111,"../internals/to-string":119}],108:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.max,a=Math.min;i.exports=function(l,d){var c=r(l);return c<0?o(c+d,0):a(c,d)}},{"../internals/to-integer-or-infinity":111}],109:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=e("../internals/to-length"),a=RangeError;i.exports=function(l){if(l===void 0)return 0;var d=r(l),c=o(d);if(d!==c)throw a("Wrong length or index");return c}},{"../internals/to-integer-or-infinity":111,"../internals/to-length":112}],110:[function(e,i,n){var r=e("../internals/indexed-object"),o=e("../internals/require-object-coercible");i.exports=function(a){return r(o(a))}},{"../internals/indexed-object":61,"../internals/require-object-coercible":101}],111:[function(e,i,n){var r=e("../internals/math-trunc");i.exports=function(o){var a=+o;return a!=a||a===0?0:r(a)}},{"../internals/math-trunc":78}],112:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.min;i.exports=function(a){return a>0?o(r(a),9007199254740991):0}},{"../internals/to-integer-or-infinity":111}],113:[function(e,i,n){var r=e("../internals/require-object-coercible"),o=Object;i.exports=function(a){return o(r(a))}},{"../internals/require-object-coercible":101}],114:[function(e,i,n){var r=e("../internals/to-positive-integer"),o=RangeError;i.exports=function(a,l){var d=r(a);if(d%l)throw o("Wrong offset");return d}},{"../internals/to-positive-integer":115}],115:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=RangeError;i.exports=function(a){var l=r(a);if(l<0)throw o("The argument can't be less than 0");return l}},{"../internals/to-integer-or-infinity":111}],116:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-object"),a=e("../internals/is-symbol"),l=e("../internals/get-method"),d=e("../internals/ordinary-to-primitive"),c=e("../internals/well-known-symbol"),h=TypeError,s=c("toPrimitive");i.exports=function(f,p){if(!o(f)||a(f))return f;var v,g=l(f,s);if(g){if(p===void 0&&(p="default"),v=r(g,f,p),!o(v)||a(v))return v;throw h("Can't convert object to primitive value")}return p===void 0&&(p="number"),d(f,p)}},{"../internals/function-call":47,"../internals/get-method":53,"../internals/is-object":71,"../internals/is-symbol":73,"../internals/ordinary-to-primitive":93,"../internals/well-known-symbol":127}],117:[function(e,i,n){var r=e("../internals/to-primitive"),o=e("../internals/is-symbol");i.exports=function(a){var l=r(a,"string");return o(l)?l:l+""}},{"../internals/is-symbol":73,"../internals/to-primitive":116}],118:[function(e,i,n){var r={};r[e("../internals/well-known-symbol")("toStringTag")]="z",i.exports=String(r)==="[object z]"},{"../internals/well-known-symbol":127}],119:[function(e,i,n){var r=e("../internals/classof"),o=String;i.exports=function(a){if(r(a)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return o(a)}},{"../internals/classof":20}],120:[function(e,i,n){var r=String;i.exports=function(o){try{return r(o)}catch{return"Object"}}},{}],121:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/global"),a=e("../internals/function-call"),l=e("../internals/descriptors"),d=e("../internals/typed-array-constructors-require-wrappers"),c=e("../internals/array-buffer-view-core"),h=e("../internals/array-buffer"),s=e("../internals/an-instance"),f=e("../internals/create-property-descriptor"),p=e("../internals/create-non-enumerable-property"),v=e("../internals/is-integral-number"),g=e("../internals/to-length"),m=e("../internals/to-index"),y=e("../internals/to-offset"),_=e("../internals/to-property-key"),b=e("../internals/has-own-property"),w=e("../internals/classof"),A=e("../internals/is-object"),E=e("../internals/is-symbol"),I=e("../internals/object-create"),S=e("../internals/object-is-prototype-of"),T=e("../internals/object-set-prototype-of"),U=e("../internals/object-get-own-property-names").f,N=e("../internals/typed-array-from"),x=e("../internals/array-iteration").forEach,M=e("../internals/set-species"),P=e("../internals/object-define-property"),L=e("../internals/object-get-own-property-descriptor"),F=e("../internals/internal-state"),q=e("../internals/inherit-if-required"),j=F.get,W=F.set,D=F.enforce,C=P.f,R=L.f,O=Math.round,B=o.RangeError,G=h.ArrayBuffer,Y=G.prototype,H=h.DataView,te=c.NATIVE_ARRAY_BUFFER_VIEWS,ue=c.TYPED_ARRAY_TAG,_e=c.TypedArray,J=c.TypedArrayPrototype,re=c.aTypedArrayConstructor,pe=c.isTypedArray,we="BYTES_PER_ELEMENT",me="Wrong length",ye=function(K,X){re(K);for(var fe=0,Pe=X.length,Le=new K(Pe);Pe>fe;)Le[fe]=X[fe++];return Le},$e=function(K,X){C(K,X,{get:function(){return j(this)[X]}})},Fe=function(K){var X;return S(Y,K)||(X=w(K))=="ArrayBuffer"||X=="SharedArrayBuffer"},Je=function(K,X){return pe(K)&&!E(X)&&X in K&&v(+X)&&X>=0},ct=function(K,X){return X=_(X),Je(K,X)?f(2,K[X]):R(K,X)},mt=function(K,X,fe){return X=_(X),!(Je(K,X)&&A(fe)&&b(fe,"value"))||b(fe,"get")||b(fe,"set")||fe.configurable||b(fe,"writable")&&!fe.writable||b(fe,"enumerable")&&!fe.enumerable?C(K,X,fe):(K[X]=fe.value,K)};l?(te||(L.f=ct,P.f=mt,$e(J,"buffer"),$e(J,"byteOffset"),$e(J,"byteLength"),$e(J,"length")),r({target:"Object",stat:!0,forced:!te},{getOwnPropertyDescriptor:ct,defineProperty:mt}),i.exports=function(K,X,fe){var Pe=K.match(/\d+$/)[0]/8,Le=K+(fe?"Clamped":"")+"Array",Ne="get"+K,ze="set"+K,De=o[Le],ve=De,Xe=ve&&ve.prototype,je={},Oe=function(He,Te){C(He,Te,{get:function(){return function(We,$){var Se=j(We);return Se.view[Ne]($*Pe+Se.byteOffset,!0)}(this,Te)},set:function(We){return function($,Se,se){var Ce=j($);fe&&(se=(se=O(se))<0?0:se>255?255:255&se),Ce.view[ze](Se*Pe+Ce.byteOffset,se,!0)}(this,Te,We)},enumerable:!0})};te?d&&(ve=X(function(He,Te,We,$){return s(He,Xe),q(A(Te)?Fe(Te)?$!==void 0?new De(Te,y(We,Pe),$):We!==void 0?new De(Te,y(We,Pe)):new De(Te):pe(Te)?ye(ve,Te):a(N,ve,Te):new De(m(Te)),He,ve)}),T&&T(ve,_e),x(U(De),function(He){He in ve||p(ve,He,De[He])}),ve.prototype=Xe):(ve=X(function(He,Te,We,$){s(He,Xe);var Se,se,Ce,Ge=0,vt=0;if(A(Te)){if(!Fe(Te))return pe(Te)?ye(ve,Te):a(N,ve,Te);Se=Te,vt=y(We,Pe);var Mt=Te.byteLength;if($===void 0){if(Mt%Pe||(se=Mt-vt)<0)throw B(me)}else if((se=g($)*Pe)+vt>Mt)throw B(me);Ce=se/Pe}else Ce=m(Te),Se=new G(se=Ce*Pe);for(W(He,{buffer:Se,byteOffset:vt,byteLength:se,length:Ce,view:new H(Se)});Ge<Ce;)Oe(He,Ge++)}),T&&T(ve,_e),Xe=ve.prototype=I(J)),Xe.constructor!==ve&&p(Xe,"constructor",ve),D(Xe).TypedArrayConstructor=ve,ue&&p(Xe,ue,Le);var Ke=ve!=De;je[Le]=ve,r({global:!0,constructor:!0,forced:Ke,sham:!te},je),we in ve||p(ve,we,Pe),we in Xe||p(Xe,we,Pe),M(Le)}):i.exports=function(){}},{"../internals/an-instance":6,"../internals/array-buffer":10,"../internals/array-buffer-view-core":9,"../internals/array-iteration":13,"../internals/classof":20,"../internals/create-non-enumerable-property":24,"../internals/create-property-descriptor":25,"../internals/descriptors":31,"../internals/export":41,"../internals/function-call":47,"../internals/global":55,"../internals/has-own-property":56,"../internals/inherit-if-required":62,"../internals/internal-state":64,"../internals/is-integral-number":70,"../internals/is-object":71,"../internals/is-symbol":73,"../internals/object-create":81,"../internals/object-define-property":83,"../internals/object-get-own-property-descriptor":84,"../internals/object-get-own-property-names":85,"../internals/object-is-prototype-of":88,"../internals/object-set-prototype-of":92,"../internals/set-species":102,"../internals/to-index":109,"../internals/to-length":112,"../internals/to-offset":114,"../internals/to-property-key":117,"../internals/typed-array-constructors-require-wrappers":122,"../internals/typed-array-from":123}],122:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/fails"),a=e("../internals/check-correctness-of-iteration"),l=e("../internals/array-buffer-view-core").NATIVE_ARRAY_BUFFER_VIEWS,d=r.ArrayBuffer,c=r.Int8Array;i.exports=!l||!o(function(){c(1)})||!o(function(){new c(-1)})||!a(function(h){new c,new c(null),new c(1.5),new c(h)},!0)||o(function(){return new c(new d(2),1,void 0).length!==1})},{"../internals/array-buffer-view-core":9,"../internals/check-correctness-of-iteration":18,"../internals/fails":42,"../internals/global":55}],123:[function(e,i,n){var r=e("../internals/function-bind-context"),o=e("../internals/function-call"),a=e("../internals/a-constructor"),l=e("../internals/to-object"),d=e("../internals/length-of-array-like"),c=e("../internals/get-iterator"),h=e("../internals/get-iterator-method"),s=e("../internals/is-array-iterator-method"),f=e("../internals/array-buffer-view-core").aTypedArrayConstructor;i.exports=function(p){var v,g,m,y,_,b,w=a(this),A=l(p),E=arguments.length,I=E>1?arguments[1]:void 0,S=I!==void 0,T=h(A);if(T&&!s(T))for(b=(_=c(A,T)).next,A=[];!(y=o(b,_)).done;)A.push(y.value);for(S&&E>2&&(I=r(I,arguments[2])),g=d(A),m=new(f(w))(g),v=0;g>v;v++)m[v]=S?I(A[v],v):A[v];return m}},{"../internals/a-constructor":2,"../internals/array-buffer-view-core":9,"../internals/function-bind-context":45,"../internals/function-call":47,"../internals/get-iterator":52,"../internals/get-iterator-method":51,"../internals/is-array-iterator-method":65,"../internals/length-of-array-like":76,"../internals/to-object":113}],124:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=0,a=Math.random(),l=r(1 .toString);i.exports=function(d){return"Symbol("+(d===void 0?"":d)+")_"+l(++o+a,36)}},{"../internals/function-uncurry-this":49}],125:[function(e,i,n){var r=e("../internals/native-symbol");i.exports=r&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},{"../internals/native-symbol":79}],126:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails");i.exports=r&&o(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},{"../internals/descriptors":31,"../internals/fails":42}],127:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/shared"),a=e("../internals/has-own-property"),l=e("../internals/uid"),d=e("../internals/native-symbol"),c=e("../internals/use-symbol-as-uid"),h=o("wks"),s=r.Symbol,f=s&&s.for,p=c?s:s&&s.withoutSetter||l;i.exports=function(v){if(!a(h,v)||!d&&typeof h[v]!="string"){var g="Symbol."+v;d&&a(s,v)?h[v]=s[v]:h[v]=c&&f?f(g):p(g)}return h[v]}},{"../internals/global":55,"../internals/has-own-property":56,"../internals/native-symbol":79,"../internals/shared":106,"../internals/uid":124,"../internals/use-symbol-as-uid":125}],128:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/add-to-unscopables"),a=e("../internals/iterators"),l=e("../internals/internal-state"),d=e("../internals/object-define-property").f,c=e("../internals/define-iterator"),h=e("../internals/is-pure"),s=e("../internals/descriptors"),f="Array Iterator",p=l.set,v=l.getterFor(f);i.exports=c(Array,"Array",function(m,y){p(this,{type:f,target:r(m),index:0,kind:y})},function(){var m=v(this),y=m.target,_=m.kind,b=m.index++;return!y||b>=y.length?(m.target=void 0,{value:void 0,done:!0}):_=="keys"?{value:b,done:!1}:_=="values"?{value:y[b],done:!1}:{value:[b,y[b]],done:!1}},"values");var g=a.Arguments=a.Array;if(o("keys"),o("values"),o("entries"),!h&&s&&g.name!=="values")try{d(g,"name",{value:"values"})}catch{}},{"../internals/add-to-unscopables":4,"../internals/define-iterator":30,"../internals/descriptors":31,"../internals/internal-state":64,"../internals/is-pure":72,"../internals/iterators":75,"../internals/object-define-property":83,"../internals/to-indexed-object":110}],129:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/regexp-exec");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},{"../internals/export":41,"../internals/regexp-exec":96}],130:[function(e,i,n){var r=e("../internals/function-apply"),o=e("../internals/function-call"),a=e("../internals/function-uncurry-this"),l=e("../internals/fix-regexp-well-known-symbol-logic"),d=e("../internals/fails"),c=e("../internals/an-object"),h=e("../internals/is-callable"),s=e("../internals/to-integer-or-infinity"),f=e("../internals/to-length"),p=e("../internals/to-string"),v=e("../internals/require-object-coercible"),g=e("../internals/advance-string-index"),m=e("../internals/get-method"),y=e("../internals/get-substitution"),_=e("../internals/regexp-exec-abstract"),b=e("../internals/well-known-symbol")("replace"),w=Math.max,A=Math.min,E=a([].concat),I=a([].push),S=a("".indexOf),T=a("".slice),U="a".replace(/./,"$0")==="$0",N=!!/./[b]&&/./[b]("a","$0")==="";l("replace",function(x,M,P){var L=N?"$":"$0";return[function(F,q){var j=v(this),W=F==null?void 0:m(F,b);return W?o(W,F,j,q):o(M,p(j),F,q)},function(F,q){var j=c(this),W=p(F);if(typeof q=="string"&&S(q,L)===-1&&S(q,"$<")===-1){var D=P(M,j,W,q);if(D.done)return D.value}var C=h(q);C||(q=p(q));var R=j.global;if(R){var O=j.unicode;j.lastIndex=0}for(var B=[];;){var G=_(j,W);if(G===null||(I(B,G),!R))break;p(G[0])===""&&(j.lastIndex=g(W,f(j.lastIndex),O))}for(var Y,H="",te=0,ue=0;ue<B.length;ue++){for(var _e=p((G=B[ue])[0]),J=w(A(s(G.index),W.length),0),re=[],pe=1;pe<G.length;pe++)I(re,(Y=G[pe])===void 0?Y:String(Y));var we=G.groups;if(C){var me=E([_e],re,J,W);we!==void 0&&I(me,we);var ye=p(r(q,void 0,me))}else ye=y(_e,W,J,re,we,q);J>=te&&(H+=T(W,te,J)+ye,te=J+_e.length)}return H+T(W,te)}]},!!d(function(){var x=/./;return x.exec=function(){var M=[];return M.groups={a:"7"},M},"".replace(x,"$<a>")!=="7"})||!U||N)},{"../internals/advance-string-index":5,"../internals/an-object":7,"../internals/fails":42,"../internals/fix-regexp-well-known-symbol-logic":43,"../internals/function-apply":44,"../internals/function-call":47,"../internals/function-uncurry-this":49,"../internals/get-method":53,"../internals/get-substitution":54,"../internals/is-callable":67,"../internals/regexp-exec-abstract":95,"../internals/require-object-coercible":101,"../internals/to-integer-or-infinity":111,"../internals/to-length":112,"../internals/to-string":119,"../internals/well-known-symbol":127}],131:[function(e,i,n){e("../internals/typed-array-constructor")("Float32",function(r){return function(o,a,l){return r(this,o,a,l)}})},{"../internals/typed-array-constructor":121}],132:[function(e,i,n){var r=e("../internals/array-buffer-view-core"),o=e("../internals/typed-array-constructors-require-wrappers"),a=r.aTypedArrayConstructor;(0,r.exportTypedArrayStaticMethod)("of",function(){for(var l=0,d=arguments.length,c=new(a(this))(d);d>l;)c[l]=arguments[l++];return c},o)},{"../internals/array-buffer-view-core":9,"../internals/typed-array-constructors-require-wrappers":122}],133:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/function-call"),a=e("../internals/array-buffer-view-core"),l=e("../internals/length-of-array-like"),d=e("../internals/to-offset"),c=e("../internals/to-object"),h=e("../internals/fails"),s=r.RangeError,f=r.Int8Array,p=f&&f.prototype,v=p&&p.set,g=a.aTypedArray,m=a.exportTypedArrayMethod,y=!h(function(){var b=new Uint8ClampedArray(2);return o(v,b,{length:1,0:3},1),b[1]!==3}),_=y&&a.NATIVE_ARRAY_BUFFER_VIEWS&&h(function(){var b=new f(2);return b.set(1),b.set("2",1),b[0]!==0||b[1]!==2});m("set",function(b){g(this);var w=d(arguments.length>1?arguments[1]:void 0,1),A=c(b);if(y)return o(v,this,A,w);var E=this.length,I=l(A),S=0;if(I+w>E)throw s("Wrong length");for(;S<I;)this[w+S]=A[S++]},!y||_)},{"../internals/array-buffer-view-core":9,"../internals/fails":42,"../internals/function-call":47,"../internals/global":55,"../internals/length-of-array-like":76,"../internals/to-object":113,"../internals/to-offset":114}],134:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/function-uncurry-this"),a=e("../internals/fails"),l=e("../internals/a-callable"),d=e("../internals/array-sort"),c=e("../internals/array-buffer-view-core"),h=e("../internals/engine-ff-version"),s=e("../internals/engine-is-ie-or-edge"),f=e("../internals/engine-v8-version"),p=e("../internals/engine-webkit-version"),v=c.aTypedArray,g=c.exportTypedArrayMethod,m=r.Uint16Array,y=m&&o(m.prototype.sort),_=!(!y||a(function(){y(new m(2),null)})&&a(function(){y(new m(2),{})})),b=!!y&&!a(function(){if(f)return f<74;if(h)return h<67;if(s)return!0;if(p)return p<602;var w,A,E=new m(516),I=Array(516);for(w=0;w<516;w++)A=w%4,E[w]=515-w,I[w]=w-2*A+3;for(y(E,function(S,T){return(S/4|0)-(T/4|0)}),w=0;w<516;w++)if(E[w]!==I[w])return!0});g("sort",function(w){return w!==void 0&&l(w),b?y(this,w):d(v(this),function(A){return function(E,I){return A!==void 0?+A(E,I)||0:I!=I?-1:E!=E?1:E===0&&I===0?1/E>0&&1/I<0?1:-1:E>I}}(w))},!b||_)},{"../internals/a-callable":1,"../internals/array-buffer-view-core":9,"../internals/array-sort":15,"../internals/engine-ff-version":35,"../internals/engine-is-ie-or-edge":36,"../internals/engine-v8-version":38,"../internals/engine-webkit-version":39,"../internals/fails":42,"../internals/function-uncurry-this":49,"../internals/global":55}],135:[function(e,i,n){e("../internals/typed-array-constructor")("Uint8",function(r){return function(o,a,l){return r(this,o,a,l)}})},{"../internals/typed-array-constructor":121}],136:[function(e,i,n){e("../internals/typed-array-constructor")("Uint8",function(r){return function(o,a,l){return r(this,o,a,l)}},!0)},{"../internals/typed-array-constructor":121}],137:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/dom-iterables"),a=e("../internals/dom-token-list-prototype"),l=e("../modules/es.array.iterator"),d=e("../internals/create-non-enumerable-property"),c=e("../internals/well-known-symbol"),h=c("iterator"),s=c("toStringTag"),f=l.values,p=function(g,m){if(g){if(g[h]!==f)try{d(g,h,f)}catch{g[h]=f}if(g[s]||d(g,s,m),o[m]){for(var y in l)if(g[y]!==l[y])try{d(g,y,l[y])}catch{g[y]=l[y]}}}};for(var v in o)p(r[v]&&r[v].prototype,v);p(a,"DOMTokenList")},{"../internals/create-non-enumerable-property":24,"../internals/dom-iterables":33,"../internals/dom-token-list-prototype":34,"../internals/global":55,"../internals/well-known-symbol":127,"../modules/es.array.iterator":128}],138:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Build=void 0,n.Build={version:"0.73.8 (e9fa466fc3c6e8f31a7c83d97c78518a)",buildSeed:1665757807348,"wdosbox.wasm":{size:1462485,gzSize:499437},"wdosbox.js":{size:124967,gzSize:32625},"wlibzip.wasm":{size:110726,gzSize:51367},"wlibzip.js":{size:77090,gzSize:19985}}},{}],139:[function(e,i,n){function r(c,h,s){return h in c?Object.defineProperty(c,h,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[h]=s,c}e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),Object.defineProperty(n,"__esModule",{value:!0});const o=e("./dos-conf"),a=function(c){return c&&c.__esModule?c:{default:c}}(e("../../libzip/libzip")),l=e("../../http");n.default=class{constructor(c){r(this,"config",void 0),r(this,"sources",void 0),r(this,"libzipWasm",void 0),this.config=(0,o.createDosConfig)(),this.sources=[],this.libzipWasm=c}autoexec(){for(var c=arguments.length,h=new Array(c),s=0;s<c;s++)h[s]=arguments[s];return this.config.autoexec.options.script.value=h.join(`
`),this}cycles(c){return this.config.cpu.options.cycles.value=c,this}extract(c){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"zip";return this.extractAll([{url:c,path:h,type:s}])}extractAll(c){return this.sources.push(...c),this}async toUint8Array(){let c=arguments.length>0&&arguments[0]!==void 0&&arguments[0];const h={};await this.libzipWasm.instantiate(h);const s=new a.default(h,"/home/web_user"),f=await(0,o.toDosboxConf)(this.config),p=[];for(const m of this.sources){if(m.type!=="zip")throw new Error("Only Zip is supported");const y=(0,l.httpRequest)(m.url,{responseType:"arraybuffer"}).then(_=>({source:m,data:new Uint8Array(_)}));p.push(y)}c||(await s.writeFile(".jsdos/dosbox.conf",f),await s.writeFile(".jsdos/readme.txt",d),await s.writeFile(".jsdos/jsdos.json",JSON.stringify(this.config,null,2)));const v=await Promise.all(p);for(const m of v)s.zipToFs(m.data,m.source.path);c&&(await s.writeFile(".jsdos/dosbox.conf",f),await s.writeFile(".jsdos/readme.txt",d),await s.writeFile(".jsdos/jsdos.json",JSON.stringify(this.config,null,2)));const g=await s.zipFromFs();return s.destroy(),g}};const d=`
Please visit our website:

        _                __
       (_)____      ____/ /___  _____ _________  ____ ___
      / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ \`__ \\
     / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /
  __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/
 /___/
`},{"../../http":144,"../../libzip/libzip":149,"./dos-conf":140,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/web.dom-collections.iterator.js":137}],140:[function(e,i,n){function r(v,g,m){return g in v?Object.defineProperty(v,g,{value:m,enumerable:!0,configurable:!0,writable:!0}):v[g]=m,v}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.toDosboxConf=n.createDosConfig=n.AutoexecCategory=n.MixerCategory=n.CpuCategory=n.DosboxCategory=n.OutputCategory=void 0;class o{constructor(){r(this,"name","sdl"),r(this,"description","This section contains all of the low level system settings for how DOSBox interacts with your real hardware. You can define what resolutions are emulated, how DOSBox should treat errors or listen to your keyboard and mouse. You can often achieve a fair level of optimization by working with these setting, though for the most part leaving them at their default settings will create the best experience. These settings are passed on to the SDL Library which handles low level things like input and thread priority."),r(this,"options",{autolock:{name:"autolock",description:"Mouse will automatically lock, if you click on the screen.",value:!1,allowedValues:[!0,!1]}})}}n.OutputCategory=o;class a{constructor(){r(this,"name","dosbox"),r(this,"description","The [dosbox] section contains various settings that do not pertain to any other section (e.g. setting the language used in DOSBox help texts, where to store screen captures, etc.)"),r(this,"options",{machine:{name:"machine",description:"The type of machine tries to emulate.",value:"svga_s3",allowedValues:["hercules","cga","tandy","pcjr","ega","vgaonly","svga_s3","svga_et3000","svga_et4000","svga_paradise","vesa_nolfb","vesa_oldvbe"]}})}}n.DosboxCategory=a;class l{constructor(){r(this,"name","cpu"),r(this,"description","The CPU section controls how DOSBox tries to emulate the CPU, how fast the emulation should be, and to adjust it. DOSBox offers 4 different methods of CPU emulation."),r(this,"options",{core:{name:"core",description:"CPU Core used in emulation. auto will switch to dynamic if available and appropriate.",value:"auto",allowedValues:["auto","normal","simple"]},cputype:{name:"cputype",description:"CPU Type used in emulation. auto is the fastest choice.",value:"auto",allowedValues:["auto","386","386_slow","486_slow","pentium_slow","386_prefetch"]},cycles:{name:"cycles",description:`Amount of instructions DOSBox tries to emulate each millisecond. Setting this value too high results in sound dropouts and lags.
Cycles can be set in 3 ways:
'auto'          tries to guess what a game needs.
                It usually works, but can fail for certain games.
'fixed #number' will set a fixed amount of cycles. This is what you usually need if 'auto' fails.
                (Example: fixed 4000).
'max'           will allocate as much cycles as your computer is able to handle.
`,value:"auto",allowedValues:["auto","fixed","max"]}})}}n.CpuCategory=l;class d{constructor(){r(this,"name","mixer"),r(this,"description","Here you can define the quality of emulated audio."),r(this,"options",{rate:{name:"rate",description:"Frequency rate of sound",value:44100,allowedValues:[]},nosound:{name:"nosound",description:"Enable silent mode, sound is still emulated though.",value:!1,allowedValues:[!0,!1]}})}}n.MixerCategory=d;class c{constructor(){r(this,"name","autoexec"),r(this,"description","Lines in this section will be run at startup"),r(this,"options",{script:{name:"lines",description:"Use \\n to separate lines",value:"",allowedValues:[]}})}}function h(){return{output:new o,dosbox:new a,cpu:new l,mixer:new d,autoexec:new c}}function s(v,g){const m=g.name==="sdl"?"output":g.name;return new Promise((y,_)=>{if(v)if(v.name===g.name){for(const b of Object.keys(v.options)){const w=v.options[b],A=g.options[b];if(A===void 0)return void _(new Error("Unknown option '"+(w.name||b)+"' in '"+v.name+"'"));if(A.allowedValues.length>0){const E=w.value,I=A.allowedValues.find(S=>S===E);if(m==="cpu"&&w.name==="cycles"&&(E+"").startsWith("fixed ")){const S=Number.parseInt(E.substr(6),10);if(isNaN(S))return void _(new Error("Fixed value should conatain number"))}else if(I===void 0)return void _(new Error("Incorrect value '"+E+"' ("+typeof E+") for '"+v.name+"."+(w.name||b)+"' allowed is "+JSON.stringify(A.allowedValues)))}}for(const b of Object.keys(g.options))if(!(b in v.options))return void _(new Error("Option '"+b+"' is missed in '"+m+"'"));y()}else _(new Error("Incorrect category name '"+v.name+"' should be '"+g.name+"'"));else _(new Error("Category '"+m+"' is missed"))})}async function f(v,g){if(v!==void 0)for(const m of Object.keys(v.options||{})){const y=v.options[m];if(typeof y=="string"||typeof y=="number"||Array.isArray(y)){const _=g.options[m];if(!_)continue;const b=y;v.options[m]={..._},v.options[m].value=b}}}function p(v){let g="";g+="[".concat(v.name,`]
`);for(const m of Object.keys(v.options).sort()){const y=v.options[m];g+="".concat(y.name,"=").concat(y.value,`
`)}return g}n.AutoexecCategory=c,n.createDosConfig=h,n.toDosboxConf=async function(v){await async function(y){const _=h();for(const b of Object.keys(_))await f(y[b],_[b])}(v),await async function(y){const _=h();for(const b of Object.keys(_))await s(y[b],_[b])}(v);const g=p(v.output)+`
fullscreen=false
fulldouble=false
fullresolution=original
windowresolution=original
output=surface
sensitivity=100
waitonerror=true
priority=higher,normal
mapperfile=mapper-jsdos.map
usescancodes=true
vsync=false
`+p(v.dosbox)+`
language=
captures=capture
memsize=16
`+p(v.cpu)+`
cycleup=10
cycledown=20
`+p(v.mixer)+`
blocksize=1024
prebuffer=20

[render]
# frameskip: How many frames DOSBox skips before drawing one.
#    aspect: Do aspect correction, if your output method doesn't support scaling this can slow things down!.
#    scaler: Scaler used to enlarge/enhance low resolution modes.
#              If 'forced' is appended, then the scaler will be used even if the result might not be desired.
#            Possible values: none, normal2x, normal3x, advmame2x, advmame3x, advinterp2x, advinterp3x, hq2x, hq3x, 2xsai, super2xsai, supereagle, tv2x, tv3x, rgb2x, rgb3x, scan2x, scan3x.

frameskip=0
aspect=false
scaler=none

[midi]
#     mpu401: Type of MPU-401 to emulate.
#             Possible values: intelligent, uart, none.
# mididevice: Device that will receive the MIDI data from MPU-401.
#             Possible values: default, win32, alsa, oss, coreaudio, coremidi, none.
# midiconfig: Special configuration options for the device driver. This is usually the id of the device you want to use.
#               See the README/Manual for more details.

mpu401=intelligent
mididevice=default
midiconfig=

[sblaster]
#  sbtype: Type of Soundblaster to emulate. gb is Gameblaster.
#          Possible values: sb1, sb2, sbpro1, sbpro2, sb16, gb, none.
#  sbbase: The IO address of the soundblaster.
#          Possible values: 220, 240, 260, 280, 2a0, 2c0, 2e0, 300.
#     irq: The IRQ number of the soundblaster.
#          Possible values: 7, 5, 3, 9, 10, 11, 12.
#     dma: The DMA number of the soundblaster.
#          Possible values: 1, 5, 0, 3, 6, 7.
#    hdma: The High DMA number of the soundblaster.
#          Possible values: 1, 5, 0, 3, 6, 7.
# sbmixer: Allow the soundblaster mixer to modify the DOSBox mixer.
# oplmode: Type of OPL emulation. On 'auto' the mode is determined by sblaster type. All OPL modes are Adlib-compatible, except for 'cms'.
#          Possible values: auto, cms, opl2, dualopl2, opl3, none.
#  oplemu: Provider for the OPL emulation. compat might provide better quality (see oplrate as well).
#          Possible values: default, compat, fast.
# oplrate: Sample rate of OPL music emulation. Use 49716 for highest quality (set the mixer rate accordingly).
#          Possible values: 44100, 49716, 48000, 32000, 22050, 16000, 11025, 8000.

sbtype=sb16
sbbase=220
irq=7
dma=1
hdma=5
sbmixer=true
oplmode=auto
oplemu=default
oplrate=44100

[gus]
#      gus: Enable the Gravis Ultrasound emulation.
#  gusrate: Sample rate of Ultrasound emulation.
#           Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.
#  gusbase: The IO base address of the Gravis Ultrasound.
#           Possible values: 240, 220, 260, 280, 2a0, 2c0, 2e0, 300.
#   gusirq: The IRQ number of the Gravis Ultrasound.
#           Possible values: 5, 3, 7, 9, 10, 11, 12.
#   gusdma: The DMA channel of the Gravis Ultrasound.
#           Possible values: 3, 0, 1, 5, 6, 7.
# ultradir: Path to Ultrasound directory. In this directory
#           there should be a MIDI directory that contains
#           the patch files for GUS playback. Patch sets used
#           with Timidity should work fine.

gus=false
gusrate=44100
gusbase=240
gusirq=5
gusdma=3
ultradir=C:\\ULTRASND

[speaker]
# pcspeaker: Enable PC-Speaker emulation.
#    pcrate: Sample rate of the PC-Speaker sound generation.
#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.
#     tandy: Enable Tandy Sound System emulation. For 'auto', emulation is present only if machine is set to 'tandy'.
#            Possible values: auto, on, off.
# tandyrate: Sample rate of the Tandy 3-Voice generation.
#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.
#    disney: Enable Disney Sound Source emulation. (Covox Voice Master and Speech Thing compatible).

pcspeaker=true
pcrate=44100
tandy=auto
tandyrate=44100
disney=true

[joystick]
# joysticktype: Type of joystick to emulate: auto (default), none,
#               2axis (supports two joysticks),
#               4axis (supports one joystick, first joystick used),
#               4axis_2 (supports one joystick, second joystick used),
#               fcs (Thrustmaster), ch (CH Flightstick).
#               none disables joystick emulation.
#               auto chooses emulation depending on real joystick(s).
#               (Remember to reset dosbox's mapperfile if you saved it earlier)
#               Possible values: auto, 2axis, 4axis, 4axis_2, fcs, ch, none.
#        timed: enable timed intervals for axis. Experiment with this option, if your joystick drifts (away).
#     autofire: continuously fires as long as you keep the button pressed.
#       swap34: swap the 3rd and the 4th axis. can be useful for certain joysticks.
#   buttonwrap: enable button wrapping at the number of emulated buttons.

joysticktype=auto
timed=true
autofire=false
swap34=false
buttonwrap=false

[serial]
# serial1: set type of device connected to com port.
#          Can be disabled, dummy, modem, nullmodem, directserial.
#          Additional parameters must be in the same line in the form of
#          parameter:value. Parameter for all types is irq (optional).
#          for directserial: realport (required), rxdelay (optional).
#                           (realport:COM1 realport:ttyS0).
#          for modem: listenport (optional).
#          for nullmodem: server, rxdelay, txdelay, telnet, usedtr,
#                         transparent, port, inhsocket (all optional).
#          Example: serial1=modem listenport:5000
#          Possible values: dummy, disabled, modem, nullmodem, directserial.
# serial2: see serial1
#          Possible values: dummy, disabled, modem, nullmodem, directserial.
# serial3: see serial1
#          Possible values: dummy, disabled, modem, nullmodem, directserial.
# serial4: see serial1
#          Possible values: dummy, disabled, modem, nullmodem, directserial.

serial1=dummy
serial2=dummy
serial3=disabled
serial4=disabled

[dos]
#            xms: Enable XMS support.
#            ems: Enable EMS support.
#            umb: Enable UMB support.
# keyboardlayout: Language code of the keyboard layout (or none).

xms=true
ems=true
umb=true
keyboardlayout=auto

[ipx]
# ipx: Enable ipx over UDP/IP emulation.

ipx=true
`+(m=v.autoexec,`[autoexec]
echo off
mount c .
c:

type jsdos~1/readme.txt
echo on

`.concat(m.options.script.value,`

# Generated using https://js-dos.com
# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█
# █ ███ █ ██▄ █ ▀ ▄ █ ███ █
# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █
# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀
# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀
# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄
# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀
#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄
# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀
# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄
# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█
# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█
# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀
`));var m;return Promise.resolve(g)}},{"core-js/modules/web.dom-collections.iterator.js":137}],141:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.dosDirect=void 0;const r=e("../../../protocol/messages-queue");n.dosDirect=async function(o,a){const l=new r.MessagesQueue;let d=l.handler.bind(l);const c={postMessage:(f,p)=>{d(f,p)}},h=f=>{const p=f.data;(p==null?void 0:p.name)==="ws-sync-sleep"&&p.props.sessionId===a&&postMessage({name:"wc-sync-sleep",props:p.props},"*")},s={sessionId:a,sendMessageToServer:(f,p)=>{c.messageHandler({data:{name:f,props:p}})},initMessageHandler:f=>{d=f,l.sendTo(d)},exit:()=>{typeof window<"u"&&window.removeEventListener("message",h)}};return s.module=c,typeof window<"u"&&window.addEventListener("message",h,{passive:!0}),await o.instantiate(c),c.callMain([a]),s}},{"../../../protocol/messages-queue":150}],142:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.dosWorker=void 0;const r=e("../../../protocol/messages-queue");n.dosWorker=async function(o,a,l){const d=new r.MessagesQueue;let c=d.handler.bind(d);const h=new Worker(o);h.onerror=f=>{c("ws-err",{type:f.type,filename:f.filename,message:f.message})},h.onmessage=f=>{const p=f.data;(p==null?void 0:p.name)!==void 0&&c(p.name,p.props)},await a.instantiate({});const s={sessionId:l,sendMessageToServer:(f,p)=>{h.postMessage({name:f,props:p})},initMessageHandler:f=>{c=f,d.sendTo(c)},exit:()=>{h.terminate()}};try{s.sendMessageToServer("wc-install",{module:a.wasmModule,sessionId:l})}catch{s.sendMessageToServer("wc-install",{sessionId:l})}return s}},{"../../../protocol/messages-queue":150}],143:[function(e,i,n){(function(r){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.NetworkType=void 0;const o=function(a){return a&&a.__esModule?a:{default:a}}(e("./impl/emulators-impl"));(function(a){a[a.NETWORK_DOSBOX_IPX=0]="NETWORK_DOSBOX_IPX"})(n.NetworkType||(n.NetworkType={})),typeof window<"u"&&(window.emulators=o.default),r!==void 0&&(r.emulators=o.default)}).call(this)}).call(this,typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{})},{"./impl/emulators-impl":146}],144:[function(e,i,n){function r(a,l,d){return l in a?Object.defineProperty(a,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[l]=d,a}Object.defineProperty(n,"__esModule",{value:!0}),n.httpRequest=void 0,n.httpRequest=function(a,l){return new Promise((d,c)=>{new o(a,{...l,success:d,fail:h=>{c(new Error(h))}})})};class o{constructor(l,d){if(r(this,"resource",void 0),r(this,"options",void 0),r(this,"xhr",null),r(this,"total",0),r(this,"loaded",0),this.resource=l,this.options=d,this.options.method=d.method||"GET",this.options.method!=="GET")throw new Error("Method "+this.options.method+" is not supported");this.makeHttpRequest()}makeHttpRequest(){let l,d;this.xhr=new XMLHttpRequest,this.xhr.open(this.options.method||"GET",this.resource,!0),this.options.method==="POST"&&this.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.xhr.overrideMimeType("text/plain; charset=x-user-defined"),typeof(l=this.xhr).addEventListener=="function"&&l.addEventListener("progress",c=>{if(this.total=c.total,this.loaded=c.loaded,this.options.progress)return this.options.progress(c.total,c.loaded)}),typeof(d=this.xhr).addEventListener=="function"&&d.addEventListener("error",()=>{if(this.options.fail)return this.options.fail("Unalbe to download '"+this.resource+"', code: "+this.xhr.status),delete this.options.fail}),this.xhr.onreadystatechange=()=>this.onReadyStateChange(),this.options.responseType&&(this.xhr.responseType=this.options.responseType),this.xhr.send(this.options.data)}onReadyStateChange(){const l=this.xhr;if(l.readyState===4){if(l.status===200){if(this.options.success){const d=Math.max(this.total,this.loaded);return this.options.progress!==void 0&&this.options.progress(d,d),this.options.success(l.response)}}else if(this.options.fail)return this.options.fail("Unable to download '"+this.resource+"', code: "+l.status),delete this.options.fail}}}},{}],145:[function(e,i,n){function r(o,a,l){return a in o?Object.defineProperty(o,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[a]=l,o}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.CommandInterfaceEventsImpl=void 0,n.CommandInterfaceEventsImpl=class{constructor(){var o=this;r(this,"onStdoutConsumers",[]),r(this,"delayedStdout",[]),r(this,"onFrameSizeConsumers",[]),r(this,"onFrameConsumers",[]),r(this,"onSoundPushConsumers",[]),r(this,"onExitConsumers",[]),r(this,"onMessageConsumers",[]),r(this,"delayedMessages",[]),r(this,"onNetworkConnectedConsumers",[]),r(this,"onNetworkDisconnectedConsumers",[]),r(this,"onStdout",a=>{if(this.onStdoutConsumers.push(a),this.onStdoutConsumers.length===1){for(const l of this.delayedStdout)this.fireStdout(l);this.delayedStdout=[]}}),r(this,"onFrameSize",a=>{this.onFrameSizeConsumers.push(a)}),r(this,"onFrame",a=>{this.onFrameConsumers.push(a)}),r(this,"onSoundPush",a=>{this.onSoundPushConsumers.push(a)}),r(this,"onExit",a=>{this.onExitConsumers.push(a)}),r(this,"onMessage",a=>{if(this.onMessageConsumers.push(a),this.onMessageConsumers.length===1){for(const l of this.delayedMessages)a(l.msgType,...l.args);this.delayedMessages=[]}}),r(this,"fireStdout",a=>{if(this.onStdoutConsumers.length!==0)for(const l of this.onStdoutConsumers)l(a);else this.delayedStdout.push(a)}),r(this,"fireFrameSize",(a,l)=>{for(const d of this.onFrameSizeConsumers)d(a,l)}),r(this,"fireFrame",(a,l)=>{for(const d of this.onFrameConsumers)d(a,l)}),r(this,"fireSoundPush",a=>{for(const l of this.onSoundPushConsumers)l(a)}),r(this,"fireExit",()=>{for(const a of this.onExitConsumers)a();this.onStdoutConsumers=[],this.onFrameSizeConsumers=[],this.onFrameConsumers=[],this.onSoundPushConsumers=[],this.onExitConsumers=[],this.onMessageConsumers=[]}),r(this,"fireMessage",function(a){for(var l=arguments.length,d=new Array(l>1?l-1:0),c=1;c<l;c++)d[c-1]=arguments[c];if(o.onMessageConsumers.length!==0)for(const h of o.onMessageConsumers)h(a,...d);else o.delayedMessages.push({msgType:a,args:d})}),r(this,"fireNetworkConnected",(a,l,d)=>{for(const c of this.onNetworkConnectedConsumers)c(a,l,d)}),r(this,"fireNetworkDisconnected",a=>{for(const l of this.onNetworkDisconnectedConsumers)l(a)})}onNetworkConnected(o){this.onNetworkConnectedConsumers.push(o)}onNetworkDisconnected(o){this.onNetworkDisconnectedConsumers.push(o)}}},{"core-js/modules/web.dom-collections.iterator.js":137}],146:[function(e,i,n){function r(v,g,m){return g in v?Object.defineProperty(v,g,{value:m,enumerable:!0,configurable:!0,writable:!0}):v[g]=m,v}var o=function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(n,"__esModule",{value:!0});const a=e("../build"),l=e("./modules"),d=o(e("../dos/bundle/dos-bundle")),c=e("../dos/dosbox/ts/direct"),h=e("../dos/dosbox/ts/worker"),s=o(e("../janus/janus-impl")),f=e("../protocol/protocol"),p=new class{constructor(){r(this,"pathPrefix",""),r(this,"version",a.Build.version),r(this,"wdosboxJs","wdosbox.js"),r(this,"wasmModulesPromise",void 0)}async dosBundle(){const v=await this.wasmModules(),g=await v.libzip();return new d.default(g)}async dosboxNode(v,g){return this.dosboxDirect(v,g)}async dosboxDirect(v,g){const m=await this.wasmModules(),y=await m.dosbox(),_=await(0,c.dosDirect)(y,"session-"+Date.now());return this.backend(v,_,g)}async dosboxWorker(v,g){const m=await this.wasmModules(),y=await m.dosbox(),_=await(0,h.dosWorker)(this.pathPrefix+this.wdosboxJs,y,"session-"+Date.now());return this.backend(v,_,g)}async janus(v){return(0,s.default)(v)}async backend(v,g,m){return new Promise((y,_)=>{const b=new f.CommandInterfaceOverTransportLayer(Array.isArray(v)?v:[v],g,w=>{w!==null?_(w):setTimeout(()=>y(b),4)},m||{})})}wasmModules(){return this.wasmModulesPromise!==void 0||(this.wasmModulesPromise=(async()=>new l.WasmModulesImpl(this.pathPrefix,this.wdosboxJs))()),this.wasmModulesPromise}async dosDirect(v){return this.dosboxDirect(v)}async dosWorker(v){return this.dosboxWorker(v)}};n.default=p},{"../build":138,"../dos/bundle/dos-bundle":139,"../dos/dosbox/ts/direct":141,"../dos/dosbox/ts/worker":142,"../janus/janus-impl":148,"../protocol/protocol":151,"./modules":147}],147:[function(e,i,n){function r(c,h,s){return h in c?Object.defineProperty(c,h,{value:s,enumerable:!0,configurable:!0,writable:!0}):c[h]=s,c}e("core-js/modules/es.typed-array.of.js"),e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.loadWasmModule=n.WasmModulesImpl=n.host=void 0;const o=e("../http");function a(c,h,s){return typeof XMLHttpRequest>"u"?function(f,p,v){if(n.host.globals.compiled[p]!==void 0)return n.host.globals.compiled[p];const g=e(f),m=Promise.resolve(new l(g));return p&&(n.host.globals.compiled[p]=m),m}(c,h):function(f,p,v){if(n.host.globals.compiled[p]!==void 0)return n.host.globals.compiled[p];const g=async function(){const m=f.lastIndexOf("/"),y=f.indexOf("w",m),_=y===m+1&&y>=0;if(!n.host.wasmSupported||!_)throw new Error("Starting from js-dos 6.22.60 js environment is not supported");const b=f.substr(0,f.lastIndexOf(".js"))+".wasm",w=(0,o.httpRequest)(b,{responseType:"arraybuffer",progress:(T,U)=>{v("Resolving DosBox ("+f+")",T,U)}}),A=(0,o.httpRequest)(f,{progress:(T,U)=>{v("Resolving DosBox",T,U)}}),[E,I]=await Promise.all([w,A]),S=await WebAssembly.compile(E);return eval.call(window,I),new d(S,n.host.globals.exports[p],(T,U)=>{T.env=T.env||{},WebAssembly.instantiate(S,T).then(N=>U(N,S))})}();return p&&(n.host.globals.compiled[p]=g),g}(c,h,s)}n.host=new class{constructor(){if(r(this,"wasmSupported",!1),r(this,"globals",void 0),this.globals=typeof window>"u"?{}:window,this.globals.exports||(this.globals.exports={}),this.globals.compiled||(this.globals.compiled={}),typeof WebAssembly=="object"&&typeof WebAssembly.instantiate=="function"&&typeof WebAssembly.compile=="function"){const c=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));c instanceof WebAssembly.Module&&(this.wasmSupported=new WebAssembly.Instance(c)instanceof WebAssembly.Instance)}Math.imul&&Math.imul(4294967295,5)===-5||(Math.imul=function(c,h){const s=65535&c,f=65535&h;return s*f+((c>>>16)*f+s*(h>>>16)<<16)|0}),Math.imul=Math.imul,Math.fround||(Math.fround=function(c){return c}),Math.fround=Math.fround,Math.clz32||(Math.clz32=function(c){c>>>=0;for(let h=0;h<32;h++)if(c&1<<31-h)return h;return 32}),Math.clz32=Math.clz32,Math.trunc||(Math.trunc=function(c){return c<0?Math.ceil(c):Math.floor(c)}),Math.trunc=Math.trunc}},n.WasmModulesImpl=class{constructor(c,h){r(this,"pathPrefix",void 0),r(this,"wdosboxJs",void 0),r(this,"libzipPromise",void 0),r(this,"dosboxPromise",void 0),r(this,"wasmSupported",!1),c.length>0&&c[c.length-1]!=="/"&&(c+="/"),this.pathPrefix=c,this.wdosboxJs=h}libzip(){return this.libzipPromise!==void 0||(this.libzipPromise=this.loadModule(this.pathPrefix+"wlibzip.js","WLIBZIP")),this.libzipPromise}dosbox(){return this.dosboxPromise!==void 0||(this.dosboxPromise=this.loadModule(this.pathPrefix+this.wdosboxJs,"WDOSBOX")),this.dosboxPromise}loadModule(c,h){return a(c,h,()=>{})}},n.loadWasmModule=a;class l{constructor(h){r(this,"emModule",void 0),this.emModule=h}instantiate(h){return new Promise(s=>{h.onRuntimeInitialized=()=>{s()},new this.emModule(h)})}}class d{constructor(h,s,f){r(this,"wasmModule",void 0),r(this,"module",void 0),r(this,"instantiateWasm",void 0),this.wasmModule=h,this.module=s,this.instantiateWasm=f}instantiate(h){return new Promise(s=>{h.instantiateWasm=this.instantiateWasm,h.onRuntimeInitialized=()=>{s()},new this.module(h)})}}},{"../http":144,"core-js/modules/es.typed-array.of.js":132,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/web.dom-collections.iterator.js":137}],148:[function(e,i,n){function r(d,c,h){return c in d?Object.defineProperty(d,c,{value:h,enumerable:!0,configurable:!0,writable:!0}):d[c]=h,d}e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),Object.defineProperty(n,"__esModule",{value:!0});const o=e("../impl/ci-impl");function a(d,c){let h="";const s=f=>{const p=f.indexOf(`
`);if(p===-1)h+=f;else{const v=h+f.substr(0,p);h="";try{d(function(g){const m=atob(g),y=new Uint8Array(m.length);for(let _=0;_<y.length;_++)y[_]=m.charCodeAt(_);return new TextDecoder().decode(y)}(v))}catch(g){c(g)}s(f.substr(p+1))}};return s}class l{constructor(c,h){r(this,"live",!0),r(this,"startedAt",Date.now()),r(this,"janus",void 0),r(this,"eventsImpl",void 0),r(this,"exitPromise",void 0),r(this,"exitResolveFn",()=>{}),r(this,"configPromise",void 0),r(this,"configResolveFn",()=>{}),r(this,"opaqueId",void 0),r(this,"handle",void 0),r(this,"handlePromise",void 0),r(this,"handleResolveFn",()=>{}),r(this,"keyMatrix",{}),r(this,"frameWidth",0),r(this,"frameHeight",0),r(this,"eventQueue",""),r(this,"eventIntervalId",-1),r(this,"rttIntervalId",-1),r(this,"logIntervalId",-1),r(this,"logColor","not set"),r(this,"logWhiteMs",0),r(this,"logRedMs",0),r(this,"logYellowMs",0),r(this,"onDataMessage",s=>{if(s.startsWith("config="))this.configResolveFn(JSON.parse(s.substr(7)));else if(s.startsWith("frame=")){const[p,v]=s.substr(6).split("x");this.frameWidth=Number.parseInt(p,10)||0,this.frameHeight=Number.parseInt(v,10)||0}else if(s.startsWith("rtt=")){var f;const[p,v,g]=s.substr(4).split(" "),m=Number.parseInt(v,10),y=Number.parseInt(g,10),_=Date.now(),b=((f=this.handle)===null||f===void 0?void 0:f.getBitrate())||"0 kbits/sec",w=Number.parseInt(b.split(" ")[0],10);this.sendPipeMessage("rtt-data",Date.now(),m,y,_,w),p===this.opaqueId&&this.eventsImpl.fireStdout("rtt-data="+(_-m)+" "+w)}else if(s.startsWith("log-visual-"))switch(s){case"log-visual-white":this.eventsImpl.fireStdout("yellow-frame:"+(Date.now()-this.logYellowMs));break;case"log-visual-red":this.eventsImpl.fireStdout("white-frame:"+(Date.now()-this.logWhiteMs));break;case"log-visual-yellow":this.eventsImpl.fireStdout("red-frame:"+(Date.now()-this.logRedMs))}else if(s.startsWith("log-command-"))switch(s){case"log-command-white":this.eventsImpl.fireStdout("yellow-pipe:"+(Date.now()-this.logYellowMs));break;case"log-command-red":this.eventsImpl.fireStdout("white-pipe:"+(Date.now()-this.logWhiteMs));break;case"log-command-yellow":this.eventsImpl.fireStdout("red-pipe:"+(Date.now()-this.logRedMs))}else this.eventsImpl.fireStdout(s)}),r(this,"onJanusMessage",(s,f,p)=>{p!=null&&s.createAnswer({jsep:p,media:{audioSend:!1,videoSend:!1,data:!0},success:v=>{this.fireMessage("started"),s.send({message:{request:"start"},jsep:v})},error:this.onError})}),r(this,"onError",s=>{this.fireMessage("error",s)}),this.eventsImpl=new o.CommandInterfaceEventsImpl,this.janus=c,this.opaqueId=h,this.exitPromise=new Promise(s=>{this.exitResolveFn=s}),this.configPromise=new Promise(s=>{this.configResolveFn=s}),this.handlePromise=new Promise((s,f)=>{this.handleResolveFn=p=>{this.handle=p,this.live?(setTimeout(()=>{this.live&&p.data({text:"pipe "+this.opaqueId+" config"})},1e3),this.config().then(()=>{this.live&&(this.eventIntervalId=setInterval(()=>{this.sendEventsData(p)},8),this.rttIntervalId=setInterval(()=>{this.sendPipeMessage("rtt",Date.now())},1e3))}),s(p)):f(new Error("exit() was called"))}}),this.attach()}fireMessage(c){for(var h=arguments.length,s=new Array(h>1?h-1:0),f=1;f<h;f++)s[f-1]=arguments[f];this.eventsImpl.fireMessage(c,...s)}attach(){let c;this.janus.attach({plugin:"janus.plugin.streaming",opaqueId:this.opaqueId,error:this.onError,success:h=>{c=h,this.fireMessage("attached"),h.send({message:{request:"watch",id:1}})},onmessage:(h,s)=>{this.onJanusMessage(c,h,s)},onremotestream:h=>{this.fireMessage("onremotestream",h)},ondataopen:()=>this.handleResolveFn(c),ondata:a(this.onDataMessage,this.onError)})}onDestroyed(){this.fireMessage("destroyed"),this.exitResolveFn()}async config(){return this.configPromise}width(){return this.frameWidth}height(){return this.frameHeight}soundFrequency(){return 44100}screenshot(){return Promise.reject(new Error("Not supported"))}simulateKeyPress(){const c=Date.now()-this.startedAt;for(var h=arguments.length,s=new Array(h),f=0;f<h;f++)s[f]=arguments[f];s.forEach(p=>this.addKey(p,!0,c)),s.forEach(p=>this.addKey(p,!1,c+16))}sendKeyEvent(c,h){this.addKey(c,h,Date.now()-this.startedAt)}addKey(c,h,s){if(this.keyMatrix[c]===!0!==h&&(this.keyMatrix[c]=h,this.sendPipeMessage("k"+(h?"down":"up"),c,s),this.logIntervalId!==-1&&h))switch(this.logColor){case"white":this.logWhiteMs=Date.now();break;case"red":this.logRedMs=Date.now();break;case"yellow":this.logYellowMs=Date.now()}}sendMouseMotion(c,h){this.sendPipeMessage("mmove",c,h,Date.now()-this.startedAt)}sendMouseRelativeMotion(c,h){throw new Error("not implemented")}sendMouseButton(c,h){this.sendPipeMessage("m"+(h?"down":"up"),c,Date.now()-this.startedAt)}sendMouseSync(){this.sendPipeMessage("msync",Date.now()-this.startedAt)}logVisual(c){this.sendPipeMessage("log-visual-on");const h=document.createElement("canvas"),s=h.getContext("2d");h.width=1,h.height=1,this.logIntervalId=setInterval(async()=>{var f;const p=Date.now();s==null||s.drawImage(c,0,0,1,1,0,0,1,1);const v=s==null||(f=s.getImageData(0,0,1,1))===null||f===void 0?void 0:f.data,g=Date.now()-p;let m="not set";if(v[0]>200&&v[1]>200&&v[2]>200?m="white":v[0]>200&&v[1]<200&&v[2]<200?m="red":v[0]>200&&v[1]>200&&v[2]<200&&(m="yellow"),m!==this.logColor){switch(m){case"white":this.eventsImpl.fireStdout("yellow-stream:"+(Date.now()-this.logYellowMs-g));break;case"red":this.eventsImpl.fireStdout("white-stream:"+(Date.now()-this.logWhiteMs-g));break;case"yellow":this.eventsImpl.fireStdout("red-stream:"+(Date.now()-this.logRedMs-g))}this.logColor=m}},16)}sendPipeMessage(){this.eventQueue+="pipe "+this.opaqueId;for(var c=arguments.length,h=new Array(c),s=0;s<c;s++)h[s]=arguments[s];for(const f of h)this.eventQueue+=" "+f;this.eventQueue+=`
`}async sendEventsData(c){this.eventQueue.length!==0&&(c.data({text:this.eventQueue}),this.eventQueue="")}persist(){return Promise.reject(new Error("Not supported"))}pause(){console.warn("pause/resume is not implemented")}resume(){}mute(){console.warn("mute/unmute is not implemented")}unmute(){}exit(){return this.live=!1,clearInterval(this.logIntervalId),this.logIntervalId=-1,clearInterval(this.eventIntervalId),this.eventIntervalId=-1,clearInterval(this.rttIntervalId),this.rttIntervalId=-1,this.janus.destroy(),this.exitPromise}events(){return this.eventsImpl}networkConnect(c,h,s){return Promise.reject("Not supported")}networkDisconnect(c){return Promise.reject("Not supported")}}n.default=function(d,c){const h=c||window.Janus;return h===void 0?Promise.reject(new Error("Janus is not defined, you should load janus.js before this")):h.isWebrtcSupported()?new Promise((s,f)=>{let p=null;const v={error:y=>{p===null?f(y):p.onError(y)},destroyed:()=>{p!==null&&p.onDestroyed()}},g={server:d,success:()=>{p=new l(m,"js-dos-"+h.randomString(12)),s(p)},error:v.error,destroyed:v.destroyed,destroyOnUnload:!0},m=new h(g)}):Promise.reject(new Error("WebRTC not supported"))}},{"../impl/ci-impl":145,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/web.dom-collections.iterator.js":137}],149:[function(e,i,n){function r(o,a,l){return a in o?Object.defineProperty(o,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[a]=l,o}e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),e("core-js/modules/es.string.replace.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=class{constructor(o,a){r(this,"module",void 0),r(this,"home",void 0),this.module=o,this.home=a,this.module.callMain([]),this.chdirToHome()}zipFromFs(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.chdirToHome();const a=this.module._zip_from_fs(o);if(a===0)return Promise.reject(new Error("Can't create zip, see more info in logs"));const l=this.module.HEAPU32[a/4],d=this.module.HEAPU8.slice(a+4,a+4+l);return this.module._free(a),Promise.resolve(d)}zipToFs(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";a=this.normalizeFilename(a);const l=this.normalizeFilename(a).split("/");this.createPath(l,0,l.length),this.chdir(a);const d=new Uint8Array(o),c=this.module._malloc(d.length);this.module.HEAPU8.set(d,c);const h=this.module._zip_to_fs(c,d.length);return this.module._free(c),this.chdirToHome(),h===0?Promise.resolve():Promise.reject(new Error("Can't extract zip, retcode "+h+", see more info in logs"))}writeFile(o,a){o=this.normalizeFilename(o),a instanceof ArrayBuffer&&(a=new Uint8Array(a));const l=o.split("/");if(l.length===0)throw new Error("Can't create file '"+o+"', because it's not valid file path");const d=l[l.length-1].trim();if(d.length===0)throw new Error("Can't create file '"+o+"', because file name is empty");const c=this.createPath(l,0,l.length-1);this.module.FS.writeFile(c+"/"+d,a)}async readFile(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"utf8";return o=this.normalizeFilename(o),this.module.FS.readFile(o,{encoding:a})}exists(o){o=this.normalizeFilename(o);try{return this.module.FS.lookupPath(o),!0}catch{return!1}}destroy(){try{this.module._libzip_destroy()}catch(o){return o}}normalizeFilename(o){for(o=o.replace(new RegExp("^[a-zA-z]+:"),"").replace(new RegExp("\\\\","g"),"/");o[0]==="/";)o=o.substr(1);return o}createPath(o,a,l){let d=".";for(let c=a;c<l;++c){const h=o[c].trim();h.length!==0&&(this.module.FS.createPath(d,h,!0,!0),d=d+"/"+h)}return d}chdirToHome(){this.module.FS.chdir(this.home)}chdir(o){this.module.FS.chdir(this.home+"/"+o)}}},{"core-js/modules/es.string.replace.js":130,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135}],150:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.MessagesQueue=void 0,n.MessagesQueue=class{constructor(){var r,o;o=[],(r="messages")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o}handler(r,o){this.messages.push({name:r,props:o})}sendTo(r){for(const o of this.messages)r(o.name,o.props);this.messages=[]}}},{"core-js/modules/web.dom-collections.iterator.js":137}],151:[function(e,i,n){function r(a,l,d){return l in a?Object.defineProperty(a,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):a[l]=d,a}e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.typed-array.float32-array.js"),e("core-js/modules/es.typed-array.uint8-clamped-array.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.CommandInterfaceOverTransportLayer=void 0;const o=e("../impl/ci-impl");n.CommandInterfaceOverTransportLayer=class{constructor(a,l,d,c){r(this,"startedAt",Date.now()),r(this,"frameWidth",0),r(this,"frameHeight",0),r(this,"rgb",null),r(this,"rgba",null),r(this,"freq",0),r(this,"bundles",void 0),r(this,"transport",void 0),r(this,"ready",void 0),r(this,"persistPromise",void 0),r(this,"persistResolve",void 0),r(this,"exitPromise",void 0),r(this,"exitResolve",void 0),r(this,"eventsImpl",new o.CommandInterfaceEventsImpl),r(this,"keyMatrix",{}),r(this,"configPromise",void 0),r(this,"configResolve",()=>{}),r(this,"panicMessages",[]),r(this,"connectPromise",null),r(this,"connectResolve",()=>{}),r(this,"connectReject",()=>{}),r(this,"disconnectPromise",null),r(this,"disconnectResolve",()=>{}),r(this,"sharedMemory",void 0),r(this,"directSound",void 0),r(this,"options",void 0),this.options=c,this.bundles=a,this.transport=l,this.ready=d,this.configPromise=new Promise(h=>this.configResolve=h),this.transport.initMessageHandler(this.onServerMessage.bind(this))}sendClientMessage(a,l){(l=l||{}).sessionId=l.sessionId||this.transport.sessionId,this.transport.sendMessageToServer(a,l)}onServerMessage(a,l){if(!(a===void 0||a.length<3||a[0]!=="w"||a[1]!=="s"||a[2]!=="-")&&l!==void 0&&l.sessionId===this.transport.sessionId)switch(a){case"ws-ready":this.sharedMemory=l.sharedMemory,this.sendClientMessage("wc-run",{bundles:this.bundles}),delete this.bundles;break;case"ws-server-ready":this.panicMessages.length>0?(this.transport.exit!==void 0&&this.transport.exit(),this.ready(new Error(JSON.stringify(this.panicMessages)))):this.ready(null),delete this.ready;break;case"ws-frame-set-size":this.onFrameSize(l.width,l.height);break;case"ws-update-lines":this.onFrameLines(l.lines,l.rgba);break;case"ws-exit":this.onExit();break;case"ws-log":this.onLog(l.tag,l.message);break;case"ws-warn":this.onWarn(l.tag,l.message);break;case"ws-err":this.onErr(l.tag,l.message);break;case"ws-stdout":this.onStdout(l.message);break;case"ws-persist":this.onPersist(l.bundle);break;case"ws-sound-init":this.onSoundInit(l.freq,l.directSound);break;case"ws-sound-push":this.onSoundPush(l.samples);break;case"ws-config":this.onConfig(JSON.parse(l.content));break;case"ws-sync-sleep":this.sendClientMessage("wc-sync-sleep",l);break;case"ws-connected":this.connectResolve(),this.connectPromise=null,this.connectResolve=()=>{},this.connectReject=()=>{},this.eventsImpl.fireNetworkConnected(l.networkType,l.address,l.port);break;case"ws-disconnected":this.connectPromise!==null?(this.connectReject(),this.connectPromise=null,this.connectResolve=()=>{},this.connectReject=()=>{}):(this.disconnectResolve(),this.disconnectPromise=null,this.disconnectResolve=()=>{}),this.eventsImpl.fireNetworkDisconnected(l.networkType);break;case"ws-extract-progress":this.options.onExtractProgress&&this.options.onExtractProgress(l.index,l.file,l.extracted,l.count);break;default:console.log("Unknown server message (ws):",a)}}onConfig(a){this.configResolve(a)}onFrameSize(a,l){this.frameWidth===a&&this.frameHeight===l||(this.frameWidth=a,this.frameHeight=l,this.sharedMemory===void 0&&(this.rgb=new Uint8Array(a*l*3)),this.eventsImpl.fireFrameSize(a,l))}onFrameLines(a,l){if(this.sharedMemory!==void 0)this.rgba=new Uint8Array(this.sharedMemory,l,this.frameWidth*this.frameHeight*4);else for(const d of a)this.rgb.set(d.heapu8,d.start*this.frameWidth*3);this.eventsImpl.fireFrame(this.rgb,this.rgba)}onSoundInit(a,l){if(this.freq=a,this.directSound=l,this.directSound!==void 0)for(let d=0;d<this.directSound.ringSize;++d)this.directSound.buffer[d]=new Float32Array(this.directSound.buffer[d])}onSoundPush(a){this.eventsImpl.fireSoundPush(a)}onLog(a,l){this.eventsImpl.fireMessage("log","["+a+"]"+l)}onWarn(a,l){this.eventsImpl.fireMessage("warn","["+a+"]"+l)}onErr(a,l){a==="panic"&&(this.panicMessages.push(l),console.error("["+a+"]"+l)),this.eventsImpl.fireMessage("error","["+a+"]"+l)}onStdout(a){this.eventsImpl.fireStdout(a)}config(){return this.configPromise}width(){return this.frameWidth}height(){return this.frameHeight}soundFrequency(){return this.freq}screenshot(){if(this.rgb!==null||this.rgba!==null){const a=new Uint8ClampedArray(this.frameWidth*this.frameHeight*4),l=this.rgb!==null?this.rgb:this.rgba;let d=0,c=0;for(;c<a.length;)a[c++]=l[d++],a[c++]=l[d++],a[c++]=l[d++],a[c++]=255,l.length===a.length&&d++;return Promise.resolve(new ImageData(a,this.frameWidth,this.frameHeight))}return Promise.reject(new Error("No frame received"))}simulateKeyPress(){const a=Date.now()-this.startedAt;for(var l=arguments.length,d=new Array(l),c=0;c<l;c++)d[c]=arguments[c];d.forEach(h=>this.addKey(h,!0,a)),d.forEach(h=>this.addKey(h,!1,a+16))}sendKeyEvent(a,l){this.addKey(a,l,Date.now()-this.startedAt)}addKey(a,l,d){this.keyMatrix[a]===!0!==l&&(this.keyMatrix[a]=l,this.sendClientMessage("wc-add-key",{key:a,pressed:l,timeMs:d}))}sendMouseMotion(a,l){this.sendClientMessage("wc-mouse-move",{x:a,y:l,relative:!1,timeMs:Date.now()-this.startedAt})}sendMouseRelativeMotion(a,l){this.sendClientMessage("wc-mouse-move",{x:a,y:l,relative:!0,timeMs:Date.now()-this.startedAt})}sendMouseButton(a,l){this.sendClientMessage("wc-mouse-button",{button:a,pressed:l,timeMs:Date.now()-this.startedAt})}sendMouseSync(){this.sendClientMessage("wc-mouse-sync",{timeMs:Date.now()-this.startedAt})}persist(){if(this.persistPromise!==void 0)return this.persistPromise;const a=new Promise(l=>this.persistResolve=l);return this.persistPromise=a,this.sendClientMessage("wc-pack-fs-to-bundle"),a}onPersist(a){this.persistResolve&&(this.persistResolve(a),delete this.persistPromise,delete this.persistResolve)}pause(){this.sendClientMessage("wc-pause")}resume(){this.sendClientMessage("wc-resume")}mute(){this.sendClientMessage("wc-mute")}unmute(){this.sendClientMessage("wc-unmute")}exit(){return this.exitPromise!==void 0||(this.exitPromise=new Promise(a=>this.exitResolve=a),this.exitPromise.then(()=>{this.events().fireExit()}),this.resume(),this.sendClientMessage("wc-exit")),this.exitPromise}onExit(){this.transport.exit!==void 0&&this.transport.exit(),this.exitResolve&&(this.exitResolve(),delete this.exitPromise,delete this.exitResolve)}events(){return this.eventsImpl}networkConnect(a,l,d){return this.connectPromise!==null||this.disconnectPromise!==null?Promise.reject(new Error("Already prefoming connection or disconnection...")):(this.connectPromise=new Promise((c,h)=>{l.startsWith("wss://")||l.startsWith("ws://")||(l=(window.location.protocol==="http:"?"ws://":"wss://")+l),this.connectResolve=c,this.connectReject=h,this.sendClientMessage("wc-connect",{networkType:a,address:l,port:d})}),this.connectPromise)}networkDisconnect(a){return this.connectPromise!==null||this.disconnectPromise!==null?Promise.reject(new Error("Already prefoming connection or disconnection...")):(this.disconnectPromise=new Promise(l=>{this.disconnectResolve=l,this.sendClientMessage("wc-disconnect",{networkType:a})}),this.disconnectPromise)}}},{"../impl/ci-impl":145,"core-js/modules/es.typed-array.float32-array.js":131,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/es.typed-array.uint8-clamped-array.js":136,"core-js/modules/web.dom-collections.iterator.js":137}]},{},[143]),function(e,i){i(t)}(Li,function(e){const o=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],a=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],l=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],d=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],c=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],s=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function f(){let V,z,k,ee,he,xe;function be(Qe,Ue,Ze,dt,wt,Tt,ae,Re,ie,le,Ae){let ke,et,Ye,Ve,Ee,qe,ht,pt,rt,nt,ft,_t,Bt,yt,Dt;nt=0,Ee=Ze;do k[Qe[Ue+nt]]++,nt++,Ee--;while(Ee!==0);if(k[0]==Ze)return ae[0]=-1,Re[0]=0,0;for(pt=Re[0],qe=1;qe<=15&&k[qe]===0;qe++);for(ht=qe,pt<qe&&(pt=qe),Ee=15;Ee!==0&&k[Ee]===0;Ee--);for(Ye=Ee,pt>Ee&&(pt=Ee),Re[0]=pt,yt=1<<qe;qe<Ee;qe++,yt<<=1)if((yt-=k[qe])<0)return-3;if((yt-=k[Ee])<0)return-3;for(k[Ee]+=yt,xe[1]=qe=0,nt=1,Bt=2;--Ee!=0;)xe[Bt]=qe+=k[nt],Bt++,nt++;Ee=0,nt=0;do(qe=Qe[Ue+nt])!==0&&(Ae[xe[qe]++]=Ee),nt++;while(++Ee<Ze);for(Ze=xe[Ye],xe[0]=Ee=0,nt=0,Ve=-1,_t=-pt,he[0]=0,ft=0,Dt=0;ht<=Ye;ht++)for(ke=k[ht];ke--!=0;){for(;ht>_t+pt;){if(Ve++,_t+=pt,Dt=Ye-_t,Dt=Dt>pt?pt:Dt,(et=1<<(qe=ht-_t))>ke+1&&(et-=ke+1,Bt=ht,qe<Dt))for(;++qe<Dt&&!((et<<=1)<=k[++Bt]);)et-=k[Bt];if(Dt=1<<qe,le[0]+Dt>1440)return-3;he[Ve]=ft=le[0],le[0]+=Dt,Ve!==0?(xe[Ve]=Ee,ee[0]=qe,ee[1]=pt,qe=Ee>>>_t-pt,ee[2]=ft-he[Ve-1]-qe,ie.set(ee,3*(he[Ve-1]+qe))):ae[0]=ft}for(ee[1]=ht-_t,nt>=Ze?ee[0]=192:Ae[nt]<dt?(ee[0]=Ae[nt]<256?0:96,ee[2]=Ae[nt++]):(ee[0]=Tt[Ae[nt]-dt]+16+64,ee[2]=wt[Ae[nt++]-dt]),et=1<<ht-_t,qe=Ee>>>_t;qe<Dt;qe+=et)ie.set(ee,3*(ft+qe));for(qe=1<<ht-1;Ee&qe;qe>>>=1)Ee^=qe;for(Ee^=qe,rt=(1<<_t)-1;(Ee&rt)!=xe[Ve];)Ve--,_t-=pt,rt=(1<<_t)-1}return yt!==0&&Ye!=1?-5:0}function Be(Qe){let Ue;for(V||(V=[],z=[],k=new Int32Array(16),ee=[],he=new Int32Array(15),xe=new Int32Array(16)),z.length<Qe&&(z=[]),Ue=0;Ue<Qe;Ue++)z[Ue]=0;for(Ue=0;Ue<16;Ue++)k[Ue]=0;for(Ue=0;Ue<3;Ue++)ee[Ue]=0;he.set(k.subarray(0,15),0),xe.set(k.subarray(0,16),0)}this.inflate_trees_bits=function(Qe,Ue,Ze,dt,wt){let Tt;return Be(19),V[0]=0,Tt=be(Qe,0,19,19,null,null,Ze,Ue,dt,V,z),Tt==-3?wt.msg="oversubscribed dynamic bit lengths tree":Tt!=-5&&Ue[0]!==0||(wt.msg="incomplete dynamic bit lengths tree",Tt=-3),Tt},this.inflate_trees_dynamic=function(Qe,Ue,Ze,dt,wt,Tt,ae,Re,ie){let le;return Be(288),V[0]=0,le=be(Ze,0,Qe,257,d,c,Tt,dt,Re,V,z),le!=0||dt[0]===0?(le==-3?ie.msg="oversubscribed literal/length tree":le!=-4&&(ie.msg="incomplete literal/length tree",le=-3),le):(Be(288),le=be(Ze,Qe,Ue,0,h,s,ae,wt,Re,V,z),le!=0||wt[0]===0&&Qe>257?(le==-3?ie.msg="oversubscribed distance tree":le==-5?(ie.msg="incomplete distance tree",le=-3):le!=-4&&(ie.msg="empty distance tree with lengths",le=-3),le):0)}}function p(){const V=this;let z,k,ee,he,xe=0,be=0,Be=0,Qe=0,Ue=0,Ze=0,dt=0,wt=0,Tt=0,ae=0;function Re(ie,le,Ae,ke,et,Ye,Ve,Ee){let qe,ht,pt,rt,nt,ft,_t,Bt,yt,Dt,Mi,Ei,Et,sr,Ht,qt;_t=Ee.next_in_index,Bt=Ee.avail_in,nt=Ve.bitb,ft=Ve.bitk,yt=Ve.write,Dt=yt<Ve.read?Ve.read-yt-1:Ve.end-yt,Mi=o[ie],Ei=o[le];do{for(;ft<20;)Bt--,nt|=(255&Ee.read_byte(_t++))<<ft,ft+=8;if(qe=nt&Mi,ht=Ae,pt=ke,qt=3*(pt+qe),(rt=ht[qt])!==0)for(;;){if(nt>>=ht[qt+1],ft-=ht[qt+1],(16&rt)!=0){for(rt&=15,Et=ht[qt+2]+(nt&o[rt]),nt>>=rt,ft-=rt;ft<15;)Bt--,nt|=(255&Ee.read_byte(_t++))<<ft,ft+=8;for(qe=nt&Ei,ht=et,pt=Ye,qt=3*(pt+qe),rt=ht[qt];;){if(nt>>=ht[qt+1],ft-=ht[qt+1],(16&rt)!=0){for(rt&=15;ft<rt;)Bt--,nt|=(255&Ee.read_byte(_t++))<<ft,ft+=8;if(sr=ht[qt+2]+(nt&o[rt]),nt>>=rt,ft-=rt,Dt-=Et,yt>=sr)Ht=yt-sr,yt-Ht>0&&2>yt-Ht?(Ve.window[yt++]=Ve.window[Ht++],Ve.window[yt++]=Ve.window[Ht++],Et-=2):(Ve.window.set(Ve.window.subarray(Ht,Ht+2),yt),yt+=2,Ht+=2,Et-=2);else{Ht=yt-sr;do Ht+=Ve.end;while(Ht<0);if(rt=Ve.end-Ht,Et>rt){if(Et-=rt,yt-Ht>0&&rt>yt-Ht)do Ve.window[yt++]=Ve.window[Ht++];while(--rt!=0);else Ve.window.set(Ve.window.subarray(Ht,Ht+rt),yt),yt+=rt,Ht+=rt,rt=0;Ht=0}}if(yt-Ht>0&&Et>yt-Ht)do Ve.window[yt++]=Ve.window[Ht++];while(--Et!=0);else Ve.window.set(Ve.window.subarray(Ht,Ht+Et),yt),yt+=Et,Ht+=Et,Et=0;break}if(64&rt)return Ee.msg="invalid distance code",Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,-3;qe+=ht[qt+2],qe+=nt&o[rt],qt=3*(pt+qe),rt=ht[qt]}break}if(64&rt)return 32&rt?(Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,1):(Ee.msg="invalid literal/length code",Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,-3);if(qe+=ht[qt+2],qe+=nt&o[rt],qt=3*(pt+qe),(rt=ht[qt])===0){nt>>=ht[qt+1],ft-=ht[qt+1],Ve.window[yt++]=ht[qt+2],Dt--;break}}else nt>>=ht[qt+1],ft-=ht[qt+1],Ve.window[yt++]=ht[qt+2],Dt--}while(Dt>=258&&Bt>=10);return Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,0}V.init=function(ie,le,Ae,ke,et,Ye){z=0,dt=ie,wt=le,ee=Ae,Tt=ke,he=et,ae=Ye,k=null},V.proc=function(ie,le,Ae){let ke,et,Ye,Ve,Ee,qe,ht,pt=0,rt=0,nt=0;for(nt=le.next_in_index,Ve=le.avail_in,pt=ie.bitb,rt=ie.bitk,Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee;;)switch(z){case 0:if(qe>=258&&Ve>=10&&(ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,Ae=Re(dt,wt,ee,Tt,he,ae,ie,le),nt=le.next_in_index,Ve=le.avail_in,pt=ie.bitb,rt=ie.bitk,Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,Ae!=0)){z=Ae==1?7:9;break}Be=dt,k=ee,be=Tt,z=1;case 1:for(ke=Be;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);Ae=0,Ve--,pt|=(255&le.read_byte(nt++))<<rt,rt+=8}if(et=3*(be+(pt&o[ke])),pt>>>=k[et+1],rt-=k[et+1],Ye=k[et],Ye===0){Qe=k[et+2],z=6;break}if(16&Ye){Ue=15&Ye,xe=k[et+2],z=2;break}if(!(64&Ye)){Be=Ye,be=et/3+k[et+2];break}if(32&Ye){z=7;break}return z=9,le.msg="invalid literal/length code",Ae=-3,ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);case 2:for(ke=Ue;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);Ae=0,Ve--,pt|=(255&le.read_byte(nt++))<<rt,rt+=8}xe+=pt&o[ke],pt>>=ke,rt-=ke,Be=wt,k=he,be=ae,z=3;case 3:for(ke=Be;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);Ae=0,Ve--,pt|=(255&le.read_byte(nt++))<<rt,rt+=8}if(et=3*(be+(pt&o[ke])),pt>>=k[et+1],rt-=k[et+1],Ye=k[et],(16&Ye)!=0){Ue=15&Ye,Ze=k[et+2],z=4;break}if(!(64&Ye)){Be=Ye,be=et/3+k[et+2];break}return z=9,le.msg="invalid distance code",Ae=-3,ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);case 4:for(ke=Ue;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);Ae=0,Ve--,pt|=(255&le.read_byte(nt++))<<rt,rt+=8}Ze+=pt&o[ke],pt>>=ke,rt-=ke,z=5;case 5:for(ht=Ee-Ze;ht<0;)ht+=ie.end;for(;xe!==0;){if(qe===0&&(Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0&&(ie.write=Ee,Ae=ie.inflate_flush(le,Ae),Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0)))return ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);ie.window[Ee++]=ie.window[ht++],qe--,ht==ie.end&&(ht=0),xe--}z=0;break;case 6:if(qe===0&&(Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0&&(ie.write=Ee,Ae=ie.inflate_flush(le,Ae),Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0)))return ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);Ae=0,ie.window[Ee++]=Qe,qe--,z=0;break;case 7:if(rt>7&&(rt-=8,Ve++,nt--),ie.write=Ee,Ae=ie.inflate_flush(le,Ae),Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,ie.read!=ie.write)return ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);z=8;case 8:return Ae=1,ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);case 9:return Ae=-3,ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae);default:return Ae=-2,ie.bitb=pt,ie.bitk=rt,le.avail_in=Ve,le.total_in+=nt-le.next_in_index,le.next_in_index=nt,ie.write=Ee,ie.inflate_flush(le,Ae)}},V.free=function(){}}f.inflate_trees_fixed=function(V,z,k,ee){return V[0]=9,z[0]=5,k[0]=a,ee[0]=l,0};const v=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function g(V,z){const k=this;let ee,he=0,xe=0,be=0,Be=0;const Qe=[0],Ue=[0],Ze=new p;let dt=0,wt=new Int32Array(4320);const Tt=new f;k.bitk=0,k.bitb=0,k.window=new Uint8Array(z),k.end=z,k.read=0,k.write=0,k.reset=function(ae,Re){Re&&(Re[0]=0),he==6&&Ze.free(ae),he=0,k.bitk=0,k.bitb=0,k.read=k.write=0},k.reset(V,null),k.inflate_flush=function(ae,Re){let ie,le,Ae;return le=ae.next_out_index,Ae=k.read,ie=(Ae<=k.write?k.write:k.end)-Ae,ie>ae.avail_out&&(ie=ae.avail_out),ie!==0&&Re==-5&&(Re=0),ae.avail_out-=ie,ae.total_out+=ie,ae.next_out.set(k.window.subarray(Ae,Ae+ie),le),le+=ie,Ae+=ie,Ae==k.end&&(Ae=0,k.write==k.end&&(k.write=0),ie=k.write-Ae,ie>ae.avail_out&&(ie=ae.avail_out),ie!==0&&Re==-5&&(Re=0),ae.avail_out-=ie,ae.total_out+=ie,ae.next_out.set(k.window.subarray(Ae,Ae+ie),le),le+=ie,Ae+=ie),ae.next_out_index=le,k.read=Ae,Re},k.proc=function(ae,Re){let ie,le,Ae,ke,et,Ye,Ve,Ee;for(ke=ae.next_in_index,et=ae.avail_in,le=k.bitb,Ae=k.bitk,Ye=k.write,Ve=Ye<k.read?k.read-Ye-1:k.end-Ye;;){let qe,ht,pt,rt,nt,ft,_t,Bt;switch(he){case 0:for(;Ae<3;){if(et===0)return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Re=0,et--,le|=(255&ae.read_byte(ke++))<<Ae,Ae+=8}switch(ie=7&le,dt=1&ie,ie>>>1){case 0:le>>>=3,Ae-=3,ie=7&Ae,le>>>=ie,Ae-=ie,he=1;break;case 1:qe=[],ht=[],pt=[[]],rt=[[]],f.inflate_trees_fixed(qe,ht,pt,rt),Ze.init(qe[0],ht[0],pt[0],0,rt[0],0),le>>>=3,Ae-=3,he=6;break;case 2:le>>>=3,Ae-=3,he=3;break;case 3:return le>>>=3,Ae-=3,he=9,ae.msg="invalid block type",Re=-3,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re)}break;case 1:for(;Ae<32;){if(et===0)return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Re=0,et--,le|=(255&ae.read_byte(ke++))<<Ae,Ae+=8}if((~le>>>16&65535)!=(65535&le))return he=9,ae.msg="invalid stored block lengths",Re=-3,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);xe=65535&le,le=Ae=0,he=xe!==0?2:dt!==0?7:0;break;case 2:if(et===0||Ve===0&&(Ye==k.end&&k.read!==0&&(Ye=0,Ve=Ye<k.read?k.read-Ye-1:k.end-Ye),Ve===0&&(k.write=Ye,Re=k.inflate_flush(ae,Re),Ye=k.write,Ve=Ye<k.read?k.read-Ye-1:k.end-Ye,Ye==k.end&&k.read!==0&&(Ye=0,Ve=Ye<k.read?k.read-Ye-1:k.end-Ye),Ve===0)))return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);if(Re=0,ie=xe,ie>et&&(ie=et),ie>Ve&&(ie=Ve),k.window.set(ae.read_buf(ke,ie),Ye),ke+=ie,et-=ie,Ye+=ie,Ve-=ie,(xe-=ie)!=0)break;he=dt!==0?7:0;break;case 3:for(;Ae<14;){if(et===0)return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Re=0,et--,le|=(255&ae.read_byte(ke++))<<Ae,Ae+=8}if(be=ie=16383&le,(31&ie)>29||(ie>>5&31)>29)return he=9,ae.msg="too many length or distance symbols",Re=-3,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);if(ie=258+(31&ie)+(ie>>5&31),!ee||ee.length<ie)ee=[];else for(Ee=0;Ee<ie;Ee++)ee[Ee]=0;le>>>=14,Ae-=14,Be=0,he=4;case 4:for(;Be<4+(be>>>10);){for(;Ae<3;){if(et===0)return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Re=0,et--,le|=(255&ae.read_byte(ke++))<<Ae,Ae+=8}ee[v[Be++]]=7&le,le>>>=3,Ae-=3}for(;Be<19;)ee[v[Be++]]=0;if(Qe[0]=7,ie=Tt.inflate_trees_bits(ee,Qe,Ue,wt,ae),ie!=0)return(Re=ie)==-3&&(ee=null,he=9),k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Be=0,he=5;case 5:for(;ie=be,!(Be>=258+(31&ie)+(ie>>5&31));){let yt,Dt;for(ie=Qe[0];Ae<ie;){if(et===0)return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Re=0,et--,le|=(255&ae.read_byte(ke++))<<Ae,Ae+=8}if(ie=wt[3*(Ue[0]+(le&o[ie]))+1],Dt=wt[3*(Ue[0]+(le&o[ie]))+2],Dt<16)le>>>=ie,Ae-=ie,ee[Be++]=Dt;else{for(Ee=Dt==18?7:Dt-14,yt=Dt==18?11:3;Ae<ie+Ee;){if(et===0)return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Re=0,et--,le|=(255&ae.read_byte(ke++))<<Ae,Ae+=8}if(le>>>=ie,Ae-=ie,yt+=le&o[Ee],le>>>=Ee,Ae-=Ee,Ee=Be,ie=be,Ee+yt>258+(31&ie)+(ie>>5&31)||Dt==16&&Ee<1)return ee=null,he=9,ae.msg="invalid bit length repeat",Re=-3,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Dt=Dt==16?ee[Ee-1]:0;do ee[Ee++]=Dt;while(--yt!=0);Be=Ee}}if(Ue[0]=-1,nt=[],ft=[],_t=[],Bt=[],nt[0]=9,ft[0]=6,ie=be,ie=Tt.inflate_trees_dynamic(257+(31&ie),1+(ie>>5&31),ee,nt,ft,_t,Bt,wt,ae),ie!=0)return ie==-3&&(ee=null,he=9),Re=ie,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);Ze.init(nt[0],ft[0],wt,_t[0],wt,Bt[0]),he=6;case 6:if(k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,(Re=Ze.proc(k,ae,Re))!=1)return k.inflate_flush(ae,Re);if(Re=0,Ze.free(ae),ke=ae.next_in_index,et=ae.avail_in,le=k.bitb,Ae=k.bitk,Ye=k.write,Ve=Ye<k.read?k.read-Ye-1:k.end-Ye,dt===0){he=0;break}he=7;case 7:if(k.write=Ye,Re=k.inflate_flush(ae,Re),Ye=k.write,Ve=Ye<k.read?k.read-Ye-1:k.end-Ye,k.read!=k.write)return k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);he=8;case 8:return Re=1,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);case 9:return Re=-3,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re);default:return Re=-2,k.bitb=le,k.bitk=Ae,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,k.write=Ye,k.inflate_flush(ae,Re)}}},k.free=function(ae){k.reset(ae,null),k.window=null,wt=null},k.set_dictionary=function(ae,Re,ie){k.window.set(ae.subarray(Re,Re+ie),0),k.read=k.write=ie},k.sync_point=function(){return he==1?1:0}}const m=13,y=[0,0,255,255];function _(){const V=this;function z(k){return k&&k.istate?(k.total_in=k.total_out=0,k.msg=null,k.istate.mode=7,k.istate.blocks.reset(k,null),0):-2}V.mode=0,V.method=0,V.was=[0],V.need=0,V.marker=0,V.wbits=0,V.inflateEnd=function(k){return V.blocks&&V.blocks.free(k),V.blocks=null,0},V.inflateInit=function(k,ee){return k.msg=null,V.blocks=null,ee<8||ee>15?(V.inflateEnd(k),-2):(V.wbits=ee,k.istate.blocks=new g(k,1<<ee),z(k),0)},V.inflate=function(k,ee){let he,xe;if(!k||!k.istate||!k.next_in)return-2;const be=k.istate;for(ee=ee==4?-5:0,he=-5;;)switch(be.mode){case 0:if(k.avail_in===0)return he;if(he=ee,k.avail_in--,k.total_in++,(15&(be.method=k.read_byte(k.next_in_index++)))!=8){be.mode=m,k.msg="unknown compression method",be.marker=5;break}if(8+(be.method>>4)>be.wbits){be.mode=m,k.msg="invalid window size",be.marker=5;break}be.mode=1;case 1:if(k.avail_in===0)return he;if(he=ee,k.avail_in--,k.total_in++,xe=255&k.read_byte(k.next_in_index++),((be.method<<8)+xe)%31!=0){be.mode=m,k.msg="incorrect header check",be.marker=5;break}if(!(32&xe)){be.mode=7;break}be.mode=2;case 2:if(k.avail_in===0)return he;he=ee,k.avail_in--,k.total_in++,be.need=(255&k.read_byte(k.next_in_index++))<<24&4278190080,be.mode=3;case 3:if(k.avail_in===0)return he;he=ee,k.avail_in--,k.total_in++,be.need+=(255&k.read_byte(k.next_in_index++))<<16&16711680,be.mode=4;case 4:if(k.avail_in===0)return he;he=ee,k.avail_in--,k.total_in++,be.need+=(255&k.read_byte(k.next_in_index++))<<8&65280,be.mode=5;case 5:return k.avail_in===0?he:(he=ee,k.avail_in--,k.total_in++,be.need+=255&k.read_byte(k.next_in_index++),be.mode=6,2);case 6:return be.mode=m,k.msg="need dictionary",be.marker=0,-2;case 7:if(he=be.blocks.proc(k,he),he==-3){be.mode=m,be.marker=0;break}if(he==0&&(he=ee),he!=1)return he;he=ee,be.blocks.reset(k,be.was),be.mode=12;case 12:return 1;case m:return-3;default:return-2}},V.inflateSetDictionary=function(k,ee,he){let xe=0,be=he;if(!k||!k.istate||k.istate.mode!=6)return-2;const Be=k.istate;return be>=1<<Be.wbits&&(be=(1<<Be.wbits)-1,xe=he-be),Be.blocks.set_dictionary(ee,xe,be),Be.mode=7,0},V.inflateSync=function(k){let ee,he,xe,be,Be;if(!k||!k.istate)return-2;const Qe=k.istate;if(Qe.mode!=m&&(Qe.mode=m,Qe.marker=0),(ee=k.avail_in)===0)return-5;for(he=k.next_in_index,xe=Qe.marker;ee!==0&&xe<4;)k.read_byte(he)==y[xe]?xe++:xe=k.read_byte(he)!==0?0:4-xe,he++,ee--;return k.total_in+=he-k.next_in_index,k.next_in_index=he,k.avail_in=ee,Qe.marker=xe,xe!=4?-3:(be=k.total_in,Be=k.total_out,z(k),k.total_in=be,k.total_out=Be,Qe.mode=7,0)},V.inflateSyncPoint=function(k){return k&&k.istate&&k.istate.blocks?k.istate.blocks.sync_point():-2}}function b(){}b.prototype={inflateInit:function(V){const z=this;return z.istate=new _,V||(V=15),z.istate.inflateInit(z,V)},inflate:function(V){const z=this;return z.istate?z.istate.inflate(z,V):-2},inflateEnd:function(){const V=this;if(!V.istate)return-2;const z=V.istate.inflateEnd(V);return V.istate=null,z},inflateSync:function(){const V=this;return V.istate?V.istate.inflateSync(V):-2},inflateSetDictionary:function(V,z){const k=this;return k.istate?k.istate.inflateSetDictionary(k,V,z):-2},read_byte:function(V){return this.next_in[V]},read_buf:function(V,z){return this.next_in.subarray(V,V+z)}};const w={chunkSize:524288,maxWorkers:typeof navigator<"u"&&navigator.hardwareConcurrency||2,terminateWorkerTimeout:5e3,useWebWorkers:!0,workerScripts:void 0},A=Object.assign({},w);function E(V){if(V.chunkSize!==void 0&&(A.chunkSize=V.chunkSize),V.maxWorkers!==void 0&&(A.maxWorkers=V.maxWorkers),V.terminateWorkerTimeout!==void 0&&(A.terminateWorkerTimeout=V.terminateWorkerTimeout),V.useWebWorkers!==void 0&&(A.useWebWorkers=V.useWebWorkers),V.Deflate!==void 0&&(A.Deflate=V.Deflate),V.Inflate!==void 0&&(A.Inflate=V.Inflate),V.workerScripts!==void 0){if(V.workerScripts.deflate){if(!Array.isArray(V.workerScripts.deflate))throw new Error("workerScripts.deflate must be an array");A.workerScripts||(A.workerScripts={}),A.workerScripts.deflate=V.workerScripts.deflate}if(V.workerScripts.inflate){if(!Array.isArray(V.workerScripts.inflate))throw new Error("workerScripts.inflate must be an array");A.workerScripts||(A.workerScripts={}),A.workerScripts.inflate=V.workerScripts.inflate}}}const I="Abort error";function S(V,z){if(V&&V.aborted)throw z.flush(),new Error(I)}async function T(V,z){return z.length&&await V.writeUint8Array(z),z.length}const U="HTTP error ",N="HTTP Range not supported",x="text/plain",M="Content-Length",P="Accept-Ranges",L="HEAD",F="GET",q="bytes";class j{constructor(){this.size=0}init(){this.initialized=!0}}class W extends j{}class D extends j{writeUint8Array(z){this.size+=z.length}}class C extends W{constructor(z){super(),this.blob=z,this.size=z.size}async readUint8Array(z,k){const ee=new FileReader;return new Promise((he,xe)=>{ee.onload=be=>he(new Uint8Array(be.target.result)),ee.onerror=()=>xe(ee.error),ee.readAsArrayBuffer(this.blob.slice(z,z+k))})}}class R extends W{constructor(z,k){super(),this.url=z,this.preventHeadRequest=k.preventHeadRequest,this.useRangeHeader=k.useRangeHeader,this.forceRangeRequests=k.forceRangeRequests,this.options=Object.assign({},k),delete this.options.preventHeadRequest,delete this.options.useRangeHeader,delete this.options.forceRangeRequests,delete this.options.useXHR}async init(){if(super.init(),ue(this.url)&&!this.preventHeadRequest){const z=await B(L,this.url,this.options);if(this.size=Number(z.headers.get(M)),!this.forceRangeRequests&&this.useRangeHeader&&z.headers.get(P)!=q)throw new Error(N);this.size===void 0&&await O(this,this.options)}else await O(this,this.options)}async readUint8Array(z,k){if(this.useRangeHeader){const ee=await B(F,this.url,this.options,Object.assign({},this.options.headers,{HEADER_RANGE:"bytes="+z+"-"+(z+k-1)}));if(ee.status!=206)throw new Error(N);return new Uint8Array(await ee.arrayBuffer())}return this.data||await O(this,this.options),new Uint8Array(this.data.subarray(z,z+k))}}async function O(V,z){const k=await B(F,V.url,z);V.data=new Uint8Array(await k.arrayBuffer()),V.size||(V.size=V.data.length)}async function B(V,z,k,ee){ee=Object.assign({},k.headers,ee);const he=await fetch(z,Object.assign({},k,{method:V,headers:ee}));if(he.status<400)return he;throw new Error(U+(he.statusText||he.status))}class G extends W{constructor(z,k){super(),this.url=z,this.preventHeadRequest=k.preventHeadRequest,this.useRangeHeader=k.useRangeHeader,this.forceRangeRequests=k.forceRangeRequests}async init(){if(super.init(),ue(this.url)&&!this.preventHeadRequest)return new Promise((z,k)=>H(L,this.url,ee=>{this.size=Number(ee.getResponseHeader(M)),this.useRangeHeader?this.forceRangeRequests||ee.getResponseHeader(P)==q?z():k(new Error(N)):this.size===void 0?Y(this,this.url).then(()=>z()).catch(k):z()},k));await Y(this,this.url)}async readUint8Array(z,k){if(!this.useRangeHeader)return this.data||await Y(this,this.url),new Uint8Array(this.data.subarray(z,z+k));if((await new Promise((ee,he)=>H(F,this.url,xe=>ee(new Uint8Array(xe.response)),he,[["Range","bytes="+z+"-"+(z+k-1)]]))).status!=206)throw new Error(N)}}function Y(V,z){return new Promise((k,ee)=>H(F,z,he=>{V.data=new Uint8Array(he.response),V.size||(V.size=V.data.length),k()},ee))}function H(V,z,k,ee,he=[]){const xe=new XMLHttpRequest;return xe.addEventListener("load",()=>{xe.status<400?k(xe):ee(U+(xe.statusText||xe.status))},!1),xe.addEventListener("error",ee,!1),xe.open(V,z),he.forEach(be=>xe.setRequestHeader(be[0],be[1])),xe.responseType="arraybuffer",xe.send(),xe}class te extends W{constructor(z,k={}){super(),this.url=z,k.useXHR?this.reader=new G(z,k):this.reader=new R(z,k)}set size(z){}get size(){return this.reader.size}async init(){super.init(),await this.reader.init()}async readUint8Array(z,k){return this.reader.readUint8Array(z,k)}}function ue(V){if(typeof document<"u"){const z=document.createElement("a");return z.href=V,z.protocol=="http:"||z.protocol=="https:"}return/^https?:\/\//i.test(V)}const _e=4294967295,J=33639248,re=101075792,pe="\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""),we=[];for(let V=0;V<256;V++){let z=V;for(let k=0;k<8;k++)1&z?z=z>>>1^3988292384:z>>>=1;we[V]=z}class me{constructor(z){this.crc=z||-1}append(z){let k=0|this.crc;for(let ee=0,he=0|z.length;ee<he;ee++)k=k>>>8^we[255&(k^z[ee])];this.crc=k}get(){return~this.crc}}const ye={concat(V,z){if(V.length===0||z.length===0)return V.concat(z);const k=V[V.length-1],ee=ye.getPartial(k);return ee===32?V.concat(z):ye._shiftRight(z,ee,0|k,V.slice(0,V.length-1))},bitLength(V){const z=V.length;if(z===0)return 0;const k=V[z-1];return 32*(z-1)+ye.getPartial(k)},clamp(V,z){if(32*V.length<z)return V;const k=(V=V.slice(0,Math.ceil(z/32))).length;return z&=31,k>0&&z&&(V[k-1]=ye.partial(z,V[k-1]&2147483648>>z-1,1)),V},partial:(V,z,k)=>V===32?z:(k?0|z:z<<32-V)+1099511627776*V,getPartial:V=>Math.round(V/1099511627776)||32,_shiftRight(V,z,k,ee){for(ee===void 0&&(ee=[]);z>=32;z-=32)ee.push(k),k=0;if(z===0)return ee.concat(V);for(let be=0;be<V.length;be++)ee.push(k|V[be]>>>z),k=V[be]<<32-z;const he=V.length?V[V.length-1]:0,xe=ye.getPartial(he);return ee.push(ye.partial(z+xe&31,z+xe>32?k:ee.pop(),1)),ee}},$e={bytes:{fromBits(V){const z=ye.bitLength(V)/8,k=new Uint8Array(z);let ee;for(let he=0;he<z;he++)!(3&he)&&(ee=V[he/4]),k[he]=ee>>>24,ee<<=8;return k},toBits(V){const z=[];let k,ee=0;for(k=0;k<V.length;k++)ee=ee<<8|V[k],(3&k)==3&&(z.push(ee),ee=0);return 3&k&&z.push(ye.partial(8*(3&k),ee)),z}}},Fe={sha1:function(V){V?(this._h=V._h.slice(0),this._buffer=V._buffer.slice(0),this._length=V._length):this.reset()}};Fe.sha1.prototype={blockSize:512,reset:function(){const V=this;return V._h=this._init.slice(0),V._buffer=[],V._length=0,V},update:function(V){const z=this;typeof V=="string"&&(V=$e.utf8String.toBits(V));const k=z._buffer=ye.concat(z._buffer,V),ee=z._length,he=z._length=ee+ye.bitLength(V);if(he>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const xe=new Uint32Array(k);let be=0;for(let Be=z.blockSize+ee-(z.blockSize+ee&z.blockSize-1);Be<=he;Be+=z.blockSize)z._block(xe.subarray(16*be,16*(be+1))),be+=1;return k.splice(0,16*be),z},finalize:function(){const V=this;let z=V._buffer;const k=V._h;z=ye.concat(z,[ye.partial(1,1)]);for(let ee=z.length+2;15&ee;ee++)z.push(0);for(z.push(Math.floor(V._length/4294967296)),z.push(0|V._length);z.length;)V._block(z.splice(0,16));return V.reset(),k},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(V,z,k,ee){return V<=19?z&k|~z&ee:V<=39?z^k^ee:V<=59?z&k|z&ee|k&ee:V<=79?z^k^ee:void 0},_S:function(V,z){return z<<V|z>>>32-V},_block:function(V){const z=this,k=z._h,ee=Array(80);for(let Ue=0;Ue<16;Ue++)ee[Ue]=V[Ue];let he=k[0],xe=k[1],be=k[2],Be=k[3],Qe=k[4];for(let Ue=0;Ue<=79;Ue++){Ue>=16&&(ee[Ue]=z._S(1,ee[Ue-3]^ee[Ue-8]^ee[Ue-14]^ee[Ue-16]));const Ze=z._S(5,he)+z._f(Ue,xe,be,Be)+Qe+ee[Ue]+z._key[Math.floor(Ue/20)]|0;Qe=Be,Be=be,be=z._S(30,xe),xe=he,he=Ze}k[0]=k[0]+he|0,k[1]=k[1]+xe|0,k[2]=k[2]+be|0,k[3]=k[3]+Be|0,k[4]=k[4]+Qe|0}};const Je=class{constructor(V){const z=this;z._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],z._tables[0][0][0]||z._precompute();const k=z._tables[0][4],ee=z._tables[1],he=V.length;let xe,be,Be,Qe=1;if(he!==4&&he!==6&&he!==8)throw new Error("invalid aes key size");for(z._key=[be=V.slice(0),Be=[]],xe=he;xe<4*he+28;xe++){let Ue=be[xe-1];(xe%he==0||he===8&&xe%he==4)&&(Ue=k[Ue>>>24]<<24^k[Ue>>16&255]<<16^k[Ue>>8&255]<<8^k[255&Ue],xe%he==0&&(Ue=Ue<<8^Ue>>>24^Qe<<24,Qe=Qe<<1^283*(Qe>>7))),be[xe]=be[xe-he]^Ue}for(let Ue=0;xe;Ue++,xe--){const Ze=be[3&Ue?xe:xe-4];Be[Ue]=xe<=4||Ue<4?Ze:ee[0][k[Ze>>>24]]^ee[1][k[Ze>>16&255]]^ee[2][k[Ze>>8&255]]^ee[3][k[255&Ze]]}}encrypt(V){return this._crypt(V,0)}decrypt(V){return this._crypt(V,1)}_precompute(){const V=this._tables[0],z=this._tables[1],k=V[4],ee=z[4],he=[],xe=[];let be,Be,Qe,Ue;for(let Ze=0;Ze<256;Ze++)xe[(he[Ze]=Ze<<1^283*(Ze>>7))^Ze]=Ze;for(let Ze=be=0;!k[Ze];Ze^=Be||1,be=xe[be]||1){let dt=be^be<<1^be<<2^be<<3^be<<4;dt=dt>>8^255&dt^99,k[Ze]=dt,ee[dt]=Ze,Ue=he[Qe=he[Be=he[Ze]]];let wt=16843009*Ue^65537*Qe^257*Be^16843008*Ze,Tt=257*he[dt]^16843008*dt;for(let ae=0;ae<4;ae++)V[ae][Ze]=Tt=Tt<<24^Tt>>>8,z[ae][dt]=wt=wt<<24^wt>>>8}for(let Ze=0;Ze<5;Ze++)V[Ze]=V[Ze].slice(0),z[Ze]=z[Ze].slice(0)}_crypt(V,z){if(V.length!==4)throw new Error("invalid aes block size");const k=this._key[z],ee=k.length/4-2,he=[0,0,0,0],xe=this._tables[z],be=xe[0],Be=xe[1],Qe=xe[2],Ue=xe[3],Ze=xe[4];let dt,wt,Tt,ae=V[0]^k[0],Re=V[z?3:1]^k[1],ie=V[2]^k[2],le=V[z?1:3]^k[3],Ae=4;for(let ke=0;ke<ee;ke++)dt=be[ae>>>24]^Be[Re>>16&255]^Qe[ie>>8&255]^Ue[255&le]^k[Ae],wt=be[Re>>>24]^Be[ie>>16&255]^Qe[le>>8&255]^Ue[255&ae]^k[Ae+1],Tt=be[ie>>>24]^Be[le>>16&255]^Qe[ae>>8&255]^Ue[255&Re]^k[Ae+2],le=be[le>>>24]^Be[ae>>16&255]^Qe[Re>>8&255]^Ue[255&ie]^k[Ae+3],Ae+=4,ae=dt,Re=wt,ie=Tt;for(let ke=0;ke<4;ke++)he[z?3&-ke:ke]=Ze[ae>>>24]<<24^Ze[Re>>16&255]<<16^Ze[ie>>8&255]<<8^Ze[255&le]^k[Ae++],dt=ae,ae=Re,Re=ie,ie=le,le=dt;return he}},ct=class{constructor(V,z){this._prf=V,this._initIv=z,this._iv=z}reset(){this._iv=this._initIv}update(V){return this.calculate(this._prf,V,this._iv)}incWord(V){if((V>>24&255)==255){let z=V>>16&255,k=V>>8&255,ee=255&V;z===255?(z=0,k===255?(k=0,ee===255?ee=0:++ee):++k):++z,V=0,V+=z<<16,V+=k<<8,V+=ee}else V+=1<<24;return V}incCounter(V){(V[0]=this.incWord(V[0]))===0&&(V[1]=this.incWord(V[1]))}calculate(V,z,k){let ee;if(!(ee=z.length))return[];const he=ye.bitLength(z);for(let xe=0;xe<ee;xe+=4){this.incCounter(k);const be=V.encrypt(k);z[xe]^=be[0],z[xe+1]^=be[1],z[xe+2]^=be[2],z[xe+3]^=be[3]}return ye.clamp(z,he)}},mt=class{constructor(V){const z=this,k=z._hash=Fe.sha1,ee=[[],[]],he=k.prototype.blockSize/32;z._baseHash=[new k,new k],V.length>he&&(V=k.hash(V));for(let xe=0;xe<he;xe++)ee[0][xe]=909522486^V[xe],ee[1][xe]=1549556828^V[xe];z._baseHash[0].update(ee[0]),z._baseHash[1].update(ee[1]),z._resultHash=new k(z._baseHash[0])}reset(){const V=this;V._resultHash=new V._hash(V._baseHash[0]),V._updated=!1}update(V){this._updated=!0,this._resultHash.update(V)}digest(){const V=this,z=V._resultHash.finalize(),k=new V._hash(V._baseHash[1]).update(z).finalize();return V.reset(),k}},K="Invalid pasword",X=16,fe={name:"PBKDF2"},Pe=Object.assign({hash:{name:"HMAC"}},fe),Le=Object.assign({iterations:1e3,hash:{name:"SHA-1"}},fe),Ne=["deriveBits"],ze=[8,12,16],De=[16,24,32],ve=10,Xe=[0,0,0,0],je=$e.bytes,Oe=Je,Ke=ct,He=mt;class Te{constructor(z,k,ee){Object.assign(this,{password:z,signed:k,strength:ee-1,pendingInput:new Uint8Array(0)})}async append(z){const k=this;if(k.password){const ee=Ce(z,0,ze[k.strength]+2);await async function(he,xe,be){await Se(he,be,Ce(xe,0,ze[he.strength]));const Be=Ce(xe,ze[he.strength]),Qe=he.keys.passwordVerification;if(Qe[0]!=Be[0]||Qe[1]!=Be[1])throw new Error(K)}(k,ee,k.password),k.password=null,k.aesCtrGladman=new Ke(new Oe(k.keys.key),Array.from(Xe)),k.hmac=new He(k.keys.authentication),z=Ce(z,ze[k.strength]+2)}return $(k,z,new Uint8Array(z.length-ve-(z.length-ve)%X),0,ve,!0)}flush(){const z=this,k=z.pendingInput,ee=Ce(k,0,k.length-ve),he=Ce(k,k.length-ve);let xe=new Uint8Array(0);if(ee.length){const Be=je.toBits(ee);z.hmac.update(Be);const Qe=z.aesCtrGladman.update(Be);xe=je.fromBits(Qe)}let be=!0;if(z.signed){const Be=Ce(je.fromBits(z.hmac.digest()),0,ve);for(let Qe=0;Qe<ve;Qe++)Be[Qe]!=he[Qe]&&(be=!1)}return{valid:be,data:xe}}}class We{constructor(z,k){Object.assign(this,{password:z,strength:k-1,pendingInput:new Uint8Array(0)})}async append(z){const k=this;let ee=new Uint8Array(0);k.password&&(ee=await async function(xe,be){const Be=crypto.getRandomValues(new Uint8Array(ze[xe.strength]));return await Se(xe,be,Be),se(Be,xe.keys.passwordVerification)}(k,k.password),k.password=null,k.aesCtrGladman=new Ke(new Oe(k.keys.key),Array.from(Xe)),k.hmac=new He(k.keys.authentication));const he=new Uint8Array(ee.length+z.length-z.length%X);return he.set(ee,0),$(k,z,he,ee.length,0)}flush(){const z=this;let k=new Uint8Array(0);if(z.pendingInput.length){const he=z.aesCtrGladman.update(je.toBits(z.pendingInput));z.hmac.update(he),k=je.fromBits(he)}const ee=Ce(je.fromBits(z.hmac.digest()),0,ve);return{data:se(k,ee),signature:ee}}}function $(V,z,k,ee,he,xe){const be=z.length-he;let Be;for(V.pendingInput.length&&(z=se(V.pendingInput,z),k=function(Qe,Ue){if(Ue&&Ue>Qe.length){const Ze=Qe;(Qe=new Uint8Array(Ue)).set(Ze,0)}return Qe}(k,be-be%X)),Be=0;Be<=be-X;Be+=X){const Qe=je.toBits(Ce(z,Be,Be+X));xe&&V.hmac.update(Qe);const Ue=V.aesCtrGladman.update(Qe);xe||V.hmac.update(Ue),k.set(je.fromBits(Ue),Be+ee)}return V.pendingInput=Ce(z,Be),k}async function Se(V,z,k){const ee=new TextEncoder().encode(z),he=await crypto.subtle.importKey("raw",ee,Pe,!1,Ne),xe=await crypto.subtle.deriveBits(Object.assign({salt:k},Le),he,8*(2*De[V.strength]+2)),be=new Uint8Array(xe);V.keys={key:je.toBits(Ce(be,0,De[V.strength])),authentication:je.toBits(Ce(be,De[V.strength],2*De[V.strength])),passwordVerification:Ce(be,2*De[V.strength])}}function se(V,z){let k=V;return V.length+z.length&&(k=new Uint8Array(V.length+z.length),k.set(V,0),k.set(z,V.length)),k}function Ce(V,z,k){return V.subarray(z,k)}class Ge{constructor(z,k){Object.assign(this,{password:z,passwordVerification:k}),an(this,z)}append(z){const k=this;if(k.password){const ee=Mt(k,z.subarray(0,12));if(k.password=null,ee[11]!=k.passwordVerification)throw new Error(K);z=z.subarray(12)}return Mt(k,z)}flush(){return{valid:!0,data:new Uint8Array(0)}}}class vt{constructor(z,k){Object.assign(this,{password:z,passwordVerification:k}),an(this,z)}append(z){const k=this;let ee,he;if(k.password){k.password=null;const xe=crypto.getRandomValues(new Uint8Array(12));xe[11]=k.passwordVerification,ee=new Uint8Array(z.length+xe.length),ee.set(Nt(k,xe),0),he=12}else ee=new Uint8Array(z.length),he=0;return ee.set(Nt(k,z),he),ee}flush(){return{data:new Uint8Array(0)}}}function Mt(V,z){const k=new Uint8Array(z.length);for(let ee=0;ee<z.length;ee++)k[ee]=dn(V)^z[ee],Ut(V,k[ee]);return k}function Nt(V,z){const k=new Uint8Array(z.length);for(let ee=0;ee<z.length;ee++)k[ee]=dn(V)^z[ee],Ut(V,z[ee]);return k}function an(V,z){V.keys=[305419896,591751049,878082192],V.crcKey0=new me(V.keys[0]),V.crcKey2=new me(V.keys[2]);for(let k=0;k<z.length;k++)Ut(V,z.charCodeAt(k))}function Ut(V,z){V.crcKey0.append([z]),V.keys[0]=~V.crcKey0.get(),V.keys[1]=Dn(V.keys[1]+Xt(V.keys[0])),V.keys[1]=Dn(Math.imul(V.keys[1],134775813)+1),V.crcKey2.append([V.keys[1]>>>24]),V.keys[2]=~V.crcKey2.get()}function dn(V){const z=2|V.keys[2];return Xt(Math.imul(z,1^z)>>>8)}function Xt(V){return 255&V}function Dn(V){return 4294967295&V}const hn="inflate",bi="Invalid signature";class xn{constructor(z,{signature:k,password:ee,signed:he,compressed:xe,zipCrypto:be,passwordVerification:Be,encryptionStrength:Qe},{chunkSize:Ue}){const Ze=!!ee;Object.assign(this,{signature:k,encrypted:Ze,signed:he,compressed:xe,inflate:xe&&new z({chunkSize:Ue}),crc32:he&&new me,zipCrypto:be,decrypt:Ze&&be?new Ge(ee,Be):new Te(ee,he,Qe)})}async append(z){const k=this;return k.encrypted&&z.length&&(z=await k.decrypt.append(z)),k.compressed&&z.length&&(z=await k.inflate.append(z)),(!k.encrypted||k.zipCrypto)&&k.signed&&z.length&&k.crc32.append(z),z}async flush(){const z=this;let k,ee=new Uint8Array(0);if(z.encrypted){const he=z.decrypt.flush();if(!he.valid)throw new Error(bi);ee=he.data}if((!z.encrypted||z.zipCrypto)&&z.signed){const he=new DataView(new Uint8Array(4).buffer);if(k=z.crc32.get(),he.setUint32(0,k),z.signature!=he.getUint32(0,!1))throw new Error(bi)}return z.compressed&&(ee=await z.inflate.append(ee)||new Uint8Array(0),await z.inflate.flush()),{data:ee,signature:k}}}class wn{constructor(z,{encrypted:k,signed:ee,compressed:he,level:xe,zipCrypto:be,password:Be,passwordVerification:Qe,encryptionStrength:Ue},{chunkSize:Ze}){Object.assign(this,{encrypted:k,signed:ee,compressed:he,deflate:he&&new z({level:xe||5,chunkSize:Ze}),crc32:ee&&new me,zipCrypto:be,encrypt:k&&be?new vt(Be,Qe):new We(Be,Ue)})}async append(z){const k=this;let ee=z;return k.compressed&&z.length&&(ee=await k.deflate.append(z)),k.encrypted&&ee.length&&(ee=await k.encrypt.append(ee)),(!k.encrypted||k.zipCrypto)&&k.signed&&z.length&&k.crc32.append(z),ee}async flush(){const z=this;let k,ee=new Uint8Array(0);if(z.compressed&&(ee=await z.deflate.flush()||new Uint8Array(0)),z.encrypted){ee=await z.encrypt.append(ee);const he=z.encrypt.flush();k=he.signature;const xe=new Uint8Array(ee.length+he.data.length);xe.set(ee,0),xe.set(he.data,ee.length),ee=xe}return z.encrypted&&!z.zipCrypto||!z.signed||(k=z.crc32.get()),{data:ee,signature:k}}}const zn="init",Ln="append",Yt="flush";let ln=!0;var xi=(V,z,k,ee,he,xe,be)=>(Object.assign(V,{busy:!0,codecConstructor:z,options:Object.assign({},k),scripts:be,terminate(){V.worker&&!V.busy&&(V.worker.terminate(),V.interface=null)},onTaskFinished(){V.busy=!1,he(V)}}),xe?function(Be,Qe){let Ue;const Ze={type:"module"};if(!Be.interface){if(ln)try{Be.worker=dt()}catch{ln=!1,Be.worker=dt(Ze)}else Be.worker=dt(Ze);Be.worker.addEventListener("message",function(ae){const Re=ae.data;if(Ue){const ie=Re.error,le=Re.type;if(ie){const Ae=new Error(ie.message);Ae.stack=ie.stack,Ue.reject(Ae),Ue=null,Be.onTaskFinished()}else if(le==zn||le==Yt||le==Ln){const Ae=Re.data;le==Yt?(Ue.resolve({data:new Uint8Array(Ae),signature:Re.signature}),Ue=null,Be.onTaskFinished()):Ue.resolve(Ae&&new Uint8Array(Ae))}}},!1),Be.interface={append:ae=>wt({type:Ln,data:ae}),flush:()=>wt({type:Yt})}}return Be.interface;function dt(ae={}){return new Worker(new URL(Be.scripts[0],typeof document>"u"&&typeof location>"u"?new ad.URL("file:"+__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("zip-no-worker-inflate.min.js",document.baseURI).href),ae)}async function wt(ae){if(!Ue){const Re=Be.options,ie=Be.scripts.slice(1);await Tt({scripts:ie,type:zn,options:Re,config:{chunkSize:Qe.chunkSize}})}return Tt(ae)}function Tt(ae){const Re=Be.worker,ie=new Promise((le,Ae)=>Ue={resolve:le,reject:Ae});try{if(ae.data)try{ae.data=ae.data.buffer,Re.postMessage(ae,[ae.data])}catch{Re.postMessage(ae)}else Re.postMessage(ae)}catch(le){Ue.reject(le),Ue=null,Be.onTaskFinished()}return ie}}(V,ee):function(Be,Qe){const Ue=function(Ze,dt,wt){return dt.codecType.startsWith("deflate")?new wn(Ze,dt,wt):dt.codecType.startsWith(hn)?new xn(Ze,dt,wt):void 0}(Be.codecConstructor,Be.options,Qe);return{async append(Ze){try{return await Ue.append(Ze)}catch(dt){throw Be.onTaskFinished(),dt}},async flush(){try{return await Ue.flush()}finally{Be.onTaskFinished()}}}}(V,ee));let Z=[],Q=[];function oe(V){V.terminateTimeout&&(clearTimeout(V.terminateTimeout),V.terminateTimeout=null)}const ne=["filename","rawFilename","directory","encrypted","compressedSize","uncompressedSize","lastModDate","rawLastModDate","comment","rawComment","signature","extraField","rawExtraField","bitFlag","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","filenameUTF8","commentUTF8","offset","zip64","compressionMethod","extraFieldNTFS","lastAccessDate","creationDate","extraFieldExtendedTimestamp","version","versionMadeBy","msDosCompatible","internalFileAttribute","externalFileAttribute"];class Me{constructor(z){ne.forEach(k=>this[k]=z[k])}}const ge="File format is not recognized",ot="End of central directory not found",it="End of Zip64 central directory not found",tt="End of Zip64 central directory locator not found",de="Central directory header not found",Ie="Local file header not found",at="Zip64 extra field not found",lt="File contains encrypted entry",xt="Encryption method not supported",kt="Compression method not supported",Kt="utf-8",Pt=["uncompressedSize","compressedSize","offset"];class gt{constructor(z,k,ee){Object.assign(this,{reader:z,config:k,options:ee})}async getData(z,k,ee={}){const he=this,{reader:xe,offset:be,extraFieldAES:Be,compressionMethod:Qe,config:Ue,bitFlag:Ze,signature:dt,rawLastModDate:wt,compressedSize:Tt}=he,ae=he.localDirectory={};xe.initialized||await xe.init();let Re=await jn(xe,be,30);const ie=tn(Re);let le=si(he,ee,"password");if(le=le&&le.length&&le,Be&&Be.originalCompressionMethod!=99)throw new Error(kt);if(Qe!=0&&Qe!=8)throw new Error(kt);if(Ot(ie,0)!=67324752)throw new Error(Ie);ri(ae,ie,4),Re=await jn(xe,be,30+ae.filenameLength+ae.extraFieldLength),ae.rawExtraField=Re.subarray(30+ae.filenameLength),Gt(he,ae,ie,4),k.lastAccessDate=ae.lastAccessDate,k.creationDate=ae.creationDate;const Ae=he.encrypted&&ae.encrypted,ke=Ae&&!Be;if(Ae){if(!ke&&Be.strength===void 0)throw new Error(xt);if(!le)throw new Error(lt)}const et=await function(Ee,qe,ht){const pt=!(!qe.compressed&&!qe.signed&&!qe.encrypted)&&(qe.useWebWorkers||qe.useWebWorkers===void 0&&ht.useWebWorkers),rt=pt&&ht.workerScripts?ht.workerScripts[qe.codecType]:[];if(Z.length<ht.maxWorkers){const ft={};return Z.push(ft),xi(ft,Ee,qe,ht,nt,pt,rt)}{const ft=Z.find(_t=>!_t.busy);return ft?(oe(ft),xi(ft,Ee,qe,ht,nt,pt,rt)):new Promise(_t=>Q.push({resolve:_t,codecConstructor:Ee,options:qe,webWorker:pt,scripts:rt}))}function nt(ft){if(Q.length){const[{resolve:_t,codecConstructor:Bt,options:yt,webWorker:Dt,scripts:Mi}]=Q.splice(0,1);_t(xi(ft,Bt,yt,ht,nt,Dt,Mi))}else ft.worker?(oe(ft),Number.isFinite(ht.terminateWorkerTimeout)&&ht.terminateWorkerTimeout>=0&&(ft.terminateTimeout=setTimeout(()=>{Z=Z.filter(_t=>_t!=ft),ft.terminate()},ht.terminateWorkerTimeout))):Z=Z.filter(_t=>_t!=ft)}}(Ue.Inflate,{codecType:hn,password:le,zipCrypto:ke,encryptionStrength:Be&&Be.strength,signed:si(he,ee,"checkSignature"),passwordVerification:ke&&(Ze.dataDescriptor?wt>>>8&255:dt>>>24&255),signature:dt,compressed:Qe!=0,encrypted:Ae,useWebWorkers:si(he,ee,"useWebWorkers")},Ue);z.initialized||await z.init();const Ye=si(he,ee,"signal"),Ve=be+30+ae.filenameLength+ae.extraFieldLength;return await async function(Ee,qe,ht,pt,rt,nt,ft){const _t=Math.max(nt.chunkSize,64);return async function Bt(yt=0,Dt=0){const Mi=ft.signal;if(yt<rt){S(Mi,Ee);const Ei=await qe.readUint8Array(yt+pt,Math.min(_t,rt-yt)),Et=Ei.length;S(Mi,Ee);const sr=await Ee.append(Ei);if(S(Mi,Ee),Dt+=await T(ht,sr),ft.onprogress)try{ft.onprogress(yt+Et,rt)}catch{}return Bt(yt+_t,Dt)}{const Ei=await Ee.flush();return Dt+=await T(ht,Ei.data),{signature:Ei.signature,length:Dt}}}()}(et,xe,z,Ve,Tt,Ue,{onprogress:ee.onprogress,signal:Ye}),z.getData()}}function ri(V,z,k){const ee=V.rawBitFlag=cn(z,k+2),he=(1&ee)==1,xe=Ot(z,k+6);Object.assign(V,{encrypted:he,version:cn(z,k),bitFlag:{level:(6&ee)>>1,dataDescriptor:(8&ee)==8,languageEncodingFlag:(2048&ee)==2048},rawLastModDate:xe,lastModDate:Wr(xe),filenameLength:cn(z,k+22),extraFieldLength:cn(z,k+24)})}function Gt(V,z,k,ee){const he=z.rawExtraField,xe=z.extraField=new Map,be=tn(new Uint8Array(he));let Be=0;try{for(;Be<he.length;){const Re=cn(be,Be),ie=cn(be,Be+2);xe.set(Re,{type:Re,data:he.slice(Be+4,Be+4+ie)}),Be+=4+ie}}catch{}const Qe=cn(k,ee+4);z.signature=Ot(k,ee+10),z.uncompressedSize=Ot(k,ee+18),z.compressedSize=Ot(k,ee+14);const Ue=xe.get(1);Ue&&(function(Re,ie){ie.zip64=!0;const le=tn(Re.data);Re.values=[];for(let ke=0;ke<Math.floor(Re.data.length/8);ke++)Re.values.push(Si(le,0+8*ke));const Ae=Pt.filter(ke=>ie[ke]==_e);for(let ke=0;ke<Ae.length;ke++)Re[Ae[ke]]=Re.values[ke];Pt.forEach(ke=>{if(ie[ke]==_e){if(Re[ke]===void 0)throw new Error(at);ie[ke]=Re[ke]}})}(Ue,z),z.extraFieldZip64=Ue);const Ze=xe.get(28789);Ze&&(Yn(Ze,"filename","rawFilename",z,V),z.extraFieldUnicodePath=Ze);const dt=xe.get(25461);dt&&(Yn(dt,"comment","rawComment",z,V),z.extraFieldUnicodeComment=dt);const wt=xe.get(39169);wt?(function(Re,ie,le){const Ae=tn(Re.data);Re.vendorVersion=Sn(Ae,0),Re.vendorId=Sn(Ae,2);const ke=Sn(Ae,4);Re.strength=ke,Re.originalCompressionMethod=le,ie.compressionMethod=Re.compressionMethod=cn(Ae,5)}(wt,z,Qe),z.extraFieldAES=wt):z.compressionMethod=Qe;const Tt=xe.get(10);Tt&&(function(Re,ie){const le=tn(Re.data);let Ae,ke=4;try{for(;ke<Re.data.length&&!Ae;){const et=cn(le,ke),Ye=cn(le,ke+2);et==1&&(Ae=Re.data.slice(ke+4,ke+4+Ye)),ke+=4+Ye}}catch{}try{if(Ae&&Ae.length==24){const et=tn(Ae),Ye=et.getBigUint64(0,!0),Ve=et.getBigUint64(8,!0),Ee=et.getBigUint64(16,!0);Object.assign(Re,{rawLastModDate:Ye,rawLastAccessDate:Ve,rawCreationDate:Ee});const qe=Zt(Ye),ht={lastModDate:qe,lastAccessDate:Zt(Ve),creationDate:Zt(Ee)};Object.assign(Re,ht),Object.assign(ie,ht)}}catch{}}(Tt,z),z.extraFieldNTFS=Tt);const ae=xe.get(21589);ae&&(function(Re,ie){const le=tn(Re.data),Ae=Sn(le,0),ke=[],et=[];(1&Ae)==1&&(ke.push("lastModDate"),et.push("rawLastModDate")),(2&Ae)==2&&(ke.push("lastAccessDate"),et.push("rawLastAccessDate")),(4&Ae)==4&&(ke.push("creationDate"),et.push("rawCreationDate"));let Ye=1;ke.forEach((Ve,Ee)=>{if(Re.data.length>=Ye+4){const qe=Ot(le,Ye);ie[Ve]=Re[Ve]=new Date(1e3*qe);const ht=et[Ee];Re[ht]=qe}Ye+=4})}(ae,z),z.extraFieldExtendedTimestamp=ae)}function Yn(V,z,k,ee,he){const xe=tn(V.data);V.version=Sn(xe,0),V.signature=Ot(xe,1);const be=new me;be.append(he[k]);const Be=tn(new Uint8Array(4));Be.setUint32(0,be.get(),!0),V[z]=new TextDecoder().decode(V.data.subarray(5)),V.valid=!he.bitFlag.languageEncodingFlag&&V.signature==Ot(Be,0),V.valid&&(ee[z]=V[z],ee[z+"UTF8"]=!0)}function si(V,z,k){return z[k]===void 0?V.options[k]:z[k]}function wi(V,z){return z&&z.trim().toLowerCase()!="cp437"?new TextDecoder(z).decode(V):(k=>{let ee="";for(let he=0;he<k.length;he++)ee+=pe[k[he]];return ee})(V)}function Wr(V){const z=(4294901760&V)>>16,k=65535&V;try{return new Date(1980+((65024&z)>>9),((480&z)>>5)-1,31&z,(63488&k)>>11,(2016&k)>>5,2*(31&k),0)}catch{}}function Zt(V){return new Date(Number(V/BigInt(1e4)-BigInt(116444736e5)))}function Sn(V,z){return V.getUint8(z)}function cn(V,z){return V.getUint16(z,!0)}function Ot(V,z){return V.getUint32(z,!0)}function Si(V,z){return Number(V.getBigUint64(z,!0))}function tn(V){return new DataView(V.buffer)}function jn(V,z,k){return V.readUint8Array(z,k)}E({Inflate:function(V){const z=new b,k=V&&V.chunkSize?Math.floor(2*V.chunkSize):131072,ee=new Uint8Array(k);let he=!1;z.inflateInit(),z.next_out=ee,this.append=function(xe,be){const Be=[];let Qe,Ue,Ze=0,dt=0,wt=0;if(xe.length!==0){z.next_in_index=0,z.next_in=xe,z.avail_in=xe.length;do{if(z.next_out_index=0,z.avail_out=k,z.avail_in!==0||he||(z.next_in_index=0,he=!0),Qe=z.inflate(0),he&&Qe===-5){if(z.avail_in!==0)throw new Error("inflating: bad input")}else if(Qe!==0&&Qe!==1)throw new Error("inflating: "+z.msg);if((he||Qe===1)&&z.avail_in===xe.length)throw new Error("inflating: bad input");z.next_out_index&&(z.next_out_index===k?Be.push(new Uint8Array(ee)):Be.push(ee.slice(0,z.next_out_index))),wt+=z.next_out_index,be&&z.next_in_index>0&&z.next_in_index!=Ze&&(be(z.next_in_index),Ze=z.next_in_index)}while(z.avail_in>0||z.avail_out===0);return Be.length>1?(Ue=new Uint8Array(wt),Be.forEach(function(Tt){Ue.set(Tt,dt),dt+=Tt.length})):Ue=Be[0]||new Uint8Array(0),Ue}},this.flush=function(){z.inflateEnd()}}}),e.BlobReader=C,e.BlobWriter=class extends D{constructor(V){super(),this.offset=0,this.contentType=V,this.blob=new Blob([],{type:V})}async writeUint8Array(V){super.writeUint8Array(V),this.blob=new Blob([this.blob,V.buffer],{type:this.contentType}),this.offset=this.blob.size}getData(){return this.blob}},e.Data64URIReader=class extends W{constructor(V){super(),this.dataURI=V;let z=V.length;for(;V.charAt(z-1)=="=";)z--;this.dataStart=V.indexOf(",")+1,this.size=Math.floor(.75*(z-this.dataStart))}async readUint8Array(V,z){const k=new Uint8Array(z),ee=4*Math.floor(V/3),he=atob(this.dataURI.substring(ee+this.dataStart,4*Math.ceil((V+z)/3)+this.dataStart)),xe=V-3*Math.floor(ee/4);for(let be=xe;be<xe+z;be++)k[be-xe]=he.charCodeAt(be);return k}},e.Data64URIWriter=class extends D{constructor(V){super(),this.data="data:"+(V||"")+";base64,",this.pending=[]}async writeUint8Array(V){super.writeUint8Array(V);let z=0,k=this.pending;const ee=this.pending.length;for(this.pending="",z=0;z<3*Math.floor((ee+V.length)/3)-ee;z++)k+=String.fromCharCode(V[z]);for(;z<V.length;z++)this.pending+=String.fromCharCode(V[z]);k.length>2?this.data+=btoa(k):this.pending=k}getData(){return this.data+btoa(this.pending)}},e.ERR_ABORT=I,e.ERR_BAD_FORMAT=ge,e.ERR_CENTRAL_DIRECTORY_NOT_FOUND=de,e.ERR_ENCRYPTED=lt,e.ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND=tt,e.ERR_EOCDR_NOT_FOUND=ot,e.ERR_EOCDR_ZIP64_NOT_FOUND=it,e.ERR_EXTRAFIELD_ZIP64_NOT_FOUND=at,e.ERR_HTTP_RANGE=N,e.ERR_INVALID_PASSWORD=K,e.ERR_INVALID_SIGNATURE=bi,e.ERR_LOCAL_FILE_HEADER_NOT_FOUND=Ie,e.ERR_UNSUPPORTED_COMPRESSION=kt,e.ERR_UNSUPPORTED_ENCRYPTION=xt,e.HttpRangeReader=class extends te{constructor(V,z={}){z.useRangeHeader=!0,super(V,z)}},e.HttpReader=te,e.Reader=W,e.TextReader=class extends W{constructor(V){super(),this.blobReader=new C(new Blob([V],{type:x}))}async init(){super.init(),this.blobReader.init(),this.size=this.blobReader.size}async readUint8Array(V,z){return this.blobReader.readUint8Array(V,z)}},e.TextWriter=class extends D{constructor(V){super(),this.encoding=V,this.blob=new Blob([],{type:x})}async writeUint8Array(V){super.writeUint8Array(V),this.blob=new Blob([this.blob,V.buffer],{type:x})}getData(){const V=new FileReader;return new Promise((z,k)=>{V.onload=ee=>z(ee.target.result),V.onerror=()=>k(V.error),V.readAsText(this.blob,this.encoding)})}},e.Uint8ArrayReader=class extends W{constructor(V){super(),this.array=V,this.size=V.length}async readUint8Array(V,z){return this.array.slice(V,V+z)}},e.Uint8ArrayWriter=class extends D{constructor(){super(),this.array=new Uint8Array(0)}async writeUint8Array(V){super.writeUint8Array(V);const z=this.array;this.array=new Uint8Array(z.length+V.length),this.array.set(z),this.array.set(V,z.length)}getData(){return this.array}},e.Writer=D,e.ZipReader=class{constructor(V,z={}){Object.assign(this,{reader:V,options:z,config:A})}async getEntries(V={}){const z=this,k=z.reader;if(k.initialized||await k.init(),k.size<22)throw new Error(ge);const ee=await async function(ae,Re,ie,le,Ae){const ke=new Uint8Array(4);return function(Ye,Ve,Ee){Ye.setUint32(0,101010256,!0)}(tn(ke)),await et(22)||await et(Math.min(1048582,ie));async function et(Ye){const Ve=ie-Ye,Ee=await jn(ae,Ve,Ye);for(let qe=Ee.length-22;qe>=0;qe--)if(Ee[qe]==ke[0]&&Ee[qe+1]==ke[1]&&Ee[qe+2]==ke[2]&&Ee[qe+3]==ke[3])return{offset:Ve+qe,buffer:Ee.slice(qe,qe+22).buffer}}}(k,0,k.size);if(!ee)throw new Error(ot);const he=tn(ee);let xe=Ot(he,12),be=Ot(he,16),Be=cn(he,8),Qe=0;if(be==_e||Be==65535){const ae=tn(await jn(k,ee.offset-20,20));if(Ot(ae,0)!=117853008)throw new Error(it);be=Si(ae,8);let Re=await jn(k,be,56),ie=tn(Re);const le=ee.offset-20-56;if(Ot(ie,0)!=re&&be!=le){const Ae=be;be=le,Qe=be-Ae,Re=await jn(k,be,56),ie=tn(Re)}if(Ot(ie,0)!=re)throw new Error(tt);Be=Si(ie,24),xe=Ot(ae,4),be-=Si(ie,40)}if(be<0||be>=k.size)throw new Error(ge);let Ue=0,Ze=await jn(k,be,k.size-be),dt=tn(Ze);const wt=ee.offset-xe;if(Ot(dt,Ue)!=J&&be!=wt){const ae=be;be=wt,Qe=be-ae,Ze=await jn(k,be,k.size-be),dt=tn(Ze)}if(be<0||be>=k.size)throw new Error(ge);const Tt=[];for(let ae=0;ae<Be;ae++){const Re=new gt(k,z.config,z.options);if(Ot(dt,Ue)!=J)throw new Error(de);ri(Re,dt,Ue+6);const ie=!!Re.bitFlag.languageEncodingFlag,le=Ue+46,Ae=le+Re.filenameLength,ke=Ae+Re.extraFieldLength,et=cn(dt,Ue+4),Ye=(0&et)==0;Object.assign(Re,{versionMadeBy:et,msDosCompatible:Ye,compressedSize:0,uncompressedSize:0,commentLength:cn(dt,Ue+32),directory:Ye&&(16&Sn(dt,Ue+38))==16,offset:Ot(dt,Ue+42)+Qe,internalFileAttribute:Ot(dt,Ue+34),externalFileAttribute:Ot(dt,Ue+38),rawFilename:Ze.subarray(le,Ae),filenameUTF8:ie,commentUTF8:ie,rawExtraField:Ze.subarray(Ae,ke)});const Ve=ke+Re.commentLength;Re.rawComment=Ze.subarray(ke,Ve),Re.filename=wi(Re.rawFilename,Re.filenameUTF8?Kt:si(z,V,"filenameEncoding")),Re.comment=wi(Re.rawComment,Re.commentUTF8?Kt:si(z,V,"commentEncoding")),!Re.directory&&Re.filename.endsWith("/")&&(Re.directory=!0),Gt(Re,Re,dt,Ue+6);const Ee=new Me(Re);if(Ee.getData=(qe,ht)=>Re.getData(qe,Ee,ht),Tt.push(Ee),Ue=Ve,V.onprogress)try{V.onprogress(ae+1,Be,new Me(Re))}catch{}}return Tt}async close(){}},e.configure=E,e.getMimeType=function(){return"application/octet-stream"},Object.defineProperty(e,"__esModule",{value:!0})}),function e(i,n,r){function o(d,c){if(!n[d]){if(!i[d]){var h=typeof kn=="function"&&kn;if(!c&&h)return h(d,!0);if(a)return a(d,!0);var s=new Error("Cannot find module '"+d+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[d]={exports:{}};i[d][0].call(f.exports,function(p){return o(i[d][1][p]||p)},f,f.exports,e,i,n,r)}return n[d].exports}for(var a=typeof kn=="function"&&kn,l=0;l<r.length;l++)o(r[l]);return o}({1:[function(e,i,n){n.byteLength=function(f){var p=h(f),v=p[0],g=p[1];return 3*(v+g)/4-g},n.toByteArray=function(f){var p,v,g=h(f),m=g[0],y=g[1],_=new a(function(A,E,I){return 3*(E+I)/4-I}(0,m,y)),b=0,w=y>0?m-4:m;for(v=0;v<w;v+=4)p=o[f.charCodeAt(v)]<<18|o[f.charCodeAt(v+1)]<<12|o[f.charCodeAt(v+2)]<<6|o[f.charCodeAt(v+3)],_[b++]=p>>16&255,_[b++]=p>>8&255,_[b++]=255&p;return y===2&&(p=o[f.charCodeAt(v)]<<2|o[f.charCodeAt(v+1)]>>4,_[b++]=255&p),y===1&&(p=o[f.charCodeAt(v)]<<10|o[f.charCodeAt(v+1)]<<4|o[f.charCodeAt(v+2)]>>2,_[b++]=p>>8&255,_[b++]=255&p),_},n.fromByteArray=function(f){for(var p,v=f.length,g=v%3,m=[],y=16383,_=0,b=v-g;_<b;_+=y)m.push(s(f,_,_+y>b?b:_+y));return g===1?(p=f[v-1],m.push(r[p>>2]+r[p<<4&63]+"==")):g===2&&(p=(f[v-2]<<8)+f[v-1],m.push(r[p>>10]+r[p>>4&63]+r[p<<2&63]+"=")),m.join("")};for(var r=[],o=[],a=typeof Uint8Array<"u"?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,c=l.length;d<c;++d)r[d]=l[d],o[l.charCodeAt(d)]=d;function h(f){var p=f.length;if(p%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");return v===-1&&(v=p),[v,v===p?0:4-v%4]}function s(f,p,v){for(var g,m,y=[],_=p;_<v;_+=3)g=(f[_]<<16&16711680)+(f[_+1]<<8&65280)+(255&f[_+2]),y.push(r[(m=g)>>18&63]+r[m>>12&63]+r[m>>6&63]+r[63&m]);return y.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},{}],2:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/try-to-string"),a=TypeError;i.exports=function(l){if(r(l))return l;throw a(o(l)+" is not a function")}},{"../internals/is-callable":56,"../internals/try-to-string":108}],3:[function(e,i,n){var r=e("../internals/is-callable"),o=String,a=TypeError;i.exports=function(l){if(typeof l=="object"||r(l))return l;throw a("Can't set "+o(l)+" as a prototype")}},{"../internals/is-callable":56}],4:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/object-create"),a=e("../internals/object-define-property").f,l=r("unscopables"),d=Array.prototype;d[l]==null&&a(d,l,{configurable:!0,value:o(null)}),i.exports=function(c){d[l][c]=!0}},{"../internals/object-create":72,"../internals/object-define-property":74,"../internals/well-known-symbol":113}],5:[function(e,i,n){var r=e("../internals/string-multibyte").charAt;i.exports=function(o,a,l){return a+(l?r(o,a).length:1)}},{"../internals/string-multibyte":97}],6:[function(e,i,n){var r=e("../internals/object-is-prototype-of"),o=TypeError;i.exports=function(a,l){if(r(l,a))return a;throw o("Incorrect invocation")}},{"../internals/object-is-prototype-of":79}],7:[function(e,i,n){var r=e("../internals/is-object"),o=String,a=TypeError;i.exports=function(l){if(r(l))return l;throw a(o(l)+" is not an object")}},{"../internals/is-object":59}],8:[function(e,i,n){var r=e("../internals/function-bind-context"),o=e("../internals/function-call"),a=e("../internals/to-object"),l=e("../internals/call-with-safe-iteration-closing"),d=e("../internals/is-array-iterator-method"),c=e("../internals/is-constructor"),h=e("../internals/length-of-array-like"),s=e("../internals/create-property"),f=e("../internals/get-iterator"),p=e("../internals/get-iterator-method"),v=Array;i.exports=function(g){var m=a(g),y=c(this),_=arguments.length,b=_>1?arguments[1]:void 0,w=b!==void 0;w&&(b=r(b,_>2?arguments[2]:void 0));var A,E,I,S,T,U,N=p(m),x=0;if(!N||this===v&&d(N))for(A=h(m),E=y?new this(A):v(A);A>x;x++)U=w?b(m[x],x):m[x],s(E,x,U);else for(T=(S=f(m,N)).next,E=y?new this:[];!(I=o(T,S)).done;x++)U=w?l(S,b,[I.value,x],!0):I.value,s(E,x,U);return E.length=x,E}},{"../internals/call-with-safe-iteration-closing":12,"../internals/create-property":20,"../internals/function-bind-context":37,"../internals/function-call":39,"../internals/get-iterator":44,"../internals/get-iterator-method":43,"../internals/is-array-iterator-method":55,"../internals/is-constructor":57,"../internals/length-of-array-like":65,"../internals/to-object":103}],9:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/to-absolute-index"),a=e("../internals/length-of-array-like"),l=function(d){return function(c,h,s){var f,p=r(c),v=a(p),g=o(s,v);if(d&&h!=h){for(;v>g;)if((f=p[g++])!=f)return!0}else for(;v>g;g++)if((d||g in p)&&p[g]===h)return d||g||0;return!d&&-1}};i.exports={includes:l(!0),indexOf:l(!1)}},{"../internals/length-of-array-like":65,"../internals/to-absolute-index":99,"../internals/to-indexed-object":100}],10:[function(e,i,n){var r=e("../internals/to-absolute-index"),o=e("../internals/length-of-array-like"),a=e("../internals/create-property"),l=Array,d=Math.max;i.exports=function(c,h,s){for(var f=o(c),p=r(h,f),v=r(s===void 0?f:s,f),g=l(d(v-p,0)),m=0;p<v;p++,m++)a(g,m,c[p]);return g.length=m,g}},{"../internals/create-property":20,"../internals/length-of-array-like":65,"../internals/to-absolute-index":99}],11:[function(e,i,n){var r=e("../internals/array-slice-simple"),o=Math.floor,a=function(c,h){var s=c.length,f=o(s/2);return s<8?l(c,h):d(c,a(r(c,0,f),h),a(r(c,f),h),h)},l=function(c,h){for(var s,f,p=c.length,v=1;v<p;){for(f=v,s=c[v];f&&h(c[f-1],s)>0;)c[f]=c[--f];f!==v++&&(c[f]=s)}return c},d=function(c,h,s,f){for(var p=h.length,v=s.length,g=0,m=0;g<p||m<v;)c[g+m]=g<p&&m<v?f(h[g],s[m])<=0?h[g++]:s[m++]:g<p?h[g++]:s[m++];return c};i.exports=a},{"../internals/array-slice-simple":10}],12:[function(e,i,n){var r=e("../internals/an-object"),o=e("../internals/iterator-close");i.exports=function(a,l,d,c){try{return c?l(r(d)[0],d[1]):l(d)}catch(h){o(a,"throw",h)}}},{"../internals/an-object":7,"../internals/iterator-close":62}],13:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=r({}.toString),a=r("".slice);i.exports=function(l){return a(o(l),8,-1)}},{"../internals/function-uncurry-this":41}],14:[function(e,i,n){var r=e("../internals/to-string-tag-support"),o=e("../internals/is-callable"),a=e("../internals/classof-raw"),l=e("../internals/well-known-symbol")("toStringTag"),d=Object,c=a(function(){return arguments}())=="Arguments";i.exports=r?a:function(h){var s,f,p;return h===void 0?"Undefined":h===null?"Null":typeof(f=function(v,g){try{return v[g]}catch{}}(s=d(h),l))=="string"?f:c?a(s):(p=a(s))=="Object"&&o(s.callee)?"Arguments":p}},{"../internals/classof-raw":13,"../internals/is-callable":56,"../internals/to-string-tag-support":106,"../internals/well-known-symbol":113}],15:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/own-keys"),a=e("../internals/object-get-own-property-descriptor"),l=e("../internals/object-define-property");i.exports=function(d,c,h){for(var s=o(c),f=l.f,p=a.f,v=0;v<s.length;v++){var g=s[v];r(d,g)||h&&r(h,g)||f(d,g,p(c,g))}}},{"../internals/has-own-property":48,"../internals/object-define-property":74,"../internals/object-get-own-property-descriptor":75,"../internals/own-keys":85}],16:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},{"../internals/fails":34}],17:[function(e,i,n){var r=e("../internals/iterators-core").IteratorPrototype,o=e("../internals/object-create"),a=e("../internals/create-property-descriptor"),l=e("../internals/set-to-string-tag"),d=e("../internals/iterators"),c=function(){return this};i.exports=function(h,s,f,p){var v=s+" Iterator";return h.prototype=o(r,{next:a(+!p,f)}),l(h,v,!1,!0),d[v]=c,h}},{"../internals/create-property-descriptor":19,"../internals/iterators":64,"../internals/iterators-core":63,"../internals/object-create":72,"../internals/set-to-string-tag":93}],18:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=r?function(l,d,c){return o.f(l,d,a(1,c))}:function(l,d,c){return l[d]=c,l}},{"../internals/create-property-descriptor":19,"../internals/descriptors":26,"../internals/object-define-property":74}],19:[function(e,i,n){i.exports=function(r,o){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:o}}},{}],20:[function(e,i,n){var r=e("../internals/to-property-key"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=function(l,d,c){var h=r(d);h in l?o.f(l,h,a(0,c)):l[h]=c}},{"../internals/create-property-descriptor":19,"../internals/object-define-property":74,"../internals/to-property-key":105}],21:[function(e,i,n){var r=e("../internals/make-built-in"),o=e("../internals/object-define-property");i.exports=function(a,l,d){return d.get&&r(d.get,l,{getter:!0}),d.set&&r(d.set,l,{setter:!0}),o.f(a,l,d)}},{"../internals/make-built-in":66,"../internals/object-define-property":74}],22:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/object-define-property"),a=e("../internals/make-built-in"),l=e("../internals/define-global-property");i.exports=function(d,c,h,s){s||(s={});var f=s.enumerable,p=s.name!==void 0?s.name:c;if(r(h)&&a(h,p,s),s.global)f?d[c]=h:l(c,h);else{try{s.unsafe?d[c]&&(f=!0):delete d[c]}catch{}f?d[c]=h:o.f(d,c,{value:h,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return d}},{"../internals/define-global-property":24,"../internals/is-callable":56,"../internals/make-built-in":66,"../internals/object-define-property":74}],23:[function(e,i,n){var r=e("../internals/define-built-in");i.exports=function(o,a,l){for(var d in a)r(o,d,a[d],l);return o}},{"../internals/define-built-in":22}],24:[function(e,i,n){var r=e("../internals/global"),o=Object.defineProperty;i.exports=function(a,l){try{o(r,a,{value:l,configurable:!0,writable:!0})}catch{r[a]=l}return l}},{"../internals/global":47}],25:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/function-call"),a=e("../internals/is-pure"),l=e("../internals/function-name"),d=e("../internals/is-callable"),c=e("../internals/create-iterator-constructor"),h=e("../internals/object-get-prototype-of"),s=e("../internals/object-set-prototype-of"),f=e("../internals/set-to-string-tag"),p=e("../internals/create-non-enumerable-property"),v=e("../internals/define-built-in"),g=e("../internals/well-known-symbol"),m=e("../internals/iterators"),y=e("../internals/iterators-core"),_=l.PROPER,b=l.CONFIGURABLE,w=y.IteratorPrototype,A=y.BUGGY_SAFARI_ITERATORS,E=g("iterator"),I="keys",S="values",T="entries",U=function(){return this};i.exports=function(N,x,M,P,L,F,q){c(M,x,P);var j,W,D,C=function(te){if(te===L&&Y)return Y;if(!A&&te in B)return B[te];switch(te){case I:case S:case T:return function(){return new M(this,te)}}return function(){return new M(this)}},R=x+" Iterator",O=!1,B=N.prototype,G=B[E]||B["@@iterator"]||L&&B[L],Y=!A&&G||C(L),H=x=="Array"&&B.entries||G;if(H&&(j=h(H.call(new N)))!==Object.prototype&&j.next&&(a||h(j)===w||(s?s(j,w):d(j[E])||v(j,E,U)),f(j,R,!0,!0),a&&(m[R]=U)),_&&L==S&&G&&G.name!==S&&(!a&&b?p(B,"name",S):(O=!0,Y=function(){return o(G,this)})),L)if(W={values:C(S),keys:F?Y:C(I),entries:C(T)},q)for(D in W)(A||O||!(D in B))&&v(B,D,W[D]);else r({target:x,proto:!0,forced:A||O},W);return a&&!q||B[E]===Y||v(B,E,Y,{name:L}),m[x]=Y,W}},{"../internals/create-iterator-constructor":17,"../internals/create-non-enumerable-property":18,"../internals/define-built-in":22,"../internals/export":33,"../internals/function-call":39,"../internals/function-name":40,"../internals/is-callable":56,"../internals/is-pure":60,"../internals/iterators":64,"../internals/iterators-core":63,"../internals/object-get-prototype-of":78,"../internals/object-set-prototype-of":83,"../internals/set-to-string-tag":93,"../internals/well-known-symbol":113}],26:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},{"../internals/fails":34}],27:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-object"),a=r.document,l=o(a)&&o(a.createElement);i.exports=function(d){return l?a.createElement(d):{}}},{"../internals/global":47,"../internals/is-object":59}],28:[function(e,i,n){i.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},{}],29:[function(e,i,n){var r=e("../internals/document-create-element")("span").classList,o=r&&r.constructor&&r.constructor.prototype;i.exports=o===Object.prototype?void 0:o},{"../internals/document-create-element":27}],30:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("navigator","userAgent")||""},{"../internals/get-built-in":42}],31:[function(e,i,n){var r,o,a=e("../internals/global"),l=e("../internals/engine-user-agent"),d=a.process,c=a.Deno,h=d&&d.versions||c&&c.version,s=h&&h.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&l&&(!(r=l.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=l.match(/Chrome\/(\d+)/))&&(o=+r[1]),i.exports=o},{"../internals/engine-user-agent":30,"../internals/global":47}],32:[function(e,i,n){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],33:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/object-get-own-property-descriptor").f,a=e("../internals/create-non-enumerable-property"),l=e("../internals/define-built-in"),d=e("../internals/define-global-property"),c=e("../internals/copy-constructor-properties"),h=e("../internals/is-forced");i.exports=function(s,f){var p,v,g,m,y,_=s.target,b=s.global,w=s.stat;if(p=b?r:w?r[_]||d(_,{}):(r[_]||{}).prototype)for(v in f){if(m=f[v],g=s.dontCallGetSet?(y=o(p,v))&&y.value:p[v],!h(b?v:_+(w?".":"#")+v,s.forced)&&g!==void 0){if(typeof m==typeof g)continue;c(m,g)}(s.sham||g&&g.sham)&&a(m,"sham",!0),l(p,v,m,s)}}},{"../internals/copy-constructor-properties":15,"../internals/create-non-enumerable-property":18,"../internals/define-built-in":22,"../internals/define-global-property":24,"../internals/global":47,"../internals/is-forced":58,"../internals/object-get-own-property-descriptor":75}],34:[function(e,i,n){i.exports=function(r){try{return!!r()}catch{return!0}}},{}],35:[function(e,i,n){e("../modules/es.regexp.exec");var r=e("../internals/function-uncurry-this"),o=e("../internals/define-built-in"),a=e("../internals/regexp-exec"),l=e("../internals/fails"),d=e("../internals/well-known-symbol"),c=e("../internals/create-non-enumerable-property"),h=d("species"),s=RegExp.prototype;i.exports=function(f,p,v,g){var m=d(f),y=!l(function(){var A={};return A[m]=function(){return 7},""[f](A)!=7}),_=y&&!l(function(){var A=!1,E=/a/;return f==="split"&&((E={}).constructor={},E.constructor[h]=function(){return E},E.flags="",E[m]=/./[m]),E.exec=function(){return A=!0,null},E[m](""),!A});if(!y||!_||v){var b=r(/./[m]),w=p(m,""[f],function(A,E,I,S,T){var U=r(A),N=E.exec;return N===a||N===s.exec?y&&!T?{done:!0,value:b(E,I,S)}:{done:!0,value:U(I,E,S)}:{done:!1}});o(String.prototype,f,w[0]),o(s,m,w[1])}g&&c(s[m],"sham",!0)}},{"../internals/create-non-enumerable-property":18,"../internals/define-built-in":22,"../internals/fails":34,"../internals/function-uncurry-this":41,"../internals/regexp-exec":87,"../internals/well-known-symbol":113,"../modules/es.regexp.exec":115}],36:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.apply,l=o.call;i.exports=typeof Reflect=="object"&&Reflect.apply||(r?l.bind(a):function(){return l.apply(a,arguments)})},{"../internals/function-bind-native":38}],37:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/a-callable"),a=e("../internals/function-bind-native"),l=r(r.bind);i.exports=function(d,c){return o(d),c===void 0?d:a?l(d,c):function(){return d.apply(c,arguments)}}},{"../internals/a-callable":2,"../internals/function-bind-native":38,"../internals/function-uncurry-this":41}],38:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){var o=function(){}.bind();return typeof o!="function"||o.hasOwnProperty("prototype")})},{"../internals/fails":34}],39:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype.call;i.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},{"../internals/function-bind-native":38}],40:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/has-own-property"),a=Function.prototype,l=r&&Object.getOwnPropertyDescriptor,d=o(a,"name"),c=d&&function(){}.name==="something",h=d&&(!r||r&&l(a,"name").configurable);i.exports={EXISTS:d,PROPER:c,CONFIGURABLE:h}},{"../internals/descriptors":26,"../internals/has-own-property":48}],41:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.bind,l=o.call,d=r&&a.bind(l,l);i.exports=r?function(c){return c&&d(c)}:function(c){return c&&function(){return l.apply(c,arguments)}}},{"../internals/function-bind-native":38}],42:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=function(l){return o(l)?l:void 0};i.exports=function(l,d){return arguments.length<2?a(r[l]):r[l]&&r[l][d]}},{"../internals/global":47,"../internals/is-callable":56}],43:[function(e,i,n){var r=e("../internals/classof"),o=e("../internals/get-method"),a=e("../internals/iterators"),l=e("../internals/well-known-symbol")("iterator");i.exports=function(d){if(d!=null)return o(d,l)||o(d,"@@iterator")||a[r(d)]}},{"../internals/classof":14,"../internals/get-method":45,"../internals/iterators":64,"../internals/well-known-symbol":113}],44:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/a-callable"),a=e("../internals/an-object"),l=e("../internals/try-to-string"),d=e("../internals/get-iterator-method"),c=TypeError;i.exports=function(h,s){var f=arguments.length<2?d(h):s;if(o(f))return a(r(f,h));throw c(l(h)+" is not iterable")}},{"../internals/a-callable":2,"../internals/an-object":7,"../internals/function-call":39,"../internals/get-iterator-method":43,"../internals/try-to-string":108}],45:[function(e,i,n){var r=e("../internals/a-callable");i.exports=function(o,a){var l=o[a];return l==null?void 0:r(l)}},{"../internals/a-callable":2}],46:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=Math.floor,l=r("".charAt),d=r("".replace),c=r("".slice),h=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;i.exports=function(f,p,v,g,m,y){var _=v+f.length,b=g.length,w=s;return m!==void 0&&(m=o(m),w=h),d(y,w,function(A,E){var I;switch(l(E,0)){case"$":return"$";case"&":return f;case"`":return c(p,0,v);case"'":return c(p,_);case"<":I=m[c(E,1,-1)];break;default:var S=+E;if(S===0)return A;if(S>b){var T=a(S/10);return T===0?A:T<=b?g[T-1]===void 0?l(E,1):g[T-1]+l(E,1):A}I=g[S-1]}return I===void 0?"":I})}},{"../internals/function-uncurry-this":41,"../internals/to-object":103}],47:[function(e,i,n){(function(r){(function(){var o=function(a){return a&&a.Math==Math&&a};i.exports=o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||o(typeof r=="object"&&r)||function(){return this}()||Function("return this")()}).call(this)}).call(this,typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{})},{}],48:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=r({}.hasOwnProperty);i.exports=Object.hasOwn||function(l,d){return a(o(l),d)}},{"../internals/function-uncurry-this":41,"../internals/to-object":103}],49:[function(e,i,n){i.exports={}},{}],50:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("document","documentElement")},{"../internals/get-built-in":42}],51:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails"),a=e("../internals/document-create-element");i.exports=!r&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},{"../internals/descriptors":26,"../internals/document-create-element":27,"../internals/fails":34}],52:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/classof-raw"),l=Object,d=r("".split);i.exports=o(function(){return!l("z").propertyIsEnumerable(0)})?function(c){return a(c)=="String"?d(c,""):l(c)}:l},{"../internals/classof-raw":13,"../internals/fails":34,"../internals/function-uncurry-this":41}],53:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/is-callable"),a=e("../internals/shared-store"),l=r(Function.toString);o(a.inspectSource)||(a.inspectSource=function(d){return l(d)}),i.exports=a.inspectSource},{"../internals/function-uncurry-this":41,"../internals/is-callable":56,"../internals/shared-store":95}],54:[function(e,i,n){var r,o,a,l=e("../internals/native-weak-map"),d=e("../internals/global"),c=e("../internals/function-uncurry-this"),h=e("../internals/is-object"),s=e("../internals/create-non-enumerable-property"),f=e("../internals/has-own-property"),p=e("../internals/shared-store"),v=e("../internals/shared-key"),g=e("../internals/hidden-keys"),m="Object already initialized",y=d.TypeError,_=d.WeakMap;if(l||p.state){var b=p.state||(p.state=new _),w=c(b.get),A=c(b.has),E=c(b.set);r=function(S,T){if(A(b,S))throw new y(m);return T.facade=S,E(b,S,T),T},o=function(S){return w(b,S)||{}},a=function(S){return A(b,S)}}else{var I=v("state");g[I]=!0,r=function(S,T){if(f(S,I))throw new y(m);return T.facade=S,s(S,I,T),T},o=function(S){return f(S,I)?S[I]:{}},a=function(S){return f(S,I)}}i.exports={set:r,get:o,has:a,enforce:function(S){return a(S)?o(S):r(S,{})},getterFor:function(S){return function(T){var U;if(!h(T)||(U=o(T)).type!==S)throw y("Incompatible receiver, "+S+" required");return U}}}},{"../internals/create-non-enumerable-property":18,"../internals/function-uncurry-this":41,"../internals/global":47,"../internals/has-own-property":48,"../internals/hidden-keys":49,"../internals/is-object":59,"../internals/native-weak-map":70,"../internals/shared-key":94,"../internals/shared-store":95}],55:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/iterators"),a=r("iterator"),l=Array.prototype;i.exports=function(d){return d!==void 0&&(o.Array===d||l[a]===d)}},{"../internals/iterators":64,"../internals/well-known-symbol":113}],56:[function(e,i,n){i.exports=function(r){return typeof r=="function"}},{}],57:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/is-callable"),l=e("../internals/classof"),d=e("../internals/get-built-in"),c=e("../internals/inspect-source"),h=function(){},s=[],f=d("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=r(p.exec),g=!p.exec(h),m=function(_){if(!a(_))return!1;try{return f(h,s,_),!0}catch{return!1}},y=function(_){if(!a(_))return!1;switch(l(_)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return g||!!v(p,c(_))}catch{return!0}};y.sham=!0,i.exports=!f||o(function(){var _;return m(m.call)||!m(Object)||!m(function(){_=!0})||_})?y:m},{"../internals/classof":14,"../internals/fails":34,"../internals/function-uncurry-this":41,"../internals/get-built-in":42,"../internals/inspect-source":53,"../internals/is-callable":56}],58:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=/#|\.prototype\./,l=function(f,p){var v=c[d(f)];return v==s||v!=h&&(o(p)?r(p):!!p)},d=l.normalize=function(f){return String(f).replace(a,".").toLowerCase()},c=l.data={},h=l.NATIVE="N",s=l.POLYFILL="P";i.exports=l},{"../internals/fails":34,"../internals/is-callable":56}],59:[function(e,i,n){var r=e("../internals/is-callable");i.exports=function(o){return typeof o=="object"?o!==null:r(o)}},{"../internals/is-callable":56}],60:[function(e,i,n){i.exports=!1},{}],61:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/is-callable"),a=e("../internals/object-is-prototype-of"),l=e("../internals/use-symbol-as-uid"),d=Object;i.exports=l?function(c){return typeof c=="symbol"}:function(c){var h=r("Symbol");return o(h)&&a(h.prototype,d(c))}},{"../internals/get-built-in":42,"../internals/is-callable":56,"../internals/object-is-prototype-of":79,"../internals/use-symbol-as-uid":110}],62:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/an-object"),a=e("../internals/get-method");i.exports=function(l,d,c){var h,s;o(l);try{if(!(h=a(l,"return"))){if(d==="throw")throw c;return c}h=r(h,l)}catch(f){s=!0,h=f}if(d==="throw")throw c;if(s)throw h;return o(h),c}},{"../internals/an-object":7,"../internals/function-call":39,"../internals/get-method":45}],63:[function(e,i,n){var r,o,a,l=e("../internals/fails"),d=e("../internals/is-callable"),c=e("../internals/object-create"),h=e("../internals/object-get-prototype-of"),s=e("../internals/define-built-in"),f=e("../internals/well-known-symbol"),p=e("../internals/is-pure"),v=f("iterator"),g=!1;[].keys&&("next"in(a=[].keys())?(o=h(h(a)))!==Object.prototype&&(r=o):g=!0),r==null||l(function(){var m={};return r[v].call(m)!==m})?r={}:p&&(r=c(r)),d(r[v])||s(r,v,function(){return this}),i.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},{"../internals/define-built-in":22,"../internals/fails":34,"../internals/is-callable":56,"../internals/is-pure":60,"../internals/object-create":72,"../internals/object-get-prototype-of":78,"../internals/well-known-symbol":113}],64:[function(e,i,n){arguments[4][49][0].apply(n,arguments)},{dup:49}],65:[function(e,i,n){var r=e("../internals/to-length");i.exports=function(o){return r(o.length)}},{"../internals/to-length":102}],66:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=e("../internals/has-own-property"),l=e("../internals/descriptors"),d=e("../internals/function-name").CONFIGURABLE,c=e("../internals/inspect-source"),h=e("../internals/internal-state"),s=h.enforce,f=h.get,p=Object.defineProperty,v=l&&!r(function(){return p(function(){},"length",{value:8}).length!==8}),g=String(String).split("String"),m=i.exports=function(y,_,b){String(_).slice(0,7)==="Symbol("&&(_="["+String(_).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),b&&b.getter&&(_="get "+_),b&&b.setter&&(_="set "+_),(!a(y,"name")||d&&y.name!==_)&&(l?p(y,"name",{value:_,configurable:!0}):y.name=_),v&&b&&a(b,"arity")&&y.length!==b.arity&&p(y,"length",{value:b.arity});try{b&&a(b,"constructor")&&b.constructor?l&&p(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch{}var w=s(y);return a(w,"source")||(w.source=g.join(typeof _=="string"?_:"")),y};Function.prototype.toString=m(function(){return o(this)&&f(this).source||c(this)},"toString")},{"../internals/descriptors":26,"../internals/fails":34,"../internals/function-name":40,"../internals/has-own-property":48,"../internals/inspect-source":53,"../internals/internal-state":54,"../internals/is-callable":56}],67:[function(e,i,n){var r=Math.ceil,o=Math.floor;i.exports=Math.trunc||function(a){var l=+a;return(l>0?o:r)(l)}},{}],68:[function(e,i,n){var r=e("../internals/engine-v8-version"),o=e("../internals/fails");i.exports=!!Object.getOwnPropertySymbols&&!o(function(){var a=Symbol();return!String(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&r&&r<41})},{"../internals/engine-v8-version":31,"../internals/fails":34}],69:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/well-known-symbol"),a=e("../internals/is-pure"),l=o("iterator");i.exports=!r(function(){var d=new URL("b?a=1&b=2&c=3","http://a"),c=d.searchParams,h="";return d.pathname="c%20d",c.forEach(function(s,f){c.delete("b"),h+=f+s}),a&&!d.toJSON||!c.sort||d.href!=="http://a/c%20d?a=1&c=3"||c.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!c[l]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("http://тест").host!=="xn--e1aybc"||new URL("http://a#б").hash!=="#%D0%B1"||h!=="a1c3"||new URL("http://x",void 0).host!=="x"})},{"../internals/fails":34,"../internals/is-pure":60,"../internals/well-known-symbol":113}],70:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=e("../internals/inspect-source"),l=r.WeakMap;i.exports=o(l)&&/native code/.test(a(l))},{"../internals/global":47,"../internals/inspect-source":53,"../internals/is-callable":56}],71:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/function-uncurry-this"),a=e("../internals/function-call"),l=e("../internals/fails"),d=e("../internals/object-keys"),c=e("../internals/object-get-own-property-symbols"),h=e("../internals/object-property-is-enumerable"),s=e("../internals/to-object"),f=e("../internals/indexed-object"),p=Object.assign,v=Object.defineProperty,g=o([].concat);i.exports=!p||l(function(){if(r&&p({b:1},p(v({},"a",{enumerable:!0,get:function(){v(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var m={},y={},_=Symbol(),b="abcdefghijklmnopqrst";return m[_]=7,b.split("").forEach(function(w){y[w]=w}),p({},m)[_]!=7||d(p({},y)).join("")!=b})?function(m,y){for(var _=s(m),b=arguments.length,w=1,A=c.f,E=h.f;b>w;)for(var I,S=f(arguments[w++]),T=A?g(d(S),A(S)):d(S),U=T.length,N=0;U>N;)I=T[N++],r&&!a(E,S,I)||(_[I]=S[I]);return _}:p},{"../internals/descriptors":26,"../internals/fails":34,"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/indexed-object":52,"../internals/object-get-own-property-symbols":77,"../internals/object-keys":81,"../internals/object-property-is-enumerable":82,"../internals/to-object":103}],72:[function(e,i,n){var r,o=e("../internals/an-object"),a=e("../internals/object-define-properties"),l=e("../internals/enum-bug-keys"),d=e("../internals/hidden-keys"),c=e("../internals/html"),h=e("../internals/document-create-element"),s=e("../internals/shared-key"),f=s("IE_PROTO"),p=function(){},v=function(y){return"<script>"+y+"<\/script>"},g=function(y){y.write(v("")),y.close();var _=y.parentWindow.Object;return y=null,_},m=function(){try{r=new ActiveXObject("htmlfile")}catch{}var y,_;m=typeof document<"u"?document.domain&&r?g(r):((_=h("iframe")).style.display="none",c.appendChild(_),_.src="javascript:",(y=_.contentWindow.document).open(),y.write(v("document.F=Object")),y.close(),y.F):g(r);for(var b=l.length;b--;)delete m.prototype[l[b]];return m()};d[f]=!0,i.exports=Object.create||function(y,_){var b;return y!==null?(p.prototype=o(y),b=new p,p.prototype=null,b[f]=y):b=m(),_===void 0?b:a.f(b,_)}},{"../internals/an-object":7,"../internals/document-create-element":27,"../internals/enum-bug-keys":32,"../internals/hidden-keys":49,"../internals/html":50,"../internals/object-define-properties":73,"../internals/shared-key":94}],73:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/v8-prototype-define-bug"),a=e("../internals/object-define-property"),l=e("../internals/an-object"),d=e("../internals/to-indexed-object"),c=e("../internals/object-keys");n.f=r&&!o?Object.defineProperties:function(h,s){l(h);for(var f,p=d(s),v=c(s),g=v.length,m=0;g>m;)a.f(h,f=v[m++],p[f]);return h}},{"../internals/an-object":7,"../internals/descriptors":26,"../internals/object-define-property":74,"../internals/object-keys":81,"../internals/to-indexed-object":100,"../internals/v8-prototype-define-bug":111}],74:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/ie8-dom-define"),a=e("../internals/v8-prototype-define-bug"),l=e("../internals/an-object"),d=e("../internals/to-property-key"),c=TypeError,h=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",v="writable";n.f=r?a?function(g,m,y){if(l(g),m=d(m),l(y),typeof g=="function"&&m==="prototype"&&"value"in y&&v in y&&!y.writable){var _=s(g,m);_&&_.writable&&(g[m]=y.value,y={configurable:p in y?y.configurable:_.configurable,enumerable:f in y?y.enumerable:_.enumerable,writable:!1})}return h(g,m,y)}:h:function(g,m,y){if(l(g),m=d(m),l(y),o)try{return h(g,m,y)}catch{}if("get"in y||"set"in y)throw c("Accessors not supported");return"value"in y&&(g[m]=y.value),g}},{"../internals/an-object":7,"../internals/descriptors":26,"../internals/ie8-dom-define":51,"../internals/to-property-key":105,"../internals/v8-prototype-define-bug":111}],75:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/function-call"),a=e("../internals/object-property-is-enumerable"),l=e("../internals/create-property-descriptor"),d=e("../internals/to-indexed-object"),c=e("../internals/to-property-key"),h=e("../internals/has-own-property"),s=e("../internals/ie8-dom-define"),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(p,v){if(p=d(p),v=c(v),s)try{return f(p,v)}catch{}if(h(p,v))return l(!o(a.f,p,v),p[v])}},{"../internals/create-property-descriptor":19,"../internals/descriptors":26,"../internals/function-call":39,"../internals/has-own-property":48,"../internals/ie8-dom-define":51,"../internals/object-property-is-enumerable":82,"../internals/to-indexed-object":100,"../internals/to-property-key":105}],76:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(a){return r(a,o)}},{"../internals/enum-bug-keys":32,"../internals/object-keys-internal":80}],77:[function(e,i,n){n.f=Object.getOwnPropertySymbols},{}],78:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/is-callable"),a=e("../internals/to-object"),l=e("../internals/shared-key"),d=e("../internals/correct-prototype-getter"),c=l("IE_PROTO"),h=Object,s=h.prototype;i.exports=d?h.getPrototypeOf:function(f){var p=a(f);if(r(p,c))return p[c];var v=p.constructor;return o(v)&&p instanceof v?v.prototype:p instanceof h?s:null}},{"../internals/correct-prototype-getter":16,"../internals/has-own-property":48,"../internals/is-callable":56,"../internals/shared-key":94,"../internals/to-object":103}],79:[function(e,i,n){var r=e("../internals/function-uncurry-this");i.exports=r({}.isPrototypeOf)},{"../internals/function-uncurry-this":41}],80:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/has-own-property"),a=e("../internals/to-indexed-object"),l=e("../internals/array-includes").indexOf,d=e("../internals/hidden-keys"),c=r([].push);i.exports=function(h,s){var f,p=a(h),v=0,g=[];for(f in p)!o(d,f)&&o(p,f)&&c(g,f);for(;s.length>v;)o(p,f=s[v++])&&(~l(g,f)||c(g,f));return g}},{"../internals/array-includes":9,"../internals/function-uncurry-this":41,"../internals/has-own-property":48,"../internals/hidden-keys":49,"../internals/to-indexed-object":100}],81:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys");i.exports=Object.keys||function(a){return r(a,o)}},{"../internals/enum-bug-keys":32,"../internals/object-keys-internal":80}],82:[function(e,i,n){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);n.f=a?function(l){var d=o(this,l);return!!d&&d.enumerable}:r},{}],83:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/an-object"),a=e("../internals/a-possible-prototype");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var l,d=!1,c={};try{(l=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(c,[]),d=c instanceof Array}catch{}return function(h,s){return o(h),a(s),d?l(h,s):h.__proto__=s,h}}():void 0)},{"../internals/a-possible-prototype":3,"../internals/an-object":7,"../internals/function-uncurry-this":41}],84:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-callable"),a=e("../internals/is-object"),l=TypeError;i.exports=function(d,c){var h,s;if(c==="string"&&o(h=d.toString)&&!a(s=r(h,d))||o(h=d.valueOf)&&!a(s=r(h,d))||c!=="string"&&o(h=d.toString)&&!a(s=r(h,d)))return s;throw l("Can't convert object to primitive value")}},{"../internals/function-call":39,"../internals/is-callable":56,"../internals/is-object":59}],85:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/function-uncurry-this"),a=e("../internals/object-get-own-property-names"),l=e("../internals/object-get-own-property-symbols"),d=e("../internals/an-object"),c=o([].concat);i.exports=r("Reflect","ownKeys")||function(h){var s=a.f(d(h)),f=l.f;return f?c(s,f(h)):s}},{"../internals/an-object":7,"../internals/function-uncurry-this":41,"../internals/get-built-in":42,"../internals/object-get-own-property-names":76,"../internals/object-get-own-property-symbols":77}],86:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/an-object"),a=e("../internals/is-callable"),l=e("../internals/classof-raw"),d=e("../internals/regexp-exec"),c=TypeError;i.exports=function(h,s){var f=h.exec;if(a(f)){var p=r(f,h,s);return p!==null&&o(p),p}if(l(h)==="RegExp")return r(d,h,s);throw c("RegExp#exec called on incompatible receiver")}},{"../internals/an-object":7,"../internals/classof-raw":13,"../internals/function-call":39,"../internals/is-callable":56,"../internals/regexp-exec":87}],87:[function(e,i,n){var r,o,a=e("../internals/function-call"),l=e("../internals/function-uncurry-this"),d=e("../internals/to-string"),c=e("../internals/regexp-flags"),h=e("../internals/regexp-sticky-helpers"),s=e("../internals/shared"),f=e("../internals/object-create"),p=e("../internals/internal-state").get,v=e("../internals/regexp-unsupported-dot-all"),g=e("../internals/regexp-unsupported-ncg"),m=s("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,_=y,b=l("".charAt),w=l("".indexOf),A=l("".replace),E=l("".slice),I=(o=/b*/g,a(y,r=/a/,"a"),a(y,o,"a"),r.lastIndex!==0||o.lastIndex!==0),S=h.BROKEN_CARET,T=/()??/.exec("")[1]!==void 0;(I||T||S||v||g)&&(_=function(U){var N,x,M,P,L,F,q,j=this,W=p(j),D=d(U),C=W.raw;if(C)return C.lastIndex=j.lastIndex,N=a(_,C,D),j.lastIndex=C.lastIndex,N;var R=W.groups,O=S&&j.sticky,B=a(c,j),G=j.source,Y=0,H=D;if(O&&(B=A(B,"y",""),w(B,"g")===-1&&(B+="g"),H=E(D,j.lastIndex),j.lastIndex>0&&(!j.multiline||j.multiline&&b(D,j.lastIndex-1)!==`
`)&&(G="(?: "+G+")",H=" "+H,Y++),x=new RegExp("^(?:"+G+")",B)),T&&(x=new RegExp("^"+G+"$(?!\\s)",B)),I&&(M=j.lastIndex),P=a(y,O?x:j,H),O?P?(P.input=E(P.input,Y),P[0]=E(P[0],Y),P.index=j.lastIndex,j.lastIndex+=P[0].length):j.lastIndex=0:I&&P&&(j.lastIndex=j.global?P.index+P[0].length:M),T&&P&&P.length>1&&a(m,P[0],x,function(){for(L=1;L<arguments.length-2;L++)arguments[L]===void 0&&(P[L]=void 0)}),P&&R)for(P.groups=F=f(null),L=0;L<R.length;L++)F[(q=R[L])[0]]=P[q[1]];return P}),i.exports=_},{"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/internal-state":54,"../internals/object-create":72,"../internals/regexp-flags":88,"../internals/regexp-sticky-helpers":89,"../internals/regexp-unsupported-dot-all":90,"../internals/regexp-unsupported-ncg":91,"../internals/shared":96,"../internals/to-string":107}],88:[function(e,i,n){var r=e("../internals/an-object");i.exports=function(){var o=r(this),a="";return o.hasIndices&&(a+="d"),o.global&&(a+="g"),o.ignoreCase&&(a+="i"),o.multiline&&(a+="m"),o.dotAll&&(a+="s"),o.unicode&&(a+="u"),o.unicodeSets&&(a+="v"),o.sticky&&(a+="y"),a}},{"../internals/an-object":7}],89:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp,a=r(function(){var c=o("a","y");return c.lastIndex=2,c.exec("abcd")!=null}),l=a||r(function(){return!o("a","y").sticky}),d=a||r(function(){var c=o("^r","gy");return c.lastIndex=2,c.exec("str")!=null});i.exports={BROKEN_CARET:d,MISSED_STICKY:l,UNSUPPORTED_Y:a}},{"../internals/fails":34,"../internals/global":47}],90:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o(".","s");return!(a.dotAll&&a.exec(`
`)&&a.flags==="s")})},{"../internals/fails":34,"../internals/global":47}],91:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o("(?<a>b)","g");return a.exec("b").groups.a!=="b"||"b".replace(a,"$<a>c")!=="bc"})},{"../internals/fails":34,"../internals/global":47}],92:[function(e,i,n){var r=TypeError;i.exports=function(o){if(o==null)throw r("Can't call method on "+o);return o}},{}],93:[function(e,i,n){var r=e("../internals/object-define-property").f,o=e("../internals/has-own-property"),a=e("../internals/well-known-symbol")("toStringTag");i.exports=function(l,d,c){l&&!c&&(l=l.prototype),l&&!o(l,a)&&r(l,a,{configurable:!0,value:d})}},{"../internals/has-own-property":48,"../internals/object-define-property":74,"../internals/well-known-symbol":113}],94:[function(e,i,n){var r=e("../internals/shared"),o=e("../internals/uid"),a=r("keys");i.exports=function(l){return a[l]||(a[l]=o(l))}},{"../internals/shared":96,"../internals/uid":109}],95:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/define-global-property"),a="__core-js_shared__",l=r[a]||o(a,{});i.exports=l},{"../internals/define-global-property":24,"../internals/global":47}],96:[function(e,i,n){var r=e("../internals/is-pure"),o=e("../internals/shared-store");(i.exports=function(a,l){return o[a]||(o[a]=l!==void 0?l:{})})("versions",[]).push({version:"3.23.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",source:"https://github.com/zloirock/core-js"})},{"../internals/is-pure":60,"../internals/shared-store":95}],97:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-integer-or-infinity"),a=e("../internals/to-string"),l=e("../internals/require-object-coercible"),d=r("".charAt),c=r("".charCodeAt),h=r("".slice),s=function(f){return function(p,v){var g,m,y=a(l(p)),_=o(v),b=y.length;return _<0||_>=b?f?"":void 0:(g=c(y,_))<55296||g>56319||_+1===b||(m=c(y,_+1))<56320||m>57343?f?d(y,_):g:f?h(y,_,_+2):m-56320+(g-55296<<10)+65536}};i.exports={codeAt:s(!1),charAt:s(!0)}},{"../internals/function-uncurry-this":41,"../internals/require-object-coercible":92,"../internals/to-integer-or-infinity":101,"../internals/to-string":107}],98:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=2147483647,a=/[^\0-\u007E]/,l=/[.\u3002\uFF0E\uFF61]/g,d="Overflow: input needs wider integers to process",c=RangeError,h=r(l.exec),s=Math.floor,f=String.fromCharCode,p=r("".charCodeAt),v=r([].join),g=r([].push),m=r("".replace),y=r("".split),_=r("".toLowerCase),b=function(E){return E+22+75*(E<26)},w=function(E,I,S){var T=0;for(E=S?s(E/700):E>>1,E+=s(E/I);E>455;)E=s(E/35),T+=36;return s(T+36*E/(E+38))},A=function(E){var I=[];E=function(O){for(var B=[],G=0,Y=O.length;G<Y;){var H=p(O,G++);if(H>=55296&&H<=56319&&G<Y){var te=p(O,G++);(64512&te)==56320?g(B,((1023&H)<<10)+(1023&te)+65536):(g(B,H),G--)}else g(B,H)}return B}(E);var S,T,U=E.length,N=128,x=0,M=72;for(S=0;S<E.length;S++)(T=E[S])<128&&g(I,f(T));var P=I.length,L=P;for(P&&g(I,"-");L<U;){var F=o;for(S=0;S<E.length;S++)(T=E[S])>=N&&T<F&&(F=T);var q=L+1;if(F-N>s((o-x)/q))throw c(d);for(x+=(F-N)*q,N=F,S=0;S<E.length;S++){if((T=E[S])<N&&++x>o)throw c(d);if(T==N){for(var j=x,W=36;;){var D=W<=M?1:W>=M+26?26:W-M;if(j<D)break;var C=j-D,R=36-D;g(I,f(b(D+C%R))),j=s(C/R),W+=36}g(I,f(b(j))),M=w(x,q,L==P),x=0,L++}}x++,N++}return v(I,"")};i.exports=function(E){var I,S,T=[],U=y(m(_(E),l,"."),".");for(I=0;I<U.length;I++)S=U[I],g(T,h(a,S)?"xn--"+A(S):S);return v(T,".")}},{"../internals/function-uncurry-this":41}],99:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.max,a=Math.min;i.exports=function(l,d){var c=r(l);return c<0?o(c+d,0):a(c,d)}},{"../internals/to-integer-or-infinity":101}],100:[function(e,i,n){var r=e("../internals/indexed-object"),o=e("../internals/require-object-coercible");i.exports=function(a){return r(o(a))}},{"../internals/indexed-object":52,"../internals/require-object-coercible":92}],101:[function(e,i,n){var r=e("../internals/math-trunc");i.exports=function(o){var a=+o;return a!=a||a===0?0:r(a)}},{"../internals/math-trunc":67}],102:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.min;i.exports=function(a){return a>0?o(r(a),9007199254740991):0}},{"../internals/to-integer-or-infinity":101}],103:[function(e,i,n){var r=e("../internals/require-object-coercible"),o=Object;i.exports=function(a){return o(r(a))}},{"../internals/require-object-coercible":92}],104:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-object"),a=e("../internals/is-symbol"),l=e("../internals/get-method"),d=e("../internals/ordinary-to-primitive"),c=e("../internals/well-known-symbol"),h=TypeError,s=c("toPrimitive");i.exports=function(f,p){if(!o(f)||a(f))return f;var v,g=l(f,s);if(g){if(p===void 0&&(p="default"),v=r(g,f,p),!o(v)||a(v))return v;throw h("Can't convert object to primitive value")}return p===void 0&&(p="number"),d(f,p)}},{"../internals/function-call":39,"../internals/get-method":45,"../internals/is-object":59,"../internals/is-symbol":61,"../internals/ordinary-to-primitive":84,"../internals/well-known-symbol":113}],105:[function(e,i,n){var r=e("../internals/to-primitive"),o=e("../internals/is-symbol");i.exports=function(a){var l=r(a,"string");return o(l)?l:l+""}},{"../internals/is-symbol":61,"../internals/to-primitive":104}],106:[function(e,i,n){var r={};r[e("../internals/well-known-symbol")("toStringTag")]="z",i.exports=String(r)==="[object z]"},{"../internals/well-known-symbol":113}],107:[function(e,i,n){var r=e("../internals/classof"),o=String;i.exports=function(a){if(r(a)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return o(a)}},{"../internals/classof":14}],108:[function(e,i,n){var r=String;i.exports=function(o){try{return r(o)}catch{return"Object"}}},{}],109:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=0,a=Math.random(),l=r(1 .toString);i.exports=function(d){return"Symbol("+(d===void 0?"":d)+")_"+l(++o+a,36)}},{"../internals/function-uncurry-this":41}],110:[function(e,i,n){var r=e("../internals/native-symbol");i.exports=r&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},{"../internals/native-symbol":68}],111:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails");i.exports=r&&o(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},{"../internals/descriptors":26,"../internals/fails":34}],112:[function(e,i,n){var r=TypeError;i.exports=function(o,a){if(o<a)throw r("Not enough arguments");return o}},{}],113:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/shared"),a=e("../internals/has-own-property"),l=e("../internals/uid"),d=e("../internals/native-symbol"),c=e("../internals/use-symbol-as-uid"),h=o("wks"),s=r.Symbol,f=s&&s.for,p=c?s:s&&s.withoutSetter||l;i.exports=function(v){if(!a(h,v)||!d&&typeof h[v]!="string"){var g="Symbol."+v;d&&a(s,v)?h[v]=s[v]:h[v]=c&&f?f(g):p(g)}return h[v]}},{"../internals/global":47,"../internals/has-own-property":48,"../internals/native-symbol":68,"../internals/shared":96,"../internals/uid":109,"../internals/use-symbol-as-uid":110}],114:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/add-to-unscopables"),a=e("../internals/iterators"),l=e("../internals/internal-state"),d=e("../internals/object-define-property").f,c=e("../internals/define-iterator"),h=e("../internals/is-pure"),s=e("../internals/descriptors"),f="Array Iterator",p=l.set,v=l.getterFor(f);i.exports=c(Array,"Array",function(m,y){p(this,{type:f,target:r(m),index:0,kind:y})},function(){var m=v(this),y=m.target,_=m.kind,b=m.index++;return!y||b>=y.length?(m.target=void 0,{value:void 0,done:!0}):_=="keys"?{value:b,done:!1}:_=="values"?{value:y[b],done:!1}:{value:[b,y[b]],done:!1}},"values");var g=a.Arguments=a.Array;if(o("keys"),o("values"),o("entries"),!h&&s&&g.name!=="values")try{d(g,"name",{value:"values"})}catch{}},{"../internals/add-to-unscopables":4,"../internals/define-iterator":25,"../internals/descriptors":26,"../internals/internal-state":54,"../internals/is-pure":60,"../internals/iterators":64,"../internals/object-define-property":74,"../internals/to-indexed-object":100}],115:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/regexp-exec");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},{"../internals/export":33,"../internals/regexp-exec":87}],116:[function(e,i,n){var r=e("../internals/string-multibyte").charAt,o=e("../internals/to-string"),a=e("../internals/internal-state"),l=e("../internals/define-iterator"),d="String Iterator",c=a.set,h=a.getterFor(d);l(String,"String",function(s){c(this,{type:d,string:o(s),index:0})},function(){var s,f=h(this),p=f.string,v=f.index;return v>=p.length?{value:void 0,done:!0}:(s=r(p,v),f.index+=s.length,{value:s,done:!1})})},{"../internals/define-iterator":25,"../internals/internal-state":54,"../internals/string-multibyte":97,"../internals/to-string":107}],117:[function(e,i,n){var r=e("../internals/function-apply"),o=e("../internals/function-call"),a=e("../internals/function-uncurry-this"),l=e("../internals/fix-regexp-well-known-symbol-logic"),d=e("../internals/fails"),c=e("../internals/an-object"),h=e("../internals/is-callable"),s=e("../internals/to-integer-or-infinity"),f=e("../internals/to-length"),p=e("../internals/to-string"),v=e("../internals/require-object-coercible"),g=e("../internals/advance-string-index"),m=e("../internals/get-method"),y=e("../internals/get-substitution"),_=e("../internals/regexp-exec-abstract"),b=e("../internals/well-known-symbol")("replace"),w=Math.max,A=Math.min,E=a([].concat),I=a([].push),S=a("".indexOf),T=a("".slice),U="a".replace(/./,"$0")==="$0",N=!!/./[b]&&/./[b]("a","$0")==="";l("replace",function(x,M,P){var L=N?"$":"$0";return[function(F,q){var j=v(this),W=F==null?void 0:m(F,b);return W?o(W,F,j,q):o(M,p(j),F,q)},function(F,q){var j=c(this),W=p(F);if(typeof q=="string"&&S(q,L)===-1&&S(q,"$<")===-1){var D=P(M,j,W,q);if(D.done)return D.value}var C=h(q);C||(q=p(q));var R=j.global;if(R){var O=j.unicode;j.lastIndex=0}for(var B=[];;){var G=_(j,W);if(G===null||(I(B,G),!R))break;p(G[0])===""&&(j.lastIndex=g(W,f(j.lastIndex),O))}for(var Y,H="",te=0,ue=0;ue<B.length;ue++){for(var _e=p((G=B[ue])[0]),J=w(A(s(G.index),W.length),0),re=[],pe=1;pe<G.length;pe++)I(re,(Y=G[pe])===void 0?Y:String(Y));var we=G.groups;if(C){var me=E([_e],re,J,W);we!==void 0&&I(me,we);var ye=p(r(q,void 0,me))}else ye=y(_e,W,J,re,we,q);J>=te&&(H+=T(W,te,J)+ye,te=J+_e.length)}return H+T(W,te)}]},!!d(function(){var x=/./;return x.exec=function(){var M=[];return M.groups={a:"7"},M},"".replace(x,"$<a>")!=="7"})||!U||N)},{"../internals/advance-string-index":5,"../internals/an-object":7,"../internals/fails":34,"../internals/fix-regexp-well-known-symbol-logic":35,"../internals/function-apply":36,"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/get-method":45,"../internals/get-substitution":46,"../internals/is-callable":56,"../internals/regexp-exec-abstract":86,"../internals/require-object-coercible":92,"../internals/to-integer-or-infinity":101,"../internals/to-length":102,"../internals/to-string":107,"../internals/well-known-symbol":113}],118:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/dom-iterables"),a=e("../internals/dom-token-list-prototype"),l=e("../modules/es.array.iterator"),d=e("../internals/create-non-enumerable-property"),c=e("../internals/well-known-symbol"),h=c("iterator"),s=c("toStringTag"),f=l.values,p=function(g,m){if(g){if(g[h]!==f)try{d(g,h,f)}catch{g[h]=f}if(g[s]||d(g,s,m),o[m]){for(var y in l)if(g[y]!==l[y])try{d(g,y,l[y])}catch{g[y]=l[y]}}}};for(var v in o)p(r[v]&&r[v].prototype,v);p(a,"DOMTokenList")},{"../internals/create-non-enumerable-property":18,"../internals/dom-iterables":28,"../internals/dom-token-list-prototype":29,"../internals/global":47,"../internals/well-known-symbol":113,"../modules/es.array.iterator":114}],119:[function(e,i,n){e("../modules/es.array.iterator");var r=e("../internals/export"),o=e("../internals/global"),a=e("../internals/function-call"),l=e("../internals/function-uncurry-this"),d=e("../internals/descriptors"),c=e("../internals/native-url"),h=e("../internals/define-built-in"),s=e("../internals/define-built-ins"),f=e("../internals/set-to-string-tag"),p=e("../internals/create-iterator-constructor"),v=e("../internals/internal-state"),g=e("../internals/an-instance"),m=e("../internals/is-callable"),y=e("../internals/has-own-property"),_=e("../internals/function-bind-context"),b=e("../internals/classof"),w=e("../internals/an-object"),A=e("../internals/is-object"),E=e("../internals/to-string"),I=e("../internals/object-create"),S=e("../internals/create-property-descriptor"),T=e("../internals/get-iterator"),U=e("../internals/get-iterator-method"),N=e("../internals/validate-arguments-length"),x=e("../internals/well-known-symbol"),M=e("../internals/array-sort"),P=x("iterator"),L="URLSearchParams",F="URLSearchParamsIterator",q=v.set,j=v.getterFor(L),W=v.getterFor(F),D=Object.getOwnPropertyDescriptor,C=function(Te){if(!d)return o[Te];var We=D(o,Te);return We&&We.value},R=C("fetch"),O=C("Request"),B=C("Headers"),G=O&&O.prototype,Y=B&&B.prototype,H=o.RegExp,te=o.TypeError,ue=o.decodeURIComponent,_e=o.encodeURIComponent,J=l("".charAt),re=l([].join),pe=l([].push),we=l("".replace),me=l([].shift),ye=l([].splice),$e=l("".split),Fe=l("".slice),Je=/\+/g,ct=Array(4),mt=function(Te){return ct[Te-1]||(ct[Te-1]=H("((?:%[\\da-f]{2}){"+Te+"})","gi"))},K=function(Te){try{return ue(Te)}catch{return Te}},X=function(Te){var We=we(Te,Je," "),$=4;try{return ue(We)}catch{for(;$;)We=we(We,mt($--),K);return We}},fe=/[!'()~]|%20/g,Pe={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Le=function(Te){return Pe[Te]},Ne=function(Te){return we(_e(Te),fe,Le)},ze=p(function(Te,We){q(this,{type:F,iterator:T(j(Te).entries),kind:We})},"Iterator",function(){var Te=W(this),We=Te.kind,$=Te.iterator.next(),Se=$.value;return $.done||($.value=We==="keys"?Se.key:We==="values"?Se.value:[Se.key,Se.value]),$},!0),De=function(Te){this.entries=[],this.url=null,Te!==void 0&&(A(Te)?this.parseObject(Te):this.parseQuery(typeof Te=="string"?J(Te,0)==="?"?Fe(Te,1):Te:E(Te)))};De.prototype={type:L,bindURL:function(Te){this.url=Te,this.update()},parseObject:function(Te){var We,$,Se,se,Ce,Ge,vt,Mt=U(Te);if(Mt)for($=(We=T(Te,Mt)).next;!(Se=a($,We)).done;){if(Ce=(se=T(w(Se.value))).next,(Ge=a(Ce,se)).done||(vt=a(Ce,se)).done||!a(Ce,se).done)throw te("Expected sequence with length 2");pe(this.entries,{key:E(Ge.value),value:E(vt.value)})}else for(var Nt in Te)y(Te,Nt)&&pe(this.entries,{key:Nt,value:E(Te[Nt])})},parseQuery:function(Te){if(Te)for(var We,$,Se=$e(Te,"&"),se=0;se<Se.length;)(We=Se[se++]).length&&($=$e(We,"="),pe(this.entries,{key:X(me($)),value:X(re($,"="))}))},serialize:function(){for(var Te,We=this.entries,$=[],Se=0;Se<We.length;)Te=We[Se++],pe($,Ne(Te.key)+"="+Ne(Te.value));return re($,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var ve=function(){g(this,Xe);var Te=arguments.length>0?arguments[0]:void 0;q(this,new De(Te))},Xe=ve.prototype;if(s(Xe,{append:function(Te,We){N(arguments.length,2);var $=j(this);pe($.entries,{key:E(Te),value:E(We)}),$.updateURL()},delete:function(Te){N(arguments.length,1);for(var We=j(this),$=We.entries,Se=E(Te),se=0;se<$.length;)$[se].key===Se?ye($,se,1):se++;We.updateURL()},get:function(Te){N(arguments.length,1);for(var We=j(this).entries,$=E(Te),Se=0;Se<We.length;Se++)if(We[Se].key===$)return We[Se].value;return null},getAll:function(Te){N(arguments.length,1);for(var We=j(this).entries,$=E(Te),Se=[],se=0;se<We.length;se++)We[se].key===$&&pe(Se,We[se].value);return Se},has:function(Te){N(arguments.length,1);for(var We=j(this).entries,$=E(Te),Se=0;Se<We.length;)if(We[Se++].key===$)return!0;return!1},set:function(Te,We){N(arguments.length,1);for(var $,Se=j(this),se=Se.entries,Ce=!1,Ge=E(Te),vt=E(We),Mt=0;Mt<se.length;Mt++)($=se[Mt]).key===Ge&&(Ce?ye(se,Mt--,1):(Ce=!0,$.value=vt));Ce||pe(se,{key:Ge,value:vt}),Se.updateURL()},sort:function(){var Te=j(this);M(Te.entries,function(We,$){return We.key>$.key?1:-1}),Te.updateURL()},forEach:function(Te){for(var We,$=j(this).entries,Se=_(Te,arguments.length>1?arguments[1]:void 0),se=0;se<$.length;)Se((We=$[se++]).value,We.key,this)},keys:function(){return new ze(this,"keys")},values:function(){return new ze(this,"values")},entries:function(){return new ze(this,"entries")}},{enumerable:!0}),h(Xe,P,Xe.entries,{name:"entries"}),h(Xe,"toString",function(){return j(this).serialize()},{enumerable:!0}),f(ve,L),r({global:!0,constructor:!0,forced:!c},{URLSearchParams:ve}),!c&&m(B)){var je=l(Y.has),Oe=l(Y.set),Ke=function(Te){if(A(Te)){var We,$=Te.body;if(b($)===L)return We=Te.headers?new B(Te.headers):new B,je(We,"content-type")||Oe(We,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),I(Te,{body:S(0,E($)),headers:S(0,We)})}return Te};if(m(R)&&r({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(Te){return R(Te,arguments.length>1?Ke(arguments[1]):{})}}),m(O)){var He=function(Te){return g(this,G),new O(Te,arguments.length>1?Ke(arguments[1]):{})};G.constructor=He,He.prototype=G,r({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:He})}}i.exports={URLSearchParams:ve,getState:j}},{"../internals/an-instance":6,"../internals/an-object":7,"../internals/array-sort":11,"../internals/classof":14,"../internals/create-iterator-constructor":17,"../internals/create-property-descriptor":19,"../internals/define-built-in":22,"../internals/define-built-ins":23,"../internals/descriptors":26,"../internals/export":33,"../internals/function-bind-context":37,"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/get-iterator":44,"../internals/get-iterator-method":43,"../internals/global":47,"../internals/has-own-property":48,"../internals/internal-state":54,"../internals/is-callable":56,"../internals/is-object":59,"../internals/native-url":69,"../internals/object-create":72,"../internals/set-to-string-tag":93,"../internals/to-string":107,"../internals/validate-arguments-length":112,"../internals/well-known-symbol":113,"../modules/es.array.iterator":114}],120:[function(e,i,n){e("../modules/web.url-search-params.constructor")},{"../modules/web.url-search-params.constructor":119}],121:[function(e,i,n){e("../modules/es.string.iterator");var r,o=e("../internals/export"),a=e("../internals/descriptors"),l=e("../internals/native-url"),d=e("../internals/global"),c=e("../internals/function-bind-context"),h=e("../internals/function-uncurry-this"),s=e("../internals/define-built-in"),f=e("../internals/define-built-in-accessor"),p=e("../internals/an-instance"),v=e("../internals/has-own-property"),g=e("../internals/object-assign"),m=e("../internals/array-from"),y=e("../internals/array-slice-simple"),_=e("../internals/string-multibyte").codeAt,b=e("../internals/string-punycode-to-ascii"),w=e("../internals/to-string"),A=e("../internals/set-to-string-tag"),E=e("../internals/validate-arguments-length"),I=e("../modules/web.url-search-params.constructor"),S=e("../internals/internal-state"),T=S.set,U=S.getterFor("URL"),N=I.URLSearchParams,x=I.getState,M=d.URL,P=d.TypeError,L=d.parseInt,F=Math.floor,q=Math.pow,j=h("".charAt),W=h(/./.exec),D=h([].join),C=h(1 .toString),R=h([].pop),O=h([].push),B=h("".replace),G=h([].shift),Y=h("".split),H=h("".slice),te=h("".toLowerCase),ue=h([].unshift),_e="Invalid scheme",J="Invalid host",re="Invalid port",pe=/[a-z]/i,we=/[\d+-.a-z]/i,me=/\d/,ye=/^0x/i,$e=/^[0-7]+$/,Fe=/^\d+$/,Je=/^[\da-f]+$/i,ct=/[\0\t\n\r #%/:<>?@[\\\]^|]/,mt=/[\0\t\n\r #/:<>?@[\\\]^|]/,K=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,X=/[\t\n\r]/g,fe=function(Q){var oe,ne,Me,ge;if(typeof Q=="number"){for(oe=[],ne=0;ne<4;ne++)ue(oe,Q%256),Q=F(Q/256);return D(oe,".")}if(typeof Q=="object"){for(oe="",Me=function(ot){for(var it=null,tt=1,de=null,Ie=0,at=0;at<8;at++)ot[at]!==0?(Ie>tt&&(it=de,tt=Ie),de=null,Ie=0):(de===null&&(de=at),++Ie);return Ie>tt&&(it=de,tt=Ie),it}(Q),ne=0;ne<8;ne++)ge&&Q[ne]===0||(ge&&(ge=!1),Me===ne?(oe+=ne?":":"::",ge=!0):(oe+=C(Q[ne],16),ne<7&&(oe+=":")));return"["+oe+"]"}return Q},Pe={},Le=g({},Pe,{" ":1,'"':1,"<":1,">":1,"`":1}),Ne=g({},Le,{"#":1,"?":1,"{":1,"}":1}),ze=g({},Ne,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),De=function(Q,oe){var ne=_(Q,0);return ne>32&&ne<127&&!v(oe,Q)?Q:encodeURIComponent(Q)},ve={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Xe=function(Q,oe){var ne;return Q.length==2&&W(pe,j(Q,0))&&((ne=j(Q,1))==":"||!oe&&ne=="|")},je=function(Q){var oe;return Q.length>1&&Xe(H(Q,0,2))&&(Q.length==2||(oe=j(Q,2))==="/"||oe==="\\"||oe==="?"||oe==="#")},Oe=function(Q){return Q==="."||te(Q)==="%2e"},Ke={},He={},Te={},We={},$={},Se={},se={},Ce={},Ge={},vt={},Mt={},Nt={},an={},Ut={},dn={},Xt={},Dn={},hn={},bi={},xn={},wn={},zn=function(Q,oe,ne){var Me,ge,ot,it=w(Q);if(oe){if(ge=this.parse(it))throw P(ge);this.searchParams=null}else{if(ne!==void 0&&(Me=new zn(ne,!0)),ge=this.parse(it,null,Me))throw P(ge);(ot=x(new N)).bindURL(this),this.searchParams=ot}};zn.prototype={type:"URL",parse:function(Q,oe,ne){var Me,ge,ot,it,tt,de=this,Ie=oe||Ke,at=0,lt="",xt=!1,kt=!1,Kt=!1;for(Q=w(Q),oe||(de.scheme="",de.username="",de.password="",de.host=null,de.port=null,de.path=[],de.query=null,de.fragment=null,de.cannotBeABaseURL=!1,Q=B(Q,K,"")),Q=B(Q,X,""),Me=m(Q);at<=Me.length;){switch(ge=Me[at],Ie){case Ke:if(!ge||!W(pe,ge)){if(oe)return _e;Ie=Te;continue}lt+=te(ge),Ie=He;break;case He:if(ge&&(W(we,ge)||ge=="+"||ge=="-"||ge=="."))lt+=te(ge);else{if(ge!=":"){if(oe)return _e;lt="",Ie=Te,at=0;continue}if(oe&&(de.isSpecial()!=v(ve,lt)||lt=="file"&&(de.includesCredentials()||de.port!==null)||de.scheme=="file"&&!de.host))return;if(de.scheme=lt,oe)return void(de.isSpecial()&&ve[de.scheme]==de.port&&(de.port=null));lt="",de.scheme=="file"?Ie=Ut:de.isSpecial()&&ne&&ne.scheme==de.scheme?Ie=We:de.isSpecial()?Ie=Ce:Me[at+1]=="/"?(Ie=$,at++):(de.cannotBeABaseURL=!0,O(de.path,""),Ie=bi)}break;case Te:if(!ne||ne.cannotBeABaseURL&&ge!="#")return _e;if(ne.cannotBeABaseURL&&ge=="#"){de.scheme=ne.scheme,de.path=y(ne.path),de.query=ne.query,de.fragment="",de.cannotBeABaseURL=!0,Ie=wn;break}Ie=ne.scheme=="file"?Ut:Se;continue;case We:if(ge!="/"||Me[at+1]!="/"){Ie=Se;continue}Ie=Ge,at++;break;case $:if(ge=="/"){Ie=vt;break}Ie=hn;continue;case Se:if(de.scheme=ne.scheme,ge==r)de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.query=ne.query;else if(ge=="/"||ge=="\\"&&de.isSpecial())Ie=se;else if(ge=="?")de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.query="",Ie=xn;else{if(ge!="#"){de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.path.length--,Ie=hn;continue}de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.query=ne.query,de.fragment="",Ie=wn}break;case se:if(!de.isSpecial()||ge!="/"&&ge!="\\"){if(ge!="/"){de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,Ie=hn;continue}Ie=vt}else Ie=Ge;break;case Ce:if(Ie=Ge,ge!="/"||j(lt,at+1)!="/")continue;at++;break;case Ge:if(ge!="/"&&ge!="\\"){Ie=vt;continue}break;case vt:if(ge=="@"){xt&&(lt="%40"+lt),xt=!0,ot=m(lt);for(var Pt=0;Pt<ot.length;Pt++){var gt=ot[Pt];if(gt!=":"||Kt){var ri=De(gt,ze);Kt?de.password+=ri:de.username+=ri}else Kt=!0}lt=""}else if(ge==r||ge=="/"||ge=="?"||ge=="#"||ge=="\\"&&de.isSpecial()){if(xt&&lt=="")return"Invalid authority";at-=m(lt).length+1,lt="",Ie=Mt}else lt+=ge;break;case Mt:case Nt:if(oe&&de.scheme=="file"){Ie=Xt;continue}if(ge!=":"||kt){if(ge==r||ge=="/"||ge=="?"||ge=="#"||ge=="\\"&&de.isSpecial()){if(de.isSpecial()&&lt=="")return J;if(oe&&lt==""&&(de.includesCredentials()||de.port!==null))return;if(it=de.parseHost(lt))return it;if(lt="",Ie=Dn,oe)return;continue}ge=="["?kt=!0:ge=="]"&&(kt=!1),lt+=ge}else{if(lt=="")return J;if(it=de.parseHost(lt))return it;if(lt="",Ie=an,oe==Nt)return}break;case an:if(!W(me,ge)){if(ge==r||ge=="/"||ge=="?"||ge=="#"||ge=="\\"&&de.isSpecial()||oe){if(lt!=""){var Gt=L(lt,10);if(Gt>65535)return re;de.port=de.isSpecial()&&Gt===ve[de.scheme]?null:Gt,lt=""}if(oe)return;Ie=Dn;continue}return re}lt+=ge;break;case Ut:if(de.scheme="file",ge=="/"||ge=="\\")Ie=dn;else{if(!ne||ne.scheme!="file"){Ie=hn;continue}if(ge==r)de.host=ne.host,de.path=y(ne.path),de.query=ne.query;else if(ge=="?")de.host=ne.host,de.path=y(ne.path),de.query="",Ie=xn;else{if(ge!="#"){je(D(y(Me,at),""))||(de.host=ne.host,de.path=y(ne.path),de.shortenPath()),Ie=hn;continue}de.host=ne.host,de.path=y(ne.path),de.query=ne.query,de.fragment="",Ie=wn}}break;case dn:if(ge=="/"||ge=="\\"){Ie=Xt;break}ne&&ne.scheme=="file"&&!je(D(y(Me,at),""))&&(Xe(ne.path[0],!0)?O(de.path,ne.path[0]):de.host=ne.host),Ie=hn;continue;case Xt:if(ge==r||ge=="/"||ge=="\\"||ge=="?"||ge=="#"){if(!oe&&Xe(lt))Ie=hn;else if(lt==""){if(de.host="",oe)return;Ie=Dn}else{if(it=de.parseHost(lt))return it;if(de.host=="localhost"&&(de.host=""),oe)return;lt="",Ie=Dn}continue}lt+=ge;break;case Dn:if(de.isSpecial()){if(Ie=hn,ge!="/"&&ge!="\\")continue}else if(oe||ge!="?")if(oe||ge!="#"){if(ge!=r&&(Ie=hn,ge!="/"))continue}else de.fragment="",Ie=wn;else de.query="",Ie=xn;break;case hn:if(ge==r||ge=="/"||ge=="\\"&&de.isSpecial()||!oe&&(ge=="?"||ge=="#")){if((tt=te(tt=lt))===".."||tt==="%2e."||tt===".%2e"||tt==="%2e%2e"?(de.shortenPath(),ge=="/"||ge=="\\"&&de.isSpecial()||O(de.path,"")):Oe(lt)?ge=="/"||ge=="\\"&&de.isSpecial()||O(de.path,""):(de.scheme=="file"&&!de.path.length&&Xe(lt)&&(de.host&&(de.host=""),lt=j(lt,0)+":"),O(de.path,lt)),lt="",de.scheme=="file"&&(ge==r||ge=="?"||ge=="#"))for(;de.path.length>1&&de.path[0]==="";)G(de.path);ge=="?"?(de.query="",Ie=xn):ge=="#"&&(de.fragment="",Ie=wn)}else lt+=De(ge,Ne);break;case bi:ge=="?"?(de.query="",Ie=xn):ge=="#"?(de.fragment="",Ie=wn):ge!=r&&(de.path[0]+=De(ge,Pe));break;case xn:oe||ge!="#"?ge!=r&&(ge=="'"&&de.isSpecial()?de.query+="%27":de.query+=ge=="#"?"%23":De(ge,Pe)):(de.fragment="",Ie=wn);break;case wn:ge!=r&&(de.fragment+=De(ge,Le))}at++}},parseHost:function(Q){var oe,ne,Me;if(j(Q,0)=="["){if(j(Q,Q.length-1)!="]"||(oe=function(ge){var ot,it,tt,de,Ie,at,lt,xt=[0,0,0,0,0,0,0,0],kt=0,Kt=null,Pt=0,gt=function(){return j(ge,Pt)};if(gt()==":"){if(j(ge,1)!=":")return;Pt+=2,Kt=++kt}for(;gt();){if(kt==8)return;if(gt()!=":"){for(ot=it=0;it<4&&W(Je,gt());)ot=16*ot+L(gt(),16),Pt++,it++;if(gt()=="."){if(it==0||(Pt-=it,kt>6))return;for(tt=0;gt();){if(de=null,tt>0){if(!(gt()=="."&&tt<4))return;Pt++}if(!W(me,gt()))return;for(;W(me,gt());){if(Ie=L(gt(),10),de===null)de=Ie;else{if(de==0)return;de=10*de+Ie}if(de>255)return;Pt++}xt[kt]=256*xt[kt]+de,++tt!=2&&tt!=4||kt++}if(tt!=4)return;break}if(gt()==":"){if(Pt++,!gt())return}else if(gt())return;xt[kt++]=ot}else{if(Kt!==null)return;Pt++,Kt=++kt}}if(Kt!==null)for(at=kt-Kt,kt=7;kt!=0&&at>0;)lt=xt[kt],xt[kt--]=xt[Kt+at-1],xt[Kt+--at]=lt;else if(kt!=8)return;return xt}(H(Q,1,-1)),!oe))return J;this.host=oe}else if(this.isSpecial()){if(Q=b(Q),W(ct,Q)||(oe=function(ge){var ot,it,tt,de,Ie,at,lt,xt=Y(ge,".");if(xt.length&&xt[xt.length-1]==""&&xt.length--,(ot=xt.length)>4)return ge;for(it=[],tt=0;tt<ot;tt++){if((de=xt[tt])=="")return ge;if(Ie=10,de.length>1&&j(de,0)=="0"&&(Ie=W(ye,de)?16:8,de=H(de,Ie==8?1:2)),de==="")at=0;else{if(!W(Ie==10?Fe:Ie==8?$e:Je,de))return ge;at=L(de,Ie)}O(it,at)}for(tt=0;tt<ot;tt++)if(at=it[tt],tt==ot-1){if(at>=q(256,5-ot))return null}else if(at>255)return null;for(lt=R(it),tt=0;tt<it.length;tt++)lt+=it[tt]*q(256,3-tt);return lt}(Q),oe===null))return J;this.host=oe}else{if(W(mt,Q))return J;for(oe="",ne=m(Q),Me=0;Me<ne.length;Me++)oe+=De(ne[Me],Pe);this.host=oe}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||this.scheme=="file"},includesCredentials:function(){return this.username!=""||this.password!=""},isSpecial:function(){return v(ve,this.scheme)},shortenPath:function(){var Q=this.path,oe=Q.length;!oe||this.scheme=="file"&&oe==1&&Xe(Q[0],!0)||Q.length--},serialize:function(){var Q=this,oe=Q.scheme,ne=Q.username,Me=Q.password,ge=Q.host,ot=Q.port,it=Q.path,tt=Q.query,de=Q.fragment,Ie=oe+":";return ge!==null?(Ie+="//",Q.includesCredentials()&&(Ie+=ne+(Me?":"+Me:"")+"@"),Ie+=fe(ge),ot!==null&&(Ie+=":"+ot)):oe=="file"&&(Ie+="//"),Ie+=Q.cannotBeABaseURL?it[0]:it.length?"/"+D(it,"/"):"",tt!==null&&(Ie+="?"+tt),de!==null&&(Ie+="#"+de),Ie},setHref:function(Q){var oe=this.parse(Q);if(oe)throw P(oe);this.searchParams.update()},getOrigin:function(){var Q=this.scheme,oe=this.port;if(Q=="blob")try{return new Ln(Q.path[0]).origin}catch{return"null"}return Q!="file"&&this.isSpecial()?Q+"://"+fe(this.host)+(oe!==null?":"+oe:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(Q){this.parse(w(Q)+":",Ke)},getUsername:function(){return this.username},setUsername:function(Q){var oe=m(w(Q));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var ne=0;ne<oe.length;ne++)this.username+=De(oe[ne],ze)}},getPassword:function(){return this.password},setPassword:function(Q){var oe=m(w(Q));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var ne=0;ne<oe.length;ne++)this.password+=De(oe[ne],ze)}},getHost:function(){var Q=this.host,oe=this.port;return Q===null?"":oe===null?fe(Q):fe(Q)+":"+oe},setHost:function(Q){this.cannotBeABaseURL||this.parse(Q,Mt)},getHostname:function(){var Q=this.host;return Q===null?"":fe(Q)},setHostname:function(Q){this.cannotBeABaseURL||this.parse(Q,Nt)},getPort:function(){var Q=this.port;return Q===null?"":w(Q)},setPort:function(Q){this.cannotHaveUsernamePasswordPort()||((Q=w(Q))==""?this.port=null:this.parse(Q,an))},getPathname:function(){var Q=this.path;return this.cannotBeABaseURL?Q[0]:Q.length?"/"+D(Q,"/"):""},setPathname:function(Q){this.cannotBeABaseURL||(this.path=[],this.parse(Q,Dn))},getSearch:function(){var Q=this.query;return Q?"?"+Q:""},setSearch:function(Q){(Q=w(Q))==""?this.query=null:(j(Q,0)=="?"&&(Q=H(Q,1)),this.query="",this.parse(Q,xn)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var Q=this.fragment;return Q?"#"+Q:""},setHash:function(Q){(Q=w(Q))!=""?(j(Q,0)=="#"&&(Q=H(Q,1)),this.fragment="",this.parse(Q,wn)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var Ln=function(Q){var oe=p(this,Yt),ne=E(arguments.length,1)>1?arguments[1]:void 0,Me=T(oe,new zn(Q,!1,ne));a||(oe.href=Me.serialize(),oe.origin=Me.getOrigin(),oe.protocol=Me.getProtocol(),oe.username=Me.getUsername(),oe.password=Me.getPassword(),oe.host=Me.getHost(),oe.hostname=Me.getHostname(),oe.port=Me.getPort(),oe.pathname=Me.getPathname(),oe.search=Me.getSearch(),oe.searchParams=Me.getSearchParams(),oe.hash=Me.getHash())},Yt=Ln.prototype,ln=function(Q,oe){return{get:function(){return U(this)[Q]()},set:oe&&function(ne){return U(this)[oe](ne)},configurable:!0,enumerable:!0}};if(a&&(f(Yt,"href",ln("serialize","setHref")),f(Yt,"origin",ln("getOrigin")),f(Yt,"protocol",ln("getProtocol","setProtocol")),f(Yt,"username",ln("getUsername","setUsername")),f(Yt,"password",ln("getPassword","setPassword")),f(Yt,"host",ln("getHost","setHost")),f(Yt,"hostname",ln("getHostname","setHostname")),f(Yt,"port",ln("getPort","setPort")),f(Yt,"pathname",ln("getPathname","setPathname")),f(Yt,"search",ln("getSearch","setSearch")),f(Yt,"searchParams",ln("getSearchParams")),f(Yt,"hash",ln("getHash","setHash"))),s(Yt,"toJSON",function(){return U(this).serialize()},{enumerable:!0}),s(Yt,"toString",function(){return U(this).serialize()},{enumerable:!0}),M){var xi=M.createObjectURL,Z=M.revokeObjectURL;xi&&s(Ln,"createObjectURL",c(xi,M)),Z&&s(Ln,"revokeObjectURL",c(Z,M))}A(Ln,"URL"),o({global:!0,constructor:!0,forced:!l,sham:!a},{URL:Ln})},{"../internals/an-instance":6,"../internals/array-from":8,"../internals/array-slice-simple":10,"../internals/define-built-in":22,"../internals/define-built-in-accessor":21,"../internals/descriptors":26,"../internals/export":33,"../internals/function-bind-context":37,"../internals/function-uncurry-this":41,"../internals/global":47,"../internals/has-own-property":48,"../internals/internal-state":54,"../internals/native-url":69,"../internals/object-assign":71,"../internals/set-to-string-tag":93,"../internals/string-multibyte":97,"../internals/string-punycode-to-ascii":98,"../internals/to-string":107,"../internals/validate-arguments-length":112,"../modules/es.string.iterator":116,"../modules/web.url-search-params.constructor":119}],122:[function(e,i,n){e("../modules/web.url.constructor")},{"../modules/web.url.constructor":121}],123:[function(e,i,n){var r,o,a;r=function(l,d,c,h){var s;d[0]=0;for(var f=1;f<d.length;f++){var p=d[f++],v=d[f]?(d[0]|=p?1:2,c[d[f++]]):d[++f];p===3?h[0]=v:p===4?h[1]=Object.assign(h[1]||{},v):p===5?(h[1]=h[1]||{})[d[++f]]=v:p===6?h[1][d[++f]]+=v+"":p?(s=l.apply(v,r(l,v,c,["",null])),h.push(s),v[0]?d[0]|=2:(d[f-2]=0,d[f]=s)):h.push(v)}return h},o=new Map,a=function(l){var d=o.get(this);return d||(d=new Map,o.set(this,d)),(d=r(this,d.get(l)||(d.set(l,d=function(c){for(var h,s,f=1,p="",v="",g=[0],m=function(b){f===1&&(b||(p=p.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?g.push(0,b,p):f===3&&(b||p)?(g.push(3,b,p),f=2):f===2&&p==="..."&&b?g.push(4,b,0):f===2&&p&&!b?g.push(5,0,!0,p):f>=5&&((p||!b&&f===5)&&(g.push(f,0,p,s),f=6),b&&(g.push(f,b,0,s),f=6)),p=""},y=0;y<c.length;y++){y&&(f===1&&m(),m(y));for(var _=0;_<c[y].length;_++)h=c[y][_],f===1?h==="<"?(m(),g=[g],f=3):p+=h:f===4?p==="--"&&h===">"?(f=1,p=""):p=h+p[0]:v?h===v?v="":p+=h:h==='"'||h==="'"?v=h:h===">"?(m(),f=1):f&&(h==="="?(f=5,s=p,p=""):h==="/"&&(f<5||c[y][_+1]===">")?(m(),f===3&&(g=g[0]),f=g,(g=g[0]).push(2,0,f),f=0):h===" "||h==="	"||h===`
`||h==="\r"?(m(),f=2):p+=h),f===3&&p==="!--"&&(f=4,g=g[0])}return m(),g}(l)),d),arguments,[])).length>1?d:d[0]},i!==void 0?i.exports=a:self.htm=a},{}],124:[function(e,i,n){i.exports={nanoid:(r=21)=>{let o="",a=r;for(;a--;)o+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return o},customAlphabet:(r,o=21)=>(a=o)=>{let l="",d=a;for(;d--;)l+=r[Math.random()*r.length|0];return l}}},{}],125:[function(e,i,n){var r,o,a,l,d,c,h,s={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function v(R,O){for(var B in O)R[B]=O[B];return R}function g(R){var O=R.parentNode;O&&O.removeChild(R)}function m(R,O,B){var G,Y,H,te={};for(H in O)H=="key"?G=O[H]:H=="ref"?Y=O[H]:te[H]=O[H];if(arguments.length>2&&(te.children=arguments.length>3?r.call(arguments,2):B),typeof R=="function"&&R.defaultProps!=null)for(H in R.defaultProps)te[H]===void 0&&(te[H]=R.defaultProps[H]);return y(R,te,G,Y,null)}function y(R,O,B,G,Y){var H={type:R,props:O,key:B,ref:G,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:Y??++a};return Y==null&&o.vnode!=null&&o.vnode(H),H}function _(R){return R.children}function b(R,O){this.props=R,this.context=O}function w(R,O){if(O==null)return R.__?w(R.__,R.__.__k.indexOf(R)+1):null;for(var B;O<R.__k.length;O++)if((B=R.__k[O])!=null&&B.__e!=null)return B.__e;return typeof R.type=="function"?w(R):null}function A(R){var O,B;if((R=R.__)!=null&&R.__c!=null){for(R.__e=R.__c.base=null,O=0;O<R.__k.length;O++)if((B=R.__k[O])!=null&&B.__e!=null){R.__e=R.__c.base=B.__e;break}return A(R)}}function E(R){(!R.__d&&(R.__d=!0)&&d.push(R)&&!I.__r++||c!==o.debounceRendering)&&((c=o.debounceRendering)||setTimeout)(I)}function I(){for(var R;I.__r=d.length;)R=d.sort(function(O,B){return O.__v.__b-B.__v.__b}),d=[],R.some(function(O){var B,G,Y,H,te,ue;O.__d&&(te=(H=(B=O).__v).__e,(ue=B.__P)&&(G=[],(Y=v({},H)).__v=H.__v+1,L(ue,H,Y,B.__n,ue.ownerSVGElement!==void 0,H.__h!=null?[te]:null,G,te??w(H),H.__h),F(G,H),H.__e!=te&&A(H)))})}function S(R,O,B,G,Y,H,te,ue,_e,J){var re,pe,we,me,ye,$e,Fe,Je=G&&G.__k||f,ct=Je.length;for(B.__k=[],re=0;re<O.length;re++)if((me=B.__k[re]=(me=O[re])==null||typeof me=="boolean"?null:typeof me=="string"||typeof me=="number"||typeof me=="bigint"?y(null,me,null,null,me):Array.isArray(me)?y(_,{children:me},null,null,null):me.__b>0?y(me.type,me.props,me.key,null,me.__v):me)!=null){if(me.__=B,me.__b=B.__b+1,(we=Je[re])===null||we&&me.key==we.key&&me.type===we.type)Je[re]=void 0;else for(pe=0;pe<ct;pe++){if((we=Je[pe])&&me.key==we.key&&me.type===we.type){Je[pe]=void 0;break}we=null}L(R,me,we=we||s,Y,H,te,ue,_e,J),ye=me.__e,(pe=me.ref)&&we.ref!=pe&&(Fe||(Fe=[]),we.ref&&Fe.push(we.ref,null,me),Fe.push(pe,me.__c||ye,me)),ye!=null?($e==null&&($e=ye),typeof me.type=="function"&&me.__k===we.__k?me.__d=_e=T(me,_e,R):_e=U(R,me,we,Je,ye,_e),typeof B.type=="function"&&(B.__d=_e)):_e&&we.__e==_e&&_e.parentNode!=R&&(_e=w(we))}for(B.__e=$e,re=ct;re--;)Je[re]!=null&&(typeof B.type=="function"&&Je[re].__e!=null&&Je[re].__e==B.__d&&(B.__d=w(G,re+1)),W(Je[re],Je[re]));if(Fe)for(re=0;re<Fe.length;re++)j(Fe[re],Fe[++re],Fe[++re])}function T(R,O,B){for(var G,Y=R.__k,H=0;Y&&H<Y.length;H++)(G=Y[H])&&(G.__=R,O=typeof G.type=="function"?T(G,O,B):U(B,G,G,Y,G.__e,O));return O}function U(R,O,B,G,Y,H){var te,ue,_e;if(O.__d!==void 0)te=O.__d,O.__d=void 0;else if(B==null||Y!=H||Y.parentNode==null)e:if(H==null||H.parentNode!==R)R.appendChild(Y),te=null;else{for(ue=H,_e=0;(ue=ue.nextSibling)&&_e<G.length;_e+=2)if(ue==Y)break e;R.insertBefore(Y,H),te=H}return te!==void 0?te:Y.nextSibling}function N(R,O,B){O[0]==="-"?R.setProperty(O,B):R[O]=B==null?"":typeof B!="number"||p.test(O)?B:B+"px"}function x(R,O,B,G,Y){var H;e:if(O==="style")if(typeof B=="string")R.style.cssText=B;else{if(typeof G=="string"&&(R.style.cssText=G=""),G)for(O in G)B&&O in B||N(R.style,O,"");if(B)for(O in B)G&&B[O]===G[O]||N(R.style,O,B[O])}else if(O[0]==="o"&&O[1]==="n")H=O!==(O=O.replace(/Capture$/,"")),O=O.toLowerCase()in R?O.toLowerCase().slice(2):O.slice(2),R.l||(R.l={}),R.l[O+H]=B,B?G||R.addEventListener(O,H?P:M,H):R.removeEventListener(O,H?P:M,H);else if(O!=="dangerouslySetInnerHTML"){if(Y)O=O.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(O!=="href"&&O!=="list"&&O!=="form"&&O!=="tabIndex"&&O!=="download"&&O in R)try{R[O]=B??"";break e}catch{}typeof B=="function"||(B!=null&&(B!==!1||O[0]==="a"&&O[1]==="r")?R.setAttribute(O,B):R.removeAttribute(O))}}function M(R){this.l[R.type+!1](o.event?o.event(R):R)}function P(R){this.l[R.type+!0](o.event?o.event(R):R)}function L(R,O,B,G,Y,H,te,ue,_e){var J,re,pe,we,me,ye,$e,Fe,Je,ct,mt,K,X,fe=O.type;if(O.constructor!==void 0)return null;B.__h!=null&&(_e=B.__h,ue=O.__e=B.__e,O.__h=null,H=[ue]),(J=o.__b)&&J(O);try{e:if(typeof fe=="function"){if(Fe=O.props,Je=(J=fe.contextType)&&G[J.__c],ct=J?Je?Je.props.value:J.__:G,B.__c?$e=(re=O.__c=B.__c).__=re.__E:("prototype"in fe&&fe.prototype.render?O.__c=re=new fe(Fe,ct):(O.__c=re=new b(Fe,ct),re.constructor=fe,re.render=D),Je&&Je.sub(re),re.props=Fe,re.state||(re.state={}),re.context=ct,re.__n=G,pe=re.__d=!0,re.__h=[]),re.__s==null&&(re.__s=re.state),fe.getDerivedStateFromProps!=null&&(re.__s==re.state&&(re.__s=v({},re.__s)),v(re.__s,fe.getDerivedStateFromProps(Fe,re.__s))),we=re.props,me=re.state,pe)fe.getDerivedStateFromProps==null&&re.componentWillMount!=null&&re.componentWillMount(),re.componentDidMount!=null&&re.__h.push(re.componentDidMount);else{if(fe.getDerivedStateFromProps==null&&Fe!==we&&re.componentWillReceiveProps!=null&&re.componentWillReceiveProps(Fe,ct),!re.__e&&re.shouldComponentUpdate!=null&&re.shouldComponentUpdate(Fe,re.__s,ct)===!1||O.__v===B.__v){re.props=Fe,re.state=re.__s,O.__v!==B.__v&&(re.__d=!1),re.__v=O,O.__e=B.__e,O.__k=B.__k,O.__k.forEach(function(Pe){Pe&&(Pe.__=O)}),re.__h.length&&te.push(re);break e}re.componentWillUpdate!=null&&re.componentWillUpdate(Fe,re.__s,ct),re.componentDidUpdate!=null&&re.__h.push(function(){re.componentDidUpdate(we,me,ye)})}if(re.context=ct,re.props=Fe,re.__v=O,re.__P=R,mt=o.__r,K=0,"prototype"in fe&&fe.prototype.render)re.state=re.__s,re.__d=!1,mt&&mt(O),J=re.render(re.props,re.state,re.context);else do re.__d=!1,mt&&mt(O),J=re.render(re.props,re.state,re.context),re.state=re.__s;while(re.__d&&++K<25);re.state=re.__s,re.getChildContext!=null&&(G=v(v({},G),re.getChildContext())),pe||re.getSnapshotBeforeUpdate==null||(ye=re.getSnapshotBeforeUpdate(we,me)),X=J!=null&&J.type===_&&J.key==null?J.props.children:J,S(R,Array.isArray(X)?X:[X],O,B,G,Y,H,te,ue,_e),re.base=O.__e,O.__h=null,re.__h.length&&te.push(re),$e&&(re.__E=re.__=null),re.__e=!1}else H==null&&O.__v===B.__v?(O.__k=B.__k,O.__e=B.__e):O.__e=q(B.__e,O,B,G,Y,H,te,_e);(J=o.diffed)&&J(O)}catch(Pe){O.__v=null,(_e||H!=null)&&(O.__e=ue,O.__h=!!_e,H[H.indexOf(ue)]=null),o.__e(Pe,O,B)}}function F(R,O){o.__c&&o.__c(O,R),R.some(function(B){try{R=B.__h,B.__h=[],R.some(function(G){G.call(B)})}catch(G){o.__e(G,B.__v)}})}function q(R,O,B,G,Y,H,te,ue){var _e,J,re,pe=B.props,we=O.props,me=O.type,ye=0;if(me==="svg"&&(Y=!0),H!=null){for(;ye<H.length;ye++)if((_e=H[ye])&&"setAttribute"in _e==!!me&&(me?_e.localName===me:_e.nodeType===3)){R=_e,H[ye]=null;break}}if(R==null){if(me===null)return document.createTextNode(we);R=Y?document.createElementNS("http://www.w3.org/2000/svg",me):document.createElement(me,we.is&&we),H=null,ue=!1}if(me===null)pe===we||ue&&R.data===we||(R.data=we);else{if(H=H&&r.call(R.childNodes),J=(pe=B.props||s).dangerouslySetInnerHTML,re=we.dangerouslySetInnerHTML,!ue){if(H!=null)for(pe={},ye=0;ye<R.attributes.length;ye++)pe[R.attributes[ye].name]=R.attributes[ye].value;(re||J)&&(re&&(J&&re.__html==J.__html||re.__html===R.innerHTML)||(R.innerHTML=re&&re.__html||""))}if(function($e,Fe,Je,ct,mt){var K;for(K in Je)K==="children"||K==="key"||K in Fe||x($e,K,null,Je[K],ct);for(K in Fe)mt&&typeof Fe[K]!="function"||K==="children"||K==="key"||K==="value"||K==="checked"||Je[K]===Fe[K]||x($e,K,Fe[K],Je[K],ct)}(R,we,pe,Y,ue),re)O.__k=[];else if(ye=O.props.children,S(R,Array.isArray(ye)?ye:[ye],O,B,G,Y&&me!=="foreignObject",H,te,H?H[0]:B.__k&&w(B,0),ue),H!=null)for(ye=H.length;ye--;)H[ye]!=null&&g(H[ye]);ue||("value"in we&&(ye=we.value)!==void 0&&(ye!==R.value||me==="progress"&&!ye||me==="option"&&ye!==pe.value)&&x(R,"value",ye,pe.value,!1),"checked"in we&&(ye=we.checked)!==void 0&&ye!==R.checked&&x(R,"checked",ye,pe.checked,!1))}return R}function j(R,O,B){try{typeof R=="function"?R(O):R.current=O}catch(G){o.__e(G,B)}}function W(R,O,B){var G,Y;if(o.unmount&&o.unmount(R),(G=R.ref)&&(G.current&&G.current!==R.__e||j(G,null,O)),(G=R.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(H){o.__e(H,O)}G.base=G.__P=null}if(G=R.__k)for(Y=0;Y<G.length;Y++)G[Y]&&W(G[Y],O,typeof R.type!="function");B||R.__e==null||g(R.__e),R.__e=R.__d=void 0}function D(R,O,B){return this.constructor(R,B)}function C(R,O,B){var G,Y,H;o.__&&o.__(R,O),Y=(G=typeof B=="function")?null:B&&B.__k||O.__k,H=[],L(O,R=(!G&&B||O).__k=m(_,null,[R]),Y||s,s,O.ownerSVGElement!==void 0,!G&&B?[B]:Y?null:O.firstChild?r.call(O.childNodes):null,H,!G&&B?B:Y?Y.__e:O.firstChild,G),F(H,R)}r=f.slice,o={__e:function(R,O,B,G){for(var Y,H,te;O=O.__;)if((Y=O.__c)&&!Y.__)try{if((H=Y.constructor)&&H.getDerivedStateFromError!=null&&(Y.setState(H.getDerivedStateFromError(R)),te=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(R,G||{}),te=Y.__d),te)return Y.__E=Y}catch(ue){R=ue}throw R}},a=0,l=function(R){return R!=null&&R.constructor===void 0},b.prototype.setState=function(R,O){var B;B=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=v({},this.state),typeof R=="function"&&(R=R(v({},B),this.props)),R&&v(B,R),R!=null&&this.__v&&(O&&this.__h.push(O),E(this))},b.prototype.forceUpdate=function(R){this.__v&&(this.__e=!0,R&&this.__h.push(R),E(this))},b.prototype.render=_,d=[],I.__r=0,h=0,n.render=C,n.hydrate=function R(O,B){C(O,B,R)},n.createElement=m,n.h=m,n.Fragment=_,n.createRef=function(){return{current:null}},n.isValidElement=l,n.Component=b,n.cloneElement=function(R,O,B){var G,Y,H,te=v({},R.props);for(H in O)H=="key"?G=O[H]:H=="ref"?Y=O[H]:te[H]=O[H];return arguments.length>2&&(te.children=arguments.length>3?r.call(arguments,2):B),y(R.type,te,G||R.key,Y||R.ref,null)},n.createContext=function(R,O){var B={__c:O="__cC"+h++,__:R,Consumer:function(G,Y){return G.children(Y)},Provider:function(G){var Y,H;return this.getChildContext||(Y=[],(H={})[O]=this,this.getChildContext=function(){return H},this.shouldComponentUpdate=function(te){this.props.value!==te.value&&Y.some(E)},this.sub=function(te){Y.push(te);var ue=te.componentWillUnmount;te.componentWillUnmount=function(){Y.splice(Y.indexOf(te),1),ue&&ue.call(te)}}),G.children}};return B.Provider.__=B.Consumer.contextType=B},n.toChildArray=function R(O,B){return B=B||[],O==null||typeof O=="boolean"||(Array.isArray(O)?O.some(function(G){R(G,B)}):B.push(O)),B},n.options=o},{}],126:[function(e,i,n){var r,o,a,l,d=e("preact"),c=0,h=[],s=[],f=d.options.__b,p=d.options.__r,v=d.options.diffed,g=d.options.__c,m=d.options.unmount;function y(x,M){d.options.__h&&d.options.__h(o,x,c||M),c=0;var P=o.__H||(o.__H={__:[],__h:[]});return x>=P.__.length&&P.__.push({__V:s}),P.__[x]}function _(x){return c=1,b(N,x)}function b(x,M,P){var L=y(r++,2);return L.t=x,L.__c||(L.__=[P?P(M):N(void 0,M),function(F){var q=L.t(L.__[0],F);L.__[0]!==q&&(L.__=[q,L.__[1]],L.__c.setState({}))}],L.__c=o),L.__}function w(x,M){var P=y(r++,4);!d.options.__s&&U(P.__H,M)&&(P.__=x,P.u=M,o.__h.push(P))}function A(x,M){var P=y(r++,7);return U(P.__H,M)?(P.__V=x(),P.u=M,P.__h=x,P.__V):P.__}function E(){for(var x;x=h.shift();)if(x.__P)try{x.__H.__h.forEach(S),x.__H.__h.forEach(T),x.__H.__h=[]}catch(M){x.__H.__h=[],d.options.__e(M,x.__v)}}d.options.__b=function(x){o=null,f&&f(x)},d.options.__r=function(x){p&&p(x),r=0;var M=(o=x.__c).__H;M&&(a===o?(M.__h=[],o.__h=[],M.__.forEach(function(P){P.__V=s,P.u=void 0})):(M.__h.forEach(S),M.__h.forEach(T),M.__h=[])),a=o},d.options.diffed=function(x){v&&v(x);var M=x.__c;M&&M.__H&&(M.__H.__h.length&&(h.push(M)!==1&&l===d.options.requestAnimationFrame||((l=d.options.requestAnimationFrame)||function(P){var L,F=function(){clearTimeout(q),I&&cancelAnimationFrame(L),setTimeout(P)},q=setTimeout(F,100);I&&(L=requestAnimationFrame(F))})(E)),M.__H.__.forEach(function(P){P.u&&(P.__H=P.u),P.__V!==s&&(P.__=P.__V),P.u=void 0,P.__V=s})),a=o=null},d.options.__c=function(x,M){M.some(function(P){try{P.__h.forEach(S),P.__h=P.__h.filter(function(L){return!L.__||T(L)})}catch(L){M.some(function(F){F.__h&&(F.__h=[])}),M=[],d.options.__e(L,P.__v)}}),g&&g(x,M)},d.options.unmount=function(x){m&&m(x);var M,P=x.__c;P&&P.__H&&(P.__H.__.forEach(function(L){try{S(L)}catch(F){M=F}}),M&&d.options.__e(M,P.__v))};var I=typeof requestAnimationFrame=="function";function S(x){var M=o,P=x.__c;typeof P=="function"&&(x.__c=void 0,P()),o=M}function T(x){var M=o;x.__c=x.__(),o=M}function U(x,M){return!x||x.length!==M.length||M.some(function(P,L){return P!==x[L]})}function N(x,M){return typeof M=="function"?M(x):M}n.useState=_,n.useReducer=b,n.useEffect=function(x,M){var P=y(r++,3);!d.options.__s&&U(P.__H,M)&&(P.__=x,P.u=M,o.__H.__h.push(P))},n.useLayoutEffect=w,n.useRef=function(x){return c=5,A(function(){return{current:x}},[])},n.useImperativeHandle=function(x,M,P){c=6,w(function(){return typeof x=="function"?(x(M()),function(){return x(null)}):x?(x.current=M(),function(){return x.current=null}):void 0},P==null?P:P.concat(x))},n.useMemo=A,n.useCallback=function(x,M){return c=8,A(function(){return x},M)},n.useContext=function(x){var M=o.context[x.__c],P=y(r++,9);return P.c=x,M?(P.__==null&&(P.__=!0,M.sub(o)),M.props.value):x.__},n.useDebugValue=function(x,M){d.options.useDebugValue&&d.options.useDebugValue(M?M(x):x)},n.useErrorBoundary=function(x){var M=y(r++,10),P=_();return M.__=x,o.componentDidCatch||(o.componentDidCatch=function(L){M.__&&M.__(L),P[1](L)}),[P[0],function(){P[1](void 0)}]}},{preact:125}],127:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.getAutoRegion=void 0;const r=e("../v7/v7-config"),o=(c,h,s)=>new Promise(f=>{const p=setTimeout(()=>{console.error("Timeout while latency check for ",h),f()},s);c().then(()=>{clearTimeout(p),f()}).catch(v=>{console.error("Error while latency check for ",h,v),clearTimeout(p),f()})});async function a(c){const h=c.ok;if(h.indexOf(c.name)===-1)throw new Error("okUrl "+h+" does not contain region "+c);return(async()=>{const s=Date.now();return await fetch(h+"?time="+s,{method:"GET",mode:"cors",cache:"no-cache"}).then(f=>f.text()),Date.now()-s})()}n.getAutoRegion=async function(c){const h=[...r.awsRegions],s=(()=>{const y={};for(const{name:_}of r.awsRegions)y[_]=[];return y})(),f=[];for(const y of h){const _=async()=>{const b=y.name;for(let w=0;w<5;++w)s[b].push(await a(y)),c(b+"#"+(w+1)+" ("+s[b][0]+" ms)")};f.push(o(_,y.name,15e3))}await Promise.all(f);try{const y=/execute-api\.([^.]+)\.amazonaws.com\/dev\/ok/;if(typeof performance<"u"&&performance.getEntriesByType!==void 0){const _=performance.getEntriesByType("resource");for(const b of _)if(b.name!==void 0&&b.duration!==void 0){const w=y.exec(b.name);w!==null&&w[1]!==void 0&&s[w[1]].push(Math.round(b.duration))}}}catch(y){console.error("Can't use performance data",y)}let p="eu-central-1",v=-1,g="";const m={};for(const y of Object.keys(s)){const _=d(s[y]);_>0&&(v===-1||v>_)&&(p=y,v=_);const b=l(s[y]);m[y]=b,g+=(y+"         ").substring(0,14)+": ["+b.join(", ")+`]
`}return console.log(`Latency estimation:
`+g),console.log("Auto region:",p,", latency: "+v),{region:p,regionLatency:v,estimation:m}};const l=c=>c.sort((h,s)=>h-s),d=c=>c.length===0?0:l(c)[0]},{"../v7/v7-config":129,"core-js/modules/web.dom-collections.iterator.js":118}],128:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.putPersonalBundle=n.getPersonalBundleUrl=void 0;const r=e("../../../v7-services/src/personal"),o=e("../../xhr"),a=e("./v7-config");n.getPersonalBundleUrl=function(l,d,c){return(0,r.getPersonalBundleUrl)(l,d,c,void 0)},n.putPersonalBundle=async function(l,d,c,h){if(await async function(m){const y=new zip.ZipReader(new zip.Uint8ArrayReader(m),{useWebWorkers:!1}),_=await y.getEntries();let b=!0;for(const w of _)if(b=w.directory===!0,!b)break;return y.close(),b}(h))return void console.warn("Ignore empty changes archive");const f=await(0,o.postObject)(a.personalPut+"?namespace="+l+"&id="+d+"&bundleUrl="+encodeURIComponent(c));if(!f.success)throw new Error("Unable to put personal bundle");const p=JSON.parse(f.payload),v=p.signature,g=p.url;if(v["x-amz-content-sha256"]="UNSIGNED-PAYLOAD",await(0,o.send)("put",g,"text",h.buffer,void 0,v),!(await(0,o.postObject)(a.personalAcl+"?namespace="+l+"&id="+d+"&bundleUrl="+c)).success)throw new Error("Can't set ACL to personal bundle")}},{"../../../v7-services/src/personal":158,"../../xhr":157,"./v7-config":129,"core-js/modules/web.dom-collections.iterator.js":118}],129:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.awsRegions=n.checkoutEndpoint=n.checkoutCreateTokenEndpoint=n.stopIpx=n.startIpx=n.addFreeTimeTierEndpoint=n.tokeInfoGetEndpoint=n.createTokenEndpoint=n.personalAcl=n.personalPut=n.endpointBase=void 0,n.endpointBase="https://kdhkdsv558.execute-api.eu-central-1.amazonaws.com/dev",n.personalPut=n.endpointBase+"/personal/put",n.personalAcl=n.endpointBase+"/personal/acl",n.createTokenEndpoint=n.endpointBase+"/token/create",n.tokeInfoGetEndpoint=n.endpointBase+"/token/info/get",n.addFreeTimeTierEndpoint=n.endpointBase+"/token/add/free",n.startIpx=n.endpointBase+"/token/ipx/start",n.stopIpx=n.endpointBase+"/token/ipx/stop",n.checkoutCreateTokenEndpoint=n.endpointBase+"/checkout/token/create",n.checkoutEndpoint="https://js-dos.com/checkout/index.html",n.awsRegions=[{label:"US East (N. Virginia)",name:"us-east-1",ok:"https://387k8l2vgf.execute-api.us-east-1.amazonaws.com/dev/ok"},{label:"US East (Ohio)",name:"us-east-2",ok:"https://q32vlaa5ji.execute-api.us-east-2.amazonaws.com/dev/ok"},{label:"US West (N. California)",name:"us-west-1",ok:"https://zittdd8vr2.execute-api.us-west-1.amazonaws.com/dev/ok"},{label:"US West (Oregon)",name:"us-west-2",ok:"https://aw3gj5315i.execute-api.us-west-2.amazonaws.com/dev/ok"},{label:"Europe (Frankfurt)",name:"eu-central-1",ok:"https://pdxnceto92.execute-api.eu-central-1.amazonaws.com/dev/ok"},{label:"Europe (Ireland)",name:"eu-west-1",ok:"https://yjm6n35ii4.execute-api.eu-west-1.amazonaws.com/dev/ok"},{label:"Europe (London)",name:"eu-west-2",ok:"https://u8k6qhll5d.execute-api.eu-west-2.amazonaws.com/dev/ok"},{label:"Europe (Milan)",name:"eu-south-1",ok:"https://hn4uxbiro0.execute-api.eu-south-1.amazonaws.com/dev/ok"},{label:"Europe (Paris)",name:"eu-west-3",ok:"https://oce5khcznd.execute-api.eu-west-3.amazonaws.com/dev/ok"},{label:"Europe (Stockholm)",name:"eu-north-1",ok:"https://f3j2j43580.execute-api.eu-north-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Hong Kong)",name:"ap-east-1",ok:"https://2dji6qhipb.execute-api.ap-east-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Mumbai)",name:"ap-south-1",ok:"https://0htlj8u1m9.execute-api.ap-south-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Osaka)",name:"ap-northeast-3",ok:"https://4z9rh02y37.execute-api.ap-northeast-3.amazonaws.com/dev/ok"},{label:"Asia Pacific (Seoul)",name:"ap-northeast-2",ok:"https://dv8crqb5j6.execute-api.ap-northeast-2.amazonaws.com/dev/ok"},{label:"Asia Pacific (Singapore)",name:"ap-southeast-1",ok:"https://e0w35dr520.execute-api.ap-southeast-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Sydney)",name:"ap-southeast-2",ok:"https://a2bnpow0ul.execute-api.ap-southeast-2.amazonaws.com/dev/ok"},{label:"Asia Pacific (Tokyo)",name:"ap-northeast-1",ok:"https://snvzlstk05.execute-api.ap-northeast-1.amazonaws.com/dev/ok"},{label:"Canada",name:"ca-central-1",ok:"https://wqwl5he8y7.execute-api.ca-central-1.amazonaws.com/dev/ok"},{label:"Middle East (Bahrain)",name:"me-south-1",ok:"https://g480v58gnk.execute-api.me-south-1.amazonaws.com/dev/ok"},{label:"South America (São Paulo)",name:"sa-east-1",ok:"https://wvhym3rtc1.execute-api.sa-east-1.amazonaws.com/dev/ok"},{label:"Africa (Cape Town)",name:"af-south-1",ok:"https://r0atydfi7k.execute-api.af-south-1.amazonaws.com/dev/ok"}]},{}],130:[function(e,i,n){var r,o,a,l,d;function c(g,m){return m||(m=g.slice(0)),Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(m)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.ActionBar=void 0;const h=e("../dom"),s=e("../icons"),f=e("./controls");function p(g){return g.options().noSocialLinks===!0||g.options().noSideBar!==!0?null:(0,h.html)(o||(o=c([`
        <div class="h-5 w-5 my-4 text-pink-400 cursor-pointer" onClick=`,`>
            <`,` class="h-5 w-5" />
        </div>
    `])),function(){g.options().windowOpen("https://dos.zone/","_blank")},s.Icons.Plus)}function v(g){if(g.options().noSideBar===!0)return null;function m(){g.sideBar?g.closeSideBar():g.openSideBar()}return g.options().withNetworkingApi!==!0?(0,h.html)(a||(a=c([`
        <div class="h-6 w-6 my-4 text-gray-600 cursor-pointer" onClick=`,`>
            <`,` class="h-6 w-6" />
        </div>
    `])),m,s.Icons.DotsHorizontal):g.ipxConnected?(0,h.html)(l||(l=c([`
        <div class="h-6 w-6 my-4 text-green-400 cursor-pointer" onClick=`,`>
            <`,` class="h-6 w-6" />
        </div>
    `])),m,s.Icons.Online):(0,h.html)(d||(d=c([`
            <div class="h-6 w-6 my-4 relative text-red-800 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
                <span class="animate-ping absolute inline-flex top-0 left-0
                    h-full w-full rounded-full bg-red-400 opacity-75"></span>
            </div>
        `])),m,s.Icons.Offline)}n.ActionBar=function(g){if(!g.actionBar)return null;const m=g.options().noSideBar===!0&&g.options().noSocialLinks===!0;return(0,h.html)(r||(r=c([`
    <div class="bg-gray-200 shadow w-10 h-full overflow-hidden flex flex-col items-center">
        <`," ...",` />
        <`," ...",` />
        <`,` column="true" class="flex-grow 
            `,`" 
            portal=`," ...",` />
    </div>
    `])),v,g,p,g,f.Controls,m?"":" border-t-2 border-gray-400",!0,g)}},{"../dom":151,"../icons":153,"./controls":134}],131:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.ActionHide=void 0;const o=e("../dom"),a=e("../icons");n.ActionHide=function(l){return(0,o.html)(r||(d=[`
    <div class="filter transition-opacity duration-1000
                        bg-gray-200 `,`
                        w-5 h-12
                        rounded-r-md cursor-pointer" onClick=`,`>
        <div class="h-4 w-4 my-4">
            <`,` class="h-4 w-4" />
        </div>
    </div>
    `],c||(c=d.slice(0)),r=Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(c)}}))),l.class,()=>l.setActionBar(!l.actionBar),l.actionBar?a.Icons.ChevronLeft:a.Icons.ChevronRight);var d,c}},{"../dom":151,"../icons":153}],132:[function(e,i,n){var r;e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.ActionSaveOrExit=void 0;const o=e("preact/hooks"),a=e("../dom"),l=e("../icons");n.ActionSaveOrExit=function(d){const c=d.options().onExit,[h,s]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!1),v=typeof c=="function";return(0,o.useEffect)(()=>{const y=d.options().preventUnload;if(!f&&v&&y!==!1)return window.addEventListener("beforeunload",_),()=>{window.removeEventListener("beforeunload",_)};function _(b){if(d.player().ciPromise===void 0)return;const w=v?"Please use close button to save progress before closing!":"Please use save button to save progress before closing!";setTimeout(()=>{d.player().layers.notyf.error(w),s(!0)},16),b.preventDefault(),b.returnValue=w}},[s,d.player,f,c,v]),f?null:(0,a.html)(r||(g=[`
    <div class="`,` flex items-center justify-center 
        filter transition-opacity duration-1000
        bg-gray-200 `,`
        cursor-pointer" onClick=`,`>
        <div class="h-6 w-6">
            <`,` class="h-6 w-6" />
        </div>
    </div>
    `],m||(m=g.slice(0)),r=Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(m)}}))),d.class?d.class:"",h?" text-red-500 animate-pulse":"",async function(){try{s(!1),p(!0);const b=d.player();b.layers.notyf.success("Saving, please wait...");try{await b.layers.save()}catch(w){console.error(w),b.layers.notyf.error(w.message)}if(v){try{var y,_;await((y=(_=d.options()).onBeforeExit)===null||y===void 0?void 0:y.call(_)),await b.stop()}catch(w){console.error(w),b.layers.notyf.error(w.message)}c()}}finally{p(!1)}},v?l.Icons.XCircle:l.Icons.FloppyDisk);var g,m}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],133:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.Client=void 0;const l=e("preact/hooks"),d=e("../dom"),c=e("../icons"),h=e("../dom");n.Client=function(s){const[f,p]=(0,l.useState)(!1);if(s.requestClientId===void 0&&s.clientId===null)return null;if(s.clientId===null){const g=()=>{s.requestClientId!==void 0&&(p(!0),s.requestClientId(!0).then(m=>{p(!1),s.setClientId(m)}).catch(m=>{p(!1),console.error(m)}))};return(0,d.html)(r||(r=a([`
            <div class="flex flex-row justify-center items-center `,`">
                <div class="h-6 w-6 text-red-800 animate-pulse mr-2">
                    <`,` class="h-6 w-6" />
                </div>
                <div class="border-2 rounded px-4
                    `,` 
                    cursor-pointer" onClick=`,`>
                    Login
                </div>
            </div>
        `])),s.class,c.Icons.UserCircle,f?" text-gray-400 border-gray-400":"text-blue-400 border-blue-400",g)}const v=s.clientId.id;return(0,d.html)(o||(o=a([`
        <div class="flex flex-row justify-center `,`">
            <div class="h-6 w-6 text-green-400 mr-2">
                <`,` class="h-6 w-6" />
            </div>
            <div class="flex-shrink overflow-hidden overflow-ellipsis">`,`</div>
            <div class="h-6 w-6 ml-2 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
        </div>
    `])),s.class,c.Icons.UserCircle,v,async function(){s.closeSideBar();const g=s.player();try{await async function(m){if(!m.ciPromise)return;const y=await m.ciPromise,_=await y.persist();(0,h.downloadFile)(_,"saves.zip","application/zip")}(g)}catch(m){g.layers.notyf.error("Unexpected error"),console.error(m)}},c.Icons.Download)}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],134:[function(e,i,n){var r,o,a;function l(p,v){return v||(v=p.slice(0)),Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(v)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.Controls=void 0;const d=e("preact/hooks"),c=e("../dom"),h=e("../icons");function s(p){const[v,g]=(0,d.useState)(!1);async function m(y,_){y.stopPropagation(),await p.setAutolock(_),v&&g(!1)}return(0,c.html)(o||(o=l([`
        <div class="menu-button h-6 w-6 text-green-400 cursor-pointer" onClick=`,`>
            <`,` class="h-6 w-6" />
            <div class="`,` absolute z-50 
                        bg-gray-200 -mt-7 h-8 left-10 flex flex-row items-center
                         rounded-r-md cursor-pointer" onClick=`,`>
                <div class="flex flex-row `,`">
                    <div class="h-6 w-6 mx-2 
                        `,`"
                        onClick=`,`>
                        <`,` class="h-6 w-6" />
                    </div>
                    <div class="h-6 w-6 mx-2 
                        `,`"
                        onClick=`,`>
                        <`,` class="h-6 w-6" />
                    </div>
                </div>
            </div>
        </div>
    `])),async function(y){y.target.classList.contains("sensitivity")||(p.portal?g(!v):await async function(_){await m(_,!p.autolock)}(y),y.preventDefault(),y.stopPropagation())},p.autolock?h.Icons.CursorClick:h.Icons.Cursor,p.portal?"":"hidden",()=>{},v?"":"hidden",p.autolock?"text-black":"text-green-400",y=>m(y,!1),h.Icons.Cursor,p.autolock?"text-green-400":"text-black",y=>m(y,!0),h.Icons.CursorClick)}function f(p){const[v,g]=(0,d.useState)(!1);return(0,c.html)(a||(a=l([`
    <div class="h-6 w-6 text-green-400 cursor-pointer" onClick=`,`>
            <`,` class="h-6 w-6" />
            <div class="`,` absolute z-50 bg-gray-200 -mt-7 h-8 left-10 flex flex-row items-center
                             rounded-r-md cursor-pointer" onClick=`,`>
                <div class="h-6 w-6 mx-2 
                    `,`"
                    onClick=`,`>
                    <`,` class="h-6 w-6" />
                </div>
                <div class="h-6 w-6 mx-2 
                    `,`"
                    onClick=`,`>
                    <`,` class="h-6 w-6" />
                </div>
                <div class="h-6 w-6 mx-2  `,`"
                    onClick=`,`>
                    <`,` class="h-6 w-6" />
                </div>
            </div>
        </div>
    `])),function(){p.portal?g(!v):p.setMobileControls(!p.mobileControls)},p.mirroredControls?h.Icons.SwithcHorizontal:p.mobileControls?h.Icons.Mobile:h.Icons.EyeOff,v?"":"hidden",()=>{},p.mobileControls||p.mirroredControls?"text-black":"text-green-400",async function(m){await p.setMirroredControls(!1),await p.setMobileControls(!1),g(!1),m.stopPropagation()},h.Icons.EyeOff,!p.mirroredControls&&p.mobileControls?"text-green-400":"text-black",async function(m){await p.setMobileControls(!0),await p.setMirroredControls(!1),g(!1),m.stopPropagation()},h.Icons.Mobile,p.mirroredControls?"text-green-400":"text-black",async function(m){await p.setMirroredControls(!0),g(!1),m.stopPropagation()},h.Icons.SwithcHorizontal)}n.Controls=function(p){return(0,c.html)(r||(r=l([`
    <div class="flex `," justify-evenly ",`">
        <`," ...",` />
        <`," ...",` />
        <div class="h-6 w-6 `,` cursor-pointer"
            onClick=`,`>
            <`,` class="h-6 w-6" />
        </div>
        <div class="h-6 w-6 `,' cursor-pointer" onClick=',`>
            <`,` class="h-6 w-6" />
        </div>
        <div class="h-6 w-6 `,' cursor-pointer" onClick=',`>
            <`,` class="h-6 w-6" />
        </div>
        <div class="h-6 w-6 `,` 
        `,' cursor-pointer" onClick=',`>
            <`,` class="h-6 w-6" />
        </div>
    </div>
    `])),p.column?" flex-col":"flex-row",p.class,s,p,f,p,p.pause?" text-red-400 animate-pulse":"font-bold",function(){p.setPause(!p.pause),p.closeSideBar()},p.pause?h.Icons.Play:h.Icons.Pause,p.mute?" text-green-400":"",function(){p.setMute(!p.mute),p.closeSideBar()},p.mute?h.Icons.VolumeOff:h.Icons.VolumeUp,p.keyboard?" text-green-400":"",function(){p.toggleKeyboard(),p.closeSideBar()},h.Icons.PencilAlt,p.fullscreen?" text-green-400":"",p.options().noFullscreen===!0?"hidden":"",function(){p.toggleFullscreen(),p.closeSideBar()},h.Icons.ArrowsExpand)}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],135:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarCpuControl=void 0;const o=e("../dom"),a=e("../icons"),l=e("./horizontal-slider");n.SideBarCpuControl=function(d){return(0,o.html)(r||(c=[`
        <`," minValue="," maxValue=",`
            maxLabel="max"
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `],h||(h=c.slice(0)),r=Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(h)}}))),l.HorizontalSlider,100,5e3,5e3,s=>{},a.Icons.VolumeUp,()=>{},()=>{});var c,h}},{"../dom":151,"../icons":153,"./horizontal-slider":136}],136:[function(e,i,n){var r;e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.HorizontalSlider=void 0;const o=e("preact/hooks"),a=e("../dom");n.HorizontalSlider=function(l){const{minValue:d,maxValue:c,initialValue:h,onChange:s,icon:f}=l,p=c-d,v=(0,o.useRef)(null),[g,m]=(0,o.useState)(h),[y,_]=(0,o.useState)(0);(0,o.useEffect)(()=>{if(v===null||v.current===null)return;let I=!1;const S=v.current,T=M=>{const P=S.getBoundingClientRect(),L=(M.clientX-P.left)/P.width;return Math.max(Math.min(1,L),0)*p},U=M=>{M.target!==S||I||(I=!0,_(80),m(T(M)),M.stopPropagation(),M.preventDefault())},N=M=>{if(!I)return;const P=T(M);m(P),s(P),M.stopPropagation(),M.preventDefault()},x=M=>{if(!I)return;I=!1,_(0);const P=T(M);m(P),s(P),M.stopPropagation(),M.preventDefault()};return window.addEventListener("pointerdown",U),window.addEventListener("pointermove",N),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),S.addEventListener("pointerup",x),S.addEventListener("pointercancel",x),l.registerListner(m),()=>{l.removeListener(m),window.removeEventListener("pointerdown",U),window.removeEventListener("pointermove",N),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),S.removeEventListener("pointerup",x),S.removeEventListener("pointercancel",x)}},[v]);const b=Math.max(0,Math.min(100,Math.round(g/p*100)))+"%";let w=Math.round(10*(d+g))/10+"";return d+g===c&&l.maxLabel!==void 0&&(w=l.maxLabel),(0,a.html)(r||(A=[`
        <div class="h-full flex flex-row py-0 items-center">
            <div class="bg-gray-200 rounded flex items-center justify-center h-6 w-5 lt-4 text-gray-600">
                <`,` class="h-4 w-4" />
            </div>
            <div class="cursor-pointer flex-grow px-4 py-2" ref=`,`>
                <div class=`,`>
                    <div class="flex flex-row items-center absolute -mt-3" style=`,`>
                        <div class="bg-gray-600 -ml-2 flex-shrink-0 w-6 h-6 rounded-full"></div>
                        <div class="bg-green-100 ml-2 py-1 px-2 rounded z-50 `,`">
                            `,`
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    `],E||(E=A.slice(0)),r=Object.freeze(Object.defineProperties(A,{raw:{value:Object.freeze(E)}}))),f,v,"pointer-events-none relative sensitivity rounded-2xl bg-gray-400 h-2 w-full"+(l.class?l.class:""),{left:b},"opacity-"+y,w);var A,E}},{"../dom":151,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],137:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.Region=void 0;const o=e("../dom"),a=e("../icons");n.Region=function(l){let d=l.region;return d!==null&&l.latencyInfo!==null&&(d+=" ("+l.latencyInfo.regionLatency+" ms)"),(0,o.html)(r||(c=[`
        <div class="flex flex-row justify-between items-center `,`">
            <div class="text-gray-600">Region</div>
            <div class="px-4 overflow-hidden overflow-ellipsis whitespace-nowrap flex-shrink">
                `,`
            </div>
            <div class="h-6 w-6 `,`" 
                onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
        </div>
    `],h||(h=c.slice(0)),r=Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(h)}}))),l.class,d||l.estimatingRegion||"Connecting...",l.region===null?"animate-reverse-spin":"cursor-pointer",function(){l.region!==null&&l.setRegion(null)},a.Icons.Refresh);var c,h}},{"../dom":151,"../icons":153}],138:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarScaleControl=n.ActionBarScaleControl=void 0;const l=e("../dom"),d=e("../icons"),c=e("./vertical-slider"),h=e("./horizontal-slider");n.ActionBarScaleControl=function(s){return s.mobileControls||s.mirroredControls?(0,l.html)(r||(r=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),c.VerticalSlider,.8,2.5,s.player().scaleControls,f=>s.player().setScaleControls(f),s.mirroredControls?d.Icons.SwithcHorizontal:d.Icons.Mobile,s.player().registerOnScaleChanged,s.player().removeOnScaleChanged):null},n.SideBarScaleControl=function(s){return(0,l.html)(o||(o=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),h.HorizontalSlider,.8,2.5,s.player().scaleControls,f=>s.player().setScaleControls(f),s.mirroredControls?d.Icons.SwithcHorizontal:d.Icons.Mobile,s.player().registerOnScaleChanged,s.player().removeOnScaleChanged)}},{"../dom":151,"../icons":153,"./horizontal-slider":136,"./vertical-slider":149}],139:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarSensitivityControl=n.ActionBarSensitivityControl=void 0;const l=e("../dom"),d=e("../icons"),c=e("./vertical-slider"),h=e("./horizontal-slider");n.ActionBarSensitivityControl=function(s){return s.autolock?(0,l.html)(r||(r=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),c.VerticalSlider,.1,4,s.player().sensitivity,f=>s.player().setSensitivity(f),d.Icons.CursorClick,s.player().registerOnSensitivityChanged,s.player().removeOnSensitivityChanged):null},n.SideBarSensitivityControl=function(s){return(0,l.html)(o||(o=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),h.HorizontalSlider,.1,4,s.player().sensitivity,f=>s.player().setSensitivity(f),d.Icons.CursorClick,s.player().registerOnSensitivityChanged,s.player().removeOnSensitivityChanged)}},{"../dom":151,"../icons":153,"./horizontal-slider":136,"./vertical-slider":149}],140:[function(e,i,n){var r,o,a;function l(m,y){return y||(y=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(y)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBar=void 0;const d=e("preact/hooks"),c=e("../dom"),h=e("../icons"),s=e("./sidebar/main"),f=e("./sidebar/latency-info"),p=e("./sidebar/networking"),v=e("../backend/v7/latency");function g(m){if(m.options().noSocialLinks===!0)return null;function y(){m.options().windowOpen("https://discord.com/invite/hMVYEbG","_blank")}function _(){m.options().windowOpen("https://t.me/doszonechat","_blank")}return m.sideBarPage==="networking"?(0,c.html)(o||(o=l([`
        <div class="flex flex-row justify-around items-center">
            <div class="font-bold text-purple-600">Matchmaking:</div>
            <div class="h-6 w-6 text-gray-600 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
            <div class="h-4 w-4 mt-0.5 text-gray-600 cursor-poiner" onClick=`,`>
                <`,` class="h-4 w-4" />
            </div>
        </div>
    `])),y,h.Icons.Discord,_,h.Icons.Telegram):(0,c.html)(a||(a=l([`
        <div class="flex flex-row justify-around">
            <div class="h-6 w-6 -mt-1 text-gray-600 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
            <div class="h-4 w-4 text-gray-600 cursor-pointer" onClick=`,`>
                <`,` class="h-4 w-4" />
            </div>
            <div class="h-4 w-4 text-gray-600 cursor-pointer" onClick=`,`>
                <`,` class="h-4 w-4" />
            </div>
            <div class="h-6 w-6 -mt-1 text-gray-600 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
        </div>
    `])),y,h.Icons.Discord,_,h.Icons.Telegram,function(){m.options().windowOpen("https://twitter.com/intent/user?screen_name=doszone_db","_blank")},h.Icons.Twitter,function(){m.options().windowOpen("https://dos.zone/donate/","_blank")},h.Icons.CurrencyDollar)}n.SideBar=function(m){if(!m.sideBar)return null;(0,d.useEffect)(()=>{m.options().withNetworkingApi&&m.region===null&&(0,v.getAutoRegion)(m.setEstimatingRegion).then(_=>{m.setLatencyInfo(_),m.setRegion(_.region)}).catch(console.error)},[m.region]);const y=m.sideBarPage==="networking";return(0,c.html)(r||(r=l([`
    <div class="flex flex-col filter absolute z-50 top-0 bottom-0 right-0 px-8 pt-6
                w-full sm:w-80 rounded-l-lg drop-shadow-lg bg-white overflow-y-auto overflow-x-hidden pb-4">
        <div class="transform absolute text-gray-400 hover:text-gray-800
                            top-2 left-2 cursor-pointer hover:scale-125" onClick=`,`>
            <`,` class="h-6 w-6" />
        </div>
        <div class="transform absolute text-gray-400 hover:text-gray-800
                             top-2 right-2 cursor-pointer hover:scale-125
                             `,'" onClick=',`>
            <`,` class="h-6 w-6" />
        </div>
    
    
        <`," ...",` />
        <`," ...",` />
        <`," ...",` />

        <div class="flex-grow"></div>
    
        <`," ...",` />
    </div>
    `])),function(){m.sideBarPage==="main"?m.closeSideBar():m.setSideBarPage("main")},m.sideBarPage==="main"?h.Icons.XCircle:h.Icons.ArrowsCircleLeft,y?"text-purple-400":"",function(){y?m.options().windowOpen("https://youtu.be/XEoWLQmU168","_blank"):(m.setShowTips(!0),m.closeSideBar())},h.Icons.QuestionMarkCircle,s.Main,m,f.LatencyInfo,m,p.Networking,m,g,m)}},{"../backend/v7/latency":127,"../dom":151,"../icons":153,"./sidebar/latency-info":141,"./sidebar/main":142,"./sidebar/networking":143,"preact/hooks":126}],141:[function(e,i,n){var r,o,a,l,d;function c(f,p){return p||(p=f.slice(0)),Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(p)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.LatencyInfo=void 0;const h=e("../../dom"),s=e("../../icons");n.LatencyInfo=function(f){if(f.latencyInfo===null)return null;const p=g=>{f.setSideBarPage("latency-info"),g.stopPropagation(),g.preventDefault()};if(f.asButton===!0&&f.sideBarPage==="main")return(0,h.html)(r||(r=c([`
        <div class="flex flex-row justify-between items-center cursor-pointer `,` my-2"
            onClick=`,`>
            <div class="">
                Show latency
            </div>
            <div>
                <`,` class="text-green-400 h-6 -w-6" />
            </div>
        </div>
        `])),f.class,p,s.Icons.ArrowsCircleRight);if(f.sideBarPage!=="latency-info")return null;const v=[];for(const g of Object.keys(f.latencyInfo.estimation)){const m=[];m.push((0,h.html)(o||(o=c(['<div class="text-xs w-24 font-bold whitespace-nowrap break-words">',"</div>"])),g));for(let y=0;y<4;++y)m.push((0,h.html)(a||(a=c([`
                <div class="text-xs text-gray-600 text-right">
                    `,`
                </div>
            `])),f.latencyInfo.estimation[g][y]));v.push((0,h.html)(l||(l=c(['<div class="flex flex-row flex-wrap justify-between">',"</div>"])),m))}return(0,h.html)(d||(d=c([`
        <div class="sidebar-header">Latency</div>
        <div class="flex flex-col">
            `,`
        </div>
    `])),v)}},{"../../dom":151,"../../icons":153,"core-js/modules/web.dom-collections.iterator.js":118}],142:[function(e,i,n){var r,o,a,l,d,c,h;function s(I,S){return S||(S=I.slice(0)),Object.freeze(Object.defineProperties(I,{raw:{value:Object.freeze(S)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.Main=void 0;const f=e("../../dom"),p=e("../client"),v=e("../controls"),g=e("../region"),m=e("./latency-info"),y=e("../../icons"),_=(e("../cpu-control"),e("../scale-control")),b=e("../volume-control"),w=e("../sensitivity-control");function A(I){return(0,f.html)(c||(c=s([`<div class="flex flex-row items-center justify-center my-2">
        <div class="w-20 text-sm overflow-hidden overflow-ellipsis">`,`</div>
        <div class="flex-grow"><`," ...",` /></div>
    </div>`])),I.label,I.slideBar,I.appProps)}function E(I){return I.region===null?null:(0,f.html)(h||(h=s([`
        <div class="flex flex-row justify-between items-center cursor-pointer `,`"
                onClick=`,`>
            <div class="">
                `,`
            </div>
            <div>
                <`,` class="text-green-400 h-6 -w-6" />
            </div>
        </div>
    `])),I.class,()=>I.setSideBarPage("networking"),I.ipxConnected?"IPX [Connected]":"Configure networks",y.Icons.ArrowsCircleRight)}n.Main=function(I){if(I.sideBarPage!=="main")return null;const S=I.options().withNetworkingApi===!0;return(0,f.html)(r||(r=s([`
        <`,' class="mt-2 mb-2 pb-2 border-b-2 border-green-200" ...',` />
        <`,' class="mt-2" portal='," ...",` />
        
        `,`
        `,`
        `,`
        `,`

        <div class="sidebar-header mt-8">Configuration</div>
        `,`
        <`,' label="Volume" slideBar='," appProps=",` />
        <`,' label="Sensitivity" slideBar='," appProps=",` />
        <`,' label="Scale" slideBar='," appProps=",` />
    `])),p.Client,I,v.Controls,!1,I,S&&(0,f.html)(o||(o=s(['<div class="sidebar-header mt-8">Networking</div>']))),S&&(0,f.html)(a||(a=s(["<",' class="mt-2" ...'," />"])),g.Region,I),S&&(0,f.html)(l||(l=s(["<"," ...",' class="mt-4" asButton='," />"])),m.LatencyInfo,I,!0),S&&(0,f.html)(d||(d=s(["<"," ...",' class="mt-2" />'])),E,I),!1,A,b.SideBarVolumeControl,I,A,w.SideBarSensitivityControl,I,A,_.SideBarScaleControl,I)}},{"../../dom":151,"../../icons":153,"../client":133,"../controls":134,"../cpu-control":135,"../region":137,"../scale-control":138,"../sensitivity-control":139,"../volume-control":150,"./latency-info":141}],143:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.Networking=void 0;const o=e("../../dom"),a=e("./token/token");n.Networking=function(l){return l.sideBarPage!=="networking"?null:(0,o.html)(r||(d=[`
        <`," ...",` />
    `],c||(c=d.slice(0)),r=Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(c)}}))),a.TokenConfiguration,l);var d,c}},{"../../dom":151,"./token/token":146}],144:[function(e,i,n){var r,o,a,l,d;function c(m,y){return y||(y=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(y)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.TokenAddTime=void 0;const h=e("preact/hooks"),s=e("../../../backend/v7/v7-config"),f=e("../../../dom"),p=e("../../../icons"),v=e("../../../request"),g=1800;n.TokenAddTime=function(m){const[y,_]=(0,h.useState)(null),[b,w]=(0,h.useState)(!1),[A,E]=(0,h.useState)(g),[I,S]=(0,h.useState)(null),[T,U]=(0,h.useState)(!1),N=b||A!==g&&I===null;return(0,f.html)(r||(r=c([`
        <div class="font-bold">Add time:</div>
        `,`
        
        `,`
      
    `])),T?(0,f.html)(o||(o=c([`
            <div class="cursor-pointer underline text-green-600 font-bold" onClick=`,`>
                check payment
            </div> 
        `])),m.update):(0,f.html)(a||(a=c([`
            <div class="flex flex-row">
                <select disabled=`,` class="w-14 flex-grow mr-2 
                    `,` "
                    name="select" onChange=`,`>
                    <option value=`,` selected>FREE</option>
                    <option value="259200">+3 Days</option>
                    <option value="864000">+10 Days</option>
                    <option value="2592000">+30 Days</option>
                </select>
                `,`
            </div>
        `])),b,b?"border-gray-400 disabled:bg-gray-200":"",async function(x){const M=Number.parseInt(x.currentTarget.value);try{w(!0),S(null),E(M),M!==g&&S(await async function(P,L){var F;const q=(F=L.clientId)!==null&&F!==void 0?F:L.anonymousClientId;return(await(0,v.request)(s.checkoutCreateTokenEndpoint,"POST",JSON.stringify({id:q.id,namespace:q.namespace,product:P,token:L.networkToken}))).token}("t_"+M,m))}finally{w(!1)}},g,N?p.Icons.Refresh({class:"h-6 w-6 animate-reverse-spin"}):(0,f.html)(l||(l=c([`
                    <div class="h-6 w-6 cursor-pointer text-green-400 hover:text-green-600"
                        onClick=`,`>
                        <`,` class="h-6 w-6" />
                    </div>
                `])),async function(x){if(x.stopPropagation(),!b){_(null),w(!0);try{if(A===g)await(0,v.request)(s.addFreeTimeTierEndpoint,"POST",JSON.stringify({token:m.networkToken})),m.update();else{if(I===null)throw new Error("accessToken is null");(function(M,P){P(s.checkoutEndpoint+"?token="+M,"_blank")})(I,m.options().windowOpen),setTimeout(()=>{U(!0)},300)}}catch(M){_(function(P){return P==="30-min-required"?"Only 30 minutes interval are enabled":P==="free-soft-limit"?"This token reached free time limit, please use paid time":P==="free-hard-limit"?"All free time of today is used, please use paid time":P==="not-found"?"Token not found":P==="too-early"?"You can add free time only if TTL less then 5 minutes":P}(M.message))}finally{w(!1)}}},p.Icons.Plus)),y?(0,f.html)(d||(d=c([`
            <div class="font-bold text-red-400 col-span-2">*`,`</div>
        `])),y):null)}},{"../../../backend/v7/v7-config":129,"../../../dom":151,"../../../icons":153,"../../../request":156,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],145:[function(e,i,n){var r,o,a,l;function d(v,g){return g||(g=v.slice(0)),Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(g)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.TokenSelect=void 0;const c=e("../../../backend/v7/v7-config"),h=e("preact/hooks"),s=e("../../../request"),f=e("../../../dom"),p=e("../../../icons");n.TokenSelect=function(v){var g;const[m,y]=(0,h.useState)((g=v.networkToken)!==null&&g!==void 0?g:""),[_,b]=(0,h.useState)(null),[w,A]=(0,h.useState)(!1),E=m===v.networkToken||m==="";function I(T){var U;y(((U=T.currentTarget.value)!==null&&U!==void 0?U:"").toLowerCase().trim())}async function S(){A(!0);try{if(E)return void(v.networkToken!==null&&window.confirm("Are you sure want to create token?")!==!0||await async function(){var U;if(w||v.region===null)return void b("region is not selected");b(null),A(!0);const N=(U=v.clientId)!==null&&U!==void 0?U:v.anonymousClientId;try{const x=await(0,s.request)(c.createTokenEndpoint,"POST",JSON.stringify({namespace:N.namespace,id:N.id,region:v.region}));v.setNetworkToken(x.token)}catch(x){b(x.message)}finally{A(!1)}}());const T=m.length===0?null:m;if(T===v.networkToken)return;window.confirm(T===null?"Are you sure want to reset?":"Are you sure want to switch token?")===!0&&(T!==null&&await async function(U){await(0,s.request)(c.tokeInfoGetEndpoint+"?token="+U)}(T),v.setNetworkToken(m))}catch(T){b("Token error: "+T.message)}finally{A(!1)}}return(0,f.html)(r||(r=d([`
        <div class="font-bold">Token:</div>

        `,`
        
        `,`
    `])),w?(0,f.html)(o||(o=d([`
            <div class="col-span-2">
                <`,` class="w-6 h-6 animate-reverse-spin" />
            </div>
        `])),p.Icons.Refresh):(0,f.html)(a||(a=d([`
        <div class="flex flex-row">
            <input class="rounded border `,` 
                px-2 w-14 flex-grow mr-2" type="text" value=`,` 
                onChange=`," onKeyUp="," onKeyDown=",` />
            <div class="h-6 w-6 cursor-pointer `,`" 
                onClick=`,`>
                <`,` 
                    class="h-6 w-6" />
            </div>
        </div>
        `])),m===""?"border-red-600":"border-green-200",m,I,function(T){I(T),T.key==="Enter"&&S(),T.stopPropagation()},function(T){T.stopPropagation()},E?"text-green-400 hover:text-green-600":"",S,E?p.Icons.Plus:p.Icons.SwithcHorizontal),_?(0,f.html)(l||(l=d([`
            <div class="text-red-400 col-span-2">`,`</div>
        `])),_):null)}},{"../../../backend/v7/v7-config":129,"../../../dom":151,"../../../icons":153,"../../../request":156,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],146:[function(e,i,n){var r,o,a,l,d,c,h,s,f,p,v,g;function m(x,M){return M||(M=x.slice(0)),Object.freeze(Object.defineProperties(x,{raw:{value:Object.freeze(M)}}))}e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.string.replace.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.TokenConfiguration=void 0;const y=e("preact/hooks"),_=e("../../../backend/v7/v7-config"),b=e("../../../dom"),w=e("../../../icons"),A=e("../../../xhr"),E=e("../../../request"),I=e("./token-select"),S=e("./token-add-time");function T(x){const[M,P]=(0,y.useState)(x.endTime-Date.now());return(0,y.useEffect)(()=>{if(M<=0)return;const L=setInterval(()=>{const F=Math.max(0,x.endTime-Date.now());F===0&&(x.update(),clearInterval(L)),P(F)},1e4);return()=>clearInterval(L)},[x.endTime]),(0,b.html)(c||(c=m([`
        <div class="font-bold">TTL:</div>
        <div class="`,` cursor-pointer underline"
            onClick=`,`>
            `,`
        </div>
    `])),M<3e5?" text-red-400":"text-gray-400",x.update,function(L){if(L>86400){const F=Math.round(L/24/60/60*10)/10;return F+(F===1?" Day":" Days")}if(L>3600){const F=Math.round(L/60/60*10)/10;return F+(F===1?" Hour":" Hrs")}return Math.round(L/60*10)/10+" Min"}(M/1e3))}function U(x){const[M,P]=(0,y.useState)(!1),[L,F]=(0,y.useState)(null);function q(){P(!0),(0,A.postObject)(_.stopIpx+"?token=".concat(x.networkToken,"&arn=").concat(x.ipx.arn)).then(()=>{P(!1),x.ipx.setAddress(null),x.ipx.setAwaitingAddress(!1)}).catch(j=>{var W;console.error("Can't stop ipx",j),F((W=j.errorCode)!==null&&W!==void 0?W:j.message),P(!1)})}if(L!==null)return(0,b.html)(h||(h=m([`
            <div class="text-red-400 col-span-2">`,`</div>
        `])),L);if(M)return(0,b.html)(s||(s=m([`
            <`,` class="w-6 h-6 col-span-2 animate-reverse-spin" />
        `])),w.Icons.Refresh);if(x.ipx.address!==null){const j=x.ipxConnected?"Disconnect":x.ipx.awaitingConnection?"Connecting...":"Connect",W=()=>{x.ipx.awaitingConnection||function(){var D;const C=!x.ipxConnected,R=x.ipx.address;R&&((D=x.player().ciPromise)===null||D===void 0||D.then(O=>C?(x.ipx.setAwaitingConnection(!0),location.protocol==="http:"&&x.options().hardware===void 0&&R.endsWith(".jj.dos.zone")?O.networkConnect(0,"ws://"+R.substring(0,R.length-12).replace(/_/g,"."),1901):O.networkConnect(0,R,1901)):O.networkDisconnect(0)).then(()=>{x.ipx.setAwaitingConnection(!1),x.setIpxConnected(C),C&&(x.player().layers.notyf.success("Connected"),x.closeSideBar())}).catch(O=>{x.ipx.setAwaitingConnection(!1),console.error(O),F(O.message)}))}()};return(0,b.html)(f||(f=m([`
            <div class="font-bold">IPX:</div>
            <div class="font-bold text-gray-400 text-xs break-all -mx-6 text-center">`,`</div>
            <div class=""></div>
            <div class="`,`
                cursor-pointer rounded uppercase text-center px-2 py-1"
                onClick=`,">",`</div>
            <div class="`,`"></div>
            <div class="`,`
                bg-gray-200 cursor-pointer rounded uppercase text-center px-4 py-1"
                onClick=`,`>Stop</div>
        `])),x.ipx.address,x.ipxConnected?" bg-red-200":"bg-green-200",W,j,x.ipxConnected?"hidden":"",x.ipxConnected?"hidden":"none",q)}return x.ipx.awaitingAddress?(0,b.html)(p||(p=m([`
            <div class="font-bold">IPX:</div>
            <`,` />
            <div class=""></div>
            <div class="bg-gray-200 cursor-pointer rounded uppercase text-center px-4 py-1" onClick=`,`>Stop</div>
        `])),N,q):(0,b.html)(v||(v=m([`
        <div class="font-bold">IPX:</div>
        <div class="bg-green-200 cursor-pointer rounded uppercase text-center px-4 py-1" onClick=`,`>Start</div>
    `])),function(){P(!0),(0,A.getObject)(_.startIpx+"?token=".concat(x.networkToken)).then(j=>{P(!1),x.ipx.setArn(j.arn),x.ipx.setAwaitingAddress(!0)}).catch(j=>{var W;console.error("Can't start ipx",j),F((W=j.errorCode)!==null&&W!==void 0?W:j.message),P(!1)})})}function N(){const[x,M]=(0,y.useState)(30);return(0,y.useEffect)(()=>{if(x===0)return;const P=setTimeout(()=>{M(x-1)},1e3);return()=>clearTimeout(P)},[x]),(0,b.html)(g||(g=m([`
        <div class="text-gray-400 flex flex-row">
            <`,` class="w-6 h-6 animate-reverse-spin mr-2" />
            `,`
        </div>
    `])),w.Icons.Refresh,x>0?x+" sec":"")}n.TokenConfiguration=function(x){const[M,P]=(0,y.useState)(null),[L,F]=(0,y.useState)(!0),[q,j]=(0,y.useState)(Date.now()),[W,D]=(0,y.useState)(null),[C,R]=(0,y.useState)(null),[O,B]=(0,y.useState)(!1),[G,Y]=(0,y.useState)(!1),H={arn:W,setArn:D,address:C,setAddress:R,awaitingAddress:O,setAwaitingAddress:B,awaitingConnection:G,setAwaitingConnection:Y},te={...x,ipx:H,update:ue};async function ue(){if(D(null),R(null),B(!1),F(!0),x.networkToken===null)return P(null),void F(!1);(0,E.request)(_.tokeInfoGetEndpoint+"?token=".concat(x.networkToken)).then(J=>{P(J),F(!1),j(Date.now()+1e3*J.ttlSec),J.ipxArn!==void 0&&D(J.ipxArn),J.ipxAddress!==void 0?R(J.ipxAddress):J.ipxArn!==void 0&&B(!0)}).catch(J=>{console.error("Can't get a token",x.networkToken,J),P(null),F(!1)})}if((0,y.useEffect)(()=>{ue()},[x.networkToken]),(0,y.useEffect)(()=>{if(x.networkToken===null||q<Date.now())return;const J=setInterval(()=>{(0,E.request)(_.tokeInfoGetEndpoint+"?token=".concat(x.networkToken)).then(re=>{re.ipxArn||(re.ipxArn=null),re.ipxAddress||(re.ipxAddress=null),W===re.ipxArn?re.ipxAddress!==C&&(R(re.ipxAddress),B(!1)):ue()})},5e3);return()=>{clearInterval(J)}},[x.networkToken,q,W,C]),L)return(0,b.html)(r||(r=m([`
            <div class="sidebar-header">Configuration</div>
            <div class="grid grid-cols-2 gap-4">
                <`,` class="w-6 h-6 animate-reverse-spin" />
            </div>
    `])),w.Icons.Refresh);if(M===null)return(0,b.html)(o||(o=m([`
            <div class="sidebar-header">Configuration</div>
            <div class="grid grid-cols-2 gap-4">
                <`," ..."," networkToken=",` />
            </div>
        `])),I.TokenSelect,x,null);const _e=(0,b.html)(a||(a=m([`
        <div class="sidebar-header flex flex-row justify-center items-center">
            Configuration
            <div onClick=`,` >
                <`,` class="h-4 w-4 ml-2 cursor-pointer" />
            </div>
        </div>
    `])),ue,w.Icons.Refresh);return q<Date.now()?(0,b.html)(l||(l=m([`
            `,`
            <div class="grid grid-cols-2 gap-4">
                <`," ...",` />
                <div class="font-bold">Region:</div>
                <div class="text-gray-400">`,`</div>
                <div class="font-bold">TTL:</div>
                <div class="text-red-400">0 Min</div>
                <`," ...",` />
            </div>
        `])),_e,I.TokenSelect,x,M.region,S.TokenAddTime,te):(0,b.html)(d||(d=m([`
        `,`
        <div class="grid grid-cols-2 gap-4">
            <`," ...",` />
            <div class="font-bold">Region:</div>
            <div class="text-gray-400">`,`</div>
            <`," endTime="," update=",` />
            <`," ...",` />
            <`," ...",` />
        </div>
    `])),_e,I.TokenSelect,x,M.region,T,q,ue,S.TokenAddTime,te,U,te)}},{"../../../backend/v7/v7-config":129,"../../../dom":151,"../../../icons":153,"../../../request":156,"../../../xhr":157,"./token-add-time":144,"./token-select":145,"core-js/modules/es.string.replace.js":117,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],147:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.SyncMouseControl=void 0;const o=e("../dom"),a=e("../icons");n.SyncMouseControl=function(l){var d,c;if(!l.autolock)return(0,o.html)(r||(d=[`
        <div class="flex flex-col items-center bg-gray-200 my-2 py-2 rounded">
            <div class="text-gray-400 h-6 w-4 border-b border-gray-400">
                <`,` class="h-4 w-4" />
            </div>
            <div class="cursor-pointer h-6 w-6 mt-2" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
        </div>
    `],c||(c=d.slice(0)),r=Object.freeze(Object.defineProperties(d,{raw:{value:Object.freeze(c)}}))),a.Icons.Cursor,function(h){var s;(s=l.player().ciPromise)===null||s===void 0||s.then(f=>{f.sendMouseSync()}),h.stopPropagation(),h.preventDefault()},a.Icons.Refresh)}},{"../dom":151,"../icons":153}],148:[function(e,i,n){var r,o,a,l,d,c,h,s;function f(_,b){return b||(b=_.slice(0)),Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(b)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.Tips=void 0;const p=e("preact/hooks"),v=e("../dom"),g=e("../icons"),m={mouseLockMobile:{title:"Mouse lock",tip:(0,v.html)(r||(r=f([`
        <div>
            <div class="flex flex-col">
                <p class=""> 
                    <strong>This game is controlled by gestures.</strong>
                </p>
                <p class="pt-2">
                    When you tap on the screen, the DOS game will receive click events without
                    mouse coordinates. <b>The click will be simulated in place where game cursor 
                    is, without moving it.</b>
                </p>
                <p class="pt-2">
                    <strong>To move the game cursor</strong>, you need to put your finger on the screen and move it in
                    the wanted direction until the game cursor reaches the desired position. After that,
                    you can release your finger.
                </p>
                <p class="pt-2">
                    You can <strong>change sensitivity</strong> of the mouse inside the
                    submenu of icon <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />.
                </p>
            </div>
        </div>
        `])),g.Icons.CursorClick)},mouseLockDesktop:{title:"Mouse lock",tip:(0,v.html)(o||(o=f([`
        <div>
            <div class="flex flex-col">
                <p class=""> 
                    <strong>The game will lock the browser cursor.</strong>
                </p>
                <p class="pt-2">
                    When the mouse is locked, the DOS game exclusively controls the mouse and
                    the cursor can't leave the game screen. 
                </p>
                <p class="pt-2">
                    You can <strong>change sensitivity</strong> of the mouse inside the
                    submenu of icon <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />.
                </p>
                <p class="pt-2">
                    To exit from lock mode, please use the <strong>Escape</strong> key.
                </p>
            </div>
        </div>
        `])),g.Icons.CursorClick)},lockSwitch:{title:"Mouse Locking",tip:(0,v.html)(a||(a=f([`
        <div class="flex flex-col">
            <p class="">
                By clicking on the pointer icon, you can switch between <b>regular mouse emulation</b> and 
                <b>lock mode</b>.
            </p>
            <div class="mt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    - In regular mouse emulation mode, the game will receive
                    browser pointer coordinates. If the browser pointer and game pointer are out of sync, use the
                </p>
                <`,` class="h-4 w-4 text-green-600 mx-2 inline-block" />
                <p class="inline">
                    refresh control to synchronize DOS and browser pointer position.
                </p>
            </div>
            <div class="mt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    - lock mouse emulation mode.
                </p>
            </div>
            <div class="mt-2">
                <strong>On desktop</strong>, the DOS game exclusively controls the mouse and
                the cursor can't leave the game screen.
            </div>
            <div class="mt-2">
                <strong>On mobile</strong>, the DOS game will be controlled by gestures.
            </div>
        </div>
        `])),g.Icons.Cursor,g.Icons.Refresh,g.Icons.CursorClick)},mobile:{title:"Mobile Controls",tip:(0,v.html)(l||(l=f([`
        <div class="flex flex-col">
            <p>
                You can change the visibility of mobile controls by pressing one of these buttons:
            </p>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  shows the mobile controls if they are provided by the game.
                </p>
            </div>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  shows the mobile controls but <strong>mirrored</strong>.
                </p>
            </div>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  completely hide the mobile controls.
                </p>
            </div>
            <p class="pt-2">
                You can <b>change size</b> of mobile controls inside the submenu.
            </p>
        </div>
        `])),g.Icons.Mobile,g.Icons.SwithcHorizontal,g.Icons.EyeOff)},sidebar:{title:"Sidebar",tip:(0,v.html)(d||(d=f([`
        <div class="flex flex-col">
            <div>
                On the left side of the screen, you will see a sidebar; it has a set of useful controls.
                You can hide it at any time by pressing on the arrow in the middle.
            </div>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  pause/resume game,
                </p>
            </div>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  mute/unmute sound,
                </p>
            </div>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  toggle soft keyboard,
                </p>
            </div>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  toggle fullscreen,
                </p>
            </div>
            <div class="pt-2">
                <`,` class="h-4 w-4 text-green-600 mr-2 inline-block" />
                <p class="inline">
                    -  will open the settings sidebar, where you can change additional
                    settings of js-dos, like networking.
                </p>
            </div>
        </div>
        `])),g.Icons.Pause,g.Icons.VolumeUp,g.Icons.PencilAlt,g.Icons.ArrowsExpand,g.Icons.DotsHorizontal)},saveLoad:{title:"Save/Load",tip:(0,v.html)(c||(c=f([`
        <div>
            <div class="flex flex-col">
                <p class=""> 
                    js-dos supports saving and restoring game progress. You can play a game from time to time 
                    without losing progress. This works automatically or by pressing the
                    <`,` class="h-4 w-4 text-green-600 mx-1 -mt-1 inline-block" />
                    icon.
                </p>
                <p class="pt-2">
                    However, it works only if the DOS game itself supports save and load commands.
                    <strong> You need to save your progress in the DOS game before stopping the emulator.</strong>
                </p>
            </div>
        </div>
        `])),g.Icons.FloppyDisk)}},y=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())?["mouseLockMobile","mobile","sidebar","saveLoad","lockSwitch"]:["mouseLockDesktop","sidebar","saveLoad","lockSwitch"];n.Tips=function(_){const b=_.showTips,[w,A]=(0,p.useState)(0);if((0,p.useEffect)(()=>{b&&A(_.player().autolock?0:1)},[b]),!b)return null;const E=m[y[w]],I=w===y.length-1;return(0,v.html)(h||(h=f([`
    <div class="absolute bg-gray-500 bg-opacity-80 left-0 top-0 right-0 bottom-0 
        flex flex-col items-center justify-center z-50">
        <div class="rounded bg-gray-200 shadow-lg w-3/4 sm:w-1/2 p-2 border-b border-gray-800 overflow-auto">
            <div class="flex row justify-between mb-2">
                <div class="h-6 w-6 text-gray-400">
                    <`,` class="h-6 w-6" />
                </div>
                <div class="text-lg font-bold">`,`</div>
                <div class="h-6 w-6 cursor-pointer" onClick=`,`>
                    <`,` class="h-6 w-6" />
                </div>
            </div>
            <div class="text-sm px-2 overflow-hidden max-h-72">
                `,`
            </div>
            <div class="flex flex-row justify-center mt-2" onClick=`,`>
                <p class="uppercase cursor-pointer text-blue-900 mr-2">`,`</p>
                `,`
            </div>
        </div>
    </div>
    `])),g.Icons.InformationCircle,E.title,()=>_.setShowTips(!1),g.Icons.XCircle,E.tip,function(S){I?_.setShowTips(!1):A((w+1)%y.length),S.stopPropagation(),S.preventDefault()},I?"Close":"Next",!I&&(0,v.html)(s||(s=f([`
                    <div class="h-6 w-6 cursor-pointer text-blue-900">
                        <`,` class="h-6 w-6" />
                    </div>`])),g.Icons.ArrowsCircleRight))}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],149:[function(e,i,n){var r;e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.VerticalSlider=void 0;const o=e("preact/hooks"),a=e("../dom");n.VerticalSlider=function(l){const{minValue:d,maxValue:c,initialValue:h,onChange:s,icon:f}=l,p=c-d,v=(0,o.useRef)(null),[g,m]=(0,o.useState)(h),[y,_]=(0,o.useState)(0);(0,o.useEffect)(()=>{if(v===null||v.current===null)return;let E=!1;const I=v.current,S=x=>{const M=I.getBoundingClientRect(),P=1-(x.clientY-M.top)/M.height;return Math.max(Math.min(1,P),0)*p},T=x=>{x.target!==I||E||(E=!0,_(80),m(S(x)),x.stopPropagation(),x.preventDefault())},U=x=>{if(!E)return;const M=S(x);m(M),s(M),x.stopPropagation(),x.preventDefault()},N=x=>{if(!E)return;E=!1,_(0);const M=S(x);m(M),s(M),x.stopPropagation(),x.preventDefault()};return window.addEventListener("pointerdown",T),window.addEventListener("pointermove",U),window.addEventListener("pointerup",N),window.addEventListener("pointercancel",N),I.addEventListener("pointerup",N),I.addEventListener("pointercancel",N),l.registerListner(m),()=>{l.removeListener(m),window.removeEventListener("pointerdown",T),window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",N),window.removeEventListener("pointercancel",N),I.removeEventListener("pointerup",N),I.removeEventListener("pointercancel",N)}},[v]);const b=100-Math.max(0,Math.min(100,Math.round(g/p*100)))+"%";return(0,a.html)(r||(w=[`
        <div class="h-full flex flex-col py-0 items-center">
            <div class="bg-gray-200 rounded flex items-center justify-center h-6 w-5 mt-4 text-gray-600">
                <`,` class="h-4 w-4" />
            </div>
            <div class="cursor-pointer flex-grow py-4 px-2" ref=`,`>
                <div class=`,`>
                    <div class="flex flex-row items-center absolute -mt-3" style=`,`>
                        <div class="bg-gray-600 -ml-2 flex-shrink-0 w-6 h-6 rounded-full"></div>
                        <div class="bg-green-100 ml-2 py-1 px-2 rounded z-50 `,`">
                            `,`
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    `],A||(A=w.slice(0)),r=Object.freeze(Object.defineProperties(w,{raw:{value:Object.freeze(A)}}))),f,v,"pointer-events-none relative sensitivity rounded-2xl bg-gray-400 w-2 h-full"+(l.class?l.class:""),{top:b},"opacity-"+y,Math.round(10*(d+g))/10);var w,A}},{"../dom":151,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],150:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarVolumeControl=n.ActionBarVolumeControl=void 0;const l=e("../dom"),d=e("../icons"),c=e("./vertical-slider"),h=e("./horizontal-slider");n.ActionBarVolumeControl=function(s){return s.mobileControls||s.mirroredControls?null:(0,l.html)(r||(r=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),c.VerticalSlider,0,1,s.player().volume,f=>s.player().setVolume(f),d.Icons.VolumeUp,s.player().registerOnVolumeChanged,s.player().removeOnVolumeChanged)},n.SideBarVolumeControl=function(s){return(0,l.html)(o||(o=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),h.HorizontalSlider,0,1,s.player().volume,f=>s.player().setVolume(f),d.Icons.VolumeUp,s.player().registerOnVolumeChanged,s.player().removeOnVolumeChanged)}},{"../dom":151,"../icons":153,"./horizontal-slider":136,"./vertical-slider":149}],151:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/web.url.js"),e("core-js/modules/web.url-search-params.js");var r=function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(n,"__esModule",{value:!0}),n.downloadFile=n.click=n.createDiv=n.activeClass=n.primaryClass=n.disabledClass=n.goneClass=n.html=void 0;const o=e("preact"),a=r(e("htm"));n.html=a.default.bind(o.h),n.goneClass="jsdos-player-gone",n.disabledClass="jsdos-player-button-disabled",n.primaryClass="jsdos-player-button-primary",n.activeClass="jsdos-player-button-active",n.createDiv=function(d,c){const h=document.createElement("div");if(typeof d=="string")h.className=d;else for(const s of d)h.classList.add(s);return c!==void 0&&(h.innerHTML=c),h},n.click=function(d,c){for(const h of emulatorsUi.dom.pointers.bind.enders)d.addEventListener(h,()=>{d.classList.contains("jsdos-player-button-disabled")||c(d)})};let l=null;n.downloadFile=function(d,c,h){const s=new Blob([d],{type:h});l!==null&&window.URL.revokeObjectURL(l),l=window.URL.createObjectURL(s);const f=document.createElement("a");f.href=l,f.download=c,f.style.display="none",document.body.appendChild(f),f.click(),f.remove()}},{"core-js/modules/web.dom-collections.iterator.js":118,"core-js/modules/web.url-search-params.js":120,"core-js/modules/web.url.js":122,htm:123,preact:125}],152:[function(e,i,n){function r(g,m,y){return m in g?Object.defineProperty(g,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):g[m]=y,g}e("core-js/modules/es.string.replace.js");var o=Object.create?function(g,m,y,_){_===void 0&&(_=y);var b=Object.getOwnPropertyDescriptor(m,y);b&&!("get"in b?!m.__esModule:b.writable||b.configurable)||(b={enumerable:!0,get:function(){return m[y]}}),Object.defineProperty(g,_,b)}:function(g,m,y,_){_===void 0&&(_=y),g[_]=m[y]},a=Object.create?function(g,m){Object.defineProperty(g,"default",{enumerable:!0,value:m})}:function(g,m){g.default=m},l=function(g){if(g&&g.__esModule)return g;var m={};if(g!=null)for(var y in g)y!=="default"&&Object.prototype.hasOwnProperty.call(g,y)&&o(m,g,y);return a(m,g),m};Object.defineProperty(n,"__esModule",{value:!0}),n.hardwareTransportLayerFactory=n.HardwareTransportLayerFactory=void 0;const d=l(e("base64-js")),c=new TextDecoder;class h{constructor(m){r(this,"sessionId",Date.now()+""),r(this,"hardware",void 0),r(this,"alive",!0),r(this,"frameWidth",0),r(this,"frameHeight",0),r(this,"handler",()=>{}),this.hardware=m}callMain(){this.hardware.sendMessage(`wc-install
`+this.sessionId+`
`),requestAnimationFrame(this.update.bind(this))}async sendMessageToServer(m,y){if(y!==void 0&&(y==null?void 0:y.sessionId)===this.sessionId)switch(m){case"wc-run":{let _=f(this.hardware,"bundle_0.zip",y.bundles[0]);if(_.length>0)throw console.error(_),new Error(_);if(y.bundles[1]!==void 0&&(_=f(this.hardware,"bundle_1.zip",y.bundles[1]),_.length>0))throw console.error(_),new Error(_);const b=`wc-run
`;this.hardware.sendMessage(b)}break;case"wc-add-key":this.hardware.addKey(y.key,y.pressed?1:0,y.timeMs);break;case"wc-pause":this.hardware.sendMessage(`wc-pause
`+this.sessionId+`
`);break;case"wc-resume":this.hardware.sendMessage(`wc-resume
`+this.sessionId+`
`);break;case"wc-mute":this.hardware.sendMessage(`wc-mute
`+this.sessionId+`
`);break;case"wc-unmute":this.hardware.sendMessage(`wc-unmute
`+this.sessionId+`
`);break;case"wc-exit":this.alive=!1,this.hardware.sendMessage(`wc-exit
`+this.sessionId+`
`);break;case"wc-mouse-move":this.hardware.mouseMove(y.x,y.y,y.relative,y.timeMs);break;case"wc-mouse-button":this.hardware.mouseButton(y.button,y.pressed?1:0,y.timeMs);break;case"wc-pack-fs-to-bundle":this.hardware.sendMessage(`wc-pack-fs-to-bundle
`+this.sessionId+`
`);break;case"wc-connect":this.hardware.sendMessage(`wc-connect
`+this.sessionId+`
`+y.networkType+`
`+y.address.replace("ws://","").replace("wss://","")+`
`+(y.port-1)+`
`);break;case"wc-disconnect":this.hardware.sendMessage(`wc-disconnect
`+this.sessionId+`
`+y.networkType+`
`);break;default:console.log("Unhandled client message (wc):",m,y)}}initMessageHandler(m){this.handler=m}exit(){this.alive=!1}async onServerMessage(m,y){const _=y||{};switch(m){case"ws-server-ready":{const b=this.hardware.readConfig();this.handler("ws-config",{sessionId:this.sessionId,content:b})}break;case"ws-sound-init":this.handler(m,_),this.handler("ws-server-ready",{sessionId:this.sessionId});break;case"ws-frame-set-size":this.frameWidth=_.width,this.frameHeight=_.height,this.handler(m,_);break;case"ws-sound-push":case"ws-update-lines":default:this.handler(m,_);break;case"ws-persist":_.bundle=p(_.bundle),this.handler(m,_);break;case"ws-log":case"ws-warn":case"ws-err":case"ws-stdout":_.message!==void 0&&_.message!==null&&_.message.length>0&&(_.message=c.decode(p(_.message))),this.handler(m,_)}}update(){this.alive&&requestAnimationFrame(this.update.bind(this)),this.updateFrame()}updateFrame(){if(this.frameWidth===0||this.frameHeight===0)return;const m=this.hardware.getFramePayload();if(m.length===0)return;const y=p(m);if(y.length===0)return;const _=[],b=3*this.frameWidth;let w=this.frameHeight,A=-1;for(let E=0;E<this.frameHeight;++E){const I=E===this.frameHeight-1;if(y[E]===1&&A===-1)A=E;else if((I||y[E]===0)&&A!==-1){const S=((y[E]===1?E:E-1)-A+1)*b,T=y.slice(w,w+S);_.push({start:A,heapu8:T}),w+=S,A=-1}}this.handler("ws-update-lines",{sessionId:this.sessionId,lines:_})}}class s{constructor(){r(this,"serverMessageHandler",()=>{}),window.serverMessage=m=>{if(typeof m=="string"){const y="{"+c.decode(p(m)).slice(0,-1)+"}";try{const _=JSON.parse(y);this.serverMessageHandler(_.name,_)}catch(_){throw console.error("Can't parse",y,_),_}}else this.serverMessageHandler(m.name,m)},this.createTransportLayer=this.createTransportLayer.bind(this)}createTransportLayer(m){const y=new h(m);return this.serverMessageHandler=y.onServerMessage.bind(y),y.callMain(),y}}function f(g,m,y){if(g.writeFile!==void 0)return g.writeFile(m,v(y));let _=g.createFile(m);if(_.length>0)return _;let b=0;for(;b<y.length;){const w=Math.min(4194304,y.length-b),A=y.subarray(b,b+w);if(_=g.appendFile(v(A)),_.length>0)return _;b+=w}return _=g.closeFile(),_}function p(g){return d.toByteArray(g)}function v(g){return d.fromByteArray(g)}n.HardwareTransportLayerFactory=s,n.hardwareTransportLayerFactory=new s},{"base64-js":1,"core-js/modules/es.string.replace.js":117}],153:[function(e,i,n){var r,o,a,l,d,c,h,s,f,p,v,g,m,y,_,b,w,A,E,I,S,T,U,N,x,M,P,L,F,q,j;function W(C,R){return R||(R=C.slice(0)),Object.freeze(Object.defineProperties(C,{raw:{value:Object.freeze(R)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.Icons=void 0;const D=e("./dom");n.Icons={XCircle:C=>(0,D.html)(r||(r=W([`
    <svg fill="none" class=`,` viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),UserCircle:C=>(0,D.html)(o||(o=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),Mobile:C=>(0,D.html)(a||(a=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
`])),C.class),SwithcHorizontal:C=>(0,D.html)(l||(l=W([`
    <svg class="`,`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
`])),C.class),EyeOff:C=>(0,D.html)(d||(d=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
`])),C.class),Pause:C=>(0,D.html)(c||(c=W([`
    <svg className=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),Play:C=>(0,D.html)(h||(h=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),VolumeUp:C=>(0,D.html)(s||(s=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
    </svg>
`])),C.class),VolumeOff:C=>(0,D.html)(f||(f=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            clip-rule="evenodd" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
`])),C.class),PencilAlt:C=>(0,D.html)(p||(p=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
`])),C.class),ArrowsExpand:C=>(0,D.html)(b||(b=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
`])),C.class),ArrowsCircleLeft:C=>(0,D.html)(w||(w=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
    </svg>
`])),C.class),ArrowsCircleRight:C=>(0,D.html)(A||(A=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),ChevronLeft:C=>(0,D.html)(v||(v=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
`])),C.class),ChevronRight:C=>(0,D.html)(g||(g=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
`])),C.class),DotsHorizontal:C=>(0,D.html)(m||(m=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
`])),C.class),Download:C=>(0,D.html)(y||(y=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
`])),C.class),Upload:C=>(0,D.html)(_||(_=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
`])),C.class),Plus:C=>(0,D.html)(E||(E=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
`])),C.class),CursorClick:C=>(0,D.html)(I||(I=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
`])),C.class),Cursor:C=>(0,D.html)(S||(S=W([`
    <svg class=`,` fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M 7 2 L 7 18.5 L 11.09375 14.605469 L 14.300781 22 L 16.5 21 L 13.195312 13.701172 L 13.199219 13.699219 L 19 13.199219 L 7 2 z M 9 6.6015625 L 14.347656 11.59375 L 13.029297 11.707031 L 12.708984 11.734375 L 12.412109 11.861328 L 10.3125 12.761719 L 9.9824219 12.904297 L 9.7226562 13.152344 L 9 13.837891 L 9 6.6015625 z" />
    </svg>
`])),C.class),Refresh:C=>(0,D.html)(T||(T=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
`])),C.class),CurrencyDollar:C=>(0,D.html)(U||(U=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),QuestionMarkCircle:C=>(0,D.html)(N||(N=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),Discord:C=>(0,D.html)(x||(x=W([`
    <svg class=`,` fill="none" viewBox="0 0 245 240" stroke="currentColor">
        <style>.st0{fill:#5c7080;}</style>
        <path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
    </svg>
`])),C.class),Telegram:C=>(0,D.html)(P||(P=W([`
    <svg class=`,` fill="none" viewBox="0 0 240 240" stroke="currentColor">
        <defs>
            <linearGradient id="A" x1="160.01" x2="100.01" y1="40.008" y2="180" gradientUnits="userSpaceOnUse">
                <stop stop-color="#758599" offset="0"/>
                <stop stop-color="#556559" offset="1"/>
            </linearGradient>
        </defs>
        <circle fill="url(#A)" r="120" cy="120" cx="120"/><path d="M49.942 118.96l80.81-33.295c7.977-3.468 35.03-14.566 35.03-14.566s12.486-4.855 11.445 6.936c-.347 4.855-3.12 21.85-5.896 40.23l-8.67 54.45s-.694 7.977-6.6 9.364-15.607-4.855-17.34-6.243c-1.387-1.04-26.012-16.647-35.03-24.277-2.428-2.08-5.202-6.243.347-11.098 12.486-11.445 27.4-25.665 36.416-34.682 4.162-4.162 8.324-13.873-9.017-2.08l-48.902 32.948s-5.55 3.468-15.954.347-22.543-7.283-22.543-7.283-8.324-5.202 5.896-10.75z" fill="#fff"/>
    </svg>
`])),C.class),Twitter:C=>(0,D.html)(M||(M=W([`
    <svg class=`,` fill="none" viewBox="0 0 400 400" stroke="currentColor">
        <style type="text/css">
            .st0{fill:#5c7080;}
        </style>
        <path class="st0" d="M400,200c0,110.5-89.5,200-200,200S0,310.5,0,200S89.5,0,200,0S400,89.5,400,200z M163.4,305.5
            c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6
            c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,0-48.2,21.6-48.2,48.2
            c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6
            c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5
            c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5"/>
    </svg>
`])),C.class),FloppyDisk:C=>(0,D.html)(L||(L=W([`
    <svg class=`,` style="padding-left: 2px; padding-top: 4px" fill="none" viewBox="0 0 20 20" stroke="currentColor">
        <g id="floppy_disk">
            <g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14
                    c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15
                    z M11,1H9v4h2V1z"/>
            </g>
        </g>
    </svg>
`])),C.class),Online:C=>(0,D.html)(q||(q=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
`])),C.class),Offline:C=>(0,D.html)(F||(F=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
    </svg>
`])),C.class),InformationCircle:C=>(0,D.html)(j||(j=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class)}},{"./dom":151}],154:[function(e,i,n){var r,o,a;function l(N,x){return x||(x=N.slice(0)),Object.freeze(Object.defineProperties(N,{raw:{value:Object.freeze(x)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.createPlayerApp=n.PlayerApp=void 0;const d=e("preact"),c=e("preact/hooks"),h=e("./dom"),s=e("./components/action-hide"),f=e("./components/action-bar"),p=e("./components/action-save-or-exit"),v=e("./components/sidebar"),g=e("./components/tip"),m=e("nanoid/non-secure"),y=e("./components/sensitivity-control"),_=e("./components/scale-control"),b=e("./components/volume-control"),w=e("./components/sync-control"),A="client.id",E="network.token",I="network.region",S="ui.tipsV2",T="ui.autolockTipsV2";function U(N){const x=N.options().withNetworkingApi!==!0,M=emulatorsUi.dom.storage,P=N.options().clientId,L=typeof P=="function"?Oe=>P(Oe):void 0,[F,q]=(0,c.useState)(null),[j,W]=(0,c.useState)(!1),[D,C]=(0,c.useState)(N.player().mobileControls),[R,O]=(0,c.useState)(N.player().mirroredControls),[B,G]=(0,c.useState)(N.player().autolock),[Y,H]=(0,c.useState)(N.player().layers.keyboardVisible),[te,ue]=(0,c.useState)(!1),[_e,J]=(0,c.useState)(!1),[re,pe]=(0,c.useState)(N.player().layers.fullscreen),[we,me]=(0,c.useState)(!x),[ye,$e]=(0,c.useState)(M.getItem(I)),[Fe,Je]=(0,c.useState)(null),[ct,mt]=(0,c.useState)(!1),[K,X]=(0,c.useState)(null),[fe,Pe]=(0,c.useState)("main"),[Le]=(0,c.useState)(()=>{const Oe=M.getItem(A),Ke=Oe??(0,m.nanoid)();return Oe===null&&M.setItem(A,Ke),{namespace:encodeURIComponent("local ("+location.href+")"),id:Ke}}),[Ne,ze]=(0,c.useState)(M.getItem(E)),[De,ve]=(0,c.useState)(!1);(0,c.useEffect)(()=>{const Oe=Ke=>{var He;Ke.data.message=="jsdos-get-network-token"&&((He=Ke.source)===null||He===void 0||He.postMessage({message:"jsdos-network-token",token:Ne},"*"))};return window.addEventListener("message",Oe),()=>window.removeEventListener("message",Oe)},[Ne]),(0,c.useEffect)(()=>{L!==void 0&&L(!1).then(q).catch(console.error)},[P,q]),(0,c.useEffect)(()=>(N.setOnRun(()=>{const Oe=N.player().autolock,Ke=M.getItem(S)!=="false",He=Oe&&M.getItem(T)!=="false";(Ke||He)&&je.setShowTips(!0),G(Oe)}),()=>N.setOnRun(()=>{})),[N.setOnRun]),(0,c.useEffect)(()=>{const Oe=()=>{const Ke=document.fullscreenElement!==null;pe(Ke),Ke||me(!0)};return document.addEventListener("fullscreenchange",Oe),()=>{document.removeEventListener("fullscreenchange",Oe)}},[re,pe]);const Xe=Oe=>{var Ke;(Ke=N.player().ciPromise)===null||Ke===void 0||Ke.then(He=>{Oe?He.pause():He.resume(),ue(Oe)}).catch(console.error)},je={player:N.player,options:N.options,clientId:F,setClientId:q,requestClientId:L,anonymousClientId:Le,networkToken:Ne,setNetworkToken:Oe=>{Oe===null?M.removeItem(E):M.setItem(E,Oe),ze(Oe)},mobileControls:D,setMobileControls:async Oe=>{Oe?N.player().enableMobileControls():N.player().disableMobileControls(),C(Oe)},mirroredControls:R,setMirroredControls:async Oe=>{je.player().setMirroredControls(Oe),O(Oe)},autolock:B,setAutolock:async Oe=>{je.player().setAutolock(Oe),G(Oe)},keyboard:Y,toggleKeyboard:()=>{H(!N.player().layers.keyboardVisible),N.player().layers.toggleKeyboard()},fullscreen:re,toggleFullscreen:()=>{N.player().layers.toggleFullscreen()},pause:te,setPause:Xe,mute:_e,setMute:Oe=>{var Ke;(Ke=N.player().ciPromise)===null||Ke===void 0||Ke.then(He=>{Oe?He.mute():He.unmute(),J(Oe)}).catch(console.error)},actionBar:we,setActionBar:me,sideBar:j,openSideBar:()=>W(!0),closeSideBar:()=>W(!1),region:ye,setRegion:function(Oe){Oe!==ye&&(Oe!==null&&M.setItem(I,Oe),$e(Oe),Je(null))},estimatingRegion:Fe,setEstimatingRegion:Je,showTips:ct,setShowTips:Oe=>{M.setItem(S,Oe+""),je.player().autolock&&M.setItem(T,Oe+""),setTimeout(()=>{Xe(Oe),mt(Oe),Oe&&N.options().style!=="hidden"&&me(!0)},500)},latencyInfo:K,setLatencyInfo:X,sideBarPage:fe,setSideBarPage:Pe,ipxConnected:De,setIpxConnected:ve};return je.actionBar===!1?(0,h.html)(r||(r=l([`<div>
            <`," ...",` class="absolute left-0 top-0 rounded-br-md z-50 w-8 h-8" />
            <`," ...",` class="absolute left-0 opacity-80 top-1/2 z-50 -mt-6" />
        </div>`])),p.ActionSaveOrExit,je,s.ActionHide,je):(0,h.html)(o||(o=l([`
    <div class="h-full flex flex-row">
        <`," ...",` />
        <`," ...",` />
        <div class="h-full">
            <`," ...",` />
        </div>
        <div class="bg-gray-300 w-8 h-full flex flex-col items-center">
            <div class="flex-grow flex flex-col items-center">
                <`," ...",` class="rounded mt-1" />
                <`," ...",` />
                <`," ...",` />
            </div>
            <`," ...",` class="self-start" />
            <div class="flex-grow">
                <`," ...",` />
                <`," ...",` />
            </div>
        </div>
    </div>
    `])),v.SideBar,je,g.Tips,je,f.ActionBar,je,p.ActionSaveOrExit,je,w.SyncMouseControl,je,y.ActionBarSensitivityControl,je,s.ActionHide,je,_.ActionBarScaleControl,je,b.ActionBarVolumeControl,je)}n.PlayerApp=U,n.createPlayerApp=function(N,x,M,P){(0,d.render)((0,h.html)(a||(a=l(["<"," player="," options="," setOnRun="," />"])),U,()=>x,()=>M,P),N)}},{"./components/action-bar":130,"./components/action-hide":131,"./components/action-save-or-exit":132,"./components/scale-control":138,"./components/sensitivity-control":139,"./components/sidebar":140,"./components/sync-control":147,"./components/tip":148,"./components/volume-control":150,"./dom":151,"core-js/modules/web.dom-collections.iterator.js":118,"nanoid/non-secure":124,preact:125,"preact/hooks":126}],155:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.DosPlayer=void 0;const r=e("./dom"),o=e("./hardware-transport-layer"),a=e("./backend/v7/personal"),l=e("./player-app"),d=Dos;function c(h,s){const f=s||{};if(f.windowOpen===void 0&&(typeof window=="object"?f.windowOpen=window.open.bind(window):f.windowOpen=()=>{throw new Error("window.open is not defined")}),f.style==="none")return console.warn("If you don't need the jsdos services, please use emulatros + emulators-ui instead"),d(h,f);h.classList.add("flex"),h.classList.add("flex-row"),h.classList.add("relative"),h.classList.add("overflow-hidden");const p=(0,r.createDiv)(["hidden","flex-col","absolute","left-0","top-0","bottom-0","right-0","items-center","justify-center","z-50","bg-gray-800","opacity-95"]),v=(0,r.createDiv)(["text-2xl","font-bold","font-mono","animate-pulse","text-green-600"]);p.appendChild(v);const g=(0,r.createDiv)(["flex","flex-col","flex-grow","overflow-hidden"]),m=(0,r.createDiv)("flex-grow"),y=(0,r.createDiv)("flex-grow-0"),_=(0,r.createDiv)("flex-grow-0"),b=h;function w(U){v.innerHTML=U,p.classList.remove("hidden"),p.classList.add("flex")}g.appendChild(m),g.appendChild(_),h.appendChild(y),h.appendChild(g),h.appendChild(p),f.layersOptions=f.layersOptions||{},f.layersOptions.keyboardDiv=_,f.layersOptions.keyboardInputDiv=b,f.layersOptions.fullscreenElement=h,f.layersOptions.optionControls=[];const A=f.hardware;A!=null&&(f.createTransportLayer=()=>o.hardwareTransportLayerFactory.createTransportLayer(A),f.emulatorFunction="backend");const E=d(m,f);let I=()=>{};(0,l.createPlayerApp)(y,E,f,U=>I=U),E.bundleUrl=null;const S=E.run;E.run=async(U,N,x)=>{p.classList.remove("flex"),p.classList.add("hidden");const M=()=>(f==null?void 0:f.clientId)!==void 0?f.clientId(!1):null,P=await M();N===void 0&&x===void 0&&P!==null&&(N=(0,a.getPersonalBundleUrl)(P.namespace,P.id,U)+"?dt="+Date.now());const L=await S.call(E,U,N,x);E.bundleUrl=U;const F=E.layers.getOnSave();return E.layers.setOnSave(async()=>{const q=typeof(f==null?void 0:f.onExit)=="function",j=q;q&&L.mute();const W=await M();if(W!==null){j&&w("Saving [1/2]: collecting changes");const D=await L.persist();j&&w("Saving [2/2]: sending to cloud"),await(0,a.putPersonalBundle)(W.namespace,W.id,U,D)}else j&&w("Saving [1/1]: collecting changes"),await F.call(E.layers);q&&j&&(w("Saved. Now you can close the window"),v.classList.remove("animate-pulse"))}),I(),L};const T=E.stop;return E.stop=()=>(E.bundleUrl=null,T.call(E)),E}n.DosPlayer=c,window.Dos=c},{"./backend/v7/personal":128,"./dom":151,"./hardware-transport-layer":152,"./player-app":154}],156:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.request=void 0,n.request=async function(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"GET",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;const l=await fetch(r,{method:o,body:a,headers:new Headers({"content-type":"application/json"})}).then(c=>c.json());var d;if(l.code!==200)throw new Error((d=l.message)!==null&&d!==void 0?d:"code: "+l.code);return l}},{}],157:[function(e,i,n){function r(a,l,d,c,h,s){return new Promise((f,p)=>{const v=new XMLHttpRequest;if(v.responseType=d,v.open(a,l,!0),v.addEventListener("load",()=>{v.status!==200?p(new Error("Wrong status code "+v.status)):d==="text"?f(v.responseText):d==="arraybuffer"?f(v.response):p(new Error("Unsupported responseType "+d))},!1),v.addEventListener("error",()=>{p(new Error("HTTP GET failed for url "+l))},!1),v.addEventListener("abort",()=>{p(new Error("HTTP GET canceled for url "+l))},!1),h!==void 0&&(v.onprogress=g=>{if(g.loaded&&g.total&&g.total>0){const m=Math.round(1e4*g.loaded/g.total)/100;h(m)}}),s!==void 0)for(const g of Object.keys(s))v.setRequestHeader(g,s[g]);v.send(c)})}function o(a,l,d){return r("post",a,l,d)}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.post=n.getObject=n.postObject=n.send=void 0,n.send=r,n.postObject=async function(a,l){const d=JSON.parse(await o(a,"text",l));if(d.success)return d;throw d.errorCode!==void 0?new Error(d.errorCode):new Error(`POST Object request failed:
 Payload:
`+JSON.stringify(d.body,null,2))},n.getObject=async function(a){const l=JSON.parse(await r("get",a,"text"));if(l.success)return l;throw l.errorCode!==void 0?new Error(l.errorCode):new Error(`GET Object request failed:
 Payload:
`+JSON.stringify(l,null,2))},n.post=o},{"core-js/modules/web.dom-collections.iterator.js":118}],158:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getPersonalBundleUrl=n.getPersonalBundleKey=n.uploadsS3Bucket=void 0,n.uploadsS3Bucket="doszone-uploads";const r="https://doszone-uploads.s3.dualstack.eu-central-1.amazonaws.com";function o(a,l,d,c){if(c!==void 0&&d.startsWith(r))return d.substring(r.length+1);const h=d.lastIndexOf("/"),s=d.substr(h+1);return a==="doszone"?"personal/"+l+"/"+s:"personal-v2/"+a+"/"+l+"/"+s}n.getPersonalBundleKey=o,n.getPersonalBundleUrl=function(a,l,d,c){const h=o(a,l,d,c);return r+"/"+h}},{}]},{},[155])})(Ja,Ja.exports);const ld=(u,t)=>u===t,Qi=Symbol("solid-proxy"),Za=Symbol("solid-track"),no={equals:ld};let Xc=Qc;const Fi=1,io=2,qc={owned:null,cleanups:null,context:null,owner:null};var Cn=null;let Eo=null,$t=null,mn=null,gi=null,mo=0;function cd(u,t){const e=$t,i=Cn,n=u.length===0,r=n?qc:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},o=n?u:()=>u(()=>er(()=>go(r)));Cn=r,$t=null;try{return Fr(o,!0)}finally{$t=e,Cn=i}}function Js(u,t){t=t?Object.assign({},no,t):no;const e={value:u,observers:null,observerSlots:null,comparator:t.equals||void 0},i=n=>(typeof n=="function"&&(n=n(e.value)),Zc(e,n));return[Jc.bind(e),i]}function ro(u,t,e){const i=Da(u,t,!1,Fi);_s(i)}function Yc(u,t,e){Xc=pd;const i=Da(u,t,!1,Fi);(!e||!e.render)&&(i.user=!0),gi?gi.push(i):_s(i)}function Qa(u,t,e){e=e?Object.assign({},no,e):no;const i=Da(u,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=e.equals||void 0,_s(i),Jc.bind(i)}function ud(u){return Fr(u,!1)}function er(u){if($t===null)return u();const t=$t;$t=null;try{return u()}finally{$t=t}}function dd(u){Yc(()=>er(u))}function $c(){return $t}function Jc(){if(this.sources&&this.state)if(this.state===Fi)_s(this);else{const u=mn;mn=null,Fr(()=>oo(this),!1),mn=u}if($t){const u=this.observers?this.observers.length:0;$t.sources?($t.sources.push(this),$t.sourceSlots.push(u)):($t.sources=[this],$t.sourceSlots=[u]),this.observers?(this.observers.push($t),this.observerSlots.push($t.sources.length-1)):(this.observers=[$t],this.observerSlots=[$t.sources.length-1])}return this.value}function Zc(u,t,e){let i=u.value;return(!u.comparator||!u.comparator(i,t))&&(u.value=t,u.observers&&u.observers.length&&Fr(()=>{for(let n=0;n<u.observers.length;n+=1){const r=u.observers[n],o=Eo&&Eo.running;o&&Eo.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?mn.push(r):gi.push(r),r.observers&&eu(r)),o||(r.state=Fi)}if(mn.length>1e6)throw mn=[],new Error},!1)),t}function _s(u){if(!u.fn)return;go(u);const t=Cn,e=$t,i=mo;$t=Cn=u,hd(u,u.value,i),$t=e,Cn=t}function hd(u,t,e){let i;try{i=u.fn(t)}catch(n){return u.pure&&(u.state=Fi,u.owned&&u.owned.forEach(go),u.owned=null),u.updatedAt=e+1,tu(n)}(!u.updatedAt||u.updatedAt<=e)&&(u.updatedAt!=null&&"observers"in u?Zc(u,i):u.value=i,u.updatedAt=e)}function Da(u,t,e,i=Fi,n){const r={fn:u,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Cn,context:null,pure:e};return Cn===null||Cn!==qc&&(Cn.owned?Cn.owned.push(r):Cn.owned=[r]),r}function so(u){if(u.state===0)return;if(u.state===io)return oo(u);if(u.suspense&&er(u.suspense.inFallback))return u.suspense.effects.push(u);const t=[u];for(;(u=u.owner)&&(!u.updatedAt||u.updatedAt<mo);)u.state&&t.push(u);for(let e=t.length-1;e>=0;e--)if(u=t[e],u.state===Fi)_s(u);else if(u.state===io){const i=mn;mn=null,Fr(()=>oo(u,t[0]),!1),mn=i}}function Fr(u,t){if(mn)return u();let e=!1;t||(mn=[]),gi?e=!0:gi=[],mo++;try{const i=u();return fd(e),i}catch(i){e||(gi=null),mn=null,tu(i)}}function fd(u){if(mn&&(Qc(mn),mn=null),u)return;const t=gi;gi=null,t.length&&Fr(()=>Xc(t),!1)}function Qc(u){for(let t=0;t<u.length;t++)so(u[t])}function pd(u){let t,e=0;for(t=0;t<u.length;t++){const i=u[t];i.user?u[e++]=i:so(i)}for(t=0;t<e;t++)so(u[t])}function oo(u,t){u.state=0;for(let e=0;e<u.sources.length;e+=1){const i=u.sources[e];if(i.sources){const n=i.state;n===Fi?i!==t&&(!i.updatedAt||i.updatedAt<mo)&&so(i):n===io&&oo(i,t)}}}function eu(u){for(let t=0;t<u.observers.length;t+=1){const e=u.observers[t];e.state||(e.state=io,e.pure?mn.push(e):gi.push(e),e.observers&&eu(e))}}function go(u){let t;if(u.sources)for(;u.sources.length;){const e=u.sources.pop(),i=u.sourceSlots.pop(),n=e.observers;if(n&&n.length){const r=n.pop(),o=e.observerSlots.pop();i<n.length&&(r.sourceSlots[o]=i,n[i]=r,e.observerSlots[i]=o)}}if(u.owned){for(t=u.owned.length-1;t>=0;t--)go(u.owned[t]);u.owned=null}if(u.cleanups){for(t=u.cleanups.length-1;t>=0;t--)u.cleanups[t]();u.cleanups=null}u.state=0,u.context=null}function md(u){return u instanceof Error?u:new Error(typeof u=="string"?u:"Unknown error",{cause:u})}function tu(u,t=Cn){throw md(u)}function Zs(u,t){return er(()=>u(t||{}))}const gd=u=>`Stale read from <${u}>.`;function Ao(u){const t=u.keyed,e=Qa(()=>u.when,void 0,{equals:(i,n)=>t?i===n:!i==!n});return Qa(()=>{const i=e();if(i){const n=u.children;return typeof n=="function"&&n.length>0?er(()=>n(t?i:()=>{if(!er(e))throw gd("Show");return u.when})):n}return u.fallback},void 0,void 0)}function vd(u,t,e){let i=e.length,n=t.length,r=i,o=0,a=0,l=t[n-1].nextSibling,d=null;for(;o<n||a<r;){if(t[o]===e[a]){o++,a++;continue}for(;t[n-1]===e[r-1];)n--,r--;if(n===o){const c=r<i?a?e[a-1].nextSibling:e[r-a]:l;for(;a<r;)u.insertBefore(e[a++],c)}else if(r===a)for(;o<n;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[r-1]&&e[a]===t[n-1]){const c=t[--n].nextSibling;u.insertBefore(e[a++],t[o++].nextSibling),u.insertBefore(e[--r],c),t[n]=e[r]}else{if(!d){d=new Map;let h=a;for(;h<r;)d.set(e[h],h++)}const c=d.get(t[o]);if(c!=null)if(a<c&&c<r){let h=o,s=1,f;for(;++h<n&&h<r&&!((f=d.get(t[h]))==null||f!==c+s);)s++;if(s>c-a){const p=t[o];for(;a<c;)u.insertBefore(e[a++],p)}else u.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const el="_$DX_DELEGATE";function yd(u,t,e,i={}){let n;return cd(r=>{n=r,t===document?u():ha(t,u(),t.firstChild?null:void 0,e)},i.owner),()=>{n(),t.textContent=""}}function La(u,t,e){let i;const n=()=>{const o=document.createElement("template");return o.innerHTML=u,e?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>er(()=>document.importNode(i||(i=n()),!0)):()=>(i||(i=n())).cloneNode(!0);return r.cloneNode=r,r}function _d(u,t=window.document){const e=t[el]||(t[el]=new Set);for(let i=0,n=u.length;i<n;i++){const r=u[i];e.has(r)||(e.add(r),t.addEventListener(r,bd))}}function ha(u,t,e,i){if(e!==void 0&&!i&&(i=[]),typeof t!="function")return ao(u,t,i,e);ro(n=>ao(u,t(),n,e),i)}function bd(u){const t=`$$${u.type}`;let e=u.composedPath&&u.composedPath()[0]||u.target;for(u.target!==e&&Object.defineProperty(u,"target",{configurable:!0,value:e}),Object.defineProperty(u,"currentTarget",{configurable:!0,get(){return e||document}});e;){const i=e[t];if(i&&!e.disabled){const n=e[`${t}Data`];if(n!==void 0?i.call(e,n,u):i.call(e,u),u.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function ao(u,t,e,i,n){for(;typeof e=="function";)e=e();if(t===e)return e;const r=typeof t,o=i!==void 0;if(u=o&&e[0]&&e[0].parentNode||u,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let a=e[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),e=or(u,e,i,a)}else e!==""&&typeof e=="string"?e=u.firstChild.data=t:e=u.textContent=t;else if(t==null||r==="boolean")e=or(u,e,i);else{if(r==="function")return ro(()=>{let a=t();for(;typeof a=="function";)a=a();e=ao(u,a,e,i)}),()=>e;if(Array.isArray(t)){const a=[],l=e&&Array.isArray(e);if(fa(a,t,e,n))return ro(()=>e=ao(u,a,e,i,!0)),()=>e;if(a.length===0){if(e=or(u,e,i),o)return e}else l?e.length===0?tl(u,a,i):vd(u,e,a):(e&&or(u),tl(u,a));e=a}else if(t.nodeType){if(Array.isArray(e)){if(o)return e=or(u,e,i,t);or(u,e,null,t)}else e==null||e===""||!u.firstChild?u.appendChild(t):u.replaceChild(t,u.firstChild);e=t}else console.warn("Unrecognized value. Skipped inserting",t)}return e}function fa(u,t,e,i){let n=!1;for(let r=0,o=t.length;r<o;r++){let a=t[r],l=e&&e[r],d;if(!(a==null||a===!0||a===!1))if((d=typeof a)=="object"&&a.nodeType)u.push(a);else if(Array.isArray(a))n=fa(u,a,l)||n;else if(d==="function")if(i){for(;typeof a=="function";)a=a();n=fa(u,Array.isArray(a)?a:[a],Array.isArray(l)?l:[l])||n}else u.push(a),n=!0;else{const c=String(a);l&&l.nodeType===3&&l.data===c?u.push(l):u.push(document.createTextNode(c))}}return n}function tl(u,t,e=null){for(let i=0,n=t.length;i<n;i++)u.insertBefore(t[i],e)}function or(u,t,e,i){if(e===void 0)return u.textContent="";const n=i||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(n!==a){const l=a.parentNode===u;!r&&!o?l?u.replaceChild(n,a):u.insertBefore(n,e):l&&a.remove()}else r=!0}}else u.insertBefore(n,e);return[n]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="154",xd=0,nl=1,wd=2,nu=1,Sd=2,Jn=3,_i=0,En=1,Qn=2,Bi=0,Tr=1,il=2,rl=3,sl=4,Md=5,Er=100,Ed=101,Ad=102,ol=103,al=104,Td=200,Cd=201,Rd=202,Pd=203,iu=204,ru=205,Dd=206,Ld=207,kd=208,Id=209,Od=210,Bd=0,Ud=1,Nd=2,pa=3,Fd=4,zd=5,jd=6,Hd=7,su=0,Vd=1,Gd=2,vi=0,Kd=1,Wd=2,Xd=3,ou=4,qd=5,au=300,Pr=301,Dr=302,ma=303,ga=304,vo=306,Lr=1e3,Un=1001,lo=1002,rn=1003,va=1004,Qs=1005,Mn=1006,lu=1007,tr=1008,Ui=1009,Yd=1010,$d=1011,Ia=1012,cu=1013,Oi=1014,fi=1015,hs=1016,uu=1017,du=1018,Yi=1020,Jd=1021,Nn=1023,Zd=1024,Qd=1025,$i=1026,kr=1027,eh=1028,hu=1029,th=1030,fu=1031,pu=1033,To=33776,Co=33777,Ro=33778,Po=33779,ll=35840,cl=35841,ul=35842,dl=35843,nh=36196,hl=37492,fl=37496,pl=37808,ml=37809,gl=37810,vl=37811,yl=37812,_l=37813,bl=37814,xl=37815,wl=37816,Sl=37817,Ml=37818,El=37819,Al=37820,Tl=37821,Do=36492,ih=36283,Cl=36284,Rl=36285,Pl=36286,fs=2300,Ir=2301,Lo=2302,Dl=2400,Ll=2401,kl=2402,rh=2500,sh=0,mu=1,ya=2,gu=3e3,Ji=3001,oh=3200,ah=3201,vu=0,lh=1,Zi="",bt="srgb",ni="srgb-linear",yu="display-p3",ko=7680,ch=519,uh=512,dh=513,hh=514,fh=515,ph=516,mh=517,gh=518,vh=519,_a=35044,Il="300 es",ba=1035,pi=2e3,co=2001;class zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ol=1234567;const ls=Math.PI/180,Or=180/Math.PI;function Xn(){const u=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[u&255]+fn[u>>8&255]+fn[u>>16&255]+fn[u>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function un(u,t,e){return Math.max(t,Math.min(e,u))}function Oa(u,t){return(u%t+t)%t}function yh(u,t,e,i,n){return i+(u-t)*(n-i)/(e-t)}function _h(u,t,e){return u!==t?(e-u)/(t-u):0}function cs(u,t,e){return(1-e)*u+e*t}function bh(u,t,e,i){return cs(u,t,1-Math.exp(-e*i))}function xh(u,t=1){return t-Math.abs(Oa(u,t*2)-t)}function wh(u,t,e){return u<=t?0:u>=e?1:(u=(u-t)/(e-t),u*u*(3-2*u))}function Sh(u,t,e){return u<=t?0:u>=e?1:(u=(u-t)/(e-t),u*u*u*(u*(u*6-15)+10))}function Mh(u,t){return u+Math.floor(Math.random()*(t-u+1))}function Eh(u,t){return u+Math.random()*(t-u)}function Ah(u){return u*(.5-Math.random())}function Th(u){u!==void 0&&(Ol=u);let t=Ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ch(u){return u*ls}function Rh(u){return u*Or}function xa(u){return(u&u-1)===0&&u!==0}function _u(u){return Math.pow(2,Math.ceil(Math.log(u)/Math.LN2))}function uo(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}function Ph(u,t,e,i,n){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),d=r((t+i)/2),c=o((t+i)/2),h=r((t-i)/2),s=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":u.set(a*c,l*h,l*s,a*d);break;case"YZY":u.set(l*s,a*c,l*h,a*d);break;case"ZXZ":u.set(l*h,l*s,a*c,a*d);break;case"XZX":u.set(a*c,l*p,l*f,a*d);break;case"YXY":u.set(l*f,a*c,l*p,a*d);break;case"ZYZ":u.set(l*p,l*f,a*c,a*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function mi(u,t){switch(t.constructor){case Float32Array:return u;case Uint32Array:return u/4294967295;case Uint16Array:return u/65535;case Uint8Array:return u/255;case Int32Array:return Math.max(u/2147483647,-1);case Int16Array:return Math.max(u/32767,-1);case Int8Array:return Math.max(u/127,-1);default:throw new Error("Invalid component type.")}}function zt(u,t){switch(t.constructor){case Float32Array:return u;case Uint32Array:return Math.round(u*4294967295);case Uint16Array:return Math.round(u*65535);case Uint8Array:return Math.round(u*255);case Int32Array:return Math.round(u*2147483647);case Int16Array:return Math.round(u*32767);case Int8Array:return Math.round(u*127);default:throw new Error("Invalid component type.")}}const Dh={DEG2RAD:ls,RAD2DEG:Or,generateUUID:Xn,clamp:un,euclideanModulo:Oa,mapLinear:yh,inverseLerp:_h,lerp:cs,damp:bh,pingpong:xh,smoothstep:wh,smootherstep:Sh,randInt:Mh,randFloat:Eh,randFloatSpread:Ah,seededRandom:Th,degToRad:Ch,radToDeg:Rh,isPowerOfTwo:xa,ceilPowerOfTwo:_u,floorPowerOfTwo:uo,setQuaternionFromProperEuler:Ph,normalize:zt,denormalize:mi};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(t,e,i,n,r,o,a,l,d){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,d)}set(t,e,i,n,r,o,a,l,d){const c=this.elements;return c[0]=t,c[1]=n,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],d=i[1],c=i[4],h=i[7],s=i[2],f=i[5],p=i[8],v=n[0],g=n[3],m=n[6],y=n[1],_=n[4],b=n[7],w=n[2],A=n[5],E=n[8];return r[0]=o*v+a*y+l*w,r[3]=o*g+a*_+l*A,r[6]=o*m+a*b+l*E,r[1]=d*v+c*y+h*w,r[4]=d*g+c*_+h*A,r[7]=d*m+c*b+h*E,r[2]=s*v+f*y+p*w,r[5]=s*g+f*_+p*A,r[8]=s*m+f*b+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],d=t[7],c=t[8];return e*o*c-e*a*d-i*r*c+i*a*l+n*r*d-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],d=t[7],c=t[8],h=c*o-a*d,s=a*l-c*r,f=d*r-o*l,p=e*h+i*s+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=h*v,t[1]=(n*d-c*i)*v,t[2]=(a*i-n*o)*v,t[3]=s*v,t[4]=(c*e-n*l)*v,t[5]=(n*r-a*e)*v,t[6]=f*v,t[7]=(i*l-d*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),d=Math.sin(r);return this.set(i*l,i*d,-i*(l*o+d*a)+o+t,-n*d,n*l,-n*(-d*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Ct;function bu(u){for(let t=u.length-1;t>=0;--t)if(u[t]>=65535)return!0;return!1}function ps(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}const Bl={};function us(u){u in Bl||(Bl[u]=!0,console.warn(u))}function Cr(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function Oo(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const Lh=new Ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),kh=new Ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Ih(u){return u.convertSRGBToLinear().applyMatrix3(kh)}function Oh(u){return u.applyMatrix3(Lh).convertLinearToSRGB()}const Bh={[ni]:u=>u,[bt]:u=>u.convertSRGBToLinear(),[yu]:Ih},Uh={[ni]:u=>u,[bt]:u=>u.convertLinearToSRGB(),[yu]:Oh},Hn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(u){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!u},get workingColorSpace(){return ni},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,t,e){if(this.enabled===!1||t===e||!t||!e)return u;const i=Bh[t],n=Uh[e];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return n(i(u))},fromWorkingColorSpace:function(u,t){return this.convert(u,this.workingColorSpace,t)},toWorkingColorSpace:function(u,t){return this.convert(u,t,this.workingColorSpace)}};let ar;class xu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ar===void 0&&(ar=ps("canvas")),ar.width=t.width,ar.height=t.height;const i=ar.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ar}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ps("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Cr(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Cr(e[i]/255)*255):e[i]=Cr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nh=0;class wu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=Xn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Bo(n[o].image)):r.push(Bo(n[o]))}else r=Bo(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Bo(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap?xu.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fh=0;class on extends zr{constructor(t=on.DEFAULT_IMAGE,e=on.DEFAULT_MAPPING,i=Un,n=Un,r=Mn,o=tr,a=Nn,l=Ui,d=on.DEFAULT_ANISOTROPY,c=Zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Xn(),this.name="",this.source=new wu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=d,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Ji?bt:Zi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lr:t.x=t.x-Math.floor(t.x);break;case Un:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lr:t.y=t.y-Math.floor(t.y);break;case Un:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?Ji:gu}set encoding(t){us("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ji?bt:Zi}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=au;on.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,i=0,n=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,d=l[0],c=l[4],h=l[8],s=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(c-s)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(c+s)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(d+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(d+1)/2,b=(f+1)/2,w=(m+1)/2,A=(c+s)/4,E=(h+v)/4,I=(p+g)/4;return _>b&&_>w?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=A/i,r=E/i):b>w?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=A/n,r=I/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=E/r,n=I/r),this.set(i,n,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(s-c)*(s-c));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-v)/y,this.z=(s-c)/y,this.w=Math.acos((d+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nr extends zr{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(us("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ji?bt:Zi),this.texture=new on(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Su extends on{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=rn,this.minFilter=rn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zh extends on{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=rn,this.minFilter=rn,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],d=i[n+1],c=i[n+2],h=i[n+3];const s=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=d,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=s,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(h!==v||l!==s||d!==f||c!==p){let g=1-a;const m=l*s+d*f+c*p+h*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),A=Math.atan2(w,m*y);g=Math.sin(g*A)/w,a=Math.sin(a*A)/w}const b=a*y;if(l=l*g+s*b,d=d*g+f*b,c=c*g+p*b,h=h*g+v*b,g===1-a){const w=1/Math.sqrt(l*l+d*d+c*c+h*h);l*=w,d*=w,c*=w,h*=w}}t[e]=l,t[e+1]=d,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],d=i[n+2],c=i[n+3],h=r[o],s=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+c*h+l*f-d*s,t[e+1]=l*p+c*s+d*h-a*f,t[e+2]=d*p+c*f+a*s-l*h,t[e+3]=c*p-a*h-l*s-d*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,d=a(i/2),c=a(n/2),h=a(r/2),s=l(i/2),f=l(n/2),p=l(r/2);switch(o){case"XYZ":this._x=s*c*h+d*f*p,this._y=d*f*h-s*c*p,this._z=d*c*p+s*f*h,this._w=d*c*h-s*f*p;break;case"YXZ":this._x=s*c*h+d*f*p,this._y=d*f*h-s*c*p,this._z=d*c*p-s*f*h,this._w=d*c*h+s*f*p;break;case"ZXY":this._x=s*c*h-d*f*p,this._y=d*f*h+s*c*p,this._z=d*c*p+s*f*h,this._w=d*c*h-s*f*p;break;case"ZYX":this._x=s*c*h-d*f*p,this._y=d*f*h+s*c*p,this._z=d*c*p-s*f*h,this._w=d*c*h+s*f*p;break;case"YZX":this._x=s*c*h+d*f*p,this._y=d*f*h+s*c*p,this._z=d*c*p-s*f*h,this._w=d*c*h-s*f*p;break;case"XZY":this._x=s*c*h-d*f*p,this._y=d*f*h-s*c*p,this._z=d*c*p+s*f*h,this._w=d*c*h+s*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],d=e[2],c=e[6],h=e[10],s=i+a+h;if(s>0){const f=.5/Math.sqrt(s+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-d)*f,this._z=(o-n)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(c-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+d)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-d)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-n)/f,this._x=(r+d)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(un(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,d=e._z,c=e._w;return this._x=i*c+o*a+n*d-r*l,this._y=n*c+o*l+r*a-i*d,this._z=r*c+o*d+i*l-n*a,this._w=o*c-i*a-n*l-r*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(l),c=Math.atan2(d,a),h=Math.sin((1-e)*c)/d,s=Math.sin(e*c)/d;return this._w=o*h+this._w*s,this._x=i*h+this._x*s,this._y=n*h+this._y*s,this._z=r*h+this._z*s,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(t=0,e=0,i=0){ce.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,d=l*e+o*n-a*i,c=l*i+a*e-r*n,h=l*n+r*i-o*e,s=-r*e-o*i-a*n;return this.x=d*l+s*-r+c*-a-h*-o,this.y=c*l+s*-o+h*-r-d*-a,this.z=h*l+s*-a+d*-o-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Uo.copy(this).projectOnVector(t),this.sub(Uo)}reflect(t){return this.sub(Uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(un(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new ce,Ul=new zi;class Fn{constructor(t=new ce(1/0,1/0,1/0),e=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox),lr.applyMatrix4(t.matrixWorld),this.union(lr);else{const n=t.geometry;if(n!==void 0)if(e&&n.attributes!==void 0&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ai.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ai)}else n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const i=t.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),Ms.subVectors(this.max,Xr),cr.subVectors(t.a,Xr),ur.subVectors(t.b,Xr),dr.subVectors(t.c,Xr),Ai.subVectors(ur,cr),Ti.subVectors(dr,ur),Hi.subVectors(cr,dr);let e=[0,-Ai.z,Ai.y,0,-Ti.z,Ti.y,0,-Hi.z,Hi.y,Ai.z,0,-Ai.x,Ti.z,0,-Ti.x,Hi.z,0,-Hi.x,-Ai.y,Ai.x,0,-Ti.y,Ti.x,0,-Hi.y,Hi.x,0];return!No(e,cr,ur,dr,Ms)||(e=[1,0,0,0,1,0,0,0,1],!No(e,cr,ur,dr,Ms))?!1:(Es.crossVectors(Ai,Ti),e=[Es.x,Es.y,Es.z],No(e,cr,ur,dr,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],ai=new ce,lr=new Fn,cr=new ce,ur=new ce,dr=new ce,Ai=new ce,Ti=new ce,Hi=new ce,Xr=new ce,Ms=new ce,Es=new ce,Vi=new ce;function No(u,t,e,i,n){for(let r=0,o=u.length-3;r<=o;r+=3){Vi.fromArray(u,r);const a=n.x*Math.abs(Vi.x)+n.y*Math.abs(Vi.y)+n.z*Math.abs(Vi.z),l=t.dot(Vi),d=e.dot(Vi),c=i.dot(Vi);if(Math.max(-Math.max(l,d,c),Math.min(l,d,c))>a)return!1}return!0}const jh=new Fn,qr=new ce,Fo=new ce;class qn{constructor(t=new ce,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):jh.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(qr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(Fo)),this.expandByPoint(qr.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new ce,zo=new ce,As=new ce,Ci=new ce,jo=new ce,Ts=new ce,Ho=new ce;class yo{constructor(t=new ce,e=new ce(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){zo.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(zo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(As),a=Ci.dot(this.direction),l=-Ci.dot(As),d=Ci.lengthSq(),c=Math.abs(1-o*o);let h,s,f,p;if(c>0)if(h=o*l-a,s=o*a-l,p=r*c,h>=0)if(s>=-p)if(s<=p){const v=1/c;h*=v,s*=v,f=h*(h+o*s+2*a)+s*(o*h+s+2*l)+d}else s=r,h=Math.max(0,-(o*s+a)),f=-h*h+s*(s+2*l)+d;else s=-r,h=Math.max(0,-(o*s+a)),f=-h*h+s*(s+2*l)+d;else s<=-p?(h=Math.max(0,-(-o*r+a)),s=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+s*(s+2*l)+d):s<=p?(h=0,s=Math.min(Math.max(-r,-l),r),f=s*(s+2*l)+d):(h=Math.max(0,-(o*r+a)),s=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+s*(s+2*l)+d);else s=o>0?-r:r,h=Math.max(0,-(o*s+a)),f=-h*h+s*(s+2*l)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(zo).addScaledVector(As,s),f}intersectSphere(t,e){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),n=li.dot(li)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const d=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,s=this.origin;return d>=0?(i=(t.min.x-s.x)*d,n=(t.max.x-s.x)*d):(i=(t.max.x-s.x)*d,n=(t.min.x-s.x)*d),c>=0?(r=(t.min.y-s.y)*c,o=(t.max.y-s.y)*c):(r=(t.max.y-s.y)*c,o=(t.min.y-s.y)*c),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),h>=0?(a=(t.min.z-s.z)*h,l=(t.max.z-s.z)*h):(a=(t.max.z-s.z)*h,l=(t.min.z-s.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,n,r){jo.subVectors(e,t),Ts.subVectors(i,t),Ho.crossVectors(jo,Ts);let o=this.direction.dot(Ho),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(Ts.crossVectors(Ci,Ts));if(l<0)return null;const d=a*this.direction.dot(jo.cross(Ci));if(d<0||l+d>o)return null;const c=-a*Ci.dot(Ho);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(t,e,i,n,r,o,a,l,d,c,h,s,f,p,v,g){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,d,c,h,s,f,p,v,g)}set(t,e,i,n,r,o,a,l,d,c,h,s,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=d,m[6]=c,m[10]=h,m[14]=s,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/hr.setFromMatrixColumn(t,0).length(),r=1/hr.setFromMatrixColumn(t,1).length(),o=1/hr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),d=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const s=o*c,f=o*h,p=a*c,v=a*h;e[0]=l*c,e[4]=-l*h,e[8]=d,e[1]=f+p*d,e[5]=s-v*d,e[9]=-a*l,e[2]=v-s*d,e[6]=p+f*d,e[10]=o*l}else if(t.order==="YXZ"){const s=l*c,f=l*h,p=d*c,v=d*h;e[0]=s+v*a,e[4]=p*a-f,e[8]=o*d,e[1]=o*h,e[5]=o*c,e[9]=-a,e[2]=f*a-p,e[6]=v+s*a,e[10]=o*l}else if(t.order==="ZXY"){const s=l*c,f=l*h,p=d*c,v=d*h;e[0]=s-v*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*c,e[9]=v-s*a,e[2]=-o*d,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const s=o*c,f=o*h,p=a*c,v=a*h;e[0]=l*c,e[4]=p*d-f,e[8]=s*d+v,e[1]=l*h,e[5]=v*d+s,e[9]=f*d-p,e[2]=-d,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const s=o*l,f=o*d,p=a*l,v=a*d;e[0]=l*c,e[4]=v-s*h,e[8]=p*h+f,e[1]=h,e[5]=o*c,e[9]=-a*c,e[2]=-d*c,e[6]=f*h+p,e[10]=s-v*h}else if(t.order==="XZY"){const s=o*l,f=o*d,p=a*l,v=a*d;e[0]=l*c,e[4]=-h,e[8]=d*c,e[1]=s*h+v,e[5]=o*c,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*c,e[10]=v*h+s}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hh,t,Vh)}lookAt(t,e,i){const n=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ri.crossVectors(i,An),Ri.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ri.crossVectors(i,An)),Ri.normalize(),Cs.crossVectors(An,Ri),n[0]=Ri.x,n[4]=Cs.x,n[8]=An.x,n[1]=Ri.y,n[5]=Cs.y,n[9]=An.y,n[2]=Ri.z,n[6]=Cs.z,n[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],d=i[12],c=i[1],h=i[5],s=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],y=i[3],_=i[7],b=i[11],w=i[15],A=n[0],E=n[4],I=n[8],S=n[12],T=n[1],U=n[5],N=n[9],x=n[13],M=n[2],P=n[6],L=n[10],F=n[14],q=n[3],j=n[7],W=n[11],D=n[15];return r[0]=o*A+a*T+l*M+d*q,r[4]=o*E+a*U+l*P+d*j,r[8]=o*I+a*N+l*L+d*W,r[12]=o*S+a*x+l*F+d*D,r[1]=c*A+h*T+s*M+f*q,r[5]=c*E+h*U+s*P+f*j,r[9]=c*I+h*N+s*L+f*W,r[13]=c*S+h*x+s*F+f*D,r[2]=p*A+v*T+g*M+m*q,r[6]=p*E+v*U+g*P+m*j,r[10]=p*I+v*N+g*L+m*W,r[14]=p*S+v*x+g*F+m*D,r[3]=y*A+_*T+b*M+w*q,r[7]=y*E+_*U+b*P+w*j,r[11]=y*I+_*N+b*L+w*W,r[15]=y*S+_*x+b*F+w*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],d=t[13],c=t[2],h=t[6],s=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*l*h-n*d*h-r*a*s+i*d*s+n*a*f-i*l*f)+v*(+e*l*f-e*d*s+r*o*s-n*o*f+n*d*c-r*l*c)+g*(+e*d*h-e*a*f-r*o*h+i*o*f+r*a*c-i*d*c)+m*(-n*a*c-e*l*h+e*a*s+n*o*h-i*o*s+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],d=t[7],c=t[8],h=t[9],s=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],y=h*g*d-v*s*d+v*l*f-a*g*f-h*l*m+a*s*m,_=p*s*d-c*g*d-p*l*f+o*g*f+c*l*m-o*s*m,b=c*v*d-p*h*d+p*a*f-o*v*f-c*a*m+o*h*m,w=p*h*l-c*v*l-p*a*s+o*v*s+c*a*g-o*h*g,A=e*y+i*_+n*b+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=y*E,t[1]=(v*s*r-h*g*r-v*n*f+i*g*f+h*n*m-i*s*m)*E,t[2]=(a*g*r-v*l*r+v*n*d-i*g*d-a*n*m+i*l*m)*E,t[3]=(h*l*r-a*s*r-h*n*d+i*s*d+a*n*f-i*l*f)*E,t[4]=_*E,t[5]=(c*g*r-p*s*r+p*n*f-e*g*f-c*n*m+e*s*m)*E,t[6]=(p*l*r-o*g*r-p*n*d+e*g*d+o*n*m-e*l*m)*E,t[7]=(o*s*r-c*l*r+c*n*d-e*s*d-o*n*f+e*l*f)*E,t[8]=b*E,t[9]=(p*h*r-c*v*r-p*i*f+e*v*f+c*i*m-e*h*m)*E,t[10]=(o*v*r-p*a*r+p*i*d-e*v*d-o*i*m+e*a*m)*E,t[11]=(c*a*r-o*h*r-c*i*d+e*h*d+o*i*f-e*a*f)*E,t[12]=w*E,t[13]=(c*v*n-p*h*n+p*i*s-e*v*s-c*i*g+e*h*g)*E,t[14]=(p*a*n-o*v*n-p*i*l+e*v*l+o*i*g-e*a*g)*E,t[15]=(o*h*n-c*a*n+c*i*l-e*h*l-o*i*s+e*a*s)*E,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,d=r*o,c=r*a;return this.set(d*o+i,d*a-n*l,d*l+n*a,0,d*a+n*l,c*a+i,c*l-n*o,0,d*l-n*a,c*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,d=r+r,c=o+o,h=a+a,s=r*d,f=r*c,p=r*h,v=o*c,g=o*h,m=a*h,y=l*d,_=l*c,b=l*h,w=i.x,A=i.y,E=i.z;return n[0]=(1-(v+m))*w,n[1]=(f+b)*w,n[2]=(p-_)*w,n[3]=0,n[4]=(f-b)*A,n[5]=(1-(s+m))*A,n[6]=(g+y)*A,n[7]=0,n[8]=(p+_)*E,n[9]=(g-y)*E,n[10]=(1-(s+v))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=hr.set(n[0],n[1],n[2]).length();const o=hr.set(n[4],n[5],n[6]).length(),a=hr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Vn.copy(this);const d=1/r,c=1/o,h=1/a;return Vn.elements[0]*=d,Vn.elements[1]*=d,Vn.elements[2]*=d,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,e.setFromRotationMatrix(Vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=pi){const l=this.elements,d=2*r/(e-t),c=2*r/(i-n),h=(e+t)/(e-t),s=(i+n)/(i-n);let f,p;if(a===pi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===co)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=s,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=pi){const l=this.elements,d=1/(e-t),c=1/(i-n),h=1/(o-r),s=(e+t)*d,f=(i+n)*c;let p,v;if(a===pi)p=(o+r)*h,v=-2*h;else if(a===co)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-s,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hr=new ce,Vn=new Rt,Hh=new ce(0,0,0),Vh=new ce(1,1,1),Ri=new ce,Cs=new ce,An=new ce,Nl=new Rt,Fl=new zi;class _o{constructor(t=0,e=0,i=0,n=_o.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],d=n[5],c=n[9],h=n[2],s=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(s,d),this._z=0);break;case"YXZ":this._x=Math.asin(-un(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(un(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-un(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(s,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,d));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,d),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-un(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(s,d),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_o.DEFAULT_ORDER="XYZ";class Mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gh=0;const zl=new ce,fr=new zi,ci=new Rt,Rs=new ce,Yr=new ce,Kh=new ce,Wh=new zi,jl=new ce(1,0,0),Hl=new ce(0,1,0),Vl=new ce(0,0,1),Xh={type:"added"},Gl={type:"removed"};class Wt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const t=new ce,e=new _o,i=new zi,n=new ce(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ct}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.multiply(fr),this}rotateOnWorldAxis(t,e){return fr.setFromAxisAngle(t,e),this.quaternion.premultiply(fr),this}rotateX(t){return this.rotateOnAxis(jl,t)}rotateY(t){return this.rotateOnAxis(Hl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jl,t)}translateY(t){return this.translateOnAxis(Hl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rs.copy(t):Rs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Yr,Rs,this.up):ci.lookAt(Rs,Yr,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),fr.setFromRotationMatrix(ci),this.quaternion.premultiply(fr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Gl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,t,Kh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let d=0,c=l.length;d<c;d++){const h=l[d];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,d=this.material.length;l<d;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),d=o(t.textures),c=o(t.images),h=o(t.shapes),s=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),d.length>0&&(i.textures=d),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),s.length>0&&(i.skeletons=s),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){const l=[];for(const d in a){const c=a[d];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Wt.DEFAULT_UP=new ce(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gn=new ce,ui=new ce,Vo=new ce,di=new ce,pr=new ce,mr=new ce,Kl=new ce,Go=new ce,Ko=new ce,Wo=new ce;let Ps=!1;class Bn{constructor(t=new ce,e=new ce,i=new ce){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Gn.subVectors(t,e),n.cross(Gn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Gn.subVectors(n,e),ui.subVectors(i,e),Vo.subVectors(t,e);const o=Gn.dot(Gn),a=Gn.dot(ui),l=Gn.dot(Vo),d=ui.dot(ui),c=ui.dot(Vo),h=o*d-a*a;if(h===0)return r.set(-2,-1,-1);const s=1/h,f=(d*l-a*c)*s,p=(o*c-a*l)*s;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(t,e,i,n,r,o,a,l){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),this.getInterpolation(t,e,i,n,r,o,a,l)}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,di),l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l}static isFrontFacing(t,e,i,n){return Gn.subVectors(i,e),ui.subVectors(t,e),Gn.cross(ui).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Gn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return Ps===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ps=!0),Bn.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}getInterpolation(t,e,i,n,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;pr.subVectors(n,i),mr.subVectors(r,i),Go.subVectors(t,i);const l=pr.dot(Go),d=mr.dot(Go);if(l<=0&&d<=0)return e.copy(i);Ko.subVectors(t,n);const c=pr.dot(Ko),h=mr.dot(Ko);if(c>=0&&h<=c)return e.copy(n);const s=l*h-c*d;if(s<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(pr,o);Wo.subVectors(t,r);const f=pr.dot(Wo),p=mr.dot(Wo);if(p>=0&&f<=p)return e.copy(r);const v=f*d-l*p;if(v<=0&&d>=0&&p<=0)return a=d/(d-p),e.copy(i).addScaledVector(mr,a);const g=c*p-f*h;if(g<=0&&h-c>=0&&f-p>=0)return Kl.subVectors(r,n),a=(h-c)/(h-c+(f-p)),e.copy(n).addScaledVector(Kl,a);const m=1/(g+v+s);return o=v*m,a=s*m,e.copy(i).addScaledVector(pr,o).addScaledVector(mr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let qh=0;class ei extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Tr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=ru,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ko,this.stencilZFail=ko,this.stencilZPass=ko,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Xo(u,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?u+(t-u)*6*e:e<1/2?t:e<2/3?u+(t-u)*6*(2/3-e):u}class St{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Hn.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Hn.workingColorSpace){return this.r=t,this.g=e,this.b=i,Hn.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Hn.workingColorSpace){if(t=Oa(t,1),e=un(e,0,1),i=un(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Xo(o,r,t+1/3),this.g=Xo(o,r,t),this.b=Xo(o,r,t-1/3)}return Hn.toWorkingColorSpace(this,n),this}setStyle(t,e=bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bt){const i=Eu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}copyLinearToSRGB(t){return this.r=Oo(t.r),this.g=Oo(t.g),this.b=Oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bt){return Hn.fromWorkingColorSpace(pn.copy(this),t),Math.round(un(pn.r*255,0,255))*65536+Math.round(un(pn.g*255,0,255))*256+Math.round(un(pn.b*255,0,255))}getHexString(t=bt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Hn.workingColorSpace){Hn.fromWorkingColorSpace(pn.copy(this),e);const i=pn.r,n=pn.g,r=pn.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,d;const c=(a+o)/2;if(a===o)l=0,d=0;else{const h=o-a;switch(d=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-r)/h+(n<r?6:0);break;case n:l=(r-i)/h+2;break;case r:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=d,t.l=c,t}getRGB(t,e=Hn.workingColorSpace){return Hn.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=bt){Hn.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,i=pn.g,n=pn.b;return t!==bt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Kn),Kn.h+=t,Kn.s+=e,Kn.l+=i,this.setHSL(Kn.h,Kn.s,Kn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Ds);const i=cs(Kn.h,Ds.h,e),n=cs(Kn.s,Ds.s,e),r=cs(Kn.l,Ds.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new St;St.NAMES=Eu;class Wn extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jt=new ce,Ls=new It;class bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=_a,this.updateRange={offset:0,count:-1},this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix3(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix4(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.applyNormalMatrix(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.transformDirection(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=zt(e,this.array),i=zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=zt(e,this.array),i=zt(i,this.array),n=zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=zt(e,this.array),i=zt(i,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_a&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Au extends bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tu extends bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class gn extends bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Yh=0;const In=new Rt,qo=new Wt,gr=new ce,Tn=new Fn,$r=new Fn,nn=new ce;class Pn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?Tu:Au)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ct().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,i){return In.makeTranslation(t,e,i),this.applyMatrix4(In),this}scale(t,e,i){return In.makeScale(t,e,i),this.applyMatrix4(In),this}lookAt(t){return qo.lookAt(t),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ce,1/0);return}if(t){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Tn.min,$r.min),Tn.expandByPoint(nn),nn.addVectors(Tn.max,$r.max),Tn.expandByPoint(nn)):(Tn.expandByPoint($r.min),Tn.expandByPoint($r.max))}Tn.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)nn.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(nn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let d=0,c=a.count;d<c;d++)nn.fromBufferAttribute(a,d),l&&(gr.fromBufferAttribute(t,d),nn.add(gr)),n=Math.max(n,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,r=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,d=[],c=[];for(let T=0;T<a;T++)d[T]=new ce,c[T]=new ce;const h=new ce,s=new ce,f=new ce,p=new It,v=new It,g=new It,m=new ce,y=new ce;function _(T,U,N){h.fromArray(n,T*3),s.fromArray(n,U*3),f.fromArray(n,N*3),p.fromArray(o,T*2),v.fromArray(o,U*2),g.fromArray(o,N*2),s.sub(h),f.sub(h),v.sub(p),g.sub(p);const x=1/(v.x*g.y-g.x*v.y);isFinite(x)&&(m.copy(s).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(x),y.copy(f).multiplyScalar(v.x).addScaledVector(s,-g.x).multiplyScalar(x),d[T].add(m),d[U].add(m),d[N].add(m),c[T].add(y),c[U].add(y),c[N].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let T=0,U=b.length;T<U;++T){const N=b[T],x=N.start,M=N.count;for(let P=x,L=x+M;P<L;P+=3)_(i[P+0],i[P+1],i[P+2])}const w=new ce,A=new ce,E=new ce,I=new ce;function S(T){E.fromArray(r,T*3),I.copy(E);const U=d[T];w.copy(U),w.sub(E.multiplyScalar(E.dot(U))).normalize(),A.crossVectors(I,U);const x=A.dot(c[T])<0?-1:1;l[T*4]=w.x,l[T*4+1]=w.y,l[T*4+2]=w.z,l[T*4+3]=x}for(let T=0,U=b.length;T<U;++T){const N=b[T],x=N.start,M=N.count;for(let P=x,L=x+M;P<L;P+=3)S(i[P+0]),S(i[P+1]),S(i[P+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let s=0,f=i.count;s<f;s++)i.setXYZ(s,0,0,0);const n=new ce,r=new ce,o=new ce,a=new ce,l=new ce,d=new ce,c=new ce,h=new ce;if(t)for(let s=0,f=t.count;s<f;s+=3){const p=t.getX(s+0),v=t.getX(s+1),g=t.getX(s+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),c.subVectors(o,r),h.subVectors(n,r),c.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),d.fromBufferAttribute(i,g),a.add(c),l.add(c),d.add(c),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let s=0,f=e.count;s<f;s+=3)n.fromBufferAttribute(e,s+0),r.fromBufferAttribute(e,s+1),o.fromBufferAttribute(e,s+2),c.subVectors(o,r),h.subVectors(n,r),c.cross(h),i.setXYZ(s+0,c.x,c.y,c.z),i.setXYZ(s+1,c.x,c.y,c.z),i.setXYZ(s+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(a,l){const d=a.array,c=a.itemSize,h=a.normalized,s=new d.constructor(l.length*c);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*c;for(let m=0;m<c;m++)s[p++]=d[f++]}return new bn(s,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pn,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],d=t(l,i);e.setAttribute(a,d)}const r=this.morphAttributes;for(const a in r){const l=[],d=r[a];for(let c=0,h=d.length;c<h;c++){const s=d[c],f=t(s,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const d=o[a];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const d in l)l[d]!==void 0&&(t[d]=l[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const d=i[l];t.data.attributes[l]=d.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const d=this.morphAttributes[l],c=[];for(let h=0,s=d.length;h<s;h++){const f=d[h];c.push(f.toJSON(t.data))}c.length>0&&(n[l]=c,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const d in n){const c=n[d];this.setAttribute(d,c.clone(e))}const r=t.morphAttributes;for(const d in r){const c=[],h=r[d];for(let s=0,f=h.length;s<f;s++)c.push(h[s].clone(e));this.morphAttributes[d]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let d=0,c=o.length;d<c;d++){const h=o[d];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wl=new Rt,Gi=new yo,ks=new qn,Xl=new ce,vr=new ce,yr=new ce,_r=new ce,Yo=new ce,Is=new ce,Os=new It,Bs=new It,Us=new It,ql=new ce,Yl=new ce,$l=new ce,Ns=new ce,Fs=new ce;class sn extends Wt{constructor(t=new Pn,e=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Is.set(0,0,0);for(let l=0,d=r.length;l<d;l++){const c=a[l],h=r[l];c!==0&&(Yo.fromBufferAttribute(h,t),o?Is.addScaledVector(Yo,c):Is.addScaledVector(Yo.sub(e),c))}e.add(Is)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(ks.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ks,Xl)===null||Gi.origin.distanceToSquared(Xl)>(t.far-t.near)**2))&&(Wl.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(Wl),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,d=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,s=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=s.length;p<v;p++){const g=s[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,w=_;b<w;b+=3){const A=a.getX(b),E=a.getX(b+1),I=a.getX(b+2);n=zs(this,m,t,i,d,c,h,A,E,I),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=a.getX(g),_=a.getX(g+1),b=a.getX(g+2);n=zs(this,o,t,i,d,c,h,y,_,b),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=s.length;p<v;p++){const g=s[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,w=_;b<w;b+=3){const A=b,E=b+1,I=b+2;n=zs(this,m,t,i,d,c,h,A,E,I),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=g,_=g+1,b=g+2;n=zs(this,o,t,i,d,c,h,y,_,b),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function $h(u,t,e,i,n,r,o,a){let l;if(t.side===En?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===_i,a),l===null)return null;Fs.copy(a),Fs.applyMatrix4(u.matrixWorld);const d=e.ray.origin.distanceTo(Fs);return d<e.near||d>e.far?null:{distance:d,point:Fs.clone(),object:u}}function zs(u,t,e,i,n,r,o,a,l,d){u.getVertexPosition(a,vr),u.getVertexPosition(l,yr),u.getVertexPosition(d,_r);const c=$h(u,t,e,i,vr,yr,_r,Ns);if(c){n&&(Os.fromBufferAttribute(n,a),Bs.fromBufferAttribute(n,l),Us.fromBufferAttribute(n,d),c.uv=Bn.getInterpolation(Ns,vr,yr,_r,Os,Bs,Us,new It)),r&&(Os.fromBufferAttribute(r,a),Bs.fromBufferAttribute(r,l),Us.fromBufferAttribute(r,d),c.uv1=Bn.getInterpolation(Ns,vr,yr,_r,Os,Bs,Us,new It),c.uv2=c.uv1),o&&(ql.fromBufferAttribute(o,a),Yl.fromBufferAttribute(o,l),$l.fromBufferAttribute(o,d),c.normal=Bn.getInterpolation(Ns,vr,yr,_r,ql,Yl,$l,new ce),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:d,normal:new ce,materialIndex:0};Bn.getNormal(vr,yr,_r,h.normal),c.face=h}return c}class bs extends Pn{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],d=[],c=[],h=[];let s=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new gn(d,3)),this.setAttribute("normal",new gn(c,3)),this.setAttribute("uv",new gn(h,2));function p(v,g,m,y,_,b,w,A,E,I,S){const T=b/E,U=w/I,N=b/2,x=w/2,M=A/2,P=E+1,L=I+1;let F=0,q=0;const j=new ce;for(let W=0;W<L;W++){const D=W*U-x;for(let C=0;C<P;C++){const R=C*T-N;j[v]=R*y,j[g]=D*_,j[m]=M,d.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[m]=A>0?1:-1,c.push(j.x,j.y,j.z),h.push(C/E),h.push(1-W/I),F+=1}}for(let W=0;W<I;W++)for(let D=0;D<E;D++){const C=s+D+P*W,R=s+D+P*(W+1),O=s+(D+1)+P*(W+1),B=s+(D+1)+P*W;l.push(C,R,B),l.push(R,O,B),q+=6}a.addGroup(f,q,S),f+=q,s+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(u){const t={};for(const e in u){t[e]={};for(const i in u[e]){const n=u[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function yn(u){const t={};for(let e=0;e<u.length;e++){const i=Br(u[e]);for(const n in i)t[n]=i[n]}return t}function Jh(u){const t=[];for(let e=0;e<u.length;e++)t.push(u[e].clone());return t}function Cu(u){return u.getRenderTarget()===null?u.outputColorSpace:ni}const Zh={clone:Br,merge:yn};var Qh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qh,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=Jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let Ru=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class _n extends Ru{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,d=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/d,n*=o.width/l,i*=o.height/d}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const br=-90,xr=1;class tf extends Wt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const n=new _n(br,xr,t,e);n.layers=this.layers,this.add(n);const r=new _n(br,xr,t,e);r.layers=this.layers,this.add(r);const o=new _n(br,xr,t,e);o.layers=this.layers,this.add(o);const a=new _n(br,xr,t,e);a.layers=this.layers,this.add(a);const l=new _n(br,xr,t,e);l.layers=this.layers,this.add(l);const d=new _n(br,xr,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const d of e)this.remove(d);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[n,r,o,a,l,d]=this.children,c=t.getRenderTarget(),h=t.toneMapping,s=t.xr.enabled;t.toneMapping=vi,t.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,l),i.texture.generateMipmaps=f,t.setRenderTarget(i,5),t.render(e,d),t.setRenderTarget(c),t.toneMapping=h,t.xr.enabled=s,i.texture.needsPMREMUpdate=!0}}class Pu extends on{constructor(t,e,i,n,r,o,a,l,d,c){t=t!==void 0?t:[],e=e!==void 0?e:Pr,super(t,e,i,n,r,o,a,l,d,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nf extends nr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(us("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ji?bt:Zi),this.texture=new Pu(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new bs(5,5,5),r=new Ni({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Bi});r.uniforms.tEquirect.value=e;const o=new sn(n,r),a=e.minFilter;return e.minFilter===tr&&(e.minFilter=Mn),new tf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const $o=new ce,rf=new ce,sf=new Ct;class ki{constructor(t=new ce(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=$o.subVectors(i,e).cross(rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($o),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sf.getNormalMatrix(t),n=this.coplanarPoint($o).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ki=new qn,js=new ce;class Ba{constructor(t=new ki,e=new ki,i=new ki,n=new ki,r=new ki,o=new ki){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){const i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],d=n[4],c=n[5],h=n[6],s=n[7],f=n[8],p=n[9],v=n[10],g=n[11],m=n[12],y=n[13],_=n[14],b=n[15];if(i[0].setComponents(l-r,s-d,g-f,b-m).normalize(),i[1].setComponents(l+r,s+d,g+f,b+m).normalize(),i[2].setComponents(l+o,s+c,g+p,b+y).normalize(),i[3].setComponents(l-o,s-c,g-p,b-y).normalize(),i[4].setComponents(l-a,s-h,g-v,b-_).normalize(),e===pi)i[5].setComponents(l+a,s+h,g+v,b+_).normalize();else if(e===co)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(js.x=n.normal.x>0?t.max.x:t.min.x,js.y=n.normal.y>0?t.max.y:t.min.y,js.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Du(){let u=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=u.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=u.requestAnimationFrame(n),t=!0)},stop:function(){u.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){u=r}}}function of(u,t){const e=t.isWebGL2,i=new WeakMap;function n(d,c){const h=d.array,s=d.usage,f=u.createBuffer();u.bindBuffer(c,f),u.bufferData(c,h,s),d.onUploadCallback();let p;if(h instanceof Float32Array)p=u.FLOAT;else if(h instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)p=u.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=u.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=u.SHORT;else if(h instanceof Uint32Array)p=u.UNSIGNED_INT;else if(h instanceof Int32Array)p=u.INT;else if(h instanceof Int8Array)p=u.BYTE;else if(h instanceof Uint8Array)p=u.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=u.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version}}function r(d,c,h){const s=c.array,f=c.updateRange;u.bindBuffer(h,d),f.count===-1?u.bufferSubData(h,0,s):(e?u.bufferSubData(h,f.offset*s.BYTES_PER_ELEMENT,s,f.offset,f.count):u.bufferSubData(h,f.offset*s.BYTES_PER_ELEMENT,s.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const c=i.get(d);c&&(u.deleteBuffer(c.buffer),i.delete(d))}function l(d,c){if(d.isGLBufferAttribute){const s=i.get(d);(!s||s.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const h=i.get(d);h===void 0?i.set(d,n(d,c)):h.version<d.version&&(r(h.buffer,d,c),h.version=d.version)}return{get:o,remove:a,update:l}}class rr extends Pn{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),d=a+1,c=l+1,h=t/a,s=e/l,f=[],p=[],v=[],g=[];for(let m=0;m<c;m++){const y=m*s-o;for(let _=0;_<d;_++){const b=_*h-r;p.push(b,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const _=y+d*m,b=y+d*(m+1),w=y+1+d*(m+1),A=y+1+d*m;f.push(_,b,A),f.push(b,w,A)}this.setIndex(f),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.width,t.height,t.widthSegments,t.heightSegments)}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,If=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sp=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$p=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Im=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,At={alphahash_fragment:af,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:hf,aomap_fragment:ff,aomap_pars_fragment:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:vf,iridescence_fragment:yf,bumpmap_pars_fragment:_f,clipping_planes_fragment:bf,clipping_planes_pars_fragment:xf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Sf,color_fragment:Mf,color_pars_fragment:Ef,color_pars_vertex:Af,color_vertex:Tf,common:Cf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Df,displacementmap_vertex:Lf,emissivemap_fragment:kf,emissivemap_pars_fragment:If,colorspace_fragment:Of,colorspace_pars_fragment:Bf,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Zf,envmap_vertex:jf,fog_vertex:Hf,fog_pars_vertex:Vf,fog_fragment:Gf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Wf,lightmap_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:$f,lights_pars_begin:Jf,lights_toon_fragment:Qf,lights_toon_pars_fragment:ep,lights_phong_fragment:tp,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:rp,lights_fragment_begin:sp,lights_fragment_maps:op,lights_fragment_end:ap,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:dp,map_fragment:hp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:vp,morphcolor_vertex:yp,morphnormal_vertex:_p,morphtarget_pars_vertex:bp,morphtarget_vertex:xp,normal_fragment_begin:wp,normal_fragment_maps:Sp,normal_pars_fragment:Mp,normal_pars_vertex:Ep,normal_vertex:Ap,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Dp,opaque_fragment:Lp,packing:kp,premultiplied_alpha_fragment:Ip,project_vertex:Op,dithering_fragment:Bp,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:zp,shadowmap_pars_vertex:jp,shadowmap_vertex:Hp,shadowmask_pars_fragment:Vp,skinbase_vertex:Gp,skinning_pars_vertex:Kp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:$p,tonemapping_pars_fragment:Jp,transmission_fragment:Zp,transmission_pars_fragment:Qp,uv_pars_fragment:em,uv_pars_vertex:tm,uv_vertex:nm,worldpos_vertex:im,background_vert:rm,background_frag:sm,backgroundCube_vert:om,backgroundCube_frag:am,cube_vert:lm,cube_frag:cm,depth_vert:um,depth_frag:dm,distanceRGBA_vert:hm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:vm,meshbasic_vert:ym,meshbasic_frag:_m,meshlambert_vert:bm,meshlambert_frag:xm,meshmatcap_vert:wm,meshmatcap_frag:Sm,meshnormal_vert:Mm,meshnormal_frag:Em,meshphong_vert:Am,meshphong_frag:Tm,meshphysical_vert:Cm,meshphysical_frag:Rm,meshtoon_vert:Pm,meshtoon_frag:Dm,points_vert:Lm,points_frag:km,shadow_vert:Im,shadow_frag:Om,sprite_vert:Bm,sprite_frag:Um},st={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Zn={basic:{uniforms:yn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:yn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new St(0)}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:yn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:yn([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:yn([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new St(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:yn([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:yn([st.points,st.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:yn([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:yn([st.common,st.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:yn([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:yn([st.sprite,st.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distanceRGBA:{uniforms:yn([st.common,st.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distanceRGBA_vert,fragmentShader:At.distanceRGBA_frag},shadow:{uniforms:yn([st.lights,st.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};Zn.physical={uniforms:yn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const Hs={r:0,b:0,g:0};function Nm(u,t,e,i,n,r,o){const a=new St(0);let l=r===!0?0:1,d,c,h=null,s=0,f=null;function p(g,m){let y=!1,_=m.isScene===!0?m.background:null;switch(_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),y=!0),u.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),y=!0;break}(u.autoClear||y)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),_&&(_.isCubeTexture||_.mapping===vo)?(c===void 0&&(c=new sn(new bs(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Br(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,E,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.colorSpace!==bt,(h!==_||s!==_.version||f!==u.toneMapping)&&(c.material.needsUpdate=!0,h=_,s=_.version,f=u.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new sn(new rr(2,2),new Ni({name:"BackgroundMaterial",uniforms:Br(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(d)),d.material.uniforms.t2D.value=_,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=_.colorSpace!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||s!==_.version||f!==u.toneMapping)&&(d.material.needsUpdate=!0,h=_,s=_.version,f=u.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null))}function v(g,m){g.getRGB(Hs,Cu(u)),i.buffers.color.setClear(Hs.r,Hs.g,Hs.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),l=m,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(a,l)},render:p}}function Fm(u,t,e,i){const n=u.getParameter(u.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=g(null);let d=l,c=!1;function h(M,P,L,F,q){let j=!1;if(o){const W=v(F,L,P);d!==W&&(d=W,f(d.object)),j=m(M,F,L,q),j&&y(M,F,L,q)}else{const W=P.wireframe===!0;(d.geometry!==F.id||d.program!==L.id||d.wireframe!==W)&&(d.geometry=F.id,d.program=L.id,d.wireframe=W,j=!0)}q!==null&&e.update(q,u.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,I(M,P,L,F),q!==null&&u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function s(){return i.isWebGL2?u.createVertexArray():r.createVertexArrayOES()}function f(M){return i.isWebGL2?u.bindVertexArray(M):r.bindVertexArrayOES(M)}function p(M){return i.isWebGL2?u.deleteVertexArray(M):r.deleteVertexArrayOES(M)}function v(M,P,L){const F=L.wireframe===!0;let q=a[M.id];q===void 0&&(q={},a[M.id]=q);let j=q[P.id];j===void 0&&(j={},q[P.id]=j);let W=j[F];return W===void 0&&(W=g(s()),j[F]=W),W}function g(M){const P=[],L=[],F=[];for(let q=0;q<n;q++)P[q]=0,L[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,P,L,F){const q=d.attributes,j=P.attributes;let W=0;const D=L.getAttributes();for(const C in D)if(D[C].location>=0){const O=q[C];let B=j[C];if(B===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),O===void 0||O.attribute!==B||B&&O.data!==B.data)return!0;W++}return d.attributesNum!==W||d.index!==F}function y(M,P,L,F){const q={},j=P.attributes;let W=0;const D=L.getAttributes();for(const C in D)if(D[C].location>=0){let O=j[C];O===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&(O=M.instanceColor));const B={};B.attribute=O,O&&O.data&&(B.data=O.data),q[C]=B,W++}d.attributes=q,d.attributesNum=W,d.index=F}function _(){const M=d.newAttributes;for(let P=0,L=M.length;P<L;P++)M[P]=0}function b(M){w(M,0)}function w(M,P){const L=d.newAttributes,F=d.enabledAttributes,q=d.attributeDivisors;L[M]=1,F[M]===0&&(u.enableVertexAttribArray(M),F[M]=1),q[M]!==P&&((i.isWebGL2?u:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,P),q[M]=P)}function A(){const M=d.newAttributes,P=d.enabledAttributes;for(let L=0,F=P.length;L<F;L++)P[L]!==M[L]&&(u.disableVertexAttribArray(L),P[L]=0)}function E(M,P,L,F,q,j,W){W===!0?u.vertexAttribIPointer(M,P,L,q,j):u.vertexAttribPointer(M,P,L,F,q,j)}function I(M,P,L,F){if(i.isWebGL2===!1&&(M.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const q=F.attributes,j=L.getAttributes(),W=P.defaultAttributeValues;for(const D in j){const C=j[D];if(C.location>=0){let R=q[D];if(R===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(R=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(R=M.instanceColor)),R!==void 0){const O=R.normalized,B=R.itemSize,G=e.get(R);if(G===void 0)continue;const Y=G.buffer,H=G.type,te=G.bytesPerElement,ue=i.isWebGL2===!0&&(H===u.INT||H===u.UNSIGNED_INT||R.gpuType===cu);if(R.isInterleavedBufferAttribute){const _e=R.data,J=_e.stride,re=R.offset;if(_e.isInstancedInterleavedBuffer){for(let pe=0;pe<C.locationSize;pe++)w(C.location+pe,_e.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let pe=0;pe<C.locationSize;pe++)b(C.location+pe);u.bindBuffer(u.ARRAY_BUFFER,Y);for(let pe=0;pe<C.locationSize;pe++)E(C.location+pe,B/C.locationSize,H,O,J*te,(re+B/C.locationSize*pe)*te,ue)}else{if(R.isInstancedBufferAttribute){for(let _e=0;_e<C.locationSize;_e++)w(C.location+_e,R.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let _e=0;_e<C.locationSize;_e++)b(C.location+_e);u.bindBuffer(u.ARRAY_BUFFER,Y);for(let _e=0;_e<C.locationSize;_e++)E(C.location+_e,B/C.locationSize,H,O,B*te,B/C.locationSize*_e*te,ue)}}else if(W!==void 0){const O=W[D];if(O!==void 0)switch(O.length){case 2:u.vertexAttrib2fv(C.location,O);break;case 3:u.vertexAttrib3fv(C.location,O);break;case 4:u.vertexAttrib4fv(C.location,O);break;default:u.vertexAttrib1fv(C.location,O)}}}}A()}function S(){N();for(const M in a){const P=a[M];for(const L in P){const F=P[L];for(const q in F)p(F[q].object),delete F[q];delete P[L]}delete a[M]}}function T(M){if(a[M.id]===void 0)return;const P=a[M.id];for(const L in P){const F=P[L];for(const q in F)p(F[q].object),delete F[q];delete P[L]}delete a[M.id]}function U(M){for(const P in a){const L=a[P];if(L[M.id]===void 0)continue;const F=L[M.id];for(const q in F)p(F[q].object),delete F[q];delete L[M.id]}}function N(){x(),c=!0,d!==l&&(d=l,f(d.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:N,resetDefaultState:x,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:b,disableUnusedAttributes:A}}function zm(u,t,e,i){const n=i.isWebGL2;let r;function o(d){r=d}function a(d,c){u.drawArrays(r,d,c),e.update(c,r,1)}function l(d,c,h){if(h===0)return;let s,f;if(n)s=u,f="drawArraysInstanced";else if(s=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[f](r,d,c,h),e.update(c,r,h)}this.setMode=o,this.render=a,this.renderInstances=l}function jm(u,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=u.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(u.getShaderPrecisionFormat(u.VERTEX_SHADER,u.HIGH_FLOAT).precision>0&&u.getShaderPrecisionFormat(u.FRAGMENT_SHADER,u.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&u.getShaderPrecisionFormat(u.VERTEX_SHADER,u.MEDIUM_FLOAT).precision>0&&u.getShaderPrecisionFormat(u.FRAGMENT_SHADER,u.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&u.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const d=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,h=u.getParameter(u.MAX_TEXTURE_IMAGE_UNITS),s=u.getParameter(u.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=u.getParameter(u.MAX_TEXTURE_SIZE),p=u.getParameter(u.MAX_CUBE_MAP_TEXTURE_SIZE),v=u.getParameter(u.MAX_VERTEX_ATTRIBS),g=u.getParameter(u.MAX_VERTEX_UNIFORM_VECTORS),m=u.getParameter(u.MAX_VARYING_VECTORS),y=u.getParameter(u.MAX_FRAGMENT_UNIFORM_VECTORS),_=s>0,b=o||t.has("OES_texture_float"),w=_&&b,A=o?u.getParameter(u.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:d,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:s,maxTextureSize:f,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:A}}function Hm(u){const t=this;let e=null,i=0,n=!1,r=!1;const o=new ki,a=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,s){const f=h.length!==0||s||i!==0||n;return n=s,i=h.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,s){e=c(h,s,0)},this.setState=function(h,s,f){const p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=u.get(h);if(!n||p===null||p.length===0||r&&!g)r?c(null):d();else{const y=r?0:i,_=y*4;let b=m.clippingState||null;l.value=b,b=c(p,s,_,f);for(let w=0;w!==_;++w)b[w]=e[w];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function d(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,s,f,p){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,y=s.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,b=f;_!==v;++_,b+=4)o.copy(h[_]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Vm(u){let t=new WeakMap;function e(o,a){return a===ma?o.mapping=Pr:a===ga&&(o.mapping=Dr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ma||a===ga)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const d=new nf(l.height/2);return d.fromEquirectangularTexture(u,o),t.set(o,d),o.addEventListener("dispose",n),e(d.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ua extends Ru{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=d*this.view.offsetX,o=r+d*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ar=4,Jl=[.125,.215,.35,.446,.526,.582],qi=20,Jo=new Ua,Zl=new St;let Zo=null;const Xi=(1+Math.sqrt(5))/2,wr=1/Xi,Ql=[new ce(1,1,1),new ce(-1,1,1),new ce(1,1,-1),new ce(-1,1,-1),new ce(0,Xi,wr),new ce(0,Xi,-wr),new ce(wr,0,Xi),new ce(-wr,0,Xi),new ce(Xi,wr,0),new ce(-Xi,wr,0)];class ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Zo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo),t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pr||t.mapping===Dr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:hs,format:Nn,colorSpace:ni,depthBuffer:!1},n=tc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Km(r,t,e)}return n}_compileMaterial(t){const e=new sn(this._lodPlanes[0],t);this._renderer.compile(e,Jo)}_sceneToCubeUV(t,e,i,n){const a=new _n(90,1,e,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,s=c.toneMapping;c.getClearColor(Zl),c.toneMapping=vi,c.autoClear=!1;const f=new Wn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),p=new sn(new bs,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Zl),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(d[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,d[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,d[m]));const _=this._cubeSize;Vs(n,y*_,m>2?_:0,_,_),c.setRenderTarget(n),v&&c.render(p,a),c.render(t,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=s,c.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Pr||t.mapping===Dr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Jo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Ql[(n-1)%Ql.length];this._blur(t,n-1,n,r,o)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,d=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new sn(this._lodPlanes[n],d),s=d.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qi-1),v=r/p,g=isFinite(r)?1+Math.floor(c*v):qi;g>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${qi}`);const m=[];let y=0;for(let E=0;E<qi;++E){const I=E/v,S=Math.exp(-I*I/2);m.push(S),E===0?y+=S:E<g&&(y+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;s.envMap.value=t.texture,s.samples.value=g,s.weights.value=m,s.latitudinal.value=o==="latitudinal",a&&(s.poleAxis.value=a);const{_lodMax:_}=this;s.dTheta.value=p,s.mipInt.value=_-i;const b=this._sizeLods[n],w=3*b*(n>_-Ar?n-_+Ar:0),A=4*(this._cubeSize-b);Vs(e,w,A,3*b,2*b),l.setRenderTarget(e),l.render(h,Jo)}}function Gm(u){const t=[],e=[],i=[];let n=u;const r=u-Ar+1+Jl.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>u-Ar?l=Jl[o-u+Ar-1]:o===0&&(l=0),i.push(l);const d=1/(a-2),c=-d,h=1+d,s=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,p=6,v=3,g=2,m=1,y=new Float32Array(v*p*f),_=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let A=0;A<f;A++){const E=A%3*2/3-1,I=A>2?0:-1,S=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];y.set(S,v*p*A),_.set(s,g*p*A);const T=[A,A,A,A,A,A];b.set(T,m*p*A)}const w=new Pn;w.setAttribute("position",new bn(y,v)),w.setAttribute("uv",new bn(_,g)),w.setAttribute("faceIndex",new bn(b,m)),t.push(w),n>Ar&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tc(u,t,e){const i=new nr(u,t,e);return i.texture.mapping=vo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vs(u,t,e,i,n){u.viewport.set(t,e,i,n),u.scissor.set(t,e,i,n)}function Km(u,t,e){const i=new Float32Array(qi),n=new ce(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function nc(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function ic(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wm(u){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,d=l===ma||l===ga,c=l===Pr||l===Dr;if(d||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new ec(u)),h=d?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(d&&h&&h.height>0||c&&h&&n(h)){e===null&&(e=new ec(u));const s=d?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,s),a.addEventListener("dispose",r),s.texture}else return null}}}return a}function n(a){let l=0;const d=6;for(let c=0;c<d;c++)a[c]!==void 0&&l++;return l===d}function r(a){const l=a.target;l.removeEventListener("dispose",r);const d=t.get(l);d!==void 0&&(t.delete(l),d.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Xm(u){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=u.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function qm(u,t,e,i){const n={},r=new WeakMap;function o(h){const s=h.target;s.index!==null&&t.remove(s.index);for(const p in s.attributes)t.remove(s.attributes[p]);for(const p in s.morphAttributes){const v=s.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}s.removeEventListener("dispose",o),delete n[s.id];const f=r.get(s);f&&(t.remove(f),r.delete(s)),i.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,e.memory.geometries--}function a(h,s){return n[s.id]===!0||(s.addEventListener("dispose",o),n[s.id]=!0,e.memory.geometries++),s}function l(h){const s=h.attributes;for(const p in s)t.update(s[p],u.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],u.ARRAY_BUFFER)}}function d(h){const s=[],f=h.index,p=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,b=y.length;_<b;_+=3){const w=y[_+0],A=y[_+1],E=y[_+2];s.push(w,A,A,E,E,w)}}else{const y=p.array;v=p.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const w=_+0,A=_+1,E=_+2;s.push(w,A,A,E,E,w)}}const g=new(bu(s)?Tu:Au)(s,1);g.version=v;const m=r.get(h);m&&t.remove(m),r.set(h,g)}function c(h){const s=r.get(h);if(s){const f=h.index;f!==null&&s.version<f.version&&d(h)}else d(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function Ym(u,t,e,i){const n=i.isWebGL2;let r;function o(s){r=s}let a,l;function d(s){a=s.type,l=s.bytesPerElement}function c(s,f){u.drawElements(r,f,a,s*l),e.update(f,r,1)}function h(s,f,p){if(p===0)return;let v,g;if(n)v=u,g="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](r,f,a,s*l,p),e.update(f,r,p)}this.setMode=o,this.setIndex=d,this.render=c,this.renderInstances=h}function $m(u){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case u.TRIANGLES:e.triangles+=a*(r/3);break;case u.LINES:e.lines+=a*(r/2);break;case u.LINE_STRIP:e.lines+=a*(r-1);break;case u.LINE_LOOP:e.lines+=a*r;break;case u.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Jm(u,t){return u[0]-t[0]}function Zm(u,t){return Math.abs(t[1])-Math.abs(u[1])}function Qm(u,t,e){const i={},n=new Float32Array(8),r=new WeakMap,o=new jt,a=[];for(let d=0;d<8;d++)a[d]=[d,0];function l(d,c,h){const s=d.morphTargetInfluences;if(t.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(c);if(g===void 0||g.count!==v){let P=function(){x.dispose(),r.delete(c),c.removeEventListener("dispose",P)};var f=P;g!==void 0&&g.texture.dispose();const _=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],E=c.morphAttributes.normal||[],I=c.morphAttributes.color||[];let S=0;_===!0&&(S=1),b===!0&&(S=2),w===!0&&(S=3);let T=c.attributes.position.count*S,U=1;T>t.maxTextureSize&&(U=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const N=new Float32Array(T*U*4*v),x=new Su(N,T,U,v);x.type=fi,x.needsUpdate=!0;const M=S*4;for(let L=0;L<v;L++){const F=A[L],q=E[L],j=I[L],W=T*U*4*L;for(let D=0;D<F.count;D++){const C=D*M;_===!0&&(o.fromBufferAttribute(F,D),N[W+C+0]=o.x,N[W+C+1]=o.y,N[W+C+2]=o.z,N[W+C+3]=0),b===!0&&(o.fromBufferAttribute(q,D),N[W+C+4]=o.x,N[W+C+5]=o.y,N[W+C+6]=o.z,N[W+C+7]=0),w===!0&&(o.fromBufferAttribute(j,D),N[W+C+8]=o.x,N[W+C+9]=o.y,N[W+C+10]=o.z,N[W+C+11]=j.itemSize===4?o.w:1)}}g={count:v,texture:x,size:new It(T,U)},r.set(c,g),c.addEventListener("dispose",P)}let m=0;for(let _=0;_<s.length;_++)m+=s[_];const y=c.morphTargetsRelative?1:1-m;h.getUniforms().setValue(u,"morphTargetBaseInfluence",y),h.getUniforms().setValue(u,"morphTargetInfluences",s),h.getUniforms().setValue(u,"morphTargetsTexture",g.texture,e),h.getUniforms().setValue(u,"morphTargetsTextureSize",g.size)}else{const p=s===void 0?0:s.length;let v=i[c.id];if(v===void 0||v.length!==p){v=[];for(let b=0;b<p;b++)v[b]=[b,0];i[c.id]=v}for(let b=0;b<p;b++){const w=v[b];w[0]=b,w[1]=s[b]}v.sort(Zm);for(let b=0;b<8;b++)b<p&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Jm);const g=c.morphAttributes.position,m=c.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const w=a[b],A=w[0],E=w[1];A!==Number.MAX_SAFE_INTEGER&&E?(g&&c.getAttribute("morphTarget"+b)!==g[A]&&c.setAttribute("morphTarget"+b,g[A]),m&&c.getAttribute("morphNormal"+b)!==m[A]&&c.setAttribute("morphNormal"+b,m[A]),n[b]=E,y+=E):(g&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),m&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),n[b]=0)}const _=c.morphTargetsRelative?1:1-y;h.getUniforms().setValue(u,"morphTargetBaseInfluence",_),h.getUniforms().setValue(u,"morphTargetInfluences",n)}}return{update:l}}function eg(u,t,e,i){let n=new WeakMap;function r(l){const d=i.render.frame,c=l.geometry,h=t.get(l,c);if(n.get(h)!==d&&(t.update(h),n.set(h,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==d&&(e.update(l.instanceMatrix,u.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,u.ARRAY_BUFFER),n.set(l,d))),l.isSkinnedMesh){const s=l.skeleton;n.get(s)!==d&&(s.update(),n.set(s,d))}return h}function o(){n=new WeakMap}function a(l){const d=l.target;d.removeEventListener("dispose",a),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:r,dispose:o}}const Lu=new on,ku=new Su,Iu=new zh,Ou=new Pu,rc=[],sc=[],oc=new Float32Array(16),ac=new Float32Array(9),lc=new Float32Array(4);function jr(u,t,e){const i=u[0];if(i<=0||i>0)return u;const n=t*e;let r=rc[n];if(r===void 0&&(r=new Float32Array(n),rc[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,u[o].toArray(r,a)}return r}function Qt(u,t){if(u.length!==t.length)return!1;for(let e=0,i=u.length;e<i;e++)if(u[e]!==t[e])return!1;return!0}function en(u,t){for(let e=0,i=t.length;e<i;e++)u[e]=t[e]}function bo(u,t){let e=sc[t];e===void 0&&(e=new Int32Array(t),sc[t]=e);for(let i=0;i!==t;++i)e[i]=u.allocateTextureUnit();return e}function tg(u,t){const e=this.cache;e[0]!==t&&(u.uniform1f(this.addr,t),e[0]=t)}function ng(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(u.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qt(e,t))return;u.uniform2fv(this.addr,t),en(e,t)}}function ig(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(u.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(u.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qt(e,t))return;u.uniform3fv(this.addr,t),en(e,t)}}function rg(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(u.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qt(e,t))return;u.uniform4fv(this.addr,t),en(e,t)}}function sg(u,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qt(e,t))return;u.uniformMatrix2fv(this.addr,!1,t),en(e,t)}else{if(Qt(e,i))return;lc.set(i),u.uniformMatrix2fv(this.addr,!1,lc),en(e,i)}}function og(u,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qt(e,t))return;u.uniformMatrix3fv(this.addr,!1,t),en(e,t)}else{if(Qt(e,i))return;ac.set(i),u.uniformMatrix3fv(this.addr,!1,ac),en(e,i)}}function ag(u,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qt(e,t))return;u.uniformMatrix4fv(this.addr,!1,t),en(e,t)}else{if(Qt(e,i))return;oc.set(i),u.uniformMatrix4fv(this.addr,!1,oc),en(e,i)}}function lg(u,t){const e=this.cache;e[0]!==t&&(u.uniform1i(this.addr,t),e[0]=t)}function cg(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(u.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qt(e,t))return;u.uniform2iv(this.addr,t),en(e,t)}}function ug(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(u.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qt(e,t))return;u.uniform3iv(this.addr,t),en(e,t)}}function dg(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(u.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qt(e,t))return;u.uniform4iv(this.addr,t),en(e,t)}}function hg(u,t){const e=this.cache;e[0]!==t&&(u.uniform1ui(this.addr,t),e[0]=t)}function fg(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(u.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qt(e,t))return;u.uniform2uiv(this.addr,t),en(e,t)}}function pg(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(u.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qt(e,t))return;u.uniform3uiv(this.addr,t),en(e,t)}}function mg(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(u.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qt(e,t))return;u.uniform4uiv(this.addr,t),en(e,t)}}function gg(u,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(u.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||Lu,n)}function vg(u,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(u.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Iu,n)}function yg(u,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(u.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ou,n)}function _g(u,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(u.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ku,n)}function bg(u){switch(u){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return rg;case 35674:return sg;case 35675:return og;case 35676:return ag;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return ug;case 35669:case 35673:return dg;case 5125:return hg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return _g}}function xg(u,t){u.uniform1fv(this.addr,t)}function wg(u,t){const e=jr(t,this.size,2);u.uniform2fv(this.addr,e)}function Sg(u,t){const e=jr(t,this.size,3);u.uniform3fv(this.addr,e)}function Mg(u,t){const e=jr(t,this.size,4);u.uniform4fv(this.addr,e)}function Eg(u,t){const e=jr(t,this.size,4);u.uniformMatrix2fv(this.addr,!1,e)}function Ag(u,t){const e=jr(t,this.size,9);u.uniformMatrix3fv(this.addr,!1,e)}function Tg(u,t){const e=jr(t,this.size,16);u.uniformMatrix4fv(this.addr,!1,e)}function Cg(u,t){u.uniform1iv(this.addr,t)}function Rg(u,t){u.uniform2iv(this.addr,t)}function Pg(u,t){u.uniform3iv(this.addr,t)}function Dg(u,t){u.uniform4iv(this.addr,t)}function Lg(u,t){u.uniform1uiv(this.addr,t)}function kg(u,t){u.uniform2uiv(this.addr,t)}function Ig(u,t){u.uniform3uiv(this.addr,t)}function Og(u,t){u.uniform4uiv(this.addr,t)}function Bg(u,t,e){const i=this.cache,n=t.length,r=bo(e,n);Qt(i,r)||(u.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||Lu,r[o])}function Ug(u,t,e){const i=this.cache,n=t.length,r=bo(e,n);Qt(i,r)||(u.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Iu,r[o])}function Ng(u,t,e){const i=this.cache,n=t.length,r=bo(e,n);Qt(i,r)||(u.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Ou,r[o])}function Fg(u,t,e){const i=this.cache,n=t.length,r=bo(e,n);Qt(i,r)||(u.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||ku,r[o])}function zg(u){switch(u){case 5126:return xg;case 35664:return wg;case 35665:return Sg;case 35666:return Mg;case 35674:return Eg;case 35675:return Ag;case 35676:return Tg;case 5124:case 35670:return Cg;case 35667:case 35671:return Rg;case 35668:case 35672:return Pg;case 35669:case 35673:return Dg;case 5125:return Lg;case 36294:return kg;case 36295:return Ig;case 36296:return Og;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Fg}}class jg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=bg(e.type)}}class Hg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=zg(e.type)}}class Vg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function cc(u,t){u.seq.push(t),u.map[t.id]=t}function Gg(u,t,e){const i=u.name,n=i.length;for(Qo.lastIndex=0;;){const r=Qo.exec(i),o=Qo.lastIndex;let a=r[1];const l=r[2]==="]",d=r[3];if(l&&(a=a|0),d===void 0||d==="["&&o+2===n){cc(e,d===void 0?new jg(a,u,t):new Hg(a,u,t));break}else{let h=e.map[a];h===void 0&&(h=new Vg(a),cc(e,h)),e=h}}}class eo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Gg(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function uc(u,t,e){const i=u.createShader(t);return u.shaderSource(i,e),u.compileShader(i),i}let Kg=0;function Wg(u,t){const e=u.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Xg(u){switch(u){case ni:return["Linear","( value )"];case bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",u),["Linear","( value )"]}}function dc(u,t,e){const i=u.getShaderParameter(t,u.COMPILE_STATUS),n=u.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Wg(u.getShaderSource(t),o)}else return n}function qg(u,t){const e=Xg(t);return"vec4 "+u+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Yg(u,t){let e;switch(t){case Kd:e="Linear";break;case Wd:e="Reinhard";break;case Xd:e="OptimizedCineon";break;case ou:e="ACESFilmic";break;case qd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+u+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $g(u){return[u.extensionDerivatives||u.envMapCubeUVHeight||u.bumpMap||u.normalMapTangentSpace||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function Jg(u){const t=[];for(const e in u){const i=u[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Zg(u,t){const e={},i=u.getProgramParameter(t,u.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=u.getActiveAttrib(t,n),o=r.name;let a=1;r.type===u.FLOAT_MAT2&&(a=2),r.type===u.FLOAT_MAT3&&(a=3),r.type===u.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:u.getAttribLocation(t,o),locationSize:a}}return e}function os(u){return u!==""}function hc(u,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return u.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fc(u,t){return u.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wa(u){return u.replace(Qg,t0)}const e0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function t0(u,t){let e=At[t];if(e===void 0){const i=e0.get(t);if(i!==void 0)e=At[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return wa(e)}const n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(u){return u.replace(n0,i0)}function i0(u,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function mc(u){let t="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?t+=`
#define HIGH_PRECISION`:u.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r0(u){let t="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===nu?t="SHADOWMAP_TYPE_PCF":u.shadowMapType===Sd?t="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(u){let t="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case Pr:case Dr:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function o0(u){let t="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case Dr:t="ENVMAP_MODE_REFRACTION";break}return t}function a0(u){let t="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case su:t="ENVMAP_BLENDING_MULTIPLY";break;case Vd:t="ENVMAP_BLENDING_MIX";break;case Gd:t="ENVMAP_BLENDING_ADD";break}return t}function l0(u){const t=u.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function c0(u,t,e,i){const n=u.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=r0(e),d=s0(e),c=o0(e),h=a0(e),s=l0(e),f=e.isWebGL2?"":$g(e),p=Jg(r),v=n.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(os).join(`
`),g.length>0&&(g+=`
`),m=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(os).join(`
`),m.length>0&&(m+=`
`)):(g=[mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),m=[f,mc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?At.tonemapping_pars_fragment:"",e.toneMapping!==vi?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(os).join(`
`)),o=wa(o),o=hc(o,e),o=fc(o,e),a=wa(a),a=hc(a,e),a=fc(a,e),o=pc(o),a=pc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+g+o,b=y+m+a,w=uc(n,n.VERTEX_SHADER,_),A=uc(n,n.FRAGMENT_SHADER,b);if(n.attachShader(v,w),n.attachShader(v,A),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),u.debug.checkShaderErrors){const S=n.getProgramInfoLog(v).trim(),T=n.getShaderInfoLog(w).trim(),U=n.getShaderInfoLog(A).trim();let N=!0,x=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(N=!1,typeof u.debug.onShaderError=="function")u.debug.onShaderError(n,v,w,A);else{const M=dc(n,w,"vertex"),P=dc(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+M+`
`+P)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||U==="")&&(x=!1);x&&(this.diagnostics={runnable:N,programLog:S,vertexShader:{log:T,prefix:g},fragmentShader:{log:U,prefix:m}})}n.deleteShader(w),n.deleteShader(A);let E;this.getUniforms=function(){return E===void 0&&(E=new eo(n,v)),E};let I;return this.getAttributes=function(){return I===void 0&&(I=Zg(n,v)),I},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}let u0=0;class d0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new h0(t),e.set(t,i)),i}}class h0{constructor(t){this.id=u0++,this.code=t,this.usedTimes=0}}function f0(u,t,e,i,n,r,o){const a=new Mu,l=new d0,d=[],c=n.isWebGL2,h=n.logarithmicDepthBuffer,s=n.vertexTextures;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,T,U,N,x){const M=N.fog,P=x.geometry,L=S.isMeshStandardMaterial?N.environment:null,F=(S.isMeshStandardMaterial?e:t).get(S.envMap||L),q=F&&F.mapping===vo?F.image.height:null,j=p[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const W=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,D=W!==void 0?W.length:0;let C=0;P.morphAttributes.position!==void 0&&(C=1),P.morphAttributes.normal!==void 0&&(C=2),P.morphAttributes.color!==void 0&&(C=3);let R,O,B,G;if(j){const an=Zn[j];R=an.vertexShader,O=an.fragmentShader}else R=S.vertexShader,O=S.fragmentShader,l.update(S),B=l.getVertexShaderID(S),G=l.getFragmentShaderID(S);const Y=u.getRenderTarget(),H=x.isInstancedMesh===!0,te=!!S.map,ue=!!S.matcap,_e=!!F,J=!!S.aoMap,re=!!S.lightMap,pe=!!S.bumpMap,we=!!S.normalMap,me=!!S.displacementMap,ye=!!S.emissiveMap,$e=!!S.metalnessMap,Fe=!!S.roughnessMap,Je=S.anisotropy>0,ct=S.clearcoat>0,mt=S.iridescence>0,K=S.sheen>0,X=S.transmission>0,fe=Je&&!!S.anisotropyMap,Pe=ct&&!!S.clearcoatMap,Le=ct&&!!S.clearcoatNormalMap,Ne=ct&&!!S.clearcoatRoughnessMap,ze=mt&&!!S.iridescenceMap,De=mt&&!!S.iridescenceThicknessMap,ve=K&&!!S.sheenColorMap,Xe=K&&!!S.sheenRoughnessMap,je=!!S.specularMap,Oe=!!S.specularColorMap,Ke=!!S.specularIntensityMap,He=X&&!!S.transmissionMap,Te=X&&!!S.thicknessMap,We=!!S.gradientMap,$=!!S.alphaMap,Se=S.alphaTest>0,se=!!S.alphaHash,Ce=!!S.extensions,Ge=!!P.attributes.uv1,vt=!!P.attributes.uv2,Mt=!!P.attributes.uv3;return{isWebGL2:c,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:R,fragmentShader:O,defines:S.defines,customVertexShaderID:B,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:H,instancingColor:H&&x.instanceColor!==null,supportsVertexTextures:s,outputColorSpace:Y===null?u.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ni,map:te,matcap:ue,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:q,aoMap:J,lightMap:re,bumpMap:pe,normalMap:we,displacementMap:s&&me,emissiveMap:ye,normalMapObjectSpace:we&&S.normalMapType===lh,normalMapTangentSpace:we&&S.normalMapType===vu,metalnessMap:$e,roughnessMap:Fe,anisotropy:Je,anisotropyMap:fe,clearcoat:ct,clearcoatMap:Pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ne,iridescence:mt,iridescenceMap:ze,iridescenceThicknessMap:De,sheen:K,sheenColorMap:ve,sheenRoughnessMap:Xe,specularMap:je,specularColorMap:Oe,specularIntensityMap:Ke,transmission:X,transmissionMap:He,thicknessMap:Te,gradientMap:We,opaque:S.transparent===!1&&S.blending===Tr,alphaMap:$,alphaTest:Se,alphaHash:se,combine:S.combine,mapUv:te&&v(S.map.channel),aoMapUv:J&&v(S.aoMap.channel),lightMapUv:re&&v(S.lightMap.channel),bumpMapUv:pe&&v(S.bumpMap.channel),normalMapUv:we&&v(S.normalMap.channel),displacementMapUv:me&&v(S.displacementMap.channel),emissiveMapUv:ye&&v(S.emissiveMap.channel),metalnessMapUv:$e&&v(S.metalnessMap.channel),roughnessMapUv:Fe&&v(S.roughnessMap.channel),anisotropyMapUv:fe&&v(S.anisotropyMap.channel),clearcoatMapUv:Pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(S.sheenRoughnessMap.channel),specularMapUv:je&&v(S.specularMap.channel),specularColorMapUv:Oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ke&&v(S.specularIntensityMap.channel),transmissionMapUv:He&&v(S.transmissionMap.channel),thicknessMapUv:Te&&v(S.thicknessMap.channel),alphaMapUv:$&&v(S.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(we||Je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:vt,vertexUv3s:Mt,pointsUvs:x.isPoints===!0&&!!P.attributes.uv&&(te||$),fog:!!M,useFog:S.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:x.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:C,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:u.shadowMap.enabled&&U.length>0,shadowMapType:u.shadowMap.type,toneMapping:S.toneMapped?u.toneMapping:vi,useLegacyLights:u.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qn,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ce&&S.extensions.derivatives===!0,extensionFragDepth:Ce&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)T.push(U),T.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(y(T,S),_(T,S),T.push(u.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function y(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function _(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),S.push(a.mask)}function b(S){const T=p[S.type];let U;if(T){const N=Zn[T];U=Zh.clone(N.uniforms)}else U=S.uniforms;return U}function w(S,T){let U;for(let N=0,x=d.length;N<x;N++){const M=d[N];if(M.cacheKey===T){U=M,++U.usedTimes;break}}return U===void 0&&(U=new c0(u,T,S,r),d.push(U)),U}function A(S){if(--S.usedTimes===0){const T=d.indexOf(S);d[T]=d[d.length-1],d.pop(),S.destroy()}}function E(S){l.remove(S)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:w,releaseProgram:A,releaseShaderCache:E,programs:d,dispose:I}}function p0(){let u=new WeakMap;function t(r){let o=u.get(r);return o===void 0&&(o={},u.set(r,o)),o}function e(r){u.delete(r)}function i(r,o,a){u.get(r)[o]=a}function n(){u=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function m0(u,t){return u.groupOrder!==t.groupOrder?u.groupOrder-t.groupOrder:u.renderOrder!==t.renderOrder?u.renderOrder-t.renderOrder:u.material.id!==t.material.id?u.material.id-t.material.id:u.z!==t.z?u.z-t.z:u.id-t.id}function gc(u,t){return u.groupOrder!==t.groupOrder?u.groupOrder-t.groupOrder:u.renderOrder!==t.renderOrder?u.renderOrder-t.renderOrder:u.z!==t.z?t.z-u.z:u.id-t.id}function vc(){const u=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(h,s,f,p,v,g){let m=u[t];return m===void 0?(m={id:h.id,object:h,geometry:s,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:g},u[t]=m):(m.id=h.id,m.object=h,m.geometry=s,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=v,m.group=g),t++,m}function a(h,s,f,p,v,g){const m=o(h,s,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function l(h,s,f,p,v,g){const m=o(h,s,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function d(h,s){e.length>1&&e.sort(h||m0),i.length>1&&i.sort(s||gc),n.length>1&&n.sort(s||gc)}function c(){for(let h=t,s=u.length;h<s;h++){const f=u[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:c,sort:d}}function g0(){let u=new WeakMap;function t(i,n){const r=u.get(i);let o;return r===void 0?(o=new vc,u.set(i,[o])):n>=r.length?(o=new vc,r.push(o)):o=r[n],o}function e(){u=new WeakMap}return{get:t,dispose:e}}function v0(){const u={};return{get:function(t){if(u[t.id]!==void 0)return u[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new ce,color:new St};break;case"SpotLight":e={position:new ce,direction:new ce,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new ce,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new ce,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return u[t.id]=e,e}}}function y0(){const u={};return{get:function(t){if(u[t.id]!==void 0)return u[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[t.id]=e,e}}}let _0=0;function b0(u,t){return(t.castShadow?2:0)-(u.castShadow?2:0)+(t.map?1:0)-(u.map?1:0)}function x0(u,t){const e=new v0,i=y0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)n.probe.push(new ce);const r=new ce,o=new Rt,a=new Rt;function l(c,h){let s=0,f=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let v=0,g=0,m=0,y=0,_=0,b=0,w=0,A=0,E=0,I=0;c.sort(b0);const S=h===!0?Math.PI:1;for(let U=0,N=c.length;U<N;U++){const x=c[U],M=x.color,P=x.intensity,L=x.distance,F=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)s+=M.r*P*S,f+=M.g*P*S,p+=M.b*P*S;else if(x.isLightProbe)for(let q=0;q<9;q++)n.probe[q].addScaledVector(x.sh.coefficients[q],P);else if(x.isDirectionalLight){const q=e.get(x);if(q.color.copy(x.color).multiplyScalar(x.intensity*S),x.castShadow){const j=x.shadow,W=i.get(x);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[v]=W,n.directionalShadowMap[v]=F,n.directionalShadowMatrix[v]=x.shadow.matrix,b++}n.directional[v]=q,v++}else if(x.isSpotLight){const q=e.get(x);q.position.setFromMatrixPosition(x.matrixWorld),q.color.copy(M).multiplyScalar(P*S),q.distance=L,q.coneCos=Math.cos(x.angle),q.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),q.decay=x.decay,n.spot[m]=q;const j=x.shadow;if(x.map&&(n.spotLightMap[E]=x.map,E++,j.updateMatrices(x),x.castShadow&&I++),n.spotLightMatrix[m]=j.matrix,x.castShadow){const W=i.get(x);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[m]=W,n.spotShadowMap[m]=F,A++}m++}else if(x.isRectAreaLight){const q=e.get(x);q.color.copy(M).multiplyScalar(P),q.halfWidth.set(x.width*.5,0,0),q.halfHeight.set(0,x.height*.5,0),n.rectArea[y]=q,y++}else if(x.isPointLight){const q=e.get(x);if(q.color.copy(x.color).multiplyScalar(x.intensity*S),q.distance=x.distance,q.decay=x.decay,x.castShadow){const j=x.shadow,W=i.get(x);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=x.shadow.matrix,w++}n.point[g]=q,g++}else if(x.isHemisphereLight){const q=e.get(x);q.skyColor.copy(x.color).multiplyScalar(P*S),q.groundColor.copy(x.groundColor).multiplyScalar(P*S),n.hemi[_]=q,_++}}y>0&&(t.isWebGL2||u.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=s,n.ambient[1]=f,n.ambient[2]=p;const T=n.hash;(T.directionalLength!==v||T.pointLength!==g||T.spotLength!==m||T.rectAreaLength!==y||T.hemiLength!==_||T.numDirectionalShadows!==b||T.numPointShadows!==w||T.numSpotShadows!==A||T.numSpotMaps!==E)&&(n.directional.length=v,n.spot.length=m,n.rectArea.length=y,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=A+E-I,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=I,T.directionalLength=v,T.pointLength=g,T.spotLength=m,T.rectAreaLength=y,T.hemiLength=_,T.numDirectionalShadows=b,T.numPointShadows=w,T.numSpotShadows=A,T.numSpotMaps=E,n.version=_0++)}function d(c,h){let s=0,f=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let y=0,_=c.length;y<_;y++){const b=c[y];if(b.isDirectionalLight){const w=n.directional[s];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),s++}else if(b.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(b.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:l,setupView:d,state:n}}function yc(u,t){const e=new x0(u,t),i=[],n=[];function r(){i.length=0,n.length=0}function o(h){i.push(h)}function a(h){n.push(h)}function l(h){e.setup(i,h)}function d(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:l,setupLightsView:d,pushLight:o,pushShadow:a}}function w0(u,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new yc(u,t),e.set(r,[l])):o>=a.length?(l=new yc(u,t),a.push(l)):l=a[o],l}function n(){e=new WeakMap}return{get:i,dispose:n}}class S0 extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class M0 extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const E0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.2
 * @author George Michael Brower
 * @license MIT
 */class ti{constructor(t,e,i,n,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),ti.nextNameID=ti.nextNameID||0,this.$name.id=`lil-gui-name-${++ti.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class wy extends ti{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ca(u){let t,e;return(t=u.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=u.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=u.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Sy={isPrimitive:!0,match:u=>typeof u=="string",fromHexString:Ca,toHexString:Ca},gs={isPrimitive:!0,match:u=>typeof u=="number",fromHexString:u=>parseInt(u.substring(1),16),toHexString:u=>"#"+u.toString(16).padStart(6,0)},My={isPrimitive:!1,match:u=>Array.isArray(u),fromHexString(u,t,e=1){const i=gs.fromHexString(u);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([u,t,e],i=1){i=255/i;const n=u*i<<16^t*i<<8^e*i<<0;return gs.toHexString(n)}},Ey={isPrimitive:!1,match:u=>Object(u)===u,fromHexString(u,t,e=1){const i=gs.fromHexString(u);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:u,g:t,b:e},i=1){i=255/i;const n=u*i<<16^t*i<<8^e*i<<0;return gs.toHexString(n)}},Ay=[Sy,gs,My,Ey];function Ty(u){return Ay.find(t=>t.match(u))}class Cy extends ti{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Ty(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ca(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ua extends ti{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Ry extends ti{constructor(t,e,i,n,r,o){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+y),this.$input.value=this.getValue())},n=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,l,d,c,h;const s=5,f=y=>{a=y.clientX,l=d=y.clientY,o=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",v)},p=y=>{if(o){const _=y.clientX-a,b=y.clientY-l;Math.abs(b)>s?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>s&&v()}if(!o){const _=y.clientY-d;h-=_*this._step*this._arrowKeyMultiplier(y),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}d=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",v)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,y,_,b,w)=>(m-y)/(_-y)*(w-b)+b,e=m=>{const y=this.$slider.getBoundingClientRect();let _=t(m,y.left,y.right,this._min,this._max);this._snapClampSetValue(_)},i=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let o=!1,a,l;const d=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},c=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):d(m),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",s))},h=m=>{if(o){const y=m.touches[0].clientX-a,_=m.touches[0].clientY-l;Math.abs(y)>Math.abs(_)?d(m):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",s))}else m.preventDefault(),e(m.touches[0].clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",s)},f=this._callOnFinishChange.bind(this),p=400;let v;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const _=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Py extends ti{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class Dy extends ti{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Ly=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function ky(u){const t=document.createElement("style");t.innerHTML=u;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Wc=!1;class qa{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!Wc&&a&&(ky(Ly),Wc=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=o}add(t,e,i,n,r){if(Object(i)===i)return new Py(this,t,e,i);const o=t[e];switch(typeof o){case"number":return new Ry(this,t,e,i,n,r);case"boolean":return new wy(this,t,e);case"string":return new Dy(this,t,e);case"function":return new ua(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new Cy(this,t,e,i)}addFolder(t){const e=new qa({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof ua||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ua)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Iy=qa,ws=new Iy,Oy=ws.addFolder("Window"),By=()=>document.body.requestPointerLock();Oy.add({pointerLock:By},"pointerLock").name("Pointer Lock");ws.show(to.enabled());const Uy=(u,t)=>{const e=u.addFolder("Position");e.add(t,"x",-20,240,.001),e.add(t,"y",-20,240,.001),e.add(t,"z",-20,240,.001),e.close()},Ny=(u,t)=>{const e=u.addFolder("Rotation");e.add(t,"x",-Math.PI,Math.PI,.001),e.add(t,"y",-Math.PI,Math.PI,.001),e.add(t,"z",-Math.PI,Math.PI,.001),e.close()},Fy=(u,t)=>{const e=u.addFolder("Scale");e.add(t,"x",.1,14,.001),e.add(t,"y",.1,14,.001),e.add(t,"z",.1,14,.001),e.close()},da=(u,t)=>{Uy(u,t.position),Ny(u,t.rotation),Fy(u,t.scale)};class zy extends Yu{constructor(e,i){super(e,i);ut(this,"canvasElement");ut(this,"canvasContext");this.canvasElement=document.createElement("canvas"),this.canvasContext=this.canvasElement.getContext("2d")}putImageData(e){const i=e.height/e.width,n=this.size.width*i*1.5,r=this.size.height*i*1.5,o=(this.size.height-r)*.5,a=(this.size.width-n)*.5,l=new Image;l.src=this.getImageDataUrl(e),l.onload=()=>{this.context.drawImage(l,a,o,n,r),this.needsUpdate()}}getImageDataUrl(e){return this.canvasElement.width=e.width,this.canvasElement.height=e.height,this.canvasContext.putImageData(e,0,0),this.canvasElement.toDataURL()}}class jy{constructor(t,e,i,n){this.gui=t,this.min=e,this.max=i,this.step=n,this.gui.close()}applyGUIPosition(t,e=this.step,i=this.min,n=this.max){const r=this.gui.addFolder("Position");r.add(t,"x",i,n,e),r.add(t,"y",i,n,e),r.add(t,"z",i,n,e),r.close()}applyGUIRotation(t,e=this.step,i=this.min,n=this.max){const r=this.gui.addFolder("Rotation");r.add(t,"x",i,n,e),r.add(t,"y",i,n,e),r.add(t,"z",i,n,e),r.close()}applyGUIScale(t,e=this.step,i=this.min,n=this.max){const r=this.gui.addFolder("Scale");r.add(t,"x",i,n,e),r.add(t,"y",i,n,e),r.add(t,"z",i,n,e),r.close()}applyTransformationGUI(t,e=this.step,i=this.min,n=this.max){this.applyGUIPosition(t.position,e,i,n),this.applyGUIRotation(t.rotation,e,i,n),this.applyGUIScale(t.scale,e,i,n)}}class Hy extends jy{constructor(){super(ws.addFolder("Projector"),-200,200,.001);ut(this,"screen");ut(this,"group");ut(this,"model");this.group=new Rn,this.model=Vt.ProjectorScreen.scene.clone(),this.screen=new zy(1920,1080),this.group.add(this.screen.scene,this.model),this.group.position.set(126,0,-15.397),this.model.position.set(0,68.589,0),this.model.rotation.set(0,-Math.PI,0),this.model.scale.multiplyScalar(10),this.screen.scene.position.set(-.01,68.589,-.01),this.screen.scene.rotation.set(0,-Math.PI/2,0),this.screen.scene.scale.multiplyScalar(110),this.screen.displayNoSignal(),this.applyTransformationGUI(this.group)}get scene(){return this.group}}class Vy extends F0{constructor(e){super();ut(this,"light");ut(this,"room",new Rn);ut(this,"projectorScreen",new Hy);this.light=this.addLight(),this.room=new Rn,this.room.add(e.scene),e.scene.position.set(0,0,2),e.scene.scale.multiplyScalar(.035);const i=new sn(new rr(100,100),new Wn({color:"#989797"}));i.position.set(131,57.178,-11.926),i.rotation.set(0,-Math.PI/2,0),i.scale.set(2.111,1.244,0),e.scene.add(this.projectorScreen.scene),e.scene.add(i);const n=Vt.ProjectorDevice.scene.clone();n.position.set(26,80,-15.397),n.rotation.set(0,Math.PI*.5,0),n.scale.multiplyScalar(2),n.traverse(r=>{r instanceof sn&&(r.material=new wo({map:Vt.Duke}))}),e.scene.add(n),this.room.add(new Wu(200)),this.add(this.room,this.light)}addLight(){const e=new fv("#FFFFFF",1);e.position.set(-3,3,2),this.add(e);const i=ws.addFolder("Light");return i.add(e,"intensity",0,20,.01),i.addColor(e,"color"),i.close(),e}}class Ya extends Bu{constructor(){super({canvas:Ya.createCanvas(),antialias:!0,depth:!0}),this.shadowMap.enabled=!0,this.setSize(window.innerWidth,window.innerHeight),this.shadowMap.type=Jn,this.shadowMap.enabled=!0,this.toneMapping=ou,this.setPixelRatio(Math.min(window.devicePixelRatio,2))}static createCanvas(){const t=document.createElement("canvas");return t.id="canvas",document.body.appendChild(t),t}}var Gy=`varying vec2 vUv;

void main()
{
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ky=`uniform float time;
varying vec2 vUv;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
{
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
  -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);

  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
  + i.x + vec3(0.0, i1.x, 1.0));

  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
  dot(x12.zw, x12.zw)), 0.0);
  m = m*m;
  m = m*m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main()
{
  float n = snoise(vUv + time * 0.3);
  float intensity = 0.1 + 0.1 * n;
  gl_FragColor = vec4(0.0, 0.5, 0.5, intensity);
}`;const ds=class extends Rn{constructor(e,i){super();ut(this,"game");ut(this,"name");ut(this,"image");ut(this,"description");ut(this,"scene");ut(this,"model");ut(this,"sphere");ut(this,"material");this.game=i,this.name=i.name,this.description=i.description,this.scene=new Rn,this.model=e.scene.clone(),this.model.scale.multiplyScalar(2),this.model.position.set(0,-.08,0),this.model.rotation.set(0,(Math.random()-.5)*Math.PI,0),this.material=new Ni({uniforms:{time:{value:1}},vertexShader:Gy,fragmentShader:Ky,transparent:!0,opacity:.1}),this.sphere=new sn(new Va(.5,32,32),this.material),this.sphere.position.set(0,0,0),this.image=new sn(new rr(.5,.5),new Wn({map:i.image})),this.image.scale.multiplyScalar(.12),this.image.position.set(0,.03,.006),this.model.add(this.image),ds.DEBUG&&this.scene.add(new Ev(1,10)),ds.DEBUG&&this.scene.add(new Wu(.5)),ds.DEBUG&&this.attachGui(),this.scene.add(this.model,this.sphere)}attachGui(){const i=ws.addFolder(`${this.name} Cartridge`).addFolder("Group"),n=i.addFolder("Model"),r=i.addFolder("Image");da(i,this.scene),da(n,this.model),da(r,this.image)}update(e){this.model.position.setY(Math.sin(e)*.05-.08),this.model.rotation.set(0,e,0),this.material.uniforms.time.value=e}toBox3(){return new Fn().setFromObject(this.model)}};let yi=ds;ut(yi,"DEBUG",!1);class Ss{constructor(t){ut(this,"rootPath","https://n1md7.github.io/game-boy/");ut(this,"commandInterface");ut(this,"screen");ut(this,"rgba");ut(this,"bundle");this.image=t,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onFrame=this.onFrame.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),emulators.pathPrefix="./js-dos/"}get ci(){return this.commandInterface}get bundlePath(){return`${this.rootPath}/games/${this.name}.jsdos`}get length(){return this.screen.size.width*this.screen.size.height}connect(t){this.screen=t}async load(){this.bundle=await emulatorsUi.network.resolveBundle(this.bundlePath)}async run(){return this.rgba=new Uint8ClampedArray(this.length*4),this.commandInterface=await emulators.dosboxWorker(this.bundle),this.subscribeUserInputs(),this}async stop(){var t;await((t=this.commandInterface)==null?void 0:t.exit()),this.unsubscribeUserInputs()}subscribeUserInputs(){emulatorsUi.sound.audioNode(this.commandInterface),this.commandInterface.events().onFrame(this.onFrame),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mousemove",this.onMouseMove)}unsubscribeUserInputs(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("mousemove",this.onMouseMove)}onKeyDown(t){const e=emulatorsUi.controls.domToKeyCode(t.keyCode);this.commandInterface.sendKeyEvent(e,!0)}onKeyUp(t){const e=emulatorsUi.controls.domToKeyCode(t.keyCode);this.commandInterface.sendKeyEvent(e,!1)}onMouseDown(){this.commandInterface.sendMouseButton(0,!0)}onMouseUp(){this.commandInterface.sendMouseButton(0,!1)}onMouseMove(t){this.commandInterface.sendMouseMotion(t.movementX,t.movementY)}onFrame(t){const{width:e,height:i}=this.screen.size,n=e*i;for(let o=0;o<n;++o)t&&(this.rgba[o*4+0]=t[o*3+0],this.rgba[o*4+1]=t[o*3+1],this.rgba[o*4+2]=t[o*3+2],this.rgba[o*4+3]=255);const r=new ImageData(this.rgba,e,i);this.screen.putImageData(r)}}var Kr=(u=>(u.Digger="Digger",u.Doom="Doom",u.Mario="Mario",u.Quake="Quake",u.Duke="Duke",u))(Kr||{});class Wy extends Ss{constructor(){super(...arguments);ut(this,"name",Kr.Mario);ut(this,"description","Mario is a fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist of the series, Mario has appeared in over 200 video games since his creation.")}}class Xy extends yi{constructor(t,e){super(t,new Wy(e))}}class qy extends Ss{constructor(){super(...arguments);ut(this,"name",Kr.Doom);ut(this,"description","Doom is a 1993 first-person shooter developed by id Software for MS-DOS. Players assume the role of a space marine, popularly known as Doomguy, fighting his way through hordes of invading demons from Hell.")}}class Yy extends yi{constructor(t,e){super(t,new qy(e))}}class $y extends Ss{constructor(){super(...arguments);ut(this,"name",Kr.Quake);ut(this,"description","Quake is a first-person shooter video game developed by id Software and published by GT Interactive in 1996. It is the first game in the Quake series.")}}class Jy extends yi{constructor(t,e){super(t,new $y(e))}}class Zy extends Ss{constructor(){super(...arguments);ut(this,"name",Kr.Digger);ut(this,"description","Digger is a computer game released by Canadian developer Windmill Software in 1983, popular in the era of the IBM PC and Commodore 64. It is similar in design to the 1982 arcade game Mr. Do!.")}}class Qy extends yi{constructor(t,e){super(t,new Zy(e))}}class e_ extends Ss{constructor(){super(...arguments);ut(this,"name",Kr.Duke);ut(this,"description","Duke Nukem 3D is a first-person shooter video game developed by 3D Realms.")}}class t_ extends yi{constructor(t,e){yi.DEBUG=!1,super(t,new e_(e))}}class n_ extends EventTarget{constructor(){super(...arguments);ut(this,"moveForward",!1);ut(this,"moveBackward",!1);ut(this,"moveLeft",!1);ut(this,"moveRight",!1);ut(this,"isShiftPressed",!1);ut(this,"isSpacePressed",!1)}subscribe(){document.addEventListener("keydown",this.onKeyDown.bind(this)),document.addEventListener("keyup",this.onKeyUp.bind(this))}unsubscribe(){document.removeEventListener("keydown",this.onKeyDown.bind(this)),document.removeEventListener("keyup",this.onKeyUp.bind(this))}get actions(){return{goForward:this.moveForward,goBackward:this.moveBackward,goLeft:this.moveLeft,goRight:this.moveRight,sprint:this.isShiftPressed,jump:this.isSpacePressed}}onKeyDown(e){switch(e.code){case"KeyW":this.moveForward=!0;break;case"KeyS":this.moveBackward=!0;break;case"KeyA":this.moveLeft=!0;break;case"KeyD":this.moveRight=!0;break;case"ShiftLeft":this.isShiftPressed=!0;break;case"KeyF":this.dispatchEvent(new Event("KeyF:pressed"));break;case"KeyEscape":this.dispatchEvent(new Event("ESC:pressed"));break;case"Space":this.isSpacePressed=!0;break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":case"Digit0":this.dispatchEvent(new CustomEvent("Digit:pressed",{detail:parseInt(e.code.slice(-1))}));break}}onKeyUp(e){switch(e.code){case"KeyW":this.moveForward=!1;break;case"KeyS":this.moveBackward=!1;break;case"KeyA":this.moveLeft=!1;break;case"KeyD":this.moveRight=!1;break;case"ShiftLeft":this.isShiftPressed=!1;break;case"Space":this.isSpacePressed=!1;break}}}class i_ extends EventTarget{constructor(e){super();ut(this,"mouseSensitivity",.002);this.camera=e}subscribe(){document.addEventListener("mousemove",this.mouseMoveHandler.bind(this)),document.addEventListener("pointerlockchange",this.pointerLockHandler.bind(this))}unsubscribe(){document.removeEventListener("mousemove",this.mouseMoveHandler.bind(this)),document.removeEventListener("pointerlockchange",this.pointerLockHandler.bind(this))}mouseMoveHandler({movementY:e,movementX:i}){document.pointerLockElement===document.body&&(this.camera.rotation.y-=i*this.mouseSensitivity,this.camera.rotation.x-=e*this.mouseSensitivity,this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x)))}pointerLockHandler(){document.pointerLockElement===document.body?this.dispatchEvent(new Event("PointerLock:enabled")):this.dispatchEvent(new Event("PointerLock:disabled"))}}class r_{constructor(t,e){ut(this,"gravity",30);ut(this,"steps",16);ut(this,"jumpVelocity",10);ut(this,"body");ut(this,"velocity");ut(this,"isGrounded",!1);this.camera=t,this.world=e;const i=new ce(0,1,0),n=new ce(0,1.75,0);this.body=new Mo(i,n,.35),this.velocity=new ce(0),this.updatePlayer=this.updatePlayer.bind(this),this.body.translate(new ce(0,2,4))}get capsule(){return this.body}reset(){const t=new ce(0,1,0);this.body.translate(t.sub(this.body.end))}update(t){this.body.end.y<-32&&this.reset();const e=Math.min(.05,t)/this.steps,i={steps:this.steps};do this.updatePlayer(e);while(--i.steps>0)}action(t,e){const{goLeft:i,goRight:n,goForward:r,goBackward:o}=t,a=this.getSpeedDelta(e,t.sprint),l=this.getForwardVector(new ce),d=this.getSideVector(new ce),c=i||n?a*.707:a;r?(this.velocity.add(l.multiplyScalar(c)),i&&this.velocity.add(d.multiplyScalar(-c)),n&&this.velocity.add(d.multiplyScalar(c))):o?(this.velocity.add(l.multiplyScalar(-c)),i&&this.velocity.add(d.multiplyScalar(-c)),n&&this.velocity.add(d.multiplyScalar(c))):(i&&this.velocity.add(d.multiplyScalar(-a*.9)),n&&this.velocity.add(d.multiplyScalar(a*.9))),this.isGrounded&&t.jump&&(this.velocity.y=this.jumpVelocity)}getSideVector(t){return this.camera.getWorldDirection(t),t.y=0,t.normalize(),t.cross(this.camera.up),t}getForwardVector(t){return this.camera.getWorldDirection(t),t.y=0,t.normalize(),t}getSpeedDelta(t,e){const i=e?16:8,n=e?96:48;return t*(this.isGrounded?n:i)}updatePlayer(t){const e={val:Math.exp(-8*t)-1};this.isGrounded||(this.velocity.y-=this.gravity*t,e.val*=.1),this.velocity.addScaledVector(this.velocity,e.val);const i=this.velocity.clone().multiplyScalar(t);this.body.translate(i),this.evaluateIntersections(),this.camera.position.copy(this.body.end)}evaluateIntersections(){this.isGrounded=!1;const t=this.world.capsuleIntersect(this.body);t&&(this.isGrounded=t.normal.y>0,this.isGrounded||this.velocity.addScaledVector(t.normal,-t.normal.dot(this.velocity)),this.body.translate(t.normal.multiplyScalar(t.depth)))}}class s_{constructor(t,e){ut(this,"player");ut(this,"inputController");ut(this,"mouseController");ut(this,"cartridges",[]);this.player=new r_(t,e),this.inputController=new n_,this.mouseController=new i_(t)}intersects(t){return this.player.capsule.intersectsBox(t.toBox3())}pickUp(t){this.cartridges.push(t)}subscribe(){this.inputController.subscribe(),this.mouseController.subscribe(),this.mouseController.addEventListener("mouse:click-start",()=>null),this.mouseController.addEventListener("mouse:click-end",()=>null),this.mouseController.addEventListener("PointerLock:disabled",()=>null)}update(t){this.player.update(t),this.player.action(this.inputController.actions,t)}}const Ra=Symbol("store-raw"),vs=Symbol("store-node");function Ju(u){let t=u[Qi];if(!t&&(Object.defineProperty(u,Qi,{value:t=new Proxy(u,l_)}),!Array.isArray(u))){const e=Object.keys(u),i=Object.getOwnPropertyDescriptors(u);for(let n=0,r=e.length;n<r;n++){const o=e[n];i[o].get&&Object.defineProperty(u,o,{enumerable:i[o].enumerable,get:i[o].get.bind(t)})}}return t}function fo(u){let t;return u!=null&&typeof u=="object"&&(u[Qi]||!(t=Object.getPrototypeOf(u))||t===Object.prototype||Array.isArray(u))}function ys(u,t=new Set){let e,i,n,r;if(e=u!=null&&u[Ra])return e;if(!fo(u)||t.has(u))return u;if(Array.isArray(u)){Object.isFrozen(u)?u=u.slice(0):t.add(u);for(let o=0,a=u.length;o<a;o++)n=u[o],(i=ys(n,t))!==n&&(u[o]=i)}else{Object.isFrozen(u)?u=Object.assign({},u):t.add(u);const o=Object.keys(u),a=Object.getOwnPropertyDescriptors(u);for(let l=0,d=o.length;l<d;l++)r=o[l],!a[r].get&&(n=u[r],(i=ys(n,t))!==n&&(u[r]=i))}return u}function $a(u){let t=u[vs];return t||Object.defineProperty(u,vs,{value:t=Object.create(null)}),t}function Pa(u,t,e){return u[t]||(u[t]=Qu(e))}function o_(u,t){const e=Reflect.getOwnPropertyDescriptor(u,t);return!e||e.get||!e.configurable||t===Qi||t===vs||(delete e.value,delete e.writable,e.get=()=>u[Qi][t]),e}function Zu(u){if($c()){const t=$a(u);(t._||(t._=Qu()))()}}function a_(u){return Zu(u),Reflect.ownKeys(u)}function Qu(u){const[t,e]=Js(u,{equals:!1,internal:!0});return t.$=e,t}const l_={get(u,t,e){if(t===Ra)return u;if(t===Qi)return e;if(t===Za)return Zu(u),e;const i=$a(u),n=i[t];let r=n?n():u[t];if(t===vs||t==="__proto__")return r;if(!n){const o=Object.getOwnPropertyDescriptor(u,t);$c()&&(typeof r!="function"||u.hasOwnProperty(t))&&!(o&&o.get)&&(r=Pa(i,t,r)())}return fo(r)?Ju(r):r},has(u,t){return t===Ra||t===Qi||t===Za||t===vs||t==="__proto__"?!0:(this.get(u,t,u),t in u)},set(){return!0},deleteProperty(){return!0},ownKeys:a_,getOwnPropertyDescriptor:o_};function po(u,t,e,i=!1){if(!i&&u[t]===e)return;const n=u[t],r=u.length;e===void 0?delete u[t]:u[t]=e;let o=$a(u),a;if((a=Pa(o,t,n))&&a.$(()=>e),Array.isArray(u)&&u.length!==r){for(let l=u.length;l<r;l++)(a=o[l])&&a.$();(a=Pa(o,"length",r))&&a.$(u.length)}(a=o._)&&a.$()}function ed(u,t){const e=Object.keys(t);for(let i=0;i<e.length;i+=1){const n=e[i];po(u,n,t[n])}}function c_(u,t){if(typeof t=="function"&&(t=t(u)),t=ys(t),Array.isArray(t)){if(u===t)return;let e=0,i=t.length;for(;e<i;e++){const n=t[e];u[e]!==n&&po(u,e,n)}po(u,"length",i)}else ed(u,t)}function as(u,t,e=[]){let i,n=u;if(t.length>1){i=t.shift();const o=typeof i,a=Array.isArray(u);if(Array.isArray(i)){for(let l=0;l<i.length;l++)as(u,[i[l]].concat(t),e);return}else if(a&&o==="function"){for(let l=0;l<u.length;l++)i(u[l],l)&&as(u,[l].concat(t),e);return}else if(a&&o==="object"){const{from:l=0,to:d=u.length-1,by:c=1}=i;for(let h=l;h<=d;h+=c)as(u,[h].concat(t),e);return}else if(t.length>1){as(u[i],t,[i].concat(e));return}n=u[i],e=[i].concat(e)}let r=t[0];typeof r=="function"&&(r=r(n,e),r===n)||i===void 0&&r==null||(r=ys(r),i===void 0||fo(n)&&fo(r)&&!Array.isArray(r)?ed(n,r):po(u,i,r))}function u_(...[u,t]){const e=ys(u||{}),i=Array.isArray(e),n=Ju(e);function r(...o){ud(()=>{i&&o.length===1?c_(e,o[0]):as(e,o)})}return[n,r]}const[d_,h_]=u_({isPaused:!1,isMuted:!1,started:!1});function f_(){const t=16.666666666666668,e=new Xa,i=new mv,n=new xy,r=new Ya,o=new Vy(Vt.Room),a=new s_(n,e),l=new uy,d=new fy,c=new by,h=new py(r,n);window.gameboy=l,e.fromGraphNode(Vt.Room.scene),l.scene.position.set(1.6,1,1),l.scene.rotation.set(0,-Math.PI/2,0),l.scene.scale.multiplyScalar(.35);const s=new Xy(Vt.Cartridge,Vt.Mario),f=new Yy(Vt.Cartridge,Vt.Doom),p=new Jy(Vt.Cartridge,Vt.Quake),v=new Qy(Vt.Cartridge,Vt.Digger),g=new t_(Vt.Cartridge,Vt.Duke);e.fromGraphNode(s);const m=[s,f,p,v,g];p.scene.position.set(3.477,.763,-1.134),v.scene.position.set(-.916,1.603,3.562),s.scene.position.set(-.636,.5,-1.476),f.scene.position.set(-.916,1.603,-.7),g.scene.position.set(.763,1.323,5.801),o.room.add(...m.map(y=>y.scene)),o.add(l.scene),function(){to.enabled()&&d.show(),h.subscribe(),a.subscribe(),h_({started:!0}),document.body.requestPointerLock()}(),function y(){to.enabled()&&d.start();const _=i.getDelta(),b=i.getElapsedTime();if(c.delta>=t){a.update(_);for(const w of m)w.scene.visible&&(a.intersects(w)&&(a.pickUp(w),w.scene.visible=!1,l.removeCartridge(),l.connectExternalDisplay(o.projectorScreen),l.mirrorMode.showBoth(),l.insertCartridge(w)),w.update(b),l.scene.position.setY(Math.sin(b)*.05+.5),l.scene.rotation.y=b);c.update(),r.render(o,n)}to.enabled()&&d.end(),requestAnimationFrame(y)}()}const p_=La('<button class="btn btn-outline-dark">Start Game'),m_=La('<div id="loading" class="container"><div class="row"><div class="col d-flex justify-content-center">'),g_=La('<div id="loading" class="text-center w-75"><h3 class="text-muted">Assets are loading</h3><div class="progress" role="progressbar"><div class="progress-bar progress-bar-striped progress-bar-animated">'),v_=()=>{const[u,t]=Js(0),[e,i]=Js(!1),[n,r]=Js(!1),o=()=>r(!0);return Yc(()=>n()?Ta(100).then(f_):Promise.resolve(),[n]),dd(()=>{ay.then(ly).catch(console.error),ho.onLoad=()=>{t(100),Ta(1e3).then(()=>i(!0))},ho.onProgress=(a,l,d)=>{t(l/d*100)}}),Zs(Ao,{get when(){return e()},get fallback(){return(()=>{const a=g_(),l=a.firstChild,d=l.nextSibling,c=d.firstChild;return ha(c,()=>u().toFixed(2)),ro(()=>`${u()}%`!=null?c.style.setProperty("width",`${u()}%`):c.style.removeProperty("width")),a})()},get children(){return Zs(Ao,{get when(){return!d_.started},get children(){const a=m_(),l=a.firstChild,d=l.firstChild;return ha(d,Zs(Ao,{get when(){return!n()},fallback:"Loading...",get children(){const c=p_();return c.$$click=o,c}})),a}})}})};_d(["click"]);yd(()=>Zs(v_,{}),document.body);
//# sourceMappingURL=index-fc53b693.js.map