(this.webpackJsonpleedscarajo=this.webpackJsonpleedscarajo||[]).push([[0],{101:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(76),a(13)),u=a(50),i=(a(101),a(6)),s=a(11),m=a(127),d=a(132),p=a(21),f=a.n(p),E=a(51),h=a(24),v=Object(h.a)(new Date,"yyyy-MM-dd");console.log("TODAY",v);var b={STANDINGS:"competitions/".concat("2016","/standings"),FIXTURE:"competitions/".concat("2016","/matches?dateFrom=").concat(v,"&dateTo=").concat("2020-07-22"),TEAMS:"competitions/".concat("2016","/teams")},j={method:"GET",headers:{"x-auth-token":"3f6c1f8c43724bef824da7eaa66d847a"}},g=function(e,t){var a=new Date,n=new Date;n.setDate(a.getDate()+1);var r={data:t,expires:n};localStorage.setItem(e,JSON.stringify(r))},y=function(e){var t=localStorage.getItem(e);if(!t)return null;var a=JSON.parse(t),n=a.data,r=a.expires,c=new Date;return{data:n,isExpired:new Date(r)<c}},O=function(e){return"".concat("https://api.football-data.org/v2","/").concat(b[e])},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=Object(n.useState)(null),r=Object(s.a)(a,2),c=r[0],o=r[1],l=Object(n.useState)(null),u=Object(s.a)(l,2),i=u[0],m=u[1],d=Object(n.useState)(!1),p=Object(s.a)(d,2),h=p[0],v=p[1];return Object(n.useEffect)((function(){t?(o(t),v(!1),m(!1)):function(){var t=Object(E.a)(f.a.mark((function t(){var a,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.prev=1,t.next=4,fetch(O(e),j);case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,o(n),v(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),m(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}()()}),[]),{data:c,error:i,loading:h}},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return function(){var a="ls-".concat(e),r=y(a),c=r&&r.data,o=r&&r.isExpired,l=w(e,c),u=l.loading,i=l.data,s=l.error;return s&&console.log("error:",s),Object(n.useEffect)((function(){!u&&i&&!c&&!o&&g(a,i)}),[i,u]),{data:t(i),error:s,loading:u}}()},D=function(e){return e&&e.standings[0].table},x=function(e){return e&&e.matches},T=function(e){return e&&e.teams},k=function(){var e=S("STANDINGS",D),t=e.data,a=e.loading,c=Object(n.useState)({property:"points",direction:"desc"}),o=Object(s.a)(c,2),l=o[0],u=o[1];return a||!t?r.a.createElement("div",null,"Loading..."):r.a.createElement(m.a,{primaryKey:"index",sort:l,onSort:u,columns:[{property:"position",header:r.a.createElement(d.a,null,"Position")},{property:"team.name",header:r.a.createElement(d.a,null,"Team"),sortable:!1},{property:"playedGames",header:r.a.createElement(d.a,null,"G")},{property:"won",header:r.a.createElement(d.a,null,"W")},{property:"draw",header:r.a.createElement(d.a,null,"D")},{property:"lost",header:r.a.createElement(d.a,null,"L")},{property:"goalDifference",header:r.a.createElement(d.a,null,"GD")},{property:"points",header:r.a.createElement(d.a,null,"P")}],data:t})},M=a(129),A=function(e){return e&&e.map((function(e){var t=Object(h.a)(new Date(e.utcDate),"EEEE, d MMMM - H:mm");return{home:e.homeTeam.name,away:e.awayTeam.name,date:t}}))},I=function(e){return e.map((function(e){return e.name})).sort()},N=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(A(null)),l=Object(s.a)(o,2),u=l[0],i=l[1],p=Object(n.useState)(null),f=Object(s.a)(p,2),E=f[0],h=f[1],v=S("FIXTURE",x),b=v.data,j=v.loading,g=S("TEAMS",T),y=g.data,O=g.loading;return Object(n.useEffect)((function(){!j&&b&&i(A(b))}),[j,b]),Object(n.useEffect)((function(){u&&a&&i(function(e,t){return e.filter((function(e){var a=e.home,n=e.away;return a===t||n===t}))}(A(b),a))}),[a]),Object(n.useEffect)((function(){y&&h(I(y))}),[y]),!j&&u&&!O&&y&&E?r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{options:E,value:a,onChange:function(e){var t=e.option;return c(t)},onSearch:function(e){var t=e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&"),a=new RegExp(t,"i");h(I(y.teams).filter((function(e){return a.test(e)})))}}),r.a.createElement(m.a,{primaryKey:"index",columns:[{property:"home",header:r.a.createElement(d.a,null,"Home"),search:!0},{property:"away",header:r.a.createElement(d.a,null,"Away"),search:!0},{property:"date",header:r.a.createElement(d.a,null,"Date")}],data:u})):r.a.createElement("div",null,"Loading...")},F=function(){return r.a.createElement("div",null,"Home")},G=function(){return r.a.createElement("div",null,"Bettings")},R=function(){return r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"".concat("/leedscarajo","/home")},r.a.createElement(F,null)),r.a.createElement(i.a,{path:"".concat("/leedscarajo","/positions")},r.a.createElement(k,null)),r.a.createElement(i.a,{path:"".concat("/leedscarajo","/fixture")},r.a.createElement(N,null)),r.a.createElement(i.a,{path:"".concat("/leedscarajo","/bettings")},r.a.createElement(G,null)))},B=a(125),H=a(126),J=function(){return r.a.createElement(B.a,{pad:"medium"},r.a.createElement(H.a,{direction:"row"},r.a.createElement(l.b,{to:"".concat("/leedscarajo","/home")},"Home"),r.a.createElement(l.b,{to:"".concat("/leedscarajo","/positions")},"Positions"),r.a.createElement(l.b,{to:"".concat("/leedscarajo","/fixture")},"Fixture"),r.a.createElement(l.b,{to:"".concat("/leedscarajo","/bettings")},"Bettings")))},C=a(66),L=a(67),P=a(68),W=a(69),$=function(e){Object(W.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(L.a)(a,[{key:"componentDidCatch",value:function(e,t){console.log(e)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops!"):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(r.a.Component);var K=function(){return r.a.createElement($,null,r.a.createElement("div",{className:"App"},r.a.createElement(u.RecoilRoot,null,r.a.createElement(l.a,null,r.a.createElement(J,null),r.a.createElement(R,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,a){e.exports=a(111)},76:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.b808b66d.chunk.js.map