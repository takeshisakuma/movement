(this.webpackJsonpmovement=this.webpackJsonpmovement||[]).push([[0],{14:function(e,t,a){e.exports={header:"Header_header__1O-9b"}},17:function(e,t,a){e.exports={wrapper:"Layout_wrapper__36Q6m",main:"Layout_main__3Vi6x"}},18:function(e,t,a){e.exports={container:"VideoGroup_container__jjxFg",inner:"VideoGroup_inner__1eq9G"}},19:function(e,t,a){e.exports={item:"VideoCard_item__23P15",title:"VideoCard_title__1eM_s"}},20:function(e,t,a){e.exports={wrap:"VideoPlay_wrap__1iv4j",video:"VideoPlay_video__3GPlA"}},21:function(e,t,a){e.exports={wrap:"VideoDetail_wrap__2QTdP",title:"VideoDetail_title__2sG67"}},35:function(e,t,a){e.exports={footer:"Footer_footer__GMmPx"}},40:function(e,t,a){},42:function(e,t,a){e.exports=a(80)},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(33),c=a.n(i),l=a(10),o=a(1),s=a(14),u=a.n(s),p=function(){return r.a.createElement("div",{className:u.a.header},r.a.createElement("div",{className:u.a.item},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},"MOVEMENT"))))},d=a(35),m=a.n(d),f=function(){return r.a.createElement("footer",{className:m.a.footer},"MOVEMENT")},E=a(17),v=a.n(E),b=function(e){var t=e.children;return r.a.createElement("div",{className:v.a.wrapper},r.a.createElement(p,null),r.a.createElement("main",{className:v.a.main},t),r.a.createElement(f,null))},_=a(9),h=a.n(_),y=a(8),w=a(12),x=a(36),O=a.n(x).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),j={part:"snippet",maxResults:10,key:"AIzaSyCwVgNLXfzEhAblkTBWx1GC-lGezCiI0c8",regionCode:"JP",type:"video"},g=function(){var e=Object(w.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/playlistItems",{params:Object(y.a)(Object(y.a)({},j),{},{playlistId:"PLOrFWVDIbHLHKyKMxWuv8ujknACOkgC4N",order:"date"})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(w.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("videos",{params:Object(y.a)(Object(y.a)({},j),{},{id:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=a(41),I={selected:{},playlist:[]},k=function(e,t){switch(t.type){case"SET_PLAYLIST":return Object(y.a)(Object(y.a)({},e),{},{playlist:t.payload.playlist});case"SET_SELECTED":return Object(y.a)(Object(y.a)({},e),{},{selected:t.payload.selected});default:return e}},C=Object(n.createContext)({globalState:I,setGlobalState:function(){return null}}),L=function(e){var t=e.children,a=Object(n.useReducer)(k,I),i=Object(N.a)(a,2),c=i[0],l=i[1];return r.a.createElement(C.Provider,{value:{globalState:c,setGlobalState:l}},t)},V=a(18),G=a.n(V),P=function(e){var t=e.children;return r.a.createElement("div",{className:G.a.container},r.a.createElement("div",{className:G.a.inner},t))},T=a(19),M=a.n(T),A=function(e){var t=e.src,a=e.title,n=e.position,i=e.videoid,c=e.playlistid;return r.a.createElement(l.b,{to:{pathname:"watch",search:"?v=".concat(i,"&list=").concat(c,"&index=").concat(n)},className:M.a.item},r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",{className:M.a.title},a)))},D=function(){var e=Object(n.useContext)(C),t=e.globalState,a=e.setGlobalState;return Object(n.useEffect)((function(){g().then((function(e){a({type:"SET_PLAYLIST",payload:{playlist:e.data.items}})}))}),[]),r.a.createElement(b,null,r.a.createElement(P,null,t.playlist&&t.playlist.map((function(e){return r.a.createElement(A,{key:e.snippet.position,src:e.snippet.thumbnails.standard.url,title:e.snippet.title,position:e.snippet.position,videoid:e.snippet.resourceId.videoId,playlistid:e.snippet.playlistId})}))))},W=a(37),R=a(20),z=a.n(R),B=function(e){var t=e.id;return r.a.createElement("div",{className:z.a.wrap},r.a.createElement(W.a,{className:z.a.video,videoId:t}))},F=a(21),H=a.n(F),J=function(){var e=Object(n.useContext)(C).globalState;return e.selected&&e.selected.id?r.a.createElement("div",{className:H.a.wrap},r.a.createElement(B,{id:e.selected.id}),r.a.createElement("p",{className:H.a.title},e.selected.snippet.title)):r.a.createElement("span",null,"no data")},K=function(){var e=Object(n.useContext)(C),t=e.globalState,a=e.setGlobalState,i=Object(o.f)(),c=function(){var e=Object(w.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(i.search),!(n=t.get("v"))){e.next=7;break}return e.next=5,S(n);case 5:r=e.sent,a({type:"SET_SELECTED",payload:{selected:r.data.items.shift()}});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[i.search]),r.a.createElement(b,null,r.a.createElement(J,null),r.a.createElement(P,null,t.playlist&&t.playlist.map((function(e){return r.a.createElement(A,{key:e.snippet.position,src:e.snippet.thumbnails.standard.url,title:e.snippet.title,position:e.snippet.position,videoid:e.snippet.resourceId.videoId,playlistid:e.snippet.playlistId})}))))},Q=a(40),U=a.n(Q);var Y=function(){return r.a.createElement(l.a,{className:U.a},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:D}),r.a.createElement(o.a,{exact:!0,path:"/watch",component:K})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0b18fead.chunk.js.map