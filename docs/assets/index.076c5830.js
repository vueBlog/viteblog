import{c as $,a as O,b as V,u as k,d as H,E as h,e as L,f as N,r as j,g as w,h as R,o as b,i as T,j as _,w as p,k as u,l as g,t as y,s as I,m as C,n as D,p as q,q as B,v as M,x as z,y as S,z as U,A as W}from"./vendor.4a4da732.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}};F();const K=$({state(){return{logoText:"\u6A0A\u5C0F\u4E66\u751F",logoDescription:"\u6A0A\u5C0F\u4E66\u751F\u7684\u535A\u5BA2\uFF0C\u591A\u770B\u4EE3\u7801\uFF0C\u591A\u770B\u4E66\uFF0C\u4ED8\u51FA\u603B\u4F1A\u6709\u6536\u83B7\u7684"}},getters:{},mutations:{},actions:{}}),G="modulepreload",A={},J="/viteblog/",x=function(s,l){return!l||l.length===0?s():Promise.all(l.map(r=>{if(r=`${J}${r}`,r in A)return;A[r]=!0;const e=r.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":G,e||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),e)return new Promise((d,n)=>{a.addEventListener("load",d),a.addEventListener("error",n)})})).then(()=>s())},Q=()=>x(()=>import("./pageHome.a4630efc.js"),["assets/pageHome.a4630efc.js","assets/vendor.4a4da732.js","assets/vendor.5b66530f.css"]),X=()=>x(()=>import("./pageList.3c357b01.js"),["assets/pageList.3c357b01.js","assets/vendor.4a4da732.js","assets/vendor.5b66530f.css"]),Y=()=>x(()=>import("./pageAbout.ca262354.js"),["assets/pageAbout.ca262354.js","assets/vendor.4a4da732.js","assets/vendor.5b66530f.css"]),Z=O({history:V(),routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:Q},{path:"/list",name:"list",component:X},{path:"/about",name:"about",component:Y}]});var ee="/viteblog/assets/logo.9baf4cac.jpg";const{isLoading:v}=k();let te={baseURL:"https://www.fxss.work/api/vue-blog",timeout:60*1e3};const E=H.create(te);E.interceptors.request.use(t=>(v.value=!v.value,t),t=>(h({message:"\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u91CD\u8BD5",type:"error",offset:80}),Promise.reject(t)));E.interceptors.response.use(t=>{if(v.value=!v.value,t.status===200||t.data.isok)return t.data;if(t.data.msg){let s=t.data.msg?t.data.msg:"\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u91CD\u8BD5";h({message:s,type:"error",offset:80})}else h({message:t.data.error,type:"error",offset:80});return t},t=>(h({message:"\u7F51\u7EDC\u51FA\u9519\uFF0C\u8BF7\u91CD\u8BD5",type:"error",offset:80}),Promise.reject(t)));const oe=(t={})=>E("/search",{method:"POST",data:t});var se=(t,s)=>{const l=t.__vccOpts||t;for(const[r,e]of s)l[r]=e;return l};const re={class:"header clearfix"},ae=["src"],ne={class:"logo-text"},ce={class:"fr clearfix"},le={class:"option-item-box"},ie={class:"name ellipsis"},ue={class:"content ellipsis"},de={setup(t){const s=L(),r=N().state.logoText,e=j("");async function o(n,c){var f;if(!n.length)return;const i=await oe({queryString:n});c(((f=i==null?void 0:i.data)==null?void 0:f.searchList)||[])}function a(n){[0,7].includes(n.type)?s.push(`/detail/${n.articleId}`):[1,2,3,4,5,6].includes(n.type)&&s.push(`/detail/${n.articleId}#${n[`h${n.type}`]}`)}function d(n){let c;switch(n){case 0:c="\u6587\u7AE0\u6807\u9898";break;case 1:c="\u4E00\u7EA7\u6807\u9898";break;case 2:c="\u4E8C\u7EA7\u6807\u9898";break;case 3:c="\u4E09\u7EA7\u6807\u9898";break;case 4:c="\u56DB\u7EA7\u6807\u9898";break;case 5:c="\u4E94\u7EA7\u6807\u9898";break;case 6:c="\u516D\u7EA7\u6807\u9898";break;case 7:c="\u5173\u952E\u8BCD";break}return c}return(n,c)=>{const i=w("router-link"),f=R;return b(),T("div",re,[_(i,{to:"/",class:"logo-box fl"},{default:p(()=>[u("img",{class:"logo",src:g(ee),alt:"logo"},null,8,ae),u("div",ne,y(g(r)),1)]),_:1}),u("div",ce,[_(f,{modelValue:e.value,"onUpdate:modelValue":c[0]||(c[0]=m=>e.value=m),class:"search-box fl","fetch-suggestions":o,placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",clearable:"",size:"default","prefix-icon":g(I),"popper-class":"autocomplete-popper",onSelect:a},{default:p(({item:m})=>[u("div",le,[u("div",ie,y(d(m.type)),1),u("div",ue,y(m.articleTitle),1)])]),_:1},8,["modelValue","prefix-icon"])])])}}};var _e=se(de,[["__scopeId","data-v-17cdebbb"]]);const pe={setup(t){const s=L(),l=C(),r=D(()=>!/\/editor\/?\d*/.test(l.path));q(()=>{});const{isLoading:e}=k();return s.beforeEach((o,a)=>(e.value=!e.value,!0)),s.afterEach((o,a)=>{e.value=!e.value}),(o,a)=>{const d=B,n=w("router-view"),c=M,i=z;return b(),S(i,null,{default:p(()=>[g(r)?(b(),S(d,{key:0,class:"header-box"},{default:p(()=>[_(_e)]),_:1})):U("",!0),_(c,null,{default:p(()=>[_(n)]),_:1})]),_:1})}}},P=W(pe);P.use(Z);P.use(K);P.mount("#app");export{se as _};