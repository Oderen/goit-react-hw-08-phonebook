"use strict";(self.webpackChunkmy_projects=self.webpackChunkmy_projects||[]).push([[6],{8006:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var s=t(9439),a=t(2791),i=t(3044),r=t(8551),o=t(4708),l=t(9176),c=t(4554),m=t(403),p=t(890),u=t(1614),d=t(533),h=t(9434),x=t(8661),g=t(8820),f="SignUpForm_infoBlock__sIzJ0",j="SignUpForm_emailTextHelper__KYuvy",y="SignUpForm_signUpButton__e9tZ-",v="SignUpForm_signUpLink__A-kEv",w=t(184);function b(){var e=(0,h.I0)(),n=(0,h.v9)((function(e){return e.auth.isAuthProblem.isRegProblem})),t=(0,a.useState)(!1),b=(0,s.Z)(t,2),Z=b[0],S=b[1],_=(0,a.useState)(!1),k=(0,s.Z)(_,2),P=k[0],U=k[1],T=(0,a.useState)(!1),F=(0,s.Z)(T,2),M=F[0],A=F[1];return(0,w.jsxs)(u.Z,{component:"main",maxWidth:"xs",children:[(0,w.jsx)(o.ZP,{}),(0,w.jsxs)(c.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,w.jsx)(i.Z,{sx:{m:1,bgcolor:"#003262"},children:(0,w.jsx)(m.Z,{})}),(0,w.jsx)(p.Z,{component:"h1",variant:"h5",children:"Sign Up"}),(0,w.jsxs)(c.Z,{component:"form",onSubmit:function(n){n.preventDefault();var t=new FormData(n.currentTarget),s=t.get("email"),a=t.get("password");if(""===s)return S(!0);if(!s.includes("@")||s.split(".").length-1!==2)return S(!0);if(S(!1),a.length<=6)return U(!0);U(!1);var i={name:s.split("@")[0],email:s,password:a};e((0,x.a$)(i))},noValidate:!0,sx:{mt:1},style:{position:"relative"},children:[(0,w.jsx)(l.Z,{id:"email",name:"email",type:"email",label:"Email Address",placeholder:"example.something@gmail.com",autoComplete:"email",margin:"normal",required:!0,fullWidth:!0,autoFocus:!0,error:!(!Z&&!n),helperText:Z?(0,w.jsxs)("span",{children:["Invalid email. Please try again"," ",(0,w.jsx)(g.KpA,{onMouseEnter:function(){A(!0)},onMouseLeave:function(){A(!1)}})]}):(0,w.jsxs)("span",{children:['Must contain two "." symbols'," ",(0,w.jsx)(g.KpA,{className:j,onMouseEnter:function(){A(!0)},onMouseLeave:function(){A(!1)}})]})}),(0,w.jsx)("div",{className:f,style:{display:M?"block":"none"},children:(0,w.jsx)("p",{style:{padding:7,fontSize:12,fontWeight:500,color:"white"},children:'Due to specific backend features email must contain two "." and "@" symbols. Please write the email in the following format "example.smth@gmail.com"'})}),(0,w.jsx)(l.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",error:!!P,inputProps:{pattern:/^\S+@\S+\.\S+$/},helperText:"Must be at least 7 character long",autoComplete:"current-password"}),n&&(0,w.jsx)("div",{style:{marginTop:10},children:(0,w.jsxs)("p",{style:{margin:0,color:"red"},children:["This email is already registered or written form is not accepted in backend. Please try to write a new one"," "]})}),(0,w.jsx)(r.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:2,mb:2},className:y,children:"Sign Up"})]}),(0,w.jsx)(d.Z,{href:"http://localhost:3000/goit-react-hw-08-phonebook/login",variant:"body2",style:{textDecoration:"none"},children:(0,w.jsxs)("p",{className:v,children:[(0,w.jsx)("span",{children:"Have already an account?"}),(0,w.jsx)("span",{style:{marginLeft:5},children:"Login"})]})})]})]})}var Z=function(){return(0,w.jsx)(b,{})}}}]);
//# sourceMappingURL=6.830df3cb.chunk.js.map