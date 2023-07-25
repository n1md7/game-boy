var Fu=Object.defineProperty;var zu=(h,t,e)=>t in h?Fu(h,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[t]=e;var ht=(h,t,e)=>(zu(h,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();var Li=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ju(h){return h&&h.__esModule&&Object.prototype.hasOwnProperty.call(h,"default")?h.default:h}function Hu(h){if(h.__esModule)return h;var t=h.default;if(typeof t=="function"){var e=function i(){if(this instanceof i){var n=[null];n.push.apply(n,arguments);var r=Function.bind.apply(t,n);return new r}return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(h).forEach(function(i){var n=Object.getOwnPropertyDescriptor(h,i);Object.defineProperty(e,i,n.get?n:{enumerable:!0,get:function(){return h[i]}})}),e}function In(h){throw new Error('Could not dynamically require "'+h+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Fa={exports:{}};const Vu={},Gu=Object.freeze(Object.defineProperty({__proto__:null,default:Vu},Symbol.toStringTag,{value:"Module"})),Ku=Hu(Gu);(function(h,t){(function e(i,n,r){function o(u,l){if(!n[u]){if(!i[u]){var d=typeof In=="function"&&In;if(!l&&d)return d(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[u]={exports:{}};i[u][0].call(f.exports,function(p){return o(i[u][1][p]||p)},f,f.exports,e,i,n,r)}return n[u].exports}for(var a=typeof In=="function"&&In,c=0;c<r.length;c++)o(r[c]);return o})({1:[function(e,i,n){var r=e("./utils");function o(){var a={},c=0,u=0,l=0;return{add:function(d,s){s||(s=d,d=0),d>u?u=d:d<l&&(l=d),a[d]||(a[d]=[]),a[d].push(s),c++},process:function(){for(var d=l;d<=u;d++)for(var s=a[d],f=0;f<s.length;f++)(0,s[f])()},size:function(){return c}}}i.exports=function(a){var c=(a=a||{}).reporter,u=r.getOption(a,"async",!0),l=r.getOption(a,"auto",!0);l&&!u&&(c&&c.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),u=!0);var d,s=o(),f=!1;function p(){for(f=!0;s.size();){var g=s;s=o(),g.process()}f=!1}function v(){d=setTimeout(p,0)}return{add:function(g,m){!f&&l&&u&&s.size()===0&&v(),s.add(g,m)},force:function(g){f||(g===void 0&&(g=u),d&&(clearTimeout(d),d=null),g?v():p())}}}},{"./utils":2}],2:[function(e,i,n){(i.exports={}).getOption=function(r,o,a){var c=r[o];return c==null&&a!==void 0?a:c}},{}],3:[function(e,i,n){var r=i.exports={};r.isIE=function(o){return!((a=navigator.userAgent.toLowerCase()).indexOf("msie")===-1&&a.indexOf("trident")===-1&&a.indexOf(" edge/")===-1||o&&o!==function(){var c=3,u=document.createElement("div"),l=u.getElementsByTagName("i");do u.innerHTML="<!--[if gt IE "+ ++c+"]><i></i><![endif]-->";while(l[0]);return c>4?c:void 0}());var a},r.isLegacyOpera=function(){return!!window.opera}},{}],4:[function(e,i,n){(i.exports={}).forEach=function(r,o){for(var a=0;a<r.length;a++){var c=o(r[a]);if(c)return c}}},{}],5:[function(e,i,n){var r=e("../browser-detector");i.exports=function(o){var a=(o=o||{}).reporter,c=o.batchProcessor,u=o.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");function l(s){var f=o.important?" !important; ":"; ";return(s.join(f)+f).trim()}function d(s){return u(s).object}return{makeDetectable:function(s,f,p){p||(p=f,f=s,s=null),(s=s||{}).debug,r.isIE(8)?p(f):function(v,g){var m=l(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),y=!1,_=window.getComputedStyle(v),b=v.offsetWidth,w=v.offsetHeight;function T(){function E(){if(_.position==="static"){v.style.setProperty("position","relative",s.important?"important":"");var S=function(A,N,U,x){var M=U[x];M!=="auto"&&function(R){return R.replace(/[^-\d\.]/g,"")}(M)!=="0"&&(A.warn("An element that is positioned static has style."+x+"="+M+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+x+" will be set to 0. Element: ",N),N.style.setProperty(x,"0",s.important?"important":""))};S(a,v,_,"top"),S(a,v,_,"right"),S(a,v,_,"bottom"),S(a,v,_,"left")}}_.position!==""&&(E(),y=!0);var k=document.createElement("object");k.style.cssText=m,k.tabIndex=-1,k.type="text/html",k.setAttribute("aria-hidden","true"),k.onload=function(){y||E(),function S(A,N){if(!A.contentDocument){var U=u(A);return U.checkForObjectDocumentTimeoutId&&window.clearTimeout(U.checkForObjectDocumentTimeoutId),void(U.checkForObjectDocumentTimeoutId=setTimeout(function(){U.checkForObjectDocumentTimeoutId=0,S(A,N)},100))}N(A.contentDocument)}(this,function(S){g(v)})},r.isIE()||(k.data="about:blank"),u(v)&&(v.appendChild(k),u(v).object=k,r.isIE()&&(k.data="about:blank"))}u(v).startSize={width:b,height:w},c?c.add(T):T()}(f,p)},addListener:function(s,f){function p(){f(s)}if(r.isIE(8))u(s).object={proxy:p},s.attachEvent("onresize",p);else{var v=d(s);if(!v)throw new Error("Element is not detectable by this strategy.");v.contentDocument.defaultView.addEventListener("resize",p)}},uninstall:function(s){if(u(s)){var f=d(s);f&&(r.isIE(8)?s.detachEvent("onresize",f.proxy):s.removeChild(f),u(s).checkForObjectDocumentTimeoutId&&window.clearTimeout(u(s).checkForObjectDocumentTimeoutId),delete u(s).object)}}}}},{"../browser-detector":3}],6:[function(e,i,n){var r=e("../collection-utils").forEach;i.exports=function(o){var a=(o=o||{}).reporter,c=o.batchProcessor,u=o.stateHandler.getState,l=(o.stateHandler.hasState,o.idHandler);if(!c)throw new Error("Missing required dependency: batchProcessor");if(!a)throw new Error("Missing required dependency: reporter.");var d=function(){var _=document.createElement("div");_.style.cssText=p(["position: absolute","width: 1000px","height: 1000px","visibility: hidden","margin: 0","padding: 0"]);var b=document.createElement("div");b.style.cssText=p(["position: absolute","width: 500px","height: 500px","overflow: scroll","visibility: none","top: -1500px","left: -1500px","visibility: hidden","margin: 0","padding: 0"]),b.appendChild(_),document.body.insertBefore(b,document.body.firstChild);var w=500-b.clientWidth,T=500-b.clientHeight;return document.body.removeChild(b),{width:w,height:T}}(),s="erd_scroll_detection_container";function f(_){(function(b,w,T){if(!b.getElementById(w)){var E=T+"_animation",k=`/* Created by the element-resize-detector library. */
`;k+="."+T+" > div::-webkit-scrollbar { "+p(["display: none"])+` }

`,k+=".erd_scroll_detection_container_animation_active { "+p(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+E,"animation-name: "+E])+` }
`,k+="@-webkit-keyframes "+E+` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`,function(S,A){A=A||function(U){b.head.appendChild(U)};var N=b.createElement("style");N.innerHTML=S,N.id=w,A(N)}(k+="@keyframes "+E+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }")}})(_,"erd_scroll_detection_scrollbar_style",s)}function p(_){var b=o.important?" !important; ":"; ";return(_.join(b)+b).trim()}function v(_,b,w){if(_.addEventListener)_.addEventListener(b,w);else{if(!_.attachEvent)return a.error("[scroll] Don't know how to add event listeners.");_.attachEvent("on"+b,w)}}function g(_,b,w){if(_.removeEventListener)_.removeEventListener(b,w);else{if(!_.detachEvent)return a.error("[scroll] Don't know how to remove event listeners.");_.detachEvent("on"+b,w)}}function m(_){return u(_).container.childNodes[0].childNodes[0].childNodes[0]}function y(_){return u(_).container.childNodes[0].childNodes[0].childNodes[1]}return f(window.document),{makeDetectable:function(_,b,w){function T(){if(_.debug){var C=Array.prototype.slice.call(arguments);if(C.unshift(l.get(b),"Scroll: "),a.log.apply)a.log.apply(null,C);else for(var P=0;P<C.length;P++)a.log(C[P])}}function E(C){var P=u(C).container.childNodes[0],O=window.getComputedStyle(P);return!O.width||O.width.indexOf("px")===-1}function k(){var C=window.getComputedStyle(b),P={};return P.position=C.position,P.width=b.offsetWidth,P.height=b.offsetHeight,P.top=C.top,P.right=C.right,P.bottom=C.bottom,P.left=C.left,P.widthCSS=C.width,P.heightCSS=C.height,P}function S(){if(T("storeStyle invoked."),u(b)){var C=k();u(b).style=C}else T("Aborting because element has been uninstalled")}function A(C,P,O){u(C).lastWidth=P,u(C).lastHeight=O}function N(){return 2*d.width+1}function U(){return 2*d.height+1}function x(C){return C+10+N()}function M(C){return C+10+U()}function R(C,P,O){var B=m(C),G=y(C),Y=x(P),H=M(O),te=function(_e){return 2*_e+N()}(P),ue=function(_e){return 2*_e+U()}(O);B.scrollLeft=Y,B.scrollTop=H,G.scrollLeft=te,G.scrollTop=ue}function L(){var C=u(b).container;if(!C){(C=document.createElement("div")).className=s,C.style.cssText=p(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),u(b).container=C,function(O){O.className+=" "+s+"_animation_active"}(C),b.appendChild(C);var P=function(){u(b).onRendered&&u(b).onRendered()};v(C,"animationstart",P),u(b).onAnimationStart=P}return C}function F(){if(T("Injecting elements"),u(b)){(function(){var K=u(b).style;if(K.position==="static"){b.style.setProperty("position","relative",_.important?"important":"");var X=function(fe,Pe,Le,Ne){var ze=Le[Ne];ze!=="auto"&&function(De){return De.replace(/[^-\d\.]/g,"")}(ze)!=="0"&&(fe.warn("An element that is positioned static has style."+Ne+"="+ze+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+Ne+" will be set to 0. Element: ",Pe),Pe.style[Ne]=0)};X(a,b,K,"top"),X(a,b,K,"right"),X(a,b,K,"bottom"),X(a,b,K,"left")}})();var C=u(b).container;C||(C=L());var P,O,B,G,Y=d.width,H=d.height,te=p(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),ue=p(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(["left: "+(P=(P=-(1+Y))?P+"px":"0"),"top: "+(O=(O=-(1+H))?O+"px":"0"),"right: "+(G=(G=-Y)?G+"px":"0"),"bottom: "+(B=(B=-H)?B+"px":"0")])),_e=p(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),J=p(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),re=p(["position: absolute","left: 0","top: 0"]),pe=p(["position: absolute","width: 200%","height: 200%"]),we=document.createElement("div"),me=document.createElement("div"),ye=document.createElement("div"),$e=document.createElement("div"),Fe=document.createElement("div"),Je=document.createElement("div");we.dir="ltr",we.style.cssText=te,we.className=s,me.className=s,me.style.cssText=ue,ye.style.cssText=_e,$e.style.cssText=re,Fe.style.cssText=J,Je.style.cssText=pe,ye.appendChild($e),Fe.appendChild(Je),me.appendChild(ye),me.appendChild(Fe),we.appendChild(me),C.appendChild(we),v(ye,"scroll",ct),v(Fe,"scroll",mt),u(b).onExpandScroll=ct,u(b).onShrinkScroll=mt}else T("Aborting because element has been uninstalled");function ct(){var K=u(b);K&&K.onExpand?K.onExpand():T("Aborting expand scroll handler: element has been uninstalled")}function mt(){var K=u(b);K&&K.onShrink?K.onShrink():T("Aborting shrink scroll handler: element has been uninstalled")}}function q(){function C(H,te,ue){var _e=function(pe){return m(pe).childNodes[0]}(H),J=x(te),re=M(ue);_e.style.setProperty("width",J+"px",_.important?"important":""),_e.style.setProperty("height",re+"px",_.important?"important":"")}function P(H){var te=b.offsetWidth,ue=b.offsetHeight,_e=te!==u(b).lastWidth||ue!==u(b).lastHeight;T("Storing current size",te,ue),A(b,te,ue),c.add(0,function(){if(_e)if(u(b))if(O()){if(_.debug){var J=b.offsetWidth,re=b.offsetHeight;J===te&&re===ue||a.warn(l.get(b),"Scroll: Size changed before updating detector elements.")}C(b,te,ue)}else T("Aborting because element container has not been initialized");else T("Aborting because element has been uninstalled")}),c.add(1,function(){u(b)?O()?R(b,te,ue):T("Aborting because element container has not been initialized"):T("Aborting because element has been uninstalled")}),_e&&H&&c.add(2,function(){u(b)?O()?H():T("Aborting because element container has not been initialized"):T("Aborting because element has been uninstalled")})}function O(){return!!u(b).container}function B(){T("notifyListenersIfNeeded invoked");var H=u(b);return u(b).lastNotifiedWidth===void 0&&H.lastWidth===H.startSize.width&&H.lastHeight===H.startSize.height?T("Not notifying: Size is the same as the start size, and there has been no notification yet."):H.lastWidth===H.lastNotifiedWidth&&H.lastHeight===H.lastNotifiedHeight?T("Not notifying: Size already notified"):(T("Current size not notified, notifying..."),H.lastNotifiedWidth=H.lastWidth,H.lastNotifiedHeight=H.lastHeight,void r(u(b).listeners,function(te){te(b)}))}function G(){T("Scroll detected."),E(b)?T("Scroll event fired while unrendered. Ignoring..."):P(B)}if(T("registerListenersAndPositionElements invoked."),u(b)){u(b).onRendered=function(){if(T("startanimation triggered."),E(b))T("Ignoring since element is still unrendered...");else{T("Element rendered.");var H=m(b),te=y(b);H.scrollLeft!==0&&H.scrollTop!==0&&te.scrollLeft!==0&&te.scrollTop!==0||(T("Scrollbars out of sync. Updating detector elements..."),P(B))}},u(b).onExpand=G,u(b).onShrink=G;var Y=u(b).style;C(b,Y.width,Y.height)}else T("Aborting because element has been uninstalled")}function j(){if(T("finalizeDomMutation invoked."),u(b)){var C=u(b).style;A(b,C.width,C.height),R(b,C.width,C.height)}else T("Aborting because element has been uninstalled")}function W(){w(b)}function D(){var C;T("Installing..."),u(b).listeners=[],C=k(),u(b).startSize={width:C.width,height:C.height},T("Element start size",u(b).startSize),c.add(0,S),c.add(1,F),c.add(2,q),c.add(3,j),c.add(4,W)}w||(w=b,b=_,_=null),_=_||{},T("Making detectable..."),function(C){return!function(P){var O=P.getRootNode&&P.getRootNode().contains(P);return P===P.ownerDocument.body||P.ownerDocument.body.contains(P)||O}(C)||window.getComputedStyle(C)===null}(b)?(T("Element is detached"),L(),T("Waiting until element is attached..."),u(b).onRendered=function(){T("Element is now attached"),D()}):D()},addListener:function(_,b){if(!u(_).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");u(_).listeners.push(b)},uninstall:function(_){var b=u(_);b&&(b.onExpandScroll&&g(m(_),"scroll",b.onExpandScroll),b.onShrinkScroll&&g(y(_),"scroll",b.onShrinkScroll),b.onAnimationStart&&g(b.container,"animationstart",b.onAnimationStart),b.container&&_.removeChild(b.container))},initDocument:f}}},{"../collection-utils":4}],7:[function(e,i,n){var r=e("./collection-utils").forEach,o=e("./element-utils"),a=e("./listener-handler"),c=e("./id-generator"),u=e("./id-handler"),l=e("./reporter"),d=e("./browser-detector"),s=e("batch-processor"),f=e("./state-handler"),p=e("./detection-strategy/object.js"),v=e("./detection-strategy/scroll.js");function g(b){return Array.isArray(b)||b.length!==void 0}function m(b){if(Array.isArray(b))return b;var w=[];return r(b,function(T){w.push(T)}),w}function y(b){return b&&b.nodeType===1}function _(b,w,T){var E=b[w];return E==null&&T!==void 0?T:E}i.exports=function(b){var w;if((b=b||{}).idHandler)w={get:function(q){return b.idHandler.get(q,!0)},set:b.idHandler.set};else{var T=c(),E=u({idGenerator:T,stateHandler:f});w=E}var k=b.reporter;k||(k=l(k===!1));var S=_(b,"batchProcessor",s({reporter:k})),A={};A.callOnAdd=!!_(b,"callOnAdd",!0),A.debug=!!_(b,"debug",!1);var N,U=a(w),x=o({stateHandler:f}),M=_(b,"strategy","object"),R=_(b,"important",!1),L={reporter:k,batchProcessor:S,stateHandler:f,idHandler:w,important:R};if(M==="scroll"&&(d.isLegacyOpera()?(k.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),M="object"):d.isIE(9)&&(k.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),M="object")),M==="scroll")N=v(L);else{if(M!=="object")throw new Error("Invalid strategy name: "+M);N=p(L)}var F={};return{listenTo:function(q,j,W){function D(Y){var H=U.get(Y);r(H,function(te){te(Y)})}function C(Y,H,te){U.add(H,te),Y&&te(H)}if(W||(W=j,j=q,q={}),!j)throw new Error("At least one element required.");if(!W)throw new Error("Listener required.");if(y(j))j=[j];else{if(!g(j))return k.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");j=m(j)}var P=0,O=_(q,"callOnAdd",A.callOnAdd),B=_(q,"onReady",function(){}),G=_(q,"debug",A.debug);r(j,function(Y){f.getState(Y)||(f.initState(Y),w.set(Y));var H=w.get(Y);if(G&&k.log("Attaching listener to element",H,Y),!x.isDetectable(Y))return G&&k.log(H,"Not detectable."),x.isBusy(Y)?(G&&k.log(H,"System busy making it detectable"),C(O,Y,W),F[H]=F[H]||[],void F[H].push(function(){++P===j.length&&B()})):(G&&k.log(H,"Making detectable..."),x.markBusy(Y,!0),N.makeDetectable({debug:G,important:R},Y,function(te){if(G&&k.log(H,"onElementDetectable"),f.getState(te)){x.markAsDetectable(te),x.markBusy(te,!1),N.addListener(te,D),C(O,te,W);var ue=f.getState(te);if(ue&&ue.startSize){var _e=te.offsetWidth,J=te.offsetHeight;ue.startSize.width===_e&&ue.startSize.height===J||D(te)}F[H]&&r(F[H],function(re){re()})}else G&&k.log(H,"Element uninstalled before being detectable.");delete F[H],++P===j.length&&B()}));G&&k.log(H,"Already detecable, adding listener."),C(O,Y,W),P++}),P===j.length&&B()},removeListener:U.removeListener,removeAllListeners:U.removeAllListeners,uninstall:function(q){if(!q)return k.error("At least one element is required.");if(y(q))q=[q];else{if(!g(q))return k.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");q=m(q)}r(q,function(j){U.removeAllListeners(j),N.uninstall(j),f.cleanState(j)})},initDocument:function(q){N.initDocument&&N.initDocument(q)}}}},{"./browser-detector":3,"./collection-utils":4,"./detection-strategy/object.js":5,"./detection-strategy/scroll.js":6,"./element-utils":8,"./id-generator":9,"./id-handler":10,"./listener-handler":11,"./reporter":12,"./state-handler":13,"batch-processor":1}],8:[function(e,i,n){i.exports=function(r){var o=r.stateHandler.getState;return{isDetectable:function(a){var c=o(a);return c&&!!c.isDetectable},markAsDetectable:function(a){o(a).isDetectable=!0},isBusy:function(a){return!!o(a).busy},markBusy:function(a,c){o(a).busy=!!c}}}},{}],9:[function(e,i,n){i.exports=function(){var r=1;return{generate:function(){return r++}}}},{}],10:[function(e,i,n){i.exports=function(r){var o=r.idGenerator,a=r.stateHandler.getState;return{get:function(c){var u=a(c);return u&&u.id!==void 0?u.id:null},set:function(c){var u=a(c);if(!u)throw new Error("setId required the element to have a resize detection state.");var l=o.generate();return u.id=l,l}}}},{}],11:[function(e,i,n){i.exports=function(r){var o={};function a(c){var u=r.get(c);return u===void 0?[]:o[u]||[]}return{get:a,add:function(c,u){var l=r.get(c);o[l]||(o[l]=[]),o[l].push(u)},removeListener:function(c,u){for(var l=a(c),d=0,s=l.length;d<s;++d)if(l[d]===u){l.splice(d,1);break}},removeAllListeners:function(c){var u=a(c);u&&(u.length=0)}}}},{}],12:[function(e,i,n){i.exports=function(r){function o(){}var a={log:o,warn:o,error:o};if(!r&&window.console){var c=function(u,l){u[l]=function(){var d=console[l];if(d.apply)d.apply(console,arguments);else for(var s=0;s<arguments.length;s++)d(arguments[s])}};c(a,"log"),c(a,"warn"),c(a,"error")}return a}},{}],13:[function(e,i,n){function r(o){return o._erd}i.exports={initState:function(o){return o._erd={},r(o)},getState:r,cleanState:function(o){delete o._erd}}},{}],14:[function(e,i,n){var r,o;r=window,o=function(){return function(a){var c={};function u(l){if(c[l])return c[l].exports;var d=c[l]={i:l,l:!1,exports:{}};return a[l].call(d.exports,d,d.exports,u),d.l=!0,d.exports}return u.m=a,u.c=c,u.d=function(l,d,s){u.o(l,d)||Object.defineProperty(l,d,{enumerable:!0,get:s})},u.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},u.t=function(l,d){if(1&d&&(l=u(l)),8&d||4&d&&typeof l=="object"&&l&&l.__esModule)return l;var s=Object.create(null);if(u.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:l}),2&d&&typeof l!="string")for(var f in l)u.d(s,f,function(p){return l[p]}.bind(null,f));return s},u.n=function(l){var d=l&&l.__esModule?function(){return l.default}:function(){return l};return u.d(d,"a",d),d},u.o=function(l,d){return Object.prototype.hasOwnProperty.call(l,d)},u.p="",u(u.s=0)}([function(a,c,u){u.r(c);var l,d=function(D,C){var P=C.x-D.x,O=C.y-D.y;return Math.sqrt(P*P+O*O)},s=function(D){return D*(Math.PI/180)},f=new Map,p=function(D){f.has(D)&&clearTimeout(f.get(D)),f.set(D,setTimeout(D,100))},v=function(D,C,P){for(var O,B=C.split(/[ ,]+/g),G=0;G<B.length;G+=1)O=B[G],D.addEventListener?D.addEventListener(O,P,!1):D.attachEvent&&D.attachEvent(O,P)},g=function(D,C,P){for(var O,B=C.split(/[ ,]+/g),G=0;G<B.length;G+=1)O=B[G],D.removeEventListener?D.removeEventListener(O,P):D.detachEvent&&D.detachEvent(O,P)},m=function(D){return D.preventDefault(),D.type.match(/^touch/)?D.changedTouches:D},y=function(){return{x:window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},_=function(D,C){C.top||C.right||C.bottom||C.left?(D.style.top=C.top,D.style.right=C.right,D.style.bottom=C.bottom,D.style.left=C.left):(D.style.left=C.x+"px",D.style.top=C.y+"px")},b=function(D,C,P){var O=w(D);for(var B in O)if(O.hasOwnProperty(B))if(typeof C=="string")O[B]=C+" "+P;else{for(var G="",Y=0,H=C.length;Y<H;Y+=1)G+=C[Y]+" "+P+", ";O[B]=G.slice(0,-2)}return O},w=function(D){var C={};return C[D]="",["webkit","Moz","o"].forEach(function(P){C[P+D.charAt(0).toUpperCase()+D.slice(1)]=""}),C},T=function(D,C){for(var P in C)C.hasOwnProperty(P)&&(D[P]=C[P]);return D},E=function(D,C){if(D.length)for(var P=0,O=D.length;P<O;P+=1)C(D[P]);else C(D)},k="ontouchstart"in window,S=!!window.PointerEvent,A=!!window.MSPointerEvent,N={start:"mousedown",move:"mousemove",end:"mouseup"},U={};function x(){}S?l={start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"}:A?l={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:k?(l={start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},U=N):l=N,x.prototype.on=function(D,C){var P,O=D.split(/[ ,]+/g);this._handlers_=this._handlers_||{};for(var B=0;B<O.length;B+=1)P=O[B],this._handlers_[P]=this._handlers_[P]||[],this._handlers_[P].push(C);return this},x.prototype.off=function(D,C){return this._handlers_=this._handlers_||{},D===void 0?this._handlers_={}:C===void 0?this._handlers_[D]=null:this._handlers_[D]&&this._handlers_[D].indexOf(C)>=0&&this._handlers_[D].splice(this._handlers_[D].indexOf(C),1),this},x.prototype.trigger=function(D,C){var P,O=this,B=D.split(/[ ,]+/g);O._handlers_=O._handlers_||{};for(var G=0;G<B.length;G+=1)P=B[G],O._handlers_[P]&&O._handlers_[P].length&&O._handlers_[P].forEach(function(Y){Y.call(O,{type:P,target:O},C)})},x.prototype.config=function(D){this.options=this.defaults||{},D&&(this.options=function(C,P){var O={};for(var B in C)C.hasOwnProperty(B)&&P.hasOwnProperty(B)?O[B]=P[B]:C.hasOwnProperty(B)&&(O[B]=C[B]);return O}(this.options,D))},x.prototype.bindEvt=function(D,C){var P=this;return P._domHandlers_=P._domHandlers_||{},P._domHandlers_[C]=function(){typeof P["on"+C]=="function"?P["on"+C].apply(P,arguments):console.warn('[WARNING] : Missing "on'+C+'" handler.')},v(D,l[C],P._domHandlers_[C]),U[C]&&v(D,U[C],P._domHandlers_[C]),P},x.prototype.unbindEvt=function(D,C){return this._domHandlers_=this._domHandlers_||{},g(D,l[C],this._domHandlers_[C]),U[C]&&g(D,U[C],this._domHandlers_[C]),delete this._domHandlers_[C],this};var M=x;function R(D,C){return this.identifier=C.identifier,this.position=C.position,this.frontPosition=C.frontPosition,this.collection=D,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(C),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=R.id,R.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}R.prototype=new M,R.constructor=R,R.id=0,R.prototype.buildEl=function(D){return this.ui={},this.options.dataOnly||(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front)),this},R.prototype.stylize=function(){if(this.options.dataOnly)return this;var D=this.options.fadeTime+"ms",C=function(B,G){var Y=w("borderRadius");for(var H in Y)Y.hasOwnProperty(H)&&(Y[H]="50%");return Y}(),P=b("transition","opacity",D),O={};return O.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},O.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},O.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5"},T(O.el,P),this.options.shape==="circle"&&T(O.back,C),T(O.front,C),this.applyStyles(O),this},R.prototype.applyStyles=function(D){for(var C in this.ui)if(this.ui.hasOwnProperty(C))for(var P in D[C])this.ui[C].style[P]=D[C][P];return this},R.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)||this.options.zone.appendChild(this.ui.el),this},R.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)||this.options.zone.removeChild(this.ui.el),this},R.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},R.prototype.show=function(D){var C=this;return C.options.dataOnly||(clearTimeout(C.removeTimeout),clearTimeout(C.showTimeout),clearTimeout(C.restTimeout),C.addToDom(),C.restCallback(),setTimeout(function(){C.ui.el.style.opacity=1},0),C.showTimeout=setTimeout(function(){C.trigger("shown",C.instance),typeof D=="function"&&D.call(this)},C.options.fadeTime)),C},R.prototype.hide=function(D){var C=this;if(C.options.dataOnly)return C;if(C.ui.el.style.opacity=C.options.restOpacity,clearTimeout(C.removeTimeout),clearTimeout(C.showTimeout),clearTimeout(C.restTimeout),C.removeTimeout=setTimeout(function(){var B=C.options.mode==="dynamic"?"none":"block";C.ui.el.style.display=B,typeof D=="function"&&D.call(C),C.trigger("hidden",C.instance)},C.options.fadeTime),C.options.restJoystick){var P=C.options.restJoystick,O={};O.x=P===!0||P.x!==!1?0:C.instance.frontPosition.x,O.y=P===!0||P.y!==!1?0:C.instance.frontPosition.y,C.setPosition(D,O)}return C},R.prototype.setPosition=function(D,C){var P=this;P.frontPosition={x:C.x,y:C.y};var O=P.options.fadeTime+"ms",B={};B.front=b("transition",["top","left"],O);var G={front:{}};G.front={left:P.frontPosition.x+"px",top:P.frontPosition.y+"px"},P.applyStyles(B),P.applyStyles(G),P.restTimeout=setTimeout(function(){typeof D=="function"&&D.call(P),P.restCallback()},P.options.fadeTime)},R.prototype.restCallback=function(){var D={};D.front=b("transition","none",""),this.applyStyles(D),this.trigger("rested",this.instance)},R.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},R.prototype.computeDirection=function(D){var C,P,O,B=D.angle.radian,G=Math.PI/4,Y=Math.PI/2;if(B>G&&B<3*G&&!D.lockX?C="up":B>-G&&B<=G&&!D.lockY?C="left":B>3*-G&&B<=-G&&!D.lockX?C="down":D.lockY||(C="right"),D.lockY||(P=B>-Y&&B<Y?"left":"right"),D.lockX||(O=B>0?"up":"down"),D.force>this.options.threshold){var H,te={};for(H in this.direction)this.direction.hasOwnProperty(H)&&(te[H]=this.direction[H]);var ue={};for(H in this.direction={x:P,y:O,angle:C},D.direction=this.direction,te)te[H]===this.direction[H]&&(ue[H]=!0);if(ue.x&&ue.y&&ue.angle)return D;ue.x&&ue.y||this.trigger("plain",D),ue.x||this.trigger("plain:"+P,D),ue.y||this.trigger("plain:"+O,D),ue.angle||this.trigger("dir dir:"+C,D)}else this.resetDirection();return D};var L=R;function F(D,C){this.nipples=[],this.idles=[],this.actives=[],this.ids=[],this.pressureIntervals={},this.manager=D,this.id=F.id,F.id+=1,this.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},this.config(C),this.options.mode!=="static"&&this.options.mode!=="semi"||(this.options.multitouch=!1),this.options.multitouch||(this.options.maxNumberOfNipples=1);var P=getComputedStyle(this.options.zone.parentElement);return P&&P.display==="flex"&&(this.parentIsFlex=!0),this.updateBox(),this.prepareNipples(),this.bindings(),this.begin(),this.nipples}F.prototype=new M,F.constructor=F,F.id=0,F.prototype.prepareNipples=function(){var D=this.nipples;D.on=this.on.bind(this),D.off=this.off.bind(this),D.options=this.options,D.destroy=this.destroy.bind(this),D.ids=this.ids,D.id=this.id,D.processOnMove=this.processOnMove.bind(this),D.processOnEnd=this.processOnEnd.bind(this),D.get=function(C){if(C===void 0)return D[0];for(var P=0,O=D.length;P<O;P+=1)if(D[P].identifier===C)return D[P];return!1}},F.prototype.bindings=function(){this.bindEvt(this.options.zone,"start"),this.options.zone.style.touchAction="none",this.options.zone.style.msTouchAction="none"},F.prototype.begin=function(){var D=this.options;if(D.mode==="static"){var C=this.createNipple(D.position,this.manager.getIdentifier());C.add(),this.idles.push(C)}},F.prototype.createNipple=function(D,C){var P=this.manager.scroll,O={},B=this.options,G=this.parentIsFlex?P.x:P.x+this.box.left,Y=this.parentIsFlex?P.y:P.y+this.box.top;if(D.x&&D.y)O={x:D.x-G,y:D.y-Y};else if(D.top||D.right||D.bottom||D.left){var H=document.createElement("DIV");H.style.display="hidden",H.style.top=D.top,H.style.right=D.right,H.style.bottom=D.bottom,H.style.left=D.left,H.style.position="absolute",B.zone.appendChild(H);var te=H.getBoundingClientRect();B.zone.removeChild(H),O=D,D={x:te.left+P.x,y:te.top+P.y}}var ue=new L(this,{color:B.color,size:B.size,threshold:B.threshold,fadeTime:B.fadeTime,dataOnly:B.dataOnly,restJoystick:B.restJoystick,restOpacity:B.restOpacity,mode:B.mode,identifier:C,position:D,zone:B.zone,frontPosition:{x:0,y:0},shape:B.shape});return B.dataOnly||(_(ue.ui.el,O),_(ue.ui.front,ue.frontPosition)),this.nipples.push(ue),this.trigger("added "+ue.identifier+":added",ue),this.manager.trigger("added "+ue.identifier+":added",ue),this.bindNipple(ue),ue},F.prototype.updateBox=function(){this.box=this.options.zone.getBoundingClientRect()},F.prototype.bindNipple=function(D){var C,P=this,O=function(B,G){C=B.type+" "+G.id+":"+B.type,P.trigger(C,G)};D.on("destroyed",P.onDestroyed.bind(P)),D.on("shown hidden rested dir plain",O),D.on("dir:up dir:right dir:down dir:left",O),D.on("plain:up plain:right plain:down plain:left",O)},F.prototype.pressureFn=function(D,C,P){var O=this,B=0;clearInterval(O.pressureIntervals[P]),O.pressureIntervals[P]=setInterval(function(){var G=D.force||D.pressure||D.webkitForce||0;G!==B&&(C.trigger("pressure",G),O.trigger("pressure "+C.identifier+":pressure",G),B=G)}.bind(O),100)},F.prototype.onstart=function(D){var C=this,P=C.options,O=D;return D=m(D),C.updateBox(),E(D,function(B){C.actives.length<P.maxNumberOfNipples?C.processOnStart(B):O.type.match(/^touch/)&&(Object.keys(C.manager.ids).forEach(function(G){if(Object.values(O.touches).findIndex(function(H){return H.identifier===G})<0){var Y=[D[0]];Y.identifier=G,C.processOnEnd(Y)}}),C.actives.length<P.maxNumberOfNipples&&C.processOnStart(B))}),C.manager.bindDocument(),!1},F.prototype.processOnStart=function(D){var C,P=this,O=P.options,B=P.manager.getIdentifier(D),G=D.force||D.pressure||D.webkitForce||0,Y={x:D.pageX,y:D.pageY},H=P.getOrCreate(B,Y);H.identifier!==B&&P.manager.removeIdentifier(H.identifier),H.identifier=B;var te=function(ue){ue.trigger("start",ue),P.trigger("start "+ue.id+":start",ue),ue.show(),G>0&&P.pressureFn(D,ue,ue.identifier),P.processOnMove(D)};if((C=P.idles.indexOf(H))>=0&&P.idles.splice(C,1),P.actives.push(H),P.ids.push(H.identifier),O.mode!=="semi")te(H);else{if(!(d(Y,H.position)<=O.catchDistance))return H.destroy(),void P.processOnStart(D);te(H)}return H},F.prototype.getOrCreate=function(D,C){var P,O=this.options;return/(semi|static)/.test(O.mode)?(P=this.idles[0])?(this.idles.splice(0,1),P):O.mode==="semi"?this.createNipple(C,D):(console.warn("Coudln't find the needed nipple."),!1):P=this.createNipple(C,D)},F.prototype.processOnMove=function(D){var C=this.options,P=this.manager.getIdentifier(D),O=this.nipples.get(P),B=this.manager.scroll;if(function(ze){return isNaN(ze.buttons)?ze.pressure!==0:ze.buttons!==0}(D)){if(!O)return console.error("Found zombie joystick with ID "+P),void this.manager.removeIdentifier(P);if(C.dynamicPage){var G=O.el.getBoundingClientRect();O.position={x:B.x+G.left,y:B.y+G.top}}O.identifier=P;var Y=O.options.size/2,H={x:D.pageX,y:D.pageY};C.lockX&&(H.y=O.position.y),C.lockY&&(H.x=O.position.x);var te,ue,_e,J,re,pe,we,me,ye,$e,Fe=d(H,O.position),Je=(te=H,_e=(ue=O.position).x-te.x,J=ue.y-te.y,function(ze){return ze*(180/Math.PI)}(Math.atan2(J,_e))),ct=s(Je),mt=Fe/Y,K={distance:Fe,position:H};if(O.options.shape==="circle"?(re=Math.min(Fe,Y),we=O.position,me=re,$e={x:0,y:0},ye=s(ye=Je),$e.x=we.x-me*Math.cos(ye),$e.y=we.y-me*Math.sin(ye),pe=$e):(pe=function(ze,De,ve){return{x:Math.min(Math.max(ze.x,De.x-ve),De.x+ve),y:Math.min(Math.max(ze.y,De.y-ve),De.y+ve)}}(H,O.position,Y),re=d(pe,O.position)),C.follow){if(Fe>Y){var X=H.x-pe.x,fe=H.y-pe.y;O.position.x+=X,O.position.y+=fe,O.el.style.top=O.position.y-(this.box.top+B.y)+"px",O.el.style.left=O.position.x-(this.box.left+B.x)+"px",Fe=d(H,O.position)}}else H=pe,Fe=re;var Pe=H.x-O.position.x,Le=H.y-O.position.y;O.frontPosition={x:Pe,y:Le},C.dataOnly||_(O.ui.front,O.frontPosition);var Ne={identifier:O.identifier,position:H,force:mt,pressure:D.force||D.pressure||D.webkitForce||0,distance:Fe,angle:{radian:ct,degree:Je},vector:{x:Pe/Y,y:-Le/Y},raw:K,instance:O,lockX:C.lockX,lockY:C.lockY};(Ne=O.computeDirection(Ne)).angle={radian:s(180-Je),degree:180-Je},O.trigger("move",Ne),this.trigger("move "+O.id+":move",Ne)}else this.processOnEnd(D)},F.prototype.processOnEnd=function(D){var C=this,P=C.options,O=C.manager.getIdentifier(D),B=C.nipples.get(O),G=C.manager.removeIdentifier(B.identifier);B&&(P.dataOnly||B.hide(function(){P.mode==="dynamic"&&(B.trigger("removed",B),C.trigger("removed "+B.id+":removed",B),C.manager.trigger("removed "+B.id+":removed",B),B.destroy())}),clearInterval(C.pressureIntervals[B.identifier]),B.resetDirection(),B.trigger("end",B),C.trigger("end "+B.id+":end",B),C.ids.indexOf(B.identifier)>=0&&C.ids.splice(C.ids.indexOf(B.identifier),1),C.actives.indexOf(B)>=0&&C.actives.splice(C.actives.indexOf(B),1),/(semi|static)/.test(P.mode)?C.idles.push(B):C.nipples.indexOf(B)>=0&&C.nipples.splice(C.nipples.indexOf(B),1),C.manager.unbindDocument(),/(semi|static)/.test(P.mode)&&(C.manager.ids[G.id]=G.identifier))},F.prototype.onDestroyed=function(D,C){this.nipples.indexOf(C)>=0&&this.nipples.splice(this.nipples.indexOf(C),1),this.actives.indexOf(C)>=0&&this.actives.splice(this.actives.indexOf(C),1),this.idles.indexOf(C)>=0&&this.idles.splice(this.idles.indexOf(C),1),this.ids.indexOf(C.identifier)>=0&&this.ids.splice(this.ids.indexOf(C.identifier),1),this.manager.removeIdentifier(C.identifier),this.manager.unbindDocument()},F.prototype.destroy=function(){for(var D in this.unbindEvt(this.options.zone,"start"),this.nipples.forEach(function(C){C.destroy()}),this.pressureIntervals)this.pressureIntervals.hasOwnProperty(D)&&clearInterval(this.pressureIntervals[D]);this.trigger("destroyed",this.nipples),this.manager.unbindDocument(),this.off()};var q=F;function j(D){var C=this;C.ids={},C.index=0,C.collections=[],C.scroll=y(),C.config(D),C.prepareCollections();var P=function(){var B;C.collections.forEach(function(G){G.forEach(function(Y){B=Y.el.getBoundingClientRect(),Y.position={x:C.scroll.x+B.left,y:C.scroll.y+B.top}})})};v(window,"resize",function(){p(P)});var O=function(){C.scroll=y()};return v(window,"scroll",function(){p(O)}),C.collections}j.prototype=new M,j.constructor=j,j.prototype.prepareCollections=function(){var D=this;D.collections.create=D.create.bind(D),D.collections.on=D.on.bind(D),D.collections.off=D.off.bind(D),D.collections.destroy=D.destroy.bind(D),D.collections.get=function(C){var P;return D.collections.every(function(O){return!(P=O.get(C))}),P}},j.prototype.create=function(D){return this.createCollection(D)},j.prototype.createCollection=function(D){var C=new q(this,D);return this.bindCollection(C),this.collections.push(C),C},j.prototype.bindCollection=function(D){var C,P=this,O=function(B,G){C=B.type+" "+G.id+":"+B.type,P.trigger(C,G)};D.on("destroyed",P.onDestroyed.bind(P)),D.on("shown hidden rested dir plain",O),D.on("dir:up dir:right dir:down dir:left",O),D.on("plain:up plain:right plain:down plain:left",O)},j.prototype.bindDocument=function(){this.binded||(this.bindEvt(document,"move").bindEvt(document,"end"),this.binded=!0)},j.prototype.unbindDocument=function(D){Object.keys(this.ids).length&&D!==!0||(this.unbindEvt(document,"move").unbindEvt(document,"end"),this.binded=!1)},j.prototype.getIdentifier=function(D){var C;return D?(C=D.identifier===void 0?D.pointerId:D.identifier)===void 0&&(C=this.latest||0):C=this.index,this.ids[C]===void 0&&(this.ids[C]=this.index,this.index+=1),this.latest=C,this.ids[C]},j.prototype.removeIdentifier=function(D){var C={};for(var P in this.ids)if(this.ids[P]===D){C.id=P,C.identifier=this.ids[P],delete this.ids[P];break}return C},j.prototype.onmove=function(D){return this.onAny("move",D),!1},j.prototype.onend=function(D){return this.onAny("end",D),!1},j.prototype.oncancel=function(D){return this.onAny("end",D),!1},j.prototype.onAny=function(D,C){var P,O=this,B="processOn"+D.charAt(0).toUpperCase()+D.slice(1);return C=m(C),E(C,function(G){P=O.getIdentifier(G),E(O.collections,function(Y,H,te){te.ids.indexOf(H)>=0&&(te[B](Y),Y._found_=!0)}.bind(null,G,P)),G._found_||O.removeIdentifier(P)}),!1},j.prototype.destroy=function(){this.unbindDocument(!0),this.ids={},this.index=0,this.collections.forEach(function(D){D.destroy()}),this.off()},j.prototype.onDestroyed=function(D,C){if(this.collections.indexOf(C)<0)return!1;this.collections.splice(this.collections.indexOf(C),1)};var W=new j;c.default={create:function(D){return W.create(D)},factory:W}}]).default},typeof n=="object"&&typeof i=="object"?i.exports=o():typeof n=="object"?n.nipplejs=o():r.nipplejs=o()},{}],15:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0});/*! *****************************************************************************
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
	***************************************************************************** */var r,o=function(){return o=Object.assign||function(f){for(var p,v=1,g=arguments.length;v<g;v++)for(var m in p=arguments[v])Object.prototype.hasOwnProperty.call(p,m)&&(f[m]=p[m]);return f},o.apply(this,arguments)},a=function(){function f(p){this.options=p,this.listeners={}}return f.prototype.on=function(p,v){var g=this.listeners[p]||[];this.listeners[p]=g.concat([v])},f.prototype.triggerEvent=function(p,v){var g=this;(this.listeners[p]||[]).forEach(function(m){return m({target:g,event:v})})},f}();(r=n.NotyfArrayEvent||(n.NotyfArrayEvent={}))[r.Add=0]="Add",r[r.Remove=1]="Remove";var c,u=function(){function f(){this.notifications=[]}return f.prototype.push=function(p){this.notifications.push(p),this.updateFn(p,n.NotyfArrayEvent.Add,this.notifications)},f.prototype.splice=function(p,v){var g=this.notifications.splice(p,v)[0];return this.updateFn(g,n.NotyfArrayEvent.Remove,this.notifications),g},f.prototype.indexOf=function(p){return this.notifications.indexOf(p)},f.prototype.onUpdate=function(p){this.updateFn=p},f}();(c=n.NotyfEvent||(n.NotyfEvent={})).Dismiss="dismiss",c.Click="click";var l={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},d=function(){function f(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var p=document.createDocumentFragment(),v=this._createHTMLElement({tagName:"div",className:"notyf"});p.appendChild(v),document.body.appendChild(p),this.container=v,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return f.prototype.on=function(p,v){var g;this.events=o(o({},this.events),((g={})[p]=v,g))},f.prototype.update=function(p,v){v===n.NotyfArrayEvent.Add?this.addNotification(p):v===n.NotyfArrayEvent.Remove&&this.removeNotification(p)},f.prototype.removeNotification=function(p){var v,g,m=this,y=this._popRenderedNotification(p);y&&((v=y.node).classList.add("notyf__toast--disappear"),v.addEventListener(this.animationEndEventName,g=function(_){_.target===v&&(v.removeEventListener(m.animationEndEventName,g),m.container.removeChild(v))}))},f.prototype.addNotification=function(p){var v=this._renderNotification(p);this.notifications.push({notification:p,node:v}),this._announce(p.options.message||"Notification")},f.prototype._renderNotification=function(p){var v,g=this._buildNotificationCard(p),m=p.options.className;return m&&(v=g.classList).add.apply(v,m.split(" ")),this.container.appendChild(g),g},f.prototype._popRenderedNotification=function(p){for(var v=-1,g=0;g<this.notifications.length&&v<0;g++)this.notifications[g].notification===p&&(v=g);if(v!==-1)return this.notifications.splice(v,1)[0]},f.prototype.getXPosition=function(p){var v;return((v=p==null?void 0:p.position)===null||v===void 0?void 0:v.x)||"right"},f.prototype.getYPosition=function(p){var v;return((v=p==null?void 0:p.position)===null||v===void 0?void 0:v.y)||"bottom"},f.prototype.adjustContainerAlignment=function(p){var v=this.X_POSITION_FLEX_MAP[this.getXPosition(p)],g=this.Y_POSITION_FLEX_MAP[this.getYPosition(p)],m=this.container.style;m.setProperty("justify-content",g),m.setProperty("align-items",v)},f.prototype._buildNotificationCard=function(p){var v=this,g=p.options,m=g.icon;this.adjustContainerAlignment(g);var y=this._createHTMLElement({tagName:"div",className:"notyf__toast"}),_=this._createHTMLElement({tagName:"div",className:"notyf__ripple"}),b=this._createHTMLElement({tagName:"div",className:"notyf__wrapper"}),w=this._createHTMLElement({tagName:"div",className:"notyf__message"});w.innerHTML=g.message||"";var T=g.background||g.backgroundColor;if(m){var E=this._createHTMLElement({tagName:"div",className:"notyf__icon"});if((typeof m=="string"||m instanceof String)&&(E.innerHTML=new String(m).valueOf()),typeof m=="object"){var k=m.tagName,S=k===void 0?"i":k,A=m.className,N=m.text,U=m.color,x=U===void 0?T:U,M=this._createHTMLElement({tagName:S,className:A,text:N});x&&(M.style.color=x),E.appendChild(M)}b.appendChild(E)}if(b.appendChild(w),y.appendChild(b),T&&(g.ripple?(_.style.background=T,y.appendChild(_)):y.style.background=T),g.dismissible){var R=this._createHTMLElement({tagName:"div",className:"notyf__dismiss"}),L=this._createHTMLElement({tagName:"button",className:"notyf__dismiss-btn"});R.appendChild(L),b.appendChild(R),y.classList.add("notyf__toast--dismissible"),L.addEventListener("click",function(q){var j,W;(W=(j=v.events)[n.NotyfEvent.Dismiss])===null||W===void 0||W.call(j,{target:p,event:q}),q.stopPropagation()})}y.addEventListener("click",function(q){var j,W;return(W=(j=v.events)[n.NotyfEvent.Click])===null||W===void 0?void 0:W.call(j,{target:p,event:q})});var F=this.getYPosition(g)==="top"?"upper":"lower";return y.classList.add("notyf__toast--"+F),y},f.prototype._createHTMLElement=function(p){var v=p.tagName,g=p.className,m=p.text,y=document.createElement(v);return g&&(y.className=g),y.textContent=m||null,y},f.prototype._createA11yContainer=function(){var p=this._createHTMLElement({tagName:"div",className:"notyf-announcer"});p.setAttribute("aria-atomic","true"),p.setAttribute("aria-live","polite"),p.style.border="0",p.style.clip="rect(0 0 0 0)",p.style.height="1px",p.style.margin="-1px",p.style.overflow="hidden",p.style.padding="0",p.style.position="absolute",p.style.width="1px",p.style.outline="0",document.body.appendChild(p),this.a11yContainer=p},f.prototype._announce=function(p){var v=this;this.a11yContainer.textContent="",setTimeout(function(){v.a11yContainer.textContent=p},100)},f.prototype._getAnimationEndEventName=function(){var p,v=document.createElement("_fake"),g={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(p in g)if(v.style[p]!==void 0)return g[p];return"animationend"},f}(),s=function(){function f(p){var v=this;this.dismiss=this._removeNotification,this.notifications=new u,this.view=new d;var g=this.registerTypes(p);this.options=o(o({},l),p),this.options.types=g,this.notifications.onUpdate(function(m,y){return v.view.update(m,y)}),this.view.on(n.NotyfEvent.Dismiss,function(m){var y=m.target,_=m.event;v._removeNotification(y),y.triggerEvent(n.NotyfEvent.Dismiss,_)}),this.view.on(n.NotyfEvent.Click,function(m){var y=m.target,_=m.event;return y.triggerEvent(n.NotyfEvent.Click,_)})}return f.prototype.error=function(p){var v=this.normalizeOptions("error",p);return this.open(v)},f.prototype.success=function(p){var v=this.normalizeOptions("success",p);return this.open(v)},f.prototype.open=function(p){var v=this.options.types.find(function(y){return y.type===p.type})||{},g=o(o({},v),p);this.assignProps(["ripple","position","dismissible"],g);var m=new a(g);return this._pushNotification(m),m},f.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},f.prototype.assignProps=function(p,v){var g=this;p.forEach(function(m){v[m]=v[m]==null?g.options[m]:v[m]})},f.prototype._pushNotification=function(p){var v=this;this.notifications.push(p);var g=p.options.duration!==void 0?p.options.duration:this.options.duration;g&&setTimeout(function(){return v._removeNotification(p)},g)},f.prototype._removeNotification=function(p){var v=this.notifications.indexOf(p);v!==-1&&this.notifications.splice(v,1)},f.prototype.normalizeOptions=function(p,v){var g={type:p};return typeof v=="string"?g.message=v:typeof v=="object"&&(g=o(o({},g),v)),g},f.prototype.registerTypes=function(p){var v=(p&&p.types||[]).slice();return l.types.map(function(g){var m=-1;v.forEach(function(_,b){_.type===g.type&&(m=b)});var y=m!==-1?v.splice(m,1)[0]:{};return o(o({},g),y)}).concat(v)},f}();n.DEFAULT_OPTIONS=l,n.Notyf=s,n.NotyfArray=u,n.NotyfNotification=a,n.NotyfView=d},{}],16:[function(e,i,n){var r;r=function(){return function(){var o={9662:function(l,d,s){var f=s(614),p=s(6330),v=TypeError;l.exports=function(g){if(f(g))return g;throw v(p(g)+" is not a function")}},9483:function(l,d,s){var f=s(4411),p=s(6330),v=TypeError;l.exports=function(g){if(f(g))return g;throw v(p(g)+" is not a constructor")}},6077:function(l,d,s){var f=s(614),p=String,v=TypeError;l.exports=function(g){if(typeof g=="object"||f(g))return g;throw v("Can't set "+p(g)+" as a prototype")}},1223:function(l,d,s){var f=s(5112),p=s(30),v=s(3070).f,g=f("unscopables"),m=Array.prototype;m[g]==null&&v(m,g,{configurable:!0,value:p(null)}),l.exports=function(y){m[g][y]=!0}},1530:function(l,d,s){var f=s(8710).charAt;l.exports=function(p,v,g){return v+(g?f(p,v).length:1)}},9670:function(l,d,s){var f=s(111),p=String,v=TypeError;l.exports=function(g){if(f(g))return g;throw v(p(g)+" is not an object")}},8533:function(l,d,s){var f=s(2092).forEach,p=s(9341)("forEach");l.exports=p?[].forEach:function(v){return f(this,v,arguments.length>1?arguments[1]:void 0)}},8457:function(l,d,s){var f=s(9974),p=s(6916),v=s(7908),g=s(3411),m=s(7659),y=s(4411),_=s(6244),b=s(6135),w=s(8554),T=s(1246),E=Array;l.exports=function(k){var S=v(k),A=y(this),N=arguments.length,U=N>1?arguments[1]:void 0,x=U!==void 0;x&&(U=f(U,N>2?arguments[2]:void 0));var M,R,L,F,q,j,W=T(S),D=0;if(!W||this===E&&m(W))for(M=_(S),R=A?new this(M):E(M);M>D;D++)j=x?U(S[D],D):S[D],b(R,D,j);else for(q=(F=w(S,W)).next,R=A?new this:[];!(L=p(q,F)).done;D++)j=x?g(F,U,[L.value,D],!0):L.value,b(R,D,j);return R.length=D,R}},1318:function(l,d,s){var f=s(5656),p=s(1400),v=s(6244),g=function(m){return function(y,_,b){var w,T=f(y),E=v(T),k=p(b,E);if(m&&_!=_){for(;E>k;)if((w=T[k++])!=w)return!0}else for(;E>k;k++)if((m||k in T)&&T[k]===_)return m||k||0;return!m&&-1}};l.exports={includes:g(!0),indexOf:g(!1)}},2092:function(l,d,s){var f=s(9974),p=s(1702),v=s(8361),g=s(7908),m=s(6244),y=s(5417),_=p([].push),b=function(w){var T=w==1,E=w==2,k=w==3,S=w==4,A=w==6,N=w==7,U=w==5||A;return function(x,M,R,L){for(var F,q,j=g(x),W=v(j),D=f(M,R),C=m(W),P=0,O=L||y,B=T?O(x,C):E||N?O(x,0):void 0;C>P;P++)if((U||P in W)&&(q=D(F=W[P],P,j),w))if(T)B[P]=q;else if(q)switch(w){case 3:return!0;case 5:return F;case 6:return P;case 2:_(B,F)}else switch(w){case 4:return!1;case 7:_(B,F)}return A?-1:k||S?S:B}};l.exports={forEach:b(0),map:b(1),filter:b(2),some:b(3),every:b(4),find:b(5),findIndex:b(6),filterReject:b(7)}},1194:function(l,d,s){var f=s(7293),p=s(5112),v=s(7392),g=p("species");l.exports=function(m){return v>=51||!f(function(){var y=[];return(y.constructor={})[g]=function(){return{foo:1}},y[m](Boolean).foo!==1})}},9341:function(l,d,s){var f=s(7293);l.exports=function(p,v){var g=[][p];return!!g&&f(function(){g.call(null,v||function(){return 1},1)})}},3671:function(l,d,s){var f=s(9662),p=s(7908),v=s(8361),g=s(6244),m=TypeError,y=function(_){return function(b,w,T,E){f(w);var k=p(b),S=v(k),A=g(k),N=_?A-1:0,U=_?-1:1;if(T<2)for(;;){if(N in S){E=S[N],N+=U;break}if(N+=U,_?N<0:A<=N)throw m("Reduce of empty array with no initial value")}for(;_?N>=0:A>N;N+=U)N in S&&(E=w(E,S[N],N,k));return E}};l.exports={left:y(!1),right:y(!0)}},1589:function(l,d,s){var f=s(1400),p=s(6244),v=s(6135),g=Array,m=Math.max;l.exports=function(y,_,b){for(var w=p(y),T=f(_,w),E=f(b===void 0?w:b,w),k=g(m(E-T,0)),S=0;T<E;T++,S++)v(k,S,y[T]);return k.length=S,k}},206:function(l,d,s){var f=s(1702);l.exports=f([].slice)},4362:function(l,d,s){var f=s(1589),p=Math.floor,v=function(y,_){var b=y.length,w=p(b/2);return b<8?g(y,_):m(y,v(f(y,0,w),_),v(f(y,w),_),_)},g=function(y,_){for(var b,w,T=y.length,E=1;E<T;){for(w=E,b=y[E];w&&_(y[w-1],b)>0;)y[w]=y[--w];w!==E++&&(y[w]=b)}return y},m=function(y,_,b,w){for(var T=_.length,E=b.length,k=0,S=0;k<T||S<E;)y[k+S]=k<T&&S<E?w(_[k],b[S])<=0?_[k++]:b[S++]:k<T?_[k++]:b[S++];return y};l.exports=v},7475:function(l,d,s){var f=s(3157),p=s(4411),v=s(111),g=s(5112)("species"),m=Array;l.exports=function(y){var _;return f(y)&&(_=y.constructor,(p(_)&&(_===m||f(_.prototype))||v(_)&&(_=_[g])===null)&&(_=void 0)),_===void 0?m:_}},5417:function(l,d,s){var f=s(7475);l.exports=function(p,v){return new(f(p))(v===0?0:v)}},3411:function(l,d,s){var f=s(9670),p=s(9212);l.exports=function(v,g,m,y){try{return y?g(f(m)[0],m[1]):g(m)}catch(_){p(v,"throw",_)}}},7072:function(l,d,s){var f=s(5112)("iterator"),p=!1;try{var v=0,g={next:function(){return{done:!!v++}},return:function(){p=!0}};g[f]=function(){return this},Array.from(g,function(){throw 2})}catch{}l.exports=function(m,y){if(!y&&!p)return!1;var _=!1;try{var b={};b[f]=function(){return{next:function(){return{done:_=!0}}}},m(b)}catch{}return _}},4326:function(l,d,s){var f=s(1702),p=f({}.toString),v=f("".slice);l.exports=function(g){return v(p(g),8,-1)}},648:function(l,d,s){var f=s(1694),p=s(614),v=s(4326),g=s(5112)("toStringTag"),m=Object,y=v(function(){return arguments}())=="Arguments";l.exports=f?v:function(_){var b,w,T;return _===void 0?"Undefined":_===null?"Null":typeof(w=function(E,k){try{return E[k]}catch{}}(b=m(_),g))=="string"?w:y?v(b):(T=v(b))=="Object"&&p(b.callee)?"Arguments":T}},9920:function(l,d,s){var f=s(2597),p=s(3887),v=s(1236),g=s(3070);l.exports=function(m,y,_){for(var b=p(y),w=g.f,T=v.f,E=0;E<b.length;E++){var k=b[E];f(m,k)||_&&f(_,k)||w(m,k,T(y,k))}}},4964:function(l,d,s){var f=s(5112)("match");l.exports=function(p){var v=/./;try{"/./"[p](v)}catch{try{return v[f]=!1,"/./"[p](v)}catch{}}return!1}},8544:function(l,d,s){var f=s(7293);l.exports=!f(function(){function p(){}return p.prototype.constructor=null,Object.getPrototypeOf(new p)!==p.prototype})},4994:function(l,d,s){var f=s(3383).IteratorPrototype,p=s(30),v=s(9114),g=s(8003),m=s(7497),y=function(){return this};l.exports=function(_,b,w,T){var E=b+" Iterator";return _.prototype=p(f,{next:v(+!T,w)}),g(_,E,!1,!0),m[E]=y,_}},8880:function(l,d,s){var f=s(9781),p=s(3070),v=s(9114);l.exports=f?function(g,m,y){return p.f(g,m,v(1,y))}:function(g,m,y){return g[m]=y,g}},9114:function(l){l.exports=function(d,s){return{enumerable:!(1&d),configurable:!(2&d),writable:!(4&d),value:s}}},6135:function(l,d,s){var f=s(4948),p=s(3070),v=s(9114);l.exports=function(g,m,y){var _=f(m);_ in g?p.f(g,_,v(0,y)):g[_]=y}},8052:function(l,d,s){var f=s(614),p=s(3070),v=s(6339),g=s(3072);l.exports=function(m,y,_,b){b||(b={});var w=b.enumerable,T=b.name!==void 0?b.name:y;if(f(_)&&v(_,T,b),b.global)w?m[y]=_:g(y,_);else{try{b.unsafe?m[y]&&(w=!0):delete m[y]}catch{}w?m[y]=_:p.f(m,y,{value:_,enumerable:!1,configurable:!b.nonConfigurable,writable:!b.nonWritable})}return m}},3072:function(l,d,s){var f=s(7854),p=Object.defineProperty;l.exports=function(v,g){try{p(f,v,{value:g,configurable:!0,writable:!0})}catch{f[v]=g}return g}},654:function(l,d,s){var f=s(2109),p=s(6916),v=s(1913),g=s(6530),m=s(614),y=s(4994),_=s(9518),b=s(7674),w=s(8003),T=s(8880),E=s(8052),k=s(5112),S=s(7497),A=s(3383),N=g.PROPER,U=g.CONFIGURABLE,x=A.IteratorPrototype,M=A.BUGGY_SAFARI_ITERATORS,R=k("iterator"),L="keys",F="values",q="entries",j=function(){return this};l.exports=function(W,D,C,P,O,B,G){y(C,D,P);var Y,H,te,ue=function(ye){if(ye===O&&we)return we;if(!M&&ye in re)return re[ye];switch(ye){case L:case F:case q:return function(){return new C(this,ye)}}return function(){return new C(this)}},_e=D+" Iterator",J=!1,re=W.prototype,pe=re[R]||re["@@iterator"]||O&&re[O],we=!M&&pe||ue(O),me=D=="Array"&&re.entries||pe;if(me&&(Y=_(me.call(new W)))!==Object.prototype&&Y.next&&(v||_(Y)===x||(b?b(Y,x):m(Y[R])||E(Y,R,j)),w(Y,_e,!0,!0),v&&(S[_e]=j)),N&&O==F&&pe&&pe.name!==F&&(!v&&U?T(re,"name",F):(J=!0,we=function(){return p(pe,this)})),O)if(H={values:ue(F),keys:B?we:ue(L),entries:ue(q)},G)for(te in H)(M||J||!(te in re))&&E(re,te,H[te]);else f({target:D,proto:!0,forced:M||J},H);return v&&!G||re[R]===we||E(re,R,we,{name:O}),S[D]=we,H}},7235:function(l,d,s){var f=s(857),p=s(2597),v=s(6061),g=s(3070).f;l.exports=function(m){var y=f.Symbol||(f.Symbol={});p(y,m)||g(y,m,{value:v.f(m)})}},5117:function(l,d,s){var f=s(6330),p=TypeError;l.exports=function(v,g){if(!delete v[g])throw p("Cannot delete property "+f(g)+" of "+f(v))}},9781:function(l,d,s){var f=s(7293);l.exports=!f(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},317:function(l,d,s){var f=s(7854),p=s(111),v=f.document,g=p(v)&&p(v.createElement);l.exports=function(m){return g?v.createElement(m):{}}},7207:function(l){var d=TypeError;l.exports=function(s){if(s>9007199254740991)throw d("Maximum allowed index exceeded");return s}},8324:function(l){l.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:function(l,d,s){var f=s(317)("span").classList,p=f&&f.constructor&&f.constructor.prototype;l.exports=p===Object.prototype?void 0:p},8886:function(l,d,s){var f=s(8113).match(/firefox\/(\d+)/i);l.exports=!!f&&+f[1]},256:function(l,d,s){var f=s(8113);l.exports=/MSIE|Trident/.test(f)},5268:function(l,d,s){var f=s(4326),p=s(7854);l.exports=f(p.process)=="process"},8113:function(l,d,s){var f=s(5005);l.exports=f("navigator","userAgent")||""},7392:function(l,d,s){var f,p,v=s(7854),g=s(8113),m=v.process,y=v.Deno,_=m&&m.versions||y&&y.version,b=_&&_.v8;b&&(p=(f=b.split("."))[0]>0&&f[0]<4?1:+(f[0]+f[1])),!p&&g&&(!(f=g.match(/Edge\/(\d+)/))||f[1]>=74)&&(f=g.match(/Chrome\/(\d+)/))&&(p=+f[1]),l.exports=p},8008:function(l,d,s){var f=s(8113).match(/AppleWebKit\/(\d+)\./);l.exports=!!f&&+f[1]},748:function(l){l.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(l,d,s){var f=s(7854),p=s(1236).f,v=s(8880),g=s(8052),m=s(3072),y=s(9920),_=s(4705);l.exports=function(b,w){var T,E,k,S,A,N=b.target,U=b.global,x=b.stat;if(T=U?f:x?f[N]||m(N,{}):(f[N]||{}).prototype)for(E in w){if(S=w[E],k=b.dontCallGetSet?(A=p(T,E))&&A.value:T[E],!_(U?E:N+(x?".":"#")+E,b.forced)&&k!==void 0){if(typeof S==typeof k)continue;y(S,k)}(b.sham||k&&k.sham)&&v(S,"sham",!0),g(T,E,S,b)}}},7293:function(l){l.exports=function(d){try{return!!d()}catch{return!0}}},7007:function(l,d,s){s(4916);var f=s(1702),p=s(8052),v=s(2261),g=s(7293),m=s(5112),y=s(8880),_=m("species"),b=RegExp.prototype;l.exports=function(w,T,E,k){var S=m(w),A=!g(function(){var M={};return M[S]=function(){return 7},""[w](M)!=7}),N=A&&!g(function(){var M=!1,R=/a/;return w==="split"&&((R={}).constructor={},R.constructor[_]=function(){return R},R.flags="",R[S]=/./[S]),R.exec=function(){return M=!0,null},R[S](""),!M});if(!A||!N||E){var U=f(/./[S]),x=T(S,""[w],function(M,R,L,F,q){var j=f(M),W=R.exec;return W===v||W===b.exec?A&&!q?{done:!0,value:U(R,L,F)}:{done:!0,value:j(L,R,F)}:{done:!1}});p(String.prototype,w,x[0]),p(b,S,x[1])}k&&y(b[S],"sham",!0)}},2104:function(l,d,s){var f=s(4374),p=Function.prototype,v=p.apply,g=p.call;l.exports=typeof Reflect=="object"&&Reflect.apply||(f?g.bind(v):function(){return g.apply(v,arguments)})},9974:function(l,d,s){var f=s(1702),p=s(9662),v=s(4374),g=f(f.bind);l.exports=function(m,y){return p(m),y===void 0?m:v?g(m,y):function(){return m.apply(y,arguments)}}},4374:function(l,d,s){var f=s(7293);l.exports=!f(function(){var p=function(){}.bind();return typeof p!="function"||p.hasOwnProperty("prototype")})},6916:function(l,d,s){var f=s(4374),p=Function.prototype.call;l.exports=f?p.bind(p):function(){return p.apply(p,arguments)}},6530:function(l,d,s){var f=s(9781),p=s(2597),v=Function.prototype,g=f&&Object.getOwnPropertyDescriptor,m=p(v,"name"),y=m&&function(){}.name==="something",_=m&&(!f||f&&g(v,"name").configurable);l.exports={EXISTS:m,PROPER:y,CONFIGURABLE:_}},1702:function(l,d,s){var f=s(4374),p=Function.prototype,v=p.bind,g=p.call,m=f&&v.bind(g,g);l.exports=f?function(y){return y&&m(y)}:function(y){return y&&function(){return g.apply(y,arguments)}}},5005:function(l,d,s){var f=s(7854),p=s(614),v=function(g){return p(g)?g:void 0};l.exports=function(g,m){return arguments.length<2?v(f[g]):f[g]&&f[g][m]}},1246:function(l,d,s){var f=s(648),p=s(8173),v=s(7497),g=s(5112)("iterator");l.exports=function(m){if(m!=null)return p(m,g)||p(m,"@@iterator")||v[f(m)]}},8554:function(l,d,s){var f=s(6916),p=s(9662),v=s(9670),g=s(6330),m=s(1246),y=TypeError;l.exports=function(_,b){var w=arguments.length<2?m(_):b;if(p(w))return v(f(w,_));throw y(g(_)+" is not iterable")}},8173:function(l,d,s){var f=s(9662);l.exports=function(p,v){var g=p[v];return g==null?void 0:f(g)}},647:function(l,d,s){var f=s(1702),p=s(7908),v=Math.floor,g=f("".charAt),m=f("".replace),y=f("".slice),_=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,b=/\$([$&'`]|\d{1,2})/g;l.exports=function(w,T,E,k,S,A){var N=E+w.length,U=k.length,x=b;return S!==void 0&&(S=p(S),x=_),m(A,x,function(M,R){var L;switch(g(R,0)){case"$":return"$";case"&":return w;case"`":return y(T,0,E);case"'":return y(T,N);case"<":L=S[y(R,1,-1)];break;default:var F=+R;if(F===0)return M;if(F>U){var q=v(F/10);return q===0?M:q<=U?k[q-1]===void 0?g(R,1):k[q-1]+g(R,1):M}L=k[F-1]}return L===void 0?"":L})}},7854:function(l,d,s){var f=function(p){return p&&p.Math==Math&&p};l.exports=f(typeof globalThis=="object"&&globalThis)||f(typeof window=="object"&&window)||f(typeof self=="object"&&self)||f(typeof s.g=="object"&&s.g)||function(){return this}()||Function("return this")()},2597:function(l,d,s){var f=s(1702),p=s(7908),v=f({}.hasOwnProperty);l.exports=Object.hasOwn||function(g,m){return v(p(g),m)}},3501:function(l){l.exports={}},490:function(l,d,s){var f=s(5005);l.exports=f("document","documentElement")},4664:function(l,d,s){var f=s(9781),p=s(7293),v=s(317);l.exports=!f&&!p(function(){return Object.defineProperty(v("div"),"a",{get:function(){return 7}}).a!=7})},8361:function(l,d,s){var f=s(1702),p=s(7293),v=s(4326),g=Object,m=f("".split);l.exports=p(function(){return!g("z").propertyIsEnumerable(0)})?function(y){return v(y)=="String"?m(y,""):g(y)}:g},9587:function(l,d,s){var f=s(614),p=s(111),v=s(7674);l.exports=function(g,m,y){var _,b;return v&&f(_=m.constructor)&&_!==y&&p(b=_.prototype)&&b!==y.prototype&&v(g,b),g}},2788:function(l,d,s){var f=s(1702),p=s(614),v=s(5465),g=f(Function.toString);p(v.inspectSource)||(v.inspectSource=function(m){return g(m)}),l.exports=v.inspectSource},9909:function(l,d,s){var f,p,v,g=s(8536),m=s(7854),y=s(1702),_=s(111),b=s(8880),w=s(2597),T=s(5465),E=s(6200),k=s(3501),S="Object already initialized",A=m.TypeError,N=m.WeakMap;if(g||T.state){var U=T.state||(T.state=new N),x=y(U.get),M=y(U.has),R=y(U.set);f=function(F,q){if(M(U,F))throw new A(S);return q.facade=F,R(U,F,q),q},p=function(F){return x(U,F)||{}},v=function(F){return M(U,F)}}else{var L=E("state");k[L]=!0,f=function(F,q){if(w(F,L))throw new A(S);return q.facade=F,b(F,L,q),q},p=function(F){return w(F,L)?F[L]:{}},v=function(F){return w(F,L)}}l.exports={set:f,get:p,has:v,enforce:function(F){return v(F)?p(F):f(F,{})},getterFor:function(F){return function(q){var j;if(!_(q)||(j=p(q)).type!==F)throw A("Incompatible receiver, "+F+" required");return j}}}},7659:function(l,d,s){var f=s(5112),p=s(7497),v=f("iterator"),g=Array.prototype;l.exports=function(m){return m!==void 0&&(p.Array===m||g[v]===m)}},3157:function(l,d,s){var f=s(4326);l.exports=Array.isArray||function(p){return f(p)=="Array"}},614:function(l){l.exports=function(d){return typeof d=="function"}},4411:function(l,d,s){var f=s(1702),p=s(7293),v=s(614),g=s(648),m=s(5005),y=s(2788),_=function(){},b=[],w=m("Reflect","construct"),T=/^\s*(?:class|function)\b/,E=f(T.exec),k=!T.exec(_),S=function(N){if(!v(N))return!1;try{return w(_,b,N),!0}catch{return!1}},A=function(N){if(!v(N))return!1;switch(g(N)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return k||!!E(T,y(N))}catch{return!0}};A.sham=!0,l.exports=!w||p(function(){var N;return S(S.call)||!S(Object)||!S(function(){N=!0})||N})?A:S},4705:function(l,d,s){var f=s(7293),p=s(614),v=/#|\.prototype\./,g=function(w,T){var E=y[m(w)];return E==b||E!=_&&(p(T)?f(T):!!T)},m=g.normalize=function(w){return String(w).replace(v,".").toLowerCase()},y=g.data={},_=g.NATIVE="N",b=g.POLYFILL="P";l.exports=g},5988:function(l,d,s){var f=s(111),p=Math.floor;l.exports=Number.isInteger||function(v){return!f(v)&&isFinite(v)&&p(v)===v}},111:function(l,d,s){var f=s(614);l.exports=function(p){return typeof p=="object"?p!==null:f(p)}},1913:function(l){l.exports=!1},7850:function(l,d,s){var f=s(111),p=s(4326),v=s(5112)("match");l.exports=function(g){var m;return f(g)&&((m=g[v])!==void 0?!!m:p(g)=="RegExp")}},2190:function(l,d,s){var f=s(5005),p=s(614),v=s(7976),g=s(3307),m=Object;l.exports=g?function(y){return typeof y=="symbol"}:function(y){var _=f("Symbol");return p(_)&&v(_.prototype,m(y))}},9212:function(l,d,s){var f=s(6916),p=s(9670),v=s(8173);l.exports=function(g,m,y){var _,b;p(g);try{if(!(_=v(g,"return"))){if(m==="throw")throw y;return y}_=f(_,g)}catch(w){b=!0,_=w}if(m==="throw")throw y;if(b)throw _;return p(_),y}},3383:function(l,d,s){var f,p,v,g=s(7293),m=s(614),y=s(30),_=s(9518),b=s(8052),w=s(5112),T=s(1913),E=w("iterator"),k=!1;[].keys&&("next"in(v=[].keys())?(p=_(_(v)))!==Object.prototype&&(f=p):k=!0),f==null||g(function(){var S={};return f[E].call(S)!==S})?f={}:T&&(f=y(f)),m(f[E])||b(f,E,function(){return this}),l.exports={IteratorPrototype:f,BUGGY_SAFARI_ITERATORS:k}},7497:function(l){l.exports={}},6244:function(l,d,s){var f=s(7466);l.exports=function(p){return f(p.length)}},6339:function(l,d,s){var f=s(7293),p=s(614),v=s(2597),g=s(9781),m=s(6530).CONFIGURABLE,y=s(2788),_=s(9909),b=_.enforce,w=_.get,T=Object.defineProperty,E=g&&!f(function(){return T(function(){},"length",{value:8}).length!==8}),k=String(String).split("String"),S=l.exports=function(A,N,U){String(N).slice(0,7)==="Symbol("&&(N="["+String(N).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),U&&U.getter&&(N="get "+N),U&&U.setter&&(N="set "+N),(!v(A,"name")||m&&A.name!==N)&&(g?T(A,"name",{value:N,configurable:!0}):A.name=N),E&&U&&v(U,"arity")&&A.length!==U.arity&&T(A,"length",{value:U.arity});try{U&&v(U,"constructor")&&U.constructor?g&&T(A,"prototype",{writable:!1}):A.prototype&&(A.prototype=void 0)}catch{}var x=b(A);return v(x,"source")||(x.source=k.join(typeof N=="string"?N:"")),A};Function.prototype.toString=S(function(){return p(this)&&w(this).source||y(this)},"toString")},4758:function(l){var d=Math.ceil,s=Math.floor;l.exports=Math.trunc||function(f){var p=+f;return(p>0?s:d)(p)}},735:function(l,d,s){var f=s(133);l.exports=f&&!!Symbol.for&&!!Symbol.keyFor},133:function(l,d,s){var f=s(7392),p=s(7293);l.exports=!!Object.getOwnPropertySymbols&&!p(function(){var v=Symbol();return!String(v)||!(Object(v)instanceof Symbol)||!Symbol.sham&&f&&f<41})},8536:function(l,d,s){var f=s(7854),p=s(614),v=s(2788),g=f.WeakMap;l.exports=p(g)&&/native code/.test(v(g))},3929:function(l,d,s){var f=s(7850),p=TypeError;l.exports=function(v){if(f(v))throw p("The method doesn't accept regular expressions");return v}},1574:function(l,d,s){var f=s(9781),p=s(1702),v=s(6916),g=s(7293),m=s(1956),y=s(5181),_=s(5296),b=s(7908),w=s(8361),T=Object.assign,E=Object.defineProperty,k=p([].concat);l.exports=!T||g(function(){if(f&&T({b:1},T(E({},"a",{enumerable:!0,get:function(){E(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var S={},A={},N=Symbol(),U="abcdefghijklmnopqrst";return S[N]=7,U.split("").forEach(function(x){A[x]=x}),T({},S)[N]!=7||m(T({},A)).join("")!=U})?function(S,A){for(var N=b(S),U=arguments.length,x=1,M=y.f,R=_.f;U>x;)for(var L,F=w(arguments[x++]),q=M?k(m(F),M(F)):m(F),j=q.length,W=0;j>W;)L=q[W++],f&&!v(R,F,L)||(N[L]=F[L]);return N}:T},30:function(l,d,s){var f,p=s(9670),v=s(6048),g=s(748),m=s(3501),y=s(490),_=s(317),b=s(6200)("IE_PROTO"),w=function(){},T=function(S){return"<script>"+S+"<\/script>"},E=function(S){S.write(T("")),S.close();var A=S.parentWindow.Object;return S=null,A},k=function(){try{f=new ActiveXObject("htmlfile")}catch{}var S,A;k=typeof document<"u"?document.domain&&f?E(f):((A=_("iframe")).style.display="none",y.appendChild(A),A.src="javascript:",(S=A.contentWindow.document).open(),S.write(T("document.F=Object")),S.close(),S.F):E(f);for(var N=g.length;N--;)delete k.prototype[g[N]];return k()};m[b]=!0,l.exports=Object.create||function(S,A){var N;return S!==null?(w.prototype=p(S),N=new w,w.prototype=null,N[b]=S):N=k(),A===void 0?N:v.f(N,A)}},6048:function(l,d,s){var f=s(9781),p=s(3353),v=s(3070),g=s(9670),m=s(5656),y=s(1956);d.f=f&&!p?Object.defineProperties:function(_,b){g(_);for(var w,T=m(b),E=y(b),k=E.length,S=0;k>S;)v.f(_,w=E[S++],T[w]);return _}},3070:function(l,d,s){var f=s(9781),p=s(4664),v=s(3353),g=s(9670),m=s(4948),y=TypeError,_=Object.defineProperty,b=Object.getOwnPropertyDescriptor;d.f=f?v?function(w,T,E){if(g(w),T=m(T),g(E),typeof w=="function"&&T==="prototype"&&"value"in E&&"writable"in E&&!E.writable){var k=b(w,T);k&&k.writable&&(w[T]=E.value,E={configurable:"configurable"in E?E.configurable:k.configurable,enumerable:"enumerable"in E?E.enumerable:k.enumerable,writable:!1})}return _(w,T,E)}:_:function(w,T,E){if(g(w),T=m(T),g(E),p)try{return _(w,T,E)}catch{}if("get"in E||"set"in E)throw y("Accessors not supported");return"value"in E&&(w[T]=E.value),w}},1236:function(l,d,s){var f=s(9781),p=s(6916),v=s(5296),g=s(9114),m=s(5656),y=s(4948),_=s(2597),b=s(4664),w=Object.getOwnPropertyDescriptor;d.f=f?w:function(T,E){if(T=m(T),E=y(E),b)try{return w(T,E)}catch{}if(_(T,E))return g(!p(v.f,T,E),T[E])}},1156:function(l,d,s){var f=s(4326),p=s(5656),v=s(8006).f,g=s(1589),m=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];l.exports.f=function(y){return m&&f(y)=="Window"?function(_){try{return v(_)}catch{return g(m)}}(y):v(p(y))}},8006:function(l,d,s){var f=s(6324),p=s(748).concat("length","prototype");d.f=Object.getOwnPropertyNames||function(v){return f(v,p)}},5181:function(l,d){d.f=Object.getOwnPropertySymbols},9518:function(l,d,s){var f=s(2597),p=s(614),v=s(7908),g=s(6200),m=s(8544),y=g("IE_PROTO"),_=Object,b=_.prototype;l.exports=m?_.getPrototypeOf:function(w){var T=v(w);if(f(T,y))return T[y];var E=T.constructor;return p(E)&&T instanceof E?E.prototype:T instanceof _?b:null}},7976:function(l,d,s){var f=s(1702);l.exports=f({}.isPrototypeOf)},6324:function(l,d,s){var f=s(1702),p=s(2597),v=s(5656),g=s(1318).indexOf,m=s(3501),y=f([].push);l.exports=function(_,b){var w,T=v(_),E=0,k=[];for(w in T)!p(m,w)&&p(T,w)&&y(k,w);for(;b.length>E;)p(T,w=b[E++])&&(~g(k,w)||y(k,w));return k}},1956:function(l,d,s){var f=s(6324),p=s(748);l.exports=Object.keys||function(v){return f(v,p)}},5296:function(l,d){var s={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,p=f&&!s.call({1:2},1);d.f=p?function(v){var g=f(this,v);return!!g&&g.enumerable}:s},9026:function(l,d,s){var f=s(1913),p=s(7854),v=s(7293),g=s(8008);l.exports=f||!v(function(){if(!(g&&g<535)){var m=Math.random();__defineSetter__.call(null,m,function(){}),delete p[m]}})},7674:function(l,d,s){var f=s(1702),p=s(9670),v=s(6077);l.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var g,m=!1,y={};try{(g=f(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(y,[]),m=y instanceof Array}catch{}return function(_,b){return p(_),v(b),m?g(_,b):_.__proto__=b,_}}():void 0)},288:function(l,d,s){var f=s(1694),p=s(648);l.exports=f?{}.toString:function(){return"[object "+p(this)+"]"}},2140:function(l,d,s){var f=s(6916),p=s(614),v=s(111),g=TypeError;l.exports=function(m,y){var _,b;if(y==="string"&&p(_=m.toString)&&!v(b=f(_,m))||p(_=m.valueOf)&&!v(b=f(_,m))||y!=="string"&&p(_=m.toString)&&!v(b=f(_,m)))return b;throw g("Can't convert object to primitive value")}},3887:function(l,d,s){var f=s(5005),p=s(1702),v=s(8006),g=s(5181),m=s(9670),y=p([].concat);l.exports=f("Reflect","ownKeys")||function(_){var b=v.f(m(_)),w=g.f;return w?y(b,w(_)):b}},857:function(l,d,s){var f=s(7854);l.exports=f},2626:function(l,d,s){var f=s(3070).f;l.exports=function(p,v,g){g in p||f(p,g,{configurable:!0,get:function(){return v[g]},set:function(m){v[g]=m}})}},7651:function(l,d,s){var f=s(6916),p=s(9670),v=s(614),g=s(4326),m=s(2261),y=TypeError;l.exports=function(_,b){var w=_.exec;if(v(w)){var T=f(w,_,b);return T!==null&&p(T),T}if(g(_)==="RegExp")return f(m,_,b);throw y("RegExp#exec called on incompatible receiver")}},2261:function(l,d,s){var f,p,v=s(6916),g=s(1702),m=s(1340),y=s(7066),_=s(2999),b=s(2309),w=s(30),T=s(9909).get,E=s(9441),k=s(7168),S=b("native-string-replace",String.prototype.replace),A=RegExp.prototype.exec,N=A,U=g("".charAt),x=g("".indexOf),M=g("".replace),R=g("".slice),L=(p=/b*/g,v(A,f=/a/,"a"),v(A,p,"a"),f.lastIndex!==0||p.lastIndex!==0),F=_.BROKEN_CARET,q=/()??/.exec("")[1]!==void 0;(L||q||F||E||k)&&(N=function(j){var W,D,C,P,O,B,G,Y=this,H=T(Y),te=m(j),ue=H.raw;if(ue)return ue.lastIndex=Y.lastIndex,W=v(N,ue,te),Y.lastIndex=ue.lastIndex,W;var _e=H.groups,J=F&&Y.sticky,re=v(y,Y),pe=Y.source,we=0,me=te;if(J&&(re=M(re,"y",""),x(re,"g")===-1&&(re+="g"),me=R(te,Y.lastIndex),Y.lastIndex>0&&(!Y.multiline||Y.multiline&&U(te,Y.lastIndex-1)!==`
`)&&(pe="(?: "+pe+")",me=" "+me,we++),D=new RegExp("^(?:"+pe+")",re)),q&&(D=new RegExp("^"+pe+"$(?!\\s)",re)),L&&(C=Y.lastIndex),P=v(A,J?D:Y,me),J?P?(P.input=R(P.input,we),P[0]=R(P[0],we),P.index=Y.lastIndex,Y.lastIndex+=P[0].length):Y.lastIndex=0:L&&P&&(Y.lastIndex=Y.global?P.index+P[0].length:C),q&&P&&P.length>1&&v(S,P[0],D,function(){for(O=1;O<arguments.length-2;O++)arguments[O]===void 0&&(P[O]=void 0)}),P&&_e)for(P.groups=B=w(null),O=0;O<_e.length;O++)B[(G=_e[O])[0]]=P[G[1]];return P}),l.exports=N},7066:function(l,d,s){var f=s(9670);l.exports=function(){var p=f(this),v="";return p.hasIndices&&(v+="d"),p.global&&(v+="g"),p.ignoreCase&&(v+="i"),p.multiline&&(v+="m"),p.dotAll&&(v+="s"),p.unicode&&(v+="u"),p.unicodeSets&&(v+="v"),p.sticky&&(v+="y"),v}},4706:function(l,d,s){var f=s(6916),p=s(2597),v=s(7976),g=s(7066),m=RegExp.prototype;l.exports=function(y){var _=y.flags;return _!==void 0||"flags"in m||p(y,"flags")||!v(m,y)?_:f(g,y)}},2999:function(l,d,s){var f=s(7293),p=s(7854).RegExp,v=f(function(){var y=p("a","y");return y.lastIndex=2,y.exec("abcd")!=null}),g=v||f(function(){return!p("a","y").sticky}),m=v||f(function(){var y=p("^r","gy");return y.lastIndex=2,y.exec("str")!=null});l.exports={BROKEN_CARET:m,MISSED_STICKY:g,UNSUPPORTED_Y:v}},9441:function(l,d,s){var f=s(7293),p=s(7854).RegExp;l.exports=f(function(){var v=p(".","s");return!(v.dotAll&&v.exec(`
`)&&v.flags==="s")})},7168:function(l,d,s){var f=s(7293),p=s(7854).RegExp;l.exports=f(function(){var v=p("(?<a>b)","g");return v.exec("b").groups.a!=="b"||"b".replace(v,"$<a>c")!=="bc"})},4488:function(l){var d=TypeError;l.exports=function(s){if(s==null)throw d("Can't call method on "+s);return s}},6340:function(l,d,s){var f=s(5005),p=s(3070),v=s(5112),g=s(9781),m=v("species");l.exports=function(y){var _=f(y),b=p.f;g&&_&&!_[m]&&b(_,m,{configurable:!0,get:function(){return this}})}},8003:function(l,d,s){var f=s(3070).f,p=s(2597),v=s(5112)("toStringTag");l.exports=function(g,m,y){g&&!y&&(g=g.prototype),g&&!p(g,v)&&f(g,v,{configurable:!0,value:m})}},6200:function(l,d,s){var f=s(2309),p=s(9711),v=f("keys");l.exports=function(g){return v[g]||(v[g]=p(g))}},5465:function(l,d,s){var f=s(7854),p=s(3072),v="__core-js_shared__",g=f[v]||p(v,{});l.exports=g},2309:function(l,d,s){var f=s(1913),p=s(5465);(l.exports=function(v,g){return p[v]||(p[v]=g!==void 0?g:{})})("versions",[]).push({version:"3.23.5",mode:f?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(l,d,s){var f=s(9670),p=s(9483),v=s(5112)("species");l.exports=function(g,m){var y,_=f(g).constructor;return _===void 0||(y=f(_)[v])==null?m:p(y)}},8710:function(l,d,s){var f=s(1702),p=s(9303),v=s(1340),g=s(4488),m=f("".charAt),y=f("".charCodeAt),_=f("".slice),b=function(w){return function(T,E){var k,S,A=v(g(T)),N=p(E),U=A.length;return N<0||N>=U?w?"":void 0:(k=y(A,N))<55296||k>56319||N+1===U||(S=y(A,N+1))<56320||S>57343?w?m(A,N):k:w?_(A,N,N+2):S-56320+(k-55296<<10)+65536}};l.exports={codeAt:b(!1),charAt:b(!0)}},6091:function(l,d,s){var f=s(6530).PROPER,p=s(7293),v=s(1361);l.exports=function(g){return p(function(){return!!v[g]()||"​᠎"[g]()!=="​᠎"||f&&v[g].name!==g})}},3111:function(l,d,s){var f=s(1702),p=s(4488),v=s(1340),g=s(1361),m=f("".replace),y="["+g+"]",_=RegExp("^"+y+y+"*"),b=RegExp(y+y+"*$"),w=function(T){return function(E){var k=v(p(E));return 1&T&&(k=m(k,_,"")),2&T&&(k=m(k,b,"")),k}};l.exports={start:w(1),end:w(2),trim:w(3)}},6532:function(l,d,s){var f=s(6916),p=s(5005),v=s(5112),g=s(8052);l.exports=function(){var m=p("Symbol"),y=m&&m.prototype,_=y&&y.valueOf,b=v("toPrimitive");y&&!y[b]&&g(y,b,function(w){return f(_,this)},{arity:1})}},863:function(l,d,s){var f=s(1702);l.exports=f(1 .valueOf)},1400:function(l,d,s){var f=s(9303),p=Math.max,v=Math.min;l.exports=function(g,m){var y=f(g);return y<0?p(y+m,0):v(y,m)}},5656:function(l,d,s){var f=s(8361),p=s(4488);l.exports=function(v){return f(p(v))}},9303:function(l,d,s){var f=s(4758);l.exports=function(p){var v=+p;return v!=v||v===0?0:f(v)}},7466:function(l,d,s){var f=s(9303),p=Math.min;l.exports=function(v){return v>0?p(f(v),9007199254740991):0}},7908:function(l,d,s){var f=s(4488),p=Object;l.exports=function(v){return p(f(v))}},7593:function(l,d,s){var f=s(6916),p=s(111),v=s(2190),g=s(8173),m=s(2140),y=s(5112),_=TypeError,b=y("toPrimitive");l.exports=function(w,T){if(!p(w)||v(w))return w;var E,k=g(w,b);if(k){if(T===void 0&&(T="default"),E=f(k,w,T),!p(E)||v(E))return E;throw _("Can't convert object to primitive value")}return T===void 0&&(T="number"),m(w,T)}},4948:function(l,d,s){var f=s(7593),p=s(2190);l.exports=function(v){var g=f(v,"string");return p(g)?g:g+""}},1694:function(l,d,s){var f={};f[s(5112)("toStringTag")]="z",l.exports=String(f)==="[object z]"},1340:function(l,d,s){var f=s(648),p=String;l.exports=function(v){if(f(v)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return p(v)}},6330:function(l){var d=String;l.exports=function(s){try{return d(s)}catch{return"Object"}}},9711:function(l,d,s){var f=s(1702),p=0,v=Math.random(),g=f(1 .toString);l.exports=function(m){return"Symbol("+(m===void 0?"":m)+")_"+g(++p+v,36)}},3307:function(l,d,s){var f=s(133);l.exports=f&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},3353:function(l,d,s){var f=s(9781),p=s(7293);l.exports=f&&p(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},6061:function(l,d,s){var f=s(5112);d.f=f},5112:function(l,d,s){var f=s(7854),p=s(2309),v=s(2597),g=s(9711),m=s(133),y=s(3307),_=p("wks"),b=f.Symbol,w=b&&b.for,T=y?b:b&&b.withoutSetter||g;l.exports=function(E){if(!v(_,E)||!m&&typeof _[E]!="string"){var k="Symbol."+E;m&&v(b,E)?_[E]=b[E]:_[E]=y&&w?w(k):T(k)}return _[E]}},1361:function(l){l.exports=`	
\v\f\r                　\u2028\u2029\uFEFF`},2222:function(l,d,s){var f=s(2109),p=s(7293),v=s(3157),g=s(111),m=s(7908),y=s(6244),_=s(7207),b=s(6135),w=s(5417),T=s(1194),E=s(5112),k=s(7392),S=E("isConcatSpreadable"),A=k>=51||!p(function(){var x=[];return x[S]=!1,x.concat()[0]!==x}),N=T("concat"),U=function(x){if(!g(x))return!1;var M=x[S];return M!==void 0?!!M:v(x)};f({target:"Array",proto:!0,arity:1,forced:!A||!N},{concat:function(x){var M,R,L,F,q,j=m(this),W=w(j,0),D=0;for(M=-1,L=arguments.length;M<L;M++)if(U(q=M===-1?j:arguments[M]))for(F=y(q),_(D+F),R=0;R<F;R++,D++)R in q&&b(W,D,q[R]);else _(D+1),b(W,D++,q);return W.length=D,W}})},7327:function(l,d,s){var f=s(2109),p=s(2092).filter;f({target:"Array",proto:!0,forced:!s(1194)("filter")},{filter:function(v){return p(this,v,arguments.length>1?arguments[1]:void 0)}})},1038:function(l,d,s){var f=s(2109),p=s(8457);f({target:"Array",stat:!0,forced:!s(7072)(function(v){Array.from(v)})},{from:p})},6699:function(l,d,s){var f=s(2109),p=s(1318).includes,v=s(7293),g=s(1223);f({target:"Array",proto:!0,forced:v(function(){return!Array(1).includes()})},{includes:function(m){return p(this,m,arguments.length>1?arguments[1]:void 0)}}),g("includes")},2772:function(l,d,s){var f=s(2109),p=s(1702),v=s(1318).indexOf,g=s(9341),m=p([].indexOf),y=!!m&&1/m([1],1,-0)<0,_=g("indexOf");f({target:"Array",proto:!0,forced:y||!_},{indexOf:function(b){var w=arguments.length>1?arguments[1]:void 0;return y?m(this,b,w)||0:v(this,b,w)}})},6992:function(l,d,s){var f=s(5656),p=s(1223),v=s(7497),g=s(9909),m=s(3070).f,y=s(654),_=s(1913),b=s(9781),w="Array Iterator",T=g.set,E=g.getterFor(w);l.exports=y(Array,"Array",function(S,A){T(this,{type:w,target:f(S),index:0,kind:A})},function(){var S=E(this),A=S.target,N=S.kind,U=S.index++;return!A||U>=A.length?(S.target=void 0,{value:void 0,done:!0}):N=="keys"?{value:U,done:!1}:N=="values"?{value:A[U],done:!1}:{value:[U,A[U]],done:!1}},"values");var k=v.Arguments=v.Array;if(p("keys"),p("values"),p("entries"),!_&&b&&k.name!=="values")try{m(k,"name",{value:"values"})}catch{}},9600:function(l,d,s){var f=s(2109),p=s(1702),v=s(8361),g=s(5656),m=s(9341),y=p([].join),_=v!=Object,b=m("join",",");f({target:"Array",proto:!0,forced:_||!b},{join:function(w){return y(g(this),w===void 0?",":w)}})},1249:function(l,d,s){var f=s(2109),p=s(2092).map;f({target:"Array",proto:!0,forced:!s(1194)("map")},{map:function(v){return p(this,v,arguments.length>1?arguments[1]:void 0)}})},5827:function(l,d,s){var f=s(2109),p=s(3671).left,v=s(9341),g=s(7392),m=s(5268);f({target:"Array",proto:!0,forced:!v("reduce")||!m&&g>79&&g<83},{reduce:function(y){var _=arguments.length;return p(this,y,_,_>1?arguments[1]:void 0)}})},7042:function(l,d,s){var f=s(2109),p=s(3157),v=s(4411),g=s(111),m=s(1400),y=s(6244),_=s(5656),b=s(6135),w=s(5112),T=s(1194),E=s(206),k=T("slice"),S=w("species"),A=Array,N=Math.max;f({target:"Array",proto:!0,forced:!k},{slice:function(U,x){var M,R,L,F=_(this),q=y(F),j=m(U,q),W=m(x===void 0?q:x,q);if(p(F)&&(M=F.constructor,(v(M)&&(M===A||p(M.prototype))||g(M)&&(M=M[S])===null)&&(M=void 0),M===A||M===void 0))return E(F,j,W);for(R=new(M===void 0?A:M)(N(W-j,0)),L=0;j<W;j++,L++)j in F&&b(R,L,F[j]);return R.length=L,R}})},2707:function(l,d,s){var f=s(2109),p=s(1702),v=s(9662),g=s(7908),m=s(6244),y=s(5117),_=s(1340),b=s(7293),w=s(4362),T=s(9341),E=s(8886),k=s(256),S=s(7392),A=s(8008),N=[],U=p(N.sort),x=p(N.push),M=b(function(){N.sort(void 0)}),R=b(function(){N.sort(null)}),L=T("sort"),F=!b(function(){if(S)return S<70;if(!(E&&E>3)){if(k)return!0;if(A)return A<603;var q,j,W,D,C="";for(q=65;q<76;q++){switch(j=String.fromCharCode(q),q){case 66:case 69:case 70:case 72:W=3;break;case 68:case 71:W=4;break;default:W=2}for(D=0;D<47;D++)N.push({k:j+D,v:W})}for(N.sort(function(P,O){return O.v-P.v}),D=0;D<N.length;D++)j=N[D].k.charAt(0),C.charAt(C.length-1)!==j&&(C+=j);return C!=="DGBEFHACIJK"}});f({target:"Array",proto:!0,forced:M||!R||!L||!F},{sort:function(q){q!==void 0&&v(q);var j=g(this);if(F)return q===void 0?U(j):U(j,q);var W,D,C=[],P=m(j);for(D=0;D<P;D++)D in j&&x(C,j[D]);for(w(C,function(O){return function(B,G){return G===void 0?-1:B===void 0?1:O!==void 0?+O(B,G)||0:_(B)>_(G)?1:-1}}(q)),W=C.length,D=0;D<W;)j[D]=C[D++];for(;D<P;)y(j,D++);return j}})},561:function(l,d,s){var f=s(2109),p=s(7908),v=s(1400),g=s(9303),m=s(6244),y=s(7207),_=s(5417),b=s(6135),w=s(5117),T=s(1194)("splice"),E=Math.max,k=Math.min;f({target:"Array",proto:!0,forced:!T},{splice:function(S,A){var N,U,x,M,R,L,F=p(this),q=m(F),j=v(S,q),W=arguments.length;for(W===0?N=U=0:W===1?(N=0,U=q-j):(N=W-2,U=k(E(g(A),0),q-j)),y(q+N-U),x=_(F,U),M=0;M<U;M++)(R=j+M)in F&&b(x,M,F[R]);if(x.length=U,N<U){for(M=j;M<q-U;M++)L=M+N,(R=M+U)in F?F[L]=F[R]:w(F,L);for(M=q;M>q-U+N;M--)w(F,M-1)}else if(N>U)for(M=q-U;M>j;M--)L=M+N-1,(R=M+U-1)in F?F[L]=F[R]:w(F,L);for(M=0;M<N;M++)F[M+j]=arguments[M+2];return F.length=q-U+N,x}})},8309:function(l,d,s){var f=s(9781),p=s(6530).EXISTS,v=s(1702),g=s(3070).f,m=Function.prototype,y=v(m.toString),_=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,b=v(_.exec);f&&!p&&g(m,"name",{configurable:!0,get:function(){try{return b(_,y(this))[1]}catch{return""}}})},8862:function(l,d,s){var f=s(2109),p=s(5005),v=s(2104),g=s(6916),m=s(1702),y=s(7293),_=s(3157),b=s(614),w=s(111),T=s(2190),E=s(206),k=s(133),S=p("JSON","stringify"),A=m(/./.exec),N=m("".charAt),U=m("".charCodeAt),x=m("".replace),M=m(1 .toString),R=/[\uD800-\uDFFF]/g,L=/^[\uD800-\uDBFF]$/,F=/^[\uDC00-\uDFFF]$/,q=!k||y(function(){var C=p("Symbol")();return S([C])!="[null]"||S({a:C})!="{}"||S(Object(C))!="{}"}),j=y(function(){return S("\uDF06\uD834")!=='"\\udf06\\ud834"'||S("\uDEAD")!=='"\\udead"'}),W=function(C,P){var O=E(arguments),B=P;if((w(P)||C!==void 0)&&!T(C))return _(P)||(P=function(G,Y){if(b(B)&&(Y=g(B,this,G,Y)),!T(Y))return Y}),O[1]=P,v(S,null,O)},D=function(C,P,O){var B=N(O,P-1),G=N(O,P+1);return A(L,C)&&!A(F,G)||A(F,C)&&!A(L,B)?"\\u"+M(U(C,0),16):C};S&&f({target:"JSON",stat:!0,arity:3,forced:q||j},{stringify:function(C,P,O){var B=E(arguments),G=v(q?W:S,null,B);return j&&typeof G=="string"?x(G,R,D):G}})},9653:function(l,d,s){var f=s(9781),p=s(7854),v=s(1702),g=s(4705),m=s(8052),y=s(2597),_=s(9587),b=s(7976),w=s(2190),T=s(7593),E=s(7293),k=s(8006).f,S=s(1236).f,A=s(3070).f,N=s(863),U=s(3111).trim,x="Number",M=p.Number,R=M.prototype,L=p.TypeError,F=v("".slice),q=v("".charCodeAt),j=function(B){var G=T(B,"number");return typeof G=="bigint"?G:W(G)},W=function(B){var G,Y,H,te,ue,_e,J,re,pe=T(B,"number");if(w(pe))throw L("Cannot convert a Symbol value to a number");if(typeof pe=="string"&&pe.length>2){if(pe=U(pe),(G=q(pe,0))===43||G===45){if((Y=q(pe,2))===88||Y===120)return NaN}else if(G===48){switch(q(pe,1)){case 66:case 98:H=2,te=49;break;case 79:case 111:H=8,te=55;break;default:return+pe}for(_e=(ue=F(pe,2)).length,J=0;J<_e;J++)if((re=q(ue,J))<48||re>te)return NaN;return parseInt(ue,H)}}return+pe};if(g(x,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var D,C=function(B){var G=arguments.length<1?0:M(j(B)),Y=this;return b(R,Y)&&E(function(){N(Y)})?_(Object(G),Y,C):G},P=f?k(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;P.length>O;O++)y(M,D=P[O])&&!y(C,D)&&A(C,D,S(M,D));C.prototype=R,R.constructor=C,m(p,x,C,{constructor:!0})}},3161:function(l,d,s){s(2109)({target:"Number",stat:!0},{isInteger:s(5988)})},9601:function(l,d,s){var f=s(2109),p=s(1574);f({target:"Object",stat:!0,arity:2,forced:Object.assign!==p},{assign:p})},9595:function(l,d,s){var f=s(2109),p=s(9781),v=s(9026),g=s(9662),m=s(7908),y=s(3070);p&&f({target:"Object",proto:!0,forced:v},{__defineGetter__:function(_,b){y.f(m(this),_,{get:g(b),enumerable:!0,configurable:!0})}})},5003:function(l,d,s){var f=s(2109),p=s(7293),v=s(5656),g=s(1236).f,m=s(9781),y=p(function(){g(1)});f({target:"Object",stat:!0,forced:!m||y,sham:!m},{getOwnPropertyDescriptor:function(_,b){return g(v(_),b)}})},9337:function(l,d,s){var f=s(2109),p=s(9781),v=s(3887),g=s(5656),m=s(1236),y=s(6135);f({target:"Object",stat:!0,sham:!p},{getOwnPropertyDescriptors:function(_){for(var b,w,T=g(_),E=m.f,k=v(T),S={},A=0;k.length>A;)(w=E(T,b=k[A++]))!==void 0&&y(S,b,w);return S}})},6210:function(l,d,s){var f=s(2109),p=s(7293),v=s(1156).f;f({target:"Object",stat:!0,forced:p(function(){return!Object.getOwnPropertyNames(1)})},{getOwnPropertyNames:v})},9660:function(l,d,s){var f=s(2109),p=s(133),v=s(7293),g=s(5181),m=s(7908);f({target:"Object",stat:!0,forced:!p||v(function(){g.f(1)})},{getOwnPropertySymbols:function(y){var _=g.f;return _?_(m(y)):[]}})},7941:function(l,d,s){var f=s(2109),p=s(7908),v=s(1956);f({target:"Object",stat:!0,forced:s(7293)(function(){v(1)})},{keys:function(g){return v(p(g))}})},1539:function(l,d,s){var f=s(1694),p=s(8052),v=s(288);f||p(Object.prototype,"toString",v,{unsafe:!0})},4603:function(l,d,s){var f=s(9781),p=s(7854),v=s(1702),g=s(4705),m=s(9587),y=s(8880),_=s(8006).f,b=s(7976),w=s(7850),T=s(1340),E=s(4706),k=s(2999),S=s(2626),A=s(8052),N=s(7293),U=s(2597),x=s(9909).enforce,M=s(6340),R=s(5112),L=s(9441),F=s(7168),q=R("match"),j=p.RegExp,W=j.prototype,D=p.SyntaxError,C=v(W.exec),P=v("".charAt),O=v("".replace),B=v("".indexOf),G=v("".slice),Y=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,H=/a/g,te=/a/g,ue=new j(H)!==H,_e=k.MISSED_STICKY,J=k.UNSUPPORTED_Y;if(g("RegExp",f&&(!ue||_e||L||F||N(function(){return te[q]=!1,j(H)!=H||j(te)==te||j(H,"i")!="/a/i"})))){for(var re=function(me,ye){var $e,Fe,Je,ct,mt,K,X=b(W,this),fe=w(me),Pe=ye===void 0,Le=[],Ne=me;if(!X&&fe&&Pe&&me.constructor===re)return me;if((fe||b(W,me))&&(me=me.source,Pe&&(ye=E(Ne))),me=me===void 0?"":T(me),ye=ye===void 0?"":T(ye),Ne=me,L&&"dotAll"in H&&(Fe=!!ye&&B(ye,"s")>-1)&&(ye=O(ye,/s/g,"")),$e=ye,_e&&"sticky"in H&&(Je=!!ye&&B(ye,"y")>-1)&&J&&(ye=O(ye,/y/g,"")),F&&(me=(ct=function(ze){for(var De,ve=ze.length,Xe=0,je="",Oe=[],Ke={},He=!1,Ae=!1,We=0,$="";Xe<=ve;Xe++){if((De=P(ze,Xe))==="\\")De+=P(ze,++Xe);else if(De==="]")He=!1;else if(!He)switch(!0){case De==="[":He=!0;break;case De==="(":C(Y,G(ze,Xe+1))&&(Xe+=2,Ae=!0),je+=De,We++;continue;case(De===">"&&Ae):if($===""||U(Ke,$))throw new D("Invalid capture group name");Ke[$]=!0,Oe[Oe.length]=[$,We],Ae=!1,$="";continue}Ae?$+=De:je+=De}return[je,Oe]}(me))[0],Le=ct[1]),mt=m(j(me,ye),X?this:W,re),(Fe||Je||Le.length)&&(K=x(mt),Fe&&(K.dotAll=!0,K.raw=re(function(ze){for(var De,ve=ze.length,Xe=0,je="",Oe=!1;Xe<=ve;Xe++)(De=P(ze,Xe))!=="\\"?Oe||De!=="."?(De==="["?Oe=!0:De==="]"&&(Oe=!1),je+=De):je+="[\\s\\S]":je+=De+P(ze,++Xe);return je}(me),$e)),Je&&(K.sticky=!0),Le.length&&(K.groups=Le)),me!==Ne)try{y(mt,"source",Ne===""?"(?:)":Ne)}catch{}return mt},pe=_(j),we=0;pe.length>we;)S(re,j,pe[we++]);W.constructor=re,re.prototype=W,A(p,"RegExp",re,{constructor:!0})}M("RegExp")},4916:function(l,d,s){var f=s(2109),p=s(2261);f({target:"RegExp",proto:!0,forced:/./.exec!==p},{exec:p})},9714:function(l,d,s){var f=s(6530).PROPER,p=s(8052),v=s(9670),g=s(1340),m=s(7293),y=s(4706),_="toString",b=RegExp.prototype.toString,w=m(function(){return b.call({source:"a",flags:"b"})!="/a/b"}),T=f&&b.name!=_;(w||T)&&p(RegExp.prototype,_,function(){var E=v(this);return"/"+g(E.source)+"/"+g(y(E))},{unsafe:!0})},2023:function(l,d,s){var f=s(2109),p=s(1702),v=s(3929),g=s(4488),m=s(1340),y=s(4964),_=p("".indexOf);f({target:"String",proto:!0,forced:!y("includes")},{includes:function(b){return!!~_(m(g(this)),m(v(b)),arguments.length>1?arguments[1]:void 0)}})},8783:function(l,d,s){var f=s(8710).charAt,p=s(1340),v=s(9909),g=s(654),m="String Iterator",y=v.set,_=v.getterFor(m);g(String,"String",function(b){y(this,{type:m,string:p(b),index:0})},function(){var b,w=_(this),T=w.string,E=w.index;return E>=T.length?{value:void 0,done:!0}:(b=f(T,E),w.index+=b.length,{value:b,done:!1})})},6373:function(l,d,s){var f=s(2109),p=s(6916),v=s(1702),g=s(4994),m=s(4488),y=s(7466),_=s(1340),b=s(9670),w=s(4326),T=s(7850),E=s(4706),k=s(8173),S=s(8052),A=s(7293),N=s(5112),U=s(6707),x=s(1530),M=s(7651),R=s(9909),L=s(1913),F=N("matchAll"),q="RegExp String Iterator",j=R.set,W=R.getterFor(q),D=RegExp.prototype,C=TypeError,P=v("".indexOf),O=v("".matchAll),B=!!O&&!A(function(){O("a",/./)}),G=g(function(H,te,ue,_e){j(this,{type:q,regexp:H,string:te,global:ue,unicode:_e,done:!1})},"RegExp String",function(){var H=W(this);if(H.done)return{value:void 0,done:!0};var te=H.regexp,ue=H.string,_e=M(te,ue);return _e===null?{value:void 0,done:H.done=!0}:H.global?(_(_e[0])===""&&(te.lastIndex=x(ue,y(te.lastIndex),H.unicode)),{value:_e,done:!1}):(H.done=!0,{value:_e,done:!1})}),Y=function(H){var te,ue,_e,J=b(this),re=_(H),pe=U(J,RegExp),we=_(E(J));return te=new pe(pe===RegExp?J.source:J,we),ue=!!~P(we,"g"),_e=!!~P(we,"u"),te.lastIndex=y(J.lastIndex),new G(te,re,ue,_e)};f({target:"String",proto:!0,forced:B},{matchAll:function(H){var te,ue,_e,J,re=m(this);if(H!=null){if(T(H)&&(te=_(m(E(H))),!~P(te,"g")))throw C("`.matchAll` does not allow non-global regexes");if(B)return O(re,H);if((_e=k(H,F))===void 0&&L&&w(H)=="RegExp"&&(_e=Y),_e)return p(_e,H,re)}else if(B)return O(re,H);return ue=_(re),J=new RegExp(H,"g"),L?p(Y,J,ue):J[F](ue)}}),L||F in D||S(D,F,Y)},4723:function(l,d,s){var f=s(6916),p=s(7007),v=s(9670),g=s(7466),m=s(1340),y=s(4488),_=s(8173),b=s(1530),w=s(7651);p("match",function(T,E,k){return[function(S){var A=y(this),N=S==null?void 0:_(S,T);return N?f(N,S,A):new RegExp(S)[T](m(A))},function(S){var A=v(this),N=m(S),U=k(E,A,N);if(U.done)return U.value;if(!A.global)return w(A,N);var x=A.unicode;A.lastIndex=0;for(var M,R=[],L=0;(M=w(A,N))!==null;){var F=m(M[0]);R[L]=F,F===""&&(A.lastIndex=b(N,g(A.lastIndex),x)),L++}return L===0?null:R}]})},5306:function(l,d,s){var f=s(2104),p=s(6916),v=s(1702),g=s(7007),m=s(7293),y=s(9670),_=s(614),b=s(9303),w=s(7466),T=s(1340),E=s(4488),k=s(1530),S=s(8173),A=s(647),N=s(7651),U=s(5112)("replace"),x=Math.max,M=Math.min,R=v([].concat),L=v([].push),F=v("".indexOf),q=v("".slice),j="a".replace(/./,"$0")==="$0",W=!!/./[U]&&/./[U]("a","$0")==="";g("replace",function(D,C,P){var O=W?"$":"$0";return[function(B,G){var Y=E(this),H=B==null?void 0:S(B,U);return H?p(H,B,Y,G):p(C,T(Y),B,G)},function(B,G){var Y=y(this),H=T(B);if(typeof G=="string"&&F(G,O)===-1&&F(G,"$<")===-1){var te=P(C,Y,H,G);if(te.done)return te.value}var ue=_(G);ue||(G=T(G));var _e=Y.global;if(_e){var J=Y.unicode;Y.lastIndex=0}for(var re=[];;){var pe=N(Y,H);if(pe===null||(L(re,pe),!_e))break;T(pe[0])===""&&(Y.lastIndex=k(H,w(Y.lastIndex),J))}for(var we,me="",ye=0,$e=0;$e<re.length;$e++){for(var Fe=T((pe=re[$e])[0]),Je=x(M(b(pe.index),H.length),0),ct=[],mt=1;mt<pe.length;mt++)L(ct,(we=pe[mt])===void 0?we:String(we));var K=pe.groups;if(ue){var X=R([Fe],ct,Je,H);K!==void 0&&L(X,K);var fe=T(f(G,void 0,X))}else fe=A(Fe,H,Je,ct,K,G);Je>=ye&&(me+=q(H,ye,Je)+fe,ye=Je+Fe.length)}return me+q(H,ye)}]},!!m(function(){var D=/./;return D.exec=function(){var C=[];return C.groups={a:"7"},C},"".replace(D,"$<a>")!=="7"})||!j||W)},3123:function(l,d,s){var f=s(2104),p=s(6916),v=s(1702),g=s(7007),m=s(7850),y=s(9670),_=s(4488),b=s(6707),w=s(1530),T=s(7466),E=s(1340),k=s(8173),S=s(1589),A=s(7651),N=s(2261),U=s(2999),x=s(7293),M=U.UNSUPPORTED_Y,R=4294967295,L=Math.min,F=[].push,q=v(/./.exec),j=v(F),W=v("".slice);g("split",function(D,C,P){var O;return O="abbc".split(/(b)*/)[1]=="c"||"test".split(/(?:)/,-1).length!=4||"ab".split(/(?:ab)*/).length!=2||".".split(/(.?)(.?)/).length!=4||".".split(/()()/).length>1||"".split(/.?/).length?function(B,G){var Y=E(_(this)),H=G===void 0?R:G>>>0;if(H===0)return[];if(B===void 0)return[Y];if(!m(B))return p(C,Y,B,H);for(var te,ue,_e,J=[],re=(B.ignoreCase?"i":"")+(B.multiline?"m":"")+(B.unicode?"u":"")+(B.sticky?"y":""),pe=0,we=new RegExp(B.source,re+"g");(te=p(N,we,Y))&&!((ue=we.lastIndex)>pe&&(j(J,W(Y,pe,te.index)),te.length>1&&te.index<Y.length&&f(F,J,S(te,1)),_e=te[0].length,pe=ue,J.length>=H));)we.lastIndex===te.index&&we.lastIndex++;return pe===Y.length?!_e&&q(we,"")||j(J,""):j(J,W(Y,pe)),J.length>H?S(J,0,H):J}:"0".split(void 0,0).length?function(B,G){return B===void 0&&G===0?[]:p(C,this,B,G)}:C,[function(B,G){var Y=_(this),H=B==null?void 0:k(B,D);return H?p(H,B,Y,G):p(O,E(Y),B,G)},function(B,G){var Y=y(this),H=E(B),te=P(O,Y,H,G,O!==C);if(te.done)return te.value;var ue=b(Y,RegExp),_e=Y.unicode,J=(Y.ignoreCase?"i":"")+(Y.multiline?"m":"")+(Y.unicode?"u":"")+(M?"g":"y"),re=new ue(M?"^(?:"+Y.source+")":Y,J),pe=G===void 0?R:G>>>0;if(pe===0)return[];if(H.length===0)return A(re,H)===null?[H]:[];for(var we=0,me=0,ye=[];me<H.length;){re.lastIndex=M?0:me;var $e,Fe=A(re,M?W(H,me):H);if(Fe===null||($e=L(T(re.lastIndex+(M?me:0)),H.length))===we)me=w(H,me,_e);else{if(j(ye,W(H,we,me)),ye.length===pe)return ye;for(var Je=1;Je<=Fe.length-1;Je++)if(j(ye,Fe[Je]),ye.length===pe)return ye;me=we=$e}}return j(ye,W(H,we)),ye}]},!!x(function(){var D=/(?:)/,C=D.exec;D.exec=function(){return C.apply(this,arguments)};var P="ab".split(D);return P.length!==2||P[0]!=="a"||P[1]!=="b"}),M)},3210:function(l,d,s){var f=s(2109),p=s(3111).trim;f({target:"String",proto:!0,forced:s(6091)("trim")},{trim:function(){return p(this)}})},4032:function(l,d,s){var f=s(2109),p=s(7854),v=s(6916),g=s(1702),m=s(1913),y=s(9781),_=s(133),b=s(7293),w=s(2597),T=s(7976),E=s(9670),k=s(5656),S=s(4948),A=s(1340),N=s(9114),U=s(30),x=s(1956),M=s(8006),R=s(1156),L=s(5181),F=s(1236),q=s(3070),j=s(6048),W=s(5296),D=s(8052),C=s(2309),P=s(6200),O=s(3501),B=s(9711),G=s(5112),Y=s(6061),H=s(7235),te=s(6532),ue=s(8003),_e=s(9909),J=s(2092).forEach,re=P("hidden"),pe="Symbol",we=_e.set,me=_e.getterFor(pe),ye=Object.prototype,$e=p.Symbol,Fe=$e&&$e.prototype,Je=p.TypeError,ct=p.QObject,mt=F.f,K=q.f,X=R.f,fe=W.f,Pe=g([].push),Le=C("symbols"),Ne=C("op-symbols"),ze=C("wks"),De=!ct||!ct.prototype||!ct.prototype.findChild,ve=y&&b(function(){return U(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a!=7})?function($,Se,se){var Ce=mt(ye,Se);Ce&&delete ye[Se],K($,Se,se),Ce&&$!==ye&&K(ye,Se,Ce)}:K,Xe=function($,Se){var se=Le[$]=U(Fe);return we(se,{type:pe,tag:$,description:Se}),y||(se.description=Se),se},je=function($,Se,se){$===ye&&je(Ne,Se,se),E($);var Ce=S(Se);return E(se),w(Le,Ce)?(se.enumerable?(w($,re)&&$[re][Ce]&&($[re][Ce]=!1),se=U(se,{enumerable:N(0,!1)})):(w($,re)||K($,re,N(1,{})),$[re][Ce]=!0),ve($,Ce,se)):K($,Ce,se)},Oe=function($,Se){E($);var se=k(Se),Ce=x(se).concat(We(se));return J(Ce,function(Ge){y&&!v(Ke,se,Ge)||je($,Ge,se[Ge])}),$},Ke=function($){var Se=S($),se=v(fe,this,Se);return!(this===ye&&w(Le,Se)&&!w(Ne,Se))&&(!(se||!w(this,Se)||!w(Le,Se)||w(this,re)&&this[re][Se])||se)},He=function($,Se){var se=k($),Ce=S(Se);if(se!==ye||!w(Le,Ce)||w(Ne,Ce)){var Ge=mt(se,Ce);return!Ge||!w(Le,Ce)||w(se,re)&&se[re][Ce]||(Ge.enumerable=!0),Ge}},Ae=function($){var Se=X(k($)),se=[];return J(Se,function(Ce){w(Le,Ce)||w(O,Ce)||Pe(se,Ce)}),se},We=function($){var Se=$===ye,se=X(Se?Ne:k($)),Ce=[];return J(se,function(Ge){!w(Le,Ge)||Se&&!w(ye,Ge)||Pe(Ce,Le[Ge])}),Ce};_||(D(Fe=($e=function(){if(T(Fe,this))throw Je("Symbol is not a constructor");var $=arguments.length&&arguments[0]!==void 0?A(arguments[0]):void 0,Se=B($),se=function(Ce){this===ye&&v(se,Ne,Ce),w(this,re)&&w(this[re],Se)&&(this[re][Se]=!1),ve(this,Se,N(1,Ce))};return y&&De&&ve(ye,Se,{configurable:!0,set:se}),Xe(Se,$)}).prototype,"toString",function(){return me(this).tag}),D($e,"withoutSetter",function($){return Xe(B($),$)}),W.f=Ke,q.f=je,j.f=Oe,F.f=He,M.f=R.f=Ae,L.f=We,Y.f=function($){return Xe(G($),$)},y&&(K(Fe,"description",{configurable:!0,get:function(){return me(this).description}}),m||D(ye,"propertyIsEnumerable",Ke,{unsafe:!0}))),f({global:!0,constructor:!0,wrap:!0,forced:!_,sham:!_},{Symbol:$e}),J(x(ze),function($){H($)}),f({target:pe,stat:!0,forced:!_},{useSetter:function(){De=!0},useSimple:function(){De=!1}}),f({target:"Object",stat:!0,forced:!_,sham:!y},{create:function($,Se){return Se===void 0?U($):Oe(U($),Se)},defineProperty:je,defineProperties:Oe,getOwnPropertyDescriptor:He}),f({target:"Object",stat:!0,forced:!_},{getOwnPropertyNames:Ae}),te(),ue($e,pe),O[re]=!0},1817:function(l,d,s){var f=s(2109),p=s(9781),v=s(7854),g=s(1702),m=s(2597),y=s(614),_=s(7976),b=s(1340),w=s(3070).f,T=s(9920),E=v.Symbol,k=E&&E.prototype;if(p&&y(E)&&(!("description"in k)||E().description!==void 0)){var S={},A=function(){var F=arguments.length<1||arguments[0]===void 0?void 0:b(arguments[0]),q=_(k,this)?new E(F):F===void 0?E():E(F);return F===""&&(S[q]=!0),q};T(A,E),A.prototype=k,k.constructor=A;var N=String(E("test"))=="Symbol(test)",U=g(k.toString),x=g(k.valueOf),M=/^Symbol\((.*)\)[^)]+$/,R=g("".replace),L=g("".slice);w(k,"description",{configurable:!0,get:function(){var F=x(this),q=U(F);if(m(S,F))return"";var j=N?L(q,7,-1):R(q,M,"$1");return j===""?void 0:j}}),f({global:!0,constructor:!0,forced:!0},{Symbol:A})}},763:function(l,d,s){var f=s(2109),p=s(5005),v=s(2597),g=s(1340),m=s(2309),y=s(735),_=m("string-to-symbol-registry"),b=m("symbol-to-string-registry");f({target:"Symbol",stat:!0,forced:!y},{for:function(w){var T=g(w);if(v(_,T))return _[T];var E=p("Symbol")(T);return _[T]=E,b[E]=T,E}})},2165:function(l,d,s){s(7235)("iterator")},2526:function(l,d,s){s(4032),s(763),s(6620),s(8862),s(9660)},6620:function(l,d,s){var f=s(2109),p=s(2597),v=s(2190),g=s(6330),m=s(2309),y=s(735),_=m("symbol-to-string-registry");f({target:"Symbol",stat:!0,forced:!y},{keyFor:function(b){if(!v(b))throw TypeError(g(b)+" is not a symbol");if(p(_,b))return _[b]}})},3728:function(l,d,s){s(6373)},4747:function(l,d,s){var f=s(7854),p=s(8324),v=s(8509),g=s(8533),m=s(8880),y=function(b){if(b&&b.forEach!==g)try{m(b,"forEach",g)}catch{b.forEach=g}};for(var _ in p)p[_]&&y(f[_]&&f[_].prototype);y(v)},3948:function(l,d,s){var f=s(7854),p=s(8324),v=s(8509),g=s(6992),m=s(8880),y=s(5112),_=y("iterator"),b=y("toStringTag"),w=g.values,T=function(k,S){if(k){if(k[_]!==w)try{m(k,_,w)}catch{k[_]=w}if(k[b]||m(k,b,S),p[S]){for(var A in g)if(k[A]!==g[A])try{m(k,A,g[A])}catch{k[A]=g[A]}}}};for(var E in p)T(f[E]&&f[E].prototype,E);T(v,"DOMTokenList")}},a={};function c(l){var d=a[l];if(d!==void 0)return d.exports;var s=a[l]={exports:{}};return o[l](s,s.exports,c),s.exports}c.d=function(l,d){for(var s in d)c.o(d,s)&&!c.o(l,s)&&Object.defineProperty(l,s,{enumerable:!0,get:d[s]})},c.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),c.o=function(l,d){return Object.prototype.hasOwnProperty.call(l,d)},c.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var u={};return function(){function l(A){return function(N){if(Array.isArray(N))return s(N)}(A)||function(N){if(typeof Symbol<"u"&&N[Symbol.iterator]!=null||N["@@iterator"]!=null)return Array.from(N)}(A)||d(A)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function d(A,N){if(A){if(typeof A=="string")return s(A,N);var U=Object.prototype.toString.call(A).slice(8,-1);return U==="Object"&&A.constructor&&(U=A.constructor.name),U==="Map"||U==="Set"?Array.from(A):U==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)?s(A,N):void 0}}function s(A,N){(N==null||N>A.length)&&(N=A.length);for(var U=0,x=new Array(N);U<N;U++)x[U]=A[U];return x}function f(A){return(f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N})(A)}function p(A,N){for(var U=0;U<N.length;U++){var x=N[U];x.enumerable=x.enumerable||!1,x.configurable=!0,"value"in x&&(x.writable=!0),Object.defineProperty(A,x.key,x)}}function v(A,N,U){return N in A?Object.defineProperty(A,N,{value:U,enumerable:!0,configurable:!0,writable:!0}):A[N]=U,A}c.r(u),c.d(u,{default:function(){return S}}),c(3210),c(4916),c(5306),c(2772),c(8309),c(3123),c(1539),c(9714),c(561),c(9600),c(9595),c(7042),typeof Element>"u"||"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof self<"u"&&"document"in self&&((!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g")))&&function(A){if("Element"in A){var N="classList",U=A.Element.prototype,x=Object,M=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},R=Array.prototype.indexOf||function(C){for(var P=0,O=this.length;P<O;P++)if(P in this&&this[P]===C)return P;return-1},L=function(C,P){this.name=C,this.code=DOMException[C],this.message=P},F=function(C,P){if(P==="")throw new L("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(P))throw new L("INVALID_CHARACTER_ERR","The token must not contain space characters.");return R.call(C,P)},q=function(C){for(var P=M.call(C.getAttribute("class")||""),O=P?P.split(/\s+/):[],B=0,G=O.length;B<G;B++)this.push(O[B]);this._updateClassName=function(){C.setAttribute("class",this.toString())}},j=q.prototype=[],W=function(){return new q(this)};if(L.prototype=Error.prototype,j.item=function(C){return this[C]||null},j.contains=function(C){return~F(this,C+"")},j.add=function(){var C,P=arguments,O=0,B=P.length,G=!1;do C=P[O]+"",~F(this,C)||(this.push(C),G=!0);while(++O<B);G&&this._updateClassName()},j.remove=function(){var C,P,O=arguments,B=0,G=O.length,Y=!1;do for(C=O[B]+"",P=F(this,C);~P;)this.splice(P,1),Y=!0,P=F(this,C);while(++B<G);Y&&this._updateClassName()},j.toggle=function(C,P){var O=this.contains(C),B=O?P!==!0&&"remove":P!==!1&&"add";return B&&this[B](C),P===!0||P===!1?P:!O},j.replace=function(C,P){var O=F(C+"");~O&&(this.splice(O,1,P),this._updateClassName())},j.toString=function(){return this.join(" ")},x.defineProperty){var D={get:W,enumerable:!0,configurable:!0};try{x.defineProperty(U,N,D)}catch(C){C.number!==void 0&&C.number!==-2146823252||(D.enumerable=!1,x.defineProperty(U,N,D))}}else x.prototype.__defineGetter__&&U.__defineGetter__(N,W)}}(self),function(){var A=document.createElement("_");if(A.classList.add("c1","c2"),!A.classList.contains("c2")){var N=function(x){var M=DOMTokenList.prototype[x];DOMTokenList.prototype[x]=function(R){var L,F=arguments.length;for(L=0;L<F;L++)R=arguments[L],M.call(this,R)}};N("add"),N("remove")}if(A.classList.toggle("c3",!1),A.classList.contains("c3")){var U=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(x,M){return 1 in arguments&&!this.contains(x)==!M?M:U.call(this,x)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(x,M){var R=this.toString().split(" "),L=R.indexOf(x+"");~L&&(R=R.slice(L),this.remove.apply(this,R),this.add(M),this.add.apply(this,R.slice(1)))}),A=null}()),c(7327),c(2222),c(7941),c(4603),c(3728),c(2707),c(6699),c(2023),c(4747),c(9601),c(1249),c(1038),c(8783),c(2526),c(5003),c(9337),c(1817),c(2165),c(6992),c(3948),c(3161),c(9653),c(4723),c(5827),c(6210);var g=function(){function A(M){var R=M.getOptions,L=M.getCaretPosition,F=M.getCaretPositionEnd,q=M.dispatch;(function(j,W){if(!(j instanceof W))throw new TypeError("Cannot call a class as a function")})(this,A),v(this,"isStandardButton",function(j){return j&&!(j[0]==="{"&&j[j.length-1]==="}")}),this.getOptions=R,this.getCaretPosition=L,this.getCaretPositionEnd=F,this.dispatch=q,A.bindMethods(A,this)}var N,U,x;return N=A,x=[{key:"bindMethods",value:function(M,R){var L,F=function(j,W){var D=typeof Symbol<"u"&&j[Symbol.iterator]||j["@@iterator"];if(!D){if(Array.isArray(j)||(D=d(j))){D&&(j=D);var C=0,P=function(){};return{s:P,n:function(){return C>=j.length?{done:!0}:{done:!1,value:j[C++]}},e:function(Y){throw Y},f:P}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var O,B=!0,G=!1;return{s:function(){D=D.call(j)},n:function(){var Y=D.next();return B=Y.done,Y},e:function(Y){G=!0,O=Y},f:function(){try{B||D.return==null||D.return()}finally{if(G)throw O}}}}(Object.getOwnPropertyNames(M.prototype));try{for(F.s();!(L=F.n()).done;){var q=L.value;q==="constructor"||q==="bindMethods"||(R[q]=R[q].bind(R))}}catch(j){F.e(j)}finally{F.f()}}}],(U=[{key:"getButtonType",value:function(M){return M.includes("{")&&M.includes("}")&&M!=="{//}"?"functionBtn":"standardBtn"}},{key:"getButtonClass",value:function(M){var R=this.getButtonType(M),L=M.replace("{","").replace("}",""),F="";return R!=="standardBtn"&&(F=" hg-button-".concat(L)),"hg-".concat(R).concat(F)}},{key:"getDefaultDiplay",value:function(){return{"{bksp}":"backspace","{backspace}":"backspace","{enter}":"< enter","{shift}":"shift","{shiftleft}":"shift","{shiftright}":"shift","{alt}":"alt","{s}":"shift","{tab}":"tab","{lock}":"caps","{capslock}":"caps","{accept}":"Submit","{space}":" ","{//}":" ","{esc}":"esc","{escape}":"esc","{f1}":"f1","{f2}":"f2","{f3}":"f3","{f4}":"f4","{f5}":"f5","{f6}":"f6","{f7}":"f7","{f8}":"f8","{f9}":"f9","{f10}":"f10","{f11}":"f11","{f12}":"f12","{numpaddivide}":"/","{numlock}":"lock","{arrowup}":"↑","{arrowleft}":"←","{arrowdown}":"↓","{arrowright}":"→","{prtscr}":"print","{scrolllock}":"scroll","{pause}":"pause","{insert}":"ins","{home}":"home","{pageup}":"up","{delete}":"del","{forwarddelete}":"del","{end}":"end","{pagedown}":"down","{numpadmultiply}":"*","{numpadsubtract}":"-","{numpadadd}":"+","{numpadenter}":"enter","{period}":".","{numpaddecimal}":".","{numpad0}":"0","{numpad1}":"1","{numpad2}":"2","{numpad3}":"3","{numpad4}":"4","{numpad5}":"5","{numpad6}":"6","{numpad7}":"7","{numpad8}":"8","{numpad9}":"9"}}},{key:"getButtonDisplayName",value:function(M,R,L){return(R=L?Object.assign({},this.getDefaultDiplay(),R):R||this.getDefaultDiplay())[M]||M}},{key:"getUpdatedInput",value:function(M,R,L){var F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:L,q=arguments.length>4&&arguments[4]!==void 0&&arguments[4],j=this.getOptions(),W=[L,F,q],D=R;return(M==="{bksp}"||M==="{backspace}")&&D.length>0?D=this.removeAt.apply(this,[D].concat(W)):(M==="{delete}"||M==="{forwarddelete}")&&D.length>0?D=this.removeForwardsAt.apply(this,[D].concat(W)):M==="{space}"?D=this.addStringAt.apply(this,[D," "].concat(W)):M!=="{tab}"||typeof j.tabCharOnTab=="boolean"&&j.tabCharOnTab===!1?M!=="{enter}"&&M!=="{numpadenter}"||!j.newLineOnEnter?M.includes("numpad")&&Number.isInteger(Number(M[M.length-2]))?D=this.addStringAt.apply(this,[D,M[M.length-2]].concat(W)):M==="{numpaddivide}"?D=this.addStringAt.apply(this,[D,"/"].concat(W)):M==="{numpadmultiply}"?D=this.addStringAt.apply(this,[D,"*"].concat(W)):M==="{numpadsubtract}"?D=this.addStringAt.apply(this,[D,"-"].concat(W)):M==="{numpadadd}"?D=this.addStringAt.apply(this,[D,"+"].concat(W)):M==="{numpaddecimal}"?D=this.addStringAt.apply(this,[D,"."].concat(W)):M==="{"||M==="}"?D=this.addStringAt.apply(this,[D,M].concat(W)):M.includes("{")||M.includes("}")||(D=this.addStringAt.apply(this,[D,M].concat(W))):D=this.addStringAt.apply(this,[D,`
`].concat(W)):D=this.addStringAt.apply(this,[D,"	"].concat(W)),D}},{key:"updateCaretPos",value:function(M){var R=arguments.length>1&&arguments[1]!==void 0&&arguments[1],L=this.updateCaretPosAction(M,R);this.dispatch(function(F){F.setCaretPosition(L)})}},{key:"updateCaretPosAction",value:function(M){var R=arguments.length>1&&arguments[1]!==void 0&&arguments[1],L=this.getOptions(),F=this.getCaretPosition();return F!=null&&(R?F>0&&(F-=M):F+=M),L.debug&&console.log("Caret at:",F),F}},{key:"addStringAt",value:function(M,R){var L,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M.length,q=arguments.length>3&&arguments[3]!==void 0?arguments[3]:M.length,j=arguments.length>4&&arguments[4]!==void 0&&arguments[4];return F||F===0?(L=[M.slice(0,F),R,M.slice(q)].join(""),this.isMaxLengthReached()||j&&this.updateCaretPos(R.length)):L=M+R,L}},{key:"removeAt",value:function(M){var R,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M.length,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M.length,q=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(L===0&&F===0)return M;if(L===F){var j=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g;L&&L>=0?M.substring(L-2,L).match(j)?(R=M.substr(0,L-2)+M.substr(L),q&&this.updateCaretPos(2,!0)):(R=M.substr(0,L-1)+M.substr(L),q&&this.updateCaretPos(1,!0)):M.slice(-2).match(j)?(R=M.slice(0,-2),q&&this.updateCaretPos(2,!0)):(R=M.slice(0,-1),q&&this.updateCaretPos(1,!0))}else R=M.slice(0,L)+M.slice(F),q&&this.dispatch(function(W){W.setCaretPosition(L)});return R}},{key:"removeForwardsAt",value:function(M){var R,L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M.length,F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:M.length,q=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(M==null||!M.length||L===null)return M;if(L===F){var j=/([\uD800-\uDBFF][\uDC00-\uDFFF])/g,W=M.substring(L,L+2),D=W.match(j);R=D?M.substr(0,L)+M.substr(L+2):M.substr(0,L)+M.substr(L+1)}else R=M.slice(0,L)+M.slice(F),q&&this.dispatch(function(C){C.setCaretPosition(L)});return R}},{key:"handleMaxLength",value:function(M,R){var L=this.getOptions(),F=L.maxLength,q=M[L.inputName||"default"],j=R.length-1>=F;if(R.length<=q.length)return!1;if(Number.isInteger(F))return L.debug&&console.log("maxLength (num) reached:",j),j?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1);if(f(F)==="object"){var W=R.length-1>=F[L.inputName||"default"];return L.debug&&console.log("maxLength (obj) reached:",W),W?(this.maxLengthReached=!0,!0):(this.maxLengthReached=!1,!1)}}},{key:"isMaxLengthReached",value:function(){return!!this.maxLengthReached}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints}},{key:"pointerEventsSupported",value:function(){return!!window.PointerEvent}},{key:"camelCase",value:function(M){return M?M.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(R,L){return L.length?R+L[0].toUpperCase()+L.slice(1):R}):""}},{key:"chunkArray",value:function(M,R){return l(Array(Math.ceil(M.length/R))).map(function(L,F){return M.slice(R*F,R+R*F)})}}])&&p(N.prototype,U),x&&p(N,x),Object.defineProperty(N,"prototype",{writable:!1}),A}();v(g,"noop",function(){});var m=g,y=function(){function A(x){var M=x.dispatch,R=x.getOptions;(function(L,F){if(!(L instanceof F))throw new TypeError("Cannot call a class as a function")})(this,A),this.dispatch=M,this.getOptions=R,m.bindMethods(A,this)}var N,U;return N=A,(U=[{key:"handleHighlightKeyDown",value:function(x){var M=this.getOptions(),R=this.getSimpleKeyboardLayoutKey(x);this.dispatch(function(L){var F,q,j=L.getButtonElement(R),W=L.getButtonElement("{".concat(R,"}"));if(j)F=j,q=R;else{if(!W)return;F=W,q="{".concat(R,"}")}F&&(F.style.backgroundColor=M.physicalKeyboardHighlightBgColor||"#dadce4",F.style.color=M.physicalKeyboardHighlightTextColor||"black",M.physicalKeyboardHighlightPress&&(M.physicalKeyboardHighlightPressUsePointerEvents?F.onpointerdown():M.physicalKeyboardHighlightPressUseClick?F.click():L.handleButtonClicked(q,x)))})}},{key:"handleHighlightKeyUp",value:function(x){var M=this.getOptions(),R=this.getSimpleKeyboardLayoutKey(x);this.dispatch(function(L){var F=L.getButtonElement(R)||L.getButtonElement("{".concat(R,"}"));F&&F.removeAttribute&&(F.removeAttribute("style"),M.physicalKeyboardHighlightPressUsePointerEvents&&F.onpointerup())})}},{key:"getSimpleKeyboardLayoutKey",value:function(x){var M,R,L=x.code||x.key||this.keyCodeToKey(x==null?void 0:x.keyCode);return(R=L!=null&&L.includes("Numpad")||L!=null&&L.includes("Shift")||L!=null&&L.includes("Space")||L!=null&&L.includes("Backspace")||L!=null&&L.includes("Control")||L!=null&&L.includes("Alt")||L!=null&&L.includes("Meta")?x.code||"":x.key||this.keyCodeToKey(x==null?void 0:x.keyCode)||"").length>1?(M=R)===null||M===void 0?void 0:M.toLowerCase():R}},{key:"keyCodeToKey",value:function(x){return{8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",91:"Meta",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9",106:"NumpadMultiply",107:"NumpadAdd",109:"NumpadSubtract",110:"NumpadDecimal",111:"NumpadDivide",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}[x]}}])&&function(x,M){for(var R=0;R<M.length;R++){var L=M[R];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(x,L.key,L)}}(N.prototype,U),Object.defineProperty(N,"prototype",{writable:!1}),A}(),_=function(){function A(x){var M,R=x.utilities;(function(L,F){if(!(L instanceof F))throw new TypeError("Cannot call a class as a function")})(this,A),(M="pageIndex")in this?Object.defineProperty(this,M,{value:0,enumerable:!0,configurable:!0,writable:!0}):this[M]=0,this.utilities=R,m.bindMethods(A,this),this.pageSize=this.utilities.getOptions().layoutCandidatesPageSize||5}var N,U;return N=A,(U=[{key:"destroy",value:function(){this.candidateBoxElement&&(this.candidateBoxElement.remove(),this.pageIndex=0)}},{key:"show",value:function(x){var M=this,R=x.candidateValue,L=x.targetElement,F=x.onSelect;if(R&&R.length){var q=this.utilities.chunkArray(R.split(" "),this.pageSize);this.renderPage({candidateListPages:q,targetElement:L,pageIndex:this.pageIndex,nbPages:q.length,onItemSelected:function(j,W){F(j,W),M.destroy()}})}}},{key:"renderPage",value:function(x){var M,R=this,L=x.candidateListPages,F=x.targetElement,q=x.pageIndex,j=x.nbPages,W=x.onItemSelected;(M=this.candidateBoxElement)===null||M===void 0||M.remove(),this.candidateBoxElement=document.createElement("div"),this.candidateBoxElement.className="hg-candidate-box";var D=document.createElement("ul");D.className="hg-candidate-box-list",L[q].forEach(function(G){var Y=document.createElement("li"),H=function(){var te=new MouseEvent("click");return Object.defineProperty(te,"target",{value:Y}),te};Y.className="hg-candidate-box-list-item",Y.textContent=G,Y.onclick=function(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:H();return W(G,te)},D.appendChild(Y)});var C=q>0,P=document.createElement("div");P.classList.add("hg-candidate-box-prev"),C&&P.classList.add("hg-candidate-box-btn-active"),P.onclick=function(){C&&R.renderPage({candidateListPages:L,targetElement:F,pageIndex:q-1,nbPages:j,onItemSelected:W})},this.candidateBoxElement.appendChild(P),this.candidateBoxElement.appendChild(D);var O=q<j-1,B=document.createElement("div");B.classList.add("hg-candidate-box-next"),O&&B.classList.add("hg-candidate-box-btn-active"),B.onclick=function(){O&&R.renderPage({candidateListPages:L,targetElement:F,pageIndex:q+1,nbPages:j,onItemSelected:W})},this.candidateBoxElement.appendChild(B),F.prepend(this.candidateBoxElement)}}])&&function(x,M){for(var R=0;R<M.length;R++){var L=M[R];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(x,L.key,L)}}(N.prototype,U),Object.defineProperty(N,"prototype",{writable:!1}),A}();function b(A){return function(N){if(Array.isArray(N))return w(N)}(A)||function(N){if(typeof Symbol<"u"&&N[Symbol.iterator]!=null||N["@@iterator"]!=null)return Array.from(N)}(A)||function(N,U){if(N){if(typeof N=="string")return w(N,U);var x=Object.prototype.toString.call(N).slice(8,-1);return x==="Object"&&N.constructor&&(x=N.constructor.name),x==="Map"||x==="Set"?Array.from(N):x==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(x)?w(N,U):void 0}}(A)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(A,N){(N==null||N>A.length)&&(N=A.length);for(var U=0,x=new Array(N);U<N;U++)x[U]=A[U];return x}function T(A){return(T=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(N){return typeof N}:function(N){return N&&typeof Symbol=="function"&&N.constructor===Symbol&&N!==Symbol.prototype?"symbol":typeof N})(A)}function E(A,N){var U=Object.keys(A);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(A);N&&(x=x.filter(function(M){return Object.getOwnPropertyDescriptor(A,M).enumerable})),U.push.apply(U,x)}return U}function k(A,N,U){return N in A?Object.defineProperty(A,N,{value:U,enumerable:!0,configurable:!0,writable:!0}):A[N]=U,A}var S=function(){function A(x,M){var R=this;if(function(P,O){if(!(P instanceof O))throw new TypeError("Cannot call a class as a function")}(this,A),k(this,"defaultName","default"),k(this,"activeInputElement",null),k(this,"handleParams",function(P,O){var B,G,Y;if(typeof P=="string")B=P.split(".").join(""),G=document.querySelector(".".concat(B)),Y=O;else if(P instanceof HTMLDivElement){if(!P.className)throw console.warn("Any DOM element passed as parameter must have a class."),new Error("KEYBOARD_DOM_CLASS_ERROR");B=P.className.split(" ")[0],G=P,Y=O}else B="simple-keyboard",G=document.querySelector(".".concat(B)),Y=P;return{keyboardDOMClass:B,keyboardDOM:G,options:Y}}),k(this,"getOptions",function(){return R.options}),k(this,"getCaretPosition",function(){return R.caretPosition}),k(this,"getCaretPositionEnd",function(){return R.caretPositionEnd}),k(this,"registerModule",function(P,O){R.modules[P]||(R.modules[P]={}),O(R.modules[P])}),k(this,"getKeyboardClassString",function(){for(var P=arguments.length,O=new Array(P),B=0;B<P;B++)O[B]=arguments[B];var G=[R.keyboardDOMClass].concat(O).filter(function(Y){return!!Y});return G.join(" ")}),typeof window<"u"){var L=this.handleParams(x,M),F=L.keyboardDOMClass,q=L.keyboardDOM,j=L.options,W=j===void 0?{}:j;this.utilities=new m({getOptions:this.getOptions,getCaretPosition:this.getCaretPosition,getCaretPositionEnd:this.getCaretPositionEnd,dispatch:this.dispatch}),this.caretPosition=null,this.caretPositionEnd=null,this.keyboardDOM=q,this.options=function(P){for(var O=1;O<arguments.length;O++){var B=arguments[O]!=null?arguments[O]:{};O%2?E(Object(B),!0).forEach(function(G){k(P,G,B[G])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(B)):E(Object(B)).forEach(function(G){Object.defineProperty(P,G,Object.getOwnPropertyDescriptor(B,G))})}return P}({layoutName:"default",theme:"hg-theme-default",inputName:"default",preventMouseDownDefault:!1,enableLayoutCandidates:!0,excludeFromLayout:{}},W),this.keyboardPluginClasses="",m.bindMethods(A,this);var D=this.options.inputName,C=D===void 0?this.defaultName:D;if(this.input={},this.input[C]="",this.keyboardDOMClass=F,this.buttonElements={},window.SimpleKeyboardInstances||(window.SimpleKeyboardInstances={}),this.currentInstanceName=this.utilities.camelCase(this.keyboardDOMClass),window.SimpleKeyboardInstances[this.currentInstanceName]=this,this.allKeyboardInstances=window.SimpleKeyboardInstances,this.keyboardInstanceNames=Object.keys(window.SimpleKeyboardInstances),this.isFirstKeyboardInstance=this.keyboardInstanceNames[0]===this.currentInstanceName,this.physicalKeyboard=new y({dispatch:this.dispatch,getOptions:this.getOptions}),this.candidateBox=this.options.enableLayoutCandidates?new _({utilities:this.utilities}):null,!this.keyboardDOM)throw console.warn('".'.concat(F,'" was not found in the DOM.')),new Error("KEYBOARD_DOM_ERROR");this.render(),this.modules={},this.loadModules()}}var N,U;return N=A,(U=[{key:"setCaretPosition",value:function(x){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:x;this.caretPosition=x,this.caretPositionEnd=M}},{key:"getInputCandidates",value:function(x){var M=this,R=this.options,L=R.layoutCandidates,F=R.layoutCandidatesCaseSensitiveMatch;if(!L||T(L)!=="object")return{};var q=Object.keys(L).filter(function(D){var C=x.substring(0,M.getCaretPositionEnd()||0)||x,P=new RegExp("".concat(D,"$"),F?"g":"gi");return!!b(C.matchAll(P)).length});if(q.length>1){var j=q.sort(function(D,C){return C.length-D.length})[0];return{candidateKey:j,candidateValue:L[j]}}if(q.length){var W=q[0];return{candidateKey:W,candidateValue:L[W]}}return{}}},{key:"showCandidatesBox",value:function(x,M,R){var L=this;this.candidateBox&&this.candidateBox.show({candidateValue:M,targetElement:R,onSelect:function(F,q){var j=L.options.layoutCandidatesCaseSensitiveMatch,W=F.normalize("NFD"),D=L.getInput(L.options.inputName,!0),C=L.getCaretPositionEnd()||0,P=D.substring(0,C||0)||D,O=new RegExp("".concat(x,"$"),j?"g":"gi"),B=P.replace(O,W),G=D.replace(P,B),Y=B.length-P.length,H=(C||D.length)+Y;H<0&&(H=0),L.setInput(G,L.options.inputName,!0),L.setCaretPosition(H),typeof L.options.onChange=="function"&&L.options.onChange(L.getInput(L.options.inputName,!0),q),typeof L.options.onChangeAll=="function"&&L.options.onChangeAll(L.getAllInputs(),q)}})}},{key:"handleButtonClicked",value:function(x,M){var R=this.options,L=R.inputName,F=L===void 0?this.defaultName:L,q=R.debug;if(x!=="{//}"){this.input[F]||(this.input[F]="");var j=this.utilities.getUpdatedInput(x,this.input[F],this.caretPosition,this.caretPositionEnd);if(this.utilities.isStandardButton(x)&&this.activeInputElement&&this.input[F]&&this.input[F]===j&&this.caretPosition===0&&this.caretPositionEnd===j.length)return this.setInput("",this.options.inputName,!0),this.setCaretPosition(0),this.activeInputElement.value="",this.activeInputElement.setSelectionRange(0,0),void this.handleButtonClicked(x,M);if(typeof this.options.onKeyPress=="function"&&this.options.onKeyPress(x,M),this.input[F]!==j&&(!this.options.inputPattern||this.options.inputPattern&&this.inputPatternIsValid(j))){if(this.options.maxLength&&this.utilities.handleMaxLength(this.input,j))return;var W=this.utilities.getUpdatedInput(x,this.input[F],this.caretPosition,this.caretPositionEnd,!0);if(this.setInput(W,this.options.inputName,!0),q&&console.log("Input changed:",this.getAllInputs()),this.options.debug&&console.log("Caret at: ",this.getCaretPosition(),this.getCaretPositionEnd(),"(".concat(this.keyboardDOMClass,")")),this.options.syncInstanceInputs&&this.syncInstanceInputs(),typeof this.options.onChange=="function"&&this.options.onChange(this.getInput(this.options.inputName,!0),M),typeof this.options.onChangeAll=="function"&&this.options.onChangeAll(this.getAllInputs(),M),M!=null&&M.target&&this.options.enableLayoutCandidates){var D,C=this.getInputCandidates(j),P=C.candidateKey,O=C.candidateValue;P&&O?this.showCandidatesBox(P,O,this.keyboardDOM):(D=this.candidateBox)===null||D===void 0||D.destroy()}}q&&console.log("Key pressed:",x)}}},{key:"getMouseHold",value:function(){return this.isMouseHold}},{key:"setMouseHold",value:function(x){this.options.syncInstanceInputs?this.dispatch(function(M){M.isMouseHold=x}):this.isMouseHold=x}},{key:"handleButtonMouseDown",value:function(x,M){var R=this;M&&(this.options.preventMouseDownDefault&&M.preventDefault(),this.options.stopMouseDownPropagation&&M.stopPropagation(),M.target.classList.add(this.activeButtonClass)),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdTimeout&&clearTimeout(this.holdTimeout),this.setMouseHold(!0),this.options.disableButtonHold||(this.holdTimeout=window.setTimeout(function(){(R.getMouseHold()&&(!x.includes("{")&&!x.includes("}")||x==="{delete}"||x==="{backspace}"||x==="{bksp}"||x==="{space}"||x==="{tab}")||x==="{arrowright}"||x==="{arrowleft}"||x==="{arrowup}"||x==="{arrowdown}")&&(R.options.debug&&console.log("Button held:",x),R.handleButtonHold(x)),clearTimeout(R.holdTimeout)},500))}},{key:"handleButtonMouseUp",value:function(x,M){var R=this;M&&(this.options.preventMouseUpDefault&&M.preventDefault&&M.preventDefault(),this.options.stopMouseUpPropagation&&M.stopPropagation&&M.stopPropagation(),!(M.target===this.keyboardDOM||M.target&&this.keyboardDOM.contains(M.target)||this.candidateBox&&this.candidateBox.candidateBoxElement&&(M.target===this.candidateBox.candidateBoxElement||M.target&&this.candidateBox.candidateBoxElement.contains(M.target)))&&this.candidateBox&&this.candidateBox.destroy()),this.recurseButtons(function(L){L.classList.remove(R.activeButtonClass)}),this.setMouseHold(!1),this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),x&&typeof this.options.onKeyReleased=="function"&&this.options.onKeyReleased(x)}},{key:"handleKeyboardContainerMouseDown",value:function(x){this.options.preventMouseDownDefault&&x.preventDefault()}},{key:"handleButtonHold",value:function(x){var M=this;this.holdInteractionTimeout&&clearTimeout(this.holdInteractionTimeout),this.holdInteractionTimeout=window.setTimeout(function(){M.getMouseHold()?(M.handleButtonClicked(x),M.handleButtonHold(x)):clearTimeout(M.holdInteractionTimeout)},100)}},{key:"syncInstanceInputs",value:function(){var x=this;this.dispatch(function(M){M.replaceInput(x.input),M.setCaretPosition(x.caretPosition,x.caretPositionEnd)})}},{key:"clearInput",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.inputName||this.defaultName;this.input[x]="",this.setCaretPosition(0),this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"getInput",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.inputName||this.defaultName,M=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(this.options.syncInstanceInputs&&!M&&this.syncInstanceInputs(),this.options.rtl){var R=this.input[x].replace("‫","").replace("‬","");return"‫"+R+"‬"}return this.input[x]}},{key:"getAllInputs",value:function(){var x=this,M={};return Object.keys(this.input).forEach(function(R){M[R]=x.getInput(R,!0)}),M}},{key:"setInput",value:function(x){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.inputName||this.defaultName,R=arguments.length>2?arguments[2]:void 0;this.input[M]=x,!R&&this.options.syncInstanceInputs&&this.syncInstanceInputs()}},{key:"replaceInput",value:function(x){this.input=x}},{key:"setOptions",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},M=this.changedOptions(x);this.options=Object.assign(this.options,x),M.length&&(this.options.debug&&console.log("changedOptions",M),this.onSetOptions(M),this.render())}},{key:"changedOptions",value:function(x){var M=this;return Object.keys(x).filter(function(R){return JSON.stringify(x[R])!==JSON.stringify(M.options[R])})}},{key:"onSetOptions",value:function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];x.includes("layoutName")&&this.candidateBox&&this.candidateBox.destroy(),(x.includes("layoutCandidatesPageSize")||x.includes("layoutCandidates"))&&this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=new _({utilities:this.utilities}))}},{key:"resetRows",value:function(){this.keyboardRowsDOM&&this.keyboardRowsDOM.remove(),this.keyboardDOM.className=this.keyboardDOMClass,this.keyboardDOM.setAttribute("data-skInstance",this.currentInstanceName),this.buttonElements={}}},{key:"dispatch",value:function(x){if(!window.SimpleKeyboardInstances)throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."),new Error("INSTANCES_VAR_ERROR");return Object.keys(window.SimpleKeyboardInstances).forEach(function(M){x(window.SimpleKeyboardInstances[M],M)})}},{key:"addButtonTheme",value:function(x,M){var R=this;M&&x&&(x.split(" ").forEach(function(L){M.split(" ").forEach(function(F){R.options.buttonTheme||(R.options.buttonTheme=[]);var q=!1;R.options.buttonTheme.map(function(j){if(j!=null&&j.class.split(" ").includes(F)){q=!0;var W=j.buttons.split(" ");W.includes(L)||(q=!0,W.push(L),j.buttons=W.join(" "))}return j}),q||R.options.buttonTheme.push({class:F,buttons:x})})}),this.render())}},{key:"removeButtonTheme",value:function(x,M){var R=this;if(!x&&!M)return this.options.buttonTheme=[],void this.render();x&&Array.isArray(this.options.buttonTheme)&&this.options.buttonTheme.length&&(x.split(" ").forEach(function(L){var F,q;(F=R.options)===null||F===void 0||(q=F.buttonTheme)===null||q===void 0||q.map(function(j,W){if(j&&M&&M.includes(j.class)||!M){var D,C,P=(D=j)===null||D===void 0?void 0:D.buttons.split(" ").filter(function(O){return O!==L});j&&P!=null&&P.length?j.buttons=P.join(" "):((C=R.options.buttonTheme)===null||C===void 0||C.splice(W,1),j=null)}return j})}),this.render())}},{key:"getButtonElement",value:function(x){var M,R=this.buttonElements[x];return R&&(M=R.length>1?R:R[0]),M}},{key:"inputPatternIsValid",value:function(x){var M,R=this.options.inputPattern;if((M=R instanceof RegExp?R:R[this.options.inputName||this.defaultName])&&x){var L=M.test(x);return this.options.debug&&console.log('inputPattern ("'.concat(M,'"): ').concat(L?"passed":"did not pass!")),L}return!0}},{key:"setEventListeners",value:function(){!this.isFirstKeyboardInstance&&this.allKeyboardInstances||(this.options.debug&&console.log("Caret handling started (".concat(this.keyboardDOMClass,")")),document.addEventListener("keyup",this.handleKeyUp),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("mouseup",this.handleMouseUp),document.addEventListener("touchend",this.handleTouchEnd),document.addEventListener("select",this.handleSelect),document.addEventListener("selectionchange",this.handleSelectionChange))}},{key:"handleKeyUp",value:function(x){this.caretEventHandler(x),this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyUp(x)}},{key:"handleKeyDown",value:function(x){this.options.physicalKeyboardHighlight&&this.physicalKeyboard.handleHighlightKeyDown(x)}},{key:"handleMouseUp",value:function(x){this.caretEventHandler(x)}},{key:"handleTouchEnd",value:function(x){this.caretEventHandler(x)}},{key:"handleSelect",value:function(x){this.caretEventHandler(x)}},{key:"handleSelectionChange",value:function(x){this.caretEventHandler(x)}},{key:"caretEventHandler",value:function(x){var M,R=this;x.target.tagName&&(M=x.target.tagName.toLowerCase()),this.dispatch(function(L){var F=x.target===L.keyboardDOM||x.target&&L.keyboardDOM.contains(x.target);R.options.syncInstanceInputs&&Array.isArray(x.path)&&(F=x.path.some(function(q){var j;return q==null||(j=q.hasAttribute)===null||j===void 0?void 0:j.call(q,"data-skInstance")})),(M==="textarea"||M==="input"&&["text","search","url","tel","password"].includes(x.target.type))&&!L.options.disableCaretPositioning?(L.setCaretPosition(x.target.selectionStart,x.target.selectionEnd),R.activeInputElement=x.target,L.options.debug&&console.log("Caret at: ",L.getCaretPosition(),L.getCaretPositionEnd(),x&&x.target.tagName.toLowerCase(),"(".concat(L.keyboardDOMClass,")"))):!L.options.disableCaretPositioning&&F||(x==null?void 0:x.type)==="selectionchange"||(L.setCaretPosition(null),R.activeInputElement=null,L.options.debug&&console.log('Caret position reset due to "'.concat(x==null?void 0:x.type,'" event'),x))})}},{key:"recurseButtons",value:function(x){var M=this;x&&Object.keys(this.buttonElements).forEach(function(R){return M.buttonElements[R].forEach(x)})}},{key:"destroy",value:function(){this.options.debug&&console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName)),document.removeEventListener("keyup",this.handleKeyUp),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener("touchend",this.handleTouchEnd),document.removeEventListener("select",this.handleSelect),document.removeEventListener("selectionchange",this.handleSelectionChange),document.onpointerup=null,document.ontouchend=null,document.ontouchcancel=null,document.onmouseup=null,this.recurseButtons(function(x){x&&(x.onpointerdown=null,x.onpointerup=null,x.onpointercancel=null,x.ontouchstart=null,x.ontouchend=null,x.ontouchcancel=null,x.onclick=null,x.onmousedown=null,x.onmouseup=null,x.remove(),x=null)}),this.keyboardDOM.onpointerdown=null,this.keyboardDOM.ontouchstart=null,this.keyboardDOM.onmousedown=null,this.resetRows(),this.candidateBox&&(this.candidateBox.destroy(),this.candidateBox=null),this.activeInputElement=null,this.keyboardDOM.removeAttribute("data-skInstance"),this.keyboardDOM.innerHTML="",window.SimpleKeyboardInstances[this.currentInstanceName]=null,delete window.SimpleKeyboardInstances[this.currentInstanceName],this.initialized=!1}},{key:"getButtonThemeClasses",value:function(x){var M=this.options.buttonTheme,R=[];return Array.isArray(M)&&M.forEach(function(L){if(L&&L.class&&typeof L.class=="string"&&L.buttons&&typeof L.buttons=="string"){var F=L.class.split(" ");L.buttons.split(" ").includes(x)&&(R=[].concat(b(R),b(F)))}else console.warn('Incorrect "buttonTheme". Please check the documentation.',L)}),R}},{key:"setDOMButtonAttributes",value:function(x,M){var R=this.options.buttonAttributes;Array.isArray(R)&&R.forEach(function(L){L.attribute&&typeof L.attribute=="string"&&L.value&&typeof L.value=="string"&&L.buttons&&typeof L.buttons=="string"?L.buttons.split(" ").includes(x)&&M(L.attribute,L.value):console.warn('Incorrect "buttonAttributes". Please check the documentation.',L)})}},{key:"onTouchDeviceDetected",value:function(){this.processAutoTouchEvents(),this.disableContextualWindow()}},{key:"disableContextualWindow",value:function(){window.oncontextmenu=function(x){if(x.target.classList.contains("hg-button"))return x.preventDefault(),x.stopPropagation(),!1}}},{key:"processAutoTouchEvents",value:function(){this.options.autoUseTouchEvents&&(this.options.useTouchEvents=!0,this.options.debug&&console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."))}},{key:"onInit",value:function(){this.options.debug&&console.log("".concat(this.keyboardDOMClass," Initialized")),this.setEventListeners(),typeof this.options.onInit=="function"&&this.options.onInit(this)}},{key:"beforeFirstRender",value:function(){this.utilities.isTouchDevice()&&this.onTouchDeviceDetected(),typeof this.options.beforeFirstRender=="function"&&this.options.beforeFirstRender(this),this.isFirstKeyboardInstance&&this.utilities.pointerEventsSupported()&&!this.options.useTouchEvents&&!this.options.useMouseEvents&&this.options.debug&&console.log("Using PointerEvents as it is supported by this browser"),this.options.useTouchEvents&&this.options.debug&&console.log("useTouchEvents has been enabled. Only touch events will be used.")}},{key:"beforeRender",value:function(){typeof this.options.beforeRender=="function"&&this.options.beforeRender(this)}},{key:"onRender",value:function(){typeof this.options.onRender=="function"&&this.options.onRender(this)}},{key:"onModulesLoaded",value:function(){typeof this.options.onModulesLoaded=="function"&&this.options.onModulesLoaded(this)}},{key:"loadModules",value:function(){var x=this;Array.isArray(this.options.modules)&&(this.options.modules.forEach(function(M){var R=new M(x);R.init&&R.init(x)}),this.keyboardPluginClasses="modules-loaded",this.render(),this.onModulesLoaded())}},{key:"getModuleProp",value:function(x,M){return!!this.modules[x]&&this.modules[x][M]}},{key:"getModulesList",value:function(){return Object.keys(this.modules)}},{key:"parseRowDOMContainers",value:function(x,M,R,L){var F=this,q=Array.from(x.children),j=0;return q.length&&R.forEach(function(W,D){var C=L[D];if(!(C&&C>W))return!1;var P=W-j,O=C-j,B=document.createElement("div");B.className+="hg-button-container";var G="".concat(F.options.layoutName,"-r").concat(M,"c").concat(D);B.setAttribute("data-skUID",G);var Y=q.splice(P,O-P+1);j=O-P,Y.forEach(function(H){return B.appendChild(H)}),q.splice(P,0,B),x.innerHTML="",q.forEach(function(H){return x.appendChild(H)}),F.options.debug&&console.log("rowDOMContainer",Y,P,O,j+1)}),x}},{key:"render",value:function(){var x=this;this.resetRows(),this.initialized||this.beforeFirstRender(),this.beforeRender();var M="hg-layout-".concat(this.options.layoutName),R=this.options.layout||{default:["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} q w e r t y u i o p [ ] \\","{lock} a s d f g h j k l ; ' {enter}","{shift} z x c v b n m , . / {shift}",".com @ {space}"],shift:["~ ! @ # $ % ^ & * ( ) _ + {bksp}","{tab} Q W E R T Y U I O P { } |",'{lock} A S D F G H J K L : " {enter}',"{shift} Z X C V B N M < > ? {shift}",".com @ {space}"]},L=this.options.useTouchEvents||!1,F=L?"hg-touch-events":"",q=this.options.useMouseEvents||!1,j=this.options.disableRowButtonContainers;this.keyboardDOM.className=this.getKeyboardClassString(this.options.theme,M,this.keyboardPluginClasses,F),this.keyboardDOM.setAttribute("data-skInstance",this.currentInstanceName),this.keyboardRowsDOM=document.createElement("div"),this.keyboardRowsDOM.className="hg-rows",R[this.options.layoutName||this.defaultName].forEach(function(W,D){var C=W.split(" ");x.options.excludeFromLayout&&x.options.excludeFromLayout[x.options.layoutName||x.defaultName]&&(C=C.filter(function(G){return x.options.excludeFromLayout&&!x.options.excludeFromLayout[x.options.layoutName||x.defaultName].includes(G)}));var P=document.createElement("div");P.className+="hg-row";var O=[],B=[];C.forEach(function(G,Y){var H,te=!j&&typeof G=="string"&&G.length>1&&G.indexOf("[")===0,ue=!j&&typeof G=="string"&&G.length>1&&G.indexOf("]")===G.length-1;te&&(O.push(Y),G=G.replace(/\[/g,"")),ue&&(B.push(Y),G=G.replace(/\]/g,""));var _e=x.utilities.getButtonClass(G),J=x.utilities.getButtonDisplayName(G,x.options.display,x.options.mergeDisplay),re=x.options.useButtonTag?"button":"div",pe=document.createElement(re);pe.className+="hg-button ".concat(_e),(H=pe.classList).add.apply(H,b(x.getButtonThemeClasses(G))),x.setDOMButtonAttributes(G,function(ye,$e){pe.setAttribute(ye,$e)}),x.activeButtonClass="hg-activeButton",!x.utilities.pointerEventsSupported()||L||q?L?(pe.ontouchstart=function(ye){x.handleButtonClicked(G,ye),x.handleButtonMouseDown(G,ye)},pe.ontouchend=function(ye){x.handleButtonMouseUp(G,ye)},pe.ontouchcancel=function(ye){x.handleButtonMouseUp(G,ye)}):(pe.onclick=function(ye){x.setMouseHold(!1),typeof x.options.onKeyReleased!="function"&&x.handleButtonClicked(G,ye)},pe.onmousedown=function(ye){typeof x.options.onKeyReleased!="function"||x.isMouseHold||x.handleButtonClicked(G,ye),x.handleButtonMouseDown(G,ye)},pe.onmouseup=function(ye){x.handleButtonMouseUp(G,ye)}):(pe.onpointerdown=function(ye){x.handleButtonClicked(G,ye),x.handleButtonMouseDown(G,ye)},pe.onpointerup=function(ye){x.handleButtonMouseUp(G,ye)},pe.onpointercancel=function(ye){x.handleButtonMouseUp(G,ye)}),pe.setAttribute("data-skBtn",G);var we="".concat(x.options.layoutName,"-r").concat(D,"b").concat(Y);pe.setAttribute("data-skBtnUID",we);var me=document.createElement("span");me.innerHTML=J,pe.appendChild(me),x.buttonElements[G]||(x.buttonElements[G]=[]),x.buttonElements[G].push(pe),P.appendChild(pe)}),P=x.parseRowDOMContainers(P,D,O,B),x.keyboardRowsDOM.appendChild(P)}),this.keyboardDOM.appendChild(this.keyboardRowsDOM),this.onRender(),this.initialized||(this.initialized=!0,!this.utilities.pointerEventsSupported()||L||q?L?(document.ontouchend=function(W){return x.handleButtonMouseUp(void 0,W)},document.ontouchcancel=function(W){return x.handleButtonMouseUp(void 0,W)},this.keyboardDOM.ontouchstart=function(W){return x.handleKeyboardContainerMouseDown(W)}):L||(document.onmouseup=function(W){return x.handleButtonMouseUp(void 0,W)},this.keyboardDOM.onmousedown=function(W){return x.handleKeyboardContainerMouseDown(W)}):(document.onpointerup=function(W){return x.handleButtonMouseUp(void 0,W)},this.keyboardDOM.onpointerdown=function(W){return x.handleKeyboardContainerMouseDown(W)}),this.onInit())}}])&&function(x,M){for(var R=0;R<M.length;R++){var L=M[R];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(x,L.key,L)}}(N.prototype,U),Object.defineProperty(N,"prototype",{writable:!1}),A}()}(),u}()},typeof n=="object"&&typeof i=="object"?i.exports=r():typeof n=="object"?n.SimpleKeyboard=r():this.SimpleKeyboard=r()},{}],17:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Build=void 0,n.Build={short:"0.73.9",version:"0.73.9 (2b193a42bb8728577711b215f2ee7fa1)",buildSeed:1673510059952}},{}],18:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.deprecatedButton=n.createButton=void 0;const r=e("../dom/keys"),o=e("../dom/pointer"),a=function(){const m={};for(const y of Object.keys(r.namedKeyCodes))m[r.namedKeyCodes[y]]=y.substr(4,2);return m}();function c(m,y,_){const b=Math.round(.6*_),w=Math.round(.5*_),T=Math.max(1,Math.round(_/20)),E=g[m.toLowerCase()],k=E===void 0?m:"",S=u("emulator-button-touch-zone"),A=u("emulator-button"),N=u("emulator-button-text",E===void 0?k===void 0||k.length===0?"□":k.substr(0,1).toUpperCase():"");E!==void 0&&(A.style.backgroundImage='url("'+E+'")'),A.style.width=b+"px",A.style.height=b+"px",N.style.fontSize=w+"px",S.widthPx=_-2*T,S.heightPx=_-2*T,S.style.width=S.widthPx+"px",S.style.height=S.heightPx+"px",S.style.borderWidth=T+"px",S.appendChild(A),S.appendChild(N);const U=L=>{y.onDown!==void 0&&y.onDown(),y.onClick!==void 0&&y.onClick(),L.stopPropagation(),L.preventDefault()},x=L=>{y.onUp!==void 0&&y.onUp(),L.stopPropagation(),L.preventDefault()},M=L=>{L.stopPropagation(),L.preventDefault()},R={capture:!0};for(const L of o.pointer.starters)S.addEventListener(L,U,R);for(const L of o.pointer.enders)S.addEventListener(L,x,R);for(const L of o.pointer.changers)S.addEventListener(L,M,R);for(const L of o.pointer.leavers)S.addEventListener(L,M,R);for(const L of o.pointer.prevents)S.addEventListener(L,M,R);return S}function u(m,y){const _=document.createElement("div");return _.className=m,y!==void 0&&(_.innerHTML=y),_}function l(m){return typeof m=="number"?a[m]:m}function d(m,y){return m.action==="click"?{onClick:()=>y.fireKeyPress(m.mapTo)}:{onDown:()=>y.fireKeyDown(m.mapTo),onUp:()=>y.fireKeyUp(m.mapTo)}}n.createButton=c,n.deprecatedButton=function(m,y,_,b){const w=Math.round(b/4),T=[];for(const E of _){if(E.mapTo===r.KBD_NONE)continue;const k=c((E.symbol||l(E.mapTo)).toUpperCase(),d(E,m),b);k.style.position="absolute";const S=E.style;if(S)for(const A of Object.keys(S))k.style[A]=S[A];if(E.position!==void 0){const A=E.position.left,N=E.position.top,U=E.position.bottom,x=E.position.right;A!==void 0&&(k.style.left=w*A+b*(A-1)+"px"),x!==void 0&&(k.style.right=w*x+b*(x-1)+"px"),N!==void 0&&(k.style.top=w*N+b*(N-1)+"px"),U!==void 0&&(k.style.bottom=w*U+b*(U-1)+"px")}m.mouseOverlay.appendChild(k),T.push(k)}return()=>{for(const E of T)E.parentElement===m.mouseOverlay&&m.mouseOverlay.removeChild(E)}};const s="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19,12c-0.3,0-0.5,0.1-0.7,0.3L14,16.6V3c0-0.5-0.4-1-1-1s-1,0.5-1,1v13.6 l-4.3-4.3C7.5,12.1,7.3,12,7,12c-0.5,0-1,0.4-1,1c0,0.3,0.1,0.5,0.3,0.7l6,6c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6-6 c0.2-0.2,0.3-0.4,0.3-0.7C20,12.4,19.5,12,19,12L19,12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",f="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='left_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,9H4.41l4.29-4.29C8.89,4.53,9,4.28,9,4c0-0.55-0.45-1-1-1 C7.72,3,7.47,3.11,7.29,3.29l-6,6C1.11,9.47,1,9.72,1,10c0,0.28,0.11,0.53,0.29,0.71l6,6C7.47,16.89,7.72,17,8,17 c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,11H18c0.55,0,1-0.45,1-1C19,9.45,18.55,9,18,9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",p="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='right_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.71,9.29l-6-6C12.53,3.11,12.28,3,12,3c-0.55,0-1,0.45-1,1 c0,0.28,0.11,0.53,0.29,0.71L15.59,9H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h13.59l-4.29,4.29C11.11,15.47,11,15.72,11,16 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l6-6C18.89,10.53,19,10.28,19,10C19,9.72,18.89,9.47,18.71,9.29z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",v="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='key_enter_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,2c-0.55,0-1,0.45-1,1v5c0,2.21-1.79,4-4,4H4.41l2.29-2.29 C6.89,9.53,7,9.28,7,9c0-0.55-0.45-1-1-1C5.72,8,5.47,8.11,5.29,8.29l-4,4C1.11,12.47,1,12.72,1,13c0,0.28,0.11,0.53,0.29,0.71 l4,4C5.47,17.89,5.72,18,6,18c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,14H13c3.31,0,6-2.69,6-6V3C19,2.45,18.55,2,18,2 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",g={fullscreen:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='maximize_1_' fill='%23FFFFFF'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",save:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' fill='%23FFFFFF' xml:space='preserve'%3E%3Cg id='floppy_disk'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",options:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='cog_2_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19,8h-2.31c-0.14-0.46-0.33-0.89-0.56-1.3l1.7-1.7c0.39-0.39,0.39-1.02,0-1.41 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.7,1.7c-0.41-0.22-0.84-0.41-1.3-0.55V1c0-0.55-0.45-1-1-1H9C8.45,0,8,0.45,8,1v2.33 C7.52,3.47,7.06,3.67,6.63,3.91L5,2.28c-0.37-0.37-0.98-0.37-1.36,0L2.28,3.64C1.91,4.02,1.91,4.63,2.28,5l1.62,1.62 C3.66,7.06,3.46,7.51,3.31,8H1C0.45,8,0,8.45,0,9v2c0,0.55,0.45,1,1,1h2.31c0.14,0.46,0.33,0.89,0.56,1.3L2.17,15 c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l1.7-1.7c0.41,0.22,0.84,0.41,1.3,0.55V19c0,0.55,0.45,1,1,1h2 c0.55,0,1-0.45,1-1v-2.33c0.48-0.14,0.94-0.35,1.37-0.59L15,17.72c0.37,0.37,0.98,0.37,1.36,0l1.36-1.36 c0.37-0.37,0.37-0.98,0-1.36l-1.62-1.62c0.24-0.43,0.45-0.89,0.6-1.38H19c0.55,0,1-0.45,1-1V9C20,8.45,19.55,8,19,8z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",keyboard:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='manually_entered_data_2_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' clip-rule='evenodd' d='M1,8h3.76l2-2H1C0.45,6,0,6.45,0,7C0,7.55,0.45,8,1,8z M15.49,3.99 C15.8,3.67,16,3.23,16,2.75C16,1.78,15.22,1,14.25,1c-0.48,0-0.92,0.2-1.24,0.51l-1.44,1.44l2.47,2.47L15.49,3.99z M1,4h7.76l2-2 H1C0.45,2,0,2.45,0,3C0,3.55,0.45,4,1,4z M1,10c-0.55,0-1,0.45-1,1c0,0.48,0.35,0.86,0.8,0.96L2.76,10H1z M10.95,3.57l-6.69,6.69 l2.47,2.47l6.69-6.69L10.95,3.57z M15.2,6.04L13.24,8H15c0.55,0,1-0.45,1-1C16,6.52,15.65,6.14,15.2,6.04z M2,15l3.86-1.39 l-2.46-2.44L2,15z M15,10h-3.76l-2,2H15c0.55,0,1-0.45,1-1C16,10.45,15.55,10,15,10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",up:"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19.7,8.3l-6-6C13.5,2.1,13.3,2,13,2s-0.5,0.1-0.7,0.3l-6,6C6.1,8.5,6,8.7,6,9 c0,0.6,0.5,1,1,1c0.3,0,0.5-0.1,0.7-0.3L12,5.4V19c0,0.5,0.4,1,1,1s1-0.5,1-1V5.4l4.3,4.3C18.5,9.9,18.7,10,19,10c0.5,0,1-0.4,1-1 C20,8.7,19.9,8.5,19.7,8.3L19.7,8.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",down:s,do:s,dw:s,dwn:s,left:f,le:f,lft:f,right:p,ri:p,rght:p,rgh:p,enter:v,en:v,enr:v,ent:v,entr:v}},{"../dom/keys":32,"../dom/pointer":36}],19:[function(e,i,n){function r(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(n,"__esModule",{value:!0}),n.getGrid=void 0,n.getGrid=function(o){switch(o){case"square":return new class{constructor(){r(this,"aspect",.625)}getConfiguration(a,c){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;const l=this.getCols(),d=this.getRows(),s=Math.floor(l/2),f=Math.floor(d/2),p=5*a/100/2,v=p,g=(a-2*p)/l*u,m=(c-2*v)/d*u,y=Math.min(g,m),_=[];for(let b=0;b<d;++b){const w=[];for(let T=0;T<l;++T)w.push({centerX:T<s?p+y*(T+.5):a-p-y*(l-T-1+.5),centerY:b<f?v+y*(b+.5):c-v-y*(d-b-1+.5)});_.push(w)}return{gridType:"square",cells:_,columnWidth:y,rowHeight:y,columnsPadding:p,rowsPadding:v,width:a,height:c}}getCols(){return 10}getRows(){return Math.floor(this.getCols()*this.aspect)+1}};case"honeycomb":return new class{constructor(){r(this,"aspect",.625)}getConfiguration(a,c){let u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;const l=this.getCols(),d=this.getRows(),s=Math.floor(l/2),f=Math.floor(d/2),p=5*a/100/2,v=p,g=(a-2*p)/l*u,m=(c-2*v)/d*u,y=Math.min(g,m),_=[];for(let b=0;b<d;++b){const w=[],T=b%2==0?l:l-1,E=b%2==0?0:y/2;for(let k=0;k<T;++k)w.push({centerX:k<s?E+p+y*(k+.5):E+a-p-y*(l-k-1+.5),centerY:b<f?v+y*(b+.5):c-v-y*(d-b-1+.5)});_.push(w)}return{gridType:"honeycomb",cells:_,columnWidth:y,rowHeight:y,columnsPadding:p,rowsPadding:v,width:a,height:c}}getCols(){return 10}getRows(){return Math.floor(this.getCols()*this.aspect)+1}}}throw new Error("Unknown grid type "+o)}},{}],20:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.keyboard=void 0,n.keyboard=function(r,o,a){const c=a||{};function u(l){return c[l]!==void 0?c[l]:l}return r.setOnKeyDown(l=>{o.sendKeyEvent(u(l),!0)}),r.setOnKeyUp(l=>{o.sendKeyEvent(u(l),!1)}),r.setOnKeyPress(l=>{o.simulateKeyPress(u(l))}),r.setOnKeysPress(l=>{o.simulateKeyPress(...l)}),()=>{r.setOnKeyDown(l=>{}),r.setOnKeyUp(l=>{}),r.setOnKeyPress(l=>{}),r.setOnKeysPress(l=>{})}}},{}],21:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.extractLayersConfig=void 0,n.extractLayersConfig=function(r){return r.layersConfig!==void 0?(r.layersConfig.version===1&&function(o){for(const a of o.layers)for(const c of a.controls)if(c.type==="Key"){const u=c;typeof u.mapTo=="number"&&(u.mapTo=[u.mapTo])}}(r.layersConfig),r.layersConfig):r.layers!==void 0?r.layers:null}},{}],22:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.initLayersControl=void 0;const r=e("./grid"),o=e("./button"),a=e("./keyboard"),c=e("./mouse/mouse-common"),u=e("./options"),l=e("../dom/pointer"),d=e("nipplejs");n.initLayersControl=function(m,y,_,b,w,T,E){let k=y.layers[0];if(E!==void 0){for(const S of y.layers)if(S.title===E){k=S;break}}return function(S,A,N,U,x,M){const R=(0,a.keyboard)(A,N),L=(0,c.mouse)(U.autolock,U.sensitivity,A,N),F=[];function q(j,W){var D;for(const G of F)G();F.splice(0,F.length);const C=(0,r.getGrid)(S.grid).getConfiguration(j,W,M),P=new s;for(const G of S.controls){const{row:Y,column:H,type:te}=G;te==="NippleActivator"&&g(C,Y,H)}let O=-1;if(((D=A.options.optionControls)===null||D===void 0?void 0:D.length)===0)for(const G of S.controls){const{row:Y,type:H}=G;if(H==="Options"){O=Y;break}}const B={};if(x)for(const G of S.controls){const{row:Y}=G;let H=G.column;const te=C.cells[Y].length,ue=te/2;Y===O&&H>=ue&&(H=Math.min(H+1,te-1)),B[Y]===void 0&&(B[Y]={leftStart:ue,leftEnd:0,rightStart:te-1,rightEnd:ue}),H<ue?(B[Y].leftStart=Math.min(B[Y].leftStart,H),B[Y].leftEnd=Math.max(B[Y].leftEnd,H)):(B[Y].rightStart=Math.min(B[Y].rightStart,H),B[Y].rightEnd=Math.max(B[Y].rightEnd,H))}for(const G of S.controls){const Y=f[G.type];if(Y===void 0){console.error("Factory for control '"+G.type+"' is not defined");continue}const H={...G},te=C.cells[G.row].length,ue=te/2;if(O===G.row&&G.column>=ue&&(H.column=Math.min(H.column+1,te-1)),x){const{leftStart:J,leftEnd:re,rightStart:pe,rightEnd:we}=B[H.row],me=H.column<ue;me?H.column+=ue+(ue-re)-J-1:H.column-=ue+(pe-ue)-(te-we)+1,H.column>=te?(console.error("Column",H.column,"is out of bound",te,me?"[leftSide]":"[rightSide]",B),H.column=te-1):H.column<0&&(console.error("Column",H.column,"is out of bound",0,me?"[leftSide]":"[rightSide]",B),H.column=0)}const _e=Y(H,A,N,C,P,U);F.push(_e)}}return A.addOnResize(q),q(A.width,A.height),()=>{A.removeOnResize(q),R(),L();for(const j of F)j()}}(k,m,_,b,w,T)};class s{constructor(){var y,_;_={},(y="sensors")in this?Object.defineProperty(this,y,{value:_,enumerable:!0,configurable:!0,writable:!0}):this[y]=_}activate(y,_){const b=this.sensors[_+"_"+y];b!==void 0&&b.activate()}deactivate(y,_){const b=this.sensors[_+"_"+y];b!==void 0&&b.deactivate()}register(y,_,b){this.sensors[_+"_"+y]=b}}const f={Key:function(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A}=m,{centerX:N,centerY:U}=E[S][A],x={onDown:()=>{for(const R of m.mapTo)_.sendKeyEvent(R,!0)},onUp:()=>{for(const R of m.mapTo)_.sendKeyEvent(R,!1)}};if(w.register(S,A,{activate:x.onDown,deactivate:x.onUp}),v(b,S,A))return()=>{};const M=(0,o.createButton)(m.symbol,x,k);return M.style.position="absolute",M.style.left=N-M.widthPx/2+"px",M.style.top=U-M.heightPx/2+"px",y.mouseOverlay.appendChild(M),()=>y.mouseOverlay.removeChild(M)},Options:function(m,y,_,b,w,T){var E;if(((E=y.options.optionControls)===null||E===void 0?void 0:E.length)===0)return()=>{};if(y.options.optionControls!==void 0&&y.options.optionControls.length===1&&y.options.optionControls[0]==="keyboard")return p(m,y,_,b);const{cells:k,columnWidth:S,rowHeight:A}=b,{row:N,column:U}=m,{centerX:x,centerY:M}=k[N][U],R=M-A/2,L=x-S/2,F=b.width-L-S;return(0,u.options)(y,["default"],()=>{},S,R,F)},Keyboard:p,Switch:function(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A}=m,{centerX:N,centerY:U}=E[S][A],x=(0,o.createButton)(m.symbol,{onUp:()=>T.setLayersConfig(T.getLayersConfig(),m.layerName)},k);return x.style.position="absolute",x.style.left=N-x.widthPx/2+"px",x.style.top=U-x.heightPx/2+"px",y.mouseOverlay.appendChild(x),()=>{y.mouseOverlay.removeChild(x)}},ScreenMove:function(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A}=m,{centerX:N,centerY:U}=E[S][A];let x=.5,M=.5;m.direction.indexOf("up")>=0&&(M=0),m.direction.indexOf("down")>=0&&(M=1),m.direction.indexOf("left")>=0&&(x=0),m.direction.indexOf("right")>=0&&(x=1);const R={onDown:()=>{_.sendMouseMotion(x,M)},onUp:()=>{_.sendMouseMotion(.5,.5)}};if(w.register(S,A,{activate:R.onDown,deactivate:R.onUp}),v(b,S,A))return()=>{};const L=(0,o.createButton)(m.symbol,R,k);return L.style.position="absolute",L.style.left=N-L.widthPx/2+"px",L.style.top=U-L.heightPx/2+"px",y.mouseOverlay.appendChild(L),()=>y.mouseOverlay.removeChild(L)},PointerButton:function(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A,click:N}=m,{centerX:U,centerY:x}=E[S][A],M={onDown:()=>{N?_.sendMouseButton(m.button,!0):y.pointerButton=m.button},onUp:()=>{N?_.sendMouseButton(m.button,!1):y.pointerButton=0}};if(w.register(S,A,{activate:M.onDown,deactivate:M.onUp}),v(b,S,A))return()=>{};const R=(0,o.createButton)(m.symbol,M,k);return R.style.position="absolute",R.style.left=U-R.widthPx/2+"px",R.style.top=x-R.heightPx/2+"px",y.mouseOverlay.appendChild(R),()=>y.mouseOverlay.removeChild(R)},PointerMove:function(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A,x:N,y:U}=m,{centerX:x,centerY:M}=E[S][A],R={onDown:()=>{_.sendMouseMotion(N,U)},onUp:()=>{_.sendMouseMotion(N,U)}};if(w.register(S,A,{activate:R.onDown,deactivate:R.onUp}),v(b,S,A))return()=>{};const L=(0,o.createButton)(m.symbol,R,k);return L.style.position="absolute",L.style.left=x-L.widthPx/2+"px",L.style.top=M-L.heightPx/2+"px",y.mouseOverlay.appendChild(L),()=>y.mouseOverlay.removeChild(L)},PointerReset:function(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A}=m,{centerX:N,centerY:U}=E[S][A],x={onDown:()=>{_.sendMouseSync()}};if(w.register(S,A,{activate:x.onDown,deactivate:()=>{}}),v(b,S,A))return()=>{};const M=(0,o.createButton)(m.symbol,x,k);return M.style.position="absolute",M.style.left=N-M.widthPx/2+"px",M.style.top=U-M.heightPx/2+"px",y.mouseOverlay.appendChild(M),()=>y.mouseOverlay.removeChild(M)},PointerToggle:function(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A}=m,{centerX:N,centerY:U}=E[S][A],x={onDown:()=>{y.pointerDisabled=!y.pointerDisabled,y.pointerDisabled?M.classList.contains("emulator-button-highlight")||M.classList.add("emulator-button-highlight"):M.classList.remove("emulator-button-highlight")}};if(w.register(S,A,{activate:x.onDown,deactivate:()=>{}}),v(b,S,A))return()=>{};const M=(0,o.createButton)(m.symbol,x,k);return M.style.position="absolute",M.style.left=N-M.widthPx/2+"px",M.style.top=U-M.heightPx/2+"px",y.mouseOverlay.appendChild(M),()=>y.mouseOverlay.removeChild(M)},NippleActivator:function(m,y,_,b,w,T){const{cells:E,columnWidth:k,rowHeight:S,width:A,height:N}=b,{row:U,column:x}=m,{centerX:M,centerY:R}=E[U][x],L=document.createElement("div"),F=1.5,q=Math.max(0,M-k*F),j=Math.max(0,R-S*F),W=Math.max(0,A-M-k*F),D=Math.max(0,N-R-S*F);L.style.position="absolute",L.style.zIndex="999",L.style.left=q+"px",L.style.top=j+"px",L.style.right=W+"px",L.style.bottom=D+"px",y.mouseOverlay.appendChild(L);const C=d.create({zone:L,multitouch:!1,maxNumberOfNipples:1,mode:"static",follow:!1,dynamicPage:!0,size:1.5*Math.max(k,S),position:{left:(A-W-q)/2+"px",top:(N-D-j)/2+"px"}});let P=-1,O=-1;C.on("move",(H,te)=>{if(te.distance<10)return w.deactivate(O,P),P=-1,void(O=-1);let ue=-1,_e=-1;const J=te.angle.degree;J>22.5&&J<=67.5?(ue=x+1,_e=U-1):J>67.5&&J<=112.5?(ue=x,_e=U-1):J>112.5&&J<=157.5?(ue=x-1,_e=U-1):J>157.5&&J<=202.5?(ue=x-1,_e=U):J>202.5&&J<=247.5?(ue=x-1,_e=U+1):J>247.5&&J<=292.5?(ue=x,_e=U+1):J>292.5&&J<=337.5?(ue=x+1,_e=U+1):(ue=x+1,_e=U),P===ue&&O===_e||(w.deactivate(O,P),w.activate(_e,ue),P=ue,O=_e)});let B=!1;C.on("start",()=>{B=!0}),C.on("end",()=>{B=!1,w.deactivate(O,P),O=-1,P=-1});const G={capture:!0};function Y(H){B&&C.processOnEnd(H)}for(const H of l.pointer.enders)y.mouseOverlay.addEventListener(H,Y,G);return()=>{C.destroy(),y.mouseOverlay.removeChild(L);for(const H of l.pointer.enders)y.mouseOverlay.removeEventListener(H,Y,G)}}};function p(m,y,_,b,w,T){const{cells:E,columnWidth:k}=b,{row:S,column:A}=m,{centerX:N,centerY:U}=E[S][A],x=(0,o.createButton)("keyboard",{onUp:()=>y.toggleKeyboard()},k),M=R=>{R?x.children[0].classList.add("emulator-control-close-icon"):x.children[0].classList.remove("emulator-control-close-icon")};return y.setOnKeyboardVisibility(M),x.style.position="absolute",x.style.left=N-x.widthPx/2+"px",x.style.top=U-x.heightPx/2+"px",y.mouseOverlay.appendChild(x),()=>{y.mouseOverlay.removeChild(x),y.removeOnKeyboardVisibility(M)}}function v(m,y,_){return m.cells[y][_].hidden===!0}function g(m,y,_){function b(w,T){if((w!==y||T!==_)&&w>=0&&w<m.cells.length){const E=m.cells[w];T>=0&&T<E.length&&(E[T].hidden=!0)}}for(let w=y-1;w<=y+1;++w)for(let T=_-1;T<=_+1;++T)b(w,T)}},{"../dom/pointer":36,"./button":18,"./grid":19,"./keyboard":20,"./mouse/mouse-common":24,"./options":30,nipplejs:14}],23:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.initLegacyLayersControl=void 0;const r=e("./button"),o=e("./mouse/mouse-common"),a=e("./nipple"),c=e("./options"),u=e("./keyboard");n.initLegacyLayersControl=function(l,d,s,f){var p;const v=Object.keys(s),g={keyboard:()=>{},mouse:()=>{},gestures:()=>{},buttons:()=>{}},m=_=>{g.keyboard(),g.mouse(),g.gestures(),g.buttons(),g.keyboard=()=>{},g.mouse=()=>{},g.gestures=()=>{},g.buttons=()=>{};const b=s[_];b!==void 0&&(g.keyboard=(0,u.keyboard)(d,f,b.mapper),b.gestures!==void 0&&b.gestures.length>0?g.gestures=(0,a.nipple)(d,f,b.gestures):g.mouse=(0,o.mouse)(l.autolock,l.sensitivity,d,f),b.buttons!==void 0&&b.buttons.length&&(g.buttons=(0,r.deprecatedButton)(d,f,b.buttons,54)))},y=((p=d.options.optionControls)===null||p===void 0?void 0:p.length)===0?()=>{}:(0,c.options)(d,v,m,54,13.5,0);return m("default"),()=>{g.gestures(),g.buttons(),g.mouse(),g.keyboard(),y()}}},{"./button":18,"./keyboard":20,"./mouse/mouse-common":24,"./nipple":28,"./options":30}],24:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouse=n.mount=n.mapXY=void 0;const r=e("../../dom/pointer"),o=e("./mouse-swipe"),a=e("./mouse-not-locked"),c=e("./mouse-locked");n.mapXY=function(u,l,d,s){const f=d.width(),p=d.height(),v=s.width,g=s.height,m=f/p;let y=v,_=v/m;_>g&&(_=g,y=g*m);const b=(g-_)/2,w=(v-y)/2;let T=Math.max(0,Math.min(1,(u-w)/y)),E=Math.max(0,Math.min(1,(l-b)/_));return T<=.01&&(T=0),T>=.99&&(T=1),E<=.01&&(E=0),E>=.99&&(E=1),{x:T,y:E}},n.mount=function(u,l,d,s,f,p){let v=0;const g=T=>{if(T.target!==u)return;if(l.pointerDisabled)return void T.stopPropagation();const E=(0,r.getPointerState)(T,u);v=E.button||l.pointerButton,d(E.x,E.y,v),T.stopPropagation()},m=T=>{if(T.target!==u)return;if(l.pointerDisabled)return void T.stopPropagation();const E=(0,r.getPointerState)(T,u);s(E.x,E.y,E.mX,E.mY),T.stopPropagation()},y=T=>{if(l.pointerDisabled)return void T.stopPropagation();const E=(0,r.getPointerState)(T,u);f(E.x,E.y,v),T.stopPropagation()},_=T=>{if(T.target!==u)return;if(l.pointerDisabled)return void T.stopPropagation();const E=(0,r.getPointerState)(T,u);p(E.x,E.y),T.stopPropagation()},b=T=>{T.stopPropagation()},w={capture:!1};for(const T of r.pointer.starters)u.addEventListener(T,g,w);for(const T of r.pointer.changers)u.addEventListener(T,m,w);for(const T of r.pointer.enders)u.addEventListener(T,y,w);for(const T of r.pointer.prevents)u.addEventListener(T,b,w);for(const T of r.pointer.leavers)u.addEventListener(T,_,w);return()=>{for(const T of r.pointer.starters)u.removeEventListener(T,g,w);for(const T of r.pointer.changers)u.removeEventListener(T,m,w);for(const T of r.pointer.enders)u.removeEventListener(T,y,w);for(const T of r.pointer.prevents)u.removeEventListener(T,b,w);for(const T of r.pointer.leavers)u.removeEventListener(T,_,w)}},n.mouse=function(u,l,d,s){return u&&!r.pointer.canLock?(0,o.mouseSwipe)(l,d,s):u?(0,c.mouseLocked)(l,d,s):(0,a.mouseNotLocked)(d,s)}},{"../../dom/pointer":36,"./mouse-locked":25,"./mouse-not-locked":26,"./mouse-swipe":27}],25:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouseLocked=void 0;const r=e("./mouse-common");n.mouseLocked=function(o,a,c){const u=a.mouseOverlay;function l(){return document.pointerLockElement!==u}return(0,r.mount)(u,a,function(d,s,f){l()?(u.requestPointerLock||u.mozRequestPointerLock||u.webkitRequestPointerLock).call(u):c.sendMouseButton(f,!0)},function(d,s,f,p){l()||f===0&&p===0||c.sendMouseRelativeMotion(f*o,p*o)},function(d,s,f){l()||c.sendMouseButton(f,!1)},function(d,s){})}},{"./mouse-common":24}],26:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouseNotLocked=void 0;const r=e("./mouse-common");n.mouseNotLocked=function(o,a){const c=o.mouseOverlay,u=(l,d)=>(0,r.mapXY)(l,d,a,o);return document.pointerLockElement===c&&document.exitPointerLock(),(0,r.mount)(c,o,function(l,d,s){const f=u(l,d);a.sendMouseMotion(f.x,f.y),a.sendMouseButton(s,!0)},function(l,d,s,f){const p=u(l,d);a.sendMouseMotion(p.x,p.y)},function(l,d,s){const f=u(l,d);a.sendMouseMotion(f.x,f.y),a.sendMouseButton(s,!1)},function(l,d){const s=u(l,d);a.sendMouseMotion(s.x,s.y)})}},{"./mouse-common":24}],27:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.mouseSwipe=void 0;const r=e("./mouse-common");n.mouseSwipe=function(o,a,c){const u=a.mouseOverlay;let l=-1,d=0,s=0,f=0;return(0,r.mount)(u,a,(p,v)=>{l=Date.now(),d=0,s=p,f=v},function(p,v,g,m){g===void 0&&(g=p-s),m===void 0&&(m=v-f),s=p,f=v,g===0&&m===0||(d+=Math.abs(g)+Math.abs(m),c.sendMouseRelativeMotion(g*o*2,m*o*2))},(p,v)=>{if(Date.now()-l<500&&d<50){const g=a.pointerButton||0;c.sendMouseButton(g,!0),setTimeout(()=>c.sendMouseButton(g,!1),60)}},()=>{})}},{"./mouse-common":24}],28:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.nipple=void 0;const r=e("nipplejs"),o=e("../dom/keys");n.nipple=function(a,c,u){const l=r.create({zone:a.mouseOverlay,multitouch:!0,maxNumberOfNipples:2});let d=-1;const s=()=>{d!==-1&&(a.fireKeyUp(d),d=-1)},f={},p={},v={};for(const m of u)m.event==="end:release"?f[m.joystickId]=!0:m.mapTo!==o.KBD_NONE&&(m.event==="tap"?p[m.joystickId]=m.mapTo:l.on(m.event,()=>{var y;v[m.joystickId]=Date.now(),s(),y=m.mapTo,a.fireKeyDown(y),d=y}));const g={};return l.on("start",()=>{const m=l.ids.length-1;g[m]=Date.now()}),l.on("end",()=>{const m=l.ids.length-1,y=Date.now()-g[m];f[m]===!0&&s(),p[m]&&y<500&&v[m]<g[m]&&a.fireKeyPress(p[m])}),()=>l.destroy()}},{"../dom/keys":32,nipplejs:14}],29:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.initNullLayersControl=void 0;const r=e("./keyboard"),o=e("./mouse/mouse-common"),a=e("./options");n.initNullLayersControl=function(c,u,l){var d;const s=(0,r.keyboard)(u,l),f=(0,o.mouse)(c.autolock,c.sensitivity,u,l),p=((d=u.options.optionControls)===null||d===void 0?void 0:d.length)===0?()=>{}:(0,a.options)(u,["default"],()=>{},54,13.5,0);return()=>{s(),f(),p()}}},{"./keyboard":20,"./mouse/mouse-common":24,"./options":30}],30:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.options=void 0;const r=e("./button"),o=e("../dom/helpers");function a(c,u){if(c.length<=1)return document.createElement("div");const l=document.createElement("select");l.classList.add("emulator-control-select");for(const d of c){const s=document.createElement("option");s.value=d,s.innerHTML=d,l.appendChild(s)}return l.onchange=d=>{const s=d.target.value;u(s)},(0,o.stopPropagation)(l,!1),l}n.options=function(c,u,l,d,s,f){const p=Math.round(d/4);let v=!1,g=!1;const m=()=>{const A=v?"flex":"none";for(const N of _)N!=b&&(N.style.display=A)},y=()=>{v=!v,!v&&g&&c.toggleKeyboard(),m()},_=[a(u,l),(0,r.createButton)("keyboard",{onClick:()=>{c.toggleKeyboard(),v&&!g&&(v=!1,m())}},d),(0,r.createButton)("save",{onClick:()=>{c.save(),v&&y()}},d),(0,r.createButton)("fullscreen",{onClick:()=>{c.toggleFullscreen(),v&&y()}},d),(0,r.createButton)("options",{onClick:y},d)],b=_[_.length-1],w=_[_.length-2].children[0],T=_[_.length-4].children[0],E=A=>{g=A,A?T.classList.add("emulator-control-close-icon"):T.classList.remove("emulator-control-close-icon")};c.setOnKeyboardVisibility(E),E(c.keyboardVisible),c.setOnFullscreen(A=>{A?w.classList.contains("emulator-control-exit-fullscreen-icon")||w.classList.add("emulator-control-exit-fullscreen-icon"):w.classList.remove("emulator-control-exit-fullscreen-icon")}),c.fullscreen&&w.classList.add("emulator-control-exit-fullscreen-icon");const k=(0,o.createDiv)("emulator-options"),S=g?"flex":"none";for(const A of _)A!==b&&A.classList.add("emulator-button-control"),A.style.marginRight=p+"px",A.style.marginBottom=p+"px",A!==b&&(A.style.display=S),k.appendChild(A);return k.style.position="absolute",k.style.right=f+"px",k.style.top=s+"px",c.mouseOverlay.appendChild(k),()=>{c.mouseOverlay.removeChild(k),c.setOnFullscreen(()=>{}),c.removeOnKeyboardVisibility(E)}}},{"../dom/helpers":31,"./button":18}],31:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.stopPropagation=n.createDiv=void 0;const r=e("./pointer");n.createDiv=function(o,a){const c=document.createElement("div");return c.className=o,a!==void 0&&(c.innerHTML=a),c},n.stopPropagation=function(o){let a=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];const c=d=>{d.stopPropagation()},u=d=>{d.stopPropagation(),a&&d.preventDefault()},l={capture:!1};for(const d of r.pointer.starters)o.addEventListener(d,c,l);for(const d of r.pointer.enders)o.addEventListener(d,c,l);for(const d of r.pointer.prevents)o.addEventListener(d,u,l)}},{"./pointer":36}],32:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.KBD_kp0=n.KBD_f12=n.KBD_f11=n.KBD_f10=n.KBD_f9=n.KBD_f8=n.KBD_f7=n.KBD_f6=n.KBD_f5=n.KBD_f4=n.KBD_f3=n.KBD_f2=n.KBD_f1=n.KBD_z=n.KBD_y=n.KBD_x=n.KBD_w=n.KBD_v=n.KBD_u=n.KBD_t=n.KBD_s=n.KBD_r=n.KBD_q=n.KBD_p=n.KBD_o=n.KBD_n=n.KBD_m=n.KBD_l=n.KBD_k=n.KBD_j=n.KBD_i=n.KBD_h=n.KBD_g=n.KBD_f=n.KBD_e=n.KBD_d=n.KBD_c=n.KBD_b=n.KBD_a=n.KBD_9=n.KBD_8=n.KBD_7=n.KBD_6=n.KBD_5=n.KBD_4=n.KBD_3=n.KBD_2=n.KBD_1=n.KBD_0=n.KBD_NONE=void 0,n.KBD_up=n.KBD_left=n.KBD_pagedown=n.KBD_end=n.KBD_delete=n.KBD_pageup=n.KBD_home=n.KBD_insert=n.KBD_pause=n.KBD_printscreen=n.KBD_slash=n.KBD_comma=n.KBD_period=n.KBD_quote=n.KBD_semicolon=n.KBD_rightbracket=n.KBD_leftbracket=n.KBD_backslash=n.KBD_equals=n.KBD_minus=n.KBD_grave=n.KBD_numlock=n.KBD_scrolllock=n.KBD_capslock=n.KBD_rightshift=n.KBD_leftshift=n.KBD_rightctrl=n.KBD_leftctrl=n.KBD_rightalt=n.KBD_leftalt=n.KBD_space=n.KBD_enter=n.KBD_backspace=n.KBD_tab=n.KBD_esc=n.KBD_kpenter=n.KBD_kpplus=n.KBD_kpminus=n.KBD_kpmultiply=n.KBD_kpdivide=n.KBD_kpperiod=n.KBD_kp9=n.KBD_kp8=n.KBD_kp7=n.KBD_kp6=n.KBD_kp5=n.KBD_kp4=n.KBD_kp3=n.KBD_kp2=n.KBD_kp1=void 0,n.domToKeyCode=n.keyCodesToDom=n.namedKeyCodes=n.domToKeyCodes=n.KBD_extra_lt_gt=n.KBD_right=n.KBD_down=void 0,n.KBD_NONE=0,n.KBD_0=48,n.KBD_1=49,n.KBD_2=50,n.KBD_3=51,n.KBD_4=52,n.KBD_5=53,n.KBD_6=54,n.KBD_7=55,n.KBD_8=56,n.KBD_9=57,n.KBD_a=65,n.KBD_b=66,n.KBD_c=67,n.KBD_d=68,n.KBD_e=69,n.KBD_f=70,n.KBD_g=71,n.KBD_h=72,n.KBD_i=73,n.KBD_j=74,n.KBD_k=75,n.KBD_l=76,n.KBD_m=77,n.KBD_n=78,n.KBD_o=79,n.KBD_p=80,n.KBD_q=81,n.KBD_r=82,n.KBD_s=83,n.KBD_t=84,n.KBD_u=85,n.KBD_v=86,n.KBD_w=87,n.KBD_x=88,n.KBD_y=89,n.KBD_z=90,n.KBD_f1=290,n.KBD_f2=291,n.KBD_f3=292,n.KBD_f4=293,n.KBD_f5=294,n.KBD_f6=295,n.KBD_f7=296,n.KBD_f8=297,n.KBD_f9=298,n.KBD_f10=299,n.KBD_f11=300,n.KBD_f12=301,n.KBD_kp0=320,n.KBD_kp1=321,n.KBD_kp2=322,n.KBD_kp3=323,n.KBD_kp4=324,n.KBD_kp5=325,n.KBD_kp6=326,n.KBD_kp7=327,n.KBD_kp8=328,n.KBD_kp9=329,n.KBD_kpperiod=330,n.KBD_kpdivide=331,n.KBD_kpmultiply=332,n.KBD_kpminus=333,n.KBD_kpplus=334,n.KBD_kpenter=335,n.KBD_esc=256,n.KBD_tab=258,n.KBD_backspace=259,n.KBD_enter=257,n.KBD_space=32,n.KBD_leftalt=342,n.KBD_rightalt=346,n.KBD_leftctrl=341,n.KBD_rightctrl=345,n.KBD_leftshift=340,n.KBD_rightshift=344,n.KBD_capslock=280,n.KBD_scrolllock=281,n.KBD_numlock=282,n.KBD_grave=96,n.KBD_minus=45,n.KBD_equals=61,n.KBD_backslash=92,n.KBD_leftbracket=91,n.KBD_rightbracket=93,n.KBD_semicolon=59,n.KBD_quote=39,n.KBD_period=46,n.KBD_comma=44,n.KBD_slash=47,n.KBD_printscreen=283,n.KBD_pause=284,n.KBD_insert=260,n.KBD_home=268,n.KBD_pageup=266,n.KBD_delete=261,n.KBD_end=269,n.KBD_pagedown=267,n.KBD_left=263,n.KBD_up=265,n.KBD_down=264,n.KBD_right=262,n.KBD_extra_lt_gt=348,n.domToKeyCodes={8:n.KBD_backspace,9:n.KBD_tab,13:n.KBD_enter,16:n.KBD_leftshift,17:n.KBD_leftctrl,18:n.KBD_leftalt,19:n.KBD_pause,27:n.KBD_esc,32:n.KBD_space,33:n.KBD_pageup,34:n.KBD_pagedown,35:n.KBD_end,36:n.KBD_home,37:n.KBD_left,38:n.KBD_up,39:n.KBD_right,40:n.KBD_down,45:n.KBD_insert,46:n.KBD_delete,48:n.KBD_0,49:n.KBD_1,50:n.KBD_2,51:n.KBD_3,52:n.KBD_4,53:n.KBD_5,54:n.KBD_6,55:n.KBD_7,56:n.KBD_8,57:n.KBD_9,59:n.KBD_semicolon,64:n.KBD_equals,65:n.KBD_a,66:n.KBD_b,67:n.KBD_c,68:n.KBD_d,69:n.KBD_e,70:n.KBD_f,71:n.KBD_g,72:n.KBD_h,73:n.KBD_i,74:n.KBD_j,75:n.KBD_k,76:n.KBD_l,77:n.KBD_m,78:n.KBD_n,79:n.KBD_o,80:n.KBD_p,81:n.KBD_q,82:n.KBD_r,83:n.KBD_s,84:n.KBD_t,85:n.KBD_u,86:n.KBD_v,87:n.KBD_w,88:n.KBD_x,89:n.KBD_y,90:n.KBD_z,91:n.KBD_leftbracket,93:n.KBD_rightbracket,96:n.KBD_kp0,97:n.KBD_kp1,98:n.KBD_kp2,99:n.KBD_kp3,100:n.KBD_kp4,101:n.KBD_kp5,102:n.KBD_kp6,103:n.KBD_kp7,104:n.KBD_kp8,105:n.KBD_kp9,111:n.KBD_kpdivide,112:n.KBD_f1,113:n.KBD_f2,114:n.KBD_f3,115:n.KBD_f4,116:n.KBD_f5,117:n.KBD_f6,118:n.KBD_f7,119:n.KBD_f8,120:n.KBD_f9,121:n.KBD_f10,122:n.KBD_f11,123:n.KBD_f12,144:n.KBD_numlock,145:n.KBD_scrolllock,173:n.KBD_minus,186:n.KBD_semicolon,187:n.KBD_equals,188:n.KBD_comma,189:n.KBD_minus,190:n.KBD_period,191:n.KBD_slash,219:n.KBD_leftbracket,220:n.KBD_backslash,221:n.KBD_rightbracket},n.namedKeyCodes={KBD_NONE:n.KBD_NONE,KBD_0:n.KBD_0,KBD_1:n.KBD_1,KBD_2:n.KBD_2,KBD_3:n.KBD_3,KBD_4:n.KBD_4,KBD_5:n.KBD_5,KBD_6:n.KBD_6,KBD_7:n.KBD_7,KBD_8:n.KBD_8,KBD_9:n.KBD_9,KBD_a:n.KBD_a,KBD_b:n.KBD_b,KBD_c:n.KBD_c,KBD_d:n.KBD_d,KBD_e:n.KBD_e,KBD_f:n.KBD_f,KBD_g:n.KBD_g,KBD_h:n.KBD_h,KBD_i:n.KBD_i,KBD_j:n.KBD_j,KBD_k:n.KBD_k,KBD_l:n.KBD_l,KBD_m:n.KBD_m,KBD_n:n.KBD_n,KBD_o:n.KBD_o,KBD_p:n.KBD_p,KBD_q:n.KBD_q,KBD_r:n.KBD_r,KBD_s:n.KBD_s,KBD_t:n.KBD_t,KBD_u:n.KBD_u,KBD_v:n.KBD_v,KBD_w:n.KBD_w,KBD_x:n.KBD_x,KBD_y:n.KBD_y,KBD_z:n.KBD_z,KBD_f1:n.KBD_f1,KBD_f2:n.KBD_f2,KBD_f3:n.KBD_f3,KBD_f4:n.KBD_f4,KBD_f5:n.KBD_f5,KBD_f6:n.KBD_f6,KBD_f7:n.KBD_f7,KBD_f8:n.KBD_f8,KBD_f9:n.KBD_f9,KBD_f10:n.KBD_f10,KBD_f11:n.KBD_f11,KBD_f12:n.KBD_f12,KBD_kp0:n.KBD_kp0,KBD_kp1:n.KBD_kp1,KBD_kp2:n.KBD_kp2,KBD_kp3:n.KBD_kp3,KBD_kp4:n.KBD_kp4,KBD_kp5:n.KBD_kp5,KBD_kp6:n.KBD_kp6,KBD_kp7:n.KBD_kp7,KBD_kp8:n.KBD_kp8,KBD_kp9:n.KBD_kp9,KBD_kpperiod:n.KBD_kpperiod,KBD_kpdivide:n.KBD_kpdivide,KBD_kpmultiply:n.KBD_kpmultiply,KBD_kpminus:n.KBD_kpminus,KBD_kpplus:n.KBD_kpplus,KBD_kpenter:n.KBD_kpenter,KBD_esc:n.KBD_esc,KBD_tab:n.KBD_tab,KBD_backspace:n.KBD_backspace,KBD_enter:n.KBD_enter,KBD_space:n.KBD_space,KBD_leftalt:n.KBD_leftalt,KBD_rightalt:n.KBD_rightalt,KBD_leftctrl:n.KBD_leftctrl,KBD_rightctrl:n.KBD_rightctrl,KBD_leftshift:n.KBD_leftshift,KBD_rightshift:n.KBD_rightshift,KBD_capslock:n.KBD_capslock,KBD_scrolllock:n.KBD_scrolllock,KBD_numlock:n.KBD_numlock,KBD_grave:n.KBD_grave,KBD_minus:n.KBD_minus,KBD_equals:n.KBD_equals,KBD_backslash:n.KBD_backslash,KBD_leftbracket:n.KBD_leftbracket,KBD_rightbracket:n.KBD_rightbracket,KBD_semicolon:n.KBD_semicolon,KBD_quote:n.KBD_quote,KBD_period:n.KBD_period,KBD_comma:n.KBD_comma,KBD_slash:n.KBD_slash,KBD_printscreen:n.KBD_printscreen,KBD_pause:n.KBD_pause,KBD_insert:n.KBD_insert,KBD_home:n.KBD_home,KBD_pageup:n.KBD_pageup,KBD_delete:n.KBD_delete,KBD_end:n.KBD_end,KBD_pagedown:n.KBD_pagedown,KBD_left:n.KBD_left,KBD_up:n.KBD_up,KBD_down:n.KBD_down,KBD_right:n.KBD_right,KBD_extra_lt_gt:n.KBD_extra_lt_gt},n.keyCodesToDom={};for(const r of Object.keys(n.domToKeyCodes)){const o=Number.parseInt(r,10);n.keyCodesToDom[n.domToKeyCodes[o]]=o}n.domToKeyCode=function(r){return n.domToKeyCodes[r]||0}},{}],33:[function(e,i,n){function r(f,p,v){return p in f?Object.defineProperty(f,p,{value:v,enumerable:!0,configurable:!0,writable:!0}):f[p]=v,f}Object.defineProperty(n,"__esModule",{value:!0}),n.Layers=n.layers=void 0;const o=e("notyf"),a=function(f){return f&&f.__esModule?f:{default:f}}(e("simple-keyboard")),c=e("./helpers"),u=e("./keys"),l=e("element-resize-detector")({});n.layers=function(f,p){return new d(f,p||{})};class d{constructor(p,v){r(this,"options",void 0),r(this,"root",void 0),r(this,"loading",void 0),r(this,"canvas",void 0),r(this,"video",void 0),r(this,"mouseOverlay",void 0),r(this,"width",void 0),r(this,"height",void 0),r(this,"fullscreen",!1),r(this,"keyboardVisible",!1),r(this,"pointerLock",!1),r(this,"pointerDisabled",!1),r(this,"pointerButton",0),r(this,"notyf",new o.Notyf),r(this,"toggleKeyboard",()=>!1),r(this,"fullscreenElement",void 0),r(this,"clickToStart",void 0),r(this,"loaderText",void 0),r(this,"onResize",void 0),r(this,"onKeyDown",void 0),r(this,"onKeyUp",void 0),r(this,"onKeyPress",void 0),r(this,"onKeysPress",void 0),r(this,"onSave",void 0),r(this,"onSaveStarted",void 0),r(this,"onSaveEnded",void 0),r(this,"onFullscreenChanged",[]),r(this,"onKeyboardChanged",[]),this.options=v,this.root=p,this.root.classList.add("emulator-root"),this.fullscreenElement=v.fullscreenElement||this.root,this.canvas=document.createElement("canvas"),this.canvas.className="emulator-canvas",this.video=document.createElement("video"),this.video.setAttribute("autoplay",""),this.video.setAttribute("playsinline",""),this.video.className="emulator-video",this.loading=(0,c.createDiv)("emulator-loading",`
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
`),this.loaderText=this.loading.querySelector(".emulator-loading-pre-2"),this.mouseOverlay=(0,c.createDiv)("emulator-mouse-overlay",""),this.clickToStart=(0,c.createDiv)("emulator-click-to-start-overlay",`
<div class="emulator-click-to-start-text">Press to start</div>
<div class="emulator-click-to-start-icon"></div>
`),this.clickToStart.onclick=()=>{this.clickToStart.style.display="none",this.video.play()},this.root.appendChild(this.canvas),this.root.appendChild(this.video),this.root.appendChild(this.mouseOverlay),this.root.appendChild(this.clickToStart),this.root.appendChild(this.loading),this.width=p.offsetWidth,this.height=p.offsetHeight,this.onResize=[],this.onKeyDown=()=>{},this.onKeyUp=()=>{},this.onKeyPress=()=>{},this.onKeysPress=()=>{},this.onSave=()=>Promise.reject(new Error("Not implemented")),this.onSaveStarted=()=>{},this.onSaveEnded=()=>{},l.listenTo(this.root,g=>{if(g===p){this.width=g.offsetWidth,this.height=g.offsetHeight;for(const m of this.onResize)m(this.width,this.height)}}),this.initKeyEvents(),this.initKeyboard(),this.preventContextMenu(),this.fullscreenElement.onfullscreenchange=()=>{if(document.fullscreenElement!==this.fullscreenElement){this.fullscreen=!1;for(const g of this.onFullscreenChanged)g(this.fullscreen)}}}initKeyEvents(){const p=this.options.keyboardInputDiv??this.root;p.style.outline="none",p.tabIndex&&p.tabIndex!==-1||(p.tabIndex=0),p.addEventListener("keydown",v=>{const g=(0,u.domToKeyCode)(v.keyCode);this.onKeyDown(g),v.stopPropagation(),v.preventDefault()}),p.addEventListener("keyup",v=>{const g=(0,u.domToKeyCode)(v.keyCode);this.onKeyUp(g),v.stopPropagation(),v.preventDefault()})}preventContextMenu(){this.root.addEventListener("contextmenu",p=>(p.stopPropagation(),p.preventDefault(),!1))}addOnResize(p){this.onResize.push(p)}removeOnResize(p){this.onResize=this.onResize.filter(v=>v!==p)}setOnKeyDown(p){this.onKeyDown=p}fireKeyDown(p){this.onKeyDown(p)}setOnKeyUp(p){this.onKeyUp=p}fireKeyUp(p){this.onKeyUp(p)}setOnKeyPress(p){this.onKeyPress=p}fireKeyPress(p){this.onKeyPress(p)}setOnKeysPress(p){this.onKeysPress=p}fireKeysPress(p){this.onKeysPress(p)}toggleFullscreen(){if(this.fullscreen){this.fullscreen=!1,this.fullscreenElement.classList.contains("emulator-fullscreen-workaround")?this.fullscreenElement.classList.remove("emulator-fullscreen-workaround"):document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen();for(const p of this.onFullscreenChanged)p(!1)}else{this.fullscreen=!0;const p=this.fullscreenElement;p.requestFullscreen?p.requestFullscreen():p.webkitRequestFullscreen?p.webkitRequestFullscreen():p.mozRequestFullScreen?p.mozRequestFullScreen():p.msRequestFullscreen?p.msRequestFullscreen():p.webkitEnterFullscreen?p.webkitEnterFullscreen():this.fullscreenElement.classList.add("emulator-fullscreen-workaround");for(const v of this.onFullscreenChanged)v(!0)}}setOnFullscreen(p){this.onFullscreenChanged.push(p)}removeOnFullscreen(p){this.onFullscreenChanged=this.onFullscreenChanged.filter(v=>v!==p)}setOnKeyboardVisibility(p){this.onKeyboardChanged.push(p)}removeOnKeyboardVisibility(p){this.onKeyboardChanged=this.onKeyboardChanged.filter(v=>v!==p)}save(){return this.onSaveStarted(),this.onSave().then(()=>{this.notyf.success("Saved"),this.onSaveEnded()}).catch(p=>{this.notyf.error(p.message),this.onSaveEnded()})}setOnSave(p){this.onSave=p}getOnSave(){return this.onSave}setOnSaveStarted(p){this.onSaveStarted=p}setOnSaveEnded(p){this.onSaveEnded=p}hideLoadingLayer(){this.loading.style.visibility="hidden"}showLoadingLayer(){this.loading.style.visibility="visible"}setLoadingMessage(p){this.loaderText.innerHTML=p}switchToVideo(){this.video.style.display="block",this.canvas.style.display="none"}showClickToStart(){this.clickToStart.style.display="flex"}initKeyboard(){let p=!1;const v=[{"{esc}":"␛","{bksp}":"⌫","{enter}":"↵","{space}":"Space","{up}":"↑","{down}":"↓","{left}":"←","{right}":"→","{shift}":"⇑","{ctrl}":"Ctrl","{alt}":"Alt","{tab}":"Tab"},{"{esc}":"␛","{bksp}":"⌫","{enter}":"↵","{space}":"Space","{up}":"↑","{down}":"↓","{left}":"←","{right}":"→","{shift}":"⇑","{alt}":"Alt","{ctrl}":"Ctrl","{tab}":"Tab",q:"й",w:"ц",e:"у",r:"к",t:"е",y:"н",u:"г",i:"ш",o:"щ",p:"з","{":"х","}":"ъ",a:"ф",s:"ы",d:"в",f:"а",g:"п",h:"р",j:"о",k:"л",l:"д",";":"ж","'":"э",z:"я",x:"ч",c:"с",v:"м",b:"и",n:"т",m:"ь",",":"б",".":"ю"}];let g=0;const m=this.options.keyboardDiv||(0,c.createDiv)("");m.classList.add("emulator-keyboard"),m.style.display="none",(0,c.stopPropagation)(m);const y=new a.default(m,{layout:{en:["{esc} ` 1 2 3 4 5 6 7 8 9 0 () - = {bksp} {enter}","{tab} q w e r t y u i o p { } \\ {up}","{shift} {left} {right} a s d f g h j k l ; ' [ {down}","⎘ {alt} {ctrl} z x c v b n m , . / ] {space}"]},layoutName:"en",display:v[g],onKeyPress:_=>{if(_==="⎘")return;const b=s(_);for(const w of b)this.fireKeyDown(w)},onKeyReleased:_=>{if(_==="⎘")return g=(g+1)%v.length,void y.setOptions({display:v[g]});const b=s(_);for(const w of b)this.fireKeyUp(w)},preventMouseDownDefault:!0,preventMouseUpDefault:!0,stopMouseDownPropagation:!0,stopMouseUpPropagation:!0,physicalKeyboardHighlight:!1,physicalKeyboardHighlightPress:!1,physicalKeyboardHighlightPressUseClick:!1,physicalKeyboardHighlightPressUsePointerEvents:!1});this.toggleKeyboard=()=>{p=!p;const _=p?"block":"none";m.style.display=_;for(const b of this.onKeyboardChanged)b(p);return this.keyboardVisible=p,p},this.options.keyboardDiv||this.mouseOverlay.appendChild(m)}}function s(f){if(f.length>1)return f==="{enter}"?[u.KBD_enter]:f==="{shift}"?[u.KBD_leftshift]:f==="{bksp}"?[u.KBD_backspace]:f==="{lock}"?[u.KBD_capslock]:f==="{tab}"?[u.KBD_tab]:f==="{space}"?[u.KBD_space]:f==="{esc}"?[u.KBD_esc]:f==="{ctrl}"?[u.KBD_leftctrl]:f==="{alt}"?[u.KBD_leftalt]:f==="{up}"?[u.KBD_up]:f==="{down}"?[u.KBD_down]:f==="{left}"?[u.KBD_left]:f==="{right}"?[u.KBD_right]:(console.warn("Unknown button",f),[]);if(f===",")return[u.KBD_comma];if(f===".")return[u.KBD_period];if(f==="'")return[u.KBD_quote];if(f===":")return[u.KBD_semicolon];if(f==="{")return[u.KBD_leftshift,u.KBD_leftbracket];if(f==="}")return[u.KBD_leftshift,u.KBD_rightbracket];const p=(0,u.domToKeyCode)(f.toUpperCase().charCodeAt(0));return p===0?[]:[p]}n.Layers=d},{"./helpers":31,"./keys":32,"element-resize-detector":7,notyf:15,"simple-keyboard":16}],34:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.lifecycle=void 0,n.lifecycle=function(r){let o="",a="";function c(){document[o]?r.pause():r.resume()}document.hidden!==void 0?(o="hidden",a="visibilitychange"):document.mozHidden!==void 0?(o="mozHidden",a="mozvisibilitychange"):document.msHidden!==void 0?(o="msHidden",a="msvisibilitychange"):document.webkitHidden!==void 0&&(o="webkitHidden",a="webkitvisibilitychange"),document.addEventListener(a,c),r.events().onExit(()=>{document.removeEventListener(a,c)})}},{}],35:[function(e,i,n){function r(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}Object.defineProperty(n,"__esModule",{value:!0}),n.MemStorage=void 0,n.MemStorage=class{constructor(){r(this,"length",0),r(this,"storage",{})}setItem(o,a){this.storage[o]=a,this.length=Object.keys(this.storage).length}getItem(o){const a=this.storage[o];return a===void 0?null:a}removeItem(o){delete this.storage[o],this.length=Object.keys(this.storage).length}key(o){const a=Object.keys(this.storage);return a[o]===void 0?null:a[o]}clear(){this.length=0,this.storage={}}}},{}],36:[function(e,i,n){function r(o,a){if(o.type.match(/^touch/)){const c=o,u=a.getBoundingClientRect();return{x:c.targetTouches[0].clientX-u.x,y:c.targetTouches[0].clientY-u.y,mX:0,mY:0}}if(o.type.match(/^pointer/)){const c=o;return{x:c.offsetX,y:c.offsetY,mX:c.movementX,mY:c.movementY}}{const c=o;return{x:c.offsetX,y:c.offsetY,mX:c.movementX,mY:c.movementY,button:c.button===0?0:1}}}Object.defineProperty(n,"__esModule",{value:!0}),n.pointers=n.getPointerState=n.pointer=void 0,n.pointer=function(){const o=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),a=o&&"ontouchstart"in window,c=o&&!!window.PointerEvent,u=o&&!!window.MSPointerEvent;let l=!o;const d=[],s=[],f=[],p=[],v=[];return c?(d.push("pointerdown"),f.push("pointerup","pointercancel"),s.push("pointermove"),v.push("touchstart","touchmove","touchend")):u?(d.push("MSPointerDown"),s.push("MSPointerMove"),f.push("MSPointerUp")):a?(l=!1,d.push("touchstart","mousedown"),s.push("touchmove"),f.push("touchend","touchcancel","mouseup")):(d.push("mousedown"),s.push("mousemove"),f.push("mouseup"),p.push("mouseleave")),{mobile:o,canLock:l,starters:d,changers:s,enders:f,prevents:v,leavers:p}}(),n.getPointerState=r,n.pointers={bind:n.pointer,getPointerState:r}},{}],37:[function(e,i,n){function r(a,c,u){return c in a?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[c]=u,a}Object.defineProperty(n,"__esModule",{value:!0}),n.LStorage=void 0;const o=e("./mem-storage");n.LStorage=class{constructor(a,c){r(this,"backend",void 0),r(this,"length",void 0),r(this,"prefix",void 0),this.prefix=c;try{this.backend=a||localStorage,this.testBackend()}catch{this.backend=new o.MemStorage}this.length=this.backend.length,typeof this.backend.sync=="function"&&(this.sync=u=>{this.backend.sync(u)})}testBackend(){const a=this.prefix+".test.record";this.backend.setItem(a,"123");const c=this.backend.getItem(a);if(this.backend.removeItem(a),c!=="123"||this.backend.getItem(a)!==null)throw new Error("Storage backend is not working properly")}setLocalStoragePrefix(a){this.prefix=a}clear(){if(!this.backend.length)return;const a=[];for(let c=0;c<this.backend.length;++c){const u=this.backend.key(c);u&&u.startsWith(this.prefix)&&a.push(u)}for(const c of a)this.backend.removeItem(c);this.length=this.backend.length}key(a){return this.backend.key(a)}setItem(a,c){if(!c||c.length===void 0||c.length===0)return void this.writeStringToKey(a,"");let u=0;for(;u<c.length;){let l=c.substr(u,1024);u+=l.length,u<c.length&&(l+="@"),this.writeStringToKey(a,l),a+="."}}getItem(a){let c=this.readStringFromKey(a);if(c===null)return null;if(c.length===0)return c;for(;c[c.length-1]==="@";){c=c.substr(0,c.length-1),a+=".";const u=this.readStringFromKey(a);c+=u===null?"":u}return c}removeItem(a){this.backend.removeItem(this.prefix+a),this.length=this.backend.length}writeStringToKey(a,c){this.backend.setItem(this.prefix+a,c),this.length=this.backend.length}readStringFromKey(a){return this.backend.getItem(this.prefix+a)}}},{"./mem-storage":35}],38:[function(e,i,n){function r(N,U,x){return U in N?Object.defineProperty(N,U,{value:x,enumerable:!0,configurable:!0,writable:!0}):N[U]=x,N}Object.defineProperty(n,"__esModule",{value:!0}),n.EmulatorsUi=void 0;const o=e("./build"),a=e("./dom/layers"),c=e("./dom/lifecycle"),u=e("./network/xhr"),l=e("./graphics/_2d"),d=e("./graphics/webgl"),s=e("./graphics/video"),f=e("./controls/keyboard"),p=e("./controls/mouse/mouse-common"),v=e("./controls/nipple"),g=e("./controls/options"),m=e("./dom/keys"),y=e("./sound/audio-node"),_=e("./notification/notyf"),b=e("./persist/save-load"),w=e("./controls/grid"),T=e("./dom/pointer"),E=e("./dom/storage"),k=e("./js-dos");class S{constructor(){r(this,"build",o.Build),r(this,"dom",{layers:a.layers,lifecycle:c.lifecycle,pointers:T.pointers,storage:new E.LStorage(void 0,"emulators.ui.")}),r(this,"network",{resolveBundle:u.resolveBundle}),r(this,"graphics",{webGl:d.webGl,_2d:l._2d,video:s.video}),r(this,"sound",{audioNode:y.audioNode}),r(this,"persist",{save:b.save,load:b.load}),r(this,"controls",{getGrid:w.getGrid,namedKeyCodes:m.namedKeyCodes,domToKeyCodes:m.domToKeyCodes,domToKeyCode:m.domToKeyCode,keyCodesToDom:m.keyCodesToDom,keyboard:f.keyboard,mouse:p.mouse,nipple:v.nipple,options:g.options}),r(this,"notifications",{notyf:_.notyf}),r(this,"dos",(U,x)=>new k.DosInstance(U,A,x||{}))}}n.EmulatorsUi=S;const A=new S;window.emulatorsUi=A,window.Dos=A.dos},{"./build":17,"./controls/grid":19,"./controls/keyboard":20,"./controls/mouse/mouse-common":24,"./controls/nipple":28,"./controls/options":30,"./dom/keys":32,"./dom/layers":33,"./dom/lifecycle":34,"./dom/pointer":36,"./dom/storage":37,"./graphics/_2d":39,"./graphics/video":40,"./graphics/webgl":41,"./js-dos":42,"./network/xhr":43,"./notification/notyf":44,"./persist/save-load":46,"./sound/audio-node":47}],39:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n._2d=void 0,n._2d=function(r,o,a){const c=r.canvas,u=c.getContext("2d");if(u===null)throw new Error("Unable to create 2d context on given canvas");let l=r.width,d=r.height,s=0,f=0;const p=()=>{const y=a??s/f;let _=l,b=l/y;b>d&&(b=d,_=d*y),c.style.position="relative",c.style.top=(d-b)/2+"px",c.style.left=(l-_)/2+"px",c.style.width=_+"px",c.style.height=b+"px"},v=(y,_)=>{l=y,d=_,p()};r.addOnResize(v);let g=new Uint8ClampedArray(0);const m=(y,_)=>{s=y,f=_,c.width=s,c.height=f,g=new Uint8ClampedArray(y*_*4),p()};o.events().onFrameSize(m),o.events().onFrame((y,_)=>{if(y===null&&_===null)return;const b=y!==null?y:_;let w=0,T=0;for(;T<g.length;)g[T++]=b[w++],g[T++]=b[w++],g[T++]=b[w++],g[T++]=255,b.length===g.length&&w++;u.putImageData(new ImageData(g,s,f),0,0)}),m(o.width(),o.height()),o.events().onExit(()=>{r.removeOnResize(v)})}},{}],40:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.video=void 0,n.video=function(r,o){r.switchToVideo(),o.events().onMessage((a,c)=>{a==="onremotestream"&&window.Janus.attachMediaStream(r.video,c)})}},{}],41:[function(e,i,n){function r(o,a,c){const u=o.createShader(a);if(o.shaderSource(u,c),o.compileShader(u),!o.getShaderParameter(u,o.COMPILE_STATUS)){const l=o.getShaderInfoLog(u);throw o.deleteShader(u),new Error("An error occurred compiling the shaders: "+l)}return u}Object.defineProperty(n,"__esModule",{value:!0}),n.webGl=void 0,n.webGl=function(o,a,c){const u=o.canvas,l=u.getContext("webgl");if(l===null)throw new Error("Unable to create webgl context on given canvas");const d=function(U,x,M){const R=r(U,U.VERTEX_SHADER,`
attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;

varying highp vec2 vTextureCoord;

void main(void) {
  gl_Position = aVertexPosition;
  vTextureCoord = aTextureCoord;
}
`),L=r(U,U.FRAGMENT_SHADER,`
varying highp vec2 vTextureCoord;
uniform sampler2D uSampler;


void main(void) {
  highp vec4 color = texture2D(uSampler, vTextureCoord);
  gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}
`),F=U.createProgram();if(U.attachShader(F,R),U.attachShader(F,L),U.linkProgram(F),!U.getProgramParameter(F,U.LINK_STATUS))throw new Error("Unable to initialize the shader program: "+U.getProgramInfoLog(F));return F}(l),s=l.getAttribLocation(d,"aVertexPosition"),f=l.getAttribLocation(d,"aTextureCoord"),p=l.getUniformLocation(d,"uSampler");(function(U,x,M){const R=U.createBuffer();U.bindBuffer(U.ARRAY_BUFFER,R),U.bufferData(U.ARRAY_BUFFER,new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0]),U.STATIC_DRAW),U.vertexAttribPointer(x,3,U.FLOAT,!1,0,0),U.enableVertexAttribArray(x);const L=U.createBuffer();U.bindBuffer(U.ARRAY_BUFFER,L),U.bufferData(U.ARRAY_BUFFER,new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0]),U.STATIC_DRAW),U.vertexAttribPointer(M,2,U.FLOAT,!1,0,0),U.enableVertexAttribArray(M)})(l,s,f);const v=l.createTexture();l.bindTexture(l.TEXTURE_2D,v),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MAG_FILTER,l.LINEAR);const g=new Uint8Array([0,0,0]);l.texImage2D(l.TEXTURE_2D,0,l.RGB,1,1,0,l.RGB,l.UNSIGNED_BYTE,g),l.useProgram(d),l.activeTexture(l.TEXTURE0),l.uniform1i(p,0);let m=o.width,y=o.height,_=0,b=0;const w=()=>{const U=c??_/b;let x=m,M=m/U;M>y&&(M=y,x=y*U),u.style.position="relative",u.style.top=(y-M)/2+"px",u.style.left=(m-x)/2+"px",u.style.width=x+"px",u.style.height=M+"px"},T=(U,x)=>{m=U,y=x,w()};o.addOnResize(T);const E=(U,x)=>{_=U,b=x,u.width=_,u.height=b,l.viewport(0,0,_,b),w()};a.events().onFrameSize(E),E(a.width(),a.height());let k=null,S=null,A=0;a.events().onFrame((U,x)=>{S=U??x,A=U!=null?l.RGB:l.RGBA,k===null&&(k=requestAnimationFrame(N))});const N=()=>{l.texImage2D(l.TEXTURE_2D,0,A,_,b,0,A,l.UNSIGNED_BYTE,S),l.drawArrays(l.TRIANGLES,0,6),k=null,S=null};a.events().onExit(()=>{o.removeOnResize(T)})}},{}],42:[function(e,i,n){function r(d,s,f){return s in d?Object.defineProperty(d,s,{value:f,enumerable:!0,configurable:!0,writable:!0}):d[s]=f,d}Object.defineProperty(n,"__esModule",{value:!0}),n.DosInstance=void 0;const o=e("./controls/layers-config"),a=e("./controls/legacy-layers-control"),c=e("./controls/null-layers-control"),u=e("./controls/layers-control"),l=e("./dom/pointer");n.DosInstance=class{constructor(d,s,f){r(this,"emulatorsUi",void 0),r(this,"emulatorFunction",void 0),r(this,"createTransportLayer",void 0),r(this,"layers",void 0),r(this,"layersConfig",null),r(this,"ciPromise",void 0),r(this,"options",void 0),r(this,"mobileControls",void 0),r(this,"mirroredControls",void 0),r(this,"scaleControls",void 0),r(this,"autolock",void 0),r(this,"sensitivity",void 0),r(this,"storage",void 0),r(this,"volume",void 0),r(this,"clickToStart",void 0),r(this,"unbindControls",()=>{}),r(this,"storedLayersConfig",null),r(this,"onMobileControlsChanged",void 0),r(this,"onSensitivityChanged",[]),r(this,"onScaleChanged",[]),r(this,"onVolumeChanged",[]),r(this,"setVolumeImplFn",()=>{}),r(this,"registerOnSensitivityChanged",m=>{this.onSensitivityChanged.push(m)}),r(this,"removeOnSensitivityChanged",m=>{this.onSensitivityChanged=this.onSensitivityChanged.filter(y=>y!==m)}),r(this,"registerOnScaleChanged",m=>{this.onScaleChanged.push(m)}),r(this,"removeOnScaleChanged",m=>{this.onScaleChanged=this.onScaleChanged.filter(y=>y!==m)}),r(this,"registerOnVolumeChanged",m=>{this.onVolumeChanged.push(m)}),r(this,"removeOnVolumeChanged",m=>{this.onVolumeChanged=this.onVolumeChanged.filter(y=>y!==m)}),this.options=f,this.emulatorsUi=s,this.storage=s.dom.storage,this.emulatorFunction=f.emulatorFunction||"dosboxWorker",this.clickToStart=f.clickToStart||!1,this.layers=this.emulatorsUi.dom.layers(d,f.layersOptions),this.layers.showLoadingLayer(),this.createTransportLayer=f.createTransportLayer,this.mobileControls=l.pointers.bind.mobile,this.autolock=!1,this.mirroredControls=this.options.mirroredControls===!0||this.storage.getItem("mirroredControls")==="true";const p=this.options.scaleControls??Number.parseFloat(this.storage.getItem("scaleControls")??"1.0");this.scaleControls=Number.isNaN(p)?1:p;const v=this.options.sensitivityValue??Number.parseFloat(this.storage.getItem("sensitivity")??"1.0");this.sensitivity=Number.isNaN(v)?1:v;const g=Number.parseFloat(this.storage.getItem("volume")??"1.0");if(this.volume=Number.isNaN(g)?1:g,this.onMobileControlsChanged=()=>{},this.emulatorFunction==="backend"&&this.createTransportLayer===void 0)throw new Error("Emulator function set to 'backend' but 'createTransportLayer' is not a function")}async run(d,s,f){var p,v,g;await this.stop(),this.layers.setLoadingMessage("Starting...");const m=f!=null&&f.length>0?f:d+".changes";let y;try{y=await this.runBundle(d,s,m)}catch(w){throw this.layers.setLoadingMessage("Unexpected error occured..."),this.layers.notyf.error({message:"Can't start emulator look browser logs for more info"}),console.error(w),w}const _=this.emulatorsUi;if(this.emulatorFunction==="janus")_.graphics.video(this.layers,y);else{_.persist.save(m,this.layers,y,emulators);try{if(this.options.noWebGL===!0)throw new Error("WebGL is disabled by options");_.graphics.webGl(this.layers,y,this.options.aspect)}catch{console.error("Unable to create webgl canvas, fallback to 2d rendering"),_.graphics._2d(this.layers,y,this.options.aspect)}this.setVolumeImplFn=_.sound.audioNode(y),this.setVolumeImplFn(this.volume)}_.dom.lifecycle(y);const b=await y.config();return this.autolock=((p=b.output)===null||p===void 0||(v=p.options)===null||v===void 0||(g=v.autolock)===null||g===void 0?void 0:g.value)===!0,await this.setLayersConfig((0,o.extractLayersConfig)(b)),this.mobileControls||(this.mobileControls=!0,this.disableMobileControls()),this.layers.setLoadingMessage("Ready"),this.layers.hideLoadingLayer(),this.clickToStart&&this.layers.showClickToStart(),y}async stop(){if(this.layers.showLoadingLayer(),this.ciPromise===void 0)return;const d=await this.ciPromise;delete this.ciPromise,await d.exit()}async setLayersConfig(d,s){if(this.ciPromise===void 0)return;const f=await this.ciPromise;this.layersConfig=d,this.unbindControls(),d===null?this.unbindControls=(0,c.initNullLayersControl)(this,this.layers,f):d.version===void 0?this.unbindControls=(0,a.initLegacyLayersControl)(this,this.layers,d,f):this.unbindControls=(0,u.initLayersControl)(this.layers,d,f,this,this.mirroredControls,this.scaleControls,s)}getLayersConfig(){return this.layersConfig}async enableMobileControls(){this.mobileControls||(this.mobileControls=!0,await this.setLayersConfig(this.storedLayersConfig),this.storedLayersConfig=null,this.onMobileControlsChanged(!0))}async disableMobileControls(){this.mobileControls&&(this.mobileControls=!1,this.storedLayersConfig=this.layersConfig,await this.setLayersConfig(null),this.onMobileControlsChanged(!1))}async setMirroredControls(d){this.mirroredControls!==d&&(this.mirroredControls=d,this.storage.setItem("mirroredControls",d+""),d?this.mobileControls?await this.setLayersConfig(this.layersConfig):await this.enableMobileControls():this.mobileControls&&await this.setLayersConfig(this.layersConfig))}async setScaleControls(d){if(d!==this.scaleControls){this.scaleControls=d,this.storage.setItem("scaleControls",d+""),this.mobileControls&&await this.setLayersConfig(this.layersConfig);for(const s of this.onScaleChanged)s(this.scaleControls)}}async setSensitivity(d){if(d!==this.sensitivity){this.sensitivity=d,this.storage.setItem("sensitivity",d+""),await this.setLayersConfig(this.layersConfig);for(const s of this.onSensitivityChanged)s(this.sensitivity)}}async setVolume(d){this.volume=d,this.storage.setItem("volume",d+""),this.setVolumeImplFn(d);for(const s of this.onVolumeChanged)s(this.volume)}async setAutolock(d){d!==this.autolock&&(this.autolock=d,await this.setLayersConfig(this.layersConfig))}setOnMobileControlsChanged(d){this.onMobileControlsChanged=d}async runBundle(d,s,f){const p=this.emulatorsUi;if(this.emulatorFunction==="janus")this.layers.setLoadingMessage("Connecting..."),this.ciPromise=emulators.janus(d);else{this.layers.setLoadingMessage("Downloading bundle ...");const v=p.network.resolveBundle(d,{onprogress:m=>this.layers.setLoadingMessage("Downloading bundle "+m+"%")}),g={onExtractProgress:(m,y,_,b)=>{if(m!==0)return;const w=Math.round(_/b*100),T=y.lastIndexOf("/"),E=y.substring(T+1);this.layers.setLoadingMessage("Extracting "+w+"% ("+E+")")}};try{let m;m=s!=null&&s.length>0?await p.network.resolveBundle(s,{httpCache:!1}):await p.persist.load(f,emulators);const y=await v;this.emulatorFunction==="backend"?this.ciPromise=emulators.backend([y,m],this.createTransportLayer(),g):this.ciPromise=emulators[this.emulatorFunction]([y,m],g)}catch{const m=await v;this.emulatorFunction==="backend"?this.ciPromise=emulators.backend([m],this.createTransportLayer(),g):this.ciPromise=emulators[this.emulatorFunction]([m],g)}}return this.ciPromise}}},{"./controls/layers-config":21,"./controls/layers-control":22,"./controls/legacy-layers-control":23,"./controls/null-layers-control":29,"./dom/pointer":36}],43:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.resolveBundle=void 0,n.resolveBundle=async function(r,o){const a=o==null?void 0:o.onprogress,c=(o==null?void 0:o.httpCache)!==!1;return new Promise((u,l)=>{const d=new XMLHttpRequest;d.open("GET",r,!0),d.overrideMimeType("text/plain; charset=x-user-defined"),d.addEventListener("error",()=>{l(new Error("Network error, can't download "+r))}),d.addEventListener("abort",()=>{l(new Error("Request canceled for url "+r))},!1),d.responseType="arraybuffer",d.onreadystatechange=()=>{d.readyState===4&&(d.status===200?(a!==void 0&&a(100),u(new Uint8Array(d.response))):l(new Error("Network error, can't download "+r)))},a!==void 0&&(d.onprogress=s=>{if(s.total&&s.total>0){const f=Math.round(1e4*s.loaded/s.total)/100;a(f)}}),c===!1&&(d.setRequestHeader("Cache-Control","no-cache, no-store, max-age=0"),d.setRequestHeader("Expires","Tue, 01 Jan 1980 1:00:00 GMT"),d.setRequestHeader("Pragma","no-cache")),d.send()})}},{}],44:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.notyf=void 0,n.notyf=function(r,o){const a=r.notyf;o.events().onMessage(function(c){if(c==="error"){for(var u=arguments.length,l=new Array(u>1?u-1:0),d=1;d<u;d++)l[d-1]=arguments[d];a.error({message:JSON.stringify(l)})}})}},{}],45:[function(e,i,n){function r(c,u,l){return u in c?Object.defineProperty(c,u,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[u]=l,c}Object.defineProperty(n,"__esModule",{value:!0}),n.makeCache=void 0;class o{close(){}put(u,l){return Promise.resolve()}get(u,l){return l!==void 0?Promise.resolve(l):Promise.reject(new Error("Cache is not supported on this host"))}forEach(u,l){l()}}n.makeCache=function(c,u){return new Promise(l=>{new a(c,l,d=>{u.onErr(d),l(new o)})})};class a{constructor(u,l,d){if(r(this,"version",void 0),r(this,"storeName","files"),r(this,"indexedDB",void 0),r(this,"db",null),this.version=u,this.indexedDB=typeof window>"u"?void 0:window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,this.indexedDB)try{const s=this.indexedDB.open("js-dos-cache ("+u+")",1);s.onerror=f=>{var p;d("Can't open cache database: "+((p=s.error)===null||p===void 0?void 0:p.message))},s.onsuccess=f=>{this.db=s.result,l(this)},s.onupgradeneeded=f=>{try{this.db=s.result,this.db.onerror=p=>{d("Can't upgrade cache database")},this.db.createObjectStore(this.storeName)}catch{d("Can't upgrade cache database")}}}catch(s){d("Can't open cache database: "+s.message)}else d("Indexed db is not supported on this host")}close(){this.db!==null&&(this.db.close(),this.db=null)}put(u,l){return new Promise(d=>{if(this.db===null)return void d();const s=this.db.transaction(this.storeName,"readwrite");s.oncomplete=()=>d(),s.objectStore(this.storeName).put(l,u)})}get(u,l){return new Promise((d,s)=>{function f(v){l===void 0?s(new Error(v)):d(l)}if(this.db===null)return void f("db is not initalized");const p=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).get(u);p.onerror=()=>s(new Error("Can't read value for key '"+u+"'")),p.onsuccess=()=>{p.result?d(p.result):f("Result is empty for key '"+u+"', result: "+p.result)}})}forEach(u,l){if(this.db===null)return void l();const d=this.db.transaction(this.storeName,"readonly").objectStore(this.storeName).openCursor();d.onerror=()=>l(),d.onsuccess=s=>{const f=s.target.result;f?(u(f.key.toString(),f.value),f.continue()):l()}}}},{}],46:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.load=n.save=void 0;const r=(0,e("./cache").makeCache)("emulators-ui-saves",{onErr:console.error});n.save=function(o,a,c,u){a.setOnSave(async()=>{const l=await r,d=await c.persist();return l.put(o,d.buffer)})},n.load=async function(o,a){return(await r).get(o).then(c=>new Uint8Array(c))}},{"./cache":45}],47:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.audioNode=void 0;class r{constructor(){var a,c;c=[],(a="samplesQueue")in this?Object.defineProperty(this,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[a]=c}push(a){this.samplesQueue.push(a)}length(){let a=0;for(const c of this.samplesQueue)a+=c.length;return a}writeTo(a,c){let u=0;for(;this.samplesQueue.length>0;){const l=this.samplesQueue[0],d=Math.min(c-u,l.length);if(d===l.length?(a.set(l,u),this.samplesQueue.shift()):(a.set(l.slice(0,d),u),this.samplesQueue[0]=l.slice(d)),u+=d,u===c)break}u<c&&a.fill(0,u)}}n.audioNode=function(o){const a=o.soundFrequency();if(a===0)return console.warn("Can't create audio node with sampleRate === 0, ingnoring"),()=>{};let c=null;if(typeof AudioContext<"u"?c=new AudioContext({sampleRate:a,latencyHint:"interactive"}):window.webkitAudioContext!==void 0&&(c=new window.webkitAudioContext({sampleRate:a,latencyHint:"interactive"})),c==null)return()=>{};const u=new r;o.events().onSoundPush(g=>{u.length()<6144&&u.push(g)});const l=c.createScriptProcessor(2048,0,1);let d=!1,s=0;const f=o.directSound;l.onaudioprocess=o.directSound!==void 0?g=>{if(!d){const T=f.buffer[0];d=Math.ceil(T[T.length-1])>0}if(!d)return;let m=0,y=g.outputBuffer.length;const _=g.outputBuffer.numberOfChannels;let b,w=f.buffer[s];for(;y>0&&(b=Math.ceil(w[w.length-1]))>0;)if(y>=b){const T=w.subarray(0,b);for(let E=0;E<_;++E)g.outputBuffer.getChannelData(E).set(T,m);m+=b,y-=b,w[w.length-1]=0,s=(s+1)%f.ringSize,w=f.buffer[s]}else{const T=w.subarray(0,y);for(let E=0;E<_;++E)g.outputBuffer.getChannelData(E).set(T,m);w[w.length-1]=b-y,w.set(w.subarray(y,y+w[w.length-1])),y=0}}:g=>{const m=g.outputBuffer.length,y=g.outputBuffer.numberOfChannels,_=u.length();if(d||(d=_>=2048),d)for(let b=0;b<y;b++){const w=g.outputBuffer.getChannelData(b);u.writeTo(w,m)}};const p=c.createGain();p.connect(c.destination),l.connect(p),p.gain.value=1;const v=()=>{c!==null&&c.state==="suspended"&&c.resume()};return document.addEventListener("click",v,{once:!0}),document.addEventListener("touchstart",v,{once:!0}),document.addEventListener("keydown",v,{once:!0}),o.events().onExit(()=>{c!==null&&(l.disconnect(),p.disconnect(),c.close()),document.removeEventListener("click",v),document.removeEventListener("touchstart",v),document.removeEventListener("keydown",v)}),g=>{p.gain.value=g}}},{}]},{},[38]),function e(i,n,r){function o(u,l){if(!n[u]){if(!i[u]){var d=typeof In=="function"&&In;if(!l&&d)return d(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[u]={exports:{}};i[u][0].call(f.exports,function(p){return o(i[u][1][p]||p)},f,f.exports,e,i,n,r)}return n[u].exports}for(var a=typeof In=="function"&&In,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/try-to-string"),a=TypeError;i.exports=function(c){if(r(c))return c;throw a(o(c)+" is not a function")}},{"../internals/is-callable":67,"../internals/try-to-string":120}],2:[function(e,i,n){var r=e("../internals/is-constructor"),o=e("../internals/try-to-string"),a=TypeError;i.exports=function(c){if(r(c))return c;throw a(o(c)+" is not a constructor")}},{"../internals/is-constructor":68,"../internals/try-to-string":120}],3:[function(e,i,n){var r=e("../internals/is-callable"),o=String,a=TypeError;i.exports=function(c){if(typeof c=="object"||r(c))return c;throw a("Can't set "+o(c)+" as a prototype")}},{"../internals/is-callable":67}],4:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/object-create"),a=e("../internals/object-define-property").f,c=r("unscopables"),u=Array.prototype;u[c]==null&&a(u,c,{configurable:!0,value:o(null)}),i.exports=function(l){u[c][l]=!0}},{"../internals/object-create":81,"../internals/object-define-property":83,"../internals/well-known-symbol":127}],5:[function(e,i,n){var r=e("../internals/string-multibyte").charAt;i.exports=function(o,a,c){return a+(c?r(o,a).length:1)}},{"../internals/string-multibyte":107}],6:[function(e,i,n){var r=e("../internals/object-is-prototype-of"),o=TypeError;i.exports=function(a,c){if(r(c,a))return a;throw o("Incorrect invocation")}},{"../internals/object-is-prototype-of":88}],7:[function(e,i,n){var r=e("../internals/is-object"),o=String,a=TypeError;i.exports=function(c){if(r(c))return c;throw a(o(c)+" is not an object")}},{"../internals/is-object":71}],8:[function(e,i,n){i.exports=typeof ArrayBuffer<"u"&&typeof DataView<"u"},{}],9:[function(e,i,n){var r,o,a,c=e("../internals/array-buffer-native"),u=e("../internals/descriptors"),l=e("../internals/global"),d=e("../internals/is-callable"),s=e("../internals/is-object"),f=e("../internals/has-own-property"),p=e("../internals/classof"),v=e("../internals/try-to-string"),g=e("../internals/create-non-enumerable-property"),m=e("../internals/define-built-in"),y=e("../internals/object-define-property").f,_=e("../internals/object-is-prototype-of"),b=e("../internals/object-get-prototype-of"),w=e("../internals/object-set-prototype-of"),T=e("../internals/well-known-symbol"),E=e("../internals/uid"),k=e("../internals/internal-state"),S=k.enforce,A=k.get,N=l.Int8Array,U=N&&N.prototype,x=l.Uint8ClampedArray,M=x&&x.prototype,R=N&&b(N),L=U&&b(U),F=Object.prototype,q=l.TypeError,j=T("toStringTag"),W=E("TYPED_ARRAY_TAG"),D=c&&!!w&&p(l.opera)!=="Opera",C=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},O={BigInt64Array:8,BigUint64Array:8},B=function(Y){var H=b(Y);if(s(H)){var te=A(H);return te&&f(te,"TypedArrayConstructor")?te.TypedArrayConstructor:B(H)}},G=function(Y){if(!s(Y))return!1;var H=p(Y);return f(P,H)||f(O,H)};for(r in P)(a=(o=l[r])&&o.prototype)?S(a).TypedArrayConstructor=o:D=!1;for(r in O)(a=(o=l[r])&&o.prototype)&&(S(a).TypedArrayConstructor=o);if((!D||!d(R)||R===Function.prototype)&&(R=function(){throw q("Incorrect invocation")},D))for(r in P)l[r]&&w(l[r],R);if((!D||!L||L===F)&&(L=R.prototype,D))for(r in P)l[r]&&w(l[r].prototype,L);if(D&&b(M)!==L&&w(M,L),u&&!f(L,j))for(r in C=!0,y(L,j,{get:function(){return s(this)?this[W]:void 0}}),P)l[r]&&g(l[r],W,r);i.exports={NATIVE_ARRAY_BUFFER_VIEWS:D,TYPED_ARRAY_TAG:C&&W,aTypedArray:function(Y){if(G(Y))return Y;throw q("Target is not a typed array")},aTypedArrayConstructor:function(Y){if(d(Y)&&(!w||_(R,Y)))return Y;throw q(v(Y)+" is not a typed array constructor")},exportTypedArrayMethod:function(Y,H,te,ue){if(u){if(te)for(var _e in P){var J=l[_e];if(J&&f(J.prototype,Y))try{delete J.prototype[Y]}catch{try{J.prototype[Y]=H}catch{}}}L[Y]&&!te||m(L,Y,te?H:D&&U[Y]||H,ue)}},exportTypedArrayStaticMethod:function(Y,H,te){var ue,_e;if(u){if(w){if(te){for(ue in P)if((_e=l[ue])&&f(_e,Y))try{delete _e[Y]}catch{}}if(R[Y]&&!te)return;try{return m(R,Y,te?H:D&&R[Y]||H)}catch{}}for(ue in P)!(_e=l[ue])||_e[Y]&&!te||m(_e,Y,H)}},getTypedArrayConstructor:B,isView:function(Y){if(!s(Y))return!1;var H=p(Y);return H==="DataView"||f(P,H)||f(O,H)},isTypedArray:G,TypedArray:R,TypedArrayPrototype:L}},{"../internals/array-buffer-native":8,"../internals/classof":20,"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/descriptors":31,"../internals/global":55,"../internals/has-own-property":56,"../internals/internal-state":64,"../internals/is-callable":67,"../internals/is-object":71,"../internals/object-define-property":83,"../internals/object-get-prototype-of":87,"../internals/object-is-prototype-of":88,"../internals/object-set-prototype-of":92,"../internals/try-to-string":120,"../internals/uid":124,"../internals/well-known-symbol":127}],10:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/function-uncurry-this"),a=e("../internals/descriptors"),c=e("../internals/array-buffer-native"),u=e("../internals/function-name"),l=e("../internals/create-non-enumerable-property"),d=e("../internals/define-built-ins"),s=e("../internals/fails"),f=e("../internals/an-instance"),p=e("../internals/to-integer-or-infinity"),v=e("../internals/to-length"),g=e("../internals/to-index"),m=e("../internals/ieee754"),y=e("../internals/object-get-prototype-of"),_=e("../internals/object-set-prototype-of"),b=e("../internals/object-get-own-property-names").f,w=e("../internals/object-define-property").f,T=e("../internals/array-fill"),E=e("../internals/array-slice-simple"),k=e("../internals/set-to-string-tag"),S=e("../internals/internal-state"),A=u.PROPER,N=u.CONFIGURABLE,U=S.get,x=S.set,M="ArrayBuffer",R="Wrong index",L=r.ArrayBuffer,F=L,q=F&&F.prototype,j=r.DataView,W=j&&j.prototype,D=Object.prototype,C=r.Array,P=r.RangeError,O=o(T),B=o([].reverse),G=m.pack,Y=m.unpack,H=function(K){return[255&K]},te=function(K){return[255&K,K>>8&255]},ue=function(K){return[255&K,K>>8&255,K>>16&255,K>>24&255]},_e=function(K){return K[3]<<24|K[2]<<16|K[1]<<8|K[0]},J=function(K){return G(K,23,4)},re=function(K){return G(K,52,8)},pe=function(K,X){w(K.prototype,X,{get:function(){return U(this)[X]}})},we=function(K,X,fe,Pe){var Le=g(fe),Ne=U(K);if(Le+X>Ne.byteLength)throw P(R);var ze=U(Ne.buffer).bytes,De=Le+Ne.byteOffset,ve=E(ze,De,De+X);return Pe?ve:B(ve)},me=function(K,X,fe,Pe,Le,Ne){var ze=g(fe),De=U(K);if(ze+X>De.byteLength)throw P(R);for(var ve=U(De.buffer).bytes,Xe=ze+De.byteOffset,je=Pe(+Le),Oe=0;Oe<X;Oe++)ve[Xe+Oe]=je[Ne?Oe:X-Oe-1]};if(c){var ye=A&&L.name!==M;if(s(function(){L(1)})&&s(function(){new L(-1)})&&!s(function(){return new L,new L(1.5),new L(NaN),ye&&!N}))ye&&N&&l(L,"name",M);else{(F=function(K){return f(this,q),new L(g(K))}).prototype=q;for(var $e,Fe=b(L),Je=0;Fe.length>Je;)($e=Fe[Je++])in F||l(F,$e,L[$e]);q.constructor=F}_&&y(W)!==D&&_(W,D);var ct=new j(new F(2)),mt=o(W.setInt8);ct.setInt8(0,2147483648),ct.setInt8(1,2147483649),!ct.getInt8(0)&&ct.getInt8(1)||d(W,{setInt8:function(K,X){mt(this,K,X<<24>>24)},setUint8:function(K,X){mt(this,K,X<<24>>24)}},{unsafe:!0})}else q=(F=function(K){f(this,q);var X=g(K);x(this,{bytes:O(C(X),0),byteLength:X}),a||(this.byteLength=X)}).prototype,W=(j=function(K,X,fe){f(this,W),f(K,q);var Pe=U(K).byteLength,Le=p(X);if(Le<0||Le>Pe)throw P("Wrong offset");if(Le+(fe=fe===void 0?Pe-Le:v(fe))>Pe)throw P("Wrong length");x(this,{buffer:K,byteLength:fe,byteOffset:Le}),a||(this.buffer=K,this.byteLength=fe,this.byteOffset=Le)}).prototype,a&&(pe(F,"byteLength"),pe(j,"buffer"),pe(j,"byteLength"),pe(j,"byteOffset")),d(W,{getInt8:function(K){return we(this,1,K)[0]<<24>>24},getUint8:function(K){return we(this,1,K)[0]},getInt16:function(K){var X=we(this,2,K,arguments.length>1?arguments[1]:void 0);return(X[1]<<8|X[0])<<16>>16},getUint16:function(K){var X=we(this,2,K,arguments.length>1?arguments[1]:void 0);return X[1]<<8|X[0]},getInt32:function(K){return _e(we(this,4,K,arguments.length>1?arguments[1]:void 0))},getUint32:function(K){return _e(we(this,4,K,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(K){return Y(we(this,4,K,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(K){return Y(we(this,8,K,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(K,X){me(this,1,K,H,X)},setUint8:function(K,X){me(this,1,K,H,X)},setInt16:function(K,X){me(this,2,K,te,X,arguments.length>2?arguments[2]:void 0)},setUint16:function(K,X){me(this,2,K,te,X,arguments.length>2?arguments[2]:void 0)},setInt32:function(K,X){me(this,4,K,ue,X,arguments.length>2?arguments[2]:void 0)},setUint32:function(K,X){me(this,4,K,ue,X,arguments.length>2?arguments[2]:void 0)},setFloat32:function(K,X){me(this,4,K,J,X,arguments.length>2?arguments[2]:void 0)},setFloat64:function(K,X){me(this,8,K,re,X,arguments.length>2?arguments[2]:void 0)}});k(F,M),k(j,"DataView"),i.exports={ArrayBuffer:F,DataView:j}},{"../internals/an-instance":6,"../internals/array-buffer-native":8,"../internals/array-fill":11,"../internals/array-slice-simple":14,"../internals/create-non-enumerable-property":24,"../internals/define-built-ins":28,"../internals/descriptors":31,"../internals/fails":42,"../internals/function-name":48,"../internals/function-uncurry-this":49,"../internals/global":55,"../internals/ieee754":60,"../internals/internal-state":64,"../internals/object-define-property":83,"../internals/object-get-own-property-names":85,"../internals/object-get-prototype-of":87,"../internals/object-set-prototype-of":92,"../internals/set-to-string-tag":103,"../internals/to-index":109,"../internals/to-integer-or-infinity":111,"../internals/to-length":112}],11:[function(e,i,n){var r=e("../internals/to-object"),o=e("../internals/to-absolute-index"),a=e("../internals/length-of-array-like");i.exports=function(c){for(var u=r(this),l=a(u),d=arguments.length,s=o(d>1?arguments[1]:void 0,l),f=d>2?arguments[2]:void 0,p=f===void 0?l:o(f,l);p>s;)u[s++]=c;return u}},{"../internals/length-of-array-like":76,"../internals/to-absolute-index":108,"../internals/to-object":113}],12:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/to-absolute-index"),a=e("../internals/length-of-array-like"),c=function(u){return function(l,d,s){var f,p=r(l),v=a(p),g=o(s,v);if(u&&d!=d){for(;v>g;)if((f=p[g++])!=f)return!0}else for(;v>g;g++)if((u||g in p)&&p[g]===d)return u||g||0;return!u&&-1}};i.exports={includes:c(!0),indexOf:c(!1)}},{"../internals/length-of-array-like":76,"../internals/to-absolute-index":108,"../internals/to-indexed-object":110}],13:[function(e,i,n){var r=e("../internals/function-bind-context"),o=e("../internals/function-uncurry-this"),a=e("../internals/indexed-object"),c=e("../internals/to-object"),u=e("../internals/length-of-array-like"),l=e("../internals/array-species-create"),d=o([].push),s=function(f){var p=f==1,v=f==2,g=f==3,m=f==4,y=f==6,_=f==7,b=f==5||y;return function(w,T,E,k){for(var S,A,N=c(w),U=a(N),x=r(T,E),M=u(U),R=0,L=k||l,F=p?L(w,M):v||_?L(w,0):void 0;M>R;R++)if((b||R in U)&&(A=x(S=U[R],R,N),f))if(p)F[R]=A;else if(A)switch(f){case 3:return!0;case 5:return S;case 6:return R;case 2:d(F,S)}else switch(f){case 4:return!1;case 7:d(F,S)}return y?-1:g||m?m:F}};i.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},{"../internals/array-species-create":17,"../internals/function-bind-context":45,"../internals/function-uncurry-this":49,"../internals/indexed-object":61,"../internals/length-of-array-like":76,"../internals/to-object":113}],14:[function(e,i,n){var r=e("../internals/to-absolute-index"),o=e("../internals/length-of-array-like"),a=e("../internals/create-property"),c=Array,u=Math.max;i.exports=function(l,d,s){for(var f=o(l),p=r(d,f),v=r(s===void 0?f:s,f),g=c(u(v-p,0)),m=0;p<v;p++,m++)a(g,m,l[p]);return g.length=m,g}},{"../internals/create-property":26,"../internals/length-of-array-like":76,"../internals/to-absolute-index":108}],15:[function(e,i,n){var r=e("../internals/array-slice-simple"),o=Math.floor,a=function(l,d){var s=l.length,f=o(s/2);return s<8?c(l,d):u(l,a(r(l,0,f),d),a(r(l,f),d),d)},c=function(l,d){for(var s,f,p=l.length,v=1;v<p;){for(f=v,s=l[v];f&&d(l[f-1],s)>0;)l[f]=l[--f];f!==v++&&(l[f]=s)}return l},u=function(l,d,s,f){for(var p=d.length,v=s.length,g=0,m=0;g<p||m<v;)l[g+m]=g<p&&m<v?f(d[g],s[m])<=0?d[g++]:s[m++]:g<p?d[g++]:s[m++];return l};i.exports=a},{"../internals/array-slice-simple":14}],16:[function(e,i,n){var r=e("../internals/is-array"),o=e("../internals/is-constructor"),a=e("../internals/is-object"),c=e("../internals/well-known-symbol")("species"),u=Array;i.exports=function(l){var d;return r(l)&&(d=l.constructor,(o(d)&&(d===u||r(d.prototype))||a(d)&&(d=d[c])===null)&&(d=void 0)),d===void 0?u:d}},{"../internals/is-array":66,"../internals/is-constructor":68,"../internals/is-object":71,"../internals/well-known-symbol":127}],17:[function(e,i,n){var r=e("../internals/array-species-constructor");i.exports=function(o,a){return new(r(o))(a===0?0:a)}},{"../internals/array-species-constructor":16}],18:[function(e,i,n){var r=e("../internals/well-known-symbol")("iterator"),o=!1;try{var a=0,c={next:function(){return{done:!!a++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,function(){throw 2})}catch{}i.exports=function(u,l){if(!l&&!o)return!1;var d=!1;try{var s={};s[r]=function(){return{next:function(){return{done:d=!0}}}},u(s)}catch{}return d}},{"../internals/well-known-symbol":127}],19:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=r({}.toString),a=r("".slice);i.exports=function(c){return a(o(c),8,-1)}},{"../internals/function-uncurry-this":49}],20:[function(e,i,n){var r=e("../internals/to-string-tag-support"),o=e("../internals/is-callable"),a=e("../internals/classof-raw"),c=e("../internals/well-known-symbol")("toStringTag"),u=Object,l=a(function(){return arguments}())=="Arguments";i.exports=r?a:function(d){var s,f,p;return d===void 0?"Undefined":d===null?"Null":typeof(f=function(v,g){try{return v[g]}catch{}}(s=u(d),c))=="string"?f:l?a(s):(p=a(s))=="Object"&&o(s.callee)?"Arguments":p}},{"../internals/classof-raw":19,"../internals/is-callable":67,"../internals/to-string-tag-support":118,"../internals/well-known-symbol":127}],21:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/own-keys"),a=e("../internals/object-get-own-property-descriptor"),c=e("../internals/object-define-property");i.exports=function(u,l,d){for(var s=o(l),f=c.f,p=a.f,v=0;v<s.length;v++){var g=s[v];r(u,g)||d&&r(d,g)||f(u,g,p(l,g))}}},{"../internals/has-own-property":56,"../internals/object-define-property":83,"../internals/object-get-own-property-descriptor":84,"../internals/own-keys":94}],22:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},{"../internals/fails":42}],23:[function(e,i,n){var r=e("../internals/iterators-core").IteratorPrototype,o=e("../internals/object-create"),a=e("../internals/create-property-descriptor"),c=e("../internals/set-to-string-tag"),u=e("../internals/iterators"),l=function(){return this};i.exports=function(d,s,f,p){var v=s+" Iterator";return d.prototype=o(r,{next:a(+!p,f)}),c(d,v,!1,!0),u[v]=l,d}},{"../internals/create-property-descriptor":25,"../internals/iterators":75,"../internals/iterators-core":74,"../internals/object-create":81,"../internals/set-to-string-tag":103}],24:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=r?function(c,u,l){return o.f(c,u,a(1,l))}:function(c,u,l){return c[u]=l,c}},{"../internals/create-property-descriptor":25,"../internals/descriptors":31,"../internals/object-define-property":83}],25:[function(e,i,n){i.exports=function(r,o){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:o}}},{}],26:[function(e,i,n){var r=e("../internals/to-property-key"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=function(c,u,l){var d=r(u);d in c?o.f(c,d,a(0,l)):c[d]=l}},{"../internals/create-property-descriptor":25,"../internals/object-define-property":83,"../internals/to-property-key":117}],27:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/object-define-property"),a=e("../internals/make-built-in"),c=e("../internals/define-global-property");i.exports=function(u,l,d,s){s||(s={});var f=s.enumerable,p=s.name!==void 0?s.name:l;if(r(d)&&a(d,p,s),s.global)f?u[l]=d:c(l,d);else{try{s.unsafe?u[l]&&(f=!0):delete u[l]}catch{}f?u[l]=d:o.f(u,l,{value:d,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return u}},{"../internals/define-global-property":29,"../internals/is-callable":67,"../internals/make-built-in":77,"../internals/object-define-property":83}],28:[function(e,i,n){var r=e("../internals/define-built-in");i.exports=function(o,a,c){for(var u in a)r(o,u,a[u],c);return o}},{"../internals/define-built-in":27}],29:[function(e,i,n){var r=e("../internals/global"),o=Object.defineProperty;i.exports=function(a,c){try{o(r,a,{value:c,configurable:!0,writable:!0})}catch{r[a]=c}return c}},{"../internals/global":55}],30:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/function-call"),a=e("../internals/is-pure"),c=e("../internals/function-name"),u=e("../internals/is-callable"),l=e("../internals/create-iterator-constructor"),d=e("../internals/object-get-prototype-of"),s=e("../internals/object-set-prototype-of"),f=e("../internals/set-to-string-tag"),p=e("../internals/create-non-enumerable-property"),v=e("../internals/define-built-in"),g=e("../internals/well-known-symbol"),m=e("../internals/iterators"),y=e("../internals/iterators-core"),_=c.PROPER,b=c.CONFIGURABLE,w=y.IteratorPrototype,T=y.BUGGY_SAFARI_ITERATORS,E=g("iterator"),k="keys",S="values",A="entries",N=function(){return this};i.exports=function(U,x,M,R,L,F,q){l(M,x,R);var j,W,D,C=function(te){if(te===L&&Y)return Y;if(!T&&te in B)return B[te];switch(te){case k:case S:case A:return function(){return new M(this,te)}}return function(){return new M(this)}},P=x+" Iterator",O=!1,B=U.prototype,G=B[E]||B["@@iterator"]||L&&B[L],Y=!T&&G||C(L),H=x=="Array"&&B.entries||G;if(H&&(j=d(H.call(new U)))!==Object.prototype&&j.next&&(a||d(j)===w||(s?s(j,w):u(j[E])||v(j,E,N)),f(j,P,!0,!0),a&&(m[P]=N)),_&&L==S&&G&&G.name!==S&&(!a&&b?p(B,"name",S):(O=!0,Y=function(){return o(G,this)})),L)if(W={values:C(S),keys:F?Y:C(k),entries:C(A)},q)for(D in W)(T||O||!(D in B))&&v(B,D,W[D]);else r({target:x,proto:!0,forced:T||O},W);return a&&!q||B[E]===Y||v(B,E,Y,{name:L}),m[x]=Y,W}},{"../internals/create-iterator-constructor":23,"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/export":41,"../internals/function-call":47,"../internals/function-name":48,"../internals/is-callable":67,"../internals/is-pure":72,"../internals/iterators":75,"../internals/iterators-core":74,"../internals/object-get-prototype-of":87,"../internals/object-set-prototype-of":92,"../internals/set-to-string-tag":103,"../internals/well-known-symbol":127}],31:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},{"../internals/fails":42}],32:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-object"),a=r.document,c=o(a)&&o(a.createElement);i.exports=function(u){return c?a.createElement(u):{}}},{"../internals/global":55,"../internals/is-object":71}],33:[function(e,i,n){i.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},{}],34:[function(e,i,n){var r=e("../internals/document-create-element")("span").classList,o=r&&r.constructor&&r.constructor.prototype;i.exports=o===Object.prototype?void 0:o},{"../internals/document-create-element":32}],35:[function(e,i,n){var r=e("../internals/engine-user-agent").match(/firefox\/(\d+)/i);i.exports=!!r&&+r[1]},{"../internals/engine-user-agent":37}],36:[function(e,i,n){var r=e("../internals/engine-user-agent");i.exports=/MSIE|Trident/.test(r)},{"../internals/engine-user-agent":37}],37:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("navigator","userAgent")||""},{"../internals/get-built-in":50}],38:[function(e,i,n){var r,o,a=e("../internals/global"),c=e("../internals/engine-user-agent"),u=a.process,l=a.Deno,d=u&&u.versions||l&&l.version,s=d&&d.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),i.exports=o},{"../internals/engine-user-agent":37,"../internals/global":55}],39:[function(e,i,n){var r=e("../internals/engine-user-agent").match(/AppleWebKit\/(\d+)\./);i.exports=!!r&&+r[1]},{"../internals/engine-user-agent":37}],40:[function(e,i,n){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],41:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/object-get-own-property-descriptor").f,a=e("../internals/create-non-enumerable-property"),c=e("../internals/define-built-in"),u=e("../internals/define-global-property"),l=e("../internals/copy-constructor-properties"),d=e("../internals/is-forced");i.exports=function(s,f){var p,v,g,m,y,_=s.target,b=s.global,w=s.stat;if(p=b?r:w?r[_]||u(_,{}):(r[_]||{}).prototype)for(v in f){if(m=f[v],g=s.dontCallGetSet?(y=o(p,v))&&y.value:p[v],!d(b?v:_+(w?".":"#")+v,s.forced)&&g!==void 0){if(typeof m==typeof g)continue;l(m,g)}(s.sham||g&&g.sham)&&a(m,"sham",!0),c(p,v,m,s)}}},{"../internals/copy-constructor-properties":21,"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/define-global-property":29,"../internals/global":55,"../internals/is-forced":69,"../internals/object-get-own-property-descriptor":84}],42:[function(e,i,n){i.exports=function(r){try{return!!r()}catch{return!0}}},{}],43:[function(e,i,n){e("../modules/es.regexp.exec");var r=e("../internals/function-uncurry-this"),o=e("../internals/define-built-in"),a=e("../internals/regexp-exec"),c=e("../internals/fails"),u=e("../internals/well-known-symbol"),l=e("../internals/create-non-enumerable-property"),d=u("species"),s=RegExp.prototype;i.exports=function(f,p,v,g){var m=u(f),y=!c(function(){var T={};return T[m]=function(){return 7},""[f](T)!=7}),_=y&&!c(function(){var T=!1,E=/a/;return f==="split"&&((E={}).constructor={},E.constructor[d]=function(){return E},E.flags="",E[m]=/./[m]),E.exec=function(){return T=!0,null},E[m](""),!T});if(!y||!_||v){var b=r(/./[m]),w=p(m,""[f],function(T,E,k,S,A){var N=r(T),U=E.exec;return U===a||U===s.exec?y&&!A?{done:!0,value:b(E,k,S)}:{done:!0,value:N(k,E,S)}:{done:!1}});o(String.prototype,f,w[0]),o(s,m,w[1])}g&&l(s[m],"sham",!0)}},{"../internals/create-non-enumerable-property":24,"../internals/define-built-in":27,"../internals/fails":42,"../internals/function-uncurry-this":49,"../internals/regexp-exec":96,"../internals/well-known-symbol":127,"../modules/es.regexp.exec":129}],44:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.apply,c=o.call;i.exports=typeof Reflect=="object"&&Reflect.apply||(r?c.bind(a):function(){return c.apply(a,arguments)})},{"../internals/function-bind-native":46}],45:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/a-callable"),a=e("../internals/function-bind-native"),c=r(r.bind);i.exports=function(u,l){return o(u),l===void 0?u:a?c(u,l):function(){return u.apply(l,arguments)}}},{"../internals/a-callable":1,"../internals/function-bind-native":46,"../internals/function-uncurry-this":49}],46:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){var o=function(){}.bind();return typeof o!="function"||o.hasOwnProperty("prototype")})},{"../internals/fails":42}],47:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype.call;i.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},{"../internals/function-bind-native":46}],48:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/has-own-property"),a=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(a,"name"),l=u&&function(){}.name==="something",d=u&&(!r||r&&c(a,"name").configurable);i.exports={EXISTS:u,PROPER:l,CONFIGURABLE:d}},{"../internals/descriptors":31,"../internals/has-own-property":56}],49:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.bind,c=o.call,u=r&&a.bind(c,c);i.exports=r?function(l){return l&&u(l)}:function(l){return l&&function(){return c.apply(l,arguments)}}},{"../internals/function-bind-native":46}],50:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=function(c){return o(c)?c:void 0};i.exports=function(c,u){return arguments.length<2?a(r[c]):r[c]&&r[c][u]}},{"../internals/global":55,"../internals/is-callable":67}],51:[function(e,i,n){var r=e("../internals/classof"),o=e("../internals/get-method"),a=e("../internals/iterators"),c=e("../internals/well-known-symbol")("iterator");i.exports=function(u){if(u!=null)return o(u,c)||o(u,"@@iterator")||a[r(u)]}},{"../internals/classof":20,"../internals/get-method":53,"../internals/iterators":75,"../internals/well-known-symbol":127}],52:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/a-callable"),a=e("../internals/an-object"),c=e("../internals/try-to-string"),u=e("../internals/get-iterator-method"),l=TypeError;i.exports=function(d,s){var f=arguments.length<2?u(d):s;if(o(f))return a(r(f,d));throw l(c(d)+" is not iterable")}},{"../internals/a-callable":1,"../internals/an-object":7,"../internals/function-call":47,"../internals/get-iterator-method":51,"../internals/try-to-string":120}],53:[function(e,i,n){var r=e("../internals/a-callable");i.exports=function(o,a){var c=o[a];return c==null?void 0:r(c)}},{"../internals/a-callable":1}],54:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=Math.floor,c=r("".charAt),u=r("".replace),l=r("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;i.exports=function(f,p,v,g,m,y){var _=v+f.length,b=g.length,w=s;return m!==void 0&&(m=o(m),w=d),u(y,w,function(T,E){var k;switch(c(E,0)){case"$":return"$";case"&":return f;case"`":return l(p,0,v);case"'":return l(p,_);case"<":k=m[l(E,1,-1)];break;default:var S=+E;if(S===0)return T;if(S>b){var A=a(S/10);return A===0?T:A<=b?g[A-1]===void 0?c(E,1):g[A-1]+c(E,1):T}k=g[S-1]}return k===void 0?"":k})}},{"../internals/function-uncurry-this":49,"../internals/to-object":113}],55:[function(e,i,n){(function(r){(function(){var o=function(a){return a&&a.Math==Math&&a};i.exports=o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||o(typeof r=="object"&&r)||function(){return this}()||Function("return this")()}).call(this)}).call(this,typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{})},{}],56:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=r({}.hasOwnProperty);i.exports=Object.hasOwn||function(c,u){return a(o(c),u)}},{"../internals/function-uncurry-this":49,"../internals/to-object":113}],57:[function(e,i,n){i.exports={}},{}],58:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("document","documentElement")},{"../internals/get-built-in":50}],59:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails"),a=e("../internals/document-create-element");i.exports=!r&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},{"../internals/descriptors":31,"../internals/document-create-element":32,"../internals/fails":42}],60:[function(e,i,n){var r=Array,o=Math.abs,a=Math.pow,c=Math.floor,u=Math.log,l=Math.LN2;i.exports={pack:function(d,s,f){var p,v,g,m=r(f),y=8*f-s-1,_=(1<<y)-1,b=_>>1,w=s===23?a(2,-24)-a(2,-77):0,T=d<0||d===0&&1/d<0?1:0,E=0;for((d=o(d))!=d||d===1/0?(v=d!=d?1:0,p=_):(p=c(u(d)/l),d*(g=a(2,-p))<1&&(p--,g*=2),(d+=p+b>=1?w/g:w*a(2,1-b))*g>=2&&(p++,g/=2),p+b>=_?(v=0,p=_):p+b>=1?(v=(d*g-1)*a(2,s),p+=b):(v=d*a(2,b-1)*a(2,s),p=0));s>=8;)m[E++]=255&v,v/=256,s-=8;for(p=p<<s|v,y+=s;y>0;)m[E++]=255&p,p/=256,y-=8;return m[--E]|=128*T,m},unpack:function(d,s){var f,p=d.length,v=8*p-s-1,g=(1<<v)-1,m=g>>1,y=v-7,_=p-1,b=d[_--],w=127&b;for(b>>=7;y>0;)w=256*w+d[_--],y-=8;for(f=w&(1<<-y)-1,w>>=-y,y+=s;y>0;)f=256*f+d[_--],y-=8;if(w===0)w=1-m;else{if(w===g)return f?NaN:b?-1/0:1/0;f+=a(2,s),w-=m}return(b?-1:1)*f*a(2,w-s)}}},{}],61:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/classof-raw"),c=Object,u=r("".split);i.exports=o(function(){return!c("z").propertyIsEnumerable(0)})?function(l){return a(l)=="String"?u(l,""):c(l)}:c},{"../internals/classof-raw":19,"../internals/fails":42,"../internals/function-uncurry-this":49}],62:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/is-object"),a=e("../internals/object-set-prototype-of");i.exports=function(c,u,l){var d,s;return a&&r(d=u.constructor)&&d!==l&&o(s=d.prototype)&&s!==l.prototype&&a(c,s),c}},{"../internals/is-callable":67,"../internals/is-object":71,"../internals/object-set-prototype-of":92}],63:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/is-callable"),a=e("../internals/shared-store"),c=r(Function.toString);o(a.inspectSource)||(a.inspectSource=function(u){return c(u)}),i.exports=a.inspectSource},{"../internals/function-uncurry-this":49,"../internals/is-callable":67,"../internals/shared-store":105}],64:[function(e,i,n){var r,o,a,c=e("../internals/native-weak-map"),u=e("../internals/global"),l=e("../internals/function-uncurry-this"),d=e("../internals/is-object"),s=e("../internals/create-non-enumerable-property"),f=e("../internals/has-own-property"),p=e("../internals/shared-store"),v=e("../internals/shared-key"),g=e("../internals/hidden-keys"),m="Object already initialized",y=u.TypeError,_=u.WeakMap;if(c||p.state){var b=p.state||(p.state=new _),w=l(b.get),T=l(b.has),E=l(b.set);r=function(S,A){if(T(b,S))throw new y(m);return A.facade=S,E(b,S,A),A},o=function(S){return w(b,S)||{}},a=function(S){return T(b,S)}}else{var k=v("state");g[k]=!0,r=function(S,A){if(f(S,k))throw new y(m);return A.facade=S,s(S,k,A),A},o=function(S){return f(S,k)?S[k]:{}},a=function(S){return f(S,k)}}i.exports={set:r,get:o,has:a,enforce:function(S){return a(S)?o(S):r(S,{})},getterFor:function(S){return function(A){var N;if(!d(A)||(N=o(A)).type!==S)throw y("Incompatible receiver, "+S+" required");return N}}}},{"../internals/create-non-enumerable-property":24,"../internals/function-uncurry-this":49,"../internals/global":55,"../internals/has-own-property":56,"../internals/hidden-keys":57,"../internals/is-object":71,"../internals/native-weak-map":80,"../internals/shared-key":104,"../internals/shared-store":105}],65:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/iterators"),a=r("iterator"),c=Array.prototype;i.exports=function(u){return u!==void 0&&(o.Array===u||c[a]===u)}},{"../internals/iterators":75,"../internals/well-known-symbol":127}],66:[function(e,i,n){var r=e("../internals/classof-raw");i.exports=Array.isArray||function(o){return r(o)=="Array"}},{"../internals/classof-raw":19}],67:[function(e,i,n){i.exports=function(r){return typeof r=="function"}},{}],68:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/is-callable"),c=e("../internals/classof"),u=e("../internals/get-built-in"),l=e("../internals/inspect-source"),d=function(){},s=[],f=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=r(p.exec),g=!p.exec(d),m=function(_){if(!a(_))return!1;try{return f(d,s,_),!0}catch{return!1}},y=function(_){if(!a(_))return!1;switch(c(_)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return g||!!v(p,l(_))}catch{return!0}};y.sham=!0,i.exports=!f||o(function(){var _;return m(m.call)||!m(Object)||!m(function(){_=!0})||_})?y:m},{"../internals/classof":20,"../internals/fails":42,"../internals/function-uncurry-this":49,"../internals/get-built-in":50,"../internals/inspect-source":63,"../internals/is-callable":67}],69:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=/#|\.prototype\./,c=function(f,p){var v=l[u(f)];return v==s||v!=d&&(o(p)?r(p):!!p)},u=c.normalize=function(f){return String(f).replace(a,".").toLowerCase()},l=c.data={},d=c.NATIVE="N",s=c.POLYFILL="P";i.exports=c},{"../internals/fails":42,"../internals/is-callable":67}],70:[function(e,i,n){var r=e("../internals/is-object"),o=Math.floor;i.exports=Number.isInteger||function(a){return!r(a)&&isFinite(a)&&o(a)===a}},{"../internals/is-object":71}],71:[function(e,i,n){var r=e("../internals/is-callable");i.exports=function(o){return typeof o=="object"?o!==null:r(o)}},{"../internals/is-callable":67}],72:[function(e,i,n){i.exports=!1},{}],73:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/is-callable"),a=e("../internals/object-is-prototype-of"),c=e("../internals/use-symbol-as-uid"),u=Object;i.exports=c?function(l){return typeof l=="symbol"}:function(l){var d=r("Symbol");return o(d)&&a(d.prototype,u(l))}},{"../internals/get-built-in":50,"../internals/is-callable":67,"../internals/object-is-prototype-of":88,"../internals/use-symbol-as-uid":125}],74:[function(e,i,n){var r,o,a,c=e("../internals/fails"),u=e("../internals/is-callable"),l=e("../internals/object-create"),d=e("../internals/object-get-prototype-of"),s=e("../internals/define-built-in"),f=e("../internals/well-known-symbol"),p=e("../internals/is-pure"),v=f("iterator"),g=!1;[].keys&&("next"in(a=[].keys())?(o=d(d(a)))!==Object.prototype&&(r=o):g=!0),r==null||c(function(){var m={};return r[v].call(m)!==m})?r={}:p&&(r=l(r)),u(r[v])||s(r,v,function(){return this}),i.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},{"../internals/define-built-in":27,"../internals/fails":42,"../internals/is-callable":67,"../internals/is-pure":72,"../internals/object-create":81,"../internals/object-get-prototype-of":87,"../internals/well-known-symbol":127}],75:[function(e,i,n){arguments[4][57][0].apply(n,arguments)},{dup:57}],76:[function(e,i,n){var r=e("../internals/to-length");i.exports=function(o){return r(o.length)}},{"../internals/to-length":112}],77:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=e("../internals/has-own-property"),c=e("../internals/descriptors"),u=e("../internals/function-name").CONFIGURABLE,l=e("../internals/inspect-source"),d=e("../internals/internal-state"),s=d.enforce,f=d.get,p=Object.defineProperty,v=c&&!r(function(){return p(function(){},"length",{value:8}).length!==8}),g=String(String).split("String"),m=i.exports=function(y,_,b){String(_).slice(0,7)==="Symbol("&&(_="["+String(_).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),b&&b.getter&&(_="get "+_),b&&b.setter&&(_="set "+_),(!a(y,"name")||u&&y.name!==_)&&(c?p(y,"name",{value:_,configurable:!0}):y.name=_),v&&b&&a(b,"arity")&&y.length!==b.arity&&p(y,"length",{value:b.arity});try{b&&a(b,"constructor")&&b.constructor?c&&p(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch{}var w=s(y);return a(w,"source")||(w.source=g.join(typeof _=="string"?_:"")),y};Function.prototype.toString=m(function(){return o(this)&&f(this).source||l(this)},"toString")},{"../internals/descriptors":31,"../internals/fails":42,"../internals/function-name":48,"../internals/has-own-property":56,"../internals/inspect-source":63,"../internals/internal-state":64,"../internals/is-callable":67}],78:[function(e,i,n){var r=Math.ceil,o=Math.floor;i.exports=Math.trunc||function(a){var c=+a;return(c>0?o:r)(c)}},{}],79:[function(e,i,n){var r=e("../internals/engine-v8-version"),o=e("../internals/fails");i.exports=!!Object.getOwnPropertySymbols&&!o(function(){var a=Symbol();return!String(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&r&&r<41})},{"../internals/engine-v8-version":38,"../internals/fails":42}],80:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=e("../internals/inspect-source"),c=r.WeakMap;i.exports=o(c)&&/native code/.test(a(c))},{"../internals/global":55,"../internals/inspect-source":63,"../internals/is-callable":67}],81:[function(e,i,n){var r,o=e("../internals/an-object"),a=e("../internals/object-define-properties"),c=e("../internals/enum-bug-keys"),u=e("../internals/hidden-keys"),l=e("../internals/html"),d=e("../internals/document-create-element"),s=e("../internals/shared-key")("IE_PROTO"),f=function(){},p=function(m){return"<script>"+m+"<\/script>"},v=function(m){m.write(p("")),m.close();var y=m.parentWindow.Object;return m=null,y},g=function(){try{r=new ActiveXObject("htmlfile")}catch{}var m,y;g=typeof document<"u"?document.domain&&r?v(r):((y=d("iframe")).style.display="none",l.appendChild(y),y.src="javascript:",(m=y.contentWindow.document).open(),m.write(p("document.F=Object")),m.close(),m.F):v(r);for(var _=c.length;_--;)delete g.prototype[c[_]];return g()};u[s]=!0,i.exports=Object.create||function(m,y){var _;return m!==null?(f.prototype=o(m),_=new f,f.prototype=null,_[s]=m):_=g(),y===void 0?_:a.f(_,y)}},{"../internals/an-object":7,"../internals/document-create-element":32,"../internals/enum-bug-keys":40,"../internals/hidden-keys":57,"../internals/html":58,"../internals/object-define-properties":82,"../internals/shared-key":104}],82:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/v8-prototype-define-bug"),a=e("../internals/object-define-property"),c=e("../internals/an-object"),u=e("../internals/to-indexed-object"),l=e("../internals/object-keys");n.f=r&&!o?Object.defineProperties:function(d,s){c(d);for(var f,p=u(s),v=l(s),g=v.length,m=0;g>m;)a.f(d,f=v[m++],p[f]);return d}},{"../internals/an-object":7,"../internals/descriptors":31,"../internals/object-define-property":83,"../internals/object-keys":90,"../internals/to-indexed-object":110,"../internals/v8-prototype-define-bug":126}],83:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/ie8-dom-define"),a=e("../internals/v8-prototype-define-bug"),c=e("../internals/an-object"),u=e("../internals/to-property-key"),l=TypeError,d=Object.defineProperty,s=Object.getOwnPropertyDescriptor;n.f=r?a?function(f,p,v){if(c(f),p=u(p),c(v),typeof f=="function"&&p==="prototype"&&"value"in v&&"writable"in v&&!v.writable){var g=s(f,p);g&&g.writable&&(f[p]=v.value,v={configurable:"configurable"in v?v.configurable:g.configurable,enumerable:"enumerable"in v?v.enumerable:g.enumerable,writable:!1})}return d(f,p,v)}:d:function(f,p,v){if(c(f),p=u(p),c(v),o)try{return d(f,p,v)}catch{}if("get"in v||"set"in v)throw l("Accessors not supported");return"value"in v&&(f[p]=v.value),f}},{"../internals/an-object":7,"../internals/descriptors":31,"../internals/ie8-dom-define":59,"../internals/to-property-key":117,"../internals/v8-prototype-define-bug":126}],84:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/function-call"),a=e("../internals/object-property-is-enumerable"),c=e("../internals/create-property-descriptor"),u=e("../internals/to-indexed-object"),l=e("../internals/to-property-key"),d=e("../internals/has-own-property"),s=e("../internals/ie8-dom-define"),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(p,v){if(p=u(p),v=l(v),s)try{return f(p,v)}catch{}if(d(p,v))return c(!o(a.f,p,v),p[v])}},{"../internals/create-property-descriptor":25,"../internals/descriptors":31,"../internals/function-call":47,"../internals/has-own-property":56,"../internals/ie8-dom-define":59,"../internals/object-property-is-enumerable":91,"../internals/to-indexed-object":110,"../internals/to-property-key":117}],85:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(a){return r(a,o)}},{"../internals/enum-bug-keys":40,"../internals/object-keys-internal":89}],86:[function(e,i,n){n.f=Object.getOwnPropertySymbols},{}],87:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/is-callable"),a=e("../internals/to-object"),c=e("../internals/shared-key"),u=e("../internals/correct-prototype-getter"),l=c("IE_PROTO"),d=Object,s=d.prototype;i.exports=u?d.getPrototypeOf:function(f){var p=a(f);if(r(p,l))return p[l];var v=p.constructor;return o(v)&&p instanceof v?v.prototype:p instanceof d?s:null}},{"../internals/correct-prototype-getter":22,"../internals/has-own-property":56,"../internals/is-callable":67,"../internals/shared-key":104,"../internals/to-object":113}],88:[function(e,i,n){var r=e("../internals/function-uncurry-this");i.exports=r({}.isPrototypeOf)},{"../internals/function-uncurry-this":49}],89:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/has-own-property"),a=e("../internals/to-indexed-object"),c=e("../internals/array-includes").indexOf,u=e("../internals/hidden-keys"),l=r([].push);i.exports=function(d,s){var f,p=a(d),v=0,g=[];for(f in p)!o(u,f)&&o(p,f)&&l(g,f);for(;s.length>v;)o(p,f=s[v++])&&(~c(g,f)||l(g,f));return g}},{"../internals/array-includes":12,"../internals/function-uncurry-this":49,"../internals/has-own-property":56,"../internals/hidden-keys":57,"../internals/to-indexed-object":110}],90:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys");i.exports=Object.keys||function(a){return r(a,o)}},{"../internals/enum-bug-keys":40,"../internals/object-keys-internal":89}],91:[function(e,i,n){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);n.f=a?function(c){var u=o(this,c);return!!u&&u.enumerable}:r},{}],92:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/an-object"),a=e("../internals/a-possible-prototype");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c,u=!1,l={};try{(c=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(l,[]),u=l instanceof Array}catch{}return function(d,s){return o(d),a(s),u?c(d,s):d.__proto__=s,d}}():void 0)},{"../internals/a-possible-prototype":3,"../internals/an-object":7,"../internals/function-uncurry-this":49}],93:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-callable"),a=e("../internals/is-object"),c=TypeError;i.exports=function(u,l){var d,s;if(l==="string"&&o(d=u.toString)&&!a(s=r(d,u))||o(d=u.valueOf)&&!a(s=r(d,u))||l!=="string"&&o(d=u.toString)&&!a(s=r(d,u)))return s;throw c("Can't convert object to primitive value")}},{"../internals/function-call":47,"../internals/is-callable":67,"../internals/is-object":71}],94:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/function-uncurry-this"),a=e("../internals/object-get-own-property-names"),c=e("../internals/object-get-own-property-symbols"),u=e("../internals/an-object"),l=o([].concat);i.exports=r("Reflect","ownKeys")||function(d){var s=a.f(u(d)),f=c.f;return f?l(s,f(d)):s}},{"../internals/an-object":7,"../internals/function-uncurry-this":49,"../internals/get-built-in":50,"../internals/object-get-own-property-names":85,"../internals/object-get-own-property-symbols":86}],95:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/an-object"),a=e("../internals/is-callable"),c=e("../internals/classof-raw"),u=e("../internals/regexp-exec"),l=TypeError;i.exports=function(d,s){var f=d.exec;if(a(f)){var p=r(f,d,s);return p!==null&&o(p),p}if(c(d)==="RegExp")return r(u,d,s);throw l("RegExp#exec called on incompatible receiver")}},{"../internals/an-object":7,"../internals/classof-raw":19,"../internals/function-call":47,"../internals/is-callable":67,"../internals/regexp-exec":96}],96:[function(e,i,n){var r,o,a=e("../internals/function-call"),c=e("../internals/function-uncurry-this"),u=e("../internals/to-string"),l=e("../internals/regexp-flags"),d=e("../internals/regexp-sticky-helpers"),s=e("../internals/shared"),f=e("../internals/object-create"),p=e("../internals/internal-state").get,v=e("../internals/regexp-unsupported-dot-all"),g=e("../internals/regexp-unsupported-ncg"),m=s("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,_=y,b=c("".charAt),w=c("".indexOf),T=c("".replace),E=c("".slice),k=(o=/b*/g,a(y,r=/a/,"a"),a(y,o,"a"),r.lastIndex!==0||o.lastIndex!==0),S=d.BROKEN_CARET,A=/()??/.exec("")[1]!==void 0;(k||A||S||v||g)&&(_=function(N){var U,x,M,R,L,F,q,j=this,W=p(j),D=u(N),C=W.raw;if(C)return C.lastIndex=j.lastIndex,U=a(_,C,D),j.lastIndex=C.lastIndex,U;var P=W.groups,O=S&&j.sticky,B=a(l,j),G=j.source,Y=0,H=D;if(O&&(B=T(B,"y",""),w(B,"g")===-1&&(B+="g"),H=E(D,j.lastIndex),j.lastIndex>0&&(!j.multiline||j.multiline&&b(D,j.lastIndex-1)!==`
`)&&(G="(?: "+G+")",H=" "+H,Y++),x=new RegExp("^(?:"+G+")",B)),A&&(x=new RegExp("^"+G+"$(?!\\s)",B)),k&&(M=j.lastIndex),R=a(y,O?x:j,H),O?R?(R.input=E(R.input,Y),R[0]=E(R[0],Y),R.index=j.lastIndex,j.lastIndex+=R[0].length):j.lastIndex=0:k&&R&&(j.lastIndex=j.global?R.index+R[0].length:M),A&&R&&R.length>1&&a(m,R[0],x,function(){for(L=1;L<arguments.length-2;L++)arguments[L]===void 0&&(R[L]=void 0)}),R&&P)for(R.groups=F=f(null),L=0;L<P.length;L++)F[(q=P[L])[0]]=R[q[1]];return R}),i.exports=_},{"../internals/function-call":47,"../internals/function-uncurry-this":49,"../internals/internal-state":64,"../internals/object-create":81,"../internals/regexp-flags":97,"../internals/regexp-sticky-helpers":98,"../internals/regexp-unsupported-dot-all":99,"../internals/regexp-unsupported-ncg":100,"../internals/shared":106,"../internals/to-string":119}],97:[function(e,i,n){var r=e("../internals/an-object");i.exports=function(){var o=r(this),a="";return o.hasIndices&&(a+="d"),o.global&&(a+="g"),o.ignoreCase&&(a+="i"),o.multiline&&(a+="m"),o.dotAll&&(a+="s"),o.unicode&&(a+="u"),o.unicodeSets&&(a+="v"),o.sticky&&(a+="y"),a}},{"../internals/an-object":7}],98:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp,a=r(function(){var l=o("a","y");return l.lastIndex=2,l.exec("abcd")!=null}),c=a||r(function(){return!o("a","y").sticky}),u=a||r(function(){var l=o("^r","gy");return l.lastIndex=2,l.exec("str")!=null});i.exports={BROKEN_CARET:u,MISSED_STICKY:c,UNSUPPORTED_Y:a}},{"../internals/fails":42,"../internals/global":55}],99:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o(".","s");return!(a.dotAll&&a.exec(`
`)&&a.flags==="s")})},{"../internals/fails":42,"../internals/global":55}],100:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o("(?<a>b)","g");return a.exec("b").groups.a!=="b"||"b".replace(a,"$<a>c")!=="bc"})},{"../internals/fails":42,"../internals/global":55}],101:[function(e,i,n){var r=TypeError;i.exports=function(o){if(o==null)throw r("Can't call method on "+o);return o}},{}],102:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/object-define-property"),a=e("../internals/well-known-symbol"),c=e("../internals/descriptors"),u=a("species");i.exports=function(l){var d=r(l),s=o.f;c&&d&&!d[u]&&s(d,u,{configurable:!0,get:function(){return this}})}},{"../internals/descriptors":31,"../internals/get-built-in":50,"../internals/object-define-property":83,"../internals/well-known-symbol":127}],103:[function(e,i,n){var r=e("../internals/object-define-property").f,o=e("../internals/has-own-property"),a=e("../internals/well-known-symbol")("toStringTag");i.exports=function(c,u,l){c&&!l&&(c=c.prototype),c&&!o(c,a)&&r(c,a,{configurable:!0,value:u})}},{"../internals/has-own-property":56,"../internals/object-define-property":83,"../internals/well-known-symbol":127}],104:[function(e,i,n){var r=e("../internals/shared"),o=e("../internals/uid"),a=r("keys");i.exports=function(c){return a[c]||(a[c]=o(c))}},{"../internals/shared":106,"../internals/uid":124}],105:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/define-global-property"),a="__core-js_shared__",c=r[a]||o(a,{});i.exports=c},{"../internals/define-global-property":29,"../internals/global":55}],106:[function(e,i,n){var r=e("../internals/is-pure"),o=e("../internals/shared-store");(i.exports=function(a,c){return o[a]||(o[a]=c!==void 0?c:{})})("versions",[]).push({version:"3.23.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",source:"https://github.com/zloirock/core-js"})},{"../internals/is-pure":72,"../internals/shared-store":105}],107:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-integer-or-infinity"),a=e("../internals/to-string"),c=e("../internals/require-object-coercible"),u=r("".charAt),l=r("".charCodeAt),d=r("".slice),s=function(f){return function(p,v){var g,m,y=a(c(p)),_=o(v),b=y.length;return _<0||_>=b?f?"":void 0:(g=l(y,_))<55296||g>56319||_+1===b||(m=l(y,_+1))<56320||m>57343?f?u(y,_):g:f?d(y,_,_+2):m-56320+(g-55296<<10)+65536}};i.exports={codeAt:s(!1),charAt:s(!0)}},{"../internals/function-uncurry-this":49,"../internals/require-object-coercible":101,"../internals/to-integer-or-infinity":111,"../internals/to-string":119}],108:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.max,a=Math.min;i.exports=function(c,u){var l=r(c);return l<0?o(l+u,0):a(l,u)}},{"../internals/to-integer-or-infinity":111}],109:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=e("../internals/to-length"),a=RangeError;i.exports=function(c){if(c===void 0)return 0;var u=r(c),l=o(u);if(u!==l)throw a("Wrong length or index");return l}},{"../internals/to-integer-or-infinity":111,"../internals/to-length":112}],110:[function(e,i,n){var r=e("../internals/indexed-object"),o=e("../internals/require-object-coercible");i.exports=function(a){return r(o(a))}},{"../internals/indexed-object":61,"../internals/require-object-coercible":101}],111:[function(e,i,n){var r=e("../internals/math-trunc");i.exports=function(o){var a=+o;return a!=a||a===0?0:r(a)}},{"../internals/math-trunc":78}],112:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.min;i.exports=function(a){return a>0?o(r(a),9007199254740991):0}},{"../internals/to-integer-or-infinity":111}],113:[function(e,i,n){var r=e("../internals/require-object-coercible"),o=Object;i.exports=function(a){return o(r(a))}},{"../internals/require-object-coercible":101}],114:[function(e,i,n){var r=e("../internals/to-positive-integer"),o=RangeError;i.exports=function(a,c){var u=r(a);if(u%c)throw o("Wrong offset");return u}},{"../internals/to-positive-integer":115}],115:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=RangeError;i.exports=function(a){var c=r(a);if(c<0)throw o("The argument can't be less than 0");return c}},{"../internals/to-integer-or-infinity":111}],116:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-object"),a=e("../internals/is-symbol"),c=e("../internals/get-method"),u=e("../internals/ordinary-to-primitive"),l=e("../internals/well-known-symbol"),d=TypeError,s=l("toPrimitive");i.exports=function(f,p){if(!o(f)||a(f))return f;var v,g=c(f,s);if(g){if(p===void 0&&(p="default"),v=r(g,f,p),!o(v)||a(v))return v;throw d("Can't convert object to primitive value")}return p===void 0&&(p="number"),u(f,p)}},{"../internals/function-call":47,"../internals/get-method":53,"../internals/is-object":71,"../internals/is-symbol":73,"../internals/ordinary-to-primitive":93,"../internals/well-known-symbol":127}],117:[function(e,i,n){var r=e("../internals/to-primitive"),o=e("../internals/is-symbol");i.exports=function(a){var c=r(a,"string");return o(c)?c:c+""}},{"../internals/is-symbol":73,"../internals/to-primitive":116}],118:[function(e,i,n){var r={};r[e("../internals/well-known-symbol")("toStringTag")]="z",i.exports=String(r)==="[object z]"},{"../internals/well-known-symbol":127}],119:[function(e,i,n){var r=e("../internals/classof"),o=String;i.exports=function(a){if(r(a)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return o(a)}},{"../internals/classof":20}],120:[function(e,i,n){var r=String;i.exports=function(o){try{return r(o)}catch{return"Object"}}},{}],121:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/global"),a=e("../internals/function-call"),c=e("../internals/descriptors"),u=e("../internals/typed-array-constructors-require-wrappers"),l=e("../internals/array-buffer-view-core"),d=e("../internals/array-buffer"),s=e("../internals/an-instance"),f=e("../internals/create-property-descriptor"),p=e("../internals/create-non-enumerable-property"),v=e("../internals/is-integral-number"),g=e("../internals/to-length"),m=e("../internals/to-index"),y=e("../internals/to-offset"),_=e("../internals/to-property-key"),b=e("../internals/has-own-property"),w=e("../internals/classof"),T=e("../internals/is-object"),E=e("../internals/is-symbol"),k=e("../internals/object-create"),S=e("../internals/object-is-prototype-of"),A=e("../internals/object-set-prototype-of"),N=e("../internals/object-get-own-property-names").f,U=e("../internals/typed-array-from"),x=e("../internals/array-iteration").forEach,M=e("../internals/set-species"),R=e("../internals/object-define-property"),L=e("../internals/object-get-own-property-descriptor"),F=e("../internals/internal-state"),q=e("../internals/inherit-if-required"),j=F.get,W=F.set,D=F.enforce,C=R.f,P=L.f,O=Math.round,B=o.RangeError,G=d.ArrayBuffer,Y=G.prototype,H=d.DataView,te=l.NATIVE_ARRAY_BUFFER_VIEWS,ue=l.TYPED_ARRAY_TAG,_e=l.TypedArray,J=l.TypedArrayPrototype,re=l.aTypedArrayConstructor,pe=l.isTypedArray,we="BYTES_PER_ELEMENT",me="Wrong length",ye=function(K,X){re(K);for(var fe=0,Pe=X.length,Le=new K(Pe);Pe>fe;)Le[fe]=X[fe++];return Le},$e=function(K,X){C(K,X,{get:function(){return j(this)[X]}})},Fe=function(K){var X;return S(Y,K)||(X=w(K))=="ArrayBuffer"||X=="SharedArrayBuffer"},Je=function(K,X){return pe(K)&&!E(X)&&X in K&&v(+X)&&X>=0},ct=function(K,X){return X=_(X),Je(K,X)?f(2,K[X]):P(K,X)},mt=function(K,X,fe){return X=_(X),!(Je(K,X)&&T(fe)&&b(fe,"value"))||b(fe,"get")||b(fe,"set")||fe.configurable||b(fe,"writable")&&!fe.writable||b(fe,"enumerable")&&!fe.enumerable?C(K,X,fe):(K[X]=fe.value,K)};c?(te||(L.f=ct,R.f=mt,$e(J,"buffer"),$e(J,"byteOffset"),$e(J,"byteLength"),$e(J,"length")),r({target:"Object",stat:!0,forced:!te},{getOwnPropertyDescriptor:ct,defineProperty:mt}),i.exports=function(K,X,fe){var Pe=K.match(/\d+$/)[0]/8,Le=K+(fe?"Clamped":"")+"Array",Ne="get"+K,ze="set"+K,De=o[Le],ve=De,Xe=ve&&ve.prototype,je={},Oe=function(He,Ae){C(He,Ae,{get:function(){return function(We,$){var Se=j(We);return Se.view[Ne]($*Pe+Se.byteOffset,!0)}(this,Ae)},set:function(We){return function($,Se,se){var Ce=j($);fe&&(se=(se=O(se))<0?0:se>255?255:255&se),Ce.view[ze](Se*Pe+Ce.byteOffset,se,!0)}(this,Ae,We)},enumerable:!0})};te?u&&(ve=X(function(He,Ae,We,$){return s(He,Xe),q(T(Ae)?Fe(Ae)?$!==void 0?new De(Ae,y(We,Pe),$):We!==void 0?new De(Ae,y(We,Pe)):new De(Ae):pe(Ae)?ye(ve,Ae):a(U,ve,Ae):new De(m(Ae)),He,ve)}),A&&A(ve,_e),x(N(De),function(He){He in ve||p(ve,He,De[He])}),ve.prototype=Xe):(ve=X(function(He,Ae,We,$){s(He,Xe);var Se,se,Ce,Ge=0,vt=0;if(T(Ae)){if(!Fe(Ae))return pe(Ae)?ye(ve,Ae):a(U,ve,Ae);Se=Ae,vt=y(We,Pe);var Mt=Ae.byteLength;if($===void 0){if(Mt%Pe||(se=Mt-vt)<0)throw B(me)}else if((se=g($)*Pe)+vt>Mt)throw B(me);Ce=se/Pe}else Ce=m(Ae),Se=new G(se=Ce*Pe);for(W(He,{buffer:Se,byteOffset:vt,byteLength:se,length:Ce,view:new H(Se)});Ge<Ce;)Oe(He,Ge++)}),A&&A(ve,_e),Xe=ve.prototype=k(J)),Xe.constructor!==ve&&p(Xe,"constructor",ve),D(Xe).TypedArrayConstructor=ve,ue&&p(Xe,ue,Le);var Ke=ve!=De;je[Le]=ve,r({global:!0,constructor:!0,forced:Ke,sham:!te},je),we in ve||p(ve,we,Pe),we in Xe||p(Xe,we,Pe),M(Le)}):i.exports=function(){}},{"../internals/an-instance":6,"../internals/array-buffer":10,"../internals/array-buffer-view-core":9,"../internals/array-iteration":13,"../internals/classof":20,"../internals/create-non-enumerable-property":24,"../internals/create-property-descriptor":25,"../internals/descriptors":31,"../internals/export":41,"../internals/function-call":47,"../internals/global":55,"../internals/has-own-property":56,"../internals/inherit-if-required":62,"../internals/internal-state":64,"../internals/is-integral-number":70,"../internals/is-object":71,"../internals/is-symbol":73,"../internals/object-create":81,"../internals/object-define-property":83,"../internals/object-get-own-property-descriptor":84,"../internals/object-get-own-property-names":85,"../internals/object-is-prototype-of":88,"../internals/object-set-prototype-of":92,"../internals/set-species":102,"../internals/to-index":109,"../internals/to-length":112,"../internals/to-offset":114,"../internals/to-property-key":117,"../internals/typed-array-constructors-require-wrappers":122,"../internals/typed-array-from":123}],122:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/fails"),a=e("../internals/check-correctness-of-iteration"),c=e("../internals/array-buffer-view-core").NATIVE_ARRAY_BUFFER_VIEWS,u=r.ArrayBuffer,l=r.Int8Array;i.exports=!c||!o(function(){l(1)})||!o(function(){new l(-1)})||!a(function(d){new l,new l(null),new l(1.5),new l(d)},!0)||o(function(){return new l(new u(2),1,void 0).length!==1})},{"../internals/array-buffer-view-core":9,"../internals/check-correctness-of-iteration":18,"../internals/fails":42,"../internals/global":55}],123:[function(e,i,n){var r=e("../internals/function-bind-context"),o=e("../internals/function-call"),a=e("../internals/a-constructor"),c=e("../internals/to-object"),u=e("../internals/length-of-array-like"),l=e("../internals/get-iterator"),d=e("../internals/get-iterator-method"),s=e("../internals/is-array-iterator-method"),f=e("../internals/array-buffer-view-core").aTypedArrayConstructor;i.exports=function(p){var v,g,m,y,_,b,w=a(this),T=c(p),E=arguments.length,k=E>1?arguments[1]:void 0,S=k!==void 0,A=d(T);if(A&&!s(A))for(b=(_=l(T,A)).next,T=[];!(y=o(b,_)).done;)T.push(y.value);for(S&&E>2&&(k=r(k,arguments[2])),g=u(T),m=new(f(w))(g),v=0;g>v;v++)m[v]=S?k(T[v],v):T[v];return m}},{"../internals/a-constructor":2,"../internals/array-buffer-view-core":9,"../internals/function-bind-context":45,"../internals/function-call":47,"../internals/get-iterator":52,"../internals/get-iterator-method":51,"../internals/is-array-iterator-method":65,"../internals/length-of-array-like":76,"../internals/to-object":113}],124:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=0,a=Math.random(),c=r(1 .toString);i.exports=function(u){return"Symbol("+(u===void 0?"":u)+")_"+c(++o+a,36)}},{"../internals/function-uncurry-this":49}],125:[function(e,i,n){var r=e("../internals/native-symbol");i.exports=r&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},{"../internals/native-symbol":79}],126:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails");i.exports=r&&o(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},{"../internals/descriptors":31,"../internals/fails":42}],127:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/shared"),a=e("../internals/has-own-property"),c=e("../internals/uid"),u=e("../internals/native-symbol"),l=e("../internals/use-symbol-as-uid"),d=o("wks"),s=r.Symbol,f=s&&s.for,p=l?s:s&&s.withoutSetter||c;i.exports=function(v){if(!a(d,v)||!u&&typeof d[v]!="string"){var g="Symbol."+v;u&&a(s,v)?d[v]=s[v]:d[v]=l&&f?f(g):p(g)}return d[v]}},{"../internals/global":55,"../internals/has-own-property":56,"../internals/native-symbol":79,"../internals/shared":106,"../internals/uid":124,"../internals/use-symbol-as-uid":125}],128:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/add-to-unscopables"),a=e("../internals/iterators"),c=e("../internals/internal-state"),u=e("../internals/object-define-property").f,l=e("../internals/define-iterator"),d=e("../internals/is-pure"),s=e("../internals/descriptors"),f="Array Iterator",p=c.set,v=c.getterFor(f);i.exports=l(Array,"Array",function(m,y){p(this,{type:f,target:r(m),index:0,kind:y})},function(){var m=v(this),y=m.target,_=m.kind,b=m.index++;return!y||b>=y.length?(m.target=void 0,{value:void 0,done:!0}):_=="keys"?{value:b,done:!1}:_=="values"?{value:y[b],done:!1}:{value:[b,y[b]],done:!1}},"values");var g=a.Arguments=a.Array;if(o("keys"),o("values"),o("entries"),!d&&s&&g.name!=="values")try{u(g,"name",{value:"values"})}catch{}},{"../internals/add-to-unscopables":4,"../internals/define-iterator":30,"../internals/descriptors":31,"../internals/internal-state":64,"../internals/is-pure":72,"../internals/iterators":75,"../internals/object-define-property":83,"../internals/to-indexed-object":110}],129:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/regexp-exec");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},{"../internals/export":41,"../internals/regexp-exec":96}],130:[function(e,i,n){var r=e("../internals/function-apply"),o=e("../internals/function-call"),a=e("../internals/function-uncurry-this"),c=e("../internals/fix-regexp-well-known-symbol-logic"),u=e("../internals/fails"),l=e("../internals/an-object"),d=e("../internals/is-callable"),s=e("../internals/to-integer-or-infinity"),f=e("../internals/to-length"),p=e("../internals/to-string"),v=e("../internals/require-object-coercible"),g=e("../internals/advance-string-index"),m=e("../internals/get-method"),y=e("../internals/get-substitution"),_=e("../internals/regexp-exec-abstract"),b=e("../internals/well-known-symbol")("replace"),w=Math.max,T=Math.min,E=a([].concat),k=a([].push),S=a("".indexOf),A=a("".slice),N="a".replace(/./,"$0")==="$0",U=!!/./[b]&&/./[b]("a","$0")==="";c("replace",function(x,M,R){var L=U?"$":"$0";return[function(F,q){var j=v(this),W=F==null?void 0:m(F,b);return W?o(W,F,j,q):o(M,p(j),F,q)},function(F,q){var j=l(this),W=p(F);if(typeof q=="string"&&S(q,L)===-1&&S(q,"$<")===-1){var D=R(M,j,W,q);if(D.done)return D.value}var C=d(q);C||(q=p(q));var P=j.global;if(P){var O=j.unicode;j.lastIndex=0}for(var B=[];;){var G=_(j,W);if(G===null||(k(B,G),!P))break;p(G[0])===""&&(j.lastIndex=g(W,f(j.lastIndex),O))}for(var Y,H="",te=0,ue=0;ue<B.length;ue++){for(var _e=p((G=B[ue])[0]),J=w(T(s(G.index),W.length),0),re=[],pe=1;pe<G.length;pe++)k(re,(Y=G[pe])===void 0?Y:String(Y));var we=G.groups;if(C){var me=E([_e],re,J,W);we!==void 0&&k(me,we);var ye=p(r(q,void 0,me))}else ye=y(_e,W,J,re,we,q);J>=te&&(H+=A(W,te,J)+ye,te=J+_e.length)}return H+A(W,te)}]},!!u(function(){var x=/./;return x.exec=function(){var M=[];return M.groups={a:"7"},M},"".replace(x,"$<a>")!=="7"})||!N||U)},{"../internals/advance-string-index":5,"../internals/an-object":7,"../internals/fails":42,"../internals/fix-regexp-well-known-symbol-logic":43,"../internals/function-apply":44,"../internals/function-call":47,"../internals/function-uncurry-this":49,"../internals/get-method":53,"../internals/get-substitution":54,"../internals/is-callable":67,"../internals/regexp-exec-abstract":95,"../internals/require-object-coercible":101,"../internals/to-integer-or-infinity":111,"../internals/to-length":112,"../internals/to-string":119,"../internals/well-known-symbol":127}],131:[function(e,i,n){e("../internals/typed-array-constructor")("Float32",function(r){return function(o,a,c){return r(this,o,a,c)}})},{"../internals/typed-array-constructor":121}],132:[function(e,i,n){var r=e("../internals/array-buffer-view-core"),o=e("../internals/typed-array-constructors-require-wrappers"),a=r.aTypedArrayConstructor;(0,r.exportTypedArrayStaticMethod)("of",function(){for(var c=0,u=arguments.length,l=new(a(this))(u);u>c;)l[c]=arguments[c++];return l},o)},{"../internals/array-buffer-view-core":9,"../internals/typed-array-constructors-require-wrappers":122}],133:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/function-call"),a=e("../internals/array-buffer-view-core"),c=e("../internals/length-of-array-like"),u=e("../internals/to-offset"),l=e("../internals/to-object"),d=e("../internals/fails"),s=r.RangeError,f=r.Int8Array,p=f&&f.prototype,v=p&&p.set,g=a.aTypedArray,m=a.exportTypedArrayMethod,y=!d(function(){var b=new Uint8ClampedArray(2);return o(v,b,{length:1,0:3},1),b[1]!==3}),_=y&&a.NATIVE_ARRAY_BUFFER_VIEWS&&d(function(){var b=new f(2);return b.set(1),b.set("2",1),b[0]!==0||b[1]!==2});m("set",function(b){g(this);var w=u(arguments.length>1?arguments[1]:void 0,1),T=l(b);if(y)return o(v,this,T,w);var E=this.length,k=c(T),S=0;if(k+w>E)throw s("Wrong length");for(;S<k;)this[w+S]=T[S++]},!y||_)},{"../internals/array-buffer-view-core":9,"../internals/fails":42,"../internals/function-call":47,"../internals/global":55,"../internals/length-of-array-like":76,"../internals/to-object":113,"../internals/to-offset":114}],134:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/function-uncurry-this"),a=e("../internals/fails"),c=e("../internals/a-callable"),u=e("../internals/array-sort"),l=e("../internals/array-buffer-view-core"),d=e("../internals/engine-ff-version"),s=e("../internals/engine-is-ie-or-edge"),f=e("../internals/engine-v8-version"),p=e("../internals/engine-webkit-version"),v=l.aTypedArray,g=l.exportTypedArrayMethod,m=r.Uint16Array,y=m&&o(m.prototype.sort),_=!(!y||a(function(){y(new m(2),null)})&&a(function(){y(new m(2),{})})),b=!!y&&!a(function(){if(f)return f<74;if(d)return d<67;if(s)return!0;if(p)return p<602;var w,T,E=new m(516),k=Array(516);for(w=0;w<516;w++)T=w%4,E[w]=515-w,k[w]=w-2*T+3;for(y(E,function(S,A){return(S/4|0)-(A/4|0)}),w=0;w<516;w++)if(E[w]!==k[w])return!0});g("sort",function(w){return w!==void 0&&c(w),b?y(this,w):u(v(this),function(T){return function(E,k){return T!==void 0?+T(E,k)||0:k!=k?-1:E!=E?1:E===0&&k===0?1/E>0&&1/k<0?1:-1:E>k}}(w))},!b||_)},{"../internals/a-callable":1,"../internals/array-buffer-view-core":9,"../internals/array-sort":15,"../internals/engine-ff-version":35,"../internals/engine-is-ie-or-edge":36,"../internals/engine-v8-version":38,"../internals/engine-webkit-version":39,"../internals/fails":42,"../internals/function-uncurry-this":49,"../internals/global":55}],135:[function(e,i,n){e("../internals/typed-array-constructor")("Uint8",function(r){return function(o,a,c){return r(this,o,a,c)}})},{"../internals/typed-array-constructor":121}],136:[function(e,i,n){e("../internals/typed-array-constructor")("Uint8",function(r){return function(o,a,c){return r(this,o,a,c)}},!0)},{"../internals/typed-array-constructor":121}],137:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/dom-iterables"),a=e("../internals/dom-token-list-prototype"),c=e("../modules/es.array.iterator"),u=e("../internals/create-non-enumerable-property"),l=e("../internals/well-known-symbol"),d=l("iterator"),s=l("toStringTag"),f=c.values,p=function(g,m){if(g){if(g[d]!==f)try{u(g,d,f)}catch{g[d]=f}if(g[s]||u(g,s,m),o[m]){for(var y in c)if(g[y]!==c[y])try{u(g,y,c[y])}catch{g[y]=c[y]}}}};for(var v in o)p(r[v]&&r[v].prototype,v);p(a,"DOMTokenList")},{"../internals/create-non-enumerable-property":24,"../internals/dom-iterables":33,"../internals/dom-token-list-prototype":34,"../internals/global":55,"../internals/well-known-symbol":127,"../modules/es.array.iterator":128}],138:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.Build=void 0,n.Build={version:"0.73.8 (e9fa466fc3c6e8f31a7c83d97c78518a)",buildSeed:1665757807348,"wdosbox.wasm":{size:1462485,gzSize:499437},"wdosbox.js":{size:124967,gzSize:32625},"wlibzip.wasm":{size:110726,gzSize:51367},"wlibzip.js":{size:77090,gzSize:19985}}},{}],139:[function(e,i,n){function r(l,d,s){return d in l?Object.defineProperty(l,d,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[d]=s,l}e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),Object.defineProperty(n,"__esModule",{value:!0});const o=e("./dos-conf"),a=function(l){return l&&l.__esModule?l:{default:l}}(e("../../libzip/libzip")),c=e("../../http");n.default=class{constructor(l){r(this,"config",void 0),r(this,"sources",void 0),r(this,"libzipWasm",void 0),this.config=(0,o.createDosConfig)(),this.sources=[],this.libzipWasm=l}autoexec(){for(var l=arguments.length,d=new Array(l),s=0;s<l;s++)d[s]=arguments[s];return this.config.autoexec.options.script.value=d.join(`
`),this}cycles(l){return this.config.cpu.options.cycles.value=l,this}extract(l){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/",s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"zip";return this.extractAll([{url:l,path:d,type:s}])}extractAll(l){return this.sources.push(...l),this}async toUint8Array(){let l=arguments.length>0&&arguments[0]!==void 0&&arguments[0];const d={};await this.libzipWasm.instantiate(d);const s=new a.default(d,"/home/web_user"),f=await(0,o.toDosboxConf)(this.config),p=[];for(const m of this.sources){if(m.type!=="zip")throw new Error("Only Zip is supported");const y=(0,c.httpRequest)(m.url,{responseType:"arraybuffer"}).then(_=>({source:m,data:new Uint8Array(_)}));p.push(y)}l||(await s.writeFile(".jsdos/dosbox.conf",f),await s.writeFile(".jsdos/readme.txt",u),await s.writeFile(".jsdos/jsdos.json",JSON.stringify(this.config,null,2)));const v=await Promise.all(p);for(const m of v)s.zipToFs(m.data,m.source.path);l&&(await s.writeFile(".jsdos/dosbox.conf",f),await s.writeFile(".jsdos/readme.txt",u),await s.writeFile(".jsdos/jsdos.json",JSON.stringify(this.config,null,2)));const g=await s.zipFromFs();return s.destroy(),g}};const u=`
Please visit our website:

        _                __
       (_)____      ____/ /___  _____ _________  ____ ___
      / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ \`__ \\
     / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /
  __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/
 /___/
`},{"../../http":144,"../../libzip/libzip":149,"./dos-conf":140,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/web.dom-collections.iterator.js":137}],140:[function(e,i,n){function r(v,g,m){return g in v?Object.defineProperty(v,g,{value:m,enumerable:!0,configurable:!0,writable:!0}):v[g]=m,v}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.toDosboxConf=n.createDosConfig=n.AutoexecCategory=n.MixerCategory=n.CpuCategory=n.DosboxCategory=n.OutputCategory=void 0;class o{constructor(){r(this,"name","sdl"),r(this,"description","This section contains all of the low level system settings for how DOSBox interacts with your real hardware. You can define what resolutions are emulated, how DOSBox should treat errors or listen to your keyboard and mouse. You can often achieve a fair level of optimization by working with these setting, though for the most part leaving them at their default settings will create the best experience. These settings are passed on to the SDL Library which handles low level things like input and thread priority."),r(this,"options",{autolock:{name:"autolock",description:"Mouse will automatically lock, if you click on the screen.",value:!1,allowedValues:[!0,!1]}})}}n.OutputCategory=o;class a{constructor(){r(this,"name","dosbox"),r(this,"description","The [dosbox] section contains various settings that do not pertain to any other section (e.g. setting the language used in DOSBox help texts, where to store screen captures, etc.)"),r(this,"options",{machine:{name:"machine",description:"The type of machine tries to emulate.",value:"svga_s3",allowedValues:["hercules","cga","tandy","pcjr","ega","vgaonly","svga_s3","svga_et3000","svga_et4000","svga_paradise","vesa_nolfb","vesa_oldvbe"]}})}}n.DosboxCategory=a;class c{constructor(){r(this,"name","cpu"),r(this,"description","The CPU section controls how DOSBox tries to emulate the CPU, how fast the emulation should be, and to adjust it. DOSBox offers 4 different methods of CPU emulation."),r(this,"options",{core:{name:"core",description:"CPU Core used in emulation. auto will switch to dynamic if available and appropriate.",value:"auto",allowedValues:["auto","normal","simple"]},cputype:{name:"cputype",description:"CPU Type used in emulation. auto is the fastest choice.",value:"auto",allowedValues:["auto","386","386_slow","486_slow","pentium_slow","386_prefetch"]},cycles:{name:"cycles",description:`Amount of instructions DOSBox tries to emulate each millisecond. Setting this value too high results in sound dropouts and lags.
Cycles can be set in 3 ways:
'auto'          tries to guess what a game needs.
                It usually works, but can fail for certain games.
'fixed #number' will set a fixed amount of cycles. This is what you usually need if 'auto' fails.
                (Example: fixed 4000).
'max'           will allocate as much cycles as your computer is able to handle.
`,value:"auto",allowedValues:["auto","fixed","max"]}})}}n.CpuCategory=c;class u{constructor(){r(this,"name","mixer"),r(this,"description","Here you can define the quality of emulated audio."),r(this,"options",{rate:{name:"rate",description:"Frequency rate of sound",value:44100,allowedValues:[]},nosound:{name:"nosound",description:"Enable silent mode, sound is still emulated though.",value:!1,allowedValues:[!0,!1]}})}}n.MixerCategory=u;class l{constructor(){r(this,"name","autoexec"),r(this,"description","Lines in this section will be run at startup"),r(this,"options",{script:{name:"lines",description:"Use \\n to separate lines",value:"",allowedValues:[]}})}}function d(){return{output:new o,dosbox:new a,cpu:new c,mixer:new u,autoexec:new l}}function s(v,g){const m=g.name==="sdl"?"output":g.name;return new Promise((y,_)=>{if(v)if(v.name===g.name){for(const b of Object.keys(v.options)){const w=v.options[b],T=g.options[b];if(T===void 0)return void _(new Error("Unknown option '"+(w.name||b)+"' in '"+v.name+"'"));if(T.allowedValues.length>0){const E=w.value,k=T.allowedValues.find(S=>S===E);if(m==="cpu"&&w.name==="cycles"&&(E+"").startsWith("fixed ")){const S=Number.parseInt(E.substr(6),10);if(isNaN(S))return void _(new Error("Fixed value should conatain number"))}else if(k===void 0)return void _(new Error("Incorrect value '"+E+"' ("+typeof E+") for '"+v.name+"."+(w.name||b)+"' allowed is "+JSON.stringify(T.allowedValues)))}}for(const b of Object.keys(g.options))if(!(b in v.options))return void _(new Error("Option '"+b+"' is missed in '"+m+"'"));y()}else _(new Error("Incorrect category name '"+v.name+"' should be '"+g.name+"'"));else _(new Error("Category '"+m+"' is missed"))})}async function f(v,g){if(v!==void 0)for(const m of Object.keys(v.options||{})){const y=v.options[m];if(typeof y=="string"||typeof y=="number"||Array.isArray(y)){const _=g.options[m];if(!_)continue;const b=y;v.options[m]={..._},v.options[m].value=b}}}function p(v){let g="";g+="[".concat(v.name,`]
`);for(const m of Object.keys(v.options).sort()){const y=v.options[m];g+="".concat(y.name,"=").concat(y.value,`
`)}return g}n.AutoexecCategory=l,n.createDosConfig=d,n.toDosboxConf=async function(v){await async function(y){const _=d();for(const b of Object.keys(_))await f(y[b],_[b])}(v),await async function(y){const _=d();for(const b of Object.keys(_))await s(y[b],_[b])}(v);const g=p(v.output)+`
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
`));var m;return Promise.resolve(g)}},{"core-js/modules/web.dom-collections.iterator.js":137}],141:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.dosDirect=void 0;const r=e("../../../protocol/messages-queue");n.dosDirect=async function(o,a){const c=new r.MessagesQueue;let u=c.handler.bind(c);const l={postMessage:(f,p)=>{u(f,p)}},d=f=>{const p=f.data;(p==null?void 0:p.name)==="ws-sync-sleep"&&p.props.sessionId===a&&postMessage({name:"wc-sync-sleep",props:p.props},"*")},s={sessionId:a,sendMessageToServer:(f,p)=>{l.messageHandler({data:{name:f,props:p}})},initMessageHandler:f=>{u=f,c.sendTo(u)},exit:()=>{typeof window<"u"&&window.removeEventListener("message",d)}};return s.module=l,typeof window<"u"&&window.addEventListener("message",d,{passive:!0}),await o.instantiate(l),l.callMain([a]),s}},{"../../../protocol/messages-queue":150}],142:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.dosWorker=void 0;const r=e("../../../protocol/messages-queue");n.dosWorker=async function(o,a,c){const u=new r.MessagesQueue;let l=u.handler.bind(u);const d=new Worker(o);d.onerror=f=>{l("ws-err",{type:f.type,filename:f.filename,message:f.message})},d.onmessage=f=>{const p=f.data;(p==null?void 0:p.name)!==void 0&&l(p.name,p.props)},await a.instantiate({});const s={sessionId:c,sendMessageToServer:(f,p)=>{d.postMessage({name:f,props:p})},initMessageHandler:f=>{l=f,u.sendTo(l)},exit:()=>{d.terminate()}};try{s.sendMessageToServer("wc-install",{module:a.wasmModule,sessionId:c})}catch{s.sendMessageToServer("wc-install",{sessionId:c})}return s}},{"../../../protocol/messages-queue":150}],143:[function(e,i,n){(function(r){(function(){Object.defineProperty(n,"__esModule",{value:!0}),n.NetworkType=void 0;const o=function(a){return a&&a.__esModule?a:{default:a}}(e("./impl/emulators-impl"));(function(a){a[a.NETWORK_DOSBOX_IPX=0]="NETWORK_DOSBOX_IPX"})(n.NetworkType||(n.NetworkType={})),typeof window<"u"&&(window.emulators=o.default),r!==void 0&&(r.emulators=o.default)}).call(this)}).call(this,typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{})},{"./impl/emulators-impl":146}],144:[function(e,i,n){function r(a,c,u){return c in a?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[c]=u,a}Object.defineProperty(n,"__esModule",{value:!0}),n.httpRequest=void 0,n.httpRequest=function(a,c){return new Promise((u,l)=>{new o(a,{...c,success:u,fail:d=>{l(new Error(d))}})})};class o{constructor(c,u){if(r(this,"resource",void 0),r(this,"options",void 0),r(this,"xhr",null),r(this,"total",0),r(this,"loaded",0),this.resource=c,this.options=u,this.options.method=u.method||"GET",this.options.method!=="GET")throw new Error("Method "+this.options.method+" is not supported");this.makeHttpRequest()}makeHttpRequest(){let c,u;this.xhr=new XMLHttpRequest,this.xhr.open(this.options.method||"GET",this.resource,!0),this.options.method==="POST"&&this.xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"),this.xhr.overrideMimeType("text/plain; charset=x-user-defined"),typeof(c=this.xhr).addEventListener=="function"&&c.addEventListener("progress",l=>{if(this.total=l.total,this.loaded=l.loaded,this.options.progress)return this.options.progress(l.total,l.loaded)}),typeof(u=this.xhr).addEventListener=="function"&&u.addEventListener("error",()=>{if(this.options.fail)return this.options.fail("Unalbe to download '"+this.resource+"', code: "+this.xhr.status),delete this.options.fail}),this.xhr.onreadystatechange=()=>this.onReadyStateChange(),this.options.responseType&&(this.xhr.responseType=this.options.responseType),this.xhr.send(this.options.data)}onReadyStateChange(){const c=this.xhr;if(c.readyState===4){if(c.status===200){if(this.options.success){const u=Math.max(this.total,this.loaded);return this.options.progress!==void 0&&this.options.progress(u,u),this.options.success(c.response)}}else if(this.options.fail)return this.options.fail("Unable to download '"+this.resource+"', code: "+c.status),delete this.options.fail}}}},{}],145:[function(e,i,n){function r(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.CommandInterfaceEventsImpl=void 0,n.CommandInterfaceEventsImpl=class{constructor(){var o=this;r(this,"onStdoutConsumers",[]),r(this,"delayedStdout",[]),r(this,"onFrameSizeConsumers",[]),r(this,"onFrameConsumers",[]),r(this,"onSoundPushConsumers",[]),r(this,"onExitConsumers",[]),r(this,"onMessageConsumers",[]),r(this,"delayedMessages",[]),r(this,"onNetworkConnectedConsumers",[]),r(this,"onNetworkDisconnectedConsumers",[]),r(this,"onStdout",a=>{if(this.onStdoutConsumers.push(a),this.onStdoutConsumers.length===1){for(const c of this.delayedStdout)this.fireStdout(c);this.delayedStdout=[]}}),r(this,"onFrameSize",a=>{this.onFrameSizeConsumers.push(a)}),r(this,"onFrame",a=>{this.onFrameConsumers.push(a)}),r(this,"onSoundPush",a=>{this.onSoundPushConsumers.push(a)}),r(this,"onExit",a=>{this.onExitConsumers.push(a)}),r(this,"onMessage",a=>{if(this.onMessageConsumers.push(a),this.onMessageConsumers.length===1){for(const c of this.delayedMessages)a(c.msgType,...c.args);this.delayedMessages=[]}}),r(this,"fireStdout",a=>{if(this.onStdoutConsumers.length!==0)for(const c of this.onStdoutConsumers)c(a);else this.delayedStdout.push(a)}),r(this,"fireFrameSize",(a,c)=>{for(const u of this.onFrameSizeConsumers)u(a,c)}),r(this,"fireFrame",(a,c)=>{for(const u of this.onFrameConsumers)u(a,c)}),r(this,"fireSoundPush",a=>{for(const c of this.onSoundPushConsumers)c(a)}),r(this,"fireExit",()=>{for(const a of this.onExitConsumers)a();this.onStdoutConsumers=[],this.onFrameSizeConsumers=[],this.onFrameConsumers=[],this.onSoundPushConsumers=[],this.onExitConsumers=[],this.onMessageConsumers=[]}),r(this,"fireMessage",function(a){for(var c=arguments.length,u=new Array(c>1?c-1:0),l=1;l<c;l++)u[l-1]=arguments[l];if(o.onMessageConsumers.length!==0)for(const d of o.onMessageConsumers)d(a,...u);else o.delayedMessages.push({msgType:a,args:u})}),r(this,"fireNetworkConnected",(a,c,u)=>{for(const l of this.onNetworkConnectedConsumers)l(a,c,u)}),r(this,"fireNetworkDisconnected",a=>{for(const c of this.onNetworkDisconnectedConsumers)c(a)})}onNetworkConnected(o){this.onNetworkConnectedConsumers.push(o)}onNetworkDisconnected(o){this.onNetworkDisconnectedConsumers.push(o)}}},{"core-js/modules/web.dom-collections.iterator.js":137}],146:[function(e,i,n){function r(v,g,m){return g in v?Object.defineProperty(v,g,{value:m,enumerable:!0,configurable:!0,writable:!0}):v[g]=m,v}var o=function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(n,"__esModule",{value:!0});const a=e("../build"),c=e("./modules"),u=o(e("../dos/bundle/dos-bundle")),l=e("../dos/dosbox/ts/direct"),d=e("../dos/dosbox/ts/worker"),s=o(e("../janus/janus-impl")),f=e("../protocol/protocol"),p=new class{constructor(){r(this,"pathPrefix",""),r(this,"version",a.Build.version),r(this,"wdosboxJs","wdosbox.js"),r(this,"wasmModulesPromise",void 0)}async dosBundle(){const v=await this.wasmModules(),g=await v.libzip();return new u.default(g)}async dosboxNode(v,g){return this.dosboxDirect(v,g)}async dosboxDirect(v,g){const m=await this.wasmModules(),y=await m.dosbox(),_=await(0,l.dosDirect)(y,"session-"+Date.now());return this.backend(v,_,g)}async dosboxWorker(v,g){const m=await this.wasmModules(),y=await m.dosbox(),_=await(0,d.dosWorker)(this.pathPrefix+this.wdosboxJs,y,"session-"+Date.now());return this.backend(v,_,g)}async janus(v){return(0,s.default)(v)}async backend(v,g,m){return new Promise((y,_)=>{const b=new f.CommandInterfaceOverTransportLayer(Array.isArray(v)?v:[v],g,w=>{w!==null?_(w):setTimeout(()=>y(b),4)},m||{})})}wasmModules(){return this.wasmModulesPromise!==void 0||(this.wasmModulesPromise=(async()=>new c.WasmModulesImpl(this.pathPrefix,this.wdosboxJs))()),this.wasmModulesPromise}async dosDirect(v){return this.dosboxDirect(v)}async dosWorker(v){return this.dosboxWorker(v)}};n.default=p},{"../build":138,"../dos/bundle/dos-bundle":139,"../dos/dosbox/ts/direct":141,"../dos/dosbox/ts/worker":142,"../janus/janus-impl":148,"../protocol/protocol":151,"./modules":147}],147:[function(e,i,n){function r(l,d,s){return d in l?Object.defineProperty(l,d,{value:s,enumerable:!0,configurable:!0,writable:!0}):l[d]=s,l}e("core-js/modules/es.typed-array.of.js"),e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.loadWasmModule=n.WasmModulesImpl=n.host=void 0;const o=e("../http");function a(l,d,s){return typeof XMLHttpRequest>"u"?function(f,p,v){if(n.host.globals.compiled[p]!==void 0)return n.host.globals.compiled[p];const g=e(f),m=Promise.resolve(new c(g));return p&&(n.host.globals.compiled[p]=m),m}(l,d):function(f,p,v){if(n.host.globals.compiled[p]!==void 0)return n.host.globals.compiled[p];const g=async function(){const m=f.lastIndexOf("/"),y=f.indexOf("w",m),_=y===m+1&&y>=0;if(!n.host.wasmSupported||!_)throw new Error("Starting from js-dos 6.22.60 js environment is not supported");const b=f.substr(0,f.lastIndexOf(".js"))+".wasm",w=(0,o.httpRequest)(b,{responseType:"arraybuffer",progress:(A,N)=>{v("Resolving DosBox ("+f+")",A,N)}}),T=(0,o.httpRequest)(f,{progress:(A,N)=>{v("Resolving DosBox",A,N)}}),[E,k]=await Promise.all([w,T]),S=await WebAssembly.compile(E);return eval.call(window,k),new u(S,n.host.globals.exports[p],(A,N)=>{A.env=A.env||{},WebAssembly.instantiate(S,A).then(U=>N(U,S))})}();return p&&(n.host.globals.compiled[p]=g),g}(l,d,s)}n.host=new class{constructor(){if(r(this,"wasmSupported",!1),r(this,"globals",void 0),this.globals=typeof window>"u"?{}:window,this.globals.exports||(this.globals.exports={}),this.globals.compiled||(this.globals.compiled={}),typeof WebAssembly=="object"&&typeof WebAssembly.instantiate=="function"&&typeof WebAssembly.compile=="function"){const l=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));l instanceof WebAssembly.Module&&(this.wasmSupported=new WebAssembly.Instance(l)instanceof WebAssembly.Instance)}Math.imul&&Math.imul(4294967295,5)===-5||(Math.imul=function(l,d){const s=65535&l,f=65535&d;return s*f+((l>>>16)*f+s*(d>>>16)<<16)|0}),Math.imul=Math.imul,Math.fround||(Math.fround=function(l){return l}),Math.fround=Math.fround,Math.clz32||(Math.clz32=function(l){l>>>=0;for(let d=0;d<32;d++)if(l&1<<31-d)return d;return 32}),Math.clz32=Math.clz32,Math.trunc||(Math.trunc=function(l){return l<0?Math.ceil(l):Math.floor(l)}),Math.trunc=Math.trunc}},n.WasmModulesImpl=class{constructor(l,d){r(this,"pathPrefix",void 0),r(this,"wdosboxJs",void 0),r(this,"libzipPromise",void 0),r(this,"dosboxPromise",void 0),r(this,"wasmSupported",!1),l.length>0&&l[l.length-1]!=="/"&&(l+="/"),this.pathPrefix=l,this.wdosboxJs=d}libzip(){return this.libzipPromise!==void 0||(this.libzipPromise=this.loadModule(this.pathPrefix+"wlibzip.js","WLIBZIP")),this.libzipPromise}dosbox(){return this.dosboxPromise!==void 0||(this.dosboxPromise=this.loadModule(this.pathPrefix+this.wdosboxJs,"WDOSBOX")),this.dosboxPromise}loadModule(l,d){return a(l,d,()=>{})}},n.loadWasmModule=a;class c{constructor(d){r(this,"emModule",void 0),this.emModule=d}instantiate(d){return new Promise(s=>{d.onRuntimeInitialized=()=>{s()},new this.emModule(d)})}}class u{constructor(d,s,f){r(this,"wasmModule",void 0),r(this,"module",void 0),r(this,"instantiateWasm",void 0),this.wasmModule=d,this.module=s,this.instantiateWasm=f}instantiate(d){return new Promise(s=>{d.instantiateWasm=this.instantiateWasm,d.onRuntimeInitialized=()=>{s()},new this.module(d)})}}},{"../http":144,"core-js/modules/es.typed-array.of.js":132,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/web.dom-collections.iterator.js":137}],148:[function(e,i,n){function r(u,l,d){return l in u?Object.defineProperty(u,l,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[l]=d,u}e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),Object.defineProperty(n,"__esModule",{value:!0});const o=e("../impl/ci-impl");function a(u,l){let d="";const s=f=>{const p=f.indexOf(`
`);if(p===-1)d+=f;else{const v=d+f.substr(0,p);d="";try{u(function(g){const m=atob(g),y=new Uint8Array(m.length);for(let _=0;_<y.length;_++)y[_]=m.charCodeAt(_);return new TextDecoder().decode(y)}(v))}catch(g){l(g)}s(f.substr(p+1))}};return s}class c{constructor(l,d){r(this,"live",!0),r(this,"startedAt",Date.now()),r(this,"janus",void 0),r(this,"eventsImpl",void 0),r(this,"exitPromise",void 0),r(this,"exitResolveFn",()=>{}),r(this,"configPromise",void 0),r(this,"configResolveFn",()=>{}),r(this,"opaqueId",void 0),r(this,"handle",void 0),r(this,"handlePromise",void 0),r(this,"handleResolveFn",()=>{}),r(this,"keyMatrix",{}),r(this,"frameWidth",0),r(this,"frameHeight",0),r(this,"eventQueue",""),r(this,"eventIntervalId",-1),r(this,"rttIntervalId",-1),r(this,"logIntervalId",-1),r(this,"logColor","not set"),r(this,"logWhiteMs",0),r(this,"logRedMs",0),r(this,"logYellowMs",0),r(this,"onDataMessage",s=>{if(s.startsWith("config="))this.configResolveFn(JSON.parse(s.substr(7)));else if(s.startsWith("frame=")){const[p,v]=s.substr(6).split("x");this.frameWidth=Number.parseInt(p,10)||0,this.frameHeight=Number.parseInt(v,10)||0}else if(s.startsWith("rtt=")){var f;const[p,v,g]=s.substr(4).split(" "),m=Number.parseInt(v,10),y=Number.parseInt(g,10),_=Date.now(),b=((f=this.handle)===null||f===void 0?void 0:f.getBitrate())||"0 kbits/sec",w=Number.parseInt(b.split(" ")[0],10);this.sendPipeMessage("rtt-data",Date.now(),m,y,_,w),p===this.opaqueId&&this.eventsImpl.fireStdout("rtt-data="+(_-m)+" "+w)}else if(s.startsWith("log-visual-"))switch(s){case"log-visual-white":this.eventsImpl.fireStdout("yellow-frame:"+(Date.now()-this.logYellowMs));break;case"log-visual-red":this.eventsImpl.fireStdout("white-frame:"+(Date.now()-this.logWhiteMs));break;case"log-visual-yellow":this.eventsImpl.fireStdout("red-frame:"+(Date.now()-this.logRedMs))}else if(s.startsWith("log-command-"))switch(s){case"log-command-white":this.eventsImpl.fireStdout("yellow-pipe:"+(Date.now()-this.logYellowMs));break;case"log-command-red":this.eventsImpl.fireStdout("white-pipe:"+(Date.now()-this.logWhiteMs));break;case"log-command-yellow":this.eventsImpl.fireStdout("red-pipe:"+(Date.now()-this.logRedMs))}else this.eventsImpl.fireStdout(s)}),r(this,"onJanusMessage",(s,f,p)=>{p!=null&&s.createAnswer({jsep:p,media:{audioSend:!1,videoSend:!1,data:!0},success:v=>{this.fireMessage("started"),s.send({message:{request:"start"},jsep:v})},error:this.onError})}),r(this,"onError",s=>{this.fireMessage("error",s)}),this.eventsImpl=new o.CommandInterfaceEventsImpl,this.janus=l,this.opaqueId=d,this.exitPromise=new Promise(s=>{this.exitResolveFn=s}),this.configPromise=new Promise(s=>{this.configResolveFn=s}),this.handlePromise=new Promise((s,f)=>{this.handleResolveFn=p=>{this.handle=p,this.live?(setTimeout(()=>{this.live&&p.data({text:"pipe "+this.opaqueId+" config"})},1e3),this.config().then(()=>{this.live&&(this.eventIntervalId=setInterval(()=>{this.sendEventsData(p)},8),this.rttIntervalId=setInterval(()=>{this.sendPipeMessage("rtt",Date.now())},1e3))}),s(p)):f(new Error("exit() was called"))}}),this.attach()}fireMessage(l){for(var d=arguments.length,s=new Array(d>1?d-1:0),f=1;f<d;f++)s[f-1]=arguments[f];this.eventsImpl.fireMessage(l,...s)}attach(){let l;this.janus.attach({plugin:"janus.plugin.streaming",opaqueId:this.opaqueId,error:this.onError,success:d=>{l=d,this.fireMessage("attached"),d.send({message:{request:"watch",id:1}})},onmessage:(d,s)=>{this.onJanusMessage(l,d,s)},onremotestream:d=>{this.fireMessage("onremotestream",d)},ondataopen:()=>this.handleResolveFn(l),ondata:a(this.onDataMessage,this.onError)})}onDestroyed(){this.fireMessage("destroyed"),this.exitResolveFn()}async config(){return this.configPromise}width(){return this.frameWidth}height(){return this.frameHeight}soundFrequency(){return 44100}screenshot(){return Promise.reject(new Error("Not supported"))}simulateKeyPress(){const l=Date.now()-this.startedAt;for(var d=arguments.length,s=new Array(d),f=0;f<d;f++)s[f]=arguments[f];s.forEach(p=>this.addKey(p,!0,l)),s.forEach(p=>this.addKey(p,!1,l+16))}sendKeyEvent(l,d){this.addKey(l,d,Date.now()-this.startedAt)}addKey(l,d,s){if(this.keyMatrix[l]===!0!==d&&(this.keyMatrix[l]=d,this.sendPipeMessage("k"+(d?"down":"up"),l,s),this.logIntervalId!==-1&&d))switch(this.logColor){case"white":this.logWhiteMs=Date.now();break;case"red":this.logRedMs=Date.now();break;case"yellow":this.logYellowMs=Date.now()}}sendMouseMotion(l,d){this.sendPipeMessage("mmove",l,d,Date.now()-this.startedAt)}sendMouseRelativeMotion(l,d){throw new Error("not implemented")}sendMouseButton(l,d){this.sendPipeMessage("m"+(d?"down":"up"),l,Date.now()-this.startedAt)}sendMouseSync(){this.sendPipeMessage("msync",Date.now()-this.startedAt)}logVisual(l){this.sendPipeMessage("log-visual-on");const d=document.createElement("canvas"),s=d.getContext("2d");d.width=1,d.height=1,this.logIntervalId=setInterval(async()=>{var f;const p=Date.now();s==null||s.drawImage(l,0,0,1,1,0,0,1,1);const v=s==null||(f=s.getImageData(0,0,1,1))===null||f===void 0?void 0:f.data,g=Date.now()-p;let m="not set";if(v[0]>200&&v[1]>200&&v[2]>200?m="white":v[0]>200&&v[1]<200&&v[2]<200?m="red":v[0]>200&&v[1]>200&&v[2]<200&&(m="yellow"),m!==this.logColor){switch(m){case"white":this.eventsImpl.fireStdout("yellow-stream:"+(Date.now()-this.logYellowMs-g));break;case"red":this.eventsImpl.fireStdout("white-stream:"+(Date.now()-this.logWhiteMs-g));break;case"yellow":this.eventsImpl.fireStdout("red-stream:"+(Date.now()-this.logRedMs-g))}this.logColor=m}},16)}sendPipeMessage(){this.eventQueue+="pipe "+this.opaqueId;for(var l=arguments.length,d=new Array(l),s=0;s<l;s++)d[s]=arguments[s];for(const f of d)this.eventQueue+=" "+f;this.eventQueue+=`
`}async sendEventsData(l){this.eventQueue.length!==0&&(l.data({text:this.eventQueue}),this.eventQueue="")}persist(){return Promise.reject(new Error("Not supported"))}pause(){console.warn("pause/resume is not implemented")}resume(){}mute(){console.warn("mute/unmute is not implemented")}unmute(){}exit(){return this.live=!1,clearInterval(this.logIntervalId),this.logIntervalId=-1,clearInterval(this.eventIntervalId),this.eventIntervalId=-1,clearInterval(this.rttIntervalId),this.rttIntervalId=-1,this.janus.destroy(),this.exitPromise}events(){return this.eventsImpl}networkConnect(l,d,s){return Promise.reject("Not supported")}networkDisconnect(l){return Promise.reject("Not supported")}}n.default=function(u,l){const d=l||window.Janus;return d===void 0?Promise.reject(new Error("Janus is not defined, you should load janus.js before this")):d.isWebrtcSupported()?new Promise((s,f)=>{let p=null;const v={error:y=>{p===null?f(y):p.onError(y)},destroyed:()=>{p!==null&&p.onDestroyed()}},g={server:u,success:()=>{p=new c(m,"js-dos-"+d.randomString(12)),s(p)},error:v.error,destroyed:v.destroyed,destroyOnUnload:!0},m=new d(g)}):Promise.reject(new Error("WebRTC not supported"))}},{"../impl/ci-impl":145,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/web.dom-collections.iterator.js":137}],149:[function(e,i,n){function r(o,a,c){return a in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,o}e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),e("core-js/modules/es.string.replace.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=class{constructor(o,a){r(this,"module",void 0),r(this,"home",void 0),this.module=o,this.home=a,this.module.callMain([]),this.chdirToHome()}zipFromFs(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.chdirToHome();const a=this.module._zip_from_fs(o);if(a===0)return Promise.reject(new Error("Can't create zip, see more info in logs"));const c=this.module.HEAPU32[a/4],u=this.module.HEAPU8.slice(a+4,a+4+c);return this.module._free(a),Promise.resolve(u)}zipToFs(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"/";a=this.normalizeFilename(a);const c=this.normalizeFilename(a).split("/");this.createPath(c,0,c.length),this.chdir(a);const u=new Uint8Array(o),l=this.module._malloc(u.length);this.module.HEAPU8.set(u,l);const d=this.module._zip_to_fs(l,u.length);return this.module._free(l),this.chdirToHome(),d===0?Promise.resolve():Promise.reject(new Error("Can't extract zip, retcode "+d+", see more info in logs"))}writeFile(o,a){o=this.normalizeFilename(o),a instanceof ArrayBuffer&&(a=new Uint8Array(a));const c=o.split("/");if(c.length===0)throw new Error("Can't create file '"+o+"', because it's not valid file path");const u=c[c.length-1].trim();if(u.length===0)throw new Error("Can't create file '"+o+"', because file name is empty");const l=this.createPath(c,0,c.length-1);this.module.FS.writeFile(l+"/"+u,a)}async readFile(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"utf8";return o=this.normalizeFilename(o),this.module.FS.readFile(o,{encoding:a})}exists(o){o=this.normalizeFilename(o);try{return this.module.FS.lookupPath(o),!0}catch{return!1}}destroy(){try{this.module._libzip_destroy()}catch(o){return o}}normalizeFilename(o){for(o=o.replace(new RegExp("^[a-zA-z]+:"),"").replace(new RegExp("\\\\","g"),"/");o[0]==="/";)o=o.substr(1);return o}createPath(o,a,c){let u=".";for(let l=a;l<c;++l){const d=o[l].trim();d.length!==0&&(this.module.FS.createPath(u,d,!0,!0),u=u+"/"+d)}return u}chdirToHome(){this.module.FS.chdir(this.home)}chdir(o){this.module.FS.chdir(this.home+"/"+o)}}},{"core-js/modules/es.string.replace.js":130,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135}],150:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.MessagesQueue=void 0,n.MessagesQueue=class{constructor(){var r,o;o=[],(r="messages")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o}handler(r,o){this.messages.push({name:r,props:o})}sendTo(r){for(const o of this.messages)r(o.name,o.props);this.messages=[]}}},{"core-js/modules/web.dom-collections.iterator.js":137}],151:[function(e,i,n){function r(a,c,u){return c in a?Object.defineProperty(a,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[c]=u,a}e("core-js/modules/es.typed-array.uint8-array.js"),e("core-js/modules/es.typed-array.set.js"),e("core-js/modules/es.typed-array.sort.js"),e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.typed-array.float32-array.js"),e("core-js/modules/es.typed-array.uint8-clamped-array.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.CommandInterfaceOverTransportLayer=void 0;const o=e("../impl/ci-impl");n.CommandInterfaceOverTransportLayer=class{constructor(a,c,u,l){r(this,"startedAt",Date.now()),r(this,"frameWidth",0),r(this,"frameHeight",0),r(this,"rgb",null),r(this,"rgba",null),r(this,"freq",0),r(this,"bundles",void 0),r(this,"transport",void 0),r(this,"ready",void 0),r(this,"persistPromise",void 0),r(this,"persistResolve",void 0),r(this,"exitPromise",void 0),r(this,"exitResolve",void 0),r(this,"eventsImpl",new o.CommandInterfaceEventsImpl),r(this,"keyMatrix",{}),r(this,"configPromise",void 0),r(this,"configResolve",()=>{}),r(this,"panicMessages",[]),r(this,"connectPromise",null),r(this,"connectResolve",()=>{}),r(this,"connectReject",()=>{}),r(this,"disconnectPromise",null),r(this,"disconnectResolve",()=>{}),r(this,"sharedMemory",void 0),r(this,"directSound",void 0),r(this,"options",void 0),this.options=l,this.bundles=a,this.transport=c,this.ready=u,this.configPromise=new Promise(d=>this.configResolve=d),this.transport.initMessageHandler(this.onServerMessage.bind(this))}sendClientMessage(a,c){(c=c||{}).sessionId=c.sessionId||this.transport.sessionId,this.transport.sendMessageToServer(a,c)}onServerMessage(a,c){if(!(a===void 0||a.length<3||a[0]!=="w"||a[1]!=="s"||a[2]!=="-")&&c!==void 0&&c.sessionId===this.transport.sessionId)switch(a){case"ws-ready":this.sharedMemory=c.sharedMemory,this.sendClientMessage("wc-run",{bundles:this.bundles}),delete this.bundles;break;case"ws-server-ready":this.panicMessages.length>0?(this.transport.exit!==void 0&&this.transport.exit(),this.ready(new Error(JSON.stringify(this.panicMessages)))):this.ready(null),delete this.ready;break;case"ws-frame-set-size":this.onFrameSize(c.width,c.height);break;case"ws-update-lines":this.onFrameLines(c.lines,c.rgba);break;case"ws-exit":this.onExit();break;case"ws-log":this.onLog(c.tag,c.message);break;case"ws-warn":this.onWarn(c.tag,c.message);break;case"ws-err":this.onErr(c.tag,c.message);break;case"ws-stdout":this.onStdout(c.message);break;case"ws-persist":this.onPersist(c.bundle);break;case"ws-sound-init":this.onSoundInit(c.freq,c.directSound);break;case"ws-sound-push":this.onSoundPush(c.samples);break;case"ws-config":this.onConfig(JSON.parse(c.content));break;case"ws-sync-sleep":this.sendClientMessage("wc-sync-sleep",c);break;case"ws-connected":this.connectResolve(),this.connectPromise=null,this.connectResolve=()=>{},this.connectReject=()=>{},this.eventsImpl.fireNetworkConnected(c.networkType,c.address,c.port);break;case"ws-disconnected":this.connectPromise!==null?(this.connectReject(),this.connectPromise=null,this.connectResolve=()=>{},this.connectReject=()=>{}):(this.disconnectResolve(),this.disconnectPromise=null,this.disconnectResolve=()=>{}),this.eventsImpl.fireNetworkDisconnected(c.networkType);break;case"ws-extract-progress":this.options.onExtractProgress&&this.options.onExtractProgress(c.index,c.file,c.extracted,c.count);break;default:console.log("Unknown server message (ws):",a)}}onConfig(a){this.configResolve(a)}onFrameSize(a,c){this.frameWidth===a&&this.frameHeight===c||(this.frameWidth=a,this.frameHeight=c,this.sharedMemory===void 0&&(this.rgb=new Uint8Array(a*c*3)),this.eventsImpl.fireFrameSize(a,c))}onFrameLines(a,c){if(this.sharedMemory!==void 0)this.rgba=new Uint8Array(this.sharedMemory,c,this.frameWidth*this.frameHeight*4);else for(const u of a)this.rgb.set(u.heapu8,u.start*this.frameWidth*3);this.eventsImpl.fireFrame(this.rgb,this.rgba)}onSoundInit(a,c){if(this.freq=a,this.directSound=c,this.directSound!==void 0)for(let u=0;u<this.directSound.ringSize;++u)this.directSound.buffer[u]=new Float32Array(this.directSound.buffer[u])}onSoundPush(a){this.eventsImpl.fireSoundPush(a)}onLog(a,c){this.eventsImpl.fireMessage("log","["+a+"]"+c)}onWarn(a,c){this.eventsImpl.fireMessage("warn","["+a+"]"+c)}onErr(a,c){a==="panic"&&(this.panicMessages.push(c),console.error("["+a+"]"+c)),this.eventsImpl.fireMessage("error","["+a+"]"+c)}onStdout(a){this.eventsImpl.fireStdout(a)}config(){return this.configPromise}width(){return this.frameWidth}height(){return this.frameHeight}soundFrequency(){return this.freq}screenshot(){if(this.rgb!==null||this.rgba!==null){const a=new Uint8ClampedArray(this.frameWidth*this.frameHeight*4),c=this.rgb!==null?this.rgb:this.rgba;let u=0,l=0;for(;l<a.length;)a[l++]=c[u++],a[l++]=c[u++],a[l++]=c[u++],a[l++]=255,c.length===a.length&&u++;return Promise.resolve(new ImageData(a,this.frameWidth,this.frameHeight))}return Promise.reject(new Error("No frame received"))}simulateKeyPress(){const a=Date.now()-this.startedAt;for(var c=arguments.length,u=new Array(c),l=0;l<c;l++)u[l]=arguments[l];u.forEach(d=>this.addKey(d,!0,a)),u.forEach(d=>this.addKey(d,!1,a+16))}sendKeyEvent(a,c){this.addKey(a,c,Date.now()-this.startedAt)}addKey(a,c,u){this.keyMatrix[a]===!0!==c&&(this.keyMatrix[a]=c,this.sendClientMessage("wc-add-key",{key:a,pressed:c,timeMs:u}))}sendMouseMotion(a,c){this.sendClientMessage("wc-mouse-move",{x:a,y:c,relative:!1,timeMs:Date.now()-this.startedAt})}sendMouseRelativeMotion(a,c){this.sendClientMessage("wc-mouse-move",{x:a,y:c,relative:!0,timeMs:Date.now()-this.startedAt})}sendMouseButton(a,c){this.sendClientMessage("wc-mouse-button",{button:a,pressed:c,timeMs:Date.now()-this.startedAt})}sendMouseSync(){this.sendClientMessage("wc-mouse-sync",{timeMs:Date.now()-this.startedAt})}persist(){if(this.persistPromise!==void 0)return this.persistPromise;const a=new Promise(c=>this.persistResolve=c);return this.persistPromise=a,this.sendClientMessage("wc-pack-fs-to-bundle"),a}onPersist(a){this.persistResolve&&(this.persistResolve(a),delete this.persistPromise,delete this.persistResolve)}pause(){this.sendClientMessage("wc-pause")}resume(){this.sendClientMessage("wc-resume")}mute(){this.sendClientMessage("wc-mute")}unmute(){this.sendClientMessage("wc-unmute")}exit(){return this.exitPromise!==void 0||(this.exitPromise=new Promise(a=>this.exitResolve=a),this.exitPromise.then(()=>{this.events().fireExit()}),this.resume(),this.sendClientMessage("wc-exit")),this.exitPromise}onExit(){this.transport.exit!==void 0&&this.transport.exit(),this.exitResolve&&(this.exitResolve(),delete this.exitPromise,delete this.exitResolve)}events(){return this.eventsImpl}networkConnect(a,c,u){return this.connectPromise!==null||this.disconnectPromise!==null?Promise.reject(new Error("Already prefoming connection or disconnection...")):(this.connectPromise=new Promise((l,d)=>{c.startsWith("wss://")||c.startsWith("ws://")||(c=(window.location.protocol==="http:"?"ws://":"wss://")+c),this.connectResolve=l,this.connectReject=d,this.sendClientMessage("wc-connect",{networkType:a,address:c,port:u})}),this.connectPromise)}networkDisconnect(a){return this.connectPromise!==null||this.disconnectPromise!==null?Promise.reject(new Error("Already prefoming connection or disconnection...")):(this.disconnectPromise=new Promise(c=>{this.disconnectResolve=c,this.sendClientMessage("wc-disconnect",{networkType:a})}),this.disconnectPromise)}}},{"../impl/ci-impl":145,"core-js/modules/es.typed-array.float32-array.js":131,"core-js/modules/es.typed-array.set.js":133,"core-js/modules/es.typed-array.sort.js":134,"core-js/modules/es.typed-array.uint8-array.js":135,"core-js/modules/es.typed-array.uint8-clamped-array.js":136,"core-js/modules/web.dom-collections.iterator.js":137}]},{},[143]),function(e,i){i(t)}(Li,function(e){const o=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],a=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],c=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],u=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],s=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function f(){let V,z,I,ee,he,xe;function be(Qe,Ue,Ze,ut,wt,At,ae,Re,ie,ce,Te){let ke,et,Ye,Ve,Ee,qe,dt,pt,rt,nt,ft,_t,Bt,yt,Dt;nt=0,Ee=Ze;do I[Qe[Ue+nt]]++,nt++,Ee--;while(Ee!==0);if(I[0]==Ze)return ae[0]=-1,Re[0]=0,0;for(pt=Re[0],qe=1;qe<=15&&I[qe]===0;qe++);for(dt=qe,pt<qe&&(pt=qe),Ee=15;Ee!==0&&I[Ee]===0;Ee--);for(Ye=Ee,pt>Ee&&(pt=Ee),Re[0]=pt,yt=1<<qe;qe<Ee;qe++,yt<<=1)if((yt-=I[qe])<0)return-3;if((yt-=I[Ee])<0)return-3;for(I[Ee]+=yt,xe[1]=qe=0,nt=1,Bt=2;--Ee!=0;)xe[Bt]=qe+=I[nt],Bt++,nt++;Ee=0,nt=0;do(qe=Qe[Ue+nt])!==0&&(Te[xe[qe]++]=Ee),nt++;while(++Ee<Ze);for(Ze=xe[Ye],xe[0]=Ee=0,nt=0,Ve=-1,_t=-pt,he[0]=0,ft=0,Dt=0;dt<=Ye;dt++)for(ke=I[dt];ke--!=0;){for(;dt>_t+pt;){if(Ve++,_t+=pt,Dt=Ye-_t,Dt=Dt>pt?pt:Dt,(et=1<<(qe=dt-_t))>ke+1&&(et-=ke+1,Bt=dt,qe<Dt))for(;++qe<Dt&&!((et<<=1)<=I[++Bt]);)et-=I[Bt];if(Dt=1<<qe,ce[0]+Dt>1440)return-3;he[Ve]=ft=ce[0],ce[0]+=Dt,Ve!==0?(xe[Ve]=Ee,ee[0]=qe,ee[1]=pt,qe=Ee>>>_t-pt,ee[2]=ft-he[Ve-1]-qe,ie.set(ee,3*(he[Ve-1]+qe))):ae[0]=ft}for(ee[1]=dt-_t,nt>=Ze?ee[0]=192:Te[nt]<ut?(ee[0]=Te[nt]<256?0:96,ee[2]=Te[nt++]):(ee[0]=At[Te[nt]-ut]+16+64,ee[2]=wt[Te[nt++]-ut]),et=1<<dt-_t,qe=Ee>>>_t;qe<Dt;qe+=et)ie.set(ee,3*(ft+qe));for(qe=1<<dt-1;Ee&qe;qe>>>=1)Ee^=qe;for(Ee^=qe,rt=(1<<_t)-1;(Ee&rt)!=xe[Ve];)Ve--,_t-=pt,rt=(1<<_t)-1}return yt!==0&&Ye!=1?-5:0}function Be(Qe){let Ue;for(V||(V=[],z=[],I=new Int32Array(16),ee=[],he=new Int32Array(15),xe=new Int32Array(16)),z.length<Qe&&(z=[]),Ue=0;Ue<Qe;Ue++)z[Ue]=0;for(Ue=0;Ue<16;Ue++)I[Ue]=0;for(Ue=0;Ue<3;Ue++)ee[Ue]=0;he.set(I.subarray(0,15),0),xe.set(I.subarray(0,16),0)}this.inflate_trees_bits=function(Qe,Ue,Ze,ut,wt){let At;return Be(19),V[0]=0,At=be(Qe,0,19,19,null,null,Ze,Ue,ut,V,z),At==-3?wt.msg="oversubscribed dynamic bit lengths tree":At!=-5&&Ue[0]!==0||(wt.msg="incomplete dynamic bit lengths tree",At=-3),At},this.inflate_trees_dynamic=function(Qe,Ue,Ze,ut,wt,At,ae,Re,ie){let ce;return Be(288),V[0]=0,ce=be(Ze,0,Qe,257,u,l,At,ut,Re,V,z),ce!=0||ut[0]===0?(ce==-3?ie.msg="oversubscribed literal/length tree":ce!=-4&&(ie.msg="incomplete literal/length tree",ce=-3),ce):(Be(288),ce=be(Ze,Qe,Ue,0,d,s,ae,wt,Re,V,z),ce!=0||wt[0]===0&&Qe>257?(ce==-3?ie.msg="oversubscribed distance tree":ce==-5?(ie.msg="incomplete distance tree",ce=-3):ce!=-4&&(ie.msg="empty distance tree with lengths",ce=-3),ce):0)}}function p(){const V=this;let z,I,ee,he,xe=0,be=0,Be=0,Qe=0,Ue=0,Ze=0,ut=0,wt=0,At=0,ae=0;function Re(ie,ce,Te,ke,et,Ye,Ve,Ee){let qe,dt,pt,rt,nt,ft,_t,Bt,yt,Dt,Mi,Ei,Et,rr,Ht,qt;_t=Ee.next_in_index,Bt=Ee.avail_in,nt=Ve.bitb,ft=Ve.bitk,yt=Ve.write,Dt=yt<Ve.read?Ve.read-yt-1:Ve.end-yt,Mi=o[ie],Ei=o[ce];do{for(;ft<20;)Bt--,nt|=(255&Ee.read_byte(_t++))<<ft,ft+=8;if(qe=nt&Mi,dt=Te,pt=ke,qt=3*(pt+qe),(rt=dt[qt])!==0)for(;;){if(nt>>=dt[qt+1],ft-=dt[qt+1],(16&rt)!=0){for(rt&=15,Et=dt[qt+2]+(nt&o[rt]),nt>>=rt,ft-=rt;ft<15;)Bt--,nt|=(255&Ee.read_byte(_t++))<<ft,ft+=8;for(qe=nt&Ei,dt=et,pt=Ye,qt=3*(pt+qe),rt=dt[qt];;){if(nt>>=dt[qt+1],ft-=dt[qt+1],(16&rt)!=0){for(rt&=15;ft<rt;)Bt--,nt|=(255&Ee.read_byte(_t++))<<ft,ft+=8;if(rr=dt[qt+2]+(nt&o[rt]),nt>>=rt,ft-=rt,Dt-=Et,yt>=rr)Ht=yt-rr,yt-Ht>0&&2>yt-Ht?(Ve.window[yt++]=Ve.window[Ht++],Ve.window[yt++]=Ve.window[Ht++],Et-=2):(Ve.window.set(Ve.window.subarray(Ht,Ht+2),yt),yt+=2,Ht+=2,Et-=2);else{Ht=yt-rr;do Ht+=Ve.end;while(Ht<0);if(rt=Ve.end-Ht,Et>rt){if(Et-=rt,yt-Ht>0&&rt>yt-Ht)do Ve.window[yt++]=Ve.window[Ht++];while(--rt!=0);else Ve.window.set(Ve.window.subarray(Ht,Ht+rt),yt),yt+=rt,Ht+=rt,rt=0;Ht=0}}if(yt-Ht>0&&Et>yt-Ht)do Ve.window[yt++]=Ve.window[Ht++];while(--Et!=0);else Ve.window.set(Ve.window.subarray(Ht,Ht+Et),yt),yt+=Et,Ht+=Et,Et=0;break}if(64&rt)return Ee.msg="invalid distance code",Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,-3;qe+=dt[qt+2],qe+=nt&o[rt],qt=3*(pt+qe),rt=dt[qt]}break}if(64&rt)return 32&rt?(Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,1):(Ee.msg="invalid literal/length code",Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,-3);if(qe+=dt[qt+2],qe+=nt&o[rt],qt=3*(pt+qe),(rt=dt[qt])===0){nt>>=dt[qt+1],ft-=dt[qt+1],Ve.window[yt++]=dt[qt+2],Dt--;break}}else nt>>=dt[qt+1],ft-=dt[qt+1],Ve.window[yt++]=dt[qt+2],Dt--}while(Dt>=258&&Bt>=10);return Et=Ee.avail_in-Bt,Et=ft>>3<Et?ft>>3:Et,Bt+=Et,_t-=Et,ft-=Et<<3,Ve.bitb=nt,Ve.bitk=ft,Ee.avail_in=Bt,Ee.total_in+=_t-Ee.next_in_index,Ee.next_in_index=_t,Ve.write=yt,0}V.init=function(ie,ce,Te,ke,et,Ye){z=0,ut=ie,wt=ce,ee=Te,At=ke,he=et,ae=Ye,I=null},V.proc=function(ie,ce,Te){let ke,et,Ye,Ve,Ee,qe,dt,pt=0,rt=0,nt=0;for(nt=ce.next_in_index,Ve=ce.avail_in,pt=ie.bitb,rt=ie.bitk,Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee;;)switch(z){case 0:if(qe>=258&&Ve>=10&&(ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,Te=Re(ut,wt,ee,At,he,ae,ie,ce),nt=ce.next_in_index,Ve=ce.avail_in,pt=ie.bitb,rt=ie.bitk,Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,Te!=0)){z=Te==1?7:9;break}Be=ut,I=ee,be=At,z=1;case 1:for(ke=Be;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);Te=0,Ve--,pt|=(255&ce.read_byte(nt++))<<rt,rt+=8}if(et=3*(be+(pt&o[ke])),pt>>>=I[et+1],rt-=I[et+1],Ye=I[et],Ye===0){Qe=I[et+2],z=6;break}if(16&Ye){Ue=15&Ye,xe=I[et+2],z=2;break}if(!(64&Ye)){Be=Ye,be=et/3+I[et+2];break}if(32&Ye){z=7;break}return z=9,ce.msg="invalid literal/length code",Te=-3,ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);case 2:for(ke=Ue;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);Te=0,Ve--,pt|=(255&ce.read_byte(nt++))<<rt,rt+=8}xe+=pt&o[ke],pt>>=ke,rt-=ke,Be=wt,I=he,be=ae,z=3;case 3:for(ke=Be;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);Te=0,Ve--,pt|=(255&ce.read_byte(nt++))<<rt,rt+=8}if(et=3*(be+(pt&o[ke])),pt>>=I[et+1],rt-=I[et+1],Ye=I[et],(16&Ye)!=0){Ue=15&Ye,Ze=I[et+2],z=4;break}if(!(64&Ye)){Be=Ye,be=et/3+I[et+2];break}return z=9,ce.msg="invalid distance code",Te=-3,ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);case 4:for(ke=Ue;rt<ke;){if(Ve===0)return ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);Te=0,Ve--,pt|=(255&ce.read_byte(nt++))<<rt,rt+=8}Ze+=pt&o[ke],pt>>=ke,rt-=ke,z=5;case 5:for(dt=Ee-Ze;dt<0;)dt+=ie.end;for(;xe!==0;){if(qe===0&&(Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0&&(ie.write=Ee,Te=ie.inflate_flush(ce,Te),Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0)))return ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);ie.window[Ee++]=ie.window[dt++],qe--,dt==ie.end&&(dt=0),xe--}z=0;break;case 6:if(qe===0&&(Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0&&(ie.write=Ee,Te=ie.inflate_flush(ce,Te),Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,Ee==ie.end&&ie.read!==0&&(Ee=0,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee),qe===0)))return ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);Te=0,ie.window[Ee++]=Qe,qe--,z=0;break;case 7:if(rt>7&&(rt-=8,Ve++,nt--),ie.write=Ee,Te=ie.inflate_flush(ce,Te),Ee=ie.write,qe=Ee<ie.read?ie.read-Ee-1:ie.end-Ee,ie.read!=ie.write)return ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);z=8;case 8:return Te=1,ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);case 9:return Te=-3,ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te);default:return Te=-2,ie.bitb=pt,ie.bitk=rt,ce.avail_in=Ve,ce.total_in+=nt-ce.next_in_index,ce.next_in_index=nt,ie.write=Ee,ie.inflate_flush(ce,Te)}},V.free=function(){}}f.inflate_trees_fixed=function(V,z,I,ee){return V[0]=9,z[0]=5,I[0]=a,ee[0]=c,0};const v=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function g(V,z){const I=this;let ee,he=0,xe=0,be=0,Be=0;const Qe=[0],Ue=[0],Ze=new p;let ut=0,wt=new Int32Array(4320);const At=new f;I.bitk=0,I.bitb=0,I.window=new Uint8Array(z),I.end=z,I.read=0,I.write=0,I.reset=function(ae,Re){Re&&(Re[0]=0),he==6&&Ze.free(ae),he=0,I.bitk=0,I.bitb=0,I.read=I.write=0},I.reset(V,null),I.inflate_flush=function(ae,Re){let ie,ce,Te;return ce=ae.next_out_index,Te=I.read,ie=(Te<=I.write?I.write:I.end)-Te,ie>ae.avail_out&&(ie=ae.avail_out),ie!==0&&Re==-5&&(Re=0),ae.avail_out-=ie,ae.total_out+=ie,ae.next_out.set(I.window.subarray(Te,Te+ie),ce),ce+=ie,Te+=ie,Te==I.end&&(Te=0,I.write==I.end&&(I.write=0),ie=I.write-Te,ie>ae.avail_out&&(ie=ae.avail_out),ie!==0&&Re==-5&&(Re=0),ae.avail_out-=ie,ae.total_out+=ie,ae.next_out.set(I.window.subarray(Te,Te+ie),ce),ce+=ie,Te+=ie),ae.next_out_index=ce,I.read=Te,Re},I.proc=function(ae,Re){let ie,ce,Te,ke,et,Ye,Ve,Ee;for(ke=ae.next_in_index,et=ae.avail_in,ce=I.bitb,Te=I.bitk,Ye=I.write,Ve=Ye<I.read?I.read-Ye-1:I.end-Ye;;){let qe,dt,pt,rt,nt,ft,_t,Bt;switch(he){case 0:for(;Te<3;){if(et===0)return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Re=0,et--,ce|=(255&ae.read_byte(ke++))<<Te,Te+=8}switch(ie=7&ce,ut=1&ie,ie>>>1){case 0:ce>>>=3,Te-=3,ie=7&Te,ce>>>=ie,Te-=ie,he=1;break;case 1:qe=[],dt=[],pt=[[]],rt=[[]],f.inflate_trees_fixed(qe,dt,pt,rt),Ze.init(qe[0],dt[0],pt[0],0,rt[0],0),ce>>>=3,Te-=3,he=6;break;case 2:ce>>>=3,Te-=3,he=3;break;case 3:return ce>>>=3,Te-=3,he=9,ae.msg="invalid block type",Re=-3,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re)}break;case 1:for(;Te<32;){if(et===0)return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Re=0,et--,ce|=(255&ae.read_byte(ke++))<<Te,Te+=8}if((~ce>>>16&65535)!=(65535&ce))return he=9,ae.msg="invalid stored block lengths",Re=-3,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);xe=65535&ce,ce=Te=0,he=xe!==0?2:ut!==0?7:0;break;case 2:if(et===0||Ve===0&&(Ye==I.end&&I.read!==0&&(Ye=0,Ve=Ye<I.read?I.read-Ye-1:I.end-Ye),Ve===0&&(I.write=Ye,Re=I.inflate_flush(ae,Re),Ye=I.write,Ve=Ye<I.read?I.read-Ye-1:I.end-Ye,Ye==I.end&&I.read!==0&&(Ye=0,Ve=Ye<I.read?I.read-Ye-1:I.end-Ye),Ve===0)))return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);if(Re=0,ie=xe,ie>et&&(ie=et),ie>Ve&&(ie=Ve),I.window.set(ae.read_buf(ke,ie),Ye),ke+=ie,et-=ie,Ye+=ie,Ve-=ie,(xe-=ie)!=0)break;he=ut!==0?7:0;break;case 3:for(;Te<14;){if(et===0)return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Re=0,et--,ce|=(255&ae.read_byte(ke++))<<Te,Te+=8}if(be=ie=16383&ce,(31&ie)>29||(ie>>5&31)>29)return he=9,ae.msg="too many length or distance symbols",Re=-3,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);if(ie=258+(31&ie)+(ie>>5&31),!ee||ee.length<ie)ee=[];else for(Ee=0;Ee<ie;Ee++)ee[Ee]=0;ce>>>=14,Te-=14,Be=0,he=4;case 4:for(;Be<4+(be>>>10);){for(;Te<3;){if(et===0)return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Re=0,et--,ce|=(255&ae.read_byte(ke++))<<Te,Te+=8}ee[v[Be++]]=7&ce,ce>>>=3,Te-=3}for(;Be<19;)ee[v[Be++]]=0;if(Qe[0]=7,ie=At.inflate_trees_bits(ee,Qe,Ue,wt,ae),ie!=0)return(Re=ie)==-3&&(ee=null,he=9),I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Be=0,he=5;case 5:for(;ie=be,!(Be>=258+(31&ie)+(ie>>5&31));){let yt,Dt;for(ie=Qe[0];Te<ie;){if(et===0)return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Re=0,et--,ce|=(255&ae.read_byte(ke++))<<Te,Te+=8}if(ie=wt[3*(Ue[0]+(ce&o[ie]))+1],Dt=wt[3*(Ue[0]+(ce&o[ie]))+2],Dt<16)ce>>>=ie,Te-=ie,ee[Be++]=Dt;else{for(Ee=Dt==18?7:Dt-14,yt=Dt==18?11:3;Te<ie+Ee;){if(et===0)return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Re=0,et--,ce|=(255&ae.read_byte(ke++))<<Te,Te+=8}if(ce>>>=ie,Te-=ie,yt+=ce&o[Ee],ce>>>=Ee,Te-=Ee,Ee=Be,ie=be,Ee+yt>258+(31&ie)+(ie>>5&31)||Dt==16&&Ee<1)return ee=null,he=9,ae.msg="invalid bit length repeat",Re=-3,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Dt=Dt==16?ee[Ee-1]:0;do ee[Ee++]=Dt;while(--yt!=0);Be=Ee}}if(Ue[0]=-1,nt=[],ft=[],_t=[],Bt=[],nt[0]=9,ft[0]=6,ie=be,ie=At.inflate_trees_dynamic(257+(31&ie),1+(ie>>5&31),ee,nt,ft,_t,Bt,wt,ae),ie!=0)return ie==-3&&(ee=null,he=9),Re=ie,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);Ze.init(nt[0],ft[0],wt,_t[0],wt,Bt[0]),he=6;case 6:if(I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,(Re=Ze.proc(I,ae,Re))!=1)return I.inflate_flush(ae,Re);if(Re=0,Ze.free(ae),ke=ae.next_in_index,et=ae.avail_in,ce=I.bitb,Te=I.bitk,Ye=I.write,Ve=Ye<I.read?I.read-Ye-1:I.end-Ye,ut===0){he=0;break}he=7;case 7:if(I.write=Ye,Re=I.inflate_flush(ae,Re),Ye=I.write,Ve=Ye<I.read?I.read-Ye-1:I.end-Ye,I.read!=I.write)return I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);he=8;case 8:return Re=1,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);case 9:return Re=-3,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re);default:return Re=-2,I.bitb=ce,I.bitk=Te,ae.avail_in=et,ae.total_in+=ke-ae.next_in_index,ae.next_in_index=ke,I.write=Ye,I.inflate_flush(ae,Re)}}},I.free=function(ae){I.reset(ae,null),I.window=null,wt=null},I.set_dictionary=function(ae,Re,ie){I.window.set(ae.subarray(Re,Re+ie),0),I.read=I.write=ie},I.sync_point=function(){return he==1?1:0}}const m=13,y=[0,0,255,255];function _(){const V=this;function z(I){return I&&I.istate?(I.total_in=I.total_out=0,I.msg=null,I.istate.mode=7,I.istate.blocks.reset(I,null),0):-2}V.mode=0,V.method=0,V.was=[0],V.need=0,V.marker=0,V.wbits=0,V.inflateEnd=function(I){return V.blocks&&V.blocks.free(I),V.blocks=null,0},V.inflateInit=function(I,ee){return I.msg=null,V.blocks=null,ee<8||ee>15?(V.inflateEnd(I),-2):(V.wbits=ee,I.istate.blocks=new g(I,1<<ee),z(I),0)},V.inflate=function(I,ee){let he,xe;if(!I||!I.istate||!I.next_in)return-2;const be=I.istate;for(ee=ee==4?-5:0,he=-5;;)switch(be.mode){case 0:if(I.avail_in===0)return he;if(he=ee,I.avail_in--,I.total_in++,(15&(be.method=I.read_byte(I.next_in_index++)))!=8){be.mode=m,I.msg="unknown compression method",be.marker=5;break}if(8+(be.method>>4)>be.wbits){be.mode=m,I.msg="invalid window size",be.marker=5;break}be.mode=1;case 1:if(I.avail_in===0)return he;if(he=ee,I.avail_in--,I.total_in++,xe=255&I.read_byte(I.next_in_index++),((be.method<<8)+xe)%31!=0){be.mode=m,I.msg="incorrect header check",be.marker=5;break}if(!(32&xe)){be.mode=7;break}be.mode=2;case 2:if(I.avail_in===0)return he;he=ee,I.avail_in--,I.total_in++,be.need=(255&I.read_byte(I.next_in_index++))<<24&4278190080,be.mode=3;case 3:if(I.avail_in===0)return he;he=ee,I.avail_in--,I.total_in++,be.need+=(255&I.read_byte(I.next_in_index++))<<16&16711680,be.mode=4;case 4:if(I.avail_in===0)return he;he=ee,I.avail_in--,I.total_in++,be.need+=(255&I.read_byte(I.next_in_index++))<<8&65280,be.mode=5;case 5:return I.avail_in===0?he:(he=ee,I.avail_in--,I.total_in++,be.need+=255&I.read_byte(I.next_in_index++),be.mode=6,2);case 6:return be.mode=m,I.msg="need dictionary",be.marker=0,-2;case 7:if(he=be.blocks.proc(I,he),he==-3){be.mode=m,be.marker=0;break}if(he==0&&(he=ee),he!=1)return he;he=ee,be.blocks.reset(I,be.was),be.mode=12;case 12:return 1;case m:return-3;default:return-2}},V.inflateSetDictionary=function(I,ee,he){let xe=0,be=he;if(!I||!I.istate||I.istate.mode!=6)return-2;const Be=I.istate;return be>=1<<Be.wbits&&(be=(1<<Be.wbits)-1,xe=he-be),Be.blocks.set_dictionary(ee,xe,be),Be.mode=7,0},V.inflateSync=function(I){let ee,he,xe,be,Be;if(!I||!I.istate)return-2;const Qe=I.istate;if(Qe.mode!=m&&(Qe.mode=m,Qe.marker=0),(ee=I.avail_in)===0)return-5;for(he=I.next_in_index,xe=Qe.marker;ee!==0&&xe<4;)I.read_byte(he)==y[xe]?xe++:xe=I.read_byte(he)!==0?0:4-xe,he++,ee--;return I.total_in+=he-I.next_in_index,I.next_in_index=he,I.avail_in=ee,Qe.marker=xe,xe!=4?-3:(be=I.total_in,Be=I.total_out,z(I),I.total_in=be,I.total_out=Be,Qe.mode=7,0)},V.inflateSyncPoint=function(I){return I&&I.istate&&I.istate.blocks?I.istate.blocks.sync_point():-2}}function b(){}b.prototype={inflateInit:function(V){const z=this;return z.istate=new _,V||(V=15),z.istate.inflateInit(z,V)},inflate:function(V){const z=this;return z.istate?z.istate.inflate(z,V):-2},inflateEnd:function(){const V=this;if(!V.istate)return-2;const z=V.istate.inflateEnd(V);return V.istate=null,z},inflateSync:function(){const V=this;return V.istate?V.istate.inflateSync(V):-2},inflateSetDictionary:function(V,z){const I=this;return I.istate?I.istate.inflateSetDictionary(I,V,z):-2},read_byte:function(V){return this.next_in[V]},read_buf:function(V,z){return this.next_in.subarray(V,V+z)}};const w={chunkSize:524288,maxWorkers:typeof navigator<"u"&&navigator.hardwareConcurrency||2,terminateWorkerTimeout:5e3,useWebWorkers:!0,workerScripts:void 0},T=Object.assign({},w);function E(V){if(V.chunkSize!==void 0&&(T.chunkSize=V.chunkSize),V.maxWorkers!==void 0&&(T.maxWorkers=V.maxWorkers),V.terminateWorkerTimeout!==void 0&&(T.terminateWorkerTimeout=V.terminateWorkerTimeout),V.useWebWorkers!==void 0&&(T.useWebWorkers=V.useWebWorkers),V.Deflate!==void 0&&(T.Deflate=V.Deflate),V.Inflate!==void 0&&(T.Inflate=V.Inflate),V.workerScripts!==void 0){if(V.workerScripts.deflate){if(!Array.isArray(V.workerScripts.deflate))throw new Error("workerScripts.deflate must be an array");T.workerScripts||(T.workerScripts={}),T.workerScripts.deflate=V.workerScripts.deflate}if(V.workerScripts.inflate){if(!Array.isArray(V.workerScripts.inflate))throw new Error("workerScripts.inflate must be an array");T.workerScripts||(T.workerScripts={}),T.workerScripts.inflate=V.workerScripts.inflate}}}const k="Abort error";function S(V,z){if(V&&V.aborted)throw z.flush(),new Error(k)}async function A(V,z){return z.length&&await V.writeUint8Array(z),z.length}const N="HTTP error ",U="HTTP Range not supported",x="text/plain",M="Content-Length",R="Accept-Ranges",L="HEAD",F="GET",q="bytes";class j{constructor(){this.size=0}init(){this.initialized=!0}}class W extends j{}class D extends j{writeUint8Array(z){this.size+=z.length}}class C extends W{constructor(z){super(),this.blob=z,this.size=z.size}async readUint8Array(z,I){const ee=new FileReader;return new Promise((he,xe)=>{ee.onload=be=>he(new Uint8Array(be.target.result)),ee.onerror=()=>xe(ee.error),ee.readAsArrayBuffer(this.blob.slice(z,z+I))})}}class P extends W{constructor(z,I){super(),this.url=z,this.preventHeadRequest=I.preventHeadRequest,this.useRangeHeader=I.useRangeHeader,this.forceRangeRequests=I.forceRangeRequests,this.options=Object.assign({},I),delete this.options.preventHeadRequest,delete this.options.useRangeHeader,delete this.options.forceRangeRequests,delete this.options.useXHR}async init(){if(super.init(),ue(this.url)&&!this.preventHeadRequest){const z=await B(L,this.url,this.options);if(this.size=Number(z.headers.get(M)),!this.forceRangeRequests&&this.useRangeHeader&&z.headers.get(R)!=q)throw new Error(U);this.size===void 0&&await O(this,this.options)}else await O(this,this.options)}async readUint8Array(z,I){if(this.useRangeHeader){const ee=await B(F,this.url,this.options,Object.assign({},this.options.headers,{HEADER_RANGE:"bytes="+z+"-"+(z+I-1)}));if(ee.status!=206)throw new Error(U);return new Uint8Array(await ee.arrayBuffer())}return this.data||await O(this,this.options),new Uint8Array(this.data.subarray(z,z+I))}}async function O(V,z){const I=await B(F,V.url,z);V.data=new Uint8Array(await I.arrayBuffer()),V.size||(V.size=V.data.length)}async function B(V,z,I,ee){ee=Object.assign({},I.headers,ee);const he=await fetch(z,Object.assign({},I,{method:V,headers:ee}));if(he.status<400)return he;throw new Error(N+(he.statusText||he.status))}class G extends W{constructor(z,I){super(),this.url=z,this.preventHeadRequest=I.preventHeadRequest,this.useRangeHeader=I.useRangeHeader,this.forceRangeRequests=I.forceRangeRequests}async init(){if(super.init(),ue(this.url)&&!this.preventHeadRequest)return new Promise((z,I)=>H(L,this.url,ee=>{this.size=Number(ee.getResponseHeader(M)),this.useRangeHeader?this.forceRangeRequests||ee.getResponseHeader(R)==q?z():I(new Error(U)):this.size===void 0?Y(this,this.url).then(()=>z()).catch(I):z()},I));await Y(this,this.url)}async readUint8Array(z,I){if(!this.useRangeHeader)return this.data||await Y(this,this.url),new Uint8Array(this.data.subarray(z,z+I));if((await new Promise((ee,he)=>H(F,this.url,xe=>ee(new Uint8Array(xe.response)),he,[["Range","bytes="+z+"-"+(z+I-1)]]))).status!=206)throw new Error(U)}}function Y(V,z){return new Promise((I,ee)=>H(F,z,he=>{V.data=new Uint8Array(he.response),V.size||(V.size=V.data.length),I()},ee))}function H(V,z,I,ee,he=[]){const xe=new XMLHttpRequest;return xe.addEventListener("load",()=>{xe.status<400?I(xe):ee(N+(xe.statusText||xe.status))},!1),xe.addEventListener("error",ee,!1),xe.open(V,z),he.forEach(be=>xe.setRequestHeader(be[0],be[1])),xe.responseType="arraybuffer",xe.send(),xe}class te extends W{constructor(z,I={}){super(),this.url=z,I.useXHR?this.reader=new G(z,I):this.reader=new P(z,I)}set size(z){}get size(){return this.reader.size}async init(){super.init(),await this.reader.init()}async readUint8Array(z,I){return this.reader.readUint8Array(z,I)}}function ue(V){if(typeof document<"u"){const z=document.createElement("a");return z.href=V,z.protocol=="http:"||z.protocol=="https:"}return/^https?:\/\//i.test(V)}const _e=4294967295,J=33639248,re=101075792,pe="\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""),we=[];for(let V=0;V<256;V++){let z=V;for(let I=0;I<8;I++)1&z?z=z>>>1^3988292384:z>>>=1;we[V]=z}class me{constructor(z){this.crc=z||-1}append(z){let I=0|this.crc;for(let ee=0,he=0|z.length;ee<he;ee++)I=I>>>8^we[255&(I^z[ee])];this.crc=I}get(){return~this.crc}}const ye={concat(V,z){if(V.length===0||z.length===0)return V.concat(z);const I=V[V.length-1],ee=ye.getPartial(I);return ee===32?V.concat(z):ye._shiftRight(z,ee,0|I,V.slice(0,V.length-1))},bitLength(V){const z=V.length;if(z===0)return 0;const I=V[z-1];return 32*(z-1)+ye.getPartial(I)},clamp(V,z){if(32*V.length<z)return V;const I=(V=V.slice(0,Math.ceil(z/32))).length;return z&=31,I>0&&z&&(V[I-1]=ye.partial(z,V[I-1]&2147483648>>z-1,1)),V},partial:(V,z,I)=>V===32?z:(I?0|z:z<<32-V)+1099511627776*V,getPartial:V=>Math.round(V/1099511627776)||32,_shiftRight(V,z,I,ee){for(ee===void 0&&(ee=[]);z>=32;z-=32)ee.push(I),I=0;if(z===0)return ee.concat(V);for(let be=0;be<V.length;be++)ee.push(I|V[be]>>>z),I=V[be]<<32-z;const he=V.length?V[V.length-1]:0,xe=ye.getPartial(he);return ee.push(ye.partial(z+xe&31,z+xe>32?I:ee.pop(),1)),ee}},$e={bytes:{fromBits(V){const z=ye.bitLength(V)/8,I=new Uint8Array(z);let ee;for(let he=0;he<z;he++)!(3&he)&&(ee=V[he/4]),I[he]=ee>>>24,ee<<=8;return I},toBits(V){const z=[];let I,ee=0;for(I=0;I<V.length;I++)ee=ee<<8|V[I],(3&I)==3&&(z.push(ee),ee=0);return 3&I&&z.push(ye.partial(8*(3&I),ee)),z}}},Fe={sha1:function(V){V?(this._h=V._h.slice(0),this._buffer=V._buffer.slice(0),this._length=V._length):this.reset()}};Fe.sha1.prototype={blockSize:512,reset:function(){const V=this;return V._h=this._init.slice(0),V._buffer=[],V._length=0,V},update:function(V){const z=this;typeof V=="string"&&(V=$e.utf8String.toBits(V));const I=z._buffer=ye.concat(z._buffer,V),ee=z._length,he=z._length=ee+ye.bitLength(V);if(he>9007199254740991)throw new Error("Cannot hash more than 2^53 - 1 bits");const xe=new Uint32Array(I);let be=0;for(let Be=z.blockSize+ee-(z.blockSize+ee&z.blockSize-1);Be<=he;Be+=z.blockSize)z._block(xe.subarray(16*be,16*(be+1))),be+=1;return I.splice(0,16*be),z},finalize:function(){const V=this;let z=V._buffer;const I=V._h;z=ye.concat(z,[ye.partial(1,1)]);for(let ee=z.length+2;15&ee;ee++)z.push(0);for(z.push(Math.floor(V._length/4294967296)),z.push(0|V._length);z.length;)V._block(z.splice(0,16));return V.reset(),I},_init:[1732584193,4023233417,2562383102,271733878,3285377520],_key:[1518500249,1859775393,2400959708,3395469782],_f:function(V,z,I,ee){return V<=19?z&I|~z&ee:V<=39?z^I^ee:V<=59?z&I|z&ee|I&ee:V<=79?z^I^ee:void 0},_S:function(V,z){return z<<V|z>>>32-V},_block:function(V){const z=this,I=z._h,ee=Array(80);for(let Ue=0;Ue<16;Ue++)ee[Ue]=V[Ue];let he=I[0],xe=I[1],be=I[2],Be=I[3],Qe=I[4];for(let Ue=0;Ue<=79;Ue++){Ue>=16&&(ee[Ue]=z._S(1,ee[Ue-3]^ee[Ue-8]^ee[Ue-14]^ee[Ue-16]));const Ze=z._S(5,he)+z._f(Ue,xe,be,Be)+Qe+ee[Ue]+z._key[Math.floor(Ue/20)]|0;Qe=Be,Be=be,be=z._S(30,xe),xe=he,he=Ze}I[0]=I[0]+he|0,I[1]=I[1]+xe|0,I[2]=I[2]+be|0,I[3]=I[3]+Be|0,I[4]=I[4]+Qe|0}};const Je=class{constructor(V){const z=this;z._tables=[[[],[],[],[],[]],[[],[],[],[],[]]],z._tables[0][0][0]||z._precompute();const I=z._tables[0][4],ee=z._tables[1],he=V.length;let xe,be,Be,Qe=1;if(he!==4&&he!==6&&he!==8)throw new Error("invalid aes key size");for(z._key=[be=V.slice(0),Be=[]],xe=he;xe<4*he+28;xe++){let Ue=be[xe-1];(xe%he==0||he===8&&xe%he==4)&&(Ue=I[Ue>>>24]<<24^I[Ue>>16&255]<<16^I[Ue>>8&255]<<8^I[255&Ue],xe%he==0&&(Ue=Ue<<8^Ue>>>24^Qe<<24,Qe=Qe<<1^283*(Qe>>7))),be[xe]=be[xe-he]^Ue}for(let Ue=0;xe;Ue++,xe--){const Ze=be[3&Ue?xe:xe-4];Be[Ue]=xe<=4||Ue<4?Ze:ee[0][I[Ze>>>24]]^ee[1][I[Ze>>16&255]]^ee[2][I[Ze>>8&255]]^ee[3][I[255&Ze]]}}encrypt(V){return this._crypt(V,0)}decrypt(V){return this._crypt(V,1)}_precompute(){const V=this._tables[0],z=this._tables[1],I=V[4],ee=z[4],he=[],xe=[];let be,Be,Qe,Ue;for(let Ze=0;Ze<256;Ze++)xe[(he[Ze]=Ze<<1^283*(Ze>>7))^Ze]=Ze;for(let Ze=be=0;!I[Ze];Ze^=Be||1,be=xe[be]||1){let ut=be^be<<1^be<<2^be<<3^be<<4;ut=ut>>8^255&ut^99,I[Ze]=ut,ee[ut]=Ze,Ue=he[Qe=he[Be=he[Ze]]];let wt=16843009*Ue^65537*Qe^257*Be^16843008*Ze,At=257*he[ut]^16843008*ut;for(let ae=0;ae<4;ae++)V[ae][Ze]=At=At<<24^At>>>8,z[ae][ut]=wt=wt<<24^wt>>>8}for(let Ze=0;Ze<5;Ze++)V[Ze]=V[Ze].slice(0),z[Ze]=z[Ze].slice(0)}_crypt(V,z){if(V.length!==4)throw new Error("invalid aes block size");const I=this._key[z],ee=I.length/4-2,he=[0,0,0,0],xe=this._tables[z],be=xe[0],Be=xe[1],Qe=xe[2],Ue=xe[3],Ze=xe[4];let ut,wt,At,ae=V[0]^I[0],Re=V[z?3:1]^I[1],ie=V[2]^I[2],ce=V[z?1:3]^I[3],Te=4;for(let ke=0;ke<ee;ke++)ut=be[ae>>>24]^Be[Re>>16&255]^Qe[ie>>8&255]^Ue[255&ce]^I[Te],wt=be[Re>>>24]^Be[ie>>16&255]^Qe[ce>>8&255]^Ue[255&ae]^I[Te+1],At=be[ie>>>24]^Be[ce>>16&255]^Qe[ae>>8&255]^Ue[255&Re]^I[Te+2],ce=be[ce>>>24]^Be[ae>>16&255]^Qe[Re>>8&255]^Ue[255&ie]^I[Te+3],Te+=4,ae=ut,Re=wt,ie=At;for(let ke=0;ke<4;ke++)he[z?3&-ke:ke]=Ze[ae>>>24]<<24^Ze[Re>>16&255]<<16^Ze[ie>>8&255]<<8^Ze[255&ce]^I[Te++],ut=ae,ae=Re,Re=ie,ie=ce,ce=ut;return he}},ct=class{constructor(V,z){this._prf=V,this._initIv=z,this._iv=z}reset(){this._iv=this._initIv}update(V){return this.calculate(this._prf,V,this._iv)}incWord(V){if((V>>24&255)==255){let z=V>>16&255,I=V>>8&255,ee=255&V;z===255?(z=0,I===255?(I=0,ee===255?ee=0:++ee):++I):++z,V=0,V+=z<<16,V+=I<<8,V+=ee}else V+=1<<24;return V}incCounter(V){(V[0]=this.incWord(V[0]))===0&&(V[1]=this.incWord(V[1]))}calculate(V,z,I){let ee;if(!(ee=z.length))return[];const he=ye.bitLength(z);for(let xe=0;xe<ee;xe+=4){this.incCounter(I);const be=V.encrypt(I);z[xe]^=be[0],z[xe+1]^=be[1],z[xe+2]^=be[2],z[xe+3]^=be[3]}return ye.clamp(z,he)}},mt=class{constructor(V){const z=this,I=z._hash=Fe.sha1,ee=[[],[]],he=I.prototype.blockSize/32;z._baseHash=[new I,new I],V.length>he&&(V=I.hash(V));for(let xe=0;xe<he;xe++)ee[0][xe]=909522486^V[xe],ee[1][xe]=1549556828^V[xe];z._baseHash[0].update(ee[0]),z._baseHash[1].update(ee[1]),z._resultHash=new I(z._baseHash[0])}reset(){const V=this;V._resultHash=new V._hash(V._baseHash[0]),V._updated=!1}update(V){this._updated=!0,this._resultHash.update(V)}digest(){const V=this,z=V._resultHash.finalize(),I=new V._hash(V._baseHash[1]).update(z).finalize();return V.reset(),I}},K="Invalid pasword",X=16,fe={name:"PBKDF2"},Pe=Object.assign({hash:{name:"HMAC"}},fe),Le=Object.assign({iterations:1e3,hash:{name:"SHA-1"}},fe),Ne=["deriveBits"],ze=[8,12,16],De=[16,24,32],ve=10,Xe=[0,0,0,0],je=$e.bytes,Oe=Je,Ke=ct,He=mt;class Ae{constructor(z,I,ee){Object.assign(this,{password:z,signed:I,strength:ee-1,pendingInput:new Uint8Array(0)})}async append(z){const I=this;if(I.password){const ee=Ce(z,0,ze[I.strength]+2);await async function(he,xe,be){await Se(he,be,Ce(xe,0,ze[he.strength]));const Be=Ce(xe,ze[he.strength]),Qe=he.keys.passwordVerification;if(Qe[0]!=Be[0]||Qe[1]!=Be[1])throw new Error(K)}(I,ee,I.password),I.password=null,I.aesCtrGladman=new Ke(new Oe(I.keys.key),Array.from(Xe)),I.hmac=new He(I.keys.authentication),z=Ce(z,ze[I.strength]+2)}return $(I,z,new Uint8Array(z.length-ve-(z.length-ve)%X),0,ve,!0)}flush(){const z=this,I=z.pendingInput,ee=Ce(I,0,I.length-ve),he=Ce(I,I.length-ve);let xe=new Uint8Array(0);if(ee.length){const Be=je.toBits(ee);z.hmac.update(Be);const Qe=z.aesCtrGladman.update(Be);xe=je.fromBits(Qe)}let be=!0;if(z.signed){const Be=Ce(je.fromBits(z.hmac.digest()),0,ve);for(let Qe=0;Qe<ve;Qe++)Be[Qe]!=he[Qe]&&(be=!1)}return{valid:be,data:xe}}}class We{constructor(z,I){Object.assign(this,{password:z,strength:I-1,pendingInput:new Uint8Array(0)})}async append(z){const I=this;let ee=new Uint8Array(0);I.password&&(ee=await async function(xe,be){const Be=crypto.getRandomValues(new Uint8Array(ze[xe.strength]));return await Se(xe,be,Be),se(Be,xe.keys.passwordVerification)}(I,I.password),I.password=null,I.aesCtrGladman=new Ke(new Oe(I.keys.key),Array.from(Xe)),I.hmac=new He(I.keys.authentication));const he=new Uint8Array(ee.length+z.length-z.length%X);return he.set(ee,0),$(I,z,he,ee.length,0)}flush(){const z=this;let I=new Uint8Array(0);if(z.pendingInput.length){const he=z.aesCtrGladman.update(je.toBits(z.pendingInput));z.hmac.update(he),I=je.fromBits(he)}const ee=Ce(je.fromBits(z.hmac.digest()),0,ve);return{data:se(I,ee),signature:ee}}}function $(V,z,I,ee,he,xe){const be=z.length-he;let Be;for(V.pendingInput.length&&(z=se(V.pendingInput,z),I=function(Qe,Ue){if(Ue&&Ue>Qe.length){const Ze=Qe;(Qe=new Uint8Array(Ue)).set(Ze,0)}return Qe}(I,be-be%X)),Be=0;Be<=be-X;Be+=X){const Qe=je.toBits(Ce(z,Be,Be+X));xe&&V.hmac.update(Qe);const Ue=V.aesCtrGladman.update(Qe);xe||V.hmac.update(Ue),I.set(je.fromBits(Ue),Be+ee)}return V.pendingInput=Ce(z,Be),I}async function Se(V,z,I){const ee=new TextEncoder().encode(z),he=await crypto.subtle.importKey("raw",ee,Pe,!1,Ne),xe=await crypto.subtle.deriveBits(Object.assign({salt:I},Le),he,8*(2*De[V.strength]+2)),be=new Uint8Array(xe);V.keys={key:je.toBits(Ce(be,0,De[V.strength])),authentication:je.toBits(Ce(be,De[V.strength],2*De[V.strength])),passwordVerification:Ce(be,2*De[V.strength])}}function se(V,z){let I=V;return V.length+z.length&&(I=new Uint8Array(V.length+z.length),I.set(V,0),I.set(z,V.length)),I}function Ce(V,z,I){return V.subarray(z,I)}class Ge{constructor(z,I){Object.assign(this,{password:z,passwordVerification:I}),ln(this,z)}append(z){const I=this;if(I.password){const ee=Mt(I,z.subarray(0,12));if(I.password=null,ee[11]!=I.passwordVerification)throw new Error(K);z=z.subarray(12)}return Mt(I,z)}flush(){return{valid:!0,data:new Uint8Array(0)}}}class vt{constructor(z,I){Object.assign(this,{password:z,passwordVerification:I}),ln(this,z)}append(z){const I=this;let ee,he;if(I.password){I.password=null;const xe=crypto.getRandomValues(new Uint8Array(12));xe[11]=I.passwordVerification,ee=new Uint8Array(z.length+xe.length),ee.set(Nt(I,xe),0),he=12}else ee=new Uint8Array(z.length),he=0;return ee.set(Nt(I,z),he),ee}flush(){return{data:new Uint8Array(0)}}}function Mt(V,z){const I=new Uint8Array(z.length);for(let ee=0;ee<z.length;ee++)I[ee]=hn(V)^z[ee],Ut(V,I[ee]);return I}function Nt(V,z){const I=new Uint8Array(z.length);for(let ee=0;ee<z.length;ee++)I[ee]=hn(V)^z[ee],Ut(V,z[ee]);return I}function ln(V,z){V.keys=[305419896,591751049,878082192],V.crcKey0=new me(V.keys[0]),V.crcKey2=new me(V.keys[2]);for(let I=0;I<z.length;I++)Ut(V,z.charCodeAt(I))}function Ut(V,z){V.crcKey0.append([z]),V.keys[0]=~V.crcKey0.get(),V.keys[1]=Ln(V.keys[1]+Xt(V.keys[0])),V.keys[1]=Ln(Math.imul(V.keys[1],134775813)+1),V.crcKey2.append([V.keys[1]>>>24]),V.keys[2]=~V.crcKey2.get()}function hn(V){const z=2|V.keys[2];return Xt(Math.imul(z,1^z)>>>8)}function Xt(V){return 255&V}function Ln(V){return 4294967295&V}const fn="inflate",bi="Invalid signature";class xn{constructor(z,{signature:I,password:ee,signed:he,compressed:xe,zipCrypto:be,passwordVerification:Be,encryptionStrength:Qe},{chunkSize:Ue}){const Ze=!!ee;Object.assign(this,{signature:I,encrypted:Ze,signed:he,compressed:xe,inflate:xe&&new z({chunkSize:Ue}),crc32:he&&new me,zipCrypto:be,decrypt:Ze&&be?new Ge(ee,Be):new Ae(ee,he,Qe)})}async append(z){const I=this;return I.encrypted&&z.length&&(z=await I.decrypt.append(z)),I.compressed&&z.length&&(z=await I.inflate.append(z)),(!I.encrypted||I.zipCrypto)&&I.signed&&z.length&&I.crc32.append(z),z}async flush(){const z=this;let I,ee=new Uint8Array(0);if(z.encrypted){const he=z.decrypt.flush();if(!he.valid)throw new Error(bi);ee=he.data}if((!z.encrypted||z.zipCrypto)&&z.signed){const he=new DataView(new Uint8Array(4).buffer);if(I=z.crc32.get(),he.setUint32(0,I),z.signature!=he.getUint32(0,!1))throw new Error(bi)}return z.compressed&&(ee=await z.inflate.append(ee)||new Uint8Array(0),await z.inflate.flush()),{data:ee,signature:I}}}class wn{constructor(z,{encrypted:I,signed:ee,compressed:he,level:xe,zipCrypto:be,password:Be,passwordVerification:Qe,encryptionStrength:Ue},{chunkSize:Ze}){Object.assign(this,{encrypted:I,signed:ee,compressed:he,deflate:he&&new z({level:xe||5,chunkSize:Ze}),crc32:ee&&new me,zipCrypto:be,encrypt:I&&be?new vt(Be,Qe):new We(Be,Ue)})}async append(z){const I=this;let ee=z;return I.compressed&&z.length&&(ee=await I.deflate.append(z)),I.encrypted&&ee.length&&(ee=await I.encrypt.append(ee)),(!I.encrypted||I.zipCrypto)&&I.signed&&z.length&&I.crc32.append(z),ee}async flush(){const z=this;let I,ee=new Uint8Array(0);if(z.compressed&&(ee=await z.deflate.flush()||new Uint8Array(0)),z.encrypted){ee=await z.encrypt.append(ee);const he=z.encrypt.flush();I=he.signature;const xe=new Uint8Array(ee.length+he.data.length);xe.set(ee,0),xe.set(he.data,ee.length),ee=xe}return z.encrypted&&!z.zipCrypto||!z.signed||(I=z.crc32.get()),{data:ee,signature:I}}}const jn="init",kn="append",Yt="flush";let cn=!0;var xi=(V,z,I,ee,he,xe,be)=>(Object.assign(V,{busy:!0,codecConstructor:z,options:Object.assign({},I),scripts:be,terminate(){V.worker&&!V.busy&&(V.worker.terminate(),V.interface=null)},onTaskFinished(){V.busy=!1,he(V)}}),xe?function(Be,Qe){let Ue;const Ze={type:"module"};if(!Be.interface){if(cn)try{Be.worker=ut()}catch{cn=!1,Be.worker=ut(Ze)}else Be.worker=ut(Ze);Be.worker.addEventListener("message",function(ae){const Re=ae.data;if(Ue){const ie=Re.error,ce=Re.type;if(ie){const Te=new Error(ie.message);Te.stack=ie.stack,Ue.reject(Te),Ue=null,Be.onTaskFinished()}else if(ce==jn||ce==Yt||ce==kn){const Te=Re.data;ce==Yt?(Ue.resolve({data:new Uint8Array(Te),signature:Re.signature}),Ue=null,Be.onTaskFinished()):Ue.resolve(Te&&new Uint8Array(Te))}}},!1),Be.interface={append:ae=>wt({type:kn,data:ae}),flush:()=>wt({type:Yt})}}return Be.interface;function ut(ae={}){return new Worker(new URL(Be.scripts[0],typeof document>"u"&&typeof location>"u"?new Ku.URL("file:"+__filename).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("zip-no-worker-inflate.min.js",document.baseURI).href),ae)}async function wt(ae){if(!Ue){const Re=Be.options,ie=Be.scripts.slice(1);await At({scripts:ie,type:jn,options:Re,config:{chunkSize:Qe.chunkSize}})}return At(ae)}function At(ae){const Re=Be.worker,ie=new Promise((ce,Te)=>Ue={resolve:ce,reject:Te});try{if(ae.data)try{ae.data=ae.data.buffer,Re.postMessage(ae,[ae.data])}catch{Re.postMessage(ae)}else Re.postMessage(ae)}catch(ce){Ue.reject(ce),Ue=null,Be.onTaskFinished()}return ie}}(V,ee):function(Be,Qe){const Ue=function(Ze,ut,wt){return ut.codecType.startsWith("deflate")?new wn(Ze,ut,wt):ut.codecType.startsWith(fn)?new xn(Ze,ut,wt):void 0}(Be.codecConstructor,Be.options,Qe);return{async append(Ze){try{return await Ue.append(Ze)}catch(ut){throw Be.onTaskFinished(),ut}},async flush(){try{return await Ue.flush()}finally{Be.onTaskFinished()}}}}(V,ee));let Z=[],Q=[];function oe(V){V.terminateTimeout&&(clearTimeout(V.terminateTimeout),V.terminateTimeout=null)}const ne=["filename","rawFilename","directory","encrypted","compressedSize","uncompressedSize","lastModDate","rawLastModDate","comment","rawComment","signature","extraField","rawExtraField","bitFlag","extraFieldZip64","extraFieldUnicodePath","extraFieldUnicodeComment","extraFieldAES","filenameUTF8","commentUTF8","offset","zip64","compressionMethod","extraFieldNTFS","lastAccessDate","creationDate","extraFieldExtendedTimestamp","version","versionMadeBy","msDosCompatible","internalFileAttribute","externalFileAttribute"];class Me{constructor(z){ne.forEach(I=>this[I]=z[I])}}const ge="File format is not recognized",ot="End of central directory not found",it="End of Zip64 central directory not found",tt="End of Zip64 central directory locator not found",de="Central directory header not found",Ie="Local file header not found",at="Zip64 extra field not found",lt="File contains encrypted entry",xt="Encryption method not supported",It="Compression method not supported",Kt="utf-8",Pt=["uncompressedSize","compressedSize","offset"];class gt{constructor(z,I,ee){Object.assign(this,{reader:z,config:I,options:ee})}async getData(z,I,ee={}){const he=this,{reader:xe,offset:be,extraFieldAES:Be,compressionMethod:Qe,config:Ue,bitFlag:Ze,signature:ut,rawLastModDate:wt,compressedSize:At}=he,ae=he.localDirectory={};xe.initialized||await xe.init();let Re=await Hn(xe,be,30);const ie=rn(Re);let ce=si(he,ee,"password");if(ce=ce&&ce.length&&ce,Be&&Be.originalCompressionMethod!=99)throw new Error(It);if(Qe!=0&&Qe!=8)throw new Error(It);if(Ot(ie,0)!=67324752)throw new Error(Ie);ri(ae,ie,4),Re=await Hn(xe,be,30+ae.filenameLength+ae.extraFieldLength),ae.rawExtraField=Re.subarray(30+ae.filenameLength),Gt(he,ae,ie,4),I.lastAccessDate=ae.lastAccessDate,I.creationDate=ae.creationDate;const Te=he.encrypted&&ae.encrypted,ke=Te&&!Be;if(Te){if(!ke&&Be.strength===void 0)throw new Error(xt);if(!ce)throw new Error(lt)}const et=await function(Ee,qe,dt){const pt=!(!qe.compressed&&!qe.signed&&!qe.encrypted)&&(qe.useWebWorkers||qe.useWebWorkers===void 0&&dt.useWebWorkers),rt=pt&&dt.workerScripts?dt.workerScripts[qe.codecType]:[];if(Z.length<dt.maxWorkers){const ft={};return Z.push(ft),xi(ft,Ee,qe,dt,nt,pt,rt)}{const ft=Z.find(_t=>!_t.busy);return ft?(oe(ft),xi(ft,Ee,qe,dt,nt,pt,rt)):new Promise(_t=>Q.push({resolve:_t,codecConstructor:Ee,options:qe,webWorker:pt,scripts:rt}))}function nt(ft){if(Q.length){const[{resolve:_t,codecConstructor:Bt,options:yt,webWorker:Dt,scripts:Mi}]=Q.splice(0,1);_t(xi(ft,Bt,yt,dt,nt,Dt,Mi))}else ft.worker?(oe(ft),Number.isFinite(dt.terminateWorkerTimeout)&&dt.terminateWorkerTimeout>=0&&(ft.terminateTimeout=setTimeout(()=>{Z=Z.filter(_t=>_t!=ft),ft.terminate()},dt.terminateWorkerTimeout))):Z=Z.filter(_t=>_t!=ft)}}(Ue.Inflate,{codecType:fn,password:ce,zipCrypto:ke,encryptionStrength:Be&&Be.strength,signed:si(he,ee,"checkSignature"),passwordVerification:ke&&(Ze.dataDescriptor?wt>>>8&255:ut>>>24&255),signature:ut,compressed:Qe!=0,encrypted:Te,useWebWorkers:si(he,ee,"useWebWorkers")},Ue);z.initialized||await z.init();const Ye=si(he,ee,"signal"),Ve=be+30+ae.filenameLength+ae.extraFieldLength;return await async function(Ee,qe,dt,pt,rt,nt,ft){const _t=Math.max(nt.chunkSize,64);return async function Bt(yt=0,Dt=0){const Mi=ft.signal;if(yt<rt){S(Mi,Ee);const Ei=await qe.readUint8Array(yt+pt,Math.min(_t,rt-yt)),Et=Ei.length;S(Mi,Ee);const rr=await Ee.append(Ei);if(S(Mi,Ee),Dt+=await A(dt,rr),ft.onprogress)try{ft.onprogress(yt+Et,rt)}catch{}return Bt(yt+_t,Dt)}{const Ei=await Ee.flush();return Dt+=await A(dt,Ei.data),{signature:Ei.signature,length:Dt}}}()}(et,xe,z,Ve,At,Ue,{onprogress:ee.onprogress,signal:Ye}),z.getData()}}function ri(V,z,I){const ee=V.rawBitFlag=un(z,I+2),he=(1&ee)==1,xe=Ot(z,I+6);Object.assign(V,{encrypted:he,version:un(z,I),bitFlag:{level:(6&ee)>>1,dataDescriptor:(8&ee)==8,languageEncodingFlag:(2048&ee)==2048},rawLastModDate:xe,lastModDate:Kr(xe),filenameLength:un(z,I+22),extraFieldLength:un(z,I+24)})}function Gt(V,z,I,ee){const he=z.rawExtraField,xe=z.extraField=new Map,be=rn(new Uint8Array(he));let Be=0;try{for(;Be<he.length;){const Re=un(be,Be),ie=un(be,Be+2);xe.set(Re,{type:Re,data:he.slice(Be+4,Be+4+ie)}),Be+=4+ie}}catch{}const Qe=un(I,ee+4);z.signature=Ot(I,ee+10),z.uncompressedSize=Ot(I,ee+18),z.compressedSize=Ot(I,ee+14);const Ue=xe.get(1);Ue&&(function(Re,ie){ie.zip64=!0;const ce=rn(Re.data);Re.values=[];for(let ke=0;ke<Math.floor(Re.data.length/8);ke++)Re.values.push(Si(ce,0+8*ke));const Te=Pt.filter(ke=>ie[ke]==_e);for(let ke=0;ke<Te.length;ke++)Re[Te[ke]]=Re.values[ke];Pt.forEach(ke=>{if(ie[ke]==_e){if(Re[ke]===void 0)throw new Error(at);ie[ke]=Re[ke]}})}(Ue,z),z.extraFieldZip64=Ue);const Ze=xe.get(28789);Ze&&(Yn(Ze,"filename","rawFilename",z,V),z.extraFieldUnicodePath=Ze);const ut=xe.get(25461);ut&&(Yn(ut,"comment","rawComment",z,V),z.extraFieldUnicodeComment=ut);const wt=xe.get(39169);wt?(function(Re,ie,ce){const Te=rn(Re.data);Re.vendorVersion=Sn(Te,0),Re.vendorId=Sn(Te,2);const ke=Sn(Te,4);Re.strength=ke,Re.originalCompressionMethod=ce,ie.compressionMethod=Re.compressionMethod=un(Te,5)}(wt,z,Qe),z.extraFieldAES=wt):z.compressionMethod=Qe;const At=xe.get(10);At&&(function(Re,ie){const ce=rn(Re.data);let Te,ke=4;try{for(;ke<Re.data.length&&!Te;){const et=un(ce,ke),Ye=un(ce,ke+2);et==1&&(Te=Re.data.slice(ke+4,ke+4+Ye)),ke+=4+Ye}}catch{}try{if(Te&&Te.length==24){const et=rn(Te),Ye=et.getBigUint64(0,!0),Ve=et.getBigUint64(8,!0),Ee=et.getBigUint64(16,!0);Object.assign(Re,{rawLastModDate:Ye,rawLastAccessDate:Ve,rawCreationDate:Ee});const qe=Zt(Ye),dt={lastModDate:qe,lastAccessDate:Zt(Ve),creationDate:Zt(Ee)};Object.assign(Re,dt),Object.assign(ie,dt)}}catch{}}(At,z),z.extraFieldNTFS=At);const ae=xe.get(21589);ae&&(function(Re,ie){const ce=rn(Re.data),Te=Sn(ce,0),ke=[],et=[];(1&Te)==1&&(ke.push("lastModDate"),et.push("rawLastModDate")),(2&Te)==2&&(ke.push("lastAccessDate"),et.push("rawLastAccessDate")),(4&Te)==4&&(ke.push("creationDate"),et.push("rawCreationDate"));let Ye=1;ke.forEach((Ve,Ee)=>{if(Re.data.length>=Ye+4){const qe=Ot(ce,Ye);ie[Ve]=Re[Ve]=new Date(1e3*qe);const dt=et[Ee];Re[dt]=qe}Ye+=4})}(ae,z),z.extraFieldExtendedTimestamp=ae)}function Yn(V,z,I,ee,he){const xe=rn(V.data);V.version=Sn(xe,0),V.signature=Ot(xe,1);const be=new me;be.append(he[I]);const Be=rn(new Uint8Array(4));Be.setUint32(0,be.get(),!0),V[z]=new TextDecoder().decode(V.data.subarray(5)),V.valid=!he.bitFlag.languageEncodingFlag&&V.signature==Ot(Be,0),V.valid&&(ee[z]=V[z],ee[z+"UTF8"]=!0)}function si(V,z,I){return z[I]===void 0?V.options[I]:z[I]}function wi(V,z){return z&&z.trim().toLowerCase()!="cp437"?new TextDecoder(z).decode(V):(I=>{let ee="";for(let he=0;he<I.length;he++)ee+=pe[I[he]];return ee})(V)}function Kr(V){const z=(4294901760&V)>>16,I=65535&V;try{return new Date(1980+((65024&z)>>9),((480&z)>>5)-1,31&z,(63488&I)>>11,(2016&I)>>5,2*(31&I),0)}catch{}}function Zt(V){return new Date(Number(V/BigInt(1e4)-BigInt(116444736e5)))}function Sn(V,z){return V.getUint8(z)}function un(V,z){return V.getUint16(z,!0)}function Ot(V,z){return V.getUint32(z,!0)}function Si(V,z){return Number(V.getBigUint64(z,!0))}function rn(V){return new DataView(V.buffer)}function Hn(V,z,I){return V.readUint8Array(z,I)}E({Inflate:function(V){const z=new b,I=V&&V.chunkSize?Math.floor(2*V.chunkSize):131072,ee=new Uint8Array(I);let he=!1;z.inflateInit(),z.next_out=ee,this.append=function(xe,be){const Be=[];let Qe,Ue,Ze=0,ut=0,wt=0;if(xe.length!==0){z.next_in_index=0,z.next_in=xe,z.avail_in=xe.length;do{if(z.next_out_index=0,z.avail_out=I,z.avail_in!==0||he||(z.next_in_index=0,he=!0),Qe=z.inflate(0),he&&Qe===-5){if(z.avail_in!==0)throw new Error("inflating: bad input")}else if(Qe!==0&&Qe!==1)throw new Error("inflating: "+z.msg);if((he||Qe===1)&&z.avail_in===xe.length)throw new Error("inflating: bad input");z.next_out_index&&(z.next_out_index===I?Be.push(new Uint8Array(ee)):Be.push(ee.slice(0,z.next_out_index))),wt+=z.next_out_index,be&&z.next_in_index>0&&z.next_in_index!=Ze&&(be(z.next_in_index),Ze=z.next_in_index)}while(z.avail_in>0||z.avail_out===0);return Be.length>1?(Ue=new Uint8Array(wt),Be.forEach(function(At){Ue.set(At,ut),ut+=At.length})):Ue=Be[0]||new Uint8Array(0),Ue}},this.flush=function(){z.inflateEnd()}}}),e.BlobReader=C,e.BlobWriter=class extends D{constructor(V){super(),this.offset=0,this.contentType=V,this.blob=new Blob([],{type:V})}async writeUint8Array(V){super.writeUint8Array(V),this.blob=new Blob([this.blob,V.buffer],{type:this.contentType}),this.offset=this.blob.size}getData(){return this.blob}},e.Data64URIReader=class extends W{constructor(V){super(),this.dataURI=V;let z=V.length;for(;V.charAt(z-1)=="=";)z--;this.dataStart=V.indexOf(",")+1,this.size=Math.floor(.75*(z-this.dataStart))}async readUint8Array(V,z){const I=new Uint8Array(z),ee=4*Math.floor(V/3),he=atob(this.dataURI.substring(ee+this.dataStart,4*Math.ceil((V+z)/3)+this.dataStart)),xe=V-3*Math.floor(ee/4);for(let be=xe;be<xe+z;be++)I[be-xe]=he.charCodeAt(be);return I}},e.Data64URIWriter=class extends D{constructor(V){super(),this.data="data:"+(V||"")+";base64,",this.pending=[]}async writeUint8Array(V){super.writeUint8Array(V);let z=0,I=this.pending;const ee=this.pending.length;for(this.pending="",z=0;z<3*Math.floor((ee+V.length)/3)-ee;z++)I+=String.fromCharCode(V[z]);for(;z<V.length;z++)this.pending+=String.fromCharCode(V[z]);I.length>2?this.data+=btoa(I):this.pending=I}getData(){return this.data+btoa(this.pending)}},e.ERR_ABORT=k,e.ERR_BAD_FORMAT=ge,e.ERR_CENTRAL_DIRECTORY_NOT_FOUND=de,e.ERR_ENCRYPTED=lt,e.ERR_EOCDR_LOCATOR_ZIP64_NOT_FOUND=tt,e.ERR_EOCDR_NOT_FOUND=ot,e.ERR_EOCDR_ZIP64_NOT_FOUND=it,e.ERR_EXTRAFIELD_ZIP64_NOT_FOUND=at,e.ERR_HTTP_RANGE=U,e.ERR_INVALID_PASSWORD=K,e.ERR_INVALID_SIGNATURE=bi,e.ERR_LOCAL_FILE_HEADER_NOT_FOUND=Ie,e.ERR_UNSUPPORTED_COMPRESSION=It,e.ERR_UNSUPPORTED_ENCRYPTION=xt,e.HttpRangeReader=class extends te{constructor(V,z={}){z.useRangeHeader=!0,super(V,z)}},e.HttpReader=te,e.Reader=W,e.TextReader=class extends W{constructor(V){super(),this.blobReader=new C(new Blob([V],{type:x}))}async init(){super.init(),this.blobReader.init(),this.size=this.blobReader.size}async readUint8Array(V,z){return this.blobReader.readUint8Array(V,z)}},e.TextWriter=class extends D{constructor(V){super(),this.encoding=V,this.blob=new Blob([],{type:x})}async writeUint8Array(V){super.writeUint8Array(V),this.blob=new Blob([this.blob,V.buffer],{type:x})}getData(){const V=new FileReader;return new Promise((z,I)=>{V.onload=ee=>z(ee.target.result),V.onerror=()=>I(V.error),V.readAsText(this.blob,this.encoding)})}},e.Uint8ArrayReader=class extends W{constructor(V){super(),this.array=V,this.size=V.length}async readUint8Array(V,z){return this.array.slice(V,V+z)}},e.Uint8ArrayWriter=class extends D{constructor(){super(),this.array=new Uint8Array(0)}async writeUint8Array(V){super.writeUint8Array(V);const z=this.array;this.array=new Uint8Array(z.length+V.length),this.array.set(z),this.array.set(V,z.length)}getData(){return this.array}},e.Writer=D,e.ZipReader=class{constructor(V,z={}){Object.assign(this,{reader:V,options:z,config:T})}async getEntries(V={}){const z=this,I=z.reader;if(I.initialized||await I.init(),I.size<22)throw new Error(ge);const ee=await async function(ae,Re,ie,ce,Te){const ke=new Uint8Array(4);return function(Ye,Ve,Ee){Ye.setUint32(0,101010256,!0)}(rn(ke)),await et(22)||await et(Math.min(1048582,ie));async function et(Ye){const Ve=ie-Ye,Ee=await Hn(ae,Ve,Ye);for(let qe=Ee.length-22;qe>=0;qe--)if(Ee[qe]==ke[0]&&Ee[qe+1]==ke[1]&&Ee[qe+2]==ke[2]&&Ee[qe+3]==ke[3])return{offset:Ve+qe,buffer:Ee.slice(qe,qe+22).buffer}}}(I,0,I.size);if(!ee)throw new Error(ot);const he=rn(ee);let xe=Ot(he,12),be=Ot(he,16),Be=un(he,8),Qe=0;if(be==_e||Be==65535){const ae=rn(await Hn(I,ee.offset-20,20));if(Ot(ae,0)!=117853008)throw new Error(it);be=Si(ae,8);let Re=await Hn(I,be,56),ie=rn(Re);const ce=ee.offset-20-56;if(Ot(ie,0)!=re&&be!=ce){const Te=be;be=ce,Qe=be-Te,Re=await Hn(I,be,56),ie=rn(Re)}if(Ot(ie,0)!=re)throw new Error(tt);Be=Si(ie,24),xe=Ot(ae,4),be-=Si(ie,40)}if(be<0||be>=I.size)throw new Error(ge);let Ue=0,Ze=await Hn(I,be,I.size-be),ut=rn(Ze);const wt=ee.offset-xe;if(Ot(ut,Ue)!=J&&be!=wt){const ae=be;be=wt,Qe=be-ae,Ze=await Hn(I,be,I.size-be),ut=rn(Ze)}if(be<0||be>=I.size)throw new Error(ge);const At=[];for(let ae=0;ae<Be;ae++){const Re=new gt(I,z.config,z.options);if(Ot(ut,Ue)!=J)throw new Error(de);ri(Re,ut,Ue+6);const ie=!!Re.bitFlag.languageEncodingFlag,ce=Ue+46,Te=ce+Re.filenameLength,ke=Te+Re.extraFieldLength,et=un(ut,Ue+4),Ye=(0&et)==0;Object.assign(Re,{versionMadeBy:et,msDosCompatible:Ye,compressedSize:0,uncompressedSize:0,commentLength:un(ut,Ue+32),directory:Ye&&(16&Sn(ut,Ue+38))==16,offset:Ot(ut,Ue+42)+Qe,internalFileAttribute:Ot(ut,Ue+34),externalFileAttribute:Ot(ut,Ue+38),rawFilename:Ze.subarray(ce,Te),filenameUTF8:ie,commentUTF8:ie,rawExtraField:Ze.subarray(Te,ke)});const Ve=ke+Re.commentLength;Re.rawComment=Ze.subarray(ke,Ve),Re.filename=wi(Re.rawFilename,Re.filenameUTF8?Kt:si(z,V,"filenameEncoding")),Re.comment=wi(Re.rawComment,Re.commentUTF8?Kt:si(z,V,"commentEncoding")),!Re.directory&&Re.filename.endsWith("/")&&(Re.directory=!0),Gt(Re,Re,ut,Ue+6);const Ee=new Me(Re);if(Ee.getData=(qe,dt)=>Re.getData(qe,Ee,dt),At.push(Ee),Ue=Ve,V.onprogress)try{V.onprogress(ae+1,Be,new Me(Re))}catch{}}return At}async close(){}},e.configure=E,e.getMimeType=function(){return"application/octet-stream"},Object.defineProperty(e,"__esModule",{value:!0})}),function e(i,n,r){function o(u,l){if(!n[u]){if(!i[u]){var d=typeof In=="function"&&In;if(!l&&d)return d(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var f=n[u]={exports:{}};i[u][0].call(f.exports,function(p){return o(i[u][1][p]||p)},f,f.exports,e,i,n,r)}return n[u].exports}for(var a=typeof In=="function"&&In,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,i,n){n.byteLength=function(f){var p=d(f),v=p[0],g=p[1];return 3*(v+g)/4-g},n.toByteArray=function(f){var p,v,g=d(f),m=g[0],y=g[1],_=new a(function(T,E,k){return 3*(E+k)/4-k}(0,m,y)),b=0,w=y>0?m-4:m;for(v=0;v<w;v+=4)p=o[f.charCodeAt(v)]<<18|o[f.charCodeAt(v+1)]<<12|o[f.charCodeAt(v+2)]<<6|o[f.charCodeAt(v+3)],_[b++]=p>>16&255,_[b++]=p>>8&255,_[b++]=255&p;return y===2&&(p=o[f.charCodeAt(v)]<<2|o[f.charCodeAt(v+1)]>>4,_[b++]=255&p),y===1&&(p=o[f.charCodeAt(v)]<<10|o[f.charCodeAt(v+1)]<<4|o[f.charCodeAt(v+2)]>>2,_[b++]=p>>8&255,_[b++]=255&p),_},n.fromByteArray=function(f){for(var p,v=f.length,g=v%3,m=[],y=16383,_=0,b=v-g;_<b;_+=y)m.push(s(f,_,_+y>b?b:_+y));return g===1?(p=f[v-1],m.push(r[p>>2]+r[p<<4&63]+"==")):g===2&&(p=(f[v-2]<<8)+f[v-1],m.push(r[p>>10]+r[p>>4&63]+r[p<<2&63]+"=")),m.join("")};for(var r=[],o=[],a=typeof Uint8Array<"u"?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,l=c.length;u<l;++u)r[u]=c[u],o[c.charCodeAt(u)]=u;function d(f){var p=f.length;if(p%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var v=f.indexOf("=");return v===-1&&(v=p),[v,v===p?0:4-v%4]}function s(f,p,v){for(var g,m,y=[],_=p;_<v;_+=3)g=(f[_]<<16&16711680)+(f[_+1]<<8&65280)+(255&f[_+2]),y.push(r[(m=g)>>18&63]+r[m>>12&63]+r[m>>6&63]+r[63&m]);return y.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63},{}],2:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/try-to-string"),a=TypeError;i.exports=function(c){if(r(c))return c;throw a(o(c)+" is not a function")}},{"../internals/is-callable":56,"../internals/try-to-string":108}],3:[function(e,i,n){var r=e("../internals/is-callable"),o=String,a=TypeError;i.exports=function(c){if(typeof c=="object"||r(c))return c;throw a("Can't set "+o(c)+" as a prototype")}},{"../internals/is-callable":56}],4:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/object-create"),a=e("../internals/object-define-property").f,c=r("unscopables"),u=Array.prototype;u[c]==null&&a(u,c,{configurable:!0,value:o(null)}),i.exports=function(l){u[c][l]=!0}},{"../internals/object-create":72,"../internals/object-define-property":74,"../internals/well-known-symbol":113}],5:[function(e,i,n){var r=e("../internals/string-multibyte").charAt;i.exports=function(o,a,c){return a+(c?r(o,a).length:1)}},{"../internals/string-multibyte":97}],6:[function(e,i,n){var r=e("../internals/object-is-prototype-of"),o=TypeError;i.exports=function(a,c){if(r(c,a))return a;throw o("Incorrect invocation")}},{"../internals/object-is-prototype-of":79}],7:[function(e,i,n){var r=e("../internals/is-object"),o=String,a=TypeError;i.exports=function(c){if(r(c))return c;throw a(o(c)+" is not an object")}},{"../internals/is-object":59}],8:[function(e,i,n){var r=e("../internals/function-bind-context"),o=e("../internals/function-call"),a=e("../internals/to-object"),c=e("../internals/call-with-safe-iteration-closing"),u=e("../internals/is-array-iterator-method"),l=e("../internals/is-constructor"),d=e("../internals/length-of-array-like"),s=e("../internals/create-property"),f=e("../internals/get-iterator"),p=e("../internals/get-iterator-method"),v=Array;i.exports=function(g){var m=a(g),y=l(this),_=arguments.length,b=_>1?arguments[1]:void 0,w=b!==void 0;w&&(b=r(b,_>2?arguments[2]:void 0));var T,E,k,S,A,N,U=p(m),x=0;if(!U||this===v&&u(U))for(T=d(m),E=y?new this(T):v(T);T>x;x++)N=w?b(m[x],x):m[x],s(E,x,N);else for(A=(S=f(m,U)).next,E=y?new this:[];!(k=o(A,S)).done;x++)N=w?c(S,b,[k.value,x],!0):k.value,s(E,x,N);return E.length=x,E}},{"../internals/call-with-safe-iteration-closing":12,"../internals/create-property":20,"../internals/function-bind-context":37,"../internals/function-call":39,"../internals/get-iterator":44,"../internals/get-iterator-method":43,"../internals/is-array-iterator-method":55,"../internals/is-constructor":57,"../internals/length-of-array-like":65,"../internals/to-object":103}],9:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/to-absolute-index"),a=e("../internals/length-of-array-like"),c=function(u){return function(l,d,s){var f,p=r(l),v=a(p),g=o(s,v);if(u&&d!=d){for(;v>g;)if((f=p[g++])!=f)return!0}else for(;v>g;g++)if((u||g in p)&&p[g]===d)return u||g||0;return!u&&-1}};i.exports={includes:c(!0),indexOf:c(!1)}},{"../internals/length-of-array-like":65,"../internals/to-absolute-index":99,"../internals/to-indexed-object":100}],10:[function(e,i,n){var r=e("../internals/to-absolute-index"),o=e("../internals/length-of-array-like"),a=e("../internals/create-property"),c=Array,u=Math.max;i.exports=function(l,d,s){for(var f=o(l),p=r(d,f),v=r(s===void 0?f:s,f),g=c(u(v-p,0)),m=0;p<v;p++,m++)a(g,m,l[p]);return g.length=m,g}},{"../internals/create-property":20,"../internals/length-of-array-like":65,"../internals/to-absolute-index":99}],11:[function(e,i,n){var r=e("../internals/array-slice-simple"),o=Math.floor,a=function(l,d){var s=l.length,f=o(s/2);return s<8?c(l,d):u(l,a(r(l,0,f),d),a(r(l,f),d),d)},c=function(l,d){for(var s,f,p=l.length,v=1;v<p;){for(f=v,s=l[v];f&&d(l[f-1],s)>0;)l[f]=l[--f];f!==v++&&(l[f]=s)}return l},u=function(l,d,s,f){for(var p=d.length,v=s.length,g=0,m=0;g<p||m<v;)l[g+m]=g<p&&m<v?f(d[g],s[m])<=0?d[g++]:s[m++]:g<p?d[g++]:s[m++];return l};i.exports=a},{"../internals/array-slice-simple":10}],12:[function(e,i,n){var r=e("../internals/an-object"),o=e("../internals/iterator-close");i.exports=function(a,c,u,l){try{return l?c(r(u)[0],u[1]):c(u)}catch(d){o(a,"throw",d)}}},{"../internals/an-object":7,"../internals/iterator-close":62}],13:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=r({}.toString),a=r("".slice);i.exports=function(c){return a(o(c),8,-1)}},{"../internals/function-uncurry-this":41}],14:[function(e,i,n){var r=e("../internals/to-string-tag-support"),o=e("../internals/is-callable"),a=e("../internals/classof-raw"),c=e("../internals/well-known-symbol")("toStringTag"),u=Object,l=a(function(){return arguments}())=="Arguments";i.exports=r?a:function(d){var s,f,p;return d===void 0?"Undefined":d===null?"Null":typeof(f=function(v,g){try{return v[g]}catch{}}(s=u(d),c))=="string"?f:l?a(s):(p=a(s))=="Object"&&o(s.callee)?"Arguments":p}},{"../internals/classof-raw":13,"../internals/is-callable":56,"../internals/to-string-tag-support":106,"../internals/well-known-symbol":113}],15:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/own-keys"),a=e("../internals/object-get-own-property-descriptor"),c=e("../internals/object-define-property");i.exports=function(u,l,d){for(var s=o(l),f=c.f,p=a.f,v=0;v<s.length;v++){var g=s[v];r(u,g)||d&&r(d,g)||f(u,g,p(l,g))}}},{"../internals/has-own-property":48,"../internals/object-define-property":74,"../internals/object-get-own-property-descriptor":75,"../internals/own-keys":85}],16:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){function o(){}return o.prototype.constructor=null,Object.getPrototypeOf(new o)!==o.prototype})},{"../internals/fails":34}],17:[function(e,i,n){var r=e("../internals/iterators-core").IteratorPrototype,o=e("../internals/object-create"),a=e("../internals/create-property-descriptor"),c=e("../internals/set-to-string-tag"),u=e("../internals/iterators"),l=function(){return this};i.exports=function(d,s,f,p){var v=s+" Iterator";return d.prototype=o(r,{next:a(+!p,f)}),c(d,v,!1,!0),u[v]=l,d}},{"../internals/create-property-descriptor":19,"../internals/iterators":64,"../internals/iterators-core":63,"../internals/object-create":72,"../internals/set-to-string-tag":93}],18:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=r?function(c,u,l){return o.f(c,u,a(1,l))}:function(c,u,l){return c[u]=l,c}},{"../internals/create-property-descriptor":19,"../internals/descriptors":26,"../internals/object-define-property":74}],19:[function(e,i,n){i.exports=function(r,o){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:o}}},{}],20:[function(e,i,n){var r=e("../internals/to-property-key"),o=e("../internals/object-define-property"),a=e("../internals/create-property-descriptor");i.exports=function(c,u,l){var d=r(u);d in c?o.f(c,d,a(0,l)):c[d]=l}},{"../internals/create-property-descriptor":19,"../internals/object-define-property":74,"../internals/to-property-key":105}],21:[function(e,i,n){var r=e("../internals/make-built-in"),o=e("../internals/object-define-property");i.exports=function(a,c,u){return u.get&&r(u.get,c,{getter:!0}),u.set&&r(u.set,c,{setter:!0}),o.f(a,c,u)}},{"../internals/make-built-in":66,"../internals/object-define-property":74}],22:[function(e,i,n){var r=e("../internals/is-callable"),o=e("../internals/object-define-property"),a=e("../internals/make-built-in"),c=e("../internals/define-global-property");i.exports=function(u,l,d,s){s||(s={});var f=s.enumerable,p=s.name!==void 0?s.name:l;if(r(d)&&a(d,p,s),s.global)f?u[l]=d:c(l,d);else{try{s.unsafe?u[l]&&(f=!0):delete u[l]}catch{}f?u[l]=d:o.f(u,l,{value:d,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return u}},{"../internals/define-global-property":24,"../internals/is-callable":56,"../internals/make-built-in":66,"../internals/object-define-property":74}],23:[function(e,i,n){var r=e("../internals/define-built-in");i.exports=function(o,a,c){for(var u in a)r(o,u,a[u],c);return o}},{"../internals/define-built-in":22}],24:[function(e,i,n){var r=e("../internals/global"),o=Object.defineProperty;i.exports=function(a,c){try{o(r,a,{value:c,configurable:!0,writable:!0})}catch{r[a]=c}return c}},{"../internals/global":47}],25:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/function-call"),a=e("../internals/is-pure"),c=e("../internals/function-name"),u=e("../internals/is-callable"),l=e("../internals/create-iterator-constructor"),d=e("../internals/object-get-prototype-of"),s=e("../internals/object-set-prototype-of"),f=e("../internals/set-to-string-tag"),p=e("../internals/create-non-enumerable-property"),v=e("../internals/define-built-in"),g=e("../internals/well-known-symbol"),m=e("../internals/iterators"),y=e("../internals/iterators-core"),_=c.PROPER,b=c.CONFIGURABLE,w=y.IteratorPrototype,T=y.BUGGY_SAFARI_ITERATORS,E=g("iterator"),k="keys",S="values",A="entries",N=function(){return this};i.exports=function(U,x,M,R,L,F,q){l(M,x,R);var j,W,D,C=function(te){if(te===L&&Y)return Y;if(!T&&te in B)return B[te];switch(te){case k:case S:case A:return function(){return new M(this,te)}}return function(){return new M(this)}},P=x+" Iterator",O=!1,B=U.prototype,G=B[E]||B["@@iterator"]||L&&B[L],Y=!T&&G||C(L),H=x=="Array"&&B.entries||G;if(H&&(j=d(H.call(new U)))!==Object.prototype&&j.next&&(a||d(j)===w||(s?s(j,w):u(j[E])||v(j,E,N)),f(j,P,!0,!0),a&&(m[P]=N)),_&&L==S&&G&&G.name!==S&&(!a&&b?p(B,"name",S):(O=!0,Y=function(){return o(G,this)})),L)if(W={values:C(S),keys:F?Y:C(k),entries:C(A)},q)for(D in W)(T||O||!(D in B))&&v(B,D,W[D]);else r({target:x,proto:!0,forced:T||O},W);return a&&!q||B[E]===Y||v(B,E,Y,{name:L}),m[x]=Y,W}},{"../internals/create-iterator-constructor":17,"../internals/create-non-enumerable-property":18,"../internals/define-built-in":22,"../internals/export":33,"../internals/function-call":39,"../internals/function-name":40,"../internals/is-callable":56,"../internals/is-pure":60,"../internals/iterators":64,"../internals/iterators-core":63,"../internals/object-get-prototype-of":78,"../internals/object-set-prototype-of":83,"../internals/set-to-string-tag":93,"../internals/well-known-symbol":113}],26:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7})},{"../internals/fails":34}],27:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-object"),a=r.document,c=o(a)&&o(a.createElement);i.exports=function(u){return c?a.createElement(u):{}}},{"../internals/global":47,"../internals/is-object":59}],28:[function(e,i,n){i.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},{}],29:[function(e,i,n){var r=e("../internals/document-create-element")("span").classList,o=r&&r.constructor&&r.constructor.prototype;i.exports=o===Object.prototype?void 0:o},{"../internals/document-create-element":27}],30:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("navigator","userAgent")||""},{"../internals/get-built-in":42}],31:[function(e,i,n){var r,o,a=e("../internals/global"),c=e("../internals/engine-user-agent"),u=a.process,l=a.Deno,d=u&&u.versions||l&&l.version,s=d&&d.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&c&&(!(r=c.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/))&&(o=+r[1]),i.exports=o},{"../internals/engine-user-agent":30,"../internals/global":47}],32:[function(e,i,n){i.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},{}],33:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/object-get-own-property-descriptor").f,a=e("../internals/create-non-enumerable-property"),c=e("../internals/define-built-in"),u=e("../internals/define-global-property"),l=e("../internals/copy-constructor-properties"),d=e("../internals/is-forced");i.exports=function(s,f){var p,v,g,m,y,_=s.target,b=s.global,w=s.stat;if(p=b?r:w?r[_]||u(_,{}):(r[_]||{}).prototype)for(v in f){if(m=f[v],g=s.dontCallGetSet?(y=o(p,v))&&y.value:p[v],!d(b?v:_+(w?".":"#")+v,s.forced)&&g!==void 0){if(typeof m==typeof g)continue;l(m,g)}(s.sham||g&&g.sham)&&a(m,"sham",!0),c(p,v,m,s)}}},{"../internals/copy-constructor-properties":15,"../internals/create-non-enumerable-property":18,"../internals/define-built-in":22,"../internals/define-global-property":24,"../internals/global":47,"../internals/is-forced":58,"../internals/object-get-own-property-descriptor":75}],34:[function(e,i,n){i.exports=function(r){try{return!!r()}catch{return!0}}},{}],35:[function(e,i,n){e("../modules/es.regexp.exec");var r=e("../internals/function-uncurry-this"),o=e("../internals/define-built-in"),a=e("../internals/regexp-exec"),c=e("../internals/fails"),u=e("../internals/well-known-symbol"),l=e("../internals/create-non-enumerable-property"),d=u("species"),s=RegExp.prototype;i.exports=function(f,p,v,g){var m=u(f),y=!c(function(){var T={};return T[m]=function(){return 7},""[f](T)!=7}),_=y&&!c(function(){var T=!1,E=/a/;return f==="split"&&((E={}).constructor={},E.constructor[d]=function(){return E},E.flags="",E[m]=/./[m]),E.exec=function(){return T=!0,null},E[m](""),!T});if(!y||!_||v){var b=r(/./[m]),w=p(m,""[f],function(T,E,k,S,A){var N=r(T),U=E.exec;return U===a||U===s.exec?y&&!A?{done:!0,value:b(E,k,S)}:{done:!0,value:N(k,E,S)}:{done:!1}});o(String.prototype,f,w[0]),o(s,m,w[1])}g&&l(s[m],"sham",!0)}},{"../internals/create-non-enumerable-property":18,"../internals/define-built-in":22,"../internals/fails":34,"../internals/function-uncurry-this":41,"../internals/regexp-exec":87,"../internals/well-known-symbol":113,"../modules/es.regexp.exec":115}],36:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.apply,c=o.call;i.exports=typeof Reflect=="object"&&Reflect.apply||(r?c.bind(a):function(){return c.apply(a,arguments)})},{"../internals/function-bind-native":38}],37:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/a-callable"),a=e("../internals/function-bind-native"),c=r(r.bind);i.exports=function(u,l){return o(u),l===void 0?u:a?c(u,l):function(){return u.apply(l,arguments)}}},{"../internals/a-callable":2,"../internals/function-bind-native":38,"../internals/function-uncurry-this":41}],38:[function(e,i,n){var r=e("../internals/fails");i.exports=!r(function(){var o=function(){}.bind();return typeof o!="function"||o.hasOwnProperty("prototype")})},{"../internals/fails":34}],39:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype.call;i.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},{"../internals/function-bind-native":38}],40:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/has-own-property"),a=Function.prototype,c=r&&Object.getOwnPropertyDescriptor,u=o(a,"name"),l=u&&function(){}.name==="something",d=u&&(!r||r&&c(a,"name").configurable);i.exports={EXISTS:u,PROPER:l,CONFIGURABLE:d}},{"../internals/descriptors":26,"../internals/has-own-property":48}],41:[function(e,i,n){var r=e("../internals/function-bind-native"),o=Function.prototype,a=o.bind,c=o.call,u=r&&a.bind(c,c);i.exports=r?function(l){return l&&u(l)}:function(l){return l&&function(){return c.apply(l,arguments)}}},{"../internals/function-bind-native":38}],42:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=function(c){return o(c)?c:void 0};i.exports=function(c,u){return arguments.length<2?a(r[c]):r[c]&&r[c][u]}},{"../internals/global":47,"../internals/is-callable":56}],43:[function(e,i,n){var r=e("../internals/classof"),o=e("../internals/get-method"),a=e("../internals/iterators"),c=e("../internals/well-known-symbol")("iterator");i.exports=function(u){if(u!=null)return o(u,c)||o(u,"@@iterator")||a[r(u)]}},{"../internals/classof":14,"../internals/get-method":45,"../internals/iterators":64,"../internals/well-known-symbol":113}],44:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/a-callable"),a=e("../internals/an-object"),c=e("../internals/try-to-string"),u=e("../internals/get-iterator-method"),l=TypeError;i.exports=function(d,s){var f=arguments.length<2?u(d):s;if(o(f))return a(r(f,d));throw l(c(d)+" is not iterable")}},{"../internals/a-callable":2,"../internals/an-object":7,"../internals/function-call":39,"../internals/get-iterator-method":43,"../internals/try-to-string":108}],45:[function(e,i,n){var r=e("../internals/a-callable");i.exports=function(o,a){var c=o[a];return c==null?void 0:r(c)}},{"../internals/a-callable":2}],46:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=Math.floor,c=r("".charAt),u=r("".replace),l=r("".slice),d=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;i.exports=function(f,p,v,g,m,y){var _=v+f.length,b=g.length,w=s;return m!==void 0&&(m=o(m),w=d),u(y,w,function(T,E){var k;switch(c(E,0)){case"$":return"$";case"&":return f;case"`":return l(p,0,v);case"'":return l(p,_);case"<":k=m[l(E,1,-1)];break;default:var S=+E;if(S===0)return T;if(S>b){var A=a(S/10);return A===0?T:A<=b?g[A-1]===void 0?c(E,1):g[A-1]+c(E,1):T}k=g[S-1]}return k===void 0?"":k})}},{"../internals/function-uncurry-this":41,"../internals/to-object":103}],47:[function(e,i,n){(function(r){(function(){var o=function(a){return a&&a.Math==Math&&a};i.exports=o(typeof globalThis=="object"&&globalThis)||o(typeof window=="object"&&window)||o(typeof self=="object"&&self)||o(typeof r=="object"&&r)||function(){return this}()||Function("return this")()}).call(this)}).call(this,typeof Li<"u"?Li:typeof self<"u"?self:typeof window<"u"?window:{})},{}],48:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-object"),a=r({}.hasOwnProperty);i.exports=Object.hasOwn||function(c,u){return a(o(c),u)}},{"../internals/function-uncurry-this":41,"../internals/to-object":103}],49:[function(e,i,n){i.exports={}},{}],50:[function(e,i,n){var r=e("../internals/get-built-in");i.exports=r("document","documentElement")},{"../internals/get-built-in":42}],51:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails"),a=e("../internals/document-create-element");i.exports=!r&&!o(function(){return Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a!=7})},{"../internals/descriptors":26,"../internals/document-create-element":27,"../internals/fails":34}],52:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/classof-raw"),c=Object,u=r("".split);i.exports=o(function(){return!c("z").propertyIsEnumerable(0)})?function(l){return a(l)=="String"?u(l,""):c(l)}:c},{"../internals/classof-raw":13,"../internals/fails":34,"../internals/function-uncurry-this":41}],53:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/is-callable"),a=e("../internals/shared-store"),c=r(Function.toString);o(a.inspectSource)||(a.inspectSource=function(u){return c(u)}),i.exports=a.inspectSource},{"../internals/function-uncurry-this":41,"../internals/is-callable":56,"../internals/shared-store":95}],54:[function(e,i,n){var r,o,a,c=e("../internals/native-weak-map"),u=e("../internals/global"),l=e("../internals/function-uncurry-this"),d=e("../internals/is-object"),s=e("../internals/create-non-enumerable-property"),f=e("../internals/has-own-property"),p=e("../internals/shared-store"),v=e("../internals/shared-key"),g=e("../internals/hidden-keys"),m="Object already initialized",y=u.TypeError,_=u.WeakMap;if(c||p.state){var b=p.state||(p.state=new _),w=l(b.get),T=l(b.has),E=l(b.set);r=function(S,A){if(T(b,S))throw new y(m);return A.facade=S,E(b,S,A),A},o=function(S){return w(b,S)||{}},a=function(S){return T(b,S)}}else{var k=v("state");g[k]=!0,r=function(S,A){if(f(S,k))throw new y(m);return A.facade=S,s(S,k,A),A},o=function(S){return f(S,k)?S[k]:{}},a=function(S){return f(S,k)}}i.exports={set:r,get:o,has:a,enforce:function(S){return a(S)?o(S):r(S,{})},getterFor:function(S){return function(A){var N;if(!d(A)||(N=o(A)).type!==S)throw y("Incompatible receiver, "+S+" required");return N}}}},{"../internals/create-non-enumerable-property":18,"../internals/function-uncurry-this":41,"../internals/global":47,"../internals/has-own-property":48,"../internals/hidden-keys":49,"../internals/is-object":59,"../internals/native-weak-map":70,"../internals/shared-key":94,"../internals/shared-store":95}],55:[function(e,i,n){var r=e("../internals/well-known-symbol"),o=e("../internals/iterators"),a=r("iterator"),c=Array.prototype;i.exports=function(u){return u!==void 0&&(o.Array===u||c[a]===u)}},{"../internals/iterators":64,"../internals/well-known-symbol":113}],56:[function(e,i,n){i.exports=function(r){return typeof r=="function"}},{}],57:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/fails"),a=e("../internals/is-callable"),c=e("../internals/classof"),u=e("../internals/get-built-in"),l=e("../internals/inspect-source"),d=function(){},s=[],f=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=r(p.exec),g=!p.exec(d),m=function(_){if(!a(_))return!1;try{return f(d,s,_),!0}catch{return!1}},y=function(_){if(!a(_))return!1;switch(c(_)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return g||!!v(p,l(_))}catch{return!0}};y.sham=!0,i.exports=!f||o(function(){var _;return m(m.call)||!m(Object)||!m(function(){_=!0})||_})?y:m},{"../internals/classof":14,"../internals/fails":34,"../internals/function-uncurry-this":41,"../internals/get-built-in":42,"../internals/inspect-source":53,"../internals/is-callable":56}],58:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=/#|\.prototype\./,c=function(f,p){var v=l[u(f)];return v==s||v!=d&&(o(p)?r(p):!!p)},u=c.normalize=function(f){return String(f).replace(a,".").toLowerCase()},l=c.data={},d=c.NATIVE="N",s=c.POLYFILL="P";i.exports=c},{"../internals/fails":34,"../internals/is-callable":56}],59:[function(e,i,n){var r=e("../internals/is-callable");i.exports=function(o){return typeof o=="object"?o!==null:r(o)}},{"../internals/is-callable":56}],60:[function(e,i,n){i.exports=!1},{}],61:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/is-callable"),a=e("../internals/object-is-prototype-of"),c=e("../internals/use-symbol-as-uid"),u=Object;i.exports=c?function(l){return typeof l=="symbol"}:function(l){var d=r("Symbol");return o(d)&&a(d.prototype,u(l))}},{"../internals/get-built-in":42,"../internals/is-callable":56,"../internals/object-is-prototype-of":79,"../internals/use-symbol-as-uid":110}],62:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/an-object"),a=e("../internals/get-method");i.exports=function(c,u,l){var d,s;o(c);try{if(!(d=a(c,"return"))){if(u==="throw")throw l;return l}d=r(d,c)}catch(f){s=!0,d=f}if(u==="throw")throw l;if(s)throw d;return o(d),l}},{"../internals/an-object":7,"../internals/function-call":39,"../internals/get-method":45}],63:[function(e,i,n){var r,o,a,c=e("../internals/fails"),u=e("../internals/is-callable"),l=e("../internals/object-create"),d=e("../internals/object-get-prototype-of"),s=e("../internals/define-built-in"),f=e("../internals/well-known-symbol"),p=e("../internals/is-pure"),v=f("iterator"),g=!1;[].keys&&("next"in(a=[].keys())?(o=d(d(a)))!==Object.prototype&&(r=o):g=!0),r==null||c(function(){var m={};return r[v].call(m)!==m})?r={}:p&&(r=l(r)),u(r[v])||s(r,v,function(){return this}),i.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},{"../internals/define-built-in":22,"../internals/fails":34,"../internals/is-callable":56,"../internals/is-pure":60,"../internals/object-create":72,"../internals/object-get-prototype-of":78,"../internals/well-known-symbol":113}],64:[function(e,i,n){arguments[4][49][0].apply(n,arguments)},{dup:49}],65:[function(e,i,n){var r=e("../internals/to-length");i.exports=function(o){return r(o.length)}},{"../internals/to-length":102}],66:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/is-callable"),a=e("../internals/has-own-property"),c=e("../internals/descriptors"),u=e("../internals/function-name").CONFIGURABLE,l=e("../internals/inspect-source"),d=e("../internals/internal-state"),s=d.enforce,f=d.get,p=Object.defineProperty,v=c&&!r(function(){return p(function(){},"length",{value:8}).length!==8}),g=String(String).split("String"),m=i.exports=function(y,_,b){String(_).slice(0,7)==="Symbol("&&(_="["+String(_).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),b&&b.getter&&(_="get "+_),b&&b.setter&&(_="set "+_),(!a(y,"name")||u&&y.name!==_)&&(c?p(y,"name",{value:_,configurable:!0}):y.name=_),v&&b&&a(b,"arity")&&y.length!==b.arity&&p(y,"length",{value:b.arity});try{b&&a(b,"constructor")&&b.constructor?c&&p(y,"prototype",{writable:!1}):y.prototype&&(y.prototype=void 0)}catch{}var w=s(y);return a(w,"source")||(w.source=g.join(typeof _=="string"?_:"")),y};Function.prototype.toString=m(function(){return o(this)&&f(this).source||l(this)},"toString")},{"../internals/descriptors":26,"../internals/fails":34,"../internals/function-name":40,"../internals/has-own-property":48,"../internals/inspect-source":53,"../internals/internal-state":54,"../internals/is-callable":56}],67:[function(e,i,n){var r=Math.ceil,o=Math.floor;i.exports=Math.trunc||function(a){var c=+a;return(c>0?o:r)(c)}},{}],68:[function(e,i,n){var r=e("../internals/engine-v8-version"),o=e("../internals/fails");i.exports=!!Object.getOwnPropertySymbols&&!o(function(){var a=Symbol();return!String(a)||!(Object(a)instanceof Symbol)||!Symbol.sham&&r&&r<41})},{"../internals/engine-v8-version":31,"../internals/fails":34}],69:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/well-known-symbol"),a=e("../internals/is-pure"),c=o("iterator");i.exports=!r(function(){var u=new URL("b?a=1&b=2&c=3","http://a"),l=u.searchParams,d="";return u.pathname="c%20d",l.forEach(function(s,f){l.delete("b"),d+=f+s}),a&&!u.toJSON||!l.sort||u.href!=="http://a/c%20d?a=1&c=3"||l.get("c")!=="3"||String(new URLSearchParams("?a=1"))!=="a=1"||!l[c]||new URL("https://a@b").username!=="a"||new URLSearchParams(new URLSearchParams("a=b")).get("a")!=="b"||new URL("http://тест").host!=="xn--e1aybc"||new URL("http://a#б").hash!=="#%D0%B1"||d!=="a1c3"||new URL("http://x",void 0).host!=="x"})},{"../internals/fails":34,"../internals/is-pure":60,"../internals/well-known-symbol":113}],70:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/is-callable"),a=e("../internals/inspect-source"),c=r.WeakMap;i.exports=o(c)&&/native code/.test(a(c))},{"../internals/global":47,"../internals/inspect-source":53,"../internals/is-callable":56}],71:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/function-uncurry-this"),a=e("../internals/function-call"),c=e("../internals/fails"),u=e("../internals/object-keys"),l=e("../internals/object-get-own-property-symbols"),d=e("../internals/object-property-is-enumerable"),s=e("../internals/to-object"),f=e("../internals/indexed-object"),p=Object.assign,v=Object.defineProperty,g=o([].concat);i.exports=!p||c(function(){if(r&&p({b:1},p(v({},"a",{enumerable:!0,get:function(){v(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var m={},y={},_=Symbol(),b="abcdefghijklmnopqrst";return m[_]=7,b.split("").forEach(function(w){y[w]=w}),p({},m)[_]!=7||u(p({},y)).join("")!=b})?function(m,y){for(var _=s(m),b=arguments.length,w=1,T=l.f,E=d.f;b>w;)for(var k,S=f(arguments[w++]),A=T?g(u(S),T(S)):u(S),N=A.length,U=0;N>U;)k=A[U++],r&&!a(E,S,k)||(_[k]=S[k]);return _}:p},{"../internals/descriptors":26,"../internals/fails":34,"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/indexed-object":52,"../internals/object-get-own-property-symbols":77,"../internals/object-keys":81,"../internals/object-property-is-enumerable":82,"../internals/to-object":103}],72:[function(e,i,n){var r,o=e("../internals/an-object"),a=e("../internals/object-define-properties"),c=e("../internals/enum-bug-keys"),u=e("../internals/hidden-keys"),l=e("../internals/html"),d=e("../internals/document-create-element"),s=e("../internals/shared-key"),f=s("IE_PROTO"),p=function(){},v=function(y){return"<script>"+y+"<\/script>"},g=function(y){y.write(v("")),y.close();var _=y.parentWindow.Object;return y=null,_},m=function(){try{r=new ActiveXObject("htmlfile")}catch{}var y,_;m=typeof document<"u"?document.domain&&r?g(r):((_=d("iframe")).style.display="none",l.appendChild(_),_.src="javascript:",(y=_.contentWindow.document).open(),y.write(v("document.F=Object")),y.close(),y.F):g(r);for(var b=c.length;b--;)delete m.prototype[c[b]];return m()};u[f]=!0,i.exports=Object.create||function(y,_){var b;return y!==null?(p.prototype=o(y),b=new p,p.prototype=null,b[f]=y):b=m(),_===void 0?b:a.f(b,_)}},{"../internals/an-object":7,"../internals/document-create-element":27,"../internals/enum-bug-keys":32,"../internals/hidden-keys":49,"../internals/html":50,"../internals/object-define-properties":73,"../internals/shared-key":94}],73:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/v8-prototype-define-bug"),a=e("../internals/object-define-property"),c=e("../internals/an-object"),u=e("../internals/to-indexed-object"),l=e("../internals/object-keys");n.f=r&&!o?Object.defineProperties:function(d,s){c(d);for(var f,p=u(s),v=l(s),g=v.length,m=0;g>m;)a.f(d,f=v[m++],p[f]);return d}},{"../internals/an-object":7,"../internals/descriptors":26,"../internals/object-define-property":74,"../internals/object-keys":81,"../internals/to-indexed-object":100,"../internals/v8-prototype-define-bug":111}],74:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/ie8-dom-define"),a=e("../internals/v8-prototype-define-bug"),c=e("../internals/an-object"),u=e("../internals/to-property-key"),l=TypeError,d=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",v="writable";n.f=r?a?function(g,m,y){if(c(g),m=u(m),c(y),typeof g=="function"&&m==="prototype"&&"value"in y&&v in y&&!y.writable){var _=s(g,m);_&&_.writable&&(g[m]=y.value,y={configurable:p in y?y.configurable:_.configurable,enumerable:f in y?y.enumerable:_.enumerable,writable:!1})}return d(g,m,y)}:d:function(g,m,y){if(c(g),m=u(m),c(y),o)try{return d(g,m,y)}catch{}if("get"in y||"set"in y)throw l("Accessors not supported");return"value"in y&&(g[m]=y.value),g}},{"../internals/an-object":7,"../internals/descriptors":26,"../internals/ie8-dom-define":51,"../internals/to-property-key":105,"../internals/v8-prototype-define-bug":111}],75:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/function-call"),a=e("../internals/object-property-is-enumerable"),c=e("../internals/create-property-descriptor"),u=e("../internals/to-indexed-object"),l=e("../internals/to-property-key"),d=e("../internals/has-own-property"),s=e("../internals/ie8-dom-define"),f=Object.getOwnPropertyDescriptor;n.f=r?f:function(p,v){if(p=u(p),v=l(v),s)try{return f(p,v)}catch{}if(d(p,v))return c(!o(a.f,p,v),p[v])}},{"../internals/create-property-descriptor":19,"../internals/descriptors":26,"../internals/function-call":39,"../internals/has-own-property":48,"../internals/ie8-dom-define":51,"../internals/object-property-is-enumerable":82,"../internals/to-indexed-object":100,"../internals/to-property-key":105}],76:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(a){return r(a,o)}},{"../internals/enum-bug-keys":32,"../internals/object-keys-internal":80}],77:[function(e,i,n){n.f=Object.getOwnPropertySymbols},{}],78:[function(e,i,n){var r=e("../internals/has-own-property"),o=e("../internals/is-callable"),a=e("../internals/to-object"),c=e("../internals/shared-key"),u=e("../internals/correct-prototype-getter"),l=c("IE_PROTO"),d=Object,s=d.prototype;i.exports=u?d.getPrototypeOf:function(f){var p=a(f);if(r(p,l))return p[l];var v=p.constructor;return o(v)&&p instanceof v?v.prototype:p instanceof d?s:null}},{"../internals/correct-prototype-getter":16,"../internals/has-own-property":48,"../internals/is-callable":56,"../internals/shared-key":94,"../internals/to-object":103}],79:[function(e,i,n){var r=e("../internals/function-uncurry-this");i.exports=r({}.isPrototypeOf)},{"../internals/function-uncurry-this":41}],80:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/has-own-property"),a=e("../internals/to-indexed-object"),c=e("../internals/array-includes").indexOf,u=e("../internals/hidden-keys"),l=r([].push);i.exports=function(d,s){var f,p=a(d),v=0,g=[];for(f in p)!o(u,f)&&o(p,f)&&l(g,f);for(;s.length>v;)o(p,f=s[v++])&&(~c(g,f)||l(g,f));return g}},{"../internals/array-includes":9,"../internals/function-uncurry-this":41,"../internals/has-own-property":48,"../internals/hidden-keys":49,"../internals/to-indexed-object":100}],81:[function(e,i,n){var r=e("../internals/object-keys-internal"),o=e("../internals/enum-bug-keys");i.exports=Object.keys||function(a){return r(a,o)}},{"../internals/enum-bug-keys":32,"../internals/object-keys-internal":80}],82:[function(e,i,n){var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);n.f=a?function(c){var u=o(this,c);return!!u&&u.enumerable}:r},{}],83:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/an-object"),a=e("../internals/a-possible-prototype");i.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var c,u=!1,l={};try{(c=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(l,[]),u=l instanceof Array}catch{}return function(d,s){return o(d),a(s),u?c(d,s):d.__proto__=s,d}}():void 0)},{"../internals/a-possible-prototype":3,"../internals/an-object":7,"../internals/function-uncurry-this":41}],84:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-callable"),a=e("../internals/is-object"),c=TypeError;i.exports=function(u,l){var d,s;if(l==="string"&&o(d=u.toString)&&!a(s=r(d,u))||o(d=u.valueOf)&&!a(s=r(d,u))||l!=="string"&&o(d=u.toString)&&!a(s=r(d,u)))return s;throw c("Can't convert object to primitive value")}},{"../internals/function-call":39,"../internals/is-callable":56,"../internals/is-object":59}],85:[function(e,i,n){var r=e("../internals/get-built-in"),o=e("../internals/function-uncurry-this"),a=e("../internals/object-get-own-property-names"),c=e("../internals/object-get-own-property-symbols"),u=e("../internals/an-object"),l=o([].concat);i.exports=r("Reflect","ownKeys")||function(d){var s=a.f(u(d)),f=c.f;return f?l(s,f(d)):s}},{"../internals/an-object":7,"../internals/function-uncurry-this":41,"../internals/get-built-in":42,"../internals/object-get-own-property-names":76,"../internals/object-get-own-property-symbols":77}],86:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/an-object"),a=e("../internals/is-callable"),c=e("../internals/classof-raw"),u=e("../internals/regexp-exec"),l=TypeError;i.exports=function(d,s){var f=d.exec;if(a(f)){var p=r(f,d,s);return p!==null&&o(p),p}if(c(d)==="RegExp")return r(u,d,s);throw l("RegExp#exec called on incompatible receiver")}},{"../internals/an-object":7,"../internals/classof-raw":13,"../internals/function-call":39,"../internals/is-callable":56,"../internals/regexp-exec":87}],87:[function(e,i,n){var r,o,a=e("../internals/function-call"),c=e("../internals/function-uncurry-this"),u=e("../internals/to-string"),l=e("../internals/regexp-flags"),d=e("../internals/regexp-sticky-helpers"),s=e("../internals/shared"),f=e("../internals/object-create"),p=e("../internals/internal-state").get,v=e("../internals/regexp-unsupported-dot-all"),g=e("../internals/regexp-unsupported-ncg"),m=s("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,_=y,b=c("".charAt),w=c("".indexOf),T=c("".replace),E=c("".slice),k=(o=/b*/g,a(y,r=/a/,"a"),a(y,o,"a"),r.lastIndex!==0||o.lastIndex!==0),S=d.BROKEN_CARET,A=/()??/.exec("")[1]!==void 0;(k||A||S||v||g)&&(_=function(N){var U,x,M,R,L,F,q,j=this,W=p(j),D=u(N),C=W.raw;if(C)return C.lastIndex=j.lastIndex,U=a(_,C,D),j.lastIndex=C.lastIndex,U;var P=W.groups,O=S&&j.sticky,B=a(l,j),G=j.source,Y=0,H=D;if(O&&(B=T(B,"y",""),w(B,"g")===-1&&(B+="g"),H=E(D,j.lastIndex),j.lastIndex>0&&(!j.multiline||j.multiline&&b(D,j.lastIndex-1)!==`
`)&&(G="(?: "+G+")",H=" "+H,Y++),x=new RegExp("^(?:"+G+")",B)),A&&(x=new RegExp("^"+G+"$(?!\\s)",B)),k&&(M=j.lastIndex),R=a(y,O?x:j,H),O?R?(R.input=E(R.input,Y),R[0]=E(R[0],Y),R.index=j.lastIndex,j.lastIndex+=R[0].length):j.lastIndex=0:k&&R&&(j.lastIndex=j.global?R.index+R[0].length:M),A&&R&&R.length>1&&a(m,R[0],x,function(){for(L=1;L<arguments.length-2;L++)arguments[L]===void 0&&(R[L]=void 0)}),R&&P)for(R.groups=F=f(null),L=0;L<P.length;L++)F[(q=P[L])[0]]=R[q[1]];return R}),i.exports=_},{"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/internal-state":54,"../internals/object-create":72,"../internals/regexp-flags":88,"../internals/regexp-sticky-helpers":89,"../internals/regexp-unsupported-dot-all":90,"../internals/regexp-unsupported-ncg":91,"../internals/shared":96,"../internals/to-string":107}],88:[function(e,i,n){var r=e("../internals/an-object");i.exports=function(){var o=r(this),a="";return o.hasIndices&&(a+="d"),o.global&&(a+="g"),o.ignoreCase&&(a+="i"),o.multiline&&(a+="m"),o.dotAll&&(a+="s"),o.unicode&&(a+="u"),o.unicodeSets&&(a+="v"),o.sticky&&(a+="y"),a}},{"../internals/an-object":7}],89:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp,a=r(function(){var l=o("a","y");return l.lastIndex=2,l.exec("abcd")!=null}),c=a||r(function(){return!o("a","y").sticky}),u=a||r(function(){var l=o("^r","gy");return l.lastIndex=2,l.exec("str")!=null});i.exports={BROKEN_CARET:u,MISSED_STICKY:c,UNSUPPORTED_Y:a}},{"../internals/fails":34,"../internals/global":47}],90:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o(".","s");return!(a.dotAll&&a.exec(`
`)&&a.flags==="s")})},{"../internals/fails":34,"../internals/global":47}],91:[function(e,i,n){var r=e("../internals/fails"),o=e("../internals/global").RegExp;i.exports=r(function(){var a=o("(?<a>b)","g");return a.exec("b").groups.a!=="b"||"b".replace(a,"$<a>c")!=="bc"})},{"../internals/fails":34,"../internals/global":47}],92:[function(e,i,n){var r=TypeError;i.exports=function(o){if(o==null)throw r("Can't call method on "+o);return o}},{}],93:[function(e,i,n){var r=e("../internals/object-define-property").f,o=e("../internals/has-own-property"),a=e("../internals/well-known-symbol")("toStringTag");i.exports=function(c,u,l){c&&!l&&(c=c.prototype),c&&!o(c,a)&&r(c,a,{configurable:!0,value:u})}},{"../internals/has-own-property":48,"../internals/object-define-property":74,"../internals/well-known-symbol":113}],94:[function(e,i,n){var r=e("../internals/shared"),o=e("../internals/uid"),a=r("keys");i.exports=function(c){return a[c]||(a[c]=o(c))}},{"../internals/shared":96,"../internals/uid":109}],95:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/define-global-property"),a="__core-js_shared__",c=r[a]||o(a,{});i.exports=c},{"../internals/define-global-property":24,"../internals/global":47}],96:[function(e,i,n){var r=e("../internals/is-pure"),o=e("../internals/shared-store");(i.exports=function(a,c){return o[a]||(o[a]=c!==void 0?c:{})})("versions",[]).push({version:"3.23.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",source:"https://github.com/zloirock/core-js"})},{"../internals/is-pure":60,"../internals/shared-store":95}],97:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=e("../internals/to-integer-or-infinity"),a=e("../internals/to-string"),c=e("../internals/require-object-coercible"),u=r("".charAt),l=r("".charCodeAt),d=r("".slice),s=function(f){return function(p,v){var g,m,y=a(c(p)),_=o(v),b=y.length;return _<0||_>=b?f?"":void 0:(g=l(y,_))<55296||g>56319||_+1===b||(m=l(y,_+1))<56320||m>57343?f?u(y,_):g:f?d(y,_,_+2):m-56320+(g-55296<<10)+65536}};i.exports={codeAt:s(!1),charAt:s(!0)}},{"../internals/function-uncurry-this":41,"../internals/require-object-coercible":92,"../internals/to-integer-or-infinity":101,"../internals/to-string":107}],98:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=2147483647,a=/[^\0-\u007E]/,c=/[.\u3002\uFF0E\uFF61]/g,u="Overflow: input needs wider integers to process",l=RangeError,d=r(c.exec),s=Math.floor,f=String.fromCharCode,p=r("".charCodeAt),v=r([].join),g=r([].push),m=r("".replace),y=r("".split),_=r("".toLowerCase),b=function(E){return E+22+75*(E<26)},w=function(E,k,S){var A=0;for(E=S?s(E/700):E>>1,E+=s(E/k);E>455;)E=s(E/35),A+=36;return s(A+36*E/(E+38))},T=function(E){var k=[];E=function(O){for(var B=[],G=0,Y=O.length;G<Y;){var H=p(O,G++);if(H>=55296&&H<=56319&&G<Y){var te=p(O,G++);(64512&te)==56320?g(B,((1023&H)<<10)+(1023&te)+65536):(g(B,H),G--)}else g(B,H)}return B}(E);var S,A,N=E.length,U=128,x=0,M=72;for(S=0;S<E.length;S++)(A=E[S])<128&&g(k,f(A));var R=k.length,L=R;for(R&&g(k,"-");L<N;){var F=o;for(S=0;S<E.length;S++)(A=E[S])>=U&&A<F&&(F=A);var q=L+1;if(F-U>s((o-x)/q))throw l(u);for(x+=(F-U)*q,U=F,S=0;S<E.length;S++){if((A=E[S])<U&&++x>o)throw l(u);if(A==U){for(var j=x,W=36;;){var D=W<=M?1:W>=M+26?26:W-M;if(j<D)break;var C=j-D,P=36-D;g(k,f(b(D+C%P))),j=s(C/P),W+=36}g(k,f(b(j))),M=w(x,q,L==R),x=0,L++}}x++,U++}return v(k,"")};i.exports=function(E){var k,S,A=[],N=y(m(_(E),c,"."),".");for(k=0;k<N.length;k++)S=N[k],g(A,d(a,S)?"xn--"+T(S):S);return v(A,".")}},{"../internals/function-uncurry-this":41}],99:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.max,a=Math.min;i.exports=function(c,u){var l=r(c);return l<0?o(l+u,0):a(l,u)}},{"../internals/to-integer-or-infinity":101}],100:[function(e,i,n){var r=e("../internals/indexed-object"),o=e("../internals/require-object-coercible");i.exports=function(a){return r(o(a))}},{"../internals/indexed-object":52,"../internals/require-object-coercible":92}],101:[function(e,i,n){var r=e("../internals/math-trunc");i.exports=function(o){var a=+o;return a!=a||a===0?0:r(a)}},{"../internals/math-trunc":67}],102:[function(e,i,n){var r=e("../internals/to-integer-or-infinity"),o=Math.min;i.exports=function(a){return a>0?o(r(a),9007199254740991):0}},{"../internals/to-integer-or-infinity":101}],103:[function(e,i,n){var r=e("../internals/require-object-coercible"),o=Object;i.exports=function(a){return o(r(a))}},{"../internals/require-object-coercible":92}],104:[function(e,i,n){var r=e("../internals/function-call"),o=e("../internals/is-object"),a=e("../internals/is-symbol"),c=e("../internals/get-method"),u=e("../internals/ordinary-to-primitive"),l=e("../internals/well-known-symbol"),d=TypeError,s=l("toPrimitive");i.exports=function(f,p){if(!o(f)||a(f))return f;var v,g=c(f,s);if(g){if(p===void 0&&(p="default"),v=r(g,f,p),!o(v)||a(v))return v;throw d("Can't convert object to primitive value")}return p===void 0&&(p="number"),u(f,p)}},{"../internals/function-call":39,"../internals/get-method":45,"../internals/is-object":59,"../internals/is-symbol":61,"../internals/ordinary-to-primitive":84,"../internals/well-known-symbol":113}],105:[function(e,i,n){var r=e("../internals/to-primitive"),o=e("../internals/is-symbol");i.exports=function(a){var c=r(a,"string");return o(c)?c:c+""}},{"../internals/is-symbol":61,"../internals/to-primitive":104}],106:[function(e,i,n){var r={};r[e("../internals/well-known-symbol")("toStringTag")]="z",i.exports=String(r)==="[object z]"},{"../internals/well-known-symbol":113}],107:[function(e,i,n){var r=e("../internals/classof"),o=String;i.exports=function(a){if(r(a)==="Symbol")throw TypeError("Cannot convert a Symbol value to a string");return o(a)}},{"../internals/classof":14}],108:[function(e,i,n){var r=String;i.exports=function(o){try{return r(o)}catch{return"Object"}}},{}],109:[function(e,i,n){var r=e("../internals/function-uncurry-this"),o=0,a=Math.random(),c=r(1 .toString);i.exports=function(u){return"Symbol("+(u===void 0?"":u)+")_"+c(++o+a,36)}},{"../internals/function-uncurry-this":41}],110:[function(e,i,n){var r=e("../internals/native-symbol");i.exports=r&&!Symbol.sham&&typeof Symbol.iterator=="symbol"},{"../internals/native-symbol":68}],111:[function(e,i,n){var r=e("../internals/descriptors"),o=e("../internals/fails");i.exports=r&&o(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!=42})},{"../internals/descriptors":26,"../internals/fails":34}],112:[function(e,i,n){var r=TypeError;i.exports=function(o,a){if(o<a)throw r("Not enough arguments");return o}},{}],113:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/shared"),a=e("../internals/has-own-property"),c=e("../internals/uid"),u=e("../internals/native-symbol"),l=e("../internals/use-symbol-as-uid"),d=o("wks"),s=r.Symbol,f=s&&s.for,p=l?s:s&&s.withoutSetter||c;i.exports=function(v){if(!a(d,v)||!u&&typeof d[v]!="string"){var g="Symbol."+v;u&&a(s,v)?d[v]=s[v]:d[v]=l&&f?f(g):p(g)}return d[v]}},{"../internals/global":47,"../internals/has-own-property":48,"../internals/native-symbol":68,"../internals/shared":96,"../internals/uid":109,"../internals/use-symbol-as-uid":110}],114:[function(e,i,n){var r=e("../internals/to-indexed-object"),o=e("../internals/add-to-unscopables"),a=e("../internals/iterators"),c=e("../internals/internal-state"),u=e("../internals/object-define-property").f,l=e("../internals/define-iterator"),d=e("../internals/is-pure"),s=e("../internals/descriptors"),f="Array Iterator",p=c.set,v=c.getterFor(f);i.exports=l(Array,"Array",function(m,y){p(this,{type:f,target:r(m),index:0,kind:y})},function(){var m=v(this),y=m.target,_=m.kind,b=m.index++;return!y||b>=y.length?(m.target=void 0,{value:void 0,done:!0}):_=="keys"?{value:b,done:!1}:_=="values"?{value:y[b],done:!1}:{value:[b,y[b]],done:!1}},"values");var g=a.Arguments=a.Array;if(o("keys"),o("values"),o("entries"),!d&&s&&g.name!=="values")try{u(g,"name",{value:"values"})}catch{}},{"../internals/add-to-unscopables":4,"../internals/define-iterator":25,"../internals/descriptors":26,"../internals/internal-state":54,"../internals/is-pure":60,"../internals/iterators":64,"../internals/object-define-property":74,"../internals/to-indexed-object":100}],115:[function(e,i,n){var r=e("../internals/export"),o=e("../internals/regexp-exec");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},{"../internals/export":33,"../internals/regexp-exec":87}],116:[function(e,i,n){var r=e("../internals/string-multibyte").charAt,o=e("../internals/to-string"),a=e("../internals/internal-state"),c=e("../internals/define-iterator"),u="String Iterator",l=a.set,d=a.getterFor(u);c(String,"String",function(s){l(this,{type:u,string:o(s),index:0})},function(){var s,f=d(this),p=f.string,v=f.index;return v>=p.length?{value:void 0,done:!0}:(s=r(p,v),f.index+=s.length,{value:s,done:!1})})},{"../internals/define-iterator":25,"../internals/internal-state":54,"../internals/string-multibyte":97,"../internals/to-string":107}],117:[function(e,i,n){var r=e("../internals/function-apply"),o=e("../internals/function-call"),a=e("../internals/function-uncurry-this"),c=e("../internals/fix-regexp-well-known-symbol-logic"),u=e("../internals/fails"),l=e("../internals/an-object"),d=e("../internals/is-callable"),s=e("../internals/to-integer-or-infinity"),f=e("../internals/to-length"),p=e("../internals/to-string"),v=e("../internals/require-object-coercible"),g=e("../internals/advance-string-index"),m=e("../internals/get-method"),y=e("../internals/get-substitution"),_=e("../internals/regexp-exec-abstract"),b=e("../internals/well-known-symbol")("replace"),w=Math.max,T=Math.min,E=a([].concat),k=a([].push),S=a("".indexOf),A=a("".slice),N="a".replace(/./,"$0")==="$0",U=!!/./[b]&&/./[b]("a","$0")==="";c("replace",function(x,M,R){var L=U?"$":"$0";return[function(F,q){var j=v(this),W=F==null?void 0:m(F,b);return W?o(W,F,j,q):o(M,p(j),F,q)},function(F,q){var j=l(this),W=p(F);if(typeof q=="string"&&S(q,L)===-1&&S(q,"$<")===-1){var D=R(M,j,W,q);if(D.done)return D.value}var C=d(q);C||(q=p(q));var P=j.global;if(P){var O=j.unicode;j.lastIndex=0}for(var B=[];;){var G=_(j,W);if(G===null||(k(B,G),!P))break;p(G[0])===""&&(j.lastIndex=g(W,f(j.lastIndex),O))}for(var Y,H="",te=0,ue=0;ue<B.length;ue++){for(var _e=p((G=B[ue])[0]),J=w(T(s(G.index),W.length),0),re=[],pe=1;pe<G.length;pe++)k(re,(Y=G[pe])===void 0?Y:String(Y));var we=G.groups;if(C){var me=E([_e],re,J,W);we!==void 0&&k(me,we);var ye=p(r(q,void 0,me))}else ye=y(_e,W,J,re,we,q);J>=te&&(H+=A(W,te,J)+ye,te=J+_e.length)}return H+A(W,te)}]},!!u(function(){var x=/./;return x.exec=function(){var M=[];return M.groups={a:"7"},M},"".replace(x,"$<a>")!=="7"})||!N||U)},{"../internals/advance-string-index":5,"../internals/an-object":7,"../internals/fails":34,"../internals/fix-regexp-well-known-symbol-logic":35,"../internals/function-apply":36,"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/get-method":45,"../internals/get-substitution":46,"../internals/is-callable":56,"../internals/regexp-exec-abstract":86,"../internals/require-object-coercible":92,"../internals/to-integer-or-infinity":101,"../internals/to-length":102,"../internals/to-string":107,"../internals/well-known-symbol":113}],118:[function(e,i,n){var r=e("../internals/global"),o=e("../internals/dom-iterables"),a=e("../internals/dom-token-list-prototype"),c=e("../modules/es.array.iterator"),u=e("../internals/create-non-enumerable-property"),l=e("../internals/well-known-symbol"),d=l("iterator"),s=l("toStringTag"),f=c.values,p=function(g,m){if(g){if(g[d]!==f)try{u(g,d,f)}catch{g[d]=f}if(g[s]||u(g,s,m),o[m]){for(var y in c)if(g[y]!==c[y])try{u(g,y,c[y])}catch{g[y]=c[y]}}}};for(var v in o)p(r[v]&&r[v].prototype,v);p(a,"DOMTokenList")},{"../internals/create-non-enumerable-property":18,"../internals/dom-iterables":28,"../internals/dom-token-list-prototype":29,"../internals/global":47,"../internals/well-known-symbol":113,"../modules/es.array.iterator":114}],119:[function(e,i,n){e("../modules/es.array.iterator");var r=e("../internals/export"),o=e("../internals/global"),a=e("../internals/function-call"),c=e("../internals/function-uncurry-this"),u=e("../internals/descriptors"),l=e("../internals/native-url"),d=e("../internals/define-built-in"),s=e("../internals/define-built-ins"),f=e("../internals/set-to-string-tag"),p=e("../internals/create-iterator-constructor"),v=e("../internals/internal-state"),g=e("../internals/an-instance"),m=e("../internals/is-callable"),y=e("../internals/has-own-property"),_=e("../internals/function-bind-context"),b=e("../internals/classof"),w=e("../internals/an-object"),T=e("../internals/is-object"),E=e("../internals/to-string"),k=e("../internals/object-create"),S=e("../internals/create-property-descriptor"),A=e("../internals/get-iterator"),N=e("../internals/get-iterator-method"),U=e("../internals/validate-arguments-length"),x=e("../internals/well-known-symbol"),M=e("../internals/array-sort"),R=x("iterator"),L="URLSearchParams",F="URLSearchParamsIterator",q=v.set,j=v.getterFor(L),W=v.getterFor(F),D=Object.getOwnPropertyDescriptor,C=function(Ae){if(!u)return o[Ae];var We=D(o,Ae);return We&&We.value},P=C("fetch"),O=C("Request"),B=C("Headers"),G=O&&O.prototype,Y=B&&B.prototype,H=o.RegExp,te=o.TypeError,ue=o.decodeURIComponent,_e=o.encodeURIComponent,J=c("".charAt),re=c([].join),pe=c([].push),we=c("".replace),me=c([].shift),ye=c([].splice),$e=c("".split),Fe=c("".slice),Je=/\+/g,ct=Array(4),mt=function(Ae){return ct[Ae-1]||(ct[Ae-1]=H("((?:%[\\da-f]{2}){"+Ae+"})","gi"))},K=function(Ae){try{return ue(Ae)}catch{return Ae}},X=function(Ae){var We=we(Ae,Je," "),$=4;try{return ue(We)}catch{for(;$;)We=we(We,mt($--),K);return We}},fe=/[!'()~]|%20/g,Pe={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Le=function(Ae){return Pe[Ae]},Ne=function(Ae){return we(_e(Ae),fe,Le)},ze=p(function(Ae,We){q(this,{type:F,iterator:A(j(Ae).entries),kind:We})},"Iterator",function(){var Ae=W(this),We=Ae.kind,$=Ae.iterator.next(),Se=$.value;return $.done||($.value=We==="keys"?Se.key:We==="values"?Se.value:[Se.key,Se.value]),$},!0),De=function(Ae){this.entries=[],this.url=null,Ae!==void 0&&(T(Ae)?this.parseObject(Ae):this.parseQuery(typeof Ae=="string"?J(Ae,0)==="?"?Fe(Ae,1):Ae:E(Ae)))};De.prototype={type:L,bindURL:function(Ae){this.url=Ae,this.update()},parseObject:function(Ae){var We,$,Se,se,Ce,Ge,vt,Mt=N(Ae);if(Mt)for($=(We=A(Ae,Mt)).next;!(Se=a($,We)).done;){if(Ce=(se=A(w(Se.value))).next,(Ge=a(Ce,se)).done||(vt=a(Ce,se)).done||!a(Ce,se).done)throw te("Expected sequence with length 2");pe(this.entries,{key:E(Ge.value),value:E(vt.value)})}else for(var Nt in Ae)y(Ae,Nt)&&pe(this.entries,{key:Nt,value:E(Ae[Nt])})},parseQuery:function(Ae){if(Ae)for(var We,$,Se=$e(Ae,"&"),se=0;se<Se.length;)(We=Se[se++]).length&&($=$e(We,"="),pe(this.entries,{key:X(me($)),value:X(re($,"="))}))},serialize:function(){for(var Ae,We=this.entries,$=[],Se=0;Se<We.length;)Ae=We[Se++],pe($,Ne(Ae.key)+"="+Ne(Ae.value));return re($,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var ve=function(){g(this,Xe);var Ae=arguments.length>0?arguments[0]:void 0;q(this,new De(Ae))},Xe=ve.prototype;if(s(Xe,{append:function(Ae,We){U(arguments.length,2);var $=j(this);pe($.entries,{key:E(Ae),value:E(We)}),$.updateURL()},delete:function(Ae){U(arguments.length,1);for(var We=j(this),$=We.entries,Se=E(Ae),se=0;se<$.length;)$[se].key===Se?ye($,se,1):se++;We.updateURL()},get:function(Ae){U(arguments.length,1);for(var We=j(this).entries,$=E(Ae),Se=0;Se<We.length;Se++)if(We[Se].key===$)return We[Se].value;return null},getAll:function(Ae){U(arguments.length,1);for(var We=j(this).entries,$=E(Ae),Se=[],se=0;se<We.length;se++)We[se].key===$&&pe(Se,We[se].value);return Se},has:function(Ae){U(arguments.length,1);for(var We=j(this).entries,$=E(Ae),Se=0;Se<We.length;)if(We[Se++].key===$)return!0;return!1},set:function(Ae,We){U(arguments.length,1);for(var $,Se=j(this),se=Se.entries,Ce=!1,Ge=E(Ae),vt=E(We),Mt=0;Mt<se.length;Mt++)($=se[Mt]).key===Ge&&(Ce?ye(se,Mt--,1):(Ce=!0,$.value=vt));Ce||pe(se,{key:Ge,value:vt}),Se.updateURL()},sort:function(){var Ae=j(this);M(Ae.entries,function(We,$){return We.key>$.key?1:-1}),Ae.updateURL()},forEach:function(Ae){for(var We,$=j(this).entries,Se=_(Ae,arguments.length>1?arguments[1]:void 0),se=0;se<$.length;)Se((We=$[se++]).value,We.key,this)},keys:function(){return new ze(this,"keys")},values:function(){return new ze(this,"values")},entries:function(){return new ze(this,"entries")}},{enumerable:!0}),d(Xe,R,Xe.entries,{name:"entries"}),d(Xe,"toString",function(){return j(this).serialize()},{enumerable:!0}),f(ve,L),r({global:!0,constructor:!0,forced:!l},{URLSearchParams:ve}),!l&&m(B)){var je=c(Y.has),Oe=c(Y.set),Ke=function(Ae){if(T(Ae)){var We,$=Ae.body;if(b($)===L)return We=Ae.headers?new B(Ae.headers):new B,je(We,"content-type")||Oe(We,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),k(Ae,{body:S(0,E($)),headers:S(0,We)})}return Ae};if(m(P)&&r({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(Ae){return P(Ae,arguments.length>1?Ke(arguments[1]):{})}}),m(O)){var He=function(Ae){return g(this,G),new O(Ae,arguments.length>1?Ke(arguments[1]):{})};G.constructor=He,He.prototype=G,r({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:He})}}i.exports={URLSearchParams:ve,getState:j}},{"../internals/an-instance":6,"../internals/an-object":7,"../internals/array-sort":11,"../internals/classof":14,"../internals/create-iterator-constructor":17,"../internals/create-property-descriptor":19,"../internals/define-built-in":22,"../internals/define-built-ins":23,"../internals/descriptors":26,"../internals/export":33,"../internals/function-bind-context":37,"../internals/function-call":39,"../internals/function-uncurry-this":41,"../internals/get-iterator":44,"../internals/get-iterator-method":43,"../internals/global":47,"../internals/has-own-property":48,"../internals/internal-state":54,"../internals/is-callable":56,"../internals/is-object":59,"../internals/native-url":69,"../internals/object-create":72,"../internals/set-to-string-tag":93,"../internals/to-string":107,"../internals/validate-arguments-length":112,"../internals/well-known-symbol":113,"../modules/es.array.iterator":114}],120:[function(e,i,n){e("../modules/web.url-search-params.constructor")},{"../modules/web.url-search-params.constructor":119}],121:[function(e,i,n){e("../modules/es.string.iterator");var r,o=e("../internals/export"),a=e("../internals/descriptors"),c=e("../internals/native-url"),u=e("../internals/global"),l=e("../internals/function-bind-context"),d=e("../internals/function-uncurry-this"),s=e("../internals/define-built-in"),f=e("../internals/define-built-in-accessor"),p=e("../internals/an-instance"),v=e("../internals/has-own-property"),g=e("../internals/object-assign"),m=e("../internals/array-from"),y=e("../internals/array-slice-simple"),_=e("../internals/string-multibyte").codeAt,b=e("../internals/string-punycode-to-ascii"),w=e("../internals/to-string"),T=e("../internals/set-to-string-tag"),E=e("../internals/validate-arguments-length"),k=e("../modules/web.url-search-params.constructor"),S=e("../internals/internal-state"),A=S.set,N=S.getterFor("URL"),U=k.URLSearchParams,x=k.getState,M=u.URL,R=u.TypeError,L=u.parseInt,F=Math.floor,q=Math.pow,j=d("".charAt),W=d(/./.exec),D=d([].join),C=d(1 .toString),P=d([].pop),O=d([].push),B=d("".replace),G=d([].shift),Y=d("".split),H=d("".slice),te=d("".toLowerCase),ue=d([].unshift),_e="Invalid scheme",J="Invalid host",re="Invalid port",pe=/[a-z]/i,we=/[\d+-.a-z]/i,me=/\d/,ye=/^0x/i,$e=/^[0-7]+$/,Fe=/^\d+$/,Je=/^[\da-f]+$/i,ct=/[\0\t\n\r #%/:<>?@[\\\]^|]/,mt=/[\0\t\n\r #/:<>?@[\\\]^|]/,K=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,X=/[\t\n\r]/g,fe=function(Q){var oe,ne,Me,ge;if(typeof Q=="number"){for(oe=[],ne=0;ne<4;ne++)ue(oe,Q%256),Q=F(Q/256);return D(oe,".")}if(typeof Q=="object"){for(oe="",Me=function(ot){for(var it=null,tt=1,de=null,Ie=0,at=0;at<8;at++)ot[at]!==0?(Ie>tt&&(it=de,tt=Ie),de=null,Ie=0):(de===null&&(de=at),++Ie);return Ie>tt&&(it=de,tt=Ie),it}(Q),ne=0;ne<8;ne++)ge&&Q[ne]===0||(ge&&(ge=!1),Me===ne?(oe+=ne?":":"::",ge=!0):(oe+=C(Q[ne],16),ne<7&&(oe+=":")));return"["+oe+"]"}return Q},Pe={},Le=g({},Pe,{" ":1,'"':1,"<":1,">":1,"`":1}),Ne=g({},Le,{"#":1,"?":1,"{":1,"}":1}),ze=g({},Ne,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),De=function(Q,oe){var ne=_(Q,0);return ne>32&&ne<127&&!v(oe,Q)?Q:encodeURIComponent(Q)},ve={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Xe=function(Q,oe){var ne;return Q.length==2&&W(pe,j(Q,0))&&((ne=j(Q,1))==":"||!oe&&ne=="|")},je=function(Q){var oe;return Q.length>1&&Xe(H(Q,0,2))&&(Q.length==2||(oe=j(Q,2))==="/"||oe==="\\"||oe==="?"||oe==="#")},Oe=function(Q){return Q==="."||te(Q)==="%2e"},Ke={},He={},Ae={},We={},$={},Se={},se={},Ce={},Ge={},vt={},Mt={},Nt={},ln={},Ut={},hn={},Xt={},Ln={},fn={},bi={},xn={},wn={},jn=function(Q,oe,ne){var Me,ge,ot,it=w(Q);if(oe){if(ge=this.parse(it))throw R(ge);this.searchParams=null}else{if(ne!==void 0&&(Me=new jn(ne,!0)),ge=this.parse(it,null,Me))throw R(ge);(ot=x(new U)).bindURL(this),this.searchParams=ot}};jn.prototype={type:"URL",parse:function(Q,oe,ne){var Me,ge,ot,it,tt,de=this,Ie=oe||Ke,at=0,lt="",xt=!1,It=!1,Kt=!1;for(Q=w(Q),oe||(de.scheme="",de.username="",de.password="",de.host=null,de.port=null,de.path=[],de.query=null,de.fragment=null,de.cannotBeABaseURL=!1,Q=B(Q,K,"")),Q=B(Q,X,""),Me=m(Q);at<=Me.length;){switch(ge=Me[at],Ie){case Ke:if(!ge||!W(pe,ge)){if(oe)return _e;Ie=Ae;continue}lt+=te(ge),Ie=He;break;case He:if(ge&&(W(we,ge)||ge=="+"||ge=="-"||ge=="."))lt+=te(ge);else{if(ge!=":"){if(oe)return _e;lt="",Ie=Ae,at=0;continue}if(oe&&(de.isSpecial()!=v(ve,lt)||lt=="file"&&(de.includesCredentials()||de.port!==null)||de.scheme=="file"&&!de.host))return;if(de.scheme=lt,oe)return void(de.isSpecial()&&ve[de.scheme]==de.port&&(de.port=null));lt="",de.scheme=="file"?Ie=Ut:de.isSpecial()&&ne&&ne.scheme==de.scheme?Ie=We:de.isSpecial()?Ie=Ce:Me[at+1]=="/"?(Ie=$,at++):(de.cannotBeABaseURL=!0,O(de.path,""),Ie=bi)}break;case Ae:if(!ne||ne.cannotBeABaseURL&&ge!="#")return _e;if(ne.cannotBeABaseURL&&ge=="#"){de.scheme=ne.scheme,de.path=y(ne.path),de.query=ne.query,de.fragment="",de.cannotBeABaseURL=!0,Ie=wn;break}Ie=ne.scheme=="file"?Ut:Se;continue;case We:if(ge!="/"||Me[at+1]!="/"){Ie=Se;continue}Ie=Ge,at++;break;case $:if(ge=="/"){Ie=vt;break}Ie=fn;continue;case Se:if(de.scheme=ne.scheme,ge==r)de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.query=ne.query;else if(ge=="/"||ge=="\\"&&de.isSpecial())Ie=se;else if(ge=="?")de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.query="",Ie=xn;else{if(ge!="#"){de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.path.length--,Ie=fn;continue}de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,de.path=y(ne.path),de.query=ne.query,de.fragment="",Ie=wn}break;case se:if(!de.isSpecial()||ge!="/"&&ge!="\\"){if(ge!="/"){de.username=ne.username,de.password=ne.password,de.host=ne.host,de.port=ne.port,Ie=fn;continue}Ie=vt}else Ie=Ge;break;case Ce:if(Ie=Ge,ge!="/"||j(lt,at+1)!="/")continue;at++;break;case Ge:if(ge!="/"&&ge!="\\"){Ie=vt;continue}break;case vt:if(ge=="@"){xt&&(lt="%40"+lt),xt=!0,ot=m(lt);for(var Pt=0;Pt<ot.length;Pt++){var gt=ot[Pt];if(gt!=":"||Kt){var ri=De(gt,ze);Kt?de.password+=ri:de.username+=ri}else Kt=!0}lt=""}else if(ge==r||ge=="/"||ge=="?"||ge=="#"||ge=="\\"&&de.isSpecial()){if(xt&&lt=="")return"Invalid authority";at-=m(lt).length+1,lt="",Ie=Mt}else lt+=ge;break;case Mt:case Nt:if(oe&&de.scheme=="file"){Ie=Xt;continue}if(ge!=":"||It){if(ge==r||ge=="/"||ge=="?"||ge=="#"||ge=="\\"&&de.isSpecial()){if(de.isSpecial()&&lt=="")return J;if(oe&&lt==""&&(de.includesCredentials()||de.port!==null))return;if(it=de.parseHost(lt))return it;if(lt="",Ie=Ln,oe)return;continue}ge=="["?It=!0:ge=="]"&&(It=!1),lt+=ge}else{if(lt=="")return J;if(it=de.parseHost(lt))return it;if(lt="",Ie=ln,oe==Nt)return}break;case ln:if(!W(me,ge)){if(ge==r||ge=="/"||ge=="?"||ge=="#"||ge=="\\"&&de.isSpecial()||oe){if(lt!=""){var Gt=L(lt,10);if(Gt>65535)return re;de.port=de.isSpecial()&&Gt===ve[de.scheme]?null:Gt,lt=""}if(oe)return;Ie=Ln;continue}return re}lt+=ge;break;case Ut:if(de.scheme="file",ge=="/"||ge=="\\")Ie=hn;else{if(!ne||ne.scheme!="file"){Ie=fn;continue}if(ge==r)de.host=ne.host,de.path=y(ne.path),de.query=ne.query;else if(ge=="?")de.host=ne.host,de.path=y(ne.path),de.query="",Ie=xn;else{if(ge!="#"){je(D(y(Me,at),""))||(de.host=ne.host,de.path=y(ne.path),de.shortenPath()),Ie=fn;continue}de.host=ne.host,de.path=y(ne.path),de.query=ne.query,de.fragment="",Ie=wn}}break;case hn:if(ge=="/"||ge=="\\"){Ie=Xt;break}ne&&ne.scheme=="file"&&!je(D(y(Me,at),""))&&(Xe(ne.path[0],!0)?O(de.path,ne.path[0]):de.host=ne.host),Ie=fn;continue;case Xt:if(ge==r||ge=="/"||ge=="\\"||ge=="?"||ge=="#"){if(!oe&&Xe(lt))Ie=fn;else if(lt==""){if(de.host="",oe)return;Ie=Ln}else{if(it=de.parseHost(lt))return it;if(de.host=="localhost"&&(de.host=""),oe)return;lt="",Ie=Ln}continue}lt+=ge;break;case Ln:if(de.isSpecial()){if(Ie=fn,ge!="/"&&ge!="\\")continue}else if(oe||ge!="?")if(oe||ge!="#"){if(ge!=r&&(Ie=fn,ge!="/"))continue}else de.fragment="",Ie=wn;else de.query="",Ie=xn;break;case fn:if(ge==r||ge=="/"||ge=="\\"&&de.isSpecial()||!oe&&(ge=="?"||ge=="#")){if((tt=te(tt=lt))===".."||tt==="%2e."||tt===".%2e"||tt==="%2e%2e"?(de.shortenPath(),ge=="/"||ge=="\\"&&de.isSpecial()||O(de.path,"")):Oe(lt)?ge=="/"||ge=="\\"&&de.isSpecial()||O(de.path,""):(de.scheme=="file"&&!de.path.length&&Xe(lt)&&(de.host&&(de.host=""),lt=j(lt,0)+":"),O(de.path,lt)),lt="",de.scheme=="file"&&(ge==r||ge=="?"||ge=="#"))for(;de.path.length>1&&de.path[0]==="";)G(de.path);ge=="?"?(de.query="",Ie=xn):ge=="#"&&(de.fragment="",Ie=wn)}else lt+=De(ge,Ne);break;case bi:ge=="?"?(de.query="",Ie=xn):ge=="#"?(de.fragment="",Ie=wn):ge!=r&&(de.path[0]+=De(ge,Pe));break;case xn:oe||ge!="#"?ge!=r&&(ge=="'"&&de.isSpecial()?de.query+="%27":de.query+=ge=="#"?"%23":De(ge,Pe)):(de.fragment="",Ie=wn);break;case wn:ge!=r&&(de.fragment+=De(ge,Le))}at++}},parseHost:function(Q){var oe,ne,Me;if(j(Q,0)=="["){if(j(Q,Q.length-1)!="]"||(oe=function(ge){var ot,it,tt,de,Ie,at,lt,xt=[0,0,0,0,0,0,0,0],It=0,Kt=null,Pt=0,gt=function(){return j(ge,Pt)};if(gt()==":"){if(j(ge,1)!=":")return;Pt+=2,Kt=++It}for(;gt();){if(It==8)return;if(gt()!=":"){for(ot=it=0;it<4&&W(Je,gt());)ot=16*ot+L(gt(),16),Pt++,it++;if(gt()=="."){if(it==0||(Pt-=it,It>6))return;for(tt=0;gt();){if(de=null,tt>0){if(!(gt()=="."&&tt<4))return;Pt++}if(!W(me,gt()))return;for(;W(me,gt());){if(Ie=L(gt(),10),de===null)de=Ie;else{if(de==0)return;de=10*de+Ie}if(de>255)return;Pt++}xt[It]=256*xt[It]+de,++tt!=2&&tt!=4||It++}if(tt!=4)return;break}if(gt()==":"){if(Pt++,!gt())return}else if(gt())return;xt[It++]=ot}else{if(Kt!==null)return;Pt++,Kt=++It}}if(Kt!==null)for(at=It-Kt,It=7;It!=0&&at>0;)lt=xt[It],xt[It--]=xt[Kt+at-1],xt[Kt+--at]=lt;else if(It!=8)return;return xt}(H(Q,1,-1)),!oe))return J;this.host=oe}else if(this.isSpecial()){if(Q=b(Q),W(ct,Q)||(oe=function(ge){var ot,it,tt,de,Ie,at,lt,xt=Y(ge,".");if(xt.length&&xt[xt.length-1]==""&&xt.length--,(ot=xt.length)>4)return ge;for(it=[],tt=0;tt<ot;tt++){if((de=xt[tt])=="")return ge;if(Ie=10,de.length>1&&j(de,0)=="0"&&(Ie=W(ye,de)?16:8,de=H(de,Ie==8?1:2)),de==="")at=0;else{if(!W(Ie==10?Fe:Ie==8?$e:Je,de))return ge;at=L(de,Ie)}O(it,at)}for(tt=0;tt<ot;tt++)if(at=it[tt],tt==ot-1){if(at>=q(256,5-ot))return null}else if(at>255)return null;for(lt=P(it),tt=0;tt<it.length;tt++)lt+=it[tt]*q(256,3-tt);return lt}(Q),oe===null))return J;this.host=oe}else{if(W(mt,Q))return J;for(oe="",ne=m(Q),Me=0;Me<ne.length;Me++)oe+=De(ne[Me],Pe);this.host=oe}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||this.scheme=="file"},includesCredentials:function(){return this.username!=""||this.password!=""},isSpecial:function(){return v(ve,this.scheme)},shortenPath:function(){var Q=this.path,oe=Q.length;!oe||this.scheme=="file"&&oe==1&&Xe(Q[0],!0)||Q.length--},serialize:function(){var Q=this,oe=Q.scheme,ne=Q.username,Me=Q.password,ge=Q.host,ot=Q.port,it=Q.path,tt=Q.query,de=Q.fragment,Ie=oe+":";return ge!==null?(Ie+="//",Q.includesCredentials()&&(Ie+=ne+(Me?":"+Me:"")+"@"),Ie+=fe(ge),ot!==null&&(Ie+=":"+ot)):oe=="file"&&(Ie+="//"),Ie+=Q.cannotBeABaseURL?it[0]:it.length?"/"+D(it,"/"):"",tt!==null&&(Ie+="?"+tt),de!==null&&(Ie+="#"+de),Ie},setHref:function(Q){var oe=this.parse(Q);if(oe)throw R(oe);this.searchParams.update()},getOrigin:function(){var Q=this.scheme,oe=this.port;if(Q=="blob")try{return new kn(Q.path[0]).origin}catch{return"null"}return Q!="file"&&this.isSpecial()?Q+"://"+fe(this.host)+(oe!==null?":"+oe:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(Q){this.parse(w(Q)+":",Ke)},getUsername:function(){return this.username},setUsername:function(Q){var oe=m(w(Q));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var ne=0;ne<oe.length;ne++)this.username+=De(oe[ne],ze)}},getPassword:function(){return this.password},setPassword:function(Q){var oe=m(w(Q));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var ne=0;ne<oe.length;ne++)this.password+=De(oe[ne],ze)}},getHost:function(){var Q=this.host,oe=this.port;return Q===null?"":oe===null?fe(Q):fe(Q)+":"+oe},setHost:function(Q){this.cannotBeABaseURL||this.parse(Q,Mt)},getHostname:function(){var Q=this.host;return Q===null?"":fe(Q)},setHostname:function(Q){this.cannotBeABaseURL||this.parse(Q,Nt)},getPort:function(){var Q=this.port;return Q===null?"":w(Q)},setPort:function(Q){this.cannotHaveUsernamePasswordPort()||((Q=w(Q))==""?this.port=null:this.parse(Q,ln))},getPathname:function(){var Q=this.path;return this.cannotBeABaseURL?Q[0]:Q.length?"/"+D(Q,"/"):""},setPathname:function(Q){this.cannotBeABaseURL||(this.path=[],this.parse(Q,Ln))},getSearch:function(){var Q=this.query;return Q?"?"+Q:""},setSearch:function(Q){(Q=w(Q))==""?this.query=null:(j(Q,0)=="?"&&(Q=H(Q,1)),this.query="",this.parse(Q,xn)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var Q=this.fragment;return Q?"#"+Q:""},setHash:function(Q){(Q=w(Q))!=""?(j(Q,0)=="#"&&(Q=H(Q,1)),this.fragment="",this.parse(Q,wn)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var kn=function(Q){var oe=p(this,Yt),ne=E(arguments.length,1)>1?arguments[1]:void 0,Me=A(oe,new jn(Q,!1,ne));a||(oe.href=Me.serialize(),oe.origin=Me.getOrigin(),oe.protocol=Me.getProtocol(),oe.username=Me.getUsername(),oe.password=Me.getPassword(),oe.host=Me.getHost(),oe.hostname=Me.getHostname(),oe.port=Me.getPort(),oe.pathname=Me.getPathname(),oe.search=Me.getSearch(),oe.searchParams=Me.getSearchParams(),oe.hash=Me.getHash())},Yt=kn.prototype,cn=function(Q,oe){return{get:function(){return N(this)[Q]()},set:oe&&function(ne){return N(this)[oe](ne)},configurable:!0,enumerable:!0}};if(a&&(f(Yt,"href",cn("serialize","setHref")),f(Yt,"origin",cn("getOrigin")),f(Yt,"protocol",cn("getProtocol","setProtocol")),f(Yt,"username",cn("getUsername","setUsername")),f(Yt,"password",cn("getPassword","setPassword")),f(Yt,"host",cn("getHost","setHost")),f(Yt,"hostname",cn("getHostname","setHostname")),f(Yt,"port",cn("getPort","setPort")),f(Yt,"pathname",cn("getPathname","setPathname")),f(Yt,"search",cn("getSearch","setSearch")),f(Yt,"searchParams",cn("getSearchParams")),f(Yt,"hash",cn("getHash","setHash"))),s(Yt,"toJSON",function(){return N(this).serialize()},{enumerable:!0}),s(Yt,"toString",function(){return N(this).serialize()},{enumerable:!0}),M){var xi=M.createObjectURL,Z=M.revokeObjectURL;xi&&s(kn,"createObjectURL",l(xi,M)),Z&&s(kn,"revokeObjectURL",l(Z,M))}T(kn,"URL"),o({global:!0,constructor:!0,forced:!c,sham:!a},{URL:kn})},{"../internals/an-instance":6,"../internals/array-from":8,"../internals/array-slice-simple":10,"../internals/define-built-in":22,"../internals/define-built-in-accessor":21,"../internals/descriptors":26,"../internals/export":33,"../internals/function-bind-context":37,"../internals/function-uncurry-this":41,"../internals/global":47,"../internals/has-own-property":48,"../internals/internal-state":54,"../internals/native-url":69,"../internals/object-assign":71,"../internals/set-to-string-tag":93,"../internals/string-multibyte":97,"../internals/string-punycode-to-ascii":98,"../internals/to-string":107,"../internals/validate-arguments-length":112,"../modules/es.string.iterator":116,"../modules/web.url-search-params.constructor":119}],122:[function(e,i,n){e("../modules/web.url.constructor")},{"../modules/web.url.constructor":121}],123:[function(e,i,n){var r,o,a;r=function(c,u,l,d){var s;u[0]=0;for(var f=1;f<u.length;f++){var p=u[f++],v=u[f]?(u[0]|=p?1:2,l[u[f++]]):u[++f];p===3?d[0]=v:p===4?d[1]=Object.assign(d[1]||{},v):p===5?(d[1]=d[1]||{})[u[++f]]=v:p===6?d[1][u[++f]]+=v+"":p?(s=c.apply(v,r(c,v,l,["",null])),d.push(s),v[0]?u[0]|=2:(u[f-2]=0,u[f]=s)):d.push(v)}return d},o=new Map,a=function(c){var u=o.get(this);return u||(u=new Map,o.set(this,u)),(u=r(this,u.get(c)||(u.set(c,u=function(l){for(var d,s,f=1,p="",v="",g=[0],m=function(b){f===1&&(b||(p=p.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?g.push(0,b,p):f===3&&(b||p)?(g.push(3,b,p),f=2):f===2&&p==="..."&&b?g.push(4,b,0):f===2&&p&&!b?g.push(5,0,!0,p):f>=5&&((p||!b&&f===5)&&(g.push(f,0,p,s),f=6),b&&(g.push(f,b,0,s),f=6)),p=""},y=0;y<l.length;y++){y&&(f===1&&m(),m(y));for(var _=0;_<l[y].length;_++)d=l[y][_],f===1?d==="<"?(m(),g=[g],f=3):p+=d:f===4?p==="--"&&d===">"?(f=1,p=""):p=d+p[0]:v?d===v?v="":p+=d:d==='"'||d==="'"?v=d:d===">"?(m(),f=1):f&&(d==="="?(f=5,s=p,p=""):d==="/"&&(f<5||l[y][_+1]===">")?(m(),f===3&&(g=g[0]),f=g,(g=g[0]).push(2,0,f),f=0):d===" "||d==="	"||d===`
`||d==="\r"?(m(),f=2):p+=d),f===3&&p==="!--"&&(f=4,g=g[0])}return m(),g}(c)),u),arguments,[])).length>1?u:u[0]},i!==void 0?i.exports=a:self.htm=a},{}],124:[function(e,i,n){i.exports={nanoid:(r=21)=>{let o="",a=r;for(;a--;)o+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64*Math.random()|0];return o},customAlphabet:(r,o=21)=>(a=o)=>{let c="",u=a;for(;u--;)c+=r[Math.random()*r.length|0];return c}}},{}],125:[function(e,i,n){var r,o,a,c,u,l,d,s={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function v(P,O){for(var B in O)P[B]=O[B];return P}function g(P){var O=P.parentNode;O&&O.removeChild(P)}function m(P,O,B){var G,Y,H,te={};for(H in O)H=="key"?G=O[H]:H=="ref"?Y=O[H]:te[H]=O[H];if(arguments.length>2&&(te.children=arguments.length>3?r.call(arguments,2):B),typeof P=="function"&&P.defaultProps!=null)for(H in P.defaultProps)te[H]===void 0&&(te[H]=P.defaultProps[H]);return y(P,te,G,Y,null)}function y(P,O,B,G,Y){var H={type:P,props:O,key:B,ref:G,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:Y??++a};return Y==null&&o.vnode!=null&&o.vnode(H),H}function _(P){return P.children}function b(P,O){this.props=P,this.context=O}function w(P,O){if(O==null)return P.__?w(P.__,P.__.__k.indexOf(P)+1):null;for(var B;O<P.__k.length;O++)if((B=P.__k[O])!=null&&B.__e!=null)return B.__e;return typeof P.type=="function"?w(P):null}function T(P){var O,B;if((P=P.__)!=null&&P.__c!=null){for(P.__e=P.__c.base=null,O=0;O<P.__k.length;O++)if((B=P.__k[O])!=null&&B.__e!=null){P.__e=P.__c.base=B.__e;break}return T(P)}}function E(P){(!P.__d&&(P.__d=!0)&&u.push(P)&&!k.__r++||l!==o.debounceRendering)&&((l=o.debounceRendering)||setTimeout)(k)}function k(){for(var P;k.__r=u.length;)P=u.sort(function(O,B){return O.__v.__b-B.__v.__b}),u=[],P.some(function(O){var B,G,Y,H,te,ue;O.__d&&(te=(H=(B=O).__v).__e,(ue=B.__P)&&(G=[],(Y=v({},H)).__v=H.__v+1,L(ue,H,Y,B.__n,ue.ownerSVGElement!==void 0,H.__h!=null?[te]:null,G,te??w(H),H.__h),F(G,H),H.__e!=te&&T(H)))})}function S(P,O,B,G,Y,H,te,ue,_e,J){var re,pe,we,me,ye,$e,Fe,Je=G&&G.__k||f,ct=Je.length;for(B.__k=[],re=0;re<O.length;re++)if((me=B.__k[re]=(me=O[re])==null||typeof me=="boolean"?null:typeof me=="string"||typeof me=="number"||typeof me=="bigint"?y(null,me,null,null,me):Array.isArray(me)?y(_,{children:me},null,null,null):me.__b>0?y(me.type,me.props,me.key,null,me.__v):me)!=null){if(me.__=B,me.__b=B.__b+1,(we=Je[re])===null||we&&me.key==we.key&&me.type===we.type)Je[re]=void 0;else for(pe=0;pe<ct;pe++){if((we=Je[pe])&&me.key==we.key&&me.type===we.type){Je[pe]=void 0;break}we=null}L(P,me,we=we||s,Y,H,te,ue,_e,J),ye=me.__e,(pe=me.ref)&&we.ref!=pe&&(Fe||(Fe=[]),we.ref&&Fe.push(we.ref,null,me),Fe.push(pe,me.__c||ye,me)),ye!=null?($e==null&&($e=ye),typeof me.type=="function"&&me.__k===we.__k?me.__d=_e=A(me,_e,P):_e=N(P,me,we,Je,ye,_e),typeof B.type=="function"&&(B.__d=_e)):_e&&we.__e==_e&&_e.parentNode!=P&&(_e=w(we))}for(B.__e=$e,re=ct;re--;)Je[re]!=null&&(typeof B.type=="function"&&Je[re].__e!=null&&Je[re].__e==B.__d&&(B.__d=w(G,re+1)),W(Je[re],Je[re]));if(Fe)for(re=0;re<Fe.length;re++)j(Fe[re],Fe[++re],Fe[++re])}function A(P,O,B){for(var G,Y=P.__k,H=0;Y&&H<Y.length;H++)(G=Y[H])&&(G.__=P,O=typeof G.type=="function"?A(G,O,B):N(B,G,G,Y,G.__e,O));return O}function N(P,O,B,G,Y,H){var te,ue,_e;if(O.__d!==void 0)te=O.__d,O.__d=void 0;else if(B==null||Y!=H||Y.parentNode==null)e:if(H==null||H.parentNode!==P)P.appendChild(Y),te=null;else{for(ue=H,_e=0;(ue=ue.nextSibling)&&_e<G.length;_e+=2)if(ue==Y)break e;P.insertBefore(Y,H),te=H}return te!==void 0?te:Y.nextSibling}function U(P,O,B){O[0]==="-"?P.setProperty(O,B):P[O]=B==null?"":typeof B!="number"||p.test(O)?B:B+"px"}function x(P,O,B,G,Y){var H;e:if(O==="style")if(typeof B=="string")P.style.cssText=B;else{if(typeof G=="string"&&(P.style.cssText=G=""),G)for(O in G)B&&O in B||U(P.style,O,"");if(B)for(O in B)G&&B[O]===G[O]||U(P.style,O,B[O])}else if(O[0]==="o"&&O[1]==="n")H=O!==(O=O.replace(/Capture$/,"")),O=O.toLowerCase()in P?O.toLowerCase().slice(2):O.slice(2),P.l||(P.l={}),P.l[O+H]=B,B?G||P.addEventListener(O,H?R:M,H):P.removeEventListener(O,H?R:M,H);else if(O!=="dangerouslySetInnerHTML"){if(Y)O=O.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(O!=="href"&&O!=="list"&&O!=="form"&&O!=="tabIndex"&&O!=="download"&&O in P)try{P[O]=B??"";break e}catch{}typeof B=="function"||(B!=null&&(B!==!1||O[0]==="a"&&O[1]==="r")?P.setAttribute(O,B):P.removeAttribute(O))}}function M(P){this.l[P.type+!1](o.event?o.event(P):P)}function R(P){this.l[P.type+!0](o.event?o.event(P):P)}function L(P,O,B,G,Y,H,te,ue,_e){var J,re,pe,we,me,ye,$e,Fe,Je,ct,mt,K,X,fe=O.type;if(O.constructor!==void 0)return null;B.__h!=null&&(_e=B.__h,ue=O.__e=B.__e,O.__h=null,H=[ue]),(J=o.__b)&&J(O);try{e:if(typeof fe=="function"){if(Fe=O.props,Je=(J=fe.contextType)&&G[J.__c],ct=J?Je?Je.props.value:J.__:G,B.__c?$e=(re=O.__c=B.__c).__=re.__E:("prototype"in fe&&fe.prototype.render?O.__c=re=new fe(Fe,ct):(O.__c=re=new b(Fe,ct),re.constructor=fe,re.render=D),Je&&Je.sub(re),re.props=Fe,re.state||(re.state={}),re.context=ct,re.__n=G,pe=re.__d=!0,re.__h=[]),re.__s==null&&(re.__s=re.state),fe.getDerivedStateFromProps!=null&&(re.__s==re.state&&(re.__s=v({},re.__s)),v(re.__s,fe.getDerivedStateFromProps(Fe,re.__s))),we=re.props,me=re.state,pe)fe.getDerivedStateFromProps==null&&re.componentWillMount!=null&&re.componentWillMount(),re.componentDidMount!=null&&re.__h.push(re.componentDidMount);else{if(fe.getDerivedStateFromProps==null&&Fe!==we&&re.componentWillReceiveProps!=null&&re.componentWillReceiveProps(Fe,ct),!re.__e&&re.shouldComponentUpdate!=null&&re.shouldComponentUpdate(Fe,re.__s,ct)===!1||O.__v===B.__v){re.props=Fe,re.state=re.__s,O.__v!==B.__v&&(re.__d=!1),re.__v=O,O.__e=B.__e,O.__k=B.__k,O.__k.forEach(function(Pe){Pe&&(Pe.__=O)}),re.__h.length&&te.push(re);break e}re.componentWillUpdate!=null&&re.componentWillUpdate(Fe,re.__s,ct),re.componentDidUpdate!=null&&re.__h.push(function(){re.componentDidUpdate(we,me,ye)})}if(re.context=ct,re.props=Fe,re.__v=O,re.__P=P,mt=o.__r,K=0,"prototype"in fe&&fe.prototype.render)re.state=re.__s,re.__d=!1,mt&&mt(O),J=re.render(re.props,re.state,re.context);else do re.__d=!1,mt&&mt(O),J=re.render(re.props,re.state,re.context),re.state=re.__s;while(re.__d&&++K<25);re.state=re.__s,re.getChildContext!=null&&(G=v(v({},G),re.getChildContext())),pe||re.getSnapshotBeforeUpdate==null||(ye=re.getSnapshotBeforeUpdate(we,me)),X=J!=null&&J.type===_&&J.key==null?J.props.children:J,S(P,Array.isArray(X)?X:[X],O,B,G,Y,H,te,ue,_e),re.base=O.__e,O.__h=null,re.__h.length&&te.push(re),$e&&(re.__E=re.__=null),re.__e=!1}else H==null&&O.__v===B.__v?(O.__k=B.__k,O.__e=B.__e):O.__e=q(B.__e,O,B,G,Y,H,te,_e);(J=o.diffed)&&J(O)}catch(Pe){O.__v=null,(_e||H!=null)&&(O.__e=ue,O.__h=!!_e,H[H.indexOf(ue)]=null),o.__e(Pe,O,B)}}function F(P,O){o.__c&&o.__c(O,P),P.some(function(B){try{P=B.__h,B.__h=[],P.some(function(G){G.call(B)})}catch(G){o.__e(G,B.__v)}})}function q(P,O,B,G,Y,H,te,ue){var _e,J,re,pe=B.props,we=O.props,me=O.type,ye=0;if(me==="svg"&&(Y=!0),H!=null){for(;ye<H.length;ye++)if((_e=H[ye])&&"setAttribute"in _e==!!me&&(me?_e.localName===me:_e.nodeType===3)){P=_e,H[ye]=null;break}}if(P==null){if(me===null)return document.createTextNode(we);P=Y?document.createElementNS("http://www.w3.org/2000/svg",me):document.createElement(me,we.is&&we),H=null,ue=!1}if(me===null)pe===we||ue&&P.data===we||(P.data=we);else{if(H=H&&r.call(P.childNodes),J=(pe=B.props||s).dangerouslySetInnerHTML,re=we.dangerouslySetInnerHTML,!ue){if(H!=null)for(pe={},ye=0;ye<P.attributes.length;ye++)pe[P.attributes[ye].name]=P.attributes[ye].value;(re||J)&&(re&&(J&&re.__html==J.__html||re.__html===P.innerHTML)||(P.innerHTML=re&&re.__html||""))}if(function($e,Fe,Je,ct,mt){var K;for(K in Je)K==="children"||K==="key"||K in Fe||x($e,K,null,Je[K],ct);for(K in Fe)mt&&typeof Fe[K]!="function"||K==="children"||K==="key"||K==="value"||K==="checked"||Je[K]===Fe[K]||x($e,K,Fe[K],Je[K],ct)}(P,we,pe,Y,ue),re)O.__k=[];else if(ye=O.props.children,S(P,Array.isArray(ye)?ye:[ye],O,B,G,Y&&me!=="foreignObject",H,te,H?H[0]:B.__k&&w(B,0),ue),H!=null)for(ye=H.length;ye--;)H[ye]!=null&&g(H[ye]);ue||("value"in we&&(ye=we.value)!==void 0&&(ye!==P.value||me==="progress"&&!ye||me==="option"&&ye!==pe.value)&&x(P,"value",ye,pe.value,!1),"checked"in we&&(ye=we.checked)!==void 0&&ye!==P.checked&&x(P,"checked",ye,pe.checked,!1))}return P}function j(P,O,B){try{typeof P=="function"?P(O):P.current=O}catch(G){o.__e(G,B)}}function W(P,O,B){var G,Y;if(o.unmount&&o.unmount(P),(G=P.ref)&&(G.current&&G.current!==P.__e||j(G,null,O)),(G=P.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(H){o.__e(H,O)}G.base=G.__P=null}if(G=P.__k)for(Y=0;Y<G.length;Y++)G[Y]&&W(G[Y],O,typeof P.type!="function");B||P.__e==null||g(P.__e),P.__e=P.__d=void 0}function D(P,O,B){return this.constructor(P,B)}function C(P,O,B){var G,Y,H;o.__&&o.__(P,O),Y=(G=typeof B=="function")?null:B&&B.__k||O.__k,H=[],L(O,P=(!G&&B||O).__k=m(_,null,[P]),Y||s,s,O.ownerSVGElement!==void 0,!G&&B?[B]:Y?null:O.firstChild?r.call(O.childNodes):null,H,!G&&B?B:Y?Y.__e:O.firstChild,G),F(H,P)}r=f.slice,o={__e:function(P,O,B,G){for(var Y,H,te;O=O.__;)if((Y=O.__c)&&!Y.__)try{if((H=Y.constructor)&&H.getDerivedStateFromError!=null&&(Y.setState(H.getDerivedStateFromError(P)),te=Y.__d),Y.componentDidCatch!=null&&(Y.componentDidCatch(P,G||{}),te=Y.__d),te)return Y.__E=Y}catch(ue){P=ue}throw P}},a=0,c=function(P){return P!=null&&P.constructor===void 0},b.prototype.setState=function(P,O){var B;B=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=v({},this.state),typeof P=="function"&&(P=P(v({},B),this.props)),P&&v(B,P),P!=null&&this.__v&&(O&&this.__h.push(O),E(this))},b.prototype.forceUpdate=function(P){this.__v&&(this.__e=!0,P&&this.__h.push(P),E(this))},b.prototype.render=_,u=[],k.__r=0,d=0,n.render=C,n.hydrate=function P(O,B){C(O,B,P)},n.createElement=m,n.h=m,n.Fragment=_,n.createRef=function(){return{current:null}},n.isValidElement=c,n.Component=b,n.cloneElement=function(P,O,B){var G,Y,H,te=v({},P.props);for(H in O)H=="key"?G=O[H]:H=="ref"?Y=O[H]:te[H]=O[H];return arguments.length>2&&(te.children=arguments.length>3?r.call(arguments,2):B),y(P.type,te,G||P.key,Y||P.ref,null)},n.createContext=function(P,O){var B={__c:O="__cC"+d++,__:P,Consumer:function(G,Y){return G.children(Y)},Provider:function(G){var Y,H;return this.getChildContext||(Y=[],(H={})[O]=this,this.getChildContext=function(){return H},this.shouldComponentUpdate=function(te){this.props.value!==te.value&&Y.some(E)},this.sub=function(te){Y.push(te);var ue=te.componentWillUnmount;te.componentWillUnmount=function(){Y.splice(Y.indexOf(te),1),ue&&ue.call(te)}}),G.children}};return B.Provider.__=B.Consumer.contextType=B},n.toChildArray=function P(O,B){return B=B||[],O==null||typeof O=="boolean"||(Array.isArray(O)?O.some(function(G){P(G,B)}):B.push(O)),B},n.options=o},{}],126:[function(e,i,n){var r,o,a,c,u=e("preact"),l=0,d=[],s=[],f=u.options.__b,p=u.options.__r,v=u.options.diffed,g=u.options.__c,m=u.options.unmount;function y(x,M){u.options.__h&&u.options.__h(o,x,l||M),l=0;var R=o.__H||(o.__H={__:[],__h:[]});return x>=R.__.length&&R.__.push({__V:s}),R.__[x]}function _(x){return l=1,b(U,x)}function b(x,M,R){var L=y(r++,2);return L.t=x,L.__c||(L.__=[R?R(M):U(void 0,M),function(F){var q=L.t(L.__[0],F);L.__[0]!==q&&(L.__=[q,L.__[1]],L.__c.setState({}))}],L.__c=o),L.__}function w(x,M){var R=y(r++,4);!u.options.__s&&N(R.__H,M)&&(R.__=x,R.u=M,o.__h.push(R))}function T(x,M){var R=y(r++,7);return N(R.__H,M)?(R.__V=x(),R.u=M,R.__h=x,R.__V):R.__}function E(){for(var x;x=d.shift();)if(x.__P)try{x.__H.__h.forEach(S),x.__H.__h.forEach(A),x.__H.__h=[]}catch(M){x.__H.__h=[],u.options.__e(M,x.__v)}}u.options.__b=function(x){o=null,f&&f(x)},u.options.__r=function(x){p&&p(x),r=0;var M=(o=x.__c).__H;M&&(a===o?(M.__h=[],o.__h=[],M.__.forEach(function(R){R.__V=s,R.u=void 0})):(M.__h.forEach(S),M.__h.forEach(A),M.__h=[])),a=o},u.options.diffed=function(x){v&&v(x);var M=x.__c;M&&M.__H&&(M.__H.__h.length&&(d.push(M)!==1&&c===u.options.requestAnimationFrame||((c=u.options.requestAnimationFrame)||function(R){var L,F=function(){clearTimeout(q),k&&cancelAnimationFrame(L),setTimeout(R)},q=setTimeout(F,100);k&&(L=requestAnimationFrame(F))})(E)),M.__H.__.forEach(function(R){R.u&&(R.__H=R.u),R.__V!==s&&(R.__=R.__V),R.u=void 0,R.__V=s})),a=o=null},u.options.__c=function(x,M){M.some(function(R){try{R.__h.forEach(S),R.__h=R.__h.filter(function(L){return!L.__||A(L)})}catch(L){M.some(function(F){F.__h&&(F.__h=[])}),M=[],u.options.__e(L,R.__v)}}),g&&g(x,M)},u.options.unmount=function(x){m&&m(x);var M,R=x.__c;R&&R.__H&&(R.__H.__.forEach(function(L){try{S(L)}catch(F){M=F}}),M&&u.options.__e(M,R.__v))};var k=typeof requestAnimationFrame=="function";function S(x){var M=o,R=x.__c;typeof R=="function"&&(x.__c=void 0,R()),o=M}function A(x){var M=o;x.__c=x.__(),o=M}function N(x,M){return!x||x.length!==M.length||M.some(function(R,L){return R!==x[L]})}function U(x,M){return typeof M=="function"?M(x):M}n.useState=_,n.useReducer=b,n.useEffect=function(x,M){var R=y(r++,3);!u.options.__s&&N(R.__H,M)&&(R.__=x,R.u=M,o.__H.__h.push(R))},n.useLayoutEffect=w,n.useRef=function(x){return l=5,T(function(){return{current:x}},[])},n.useImperativeHandle=function(x,M,R){l=6,w(function(){return typeof x=="function"?(x(M()),function(){return x(null)}):x?(x.current=M(),function(){return x.current=null}):void 0},R==null?R:R.concat(x))},n.useMemo=T,n.useCallback=function(x,M){return l=8,T(function(){return x},M)},n.useContext=function(x){var M=o.context[x.__c],R=y(r++,9);return R.c=x,M?(R.__==null&&(R.__=!0,M.sub(o)),M.props.value):x.__},n.useDebugValue=function(x,M){u.options.useDebugValue&&u.options.useDebugValue(M?M(x):x)},n.useErrorBoundary=function(x){var M=y(r++,10),R=_();return M.__=x,o.componentDidCatch||(o.componentDidCatch=function(L){M.__&&M.__(L),R[1](L)}),[R[0],function(){R[1](void 0)}]}},{preact:125}],127:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.getAutoRegion=void 0;const r=e("../v7/v7-config"),o=(l,d,s)=>new Promise(f=>{const p=setTimeout(()=>{console.error("Timeout while latency check for ",d),f()},s);l().then(()=>{clearTimeout(p),f()}).catch(v=>{console.error("Error while latency check for ",d,v),clearTimeout(p),f()})});async function a(l){const d=l.ok;if(d.indexOf(l.name)===-1)throw new Error("okUrl "+d+" does not contain region "+l);return(async()=>{const s=Date.now();return await fetch(d+"?time="+s,{method:"GET",mode:"cors",cache:"no-cache"}).then(f=>f.text()),Date.now()-s})()}n.getAutoRegion=async function(l){const d=[...r.awsRegions],s=(()=>{const y={};for(const{name:_}of r.awsRegions)y[_]=[];return y})(),f=[];for(const y of d){const _=async()=>{const b=y.name;for(let w=0;w<5;++w)s[b].push(await a(y)),l(b+"#"+(w+1)+" ("+s[b][0]+" ms)")};f.push(o(_,y.name,15e3))}await Promise.all(f);try{const y=/execute-api\.([^.]+)\.amazonaws.com\/dev\/ok/;if(typeof performance<"u"&&performance.getEntriesByType!==void 0){const _=performance.getEntriesByType("resource");for(const b of _)if(b.name!==void 0&&b.duration!==void 0){const w=y.exec(b.name);w!==null&&w[1]!==void 0&&s[w[1]].push(Math.round(b.duration))}}}catch(y){console.error("Can't use performance data",y)}let p="eu-central-1",v=-1,g="";const m={};for(const y of Object.keys(s)){const _=u(s[y]);_>0&&(v===-1||v>_)&&(p=y,v=_);const b=c(s[y]);m[y]=b,g+=(y+"         ").substring(0,14)+": ["+b.join(", ")+`]
`}return console.log(`Latency estimation:
`+g),console.log("Auto region:",p,", latency: "+v),{region:p,regionLatency:v,estimation:m}};const c=l=>l.sort((d,s)=>d-s),u=l=>l.length===0?0:c(l)[0]},{"../v7/v7-config":129,"core-js/modules/web.dom-collections.iterator.js":118}],128:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.putPersonalBundle=n.getPersonalBundleUrl=void 0;const r=e("../../../v7-services/src/personal"),o=e("../../xhr"),a=e("./v7-config");n.getPersonalBundleUrl=function(c,u,l){return(0,r.getPersonalBundleUrl)(c,u,l,void 0)},n.putPersonalBundle=async function(c,u,l,d){if(await async function(m){const y=new zip.ZipReader(new zip.Uint8ArrayReader(m),{useWebWorkers:!1}),_=await y.getEntries();let b=!0;for(const w of _)if(b=w.directory===!0,!b)break;return y.close(),b}(d))return void console.warn("Ignore empty changes archive");const f=await(0,o.postObject)(a.personalPut+"?namespace="+c+"&id="+u+"&bundleUrl="+encodeURIComponent(l));if(!f.success)throw new Error("Unable to put personal bundle");const p=JSON.parse(f.payload),v=p.signature,g=p.url;if(v["x-amz-content-sha256"]="UNSIGNED-PAYLOAD",await(0,o.send)("put",g,"text",d.buffer,void 0,v),!(await(0,o.postObject)(a.personalAcl+"?namespace="+c+"&id="+u+"&bundleUrl="+l)).success)throw new Error("Can't set ACL to personal bundle")}},{"../../../v7-services/src/personal":158,"../../xhr":157,"./v7-config":129,"core-js/modules/web.dom-collections.iterator.js":118}],129:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.awsRegions=n.checkoutEndpoint=n.checkoutCreateTokenEndpoint=n.stopIpx=n.startIpx=n.addFreeTimeTierEndpoint=n.tokeInfoGetEndpoint=n.createTokenEndpoint=n.personalAcl=n.personalPut=n.endpointBase=void 0,n.endpointBase="https://kdhkdsv558.execute-api.eu-central-1.amazonaws.com/dev",n.personalPut=n.endpointBase+"/personal/put",n.personalAcl=n.endpointBase+"/personal/acl",n.createTokenEndpoint=n.endpointBase+"/token/create",n.tokeInfoGetEndpoint=n.endpointBase+"/token/info/get",n.addFreeTimeTierEndpoint=n.endpointBase+"/token/add/free",n.startIpx=n.endpointBase+"/token/ipx/start",n.stopIpx=n.endpointBase+"/token/ipx/stop",n.checkoutCreateTokenEndpoint=n.endpointBase+"/checkout/token/create",n.checkoutEndpoint="https://js-dos.com/checkout/index.html",n.awsRegions=[{label:"US East (N. Virginia)",name:"us-east-1",ok:"https://387k8l2vgf.execute-api.us-east-1.amazonaws.com/dev/ok"},{label:"US East (Ohio)",name:"us-east-2",ok:"https://q32vlaa5ji.execute-api.us-east-2.amazonaws.com/dev/ok"},{label:"US West (N. California)",name:"us-west-1",ok:"https://zittdd8vr2.execute-api.us-west-1.amazonaws.com/dev/ok"},{label:"US West (Oregon)",name:"us-west-2",ok:"https://aw3gj5315i.execute-api.us-west-2.amazonaws.com/dev/ok"},{label:"Europe (Frankfurt)",name:"eu-central-1",ok:"https://pdxnceto92.execute-api.eu-central-1.amazonaws.com/dev/ok"},{label:"Europe (Ireland)",name:"eu-west-1",ok:"https://yjm6n35ii4.execute-api.eu-west-1.amazonaws.com/dev/ok"},{label:"Europe (London)",name:"eu-west-2",ok:"https://u8k6qhll5d.execute-api.eu-west-2.amazonaws.com/dev/ok"},{label:"Europe (Milan)",name:"eu-south-1",ok:"https://hn4uxbiro0.execute-api.eu-south-1.amazonaws.com/dev/ok"},{label:"Europe (Paris)",name:"eu-west-3",ok:"https://oce5khcznd.execute-api.eu-west-3.amazonaws.com/dev/ok"},{label:"Europe (Stockholm)",name:"eu-north-1",ok:"https://f3j2j43580.execute-api.eu-north-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Hong Kong)",name:"ap-east-1",ok:"https://2dji6qhipb.execute-api.ap-east-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Mumbai)",name:"ap-south-1",ok:"https://0htlj8u1m9.execute-api.ap-south-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Osaka)",name:"ap-northeast-3",ok:"https://4z9rh02y37.execute-api.ap-northeast-3.amazonaws.com/dev/ok"},{label:"Asia Pacific (Seoul)",name:"ap-northeast-2",ok:"https://dv8crqb5j6.execute-api.ap-northeast-2.amazonaws.com/dev/ok"},{label:"Asia Pacific (Singapore)",name:"ap-southeast-1",ok:"https://e0w35dr520.execute-api.ap-southeast-1.amazonaws.com/dev/ok"},{label:"Asia Pacific (Sydney)",name:"ap-southeast-2",ok:"https://a2bnpow0ul.execute-api.ap-southeast-2.amazonaws.com/dev/ok"},{label:"Asia Pacific (Tokyo)",name:"ap-northeast-1",ok:"https://snvzlstk05.execute-api.ap-northeast-1.amazonaws.com/dev/ok"},{label:"Canada",name:"ca-central-1",ok:"https://wqwl5he8y7.execute-api.ca-central-1.amazonaws.com/dev/ok"},{label:"Middle East (Bahrain)",name:"me-south-1",ok:"https://g480v58gnk.execute-api.me-south-1.amazonaws.com/dev/ok"},{label:"South America (São Paulo)",name:"sa-east-1",ok:"https://wvhym3rtc1.execute-api.sa-east-1.amazonaws.com/dev/ok"},{label:"Africa (Cape Town)",name:"af-south-1",ok:"https://r0atydfi7k.execute-api.af-south-1.amazonaws.com/dev/ok"}]},{}],130:[function(e,i,n){var r,o,a,c,u;function l(g,m){return m||(m=g.slice(0)),Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(m)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.ActionBar=void 0;const d=e("../dom"),s=e("../icons"),f=e("./controls");function p(g){return g.options().noSocialLinks===!0||g.options().noSideBar!==!0?null:(0,d.html)(o||(o=l([`
        <div class="h-5 w-5 my-4 text-pink-400 cursor-pointer" onClick=`,`>
            <`,` class="h-5 w-5" />
        </div>
    `])),function(){g.options().windowOpen("https://dos.zone/","_blank")},s.Icons.Plus)}function v(g){if(g.options().noSideBar===!0)return null;function m(){g.sideBar?g.closeSideBar():g.openSideBar()}return g.options().withNetworkingApi!==!0?(0,d.html)(a||(a=l([`
        <div class="h-6 w-6 my-4 text-gray-600 cursor-pointer" onClick=`,`>
            <`,` class="h-6 w-6" />
        </div>
    `])),m,s.Icons.DotsHorizontal):g.ipxConnected?(0,d.html)(c||(c=l([`
        <div class="h-6 w-6 my-4 text-green-400 cursor-pointer" onClick=`,`>
            <`,` class="h-6 w-6" />
        </div>
    `])),m,s.Icons.Online):(0,d.html)(u||(u=l([`
            <div class="h-6 w-6 my-4 relative text-red-800 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
                <span class="animate-ping absolute inline-flex top-0 left-0
                    h-full w-full rounded-full bg-red-400 opacity-75"></span>
            </div>
        `])),m,s.Icons.Offline)}n.ActionBar=function(g){if(!g.actionBar)return null;const m=g.options().noSideBar===!0&&g.options().noSocialLinks===!0;return(0,d.html)(r||(r=l([`
    <div class="bg-gray-200 shadow w-10 h-full overflow-hidden flex flex-col items-center">
        <`," ...",` />
        <`," ...",` />
        <`,` column="true" class="flex-grow 
            `,`" 
            portal=`," ...",` />
    </div>
    `])),v,g,p,g,f.Controls,m?"":" border-t-2 border-gray-400",!0,g)}},{"../dom":151,"../icons":153,"./controls":134}],131:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.ActionHide=void 0;const o=e("../dom"),a=e("../icons");n.ActionHide=function(c){return(0,o.html)(r||(u=[`
    <div class="filter transition-opacity duration-1000
                        bg-gray-200 `,`
                        w-5 h-12
                        rounded-r-md cursor-pointer" onClick=`,`>
        <div class="h-4 w-4 my-4">
            <`,` class="h-4 w-4" />
        </div>
    </div>
    `],l||(l=u.slice(0)),r=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(l)}}))),c.class,()=>c.setActionBar(!c.actionBar),c.actionBar?a.Icons.ChevronLeft:a.Icons.ChevronRight);var u,l}},{"../dom":151,"../icons":153}],132:[function(e,i,n){var r;e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.ActionSaveOrExit=void 0;const o=e("preact/hooks"),a=e("../dom"),c=e("../icons");n.ActionSaveOrExit=function(u){const l=u.options().onExit,[d,s]=(0,o.useState)(!1),[f,p]=(0,o.useState)(!1),v=typeof l=="function";return(0,o.useEffect)(()=>{const y=u.options().preventUnload;if(!f&&v&&y!==!1)return window.addEventListener("beforeunload",_),()=>{window.removeEventListener("beforeunload",_)};function _(b){if(u.player().ciPromise===void 0)return;const w=v?"Please use close button to save progress before closing!":"Please use save button to save progress before closing!";setTimeout(()=>{u.player().layers.notyf.error(w),s(!0)},16),b.preventDefault(),b.returnValue=w}},[s,u.player,f,l,v]),f?null:(0,a.html)(r||(g=[`
    <div class="`,` flex items-center justify-center 
        filter transition-opacity duration-1000
        bg-gray-200 `,`
        cursor-pointer" onClick=`,`>
        <div class="h-6 w-6">
            <`,` class="h-6 w-6" />
        </div>
    </div>
    `],m||(m=g.slice(0)),r=Object.freeze(Object.defineProperties(g,{raw:{value:Object.freeze(m)}}))),u.class?u.class:"",d?" text-red-500 animate-pulse":"",async function(){try{s(!1),p(!0);const b=u.player();b.layers.notyf.success("Saving, please wait...");try{await b.layers.save()}catch(w){console.error(w),b.layers.notyf.error(w.message)}if(v){try{var y,_;await((y=(_=u.options()).onBeforeExit)===null||y===void 0?void 0:y.call(_)),await b.stop()}catch(w){console.error(w),b.layers.notyf.error(w.message)}l()}}finally{p(!1)}},v?c.Icons.XCircle:c.Icons.FloppyDisk);var g,m}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],133:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.Client=void 0;const c=e("preact/hooks"),u=e("../dom"),l=e("../icons"),d=e("../dom");n.Client=function(s){const[f,p]=(0,c.useState)(!1);if(s.requestClientId===void 0&&s.clientId===null)return null;if(s.clientId===null){const g=()=>{s.requestClientId!==void 0&&(p(!0),s.requestClientId(!0).then(m=>{p(!1),s.setClientId(m)}).catch(m=>{p(!1),console.error(m)}))};return(0,u.html)(r||(r=a([`
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
        `])),s.class,l.Icons.UserCircle,f?" text-gray-400 border-gray-400":"text-blue-400 border-blue-400",g)}const v=s.clientId.id;return(0,u.html)(o||(o=a([`
        <div class="flex flex-row justify-center `,`">
            <div class="h-6 w-6 text-green-400 mr-2">
                <`,` class="h-6 w-6" />
            </div>
            <div class="flex-shrink overflow-hidden overflow-ellipsis">`,`</div>
            <div class="h-6 w-6 ml-2 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
        </div>
    `])),s.class,l.Icons.UserCircle,v,async function(){s.closeSideBar();const g=s.player();try{await async function(m){if(!m.ciPromise)return;const y=await m.ciPromise,_=await y.persist();(0,d.downloadFile)(_,"saves.zip","application/zip")}(g)}catch(m){g.layers.notyf.error("Unexpected error"),console.error(m)}},l.Icons.Download)}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],134:[function(e,i,n){var r,o,a;function c(p,v){return v||(v=p.slice(0)),Object.freeze(Object.defineProperties(p,{raw:{value:Object.freeze(v)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.Controls=void 0;const u=e("preact/hooks"),l=e("../dom"),d=e("../icons");function s(p){const[v,g]=(0,u.useState)(!1);async function m(y,_){y.stopPropagation(),await p.setAutolock(_),v&&g(!1)}return(0,l.html)(o||(o=c([`
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
    `])),async function(y){y.target.classList.contains("sensitivity")||(p.portal?g(!v):await async function(_){await m(_,!p.autolock)}(y),y.preventDefault(),y.stopPropagation())},p.autolock?d.Icons.CursorClick:d.Icons.Cursor,p.portal?"":"hidden",()=>{},v?"":"hidden",p.autolock?"text-black":"text-green-400",y=>m(y,!1),d.Icons.Cursor,p.autolock?"text-green-400":"text-black",y=>m(y,!0),d.Icons.CursorClick)}function f(p){const[v,g]=(0,u.useState)(!1);return(0,l.html)(a||(a=c([`
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
    `])),function(){p.portal?g(!v):p.setMobileControls(!p.mobileControls)},p.mirroredControls?d.Icons.SwithcHorizontal:p.mobileControls?d.Icons.Mobile:d.Icons.EyeOff,v?"":"hidden",()=>{},p.mobileControls||p.mirroredControls?"text-black":"text-green-400",async function(m){await p.setMirroredControls(!1),await p.setMobileControls(!1),g(!1),m.stopPropagation()},d.Icons.EyeOff,!p.mirroredControls&&p.mobileControls?"text-green-400":"text-black",async function(m){await p.setMobileControls(!0),await p.setMirroredControls(!1),g(!1),m.stopPropagation()},d.Icons.Mobile,p.mirroredControls?"text-green-400":"text-black",async function(m){await p.setMirroredControls(!0),g(!1),m.stopPropagation()},d.Icons.SwithcHorizontal)}n.Controls=function(p){return(0,l.html)(r||(r=c([`
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
    `])),p.column?" flex-col":"flex-row",p.class,s,p,f,p,p.pause?" text-red-400 animate-pulse":"font-bold",function(){p.setPause(!p.pause),p.closeSideBar()},p.pause?d.Icons.Play:d.Icons.Pause,p.mute?" text-green-400":"",function(){p.setMute(!p.mute),p.closeSideBar()},p.mute?d.Icons.VolumeOff:d.Icons.VolumeUp,p.keyboard?" text-green-400":"",function(){p.toggleKeyboard(),p.closeSideBar()},d.Icons.PencilAlt,p.fullscreen?" text-green-400":"",p.options().noFullscreen===!0?"hidden":"",function(){p.toggleFullscreen(),p.closeSideBar()},d.Icons.ArrowsExpand)}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],135:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarCpuControl=void 0;const o=e("../dom"),a=e("../icons"),c=e("./horizontal-slider");n.SideBarCpuControl=function(u){return(0,o.html)(r||(l=[`
        <`," minValue="," maxValue=",`
            maxLabel="max"
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `],d||(d=l.slice(0)),r=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(d)}}))),c.HorizontalSlider,100,5e3,5e3,s=>{},a.Icons.VolumeUp,()=>{},()=>{});var l,d}},{"../dom":151,"../icons":153,"./horizontal-slider":136}],136:[function(e,i,n){var r;e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.HorizontalSlider=void 0;const o=e("preact/hooks"),a=e("../dom");n.HorizontalSlider=function(c){const{minValue:u,maxValue:l,initialValue:d,onChange:s,icon:f}=c,p=l-u,v=(0,o.useRef)(null),[g,m]=(0,o.useState)(d),[y,_]=(0,o.useState)(0);(0,o.useEffect)(()=>{if(v===null||v.current===null)return;let k=!1;const S=v.current,A=M=>{const R=S.getBoundingClientRect(),L=(M.clientX-R.left)/R.width;return Math.max(Math.min(1,L),0)*p},N=M=>{M.target!==S||k||(k=!0,_(80),m(A(M)),M.stopPropagation(),M.preventDefault())},U=M=>{if(!k)return;const R=A(M);m(R),s(R),M.stopPropagation(),M.preventDefault()},x=M=>{if(!k)return;k=!1,_(0);const R=A(M);m(R),s(R),M.stopPropagation(),M.preventDefault()};return window.addEventListener("pointerdown",N),window.addEventListener("pointermove",U),window.addEventListener("pointerup",x),window.addEventListener("pointercancel",x),S.addEventListener("pointerup",x),S.addEventListener("pointercancel",x),c.registerListner(m),()=>{c.removeListener(m),window.removeEventListener("pointerdown",N),window.removeEventListener("pointermove",U),window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),S.removeEventListener("pointerup",x),S.removeEventListener("pointercancel",x)}},[v]);const b=Math.max(0,Math.min(100,Math.round(g/p*100)))+"%";let w=Math.round(10*(u+g))/10+"";return u+g===l&&c.maxLabel!==void 0&&(w=c.maxLabel),(0,a.html)(r||(T=[`
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
    `],E||(E=T.slice(0)),r=Object.freeze(Object.defineProperties(T,{raw:{value:Object.freeze(E)}}))),f,v,"pointer-events-none relative sensitivity rounded-2xl bg-gray-400 h-2 w-full"+(c.class?c.class:""),{left:b},"opacity-"+y,w);var T,E}},{"../dom":151,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],137:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.Region=void 0;const o=e("../dom"),a=e("../icons");n.Region=function(c){let u=c.region;return u!==null&&c.latencyInfo!==null&&(u+=" ("+c.latencyInfo.regionLatency+" ms)"),(0,o.html)(r||(l=[`
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
    `],d||(d=l.slice(0)),r=Object.freeze(Object.defineProperties(l,{raw:{value:Object.freeze(d)}}))),c.class,u||c.estimatingRegion||"Connecting...",c.region===null?"animate-reverse-spin":"cursor-pointer",function(){c.region!==null&&c.setRegion(null)},a.Icons.Refresh);var l,d}},{"../dom":151,"../icons":153}],138:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarScaleControl=n.ActionBarScaleControl=void 0;const c=e("../dom"),u=e("../icons"),l=e("./vertical-slider"),d=e("./horizontal-slider");n.ActionBarScaleControl=function(s){return s.mobileControls||s.mirroredControls?(0,c.html)(r||(r=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),l.VerticalSlider,.8,2.5,s.player().scaleControls,f=>s.player().setScaleControls(f),s.mirroredControls?u.Icons.SwithcHorizontal:u.Icons.Mobile,s.player().registerOnScaleChanged,s.player().removeOnScaleChanged):null},n.SideBarScaleControl=function(s){return(0,c.html)(o||(o=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),d.HorizontalSlider,.8,2.5,s.player().scaleControls,f=>s.player().setScaleControls(f),s.mirroredControls?u.Icons.SwithcHorizontal:u.Icons.Mobile,s.player().registerOnScaleChanged,s.player().removeOnScaleChanged)}},{"../dom":151,"../icons":153,"./horizontal-slider":136,"./vertical-slider":149}],139:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarSensitivityControl=n.ActionBarSensitivityControl=void 0;const c=e("../dom"),u=e("../icons"),l=e("./vertical-slider"),d=e("./horizontal-slider");n.ActionBarSensitivityControl=function(s){return s.autolock?(0,c.html)(r||(r=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),l.VerticalSlider,.1,4,s.player().sensitivity,f=>s.player().setSensitivity(f),u.Icons.CursorClick,s.player().registerOnSensitivityChanged,s.player().removeOnSensitivityChanged):null},n.SideBarSensitivityControl=function(s){return(0,c.html)(o||(o=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),d.HorizontalSlider,.1,4,s.player().sensitivity,f=>s.player().setSensitivity(f),u.Icons.CursorClick,s.player().registerOnSensitivityChanged,s.player().removeOnSensitivityChanged)}},{"../dom":151,"../icons":153,"./horizontal-slider":136,"./vertical-slider":149}],140:[function(e,i,n){var r,o,a;function c(m,y){return y||(y=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(y)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBar=void 0;const u=e("preact/hooks"),l=e("../dom"),d=e("../icons"),s=e("./sidebar/main"),f=e("./sidebar/latency-info"),p=e("./sidebar/networking"),v=e("../backend/v7/latency");function g(m){if(m.options().noSocialLinks===!0)return null;function y(){m.options().windowOpen("https://discord.com/invite/hMVYEbG","_blank")}function _(){m.options().windowOpen("https://t.me/doszonechat","_blank")}return m.sideBarPage==="networking"?(0,l.html)(o||(o=c([`
        <div class="flex flex-row justify-around items-center">
            <div class="font-bold text-purple-600">Matchmaking:</div>
            <div class="h-6 w-6 text-gray-600 cursor-pointer" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
            <div class="h-4 w-4 mt-0.5 text-gray-600 cursor-poiner" onClick=`,`>
                <`,` class="h-4 w-4" />
            </div>
        </div>
    `])),y,d.Icons.Discord,_,d.Icons.Telegram):(0,l.html)(a||(a=c([`
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
    `])),y,d.Icons.Discord,_,d.Icons.Telegram,function(){m.options().windowOpen("https://twitter.com/intent/user?screen_name=doszone_db","_blank")},d.Icons.Twitter,function(){m.options().windowOpen("https://dos.zone/donate/","_blank")},d.Icons.CurrencyDollar)}n.SideBar=function(m){if(!m.sideBar)return null;(0,u.useEffect)(()=>{m.options().withNetworkingApi&&m.region===null&&(0,v.getAutoRegion)(m.setEstimatingRegion).then(_=>{m.setLatencyInfo(_),m.setRegion(_.region)}).catch(console.error)},[m.region]);const y=m.sideBarPage==="networking";return(0,l.html)(r||(r=c([`
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
    `])),function(){m.sideBarPage==="main"?m.closeSideBar():m.setSideBarPage("main")},m.sideBarPage==="main"?d.Icons.XCircle:d.Icons.ArrowsCircleLeft,y?"text-purple-400":"",function(){y?m.options().windowOpen("https://youtu.be/XEoWLQmU168","_blank"):(m.setShowTips(!0),m.closeSideBar())},d.Icons.QuestionMarkCircle,s.Main,m,f.LatencyInfo,m,p.Networking,m,g,m)}},{"../backend/v7/latency":127,"../dom":151,"../icons":153,"./sidebar/latency-info":141,"./sidebar/main":142,"./sidebar/networking":143,"preact/hooks":126}],141:[function(e,i,n){var r,o,a,c,u;function l(f,p){return p||(p=f.slice(0)),Object.freeze(Object.defineProperties(f,{raw:{value:Object.freeze(p)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.LatencyInfo=void 0;const d=e("../../dom"),s=e("../../icons");n.LatencyInfo=function(f){if(f.latencyInfo===null)return null;const p=g=>{f.setSideBarPage("latency-info"),g.stopPropagation(),g.preventDefault()};if(f.asButton===!0&&f.sideBarPage==="main")return(0,d.html)(r||(r=l([`
        <div class="flex flex-row justify-between items-center cursor-pointer `,` my-2"
            onClick=`,`>
            <div class="">
                Show latency
            </div>
            <div>
                <`,` class="text-green-400 h-6 -w-6" />
            </div>
        </div>
        `])),f.class,p,s.Icons.ArrowsCircleRight);if(f.sideBarPage!=="latency-info")return null;const v=[];for(const g of Object.keys(f.latencyInfo.estimation)){const m=[];m.push((0,d.html)(o||(o=l(['<div class="text-xs w-24 font-bold whitespace-nowrap break-words">',"</div>"])),g));for(let y=0;y<4;++y)m.push((0,d.html)(a||(a=l([`
                <div class="text-xs text-gray-600 text-right">
                    `,`
                </div>
            `])),f.latencyInfo.estimation[g][y]));v.push((0,d.html)(c||(c=l(['<div class="flex flex-row flex-wrap justify-between">',"</div>"])),m))}return(0,d.html)(u||(u=l([`
        <div class="sidebar-header">Latency</div>
        <div class="flex flex-col">
            `,`
        </div>
    `])),v)}},{"../../dom":151,"../../icons":153,"core-js/modules/web.dom-collections.iterator.js":118}],142:[function(e,i,n){var r,o,a,c,u,l,d;function s(k,S){return S||(S=k.slice(0)),Object.freeze(Object.defineProperties(k,{raw:{value:Object.freeze(S)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.Main=void 0;const f=e("../../dom"),p=e("../client"),v=e("../controls"),g=e("../region"),m=e("./latency-info"),y=e("../../icons"),_=(e("../cpu-control"),e("../scale-control")),b=e("../volume-control"),w=e("../sensitivity-control");function T(k){return(0,f.html)(l||(l=s([`<div class="flex flex-row items-center justify-center my-2">
        <div class="w-20 text-sm overflow-hidden overflow-ellipsis">`,`</div>
        <div class="flex-grow"><`," ...",` /></div>
    </div>`])),k.label,k.slideBar,k.appProps)}function E(k){return k.region===null?null:(0,f.html)(d||(d=s([`
        <div class="flex flex-row justify-between items-center cursor-pointer `,`"
                onClick=`,`>
            <div class="">
                `,`
            </div>
            <div>
                <`,` class="text-green-400 h-6 -w-6" />
            </div>
        </div>
    `])),k.class,()=>k.setSideBarPage("networking"),k.ipxConnected?"IPX [Connected]":"Configure networks",y.Icons.ArrowsCircleRight)}n.Main=function(k){if(k.sideBarPage!=="main")return null;const S=k.options().withNetworkingApi===!0;return(0,f.html)(r||(r=s([`
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
    `])),p.Client,k,v.Controls,!1,k,S&&(0,f.html)(o||(o=s(['<div class="sidebar-header mt-8">Networking</div>']))),S&&(0,f.html)(a||(a=s(["<",' class="mt-2" ...'," />"])),g.Region,k),S&&(0,f.html)(c||(c=s(["<"," ...",' class="mt-4" asButton='," />"])),m.LatencyInfo,k,!0),S&&(0,f.html)(u||(u=s(["<"," ...",' class="mt-2" />'])),E,k),!1,T,b.SideBarVolumeControl,k,T,w.SideBarSensitivityControl,k,T,_.SideBarScaleControl,k)}},{"../../dom":151,"../../icons":153,"../client":133,"../controls":134,"../cpu-control":135,"../region":137,"../scale-control":138,"../sensitivity-control":139,"../volume-control":150,"./latency-info":141}],143:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.Networking=void 0;const o=e("../../dom"),a=e("./token/token");n.Networking=function(c){return c.sideBarPage!=="networking"?null:(0,o.html)(r||(u=[`
        <`," ...",` />
    `],l||(l=u.slice(0)),r=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(l)}}))),a.TokenConfiguration,c);var u,l}},{"../../dom":151,"./token/token":146}],144:[function(e,i,n){var r,o,a,c,u;function l(m,y){return y||(y=m.slice(0)),Object.freeze(Object.defineProperties(m,{raw:{value:Object.freeze(y)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.TokenAddTime=void 0;const d=e("preact/hooks"),s=e("../../../backend/v7/v7-config"),f=e("../../../dom"),p=e("../../../icons"),v=e("../../../request"),g=1800;n.TokenAddTime=function(m){const[y,_]=(0,d.useState)(null),[b,w]=(0,d.useState)(!1),[T,E]=(0,d.useState)(g),[k,S]=(0,d.useState)(null),[A,N]=(0,d.useState)(!1),U=b||T!==g&&k===null;return(0,f.html)(r||(r=l([`
        <div class="font-bold">Add time:</div>
        `,`
        
        `,`
      
    `])),A?(0,f.html)(o||(o=l([`
            <div class="cursor-pointer underline text-green-600 font-bold" onClick=`,`>
                check payment
            </div> 
        `])),m.update):(0,f.html)(a||(a=l([`
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
        `])),b,b?"border-gray-400 disabled:bg-gray-200":"",async function(x){const M=Number.parseInt(x.currentTarget.value);try{w(!0),S(null),E(M),M!==g&&S(await async function(R,L){var F;const q=(F=L.clientId)!==null&&F!==void 0?F:L.anonymousClientId;return(await(0,v.request)(s.checkoutCreateTokenEndpoint,"POST",JSON.stringify({id:q.id,namespace:q.namespace,product:R,token:L.networkToken}))).token}("t_"+M,m))}finally{w(!1)}},g,U?p.Icons.Refresh({class:"h-6 w-6 animate-reverse-spin"}):(0,f.html)(c||(c=l([`
                    <div class="h-6 w-6 cursor-pointer text-green-400 hover:text-green-600"
                        onClick=`,`>
                        <`,` class="h-6 w-6" />
                    </div>
                `])),async function(x){if(x.stopPropagation(),!b){_(null),w(!0);try{if(T===g)await(0,v.request)(s.addFreeTimeTierEndpoint,"POST",JSON.stringify({token:m.networkToken})),m.update();else{if(k===null)throw new Error("accessToken is null");(function(M,R){R(s.checkoutEndpoint+"?token="+M,"_blank")})(k,m.options().windowOpen),setTimeout(()=>{N(!0)},300)}}catch(M){_(function(R){return R==="30-min-required"?"Only 30 minutes interval are enabled":R==="free-soft-limit"?"This token reached free time limit, please use paid time":R==="free-hard-limit"?"All free time of today is used, please use paid time":R==="not-found"?"Token not found":R==="too-early"?"You can add free time only if TTL less then 5 minutes":R}(M.message))}finally{w(!1)}}},p.Icons.Plus)),y?(0,f.html)(u||(u=l([`
            <div class="font-bold text-red-400 col-span-2">*`,`</div>
        `])),y):null)}},{"../../../backend/v7/v7-config":129,"../../../dom":151,"../../../icons":153,"../../../request":156,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],145:[function(e,i,n){var r,o,a,c;function u(v,g){return g||(g=v.slice(0)),Object.freeze(Object.defineProperties(v,{raw:{value:Object.freeze(g)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.TokenSelect=void 0;const l=e("../../../backend/v7/v7-config"),d=e("preact/hooks"),s=e("../../../request"),f=e("../../../dom"),p=e("../../../icons");n.TokenSelect=function(v){var g;const[m,y]=(0,d.useState)((g=v.networkToken)!==null&&g!==void 0?g:""),[_,b]=(0,d.useState)(null),[w,T]=(0,d.useState)(!1),E=m===v.networkToken||m==="";function k(A){var N;y(((N=A.currentTarget.value)!==null&&N!==void 0?N:"").toLowerCase().trim())}async function S(){T(!0);try{if(E)return void(v.networkToken!==null&&window.confirm("Are you sure want to create token?")!==!0||await async function(){var N;if(w||v.region===null)return void b("region is not selected");b(null),T(!0);const U=(N=v.clientId)!==null&&N!==void 0?N:v.anonymousClientId;try{const x=await(0,s.request)(l.createTokenEndpoint,"POST",JSON.stringify({namespace:U.namespace,id:U.id,region:v.region}));v.setNetworkToken(x.token)}catch(x){b(x.message)}finally{T(!1)}}());const A=m.length===0?null:m;if(A===v.networkToken)return;window.confirm(A===null?"Are you sure want to reset?":"Are you sure want to switch token?")===!0&&(A!==null&&await async function(N){await(0,s.request)(l.tokeInfoGetEndpoint+"?token="+N)}(A),v.setNetworkToken(m))}catch(A){b("Token error: "+A.message)}finally{T(!1)}}return(0,f.html)(r||(r=u([`
        <div class="font-bold">Token:</div>

        `,`
        
        `,`
    `])),w?(0,f.html)(o||(o=u([`
            <div class="col-span-2">
                <`,` class="w-6 h-6 animate-reverse-spin" />
            </div>
        `])),p.Icons.Refresh):(0,f.html)(a||(a=u([`
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
        `])),m===""?"border-red-600":"border-green-200",m,k,function(A){k(A),A.key==="Enter"&&S(),A.stopPropagation()},function(A){A.stopPropagation()},E?"text-green-400 hover:text-green-600":"",S,E?p.Icons.Plus:p.Icons.SwithcHorizontal),_?(0,f.html)(c||(c=u([`
            <div class="text-red-400 col-span-2">`,`</div>
        `])),_):null)}},{"../../../backend/v7/v7-config":129,"../../../dom":151,"../../../icons":153,"../../../request":156,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],146:[function(e,i,n){var r,o,a,c,u,l,d,s,f,p,v,g;function m(x,M){return M||(M=x.slice(0)),Object.freeze(Object.defineProperties(x,{raw:{value:Object.freeze(M)}}))}e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/es.string.replace.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.TokenConfiguration=void 0;const y=e("preact/hooks"),_=e("../../../backend/v7/v7-config"),b=e("../../../dom"),w=e("../../../icons"),T=e("../../../xhr"),E=e("../../../request"),k=e("./token-select"),S=e("./token-add-time");function A(x){const[M,R]=(0,y.useState)(x.endTime-Date.now());return(0,y.useEffect)(()=>{if(M<=0)return;const L=setInterval(()=>{const F=Math.max(0,x.endTime-Date.now());F===0&&(x.update(),clearInterval(L)),R(F)},1e4);return()=>clearInterval(L)},[x.endTime]),(0,b.html)(l||(l=m([`
        <div class="font-bold">TTL:</div>
        <div class="`,` cursor-pointer underline"
            onClick=`,`>
            `,`
        </div>
    `])),M<3e5?" text-red-400":"text-gray-400",x.update,function(L){if(L>86400){const F=Math.round(L/24/60/60*10)/10;return F+(F===1?" Day":" Days")}if(L>3600){const F=Math.round(L/60/60*10)/10;return F+(F===1?" Hour":" Hrs")}return Math.round(L/60*10)/10+" Min"}(M/1e3))}function N(x){const[M,R]=(0,y.useState)(!1),[L,F]=(0,y.useState)(null);function q(){R(!0),(0,T.postObject)(_.stopIpx+"?token=".concat(x.networkToken,"&arn=").concat(x.ipx.arn)).then(()=>{R(!1),x.ipx.setAddress(null),x.ipx.setAwaitingAddress(!1)}).catch(j=>{var W;console.error("Can't stop ipx",j),F((W=j.errorCode)!==null&&W!==void 0?W:j.message),R(!1)})}if(L!==null)return(0,b.html)(d||(d=m([`
            <div class="text-red-400 col-span-2">`,`</div>
        `])),L);if(M)return(0,b.html)(s||(s=m([`
            <`,` class="w-6 h-6 col-span-2 animate-reverse-spin" />
        `])),w.Icons.Refresh);if(x.ipx.address!==null){const j=x.ipxConnected?"Disconnect":x.ipx.awaitingConnection?"Connecting...":"Connect",W=()=>{x.ipx.awaitingConnection||function(){var D;const C=!x.ipxConnected,P=x.ipx.address;P&&((D=x.player().ciPromise)===null||D===void 0||D.then(O=>C?(x.ipx.setAwaitingConnection(!0),location.protocol==="http:"&&x.options().hardware===void 0&&P.endsWith(".jj.dos.zone")?O.networkConnect(0,"ws://"+P.substring(0,P.length-12).replace(/_/g,"."),1901):O.networkConnect(0,P,1901)):O.networkDisconnect(0)).then(()=>{x.ipx.setAwaitingConnection(!1),x.setIpxConnected(C),C&&(x.player().layers.notyf.success("Connected"),x.closeSideBar())}).catch(O=>{x.ipx.setAwaitingConnection(!1),console.error(O),F(O.message)}))}()};return(0,b.html)(f||(f=m([`
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
        `])),U,q):(0,b.html)(v||(v=m([`
        <div class="font-bold">IPX:</div>
        <div class="bg-green-200 cursor-pointer rounded uppercase text-center px-4 py-1" onClick=`,`>Start</div>
    `])),function(){R(!0),(0,T.getObject)(_.startIpx+"?token=".concat(x.networkToken)).then(j=>{R(!1),x.ipx.setArn(j.arn),x.ipx.setAwaitingAddress(!0)}).catch(j=>{var W;console.error("Can't start ipx",j),F((W=j.errorCode)!==null&&W!==void 0?W:j.message),R(!1)})})}function U(){const[x,M]=(0,y.useState)(30);return(0,y.useEffect)(()=>{if(x===0)return;const R=setTimeout(()=>{M(x-1)},1e3);return()=>clearTimeout(R)},[x]),(0,b.html)(g||(g=m([`
        <div class="text-gray-400 flex flex-row">
            <`,` class="w-6 h-6 animate-reverse-spin mr-2" />
            `,`
        </div>
    `])),w.Icons.Refresh,x>0?x+" sec":"")}n.TokenConfiguration=function(x){const[M,R]=(0,y.useState)(null),[L,F]=(0,y.useState)(!0),[q,j]=(0,y.useState)(Date.now()),[W,D]=(0,y.useState)(null),[C,P]=(0,y.useState)(null),[O,B]=(0,y.useState)(!1),[G,Y]=(0,y.useState)(!1),H={arn:W,setArn:D,address:C,setAddress:P,awaitingAddress:O,setAwaitingAddress:B,awaitingConnection:G,setAwaitingConnection:Y},te={...x,ipx:H,update:ue};async function ue(){if(D(null),P(null),B(!1),F(!0),x.networkToken===null)return R(null),void F(!1);(0,E.request)(_.tokeInfoGetEndpoint+"?token=".concat(x.networkToken)).then(J=>{R(J),F(!1),j(Date.now()+1e3*J.ttlSec),J.ipxArn!==void 0&&D(J.ipxArn),J.ipxAddress!==void 0?P(J.ipxAddress):J.ipxArn!==void 0&&B(!0)}).catch(J=>{console.error("Can't get a token",x.networkToken,J),R(null),F(!1)})}if((0,y.useEffect)(()=>{ue()},[x.networkToken]),(0,y.useEffect)(()=>{if(x.networkToken===null||q<Date.now())return;const J=setInterval(()=>{(0,E.request)(_.tokeInfoGetEndpoint+"?token=".concat(x.networkToken)).then(re=>{re.ipxArn||(re.ipxArn=null),re.ipxAddress||(re.ipxAddress=null),W===re.ipxArn?re.ipxAddress!==C&&(P(re.ipxAddress),B(!1)):ue()})},5e3);return()=>{clearInterval(J)}},[x.networkToken,q,W,C]),L)return(0,b.html)(r||(r=m([`
            <div class="sidebar-header">Configuration</div>
            <div class="grid grid-cols-2 gap-4">
                <`,` class="w-6 h-6 animate-reverse-spin" />
            </div>
    `])),w.Icons.Refresh);if(M===null)return(0,b.html)(o||(o=m([`
            <div class="sidebar-header">Configuration</div>
            <div class="grid grid-cols-2 gap-4">
                <`," ..."," networkToken=",` />
            </div>
        `])),k.TokenSelect,x,null);const _e=(0,b.html)(a||(a=m([`
        <div class="sidebar-header flex flex-row justify-center items-center">
            Configuration
            <div onClick=`,` >
                <`,` class="h-4 w-4 ml-2 cursor-pointer" />
            </div>
        </div>
    `])),ue,w.Icons.Refresh);return q<Date.now()?(0,b.html)(c||(c=m([`
            `,`
            <div class="grid grid-cols-2 gap-4">
                <`," ...",` />
                <div class="font-bold">Region:</div>
                <div class="text-gray-400">`,`</div>
                <div class="font-bold">TTL:</div>
                <div class="text-red-400">0 Min</div>
                <`," ...",` />
            </div>
        `])),_e,k.TokenSelect,x,M.region,S.TokenAddTime,te):(0,b.html)(u||(u=m([`
        `,`
        <div class="grid grid-cols-2 gap-4">
            <`," ...",` />
            <div class="font-bold">Region:</div>
            <div class="text-gray-400">`,`</div>
            <`," endTime="," update=",` />
            <`," ...",` />
            <`," ...",` />
        </div>
    `])),_e,k.TokenSelect,x,M.region,A,q,ue,S.TokenAddTime,te,N,te)}},{"../../../backend/v7/v7-config":129,"../../../dom":151,"../../../icons":153,"../../../request":156,"../../../xhr":157,"./token-add-time":144,"./token-select":145,"core-js/modules/es.string.replace.js":117,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],147:[function(e,i,n){var r;Object.defineProperty(n,"__esModule",{value:!0}),n.SyncMouseControl=void 0;const o=e("../dom"),a=e("../icons");n.SyncMouseControl=function(c){var u,l;if(!c.autolock)return(0,o.html)(r||(u=[`
        <div class="flex flex-col items-center bg-gray-200 my-2 py-2 rounded">
            <div class="text-gray-400 h-6 w-4 border-b border-gray-400">
                <`,` class="h-4 w-4" />
            </div>
            <div class="cursor-pointer h-6 w-6 mt-2" onClick=`,`>
                <`,` class="h-6 w-6" />
            </div>
        </div>
    `],l||(l=u.slice(0)),r=Object.freeze(Object.defineProperties(u,{raw:{value:Object.freeze(l)}}))),a.Icons.Cursor,function(d){var s;(s=c.player().ciPromise)===null||s===void 0||s.then(f=>{f.sendMouseSync()}),d.stopPropagation(),d.preventDefault()},a.Icons.Refresh)}},{"../dom":151,"../icons":153}],148:[function(e,i,n){var r,o,a,c,u,l,d,s;function f(_,b){return b||(b=_.slice(0)),Object.freeze(Object.defineProperties(_,{raw:{value:Object.freeze(b)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.Tips=void 0;const p=e("preact/hooks"),v=e("../dom"),g=e("../icons"),m={mouseLockMobile:{title:"Mouse lock",tip:(0,v.html)(r||(r=f([`
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
        `])),g.Icons.Cursor,g.Icons.Refresh,g.Icons.CursorClick)},mobile:{title:"Mobile Controls",tip:(0,v.html)(c||(c=f([`
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
        `])),g.Icons.Mobile,g.Icons.SwithcHorizontal,g.Icons.EyeOff)},sidebar:{title:"Sidebar",tip:(0,v.html)(u||(u=f([`
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
        `])),g.Icons.Pause,g.Icons.VolumeUp,g.Icons.PencilAlt,g.Icons.ArrowsExpand,g.Icons.DotsHorizontal)},saveLoad:{title:"Save/Load",tip:(0,v.html)(l||(l=f([`
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
        `])),g.Icons.FloppyDisk)}},y=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())?["mouseLockMobile","mobile","sidebar","saveLoad","lockSwitch"]:["mouseLockDesktop","sidebar","saveLoad","lockSwitch"];n.Tips=function(_){const b=_.showTips,[w,T]=(0,p.useState)(0);if((0,p.useEffect)(()=>{b&&T(_.player().autolock?0:1)},[b]),!b)return null;const E=m[y[w]],k=w===y.length-1;return(0,v.html)(d||(d=f([`
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
    `])),g.Icons.InformationCircle,E.title,()=>_.setShowTips(!1),g.Icons.XCircle,E.tip,function(S){k?_.setShowTips(!1):T((w+1)%y.length),S.stopPropagation(),S.preventDefault()},k?"Close":"Next",!k&&(0,v.html)(s||(s=f([`
                    <div class="h-6 w-6 cursor-pointer text-blue-900">
                        <`,` class="h-6 w-6" />
                    </div>`])),g.Icons.ArrowsCircleRight))}},{"../dom":151,"../icons":153,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],149:[function(e,i,n){var r;e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.VerticalSlider=void 0;const o=e("preact/hooks"),a=e("../dom");n.VerticalSlider=function(c){const{minValue:u,maxValue:l,initialValue:d,onChange:s,icon:f}=c,p=l-u,v=(0,o.useRef)(null),[g,m]=(0,o.useState)(d),[y,_]=(0,o.useState)(0);(0,o.useEffect)(()=>{if(v===null||v.current===null)return;let E=!1;const k=v.current,S=x=>{const M=k.getBoundingClientRect(),R=1-(x.clientY-M.top)/M.height;return Math.max(Math.min(1,R),0)*p},A=x=>{x.target!==k||E||(E=!0,_(80),m(S(x)),x.stopPropagation(),x.preventDefault())},N=x=>{if(!E)return;const M=S(x);m(M),s(M),x.stopPropagation(),x.preventDefault()},U=x=>{if(!E)return;E=!1,_(0);const M=S(x);m(M),s(M),x.stopPropagation(),x.preventDefault()};return window.addEventListener("pointerdown",A),window.addEventListener("pointermove",N),window.addEventListener("pointerup",U),window.addEventListener("pointercancel",U),k.addEventListener("pointerup",U),k.addEventListener("pointercancel",U),c.registerListner(m),()=>{c.removeListener(m),window.removeEventListener("pointerdown",A),window.removeEventListener("pointermove",N),window.removeEventListener("pointerup",U),window.removeEventListener("pointercancel",U),k.removeEventListener("pointerup",U),k.removeEventListener("pointercancel",U)}},[v]);const b=100-Math.max(0,Math.min(100,Math.round(g/p*100)))+"%";return(0,a.html)(r||(w=[`
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
    `],T||(T=w.slice(0)),r=Object.freeze(Object.defineProperties(w,{raw:{value:Object.freeze(T)}}))),f,v,"pointer-events-none relative sensitivity rounded-2xl bg-gray-400 w-2 h-full"+(c.class?c.class:""),{top:b},"opacity-"+y,Math.round(10*(u+g))/10);var w,T}},{"../dom":151,"core-js/modules/web.dom-collections.iterator.js":118,"preact/hooks":126}],150:[function(e,i,n){var r,o;function a(s,f){return f||(f=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(f)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.SideBarVolumeControl=n.ActionBarVolumeControl=void 0;const c=e("../dom"),u=e("../icons"),l=e("./vertical-slider"),d=e("./horizontal-slider");n.ActionBarVolumeControl=function(s){return s.mobileControls||s.mirroredControls?null:(0,c.html)(r||(r=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),l.VerticalSlider,0,1,s.player().volume,f=>s.player().setVolume(f),u.Icons.VolumeUp,s.player().registerOnVolumeChanged,s.player().removeOnVolumeChanged)},n.SideBarVolumeControl=function(s){return(0,c.html)(o||(o=a([`
        <`," minValue="," maxValue=",`
            initialValue=`,` 
            onChange=`,`
            icon=`,`
            registerListner=`,`
            removeListener=`,`
            />
    `])),d.HorizontalSlider,0,1,s.player().volume,f=>s.player().setVolume(f),u.Icons.VolumeUp,s.player().registerOnVolumeChanged,s.player().removeOnVolumeChanged)}},{"../dom":151,"../icons":153,"./horizontal-slider":136,"./vertical-slider":149}],151:[function(e,i,n){e("core-js/modules/web.dom-collections.iterator.js"),e("core-js/modules/web.url.js"),e("core-js/modules/web.url-search-params.js");var r=function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(n,"__esModule",{value:!0}),n.downloadFile=n.click=n.createDiv=n.activeClass=n.primaryClass=n.disabledClass=n.goneClass=n.html=void 0;const o=e("preact"),a=r(e("htm"));n.html=a.default.bind(o.h),n.goneClass="jsdos-player-gone",n.disabledClass="jsdos-player-button-disabled",n.primaryClass="jsdos-player-button-primary",n.activeClass="jsdos-player-button-active",n.createDiv=function(u,l){const d=document.createElement("div");if(typeof u=="string")d.className=u;else for(const s of u)d.classList.add(s);return l!==void 0&&(d.innerHTML=l),d},n.click=function(u,l){for(const d of emulatorsUi.dom.pointers.bind.enders)u.addEventListener(d,()=>{u.classList.contains("jsdos-player-button-disabled")||l(u)})};let c=null;n.downloadFile=function(u,l,d){const s=new Blob([u],{type:d});c!==null&&window.URL.revokeObjectURL(c),c=window.URL.createObjectURL(s);const f=document.createElement("a");f.href=c,f.download=l,f.style.display="none",document.body.appendChild(f),f.click(),f.remove()}},{"core-js/modules/web.dom-collections.iterator.js":118,"core-js/modules/web.url-search-params.js":120,"core-js/modules/web.url.js":122,htm:123,preact:125}],152:[function(e,i,n){function r(g,m,y){return m in g?Object.defineProperty(g,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):g[m]=y,g}e("core-js/modules/es.string.replace.js");var o=Object.create?function(g,m,y,_){_===void 0&&(_=y);var b=Object.getOwnPropertyDescriptor(m,y);b&&!("get"in b?!m.__esModule:b.writable||b.configurable)||(b={enumerable:!0,get:function(){return m[y]}}),Object.defineProperty(g,_,b)}:function(g,m,y,_){_===void 0&&(_=y),g[_]=m[y]},a=Object.create?function(g,m){Object.defineProperty(g,"default",{enumerable:!0,value:m})}:function(g,m){g.default=m},c=function(g){if(g&&g.__esModule)return g;var m={};if(g!=null)for(var y in g)y!=="default"&&Object.prototype.hasOwnProperty.call(g,y)&&o(m,g,y);return a(m,g),m};Object.defineProperty(n,"__esModule",{value:!0}),n.hardwareTransportLayerFactory=n.HardwareTransportLayerFactory=void 0;const u=c(e("base64-js")),l=new TextDecoder;class d{constructor(m){r(this,"sessionId",Date.now()+""),r(this,"hardware",void 0),r(this,"alive",!0),r(this,"frameWidth",0),r(this,"frameHeight",0),r(this,"handler",()=>{}),this.hardware=m}callMain(){this.hardware.sendMessage(`wc-install
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
`);break;default:console.log("Unhandled client message (wc):",m,y)}}initMessageHandler(m){this.handler=m}exit(){this.alive=!1}async onServerMessage(m,y){const _=y||{};switch(m){case"ws-server-ready":{const b=this.hardware.readConfig();this.handler("ws-config",{sessionId:this.sessionId,content:b})}break;case"ws-sound-init":this.handler(m,_),this.handler("ws-server-ready",{sessionId:this.sessionId});break;case"ws-frame-set-size":this.frameWidth=_.width,this.frameHeight=_.height,this.handler(m,_);break;case"ws-sound-push":case"ws-update-lines":default:this.handler(m,_);break;case"ws-persist":_.bundle=p(_.bundle),this.handler(m,_);break;case"ws-log":case"ws-warn":case"ws-err":case"ws-stdout":_.message!==void 0&&_.message!==null&&_.message.length>0&&(_.message=l.decode(p(_.message))),this.handler(m,_)}}update(){this.alive&&requestAnimationFrame(this.update.bind(this)),this.updateFrame()}updateFrame(){if(this.frameWidth===0||this.frameHeight===0)return;const m=this.hardware.getFramePayload();if(m.length===0)return;const y=p(m);if(y.length===0)return;const _=[],b=3*this.frameWidth;let w=this.frameHeight,T=-1;for(let E=0;E<this.frameHeight;++E){const k=E===this.frameHeight-1;if(y[E]===1&&T===-1)T=E;else if((k||y[E]===0)&&T!==-1){const S=((y[E]===1?E:E-1)-T+1)*b,A=y.slice(w,w+S);_.push({start:T,heapu8:A}),w+=S,T=-1}}this.handler("ws-update-lines",{sessionId:this.sessionId,lines:_})}}class s{constructor(){r(this,"serverMessageHandler",()=>{}),window.serverMessage=m=>{if(typeof m=="string"){const y="{"+l.decode(p(m)).slice(0,-1)+"}";try{const _=JSON.parse(y);this.serverMessageHandler(_.name,_)}catch(_){throw console.error("Can't parse",y,_),_}}else this.serverMessageHandler(m.name,m)},this.createTransportLayer=this.createTransportLayer.bind(this)}createTransportLayer(m){const y=new d(m);return this.serverMessageHandler=y.onServerMessage.bind(y),y.callMain(),y}}function f(g,m,y){if(g.writeFile!==void 0)return g.writeFile(m,v(y));let _=g.createFile(m);if(_.length>0)return _;let b=0;for(;b<y.length;){const w=Math.min(4194304,y.length-b),T=y.subarray(b,b+w);if(_=g.appendFile(v(T)),_.length>0)return _;b+=w}return _=g.closeFile(),_}function p(g){return u.toByteArray(g)}function v(g){return u.fromByteArray(g)}n.HardwareTransportLayerFactory=s,n.hardwareTransportLayerFactory=new s},{"base64-js":1,"core-js/modules/es.string.replace.js":117}],153:[function(e,i,n){var r,o,a,c,u,l,d,s,f,p,v,g,m,y,_,b,w,T,E,k,S,A,N,U,x,M,R,L,F,q,j;function W(C,P){return P||(P=C.slice(0)),Object.freeze(Object.defineProperties(C,{raw:{value:Object.freeze(P)}}))}Object.defineProperty(n,"__esModule",{value:!0}),n.Icons=void 0;const D=e("./dom");n.Icons={XCircle:C=>(0,D.html)(r||(r=W([`
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
`])),C.class),SwithcHorizontal:C=>(0,D.html)(c||(c=W([`
    <svg class="`,`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
`])),C.class),EyeOff:C=>(0,D.html)(u||(u=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
`])),C.class),Pause:C=>(0,D.html)(l||(l=W([`
    <svg className=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),Play:C=>(0,D.html)(d||(d=W([`
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
`])),C.class),ArrowsCircleRight:C=>(0,D.html)(T||(T=W([`
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
`])),C.class),CursorClick:C=>(0,D.html)(k||(k=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
`])),C.class),Cursor:C=>(0,D.html)(S||(S=W([`
    <svg class=`,` fill="currentColor" viewBox="0 0 24 24">
        <path
            d="M 7 2 L 7 18.5 L 11.09375 14.605469 L 14.300781 22 L 16.5 21 L 13.195312 13.701172 L 13.199219 13.699219 L 19 13.199219 L 7 2 z M 9 6.6015625 L 14.347656 11.59375 L 13.029297 11.707031 L 12.708984 11.734375 L 12.412109 11.861328 L 10.3125 12.761719 L 9.9824219 12.904297 L 9.7226562 13.152344 L 9 13.837891 L 9 6.6015625 z" />
    </svg>
`])),C.class),Refresh:C=>(0,D.html)(A||(A=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
`])),C.class),CurrencyDollar:C=>(0,D.html)(N||(N=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),QuestionMarkCircle:C=>(0,D.html)(U||(U=W([`
    <svg class=`,` fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`])),C.class),Discord:C=>(0,D.html)(x||(x=W([`
    <svg class=`,` fill="none" viewBox="0 0 245 240" stroke="currentColor">
        <style>.st0{fill:#5c7080;}</style>
        <path class="st0" d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path class="st0" d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/>
    </svg>
`])),C.class),Telegram:C=>(0,D.html)(R||(R=W([`
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
`])),C.class)}},{"./dom":151}],154:[function(e,i,n){var r,o,a;function c(U,x){return x||(x=U.slice(0)),Object.freeze(Object.defineProperties(U,{raw:{value:Object.freeze(x)}}))}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.createPlayerApp=n.PlayerApp=void 0;const u=e("preact"),l=e("preact/hooks"),d=e("./dom"),s=e("./components/action-hide"),f=e("./components/action-bar"),p=e("./components/action-save-or-exit"),v=e("./components/sidebar"),g=e("./components/tip"),m=e("nanoid/non-secure"),y=e("./components/sensitivity-control"),_=e("./components/scale-control"),b=e("./components/volume-control"),w=e("./components/sync-control"),T="client.id",E="network.token",k="network.region",S="ui.tipsV2",A="ui.autolockTipsV2";function N(U){const x=U.options().withNetworkingApi!==!0,M=emulatorsUi.dom.storage,R=U.options().clientId,L=typeof R=="function"?Oe=>R(Oe):void 0,[F,q]=(0,l.useState)(null),[j,W]=(0,l.useState)(!1),[D,C]=(0,l.useState)(U.player().mobileControls),[P,O]=(0,l.useState)(U.player().mirroredControls),[B,G]=(0,l.useState)(U.player().autolock),[Y,H]=(0,l.useState)(U.player().layers.keyboardVisible),[te,ue]=(0,l.useState)(!1),[_e,J]=(0,l.useState)(!1),[re,pe]=(0,l.useState)(U.player().layers.fullscreen),[we,me]=(0,l.useState)(!x),[ye,$e]=(0,l.useState)(M.getItem(k)),[Fe,Je]=(0,l.useState)(null),[ct,mt]=(0,l.useState)(!1),[K,X]=(0,l.useState)(null),[fe,Pe]=(0,l.useState)("main"),[Le]=(0,l.useState)(()=>{const Oe=M.getItem(T),Ke=Oe??(0,m.nanoid)();return Oe===null&&M.setItem(T,Ke),{namespace:encodeURIComponent("local ("+location.href+")"),id:Ke}}),[Ne,ze]=(0,l.useState)(M.getItem(E)),[De,ve]=(0,l.useState)(!1);(0,l.useEffect)(()=>{const Oe=Ke=>{var He;Ke.data.message=="jsdos-get-network-token"&&((He=Ke.source)===null||He===void 0||He.postMessage({message:"jsdos-network-token",token:Ne},"*"))};return window.addEventListener("message",Oe),()=>window.removeEventListener("message",Oe)},[Ne]),(0,l.useEffect)(()=>{L!==void 0&&L(!1).then(q).catch(console.error)},[R,q]),(0,l.useEffect)(()=>(U.setOnRun(()=>{const Oe=U.player().autolock,Ke=M.getItem(S)!=="false",He=Oe&&M.getItem(A)!=="false";(Ke||He)&&je.setShowTips(!0),G(Oe)}),()=>U.setOnRun(()=>{})),[U.setOnRun]),(0,l.useEffect)(()=>{const Oe=()=>{const Ke=document.fullscreenElement!==null;pe(Ke),Ke||me(!0)};return document.addEventListener("fullscreenchange",Oe),()=>{document.removeEventListener("fullscreenchange",Oe)}},[re,pe]);const Xe=Oe=>{var Ke;(Ke=U.player().ciPromise)===null||Ke===void 0||Ke.then(He=>{Oe?He.pause():He.resume(),ue(Oe)}).catch(console.error)},je={player:U.player,options:U.options,clientId:F,setClientId:q,requestClientId:L,anonymousClientId:Le,networkToken:Ne,setNetworkToken:Oe=>{Oe===null?M.removeItem(E):M.setItem(E,Oe),ze(Oe)},mobileControls:D,setMobileControls:async Oe=>{Oe?U.player().enableMobileControls():U.player().disableMobileControls(),C(Oe)},mirroredControls:P,setMirroredControls:async Oe=>{je.player().setMirroredControls(Oe),O(Oe)},autolock:B,setAutolock:async Oe=>{je.player().setAutolock(Oe),G(Oe)},keyboard:Y,toggleKeyboard:()=>{H(!U.player().layers.keyboardVisible),U.player().layers.toggleKeyboard()},fullscreen:re,toggleFullscreen:()=>{U.player().layers.toggleFullscreen()},pause:te,setPause:Xe,mute:_e,setMute:Oe=>{var Ke;(Ke=U.player().ciPromise)===null||Ke===void 0||Ke.then(He=>{Oe?He.mute():He.unmute(),J(Oe)}).catch(console.error)},actionBar:we,setActionBar:me,sideBar:j,openSideBar:()=>W(!0),closeSideBar:()=>W(!1),region:ye,setRegion:function(Oe){Oe!==ye&&(Oe!==null&&M.setItem(k,Oe),$e(Oe),Je(null))},estimatingRegion:Fe,setEstimatingRegion:Je,showTips:ct,setShowTips:Oe=>{M.setItem(S,Oe+""),je.player().autolock&&M.setItem(A,Oe+""),setTimeout(()=>{Xe(Oe),mt(Oe),Oe&&U.options().style!=="hidden"&&me(!0)},500)},latencyInfo:K,setLatencyInfo:X,sideBarPage:fe,setSideBarPage:Pe,ipxConnected:De,setIpxConnected:ve};return je.actionBar===!1?(0,d.html)(r||(r=c([`<div>
            <`," ...",` class="absolute left-0 top-0 rounded-br-md z-50 w-8 h-8" />
            <`," ...",` class="absolute left-0 opacity-80 top-1/2 z-50 -mt-6" />
        </div>`])),p.ActionSaveOrExit,je,s.ActionHide,je):(0,d.html)(o||(o=c([`
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
    `])),v.SideBar,je,g.Tips,je,f.ActionBar,je,p.ActionSaveOrExit,je,w.SyncMouseControl,je,y.ActionBarSensitivityControl,je,s.ActionHide,je,_.ActionBarScaleControl,je,b.ActionBarVolumeControl,je)}n.PlayerApp=N,n.createPlayerApp=function(U,x,M,R){(0,u.render)((0,d.html)(a||(a=c(["<"," player="," options="," setOnRun="," />"])),N,()=>x,()=>M,R),U)}},{"./components/action-bar":130,"./components/action-hide":131,"./components/action-save-or-exit":132,"./components/scale-control":138,"./components/sensitivity-control":139,"./components/sidebar":140,"./components/sync-control":147,"./components/tip":148,"./components/volume-control":150,"./dom":151,"core-js/modules/web.dom-collections.iterator.js":118,"nanoid/non-secure":124,preact:125,"preact/hooks":126}],155:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.DosPlayer=void 0;const r=e("./dom"),o=e("./hardware-transport-layer"),a=e("./backend/v7/personal"),c=e("./player-app"),u=Dos;function l(d,s){const f=s||{};if(f.windowOpen===void 0&&(typeof window=="object"?f.windowOpen=window.open.bind(window):f.windowOpen=()=>{throw new Error("window.open is not defined")}),f.style==="none")return console.warn("If you don't need the jsdos services, please use emulatros + emulators-ui instead"),u(d,f);d.classList.add("flex"),d.classList.add("flex-row"),d.classList.add("relative"),d.classList.add("overflow-hidden");const p=(0,r.createDiv)(["hidden","flex-col","absolute","left-0","top-0","bottom-0","right-0","items-center","justify-center","z-50","bg-gray-800","opacity-95"]),v=(0,r.createDiv)(["text-2xl","font-bold","font-mono","animate-pulse","text-green-600"]);p.appendChild(v);const g=(0,r.createDiv)(["flex","flex-col","flex-grow","overflow-hidden"]),m=(0,r.createDiv)("flex-grow"),y=(0,r.createDiv)("flex-grow-0"),_=(0,r.createDiv)("flex-grow-0"),b=d;function w(N){v.innerHTML=N,p.classList.remove("hidden"),p.classList.add("flex")}g.appendChild(m),g.appendChild(_),d.appendChild(y),d.appendChild(g),d.appendChild(p),f.layersOptions=f.layersOptions||{},f.layersOptions.keyboardDiv=_,f.layersOptions.keyboardInputDiv=b,f.layersOptions.fullscreenElement=d,f.layersOptions.optionControls=[];const T=f.hardware;T!=null&&(f.createTransportLayer=()=>o.hardwareTransportLayerFactory.createTransportLayer(T),f.emulatorFunction="backend");const E=u(m,f);let k=()=>{};(0,c.createPlayerApp)(y,E,f,N=>k=N),E.bundleUrl=null;const S=E.run;E.run=async(N,U,x)=>{p.classList.remove("flex"),p.classList.add("hidden");const M=()=>(f==null?void 0:f.clientId)!==void 0?f.clientId(!1):null,R=await M();U===void 0&&x===void 0&&R!==null&&(U=(0,a.getPersonalBundleUrl)(R.namespace,R.id,N)+"?dt="+Date.now());const L=await S.call(E,N,U,x);E.bundleUrl=N;const F=E.layers.getOnSave();return E.layers.setOnSave(async()=>{const q=typeof(f==null?void 0:f.onExit)=="function",j=q;q&&L.mute();const W=await M();if(W!==null){j&&w("Saving [1/2]: collecting changes");const D=await L.persist();j&&w("Saving [2/2]: sending to cloud"),await(0,a.putPersonalBundle)(W.namespace,W.id,N,D)}else j&&w("Saving [1/1]: collecting changes"),await F.call(E.layers);q&&j&&(w("Saved. Now you can close the window"),v.classList.remove("animate-pulse"))}),k(),L};const A=E.stop;return E.stop=()=>(E.bundleUrl=null,A.call(E)),E}n.DosPlayer=l,window.Dos=l},{"./backend/v7/personal":128,"./dom":151,"./hardware-transport-layer":152,"./player-app":154}],156:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.request=void 0,n.request=async function(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"GET",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;const c=await fetch(r,{method:o,body:a,headers:new Headers({"content-type":"application/json"})}).then(l=>l.json());var u;if(c.code!==200)throw new Error((u=c.message)!==null&&u!==void 0?u:"code: "+c.code);return c}},{}],157:[function(e,i,n){function r(a,c,u,l,d,s){return new Promise((f,p)=>{const v=new XMLHttpRequest;if(v.responseType=u,v.open(a,c,!0),v.addEventListener("load",()=>{v.status!==200?p(new Error("Wrong status code "+v.status)):u==="text"?f(v.responseText):u==="arraybuffer"?f(v.response):p(new Error("Unsupported responseType "+u))},!1),v.addEventListener("error",()=>{p(new Error("HTTP GET failed for url "+c))},!1),v.addEventListener("abort",()=>{p(new Error("HTTP GET canceled for url "+c))},!1),d!==void 0&&(v.onprogress=g=>{if(g.loaded&&g.total&&g.total>0){const m=Math.round(1e4*g.loaded/g.total)/100;d(m)}}),s!==void 0)for(const g of Object.keys(s))v.setRequestHeader(g,s[g]);v.send(l)})}function o(a,c,u){return r("post",a,c,u)}e("core-js/modules/web.dom-collections.iterator.js"),Object.defineProperty(n,"__esModule",{value:!0}),n.post=n.getObject=n.postObject=n.send=void 0,n.send=r,n.postObject=async function(a,c){const u=JSON.parse(await o(a,"text",c));if(u.success)return u;throw u.errorCode!==void 0?new Error(u.errorCode):new Error(`POST Object request failed:
 Payload:
`+JSON.stringify(u.body,null,2))},n.getObject=async function(a){const c=JSON.parse(await r("get",a,"text"));if(c.success)return c;throw c.errorCode!==void 0?new Error(c.errorCode):new Error(`GET Object request failed:
 Payload:
`+JSON.stringify(c,null,2))},n.post=o},{"core-js/modules/web.dom-collections.iterator.js":118}],158:[function(e,i,n){Object.defineProperty(n,"__esModule",{value:!0}),n.getPersonalBundleUrl=n.getPersonalBundleKey=n.uploadsS3Bucket=void 0,n.uploadsS3Bucket="doszone-uploads";const r="https://doszone-uploads.s3.dualstack.eu-central-1.amazonaws.com";function o(a,c,u,l){if(l!==void 0&&u.startsWith(r))return u.substring(r.length+1);const d=u.lastIndexOf("/"),s=u.substr(d+1);return a==="doszone"?"personal/"+c+"/"+s:"personal-v2/"+a+"/"+c+"/"+s}n.getPersonalBundleKey=o,n.getPersonalBundleUrl=function(a,c,u,l){const d=o(a,c,u,l);return r+"/"+d}},{}]},{},[155])})(Fa,Fa.exports);const Wu=(h,t)=>h===t,Zs={equals:Wu};let kc=Nc;const Ni=1,Qs=2,Ic={owned:null,cleanups:null,context:null,owner:null};var Rn=null;let _o=null,Jt=null,gn=null,gi=null,lo=0;function Xu(h,t){const e=Jt,i=Rn,n=h.length===0,r=n?Ic:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},o=n?h:()=>h(()=>Zi(()=>co(r)));Rn=r,Jt=null;try{return vs(o,!0)}finally{Jt=e,Rn=i}}function bo(h,t){t=t?Object.assign({},Zs,t):Zs;const e={value:h,observers:null,observerSlots:null,comparator:t.equals||void 0},i=n=>(typeof n=="function"&&(n=n(e.value)),Uc(e,n));return[Bc.bind(e),i]}function us(h,t,e){const i=ba(h,t,!1,Ni);gs(i)}function Oc(h,t,e){kc=Ju;const i=ba(h,t,!1,Ni);(!e||!e.render)&&(i.user=!0),gi?gi.push(i):gs(i)}function eo(h,t,e){e=e?Object.assign({},Zs,e):Zs;const i=ba(h,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=e.equals||void 0,gs(i),Bc.bind(i)}function Zi(h){if(Jt===null)return h();const t=Jt;Jt=null;try{return h()}finally{Jt=t}}function qu(h){Oc(()=>Zi(h))}function Bc(){if(this.sources&&this.state)if(this.state===Ni)gs(this);else{const h=gn;gn=null,vs(()=>no(this),!1),gn=h}if(Jt){const h=this.observers?this.observers.length:0;Jt.sources?(Jt.sources.push(this),Jt.sourceSlots.push(h)):(Jt.sources=[this],Jt.sourceSlots=[h]),this.observers?(this.observers.push(Jt),this.observerSlots.push(Jt.sources.length-1)):(this.observers=[Jt],this.observerSlots=[Jt.sources.length-1])}return this.value}function Uc(h,t,e){let i=h.value;return(!h.comparator||!h.comparator(i,t))&&(h.value=t,h.observers&&h.observers.length&&vs(()=>{for(let n=0;n<h.observers.length;n+=1){const r=h.observers[n],o=_o&&_o.running;o&&_o.disposed.has(r),(o?!r.tState:!r.state)&&(r.pure?gn.push(r):gi.push(r),r.observers&&Fc(r)),o||(r.state=Ni)}if(gn.length>1e6)throw gn=[],new Error},!1)),t}function gs(h){if(!h.fn)return;co(h);const t=Rn,e=Jt,i=lo;Jt=Rn=h,Yu(h,h.value,i),Jt=e,Rn=t}function Yu(h,t,e){let i;try{i=h.fn(t)}catch(n){return h.pure&&(h.state=Ni,h.owned&&h.owned.forEach(co),h.owned=null),h.updatedAt=e+1,zc(n)}(!h.updatedAt||h.updatedAt<=e)&&(h.updatedAt!=null&&"observers"in h?Uc(h,i):h.value=i,h.updatedAt=e)}function ba(h,t,e,i=Ni,n){const r={fn:h,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:Rn,context:null,pure:e};return Rn===null||Rn!==Ic&&(Rn.owned?Rn.owned.push(r):Rn.owned=[r]),r}function to(h){if(h.state===0)return;if(h.state===Qs)return no(h);if(h.suspense&&Zi(h.suspense.inFallback))return h.suspense.effects.push(h);const t=[h];for(;(h=h.owner)&&(!h.updatedAt||h.updatedAt<lo);)h.state&&t.push(h);for(let e=t.length-1;e>=0;e--)if(h=t[e],h.state===Ni)gs(h);else if(h.state===Qs){const i=gn;gn=null,vs(()=>no(h,t[0]),!1),gn=i}}function vs(h,t){if(gn)return h();let e=!1;t||(gn=[]),gi?e=!0:gi=[],lo++;try{const i=h();return $u(e),i}catch(i){e||(gi=null),gn=null,zc(i)}}function $u(h){if(gn&&(Nc(gn),gn=null),h)return;const t=gi;gi=null,t.length&&vs(()=>kc(t),!1)}function Nc(h){for(let t=0;t<h.length;t++)to(h[t])}function Ju(h){let t,e=0;for(t=0;t<h.length;t++){const i=h[t];i.user?h[e++]=i:to(i)}for(t=0;t<e;t++)to(h[t])}function no(h,t){h.state=0;for(let e=0;e<h.sources.length;e+=1){const i=h.sources[e];if(i.sources){const n=i.state;n===Ni?i!==t&&(!i.updatedAt||i.updatedAt<lo)&&to(i):n===Qs&&no(i,t)}}}function Fc(h){for(let t=0;t<h.observers.length;t+=1){const e=h.observers[t];e.state||(e.state=Qs,e.pure?gn.push(e):gi.push(e),e.observers&&Fc(e))}}function co(h){let t;if(h.sources)for(;h.sources.length;){const e=h.sources.pop(),i=h.sourceSlots.pop(),n=e.observers;if(n&&n.length){const r=n.pop(),o=e.observerSlots.pop();i<n.length&&(r.sourceSlots[o]=i,n[i]=r,e.observerSlots[i]=o)}}if(h.owned){for(t=h.owned.length-1;t>=0;t--)co(h.owned[t]);h.owned=null}if(h.cleanups){for(t=h.cleanups.length-1;t>=0;t--)h.cleanups[t]();h.cleanups=null}h.state=0,h.context=null}function Zu(h){return h instanceof Error?h:new Error(typeof h=="string"?h:"Unknown error",{cause:h})}function zc(h,t=Rn){throw Zu(h)}function jc(h,t){return Zi(()=>h(t||{}))}const Qu=h=>`Stale read from <${h}>.`;function ed(h){const t=h.keyed,e=eo(()=>h.when,void 0,{equals:(i,n)=>t?i===n:!i==!n});return eo(()=>{const i=e();if(i){const n=h.children;return typeof n=="function"&&n.length>0?Zi(()=>n(t?i:()=>{if(!Zi(e))throw Qu("Show");return h.when})):n}return h.fallback},void 0,void 0)}function td(h,t,e){let i=e.length,n=t.length,r=i,o=0,a=0,c=t[n-1].nextSibling,u=null;for(;o<n||a<r;){if(t[o]===e[a]){o++,a++;continue}for(;t[n-1]===e[r-1];)n--,r--;if(n===o){const l=r<i?a?e[a-1].nextSibling:e[r-a]:c;for(;a<r;)h.insertBefore(e[a++],l)}else if(r===a)for(;o<n;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===e[r-1]&&e[a]===t[n-1]){const l=t[--n].nextSibling;h.insertBefore(e[a++],t[o++].nextSibling),h.insertBefore(e[--r],l),t[n]=e[r]}else{if(!u){u=new Map;let d=a;for(;d<r;)u.set(e[d],d++)}const l=u.get(t[o]);if(l!=null)if(a<l&&l<r){let d=o,s=1,f;for(;++d<n&&d<r&&!((f=u.get(t[d]))==null||f!==l+s);)s++;if(s>l-a){const p=t[o];for(;a<l;)h.insertBefore(e[a++],p)}else h.replaceChild(e[a++],t[o++])}else o++;else t[o++].remove()}}}const za="_$DX_DELEGATE";function nd(h,t,e,i={}){let n;return Xu(r=>{n=r,t===document?h():Hc(t,h(),t.firstChild?null:void 0,e)},i.owner),()=>{n(),t.textContent=""}}function xa(h,t,e){let i;const n=()=>{const o=document.createElement("template");return o.innerHTML=h,e?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>Zi(()=>document.importNode(i||(i=n()),!0)):()=>(i||(i=n())).cloneNode(!0);return r.cloneNode=r,r}function id(h,t=window.document){const e=t[za]||(t[za]=new Set);for(let i=0,n=h.length;i<n;i++){const r=h[i];e.has(r)||(e.add(r),t.addEventListener(r,rd))}}function Hc(h,t,e,i){if(e!==void 0&&!i&&(i=[]),typeof t!="function")return io(h,t,i,e);us(n=>io(h,t(),n,e),i)}function rd(h){const t=`$$${h.type}`;let e=h.composedPath&&h.composedPath()[0]||h.target;for(h.target!==e&&Object.defineProperty(h,"target",{configurable:!0,value:e}),Object.defineProperty(h,"currentTarget",{configurable:!0,get(){return e||document}});e;){const i=e[t];if(i&&!e.disabled){const n=e[`${t}Data`];if(n!==void 0?i.call(e,n,h):i.call(e,h),h.cancelBubble)return}e=e._$host||e.parentNode||e.host}}function io(h,t,e,i,n){for(;typeof e=="function";)e=e();if(t===e)return e;const r=typeof t,o=i!==void 0;if(h=o&&e[0]&&e[0].parentNode||h,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),o){let a=e[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),e=sr(h,e,i,a)}else e!==""&&typeof e=="string"?e=h.firstChild.data=t:e=h.textContent=t;else if(t==null||r==="boolean")e=sr(h,e,i);else{if(r==="function")return us(()=>{let a=t();for(;typeof a=="function";)a=a();e=io(h,a,e,i)}),()=>e;if(Array.isArray(t)){const a=[],c=e&&Array.isArray(e);if(sa(a,t,e,n))return us(()=>e=io(h,a,e,i,!0)),()=>e;if(a.length===0){if(e=sr(h,e,i),o)return e}else c?e.length===0?ja(h,a,i):td(h,e,a):(e&&sr(h),ja(h,a));e=a}else if(t.nodeType){if(Array.isArray(e)){if(o)return e=sr(h,e,i,t);sr(h,e,null,t)}else e==null||e===""||!h.firstChild?h.appendChild(t):h.replaceChild(t,h.firstChild);e=t}else console.warn("Unrecognized value. Skipped inserting",t)}return e}function sa(h,t,e,i){let n=!1;for(let r=0,o=t.length;r<o;r++){let a=t[r],c=e&&e[r],u;if(!(a==null||a===!0||a===!1))if((u=typeof a)=="object"&&a.nodeType)h.push(a);else if(Array.isArray(a))n=sa(h,a,c)||n;else if(u==="function")if(i){for(;typeof a=="function";)a=a();n=sa(h,Array.isArray(a)?a:[a],Array.isArray(c)?c:[c])||n}else h.push(a),n=!0;else{const l=String(a);c&&c.nodeType===3&&c.data===l?h.push(c):h.push(document.createTextNode(l))}}return n}function ja(h,t,e=null){for(let i=0,n=t.length;i<n;i++)h.insertBefore(t[i],e)}function sr(h,t,e,i){if(e===void 0)return h.textContent="";const n=i||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const a=t[o];if(n!==a){const c=a.parentNode===h;!r&&!o?c?h.replaceChild(n,a):h.insertBefore(n,e):c&&a.remove()}else r=!0}}else h.insertBefore(n,e);return[n]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="154",sd=0,Ha=1,od=2,Vc=1,ad=2,Jn=3,_i=0,En=1,Qn=2,Bi=0,Tr=1,Va=2,Ga=3,Ka=4,ld=5,Mr=100,cd=101,ud=102,Wa=103,Xa=104,dd=200,hd=201,fd=202,pd=203,Gc=204,Kc=205,md=206,gd=207,vd=208,yd=209,_d=210,bd=0,xd=1,wd=2,oa=3,Sd=4,Md=5,Ed=6,Td=7,Wc=0,Ad=1,Cd=2,vi=0,Rd=1,Pd=2,Dd=3,Xc=4,Ld=5,qc=300,Rr=301,Pr=302,aa=303,la=304,uo=306,Dr=1e3,Nn=1001,ro=1002,on=1003,ca=1004,qs=1005,Mn=1006,Yc=1007,Qi=1008,Ui=1009,kd=1010,Id=1011,Sa=1012,$c=1013,Oi=1014,fi=1015,ds=1016,Jc=1017,Zc=1018,qi=1020,Od=1021,Fn=1023,Bd=1024,Ud=1025,Yi=1026,Lr=1027,Nd=1028,Qc=1029,Fd=1030,eu=1031,tu=1033,xo=33776,wo=33777,So=33778,Mo=33779,qa=35840,Ya=35841,$a=35842,Ja=35843,zd=36196,Za=37492,Qa=37496,el=37808,tl=37809,nl=37810,il=37811,rl=37812,sl=37813,ol=37814,al=37815,ll=37816,cl=37817,ul=37818,dl=37819,hl=37820,fl=37821,Eo=36492,jd=36283,pl=36284,ml=36285,gl=36286,hs=2300,kr=2301,To=2302,vl=2400,yl=2401,_l=2402,Hd=2500,Vd=0,nu=1,ua=2,iu=3e3,$i=3001,Gd=3200,Kd=3201,ru=0,Wd=1,Ji="",bt="srgb",ni="srgb-linear",su="display-p3",Ao=7680,Xd=519,qd=512,Yd=513,$d=514,Jd=515,Zd=516,Qd=517,eh=518,th=519,da=35044,bl="300 es",ha=1035,pi=2e3,so=2001;class Fr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xl=1234567;const os=Math.PI/180,Ir=180/Math.PI;function Xn(){const h=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[h&255]+pn[h>>8&255]+pn[h>>16&255]+pn[h>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[e&63|128]+pn[e>>8&255]+"-"+pn[e>>16&255]+pn[e>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function dn(h,t,e){return Math.max(t,Math.min(e,h))}function Ma(h,t){return(h%t+t)%t}function nh(h,t,e,i,n){return i+(h-t)*(n-i)/(e-t)}function ih(h,t,e){return h!==t?(e-h)/(t-h):0}function as(h,t,e){return(1-e)*h+e*t}function rh(h,t,e,i){return as(h,t,1-Math.exp(-e*i))}function sh(h,t=1){return t-Math.abs(Ma(h,t*2)-t)}function oh(h,t,e){return h<=t?0:h>=e?1:(h=(h-t)/(e-t),h*h*(3-2*h))}function ah(h,t,e){return h<=t?0:h>=e?1:(h=(h-t)/(e-t),h*h*h*(h*(h*6-15)+10))}function lh(h,t){return h+Math.floor(Math.random()*(t-h+1))}function ch(h,t){return h+Math.random()*(t-h)}function uh(h){return h*(.5-Math.random())}function dh(h){h!==void 0&&(xl=h);let t=xl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hh(h){return h*os}function fh(h){return h*Ir}function fa(h){return(h&h-1)===0&&h!==0}function ou(h){return Math.pow(2,Math.ceil(Math.log(h)/Math.LN2))}function oo(h){return Math.pow(2,Math.floor(Math.log(h)/Math.LN2))}function ph(h,t,e,i,n){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),u=r((t+i)/2),l=o((t+i)/2),d=r((t-i)/2),s=o((t-i)/2),f=r((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":h.set(a*l,c*d,c*s,a*u);break;case"YZY":h.set(c*s,a*l,c*d,a*u);break;case"ZXZ":h.set(c*d,c*s,a*l,a*u);break;case"XZX":h.set(a*l,c*p,c*f,a*u);break;case"YXY":h.set(c*f,a*l,c*p,a*u);break;case"ZYZ":h.set(c*p,c*f,a*l,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function mi(h,t){switch(t.constructor){case Float32Array:return h;case Uint32Array:return h/4294967295;case Uint16Array:return h/65535;case Uint8Array:return h/255;case Int32Array:return Math.max(h/2147483647,-1);case Int16Array:return Math.max(h/32767,-1);case Int8Array:return Math.max(h/127,-1);default:throw new Error("Invalid component type.")}}function zt(h,t){switch(t.constructor){case Float32Array:return h;case Uint32Array:return Math.round(h*4294967295);case Uint16Array:return Math.round(h*65535);case Uint8Array:return Math.round(h*255);case Int32Array:return Math.round(h*2147483647);case Int16Array:return Math.round(h*32767);case Int8Array:return Math.round(h*127);default:throw new Error("Invalid component type.")}}const mh={DEG2RAD:os,RAD2DEG:Ir,generateUUID:Xn,clamp:dn,euclideanModulo:Ma,mapLinear:nh,inverseLerp:ih,lerp:as,damp:rh,pingpong:sh,smoothstep:oh,smootherstep:ah,randInt:lh,randFloat:ch,randFloatSpread:uh,seededRandom:dh,degToRad:hh,radToDeg:fh,isPowerOfTwo:fa,ceilPowerOfTwo:ou,floorPowerOfTwo:oo,setQuaternionFromProperEuler:ph,normalize:zt,denormalize:mi};class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(t,e,i,n,r,o,a,c,u){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,c,u)}set(t,e,i,n,r,o,a,c,u){const l=this.elements;return l[0]=t,l[1]=n,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=i,l[7]=o,l[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],u=i[1],l=i[4],d=i[7],s=i[2],f=i[5],p=i[8],v=n[0],g=n[3],m=n[6],y=n[1],_=n[4],b=n[7],w=n[2],T=n[5],E=n[8];return r[0]=o*v+a*y+c*w,r[3]=o*g+a*_+c*T,r[6]=o*m+a*b+c*E,r[1]=u*v+l*y+d*w,r[4]=u*g+l*_+d*T,r[7]=u*m+l*b+d*E,r[2]=s*v+f*y+p*w,r[5]=s*g+f*_+p*T,r[8]=s*m+f*b+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8];return e*o*l-e*a*u-i*r*l+i*a*c+n*r*u-n*o*c}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],d=l*o-a*u,s=a*c-l*r,f=u*r-o*c,p=e*d+i*s+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=d*v,t[1]=(n*u-l*i)*v,t[2]=(a*i-n*o)*v,t[3]=s*v,t[4]=(l*e-n*c)*v,t[5]=(n*r-a*e)*v,t[6]=f*v,t[7]=(i*c-u*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const c=Math.cos(r),u=Math.sin(r);return this.set(i*c,i*u,-i*(c*o+u*a)+o+t,-n*u,n*c,-n*(-u*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Ct;function au(h){for(let t=h.length-1;t>=0;--t)if(h[t]>=65535)return!0;return!1}function fs(h){return document.createElementNS("http://www.w3.org/1999/xhtml",h)}const wl={};function ls(h){h in wl||(wl[h]=!0,console.warn(h))}function Ar(h){return h<.04045?h*.0773993808:Math.pow(h*.9478672986+.0521327014,2.4)}function Ro(h){return h<.0031308?h*12.92:1.055*Math.pow(h,.41666)-.055}const gh=new Ct().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vh=new Ct().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yh(h){return h.convertSRGBToLinear().applyMatrix3(vh)}function _h(h){return h.applyMatrix3(gh).convertLinearToSRGB()}const bh={[ni]:h=>h,[bt]:h=>h.convertSRGBToLinear(),[su]:yh},xh={[ni]:h=>h,[bt]:h=>h.convertLinearToSRGB(),[su]:_h},Vn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(h){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!h},get workingColorSpace(){return ni},set workingColorSpace(h){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(h,t,e){if(this.enabled===!1||t===e||!t||!e)return h;const i=bh[t],n=xh[e];if(i===void 0||n===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return n(i(h))},fromWorkingColorSpace:function(h,t){return this.convert(h,this.workingColorSpace,t)},toWorkingColorSpace:function(h,t){return this.convert(h,t,this.workingColorSpace)}};let or;class lu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{or===void 0&&(or=fs("canvas")),or.width=t.width,or.height=t.height;const i=or.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=or}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=Ar(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ar(e[i]/255)*255):e[i]=Ar(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wh=0;class cu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Xn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(Po(n[o].image)):r.push(Po(n[o]))}else r=Po(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function Po(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap?lu.getDataURL(h):h.data?{data:Array.from(h.data),width:h.width,height:h.height,type:h.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sh=0;class an extends Fr{constructor(t=an.DEFAULT_IMAGE,e=an.DEFAULT_MAPPING,i=Nn,n=Nn,r=Mn,o=Qi,a=Fn,c=Ui,u=an.DEFAULT_ANISOTROPY,l=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Xn(),this.name="",this.source=new cu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===$i?bt:Ji),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dr:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dr:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===bt?$i:iu}set encoding(t){ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===$i?bt:Ji}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=qc;an.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,i=0,n=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const c=t.elements,u=c[0],l=c[4],d=c[8],s=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(l-s)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(l+s)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(u+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(u+1)/2,b=(f+1)/2,w=(m+1)/2,T=(l+s)/4,E=(d+v)/4,k=(p+g)/4;return _>b&&_>w?_<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(_),n=T/i,r=E/i):b>w?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=T/n,r=k/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=E/r,n=k/r),this.set(i,n,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(s-l)*(s-l));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(d-v)/y,this.z=(s-l)/y,this.w=Math.acos((u+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class er extends Fr{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const n={width:t,height:e,depth:1};i.encoding!==void 0&&(ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===$i?bt:Ji),this.texture=new an(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new cu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uu extends an{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=on,this.minFilter=on,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mh extends an{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=on,this.minFilter=on,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let c=i[n+0],u=i[n+1],l=i[n+2],d=i[n+3];const s=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=u,t[e+2]=l,t[e+3]=d;return}if(a===1){t[e+0]=s,t[e+1]=f,t[e+2]=p,t[e+3]=v;return}if(d!==v||c!==s||u!==f||l!==p){let g=1-a;const m=c*s+u*f+l*p+d*v,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,m*y);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}const b=a*y;if(c=c*g+s*b,u=u*g+f*b,l=l*g+p*b,d=d*g+v*b,g===1-a){const w=1/Math.sqrt(c*c+u*u+l*l+d*d);c*=w,u*=w,l*=w,d*=w}}t[e]=c,t[e+1]=u,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],c=i[n+1],u=i[n+2],l=i[n+3],d=r[o],s=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+l*d+c*f-u*s,t[e+1]=c*p+l*s+u*d-a*f,t[e+2]=u*p+l*f+a*s-c*d,t[e+3]=l*p-a*d-c*s-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,u=a(i/2),l=a(n/2),d=a(r/2),s=c(i/2),f=c(n/2),p=c(r/2);switch(o){case"XYZ":this._x=s*l*d+u*f*p,this._y=u*f*d-s*l*p,this._z=u*l*p+s*f*d,this._w=u*l*d-s*f*p;break;case"YXZ":this._x=s*l*d+u*f*p,this._y=u*f*d-s*l*p,this._z=u*l*p-s*f*d,this._w=u*l*d+s*f*p;break;case"ZXY":this._x=s*l*d-u*f*p,this._y=u*f*d+s*l*p,this._z=u*l*p+s*f*d,this._w=u*l*d-s*f*p;break;case"ZYX":this._x=s*l*d-u*f*p,this._y=u*f*d+s*l*p,this._z=u*l*p-s*f*d,this._w=u*l*d+s*f*p;break;case"YZX":this._x=s*l*d+u*f*p,this._y=u*f*d+s*l*p,this._z=u*l*p-s*f*d,this._w=u*l*d-s*f*p;break;case"XZY":this._x=s*l*d-u*f*p,this._y=u*f*d-s*l*p,this._z=u*l*p+s*f*d,this._w=u*l*d+s*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],c=e[9],u=e[2],l=e[6],d=e[10],s=i+a+d;if(s>0){const f=.5/Math.sqrt(s+1);this._w=.25/f,this._x=(l-c)*f,this._y=(r-u)*f,this._z=(o-n)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(l-c)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+u)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-u)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(c+l)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+u)/f,this._y=(c+l)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(dn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,c=e._y,u=e._z,l=e._w;return this._x=i*l+o*a+n*u-r*c,this._y=n*l+o*c+r*a-i*u,this._z=r*l+o*u+i*c-n*a,this._w=o*l-i*a-n*c-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*n+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),l=Math.atan2(u,a),d=Math.sin((1-e)*l)/u,s=Math.sin(e*l)/u;return this._w=o*d+this._w*s,this._x=i*d+this._x*s,this._y=n*d+this._y*s,this._z=r*d+this._z*s,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(n),i*Math.sin(r),i*Math.cos(r),e*Math.sin(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(t=0,e=0,i=0){le.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,c=t.w,u=c*e+o*n-a*i,l=c*i+a*e-r*n,d=c*n+r*i-o*e,s=-r*e-o*i-a*n;return this.x=u*c+s*-r+l*-a-d*-o,this.y=l*c+s*-o+d*-r-u*-a,this.z=d*c+s*-a+u*-o-l*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=n*c-r*a,this.y=r*o-i*c,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(dn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new le,Sl=new Fi;class zn{constructor(t=new le(1/0,1/0,1/0),e=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox),ar.applyMatrix4(t.matrixWorld),this.union(ar);else{const n=t.geometry;if(n!==void 0)if(e&&n.attributes!==void 0&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)ai.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(ai)}else n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox),ar.applyMatrix4(t.matrixWorld),this.union(ar)}const i=t.children;for(let n=0,r=i.length;n<r;n++)this.expandByObject(i[n],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ai),ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wr),xs.subVectors(this.max,Wr),lr.subVectors(t.a,Wr),cr.subVectors(t.b,Wr),ur.subVectors(t.c,Wr),Ti.subVectors(cr,lr),Ai.subVectors(ur,cr),ji.subVectors(lr,ur);let e=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-ji.z,ji.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,ji.z,0,-ji.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-ji.y,ji.x,0];return!Lo(e,lr,cr,ur,xs)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,lr,cr,ur,xs))?!1:(ws.crossVectors(Ti,Ai),e=[ws.x,ws.y,ws.z],Lo(e,lr,cr,ur,xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new le,new le,new le,new le,new le,new le,new le,new le],ai=new le,ar=new zn,lr=new le,cr=new le,ur=new le,Ti=new le,Ai=new le,ji=new le,Wr=new le,xs=new le,ws=new le,Hi=new le;function Lo(h,t,e,i,n){for(let r=0,o=h.length-3;r<=o;r+=3){Hi.fromArray(h,r);const a=n.x*Math.abs(Hi.x)+n.y*Math.abs(Hi.y)+n.z*Math.abs(Hi.z),c=t.dot(Hi),u=e.dot(Hi),l=i.dot(Hi);if(Math.max(-Math.max(c,u,l),Math.min(c,u,l))>a)return!1}return!0}const Eh=new zn,Xr=new le,ko=new le;class qn{constructor(t=new le,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Eh.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xr.subVectors(t,this.center);const e=Xr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Xr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ko.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xr.copy(t.center).add(ko)),this.expandByPoint(Xr.copy(t.center).sub(ko))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new le,Io=new le,Ss=new le,Ci=new le,Oo=new le,Ms=new le,Bo=new le;class ho{constructor(t=new le,e=new le(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Io.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(Io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ss),a=Ci.dot(this.direction),c=-Ci.dot(Ss),u=Ci.lengthSq(),l=Math.abs(1-o*o);let d,s,f,p;if(l>0)if(d=o*c-a,s=o*a-c,p=r*l,d>=0)if(s>=-p)if(s<=p){const v=1/l;d*=v,s*=v,f=d*(d+o*s+2*a)+s*(o*d+s+2*c)+u}else s=r,d=Math.max(0,-(o*s+a)),f=-d*d+s*(s+2*c)+u;else s=-r,d=Math.max(0,-(o*s+a)),f=-d*d+s*(s+2*c)+u;else s<=-p?(d=Math.max(0,-(-o*r+a)),s=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+s*(s+2*c)+u):s<=p?(d=0,s=Math.min(Math.max(-r,-c),r),f=s*(s+2*c)+u):(d=Math.max(0,-(o*r+a)),s=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+s*(s+2*c)+u);else s=o>0?-r:r,d=Math.max(0,-(o*s+a)),f=-d*d+s*(s+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Io).addScaledVector(Ss,s),f}intersectSphere(t,e){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),n=li.dot(li)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,c;const u=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,s=this.origin;return u>=0?(i=(t.min.x-s.x)*u,n=(t.max.x-s.x)*u):(i=(t.max.x-s.x)*u,n=(t.min.x-s.x)*u),l>=0?(r=(t.min.y-s.y)*l,o=(t.max.y-s.y)*l):(r=(t.max.y-s.y)*l,o=(t.min.y-s.y)*l),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-s.z)*d,c=(t.max.z-s.z)*d):(a=(t.max.z-s.z)*d,c=(t.min.z-s.z)*d),i>c||a>n)||((a>i||i!==i)&&(i=a),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,n,r){Oo.subVectors(e,t),Ms.subVectors(i,t),Bo.crossVectors(Oo,Ms);let o=this.direction.dot(Bo),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const c=a*this.direction.dot(Ms.crossVectors(Ci,Ms));if(c<0)return null;const u=a*this.direction.dot(Oo.cross(Ci));if(u<0||c+u>o)return null;const l=-a*Ci.dot(Bo);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(t,e,i,n,r,o,a,c,u,l,d,s,f,p,v,g){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,c,u,l,d,s,f,p,v,g)}set(t,e,i,n,r,o,a,c,u,l,d,s,f,p,v,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=u,m[6]=l,m[10]=d,m[14]=s,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/dr.setFromMatrixColumn(t,0).length(),r=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(n),u=Math.sin(n),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const s=o*l,f=o*d,p=a*l,v=a*d;e[0]=c*l,e[4]=-c*d,e[8]=u,e[1]=f+p*u,e[5]=s-v*u,e[9]=-a*c,e[2]=v-s*u,e[6]=p+f*u,e[10]=o*c}else if(t.order==="YXZ"){const s=c*l,f=c*d,p=u*l,v=u*d;e[0]=s+v*a,e[4]=p*a-f,e[8]=o*u,e[1]=o*d,e[5]=o*l,e[9]=-a,e[2]=f*a-p,e[6]=v+s*a,e[10]=o*c}else if(t.order==="ZXY"){const s=c*l,f=c*d,p=u*l,v=u*d;e[0]=s-v*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*l,e[9]=v-s*a,e[2]=-o*u,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const s=o*l,f=o*d,p=a*l,v=a*d;e[0]=c*l,e[4]=p*u-f,e[8]=s*u+v,e[1]=c*d,e[5]=v*u+s,e[9]=f*u-p,e[2]=-u,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const s=o*c,f=o*u,p=a*c,v=a*u;e[0]=c*l,e[4]=v-s*d,e[8]=p*d+f,e[1]=d,e[5]=o*l,e[9]=-a*l,e[2]=-u*l,e[6]=f*d+p,e[10]=s-v*d}else if(t.order==="XZY"){const s=o*c,f=o*u,p=a*c,v=a*u;e[0]=c*l,e[4]=-d,e[8]=u*l,e[1]=s*d+v,e[5]=o*l,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*l,e[10]=v*d+s}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Th,t,Ah)}lookAt(t,e,i){const n=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Ri.crossVectors(i,An),Ri.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ri.crossVectors(i,An)),Ri.normalize(),Es.crossVectors(An,Ri),n[0]=Ri.x,n[4]=Es.x,n[8]=An.x,n[1]=Ri.y,n[5]=Es.y,n[9]=An.y,n[2]=Ri.z,n[6]=Es.z,n[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],u=i[12],l=i[1],d=i[5],s=i[9],f=i[13],p=i[2],v=i[6],g=i[10],m=i[14],y=i[3],_=i[7],b=i[11],w=i[15],T=n[0],E=n[4],k=n[8],S=n[12],A=n[1],N=n[5],U=n[9],x=n[13],M=n[2],R=n[6],L=n[10],F=n[14],q=n[3],j=n[7],W=n[11],D=n[15];return r[0]=o*T+a*A+c*M+u*q,r[4]=o*E+a*N+c*R+u*j,r[8]=o*k+a*U+c*L+u*W,r[12]=o*S+a*x+c*F+u*D,r[1]=l*T+d*A+s*M+f*q,r[5]=l*E+d*N+s*R+f*j,r[9]=l*k+d*U+s*L+f*W,r[13]=l*S+d*x+s*F+f*D,r[2]=p*T+v*A+g*M+m*q,r[6]=p*E+v*N+g*R+m*j,r[10]=p*k+v*U+g*L+m*W,r[14]=p*S+v*x+g*F+m*D,r[3]=y*T+_*A+b*M+w*q,r[7]=y*E+_*N+b*R+w*j,r[11]=y*k+_*U+b*L+w*W,r[15]=y*S+_*x+b*F+w*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],c=t[9],u=t[13],l=t[2],d=t[6],s=t[10],f=t[14],p=t[3],v=t[7],g=t[11],m=t[15];return p*(+r*c*d-n*u*d-r*a*s+i*u*s+n*a*f-i*c*f)+v*(+e*c*f-e*u*s+r*o*s-n*o*f+n*u*l-r*c*l)+g*(+e*u*d-e*a*f-r*o*d+i*o*f+r*a*l-i*u*l)+m*(-n*a*l-e*c*d+e*a*s+n*o*d-i*o*s+i*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],c=t[6],u=t[7],l=t[8],d=t[9],s=t[10],f=t[11],p=t[12],v=t[13],g=t[14],m=t[15],y=d*g*u-v*s*u+v*c*f-a*g*f-d*c*m+a*s*m,_=p*s*u-l*g*u-p*c*f+o*g*f+l*c*m-o*s*m,b=l*v*u-p*d*u+p*a*f-o*v*f-l*a*m+o*d*m,w=p*d*c-l*v*c-p*a*s+o*v*s+l*a*g-o*d*g,T=e*y+i*_+n*b+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(v*s*r-d*g*r-v*n*f+i*g*f+d*n*m-i*s*m)*E,t[2]=(a*g*r-v*c*r+v*n*u-i*g*u-a*n*m+i*c*m)*E,t[3]=(d*c*r-a*s*r-d*n*u+i*s*u+a*n*f-i*c*f)*E,t[4]=_*E,t[5]=(l*g*r-p*s*r+p*n*f-e*g*f-l*n*m+e*s*m)*E,t[6]=(p*c*r-o*g*r-p*n*u+e*g*u+o*n*m-e*c*m)*E,t[7]=(o*s*r-l*c*r+l*n*u-e*s*u-o*n*f+e*c*f)*E,t[8]=b*E,t[9]=(p*d*r-l*v*r-p*i*f+e*v*f+l*i*m-e*d*m)*E,t[10]=(o*v*r-p*a*r+p*i*u-e*v*u-o*i*m+e*a*m)*E,t[11]=(l*a*r-o*d*r-l*i*u+e*d*u+o*i*f-e*a*f)*E,t[12]=w*E,t[13]=(l*v*n-p*d*n+p*i*s-e*v*s-l*i*g+e*d*g)*E,t[14]=(p*a*n-o*v*n-p*i*c+e*v*c+o*i*g-e*a*g)*E,t[15]=(o*d*n-l*a*n+l*i*c-e*d*c-o*i*s+e*a*s)*E,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,u=r*o,l=r*a;return this.set(u*o+i,u*a-n*c,u*c+n*a,0,u*a+n*c,l*a+i,l*c-n*o,0,u*c-n*a,l*c+n*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,u=r+r,l=o+o,d=a+a,s=r*u,f=r*l,p=r*d,v=o*l,g=o*d,m=a*d,y=c*u,_=c*l,b=c*d,w=i.x,T=i.y,E=i.z;return n[0]=(1-(v+m))*w,n[1]=(f+b)*w,n[2]=(p-_)*w,n[3]=0,n[4]=(f-b)*T,n[5]=(1-(s+m))*T,n[6]=(g+y)*T,n[7]=0,n[8]=(p+_)*E,n[9]=(g-y)*E,n[10]=(1-(s+v))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=dr.set(n[0],n[1],n[2]).length();const o=dr.set(n[4],n[5],n[6]).length(),a=dr.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],Gn.copy(this);const u=1/r,l=1/o,d=1/a;return Gn.elements[0]*=u,Gn.elements[1]*=u,Gn.elements[2]*=u,Gn.elements[4]*=l,Gn.elements[5]*=l,Gn.elements[6]*=l,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,e.setFromRotationMatrix(Gn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=pi){const c=this.elements,u=2*r/(e-t),l=2*r/(i-n),d=(e+t)/(e-t),s=(i+n)/(i-n);let f,p;if(a===pi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===so)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=s,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=pi){const c=this.elements,u=1/(e-t),l=1/(i-n),d=1/(o-r),s=(e+t)*u,f=(i+n)*l;let p,v;if(a===pi)p=(o+r)*d,v=-2*d;else if(a===so)p=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-s,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const dr=new le,Gn=new Rt,Th=new le(0,0,0),Ah=new le(1,1,1),Ri=new le,Es=new le,An=new le,Ml=new Rt,El=new Fi;class fo{constructor(t=0,e=0,i=0,n=fo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],c=n[1],u=n[5],l=n[9],d=n[2],s=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(s,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(s,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,u),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(s,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return El.setFromEuler(this),this.setFromQuaternion(El,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fo.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ch=0;const Tl=new le,hr=new Fi,ci=new Rt,Ts=new le,qr=new le,Rh=new le,Ph=new Fi,Al=new le(1,0,0),Cl=new le(0,1,0),Rl=new le(0,0,1),Dh={type:"added"},Pl={type:"removed"};class Wt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const t=new le,e=new fo,i=new Fi,n=new le(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ct}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(Cl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(Cl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ts.copy(t):Ts.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(qr,Ts,this.up):ci.lookAt(Ts,qr,this.up),this.quaternion.setFromRotationMatrix(ci),n&&(ci.extractRotation(n.matrixWorld),hr.setFromRotationMatrix(ci),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Dh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Pl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,Rh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,Ph,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++){const a=n[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,l=c.length;u<l;u++){const d=c[u];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(t.materials,this.material[c]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];n.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),u=o(t.textures),l=o(t.images),d=o(t.shapes),s=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),l.length>0&&(i.images=l),d.length>0&&(i.shapes=d),s.length>0&&(i.skeletons=s),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){const c=[];for(const u in a){const l=a[u];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}Wt.DEFAULT_UP=new le(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new le,ui=new le,Uo=new le,di=new le,fr=new le,pr=new le,Dl=new le,No=new le,Fo=new le,zo=new le;let As=!1;class Un{constructor(t=new le,e=new le,i=new le){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Kn.subVectors(t,e),n.cross(Kn);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Kn.subVectors(n,e),ui.subVectors(i,e),Uo.subVectors(t,e);const o=Kn.dot(Kn),a=Kn.dot(ui),c=Kn.dot(Uo),u=ui.dot(ui),l=ui.dot(Uo),d=o*u-a*a;if(d===0)return r.set(-2,-1,-1);const s=1/d,f=(u*c-a*l)*s,p=(o*l-a*c)*s;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(t,e,i,n,r,o,a,c){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(t,e,i,n,r,o,a,c)}static getInterpolation(t,e,i,n,r,o,a,c){return this.getBarycoord(t,e,i,n,di),c.setScalar(0),c.addScaledVector(r,di.x),c.addScaledVector(o,di.y),c.addScaledVector(a,di.z),c}static isFrontFacing(t,e,i,n){return Kn.subVectors(i,e),ui.subVectors(t,e),Kn.cross(ui).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Kn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Kn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,n,r){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),Un.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}getInterpolation(t,e,i,n,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;fr.subVectors(n,i),pr.subVectors(r,i),No.subVectors(t,i);const c=fr.dot(No),u=pr.dot(No);if(c<=0&&u<=0)return e.copy(i);Fo.subVectors(t,n);const l=fr.dot(Fo),d=pr.dot(Fo);if(l>=0&&d<=l)return e.copy(n);const s=c*d-l*u;if(s<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(i).addScaledVector(fr,o);zo.subVectors(t,r);const f=fr.dot(zo),p=pr.dot(zo);if(p>=0&&f<=p)return e.copy(r);const v=f*u-c*p;if(v<=0&&u>=0&&p<=0)return a=u/(u-p),e.copy(i).addScaledVector(pr,a);const g=l*p-f*d;if(g<=0&&d-l>=0&&f-p>=0)return Dl.subVectors(r,n),a=(d-l)/(d-l+(f-p)),e.copy(n).addScaledVector(Dl,a);const m=1/(g+v+s);return o=v*m,a=s*m,e.copy(i).addScaledVector(fr,o).addScaledVector(pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Lh=0;class ei extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=Tr,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Kc,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==_i&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const hu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function jo(h,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?h+(t-h)*6*e:e<1/2?t:e<2/3?h+(t-h)*6*(2/3-e):h}class St{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vn.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=Vn.workingColorSpace){return this.r=t,this.g=e,this.b=i,Vn.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=Vn.workingColorSpace){if(t=Ma(t,1),e=dn(e,0,1),i=dn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=jo(o,r,t+1/3),this.g=jo(o,r,t),this.b=jo(o,r,t-1/3)}return Vn.toWorkingColorSpace(this,n),this}setStyle(t,e=bt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bt){const i=hu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ar(t.r),this.g=Ar(t.g),this.b=Ar(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bt){return Vn.fromWorkingColorSpace(mn.copy(this),t),Math.round(dn(mn.r*255,0,255))*65536+Math.round(dn(mn.g*255,0,255))*256+Math.round(dn(mn.b*255,0,255))}getHexString(t=bt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vn.workingColorSpace){Vn.fromWorkingColorSpace(mn.copy(this),e);const i=mn.r,n=mn.g,r=mn.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let c,u;const l=(a+o)/2;if(a===o)c=0,u=0;else{const d=o-a;switch(u=l<=.5?d/(o+a):d/(2-o-a),o){case i:c=(n-r)/d+(n<r?6:0);break;case n:c=(r-i)/d+2;break;case r:c=(i-n)/d+4;break}c/=6}return t.h=c,t.s=u,t.l=l,t}getRGB(t,e=Vn.workingColorSpace){return Vn.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=bt){Vn.fromWorkingColorSpace(mn.copy(this),t);const e=mn.r,i=mn.g,n=mn.b;return t!==bt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Wn),Wn.h+=t,Wn.s+=e,Wn.l+=i,this.setHSL(Wn.h,Wn.s,Wn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(Cs);const i=as(Wn.h,Cs.h,e),n=as(Wn.s,Cs.s,e),r=as(Wn.l,Cs.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new St;St.NAMES=hu;class Pn extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $t=new le,Rs=new kt;class bn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=da,this.updateRange={offset:0,count:-1},this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Rs.fromBufferAttribute(this,e),Rs.applyMatrix3(t),this.setXY(e,Rs.x,Rs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)$t.fromBufferAttribute(this,e),$t.applyMatrix3(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)$t.fromBufferAttribute(this,e),$t.applyMatrix4(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$t.fromBufferAttribute(this,e),$t.applyNormalMatrix(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$t.fromBufferAttribute(this,e),$t.transformDirection(t),this.setXYZ(e,$t.x,$t.y,$t.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=zt(e,this.array),i=zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=zt(e,this.array),i=zt(i,this.array),n=zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=zt(e,this.array),i=zt(i,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==da&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class fu extends bn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class pu extends bn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class en extends bn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let kh=0;const On=new Rt,Ho=new Wt,mr=new le,Cn=new zn,Yr=new zn,sn=new le;class Tn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?pu:fu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ct().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,i){return On.makeTranslation(t,e,i),this.applyMatrix4(On),this}scale(t,e,i){return On.makeScale(t,e,i),this.applyMatrix4(On),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(t){const e=[];for(let i=0,n=t.length;i<n;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new le,1/0);return}if(t){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(Cn.min,Yr.min),Cn.expandByPoint(sn),sn.addVectors(Cn.max,Yr.max),Cn.expandByPoint(sn)):(Cn.expandByPoint(Yr.min),Cn.expandByPoint(Yr.max))}Cn.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)sn.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(sn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let u=0,l=a.count;u<l;u++)sn.fromBufferAttribute(a,u),c&&(mr.fromBufferAttribute(t,u),sn.add(mr)),n=Math.max(n,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,n=e.position.array,r=e.normal.array,o=e.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],l=[];for(let A=0;A<a;A++)u[A]=new le,l[A]=new le;const d=new le,s=new le,f=new le,p=new kt,v=new kt,g=new kt,m=new le,y=new le;function _(A,N,U){d.fromArray(n,A*3),s.fromArray(n,N*3),f.fromArray(n,U*3),p.fromArray(o,A*2),v.fromArray(o,N*2),g.fromArray(o,U*2),s.sub(d),f.sub(d),v.sub(p),g.sub(p);const x=1/(v.x*g.y-g.x*v.y);isFinite(x)&&(m.copy(s).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(x),y.copy(f).multiplyScalar(v.x).addScaledVector(s,-g.x).multiplyScalar(x),u[A].add(m),u[N].add(m),u[U].add(m),l[A].add(y),l[N].add(y),l[U].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let A=0,N=b.length;A<N;++A){const U=b[A],x=U.start,M=U.count;for(let R=x,L=x+M;R<L;R+=3)_(i[R+0],i[R+1],i[R+2])}const w=new le,T=new le,E=new le,k=new le;function S(A){E.fromArray(r,A*3),k.copy(E);const N=u[A];w.copy(N),w.sub(E.multiplyScalar(E.dot(N))).normalize(),T.crossVectors(k,N);const x=T.dot(l[A])<0?-1:1;c[A*4]=w.x,c[A*4+1]=w.y,c[A*4+2]=w.z,c[A*4+3]=x}for(let A=0,N=b.length;A<N;++A){const U=b[A],x=U.start,M=U.count;for(let R=x,L=x+M;R<L;R+=3)S(i[R+0]),S(i[R+1]),S(i[R+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let s=0,f=i.count;s<f;s++)i.setXYZ(s,0,0,0);const n=new le,r=new le,o=new le,a=new le,c=new le,u=new le,l=new le,d=new le;if(t)for(let s=0,f=t.count;s<f;s+=3){const p=t.getX(s+0),v=t.getX(s+1),g=t.getX(s+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),l.subVectors(o,r),d.subVectors(n,r),l.cross(d),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(l),c.add(l),u.add(l),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let s=0,f=e.count;s<f;s+=3)n.fromBufferAttribute(e,s+0),r.fromBufferAttribute(e,s+1),o.fromBufferAttribute(e,s+2),l.subVectors(o,r),d.subVectors(n,r),l.cross(d),i.setXYZ(s+0,l.x,l.y,l.z),i.setXYZ(s+1,l.x,l.y,l.z),i.setXYZ(s+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)sn.fromBufferAttribute(t,e),sn.normalize(),t.setXYZ(e,sn.x,sn.y,sn.z)}toNonIndexed(){function t(a,c){const u=a.array,l=a.itemSize,d=a.normalized,s=new u.constructor(c.length*l);let f=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*l;for(let m=0;m<l;m++)s[p++]=u[f++]}return new bn(s,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Tn,i=this.index.array,n=this.attributes;for(const a in n){const c=n[a],u=t(c,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let l=0,d=u.length;l<d;l++){const s=u[l],f=t(s,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const u=i[c];t.data.attributes[c]=u.toJSON(t.data)}const n={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],l=[];for(let d=0,s=u.length;d<s;d++){const f=u[d];l.push(f.toJSON(t.data))}l.length>0&&(n[c]=l,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const u in n){const l=n[u];this.setAttribute(u,l.clone(e))}const r=t.morphAttributes;for(const u in r){const l=[],d=r[u];for(let s=0,f=d.length;s<f;s++)l.push(d[s].clone(e));this.morphAttributes[u]=l}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,l=o.length;u<l;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ll=new Rt,Vi=new ho,Ps=new qn,kl=new le,gr=new le,vr=new le,yr=new le,Vo=new le,Ds=new le,Ls=new kt,ks=new kt,Is=new kt,Il=new le,Ol=new le,Bl=new le,Os=new le,Bs=new le;class Qt extends Wt{constructor(t=new Tn,e=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let c=0,u=r.length;c<u;c++){const l=a[c],d=r[c];l!==0&&(Vo.fromBufferAttribute(d,t),o?Ds.addScaledVector(Vo,l):Ds.addScaledVector(Vo.sub(e),l))}e.add(Ds)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Ps.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ps,kl)===null||Vi.origin.distanceToSquared(kl)>(t.far-t.near)**2))&&(Ll.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Ll),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,s=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=s.length;p<v;p++){const g=s[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,w=_;b<w;b+=3){const T=a.getX(b),E=a.getX(b+1),k=a.getX(b+2);n=Us(this,m,t,i,u,l,d,T,E,k),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=a.getX(g),_=a.getX(g+1),b=a.getX(g+2);n=Us(this,o,t,i,u,l,d,y,_,b),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=s.length;p<v;p++){const g=s[p],m=o[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,w=_;b<w;b+=3){const T=b,E=b+1,k=b+2;n=Us(this,m,t,i,u,l,d,T,E,k),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=g.materialIndex,e.push(n))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=g,_=g+1,b=g+2;n=Us(this,o,t,i,u,l,d,y,_,b),n&&(n.faceIndex=Math.floor(g/3),e.push(n))}}}}function Ih(h,t,e,i,n,r,o,a){let c;if(t.side===En?c=i.intersectTriangle(o,r,n,!0,a):c=i.intersectTriangle(n,r,o,t.side===_i,a),c===null)return null;Bs.copy(a),Bs.applyMatrix4(h.matrixWorld);const u=e.ray.origin.distanceTo(Bs);return u<e.near||u>e.far?null:{distance:u,point:Bs.clone(),object:h}}function Us(h,t,e,i,n,r,o,a,c,u){h.getVertexPosition(a,gr),h.getVertexPosition(c,vr),h.getVertexPosition(u,yr);const l=Ih(h,t,e,i,gr,vr,yr,Os);if(l){n&&(Ls.fromBufferAttribute(n,a),ks.fromBufferAttribute(n,c),Is.fromBufferAttribute(n,u),l.uv=Un.getInterpolation(Os,gr,vr,yr,Ls,ks,Is,new kt)),r&&(Ls.fromBufferAttribute(r,a),ks.fromBufferAttribute(r,c),Is.fromBufferAttribute(r,u),l.uv1=Un.getInterpolation(Os,gr,vr,yr,Ls,ks,Is,new kt),l.uv2=l.uv1),o&&(Il.fromBufferAttribute(o,a),Ol.fromBufferAttribute(o,c),Bl.fromBufferAttribute(o,u),l.normal=Un.getInterpolation(Os,gr,vr,yr,Il,Ol,Bl,new le),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));const d={a,b:c,c:u,normal:new le,materialIndex:0};Un.getNormal(gr,vr,yr,d.normal),l.face=d}return l}class ys extends Tn{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const c=[],u=[],l=[],d=[];let s=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(l,3)),this.setAttribute("uv",new en(d,2));function p(v,g,m,y,_,b,w,T,E,k,S){const A=b/E,N=w/k,U=b/2,x=w/2,M=T/2,R=E+1,L=k+1;let F=0,q=0;const j=new le;for(let W=0;W<L;W++){const D=W*N-x;for(let C=0;C<R;C++){const P=C*A-U;j[v]=P*y,j[g]=D*_,j[m]=M,u.push(j.x,j.y,j.z),j[v]=0,j[g]=0,j[m]=T>0?1:-1,l.push(j.x,j.y,j.z),d.push(C/E),d.push(1-W/k),F+=1}}for(let W=0;W<k;W++)for(let D=0;D<E;D++){const C=s+D+R*W,P=s+D+R*(W+1),O=s+(D+1)+R*(W+1),B=s+(D+1)+R*W;c.push(C,P,B),c.push(P,O,B),q+=6}a.addGroup(f,q,S),f+=q,s+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(h){const t={};for(const e in h){t[e]={};for(const i in h[e]){const n=h[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function yn(h){const t={};for(let e=0;e<h.length;e++){const i=Or(h[e]);for(const n in i)t[n]=i[n]}return t}function Oh(h){const t=[];for(let e=0;e<h.length;e++)t.push(h[e].clone());return t}function mu(h){return h.getRenderTarget()===null?h.outputColorSpace:ni}const Bh={clone:Or,merge:yn};var Uh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uh,this.fragmentShader=Nh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=Oh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}let gu=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class _n extends gu{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ir*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;r+=o.offsetX*n/c,e-=o.offsetY*i/u,n*=o.width/c,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const _r=-90,br=1;class Fh extends Wt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const n=new _n(_r,br,t,e);n.layers=this.layers,this.add(n);const r=new _n(_r,br,t,e);r.layers=this.layers,this.add(r);const o=new _n(_r,br,t,e);o.layers=this.layers,this.add(o);const a=new _n(_r,br,t,e);a.layers=this.layers,this.add(a);const c=new _n(_r,br,t,e);c.layers=this.layers,this.add(c);const u=new _n(_r,br,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,c]=e;for(const u of e)this.remove(u);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[n,r,o,a,c,u]=this.children,l=t.getRenderTarget(),d=t.toneMapping,s=t.xr.enabled;t.toneMapping=vi,t.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,n),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,c),i.texture.generateMipmaps=f,t.setRenderTarget(i,5),t.render(e,u),t.setRenderTarget(l),t.toneMapping=d,t.xr.enabled=s,i.texture.needsPMREMUpdate=!0}}class vu extends an{constructor(t,e,i,n,r,o,a,c,u,l){t=t!==void 0?t:[],e=e!==void 0?e:Rr,super(t,e,i,n,r,o,a,c,u,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zh extends er{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];e.encoding!==void 0&&(ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===$i?bt:Ji),this.texture=new vu(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ys(5,5,5),r=new tr({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Bi});r.uniforms.tEquirect.value=e;const o=new Qt(n,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Mn),new Fh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const Go=new le,jh=new le,Hh=new Ct;class ki{constructor(t=new le(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Go.subVectors(i,e).cross(jh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Go),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Hh.getNormalMatrix(t),n=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new qn,Ns=new le;class Ea{constructor(t=new ki,e=new ki,i=new ki,n=new ki,r=new ki,o=new ki){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){const i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],c=n[3],u=n[4],l=n[5],d=n[6],s=n[7],f=n[8],p=n[9],v=n[10],g=n[11],m=n[12],y=n[13],_=n[14],b=n[15];if(i[0].setComponents(c-r,s-u,g-f,b-m).normalize(),i[1].setComponents(c+r,s+u,g+f,b+m).normalize(),i[2].setComponents(c+o,s+l,g+p,b+y).normalize(),i[3].setComponents(c-o,s-l,g-p,b-y).normalize(),i[4].setComponents(c-a,s-d,g-v,b-_).normalize(),e===pi)i[5].setComponents(c+a,s+d,g+v,b+_).normalize();else if(e===so)i[5].setComponents(a,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Ns.x=n.normal.x>0?t.max.x:t.min.x,Ns.y=n.normal.y>0?t.max.y:t.min.y,Ns.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yu(){let h=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=h.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=h.requestAnimationFrame(n),t=!0)},stop:function(){h.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){h=r}}}function Vh(h,t){const e=t.isWebGL2,i=new WeakMap;function n(u,l){const d=u.array,s=u.usage,f=h.createBuffer();h.bindBuffer(l,f),h.bufferData(l,d,s),u.onUploadCallback();let p;if(d instanceof Float32Array)p=h.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)p=h.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else p=h.UNSIGNED_SHORT;else if(d instanceof Int16Array)p=h.SHORT;else if(d instanceof Uint32Array)p=h.UNSIGNED_INT;else if(d instanceof Int32Array)p=h.INT;else if(d instanceof Int8Array)p=h.BYTE;else if(d instanceof Uint8Array)p=h.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)p=h.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:p,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function r(u,l,d){const s=l.array,f=l.updateRange;h.bindBuffer(d,u),f.count===-1?h.bufferSubData(d,0,s):(e?h.bufferSubData(d,f.offset*s.BYTES_PER_ELEMENT,s,f.offset,f.count):h.bufferSubData(d,f.offset*s.BYTES_PER_ELEMENT,s.subarray(f.offset,f.offset+f.count)),f.count=-1),l.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const l=i.get(u);l&&(h.deleteBuffer(l.buffer),i.delete(u))}function c(u,l){if(u.isGLBufferAttribute){const s=i.get(u);(!s||s.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,n(u,l)):d.version<u.version&&(r(d.buffer,u,l),d.version=u.version)}return{get:o,remove:a,update:c}}class ir extends Tn{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(n),u=a+1,l=c+1,d=t/a,s=e/c,f=[],p=[],v=[],g=[];for(let m=0;m<l;m++){const y=m*s-o;for(let _=0;_<u;_++){const b=_*d-r;p.push(b,-y,0),v.push(0,0,1),g.push(_/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<a;y++){const _=y+u*m,b=y+u*(m+1),w=y+1+u*(m+1),T=y+1+u*m;f.push(_,b,T),f.push(b,w,T)}this.setIndex(f),this.setAttribute("position",new en(p,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.width,t.height,t.widthSegments,t.heightSegments)}}var Gh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kh=`#ifdef USE_ALPHAHASH
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
#endif`,Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Yh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$h=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ef=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tf=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hf=`#define PI 3.141592653589793
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
} // validated`,ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_f="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
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
#endif`,wf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Af=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pf=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
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
#endif`,Bf=`#ifdef USE_ENVMAP
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
#endif`,Uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jf=`PhysicalMaterial material;
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
#endif`,Hf=`struct PhysicalMaterial {
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
}`,Vf=`
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Wf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$f=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Jf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qf=`#if defined( USE_POINTS_UV )
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
#endif`,ep=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,np=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ip=`#ifdef USE_MORPHNORMALS
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
#endif`,rp=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
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
#endif`,op=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ap=`float getShadowMask() {
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
}`,Cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,$p=`#define DISTANCE
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
}`,Jp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 diffuse;
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
}`,rm=`#define LAMBERT
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
}`,sm=`#define LAMBERT
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
}`,om=`#define MATCAP
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
}`,am=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,um=`#define PHONG
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
}`,dm=`#define PHONG
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
}`,hm=`#define STANDARD
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
}`,fm=`#define STANDARD
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
}`,pm=`#define TOON
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
}`,mm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,_m=`uniform vec3 color;
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
}`,bm=`uniform float rotation;
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
}`,xm=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:Gh,alphahash_pars_fragment:Kh,alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:Yh,aomap_fragment:$h,aomap_pars_fragment:Jh,begin_vertex:Zh,beginnormal_vertex:Qh,bsdfs:ef,iridescence_fragment:tf,bumpmap_pars_fragment:nf,clipping_planes_fragment:rf,clipping_planes_pars_fragment:sf,clipping_planes_pars_vertex:of,clipping_planes_vertex:af,color_fragment:lf,color_pars_fragment:cf,color_pars_vertex:uf,color_vertex:df,common:hf,cube_uv_reflection_fragment:ff,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:vf,emissivemap_pars_fragment:yf,colorspace_fragment:_f,colorspace_pars_fragment:bf,envmap_fragment:xf,envmap_common_pars_fragment:wf,envmap_pars_fragment:Sf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Bf,envmap_vertex:Ef,fog_vertex:Tf,fog_pars_vertex:Af,fog_fragment:Cf,fog_pars_fragment:Rf,gradientmap_pars_fragment:Pf,lightmap_fragment:Df,lightmap_pars_fragment:Lf,lights_lambert_fragment:kf,lights_lambert_pars_fragment:If,lights_pars_begin:Of,lights_toon_fragment:Uf,lights_toon_pars_fragment:Nf,lights_phong_fragment:Ff,lights_phong_pars_fragment:zf,lights_physical_fragment:jf,lights_physical_pars_fragment:Hf,lights_fragment_begin:Vf,lights_fragment_maps:Gf,lights_fragment_end:Kf,logdepthbuf_fragment:Wf,logdepthbuf_pars_fragment:Xf,logdepthbuf_pars_vertex:qf,logdepthbuf_vertex:Yf,map_fragment:$f,map_pars_fragment:Jf,map_particle_fragment:Zf,map_particle_pars_fragment:Qf,metalnessmap_fragment:ep,metalnessmap_pars_fragment:tp,morphcolor_vertex:np,morphnormal_vertex:ip,morphtarget_pars_vertex:rp,morphtarget_vertex:sp,normal_fragment_begin:op,normal_fragment_maps:ap,normal_pars_fragment:lp,normal_pars_vertex:cp,normal_vertex:up,normalmap_pars_fragment:dp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:pp,iridescence_pars_fragment:mp,opaque_fragment:gp,packing:vp,premultiplied_alpha_fragment:yp,project_vertex:_p,dithering_fragment:bp,dithering_pars_fragment:xp,roughnessmap_fragment:wp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:Ep,shadowmap_vertex:Tp,shadowmask_pars_fragment:Ap,skinbase_vertex:Cp,skinning_pars_vertex:Rp,skinning_vertex:Pp,skinnormal_vertex:Dp,specularmap_fragment:Lp,specularmap_pars_fragment:kp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Op,transmission_fragment:Bp,transmission_pars_fragment:Up,uv_pars_fragment:Np,uv_pars_vertex:Fp,uv_vertex:zp,worldpos_vertex:jp,background_vert:Hp,background_frag:Vp,backgroundCube_vert:Gp,backgroundCube_frag:Kp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distanceRGBA_vert:$p,distanceRGBA_frag:Jp,equirect_vert:Zp,equirect_frag:Qp,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:rm,meshlambert_frag:sm,meshmatcap_vert:om,meshmatcap_frag:am,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:um,meshphong_frag:dm,meshphysical_vert:hm,meshphysical_frag:fm,meshtoon_vert:pm,meshtoon_frag:mm,points_vert:gm,points_frag:vm,shadow_vert:ym,shadow_frag:_m,sprite_vert:bm,sprite_frag:xm},st={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Zn={basic:{uniforms:yn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:yn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new St(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:yn([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:yn([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:yn([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new St(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:yn([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:yn([st.points,st.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:yn([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:yn([st.common,st.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:yn([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:yn([st.sprite,st.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:yn([st.common,st.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:yn([st.lights,st.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Zn.physical={uniforms:yn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Fs={r:0,b:0,g:0};function wm(h,t,e,i,n,r,o){const a=new St(0);let c=r===!0?0:1,u,l,d=null,s=0,f=null;function p(g,m){let y=!1,_=m.isScene===!0?m.background:null;switch(_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,c):_&&_.isColor&&(v(_,1),y=!0),h.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),y=!0;break}(h.autoClear||y)&&h.clear(h.autoClearColor,h.autoClearDepth,h.autoClearStencil),_&&(_.isCubeTexture||_.mapping===uo)?(l===void 0&&(l=new Qt(new ys(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,E,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=_.colorSpace!==bt,(d!==_||s!==_.version||f!==h.toneMapping)&&(l.material.needsUpdate=!0,d=_,s=_.version,f=h.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Qt(new ir(2,2),new tr({name:"BackgroundMaterial",uniforms:Or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.colorSpace!==bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||s!==_.version||f!==h.toneMapping)&&(u.material.needsUpdate=!0,d=_,s=_.version,f=h.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function v(g,m){g.getRGB(Fs,mu(h)),i.buffers.color.setClear(Fs.r,Fs.g,Fs.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(g,m=1){a.set(g),c=m,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(a,c)},render:p}}function Sm(h,t,e,i){const n=h.getParameter(h.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=g(null);let u=c,l=!1;function d(M,R,L,F,q){let j=!1;if(o){const W=v(F,L,R);u!==W&&(u=W,f(u.object)),j=m(M,F,L,q),j&&y(M,F,L,q)}else{const W=R.wireframe===!0;(u.geometry!==F.id||u.program!==L.id||u.wireframe!==W)&&(u.geometry=F.id,u.program=L.id,u.wireframe=W,j=!0)}q!==null&&e.update(q,h.ELEMENT_ARRAY_BUFFER),(j||l)&&(l=!1,k(M,R,L,F),q!==null&&h.bindBuffer(h.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function s(){return i.isWebGL2?h.createVertexArray():r.createVertexArrayOES()}function f(M){return i.isWebGL2?h.bindVertexArray(M):r.bindVertexArrayOES(M)}function p(M){return i.isWebGL2?h.deleteVertexArray(M):r.deleteVertexArrayOES(M)}function v(M,R,L){const F=L.wireframe===!0;let q=a[M.id];q===void 0&&(q={},a[M.id]=q);let j=q[R.id];j===void 0&&(j={},q[R.id]=j);let W=j[F];return W===void 0&&(W=g(s()),j[F]=W),W}function g(M){const R=[],L=[],F=[];for(let q=0;q<n;q++)R[q]=0,L[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:F,object:M,attributes:{},index:null}}function m(M,R,L,F){const q=u.attributes,j=R.attributes;let W=0;const D=L.getAttributes();for(const C in D)if(D[C].location>=0){const O=q[C];let B=j[C];if(B===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&(B=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&(B=M.instanceColor)),O===void 0||O.attribute!==B||B&&O.data!==B.data)return!0;W++}return u.attributesNum!==W||u.index!==F}function y(M,R,L,F){const q={},j=R.attributes;let W=0;const D=L.getAttributes();for(const C in D)if(D[C].location>=0){let O=j[C];O===void 0&&(C==="instanceMatrix"&&M.instanceMatrix&&(O=M.instanceMatrix),C==="instanceColor"&&M.instanceColor&&(O=M.instanceColor));const B={};B.attribute=O,O&&O.data&&(B.data=O.data),q[C]=B,W++}u.attributes=q,u.attributesNum=W,u.index=F}function _(){const M=u.newAttributes;for(let R=0,L=M.length;R<L;R++)M[R]=0}function b(M){w(M,0)}function w(M,R){const L=u.newAttributes,F=u.enabledAttributes,q=u.attributeDivisors;L[M]=1,F[M]===0&&(h.enableVertexAttribArray(M),F[M]=1),q[M]!==R&&((i.isWebGL2?h:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](M,R),q[M]=R)}function T(){const M=u.newAttributes,R=u.enabledAttributes;for(let L=0,F=R.length;L<F;L++)R[L]!==M[L]&&(h.disableVertexAttribArray(L),R[L]=0)}function E(M,R,L,F,q,j,W){W===!0?h.vertexAttribIPointer(M,R,L,q,j):h.vertexAttribPointer(M,R,L,F,q,j)}function k(M,R,L,F){if(i.isWebGL2===!1&&(M.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const q=F.attributes,j=L.getAttributes(),W=R.defaultAttributeValues;for(const D in j){const C=j[D];if(C.location>=0){let P=q[D];if(P===void 0&&(D==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),D==="instanceColor"&&M.instanceColor&&(P=M.instanceColor)),P!==void 0){const O=P.normalized,B=P.itemSize,G=e.get(P);if(G===void 0)continue;const Y=G.buffer,H=G.type,te=G.bytesPerElement,ue=i.isWebGL2===!0&&(H===h.INT||H===h.UNSIGNED_INT||P.gpuType===$c);if(P.isInterleavedBufferAttribute){const _e=P.data,J=_e.stride,re=P.offset;if(_e.isInstancedInterleavedBuffer){for(let pe=0;pe<C.locationSize;pe++)w(C.location+pe,_e.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let pe=0;pe<C.locationSize;pe++)b(C.location+pe);h.bindBuffer(h.ARRAY_BUFFER,Y);for(let pe=0;pe<C.locationSize;pe++)E(C.location+pe,B/C.locationSize,H,O,J*te,(re+B/C.locationSize*pe)*te,ue)}else{if(P.isInstancedBufferAttribute){for(let _e=0;_e<C.locationSize;_e++)w(C.location+_e,P.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let _e=0;_e<C.locationSize;_e++)b(C.location+_e);h.bindBuffer(h.ARRAY_BUFFER,Y);for(let _e=0;_e<C.locationSize;_e++)E(C.location+_e,B/C.locationSize,H,O,B*te,B/C.locationSize*_e*te,ue)}}else if(W!==void 0){const O=W[D];if(O!==void 0)switch(O.length){case 2:h.vertexAttrib2fv(C.location,O);break;case 3:h.vertexAttrib3fv(C.location,O);break;case 4:h.vertexAttrib4fv(C.location,O);break;default:h.vertexAttrib1fv(C.location,O)}}}}T()}function S(){U();for(const M in a){const R=a[M];for(const L in R){const F=R[L];for(const q in F)p(F[q].object),delete F[q];delete R[L]}delete a[M]}}function A(M){if(a[M.id]===void 0)return;const R=a[M.id];for(const L in R){const F=R[L];for(const q in F)p(F[q].object),delete F[q];delete R[L]}delete a[M.id]}function N(M){for(const R in a){const L=a[R];if(L[M.id]===void 0)continue;const F=L[M.id];for(const q in F)p(F[q].object),delete F[q];delete L[M.id]}}function U(){x(),l=!0,u!==c&&(u=c,f(u.object))}function x(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:U,resetDefaultState:x,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:b,disableUnusedAttributes:T}}function Mm(h,t,e,i){const n=i.isWebGL2;let r;function o(u){r=u}function a(u,l){h.drawArrays(r,u,l),e.update(l,r,1)}function c(u,l,d){if(d===0)return;let s,f;if(n)s=h,f="drawArraysInstanced";else if(s=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",s===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}s[f](r,u,l,d),e.update(l,r,d)}this.setMode=o,this.render=a,this.renderInstances=c}function Em(h,t,e){let i;function n(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=h.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(E){if(E==="highp"){if(h.getShaderPrecisionFormat(h.VERTEX_SHADER,h.HIGH_FLOAT).precision>0&&h.getShaderPrecisionFormat(h.FRAGMENT_SHADER,h.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&h.getShaderPrecisionFormat(h.VERTEX_SHADER,h.MEDIUM_FLOAT).precision>0&&h.getShaderPrecisionFormat(h.FRAGMENT_SHADER,h.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&h.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=o||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,d=h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS),s=h.getParameter(h.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=h.getParameter(h.MAX_TEXTURE_SIZE),p=h.getParameter(h.MAX_CUBE_MAP_TEXTURE_SIZE),v=h.getParameter(h.MAX_VERTEX_ATTRIBS),g=h.getParameter(h.MAX_VERTEX_UNIFORM_VECTORS),m=h.getParameter(h.MAX_VARYING_VECTORS),y=h.getParameter(h.MAX_FRAGMENT_UNIFORM_VECTORS),_=s>0,b=o||t.has("OES_texture_float"),w=_&&b,T=o?h.getParameter(h.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:n,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:d,maxVertexTextures:s,maxTextureSize:f,maxCubemapSize:p,maxAttributes:v,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:w,maxSamples:T}}function Tm(h){const t=this;let e=null,i=0,n=!1,r=!1;const o=new ki,a=new Ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,s){const f=d.length!==0||s||i!==0||n;return n=s,i=d.length,f},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,s){e=l(d,s,0)},this.setState=function(d,s,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=h.get(d);if(!n||p===null||p.length===0||r&&!g)r?l(null):u();else{const y=r?0:i,_=y*4;let b=m.clippingState||null;c.value=b,b=l(p,s,_,f);for(let w=0;w!==_;++w)b[w]=e[w];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(d,s,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,p!==!0||g===null){const m=f+v*4,y=s.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,b=f;_!==v;++_,b+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Am(h){let t=new WeakMap;function e(o,a){return a===aa?o.mapping=Rr:a===la&&(o.mapping=Pr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===aa||a===la)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new zh(c.height/2);return u.fromEquirectangularTexture(h,o),t.set(o,u),o.addEventListener("dispose",n),e(u.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ta extends gu{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,c=n-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Er=4,Ul=[.125,.215,.35,.446,.526,.582],Xi=20,Ko=new Ta,Nl=new St;let Wo=null;const Wi=(1+Math.sqrt(5))/2,xr=1/Wi,Fl=[new le(1,1,1),new le(-1,1,1),new le(1,1,-1),new le(-1,1,-1),new le(0,Wi,xr),new le(0,Wi,-xr),new le(xr,0,Wi),new le(-xr,0,Wi),new le(Wi,xr,0),new le(-Wi,xr,0)];class zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Wo=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo),t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:ds,format:Fn,colorSpace:ni,depthBuffer:!1},n=jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cm(r)),this._blurMaterial=Rm(r,t,e)}return n}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,i,n){const a=new _n(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,s=l.toneMapping;l.getClearColor(Nl),l.toneMapping=vi,l.autoClear=!1;const f=new Pn({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),p=new Qt(new ys,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Nl),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,c[m],0),a.lookAt(u[m],0,0)):y===1?(a.up.set(0,0,c[m]),a.lookAt(0,u[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,u[m]));const _=this._cubeSize;zs(n,y*_,m>2?_:0,_,_),l.setRenderTarget(n),v&&l.render(p,a),l.render(t,a)}p.geometry.dispose(),p.material.dispose(),l.toneMapping=s,l.autoClear=d,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Rr||t.mapping===Pr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;zs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Ko)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=Fl[(n-1)%Fl.length];this._blur(t,n-1,n,r,o)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new Qt(this._lodPlanes[n],u),s=u.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),v=r/p,g=isFinite(r)?1+Math.floor(l*v):Xi;g>Xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Xi}`);const m=[];let y=0;for(let E=0;E<Xi;++E){const k=E/v,S=Math.exp(-k*k/2);m.push(S),E===0?y+=S:E<g&&(y+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;s.envMap.value=t.texture,s.samples.value=g,s.weights.value=m,s.latitudinal.value=o==="latitudinal",a&&(s.poleAxis.value=a);const{_lodMax:_}=this;s.dTheta.value=p,s.mipInt.value=_-i;const b=this._sizeLods[n],w=3*b*(n>_-Er?n-_+Er:0),T=4*(this._cubeSize-b);zs(e,w,T,3*b,2*b),c.setRenderTarget(e),c.render(d,Ko)}}function Cm(h){const t=[],e=[],i=[];let n=h;const r=h-Er+1+Ul.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let c=1/a;o>h-Er?c=Ul[o-h+Er-1]:o===0&&(c=0),i.push(c);const u=1/(a-2),l=-u,d=1+u,s=[l,l,d,l,d,d,l,l,d,d,l,d],f=6,p=6,v=3,g=2,m=1,y=new Float32Array(v*p*f),_=new Float32Array(g*p*f),b=new Float32Array(m*p*f);for(let T=0;T<f;T++){const E=T%3*2/3-1,k=T>2?0:-1,S=[E,k,0,E+2/3,k,0,E+2/3,k+1,0,E,k,0,E+2/3,k+1,0,E,k+1,0];y.set(S,v*p*T),_.set(s,g*p*T);const A=[T,T,T,T,T,T];b.set(A,m*p*T)}const w=new Tn;w.setAttribute("position",new bn(y,v)),w.setAttribute("uv",new bn(_,g)),w.setAttribute("faceIndex",new bn(b,m)),t.push(w),n>Er&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jl(h,t,e){const i=new er(h,t,e);return i.texture.mapping=uo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zs(h,t,e,i,n){h.viewport.set(t,e,i,n),h.scissor.set(t,e,i,n)}function Rm(h,t,e){const i=new Float32Array(Xi),n=new le(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${h}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Hl(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Aa(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Vl(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Aa(){return`

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
	`}function Pm(h){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===aa||c===la,l=c===Rr||c===Pr;if(u||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new zl(h)),d=u?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||l&&d&&n(d)){e===null&&(e=new zl(h));const s=u?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,s),a.addEventListener("dispose",r),s.texture}else return null}}}return a}function n(a){let c=0;const u=6;for(let l=0;l<u;l++)a[l]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Dm(h){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=h.getExtension("WEBGL_depth_texture")||h.getExtension("MOZ_WEBGL_depth_texture")||h.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=h.getExtension("EXT_texture_filter_anisotropic")||h.getExtension("MOZ_EXT_texture_filter_anisotropic")||h.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=h.getExtension("WEBGL_compressed_texture_s3tc")||h.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=h.getExtension("WEBGL_compressed_texture_pvrtc")||h.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=h.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const n=e(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Lm(h,t,e,i){const n={},r=new WeakMap;function o(d){const s=d.target;s.index!==null&&t.remove(s.index);for(const p in s.attributes)t.remove(s.attributes[p]);for(const p in s.morphAttributes){const v=s.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)t.remove(v[g])}s.removeEventListener("dispose",o),delete n[s.id];const f=r.get(s);f&&(t.remove(f),r.delete(s)),i.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,e.memory.geometries--}function a(d,s){return n[s.id]===!0||(s.addEventListener("dispose",o),n[s.id]=!0,e.memory.geometries++),s}function c(d){const s=d.attributes;for(const p in s)t.update(s[p],h.ARRAY_BUFFER);const f=d.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)t.update(v[g],h.ARRAY_BUFFER)}}function u(d){const s=[],f=d.index,p=d.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let _=0,b=y.length;_<b;_+=3){const w=y[_+0],T=y[_+1],E=y[_+2];s.push(w,T,T,E,E,w)}}else{const y=p.array;v=p.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const w=_+0,T=_+1,E=_+2;s.push(w,T,T,E,E,w)}}const g=new(au(s)?pu:fu)(s,1);g.version=v;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function l(d){const s=r.get(d);if(s){const f=d.index;f!==null&&s.version<f.version&&u(d)}else u(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:l}}function km(h,t,e,i){const n=i.isWebGL2;let r;function o(s){r=s}let a,c;function u(s){a=s.type,c=s.bytesPerElement}function l(s,f){h.drawElements(r,f,a,s*c),e.update(f,r,1)}function d(s,f,p){if(p===0)return;let v,g;if(n)v=h,g="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](r,f,a,s*c,p),e.update(f,r,p)}this.setMode=o,this.setIndex=u,this.render=l,this.renderInstances=d}function Im(h){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case h.TRIANGLES:e.triangles+=a*(r/3);break;case h.LINES:e.lines+=a*(r/2);break;case h.LINE_STRIP:e.lines+=a*(r-1);break;case h.LINE_LOOP:e.lines+=a*r;break;case h.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Om(h,t){return h[0]-t[0]}function Bm(h,t){return Math.abs(t[1])-Math.abs(h[1])}function Um(h,t,e){const i={},n=new Float32Array(8),r=new WeakMap,o=new jt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,l,d){const s=u.morphTargetInfluences;if(t.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(l);if(g===void 0||g.count!==v){let R=function(){x.dispose(),r.delete(l),l.removeEventListener("dispose",R)};var f=R;g!==void 0&&g.texture.dispose();const _=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,w=l.morphAttributes.color!==void 0,T=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],k=l.morphAttributes.color||[];let S=0;_===!0&&(S=1),b===!0&&(S=2),w===!0&&(S=3);let A=l.attributes.position.count*S,N=1;A>t.maxTextureSize&&(N=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const U=new Float32Array(A*N*4*v),x=new uu(U,A,N,v);x.type=fi,x.needsUpdate=!0;const M=S*4;for(let L=0;L<v;L++){const F=T[L],q=E[L],j=k[L],W=A*N*4*L;for(let D=0;D<F.count;D++){const C=D*M;_===!0&&(o.fromBufferAttribute(F,D),U[W+C+0]=o.x,U[W+C+1]=o.y,U[W+C+2]=o.z,U[W+C+3]=0),b===!0&&(o.fromBufferAttribute(q,D),U[W+C+4]=o.x,U[W+C+5]=o.y,U[W+C+6]=o.z,U[W+C+7]=0),w===!0&&(o.fromBufferAttribute(j,D),U[W+C+8]=o.x,U[W+C+9]=o.y,U[W+C+10]=o.z,U[W+C+11]=j.itemSize===4?o.w:1)}}g={count:v,texture:x,size:new kt(A,N)},r.set(l,g),l.addEventListener("dispose",R)}let m=0;for(let _=0;_<s.length;_++)m+=s[_];const y=l.morphTargetsRelative?1:1-m;d.getUniforms().setValue(h,"morphTargetBaseInfluence",y),d.getUniforms().setValue(h,"morphTargetInfluences",s),d.getUniforms().setValue(h,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(h,"morphTargetsTextureSize",g.size)}else{const p=s===void 0?0:s.length;let v=i[l.id];if(v===void 0||v.length!==p){v=[];for(let b=0;b<p;b++)v[b]=[b,0];i[l.id]=v}for(let b=0;b<p;b++){const w=v[b];w[0]=b,w[1]=s[b]}v.sort(Bm);for(let b=0;b<8;b++)b<p&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Om);const g=l.morphAttributes.position,m=l.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const w=a[b],T=w[0],E=w[1];T!==Number.MAX_SAFE_INTEGER&&E?(g&&l.getAttribute("morphTarget"+b)!==g[T]&&l.setAttribute("morphTarget"+b,g[T]),m&&l.getAttribute("morphNormal"+b)!==m[T]&&l.setAttribute("morphNormal"+b,m[T]),n[b]=E,y+=E):(g&&l.hasAttribute("morphTarget"+b)===!0&&l.deleteAttribute("morphTarget"+b),m&&l.hasAttribute("morphNormal"+b)===!0&&l.deleteAttribute("morphNormal"+b),n[b]=0)}const _=l.morphTargetsRelative?1:1-y;d.getUniforms().setValue(h,"morphTargetBaseInfluence",_),d.getUniforms().setValue(h,"morphTargetInfluences",n)}}return{update:c}}function Nm(h,t,e,i){let n=new WeakMap;function r(c){const u=i.render.frame,l=c.geometry,d=t.get(c,l);if(n.get(d)!==u&&(t.update(d),n.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),n.get(c)!==u&&(e.update(c.instanceMatrix,h.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,h.ARRAY_BUFFER),n.set(c,u))),c.isSkinnedMesh){const s=c.skeleton;n.get(s)!==u&&(s.update(),n.set(s,u))}return d}function o(){n=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const _u=new an,bu=new uu,xu=new Mh,wu=new vu,Gl=[],Kl=[],Wl=new Float32Array(16),Xl=new Float32Array(9),ql=new Float32Array(4);function zr(h,t,e){const i=h[0];if(i<=0||i>0)return h;const n=t*e;let r=Gl[n];if(r===void 0&&(r=new Float32Array(n),Gl[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,h[o].toArray(r,a)}return r}function tn(h,t){if(h.length!==t.length)return!1;for(let e=0,i=h.length;e<i;e++)if(h[e]!==t[e])return!1;return!0}function nn(h,t){for(let e=0,i=t.length;e<i;e++)h[e]=t[e]}function po(h,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let i=0;i!==t;++i)e[i]=h.allocateTextureUnit();return e}function Fm(h,t){const e=this.cache;e[0]!==t&&(h.uniform1f(this.addr,t),e[0]=t)}function zm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(h.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;h.uniform2fv(this.addr,t),nn(e,t)}}function jm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(h.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(h.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(tn(e,t))return;h.uniform3fv(this.addr,t),nn(e,t)}}function Hm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(h.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;h.uniform4fv(this.addr,t),nn(e,t)}}function Vm(h,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;h.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(tn(e,i))return;ql.set(i),h.uniformMatrix2fv(this.addr,!1,ql),nn(e,i)}}function Gm(h,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;h.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(tn(e,i))return;Xl.set(i),h.uniformMatrix3fv(this.addr,!1,Xl),nn(e,i)}}function Km(h,t){const e=this.cache,i=t.elements;if(i===void 0){if(tn(e,t))return;h.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(tn(e,i))return;Wl.set(i),h.uniformMatrix4fv(this.addr,!1,Wl),nn(e,i)}}function Wm(h,t){const e=this.cache;e[0]!==t&&(h.uniform1i(this.addr,t),e[0]=t)}function Xm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(h.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;h.uniform2iv(this.addr,t),nn(e,t)}}function qm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(h.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;h.uniform3iv(this.addr,t),nn(e,t)}}function Ym(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(h.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;h.uniform4iv(this.addr,t),nn(e,t)}}function $m(h,t){const e=this.cache;e[0]!==t&&(h.uniform1ui(this.addr,t),e[0]=t)}function Jm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(h.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(tn(e,t))return;h.uniform2uiv(this.addr,t),nn(e,t)}}function Zm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(h.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(tn(e,t))return;h.uniform3uiv(this.addr,t),nn(e,t)}}function Qm(h,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(h.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(tn(e,t))return;h.uniform4uiv(this.addr,t),nn(e,t)}}function eg(h,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(h.uniform1i(this.addr,n),i[0]=n),e.setTexture2D(t||_u,n)}function tg(h,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(h.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||xu,n)}function ng(h,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(h.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||wu,n)}function ig(h,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(h.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||bu,n)}function rg(h){switch(h){case 5126:return Fm;case 35664:return zm;case 35665:return jm;case 35666:return Hm;case 35674:return Vm;case 35675:return Gm;case 35676:return Km;case 5124:case 35670:return Wm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return $m;case 36294:return Jm;case 36295:return Zm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}function sg(h,t){h.uniform1fv(this.addr,t)}function og(h,t){const e=zr(t,this.size,2);h.uniform2fv(this.addr,e)}function ag(h,t){const e=zr(t,this.size,3);h.uniform3fv(this.addr,e)}function lg(h,t){const e=zr(t,this.size,4);h.uniform4fv(this.addr,e)}function cg(h,t){const e=zr(t,this.size,4);h.uniformMatrix2fv(this.addr,!1,e)}function ug(h,t){const e=zr(t,this.size,9);h.uniformMatrix3fv(this.addr,!1,e)}function dg(h,t){const e=zr(t,this.size,16);h.uniformMatrix4fv(this.addr,!1,e)}function hg(h,t){h.uniform1iv(this.addr,t)}function fg(h,t){h.uniform2iv(this.addr,t)}function pg(h,t){h.uniform3iv(this.addr,t)}function mg(h,t){h.uniform4iv(this.addr,t)}function gg(h,t){h.uniform1uiv(this.addr,t)}function vg(h,t){h.uniform2uiv(this.addr,t)}function yg(h,t){h.uniform3uiv(this.addr,t)}function _g(h,t){h.uniform4uiv(this.addr,t)}function bg(h,t,e){const i=this.cache,n=t.length,r=po(e,n);tn(i,r)||(h.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||_u,r[o])}function xg(h,t,e){const i=this.cache,n=t.length,r=po(e,n);tn(i,r)||(h.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||xu,r[o])}function wg(h,t,e){const i=this.cache,n=t.length,r=po(e,n);tn(i,r)||(h.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||wu,r[o])}function Sg(h,t,e){const i=this.cache,n=t.length,r=po(e,n);tn(i,r)||(h.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||bu,r[o])}function Mg(h){switch(h){case 5126:return sg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return vg;case 36295:return yg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Sg}}class Eg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=rg(e.type)}}class Tg{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Mg(e.type)}}class Ag{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Xo=/(\w+)(\])?(\[|\.)?/g;function Yl(h,t){h.seq.push(t),h.map[t.id]=t}function Cg(h,t,e){const i=h.name,n=i.length;for(Xo.lastIndex=0;;){const r=Xo.exec(i),o=Xo.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===n){Yl(e,u===void 0?new Eg(a,h,t):new Tg(a,h,t));break}else{let d=e.map[a];d===void 0&&(d=new Ag(a),Yl(e,d)),e=d}}}class Ys{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Cg(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function $l(h,t,e){const i=h.createShader(t);return h.shaderSource(i,e),h.compileShader(i),i}let Rg=0;function Pg(h,t){const e=h.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Dg(h){switch(h){case ni:return["Linear","( value )"];case bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",h),["Linear","( value )"]}}function Jl(h,t,e){const i=h.getShaderParameter(t,h.COMPILE_STATUS),n=h.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Pg(h.getShaderSource(t),o)}else return n}function Lg(h,t){const e=Dg(t);return"vec4 "+h+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function kg(h,t){let e;switch(t){case Rd:e="Linear";break;case Pd:e="Reinhard";break;case Dd:e="OptimizedCineon";break;case Xc:e="ACESFilmic";break;case Ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+h+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Ig(h){return[h.extensionDerivatives||h.envMapCubeUVHeight||h.bumpMap||h.normalMapTangentSpace||h.clearcoatNormalMap||h.flatShading||h.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(h.extensionFragDepth||h.logarithmicDepthBuffer)&&h.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",h.extensionDrawBuffers&&h.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(h.extensionShaderTextureLOD||h.envMap||h.transmission)&&h.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function Og(h){const t=[];for(const e in h){const i=h[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Bg(h,t){const e={},i=h.getProgramParameter(t,h.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=h.getActiveAttrib(t,n),o=r.name;let a=1;r.type===h.FLOAT_MAT2&&(a=2),r.type===h.FLOAT_MAT3&&(a=3),r.type===h.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:h.getAttribLocation(t,o),locationSize:a}}return e}function ss(h){return h!==""}function Zl(h,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return h.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(h,t){return h.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(h){return h.replace(Ug,Fg)}const Ng=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Fg(h,t){let e=Tt[t];if(e===void 0){const i=Ng.get(t);if(i!==void 0)e=Tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pa(e)}const zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(h){return h.replace(zg,jg)}function jg(h,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function tc(h){let t="precision "+h.precision+` float;
precision `+h.precision+" int;";return h.precision==="highp"?t+=`
#define HIGH_PRECISION`:h.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:h.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Hg(h){let t="SHADOWMAP_TYPE_BASIC";return h.shadowMapType===Vc?t="SHADOWMAP_TYPE_PCF":h.shadowMapType===ad?t="SHADOWMAP_TYPE_PCF_SOFT":h.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vg(h){let t="ENVMAP_TYPE_CUBE";if(h.envMap)switch(h.envMapMode){case Rr:case Pr:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gg(h){let t="ENVMAP_MODE_REFLECTION";if(h.envMap)switch(h.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Kg(h){let t="ENVMAP_BLENDING_NONE";if(h.envMap)switch(h.combine){case Wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ad:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function Wg(h){const t=h.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Xg(h,t,e,i){const n=h.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Hg(e),u=Vg(e),l=Gg(e),d=Kg(e),s=Wg(e),f=e.isWebGL2?"":Ig(e),p=Og(r),v=n.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ss).join(`
`),g.length>0&&(g+=`
`),m=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ss).join(`
`),m.length>0&&(m+=`
`)):(g=[tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),m=[f,tc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Tt.tonemapping_pars_fragment:"",e.toneMapping!==vi?kg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),o=pa(o),o=Zl(o,e),o=Ql(o,e),a=pa(a),a=Zl(a,e),a=Ql(a,e),o=ec(o),a=ec(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=y+g+o,b=y+m+a,w=$l(n,n.VERTEX_SHADER,_),T=$l(n,n.FRAGMENT_SHADER,b);if(n.attachShader(v,w),n.attachShader(v,T),e.index0AttributeName!==void 0?n.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),h.debug.checkShaderErrors){const S=n.getProgramInfoLog(v).trim(),A=n.getShaderInfoLog(w).trim(),N=n.getShaderInfoLog(T).trim();let U=!0,x=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(U=!1,typeof h.debug.onShaderError=="function")h.debug.onShaderError(n,v,w,T);else{const M=Jl(n,w,"vertex"),R=Jl(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Program Info Log: `+S+`
`+M+`
`+R)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(A===""||N==="")&&(x=!1);x&&(this.diagnostics={runnable:U,programLog:S,vertexShader:{log:A,prefix:g},fragmentShader:{log:N,prefix:m}})}n.deleteShader(w),n.deleteShader(T);let E;this.getUniforms=function(){return E===void 0&&(E=new Ys(n,v)),E};let k;return this.getAttributes=function(){return k===void 0&&(k=Bg(n,v)),k},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}let qg=0;class Yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new $g(t),e.set(t,i)),i}}class $g{constructor(t){this.id=qg++,this.code=t,this.usedTimes=0}}function Jg(h,t,e,i,n,r,o){const a=new du,c=new Yg,u=[],l=n.isWebGL2,d=n.logarithmicDepthBuffer,s=n.vertexTextures;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,A,N,U,x){const M=U.fog,R=x.geometry,L=S.isMeshStandardMaterial?U.environment:null,F=(S.isMeshStandardMaterial?e:t).get(S.envMap||L),q=F&&F.mapping===uo?F.image.height:null,j=p[S.type];S.precision!==null&&(f=n.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const W=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,D=W!==void 0?W.length:0;let C=0;R.morphAttributes.position!==void 0&&(C=1),R.morphAttributes.normal!==void 0&&(C=2),R.morphAttributes.color!==void 0&&(C=3);let P,O,B,G;if(j){const ln=Zn[j];P=ln.vertexShader,O=ln.fragmentShader}else P=S.vertexShader,O=S.fragmentShader,c.update(S),B=c.getVertexShaderID(S),G=c.getFragmentShaderID(S);const Y=h.getRenderTarget(),H=x.isInstancedMesh===!0,te=!!S.map,ue=!!S.matcap,_e=!!F,J=!!S.aoMap,re=!!S.lightMap,pe=!!S.bumpMap,we=!!S.normalMap,me=!!S.displacementMap,ye=!!S.emissiveMap,$e=!!S.metalnessMap,Fe=!!S.roughnessMap,Je=S.anisotropy>0,ct=S.clearcoat>0,mt=S.iridescence>0,K=S.sheen>0,X=S.transmission>0,fe=Je&&!!S.anisotropyMap,Pe=ct&&!!S.clearcoatMap,Le=ct&&!!S.clearcoatNormalMap,Ne=ct&&!!S.clearcoatRoughnessMap,ze=mt&&!!S.iridescenceMap,De=mt&&!!S.iridescenceThicknessMap,ve=K&&!!S.sheenColorMap,Xe=K&&!!S.sheenRoughnessMap,je=!!S.specularMap,Oe=!!S.specularColorMap,Ke=!!S.specularIntensityMap,He=X&&!!S.transmissionMap,Ae=X&&!!S.thicknessMap,We=!!S.gradientMap,$=!!S.alphaMap,Se=S.alphaTest>0,se=!!S.alphaHash,Ce=!!S.extensions,Ge=!!R.attributes.uv1,vt=!!R.attributes.uv2,Mt=!!R.attributes.uv3;return{isWebGL2:l,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:P,fragmentShader:O,defines:S.defines,customVertexShaderID:B,customFragmentShaderID:G,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,instancing:H,instancingColor:H&&x.instanceColor!==null,supportsVertexTextures:s,outputColorSpace:Y===null?h.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ni,map:te,matcap:ue,envMap:_e,envMapMode:_e&&F.mapping,envMapCubeUVHeight:q,aoMap:J,lightMap:re,bumpMap:pe,normalMap:we,displacementMap:s&&me,emissiveMap:ye,normalMapObjectSpace:we&&S.normalMapType===Wd,normalMapTangentSpace:we&&S.normalMapType===ru,metalnessMap:$e,roughnessMap:Fe,anisotropy:Je,anisotropyMap:fe,clearcoat:ct,clearcoatMap:Pe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ne,iridescence:mt,iridescenceMap:ze,iridescenceThicknessMap:De,sheen:K,sheenColorMap:ve,sheenRoughnessMap:Xe,specularMap:je,specularColorMap:Oe,specularIntensityMap:Ke,transmission:X,transmissionMap:He,thicknessMap:Ae,gradientMap:We,opaque:S.transparent===!1&&S.blending===Tr,alphaMap:$,alphaTest:Se,alphaHash:se,combine:S.combine,mapUv:te&&v(S.map.channel),aoMapUv:J&&v(S.aoMap.channel),lightMapUv:re&&v(S.lightMap.channel),bumpMapUv:pe&&v(S.bumpMap.channel),normalMapUv:we&&v(S.normalMap.channel),displacementMapUv:me&&v(S.displacementMap.channel),emissiveMapUv:ye&&v(S.emissiveMap.channel),metalnessMapUv:$e&&v(S.metalnessMap.channel),roughnessMapUv:Fe&&v(S.roughnessMap.channel),anisotropyMapUv:fe&&v(S.anisotropyMap.channel),clearcoatMapUv:Pe&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(S.sheenRoughnessMap.channel),specularMapUv:je&&v(S.specularMap.channel),specularColorMapUv:Oe&&v(S.specularColorMap.channel),specularIntensityMapUv:Ke&&v(S.specularIntensityMap.channel),transmissionMapUv:He&&v(S.transmissionMap.channel),thicknessMapUv:Ae&&v(S.thicknessMap.channel),alphaMapUv:$&&v(S.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(we||Je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUv1s:Ge,vertexUv2s:vt,vertexUv3s:Mt,pointsUvs:x.isPoints===!0&&!!R.attributes.uv&&(te||$),fog:!!M,useFog:S.fog===!0,fogExp2:M&&M.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:x.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:C,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:h.shadowMap.enabled&&N.length>0,shadowMapType:h.shadowMap.type,toneMapping:S.toneMapped?h.toneMapping:vi,useLegacyLights:h.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qn,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Ce&&S.extensions.derivatives===!0,extensionFragDepth:Ce&&S.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)A.push(N),A.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(y(A,S),_(A,S),A.push(h.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function y(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function _(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),S.push(a.mask)}function b(S){const A=p[S.type];let N;if(A){const U=Zn[A];N=Bh.clone(U.uniforms)}else N=S.uniforms;return N}function w(S,A){let N;for(let U=0,x=u.length;U<x;U++){const M=u[U];if(M.cacheKey===A){N=M,++N.usedTimes;break}}return N===void 0&&(N=new Xg(h,A,S,r),u.push(N)),N}function T(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function E(S){c.remove(S)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:w,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:k}}function Zg(){let h=new WeakMap;function t(r){let o=h.get(r);return o===void 0&&(o={},h.set(r,o)),o}function e(r){h.delete(r)}function i(r,o,a){h.get(r)[o]=a}function n(){h=new WeakMap}return{get:t,remove:e,update:i,dispose:n}}function Qg(h,t){return h.groupOrder!==t.groupOrder?h.groupOrder-t.groupOrder:h.renderOrder!==t.renderOrder?h.renderOrder-t.renderOrder:h.material.id!==t.material.id?h.material.id-t.material.id:h.z!==t.z?h.z-t.z:h.id-t.id}function nc(h,t){return h.groupOrder!==t.groupOrder?h.groupOrder-t.groupOrder:h.renderOrder!==t.renderOrder?h.renderOrder-t.renderOrder:h.z!==t.z?t.z-h.z:h.id-t.id}function ic(){const h=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(d,s,f,p,v,g){let m=h[t];return m===void 0?(m={id:d.id,object:d,geometry:s,material:f,groupOrder:p,renderOrder:d.renderOrder,z:v,group:g},h[t]=m):(m.id=d.id,m.object=d,m.geometry=s,m.material=f,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=v,m.group=g),t++,m}function a(d,s,f,p,v,g){const m=o(d,s,f,p,v,g);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):e.push(m)}function c(d,s,f,p,v,g){const m=o(d,s,f,p,v,g);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):e.unshift(m)}function u(d,s){e.length>1&&e.sort(d||Qg),i.length>1&&i.sort(s||nc),n.length>1&&n.sort(s||nc)}function l(){for(let d=t,s=h.length;d<s;d++){const f=h[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:c,finish:l,sort:u}}function e0(){let h=new WeakMap;function t(i,n){const r=h.get(i);let o;return r===void 0?(o=new ic,h.set(i,[o])):n>=r.length?(o=new ic,r.push(o)):o=r[n],o}function e(){h=new WeakMap}return{get:t,dispose:e}}function t0(){const h={};return{get:function(t){if(h[t.id]!==void 0)return h[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new le,color:new St};break;case"SpotLight":e={position:new le,direction:new le,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new le,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new le,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new le,halfWidth:new le,halfHeight:new le};break}return h[t.id]=e,e}}}function n0(){const h={};return{get:function(t){if(h[t.id]!==void 0)return h[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return h[t.id]=e,e}}}let i0=0;function r0(h,t){return(t.castShadow?2:0)-(h.castShadow?2:0)+(t.map?1:0)-(h.map?1:0)}function s0(h,t){const e=new t0,i=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)n.probe.push(new le);const r=new le,o=new Rt,a=new Rt;function c(l,d){let s=0,f=0,p=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let v=0,g=0,m=0,y=0,_=0,b=0,w=0,T=0,E=0,k=0;l.sort(r0);const S=d===!0?Math.PI:1;for(let N=0,U=l.length;N<U;N++){const x=l[N],M=x.color,R=x.intensity,L=x.distance,F=x.shadow&&x.shadow.map?x.shadow.map.texture:null;if(x.isAmbientLight)s+=M.r*R*S,f+=M.g*R*S,p+=M.b*R*S;else if(x.isLightProbe)for(let q=0;q<9;q++)n.probe[q].addScaledVector(x.sh.coefficients[q],R);else if(x.isDirectionalLight){const q=e.get(x);if(q.color.copy(x.color).multiplyScalar(x.intensity*S),x.castShadow){const j=x.shadow,W=i.get(x);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[v]=W,n.directionalShadowMap[v]=F,n.directionalShadowMatrix[v]=x.shadow.matrix,b++}n.directional[v]=q,v++}else if(x.isSpotLight){const q=e.get(x);q.position.setFromMatrixPosition(x.matrixWorld),q.color.copy(M).multiplyScalar(R*S),q.distance=L,q.coneCos=Math.cos(x.angle),q.penumbraCos=Math.cos(x.angle*(1-x.penumbra)),q.decay=x.decay,n.spot[m]=q;const j=x.shadow;if(x.map&&(n.spotLightMap[E]=x.map,E++,j.updateMatrices(x),x.castShadow&&k++),n.spotLightMatrix[m]=j.matrix,x.castShadow){const W=i.get(x);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[m]=W,n.spotShadowMap[m]=F,T++}m++}else if(x.isRectAreaLight){const q=e.get(x);q.color.copy(M).multiplyScalar(R),q.halfWidth.set(x.width*.5,0,0),q.halfHeight.set(0,x.height*.5,0),n.rectArea[y]=q,y++}else if(x.isPointLight){const q=e.get(x);if(q.color.copy(x.color).multiplyScalar(x.intensity*S),q.distance=x.distance,q.decay=x.decay,x.castShadow){const j=x.shadow,W=i.get(x);W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=x.shadow.matrix,w++}n.point[g]=q,g++}else if(x.isHemisphereLight){const q=e.get(x);q.skyColor.copy(x.color).multiplyScalar(R*S),q.groundColor.copy(x.groundColor).multiplyScalar(R*S),n.hemi[_]=q,_++}}y>0&&(t.isWebGL2||h.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):h.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=s,n.ambient[1]=f,n.ambient[2]=p;const A=n.hash;(A.directionalLength!==v||A.pointLength!==g||A.spotLength!==m||A.rectAreaLength!==y||A.hemiLength!==_||A.numDirectionalShadows!==b||A.numPointShadows!==w||A.numSpotShadows!==T||A.numSpotMaps!==E)&&(n.directional.length=v,n.spot.length=m,n.rectArea.length=y,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+E-k,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=k,A.directionalLength=v,A.pointLength=g,A.spotLength=m,A.rectAreaLength=y,A.hemiLength=_,A.numDirectionalShadows=b,A.numPointShadows=w,A.numSpotShadows=T,A.numSpotMaps=E,n.version=i0++)}function u(l,d){let s=0,f=0,p=0,v=0,g=0;const m=d.matrixWorldInverse;for(let y=0,_=l.length;y<_;y++){const b=l[y];if(b.isDirectionalLight){const w=n.directional[s];w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),s++}else if(b.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const w=n.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),a.identity(),o.copy(b.matrixWorld),o.premultiply(m),a.extractRotation(o),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const w=n.hemi[g];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:c,setupView:u,state:n}}function rc(h,t){const e=new s0(h,t),i=[],n=[];function r(){i.length=0,n.length=0}function o(d){i.push(d)}function a(d){n.push(d)}function c(d){e.setup(i,d)}function u(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:n,lights:e},setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a}}function o0(h,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new rc(h,t),e.set(r,[c])):o>=a.length?(c=new rc(h,t),a.push(c)):c=a[o],c}function n(){e=new WeakMap}return{get:i,dispose:n}}class a0 extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l0 extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const c0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
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
 */class ti{constructor(t,e,i,n,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),ti.nextNameID=ti.nextNameID||0,this.$name.id=`lil-gui-name-${++ti.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class oy extends ti{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function _a(h){let t,e;return(t=h.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=h.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=h.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const ay={isPrimitive:!0,match:h=>typeof h=="string",fromHexString:_a,toHexString:_a},ms={isPrimitive:!0,match:h=>typeof h=="number",fromHexString:h=>parseInt(h.substring(1),16),toHexString:h=>"#"+h.toString(16).padStart(6,0)},ly={isPrimitive:!1,match:h=>Array.isArray(h),fromHexString(h,t,e=1){const i=ms.fromHexString(h);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([h,t,e],i=1){i=255/i;const n=h*i<<16^t*i<<8^e*i<<0;return ms.toHexString(n)}},cy={isPrimitive:!1,match:h=>Object(h)===h,fromHexString(h,t,e=1){const i=ms.fromHexString(h);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:h,g:t,b:e},i=1){i=255/i;const n=h*i<<16^t*i<<8^e*i<<0;return ms.toHexString(n)}},uy=[ay,ms,ly,cy];function dy(h){return uy.find(t=>t.match(h))}class hy extends ti{constructor(t,e,i,n){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=dy(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=_a(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ra extends ti{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class fy extends ti{constructor(t,e,i,n,r,o){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},i=y=>{const _=parseFloat(this.$input.value);isNaN(_)||(this._snapClampSetValue(_+y),this.$input.value=this.getValue())},n=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),i(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),i(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,c,u,l,d;const s=5,f=y=>{a=y.clientX,c=u=y.clientY,o=!0,l=this.getValue(),d=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",v)},p=y=>{if(o){const _=y.clientX-a,b=y.clientY-c;Math.abs(b)>s?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(_)>s&&v()}if(!o){const _=y.clientY-u;d-=_*this._step*this._arrowKeyMultiplier(y),l+d>this._max?d=this._max-l:l+d<this._min&&(d=this._min-l),this._snapClampSetValue(l+d)}u=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",v)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(m,y,_,b,w)=>(m-y)/(_-y)*(w-b)+b,e=m=>{const y=this.$slider.getBoundingClientRect();let _=t(m,y.left,y.right,this._min,this._max);this._snapClampSetValue(_)},i=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",r)},n=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",r)};let o=!1,a,c;const u=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},l=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,c=m.touches[0].clientY,o=!0):u(m),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",s))},d=m=>{if(o){const y=m.touches[0].clientX-a,_=m.touches[0].clientY-c;Math.abs(y)>Math.abs(_)?u(m):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",s))}else m.preventDefault(),e(m.touches[0].clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",s)},f=this._callOnFinishChange.bind(this),p=400;let v;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const _=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(f,p)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",l,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class py extends ti{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class my extends ti{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const gy=`.lil-gui {
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
}`;function vy(h){const t=document.createElement("style");t.innerHTML=h;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Lc=!1;class Na{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:n,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),c&&this.domElement.classList.add("allow-touch-styles"),!Lc&&a&&(vy(gy),Lc=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=o}add(t,e,i,n,r){if(Object(i)===i)return new py(this,t,e,i);const o=t[e];switch(typeof o){case"number":return new fy(this,t,e,i,n,r);case"boolean":return new oy(this,t,e);case"string":return new my(this,t,e);case"function":return new ra(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new hy(this,t,e,i)}addFolder(t){const e=new Na({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof ra||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof ra)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const yy=Na,Nr=new yy,_y=Nr.addFolder("Window"),by=()=>document.body.requestPointerLock();_y.add({pointerLock:by},"pointerLock").name("Pointer Lock");Nr.show($s.enabled());const xy=(h,t)=>{const e=h.addFolder("Position");e.add(t,"x",-20,240,.001),e.add(t,"y",-20,240,.001),e.add(t,"z",-20,240,.001),e.close()},wy=(h,t)=>{const e=h.addFolder("Rotation");e.add(t,"x",-Math.PI,Math.PI,.001),e.add(t,"y",-Math.PI,Math.PI,.001),e.add(t,"z",-Math.PI,Math.PI,.001),e.close()},Sy=(h,t)=>{const e=h.addFolder("Scale");e.add(t,"x",.1,14,.001),e.add(t,"y",.1,14,.001),e.add(t,"z",.1,14,.001),e.close()},Js=(h,t)=>{xy(h,t.position),wy(h,t.rotation),Sy(h,t.scale)};class My extends Uu{constructor(e,i){super(e,i);ht(this,"canvasElement");ht(this,"canvasContext");this.canvasElement=document.createElement("canvas"),this.canvasContext=this.canvasElement.getContext("2d")}putImageData(e){const i=e.height/e.width,n=this.size.width*i*1.5,r=this.size.height*i*1.5,o=(this.size.height-r)*.5,a=(this.size.width-n)*.5,c=new Image;c.src=this.getImageDataUrl(e),c.onload=()=>{this.context.drawImage(c,a,o,n,r),this.needsUpdate()}}getImageDataUrl(e){return this.canvasElement.width=e.width,this.canvasElement.height=e.height,this.canvasContext.putImageData(e,0,0),this.canvasElement.toDataURL()}}class Ey{constructor(t,e,i,n){this.gui=t,this.min=e,this.max=i,this.step=n,this.gui.close()}applyGUIPosition(t,e=this.step,i=this.min,n=this.max){const r=this.gui.addFolder("Position");r.add(t,"x",i,n,e),r.add(t,"y",i,n,e),r.add(t,"z",i,n,e),r.close()}applyGUIRotation(t,e=this.step,i=this.min,n=this.max){const r=this.gui.addFolder("Rotation");r.add(t,"x",i,n,e),r.add(t,"y",i,n,e),r.add(t,"z",i,n,e),r.close()}applyGUIScale(t,e=this.step,i=this.min,n=this.max){const r=this.gui.addFolder("Scale");r.add(t,"x",i,n,e),r.add(t,"y",i,n,e),r.add(t,"z",i,n,e),r.close()}applyTransformationGUI(t,e=this.step,i=this.min,n=this.max){this.applyGUIPosition(t.position,e,i,n),this.applyGUIRotation(t.rotation,e,i,n),this.applyGUIScale(t.scale,e,i,n)}}class Ty extends Ey{constructor(){super(Nr.addFolder("Projector"),-200,200,.001);ht(this,"screen");ht(this,"group");ht(this,"model");this.group=new Dn,this.model=Vt.ProjectorScreen.scene.clone(),this.screen=new My(1920,1080),this.group.add(this.screen.scene,this.model),this.group.position.set(126,0,-15.397),this.model.position.set(0,68.589,0),this.model.rotation.set(0,-Math.PI,0),this.model.scale.multiplyScalar(10),this.screen.scene.position.set(-.01,68.589,-.01),this.screen.scene.rotation.set(0,-Math.PI/2,0),this.screen.scene.scale.multiplyScalar(110),this.screen.displayNoSignal(),this.applyTransformationGUI(this.group)}get scene(){return this.group}}class Ay extends S0{constructor(e){super();ht(this,"light");ht(this,"room",new Dn);ht(this,"projectorScreen",new Ty);this.light=this.addLight(),this.room=new Dn,this.room.add(e.scene),e.scene.position.set(0,0,2),e.scene.scale.multiplyScalar(.035);const i=new Qt(new ir(100,100),new Pn({color:"rgba(152,151,151,0.69)"}));i.position.set(131,57.178,-11.926),i.rotation.set(0,-Math.PI/2,0),i.scale.set(2.111,1.244,0),e.scene.add(this.projectorScreen.scene),e.scene.add(i);const n=Vt.ProjectorDevice.scene.clone();n.position.set(26,80,-15.397),n.rotation.set(0,Math.PI*.5,0),n.scale.multiplyScalar(2),n.traverse(o=>{o instanceof Qt&&(o.material=new go({map:Vt.Duke}))}),e.scene.add(n);const r=new Qt(new La(.5,6,16,4,10),new Pn({color:"#FFFFFF",transparent:!0,wireframe:!1,opacity:.02}));r.position.set(92,73,-15.397),r.rotation.set(Math.PI*.25,-.148,1.415),r.scale.multiplyScalar(7.5),Js(Nr.addFolder("Projector Light"),r),e.scene.add(r),this.room.add(new ku(200)),this.add(this.room,this.light)}addLight(){const e=new J0("#FFFFFF",1);e.position.set(-3,3,2),this.add(e);const i=Nr.addFolder("Light");return i.add(e,"intensity",0,20,.01),i.addColor(e,"color"),i.close(),e}}class Cy extends Su{constructor(){super({canvas:document.querySelector("#canvas"),antialias:!0,depth:!0}),this.shadowMap.enabled=!0,this.setSize(window.innerWidth,window.innerHeight),this.shadowMap.type=Jn,this.shadowMap.enabled=!0,this.toneMapping=Xc,this.setPixelRatio(Math.min(window.devicePixelRatio,2))}}const cs=class extends Dn{constructor(e,i){super();ht(this,"game");ht(this,"name");ht(this,"image");ht(this,"description");ht(this,"scene");ht(this,"model");ht(this,"sphere");this.game=i,this.name=i.name,this.description=i.description,this.scene=new Dn,this.model=e.scene.clone(),this.model.scale.multiplyScalar(2),this.model.position.set(0,-.08,0),this.sphere=new Qt(new ka(.5,32,32),new Pn({color:"#ffff00",transparent:!0,opacity:.12})),this.sphere.position.set(0,0,0),this.image=new Qt(new ir(.5,.5),new Pn({map:i.image})),this.image.scale.multiplyScalar(.12),this.image.position.set(0,.03,.006),this.model.add(this.image),cs.DEBUG&&this.scene.add(new cv(1,10)),cs.DEBUG&&this.scene.add(new ku(.5)),cs.DEBUG&&this.attachGui(),this.scene.add(this.model,this.sphere)}attachGui(){const i=Nr.addFolder(`${this.name} Cartridge`).addFolder("Group"),n=i.addFolder("Model"),r=i.addFolder("Image");Js(i,this.scene),Js(n,this.model),Js(r,this.image)}update(e){this.model.position.setY(Math.sin(e)*.05-.08),this.model.rotation.set(0,e,0)}toBox3(){return new zn().setFromObject(this.model)}};let yi=cs;ht(yi,"DEBUG",!1);class bs{constructor(t){ht(this,"rootPath","https://n1md7.github.io/game-boy/");ht(this,"commandInterface");ht(this,"screen");ht(this,"rgba");ht(this,"bundle");this.image=t,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onFrame=this.onFrame.bind(this),emulators.pathPrefix="./js-dos/"}get ci(){return this.commandInterface}get bundlePath(){return`${this.rootPath}/games/${this.name}.jsdos`}get length(){return this.screen.size.width*this.screen.size.height}connect(t){this.screen=t}async load(){this.bundle=await emulatorsUi.network.resolveBundle(this.bundlePath)}async run(){return this.rgba=new Uint8ClampedArray(this.length*4),this.commandInterface=await emulators.dosboxWorker(this.bundle),this.subscribeUserInputs(),this}async stop(){var t;await((t=this.commandInterface)==null?void 0:t.exit()),this.unsubscribeUserInputs()}subscribeUserInputs(){emulatorsUi.sound.audioNode(this.commandInterface),this.commandInterface.events().onFrame(this.onFrame),window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}unsubscribeUserInputs(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}onKeyDown(t){const e=emulatorsUi.controls.domToKeyCode(t.keyCode);this.commandInterface.sendKeyEvent(e,!0)}onKeyUp(t){const e=emulatorsUi.controls.domToKeyCode(t.keyCode);this.commandInterface.sendKeyEvent(e,!1)}onFrame(t){const{width:e,height:i}=this.screen.size,n=e*i;for(let o=0;o<n;++o)t&&(this.rgba[o*4+0]=t[o*3+0],this.rgba[o*4+1]=t[o*3+1],this.rgba[o*4+2]=t[o*3+2],this.rgba[o*4+3]=255);const r=new ImageData(this.rgba,e,i);this.screen.putImageData(r)}}var Gr=(h=>(h.Digger="Digger",h.Doom="Doom",h.Mario="Mario",h.Quake="Quake",h.Duke="Duke",h))(Gr||{});class Ry extends bs{constructor(){super(...arguments);ht(this,"name",Gr.Mario);ht(this,"description","Mario is a fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist of the series, Mario has appeared in over 200 video games since his creation.")}}class Py extends yi{constructor(t,e){super(t,new Ry(e))}}class Dy extends bs{constructor(){super(...arguments);ht(this,"name",Gr.Doom);ht(this,"description","Doom is a 1993 first-person shooter developed by id Software for MS-DOS. Players assume the role of a space marine, popularly known as Doomguy, fighting his way through hordes of invading demons from Hell.")}}class Ly extends yi{constructor(t,e){super(t,new Dy(e))}}class ky extends bs{constructor(){super(...arguments);ht(this,"name",Gr.Quake);ht(this,"description","Quake is a first-person shooter video game developed by id Software and published by GT Interactive in 1996. It is the first game in the Quake series.")}}class Iy extends yi{constructor(t,e){super(t,new ky(e))}}class Oy extends bs{constructor(){super(...arguments);ht(this,"name",Gr.Digger);ht(this,"description","Digger is a computer game released by Canadian developer Windmill Software in 1983, popular in the era of the IBM PC and Commodore 64. It is similar in design to the 1982 arcade game Mr. Do!.")}}class By extends yi{constructor(t,e){super(t,new Oy(e))}}class Uy extends bs{constructor(){super(...arguments);ht(this,"name",Gr.Duke);ht(this,"description","Duke Nukem 3D is a first-person shooter video game developed by 3D Realms.")}}class Ny extends yi{constructor(t,e){yi.DEBUG=!1,super(t,new Uy(e))}}class Fy extends EventTarget{constructor(){super(...arguments);ht(this,"moveForward",!1);ht(this,"moveBackward",!1);ht(this,"moveLeft",!1);ht(this,"moveRight",!1);ht(this,"isShiftPressed",!1);ht(this,"isSpacePressed",!1)}subscribe(){document.addEventListener("keydown",this.onKeyDown.bind(this)),document.addEventListener("keyup",this.onKeyUp.bind(this))}unsubscribe(){document.removeEventListener("keydown",this.onKeyDown.bind(this)),document.removeEventListener("keyup",this.onKeyUp.bind(this))}get actions(){return{goForward:this.moveForward,goBackward:this.moveBackward,goLeft:this.moveLeft,goRight:this.moveRight,sprint:this.isShiftPressed,jump:this.isSpacePressed}}onKeyDown(e){switch(e.code){case"KeyW":this.moveForward=!0;break;case"KeyS":this.moveBackward=!0;break;case"KeyA":this.moveLeft=!0;break;case"KeyD":this.moveRight=!0;break;case"ShiftLeft":this.isShiftPressed=!0;break;case"KeyF":this.dispatchEvent(new Event("KeyF:pressed"));break;case"KeyEscape":this.dispatchEvent(new Event("ESC:pressed"));break;case"Space":this.isSpacePressed=!0;break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":case"Digit0":this.dispatchEvent(new CustomEvent("Digit:pressed",{detail:parseInt(e.code.slice(-1))}));break}}onKeyUp(e){switch(e.code){case"KeyW":this.moveForward=!1;break;case"KeyS":this.moveBackward=!1;break;case"KeyA":this.moveLeft=!1;break;case"KeyD":this.moveRight=!1;break;case"ShiftLeft":this.isShiftPressed=!1;break;case"Space":this.isSpacePressed=!1;break}}}class zy extends EventTarget{constructor(e){super();ht(this,"mouseSensitivity",.002);this.camera=e}subscribe(){document.addEventListener("mousemove",this.mouseMoveHandler.bind(this)),document.addEventListener("pointerlockchange",this.pointerLockHandler.bind(this))}unsubscribe(){document.removeEventListener("mousemove",this.mouseMoveHandler.bind(this)),document.removeEventListener("pointerlockchange",this.pointerLockHandler.bind(this))}mouseMoveHandler({movementY:e,movementX:i}){document.pointerLockElement===document.body&&(this.camera.rotation.y-=i*this.mouseSensitivity,this.camera.rotation.x-=e*this.mouseSensitivity,this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x)))}pointerLockHandler(){document.pointerLockElement===document.body?this.dispatchEvent(new Event("PointerLock:enabled")):this.dispatchEvent(new Event("PointerLock:disabled"))}}class jy{constructor(t,e){ht(this,"gravity",30);ht(this,"steps",16);ht(this,"jumpVelocity",10);ht(this,"body");ht(this,"velocity");ht(this,"isGrounded",!1);this.camera=t,this.world=e;const i=new le(0,1,0),n=new le(0,1.75,0);this.body=new yo(i,n,.35),this.velocity=new le(0),this.updatePlayer=this.updatePlayer.bind(this),this.body.translate(new le(0,2,4))}get capsule(){return this.body}reset(){const t=new le(0,1,0);this.body.translate(t.sub(this.body.end))}update(t){this.body.end.y<-32&&this.reset();const e=Math.min(.05,t)/this.steps,i={steps:this.steps};do this.updatePlayer(e);while(--i.steps>0)}action(t,e){const{goLeft:i,goRight:n,goForward:r,goBackward:o}=t,a=this.getSpeedDelta(e,t.sprint),c=this.getForwardVector(new le),u=this.getSideVector(new le),l=i||n?a*.707:a;r?(this.velocity.add(c.multiplyScalar(l)),i&&this.velocity.add(u.multiplyScalar(-l)),n&&this.velocity.add(u.multiplyScalar(l))):o?(this.velocity.add(c.multiplyScalar(-l)),i&&this.velocity.add(u.multiplyScalar(-l)),n&&this.velocity.add(u.multiplyScalar(l))):(i&&this.velocity.add(u.multiplyScalar(-a*.9)),n&&this.velocity.add(u.multiplyScalar(a*.9))),this.isGrounded&&t.jump&&(this.velocity.y=this.jumpVelocity)}getSideVector(t){return this.camera.getWorldDirection(t),t.y=0,t.normalize(),t.cross(this.camera.up),t}getForwardVector(t){return this.camera.getWorldDirection(t),t.y=0,t.normalize(),t}getSpeedDelta(t,e){const i=e?16:8,n=e?96:48;return t*(this.isGrounded?n:i)}updatePlayer(t){const e={val:Math.exp(-8*t)-1};this.isGrounded||(this.velocity.y-=this.gravity*t,e.val*=.1),this.velocity.addScaledVector(this.velocity,e.val);const i=this.velocity.clone().multiplyScalar(t);this.body.translate(i),this.evaluateIntersections(),this.camera.position.copy(this.body.end)}evaluateIntersections(){this.isGrounded=!1;const t=this.world.capsuleIntersect(this.body);t&&(this.isGrounded=t.normal.y>0,this.isGrounded||this.velocity.addScaledVector(t.normal,-t.normal.dot(this.velocity)),this.body.translate(t.normal.multiplyScalar(t.depth)))}}class Hy{constructor(t,e){ht(this,"player");ht(this,"inputController");ht(this,"mouseController");ht(this,"cartridges",[]);this.player=new jy(t,e),this.inputController=new Fy,this.mouseController=new zy(t)}intersects(t){return this.player.capsule.intersectsBox(t.toBox3())}pickUp(t){this.cartridges.push(t)}subscribe(){this.inputController.subscribe(),this.mouseController.subscribe(),this.mouseController.addEventListener("mouse:click-start",()=>null),this.mouseController.addEventListener("mouse:click-end",()=>null),this.mouseController.addEventListener("PointerLock:disabled",()=>null)}update(t){this.player.update(t),this.player.action(this.inputController.actions,t)}}function Vy(){const t=16.666666666666668,e=new Ua,i=new Q0,n=new sy,r=new Cy,o=new Ay(Vt.Room),a=new Hy(n,e),c=new qv,u=new Jv,l=new ry,d=new Zv(r,n);e.fromGraphNode(Vt.Room.scene),c.scene.position.set(1.6,1,1),c.scene.rotation.set(0,-Math.PI/2,0),c.scene.scale.multiplyScalar(.35);const s=new Py(Vt.Cartridge,Vt.Mario),f=new Ly(Vt.Cartridge,Vt.Doom),p=new Iy(Vt.Cartridge,Vt.Quake),v=new By(Vt.Cartridge,Vt.Digger),g=new Ny(Vt.Cartridge,Vt.Duke);e.fromGraphNode(s);const m=[s,f,p,v,g];p.scene.position.set(3.477,.763,-1.134),v.scene.position.set(-.916,1.603,3.562),s.scene.position.set(-.636,.5,-1.476),f.scene.position.set(-.916,1.603,-.7),g.scene.position.set(.763,1.323,5.801),o.room.add(...m.map(y=>y.scene)),o.add(c.scene),function(){$s.enabled()&&u.show(),d.subscribe(),a.subscribe()}(),function y(){$s.enabled()&&u.start();const _=i.getDelta(),b=i.getElapsedTime();if(l.delta>=t){a.update(_);for(const w of m)w.scene.visible&&(a.intersects(w)&&(a.pickUp(w),w.scene.visible=!1,c.removeCartridge(),c.connectExternalDisplay(o.projectorScreen),c.mirrorMode.showBoth(),c.insertCartridge(w)),w.update(b),c.scene.position.setY(Math.sin(b)*.05+.5),c.scene.rotation.y=b);l.update(),r.render(o,n)}$s.enabled()&&u.end(),requestAnimationFrame(y)}()}const Gy=xa('<canvas id="canvas">'),Ky=xa('<div id="loading" class="text-center w-75"><h3 class="text-muted">Assets are loading</h3><div class="progress" role="progressbar"><div class="progress-bar progress-bar-striped progress-bar-animated">'),Wy=xa('<div id="loading" class="container"><div class="row"><div class="col d-flex justify-content-center"><button class="btn btn-outline-dark">Start Game'),Xy=()=>{const[h,t]=bo(0),[e,i]=bo(!1),[n,r]=bo(!1),o=()=>r(!0),a=()=>document.body.requestPointerLock();return Oc(()=>{n()&&(a(),Vy())}),qu(()=>{Kv.then(Wv).catch(console.error),ao.onLoad=()=>{t(100),Bu(1e3).then(()=>i(!0))},ao.onProgress=(c,u,l)=>{t(u/l*100)}}),jc(ed,{get when(){return e()},get fallback(){return(()=>{const c=Ky(),u=c.firstChild,l=u.nextSibling,d=l.firstChild;return Hc(d,()=>h().toFixed(2)),us(()=>`${h()}%`!=null?d.style.setProperty("width",`${h()}%`):d.style.removeProperty("width")),c})()},get children(){return[(()=>{const c=Gy();return us(()=>c.hidden=!n()),c})(),eo(()=>eo(()=>!n())()&&(()=>{const c=Wy(),u=c.firstChild,l=u.firstChild,d=l.firstChild;return d.$$click=o,c})())]}})};id(["click"]);nd(()=>jc(Xy,{}),document.getElementById("root"));
//# sourceMappingURL=index-e26042e4.js.map