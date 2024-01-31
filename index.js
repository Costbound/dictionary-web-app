import{a as E}from"./assets/vendor-EtZUBe6p.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(n){if(n.ep)return;n.ep=!0;const l=s(n);fetch(n.href,l)}})();const k={body:document.querySelector("body"),logoUse:document.querySelector(".header__logo use"),loader:document.querySelector(".loader"),inputErrMessage:document.querySelector(".hero__search-input-err"),dayNightCheckbox:document.querySelector(".header__toggle-checkbox"),fontSelectorBackdrop:document.querySelector(".header__font-selector-backdrop"),fontsSelectWindow:document.querySelector(".header__font-selector-list"),fontOpenBtn:document.querySelector(".header__font-selector-open-btn"),selectedFont:document.querySelector(".header__selected-font-para"),form:document.querySelector(".hero__search-form"),resultContainer:document.querySelector(".result__container"),notFound:document.querySelector(".result__not-found-container")},q=t=>new Promise(e=>setTimeout(e,t)),{body:o,logoUse:y,loader:h,inputErrMessage:L,dayNightCheckbox:m,fontSelectorBackdrop:f,fontsSelectWindow:u,fontOpenBtn:$,selectedFont:c,form:_,resultContainer:b,notFound:g}=k;window.matchMedia("(prefers-color-scheme: dark)").matches&&(m.setAttribute("checked",""),o.classList.remove("body_light"),o.classList.add("body_dark"));m.addEventListener("click",x);$.addEventListener("click",p);f.addEventListener("click",p);u.addEventListener("click",M);function x(){m.checked?(o.classList.remove("body_light"),o.classList.add("body_dark")):(o.classList.remove("body_dark"),o.classList.add("body_light"))}function p(){u.classList.contains("header__font-selector-list_open")?(u.classList.remove("header__font-selector-list_open"),f.classList.add("disabled"),window.removeEventListener("scroll",p)):(u.classList.add("header__font-selector-list_open"),f.classList.remove("disabled"),window.addEventListener("scroll",p))}function M(t){const e=t.target;if(e.nodeName==="BUTTON"){const s="body_sans-serif",r="body_serif",n="body_mono";e.classList.contains("header__sans-serif-btn")?(o.classList.add(s),o.classList.remove(r),o.classList.remove(n),c&&(c.textContent="Sans Serif")):e.classList.contains("header__serif-btn")?(o.classList.add(r),o.classList.remove(s),o.classList.remove(n),c&&(c.textContent="Serif")):(o.classList.add(n),o.classList.remove(s),o.classList.remove(r),c&&(c.textContent="Mono"))}}let d;var v;const S=y.getAttribute("href").slice(0,(v=y.getAttribute("href"))==null?void 0:v.indexOf("#"));function O(t){const{word:e,phonetic:s,phonetics:r,meanings:n,sourceUrls:l}=t,i=[];return i.push(A(e,s,C(r))),n.forEach(w=>i.push(N(w))),i.push('<div class="result__end-spliter"></div>'),i.push(F(l)),i.join("")}function C(t){var e;return(e=t.find(s=>{if(s.audio.length>0)return s}))==null?void 0:e.audio}function A(t,e,s){let r="";return s?(r+=`<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__main-title">${t}</h1>
                <p class="result__transcription">${e}</p>
            </div>
            <button class="result__play-btn button" type="button">
                <svg class="result__play-icon">
                    <use href="${S}#icon-play" />
                </svg>
            </button>
        </div>`,d=new Audio(s)):(r+=`<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__main-title">${t}</h1>
                <p class="result__transcription">${e}</p>
            </div>
        </div>`,d=null),r}function N(t){const{partOfSpeech:e,definitions:s,synonyms:r,antonyms:n}=t;let l=`<div class="result__wrapper">
            <div class="result__title-wrapper">
                <h2 class="result__title">${e}</h2>
                <div class="result__spliter"></div>
            </div>
            <h3 class="result__meaning-title">Meaning</h3>
            <ul class="result__list">`;return l+=B(s)+"</ul>",l+=T(r,n),l+"</div>"}function B(t){const e=[];return t.forEach(s=>{s.example?e.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${s.definition}</p>
                <p class="result__example">“${s.example}”</p>
            </li>`):e.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${s.definition}</p>
            </li>`)}),e.join("")}function T(t,e){let s="";return t.length>0&&(s+=`<div class="result__synonyms-wrapper">
            <h3 class="result__synonyms">Synonyms</h3>
            <ul class="result__synonyms-list">`,t.forEach(r=>{s+=`<li class="result__synonyms-item">
                    <p class="result__synonyms-para">${r}</p>
                </li>`}),s+="</ul></div>"),e.length>0&&(s+=`<div class="result__antonyms-wrapper">
            <h3 class="result__antonyms">Antonyms</h3>
            <ul class="result__antonyms-list">`,e.forEach(r=>{s+=`<li class="result__antonyms-item">
                    <p class="result__antonyms-para">${r}</p>
                </li>`}),s+="</ul></div>"),s}function F(t){let e="";return t.length>0&&(e+=`<div class="result__src-wrapper">
            <h2 class="result__src-title">Source</h2>
            <ul class="result__src-list">`,t.forEach(s=>{e+=`<li class="result__src-item">
                    <a class="result__src-link" href="${s}" target="_blank">${s}
                        <svg class="result__src-icon">
                            <use href="${S}#icon-new-window"></use>
                        </svg>
                    </a>
                </li>`})),e}const a=_.elements[0];_==null||_.addEventListener("submit",async t=>{t.preventDefault(),a.value.trim().length>0?(b.innerHTML="",h.classList.remove("disabled"),g.classList.add("disabled"),await P(),h.classList.add("disabled")):(a.classList.add("hero__search-input_error"),L.style.opacity="1",a.value="")});a.addEventListener("input",()=>{a.value.trim().length>0&&(a.classList.remove("hero__search-input_error"),L.style.opacity="")});async function P(){const t=await U(a.value);t?(b.innerHTML=O(t[0]),D(),d&&document.querySelector(".result__play-btn").addEventListener("click",()=>{d==null||d.play()})):g.classList.remove("disabled")}async function U(t){return E(`https://api.dictionaryapi.dev/api/v2/entries/en/${t}`).then(e=>(console.log(e.data),e.data)).catch(e=>console.log(e))}function D(){document.querySelectorAll(".result__synonyms-list").forEach(e=>{e.addEventListener("click",async s=>{const r=s.target;r.nodeName==="P"&&(navigator.clipboard.writeText(r.innerText),r.classList.add("result__copyed"),await q(3e3),r.classList.remove("result__copyed"))})})}
//# sourceMappingURL=index.js.map
