var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const l=document.querySelector(".form"),u={firstDelay:document.querySelector('[name="delay"]'),stepDelay:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]')};function i(e,t){const n=Math.random()>.3;new Promise(((e,o)=>{setTimeout((()=>{n?e():o()}),t)})).then((()=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((()=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}l.addEventListener("submit",(function(e){e.preventDefault();let t=Number(u.firstDelay.value),n=Number(u.stepDelay.value),o=Number(u.amount.value);for(let e=1;e<=o;e++)i(e,t),t+=n}));
//# sourceMappingURL=03-promises.13d4807b.js.map
