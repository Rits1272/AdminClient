(this.webpackJsonpwebclient=this.webpackJsonpwebclient||[]).push([[0],{262:function(e,t){},264:function(e,t){},274:function(e,t){},276:function(e,t){},303:function(e,t){},304:function(e,t){},309:function(e,t){},311:function(e,t){},318:function(e,t){},337:function(e,t){},355:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(17),r=a.n(c),s=a(13),o=a(410),l=a(399),d=a(430),j=a(403),u=a(411),b=a(427),h=a(79),m=a(397),g=a(404),p=a(19),O=a(49),x=a(98),f=a(5),v=a(401),y=a(402),w=a(3),S=Object(m.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",width:"100%"},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),height:"100%"},drawerPaperClose:Object(O.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.up("sm"),{width:"0px"}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100%",overflow:"auto"}}}));function C(){var e=S();return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(l.a,{}),"open",Object(w.jsx)(v.a,{position:"absolute",className:Object(f.a)(e.appBar),children:Object(w.jsx)(y.a,{className:e.toolbar,children:Object(w.jsx)(h.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Documentive"})})})]})}var N=a.p+"static/media/CharacterTwo.a3ef5572.png",D=a(429),E=a(115);a(249),a(90);E.a.apps.length||E.a.initializeApp({apiKey:"AIzaSyDQqFbrbonDDrRIQyOTbWFErt5ozAvVDJw",authDomain:"hirmi-393b4.firebaseapp.com",databaseURL:"https://hirmi-393b4-default-rtdb.firebaseio.com",projectId:"hirmi-393b4",storageBucket:"hirmi-393b4.appspot.com",messagingSenderId:"803621817497",appId:"1:803621817497:web:391de0f53bcc0b2699bc08",measurementId:"G-6E1PY0G76T"});var W=E.a;function k(){return Object(w.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(j.a,{color:"inherit",href:"https://material-ui.com/",children:"Documentive"})," ",(new Date).getFullYear(),"."]})}var T=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),padding:7,fontSize:17},errorMsg:{color:"red",fontSize:"14px",marginTop:"20px"}}}));function I(){var e=T(),t=Object(n.useState)(),a=Object(s.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(),m=Object(s.a)(r,2),O=m[0],x=m[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),y=v[0],S=v[1],E=Object(p.f)();Object(n.useEffect)((function(){W.auth().onAuthStateChanged((function(e){e&&E.push("/")}))}),[]);var I=function(e,t){e.preventDefault(),"email"===t?c(e.target.value):"password"===t&&x(e.target.value)};return""!==y&&setTimeout((function(){return S("")}),5e3),Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(C,{}),Object(w.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(l.a,{}),Object(w.jsxs)("div",{className:e.paper,children:[Object(w.jsx)("img",{src:N}),Object(w.jsx)(h.a,{component:"h1",variant:"h5",children:"Sign in"}),""!==y&&Object(w.jsx)(D.a,{severity:"error",children:y}),Object(w.jsxs)("form",{className:e.form,children:[Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return I(e,"email")}}),Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return I(e,"password")}}),Object(w.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,onClick:function(e){return function(e){e.preventDefault();try{W.auth().signInWithEmailAndPassword(i,O).then((function(e){E.push("/")}))}catch(t){S("Either email or password is incorrect!"),console.log("Error loggin in user",t)}}(e)},children:"Sign In"}),Object(w.jsx)(u.a,{container:!0,children:Object(w.jsx)(u.a,{item:!0,children:Object(w.jsx)(j.a,{href:"/reset",variant:"body2",color:"secondary",onClick:function(e){return function(e){console.log("PUSHED"),e.preventDefault(),E.push("/reset")}(e)},children:"Reset Password?"})})})]})]}),Object(w.jsx)(b.a,{mt:8,children:Object(w.jsx)(k,{})})]})]})}var A=a.p+"static/media/characterFive.f1970cd8.png";function z(){return Object(w.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(j.a,{color:"inherit",href:"https://material-ui.com/",children:"Hirmi Project"})," ",(new Date).getFullYear(),"."]})}var P=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),padding:7,fontSize:17},Msg:{color:"#ff0000",fontSize:"14px",marginTop:"20px"}}}));function B(){var e=P(),t=Object(n.useState)(),a=Object(s.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(),m=Object(s.a)(r,2),O=m[0],x=m[1],f=Object(p.f)();return Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(C,{}),Object(w.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(w.jsx)(l.a,{}),Object(w.jsxs)("div",{className:e.paper,children:[Object(w.jsx)("img",{src:A}),Object(w.jsx)(h.a,{component:"h1",variant:"h5",children:"Reset Password"}),Object(w.jsx)(h.a,{component:"h1",variant:"h6",className:e.Msg,children:O}),Object(w.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return function(e,t){e.preventDefault(),"email"===t&&c(e.target.value)}(e,"email")}}),Object(w.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,onClick:function(e){return function(e){if(e.preventDefault(),function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(i))try{W.auth().sendPasswordResetEmail(i),x("Password link sent to email successfully!"),c("")}catch(t){x("Please enter valid email address")}else x("Please enter valid email address!")}(e)},children:"Reset"}),Object(w.jsx)(u.a,{container:!0,children:Object(w.jsx)(u.a,{item:!0,children:Object(w.jsx)(j.a,{href:"#",variant:"body2",onClick:function(e){return function(e,t){e.preventDefault();var a="/"+t;f.push(a)}(e,"login")},color:"secondary",children:"Login?"})})})]})]}),Object(w.jsx)(b.a,{mt:8,children:Object(w.jsx)(z,{})})]})]})}var R=a(414),q=a(418),F=a(417),M=a(413),J=a(415),L=a(416),G=a(150),Q=a(434),_=a(409),Y=a(412),H=a(405),V=a(214),Z=a.n(V),U=a(215),X=a.n(U),$=Object(m.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",width:"100%"},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:10},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),height:"100%"},drawerPaperClose:Object(O.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.up("sm"),{width:"0px"}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100%",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},listItem:{padding:20,fontSize:16,cursor:"pointer"}}}));function K(){var e=$(),t=i.a.useState(!0),a=Object(s.a)(t,2),c=a[0],r=a[1],o=i.a.useState(),d=Object(s.a)(o,2),j=d[0],u=d[1],b=Object(p.f)(),m=function(e){var t="/"+e;b.push(t)};return Object(n.useEffect)((function(){W.auth().onAuthStateChanged((function(e){u(e)}))}),[]),Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(l.a,{}),Object(w.jsx)(v.a,{position:"absolute",className:Object(f.a)(e.appBar,c&&e.appBarShift),children:Object(w.jsxs)(y.a,{className:e.toolbar,children:[j&&Object(w.jsx)(H.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},className:Object(f.a)(e.menuButton,c&&e.menuButtonHidden),children:Object(w.jsx)(Z.a,{})}),Object(w.jsx)(h.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title,children:"Documentive"}),Object(w.jsx)(H.a,{color:"inherit",children:j?Object(w.jsx)(h.a,{component:"h1",variant:"h6",color:"inherit",onClick:function(e){return function(e){e.preventDefault(),W.auth().signOut(),b.push("/login")}(e)},children:"Logout"}):Object(w.jsx)(h.a,{component:"h1",variant:"h6",color:"inherit",children:"Login"})})]})}),Object(w.jsxs)(Q.a,{variant:"permanent",classes:{paper:Object(f.a)(e.drawerPaper,!c&&e.drawerPaperClose)},open:c,children:[Object(w.jsx)("div",{className:e.toolbarIcon,children:Object(w.jsx)(H.a,{onClick:function(){r(!1)},children:Object(w.jsx)(X.a,{})})}),Object(w.jsx)(Y.a,{}),Object(w.jsx)(_.a,{className:e.listItem,onClick:function(){return m("home")},children:"Today"}),Object(w.jsx)(Y.a,{}),Object(w.jsx)(_.a,{className:e.listItem,onClick:function(){return m("register")},children:"Add New Role"}),Object(w.jsx)(Y.a,{}),Object(w.jsx)(_.a,{className:e.listItem,onClick:function(){return m("AddDrawing")},children:"Add Drawings"}),Object(w.jsx)(Y.a,{}),Object(w.jsx)(_.a,{className:e.listItem,onClick:function(){return m("report")},children:"Monthly Report"}),Object(w.jsx)(Y.a,{}),Object(w.jsx)(_.a,{className:e.listItem,onClick:function(){return m("employees")},children:"Employees"}),Object(w.jsx)(Y.a,{})]})]})}var ee=a(432),te=a(110),ae=a.n(te),ne=a(111),ie=a.n(ne),ce=a(112),re=a.n(ce),se=a(107),oe=a.n(se),le=a(105),de=a.n(le),je=a(106),ue=a.n(je),be=a(109),he=a.n(be),me=a(108),ge=a.n(me),pe=a.p+"static/media/landscape.81bf7a19.png",Oe=Object(m.a)({table:{minWidth:650},data:{fontSize:17},heading:{fontSize:18,fontWeight:"bold",color:"#ffffff"},iconStyle:{verticalAlign:"middle",display:"inline-flex",marginRight:8}});function xe(){var e=Oe(),t=Object(n.useState)([]),a=Object(s.a)(t,2),i=a[0],c=a[1];return Object(n.useEffect)((function(){!function(){var e=W.database().ref().child("item"),t=new Date,a=t.getDate(),n=t.toLocaleString("default",{month:"short"}),i=t.getFullYear(),r="".concat(a,"-").concat(n,"-").concat(i);console.log(r);var s=[];e.on("value",(function(e){var t=e.val();Object.keys(t).map((function(e){var a=t[e];if(a.date===r){var n={date:a.date,inspector:a.inspector_name,drawing:a.drawing_no,quantity:a.quantity,status:a.status};s.push(n)}})),c(s)}))}()}),[]),Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(K,{}),0===i.length?Object(w.jsxs)("div",{style:{width:"100%",textAlign:"center",marginTop:100},children:[Object(w.jsx)("img",{src:pe}),Object(w.jsx)(h.a,{color:"secondary",children:"Oopsie! No record found"})]}):Object(w.jsx)(M.a,{component:G.a,style:{margin:10,marginTop:80,elevation:3},maxWidth:"xl",children:Object(w.jsxs)(R.a,{className:e.table,"aria-label":"simple table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(L.a,{style:{backgroundColor:"#FE6B8B"},children:[Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(de.a,{className:e.iconStyle}),"Date"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(ue.a,{className:e.iconStyle}),"Drawing Number"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(oe.a,{className:e.iconStyle}),"Inspector"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(ge.a,{className:e.iconStyle}),"Quantity"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(he.a,{className:e.iconStyle}),"Status"]})]})}),Object(w.jsx)(q.a,{children:i.map((function(t){return Object(w.jsxs)(L.a,{children:[Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.date}),Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.drawing}),Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.inspector}),Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.quantity}),"ACCEPTED"===t.status&&Object(w.jsxs)(F.a,{align:"right",style:{color:"green",fontWeight:"bold",fontSize:16},children:["   ",Object(w.jsx)(ee.a,{icon:Object(w.jsx)(ae.a,{style:{color:"white"}}),label:"ACCEPTED",style:{backgroundColor:"#32CD32",color:"white"}})]}),"REJECTED"===t.status&&Object(w.jsxs)(F.a,{align:"right",style:{color:"green",fontWeight:"bold",fontSize:16},children:["   ",Object(w.jsx)(ee.a,{icon:Object(w.jsx)(ie.a,{style:{color:"white"}}),label:"REJECTED",color:"secondary",style:{backgroundColor:"#DC143C",color:"white",minWidth:120}})]}),"          ","PENDING"===t.status&&Object(w.jsxs)(F.a,{align:"right",style:{color:"green",fontWeight:"bold",fontSize:16},children:["   ",Object(w.jsx)(ee.a,{icon:Object(w.jsx)(re.a,{style:{color:"white"}}),label:"PENDING",color:"grey",style:{backgroundColor:"#a9a9a9",color:"white",minWidth:120}})]})]},t.drawing)}))})]})})]})}var fe=a(431),ve=a(428),ye=a(408),we=a(433),Se=a.p+"static/media/characterOne.6eb00741.png",Ce=a(256);function Ne(){return Object(w.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(j.a,{color:"inherit",href:"https://material-ui.com/",children:"Documentive"})," ",(new Date).getFullYear(),"."]})}var De=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{marginTop:e.spacing(8),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),padding:7,fontSize:17},errorMsg:{color:"red",fontSize:"14px",marginTop:"20px"}}}));function Ee(){var e=De(),t=Object(n.useState)(""),a=Object(s.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(""),j=Object(s.a)(r,2),u=j[0],m=j[1],p=Object(n.useState)(""),O=Object(s.a)(p,2),x=O[0],f=O[1],v=Object(n.useState)(""),y=Object(s.a)(v,2),S=y[0],C=y[1],N=Object(n.useState)(""),E=Object(s.a)(N,2),k=E[0],T=E[1],I=Object(n.useState)("success"),A=Object(s.a)(I,2),z=A[0],P=A[1],B=function(e,t){e.preventDefault();var a=e.target.value;"email"===t?m(a):"contact"===t?f(a):"name"===t?c(a):"role"===t&&C(a)};return""!==k&&setTimeout((function(){return T("")}),5e3),Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(l.a,{}),Object(w.jsx)(K,{}),Object(w.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(w.jsxs)("div",{className:e.paper,children:[Object(w.jsx)("img",{src:Se}),Object(w.jsx)(h.a,{component:"h1",variant:"h5",style:{marginTop:10},children:"Add New Role"}),""!==k&&Object(w.jsx)(D.a,{severity:z,children:k}),Object(w.jsxs)("form",{className:e.form,children:[Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Name",autoFocus:!0,onChange:function(e){return B(e,"name")}}),Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Email Address",onChange:function(e){return B(e,"email")}}),Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Contact",type:"number",onChange:function(e){return B(e,"contact")}}),Object(w.jsxs)(ye.a,{variant:"outlined",fullWidth:!0,margin:"normal",children:[Object(w.jsx)(fe.a,{id:"demo-simple-select-outlined-label",children:"Role"}),Object(w.jsxs)(ve.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:S,onChange:function(e){return B(e,"role")},label:"Role",fullWidth:!0,children:[Object(w.jsx)(we.a,{value:"Admin",children:"Admin"}),Object(w.jsx)(we.a,{value:"Inspector",children:"Inspector"}),Object(w.jsx)(we.a,{value:"Custodian",children:"Custodian"}),Object(w.jsx)(we.a,{value:"Viewer",children:"Viewer"})]})]}),Object(w.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit,onClick:function(e){return function(e){e.preventDefault();var t=Ce.generate({length:8,numbers:!0});if(""!==i&&""!==x&&""!==S&&function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}(u)&&""!==t)try{W.auth().createUserWithEmailAndPassword(u,t),W.auth().sendPasswordResetEmail(u),console.log("Reset mail sent!");var a=u.replace(".",","),n=S.toLowerCase();W.database().ref().child("".concat(n,"/").concat(a,"/")).set({email:u,role:S,contact:x,name:i}),console.log("Meta data added successfully!"),T("Employee registered successfully!"),P("success"),c(""),f(""),C(""),m("")}catch(r){return T("Something went wrong. Please make sure that fields are valid and email is unique"),P("error"),void console.log("Error registering the user",r)}else T("Please enter valid details!")}(e)},children:"Register"})]})]}),Object(w.jsx)(b.a,{mt:8,children:Object(w.jsx)(Ne,{})})]})]})}var We=a(426),ke=a.p+"static/media/characterThree.27c0ee5e.png";function Te(){return Object(w.jsxs)(h.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(w.jsx)(j.a,{color:"inherit",href:"https://material-ui.com/",children:"Documentive"})," ",(new Date).getFullYear(),"."]})}var Ie=Object(m.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{marginTop:e.spacing(8),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),padding:7,fontSize:17},errorMsg:{color:"red",fontSize:"14px",marginTop:"20px"}}}));function Ae(){var e=Ie(),t=Object(n.useState)(""),a=Object(s.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(""),j=Object(s.a)(r,2),u=j[0],m=j[1],p=Object(n.useState)(""),O=Object(s.a)(p,2),x=O[0],f=O[1],v=Object(n.useState)("Pending"),y=Object(s.a)(v,2),S=y[0],C=y[1],N=Object(n.useState)(""),E=Object(s.a)(N,2),k=E[0],T=E[1],I=Object(n.useState)(""),A=Object(s.a)(I,2),z=A[0],P=A[1],B=Object(n.useState)(""),R=Object(s.a)(B,2),q=R[0],F=R[1],M=Object(n.useState)(""),J=Object(s.a)(M,2),L=J[0],G=J[1],Q=function(e,t){e.preventDefault();var a=e.target.value;"drawing"===t?c(a):"inspector"===t?m(a):"status"===t?C(a):"contact"===t?T(a):"quantity"===t?f(a):"description"===t&&P(a)};return Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(l.a,{}),Object(w.jsx)(K,{}),Object(w.jsxs)(g.a,{component:"main",maxWidth:"xs",children:[Object(w.jsxs)("div",{className:e.paper,children:[Object(w.jsx)("img",{src:ke,class:e.imgStyle}),Object(w.jsx)(h.a,{component:"h1",variant:"h5",style:{marginTop:10},children:"Add Drawing"}),""!==q?Object(w.jsx)(D.a,{severity:L,children:q}):Object(w.jsx)("div",{}),Object(w.jsxs)("form",{className:e.form,children:[Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,value:i,fullWidth:!0,label:"Drawing Number",autoFocus:!0,onChange:function(e){return Q(e,"drawing")}}),Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,secondary:!0,value:u,label:"Inspector Name",onChange:function(e){return Q(e,"inspector")}}),Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,value:k,label:"Contact",type:"string",onChange:function(e){return Q(e,"contact")}}),Object(w.jsx)(d.a,{variant:"outlined",margin:"normal",required:!0,value:x,fullWidth:!0,label:"Quantity",type:"number",onChange:function(e){return Q(e,"quantity")}}),Object(w.jsx)(d.a,{id:"outlined-multiline-static",label:"Brief Description",margin:"normal",required:!0,fullWidth:!0,multiline:!0,value:z,rows:3,variant:"outlined",onChange:function(e){return Q(e,"description")}}),Object(w.jsx)(o.a,{type:"submit",fullWidth:!0,color:"secondary",variant:"contained",className:e.submit,onClick:function(e){return function(e){e.preventDefault();var t=W.database().ref(),a=Object(We.a)(new Date,"dd-MM-yyyy"),n=t.child("item/".concat(i));try{n.set({date:a,drawing_no:i,inspector_name:u,quantity:x,status:S,description:z}),G("success"),F("Drawing Number Added Successfully!"),setTimeout((function(){G(""),F("")}),5e3),c(""),T(""),f(""),P(""),m(""),console.log("Drawing Number added successfully!")}catch(r){G("error"),F("Something went wrong!"),console.log("Error saving drawing number",r)}}(e)},children:"Save"})]})]}),Object(w.jsx)(b.a,{mt:6,children:Object(w.jsx)(Te,{})})]})]})}var ze=a(147),Pe=(a(353),a(217)),Be=a.n(Pe),Re=a.p+"static/media/citylandscape.291f2000.png",qe=a(216),Fe=a.n(qe),Me=Object(m.a)({table:{minWidth:650},data:{fontSize:17},heading:{fontSize:18,fontWeight:"bold",color:"#ffffff"},iconStyle:{verticalAlign:"middle",display:"inline-flex",marginRight:8},formControl:{margin:30,minWidth:120},inputDiv:{marginTop:60,textAlign:"center"},submit:{marginTop:10}});function Je(){var e=Me(),t=Object(n.useState)([]),a=Object(s.a)(t,2),i=a[0],c=a[1],r=Object(n.useState)(2021),l=Object(s.a)(r,2),d=l[0],j=l[1],b=Object(n.useState)(1),m=Object(s.a)(b,2),g=m[0],p=m[1],x=Object(n.useState)([]),f=Object(s.a)(x,2),v=f[0],y=f[1],S=Object(n.useState)(),C=Object(s.a)(S,2),N=C[0],D=C[1],E=[{name:"Quantity",data:v}],k={chart:{type:"area",height:350,width:"100%",minWidth:200,zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth"},title:{text:"Quantity incoming",align:"center"},subtitle:{text:"Quantity Movements",align:"left"},labels:N,yaxis:{opposite:!1},legend:{horizontalAlign:"left"},colors:["#ff0000"]},T=function(){var e=W.database().ref().child("report/".concat(d,"/").concat(g));e.on("value",(function(e){var t=e.val(),a=[];if(null!==t){Object.keys(t).map((function(e){var n=t[e],i={date:n.date,inspector:n.inspector,drawing:n.drawing,quantity:n.quantity,status:n.status};a.push(i),"ACCEPTED"===i.status?1:"REJECTED"===i.status?1:1})),c(a);var n=a.map((function(e){return e.date})),i=a.map((function(e){return e.quantity}));y(i),D(n)}else c([])}))},I=function(e,t){var a=e.target.value;"month"===t?p(a):"year"===t&&j(a)};return Object(n.useEffect)((function(){T()}),[]),Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(K,{}),Object(w.jsxs)("div",{style:{width:"100%",marginRight:20},children:[Object(w.jsxs)("div",{className:e.inputDiv,children:[Object(w.jsxs)(ye.a,{className:e.formControl,children:[Object(w.jsx)(fe.a,{id:"demo-simple-select-label",children:"Year"}),Object(w.jsxs)(ve.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:d,onChange:function(e){return I(e,"year")},children:[Object(w.jsx)(we.a,{value:2021,children:"2021"}),Object(w.jsx)(we.a,{value:2020,children:"2020"}),Object(w.jsx)(we.a,{value:2019,children:"2019"}),Object(w.jsx)(we.a,{value:2018,children:"2018"}),Object(w.jsx)(we.a,{value:2017,children:"2017"})]})]}),Object(w.jsxs)(ye.a,{className:e.formControl,children:[Object(w.jsx)(fe.a,{id:"demo-simple-select-label",children:"Month"}),Object(w.jsxs)(ve.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:g,onChange:function(e){return I(e,"month")},children:[Object(w.jsx)(we.a,{value:1,children:"January"}),Object(w.jsx)(we.a,{value:2,children:"February"}),Object(w.jsx)(we.a,{value:3,children:"March"}),Object(w.jsx)(we.a,{value:4,children:"April"}),Object(w.jsx)(we.a,{value:5,children:"May"}),Object(w.jsx)(we.a,{value:6,children:"June"}),Object(w.jsx)(we.a,{value:7,children:"July"}),Object(w.jsx)(we.a,{value:8,children:"August"}),Object(w.jsx)(we.a,{value:9,children:"September"}),Object(w.jsx)(we.a,{value:10,children:"October"}),Object(w.jsx)(we.a,{value:11,children:"November"}),Object(w.jsx)(we.a,{value:12,children:"December"})]})]}),Object(w.jsx)(ye.a,{className:e.formControl,children:Object(w.jsx)(o.a,{type:"submit",fullWidth:!0,color:"secondary",variant:"outlined",className:e.submit,onClick:function(e){return T()},children:"Search"})})]}),0===i.length?Object(w.jsxs)("div",{style:{width:"100%",textAlign:"center",marginTop:100},children:[Object(w.jsx)("img",{src:Re}),Object(w.jsx)(h.a,{color:"secondary",children:"No report found!"})]}):Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{style:{width:"100%",marginTop:20},children:Object(w.jsx)(u.a,{container:!0,spacing:2,justify:"center",children:Object(w.jsx)(G.a,{children:Object(w.jsx)(u.a,{item:!0,xs:12,children:Object(w.jsx)(Fe.a,{options:k,series:E,type:"area",width:500})})})})}),Object(w.jsx)("div",{style:{textAlign:"center",marginTop:50},children:Object(w.jsx)(o.a,{type:"submit",color:"secondary",variant:"outlined",onClick:function(){return function(){var e=new ze.default("portrait","pt","A4");e.setFontSize(15);var t="".concat(g,"-").concat(d," report"),a={startY:50,head:[["Date","Drawing Number","Inspector","Quantity","Status"]],body:i.map((function(e){return[e.date,e.drawing,e.inspector,e.quantity,e.status]}))};e.text(t,40,40),e.autoTable(a),e.save("".concat(g,"_").concat(d,"_report.pdf"))}()},className:e.submit,style:{minWidth:200},startIcon:Object(w.jsx)(Be.a,{}),children:"Export PDF"})}),Object(w.jsx)("div",{children:Object(w.jsx)(M.a,{component:G.a,style:Object(O.a)({margin:10,marginTop:20,elevation:3},"marginTop",30),maxWidth:"xl",children:Object(w.jsxs)(R.a,{className:e.table,"aria-label":"simple table",children:[Object(w.jsx)(J.a,{children:Object(w.jsxs)(L.a,{style:{backgroundColor:"#FE6B8B"},children:[Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(de.a,{className:e.iconStyle}),"Date"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(ue.a,{className:e.iconStyle}),"Drawing Number"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(oe.a,{className:e.iconStyle}),"Inspector"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(ge.a,{className:e.iconStyle}),"Quantity"]}),Object(w.jsxs)(F.a,{align:"right",className:e.heading,children:[Object(w.jsx)(he.a,{className:e.iconStyle}),"Status"]})]})}),Object(w.jsx)(q.a,{children:i&&i.map((function(t){return Object(w.jsxs)(L.a,{children:[Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.date}),Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.drawing}),Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.inspector}),Object(w.jsx)(F.a,{className:e.data,align:"right",children:t.quantity}),"ACCEPTED"===t.status&&Object(w.jsxs)(F.a,{align:"right",style:{color:"green",fontWeight:"bold",fontSize:16},children:["   ",Object(w.jsx)(ee.a,{icon:Object(w.jsx)(ae.a,{style:{color:"white"}}),label:"ACCEPTED",style:{backgroundColor:"#32CD32",color:"white"}})]}),"REJECTED"===t.status&&Object(w.jsxs)(F.a,{align:"right",style:{color:"green",fontWeight:"bold",fontSize:16},children:["   ",Object(w.jsx)(ee.a,{icon:Object(w.jsx)(ie.a,{style:{color:"white"}}),label:"REJECTED",color:"secondary",style:{backgroundColor:"#DC143C",color:"white",minWidth:120}})]}),"          ","PENDING"===t.status&&Object(w.jsxs)(F.a,{align:"right",style:{color:"green",fontWeight:"bold",fontSize:16},children:["   ",Object(w.jsx)(ee.a,{icon:Object(w.jsx)(re.a,{style:{color:"white"}}),label:"PENDING",color:"grey",style:{backgroundColor:"#a9a9a9",color:"white",minWidth:120}})]})]},t.drawing)}))})]})})})]})]})]})}var Le=a(419),Ge=a(420),Qe=a(421),_e=a(422),Ye=a(114),He=a(218),Ve=a.n(He),Ze=a(423),Ue=a(425),Xe=a(424),$e=Object(m.a)((function(e){return{gridList:{width:"100%",height:"100%"},avatar:{backgroundColor:Ye.a[500]},root:{minWidth:250,marginTop:80,maxWidth:475,marginRight:50,marginLeft:20,height:"auto"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:16},pos:{marginBottom:12}}}));function Ke(){var e=$e(),t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)([]),d=Object(s.a)(l,2),j=(d[0],d[1]),u=Object(n.useState)([]),b=Object(s.a)(u,2),m=(b[0],b[1]),g=Object(n.useState)([]),p=Object(s.a)(g,2),O=p[0],x=p[1],f=i.a.useState(!1),v=Object(s.a)(f,2),y=v[0],S=v[1],C=function(){S(!0)},N=function(){S(!1)};return Object(n.useEffect)((function(){!function(){var e=W.database().ref(),t=[];e.child("inspector").once("value",(function(e){var a=e.val();Object.keys(a).map((function(e){var n=a[e];t.push({name:n.name,email:n.reg_id,contact:n.phn,role:"Inspector"})})),r(t)})),e.child("custodian").once("value",(function(e){var a=e.val();Object.keys(a).map((function(e){var n=a[e];t.push({name:n.name,email:n.reg_id,contact:n.phn,role:"Custodian"})})),j(t)})),e.child("admin").once("value",(function(e){var a=e.val();Object.keys(a).map((function(e){var n=a[e];t.push({name:n.name,email:n.reg_id,contact:n.phn,role:"Admin"})})),m(t)})),x(t)}()}),[]),console.log(c),Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsx)(K,{}),Object(w.jsx)("div",{style:{width:"100"},children:Object(w.jsx)(Le.a,{cols:3,children:O.map((function(t){return Object(w.jsxs)(Ge.a,{className:e.root,children:[Object(w.jsx)(Qe.a,{action:Object(w.jsx)("div",{children:Object(w.jsx)(H.a,{"aria-label":"settings",onClick:C,children:Object(w.jsx)(Ve.a,{style:{color:"red"}})})}),title:t.name,subheader:t.role}),Object(w.jsxs)(_e.a,{children:[Object(w.jsxs)(h.a,{className:e.title,gutterBottom:!0,children:["Email: ",t.email]}),Object(w.jsxs)(h.a,{className:e.title,gutterBottom:!0,children:["Phone: ",t.contact]})]})]})}))})}),Object(w.jsxs)(Ze.a,{open:y,onClose:N,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(w.jsx)(Xe.a,{id:"alert-dialog-title",children:"Are you sure you want to delete the user?"}),Object(w.jsxs)(Ue.a,{children:[Object(w.jsx)(o.a,{onClick:N,color:"primary",children:"Disagree"}),Object(w.jsx)(o.a,{onClick:N,color:"secondary",autoFocus:!0,children:"Agree"})]})]})]})}var et=a(73);W.auth().onAuthStateChanged((function(e){e?r.a.render(Object(w.jsx)(et.a,{children:Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{path:"/reset",component:B}),Object(w.jsx)(p.a,{path:"/login",component:I}),Object(w.jsx)(p.a,{path:"/register",component:Ee}),Object(w.jsx)(p.a,{path:"/AddDrawing",component:Ae}),Object(w.jsx)(p.a,{path:"/Report",component:Je}),Object(w.jsx)(p.a,{path:"/Employees",component:Ke}),Object(w.jsx)(p.a,{path:"/",component:xe})]})}),document.getElementById("root")):r.a.render(Object(w.jsx)(et.a,{children:Object(w.jsxs)(p.c,{children:[Object(w.jsx)(p.a,{path:"/login",component:I}),Object(w.jsx)(p.a,{path:"/reset",component:B}),Object(w.jsx)(p.a,{path:"/register",component:I}),Object(w.jsx)(p.a,{path:"/AddDrawing",component:I}),Object(w.jsx)(p.a,{path:"/Report",component:I}),Object(w.jsx)(p.a,{path:"/Employees",component:I}),Object(w.jsx)(p.a,{path:"/",component:I})]})}),document.getElementById("root"))}))}},[[355,1,3]]]);
//# sourceMappingURL=main.22e1df2a.chunk.js.map