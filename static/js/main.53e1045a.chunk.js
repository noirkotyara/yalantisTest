(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{46:function(e,t,n){},47:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(0),c=n.n(r),a=n(13),i=n.n(a),o=(n(46),n(47),n(16)),u=n(3),l=n(17),m=n(23),d=n.n(m),p=n(36),h=n(18),j=n(37),f=function(){return j.get("https://yalantis-react-school-api.yalantis.com/api/task0/users")},b="ADD-ITEMS",O="SET-USERS",y=["January","February","March","April","May","June","July","August","September","October","November","December"],v={items:[],months:y.map((function(e){return{name:e,id:[]}}))},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(h.a)(Object(h.a)({},e),{},{items:t.items});case O:0===t.users.length&&(e.months=y.map((function(e){return{name:e,id:[]}})));for(var n=function(n){var s=e.items.filter((function(e){return e.id===t.users[n]})),r=new Date(s[0].dob);e.months[r.getMonth()+1].id.push(s[0])},s=0;s<t.users.length;s++)n(s);return Object(h.a)({},e);default:return e}},g=n(39),N=n(40),E=n(9),_=n.n(E),S=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],k=c.a.memo((function(e){var t,n=Object(r.useState)([]),c=Object(N.a)(n,2),a=c[0],i=c[1];Object(r.useEffect)((function(){e.addItems()}),[e.items.length]);return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("items"));e&&i(e)}),[]),Object(r.useEffect)((function(){localStorage.setItem("items",JSON.stringify(a))}),[a]),Object(r.useEffect)((function(){0!=e.items.length&&(e.setUsers([]),e.setUsers(a))}),[a,e.items.length]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:_.a.employees,children:["Employees",Object(s.jsx)("div",{children:S.map((function(n,r,c){return Object(s.jsxs)("div",{className:_.a.letter,id:"alphabet",children:[Object(s.jsx)("span",{children:n+" "}),e.items.filter((function(e){return t=!1,e.lastName.charAt(0)===n})).sort((function(e,t){var n=e.lastName.toUpperCase(),s=t.lastName.toUpperCase();return n<s?-1:n>s?1:0})).map((function(e,n){return t=!0,Object(s.jsxs)("div",{className:_.a.forDiv,children:[Object(s.jsx)("span",{className:_.a.name,children:e.lastName+e.firstName}),Object(s.jsx)("input",{className:_.a.input,id:e.id,checked:-1!=a.indexOf(e.id),type:"checkbox",onChange:function(t){return function(e,t){t.currentTarget.checked?i([].concat(Object(g.a)(a),[e])):i(a.filter((function(t){return t!==e})))}(e.id,t)}})]},n)})),Object(s.jsx)("div",{children:!t&&Object(s.jsx)("div",{children:"---------"})})]},r.toString())}))})]}),Object(s.jsxs)("div",{className:_.a.empBirthday,children:["Employees Birthdays",0===a.length?Object(s.jsx)("div",{children:Object(s.jsx)("h3",{children:"No selected employees"})}):e.months.map((function(e){return 0!=e.id.length&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:e.name}),e.id.map((function(e){return Object(s.jsx)("div",{children:e.lastName+"  "+e.firstName})}))]})}))]})]})})),D=Object(l.b)((function(e){return{items:e.employees.items,months:e.employees.months}}),{addItems:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:n=e.sent,t((s=n.data,{type:b,items:s}));case 4:case"end":return e.stop()}var s}),e)})));return function(t){return e.apply(this,arguments)}}()},setUsers:function(e){return{type:O,users:e}}})(k);var C=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(o.b,{to:"/employees",className:"navLink",activeClassName:"activeNavLink",children:"EMPLOYEES"})}),Object(s.jsx)("div",{className:"content",children:Object(s.jsx)(u.a,{path:"/employees",render:function(){return Object(s.jsx)(D,{})}})})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),c(e),a(e)}))},J=n(38),U=n(21),w=U.createStore,B=U.applyMiddleware,F=U.combineReducers,M=(U.compose,w(F({employees:x}),B(J.a)));i.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(l.a,{store:M,children:Object(s.jsx)(C,{})})}),document.getElementById("root")),I()},9:function(e,t,n){e.exports={empBirthday:"Employees_empBirthday__2NDgo",employees:"Employees_employees__-oUkz",letter:"Employees_letter__3h8pk",forDiv:"Employees_forDiv__oPiQy",name:"Employees_name__1YNdf",input:"Employees_input__3Then"}}},[[71,1,2]]]);
//# sourceMappingURL=main.53e1045a.chunk.js.map