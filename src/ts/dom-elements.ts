interface DomObj {
    body: HTMLBodyElement | null
    [key: string]: Element | null
    dayNightCheckbox: HTMLInputElement | null

}
const domElems:DomObj = {
    body: document.querySelector("body"),
    dayNightLable: document.querySelector(".header__toggle-lable"),
    dayNightCheckbox: document.querySelector(".header__toggle-checkbox")
}

export const {
    body,
    dayNightLable,
    dayNightCheckbox,
} = domElems