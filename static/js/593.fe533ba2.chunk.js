"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[593],{3593:function(n,e,r){r.r(e),r.d(e,{MyPhonebook:function(){return nn}});var t,o,a,i,c,s,d,l,u,p,x,m,b,h,g=r(168),f=r(5867),Z=f.ZP.li(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n  margin-bottom: 8px;\n  margin-left: 12px;\n"]))),j=f.ZP.button(o||(o=(0,g.Z)(["\n  font-size: 12px;\n  max-width: 48px;\n  padding: 4px;\n  border-radius: 4px;\n  background-color: transparent;\n  border: none;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n\n  &:hover {\n    background-color: #4089e8;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  }\n"]))),v=r(184),k=function(n){var e=n.name,r=n.number,t=n.onDelete,o=n.isDeleting;return(0,v.jsxs)(Z,{children:[(0,v.jsxs)("p",{children:[e,": "]})," ",(0,v.jsx)("p",{children:r}),(0,v.jsx)(j,{onClick:t,disabled:o,children:"Delete"})]})},w=r(5705),P=r(8007),y=(0,f.ZP)(w.l0)(a||(a=(0,g.Z)(["\n  padding: 8px;\n  border: 1px solid #6a6a6a;\n"]))),C=f.ZP.label(i||(i=(0,g.Z)(["\n  font-weight: 500;\n"]))),L=(0,f.ZP)(w.gN)(c||(c=(0,g.Z)(["\n  display: block;\n  margin: 8px 0;\n  border: 1px solid black;\n  padding: 4px;\n"]))),D=(0,f.ZP)(w.Bc)(s||(s=(0,g.Z)(["\n  color: red;\n  display: block;\n  margin-bottom: 8px;\n"]))),S=f.ZP.button(d||(d=(0,g.Z)(["\n  margin: 4px;\n  padding: 8px;\n  border-radius: 8px;\n  background-color: transparent;\n  border: none;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n\n  &:hover {\n    background-color: #4089e8;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n  }\n"]))),_=r(4420),q=r(1686),F=r(3553),I=function(n){return n.contacts.items},N=function(n){return n.filter},R=function(n){return n.contacts.isLoading},M=function(n){return n.contacts.error},z=(0,F.P1)([I,N],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),K=r(3634),T=r(5218),A=P.Ry().shape({name:P.Z_().min(3,"Too Short!").required("Required"),number:P.Z_().matches(/^[0-9]+$/,"Must contain only number - 0123456789").min(5,"Must be 5 or more").required("Required")}),B=function(){var n=(0,_.I0)(),e=(0,_.v9)(I);return(0,v.jsx)(w.J9,{initialValues:{name:"",number:""},validationSchema:A,onSubmit:function(r,t){!function(r){e.some((function(n){return n.name.toLocaleLowerCase()===r.name.toLocaleLowerCase()}))?q.Report.failure("Notiflix Failure","Cannot add to contacts this name: ".concat(r.name," is already in contacts."),"Okay"):(n((0,K.uK)(r)),T.ZP.success("Successfully, new contact creted"))}(r),t.resetForm()},children:(0,v.jsxs)(y,{children:[(0,v.jsxs)(C,{children:["Name",(0,v.jsx)(L,{name:"name"}),(0,v.jsx)(D,{name:"name",component:"span"})]}),(0,v.jsxs)(C,{children:["Number",(0,v.jsx)(L,{name:"number",type:"tel"}),(0,v.jsx)(D,{name:"number",component:"span"})]}),(0,v.jsx)(S,{type:"submit",children:"Add contact"})]})})},E=r(9439),G=f.ZP.ul(l||(l=(0,g.Z)(["\n  padding: 4px;\n"]))),J=r(2791),O=function(){var n=(0,_.v9)(I),e=(0,_.v9)(N),r=(0,_.v9)(z),t=(0,_.I0)(),o=(0,J.useState)(null),a=(0,E.Z)(o,2),i=a[0],c=a[1],s=""===e?n:r;return(0,v.jsx)(G,{children:s.map((function(n){return(0,v.jsx)(k,{id:n.id,name:n.name,number:n.number,onDelete:(e=n.id,function(){c(e),t((0,K.GK)(e)).then((function(){T.ZP.success("Contact deleted"),c(null)})).catch((function(n){console.error("Delete contact error:",n),c(null)}))}),isDeleting:n.id===i},n.id);var e}))})},V=f.ZP.input(u||(u=(0,g.Z)(["\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 8px;\n  padding: 4px;\n  border: 1px solid black;\n"]))),Y=f.ZP.label(p||(p=(0,g.Z)(["\n  font-weight: 500;\n"]))),$=r(6895),H=function(){var n=(0,_.I0)();return(0,v.jsxs)(Y,{children:["Find contacts by name",(0,v.jsx)(V,{type:"text",name:"filter",placeholder:"Search",onChange:function(e){return n((0,$.T)(e.target.value))}})]})},Q=f.ZP.div(x||(x=(0,g.Z)(["\n  border: 1px solid #efe2e2;\n  border-radius: 16px;\n  margin: 40px;\n  padding: 20px;\n  max-width: 400px;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);\n"]))),U=f.ZP.div(m||(m=(0,g.Z)(["\n  padding: 4px;\n"]))),W=f.ZP.h1(b||(b=(0,g.Z)(["\n  margin-top: 16px;\n  margin-bottom: 20px;\n  font-size: 32px;\n  text-align: center;\n"]))),X=f.ZP.h2(h||(h=(0,g.Z)(["\n  margin-top: 16px;\n  margin-bottom: 16px;\n  text-align: center;\n"]))),nn=function(){var n=(0,_.v9)(I),e=(0,_.v9)(R),r=(0,_.v9)(M),t=(0,_.I0)();return(0,J.useEffect)((function(){t((0,K.yF)())}),[t]),(0,v.jsxs)(Q,{children:[(0,v.jsxs)(U,{children:[(0,v.jsx)(W,{children:"Phonebook"}),(0,v.jsx)(B,{})]}),(0,v.jsxs)(U,{children:[(0,v.jsx)(X,{children:"Contacts"}),n.length>0&&!r&&(0,v.jsx)(H,{}),e&&(0,v.jsx)("p",{children:"Loading contacts..."}),r&&(0,v.jsx)("p",{children:r}),0===n.length&&!e&&!r&&(0,v.jsx)("p",{children:"You don't have any contacts yet"}),(0,v.jsx)(O,{})]})]})}}}]);
//# sourceMappingURL=593.fe533ba2.chunk.js.map