(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{343:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));n(606);function r(t,e){var n=document.createElement("a");document.body.appendChild(n),n.href=t,n.target="_self",n.download=e,n.click(),document.body.removeChild(n)}var o=function(t,e){return String(t).padStart(e,"0")};function c(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=["January","February","March","April","May","June","July","August","September","October","November","December"];if(t){var r=t.getDate(),c=n[t.getMonth()],l=t.getFullYear(),d=t.getHours(),h=t.getMinutes();return r+" "+c+" "+l+(e?", "+o(d,2)+":"+o(h,2):"")}return""}},349:function(t,e,n){"use strict";n(104),n(55),n(80),n(198),n(64),n(66),n(334);var r,o=n(6),c=(n(376),n(347)),l=n(307),d=n(350),h=n(133),f=n(7),v=n(0),m=n(132);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));var w=Object(m.a)(c.a,l.a,d.a,h.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(f.v)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(f.r)(t).find((function(e){return t[e]}));return e&&r[e]||Object(f.f)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:x({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=x(x({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=x(x({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),r="material-icons",o=t.indexOf("-"),c=o<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(r=t.slice(0,o))&&(r=""),data.class[r]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=v.a.extend({name:"v-icon",$_wrapperFor:w,functional:!0,render:function(t,e){var data=e.data,n=e.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),t(w,data,r?[r]:n)}})},351:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return y})),n.d(e,"a",(function(){return x}));n(23);var r=n(134);function o(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return(t=Array()).concat.apply(t,[e].concat(r))}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var c="transition".concat(n.props.group?"-group":""),data={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(data.on.leave=o(data.on.leave,(function(t){return t.style.position="absolute"}))),n.props.hideOnLeave&&(data.on.leave=o(data.on.leave,(function(t){return t.style.display="none"}))),e(c,Object(r.a)(n.data,data),n.children)}}}function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,o){return n("transition",Object(r.a)(o.data,{props:{name:t},on:e}),o.children)}}}var d=n(6),h=n(7),f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",r="offset".concat(Object(h.w)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(d.a)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var o=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var c="".concat(e[r],"px");e.style[n]="0",e.offsetHeight,e.style.transition=o.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=c}))},afterEnter:c,enterCancelled:c,leave:function(t){t._initialStyle=Object(d.a)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[r],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:o,leaveCancelled:o};function o(e){t&&e._parent&&e._parent.classList.remove(t),c(e)}function c(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},v=(c("carousel-transition"),c("carousel-reverse-transition"),c("tab-transition"),c("tab-reverse-transition"),c("menu-transition"),c("fab-transition","center center","out-in"),c("dialog-transition"),c("dialog-bottom-transition"),c("dialog-top-transition"),c("fade-transition")),m=c("scale-transition"),y=(c("scroll-x-transition"),c("scroll-x-reverse-transition"),c("scroll-y-transition"),c("scroll-y-reverse-transition"),c("slide-x-transition")),x=(c("slide-x-reverse-transition"),c("slide-y-transition"),c("slide-y-reverse-transition"),l("expand-transition",f()));l("expand-x-transition",f("",!0))},376:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("6b715e77",content,!0,{sourceMap:!1})},377:function(t,e,n){var r=n(28)(!1);r.push([t.i,'.top-color{background-color:#21a68d}.only-visible-to-html2canvas{display:none}.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=r},416:function(t,e,n){"use strict";var r=n(6),o=n(0);var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return o.a.extend({name:"proxyable",model:{prop:t,event:e},props:Object(r.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r.a)({},t,(function(t){this.internalLazyValue=t}))})}();e.a=c},555:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("b42bf3c0",content,!0,{sourceMap:!1})},566:function(t,e,n){var content=n(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("3b643c11",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";n(555)},594:function(t,e,n){var r=n(28)(!1);r.push([t.i,".media-style img,a,audio,video{max-width:100%;max-height:50vh}.center{position:absolute;top:0;left:-10px;bottom:0;right:0}.rando-file-container{margin:0;padding:2px 0 2px 10px;border-radius:5px;background-color:rgba(0,0,0,.2)}",""]),t.exports=r},608:function(t,e,n){"use strict";n.r(e);var r={name:"Attachment",props:["attachmentPromise"],data:function(){return{attachment:void 0}},created:function(){var t=this;this.attachmentPromise.then((function(e){return t.attachment=e}))}},o=(n(593),n(30)),c=n(50),l=n.n(c),d=n(663),h=n(349),f=n(664),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.attachment?n("div",{staticClass:"media-style"},[t.attachment.mimeType.startsWith("image/")?n("img",{attrs:{src:t.attachment.src,title:t.attachment.fileName,alt:t.attachment.fileName}}):t.attachment.mimeType.startsWith("video/")?n("video",{attrs:{controls:"",title:t.attachment.fileName}},[n("source",{attrs:{src:t.attachment.src,type:t.attachment.mimeType}})]):t.attachment.mimeType.startsWith("audio/")?n("audio",{attrs:{controls:"",src:t.attachment.src,title:t.attachment.fileName}}):n("v-row",{staticClass:"rando-file-container",attrs:{align:"center"}},[n("v-col",{staticClass:"ma-0 pa-0 pr-3",staticStyle:{position:"relative"},attrs:{cols:"2"}},[n("v-row",{attrs:{justify:"center"}},[n("v-icon",{staticClass:"ma-0 pa-0",attrs:{size:"30",color:"grey",left:""}},[t._v("mdi-file")])],1),t._v(" "),n("div",{staticClass:"center",staticStyle:{"font-size":"xx-small"}},[t._v("\n          "+t._s(t.attachment.mimeType)+"\n        ")])],1),t._v(" "),n("v-col",{staticClass:"ma-auto pl-0 pr-2 py-1",attrs:{align:"left",cols:"10"}},[n("div",{staticClass:"caption",staticStyle:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[t._v("\n          "+t._s(t.attachment.fileName)+"\n        ")])])],1)],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VIcon:h.a,VRow:f.a})},613:function(t,e,n){"use strict";n(566)},614:function(t,e,n){var r=n(28)(!1);r.push([t.i,".scroll-stop[data-v-02b828ec]{scroll-snap-align:start}.chat[data-v-02b828ec]{-ms-scroll-snap-type:y mandatory;scroll-snap-type:y mandatory;border-radius:10px;width:100%;height:90vh;background-repeat:repeat;overflow:scroll;overflow-x:hidden;background-color:#0d1418;background-image:url(https://whatsapp-chat-parser.netlify.app/static/media/bg-dark.ffb9199c.png)}.myMessage[data-v-02b828ec]{background-color:#0e6162!important;margin-left:auto!important}.message[data-v-02b828ec]{text-align:left;word-break:break-word}.system[data-v-02b828ec]{background-color:#353526!important;max-width:70%!important;margin:auto!important;text-align:center;word-wrap:break-word}.system .message[data-v-02b828ec]{text-align:center;color:#fad964!important}.system .author[data-v-02b828ec],.system .date[data-v-02b828ec]{display:none}",""]),t.exports=r},654:function(t,e,n){"use strict";n.r(e);n(203),n(204),n(22),n(67),n(206),n(51),n(56),n(43);var r=n(8),o=n(343),c={name:"Chat",data:function(){return{startIdx:0,selectedEgo:"",offset:20}},props:["chat","attachments"],computed:{},methods:{parseMessage:function(t){var e=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");new RegExp("");var n=t.split(" "),r="";return n.forEach((function(t){e.test(t)?r+="<a style='word-break: break-all' href="+t+">"+t+"</a> ":r+=t+" "})),r},changeEgoTo:function(t){this.$emit("setEgo",t),this.selectedEgo=t},_getDateString:function(t){return Object(o.b)(t)},getAttachment:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.attachments.file(t).async("base64");case 2:return data=n.sent,n.abrupt("return",e.renderAttachment(t,data));case 4:case"end":return n.stop()}}),n)})))()},getMimeType:function(t){return/\.jpe?g$/.test(t)?"image/jpeg":t.endsWith(".png")?"image/png":t.endsWith(".gif")?"image/gif":t.endsWith(".webp")?"image/webp":t.endsWith(".svg")?"image/svg+xml":t.endsWith(".mp4")?"video/mp4":t.endsWith(".webm")?"video/webm":t.endsWith(".mp3")?"audio/mpeg":t.endsWith(".m4a")?"audio/mp4":t.endsWith(".wav")?"audio/wav":t.endsWith(".opus")?"audio/ogg":t.split(".").splice(-1)[0]},renderAttachment:function(t,e){var n=this.getMimeType(t)||"";return{mimeType:n,src:"data:"+n+";base64, "+e,fileName:t.split("-")[1]}}}},l=(n(613),n(30)),d=n(50),h=n.n(d),f=n(580),v=n(285),m=n(736),y=n(572),x=n(396),w=n(410),_=n(794),C=n(664),k=n(685),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",{staticClass:"text-h3 font-weight-bold text-center"},[t._v("Your Chat")]),t._v(" "),n("div",{staticClass:"text-center my-4"},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",o,!1),r),[t._v("\n          Change Point of View\n        ")])]}}])},[t._v(" "),n("v-list",t._l(t.chat.personColorMap,(function(e,r){return n("v-list-item",{key:r,on:{click:function(e){return t.changeEgoTo(r)}}},[n("v-list-item-title",{style:"color: "+e},[t._v("\n            "+t._s(r)+"\n          ")])],1)})),1)],1)],1),t._v(" "),n("v-container",{staticClass:"chat"},[t._l(t.chat.chatObject.slice(t.startIdx,t.startIdx+t.offset),(function(data,e){return n("v-row",{key:e,staticClass:"scroll-stop",attrs:{"no-gutters":""}},[n("v-sheet",{staticClass:"pa-2 ma-2",class:{myMessage:t.selectedEgo?t.selectedEgo===data.author:t.chat.messagesPerPerson[0].name===data.author,system:void 0===t.chat.personColorMap[data.author]},attrs:{elevation:"1","max-width":"50%",rounded:"lg",color:"rgb(38, 45, 49)"}},[n("div",{staticClass:"text-small font-weight-bold author text-left",style:"color: "+t.chat.personColorMap[data.author]},[t._v("\n          "+t._s(data.author)+"\n        ")]),t._v(" "),data.media?n("div",[n("v-img",{attrs:{contain:"",width:"100%"}})],1):t._e(),t._v(" "),data.attachment?n("Attachment",{attrs:{attachmentPromise:t.getAttachment(data.attachment.fileName)}}):n("div",{staticClass:"white--text message",domProps:{innerHTML:t._s(t.parseMessage(data.message))}}),t._v(" "),n("div",{staticClass:"text-caption text-right date pt-2",staticStyle:{color:"rgb(204, 204, 204)"}},[t._v("\n          "+t._s(t._getDateString(data.date))+"\n        ")])],1)],1)})),t._v(" "),t.chat.chatObject.slice(t.startIdx+t.offset,t.startIdx+2*t.offset).length>0?n("v-row",{staticClass:"my-8"},[n("v-btn",{staticClass:"ma-auto white--text",attrs:{color:"rgb(14, 97, 98)"},on:{click:function(e){t.startIdx+=t.offset}}},[t._v("\n        Load next "+t._s(t.offset)+" messages")])],1):t._e()],2)],1)}),[],!1,null,"02b828ec",null);e.default=component.exports;h()(component,{Attachment:n(608).default}),h()(component,{VBtn:f.a,VContainer:v.a,VImg:m.a,VList:y.a,VListItem:x.a,VListItemTitle:w.a,VMenu:_.a,VRow:C.a,VSheet:k.a})}}]);