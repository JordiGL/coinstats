var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(o)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function a(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}function u(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,e,n,o,r,c,s){const i=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,c);if(i){const r=u(e,n,o,s);t.p(r,i)}}function p(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}const m="undefined"!=typeof window;let $=m?()=>window.performance.now():()=>Date.now(),h=m?t=>requestAnimationFrame(t):t;const y=new Set;function g(t){y.forEach((e=>{e.c(t)||(y.delete(e),e.f())})),0!==y.size&&h(g)}function v(t,e){t.appendChild(e)}function w(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function C(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function _(t){return document.createTextNode(t)}function k(){return _(" ")}function P(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function V(t,e){t.value=null==e?"":e}function L(t,e,n){t.classList[n?"add":"remove"](e)}function U(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const z=new Set;let A,j=0;function F(t,e,n,o,r,c,s,i=0){const l=16.666/o;let a="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*c(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${i}`,p=t.ownerDocument;z.add(p);const f=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(x("style")).sheet),m=p.__svelte_rules||(p.__svelte_rules={});m[d]||(m[d]=!0,f.insertRule(`@keyframes ${d} ${u}`,f.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,j+=1,d}function B(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),j-=r,j||h((()=>{j||(z.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),z.clear())})))}function S(t){A=t}function H(){if(!A)throw new Error("Function called outside component initialization");return A}const q=[],N=[],Q=[],M=[],T=Promise.resolve();let R=!1;function D(t){Q.push(t)}let G=!1;const W=new Set;function J(){if(!G){G=!0;do{for(let t=0;t<q.length;t+=1){const e=q[t];S(e),X(e.$$)}for(S(null),q.length=0;N.length;)N.pop()();for(let t=0;t<Q.length;t+=1){const e=Q[t];W.has(e)||(W.add(e),e())}Q.length=0}while(q.length);for(;M.length;)M.pop()();R=!1,G=!1,W.clear()}}function X(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let I;function K(t,e,n){t.dispatchEvent(U(`${e?"intro":"outro"}${n}`))}const Y=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||c(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),Z.c.push((()=>{Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const rt={duration:0};function ct(n,o,r,i){let l=o(n,r),a=i?0:1,u=null,d=null,p=null;function f(){p&&B(n,p)}function m(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(o){const{delay:r=0,duration:s=300,easing:i=e,tick:v=t,css:w}=l||rt,b={start:$()+r,b:o};o||(b.group=Z,Z.r+=1),u||d?d=b:(w&&(f(),p=F(n,a,o,s,r,i,w)),o&&v(0,1),u=m(b,s),D((()=>K(n,o,"start"))),function(t){let e;0===y.size&&h(g),new Promise((n=>{y.add(e={c:t,f:n})}))}((t=>{if(d&&t>d.start&&(u=m(d,s),d=null,K(n,u.b,"start"),w&&(f(),p=F(n,a,u.b,u.duration,0,i,l.css))),u)if(t>=u.end)v(a=u.b,1-a),K(n,u.b,"end"),d||(u.b?f():--u.group.r||c(u.group.c)),u=null;else if(t>=u.start){const e=t-u.start;a=u.a+u.d*i(e/u.duration),v(a,1-a)}return!(!u&&!d)})))}return{run(t){s(l)?(I||(I=Promise.resolve(),I.then((()=>{I=null}))),I).then((()=>{l=l(),v(t)})):v(t)},end(){f(),u=d=null}}}function st(t){t&&t.c()}function it(t,e,n,r){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,n),r||D((()=>{const e=l.map(o).filter(s);a?a.push(...e):c(e),t.$$.on_mount=[]})),u.forEach(D)}function lt(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){-1===t.$$.dirty[0]&&(q.push(t),R||(R=!0,T.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,o,s,i,l,a=[-1]){const u=A;S(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:a,skip_bound:!1};let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&at(e,t)),n})):[],d.update(),p=!0,c(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();n.intro&&nt(e.$$.fragment),it(e,n.target,n.anchor,n.customElement),J()}S(u)}class dt{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];const ft="https://api.binance.com/api/v1/ticker/24hr";let mt,$t=[];const ht=function(e,n=t){let o;const r=[];function c(t){if(i(e,t)&&(e=t,o)){const t=!pt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:c,update:function(t){c(t(e))},subscribe:function(s,i=t){const l=[s,i];return r.push(l),1===r.length&&(o=n(c)||t),s(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}($t,(async t=>{mt=await fetch(ft),$t=await mt.json(),t($t)}));function yt(t){let e,n,o,r;const c=t[4].default,s=a(c,t,t[3],null);return{c(){e=x("span"),s&&s.c(),O(e,"class",n=f(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"),O(e,"style",o=t[2].style||""),L(e,"block",t[1])},m(t,n){w(t,e,n),s&&s.m(e,null),r=!0},p(t,[i]){s&&s.p&&(!r||8&i)&&d(s,c,t,t[3],i,null,null),(!r||5&i&&n!==(n=f(`aa-typography ${t[0].toLowerCase()} ${t[2].class||""}`)+" svelte-2vpi93"))&&O(e,"class",n),(!r||4&i&&o!==(o=t[2].style||""))&&O(e,"style",o),7&i&&L(e,"block",t[1])},i(t){r||(nt(s,t),r=!0)},o(t){ot(s,t),r=!1},d(t){t&&b(e),s&&s.d(t)}}}function gt(t,e,o){let{$$slots:r={},$$scope:c}=e,{type:s="body1"}=e,{block:i=!1}=e;return t.$$set=t=>{o(2,e=n(n({},e),p(t))),"type"in t&&o(0,s=t.type),"block"in t&&o(1,i=t.block),"$$scope"in t&&o(3,c=t.$$scope)},e=p(e),[s,i,e,c,r]}class vt extends dt{constructor(t){super(),ut(this,t,gt,yt,i,{type:0,block:1})}}function wt(t){const e=t-1;return e*e*e+1}function bt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*c}}function xt(t,{delay:e=0,duration:n=400,easing:o=wt,x:r=0,y:c=0,opacity:s=0}={}){const i=getComputedStyle(t),l=+i.opacity,a="none"===i.transform?"":i.transform,u=l*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*c}px);\n\t\t\topacity: ${l-u*e}`}}const Ct=t=>({}),_t=t=>({}),kt=t=>({}),Pt=t=>({});function Ot(e){let n,o,r,s,i,l,u,p,m,$,h,y,g,C,_,E;const V=[Vt,Et],U=[];function z(t,e){return t[0]?0:1}s=z(e),i=U[s]=V[s](e),p=new vt({props:{$$slots:{default:[Ut]},$$scope:{ctx:e}}});const A=e[8].footer,j=a(A,e,e[12],_t),F=j||function(e){let n;return{c(){n=x("div")},m(t,o){w(t,n,o),e[10](n)},p:t,d(t){t&&b(n),e[10](null)}}}(e);return{c(){n=x("div"),o=x("div"),r=x("div"),i.c(),l=k(),u=x("div"),st(p.$$.fragment),m=k(),$=x("div"),F&&F.c(),O(r,"class","svelte-1dhy857"),L(r,"header",e[0]||!Boolean(e[4])),O(u,"class","content svelte-1dhy857"),O($,"class","svelte-1dhy857"),L($,"footer",!Boolean(e[3])),O(o,"class","aa-popup svelte-1dhy857"),O(n,"class",y=f(`overlay ${e[6].class||""}`)+" svelte-1dhy857")},m(t,c){w(t,n,c),v(n,o),v(o,r),U[s].m(r,null),v(o,l),v(o,u),it(p,u,null),v(o,m),v(o,$),F&&F.m($,null),C=!0,_||(E=[P(o,"click",At),P(n,"click",e[5])],_=!0)},p(t,e){let o=s;s=z(t),s===o?U[s].p(t,e):(tt(),ot(U[o],1,1,(()=>{U[o]=null})),et(),i=U[s],i?i.p(t,e):(i=U[s]=V[s](t),i.c()),nt(i,1),i.m(r,null)),17&e&&L(r,"header",t[0]||!Boolean(t[4]));const c={};4096&e&&(c.$$scope={dirty:e,ctx:t}),p.$set(c),j?j.p&&(!C||4096&e)&&d(j,A,t,t[12],e,Ct,_t):F&&F.p&&8&e&&F.p(t,e),8&e&&L($,"footer",!Boolean(t[3])),(!C||64&e&&y!==(y=f(`overlay ${t[6].class||""}`)+" svelte-1dhy857"))&&O(n,"class",y)},i(t){C||(nt(i),nt(p.$$.fragment,t),nt(F,t),t&&D((()=>{h||(h=ct(o,xt,{duration:300,y:-500,opacity:.9},!0)),h.run(1)})),t&&D((()=>{g||(g=ct(n,bt,{},!0)),g.run(1)})),C=!0)},o(t){ot(i),ot(p.$$.fragment,t),ot(F,t),t&&(h||(h=ct(o,xt,{duration:300,y:-500,opacity:.9},!1)),h.run(0)),t&&(g||(g=ct(n,bt,{},!1)),g.run(0)),C=!1},d(t){t&&b(n),U[s].d(),lt(p),F&&F.d(t),t&&h&&h.end(),t&&g&&g.end(),_=!1,c(E)}}}function Et(e){let n;const o=e[8].header,r=a(o,e,e[12],Pt),c=r||function(e){let n;return{c(){n=x("div")},m(t,o){w(t,n,o),e[9](n)},p:t,d(t){t&&b(n),e[9](null)}}}(e);return{c(){c&&c.c()},m(t,e){c&&c.m(t,e),n=!0},p(t,e){r?r.p&&(!n||4096&e)&&d(r,o,t,t[12],e,kt,Pt):c&&c.p&&16&e&&c.p(t,e)},i(t){n||(nt(c,t),n=!0)},o(t){ot(c,t),n=!1},d(t){c&&c.d(t)}}}function Vt(t){let e,n;return e=new vt({props:{type:"headline",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){st(e.$$.fragment)},m(t,o){it(e,t,o),n=!0},p(t,n){const o={};4097&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function Lt(t){let e;return{c(){e=_(t[0])},m(t,n){w(t,e,n)},p(t,n){1&n&&E(e,t[0])},d(t){t&&b(e)}}}function Ut(t){let e;const n=t[8].default,o=a(n,t,t[12],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||4096&r)&&d(o,n,t,t[12],r,null,null)},i(t){e||(nt(o,t),e=!0)},o(t){ot(o,t),e=!1},d(t){o&&o.d(t)}}}function zt(t){let e,n,o,r=t[1]&&Ot(t);return{c(){e=x("div"),n=x("div"),r&&r.c()},m(c,s){w(c,e,s),v(e,n),r&&r.m(n,null),t[11](n),o=!0},p(t,[e]){t[1]?r?(r.p(t,e),2&e&&nt(r,1)):(r=Ot(t),r.c(),nt(r,1),r.m(n,null)):r&&(tt(),ot(r,1,1,(()=>{r=null})),et())},i(t){o||(nt(r),o=!0)},o(t){ot(r),o=!1},d(n){n&&b(e),r&&r.d(),t[11](null)}}}const At=t=>t.stopPropagation();function jt(t,e,o){let r,{$$slots:c={},$$scope:s}=e,{header:i=""}=e,{isOpen:l=!1}=e,a=null,u=null,d="";const f=function(){const t=H();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=U(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}(),m=()=>{f("close","")},$=t=>{27===t.keyCode&&m()};var h;return h=()=>(window.addEventListener("keydown",$),document.body.appendChild(r),()=>{window.removeEventListener("keydown",$),document.body.removeChild(r)}),H().$$.on_mount.push(h),t.$$set=t=>{o(6,e=n(n({},e),p(t))),"header"in t&&o(0,i=t.header),"isOpen"in t&&o(1,l=t.isOpen),"$$scope"in t&&o(12,s=t.$$scope)},t.$$.update=()=>{130&t.$$.dirty&&"undefined"!=typeof window&&(l?(o(7,d=document.body.style.overflow),document.body.style.overflow="hidden"):document.body.style.overflow=d)},e=p(e),[i,l,r,a,u,m,e,d,c,function(t){N[t?"unshift":"push"]((()=>{u=t,o(4,u)}))},function(t){N[t?"unshift":"push"]((()=>{a=t,o(3,a)}))},function(t){N[t?"unshift":"push"]((()=>{r=t,o(2,r)}))},s]}class Ft extends dt{constructor(t){super(),ut(this,t,jt,zt,i,{header:0,isOpen:1})}}function Bt(e){let n;return{c(){n=x("div"),n.textContent=`${Tt}`},m(t,e){w(t,n,e)},p:t,d(t){t&&b(n)}}}function St(e){let n;return{c(){n=x("div"),n.textContent=`${Mt}`},m(t,e){w(t,n,e)},p:t,d(t){t&&b(n)}}}function Ht(e){let n;return{c(){n=x("div"),n.textContent=`${Dt}`},m(t,e){w(t,n,e)},p:t,d(t){t&&b(n)}}}function qt(e){let n;return{c(){n=x("div"),n.textContent=`${Rt}`},m(t,e){w(t,n,e)},p:t,d(t){t&&b(n)}}}function Nt(t){let e,n,o,r,c,s,i,l,a,u,d,p,f,m,$,h,y,g,C,V,L,U,z,A,j,F,B,S,H,q,N,Q,M,T,R,D,G,W,J,X,I,K,Y,Z,tt,et,nt,ot,rt,ct,st,it,lt,at,ut,dt,pt,ft,mt,$t,ht,yt,gt,vt,wt,bt,xt,Ct,_t,kt,Pt,Ot,Et,Vt,Lt,Ut,zt,At,jt,Ft,Nt,Qt,Mt,Tt,Rt,Dt,Wt,Jt,Xt,It,Kt,Yt,Zt,te,ee,ne,oe,re,ce,se,ie,le,ae,ue,de,pe,fe,me,$e=t[1].symbol+"",he=t[1].lastPrice+"",ye=t[1].openPrice+"",ge=t[1].prevClosePrice+"",ve=t[1].priceChange+"",we=parseFloat(t[1].priceChangePercent).toFixed(2)+"",be=t[1].weightedAvgPrice+"",xe=t[1].lastQty+"",Ce=t[1].bidPrice+"",_e=t[1].bidQty+"",ke=t[1].askPrice+"",Pe=t[1].askQty+"",Oe=t[1].highPrice+"",Ee=t[1].lowPrice+"",Ve=t[1].volume+"",Le=t[1].quoteVolume+"";let Ue=(window.screen.width<Gt?St:Bt)(t);let ze=(window.screen.width<Gt?qt:Ht)(t);return{c(){e=x("span"),e.textContent="X",n=k(),o=x("table"),r=x("tbody"),c=x("tr"),s=x("td"),i=x("div"),i.textContent="Coin:",l=k(),a=x("div"),u=_($e),d=k(),p=x("td"),f=x("div"),f.textContent="Last price:",m=k(),$=x("div"),h=_(he),y=k(),g=x("tr"),C=x("td"),V=x("div"),V.textContent="Open price:",L=k(),U=x("div"),z=_(ye),A=k(),j=x("td"),F=x("div"),F.textContent="Previous close:",B=k(),S=x("div"),H=_(ge),q=k(),N=x("tr"),Q=x("td"),M=x("div"),M.textContent="Price change:",T=k(),R=x("div"),D=_(ve),G=k(),W=x("td"),Ue.c(),J=k(),X=x("div"),I=_(we),K=_("%"),Y=k(),Z=x("tr"),tt=x("td"),ze.c(),et=k(),nt=x("div"),ot=_(be),rt=k(),ct=x("td"),st=x("div"),st.textContent="Last quantity:",it=k(),lt=x("div"),at=_(xe),ut=k(),dt=x("tr"),pt=x("td"),ft=x("div"),ft.textContent="Bid price:",mt=k(),$t=x("div"),ht=_(Ce),yt=k(),gt=x("td"),vt=x("div"),vt.textContent="Bid quantity:",wt=k(),bt=x("div"),xt=_(_e),Ct=k(),_t=x("tr"),kt=x("td"),Pt=x("div"),Pt.textContent="Ask Price:",Ot=k(),Et=x("div"),Vt=_(ke),Lt=k(),Ut=x("td"),zt=x("div"),zt.textContent="Ask quantity:",At=k(),jt=x("div"),Ft=_(Pe),Nt=k(),Qt=x("tr"),Mt=x("td"),Tt=x("div"),Tt.textContent="High price:",Rt=k(),Dt=x("div"),Wt=_(Oe),Jt=k(),Xt=x("td"),It=x("div"),It.textContent="Low price:",Kt=k(),Yt=x("div"),Zt=_(Ee),te=k(),ee=x("tr"),ne=x("td"),oe=x("div"),oe.textContent="Volume:",re=k(),ce=x("div"),se=_(Ve),ie=k(),le=x("td"),ae=x("div"),ae.textContent="Quote volume:",ue=k(),de=x("div"),pe=_(Le),O(e,"class","closePopup"),O(a,"class","popUpValue"),O($,"class","popUpValue"),O(U,"class","popUpValue"),O(S,"class","popUpValue"),O(R,"class","popUpValue"),O(X,"class","popUpValue"),O(nt,"class","popUpValue"),O(lt,"class","popUpValue"),O($t,"class","popUpValue"),O(bt,"class","popUpValue"),O(Et,"class","popUpValue"),O(jt,"class","popUpValue"),O(Dt,"class","popUpValue"),O(Yt,"class","popUpValue"),O(ce,"class","popUpValue"),O(de,"class","popUpValue"),O(o,"class","popupTable")},m(b,x){w(b,e,x),w(b,n,x),w(b,o,x),v(o,r),v(r,c),v(c,s),v(s,i),v(s,l),v(s,a),v(a,u),v(c,d),v(c,p),v(p,f),v(p,m),v(p,$),v($,h),v(r,y),v(r,g),v(g,C),v(C,V),v(C,L),v(C,U),v(U,z),v(g,A),v(g,j),v(j,F),v(j,B),v(j,S),v(S,H),v(r,q),v(r,N),v(N,Q),v(Q,M),v(Q,T),v(Q,R),v(R,D),v(N,G),v(N,W),Ue.m(W,null),v(W,J),v(W,X),v(X,I),v(X,K),v(r,Y),v(r,Z),v(Z,tt),ze.m(tt,null),v(tt,et),v(tt,nt),v(nt,ot),v(Z,rt),v(Z,ct),v(ct,st),v(ct,it),v(ct,lt),v(lt,at),v(r,ut),v(r,dt),v(dt,pt),v(pt,ft),v(pt,mt),v(pt,$t),v($t,ht),v(dt,yt),v(dt,gt),v(gt,vt),v(gt,wt),v(gt,bt),v(bt,xt),v(r,Ct),v(r,_t),v(_t,kt),v(kt,Pt),v(kt,Ot),v(kt,Et),v(Et,Vt),v(_t,Lt),v(_t,Ut),v(Ut,zt),v(Ut,At),v(Ut,jt),v(jt,Ft),v(r,Nt),v(r,Qt),v(Qt,Mt),v(Mt,Tt),v(Mt,Rt),v(Mt,Dt),v(Dt,Wt),v(Qt,Jt),v(Qt,Xt),v(Xt,It),v(Xt,Kt),v(Xt,Yt),v(Yt,Zt),v(r,te),v(r,ee),v(ee,ne),v(ne,oe),v(ne,re),v(ne,ce),v(ce,se),v(ee,ie),v(ee,le),v(le,ae),v(le,ue),v(le,de),v(de,pe),fe||(me=P(e,"click",t[2]),fe=!0)},p(t,e){2&e&&$e!==($e=t[1].symbol+"")&&E(u,$e),2&e&&he!==(he=t[1].lastPrice+"")&&E(h,he),2&e&&ye!==(ye=t[1].openPrice+"")&&E(z,ye),2&e&&ge!==(ge=t[1].prevClosePrice+"")&&E(H,ge),2&e&&ve!==(ve=t[1].priceChange+"")&&E(D,ve),Ue.p(t,e),2&e&&we!==(we=parseFloat(t[1].priceChangePercent).toFixed(2)+"")&&E(I,we),ze.p(t,e),2&e&&be!==(be=t[1].weightedAvgPrice+"")&&E(ot,be),2&e&&xe!==(xe=t[1].lastQty+"")&&E(at,xe),2&e&&Ce!==(Ce=t[1].bidPrice+"")&&E(ht,Ce),2&e&&_e!==(_e=t[1].bidQty+"")&&E(xt,_e),2&e&&ke!==(ke=t[1].askPrice+"")&&E(Vt,ke),2&e&&Pe!==(Pe=t[1].askQty+"")&&E(Ft,Pe),2&e&&Oe!==(Oe=t[1].highPrice+"")&&E(Wt,Oe),2&e&&Ee!==(Ee=t[1].lowPrice+"")&&E(Zt,Ee),2&e&&Ve!==(Ve=t[1].volume+"")&&E(se,Ve),2&e&&Le!==(Le=t[1].quoteVolume+"")&&E(pe,Le)},d(t){t&&b(e),t&&b(n),t&&b(o),Ue.d(),ze.d(),fe=!1,me()}}}function Qt(t){let e,n;return e=new Ft({props:{isOpen:t[0],$$slots:{default:[Nt]},$$scope:{ctx:t}}}),e.$on("close",t[2]),{c(){st(e.$$.fragment)},m(t,o){it(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.isOpen=t[0]),18&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){ot(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}let Mt="Price change %: ",Tt="Price change percent: ",Rt="Weighted avg: ",Dt="Weighted average: ",Gt=600;function Wt(t,e,n){let{isOpen:o=!1}=e,{moneda:r=[]}=e;return t.$$set=t=>{"isOpen"in t&&n(0,o=t.isOpen),"moneda"in t&&n(1,r=t.moneda)},[o,r,()=>n(0,o=!1),function(){n(0,o=!0)}]}class Jt extends dt{constructor(t){super(),ut(this,t,Wt,Qt,i,{isOpen:0,moneda:1,open:3})}get open(){return this.$$.ctx[3]}}const Xt=["symbol","lastPrice","priceChangePercent"];function It(t,e,n){return e==Xt[0]?n?t.sort(((t,e)=>t[Xt[0]].toLowerCase().localeCompare(e[Xt[0]].toLowerCase()))):t.sort(((t,e)=>e[Xt[0]].toLowerCase().localeCompare(t[Xt[0]].toLowerCase()))):e==Xt[1]?n?t.sort(((t,e)=>t[Xt[1]]-e[Xt[1]])):t.sort(((t,e)=>e[Xt[1]]-t[Xt[1]])):e==Xt[2]&&(n?t.sort(((t,e)=>t[Xt[2]]-e[Xt[2]])):t.sort(((t,e)=>e[Xt[2]]-t[Xt[2]]))),t}function Kt(t,e,n){const o=t.slice();return o[12]=e[n],o}function Yt(e){let n,o=e[4][1]+"";return{c(){n=_(o)},m(t,e){w(t,n,e)},p:t,d(t){t&&b(n)}}}function Zt(e){let n,o=e[4][2]+"";return{c(){n=_(o)},m(t,e){w(t,n,e)},p:t,d(t){t&&b(n)}}}function te(t){let e,n,o,r,c,i,l,a,u,d,p,f,m,$=t[12][t[5][0]]+"",h=parseFloat(t[12][t[5][1]]).toFixed(2)+"",y=t[12][t[5][2]]+"";return{c(){e=x("tr"),n=x("td"),o=_($),r=k(),c=x("td"),i=_(h),a=k(),u=x("td"),d=_(y),O(c,"class",l=t[12][t[5][1]]>=oe?"major":"menor"),O(e,"class",p=t[12][t[5][1]]>=oe?"majorHover":"menorHover")},m(l,p){var $;w(l,e,p),v(e,n),v(n,o),v(e,r),v(e,c),v(c,i),v(e,a),v(e,u),v(u,d),f||(m=P(e,"click",($=function(){s(t[0](t[12]))&&t[0](t[12]).apply(this,arguments)},function(t){return t.preventDefault(),$.call(this,t)})),f=!0)},p(n,r){t=n,8&r&&$!==($=t[12][t[5][0]]+"")&&E(o,$),8&r&&h!==(h=parseFloat(t[12][t[5][1]]).toFixed(2)+"")&&E(i,h),8&r&&l!==(l=t[12][t[5][1]]>=oe?"major":"menor")&&O(c,"class",l),8&r&&y!==(y=t[12][t[5][2]]+"")&&E(d,y),8&r&&p!==(p=t[12][t[5][1]]>=oe?"majorHover":"menorHover")&&O(e,"class",p)},d(t){t&&b(e),f=!1,m()}}}function ee(t){let e,n,o,r,s,i,l,a,u,d,p,f,m,$,h,y,g;let C=(window.screen.width<ne?Zt:Yt)(t),_=t[3],E=[];for(let e=0;e<_.length;e+=1)E[e]=te(Kt(t,_,e));var V=Jt;function L(t){return{props:{moneda:t[2]}}}return V&&($=new V(L(t)),t[10]($)),{c(){e=x("table"),n=x("thead"),o=x("tr"),r=x("th"),r.textContent=`${t[4][0]}`,s=k(),i=x("th"),C.c(),l=k(),a=x("th"),a.textContent=`${t[4][3]}`,u=k(),d=x("tbody");for(let t=0;t<E.length;t+=1)E[t].c();p=k(),f=x("td"),m=k(),$&&st($.$$.fragment),O(r,"class","nom-th"),O(i,"class","percent-th"),O(a,"class","preu-th"),O(e,"class","taulaPrincipal")},m(c,b){w(c,e,b),v(e,n),v(n,o),v(o,r),v(o,s),v(o,i),C.m(i,null),v(o,l),v(o,a),v(e,u),v(e,d);for(let t=0;t<E.length;t+=1)E[t].m(d,null);v(d,p),v(d,f),v(e,m),$&&it($,e,null),h=!0,y||(g=[P(r,"click",t[7]),P(i,"click",t[8]),P(a,"click",t[9])],y=!0)},p(t,[n]){if(C.p(t,n),41&n){let e;for(_=t[3],e=0;e<_.length;e+=1){const o=Kt(t,_,e);E[e]?E[e].p(o,n):(E[e]=te(o),E[e].c(),E[e].m(d,p))}for(;e<E.length;e+=1)E[e].d(1);E.length=_.length}const o={};if(4&n&&(o.moneda=t[2]),V!==(V=Jt)){if($){tt();const t=$;ot(t.$$.fragment,1,0,(()=>{lt(t,1)})),et()}V?($=new V(L(t)),t[10]($),st($.$$.fragment),nt($.$$.fragment,1),it($,e,null)):$=null}else V&&$.$set(o)},i(t){h||($&&nt($.$$.fragment,t),h=!0)},o(t){$&&ot($.$$.fragment,t),h=!1},d(n){n&&b(e),C.d(),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(E,n),t[10](null),$&&lt($),y=!1,c(g)}}}const ne=600,oe=0;function re(t,e,n){let o;l(t,ht,(t=>n(3,o=t)));const r=["symbol","priceChangePercent","lastPrice"];let c,s,i=[],a=!0;function u(t){a?(ht.set(It(Object.values(o),t,a)),a=!1):(ht.set(It(Object.values(o),t,a)),a=!0)}c=function(t){n(2,i=t),s.open()};return[c,s,i,o,["Nom","Price change percent","24h %","Last price"],r,u,()=>u(r[0]),()=>u(r[1]),()=>u(r[2]),function(t){N[t?"unshift":"push"]((()=>{s=t,n(1,s)}))}]}class ce extends dt{constructor(t){super(),ut(this,t,re,ee,i,{})}}function se(t){let e,n,o,r;function c(t,e){return"string"==typeof t[8][4]?le:ie}let s=c(t),i=s(t);return{c(){e=C("svg"),n=C("g"),o=C("g"),i.c(),O(o,"transform",t[10]),O(n,"transform","translate(256 256)"),O(e,"id",t[1]),O(e,"class",t[0]),O(e,"style",t[9]),O(e,"viewBox",r=`0 0 ${t[8][0]} ${t[8][1]}`),O(e,"aria-hidden","true"),O(e,"role","img"),O(e,"xmlns","http://www.w3.org/2000/svg")},m(t,r){w(t,e,r),v(e,n),v(n,o),i.m(o,null)},p(t,n){s===(s=c(t))&&i?i.p(t,n):(i.d(1),i=s(t),i&&(i.c(),i.m(o,null))),1024&n&&O(o,"transform",t[10]),2&n&&O(e,"id",t[1]),1&n&&O(e,"class",t[0]),512&n&&O(e,"style",t[9]),256&n&&r!==(r=`0 0 ${t[8][0]} ${t[8][1]}`)&&O(e,"viewBox",r)},d(t){t&&b(e),i.d()}}}function ie(t){let e,n,o,r,c,s,i,l;return{c(){e=C("path"),c=C("path"),O(e,"d",n=t[8][4][0]),O(e,"fill",o=t[4]||t[2]||"currentColor"),O(e,"fill-opacity",r=0!=t[7]?t[5]:t[6]),O(e,"transform","translate(-256 -256)"),O(c,"d",s=t[8][4][1]),O(c,"fill",i=t[3]||t[2]||"currentColor"),O(c,"fill-opacity",l=0!=t[7]?t[6]:t[5]),O(c,"transform","translate(-256 -256)")},m(t,n){w(t,e,n),w(t,c,n)},p(t,a){256&a&&n!==(n=t[8][4][0])&&O(e,"d",n),20&a&&o!==(o=t[4]||t[2]||"currentColor")&&O(e,"fill",o),224&a&&r!==(r=0!=t[7]?t[5]:t[6])&&O(e,"fill-opacity",r),256&a&&s!==(s=t[8][4][1])&&O(c,"d",s),12&a&&i!==(i=t[3]||t[2]||"currentColor")&&O(c,"fill",i),224&a&&l!==(l=0!=t[7]?t[6]:t[5])&&O(c,"fill-opacity",l)},d(t){t&&b(e),t&&b(c)}}}function le(t){let e,n,o;return{c(){e=C("path"),O(e,"d",n=t[8][4]),O(e,"fill",o=t[2]||t[3]||"currentColor"),O(e,"transform","translate(-256 -256)")},m(t,n){w(t,e,n)},p(t,r){256&r&&n!==(n=t[8][4])&&O(e,"d",n),12&r&&o!==(o=t[2]||t[3]||"currentColor")&&O(e,"fill",o)},d(t){t&&b(e)}}}function ae(e){let n,o=e[8][4]&&se(e);return{c(){o&&o.c(),n=_("")},m(t,e){o&&o.m(t,e),w(t,n,e)},p(t,[e]){t[8][4]?o?o.p(t,e):(o=se(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&b(n)}}}function ue(t,e,n){let o,r,c,{class:s=""}=e,{id:i=""}=e,{style:l=""}=e,{icon:a}=e,{fw:u=!1}=e,{flip:d=!1}=e,{pull:p=!1}=e,{rotate:f=!1}=e,{size:m=!1}=e,{color:$=""}=e,{primaryColor:h=""}=e,{secondaryColor:y=""}=e,{primaryOpacity:g=1}=e,{secondaryOpacity:v=.4}=e,{swapOpacity:w=!1}=e;return t.$$set=t=>{"class"in t&&n(0,s=t.class),"id"in t&&n(1,i=t.id),"style"in t&&n(11,l=t.style),"icon"in t&&n(12,a=t.icon),"fw"in t&&n(13,u=t.fw),"flip"in t&&n(14,d=t.flip),"pull"in t&&n(15,p=t.pull),"rotate"in t&&n(16,f=t.rotate),"size"in t&&n(17,m=t.size),"color"in t&&n(2,$=t.color),"primaryColor"in t&&n(3,h=t.primaryColor),"secondaryColor"in t&&n(4,y=t.secondaryColor),"primaryOpacity"in t&&n(5,g=t.primaryOpacity),"secondaryOpacity"in t&&n(6,v=t.secondaryOpacity),"swapOpacity"in t&&n(7,w=t.swapOpacity)},t.$$.update=()=>{if(4096&t.$$.dirty&&n(8,o=a&&a.icon||[0,0,"",[],""]),174080&t.$$.dirty){let t,e;const o="1em";let c,s,i,a="-.125em";const d="visible";u&&(i="center",e="1.25em"),p&&(t=p),m&&("lg"==m?(s="1.33333em",c=".75em",a="-.225em"):s="xs"==m?".75em":"sm"==m?".875em":m.replace("x","em"));const f={float:t,width:e,height:o,"line-height":c,"font-size":s,"text-align":i,"vertical-align":a,overflow:d};let $="";for(const t in f)f[t]&&($+=`${t}:${f[t]};`);n(9,r=$+l)}if(81920&t.$$.dirty){let t="";if(d){let e=1,n=1;"horizontal"==d?e=-1:"vertical"==d?n=-1:e=n=-1,t+=` scale(${e} ${n})`}f&&(t+=` rotate(${f} 0 0)`),n(10,c=t)}},[s,i,$,h,y,g,v,w,o,r,c,l,a,u,d,p,f,m]}class de extends dt{constructor(t){super(),ut(this,t,ue,ae,i,{class:0,id:1,style:11,icon:12,fw:13,flip:14,pull:15,rotate:16,size:17,color:2,primaryColor:3,secondaryColor:4,primaryOpacity:5,secondaryOpacity:6,swapOpacity:7})}}
/*!
     * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var pe={prefix:"fas",iconName:"sync",icon:[512,512,[],"f021","M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"]};function fe(t){let e,n,o,r,s,i,l,a,u,d,p,f;return l=new de({props:{icon:pe}}),{c(){e=x("div"),n=x("div"),o=_(t[0]),r=k(),s=x("div"),i=x("button"),st(l.$$.fragment),a=k(),u=x("input"),O(n,"class","title"),O(u,"class","cercador"),O(u,"placeholder","Search..."),O(s,"class","cercar"),O(e,"class","container")},m(c,m){w(c,e,m),v(e,n),v(n,o),v(e,r),v(e,s),v(s,i),it(l,i,null),v(s,a),v(s,u),V(u,t[2]),d=!0,p||(f=[P(i,"click",t[3]),P(u,"keyup",t[4]),P(u,"input",t[5])],p=!0)},p(t,[e]){(!d||1&e)&&E(o,t[0]),4&e&&u.value!==t[2]&&V(u,t[2])},i(t){d||(nt(l.$$.fragment,t),d=!0)},o(t){ot(l.$$.fragment,t),d=!1},d(t){t&&b(e),lt(l),p=!1,c(f)}}}function me(t,e,n){let o,r,c,s,i,{name:l}=e;async function a(t){clearTimeout(c),c=setTimeout((()=>{ht.update((()=>$t.filter((e=>e.symbol.includes(t.toUpperCase())))))}),750)}return t.$$set=t=>{"name"in t&&n(0,l=t.name)},[l,a,s,async function(){o=await fetch(ft),r=await o.json(),""==s?ht.set(r):(ht.update((t=>(t.forEach((t=>{r.forEach((e=>{if(t.symbol==e.symbol)for(var n in t)t[n]=e[n]}))})),i=t,t))),ht.set(i))},({target:{value:t}})=>a(t),function(){s=this.value,n(2,s)}]}class $e extends dt{constructor(t){super(),ut(this,t,me,fe,i,{name:0,cercar:1})}get cercar(){return this.$$.ctx[1]}}function he(e){let n;return{c(){n=x("footer"),n.innerHTML='<div><a class="footer-text" href="https://www.twitter.com/realGoloSEO">Jordi Gómez Lozano - 2021</a></div>'},m(t,e){w(t,n,e)},p:t,i:t,o:t,d(t){t&&b(n)}}}class ye extends dt{constructor(t){super(),ut(this,t,null,he,i,{})}}function ge(e){let n,o,r,c,s,i,l;return o=new $e({props:{name:ve}}),c=new ce({}),i=new ye({}),{c(){n=x("main"),st(o.$$.fragment),r=k(),st(c.$$.fragment),s=k(),st(i.$$.fragment),O(n,"class","svelte-1c74muz")},m(t,e){w(t,n,e),it(o,n,null),v(n,r),it(c,n,null),v(n,s),it(i,n,null),l=!0},p:t,i(t){l||(nt(o.$$.fragment,t),nt(c.$$.fragment,t),nt(i.$$.fragment,t),l=!0)},o(t){ot(o.$$.fragment,t),ot(c.$$.fragment,t),ot(i.$$.fragment,t),l=!1},d(t){t&&b(n),lt(o),lt(c),lt(i)}}}let ve="Coin stats";return new class extends dt{constructor(t){super(),ut(this,t,null,ge,i,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
