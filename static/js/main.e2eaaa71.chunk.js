(this["webpackJsonptint-shade-generator"]=this["webpackJsonptint-shade-generator"]||[]).push([[0],{29:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(8),a=n.n(s),i=(n(29),n(3));var o=function(){return Object(i.jsx)("header",{className:"font-bold uppercase text-2xl w-screen",children:Object(i.jsxs)("div",{className:"flex flex-wrap justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-min-0 text-4xl text-center p-8",children:[Object(i.jsx)("span",{className:"bg-min-0 text-min-9 rounded px-3 py-1 mx-4 my-3",children:"Tint"}),"&",Object(i.jsx)("span",{className:"bg-min-9 text-min-0 rounded px-3 py-1 mx-4 my-2",children:"Shade"}),"Generator"]})})},l=n(19),d=n.n(l),u=n(20),j=n.n(u);var b=function(e){return Object(i.jsx)(r.a.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"aspect-w-1 aspect-h-1",style:{background:e.color},children:Object(i.jsxs)("button",{className:"opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer text-white",onClick:function(){return function(){var t=document.getElementById(e.id).innerHTML,n=document.getElementById("".concat(e.id,"-copy")),c=document.getElementById("".concat(e.id,"-check"));n.classList.toggle("hidden"),c.classList.toggle("hidden"),setTimeout((function(){n.classList.toggle("hidden"),c.classList.toggle("hidden")}),1e3),navigator.clipboard.writeText("#".concat(t))}()},children:[Object(i.jsx)("span",{id:"".concat(e.id,"-copy"),children:Object(i.jsx)(d.a,{})}),Object(i.jsx)("span",{id:"".concat(e.id,"-check"),className:"hidden",children:Object(i.jsx)(j.a,{})})]})}),Object(i.jsx)("div",{id:e.id,className:"text-xs text-center uppercase py-4 ",children:e.code})]})})},x=n(4),h=function(e){return{type:"GET_COLOR",payload:e}};n(23);var m=function(){var e=Object(x.c)((function(e){return e.color})),t=Object(x.c)((function(e){return e.palette})),s=Object(x.b)(),a=function(e){for(var t=n(14),c=[],r=[],s=e.slice(1),a=t.hex.hsl(e),i=a[0],o=a[1],l=a[2],d=(100-l)/5,u=0,j=l+d;u<4;u++,j+=d)c.push([i,o,j]);for(var b=l/5,x=0,h=l-b;x<4;x++,h-=b)r.push([i,o,h]);var m=c.map((function(e){return t.hsl.hex(e)})).reverse(),p=r.map((function(e){return t.hsl.hex(e)}));return m.concat(s).concat(p)}(e).map((function(e){return"#"+e}));return Object(c.useEffect)((function(){s({type:"SET_TINTS_AND_SHADES",payload:a})}),[e,s,a]),Object(i.jsxs)(r.a.Fragment,{children:[a.map((function(e,t){return Object(i.jsx)(b,{id:"".concat(e,"-").concat(t),color:e,code:"".concat(e.slice(1))},t)})),Object(i.jsxs)("section",{className:"w-screen text-center bg-white p-8",children:[Object(i.jsx)("h2",{className:"font-bold text-2xl uppercase p-4",children:"Generated Hex List From Tints to Shades"}),Object(i.jsx)("ul",{children:t.map((function(e,t){return Object(i.jsx)("li",{className:"uppercase font-mono",children:e},t)}))})]})]})};var p=function(e){return Object(i.jsxs)("div",{className:"grid grid-cols-12 justify-center items-stretch bg-white rounded m-2",children:[Object(i.jsx)("div",{className:"col-span-2 py-4 flex justify-center items-center bg-min-1 h-full",children:e.icon}),Object(i.jsx)("div",{className:"col-span-4 py-4 flex justify-center items-center bg-min-0 h-full",children:e.name}),Object(i.jsx)("div",{className:"col-span-6 bg-min-5 aspect-w-4 lg:aspect-w-3 aspect-h-1 flex justify-center items-center",children:e.node})]})},O=n(12),f=n(22);function g(e){var t=Object(x.b)();return Object(i.jsx)("div",{className:"bg-min-9 w-full h-full flex justify-center items-center text-white text-2xl cursor-pointer",onClick:function(){return t(h(function(){var e=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},t=n(14),c=e(0,360),r=e(10,40),s=e(40,80);return"#".concat(t.hsl.hex(c,r,s))}()))},children:Object(i.jsx)("span",{className:"animate-bounce",children:Object(i.jsx)(f.a,{})})})}function v(e){var t=Object(x.c)((function(e){return e.color})),n=Object(x.b)();return Object(i.jsx)("input",{name:"picker",type:"color",value:t,onChange:function(e){return n(h(e.target.value))},style:{background:"".concat(t)},className:"w-full h-full"})}function y(e){var t=Object(x.c)((function(e){return e.color})),n=Object(x.b)();return Object(i.jsx)("input",{name:"color-picker-2",type:"text",value:t,onChange:function(e){return n(h(e.target.value))},className:"border-2 border-gray-300 text-gray-600 uppercase focus:outline-none px-4"})}var N=function(){return Object(i.jsx)(r.a.Fragment,{children:Object(i.jsxs)("section",{className:"grid grid-cols-1 lg:grid-cols-3 my-8",children:[Object(i.jsx)(p,{icon:Object(i.jsx)(O.a,{}),name:"Random",node:Object(i.jsx)(g,{})}),Object(i.jsx)(p,{icon:Object(i.jsx)(O.b,{}),name:"Picker",node:Object(i.jsx)(v,{})}),Object(i.jsx)(p,{icon:Object(i.jsx)(O.c,{}),name:"Hex",node:Object(i.jsx)(y,{})})]})})};var w=function(){return Object(i.jsxs)("main",{className:"grid grid-cols-12",children:[Object(i.jsx)("div",{className:"col-span-12",children:Object(i.jsx)(N,{})}),Object(i.jsx)("div",{className:"col-span-12 grid grid-cols-3 md:grid-cols-9",children:Object(i.jsx)(m,{})})]})};var _=function(){return Object(i.jsxs)(r.a.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(w,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,58)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},T=n(11),S=Object(T.a)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#82B4C4",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_COLOR":return""===t.payload?"#":t.payload;default:return e}},palette:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TINTS_AND_SHADES":return t.payload;default:return e}}}),k=Object(T.b)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(i.jsx)(x.a,{store:k,children:Object(i.jsx)(_,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),E()}},[[46,1,2]]]);
//# sourceMappingURL=main.e2eaaa71.chunk.js.map