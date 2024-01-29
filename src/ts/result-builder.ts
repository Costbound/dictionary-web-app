export default buildResultSection


function buildResultSection(data: APIResponseData): string {
    const {
        word,
        phonetic,
    } = data
    const resultDomArr: string[] = []
    const wordResult = `<div class="result__result-wrapper">
            <div class="result__word-wrapper">
                <h1 class="result__title">${word}</h1>
                <p class="result__transcription">${phonetic}</p>
            </div>
            <button class="result__play-btn button" type="button">
                <svg class="result__play-icon">
                    <use href="./assets/images/sprite.svg#icon-play" />
                </svg>
            </button>
        </div>`

    return resultDomArr.join(",")
}

export interface APIResponseData {
    word: string,
    phonetic: string,
    phonetics: {
        text: string,
        audio: string,
        sourceUrl?: string,
        license?: {
            name: string,
            url: string
        }
    }[]
    meanings: {
        partOfSpeech: string,
        definitions: {
            definition: string,
            synonyms: string[],
            antonyms: string[],
            example?: string
        }[],
        synonyms: string[]
        antonyms: string[]
    }[]
    license: {
      name: string,
      url: string
    },
    sourceUrls: string[]
  }