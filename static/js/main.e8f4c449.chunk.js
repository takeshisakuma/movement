(this.webpackJsonpmovement=this.webpackJsonpmovement||[]).push([[0],{14:function(e,t,a){e.exports={header:"Header_header__1O-9b"}},17:function(e,t,a){e.exports={wrapper:"Layout_wrapper__36Q6m",main:"Layout_main__3Vi6x"}},18:function(e,t,a){e.exports={container:"VideoGroup_container__jjxFg",inner:"VideoGroup_inner__1eq9G"}},19:function(e,t,a){e.exports={item:"VideoCard_item__23P15",title:"VideoCard_title__1eM_s"}},20:function(e,t,a){e.exports={overlay:"Limit_overlay__2iG23",wrapper:"Limit_wrapper__2haYI"}},21:function(e,t,a){e.exports={wrap:"VideoPlay_wrap__1iv4j",video:"VideoPlay_video__3GPlA"}},22:function(e,t,a){e.exports={wrap:"VideoDetail_wrap__2QTdP",title:"VideoDetail_title__2sG67"}},36:function(e,t,a){e.exports={footer:"Footer_footer__GMmPx"}},41:function(e,t,a){},43:function(e,t,a){e.exports=a(81)},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(34),c=a.n(i),l=a(10),o=a(1),s=a(14),u=a.n(s),p=function(){return r.a.createElement("div",{className:u.a.header},r.a.createElement("div",{className:u.a.item},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},"MOVEMENT"))))},m=a(36),d=a.n(m),f=function(){return r.a.createElement("footer",{className:d.a.footer},"MOVEMENT")},E=a(17),v=a.n(E),_=function(e){var t=e.children;return r.a.createElement("div",{className:v.a.wrapper},r.a.createElement(p,null),r.a.createElement("main",{className:v.a.main},t),r.a.createElement(f,null))},b=a(9),y=a.n(b),h=a(8),w=a(12),x=a(37),O=a.n(x).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),j={part:"snippet",maxResults:10,key:"AIzaSyCwVgNLXfzEhAblkTBWx1GC-lGezCiI0c8",regionCode:"JP",type:"video"},S=function(){var e=Object(w.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/playlistItems",{params:Object(h.a)(Object(h.a)({},j),{},{playlistId:"PLOrFWVDIbHLHKyKMxWuv8ujknACOkgC4N",order:"date"})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("videos",{params:Object(h.a)(Object(h.a)({},j),{},{id:t})});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=a(42),N={selected:{},playlist:[],limit:""},L=function(e,t){switch(t.type){case"SET_PLAYLIST":return Object(h.a)(Object(h.a)({},e),{},{playlist:t.payload.playlist});case"SET_SELECTED":return Object(h.a)(Object(h.a)({},e),{},{selected:t.payload.selected});case"SET_LIMIT":return Object(h.a)(Object(h.a)({},e),{},{limit:t.payload.limit});default:return e}},T=Object(n.createContext)({globalState:N,setGlobalState:function(){return null}}),k=function(e){var t=e.children,a=Object(n.useReducer)(L,N),i=Object(g.a)(a,2),c=i[0],l=i[1];return r.a.createElement(T.Provider,{value:{globalState:c,setGlobalState:l}},t)},C=a(18),G=a.n(C),P=function(e){var t=e.children;return r.a.createElement("div",{className:G.a.container},r.a.createElement("div",{className:G.a.inner},t))},V=a(19),M=a.n(V),A=function(e){var t=e.src,a=e.title,n=e.position,i=e.videoid,c=e.playlistid;return r.a.createElement(l.b,{to:{pathname:"watch",search:"?v=".concat(i,"&list=").concat(c,"&index=").concat(n)},className:M.a.item},r.a.createElement("div",null,r.a.createElement("img",{src:t,alt:a}),r.a.createElement("p",{className:M.a.title},a)))},D=a(20),W=a.n(D),R=function(){return r.a.createElement("div",{className:W.a.overlay},r.a.createElement("div",{className:W.a.wrapper},"YouTube Data API\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u6570\u304c\u4e0a\u9650\u306b\u9054\u3057\u307e\u3057\u305f\u3002",r.a.createElement("br",null),"\u307e\u305f\u660e\u65e5\u4ee5\u964d\u306b\u8d77\u3053\u3057\u304f\u3060\u3055\u3044\u3002"))},Y=function(){var e=Object(n.useContext)(T),t=e.globalState,a=e.setGlobalState;return Object(n.useEffect)((function(){S().then((function(e){a({type:"SET_PLAYLIST",payload:{playlist:e.data.items}})})).catch((function(){a({type:"SET_LIMIT",payload:{limit:!0}})}))}),[]),r.a.createElement(_,null,r.a.createElement(P,null,t.playlist&&t.playlist.map((function(e){return r.a.createElement(A,{key:e.snippet.position,src:e.snippet.thumbnails.standard.url,title:e.snippet.title,position:e.snippet.position,videoid:e.snippet.resourceId.videoId,playlistid:e.snippet.playlistId})}))),t.limit&&r.a.createElement(R,null))},z=a(38),B=a(21),F=a.n(B),H=function(e){var t=e.id;return r.a.createElement("div",{className:F.a.wrap},r.a.createElement(z.a,{className:F.a.video,videoId:t}))},J=a(22),K=a.n(J),Q=function(){var e=Object(n.useContext)(T).globalState;return e.selected&&e.selected.id?r.a.createElement("div",{className:K.a.wrap},r.a.createElement(H,{id:e.selected.id}),r.a.createElement("p",{className:K.a.title},e.selected.snippet.title)):r.a.createElement(R,null)},U=function(){var e=Object(n.useContext)(T),t=e.globalState,a=e.setGlobalState,i=Object(o.f)(),c=function(){var e=Object(w.a)(y.a.mark((function e(){var t,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=new URLSearchParams(i.search),!(n=t.get("v"))){e.next=7;break}return e.next=5,I(n);case 5:r=e.sent,a({type:"SET_SELECTED",payload:{selected:r.data.items.shift()}});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[i.search]),r.a.createElement(_,null,r.a.createElement(Q,null),r.a.createElement(P,null,t.playlist&&t.playlist.map((function(e){return r.a.createElement(A,{key:e.snippet.position,src:e.snippet.thumbnails.standard.url,title:e.snippet.title,position:e.snippet.position,videoid:e.snippet.resourceId.videoId,playlistid:e.snippet.playlistId})}))))},q=a(41),X=a.n(q);var $=function(){return r.a.createElement(l.a,{className:X.a,basename:"/movement"},r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:Y}),r.a.createElement(o.a,{exact:!0,path:"/watch",component:U})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null,r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e8f4c449.chunk.js.map