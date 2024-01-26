import { body, dayNightLable, dayNightCheckbox } from "./dom-elements";
console.log(body)
console.log(dayNightLable)
console.log(dayNightCheckbox)

dayNightCheckbox?.addEventListener("click", themeCheck)
themeCheck()

function themeCheck() {
    if (dayNightCheckbox?.checked) {
        body?.classList.remove("body_light")
        body?.classList.add("body_dark")
    } else {
        body?.classList.remove("body_dark")
        body?.classList.add("body_light")
    }
}