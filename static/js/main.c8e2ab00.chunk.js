(this.webpackJsonpfirechat=this.webpackJsonpfirechat||[]).push([[0],{167:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(24),i=n.n(c),a=n(22),o=(n(98),n(18)),s=n.n(o),u=(n(157),s.a.initializeApp({apiKey:"AIzaSyBoeEVWdKWKxTbjwuyLnLzZsg6fgD7yEeM",authDomain:"firechat-5fa8c.firebaseapp.com",projectId:"firechat-5fa8c",storageBucket:"firechat-5fa8c.appspot.com",messagingSenderId:"718769456429",appId:"1:718769456429:web:81cfd623406dc9b122bfa4",measurementId:"G-SSE99VCDYR"}).firestore()),d=s.a.auth(),l=n(27),f=n.n(l),p=n(42),j=n(186),b=n(185),h=n(3);var x=function(e){var t=e.scroll,n=Object(r.useState)(""),c=Object(a.a)(n,2),i=c[0],o=c[1];function l(){return(l=Object(p.a)(f.a.mark((function e(n){var r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=d.currentUser,c=r.uid,a=r.photoURL,""===i){e.next=5;break}return e.next=5,u.collection("messages").add({text:i,photoURL:a,uid:c,createdAt:s.a.firestore.FieldValue.serverTimestamp()});case 5:o(""),t.current.scrollIntoView({behavior:"smooth"});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsx)("div",{children:Object(h.jsx)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:Object(h.jsxs)("div",{className:"sendMsg",children:[Object(h.jsx)(j.a,{style:{width:"78%",fontSize:"15px",fontWeight:"550",marginLeft:"5px",marginBottom:"-3px"},placeholder:"Message...",type:"text",value:i,onChange:function(e){return o(e.target.value)}}),Object(h.jsx)(b.a,{style:{width:"18%",fontSize:"15px",fontWeight:"550",margin:"4px 5% -13px 5%",maxWidth:"200px"},type:"submit",children:"Send"})]})})})};var g=function(){function e(){return(e=Object(p.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),(n=d.currentUser.uid)!==d.currentUser.uid){e.next=8;break}return console.log(n),r=u.collection("messages"),e.next=7,u.collection("messages").onSnapshot((function(e){e.docs.forEach((function(e){r.doc(e.id).delete()}))}));case 7:window.location.reload();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"center",position:"relative",width:"100%",backgroundColor:"#FAFAFA",top:0,borderBottom:"solid 2px lightgray",zIndex:"10"},children:[Object(h.jsx)(b.a,{style:{padding:"10px",fontSize:"15px",borderRadius:"20px",backgroundColor:"#808080\t",marginBottom:5,marginTop:5,color:"#fff",fontWeight:"600"},onClick:function(t){return function(t){return e.apply(this,arguments)}(t)},children:"Reset"}),Object(h.jsx)(b.a,{style:{padding:"10px",fontSize:"15px",borderRadius:"20px",backgroundColor:"#808080\t",marginLeft:5,marginBottom:5,marginTop:5,color:"#fff",fontWeight:"600"},onClick:function(){return d.signOut()},children:"Sign Out"})]})};var m=function(){var e=Object(r.useRef)(),t=Object(r.useState)([]),n=Object(a.a)(t,2),c=n[0],i=n[1],o=Object(r.useState)(!1),s=Object(a.a)(o,2);return s[0],s[1],Object(r.useEffect)((function(){u.collection("messages").orderBy("createdAt").limit(570).onSnapshot((function(e){i(e.docs.map((function(e){return e.data()})))}))}),[]),Object(h.jsxs)("div",{className:"ss",children:[Object(h.jsx)(g,{}),"            ",Object(h.jsx)("div",{className:"msgs",children:c.map((function(e){var t=e.id,n=e.text,r=e.photoURL,c=e.uid;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"msg ".concat(c===d.currentUser.uid?"sent":"received"),children:[Object(h.jsx)("img",{src:r,alt:""}),Object(h.jsx)("p",{children:n}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("p",{children:t})]},t)})}))}),Object(h.jsx)(x,{scroll:e}),Object(h.jsx)("div",{ref:e})]})},O=n(184);var v=function(){var e=Object(O.a)((function(e){return{signButton:{padding:30,fontSize:20,borderRadius:20,fontWeight:600,color:"#fff",background:"rgb(180, 20, 87)",boxShadow:" 0 0 40px rgb(164, 164, 164)"}}}))();return Object(h.jsx)("div",{className:"sign",children:Object(h.jsx)(b.a,{className:e.signButton,onClick:function(){var e=new s.a.auth.GoogleAuthProvider;d.signInWithPopup(e)},children:"Sign In With Google"})})},y=n(89);var S=function(){var e=Object(y.a)(d),t=Object(a.a)(e,1)[0];return Object(h.jsx)(h.Fragment,{children:t?Object(h.jsx)(m,{}):Object(h.jsx)(v,{})})};i.a.render(Object(h.jsx)(S,{}),document.getElementById("root"))},98:function(e,t,n){}},[[167,1,2]]]);
//# sourceMappingURL=main.c8e2ab00.chunk.js.map