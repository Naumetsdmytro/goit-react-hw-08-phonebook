"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[25],{25:function(t,e,n){n.r(e),n.d(e,{default:function(){return S}});var a=n(791),r=n(434),s=n(272),c=n(916),o=function(t){return t.filter},i=function(t){return t.contacts.contacts},l=function(t){return t.contacts.isLoading},u=function(t){return t.contacts.error},m=(0,c.P1)([i,o],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.includes(n)}))})),d="ContactForm_title__jZguf",_="ContactForm_contactForm__y0Rca",h="ContactForm_inputTitle__Gmsiy",p="ContactForm_inputText__pOiDY",f="ContactForm_formInput__GszVU",x="ContactForm_formBtn__qZGY3",j=n(184),C=function(){var t=(0,r.I0)(),e=(0,r.v9)(i);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h1",{className:d,children:"Phonebook"}),(0,j.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=n.currentTarget;if(!e.some((function(t){return t.name.toLowerCase()===a.elements.name.value.toLowerCase()})))return t((0,s.uK)({name:a.elements.name.value,number:a.elements.number.value})),void a.reset();alert("".concat(a.elements.name.value," is already in contacts."))},className:_,children:[(0,j.jsxs)("label",{className:h,children:[(0,j.jsx)("span",{className:p,children:"Name"}),(0,j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:f})]}),(0,j.jsxs)("label",{className:h,children:[(0,j.jsx)("span",{className:p,children:"Number"}),(0,j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:f})]}),(0,j.jsx)("button",{type:"submit",className:x,children:"Add contact"})]})]})},v="ContactListItem_contactListItem__A4sXv",b="ContactListItem_contactListText__jTfo-",F="ContactListItem_number__j2Ar0",N="ContactListItem_buttonDelete__965SC",y=function(t){var e=t.contact,n=e.name,a=e.number,r=e.id;return(0,j.jsxs)("li",{className:v,children:[(0,j.jsxs)("p",{className:b,children:[n," ",(0,j.jsx)("span",{className:F,children:a})]}),(0,j.jsx)(g,{id:r})]},r)},g=function(t){var e=t.id,n=(0,r.I0)();return(0,j.jsx)("button",{type:"button",onClick:function(){return n((0,s.GK)(e))},className:N,children:"Delete"})},L="ContactList_contactList__UFVCg",w=function(){var t=(0,r.v9)(m);return(0,j.jsx)(j.Fragment,{children:t.length>0&&(0,j.jsx)("ul",{className:L,children:t.map((function(t){return(0,j.jsx)(y,{contact:t},t.id)}))})})},I=n(634),k="FilterContactForm_title__wGFDu",T="FilterContactForm_inputTitle__T8Wd8",A="FilterContactForm_inputText__b4XoB",z="FilterContactForm_filterInput__IcKfY",D=function(){var t=(0,r.I0)(),e=(0,r.v9)(o);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{className:k,children:"Contacts"}),(0,j.jsxs)("label",{className:T,children:[(0,j.jsx)("span",{className:A,children:"Find contacts by name"}),(0,j.jsx)("input",{type:"text",value:e,onChange:function(e){return t((0,I.x)(e.currentTarget.value))},className:z})]})]})},G=n(643),Z="Loader_loader__+lRPl",P=function(){return(0,j.jsx)("div",{className:Z,children:(0,j.jsx)(G.iT,{height:100,width:100,color:"#000",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#000",strokeWidth:2,strokeWidthSecondary:2})})};function S(){var t=(0,r.I0)(),e=(0,r.v9)(l),n=(0,r.v9)(u);(0,a.useEffect)((function(){t((0,s.yF)())}),[t]);var c=!e&&!n;return(0,j.jsxs)("main",{children:[(0,j.jsx)(C,{}),(0,j.jsx)(D,{}),c?(0,j.jsx)(w,{}):(0,j.jsx)(P,{})]})}}}]);
//# sourceMappingURL=25.4baede9c.chunk.js.map