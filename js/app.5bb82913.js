(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},s={app:0},r={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-7c78e94c":"3789f742"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-7c78e94c":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-7c78e94c":"bebedaec"}[t]+".css",r=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],f.parentNode.removeChild(f),n(i)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){s[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,n[1](d)}r[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"231b":function(t,e,n){"use strict";var a=n("4a7d"),s=n.n(a);s.a},"23be":function(t,e,n){"use strict";var a=n("79a2"),s=n.n(a);e["default"]=s.a},"3dfd":function(t,e,n){"use strict";var a=n("912b"),s=n("23be"),r=(n("034f"),n("2877")),i=Object(r["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},"4a7d":function(t,e,n){},5127:function(t,e,n){"use strict";var a=n("f6b2"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),s=n("3dfd"),r=n("dc59"),i=n("0ff2"),o=n("8c4f"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Hero"),n("AboutMe"),n("ProjectsMe"),n("Contact"),n("Footer")],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"hero",style:{backgroundImage:"url("+t.data.image+")"},attrs:{id:"hero","data-scroll-index":"0"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"caption"},[n("h1",[t._v(t._s(t.data.name))]),n("p",[t._v(t._s(t.data.specialized))])]),t._m(0)])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"arrow"},[n("button",{staticClass:"icon-arrow-down",attrs:{"data-scroll":"#about_me"}})])}],f={name:"Hero",data(){return{data:""}},firebase:{data:r["a"].ref("hero")},created:function(){}},h=f,p=(n("6fab"),n("2877")),m=Object(p["a"])(h,u,d,!1,null,"44f48bc4",null),v=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about_me pt-100 pb-100",attrs:{id:"about_me","data-scroll-index":"1"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6 col-lg-5"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:t.data.img}})])]),n("div",{staticClass:"col-md-6 col-lg-7"},[n("div",{staticClass:"content"},[n("div",{staticClass:"heading"},[n("h2",[t._v(t._s(t.data.title))]),n("span",[t._v(t._s(t.data.specialized))])]),n("div",{staticClass:"info"},[t._v(t._s(t.data.info))]),n("a",{staticClass:"btn btn-dark",attrs:{href:t.data.cv,target:"_blank",rel:"noopener noreferrer"}},[t._v("View CV")])])])])])])},_=[],g={name:"AboutMe",data(){return{data:""}},firebase:{data:r["a"].ref("about-me")}},C=g,w=(n("231b"),Object(p["a"])(C,b,_,!1,null,"7f2e2e06",null)),y=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"project_me bg-gray pt-100 pb-100",attrs:{id:"project_me","data-scroll-index":"2"}},[n("div",{staticClass:"container"},[t._m(0),n("div",{staticClass:"group-item"},t._l(t.projects.slice(0,6),(function(e){return n("div",{key:e[".key"],staticClass:"item"},[n("a",{staticClass:"content",attrs:{href:e.link}},[n("img",{attrs:{src:e.img}}),n("div",{staticClass:"overlay"},[n("h3",{staticClass:"name"},[t._v(t._s(e.name))]),n("span",{staticClass:"strips"}),n("span",{staticClass:"date"},[t._v(t._s(e.date))])])])])})),0),n("div",{staticClass:"btn-wrapper"},[n("router-link",{staticClass:"btn btn-dark",attrs:{to:"/project"}},[t._v("Read More")]),n("router-view")],1)])])},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading-section"},[n("h6",[t._v("Project")]),n("h2",[t._v("Project i have done")])])}],x={name:"ProjectMe",data(){return{projects:[]}},firebase:{projects:r["a"].ref("projects")}},E=x,A=(n("7605"),Object(p["a"])(E,j,k,!1,null,"5deedde0",null)),O=A.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact pt-100 pb-100",attrs:{id:"contact","data-scroll-index":"3"}},[t._m(0),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4 item"},[n("div",{staticClass:"info"},[n("h5",[t._v("Phone")]),n("p",[t._v(t._s(t.data.phone))])])]),n("div",{staticClass:"col-md-4 item"},[n("div",{staticClass:"info"},[n("h5",[t._v("Email")]),n("p",[t._v(t._s(t.data.email))])])]),n("div",{staticClass:"col-md-4 item"},[n("div",{staticClass:"info"},[n("h5",[t._v("Address")]),n("p",[t._v(t._s(t.data.address))])])])])])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"heading-section"},[n("h6",[t._v("Cpntact")]),n("h2",[t._v("Get in touch")])])}],M={name:"Contact",data(){return{data:""}},firebase:{data:r["a"].ref("contact")}},T=M,$=(n("8516"),Object(p["a"])(T,S,P,!1,null,"0f2ba3b8",null)),R=$.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer pt-50 pb-50"},[n("div",{staticClass:"container"},[n("div",{staticClass:"copyright"},[t._v("Anh © 2020. All Right Reserved, Designed By Anh.")])])])}],L={name:"Footer"},F=L,q=(n("5127"),Object(p["a"])(F,I,B,!1,null,"e6f36d16",null)),D=q.exports,H={name:"home",components:{Hero:v,AboutMe:y,ProjectsMe:O,Contact:R,Footer:D}};window.onload=function(){class t{constructor(t={}){this.duration=t.duration||1e3,this.ease=t.easing||this._defaultEase,this.start=t.start,this.end=t.end,this.frame=null,this.next=null,this.isRunning=!1,this.events={},this.direction=this.start<this.end?"up":"down"}begin(){return this.isRunning||this.next===this.end||(this.frame=window.requestAnimationFrame(this._tick.bind(this))),this}stop(){return window.cancelAnimationFrame(this.frame),this.isRunning=!1,this.frame=null,this.timeStart=null,this.next=null,this}on(t,e){return this.events[t]=this.events[t]||[],this.events[t].push(e),this}emit(t,e){let n=this.events[t];n&&n.forEach(t=>t.call(this,e))}_tick(t){this.isRunning=!0;let e=this.next||this.start;this.timeStart||(this.timeStart=t),this.timeElapsed=t-this.timeStart,this.next=Math.round(this.ease(this.timeElapsed,this.start,this.end-this.start,this.duration)),this._shouldTick(e)?(this.emit("tick",this.next),this.frame=window.requestAnimationFrame(this._tick.bind(this))):(this.emit("tick",this.end),this.emit("done",null))}_shouldTick(t){return{up:this.next<this.end&&t<=this.next,down:this.next>this.end&&t>=this.next}[this.direction]}_defaultEase(t,e,n,a){return(t/=a/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}}const e=document.querySelectorAll("[data-scroll]");if(e)for(let n=0;n<e.length;n++){const a=e[n],s=e[n].getAttribute("data-scroll"),r=document.querySelectorAll(s);if(r)for(let e=0;e<r.length;e++)a.addEventListener("click",()=>{const n=window.scrollY||window.pageYOffset||document.documentElement.scrollTop;new t({start:n,end:r[e].getBoundingClientRect().top+n}).on("tick",t=>window.scrollTo(0,t)).begin()});else console.log("wrong id")}};var N=H,z=Object(p["a"])(N,c,l,!1,null,null,null),J=z.exports;a["a"].use(o["a"]);const K=[{path:"/",name:"home",component:J},{path:"/project",name:"project",component:function(){return n.e("chunk-7c78e94c").then(n.bind(null,"07bd"))}}],V=new o["a"]({routes:K});var U=V;a["a"].config.productionTip=!1,a["a"].use(i["a"]),new a["a"]({router:U,render:function(t){return t(s["default"])}}).$mount("#app")},"5ed6":function(t,e,n){},"6fab":function(t,e,n){"use strict";var a=n("999f"),s=n.n(a);s.a},7605:function(t,e,n){"use strict";var a=n("f6c7"),s=n.n(a);s.a},"79a2":function(t,e){},8516:function(t,e,n){"use strict";var a=n("5ed6"),s=n.n(a);s.a},"85ec":function(t,e,n){},"912b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticStyle:{display:"none"},attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},s=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}))},"999f":function(t,e,n){},dc59:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("59ca"),s=n.n(a);n("66ce");const r=s.a.initializeApp({apiKey:"AIzaSyBoJsaKIojm6RMVBiIntLl_Dvw_g84Icvo",authDomain:"my-profile-e2af7.firebaseapp.com",databaseURL:"https://my-profile-e2af7.firebaseio.com",projectId:"my-profile-e2af7",storageBucket:"my-profile-e2af7.appspot.com",messagingSenderId:"788177770925",appId:"1:788177770925:web:e0dd0d2709cc500dd2a924"}).database()},f6b2:function(t,e,n){},f6c7:function(t,e,n){}});
//# sourceMappingURL=app.5bb82913.js.map