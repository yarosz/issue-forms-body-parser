var e=require("unified"),n=require("remark-parse"),t=require("remark-gfm"),r=require("@sindresorhus/slugify"),i=require("remark-stringify"),u=require("strip-final-newline"),o=require("date-fns"),a=require("date-fns-tz/esm");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=/*#__PURE__*/f(n),c=/*#__PURE__*/f(t),d=/*#__PURE__*/f(r),h=/*#__PURE__*/f(i),s=/*#__PURE__*/f(u);function y(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var v=["yyyy-MM-dd","dd/MM/yyyy","dd/MM/yy","dd-MM-yyyy","dd-MM-yy","dd.MM.yyyy","dd.MM.yy"],m=["HH:mm","HH.mm","hh:mm a","hh:mm A"],p=function e(n){return n.children.map(function(t){var r={};return"list"===t.type?e(n):"listItem"===t.type?(r.checked=t.checked,t.children.map(function(e){if("paragraph"===e.type)return r.text=e.children.map(function(e){return"link"===e.type?(r.link=e.url,"["+e.children[0].value+"]("+e.url+")"):e.value}).filter(function(e){return!!e}).join(""),r}).filter(function(e){return!!e})):void 0}).filter(function(e){return!!e})};function g(e,n,t){if(!e.s){if(t instanceof b){if(!t.s)return void(t.o=g.bind(null,e,n));1&n&&(n=t.s),t=t.v}if(t&&t.then)return void t.then(g.bind(null,e,n),g.bind(null,e,2));e.s=n,e.v=t;var r=e.o;r&&r(e)}}const b=/*#__PURE__*/function(){function e(){}return e.prototype.then=function(n,t){const r=new e,i=this.s;if(i){const e=1&i?n:t;if(e){try{g(r,1,e(this.v))}catch(e){g(r,2,e)}return r}return this}return this.o=function(e){try{const i=e.v;1&e.s?g(r,1,n?n(i):i):t?g(r,1,t(i)):g(r,2,i)}catch(e){g(r,2,e)}},r},e}();function M(e){return e instanceof b&&1&e.s}module.exports=function(n){try{var t,r,i,u,f,x,w,k,T,q,I,O,j;return Promise.resolve(e.unified().use(l.default).use(c.default).parse(n)).then(function(n){function l(){for(I in A)(j=(O=A[I]).content.filter(Boolean))&&j.length>0&&(1===j.length&&(O.text=j[0]),O.text=j.join("\n\n")),O.content=j;return A}if(!n)return[];var A={},U=null;t=function(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=function(e,n){if(e){if("string"==typeof e)return y(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?y(e,n):void 0}}(e))){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(n.children);var H=function(e,n,t){for(var r;;){var i=e();if(M(i)&&(i=i.v),!i)return u;if(i.then){r=0;break}var u=t();if(u&&u.then){if(!M(u)){r=1;break}u=u.s}}var o=new b,a=g.bind(null,o,2);return(0===r?i.then(l):1===r?u.then(f):(void 0).then(function(){(i=e())?i.then?i.then(l).then(void 0,a):l(i):g(o,1,u)})).then(void 0,a),o;function f(n){u=n;do{if(!(i=e())||M(i)&&!i.v)return void g(o,1,u);if(i.then)return void i.then(l).then(void 0,a);M(u=t())&&(u=u.v)}while(!u||!u.then);u.then(f).then(void 0,a)}function l(e){e?(u=t())&&u.then?u.then(f).then(void 0,a):f(u):g(o,1,u)}}(function(){return!(r=t()).done},0,function(){return i=r.value,Promise.resolve(e.unified().use(c.default).use(h.default).stringify(i)).then(function(e){var n,t;(u=s.default(e)).indexOf("\\_")>-1&&(u=u.replace(/\\_/g,"_")),"heading"===i.type?(U=d.default(i.children[0].value),A[U]={title:i.children[0].value,heading:i.depth,content:[]}):"paragraph"===i.type&&U?(f=A[U],n=u,t=v.map(function(e){return o.isMatch(n,e)}),x=t.indexOf(!0)>-1?a.zonedTimeToUtc(o.parse(n,v[t.indexOf(!0)],new Date),"UTC").toJSON().split("T")[0]:null,w=function(e){var n=m.map(function(n){return o.isMatch(e,n)});if(n.indexOf(!0)>-1){var t=a.zonedTimeToUtc(o.parse(e,m[n.indexOf(!0)],new Date),"UTC");return a.formatInTimeZone(t,"UTC","HH:mm")}return null}(u),k=function(e){var n=!1,t={hours:0,minutes:0},r=new RegExp(/([0-9]+)h([0-9]+)m/),i=new RegExp(/([0-9]+)h/);if(e.match(r)){n=!0;var u=e.match(r),o=u[2];t.hours=parseInt(u[1]),t.minutes=parseInt(o)}else if(e.match(i)){n=!0;var a=e.match(i);t.hours=parseInt(a[1]),t.minutes=0}return n?t:null}(u),x&&(f.date=x),w&&(f.time=w),k&&(f.duration=k),f.content.push(u)):"list"===i.type?((T=A[U]).text=u,T.list=p(i).flat()):"html"===i.type?A[U].content.push(i.html):"code"===i.type?((q=A[U]).lang=i.lang,q.text=u):process.env.DEBUG&&(console.log("unhandled token type"),console.log(i))})});return H&&H.then?H.then(l):l()})}catch(e){return Promise.reject(e)}};
//# sourceMappingURL=parse.cjs.map
