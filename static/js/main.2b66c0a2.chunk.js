(this.webpackJsonpGupJack=this.webpackJsonpGupJack||[]).push([[0],[,,function(e,t,a){e.exports={controlsContainer:"Controls_controlsContainer__1S1TU",betContainer:"Controls_betContainer__1ZyjE",input:"Controls_input__z7Ayf",inputError:"Controls_inputError__FDIaN",button:"Controls_button__28yK5"}},function(e,t,a){e.exports={card:"Card_card__6G_gf",hiddenCard:"Card_hiddenCard__36nOp",black:"Card_black__1YXHy",red:"Card_red__3x-Ad",value:"Card_value__2Tilh",suit:"Card_suit__1Gz4C"}},function(e,t,a){e.exports={statusContainer:"Status_statusContainer__2Lhom",status:"Status_status__2oYQw",balance:"Status_balance__uvBo1",value:"Status_value__1mN8K"}},,,,function(e,t,a){e.exports={handContainer:"Hand_handContainer__Rt4-x",cardContainer:"Hand_cardContainer__zw0wd",title:"Hand_title__3iMMk"}},,,,function(e){e.exports=JSON.parse('{"cards":[{"value":"A","suit":"spades"},{"value":"A","suit":"diamonds"},{"value":"A","suit":"clubs"},{"value":"A","suit":"hearts"},{"value":"2","suit":"spades"},{"value":"2","suit":"diamonds"},{"value":"2","suit":"clubs"},{"value":"2","suit":"hearts"},{"value":"3","suit":"spades"},{"value":"3","suit":"diamonds"},{"value":"3","suit":"clubs"},{"value":"3","suit":"hearts"},{"value":"4","suit":"spades"},{"value":"4","suit":"diamonds"},{"value":"4","suit":"clubs"},{"value":"4","suit":"hearts"},{"value":"5","suit":"spades"},{"value":"5","suit":"diamonds"},{"value":"5","suit":"clubs"},{"value":"5","suit":"hearts"},{"value":"6","suit":"spades"},{"value":"6","suit":"diamonds"},{"value":"6","suit":"clubs"},{"value":"6","suit":"hearts"},{"value":"7","suit":"spades"},{"value":"7","suit":"diamonds"},{"value":"7","suit":"clubs"},{"value":"7","suit":"hearts"},{"value":"8","suit":"spades"},{"value":"8","suit":"diamonds"},{"value":"8","suit":"clubs"},{"value":"8","suit":"hearts"},{"value":"9","suit":"spades"},{"value":"9","suit":"diamonds"},{"value":"9","suit":"clubs"},{"value":"9","suit":"hearts"},{"value":"10","suit":"spades"},{"value":"10","suit":"diamonds"},{"value":"10","suit":"clubs"},{"value":"10","suit":"hearts"},{"value":"J","suit":"spades"},{"value":"J","suit":"diamonds"},{"value":"J","suit":"clubs"},{"value":"J","suit":"hearts"},{"value":"Q","suit":"spades"},{"value":"Q","suit":"diamonds"},{"value":"Q","suit":"clubs"},{"value":"Q","suit":"hearts"},{"value":"K","suit":"spades"},{"value":"K","suit":"diamonds"},{"value":"K","suit":"clubs"},{"value":"K","suit":"hearts"}]}')},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),u=a(11),i=a.n(u),l=(a(18),a(5)),r=a(9),c=a(1),d=a(4),o=a.n(d),b=function(e){var t=e.message,a=e.balance;return s.a.createElement("div",{className:o.a.statusContainer},s.a.createElement("div",{className:o.a.status},s.a.createElement("h1",{className:o.a.value},t)),s.a.createElement("div",{className:o.a.balance},s.a.createElement("h1",{className:o.a.value},"GU ",a)))},v=a(2),m=a.n(v),h=function(e){var t=e.balance,a=e.gameState,u=e.buttonState,i=e.betEvent,l=e.hitEvent,r=e.standEvent,d=e.resetEvent,o=Object(n.useState)(10),b=Object(c.a)(o,2),v=b[0],h=b[1],f=Object(n.useState)(m.a.input),_=Object(c.a)(f,2),E=_[0],O=_[1];Object(n.useEffect)((function(){p()}),[v,t]);var p=function(){return v>t||v<.01?(O(m.a.inputError),!1):(O(m.a.input),!0)},j=function(e){h(e.target.value)};return s.a.createElement(s.a.Fragment,null,0===a?s.a.createElement("div",{className:m.a.controlsContainer},s.a.createElement("div",{className:m.a.betContainer},s.a.createElement("h4",null,"Amount:"),s.a.createElement("input",{autoFocus:!0,type:"number",value:v,onChange:j,className:E})),s.a.createElement("button",{onClick:function(){p()&&i(Math.round(100*v)/100)},className:m.a.button},"Bet")):s.a.createElement("div",{className:m.a.controlsContainer},s.a.createElement("button",{onClick:function(){return l()},disabled:u.hitDisabled,className:m.a.button},"Hit"),s.a.createElement("button",{onClick:function(){return r()},disabled:u.standDisabled,className:m.a.button},"Stand"),s.a.createElement("button",{onClick:function(){return d()},disabled:u.resetDisabled,className:m.a.button},"Reset")))},f=a(8),_=a.n(f),E=a(3),O=a.n(E),p=function(e){var t=e.value,a=e.suit,n=e.hidden;return s.a.createElement(s.a.Fragment,null,n?s.a.createElement("div",{className:O.a.hiddenCard}):s.a.createElement("div",{className:O.a.card},s.a.createElement("div",{className:"\u2660"===a||"\u2663"===a?O.a.black:O.a.red},s.a.createElement("h1",{className:O.a.value},t),s.a.createElement("h1",{className:O.a.suit},a))))},j=function(e){var t=e.title,a=e.cards;return s.a.createElement("div",{className:_.a.handContainer},function(){if(a.length>0)return s.a.createElement("h1",{className:_.a.title},t)}(),s.a.createElement("div",{className:_.a.cardContainer},a.map((function(e,t){return s.a.createElement(p,{key:t,value:e.value,suit:e.suit,hidden:e.hidden})}))))},C=a(12),S=function(){var e,t,a;!function(e){e[e.bet=0]="bet",e[e.init=1]="init",e[e.userTurn=2]="userTurn",e[e.dealerTurn=3]="dealerTurn"}(e||(e={})),function(e){e[e.user=0]="user",e[e.dealer=1]="dealer",e[e.hidden=2]="hidden"}(t||(t={})),function(e){e.bet="GupJack",e.hitStand="Hit or Stand?",e.bust="You Lost!",e.userWin="You Win!",e.dealerWin="Dealer Wins!",e.tie="Tie!"}(a||(a={}));var u=JSON.parse(JSON.stringify(C.cards)),i=Object(n.useState)(u),d=Object(c.a)(i,2),o=d[0],v=d[1],m=Object(n.useState)([]),f=Object(c.a)(m,2),_=f[0],E=f[1],O=Object(n.useState)(0),p=Object(c.a)(O,2),S=p[0],N=p[1],k=Object(n.useState)(0),g=Object(c.a)(k,2),D=g[0],J=g[1],T=Object(n.useState)([]),A=Object(c.a)(T,2),w=A[0],x=A[1],y=Object(n.useState)(0),H=Object(c.a)(y,2),M=H[0],K=H[1],G=Object(n.useState)(0),Q=Object(c.a)(G,2),W=Q[0],F=Q[1],Y=Object(n.useState)(100),z=Object(c.a)(Y,2),B=z[0],R=z[1],I=Object(n.useState)(0),L=Object(c.a)(I,2),U=L[0],X=L[1],Z=Object(n.useState)(e.bet),q=Object(c.a)(Z,2),P=q[0],V=q[1],$=Object(n.useState)(a.bet),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({hitDisabled:!1,standDisabled:!1,resetDisabled:!0}),se=Object(c.a)(ne,2),ue=se[0],ie=se[1];Object(n.useEffect)((function(){P===e.init&&(le(t.user),le(t.hidden),le(t.user),le(t.dealer),V(e.userTurn),ae(a.hitStand))}),[P]),Object(n.useEffect)((function(){ce(_,N),J(D+1)}),[_]),Object(n.useEffect)((function(){ce(w,K),F(W+1)}),[w]),Object(n.useEffect)((function(){P===e.userTurn&&(21===S?(ue.hitDisabled=!0,ie(Object(r.a)({},ue))):S>21&&de())}),[D]),Object(n.useEffect)((function(){P===e.dealerTurn&&(M>=17?oe():le(t.dealer))}),[W]);var le=function(e){if(o.length>0){var t=Math.floor(Math.random()*o.length),a=o[t];switch(o.splice(t,1),v(Object(l.a)(o)),console.log("Remaining Cards:",o.length),a.suit){case"spades":re(e,a.value,"\u2660");break;case"diamonds":re(e,a.value,"\u2666");break;case"clubs":re(e,a.value,"\u2663");break;case"hearts":re(e,a.value,"\u2665")}}else alert("All cards have been drawn")},re=function(e,a,n){switch(e){case t.user:_.push({value:a,suit:n,hidden:!1}),E(Object(l.a)(_));break;case t.dealer:w.push({value:a,suit:n,hidden:!1}),x(Object(l.a)(w));break;case t.hidden:w.push({value:a,suit:n,hidden:!0}),x(Object(l.a)(w))}},ce=function(e,t){var a=0;e.forEach((function(e){if(!1===e.hidden&&"A"!==e.value)switch(e.value){case"K":case"Q":case"J":a+=10;break;default:a+=Number(e.value)}}));var n=e.filter((function(e){return"A"===e.value}));n.forEach((function(e){!1===e.hidden&&(a+11>21||a+11===21&&n.length>1?a+=1:a+=11)})),t(a)},de=function(){ue.hitDisabled=!0,ue.standDisabled=!0,ue.resetDisabled=!1,ie(Object(r.a)({},ue)),ae(a.bust)},oe=function(){S>M||M>21?(R(Math.round(100*(B+2*U))/100),ae(a.userWin)):M>S?ae(a.dealerWin):(R(Math.round(100*(B+1*U))/100),ae(a.tie))};return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{message:te,balance:B}),s.a.createElement(h,{balance:B,gameState:P,buttonState:ue,betEvent:function(t){X(t),R(Math.round(100*(B-t))/100),V(e.init)},hitEvent:function(){le(t.user)},standEvent:function(){ue.hitDisabled=!0,ue.standDisabled=!0,ue.resetDisabled=!1,ie(Object(r.a)({},ue)),V(e.dealerTurn),w.filter((function(e){return!0===e.hidden&&(e.hidden=!1),e})),x(Object(l.a)(w))},resetEvent:function(){console.clear(),v(u),E([]),N(0),J(0),x([]),K(0),F(0),X(0),V(e.bet),ae(a.bet),ie({hitDisabled:!1,standDisabled:!1,resetDisabled:!0})}}),s.a.createElement(j,{title:"Dealer's Hand (".concat(M,")"),cards:w}),s.a.createElement(j,{title:"Your Hand (".concat(S,")"),cards:_}))};i.a.render(s.a.createElement(S,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.2b66c0a2.chunk.js.map