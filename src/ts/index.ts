import axios, { AxiosError, AxiosResponse } from "axios"
import buildResultSection from "./result-builder"
import { form, resultContainer, inputErrMessage, notFound, loader, delay } from "./dom-elements"
import { resultAudio } from "./result-builder"

const searchInput = form.elements[0] as HTMLInputElement

form?.addEventListener("submit", async (e: Event): Promise<void> => {
  e.preventDefault()
  if (searchInput.value.trim().length > 0) {
    resultContainer.innerHTML = ""
    loader.classList.remove("disabled")
    notFound.classList.add("disabled")
    await createResultDom()
    loader.classList.add("disabled")
  } else {
    searchInput.classList.add("hero__search-input_error")
    inputErrMessage.style.opacity = "1"
    searchInput.value = ""
  }
})

searchInput.addEventListener("input", () => {
  if (searchInput.value.trim().length > 0) {
    searchInput.classList.remove("hero__search-input_error")
    inputErrMessage.style.opacity = ""
  }
})

async function createResultDom(): Promise<void> {
  const data: APIResponseData[] | void = await fetchData(searchInput.value)
  if (data) {
    resultContainer.innerHTML = buildResultSection(data[0])
    addSynonymsCopy()
    if (resultAudio) {
      const playBtn: HTMLButtonElement = document.querySelector('.result__play-btn')!
      playBtn.addEventListener("click", () => { resultAudio?.play() })
    }
  } else {
    notFound.classList.remove("disabled")
  }

}

async function fetchData(word: string) {
  return axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((res: AxiosResponse): APIResponseData[] => {
        console.log(res.data)
        return res.data
    })
    .catch((err: AxiosError): void => console.log(err))
}

function addSynonymsCopy(): void {
  const synonymsLists: NodeListOf<HTMLUListElement> = document.querySelectorAll(".result__synonyms-list")!

  synonymsLists.forEach((list: HTMLUListElement) : void => {
    list.addEventListener("click", async (e: MouseEvent): Promise<void> => {
      const target = e.target! as HTMLElement
      if (target.nodeName === "P") {
        navigator.clipboard.writeText(target.innerText)
        target.classList.add("result__copyed")
        await delay(3000)
        target.classList.remove("result__copyed")
      }
    })
  })

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