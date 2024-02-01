import{a as E}from"./assets/vendor-EtZUBe6p.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=t(r);fetch(r.href,l)}})();const k={body:document.querySelector("body"),logoUse:document.querySelector(".header__logo use"),loader:document.querySelector(".loader"),inputErrMessage:document.querySelector(".hero__search-input-err"),dayNightCheckbox:document.querySelector(".header__toggle-checkbox"),fontSelectorBackdrop:document.querySelector(".header__font-selector-backdrop"),fontsSelectWindow:document.querySelector(".header__font-selector-list"),fontOpenBtn:document.querySelector(".header__font-selector-open-btn"),selectedFont:document.querySelector(".header__selected-font-para"),form:document.querySelector(".hero__search-form"),resultContainer:document.querySelector(".result__container"),notFound:document.querySelector(".result__not-found-container")},q=s=>new Promise(e=>setTimeout(e,s)),{body:o,logoUse:y,loader:h,inputErrMessage:L,dayNightCheckbox:m,fontSelectorBackdrop:f,fontsSelectWindow:u,fontOpenBtn:$,selectedFont:c,form:_,resultContainer:b,notFound:g}=k;window.matchMedia("(prefers-color-scheme: dark)").matches&&(m.setAttribute("checked",""),o.classList.remove("body_light"),o.classList.add("body_dark"));m.addEventListener("click",x);$.addEventListener("click",p);f.addEventListener("click",p);u.addEventListener("click",M);function x(){m.checked?(o.classList.remove("body_light"),o.classList.add("body_dark")):(o.classList.remove("body_dark"),o.classList.add("body_light"))}function p(){u.classList.contains("header__font-selector-list_open")?(u.classList.remove("header__font-selector-list_open"),f.classList.add("disabled"),window.removeEventListener("scroll",p)):(u.classList.add("header__font-selector-list_open"),f.classList.remove("disabled"),window.addEventListener("scroll",p))}function M(s){const e=s.target;if(e.nodeName==="BUTTON"){const t="body_sans-serif",n="body_serif",r="body_mono";e.classList.contains("header__sans-serif-btn")?(o.classList.add(t),o.classList.remove(n),o.classList.remove(r),c&&(c.textContent="Sans Serif")):e.classList.contains("header__serif-btn")?(o.classList.add(n),o.classList.remove(t),o.classList.remove(r),c&&(c.textContent="Serif")):(o.classList.add(r),o.classList.remove(t),o.classList.remove(n),c&&(c.textContent="Mono"))}}let d;var v;const S=y.getAttribute("href").slice(0,(v=y.getAttribute("href"))==null?void 0:v.indexOf("#"));function O(s){const{word:e,phonetic:t,phonetics:n,meanings:r,sourceUrls:l}=s,i=[];return i.push(A(e,t,C(n))),r.forEach(w=>i.push(N(w))),i.push('<div class="result__end-spliter"></div>'),i.push(F(l)),i.join("")}function C(s){var e;return(e=s.find(t=>{if(t.audio.length>0)return t}))==null?void 0:e.audio}function A(s,e,t){let n="";return t?(n+=`<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__main-title">${s}</h1>
                <p class="result__transcription">${e}</p>
            </div>
            <button class="result__play-btn button" type="button">
                <svg class="result__play-icon">
                    <use href="${S}#icon-play" />
                </svg>
            </button>
        </div>`,d=new Audio(t)):(n+=`<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__main-title">${s}</h1>
                <p class="result__transcription">${e}</p>
            </div>
        </div>`,d=null),n}function N(s){const{partOfSpeech:e,definitions:t,synonyms:n,antonyms:r}=s;let l=`<div class="result__wrapper">
            <div class="result__title-wrapper">
                <h2 class="result__title">${e}</h2>
                <div class="result__spliter"></div>
            </div>
            <h3 class="result__meaning-title">Meaning</h3>
            <ul class="result__list">`;return l+=B(t)+"</ul>",l+=T(n,r),l+"</div>"}function B(s){const e=[];return s.forEach(t=>{t.example?e.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${t.definition}</p>
                <p class="result__example">“${t.example}”</p>
            </li>`):e.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${t.definition}</p>
            </li>`)}),e.join("")}function T(s,e){let t="";return s.length>0&&(t+=`<div class="result__synonyms-wrapper">
            <h3 class="result__synonyms">Synonyms</h3>
            <ul class="result__synonyms-list">`,s.forEach(n=>{t+=`<li class="result__synonyms-item">
                    <p class="result__synonyms-para">${n}</p>
                </li>`}),t+="</ul></div>"),e.length>0&&(t+=`<div class="result__antonyms-wrapper">
            <h3 class="result__antonyms">Antonyms</h3>
            <ul class="result__antonyms-list">`,e.forEach(n=>{t+=`<li class="result__antonyms-item">
                    <p class="result__antonyms-para">${n}</p>
                </li>`}),t+="</ul></div>"),t}function F(s){let e="";return s.length>0&&(e+=`<div class="result__src-wrapper">
            <h2 class="result__src-title">Source</h2>
            <ul class="result__src-list">`,s.forEach(t=>{e+=`<li class="result__src-item">
                    <a class="result__src-link" href="${t}" target="_blank">${t}
                        <svg class="result__src-icon">
                            <use href="${S}#icon-new-window"></use>
                        </svg>
                    </a>
                </li>`})),e}const a=_.elements[0];_==null||_.addEventListener("submit",async s=>{s.preventDefault(),a.value.trim().length>0?(b.innerHTML="",h.classList.remove("disabled"),g.classList.add("disabled"),await P(),h.classList.add("disabled")):(a.classList.add("hero__search-input_error"),L.style.opacity="1",a.value="")});a.addEventListener("input",()=>{a.value.trim().length>0&&(a.classList.remove("hero__search-input_error"),L.style.opacity="")});async function P(){const s=await U(a.value);s?(b.innerHTML=O(s[0]),D(),d&&document.querySelector(".result__play-btn").addEventListener("click",()=>{d==null||d.play()})):g.classList.remove("disabled")}async function U(s){return E(`https://api.dictionaryapi.dev/api/v2/entries/en/${s}`).then(e=>(console.log(e.data),e.data)).catch(e=>console.log(e))}function D(){document.querySelectorAll(".result__synonyms-list").forEach(e=>{const t=async n=>{const r=n.target;r.nodeName==="P"&&(e.removeEventListener("click",t),navigator.clipboard.writeText(r.innerText),r.classList.add("result__copyed"),await q(1500),r.classList.remove("result__copyed"),e.addEventListener("click",t))};e.addEventListener("click",t)})}
//# sourceMappingURL=index.js.map
