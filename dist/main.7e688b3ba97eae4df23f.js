!function(e){function t(t){for(var r,u,a=t[0],c=t[1],l=t[2],f=0,d=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={2:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=c;i.push([122,0,3]),n()}({122:function(e,t,n){n(123),e.exports=n(314)},309:function(e,t){console.log("Second module")},310:function(e,t,n){},311:function(e,t,n){},312:function(e,t){},314:function(e,t,n){"use strict";function r(e){return e.length>=10}function o(e,t){var n=document.createElement("div");n.classList.add("modal");var r="\n    <h1>".concat(e,'</h1>\n    <div class="modal-content">').concat(t,"</div>\n    ");n.innerHTML=r,mui.overlay("on",n)}n.r(t),console.log("First module");n(309);n(310),n(121),n(311),n(312);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,n=null,r=[{key:"create",value:function(t){return fetch("https://questions-app-js-e710e.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return t.id=e.name,t})).then(s).then(e.renderList)}},{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return e?fetch("https://questions-app-js-e710e.firebaseio.com/questions.json?auth=".concat(e)).then((function(e){return e.json()})).then((function(e){return respose&&e.error?'<p class="error">'.concat(e.error,"</p>"):e?Object.keys(e).map((function(t){return u(u({},e[t]),{},{id:t})})):[]})):Promise.resolve('<p class="error">You do not have a token</p>')}))},{key:"renderList",value:function(){var e=f(),t=e.length?e.map(d).join(""):'<div class="mui--text-headline">You do not have questions</div>';document.getElementById("list").innerHTML=t}},{key:"listToHTML",value:function(e){return e.length?"<ol>".concat(e.map((function(e){return"<li>".concat(e.text,"</li>")})).join(""),"</ol>"):"<p>There is no questions</p>"}}],n&&c(t.prototype,n),r&&c(t,r),e}();function s(e){var t=f();t.push(e),localStorage.setItem("questions",JSON.stringify(t))}function f(){return JSON.parse(localStorage.getItem("questions")||"[]")}function d(e){return'\n    <div class="mui--text-black-54">\n        '.concat(new Date(e.date).toLocaleDateString(),"\n        ").concat(new Date(e.date).toLocaleTimeString(),"\n    </div>\n    <div>\n        ").concat(e.text,"\n    </div>\n    ")}var p=document.getElementById("form"),m=p.querySelector("#question-input"),b=p.querySelector("#submit"),v=document.getElementById("modal-btn");function y(e){e.preventDefault();var t=e.target.querySelector("button"),n=e.target.querySelector("#email").value,r=e.target.querySelector("#password").value;t.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyB0nR-zSPSYhNWdx3J3nGE9u_7F5nq34xk"),{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),header:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.idToken}))}(n,r).then((function(e){return l.fetch(e)})).then(h).then((function(){return t.disabled=!1}))}function h(e){"string"==typeof e?o("Error",e):o("List of questions",l.listToHTML(e))}window.addEventListener("load",l.renderList),p.addEventListener("submit",(function(e){if(e.preventDefault(),r(m.value)){var t={text:m.value.trim(),date:(new Date).toJSON()};b.disabled=!0,l.create(t).then((function(){m.value="",m.className="",b.disabled=!1})),console.log("question",t)}})),v.addEventListener("click",(function(){o("Autorization",'\n    <form class="mui-form" id="auth-form">\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="email" id="email" required>\n            <label for="email">Email</label>\n        </div>\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="password" id="password" required>\n            <label for="password">Password</label>\n        </div>\n        <button \n            type="submit" \n            class="mui-btn mui-btn--raised mui-btn--primary"\n            >\n            Log in\n        </button>\n    </form>\n    '),document.getElementById("auth-form").addEventListener("submit",y,{once:!0})})),m.addEventListener("input",(function(){b.disabled=!r(m.value)}))}});