parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
"use strict";function e(e){var n;function t(){e.modal.classList.remove("is-hidden"),document.body.classList.add("modal-open"),e.closeBtn.addEventListener("click",d),e.modal.addEventListener("click",o),document.addEventListener("keydown",c)}function d(){e.modal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),e.closeBtn.removeEventListener("click",d),e.modal.removeEventListener("click",o),document.removeEventListener("keydown",c)}function o(n){n.target===e.modal&&d()}function c(e){"Escape"===e.code&&d()}e.openBtn.addEventListener("click",t),null===(n=e.openBtnMobileMenu)||void 0===n||n.addEventListener("click",t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=e;
},{}],"FZVO":[function(require,module,exports) {
"use strict";var e=o(require("./modal"));function o(e){return e&&e.__esModule?e:{default:e}}const t={modal:document.querySelector('[data-modal="icecream"]'),openBtn:document.querySelector('[data-modal-open="icecream"]'),closeBtn:document.querySelector('[data-modal-close="icecream"]')};(0,e.default)(t);
},{"./modal":"RSqK"}]},{},["FZVO"], null)
//# sourceMappingURL=/team-project-html-css/modal-icecream.2ecd5e68.js.map