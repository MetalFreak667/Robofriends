(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t(3),i=t.n(r),c=t(2),s=t(6),a=t(14),l=(t(25),t(4)),h=t(5),u=t(8),d=t(7),b="CHANGE_SEARCHFIELD",f="REQUEST_ROBOTS_PENDING",j="REQUEST_ROBOTS_SUCCESS",g="REQUEST_ROBOTS_FAILED",p=function(){return function(e){var n;e({type:f}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then((function(e){return e.json()}))).then((function(n){return e({type:j,payload:n})})).catch((function(n){return e({type:g,payload:n})}))}},v=t(1),O=function(e){var n=e.name,t=e.email,o=e.id;return Object(v.jsxs)("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5",children:[Object(v.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:n}),Object(v.jsx)("p",{children:t})]})]})},w=function(e){var n=e.robots;return Object(v.jsx)("div",{children:n.map((function(e,t){return Object(v.jsx)(O,{id:n[t].id,name:n[t].name,email:n[t].email},t)}))})},m=function(e){e.searchfield;var n=e.searchChange;return Object(v.jsx)("div",{className:"pa2",children:Object(v.jsx)("input",{"aria-label":"search robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},y=function(e){return Object(v.jsx)("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"},children:e.children})},x=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).state={hasError:!1},o}return Object(h.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(v.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),t}(o.Component),R=(t(27),function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.robots,t=e.searchField,o=e.onSearchChange,r=e.isPending,i=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(v.jsxs)("div",{className:"tc",children:[Object(v.jsx)("h1",{className:"f1",children:"RoboFriends!"}),Object(v.jsx)(m,{searchChange:o}),Object(v.jsx)(y,{children:r?Object(v.jsx)("h1",{children:"Loading"}):Object(v.jsx)(x,{children:Object(v.jsx)(w,{robots:i})})})]})}}]),t}(o.Component)),E=Object(s.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}}),(function(e){return{onSearchChange:function(n){return e((t=n.target.value,{type:b,payload:t}));var t},onRequestRobots:function(){return e(p())}}}))(R),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var k={searchField:""},N={robots:[],isPending:!0},P=(t(28),Object(c.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case f:return Object.assign({},e,{isPending:!0});case j:return Object.assign({},e,{robots:n.payload,isPending:!1});case g:return Object.assign({},e,{error:n.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case b:return Object.assign({},e,{searchField:n.payload});default:return e}}})),A=Object(c.d)(P,Object(c.a)(a.a));i.a.render(Object(v.jsx)(s.a,{store:A,children:Object(v.jsx)(E,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Robofriends","/service-worker.js");C?(!function(e,n){fetch(e).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(n,e)}))}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.fa5227b2.chunk.js.map