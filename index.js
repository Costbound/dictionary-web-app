import{a as h}from"./assets/vendor-EtZUBe6p.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const y={body:document.querySelector("body"),dayNightCheckbox:document.querySelector(".header__toggle-checkbox"),fontSelectorBackdrop:document.querySelector(".header__font-selector-backdrop"),fontsSelectWindow:document.querySelector(".header__font-selector-list"),fontOpenBtn:document.querySelector(".header__font-selector-open-btn"),selectedFont:document.querySelector(".header__selected-font-para"),form:document.querySelector(".hero__search-form"),resultContainer:document.querySelector(".result__container")},{body:i,dayNightCheckbox:f,fontSelectorBackdrop:p,fontsSelectWindow:d,fontOpenBtn:v,selectedFont:a,form:u,resultContainer:b}=y;f.addEventListener("click",g);v.addEventListener("click",_);p.addEventListener("click",_);d.addEventListener("click",L);function g(){f.checked?(i.classList.remove("body_light"),i.classList.add("body_dark")):(i.classList.remove("body_dark"),i.classList.add("body_light"))}function _(){d.classList.contains("header__font-selector-list_open")?(d.classList.remove("header__font-selector-list_open"),p.classList.add("disabled"),window.removeEventListener("scroll",_)):(d.classList.add("header__font-selector-list_open"),p.classList.remove("disabled"),window.addEventListener("scroll",_))}function L(t){const e=t.target;if(e.nodeName==="BUTTON"){const s="body_sans-serif",l="body_serif",r="body_mono";e.classList.contains("header__sans-serif-btn")?(i.classList.add(s),i.classList.remove(l),i.classList.remove(r),a&&(a.textContent="Sans Serif")):e.classList.contains("header__serif-btn")?(i.classList.add(l),i.classList.remove(s),i.classList.remove(r),a&&(a.textContent="Serif")):(i.classList.add(r),i.classList.remove(s),i.classList.remove(l),a&&(a.textContent="Mono"))}}let c;function S(t){const{word:e,phonetic:s,phonetics:l,meanings:r,sourceUrls:n}=t,o=[];return o.push(E(e,s,w(l))),r.forEach(m=>o.push($(m))),o.push('<div class="result__end-spliter"></div>'),o.push(q(n)),o.join("")}function w(t){var e;return(e=t.find(s=>{if(s.audio.length>0)return s}))==null?void 0:e.audio}function E(t,e,s){let l="";return s?(l+=`<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__main-title">${t}</h1>
                <p class="result__transcription">${e}</p>
            </div>
            <button class="result__play-btn button" type="button">
                <svg class="result__play-icon">
                    <use href="./assets/images/sprite.svg#icon-play" />
                </svg>
            </button>
            <audio class="result__audio" src="" preload="metadata"></audio>
        </div>`,c=new Audio(s)):l+=`<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__title">${t}</h1>
                <p class="result__transcription">${e}</p>
            </div>
        </div>`,l}function $(t){const{partOfSpeech:e,definitions:s,synonyms:l,antonyms:r}=t;let n=`<div class="result__wrapper">
            <div class="result__title-wrapper">
                <h2 class="result__title">${e}</h2>
                <div class="result__spliter"></div>
            </div>
            <h3 class="result__meaning-title">Meaning</h3>
            <ul class="result__list">`;return n+=k(s)+"</ul>",n+=O(l,r),n+"</div>"}function k(t){const e=[];return t.forEach(s=>{s.example?e.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${s.definition}</p>
                <p class="result__example">“${s.example}”</p>
            </li>`):e.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${s.definition}</p>
            </li>`)}),e.join("")}function O(t,e){let s="";return t.length>0&&(s+=`<div class="result__synonyms-wrapper">
            <h3 class="result__synonyms">Synonyms</h3>
            <ul class="result__synonyms-list">`,t.forEach(l=>{s+=`<li class="result__synonyms-item">
                    <p class="result__synonyms-para">${l}</p>
                </li>`}),s+="</ul></div>"),e.length>0&&(s+=`<div class="result__antonyms-wrapper">
            <h3 class="result__antonyms">Antonyms</h3>
            <ul class="result__antonyms-list">`,e.forEach(l=>{s+=`<li class="result__antonyms-item">
                    <p class="result__antonyms-para">${l}</p>
                </li>`}),s+="</ul></div>"),s}function q(t){let e="";return t.length>0&&(e+=`<div class="result__src-wrapper">
            <h2 class="result__src-title">Source</h2>
            <ul class="result__src-list">`,t.forEach(s=>{e+=`<li class="result__src-item">
                    <a class="result__src-link" href="${s}">${s}
                        <svg class="result__src-icon">
                            <use href="./assets/images/sprite.svg#icon-new-window"></use>
                        </svg>
                    </a>
                </li>`})),e}u==null||u.addEventListener("submit",async t=>{t.preventDefault();const e=u.elements[0],s=await x(e.value);s&&(b.innerHTML=S(s[0])),c&&document.querySelector(".result__play-btn").addEventListener("click",()=>{c==null||c.play()})});async function x(t){return h(`https://api.dictionaryapi.dev/api/v2/entries/en/${t}`).then(e=>(console.log(e.data),e.data)).catch(e=>console.log(e))}
//# sourceMappingURL=index.js.map
