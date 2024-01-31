interface DomObj {
    body: HTMLBodyElement
    logoUse: SVGUseElement
    loader: HTMLDivElement
    inputErrMessage: HTMLParagraphElement
    dayNightCheckbox: HTMLInputElement
    fontSelectorBackdrop: HTMLDivElement
    fontsSelectWindow: HTMLUListElement
    fontOpenBtn: HTMLButtonElement
    selectedFont: HTMLParagraphElement
    form: HTMLFormElement
    resultContainer: HTMLDivElement
    notFound: HTMLDivElement
}
const domElems:DomObj = {
    body: document.querySelector("body")!,
    logoUse: document.querySelector(".header__logo use")!,
    loader: document.querySelector(".loader")!,
    inputErrMessage: document.querySelector(".hero__search-input-err")!,
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
    notFound: document.querySelector(".result__not-found-container")!,
}
export const delay = (ms: number) => { return new Promise(resolve => setTimeout(resolve, ms)) }

export const {
    body,
    logoUse,
    loader,
    inputErrMessage,
    dayNightCheckbox,
    fontSelectorBackdrop,
    fontsSelectWindow,
    fontOpenBtn,
    selectedFont,
    form,
    resultContainer,
    notFound
} = domElems
