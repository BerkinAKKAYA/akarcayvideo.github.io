!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function l(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let m,v;function $(){if(void 0===m){m=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){m=!0}}return m}function h(t,e,n){t.classList[n?"add":"remove"](e)}function w(t){v=t}function y(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(t)}const b=[],x=[],k=[],j=[],_=Promise.resolve();let E=!1;function q(t){k.push(t)}let C=!1;const N=new Set;function L(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];w(e),T(e.$$)}for(b.length=0;x.length;)x.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];N.has(e)||(N.add(e),e())}k.length=0}while(b.length);for(;j.length;)j.pop()();E=!1,C=!1,N.clear()}}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const A=new Set;function O(t,e){t&&t.i&&(A.delete(t),t.i(e))}function S(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push(()=>{A.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const z="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function D(t){t&&t.c()}function F(t,n,s){const{fragment:i,on_mount:r,on_destroy:a,after_update:l}=t.$$;i&&i.m(n,s),q(()=>{const n=r.map(e).filter(c);a?a.push(...n):o(n),t.$$.on_mount=[]}),l.forEach(q)}function I(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(b.push(t),E||(E=!0,_.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,c,s,i,r,l,u=[-1]){const d=v;w(e);const f=c.props||{},p=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(p.ctx=s?s(e,f,(t,n,...o)=>{const c=o.length?o[0]:n;return p.ctx&&r(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),g&&M(e,t)),n}):[],p.update(),g=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();c.intro&&O(e.$$.fragment),F(e,c.target,c.anchor),L()}w(d)}class H{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let n,c,s,l,g,m,v,$,w,y,b,x,k,j;return{c(){n=u("nav"),c=u("span"),c.textContent="Anasayfa",s=d(),l=u("span"),l.textContent="Fotoğraflar",g=d(),m=u("span"),m.textContent="Nostalji",v=d(),$=u("span"),$.textContent="Düğün",w=d(),y=u("span"),y.textContent="Klipler",b=d(),x=u("span"),x.textContent="Canlı Yayın",p(c,"class","svelte-qdjqos"),h(c,"active",0==e[0]),p(l,"class","svelte-qdjqos"),h(l,"active",1==e[0]),p(m,"class","svelte-qdjqos"),h(m,"active",2==e[0]),p($,"class","svelte-qdjqos"),h($,"active",3==e[0]),p(y,"class","svelte-qdjqos"),h(y,"active",4==e[0]),p(x,"class","svelte-qdjqos"),h(x,"active",5==e[0]),p(n,"class","svelte-qdjqos")},m(t,o){r(t,n,o),i(n,c),i(n,s),i(n,l),i(n,g),i(n,m),i(n,v),i(n,$),i(n,w),i(n,y),i(n,b),i(n,x),k||(j=[f(c,"click",e[1]),f(l,"click",e[2]),f(m,"click",e[3]),f($,"click",e[4]),f(y,"click",e[5]),f(x,"click",e[6])],k=!0)},p(t,[e]){1&e&&h(c,"active",0==t[0]),1&e&&h(l,"active",1==t[0]),1&e&&h(m,"active",2==t[0]),1&e&&h($,"active",3==t[0]),1&e&&h(y,"active",4==t[0]),1&e&&h(x,"active",5==t[0])},i:t,o:t,d(t){t&&a(n),k=!1,o(j)}}}function W(t,e,n){let{page:o}=e;return t.$$set=t=>{"page"in t&&n(0,o=t.page)},[o,()=>{n(0,o=0)},()=>{n(0,o=1)},()=>{n(0,o=2)},()=>{n(0,o=3)},()=>{n(0,o=4)},()=>{n(0,o=5)}]}class Y extends H{constructor(t){super(),P(this,t,W,R,s,{page:0})}}function V(t,e,n){const o=t.slice();return o[9]=e[n],o}function G(t){let e,n;return{c(){e=u("iframe"),p(e,"title","video"),e.src!==(n=t[9])&&p(e,"src",n),p(e,"frameborder","0"),p(e,"allow","gyroscope; picture-in-picture"),e.allowFullscreen=!0,p(e,"class","svelte-uv8i77")},m(t,n){r(t,e,n)},p(t,o){1&o&&e.src!==(n=t[9])&&p(e,"src",n)},d(t){t&&a(e)}}}function U(e){let n,o=e[0],c=[];for(let t=0;t<o.length;t+=1)c[t]=G(V(e,o,t));return{c(){n=u("main");for(let t=0;t<c.length;t+=1)c[t].c();p(n,"class","svelte-uv8i77")},m(t,e){r(t,n,e);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(t,[e]){if(1&e){let s;for(o=t[0],s=0;s<o.length;s+=1){const i=V(t,o,s);c[s]?c[s].p(i,e):(c[s]=G(i),c[s].c(),c[s].m(n,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=o.length}},i:t,o:t,d(t){t&&a(n),l(c,t)}}}function B(t,e,n){let{pageName:o}=e,{active:c}=e,s=[],i=[],r=0,a=!1;function l(t,e){for(let o=t;o<e;o++)s[o]?n(0,i[o]=s[o],i):a=!0;r=e}function u(){if(!c||a)return;const t=document.documentElement;t.scrollTop/(t.scrollHeight-t.clientHeight)>=.75&&l(r,r+10)}return y(async()=>{await async function(){const t=await GetVideos(o);return s=t.split(",").map(t=>"https://www.youtube.com/embed/"+t),s}(),l(0,10)}),t.$$set=t=>{"pageName"in t&&n(1,o=t.pageName),"active"in t&&n(2,c=t.active)},t.$$.update=()=>{4&t.$$.dirty&&c&&(document.onscroll=u,document.ontouchmove=u)},[i,o,c]}class K extends H{constructor(t){super(),P(this,t,B,U,s,{pageName:1,active:2})}}const{setTimeout:X,window:Z}=z;function J(t,e,n){const o=t.slice();return o[32]=e[n],o}function Q(t,e,n){const o=t.slice();return o[29]=e[n],o}function tt(t){let e,n,o,c;function s(...e){return t[13](t[32],...e)}return{c(){e=u("img"),e.src!==(n=t[32])&&p(e,"src",n),p(e,"alt","Resim"),p(e,"class","svelte-jo5hgh")},m(t,n){r(t,e,n),o||(c=f(e,"click",s),o=!0)},p(o,c){t=o,1&c[0]&&e.src!==(n=t[32])&&p(e,"src",n)},d(t){t&&a(e),o=!1,c()}}}function et(t){let e,n,o=t[29],c=[];for(let e=0;e<o.length;e+=1)c[e]=tt(J(t,o,e));return{c(){e=u("div");for(let t=0;t<c.length;t+=1)c[t].c();n=d(),p(e,"class","column svelte-jo5hgh")},m(t,o){r(t,e,o);for(let t=0;t<c.length;t+=1)c[t].m(e,null);i(e,n)},p(t,s){if(129&s[0]){let i;for(o=t[29],i=0;i<o.length;i+=1){const r=J(t,o,i);c[i]?c[i].p(r,s):(c[i]=tt(r),c[i].c(),c[i].m(e,n))}for(;i<c.length;i+=1)c[i].d(1);c.length=o.length}},d(t){t&&a(e),l(c,t)}}}function nt(e){let n,o,c,s;return{c(){n=u("img"),p(n,"id","arrow"),p(n,"class","prev svelte-jo5hgh"),n.src!==(o="img/arrow.svg")&&p(n,"src","img/arrow.svg"),p(n,"alt","Previous")},m(t,o){r(t,n,o),c||(s=f(n,"click",e[8]),c=!0)},p:t,d(t){t&&a(n),c=!1,s()}}}function ot(e){let n,o,c,s;return{c(){n=u("img"),p(n,"id","arrow"),p(n,"class","next svelte-jo5hgh"),n.src!==(o="img/arrow.svg")&&p(n,"src","img/arrow.svg"),p(n,"alt","Next")},m(t,o){r(t,n,o),c||(s=f(n,"click",e[9]),c=!0)},p:t,d(t){t&&a(n),c=!1,s()}}}function ct(e){let n,c,s,m,v,h,w,y,b,x,k,j=!1,_=()=>{j=!1};q(e[12]);let E=e[0],C=[];for(let t=0;t<E.length;t+=1)C[t]=et(Q(e,E,t));let N=e[4]>1&&nt(e),L=e[4]<e[1].length&&ot(e);return{c(){c=u("main");for(let t=0;t<C.length;t+=1)C[t].c();m=d(),v=u("div"),N&&N.c(),h=d(),w=u("img"),b=d(),L&&L.c(),p(c,"style",e[6]),p(c,"class","svelte-jo5hgh"),q(()=>e[14].call(c)),p(w,"id","image"),w.src!==(y=e[3])&&p(w,"src",y),p(w,"alt","Resim"),p(w,"class","svelte-jo5hgh"),p(v,"id","focused-image"),g(v,"display",e[3]?"block":"none"),g(v,"top",e[5]+"px"),p(v,"class","svelte-jo5hgh")},m(t,o){r(t,c,o);for(let t=0;t<C.length;t+=1)C[t].m(c,null);s=function(t,e){const n=getComputedStyle(t),o=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(t.style.position="relative");const c=u("iframe");c.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${o};`),c.setAttribute("aria-hidden","true"),c.tabIndex=-1;const s=$();let r;return s?(c.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=f(window,"message",t=>{t.source===c.contentWindow&&e()})):(c.src="about:blank",c.onload=()=>{r=f(c.contentWindow,"resize",e)}),i(t,c),()=>{(s||r&&c.contentWindow)&&r(),a(c)}}(c,e[14].bind(c)),r(t,m,o),r(t,v,o),N&&N.m(v,null),i(v,h),i(v,w),i(v,b),L&&L.m(v,null),x||(k=[f(Z,"scroll",()=>{j=!0,clearTimeout(n),n=X(_,100),e[12]()}),f(v,"click",e[10])],x=!0)},p(t,e){if(32&e[0]&&!j&&(j=!0,clearTimeout(n),scrollTo(Z.pageXOffset,t[5]),n=X(_,100)),129&e[0]){let n;for(E=t[0],n=0;n<E.length;n+=1){const o=Q(t,E,n);C[n]?C[n].p(o,e):(C[n]=et(o),C[n].c(),C[n].m(c,null))}for(;n<C.length;n+=1)C[n].d(1);C.length=E.length}64&e[0]&&p(c,"style",t[6]),t[4]>1?N?N.p(t,e):(N=nt(t),N.c(),N.m(v,h)):N&&(N.d(1),N=null),8&e[0]&&w.src!==(y=t[3])&&p(w,"src",y),t[4]<t[1].length?L?L.p(t,e):(L=ot(t),L.c(),L.m(v,null)):L&&(L.d(1),L=null),8&e[0]&&g(v,"display",t[3]?"block":"none"),32&e[0]&&g(v,"top",t[5]+"px")},i:t,o:t,d(t){t&&a(c),l(C,t),s(),t&&a(m),t&&a(v),N&&N.d(),L&&L.d(),x=!1,o(k)}}}const st="https://raw.githubusercontent.com/AkarcayVideo/akarcayvideo.github.io/master/fotograflar";function it(t,e,n){let o,{active:c}=e,s=[],i=[],r=[],a=0,l=null,u=0,d=0;async function f(t){const e=imagesRef.child(t),o=await e.getDownloadURL();i.push(o),n(1,i=[...new Set(i)].sort()),await new Promise((t,e)=>{setTimeout(t,1)}),g()}async function p(){!async function(t,e){for(let o=t;o<e;o++)await f(r[o]),n(16,d=e)}(d,d+2*k)}function g(){n(0,s=[]),i.forEach((t,e)=>{const o=e%k;n(0,s[o]=[...s[o]||[],t],s)})}function m(){if(!c||j)return;const t=document.documentElement;t.scrollTop/(t.scrollHeight-t.clientHeight)>=.75&&p()}function v(t){a<=600||(n(4,u=parseInt(t.split("/").pop().replace(".jpg",""))),n(3,l=t),x(!1))}y(async()=>{const t=document.querySelector("#focused-image");document.body.appendChild(t),n(15,r=await GetImagePaths()),p()});let $=!1;window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>{$=!0}}));const h=t=>t.preventDefault(),w=!!$&&{passive:!1},b="onwheel"in document.createElement("div")?"wheel":"mousewheel";function x(t){t?(window.removeEventListener("DOMMouseScroll",h,!1),window.removeEventListener(b,h,w),window.removeEventListener("touchmove",h,w)):(window.addEventListener("DOMMouseScroll",h,!1),window.addEventListener(b,h,w),window.addEventListener("touchmove",h,w))}let k,j,_;return t.$$set=t=>{"active"in t&&n(11,c=t.active)},t.$$.update=()=>{4&t.$$.dirty[0]&&n(18,k=a>1200?3:a>600?2:1),262144&t.$$.dirty[0]&&k&&g(),2048&t.$$.dirty[0]&&c&&(document.onscroll=m,document.ontouchmove=m),98304&t.$$.dirty[0]&&(j=d>=r.length),262144&t.$$.dirty[0]&&n(6,_=`grid-template-columns: repeat(${k}, 1fr)`)},[s,i,a,l,u,o,_,v,function(){v(`${st}/${u-1}.jpg`)},function(){v(`${st}/${u+1}.jpg`),u>=i.length-2&&!j&&p()},function(t){"focused-image"===t.target.id&&(n(3,l=""),x(!0))},c,function(){n(5,o=Z.pageYOffset)},t=>{v(t)},function(){a=this.clientWidth,n(2,a)}]}class rt extends H{constructor(t){super(),P(this,t,it,ct,s,{active:11},[-1,-1])}}function at(e){let n,o,c;return{c(){n=u("main"),o=u("iframe"),p(o,"title","Canlı Yayın"),o.src!==(c=lt)&&p(o,"src",c),p(o,"frameborder","0"),o.allowFullscreen=!0,p(o,"class","svelte-1cd8oux"),p(n,"class","svelte-1cd8oux")},m(t,e){r(t,n,e),i(n,o)},p:t,i:t,o:t,d(t){t&&a(n)}}}const lt="https://www.youtube.com/embed/live_stream?channel=UCpsYwd-aZF6FLfIzjv3V4Dw";class ut extends H{constructor(t){super(),P(this,t,null,at,s,{})}}function dt(t){let e,n,o,c,s,l,f,g,m,v,$,w,y,b,k,_,E,q,C,N,L,T,A,z;function M(e){t[1].call(null,e)}let P={};return void 0!==t[0]&&(P.page=t[0]),o=new Y({props:P}),x.push(()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(o,"page",M)),g=new K({props:{active:0===t[0],pageName:"anasayfa"}}),$=new rt({props:{active:1===t[0]}}),b=new K({props:{active:2===t[0],pageName:"nostalji"}}),E=new K({props:{active:3===t[0],pageName:"dugun"}}),N=new K({props:{active:4===t[0],pageName:"klipler"}}),A=new ut({}),{c(){e=u("div"),n=d(),D(o.$$.fragment),s=d(),l=u("div"),f=u("div"),D(g.$$.fragment),m=d(),v=u("div"),D($.$$.fragment),w=d(),y=u("div"),D(b.$$.fragment),k=d(),_=u("div"),D(E.$$.fragment),q=d(),C=u("div"),D(N.$$.fragment),L=d(),T=u("div"),D(A.$$.fragment),p(e,"id","banner"),p(e,"class","svelte-1w3tpas"),p(f,"class","page svelte-1w3tpas"),h(f,"active",0===t[0]),p(v,"class","page svelte-1w3tpas"),h(v,"active",1===t[0]),p(y,"class","page svelte-1w3tpas"),h(y,"active",2===t[0]),p(_,"class","page svelte-1w3tpas"),h(_,"active",3===t[0]),p(C,"class","page svelte-1w3tpas"),h(C,"active",4===t[0]),p(T,"class","page svelte-1w3tpas"),h(T,"active",5===t[0]),p(l,"id","pages"),p(l,"class","svelte-1w3tpas")},m(t,c){r(t,e,c),r(t,n,c),F(o,t,c),r(t,s,c),r(t,l,c),i(l,f),F(g,f,null),i(l,m),i(l,v),F($,v,null),i(l,w),i(l,y),F(b,y,null),i(l,k),i(l,_),F(E,_,null),i(l,q),i(l,C),F(N,C,null),i(l,L),i(l,T),F(A,T,null),z=!0},p(t,[e]){const n={};var s;!c&&1&e&&(c=!0,n.page=t[0],s=()=>c=!1,j.push(s)),o.$set(n);const i={};1&e&&(i.active=0===t[0]),g.$set(i),1&e&&h(f,"active",0===t[0]);const r={};1&e&&(r.active=1===t[0]),$.$set(r),1&e&&h(v,"active",1===t[0]);const a={};1&e&&(a.active=2===t[0]),b.$set(a),1&e&&h(y,"active",2===t[0]);const l={};1&e&&(l.active=3===t[0]),E.$set(l),1&e&&h(_,"active",3===t[0]);const u={};1&e&&(u.active=4===t[0]),N.$set(u),1&e&&h(C,"active",4===t[0]),1&e&&h(T,"active",5===t[0])},i(t){z||(O(o.$$.fragment,t),O(g.$$.fragment,t),O($.$$.fragment,t),O(b.$$.fragment,t),O(E.$$.fragment,t),O(N.$$.fragment,t),O(A.$$.fragment,t),z=!0)},o(t){S(o.$$.fragment,t),S(g.$$.fragment,t),S($.$$.fragment,t),S(b.$$.fragment,t),S(E.$$.fragment,t),S(N.$$.fragment,t),S(A.$$.fragment,t),z=!1},d(t){t&&a(e),t&&a(n),I(o,t),t&&a(s),t&&a(l),I(g),I($),I(b),I(E),I(N),I(A)}}}function ft(t,e,n){let o=0;return[o,function(t){o=t,n(0,o)}]}new class extends H{constructor(t){super(),P(this,t,ft,dt,s,{})}}({target:document.body})}();
