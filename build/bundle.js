var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function c(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,o){if(t){const s=a(t,e,n,o);return t[0](s)}}function a(t,e,o,s){return t[1]&&s?n(o.ctx.slice(),t[1](s(e))):o.ctx}function u(t,e,n,o,s,r,c){const l=function(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}(e,o,s,r);if(l){const s=a(e,n,o,c);t.p(s,l)}}function d(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function p(t){return null==t?"":t}const f="undefined"!=typeof window;let m=f?()=>window.performance.now():()=>Date.now(),h=f?t=>requestAnimationFrame(t):t;const $=new Set;function y(t){$.forEach((e=>{e.c(t)||($.delete(e),e.f())})),0!==$.size&&h(y)}function v(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function x(t){t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function P(){return C(" ")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e,n){t.classList[n?"add":"remove"](e)}function A(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const z=new Set;let L,N=0;function j(t,e,n,o,s,r,c,l=0){const i=16.666/o;let a="{\n";for(let t=0;t<=1;t+=i){const o=e+(n-e)*r(t);a+=100*t+`%{${c(o,1-o)}}\n`}const u=a+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,p=t.ownerDocument;z.add(p);const f=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(w("style")).sheet),m=p.__svelte_rules||(p.__svelte_rules={});m[d]||(m[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${d} ${o}ms linear ${s}ms 1 both`,N+=1,d}function S(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-o.length;s&&(t.style.animation=o.join(", "),N-=s,N||h((()=>{N||(z.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),z.clear())})))}function B(t){L=t}function H(){if(!L)throw new Error("Function called outside component initialization");return L}function T(t){H().$$.on_mount.push(t)}const q=[],Q=[],F=[],M=[],V=Promise.resolve();let R=!1;function D(t){F.push(t)}let G=!1;const I=new Set;function J(){if(!G){G=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];B(e),U(e.$$)}for(B(null),q.length=0;Q.length;)Q.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];I.has(e)||(I.add(e),e())}F.length=0}while(q.length);for(;M.length;)M.pop()();R=!1,G=!1,I.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let W;function X(t,e,n){t.dispatchEvent(A(`${e?"intro":"outro"}${n}`))}const K=new Set;let Y;function Z(){Y={r:0,c:[],p:Y}}function tt(){Y.r||r(Y.c),Y=Y.p}function et(t,e){t&&t.i&&(K.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(K.has(t))return;K.add(t),Y.c.push((()=>{K.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ot={duration:0};function st(n,o,s,l){let i=o(n,s),a=l?0:1,u=null,d=null,p=null;function f(){p&&S(n,p)}function v(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function g(o){const{delay:s=0,duration:c=300,easing:l=e,tick:g=t,css:x}=i||ot,w={start:m()+s,b:o};o||(w.group=Y,Y.r+=1),u||d?d=w:(x&&(f(),p=j(n,a,o,c,s,l,x)),o&&g(0,1),u=v(w,c),D((()=>X(n,o,"start"))),function(t){let e;0===$.size&&h(y),new Promise((n=>{$.add(e={c:t,f:n})}))}((t=>{if(d&&t>d.start&&(u=v(d,c),d=null,X(n,u.b,"start"),x&&(f(),p=j(n,a,u.b,u.duration,0,l,i.css))),u)if(t>=u.end)g(a=u.b,1-a),X(n,u.b,"end"),d||(u.b?f():--u.group.r||r(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*l(e/u.duration),g(a,1-a)}return!(!u&&!d)})))}return{run(t){c(i)?(W||(W=Promise.resolve(),W.then((()=>{W=null}))),W).then((()=>{i=i(),g(t)})):g(t)},end(){f(),u=d=null}}}function rt(t){t&&t.c()}function ct(t,e,n,s){const{fragment:l,on_mount:i,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,n),s||D((()=>{const e=i.map(o).filter(c);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(D)}function lt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(q.push(t),R||(R=!0,V.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(e,n,o,c,l,i,a=[-1]){const u=L;B(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&it(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(x)}else d.fragment&&d.fragment.c();n.intro&&et(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),J()}B(u)}class ut{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function dt(t){let e,n,o,s;function r(t,e){return"string"==typeof t[8][4]?ft:pt}let c=r(t),l=c(t);return{c(){e=b("svg"),n=b("g"),o=b("g"),l.c(),k(o,"transform",t[10]),k(n,"transform","translate(256 256)"),k(e,"id",t[1]),k(e,"class",t[0]),k(e,"style",t[9]),k(e,"viewBox",s=`0 0 ${t[8][0]} ${t[8][1]}`),k(e,"aria-hidden","true"),k(e,"role","img"),k(e,"xmlns","http://www.w3.org/2000/svg")},m(t,s){g(t,e,s),v(e,n),v(n,o),l.m(o,null)},p(t,n){c===(c=r(t))&&l?l.p(t,n):(l.d(1),l=c(t),l&&(l.c(),l.m(o,null))),1024&n&&k(o,"transform",t[10]),2&n&&k(e,"id",t[1]),1&n&&k(e,"class",t[0]),512&n&&k(e,"style",t[9]),256&n&&s!==(s=`0 0 ${t[8][0]} ${t[8][1]}`)&&k(e,"viewBox",s)},d(t){t&&x(e),l.d()}}}function pt(t){let e,n,o,s,r,c,l,i;return{c(){e=b("path"),r=b("path"),k(e,"d",n=t[8][4][0]),k(e,"fill",o=t[4]||t[2]||"currentColor"),k(e,"fill-opacity",s=0!=t[7]?t[5]:t[6]),k(e,"transform","translate(-256 -256)"),k(r,"d",c=t[8][4][1]),k(r,"fill",l=t[3]||t[2]||"currentColor"),k(r,"fill-opacity",i=0!=t[7]?t[6]:t[5]),k(r,"transform","translate(-256 -256)")},m(t,n){g(t,e,n),g(t,r,n)},p(t,a){256&a&&n!==(n=t[8][4][0])&&k(e,"d",n),20&a&&o!==(o=t[4]||t[2]||"currentColor")&&k(e,"fill",o),224&a&&s!==(s=0!=t[7]?t[5]:t[6])&&k(e,"fill-opacity",s),256&a&&c!==(c=t[8][4][1])&&k(r,"d",c),12&a&&l!==(l=t[3]||t[2]||"currentColor")&&k(r,"fill",l),224&a&&i!==(i=0!=t[7]?t[6]:t[5])&&k(r,"fill-opacity",i)},d(t){t&&x(e),t&&x(r)}}}function ft(t){let e,n,o;return{c(){e=b("path"),k(e,"d",n=t[8][4]),k(e,"fill",o=t[2]||t[3]||"currentColor"),k(e,"transform","translate(-256 -256)")},m(t,n){g(t,e,n)},p(t,s){256&s&&n!==(n=t[8][4])&&k(e,"d",n),12&s&&o!==(o=t[2]||t[3]||"currentColor")&&k(e,"fill",o)},d(t){t&&x(e)}}}function mt(e){let n,o=e[8][4]&&dt(e);return{c(){o&&o.c(),n=C("")},m(t,e){o&&o.m(t,e),g(t,n,e)},p(t,[e]){t[8][4]?o?o.p(t,e):(o=dt(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&x(n)}}}function ht(t,e,n){let o,s,r,{class:c=""}=e,{id:l=""}=e,{style:i=""}=e,{icon:a}=e,{fw:u=!1}=e,{flip:d=!1}=e,{pull:p=!1}=e,{rotate:f=!1}=e,{size:m=!1}=e,{color:h=""}=e,{primaryColor:$=""}=e,{secondaryColor:y=""}=e,{primaryOpacity:v=1}=e,{secondaryOpacity:g=.4}=e,{swapOpacity:x=!1}=e;return t.$$set=t=>{"class"in t&&n(0,c=t.class),"id"in t&&n(1,l=t.id),"style"in t&&n(11,i=t.style),"icon"in t&&n(12,a=t.icon),"fw"in t&&n(13,u=t.fw),"flip"in t&&n(14,d=t.flip),"pull"in t&&n(15,p=t.pull),"rotate"in t&&n(16,f=t.rotate),"size"in t&&n(17,m=t.size),"color"in t&&n(2,h=t.color),"primaryColor"in t&&n(3,$=t.primaryColor),"secondaryColor"in t&&n(4,y=t.secondaryColor),"primaryOpacity"in t&&n(5,v=t.primaryOpacity),"secondaryOpacity"in t&&n(6,g=t.secondaryOpacity),"swapOpacity"in t&&n(7,x=t.swapOpacity)},t.$$.update=()=>{if(4096&t.$$.dirty&&n(8,o=a&&a.icon||[0,0,"",[],""]),174080&t.$$.dirty){let t,e;const o="1em";let r,c,l,a="-.125em";const d="visible";u&&(l="center",e="1.25em"),p&&(t=p),m&&("lg"==m?(c="1.33333em",r=".75em",a="-.225em"):c="xs"==m?".75em":"sm"==m?".875em":m.replace("x","em"));const f={float:t,width:e,height:o,"line-height":r,"font-size":c,"text-align":l,"vertical-align":a,overflow:d};let h="";for(const t in f)f[t]&&(h+=`${t}:${f[t]};`);n(9,s=h+i)}if(81920&t.$$.dirty){let t="";if(d){let e=1,n=1;"horizontal"==d?e=-1:"vertical"==d?n=-1:e=n=-1,t+=` scale(${e} ${n})`}f&&(t+=` rotate(${f} 0 0)`),n(10,r=t)}},[c,l,h,$,y,v,g,x,o,s,r,i,a,u,d,p,f,m]}class $t extends ut{constructor(t){super(),at(this,t,ht,mt,l,{class:0,id:1,style:11,icon:12,fw:13,flip:14,pull:15,rotate:16,size:17,color:2,primaryColor:3,secondaryColor:4,primaryOpacity:5,secondaryOpacity:6,swapOpacity:7})}}
/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var yt={prefix:"fas",iconName:"sync",icon:[512,512,[],"f021","M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"]};const vt=[];const gt="https://api.binance.com/api/v1/ticker/24hr",xt=function(e,n=t){let o;const s=[];function r(t){if(l(e,t)&&(e=t,o)){const t=!vt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),vt.push(n,e)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(c,l=t){const i=[c,l];return s.push(i),1===s.length&&(o=n(r)||t),c(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}([]);function wt(t){let e,n,o,s;const r=t[4].default,c=i(r,t,t[3],null);return{c(){e=w("span"),c&&c.c(),k(e,"class",n=p(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"),k(e,"style",o=t[2].style||""),E(e,"block",t[1])},m(t,n){g(t,e,n),c&&c.m(e,null),s=!0},p(t,[l]){c&&c.p&&(!s||8&l)&&u(c,r,t,t[3],l,null,null),(!s||5&l&&n!==(n=p(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"))&&k(e,"class",n),(!s||4&l&&o!==(o=t[2].style||""))&&k(e,"style",o),7&l&&E(e,"block",t[1])},i(t){s||(et(c,t),s=!0)},o(t){nt(c,t),s=!1},d(t){t&&x(e),c&&c.d(t)}}}function bt(t,e,o){let{$$slots:s={},$$scope:r}=e,{type:c="body1"}=e,{block:l=!1}=e;return t.$$set=t=>{o(2,e=n(n({},e),d(t))),"type"in t&&o(0,c=t.type),"block"in t&&o(1,l=t.block),"$$scope"in t&&o(3,r=t.$$scope)},e=d(e),[c,l,e,r,s]}class Ct extends ut{constructor(t){super(),at(this,t,bt,wt,l,{type:0,block:1})}}function Pt(t){const e=t-1;return e*e*e+1}function _t(t,{delay:n=0,duration:o=400,easing:s=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:s,css:t=>"opacity: "+t*r}}function kt(t,{delay:e=0,duration:n=400,easing:o=Pt,x:s=0,y:r=0,opacity:c=0}={}){const l=getComputedStyle(t),i=+l.opacity,a="none"===l.transform?"":l.transform,u=i*(1-c);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*s}px, ${(1-t)*r}px);\n\t\t\topacity: ${i-u*e}`}}const Ot=t=>({}),Et=t=>({}),At=t=>({}),zt=t=>({});function Lt(e){let n,o,s,c,l,a,d,f,m,h,$,y,b,C,O,A;const z=[jt,Nt],L=[];function N(t,e){return t[0]?0:1}c=N(e),l=L[c]=z[c](e),f=new Ct({props:{$$slots:{default:[Bt]},$$scope:{ctx:e}}});const j=e[8].footer,S=i(j,e,e[12],Et),B=S||function(e){let n;return{c(){n=w("div")},m(t,o){g(t,n,o),e[10](n)},p:t,d(t){t&&x(n),e[10](null)}}}(e);return{c(){n=w("div"),o=w("div"),s=w("div"),l.c(),a=P(),d=w("div"),rt(f.$$.fragment),m=P(),h=w("div"),B&&B.c(),k(s,"class","svelte-1dhy857"),E(s,"header",e[0]||!Boolean(e[4])),k(d,"class","content svelte-1dhy857"),k(h,"class","svelte-1dhy857"),E(h,"footer",!Boolean(e[3])),k(o,"class","aa-popup svelte-1dhy857"),k(n,"class",y=p(`overlay ${e[6].class||""}`)+" svelte-1dhy857")},m(t,r){g(t,n,r),v(n,o),v(o,s),L[c].m(s,null),v(o,a),v(o,d),ct(f,d,null),v(o,m),v(o,h),B&&B.m(h,null),C=!0,O||(A=[_(o,"click",Tt),_(n,"click",e[5])],O=!0)},p(t,e){let o=c;c=N(t),c===o?L[c].p(t,e):(Z(),nt(L[o],1,1,(()=>{L[o]=null})),tt(),l=L[c],l?l.p(t,e):(l=L[c]=z[c](t),l.c()),et(l,1),l.m(s,null)),17&e&&E(s,"header",t[0]||!Boolean(t[4]));const r={};4096&e&&(r.$$scope={dirty:e,ctx:t}),f.$set(r),S?S.p&&(!C||4096&e)&&u(S,j,t,t[12],e,Ot,Et):B&&B.p&&8&e&&B.p(t,e),8&e&&E(h,"footer",!Boolean(t[3])),(!C||64&e&&y!==(y=p(`overlay ${t[6].class||""}`)+" svelte-1dhy857"))&&k(n,"class",y)},i(t){C||(et(l),et(f.$$.fragment,t),et(B,t),t&&D((()=>{$||($=st(o,kt,{duration:300,y:-500,opacity:.9},!0)),$.run(1)})),t&&D((()=>{b||(b=st(n,_t,{},!0)),b.run(1)})),C=!0)},o(t){nt(l),nt(f.$$.fragment,t),nt(B,t),t&&($||($=st(o,kt,{duration:300,y:-500,opacity:.9},!1)),$.run(0)),t&&(b||(b=st(n,_t,{},!1)),b.run(0)),C=!1},d(t){t&&x(n),L[c].d(),lt(f),B&&B.d(t),t&&$&&$.end(),t&&b&&b.end(),O=!1,r(A)}}}function Nt(e){let n;const o=e[8].header,s=i(o,e,e[12],zt),r=s||function(e){let n;return{c(){n=w("div")},m(t,o){g(t,n,o),e[9](n)},p:t,d(t){t&&x(n),e[9](null)}}}(e);return{c(){r&&r.c()},m(t,e){r&&r.m(t,e),n=!0},p(t,e){s?s.p&&(!n||4096&e)&&u(s,o,t,t[12],e,At,zt):r&&r.p&&16&e&&r.p(t,e)},i(t){n||(et(r,t),n=!0)},o(t){nt(r,t),n=!1},d(t){r&&r.d(t)}}}function jt(t){let e,n;return e=new Ct({props:{type:"headline",$$slots:{default:[St]},$$scope:{ctx:t}}}),{c(){rt(e.$$.fragment)},m(t,o){ct(e,t,o),n=!0},p(t,n){const o={};4097&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(et(e.$$.fragment,t),n=!0)},o(t){nt(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function St(t){let e;return{c(){e=C(t[0])},m(t,n){g(t,e,n)},p(t,n){1&n&&O(e,t[0])},d(t){t&&x(e)}}}function Bt(t){let e;const n=t[8].default,o=i(n,t,t[12],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,s){o&&o.p&&(!e||4096&s)&&u(o,n,t,t[12],s,null,null)},i(t){e||(et(o,t),e=!0)},o(t){nt(o,t),e=!1},d(t){o&&o.d(t)}}}function Ht(t){let e,n,o,s=t[1]&&Lt(t);return{c(){e=w("div"),n=w("div"),s&&s.c()},m(r,c){g(r,e,c),v(e,n),s&&s.m(n,null),t[11](n),o=!0},p(t,[e]){t[1]?s?(s.p(t,e),2&e&&et(s,1)):(s=Lt(t),s.c(),et(s,1),s.m(n,null)):s&&(Z(),nt(s,1,1,(()=>{s=null})),tt())},i(t){o||(et(s),o=!0)},o(t){nt(s),o=!1},d(n){n&&x(e),s&&s.d(),t[11](null)}}}const Tt=t=>t.stopPropagation();function qt(t,e,o){let s,{$$slots:r={},$$scope:c}=e,{header:l=""}=e,{isOpen:i=!1}=e,a=null,u=null,p="";const f=function(){const t=H();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const s=A(e,n);o.slice().forEach((e=>{e.call(t,s)}))}}}(),m=()=>{f("close","")},h=t=>{27===t.keyCode&&m()};return T((()=>(window.addEventListener("keydown",h),document.body.appendChild(s),()=>{window.removeEventListener("keydown",h),document.body.removeChild(s)}))),t.$$set=t=>{o(6,e=n(n({},e),d(t))),"header"in t&&o(0,l=t.header),"isOpen"in t&&o(1,i=t.isOpen),"$$scope"in t&&o(12,c=t.$$scope)},t.$$.update=()=>{130&t.$$.dirty&&"undefined"!=typeof window&&(i?(o(7,p=document.body.style.overflow),document.body.style.overflow="hidden"):document.body.style.overflow=p)},e=d(e),[l,i,s,a,u,m,e,p,r,function(t){Q[t?"unshift":"push"]((()=>{u=t,o(4,u)}))},function(t){Q[t?"unshift":"push"]((()=>{a=t,o(3,a)}))},function(t){Q[t?"unshift":"push"]((()=>{s=t,o(2,s)}))},c]}class Qt extends ut{constructor(t){super(),at(this,t,qt,Ht,l,{header:0,isOpen:1})}}function Ft(t,e,n){const o=t.slice();return o[15]=e[n],o}function Mt(e){let n;return{c(){n=C(Xt)},m(t,e){g(t,n,e)},p:t,d(t){t&&x(n)}}}function Vt(e){let n,o=Xt="24h %";return{c(){n=C(o)},m(t,e){g(t,n,e)},p:t,d(t){t&&x(n)}}}function Rt(t){let e,n,o,s,r,l,i,a,u,d,f,m,h,$=t[15].symbol+"",y=parseFloat(t[15].priceChangePercent).toFixed(2)+"",b=t[15].lastPrice+"";return{c(){e=w("tr"),n=w("td"),o=C($),s=P(),r=w("td"),l=C(y),a=P(),u=w("td"),d=C(b),k(n,"class","svelte-69u84x"),k(r,"class",i=p(t[15].priceChangePercent>=Yt?"major":"menor")+" svelte-69u84x"),k(u,"class","svelte-69u84x"),k(e,"class",f=p(t[15].priceChangePercent>=Yt?"majorHover":"menorHover")+" svelte-69u84x")},m(i,p){g(i,e,p),v(e,n),v(n,o),v(e,s),v(e,r),v(r,l),v(e,a),v(e,u),v(u,d),m||(h=_(e,"click",(function(){c(t[5](t[15]))&&t[5](t[15]).apply(this,arguments)})),m=!0)},p(n,s){t=n,1&s&&$!==($=t[15].symbol+"")&&O(o,$),1&s&&y!==(y=parseFloat(t[15].priceChangePercent).toFixed(2)+"")&&O(l,y),1&s&&i!==(i=p(t[15].priceChangePercent>=Yt?"major":"menor")+" svelte-69u84x")&&k(r,"class",i),1&s&&b!==(b=t[15].lastPrice+"")&&O(d,b),1&s&&f!==(f=p(t[15].priceChangePercent>=Yt?"majorHover":"menorHover")+" svelte-69u84x")&&k(e,"class",f)},d(t){t&&x(e),m=!1,h()}}}function Dt(t){let e,n,o,s=t[3].bidPrice+"";return{c(){e=w("td"),n=C("Bid price: "),o=C(s),k(e,"class","svelte-69u84x")},m(t,s){g(t,e,s),v(e,n),v(e,o)},p(t,e){8&e&&s!==(s=t[3].bidPrice+"")&&O(o,s)},d(t){t&&x(e)}}}function Gt(t){let e,n,o,s,r,c=t[3].bidPrice+"";return{c(){e=w("td"),n=w("div"),n.textContent="Bid price:",o=P(),s=w("div"),r=C(c),k(e,"class","svelte-69u84x")},m(t,c){g(t,e,c),v(e,n),v(e,o),v(e,s),v(s,r)},p(t,e){8&e&&c!==(c=t[3].bidPrice+"")&&O(r,c)},d(t){t&&x(e)}}}function It(t){let e,n,o,s=t[3].askPrice+"";return{c(){e=w("td"),n=C("Ask Price: "),o=C(s),k(e,"class","svelte-69u84x")},m(t,s){g(t,e,s),v(e,n),v(e,o)},p(t,e){8&e&&s!==(s=t[3].askPrice+"")&&O(o,s)},d(t){t&&x(e)}}}function Jt(t){let e,n,o,s,r,c=t[3].askPrice+"";return{c(){e=w("td"),n=w("div"),n.textContent="Ask Price:",o=P(),s=w("div"),r=C(c),k(e,"class","svelte-69u84x")},m(t,c){g(t,e,c),v(e,n),v(e,o),v(e,s),v(s,r)},p(t,e){8&e&&c!==(c=t[3].askPrice+"")&&O(r,c)},d(t){t&&x(e)}}}function Ut(t){let e,n,o,s,r,c,l,i,a,u,d,p,f,m,h,$,y,b,E,A,z,L,N,j,S,B,H,T,q,Q,F,M,V,R,D,G,I,J,U,W,X,K,Y,Z,tt,et,nt,ot,st,rt,ct,lt,it,at,ut,dt,pt,ft,mt,ht,$t,yt,vt,gt,xt,wt,bt,Ct,Pt,_t,kt,Ot=t[3].symbol+"",Et=t[3].lastPrice+"",At=t[3].openPrice+"",zt=t[3].prevClosePrice+"",Lt=t[3].priceChange+"",Nt=t[3].priceChangePercent+"",jt=t[3].weightedAvgPrice+"",St=t[3].lastQty+"",Bt=t[3].bidQty+"",Ht=t[3].askQty+"",Tt=t[3].highPrice+"",qt=t[3].lowPrice+"",Qt=t[3].volume+"",Ft=t[3].quoteVolume+"";let Mt=(window.screen.width<Kt?Gt:Dt)(t);let Vt=(window.screen.width<Kt?Jt:It)(t);return{c(){e=w("table"),n=w("tbody"),o=w("tr"),s=w("td"),r=C("Coin: "),c=C(Ot),l=P(),i=w("td"),a=C("Last price: "),u=C(Et),d=P(),p=w("tr"),f=w("td"),m=C("Open price: "),h=C(At),$=P(),y=w("td"),b=C("Previous close: "),E=C(zt),A=P(),z=w("tr"),L=w("td"),N=C("Price change: "),j=C(Lt),S=P(),B=w("td"),H=C("Price change %: "),T=C(Nt),q=P(),Q=w("tr"),F=w("td"),M=C("Weighted average: "),V=C(jt),R=P(),D=w("td"),G=C("Last quantity: "),I=C(St),J=P(),U=w("tr"),Mt.c(),W=P(),X=w("td"),K=C("Bid quantity: "),Y=C(Bt),Z=P(),tt=w("tr"),Vt.c(),et=P(),nt=w("td"),ot=C("Ask quantity: "),st=C(Ht),rt=P(),ct=w("tr"),lt=w("td"),it=C("High price: "),at=C(Tt),ut=P(),dt=w("td"),pt=C("Low price: "),ft=C(qt),mt=P(),ht=w("tr"),$t=w("td"),yt=C("Volume: "),vt=C(Qt),gt=P(),xt=w("td"),wt=C("Quote volume: "),bt=C(Ft),Ct=P(),Pt=w("b"),Pt.textContent="X",k(s,"class","svelte-69u84x"),k(i,"class","svelte-69u84x"),k(o,"class","svelte-69u84x"),k(f,"class","svelte-69u84x"),k(y,"class","svelte-69u84x"),k(p,"class","svelte-69u84x"),k(L,"class","svelte-69u84x"),k(B,"class","svelte-69u84x"),k(z,"class","svelte-69u84x"),k(F,"class","svelte-69u84x"),k(D,"class","svelte-69u84x"),k(Q,"class","svelte-69u84x"),k(X,"class","svelte-69u84x"),k(U,"class","svelte-69u84x"),k(nt,"class","svelte-69u84x"),k(tt,"class","svelte-69u84x"),k(lt,"class","svelte-69u84x"),k(dt,"class","svelte-69u84x"),k(ct,"class","svelte-69u84x"),k($t,"class","svelte-69u84x"),k(xt,"class","svelte-69u84x"),k(ht,"class","svelte-69u84x"),k(e,"class","popupTable svelte-69u84x"),k(Pt,"class","closePopup svelte-69u84x")},m(x,w){g(x,e,w),v(e,n),v(n,o),v(o,s),v(s,r),v(s,c),v(o,l),v(o,i),v(i,a),v(i,u),v(n,d),v(n,p),v(p,f),v(f,m),v(f,h),v(p,$),v(p,y),v(y,b),v(y,E),v(n,A),v(n,z),v(z,L),v(L,N),v(L,j),v(z,S),v(z,B),v(B,H),v(B,T),v(n,q),v(n,Q),v(Q,F),v(F,M),v(F,V),v(Q,R),v(Q,D),v(D,G),v(D,I),v(n,J),v(n,U),Mt.m(U,null),v(U,W),v(U,X),v(X,K),v(X,Y),v(n,Z),v(n,tt),Vt.m(tt,null),v(tt,et),v(tt,nt),v(nt,ot),v(nt,st),v(n,rt),v(n,ct),v(ct,lt),v(lt,it),v(lt,at),v(ct,ut),v(ct,dt),v(dt,pt),v(dt,ft),v(n,mt),v(n,ht),v(ht,$t),v($t,yt),v($t,vt),v(ht,gt),v(ht,xt),v(xt,wt),v(xt,bt),g(x,Ct,w),g(x,Pt,w),_t||(kt=_(Pt,"click",t[4]),_t=!0)},p(t,e){8&e&&Ot!==(Ot=t[3].symbol+"")&&O(c,Ot),8&e&&Et!==(Et=t[3].lastPrice+"")&&O(u,Et),8&e&&At!==(At=t[3].openPrice+"")&&O(h,At),8&e&&zt!==(zt=t[3].prevClosePrice+"")&&O(E,zt),8&e&&Lt!==(Lt=t[3].priceChange+"")&&O(j,Lt),8&e&&Nt!==(Nt=t[3].priceChangePercent+"")&&O(T,Nt),8&e&&jt!==(jt=t[3].weightedAvgPrice+"")&&O(V,jt),8&e&&St!==(St=t[3].lastQty+"")&&O(I,St),Mt.p(t,e),8&e&&Bt!==(Bt=t[3].bidQty+"")&&O(Y,Bt),Vt.p(t,e),8&e&&Ht!==(Ht=t[3].askQty+"")&&O(st,Ht),8&e&&Tt!==(Tt=t[3].highPrice+"")&&O(at,Tt),8&e&&qt!==(qt=t[3].lowPrice+"")&&O(ft,qt),8&e&&Qt!==(Qt=t[3].volume+"")&&O(vt,Qt),8&e&&Ft!==(Ft=t[3].quoteVolume+"")&&O(bt,Ft)},d(t){t&&x(e),Mt.d(),Vt.d(),t&&x(Ct),t&&x(Pt),_t=!1,kt()}}}function Wt(t){let e,n,o,s,l,i,a,u,d,p,f,m,h,$,y,b,C,O,E,A,z,L,N,j,S,B,H,T;i=new $t({props:{icon:yt}});let q=(window.screen.width<Kt?Vt:Mt)(t),Q=t[0],F=[];for(let e=0;e<Q.length;e+=1)F[e]=Rt(Ft(t,Q,e));return N=new Qt({props:{isOpen:t[2],$$slots:{default:[Ut]},$$scope:{ctx:t}}}),N.$on("close",t[4]),{c(){e=w("div"),n=w("div"),n.textContent="COIN STATS",o=P(),s=w("div"),l=w("button"),rt(i.$$.fragment),a=P(),u=w("input"),d=P(),p=w("table"),f=w("thead"),m=w("tr"),h=w("th"),h.textContent="Name",$=P(),y=w("th"),q.c(),b=P(),C=w("th"),C.textContent="Last price",O=P(),E=w("tbody");for(let t=0;t<F.length;t+=1)F[t].c();A=P(),z=w("td"),L=P(),rt(N.$$.fragment),j=P(),S=w("footer"),S.innerHTML='<div><a class="footer-text svelte-69u84x" href="https://www.twitter.com/realGoloSEO">Jordi Gómez Lozano - 2021</a></div>',k(n,"class","title svelte-69u84x"),k(u,"class","cercador svelte-69u84x"),k(u,"placeholder","Search..."),k(s,"class","cercar svelte-69u84x"),k(e,"class","container svelte-69u84x"),k(h,"class","nom-th svelte-69u84x"),k(y,"class","percent-th svelte-69u84x"),k(C,"class","preu-th svelte-69u84x"),k(m,"class","svelte-69u84x"),k(z,"class","svelte-69u84x"),k(p,"class","taulaPrincipal svelte-69u84x"),k(S,"class","svelte-69u84x")},m(r,x){g(r,e,x),v(e,n),v(e,o),v(e,s),v(s,l),ct(i,l,null),v(s,a),v(s,u),g(r,d,x),g(r,p,x),v(p,f),v(f,m),v(m,h),v(m,$),v(m,y),q.m(y,null),v(m,b),v(m,C),v(p,O),v(p,E);for(let t=0;t<F.length;t+=1)F[t].m(E,null);v(E,A),v(E,z),v(p,L),ct(N,p,null),g(r,j,x),g(r,S,x),B=!0,H||(T=[_(l,"click",t[6]),_(u,"keyup",t[10]),_(h,"click",(function(){c(t[1]("symbol"))&&t[1]("symbol").apply(this,arguments)})),_(y,"click",(function(){c((t[1]("priceChangePercent"),!0))&&(t[1]("priceChangePercent"),!0).apply(this,arguments)})),_(C,"click",(function(){c(t[1]("lastPrice"))&&t[1]("lastPrice").apply(this,arguments)}))],H=!0)},p(e,[n]){if(t=e,q.p(t,n),33&n){let e;for(Q=t[0],e=0;e<Q.length;e+=1){const o=Ft(t,Q,e);F[e]?F[e].p(o,n):(F[e]=Rt(o),F[e].c(),F[e].m(E,A))}for(;e<F.length;e+=1)F[e].d(1);F.length=Q.length}const o={};4&n&&(o.isOpen=t[2]),262152&n&&(o.$$scope={dirty:n,ctx:t}),N.$set(o)},i(t){B||(et(i.$$.fragment,t),et(N.$$.fragment,t),B=!0)},o(t){nt(i.$$.fragment,t),nt(N.$$.fragment,t),B=!1},d(t){t&&x(e),lt(i),t&&x(d),t&&x(p),q.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(F,t),lt(N),t&&x(j),t&&x(S),H=!1,r(T)}}}let Xt="Price change percent",Kt=600,Yt=0;function Zt(t,e,n){let o,s,r,c,l,i,a=[],u=!1,d=[];const p=xt.subscribe((t=>{n(0,s=t)}));T((async()=>{l=await fetch(gt),a=await l.json(),xt.set(a)}));async function f(t){xt.update((t=>(n(0,s=t),s))),clearTimeout(i),i=setTimeout((()=>{n(0,s=s.filter((e=>e.symbol.includes(t.toUpperCase()))))}),750)}var m;c={defecte:"priceChangePercent",ascending:!0},m=p,H().$$.on_destroy.push(m);return t.$$.update=()=>{771&t.$$.dirty&&n(1,o=t=>{c.defecte==t?n(9,c.ascending=!c.ascending,c):(n(9,c.defecte=t,c),n(9,c.ascending=!0,c)),n(8,r=c.ascending?1:-1),n(1,o="symbol"===t?(e,n)=>e[t]<n[t]?-1*r:e[t]>n[t]?1*r:e[t]<n[t]:(e,n)=>Number(e[t])<Number(n[t])?-1*r:Number(e[t])>Number(n[t])?1*r:0),n(0,s=s.sort(o))})},[s,o,u,d,()=>n(2,u=!1),t=>(n(2,u=!0),n(3,d=t)),async function(){l=await fetch(gt),a=await l.json(),xt.set(a)},f,r,c,({target:{value:t}})=>f(t)]}class te extends ut{constructor(t){super(),at(this,t,Zt,Wt,l,{})}}function ee(e){let n,o,s;return o=new te({}),{c(){n=w("main"),rt(o.$$.fragment),k(n,"class","svelte-1at3h22")},m(t,e){g(t,n,e),ct(o,n,null),s=!0},p:t,i(t){s||(et(o.$$.fragment,t),s=!0)},o(t){nt(o.$$.fragment,t),s=!1},d(t){t&&x(n),lt(o)}}}return new class extends ut{constructor(t){super(),at(this,t,null,ee,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
