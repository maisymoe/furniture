(()=>{var c=Object.defineProperty;var f=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var m=(o,e)=>{for(var t in e)c(o,t,{get:e[t],enumerable:!0})},A=(o,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of l(e))!p.call(o,n)&&n!==t&&c(o,n,{get:()=>e[n],enumerable:!(r=f(e,n))||r.enumerable});return o};var P=o=>A(c({},"__esModule",{value:!0}),o);var u={};m(u,{onUnload:()=>a});var i=o=>!![...o].some(e=>917504<e.codePointAt(0)&&e.codePointAt(0)<917631),s=o=>[...o].map(e=>917504<e.codePointAt(0)&&e.codePointAt(0)<917631?String.fromCodePoint(e.codePointAt(0)-917504):e).join("");var{flux:g}=shelter,d=/\[(\#[0-9a-fA-F]{6})\s*,\s*(\#[0-9a-fA-F]{6})\]/,x=new RegExp(d,"g"),a=g.intercept(o=>{if(o.type==="USER_PROFILE_FETCH_SUCCESS")try{if(!i(o.user_profile.bio))return;let t=s(o.user_profile.bio).match(d);if(!t)return;t.shift(),o.user_profile.theme_colors=t.map(r=>parseInt("0x"+r.slice(1))),o.premium_type=2,o.bio.replaceAll(x,"")}catch{}});return P(u);})();
