(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},8510:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),c=(n(906),n(8766));function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,o.useEffect)((function(){var e=document.querySelector("#jss-server-side");e&&e.parentElement.removeChild(e)}),[]),(0,r.jsx)(c.g,{children:(0,r.jsx)(t,u({},n))})}},8766:function(e,t,n){"use strict";n.d(t,{y:function(){return a},g:function(){return p}});var r=n(5893),o=n(7294),c=n(1955);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}var a=(0,o.createContext)(),f={darkMode:"ON"===c.Z.get("darkMode")};function s(e,t){switch(t.type){case"DARK_MODE_ON":return u({},e,{darkMode:!0});case"DARK_MODE_OFF":return u({},e,{darkMode:!1})}}function p(e){var t=(0,o.useReducer)(s,f),n={state:t[0],dispatch:t[1]};return(0,r.jsx)(a.Provider,{value:n,children:e.children})}},906:function(){},1955:function(e,t){"use strict";function n(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var r=function e(t,r){function o(e,o,c){if("undefined"!==typeof document){"number"===typeof(c=n({},r,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var u in c)c[u]&&(i+="; "+u,!0!==c[u]&&(i+="="+c[u].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+i}}return Object.create({set:o,get:function(e){if("undefined"!==typeof document&&(!arguments.length||e)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var c=n[o].split("="),i=c.slice(1).join("=");try{var u=decodeURIComponent(c[0]);if(r[u]=t.read(i,u),e===u)break}catch(a){}}return e?r[e]:r}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});t.Z=r}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);