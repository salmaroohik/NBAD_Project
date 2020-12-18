(this["webpackJsonpmern-auth-front"]=this["webpackJsonpmern-auth-front"]||[]).push([[0],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a(69),c=a.n(r),o=a(6),l=a.n(o),i=a(11),u=a(2),d=a(5),j=a(3),b=a(7),h=a.n(b),p=Object(s.createContext)(null);function O(){var e=Object(s.useContext)(p),t=e.userData,a=e.setUserData,r=Object(j.f)();return Object(n.jsx)("nav",{className:"auth-options",children:t.user?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("h1",{className:"welcome",children:["Welcome ",t.user.displayName]}),Object(n.jsx)("button",{onClick:function(){a({token:void 0,user:void 0}),localStorage.setItem("auth-token",""),r.push("/")},children:"Log out"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{onClick:function(){return r.push("/register")},children:"Register"}),Object(n.jsx)("button",{onClick:function(){return r.push("/login")},children:"Log in"})]})})}function x(){return Object(n.jsxs)("header",{id:"header",children:[Object(n.jsx)(d.b,{to:"/",children:Object(n.jsx)("h1",{className:"title",children:"Welcome to Personal Budget and Expenses Management Web Application"})}),Object(n.jsx)(O,{})]})}function g(){return Object(n.jsx)("div",{children:Object(n.jsxs)("header",{id:"sheader",children:[Object(n.jsx)(d.b,{class:"button",to:"/budget",children:"1) Add Personal Budget  "}),Object(n.jsx)(d.b,{class:"button",to:"/expense",children:"2) Add Personal Expense    "}),Object(n.jsx)(d.b,{class:"dashboard",to:"/",children:"3) View Dashboard"})]})})}var m=a(28),v=a.n(m),f=a(21);function y(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(),o=Object(u.a)(c,2),d=o[0],j=o[1],b=Object(s.useState)(),p=Object(u.a)(b,2),O=(p[0],p[1]),x=Object(s.useState)(),g=Object(u.a)(x,2),m=g[0],y=g[1],k=Object(s.useState)(),E=Object(u.a)(k,2),C=E[0],S=E[1],w=Object(s.useState)(),F=Object(u.a)(w,2),D=F[0],R=F[1],N={datasets:[{data:[],backgroundColor:["#736AFF","#0020C2","#38ACEC","#9b59b6","#7FFFD4","#728C00","#52D017"]}],labels:[]},B={datasets:[{data:[],backgroundColor:["#7D0541","#C5908E","#800517","#FCDFFF","#F778A1","#e74c3c","#E3319D"]}],labels:[]},A=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{a=function(){var e=document.getElementById("myChart").getContext("2d");new v.a(e,{type:"pie",data:N,options:{title:{display:!0,text:"Budgets"}}})},n=function(){var e=document.getElementById("myChartExp").getContext("2d");new v.a(e,{type:"pie",data:B,options:{title:{display:!0,text:"Expenses"}}})},s=localStorage.getItem("auth-token"),h.a.get("http://localhost:5500/budgets/all",{headers:{"x-auth-token":"".concat(s)}}).then((function(e){for(var t=[],n=[],s=0;s<e.data.length;s++)N.datasets[0].data[s]=e.data[s].budget,N.labels[s]=e.data[s].budgetName,t.push(e.data[s].budgetName),n.push(e.data[s].budget);S(n),y(t),console.log(N),e&&(r(!0),a())})).catch((function(e){e.response&&e.response.data.msg&&O(e.response.data.msg)})),h.a.get("http://localhost:5500/expenses/all",{headers:{"x-auth-token":"".concat(s)}}).then((function(e){for(var t=[],a=0;a<e.data.length;a++)t.push(e.data[a].expense),B.labels[a]=e.data[a].expenseName,B.datasets[0].data[a]=e.data[a].expense;R(t),console.log(B),e&&(j(!0),n())})).catch((function(e){e.response&&e.response.data.msg&&O(e.response.data.msg)}))}catch(c){c.response.data.msg&&O(c.response.data.msg)}case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("budget data: ",C),Object(n.jsxs)("div",{children:[Object(n.jsx)("form",{className:"form",onSubmit:A,children:Object(n.jsx)("input",{type:"submit",value:"Get Dashboard"})}),a?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("canvas",{id:"myChart"})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h2",{children:"   "})}),d?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("canvas",{id:"myChartExp"})}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("h2",{children:"Please click on Get Dashboard Button"})}),void 0===C?null:Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.Bar,{data:{labels:m,datasets:[{label:"Budgets",backgroundColor:"purple",hoverBackgroundColor:"rgba(255,99,132,0.4)",borderWidth:1,data:C}]},width:null,height:null,options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},title:"Personal Budget",redraw:!0}),Object(n.jsx)(f.Bar,{data:{labels:m,datasets:[{label:"Expenses",backgroundColor:"green",hoverBackgroundColor:"rgba(155,231,91,0.4)",borderWidth:1,data:D}]},width:null,height:null,options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},title:"Personal Budget",redraw:!0}),Object(n.jsx)(f.Line,{data:{labels:m,datasets:[{label:"Budgets",fill:!1,lineTension:0,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"purple",borderWidth:2,data:C}]},options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},title:"Personal Budget"}),Object(n.jsx)(f.Line,{data:{labels:m,datasets:[{label:"Expenses",fill:!1,lineTension:0,backgroundColor:"rgba(155,231,91,0.2)",borderColor:"green",borderWidth:2,data:D}]},options:{responsive:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},title:"Personal Budget"})]})]})}function k(){return Object(n.jsx)("div",{children:Object(n.jsx)(y,{})})}a(68);function E(){var e=Object(s.useContext)(p).userData,t=Object(j.f)();return Object(s.useEffect)((function(){e.user||t.push("/login")})),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"page",children:e.user?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{}),Object(n.jsx)(k,{})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"You are not logged in"}),Object(n.jsx)(d.b,{to:"/login",children:"Log in"})]})})})}function C(e){return Object(n.jsxs)("div",{className:"error-notice",children:[Object(n.jsx)("span",{children:e.message}),Object(n.jsx)("button",{onClick:e.clearError,children:"X"})]})}var S=a(20).SERVER_URL;function w(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(),o=Object(u.a)(c,2),d=o[0],b=o[1],O=Object(s.useState)(),x=Object(u.a)(O,2),g=x[0],m=x[1],v=Object(s.useContext)(p).setUserData,f=Object(j.f)(),y=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:d},e.next=5,h.a.post(S+"/users/login",n);case 5:s=e.sent,v({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),f.push("/"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),e.t0.response.data.msg&&m(e.t0.response.data.msg);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)("h2",{children:"Login"}),g&&Object(n.jsx)(C,{message:g,clearError:function(){return m(void 0)}}),Object(n.jsxs)("form",{className:"form",onSubmit:y,children:[Object(n.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(n.jsx)("input",{id:"login-email",type:"email",onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(n.jsx)("input",{id:"login-password",type:"password",onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"Log in"})]})]})}var F=a(20).SERVER_URL;function D(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(),o=Object(u.a)(c,2),d=o[0],b=o[1],O=Object(s.useState)(),x=Object(u.a)(O,2),g=x[0],m=x[1],v=Object(s.useState)(),f=Object(u.a)(v,2),y=f[0],k=f[1],E=Object(s.useState)(),S=Object(u.a)(E,2),w=S[0],D=S[1],R=Object(s.useContext)(p).setUserData,N=Object(j.f)(),B=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n={email:a,password:d,passwordCheck:g,displayName:y},e.next=5,h.a.post(F+"/users/register",n);case 5:return e.next=7,h.a.post(F+"/users/login",{email:a,password:d});case 7:s=e.sent,R({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),N.push("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0.response.data.msg&&D(e.t0.response.data.msg);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"page",children:[Object(n.jsx)("h2",{children:"Register"}),w&&Object(n.jsx)(C,{message:w,clearError:function(){return D(void 0)}}),Object(n.jsxs)("form",{className:"form",onSubmit:B,children:[Object(n.jsx)("label",{htmlFor:"register-email",children:"Email"}),Object(n.jsx)("input",{id:"register-email",type:"email",onChange:function(e){return r(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"register-password",children:"Password"}),Object(n.jsx)("input",{id:"register-password",type:"password",onChange:function(e){return b(e.target.value)}}),Object(n.jsx)("input",{type:"password",placeholder:"Verify your password",onChange:function(e){return m(e.target.value)}}),Object(n.jsx)("label",{htmlFor:"register-display-name",children:"Display name"}),Object(n.jsx)("input",{id:"register-display-name",type:"text",onChange:function(e){return k(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"Register"})]})]})}var R=a(20).SERVER_URL;function N(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(),o=Object(u.a)(c,2),b=o[0],O=o[1],x=Object(s.useState)(),m=Object(u.a)(x,2),v=m[0],f=m[1],y=Object(s.useContext)(p),k=y.userData,E=(y.setUserData,Object(j.f)());Object(s.useEffect)((function(){k.user||E.push("/login")}));var S=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=localStorage.getItem("auth-token"),s={budget:b,budgetName:a},console.log(n),console.log(s),e.next=8,h.a.post(R+"/budgets",s,{headers:{"x-auth-token":"".concat(n)}});case 8:200===e.sent.status&&(c=document.getElementById("title"),r(void 0),c.selectedIndex="none",o=document.getElementById("cost"),O(void 0),o.value="",alert("Budget added successfully")),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data.msg&&f(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"page",children:k.user?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{}),Object(n.jsx)("h1",{children:"choose budget from below categories "}),v&&Object(n.jsx)(C,{message:v,clearError:function(){return f(void 0)}}),Object(n.jsxs)("form",{id:"MyForm",className:"form",onSubmit:S,children:[Object(n.jsx)("label",{htmlFor:"title",children:"BudgetName"}),Object(n.jsxs)("select",{id:"title",onChange:function(e){return r(e.target.value)},children:[Object(n.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"choose budget"}),Object(n.jsx)("option",{value:"DukeEnergy",children:"DukeEnergy"}),Object(n.jsx)("option",{value:"Rent",children:"Rent"}),Object(n.jsx)("option",{value:"Pharmacy",children:"Pharmacy"}),Object(n.jsx)("option",{value:"Grocery",children:"Grocery"}),Object(n.jsx)("option",{value:"EatOut",children:"EatOut"}),Object(n.jsx)("option",{value:"Recreation",children:"Recreation"}),Object(n.jsx)("option",{value:"Miscellaneous",children:"Miscellaneous"})]}),Object(n.jsx)("label",{htmlFor:"cost",children:"budget"}),Object(n.jsx)("input",{id:"cost",type:"text",onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"Add Budget"})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"You are not logged in"}),Object(n.jsx)(d.b,{to:"/login",children:"Click here to Log in"})]})})})}var B=a(20).SERVER_URL;function A(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)(),o=Object(u.a)(c,2),b=o[0],O=o[1],x=Object(s.useState)(),m=Object(u.a)(x,2),v=m[0],f=m[1],y=Object(s.useContext)(p),k=y.userData,E=(y.setUserData,Object(j.f)());Object(s.useEffect)((function(){k.user||E.push("/login")}));var S=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=localStorage.getItem("auth-token"),s={expense:b,expenseName:a},e.next=6,h.a.post(B+"/expenses",s,{headers:{"x-auth-token":"".concat(n)}});case 6:200===e.sent.status&&(c=document.getElementById("title"),r(void 0),c.selectedIndex="none",o=document.getElementById("cost"),O(void 0),o.value="",alert("Expense added successfully")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),e.t0.response.data.msg&&f(e.t0.response.data.msg);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"page",children:k.user?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(g,{}),Object(n.jsx)("h1",{children:"Add Expense"}),v&&Object(n.jsx)(C,{message:v,clearError:function(){return f(void 0)}}),Object(n.jsxs)("form",{className:"form",onSubmit:S,children:[Object(n.jsx)("label",{htmlFor:"title",children:"ExpenseName"}),Object(n.jsxs)("select",{id:"title",onChange:function(e){return r(e.target.value)},children:[Object(n.jsx)("option",{value:"none",selected:!0,disabled:!0,hidden:!0,children:"choose expense"}),Object(n.jsx)("option",{value:"DukeEnergy",children:"DukeEnergy"}),Object(n.jsx)("option",{value:"Rent",children:"Rent"}),Object(n.jsx)("option",{value:"Pharmacy",children:"Pharmacy"}),Object(n.jsx)("option",{value:"Grocery",children:"Grocery"}),Object(n.jsx)("option",{value:"EatOut",children:"EatOut"}),Object(n.jsx)("option",{value:"Recreation",children:"Recreation"}),Object(n.jsx)("option",{value:"Miscellaneous",children:"Miscellaneous"})]}),Object(n.jsx)("label",{htmlFor:"cost",children:"Cost"}),Object(n.jsx)("input",{id:"cost",type:"text",onChange:function(e){return O(e.target.value)}}),Object(n.jsx)("input",{type:"submit",value:"Add Expense"})]})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h2",{children:"You are not logged in"}),Object(n.jsx)(d.b,{to:"/login",children:"Log in"})]})})})}var I=a(20).SERVER_URL;function L(){var e=Object(s.useState)({token:void 0,user:void 0}),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),e.next=4,h.a.post(I+"/users/tokenIsValid",null,{headers:{"x-auth-token":t}});case 4:if(!e.sent.data){e.next=10;break}return e.next=8,h.a.get(I+"/users/",{headers:{"x-auth-token":t}});case 8:a=e.sent,r({token:t,user:a.data});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(d.a,{children:Object(n.jsxs)(p.Provider,{value:{userData:a,setUserData:r},children:[Object(n.jsx)(x,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{exact:!0,path:"/",component:E}),Object(n.jsx)(j.a,{path:"/login",component:w}),Object(n.jsx)(j.a,{path:"/register",component:D}),Object(n.jsx)(j.a,{path:"/budget",component:N}),Object(n.jsx)(j.a,{path:"/expense",component:A})]})})]})})})}c.a.render(Object(n.jsx)(L,{}),document.querySelector("#app"))},20:function(e,t){t.SERVER_URL=""},68:function(e,t,a){}},[[190,1,2]]]);
//# sourceMappingURL=main.8c76173a.chunk.js.map