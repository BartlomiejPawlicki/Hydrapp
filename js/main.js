!function(e){var n={};function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,n,c){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(c,t,function(n){return e[n]}.bind(null,t));return c},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n    window.addEventListener('load', function() {\r\n        navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\r\n            // Registration was successful\r\n            console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n        }, function(err) {\r\n            // registration failed :(\r\n            console.log('ServiceWorker registration failed: ', err);\r\n        });\r\n    });\r\n}\r\n\r\n// place your code below\r\n\r\n\r\nconsole.log(`Hello world!`);\r\n\r\n\r\nconst plus = document.querySelector('.hydrapp__add--js');\r\nconst remove = document.querySelector('.hydrapp__delete--js');\r\nconst number = document.querySelector('.hydrapp__counter--js');\r\nconst key = new Date().toISOString().slice(0, 10)\r\nif (!localStorage.getItem(key)) {\r\n    localStorage.setItem(key, 0)\r\n    number.innerHTML = '0'\r\n} else {\r\n    number.innerHTML = localStorage.getItem(key)\r\n}\r\n\r\n\r\nplus.addEventListener('click', (e) => {\r\n    localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1)\r\n    number.innerHTML = localStorage.getItem(key)\r\n\r\n})\r\n\r\n\r\nremove.addEventListener('click', (e) => {\r\n    const currentValue = parseInt(number.innerHTML);\r\n    if (currentValue > 0) {\r\n        number.innerHTML = currentValue - 1; {\r\n            localStorage.setItem(key, localStorage.getItem(key) - 1)\r\n        }\r\n        number.innerHTML = localStorage.getItem(key);\r\n    }\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcclxuXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNld29ya2VyLmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcclxuICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIC8vIHJlZ2lzdHJhdGlvbiBmYWlsZWQgOihcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgcmVnaXN0cmF0aW9uIGZhaWxlZDogJywgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBwbGFjZSB5b3VyIGNvZGUgYmVsb3dcclxuXHJcblxyXG5jb25zb2xlLmxvZyhgSGVsbG8gd29ybGQhYCk7XHJcblxyXG5cclxuY29uc3QgcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeWRyYXBwX19hZGQtLWpzJyk7XHJcbmNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeWRyYXBwX19kZWxldGUtLWpzJyk7XHJcbmNvbnN0IG51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oeWRyYXBwX19jb3VudGVyLS1qcycpO1xyXG5jb25zdCBrZXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXHJcbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAwKVxyXG4gICAgbnVtYmVyLmlubmVySFRNTCA9ICcwJ1xyXG59IGVsc2Uge1xyXG4gICAgbnVtYmVyLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcclxufVxyXG5cclxuXHJcbnBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSArIDEpXHJcbiAgICBudW1iZXIuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxyXG5cclxufSlcclxuXHJcblxyXG5yZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gcGFyc2VJbnQobnVtYmVyLmlubmVySFRNTCk7XHJcbiAgICBpZiAoY3VycmVudFZhbHVlID4gMCkge1xyXG4gICAgICAgIG51bWJlci5pbm5lckhUTUwgPSBjdXJyZW50VmFsdWUgLSAxOyB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG51bWJlci5pbm5lckhUTUwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgfVxyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);