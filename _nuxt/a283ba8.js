(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{312:function(t,e,n){var r=n(35),o=n(210);t.exports=r?o:function(t){return Map.prototype.entries.call(t)}},334:function(t,e,n){"use strict";var r=n(2),o=n(200);r({target:"String",proto:!0,forced:n(201)("small")},{small:function(){return o(this,"small","","")}})},343:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));n(606);function r(t,e){var n=document.createElement("a");document.body.appendChild(n),n.href=t,n.target="_self",n.download=e,n.click(),document.body.removeChild(n)}var o=function(t,e){return String(t).padStart(e,"0")};function c(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=["January","February","March","April","May","June","July","August","September","October","November","December"];if(t){var r=t.getDate(),c=n[t.getMonth()],l=t.getFullYear(),f=t.getHours(),d=t.getMinutes();return r+" "+c+" "+l+(e?", "+o(f,2)+":"+o(d,2):"")}return""}},375:function(t,e,n){"use strict";var r=n(582),o=n(583);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},379:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(595);r({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return c.apply(this,arguments)}})},380:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(65),f=n(312),d=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=c(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0,3);return!d(e,(function(t,e,r){if(!n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},381:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(44),l=n(12),f=n(81),d=n(65),v=n(105),h=n(312),y=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=l(this),e=h(map),n=d(t,arguments.length>1?arguments[1]:void 0,3),r=new(v(map,c("Map"))),o=f(r.set);return y(e,(function(t,e){n(e,t,map)&&o.call(r,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},382:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(65),f=n(312),d=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=c(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,r){if(n(e,t,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},383:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(65),f=n(312),d=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=c(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,r){if(n(e,t,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},384:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(312),f=n(596),d=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return d(l(c(this)),(function(e,n,r){if(f(n,t))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},385:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(312),f=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return f(l(c(this)),(function(e,n,r){if(n===t)return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},386:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(44),l=n(12),f=n(81),d=n(65),v=n(105),h=n(312),y=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=l(this),e=h(map),n=d(t,arguments.length>1?arguments[1]:void 0,3),r=new(v(map,c("Map"))),o=f(r.set);return y(e,(function(t,e){o.call(r,n(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},387:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(44),l=n(12),f=n(81),d=n(65),v=n(105),h=n(312),y=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=l(this),e=h(map),n=d(t,arguments.length>1?arguments[1]:void 0,3),r=new(v(map,c("Map"))),o=f(r.set);return y(e,(function(t,e){o.call(r,t,n(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},388:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(81),f=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=c(this),e=l(map.set),i=0;i<arguments.length;)f(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},389:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(81),f=n(312),d=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=c(this),e=f(map),n=arguments.length<2,r=n?void 0:arguments[1];if(l(t),d(e,(function(e,o){n?(n=!1,r=o):r=t(r,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty map with no initial value");return r}})},390:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(65),f=n(312),d=n(199);r({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=c(this),e=f(map),n=l(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,r){if(n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},391:function(t,e,n){"use strict";var r=n(2),o=n(35),c=n(12),l=n(81);r({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=c(this),n=arguments.length;l(e);var r=map.has(t);if(!r&&n<3)throw TypeError("Updating absent value");var o=r?map.get(t):l(n>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},414:function(t,e,n){"use strict";var r=n(2),o=n(200);r({target:"String",proto:!0,forced:n(201)("fixed")},{fixed:function(){return o(this,"tt","","")}})},557:function(t,e,n){"use strict";var r=n(2),o=n(707),c=n(33),l=n(24),f=n(53),d=n(107);r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=l(e.length),r=d(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:f(t)),r}})},558:function(t,e,n){n(84)("flat")},582:function(t,e,n){"use strict";var r=n(2),o=n(4),c=n(85),l=n(25),f=n(205),d=n(199),v=n(106),h=n(14),y=n(3),_=n(139),E=n(60),S=n(140);t.exports=function(t,e,n){var m=-1!==t.indexOf("Map"),w=-1!==t.indexOf("Weak"),R=m?"set":"add",T=o[t],x=T&&T.prototype,I=T,k={},A=function(t){var e=x[t];l(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return w&&!h(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(w&&!h(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof T||!(w||x.forEach&&!y((function(){(new T).entries().next()})))))I=n.getConstructor(e,t,m,R),f.REQUIRED=!0;else if(c(t,!0)){var M=new I,C=M[R](w?{}:-0,1)!=M,N=y((function(){M.has(1)})),D=_((function(t){new T(t)})),O=!w&&y((function(){for(var t=new T,e=5;e--;)t[R](e,e);return!t.has(-0)}));D||((I=e((function(e,n){v(e,I,t);var r=S(new T,e,I);return null!=n&&d(n,r[R],{that:r,AS_ENTRIES:m}),r}))).prototype=x,x.constructor=I),(N||O)&&(A("delete"),A("has"),m&&A("get")),(O||C)&&A(R),w&&x.clear&&delete x.clear}return k[t]=I,r({global:!0,forced:I!=T},k),E(I,t),w||n.setStrong(I,t,m),I}},583:function(t,e,n){"use strict";var r=n(19).f,o=n(69),c=n(137),l=n(65),f=n(106),d=n(199),v=n(136),h=n(138),y=n(18),_=n(205).fastKey,E=n(45),S=E.set,m=E.getterFor;t.exports={getConstructor:function(t,e,n,v){var h=t((function(t,r){f(t,h,e),S(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),y||(t.size=0),null!=r&&d(r,t[v],{that:t,AS_ENTRIES:n})})),E=m(e),w=function(t,e,n){var r,o,c=E(t),l=R(t,e);return l?l.value=n:(c.last=l={index:o=_(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=l),r&&(r.next=l),y?c.size++:t.size++,"F"!==o&&(c.index[o]=l)),t},R=function(t,e){var n,r=E(t),o=_(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(h.prototype,{clear:function(){for(var t=E(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,y?t.size=0:this.size=0},delete:function(t){var e=this,n=E(e),r=R(e,t);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),y?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=E(this),r=l(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!R(this,t)}}),c(h.prototype,n?{get:function(t){var e=R(this,t);return e&&e.value},set:function(t,e){return w(this,0===t?0:t,e)}}:{add:function(t){return w(this,t=0===t?0:t,t)}}),y&&r(h.prototype,"size",{get:function(){return E(this).size}}),h},setStrong:function(t,e,n){var r=e+" Iterator",o=m(e),c=m(r);v(t,e,(function(t,e){S(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=c(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),h(e)}}},589:function(t,e,n){var content=n(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("e3c19696",content,!0,{sourceMap:!1})},595:function(t,e,n){"use strict";var r=n(12),o=n(81);t.exports=function(){for(var t,e=r(this),n=o(e.delete),c=!0,l=0,f=arguments.length;l<f;l++)t=n.call(e,arguments[l]),c=c&&t;return!!c}},596:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},606:function(t,e,n){"use strict";var r=n(2),o=n(704).start;r({target:"String",proto:!0,forced:n(705)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},679:function(t,e,n){"use strict";n(589)},680:function(t,e,n){var r=n(28)(!1);r.push([t.i,".top-color[data-v-5438fae9]{background-color:#21a68d}.only-visible-to-html2canvas[data-v-5438fae9]{display:none}.cta[data-v-5438fae9]{text-align:center;background:#f2f2f2;padding:2em}.link[data-v-5438fae9]{border:none;font-family:arial,sans-serif;color:#069;text-decoration:underline;cursor:pointer}",""]),t.exports=r},697:function(t,e,n){"use strict";n.r(e);n(59),n(32),n(80),n(31),n(56);var r=n(584),o=n.n(r),c=n(343),l={name:"DownloadPopup",props:["graphs","chat"],data:function(){return{dialog:!1}},methods:{download:function(){this.$gtag.event("donation-popup-clicked",{event_category:"donation",event_label:"popup-clicked",value:"1"});var canvas=o()(this.graphs,{scrollX:0,scrollY:-window.scrollY,onclone:function(t){return t.querySelectorAll(".only-visible-to-html2canvas").forEach((function(t){return t.style.display="block"})),t}}),t=this.chat.messagesPerPerson.slice(0,2).map((function(t){return t.name})).join("-");canvas.then((function(canvas){Object(c.a)(canvas.toDataURL(),"whatsanlazye-results-"+t+".png")}))},paypalButtonPressed:function(){this.$gtag.event("donation-popup-clicked",{event_category:"donation",event_label:"paypal-clicked",value:"1"})}}},f=(n(679),n(30)),d=n(50),v=n.n(d),h=n(580),y=n(556),_=n(329),E=n(663),S=n(793),m=n(738),w=n(349),R=n(664),T=n(739),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"my-4 mb-16"},[n("v-row",{attrs:{justify:"center"}},[n("div",{staticClass:"cta my-md-4"},[n("div",{staticClass:"text-h3 font-weight-bold pb-4"},[t._v("\n        Download all Graphs at once!\n      ")]),t._v(" "),n("div",{staticClass:"text-body-1"},[t._v("Currently for free! "),n("br")]),t._v(" "),n("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{color:"#07bc4c",dark:""},on:{click:function(){return t.download()}}},r),[n("v-icon",[t._v("mdi-download")]),t._v("Download your Results now!\n          ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"headline cyan",staticStyle:{"word-break":"normal"}},[n("div",{staticClass:"text-h4 font-weight-bold"},[t._v("Did we make you go 🥳?")]),t._v(" "),n("span",[t._v("Buy us a ☕️ and get your results for free!!!")])]),t._v(" "),n("v-card-text",{staticClass:"pt-3"},[t._v("\n            You will get all results as an image exactly as presented on your\n            device. Generating may take a while.\n          ")]),t._v(" "),n("v-row",{staticClass:"mb-3",attrs:{align:"center",justify:"center"},on:{click:t.paypalButtonPressed}},[n("form",{attrs:{action:"https://www.paypal.com/donate",method:"post",target:"_blank"}},[n("input",{attrs:{type:"hidden",name:"hosted_button_id",value:"EPCYG8WEF289G"}}),t._v(" "),n("input",{attrs:{type:"image",src:"https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif",border:"0",name:"submit",title:"PayPal - The safer, easier way to pay online!",alt:"Donate with PayPal button"}}),t._v(" "),n("img",{attrs:{alt:"",border:"0",src:"https://www.paypal.com/en_US/i/scr/pixel.gif",width:"1",height:"1"}})])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n              Close\n            ")]),t._v(" "),n("v-btn",{attrs:{color:"primary",text:"",loading:!0}},[t._v(" Download ")])],1)],1)],1)],1)])],1)}),[],!1,null,"5438fae9",null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:y.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VCol:E.a,VDialog:S.a,VDivider:m.a,VIcon:w.a,VRow:R.a,VSpacer:T.a})},704:function(t,e,n){var r=n(24),o=n(142),c=n(26),l=Math.ceil,f=function(t){return function(e,n,f){var d,v,h=String(c(e)),y=h.length,_=void 0===f?" ":String(f),E=r(n);return E<=y||""==_?h:(d=E-y,(v=o.call(_,l(d/_.length))).length>d&&(v=v.slice(0,d)),t?h+v:v+h)}};t.exports={start:f(!1),end:f(!0)}},705:function(t,e,n){var r=n(87);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},706:function(t,e,n){"use strict";var r=n(2),o=n(200);r({target:"String",proto:!0,forced:n(201)("link")},{link:function(t){return o(this,"a","href",t)}})},707:function(t,e,n){"use strict";var r=n(86),o=n(24),c=n(65),l=function(t,e,source,n,f,d,v,h){for(var element,y=f,_=0,E=!!v&&c(v,h,3);_<n;){if(_ in source){if(element=E?E(source[_],_,e):source[_],d>0&&r(element))y=l(t,e,element,o(element.length),y,d-1)-1;else{if(y>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[y]=element}y++}_++}return y};t.exports=l}}]);