function e(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequire0744;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){n[e]=r},r.parcelRequire0744=o),o.register("hKhGL",(function(r,t){var n,o;e(r.exports,"register",(()=>n),(e=>n=e)),e(r.exports,"resolve",(()=>o),(e=>o=e));var i={};n=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)i[r[t]]=e[r[t]]},o=function(e){var r=i[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),o("hKhGL").register(JSON.parse('{"bXWrd":"index.74c5f855.js","ldIiS":"worker.ec2bb713.js"}'));const i=document.querySelector("#app"),{width:l,height:f}=i;var s,a;a=function(e,r,t){if(r===self.location.origin)return e;var n=t?"import "+JSON.stringify(e)+";":"importScripts("+JSON.stringify(e)+");";return URL.createObjectURL(new Blob([n],{type:"application/javascript"}))};let d=new URL(o("hKhGL").resolve("ldIiS"),import.meta.url);s=a(d.toString(),d.origin,!0);const u=new Worker(s),c=i.transferControlToOffscreen();u.postMessage({width:l,height:f,view:c,backgroundColor:1087931},[c]);
//# sourceMappingURL=index.74c5f855.js.map
