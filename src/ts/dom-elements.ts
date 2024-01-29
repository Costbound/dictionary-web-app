interface DomObj {
    body: HTMLBodyElement
    dayNightCheckbox: HTMLInputElement
    fontSelectorBackdrop: HTMLDivElement
    fontsSelectWindow: HTMLUListElement
    fontOpenBtn: HTMLButtonElement
    selectedFont: HTMLParagraphElement
    form: HTMLFormElement
    resultContainer: HTMLDivElement
}
const domElems:DomObj = {
    body: document.querySelector("body")!,
    // Theme selector
    dayNightCheckbox: document.querySelector(".header__toggle-checkbox")!,
    // Font selector
    fontSelectorBackdrop: document.querySelector(".header__font-selector-backdrop")!,
    fontsSelectWindow: document.querySelector(".header__font-selector-list")!,
    fontOpenBtn: document.querySelector(".header__font-selector-open-btn")!,
    selectedFont: document.querySelector(".header__selected-font-para")!,
    // Form
    form: document.querySelector(".hero__search-form")!,
    // Result
    resultContainer: document.querySelector(".result__container")!,
}

export const delay = (ms: number) => { return new Promise(resolve => setTimeout(resolve, ms)) }

export const {
    body,
    dayNightCheckbox,
    fontSelectorBackdrop,
    fontsSelectWindow,
    fontOpenBtn,
    selectedFont,
    form,
    resultContainer,
} = domElems