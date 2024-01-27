export default buildResult

function buildResult(): string {
    const resultDom: string = `
    <div class="result__result-wrapper">
        <div class="result__word-wrapper">
            <h1 class="result__title">keyboard</h1>
            <p class="result__transcription">/ˈkiːbɔːd/</p>
        </div>
        <button class="result__play-btn button" type="button">
            <svg class="result__play-icon">
                <use href="./assets/images/sprite.svg#icon-play" />
            </svg>
        </button>
    </div>
    <div class="result__noun-wrapper">
        <div class="result__noun-title-wrapper">
            <h2 class="result__noun-title">noun</h2>
            <div class="result__noun-spliter"></div>
        </div>
        <h3 class="result__noun-meaning-title">Meaning</h3>
        <ul class="result__noun-list">
            <li class="result__noun-item">
                <div class="result__noun-item-circle"></div>
                <p class="result__noun-item-para">(etc.) A set of keys used to operate a typewriter, computer etc.</p>
            </li>
            <li class="result__noun-item">
                <div class="result__noun-item-circle"></div>
                <p class="result__noun-item-para">
                    A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys
                    that cause different tones to be produced when struck.
                </p>
            </li>
            <li class="result__noun-item">
                <div class="result__noun-item-circle"></div>
                <p class="result__noun-item-para">
                    A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or
                    separate from the keyboard device.
                </p>
            </li>
        </ul>
        <h3 class="result__noun-synonyms">Synonyms<span class="result__noun-synonyms-span">electronic keyboard</span></h3>
    </div>
    <div class="result__verb-wrapper">
        <div class="result__verb-title-wrapper">
            <h2 class="result__verb-title">verb</h2>
            <div class="result__verb-spliter"></div>
        </div>
        <h3 class="result__verb-meaning-title">Meaning</h3>
        <ul class="result__verb-list">
            <li class="result__verb-item">
                <div class="result__verb-item-circle"></div>
                <p class="result__verb-item-para">To type on a computer keyboard.</p>
            </li>
        </ul>
        <p class="result__verb-example">“Keyboarding is the part of this job I hate the most.”</p>
    </div>
    <div class="result__spliter"></div>
    <div class="result__src-wrapper">
        <h2 class="result__src-title">Source</h2>
        <div class="result__src-link-wrapper">
            <a class="result__src-link" href="https://en.wiktionary.org/wiki/keyboard" target="_blank">https://en.wiktionary.org/wiki/keyboard
                <svg class="result__src-icon">
                    <use href="./assets/images/sprite.svg#icon-new-window"></use>
                </svg>
            </a>
        </div>
    </div>
`
return resultDom
}