(this["webpackJsonpreact-order-app"]=this["webpackJsonpreact-order-app"]||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(0),r=a.n(i),c=a(10),s=a.n(c),o=(a(110),a(111),a(53)),l=a(14),d=a(76),j=a.n(d),x=a(83),b=a(17),p=a(65),u=a(11),h=a(70),g=a(166),m=r.a.createContext();function O(e){var t=e.children,a=function(){var e=Object(i.useState)({info:null,token:localStorage.getItem("token")||null,isLoggedIn:!!localStorage.getItem("token")}),t=Object(b.a)(e,2),a=t[0],n=t[1];return{user:a,signin:function(e,t){localStorage.setItem("token","test"),n({info:e.username,token:"test",isLoggedIn:!0}),setTimeout(t,1e3)},signout:function(e){n({info:null,token:null,isLoggedIn:!1}),localStorage.removeItem("token"),setTimeout(e,100)}}}();return Object(n.jsx)(m.Provider,{value:a,children:t})}function f(e){var t=e.children,a=Object(h.a)(e,["children"]),r=Object(i.useContext)(m);return Object(n.jsx)(l.b,Object(u.a)(Object(u.a)({},a),{},{render:function(e){var a=e.location;return r.user.isLoggedIn?t:Object(n.jsx)(l.a,{to:{pathname:"/login",state:{from:a}}})}}))}function v(e){var t=e.className,a=Object(l.g)(),r=Object(i.useContext)(m);return Object(n.jsx)("div",{className:t,children:r.user.isLoggedIn?Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"userName"}),Object(n.jsx)(g.a,{onClick:function(){r.signout((function(){return a.push("/login")}))},variant:"contained",color:"secondary",style:{textTransform:"initial"},children:"Sign Out"})]}):Object(n.jsx)("p",{children:"You are not logged in."})})}var y=a(169),N=a(4),S=a(172),w=a(198),C=a(197),I=a(171),L=a(170),k=a(84),P=a.n(k),F=a(85),R=a.n(F),W=Object(y.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}},loginWrapper:{width:"50%",height:"50%",margin:"10px auto"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"25ch"},formContainer:{display:"flex",flexDirection:"column",alignItems:"center",margin:"10px"}}}));function B(e,t){switch(t.type){case"field":return Object(u.a)(Object(u.a)({},e),{},Object(p.a)({},t.fieldName,t.payload));case"login":return Object(u.a)(Object(u.a)({},e),{},{error:"",isLoading:!0});case"success":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!0,isLoading:!1});case"error":return Object(u.a)(Object(u.a)({},e),{},{error:"Incorrect username or password!",isLoggedIn:!1,isLoading:!1,username:"",password:""});case"logOut":return Object(u.a)(Object(u.a)({},e),{},{isLoggedIn:!1});default:return e}}var A={username:"",password:"",isLoading:!1,error:"",isLoggedIn:!1};function z(){var e=W(),t=Object(l.g)(),a=Object(i.useContext)(m),r=Object(i.useReducer)(B,A),c=Object(b.a)(r,2),s=c[0],o=c[1],d=s.username,p=s.password,u=s.isLoading,h=s.error,O=Object(i.useState)(!1),f=Object(b.a)(O,2),v=f[0],y=f[1],k=function(){var e=Object(x.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o({type:"login"}),e.prev=2,e.next=5,a.signin({username:d,password:p},(function(){o({type:"success"}),t.push("/")}));case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),o({type:"error"});case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),F=function(e){return function(t){console.log("handleChange:",e),o({type:"field",fieldName:e,payload:t.currentTarget.value})}};return Object(n.jsx)("div",{className:e.loginWrapper,children:Object(n.jsxs)("div",{className:e.formContainer,children:[Object(n.jsx)("p",{children:"Login page "}),h&&Object(n.jsx)("p",{className:"error",children:h}),Object(n.jsxs)(L.a,{className:Object(N.a)(e.margin,e.textField),variant:"outlined",children:[Object(n.jsx)(C.a,{htmlFor:"outlined-adornment-username",children:"UserName"}),Object(n.jsx)(w.a,{id:"outlined-adornment-username",type:"text",value:d,onChange:F("username"),labelWidth:70})]}),Object(n.jsxs)(L.a,{className:Object(N.a)(e.margin,e.textField),variant:"outlined",children:[Object(n.jsx)(C.a,{htmlFor:"outlined-adornment-password",children:"Password"}),Object(n.jsx)(w.a,{id:"outlined-adornment-password",type:v?"text":"password",value:p,onChange:F("password"),endAdornment:Object(n.jsx)(I.a,{position:"end",children:Object(n.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:function(){return y(!v)},onMouseDown:function(e){return e.preventDefault()},edge:"end",children:v?Object(n.jsx)(P.a,{}):Object(n.jsx)(R.a,{})})}),labelWidth:70})]}),Object(n.jsx)(g.a,{onClick:k,style:{margin:"10px"},variant:"contained",color:"primary",disabled:u,children:u?"Logging in...":"Log In"})]})})}var D=a(79),T=a(178),M=a(179),U=a(180),G=a(182),J=a(181),E=a(199),H=a(177),Y=a(60),$=a(86),X=a.n($),q=a(87),K=a.n(q),V=a(173),Q=a(174),Z=a(176),_=a(175),ee=Object(y.a)({root:{maxWidth:180,width:"180px",height:"200px",margin:"5px",flex:"1 1 180px"}});var te=function(e){var t=e.className,a=e.itemInfo,i=e.onSelect,r=ee();return Object(n.jsx)(V.a,{className:Object(N.a)(r.root,t),onClick:function(){i(a)},children:Object(n.jsxs)(Q.a,{children:[Object(n.jsx)(_.a,{component:"img",alt:"Contemplative Reptile",height:"140",image:a.img,title:"Contemplative Reptile"}),Object(n.jsx)(Z.a,{children:Object(n.jsxs)(Y.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[a.name," $".concat(a.price)]})})]})})},ae=Object(y.a)({root:{display:"flex",justifyContent:"center",flexWrap:"wrap",height:"calc( 100vh - 68px )"}}),ne=Object(y.a)((function(e){return{orderLeftSide:{position:"relative",background:"#f7fbfd",boxShadow:"inset 0px 2px 4px -1px rgba(0,0,0,0.12),inset  0px 4px 5px 0px rgba(0,0,0,0.24),inset  0px 1px 10px 0px rgba(0,0,0,0.42)"},orderCount:{width:"30px",textAlign:"end"},orderPrice:{margin:" 0 10px",width:"50px",textAlign:"end"},totalPrice:{fontSize:"20px",position:"absolute",bottom:"10px",right:"10px",width:"180px"},orderRightSide:{boxShadow:"inset 0px 2px 4px -1px rgba(0,0,0,0.12), inset 0px 4px 5px 0px rgba(0,0,0,0.24)",height:"100%",background:"#2f3038",width:"100%",flexDirection:"column",display:"flex",position:"relative"},itemCardContainer:{boxSizing:"border-box",width:"100%",display:"flex",justifyContent:"flex-start",flexDirection:"row",flexWrap:"wrap",overflowY:"auto",padding:"5px 8px"},classifyTabs:{width:"100%",color:"#fff",backgroundColor:"#1976d2"},Pagination:{position:"absolute",bottom:"66px",left:"50%",transform:"translateX(-50%)","& li > button":{background:"#ffffff66"}},orderFooter:{width:"100%",height:"56px",position:"absolute",display:"flex",justifyContent:"flex-end",alignItems:"center",bottom:0,boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.42)"},SendOrderBtn:{marginRight:"10px",width:"100px",height:"36px",background:"radial-gradient(circle, rgba(171,130,9,0.9990371148459384) 5%, rgba(159,120,5,1) 34%, rgba(124,95,9,1) 68%, rgba(78,58,0,1) 100%)"},title:{fontWeight:"bold",color:"#031146",height:"40px",display:"flex",padding:"5px",alignItems:"center",background:"#a2a2a27a",boxShadow:"inset 0px 2px 4px -1px rgba(0,0,0,0.12), inset 0px 4px 5px 0px rgba(0,0,0,0.24), inset 0px 1px 10px 0px rgba(0,0,0,0.42)"},listInfo:{height:"36px",display:"flex",padding:"5px 10px",alignItems:"center",color:"#fff",fontSize:"18px",background:"linear-gradient(180deg, rgb(165 165 165 / 100%) 5%, rgb(134 134 134) 34%, rgb(101 101 101) 68%, rgb(86 86 86))",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.42)","& .thName":{marginLeft:"12px"},"& .thCount":{position:"absolute",right:"120px"},"& .thPrice":{position:"absolute",right:"63px"},"& .thSet":{position:"absolute",right:"17px"}},orderList:{maxHeight:"363px",overflowY:"auto","& li":{borderBottom:"1px solid #9e9e9e",margin:"0 8px"}}}})),ie=a.p+"static/media/item1.1f9e2be7.jpg",re=a.p+"static/media/item2.66d5f3e5.jpg",ce=a.p+"static/media/item3.e35f632b.jpg",se=[{name:"\u73cd\u73e0\u5976\u8336",id:"123534234",img:ie,price:50,type:"0"},{name:"\u62b9\u8336\u62ff\u9435",id:"564651351",img:re,price:60,type:"0"},{name:"\u56db\u5b63\u6625\u8336",id:"123123123123",img:ce,price:70,type:"0"},{name:"\u591a\u591a\u7da0\u8336",id:"12312312312322",img:ce,price:80,type:"0"},{name:"\u591a\u591a\u7da0\u8336",id:"123123123q12322",img:ce,price:80,type:"0"}];var oe=function(){var e=ae(),t=ne(),a=Object(i.useState)(!0),c=Object(b.a)(a,2),s=c[0],o=(c[1],Object(i.useState)(!0)),l=Object(b.a)(o,2),d=l[0],j=(l[1],Object(i.useState)([])),x=Object(b.a)(j,2),p=x[0],h=x[1],m=r.a.useState(0),O=Object(b.a)(m,2),f=(O[0],O[1],function(e){var t=p.find((function(t){return t.id===e.id}));h(void 0===t?[].concat(Object(D.a)(p),[Object(u.a)(Object(u.a)({},e),{},{count:1})]):p.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},e),{},{count:t.count+1}):t})))});return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)(H.a,{item:!0,xs:12,md:4,className:t.orderLeftSide,children:[Object(n.jsx)(Y.a,{variant:"h6",className:t.title,children:" \u8a02\u55ae\u7de8\u865f: xxxxxxxxxxxx "}),Object(n.jsxs)("div",{className:t.listInfo,children:[Object(n.jsx)("div",{className:"thName",children:"\u5546\u54c1\u540d\u7a31"}),Object(n.jsx)("div",{className:"thCount",children:"\u6578\u91cf"}),Object(n.jsx)("div",{className:"thPrice",children:"\u91d1\u984d"}),Object(n.jsx)("div",{className:"thSet",children:"\u64cd\u4f5c"})]}),0===p.length&&Object(n.jsx)("div",{style:{margin:"10px",color:"#ababab"},children:"\u8acb\u9ede\u64ca\u53f3\u65b9\u83dc\u55ae\u65b0\u589e\u54c1\u9805"}),Object(n.jsx)(T.a,{dense:s,className:t.orderList,children:p.map((function(e,a){return Object(n.jsxs)(M.a,{children:[Object(n.jsx)(U.a,{children:Object(n.jsx)(E.a,{children:Object(n.jsx)(X.a,{})})}),Object(n.jsx)(J.a,{primary:e.name,secondary:d?"Secondary text":null}),Object(n.jsx)("div",{className:t.orderCount,children:e.count}),Object(n.jsx)("div",{className:t.orderPrice,children:"$".concat(e.price*e.count)}),Object(n.jsx)(G.a,{children:Object(n.jsx)(S.a,{edge:"end","aria-label":"delete",onClick:function(){return t=e,void h(Object(D.a)(p).filter((function(e){return e.id!==t.id})));var t},children:Object(n.jsx)(K.a,{})})})]},a)}))}),Object(n.jsxs)("div",{className:t.totalPrice,children:["\u7e3d\u91d1\u984d: $",Object(n.jsx)("span",{style:{minWidth:"50px",display:"inline-block"},children:p.reduce((function(e,t){return t.price*t.count+e}),0)}),"\u5143"]})]}),Object(n.jsxs)(H.a,{item:!0,xs:12,md:8,className:t.orderRightSide,children:[Object(n.jsx)("div",{className:t.itemCardContainer,children:se.map((function(e,t){return Object(n.jsx)(te,{itemInfo:e,onSelect:f},t)}))}),Object(n.jsx)("div",{className:t.orderFooter,children:Object(n.jsx)(g.a,{className:t.SendOrderBtn,variant:"contained",color:"primary",children:"\u9001\u51fa\u8a02\u55ae"})})]})]})},le=a(93),de=a(184),je=a(188),xe=a(187),be=a(183),pe=a(185),ue=a(194),he=a(186),ge=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO\xa0Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"size",label:"Size\xa0(km\xb2)",minWidth:170,align:"right",format:function(e){return e.toLocaleString("en-US")}},{id:"density",label:"Density",minWidth:170,align:"right",format:function(e){return e.toFixed(2)}}];function me(e,t,a,n){return{name:e,code:t,population:a,size:n,density:a/n}}var Oe=[me("India","IN",1324171354,3287263),me("China","CN",1403500365,9596961),me("Italy","IT",60483973,301340),me("United States","US",327167434,9833520),me("Canada","CA",37602103,9984670),me("Australia","AU",25475400,7692024),me("Germany","DE",83019200,357578),me("Ireland","IE",4857e3,70273),me("Mexico","MX",126577691,1972550),me("Japan","JP",126317e3,377973),me("France","FR",67022e3,640679),me("United Kingdom","GB",67545757,242495),me("Russia","RU",146793744,17098246),me("Nigeria","NG",200962417,923768),me("Brazil","BR",210147125,8515767)],fe=Object(y.a)({root:{width:"100%"},container:{maxHeight:440}});function ve(){var e=fe(),t=r.a.useState(0),a=Object(b.a)(t,2),i=a[0],c=a[1],s=r.a.useState(10),o=Object(b.a)(s,2),l=o[0],d=o[1];return Object(n.jsxs)(le.a,{className:e.root,children:[Object(n.jsx)(be.a,{className:e.container,children:Object(n.jsxs)(de.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(n.jsx)(pe.a,{children:Object(n.jsx)(he.a,{children:ge.map((function(e){return Object(n.jsx)(xe.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(n.jsx)(je.a,{children:Oe.slice(i*l,i*l+l).map((function(e){return Object(n.jsx)(he.a,{hover:!0,role:"checkbox",tabIndex:-1,children:ge.map((function(t){var a=e[t.id];return Object(n.jsx)(xe.a,{align:t.align,children:t.format&&"number"===typeof a?t.format(a):a},t.id)}))},e.code)}))})]})}),Object(n.jsx)(ue.a,{rowsPerPageOptions:[10,25,100],component:"div",count:Oe.length,rowsPerPage:l,page:i,onChangePage:function(e,t){c(t)},onChangeRowsPerPage:function(e){d(+e.target.value),c(0)}})]})}var ye=a(196),Ne=a(190),Se=a(195),we=Object(y.a)({tabs:{background:"aliceblue",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.42)","& .Mui-selected":{background:"#caddef"}}});var Ce=function(){var e=ae(),t=we(),a=r.a.useState(0),i=Object(b.a)(a,2),c=i[0],s=i[1];return Object(n.jsxs)("div",{className:e.root,style:{justifyContent:"flex-start"},children:[Object(n.jsxs)(ye.a,{orientation:"vertical",variant:"scrollable",value:c,onChange:function(e,t){s(t)},"aria-label":"Vertical tabs example",className:t.tabs,children:[Object(n.jsx)(Ne.a,Object(u.a)({label:"\u54c1\u9805\u7ba1\u7406"},Ie(0))),Object(n.jsx)(Ne.a,Object(u.a)({label:"\u7528\u6236\u7ba1\u7406"},Ie(1))),Object(n.jsx)(Ne.a,Object(u.a)({label:"\u7d71\u8a08\u5716\u8868"},Ie(2)))]}),Object(n.jsxs)(Le,{value:c,index:0,children:["\u54c1\u9805\u7ba1\u7406",Object(n.jsx)(ve,{})]}),Object(n.jsx)(Le,{value:c,index:1,children:"\u7528\u6236\u7ba1\u7406"}),Object(n.jsx)(Le,{value:c,index:2,children:"\u7d71\u8a08\u5716\u8868"})]})};function Ie(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function Le(e){var t=e.children,a=e.value,i=e.index,r=Object(h.a)(e,["children","value","index"]);return Object(n.jsx)("div",Object(u.a)(Object(u.a)({role:"tabpanel",hidden:a!==i,id:"vertical-tabpanel-".concat(i),"aria-labelledby":"vertical-tab-".concat(i)},r),{},{children:a===i&&Object(n.jsx)(Se.a,{p:3,children:Object(n.jsx)(Y.a,{children:t})})}))}var ke=Object(y.a)((function(e){return{mealsLeftSide:{},mealsRightSide:{background:"#8099af",color:"#FFF"},prepareList:{"& .listItem span":{textAlign:"center",fontSize:"36px"}},alreadyList:{"& .listItem span":{textAlign:"center",fontSize:"36px"}}}}));var Pe=function(){var e=ae(),t=ke();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsxs)(H.a,{item:!0,xs:12,md:6,className:t.mealsLeftSide,children:[Object(n.jsx)("h1",{children:"\u6e96\u5099\u4e2dComing"}),Object(n.jsx)(T.a,{component:"nav",className:t.prepareList,"aria-label":"mailbox folders",children:["1221","2321","3422","1234","2343","3412"].map((function(e){return Object(n.jsx)(M.a,{button:!0,children:Object(n.jsx)(J.a,{primary:e,className:"listItem"})})}))})]}),Object(n.jsxs)(H.a,{item:!0,xs:12,md:6,className:t.mealsRightSide,children:[Object(n.jsx)("h1",{children:"\u8acb\u53d6\u9910Served"}),Object(n.jsx)(T.a,{component:"nav",className:t.alreadyList,"aria-label":"mailbox folders",children:["5163","2151","3452","2351","2156"].map((function(e){return Object(n.jsx)(M.a,{button:!0,children:Object(n.jsx)(J.a,{primary:e,className:"listItem"})})}))})]})]})},Fe=a(88),Re=a.n(Fe),We=a(90),Be=a.n(We),Ae=a(89),ze=a.n(Ae),De=[{label:"Order",icon:Object(n.jsx)(Re.a,{}),path:"/order"},{label:"Meals",icon:Object(n.jsx)(ze.a,{}),path:"/meals"},{label:"Manage",icon:Object(n.jsx)(Be.a,{}),path:"/manage"}],Te=a(192),Me=a(193),Ue=a(191),Ge=a(189),Je=a(91),Ee=a.n(Je),He=Object(y.a)((function(e){return{root:{flexGrow:1},navigationContainer:{height:"auto",background:"linear-gradient(to right, #172f5a, #102f69, #09284a)",display:"flex",justifyContent:"space-between","& .navigationLeft":{display:"flex",alignItems:"center"},"& .navigationRight":{display:"flex",alignItems:"center"}},navigation:{backgroundColor:"transparent","& .navigationItem":{color:"#ffffffba","&:hover":{color:"#fff"}},"& .Mui-selected":{color:"#fff"}},authBtn:{margin:"0 10px"},menuButton:{marginRight:e.spacing(2)},title:{}}})),Ye=De.map((function(e){return e.path}));function $e(){var e=He(),t=Object(l.g)(),a=Object(l.h)(),i=r.a.useState(function(e){var t=Ye.indexOf(e);return t>-1?t:0}(a.pathname)),c=Object(b.a)(i,2),s=c[0],o=c[1];return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(Ue.a,{position:"static",children:Object(n.jsxs)(Ge.a,{className:e.navigationContainer,children:[Object(n.jsxs)("span",{className:"navigationLeft",children:[Object(n.jsx)(S.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(n.jsx)(Ee.a,{})}),Object(n.jsx)(Y.a,{variant:"h6",className:e.title,children:"Order App"})]}),Object(n.jsxs)("span",{className:"navigationRight",children:[Object(n.jsx)(Te.a,{value:s,onChange:function(e,a){o(a),t.push(Ye[a])},showLabels:!1,className:e.navigation,children:De.map((function(e,t){return Object(n.jsx)(Me.a,{label:e.label,icon:e.icon,className:"navigationItem"},t)}))}),Object(n.jsx)(v,{className:e.authBtn})]})]})})})}function Xe(e){var t=e.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)($e,{}),t]})}var qe=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(O,{children:Object(n.jsx)(o.a,{basename:"/react-order-app",children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{path:"/login",children:Object(n.jsx)(z,{})}),Object(n.jsxs)(Xe,{children:[Object(n.jsx)(f,{exact:!0,path:"/",children:Object(n.jsx)(oe,{})}),Object(n.jsx)(f,{path:"/order",children:Object(n.jsx)(oe,{})}),Object(n.jsx)(f,{path:"/manage",children:Object(n.jsx)(Ce,{})}),Object(n.jsx)(f,{path:"/meals",children:Object(n.jsx)(Pe,{})})]})]})})})})},Ke=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,202)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(qe,{})}),document.getElementById("root")),Ke()}},[[119,1,2]]]);
//# sourceMappingURL=main.50f258d2.chunk.js.map