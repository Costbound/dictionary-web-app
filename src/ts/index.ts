import axios, { AxiosError, AxiosResponse } from "axios"
import buildResultSection from "./result-builder"
import { form, resultContainer } from "./dom-elements"
import { resultAudio } from "./result-builder"

form?.addEventListener("submit", async (e) => {
    e.preventDefault()
    const searchInput = form.elements[0] as HTMLInputElement
  const data: APIResponseData[] | void = await fetchData(searchInput.value)
  // const data: APIResponseData[] = testData
  if (data) resultContainer.innerHTML = buildResultSection(data[0])

  if (resultAudio) {
    const playBtn: HTMLButtonElement = document.querySelector('.result__play-btn')!
    playBtn.addEventListener("click", () => {resultAudio?.play()})
  }
})

async function fetchData(word: string) {
    return axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res: AxiosResponse): APIResponseData[] => {
            console.log(res.data)
            return res.data
        })
        .catch((err: AxiosError): void => console.log(err))
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