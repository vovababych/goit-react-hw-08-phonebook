(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{24:function(e,t,n){e.exports={link:"Navigation_link__3O1Uj",active:"Navigation_active__3m0Ji"}},25:function(e,t,n){e.exports={container:"UserMenu_container__2wV-z",avatar:"UserMenu_avatar___VHIv",name:"UserMenu_name__9WWA4",exit:"UserMenu_exit__BZlYK"}},26:function(e,t,n){e.exports={link:"AuthNav_link__1n0UE",activeLink:"AuthNav_activeLink__2RqhB"}},35:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var c=n(3),r=(Object(c.b)("contacts/fetchContactRequest"),Object(c.b)("contacts/fetchContactSuccess"),Object(c.b)("contacts/fetchContactError"),Object(c.b)("contacts/addContactRequest"),Object(c.b)("contacts/addContactSuccess"),Object(c.b)("contacts/addContactError"),Object(c.b)("contacts/deleteContactRequest"),Object(c.b)("contacts/deleteContactSuccess"),Object(c.b)("contacts/deleteContactError"),Object(c.b)("contacts/filter")),a=Object(c.b)("contacts/uniqName")},40:function(e,t,n){"use strict";var c,r,a,u=n(2),o=n(30),s=n(9),i=n(3),l=n(35),d=n(6),b=Object(i.d)([],(c={},Object(u.a)(c,d.d.fulfilled,(function(e,t){return t.payload})),Object(u.a)(c,d.a.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(o.a)(e),[n])})),Object(u.a)(c,d.c.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(u.a)(c,l.a,(function(e){return e})),c)),j=Object(i.d)("",Object(u.a)({},l.b,(function(e,t){return t.payload}))),f=Object(i.d)(!1,(r={},Object(u.a)(r,d.d.pending,(function(){return!0})),Object(u.a)(r,d.d.fulfilled,(function(){return!1})),Object(u.a)(r,d.d.rejected,(function(){return!1})),Object(u.a)(r,d.a.pending,(function(){return!0})),Object(u.a)(r,d.a.fulfilled,(function(){return!1})),Object(u.a)(r,d.a.rejected,(function(){return!1})),Object(u.a)(r,d.c.fulfilled,(function(){return!1})),Object(u.a)(r,d.c.rejected,(function(){return!1})),r)),O=Object(i.d)(null,(a={},Object(u.a)(a,d.d.pending,(function(){return null})),Object(u.a)(a,d.d.rejected,(function(e,t){return t.payload})),Object(u.a)(a,d.d.rejected,(function(e,t){return t.payload})),Object(u.a)(a,d.a.pending,(function(){return null})),Object(u.a)(a,d.a.rejected,(function(e,t){return t.payload})),Object(u.a)(a,d.c.pending,(function(){return null})),Object(u.a)(a,d.c.rejected,(function(e,t){return t.payload})),a));t.a=Object(s.c)({items:b,filter:j,loading:f,error:O})},51:function(e,t,n){e.exports={header:"AppBar_header__20V_-"}},6:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d}));var c=n(10),r=n.n(c),a=n(18),u=n(15),o=n.n(u),s=n(3);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i=Object(s.c)("contacts/fetchContacts",Object(a.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("/contacts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),l=Object(s.c)("contacts/addContact",function(){var e=Object(a.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("/contacts",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(s.c)("contacts/deleteContact",function(){var e=Object(a.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b={fetchContacts:i,addContact:l,deleteContact:d};t.b=b},63:function(e,t,n){},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return p}));var c=n(10),r=n.n(c),a=n(18),u=n(15),o=n.n(u),s=n(3);o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var i,l=function(e){o.a.defaults.headers.common.Authorization="Bearer ".concat(e)},d=function(){o.a.defaults.headers.common.Authorization=""},b=Object(s.c)("auth/register",function(){var e=Object(a.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/signup",t);case 3:return n=e.sent,c=n.data,l(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),j=Object(s.c)("auth/login",function(){var e=Object(a.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/login",t);case 3:return n=e.sent,c=n.data,l(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),f={register:b,logOut:Object(s.c)("auth/logout",Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/users/logout");case 3:d(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),logIn:j,fetchCurrentUser:Object(s.c)("auth/refresh",function(){var e=Object(a.a)(r.a.mark((function e(t,n){var c,a,u,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.getState(),null!==(a=c.auth.token)){e.next=5;break}return console.log("\u0422\u043e\u043a\u0435\u043d\u0430 \u043d\u0435\u0442, \u0443\u0445\u043e\u0434\u0438\u043c \u0438\u0437 fetchCurrentUser"),e.abrupt("return",n.rejectWithValue());case 5:return l(a),e.prev=6,e.next=9,o.a.get("/users/current");case 9:return u=e.sent,s=u.data,e.abrupt("return",s);case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}())},O={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name},getIsFetchingCurrentUser:function(e){return e.auth.isFetchingCurrentUser},getAuthError:function(e){return e.auth.error}},h=n(2),p=Object(s.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1,error:null},extraReducers:(i={},Object(h.a)(i,f.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(h.a)(i,f.register.rejected,(function(e,t){e.error=t.payload.error})),Object(h.a)(i,f.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(h.a)(i,f.logIn.rejected,(function(e,t){e.error=t.payload.error})),Object(h.a)(i,f.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(h.a)(i,f.fetchCurrentUser.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(h.a)(i,f.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(h.a)(i,f.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),i)}).reducer},86:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),u=n(27),o=n.n(u),s=n(7),i=n(17),l=n(50),d=(n(63),n(5)),b=n(8),j=n(24),f=n.n(j),O=function(){var e=Object(s.c)(b.c.getIsLoggedIn);return Object(c.jsxs)("nav",{children:[Object(c.jsx)(i.b,{to:"/",exact:!0,className:f.a.link,activeClassName:f.a.active,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(c.jsx)(i.b,{to:"/contacts",className:f.a.link,activeClassName:f.a.active,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]})},h=n.p+"static/media/default-avatar.e44fc4e2.png",p=n(25),g=n.n(p);function v(){var e=Object(s.b)(),t=Object(s.c)(b.c.getUsername),n=h;return Object(c.jsxs)("div",{className:g.a.container,children:[Object(c.jsx)("img",{src:n,alt:"",width:"32",className:g.a.avatar}),Object(c.jsxs)("span",{className:g.a.name,children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",t]}),Object(c.jsx)("button",{className:g.a.exit,type:"button",onClick:function(){return e(b.a.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var x=n(26),m=n.n(x);function k(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(i.b,{to:"/register",exact:!0,className:m.a.link,activeClassName:m.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(c.jsx)(i.b,{to:"/login",exact:!0,className:m.a.link,activeClassName:m.a.activeLink,children:"\u041b\u043e\u0433\u0438\u043d"})]})}var C=n(51),_=n.n(C);function y(){var e=Object(s.c)(b.c.getIsLoggedIn);return Object(c.jsxs)("header",{className:_.a.header,children:[Object(c.jsx)(O,{}),e?Object(c.jsx)(v,{}):Object(c.jsx)(k,{})]})}var U=n(21),I=n(31);function w(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,a=Object(I.a)(e,["children","redirectTo"]),u=Object(s.c)(b.c.getIsLoggedIn);return Object(c.jsx)(d.b,Object(U.a)(Object(U.a)({},a),{},{children:u?t:Object(c.jsx)(d.a,{to:r})}))}function N(e){var t=e.children,n=e.redirectTo,r=void 0===n?"/":n,a=e.restricted,u=void 0!==a&&a,o=Object(I.a)(e,["children","redirectTo","restricted"]),i=Object(s.c)(b.c.getIsLoggedIn)&&u;return Object(c.jsx)(d.b,Object(U.a)(Object(U.a)({},o),{},{children:i?Object(c.jsx)(d.a,{to:r}):t}))}var L=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,91))})),z=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,93))})),A=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,94))})),F=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,92))}));var T=function(){var e=Object(s.b)(),t=Object(s.c)(b.c.getUsername),n=Object(s.c)(b.c.getIsFetchingCurrentUser);return Object(r.useEffect)((function(){e(b.a.fetchCurrentUser())}),[e]),!n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{}),Object(c.jsx)(d.d,{children:Object(c.jsxs)(r.Suspense,{fallback:Object(c.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),children:[Object(c.jsx)(N,{exact:!0,path:"/",children:Object(c.jsx)(L,{name:t||"\u043d\u0435\u0437\u043d\u0430\u043a\u043e\u043c\u0435\u0446"})}),Object(c.jsx)(N,{path:"/register",redirectTo:"/contacts",restricted:!0,children:Object(c.jsx)(z,{})}),Object(c.jsx)(N,{path:"/login",redirectTo:"/contacts",restricted:!0,children:Object(c.jsx)(A,{})}),Object(c.jsx)(w,{path:"/contacts",redirectTo:"/",children:Object(c.jsx)(F,{})})]})})]})},E=n(30),R=n(3),S=n(52),q=n.n(S),B=n(19),M=n(53),V=n.n(M),J=n(40),W=[].concat(Object(E.a)(Object(R.f)({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}})),[q.a]),H={key:"auth",storage:V.a,blacklist:["_persist"],whitelist:["token"]},K=Object(R.a)({reducer:{contacts:J.a,auth:Object(B.g)(H,b.b)},devTools:!1,middleware:W}),Y=Object(B.h)(K);o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(s.a,{store:K,children:Object(c.jsx)(l.a,{loading:null,persistor:Y,children:Object(c.jsx)(i.a,{children:Object(c.jsx)(T,{})})})})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.923d632b.chunk.js.map