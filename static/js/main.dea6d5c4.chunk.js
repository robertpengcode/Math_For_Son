(this.webpackJsonpmath_for_son=this.webpackJsonpmath_for_son||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),i=(a(13),a(2)),l=a(3),c=a(1),u=a(5),m=a(4),p=(a(14),a(15),function(e){var t=e.question;return r.a.createElement("div",{className:"questionCard"},r.a.createElement("span",{className:"element questionId"},"Q",t.id),r.a.createElement("div",{className:"questionBox"},r.a.createElement("span",{className:"element firstNum"},t.firstNum),r.a.createElement("span",{className:"element operator_secondNum"},t.operator+"  "+t.secondNum),r.a.createElement("span",{className:"element answer"},t.answer)))}),v=(a(16),function(e){var t=e.questions;return r.a.createElement("div",null,r.a.createElement("ul",{className:"questionsList"},t.map((function(e){return r.a.createElement(p,{key:e.id,question:e})}))),r.a.createElement("ul",{className:"answerList"},r.a.createElement("span",null,"Answers: "),t.map((function(e){return r.a.createElement("li",{className:"answers",key:e.id},"Q".concat(e.id,": ").concat(e.answer))}))))}),f=(a(17),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={operator:"+",firstDigit:1,secondDigit:1},n.onSubmit=n.onSubmit.bind(Object(c.a)(n)),n}return Object(l.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state,a=t.operator,n=t.firstDigit,r=t.secondDigit;n=Number(n),r=Number(r),this.props.generateQuestions(a,n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.operator,n=t.firstDigit,o=t.secondDigit;return r.a.createElement("form",{className:"selections",onSubmit:this.onSubmit},r.a.createElement("ul",{className:"selectionsList"},r.a.createElement("label",null,"Operator\xa0",r.a.createElement("select",{className:"oneSelection",value:a,onChange:function(t){return e.setState({operator:t.target.value})}},r.a.createElement("option",null,"+"),r.a.createElement("option",null,"-"),r.a.createElement("option",null,"x"))),r.a.createElement("label",null,"First Number\xa0",r.a.createElement("select",{className:"oneSelection",value:n,onChange:function(t){return e.setState({firstDigit:t.target.value})}},r.a.createElement("option",{value:"1"},"One Digit"),r.a.createElement("option",{value:"2"},"Two Digits"),r.a.createElement("option",{value:"3"},"Three Digits"))),r.a.createElement("label",null,"Second Number\xa0",r.a.createElement("select",{className:"oneSelection",value:o,onChange:function(t){return e.setState({secondDigit:t.target.value})}},r.a.createElement("option",{value:"1"},"One Digit"),r.a.createElement("option",{value:"2"},"Two Digits"),r.a.createElement("option",{value:"3"},"Three Digits"))),r.a.createElement("button",{className:"button"},"Generate Questions")))}}]),a}(n.Component)),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={questions:[]},e.generateQuestions=e.generateQuestions.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"generateQuestions",value:function(e,t,a){var n=0,r=0,o=0,s=0;1===t?(n=9,r=1):2===t?(n=90,r=10):3===t&&(n=900,r=100),1===a?(o=9,s=1):2===a?(o=90,s=10):3===a&&(o=900,s=100);for(var i=[],l=1;l<=20;l++){var c={},u=0,m=Math.floor(Math.random()*n)+r,p=Math.floor(Math.random()*o)+s;"-"===e&&m<p&&(u=m,m=p,p=u);var v=0;switch(e){case"+":v=m+p;break;case"-":v=m-p;break;case"x":v=m*p;break;default:console.log("Sorry, please pick a valid operator!")}c.id=l,c.operator=e,c.firstNum=m,c.secondNum=p,c.answer=v,i.push(c)}this.setState({questions:i})}},{key:"render",value:function(){var e=this.generateQuestions,t=this.state.questions;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Noah's Math Questions"),r.a.createElement(f,{generateQuestions:e})),r.a.createElement(v,{questions:t}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.dea6d5c4.chunk.js.map