(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(2),a=c.n(i),r=(c(11),c(6)),o=c(3),j=c(1),l=function(e){switch(e.player){case"X":return Object(j.jsx)(o.c,{className:"icon"});case"O":return Object(j.jsx)(o.b,{className:"icon"});default:return Object(j.jsx)(o.a,{className:"icon"})}},u=(c(13),c(4)),b=(c(14),new Array(9).fill("empty")),d=(b.indexOf("empty"),function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(r.a)(i,2),o=a[0],d=a[1],m=function(e){return"empty"!==b[e]?Object(u.b)("Filled Place",{type:"error"}):(b[e]=c?"X":"O",s(!c),b.indexOf("empty")<0&&d("DRAW!"),o?Object(u.b)(o,{type:"success"}):void(b[0]===b[1]&&b[1]===b[2]&&"empty"!==b[0]?d("".concat(b[0]," Wins !")):b[3]===b[4]&&b[4]===b[5]&&"empty"!==b[3]?d("".concat(b[3]," Wins !")):b[6]===b[7]&&b[7]===b[8]&&"empty"!==b[6]?d("".concat(b[6]," Wins !")):b[0]===b[3]&&b[3]===b[6]&&"empty"!==b[0]?d("".concat(b[0]," Wins !")):b[1]===b[4]&&b[4]===b[7]&&"empty"!==b[1]?d("".concat(b[1]," Wins !")):b[2]===b[5]&&b[5]===b[8]&&"empty"!==b[2]?d("".concat(b[2]," Wins !")):b[0]===b[4]&&b[4]===b[8]&&"empty"!==b[0]?d("".concat(b[0]," Wins !")):b[2]===b[4]&&b[4]===b[6]&&"empty"!==b[2]&&d("".concat(b[2]," Wins !"))))};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u.a,{position:"top-left"}),Object(j.jsx)("div",{children:o?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"turnMsg",children:o}),Object(j.jsx)("button",{className:"reloadBtn",onClick:function(){s(!1),d(""),b.fill("empty",0,9)},children:"Reset Game"})]}):Object(j.jsxs)("h1",{className:"turnMsg",children:[c?"X":"O","'s Turn"]})}),Object(j.jsx)("div",{className:"grid",children:b.map((function(e,t){return Object(j.jsx)("div",{onClick:function(){return m(t)},className:"iconContanier",children:Object(j.jsx)(l,{player:e})})}))})]})}),m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.dd0218a8.chunk.js.map