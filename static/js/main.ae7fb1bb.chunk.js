(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{44:function(t,e,n){},64:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContacts",(function(){return g})),n.d(c,"addContact",(function(){return v})),n.d(c,"deleteContact",(function(){return _}));var r={};n.r(r),n.d(r,"fetchContactRequest",(function(){return L})),n.d(r,"fetchContactSuccess",(function(){return y})),n.d(r,"fetchContactError",(function(){return N})),n.d(r,"addContactRequest",(function(){return E})),n.d(r,"addContactSuccess",(function(){return S})),n.d(r,"addContactError",(function(){return q})),n.d(r,"deleteContactRequest",(function(){return w})),n.d(r,"deleteContactSuccess",(function(){return k})),n.d(r,"deleteContactError",(function(){return R})),n.d(r,"filterContacts",(function(){return F})),n.d(r,"checkUniqName",(function(){return A}));var a={};n.r(a),n.d(a,"getContacts",(function(){return I})),n.d(a,"getFilter",(function(){return B})),n.d(a,"getFilteredContacts",(function(){return U})),n.d(a,"getIsLoading",(function(){return z})),n.d(a,"getError",(function(){return J}));var o=n(0),u=n(1),i=n.n(u),s=n(12),l=n.n(s),d=n(6),j=(n(44),n(7)),b=n.n(j);var f=function(t){var e=t.title,n=t.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:b.a.decor,children:[Object(o.jsx)("div",{className:b.a.leftDecor}),Object(o.jsx)("div",{className:b.a.rightDecor}),Object(o.jsx)("div",{className:b.a.circleDecor}),Object(o.jsxs)("div",{className:b.a.innerDecor,children:[Object(o.jsx)("h3",{className:b.a.titleDecor,children:e}),n]})]})})},O=n(21),h=n(20),C=n.n(h),p=n(32),m=n(11),x=n.n(m);x.a.defaults.baseURL="http://localhost:4040";var g=function(){return function(){var t=Object(p.a)(C.a.mark((function t(e){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(r.fetchContactRequest()),t.prev=1,t.next=4,x.a.get("/contacts");case 4:n=t.sent,e(r.fetchContactSuccess(n.data)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(r.fetchContactError(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},v=function(t,e){return function(n){var c={name:t,tel:e};n(r.addContactRequest()),x.a.post("/contacts",c).then((function(t){return n(r.addContactSuccess(t.data))})).catch((function(t){return n(r.addContactError(t))}))}},_=function(t){return function(e){e(r.deleteContactRequest(t)),x.a.delete("/contacts/".concat(t)).then((function(){return e(r.deleteContactSuccess(t))})).catch((function(t){return e(r.deleteContactError(t))}))}},D=n(2),L=Object(D.b)("contacts/fetchContactRequest"),y=Object(D.b)("contacts/fetchContactSuccess"),N=Object(D.b)("contacts/fetchContactError"),E=Object(D.b)("contacts/addContactRequest"),S=Object(D.b)("contacts/addContactSuccess"),q=Object(D.b)("contacts/addContactError"),w=Object(D.b)("contacts/deleteContactRequest"),k=Object(D.b)("contacts/deleteContactSuccess"),R=Object(D.b)("contacts/deleteContactError"),F=Object(D.b)("contacts/filter"),A=Object(D.b)("contacts/uniqName"),G=n(13),I=function(t){return t.contacts.items},B=function(t){return t.contacts.filter},U=Object(G.a)([I,B],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),z=function(t){return t.contacts.loading},J=function(t){return t.contacts.error};var M=function(){var t=Object(u.useState)(""),e=Object(O.a)(t,2),n=e[0],i=e[1],s=Object(u.useState)(""),l=Object(O.a)(s,2),j=l[0],b=l[1],f=Object(d.c)(a.getContacts),h=Object(d.b)(),C=function(){i(""),b("")};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),function(t){return f.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?(alert("".concat(t," is already in contacts")),C(),!1):t&&j?h(r.checkUniqName(t)):(alert("Empty field"),!1)}(n)){var e=function(t){var e=t.split("");return"+38 (".concat(e[0]).concat(e[1]).concat(e[2],") ").concat(e[3]).concat(e[4]).concat(e[5],"-").concat(e[6]).concat(e[7],"-").concat(e[8]).concat(e[9])}(j);!function(t,e){h(c.addContact(t,e))}(n,e),C()}},autoComplete:"off",children:[Object(o.jsx)("input",{type:"text",name:"name",value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",onChange:function(t){i(t.target.value)}}),Object(o.jsx)("input",{type:"tel",name:"tel",value:j,pattern:"[0-9]{10}",placeholder:"067 123 45 67",minLength:"10",maxLength:"10",onChange:function(t){b(t.target.value)}}),Object(o.jsx)("input",{type:"submit",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})})},Y=n(8),H=n.n(Y);var Q=function(){var t=Object(d.b)();Object(u.useEffect)((function(){return t(c.fetchContacts())}),[t]);var e=Object(d.c)(a.getFilteredContacts),n=Object(d.c)(a.getIsLoading),r=Object(d.c)(a.getError);return Object(o.jsxs)(o.Fragment,{children:[!n&&!r&&e.length<1&&Object(o.jsx)("p",{className:H.a.text,children:"\u041d\u0435\u0442 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(o.jsx)("ul",{className:H.a.contactsList,children:e.length>0&&e.map((function(e){var n=e.id,r=e.name,a=e.tel;return Object(o.jsxs)("li",{className:H.a.contact,children:[Object(o.jsx)("span",{className:H.a.name,children:r}),Object(o.jsx)("span",{className:H.a.phone,children:Object(o.jsx)("a",{href:"tel:+".concat(a.toString().replace(/[^\d;]/g,"")),children:a})}),Object(o.jsx)("button",{className:H.a.btnDeleteContact,type:"button",onClick:function(){return function(e){return t(c.deleteContact(e))}(n)},children:"x"})]},n)}))}),n&&Object(o.jsx)("h3",{children:" \u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 ..."}),r&&Object(o.jsx)("h3",{children:r.message})]})};var T=function(){var t=Object(d.c)(a.getFilter),e=Object(d.b)();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("input",{type:"text",name:"filter",value:t,placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043c\u0435\u043d\u0438 ...",onChange:function(t){return e(r.filterContacts(t.target.value))},autoComplete:"off"})})};var V,X,Z,K=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{title:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430",children:Object(o.jsx)(M,{})}),Object(o.jsxs)(f,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432",children:[Object(o.jsx)(T,{}),Object(o.jsx)(Q,{})]})]})},P=n(15),W=n(3),$=n(4),tt=Object(D.c)([],(V={},Object(W.a)(V,y,(function(t,e){return e.payload})),Object(W.a)(V,S,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(W.a)(V,k,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(W.a)(V,A,(function(t){return t})),V)),et=Object(D.c)("",Object(W.a)({},F,(function(t,e){return e.payload}))),nt=Object(D.c)(!1,(X={},Object(W.a)(X,L,(function(){return!0})),Object(W.a)(X,y,(function(){return!1})),Object(W.a)(X,N,(function(){return!1})),Object(W.a)(X,E,(function(){return!0})),Object(W.a)(X,S,(function(){return!1})),Object(W.a)(X,q,(function(){return!1})),Object(W.a)(X,k,(function(){return!1})),Object(W.a)(X,R,(function(){return!1})),X)),ct=Object(D.c)(null,(Z={},Object(W.a)(Z,L,(function(){return null})),Object(W.a)(Z,N,(function(t,e){return e.payload})),Object(W.a)(Z,E,(function(){return null})),Object(W.a)(Z,q,(function(t,e){return e.payload})),Object(W.a)(Z,w,(function(){return null})),Object(W.a)(Z,R,(function(t,e){return e.payload})),Z)),rt=Object($.c)({items:tt,filter:et,loading:nt,error:ct}),at=n(33),ot=n.n(at),ut=n(9),it=[].concat(Object(P.a)(Object(D.d)({serializableCheck:{ignoredActions:[ut.a,ut.f,ut.b,ut.c,ut.d,ut.e]}})),[ot.a]),st=Object(D.a)({reducer:{contacts:rt},devTools:!1,middleware:it});l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d.a,{store:st,children:Object(o.jsx)(K,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={decor:"DecorContainer_decor__1hecY",leftDecor:"DecorContainer_leftDecor__2-VAG",rightDecor:"DecorContainer_rightDecor__2yBpA",circleDecor:"DecorContainer_circleDecor__2AbIu",innerDecor:"DecorContainer_innerDecor__10GZ3",titleDecor:"DecorContainer_titleDecor__qzn6f"}},8:function(t,e,n){t.exports={text:"ContactsList_text__3MnhQ",contactsList:"ContactsList_contactsList__3gB0G",contact:"ContactsList_contact__2xG2b",name:"ContactsList_name__21X0A",phone:"ContactsList_phone__391YH",btnDeleteContact:"ContactsList_btnDeleteContact__18dul"}}},[[64,1,2]]]);
//# sourceMappingURL=main.ae7fb1bb.chunk.js.map