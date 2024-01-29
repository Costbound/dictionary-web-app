import { body, dayNightCheckbox, fontSelectorBackdrop, fontsSelectWindow, fontOpenBtn, selectedFont } from "./dom-elements";


dayNightCheckbox.addEventListener("click", themeCheck)
fontOpenBtn.addEventListener("click", fontsOpenClose)
fontSelectorBackdrop.addEventListener("click", fontsOpenClose)
fontsSelectWindow.addEventListener("click", selectFont)

function themeCheck(): void {
    if (dayNightCheckbox.checked) {
        body.classList.remove("body_light")
        body.classList.add("body_dark")
    } else {
        body.classList.remove("body_dark")
        body.classList.add("body_light")
    }
}

function fontsOpenClose(): void {
    if (fontsSelectWindow.classList.contains("header__font-selector-list_open")) {
        fontsSelectWindow.classList.remove("header__font-selector-list_open")
        fontSelectorBackdrop.classList.add("disabled")
        window.removeEventListener("scroll", fontsOpenClose)
    } else {
        fontsSelectWindow.classList.add("header__font-selector-list_open")
        fontSelectorBackdrop.classList.remove("disabled")
        window.addEventListener("scroll", fontsOpenClose)
    }
}

function selectFont(e: Event): void {
    const target = e.target as HTMLUListElement | HTMLLIElement | HTMLButtonElement
    if (target.nodeName === "BUTTON") {
        const sansSerif: string = "body_sans-serif"
        const serif: string = "body_serif"
        const mono: string = "body_mono"

        if (target.classList.contains("header__sans-serif-btn")) {
            body.classList.add(sansSerif)
            body.classList.remove(serif)
            body.classList.remove(mono)
            if (selectedFont) selectedFont.textContent = "Sans Serif"
        } else if (target.classList.contains("header__serif-btn")) {
            body.classList.add(serif)
            body.classList.remove(sansSerif)
            body.classList.remove(mono)
            if (selectedFont) selectedFont.textContent = "Serif"
        } else {
            body.classList.add(mono)
            body.classList.remove(sansSerif)
            body.classList.remove(serif)
            if (selectedFont) selectedFont.textContent = "Mono"
        }
    }
}