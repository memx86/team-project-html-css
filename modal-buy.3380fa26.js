parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
"use strict";function e(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;class s{constructor(s){var t;e(this,"onModalOpenBtnClick",()=>{this.openModal(),this.refs.closeBtn.addEventListener("click",this.closeModal),this.refs.modal.addEventListener("click",this.onBackdropClick),document.addEventListener("keydown",this.onEscDown)}),e(this,"openModal",()=>{this.refs.modal.classList.remove("is-hidden"),document.body.classList.add("modal-open")}),e(this,"closeModal",()=>{this.refs.modal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),this.refs.closeBtn.removeEventListener("click",this.closeModal),this.refs.modal.removeEventListener("click",this.onBackdropClick),document.removeEventListener("keydown",this.onEscDown)}),e(this,"onBackdropClick",e=>{e.target===this.refs.modal&&this.closeModal()}),e(this,"onEscDown",e=>{"Escape"===e.code&&this.closeModal()}),this.refs=s,this.refs.openBtn.addEventListener("click",this.onModalOpenBtnClick),null===(t=this.refs.openBtnSecond)||void 0===t||t.addEventListener("click",this.onModalOpenBtnClick)}}exports.default=s;
},{}],"xpBE":[function(require,module,exports) {
"use strict";var e=o(require("./modal"));function o(e){return e&&e.__esModule?e:{default:e}}const t={modal:document.querySelector('[data-modal="buy"]'),openBtn:document.querySelector('[data-modal-open="buy"]'),openBtnSecond:document.querySelector('[data-modal-open="buy-mobile-menu"]'),closeBtn:document.querySelector('[data-modal-close="buy"]')},u=new e.default(t);
},{"./modal":"RSqK"}]},{},["xpBE"], null)
//# sourceMappingURL=/team-project-html-css/modal-buy.3380fa26.js.map