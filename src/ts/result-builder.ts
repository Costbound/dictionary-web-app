import { APIResponseData } from "."
export default buildResultSection
export let resultAudio: HTMLAudioElement | undefined

function buildResultSection(data: APIResponseData): string {
    const { word, phonetic, phonetics, meanings, sourceUrls} = data
    const resultDomArr: string[] = []

    resultDomArr.push(buildResultMain(word, phonetic, searchAudioUrl(phonetics)))
    meanings.forEach(meaning => resultDomArr.push(buildMeaning(meaning)))
    resultDomArr.push('<div class="result__end-spliter"></div>')
    resultDomArr.push(buildSource(sourceUrls))

    return resultDomArr.join("")
}

function searchAudioUrl(phonetics: Phonetic[]): string | undefined {
    return phonetics.find((item: Phonetic): Phonetic | undefined => { if (item.audio.length > 0) return item })?.audio
}

function buildResultMain(word: string, phonetic: string, audio: string | undefined): string {
    let result:string = ""
    if (audio) {
        result += `<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__main-title">${word}</h1>
                <p class="result__transcription">${phonetic}</p>
            </div>
            <button class="result__play-btn button" type="button">
                <svg class="result__play-icon">
                    <use href="./assets/images/sprite.svg#icon-play" />
                </svg>
            </button>
            <audio class="result__audio" src="" preload="metadata"></audio>
        </div>`
        resultAudio = new Audio(audio)
    } else {
        result += `<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__title">${word}</h1>
                <p class="result__transcription">${phonetic}</p>
            </div>
        </div>`
    }
    return result
}

function buildMeaning(meaning: Meaning): string {
    const { partOfSpeech, definitions, synonyms, antonyms } = meaning
    let final: string = `<div class="result__wrapper">
            <div class="result__title-wrapper">
                <h2 class="result__title">${partOfSpeech}</h2>
                <div class="result__spliter"></div>
            </div>
            <h3 class="result__meaning-title">Meaning</h3>
            <ul class="result__list">`

    final += buildMeanItems(definitions) + "</ul>"
    final += buildMeanSynonymsAntonyms(synonyms, antonyms)
    return final  + '</div>'
}

function buildMeanItems(defins: Meaning["definitions"]): string {
    const items: string[] = []
    defins.forEach(defin => {
        if (defin.example) {
            items.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${defin.definition}</p>
                <p class="result__example">“${defin.example}”</p>
            </li>`)
        } else {
            items.push(`<li class="result__item">
                <div class="result__item-circle"></div>
                <p class="result__item-para">${defin.definition}</p>
            </li>`)
        }
    })
    return items.join("")
}

function buildMeanSynonymsAntonyms(synonyms: Meaning["synonyms"], antonyms: Meaning["antonyms"]): string | void {
    let result: string = ``
    if (synonyms.length > 0) {
        result += `<div class="result__synonyms-wrapper">
            <h3 class="result__synonyms">Synonyms</h3>
            <ul class="result__synonyms-list">`
    
        synonyms.forEach(synonym => {
            result += `<li class="result__synonyms-item">
                    <p class="result__synonyms-para">${synonym}</p>
                </li>`
        })
        result += "</ul></div>"
    }
    if (antonyms.length > 0) {
        result += `<div class="result__antonyms-wrapper">
            <h3 class="result__antonyms">Antonyms</h3>
            <ul class="result__antonyms-list">`
    
        antonyms.forEach(antonym => {
            result += `<li class="result__antonyms-item">
                    <p class="result__antonyms-para">${antonym}</p>
                </li>`
        })
        result += "</ul></div>"
    }
    return result
}




function buildSource(srcs: string[]) {
    let result:string = ''
    if (srcs.length > 0) {
        result += `<div class="result__src-wrapper">
            <h2 class="result__src-title">Source</h2>
            <ul class="result__src-list">`
        srcs.forEach(src => {
            result += `<li class="result__src-item">
                    <a class="result__src-link" href="${src}">${src}
                        <svg class="result__src-icon">
                            <use href="./assets/images/sprite.svg#icon-new-window"></use>
                        </svg>
                    </a>
                </li>`
        })
    }
    return result
}

interface Phonetic {
    text: string
    audio: string
    sourceUrl?: string
    license?: {
        name: string
        url: string
    }
}

interface Meaning {
    partOfSpeech: string,
    definitions: {
        definition: string,
        synonyms: string[],
        antonyms: string[],
        example?: string
    }[],
    synonyms: string[]
    antonyms: string[]
}