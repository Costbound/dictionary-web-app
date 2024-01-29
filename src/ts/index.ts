import axios, { AxiosError, AxiosResponse } from "axios"
import buildResultSection from "./result-builder"
import { form } from "./dom-elements"
import { APIResponseData } from "./result-builder"

form?.addEventListener("submit", async (e) => {
    e.preventDefault()
    const searchInput = form.elements[0] as HTMLInputElement
    const data: APIResponseData[] | void = await fetchData(searchInput.value)
    if (data) buildResultSection(data[0])
    })

async function fetchData(word: string) {
    return axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((res: AxiosResponse): APIResponseData[] => {
            console.log(res.data)
            return res.data
        })
        .catch((err: AxiosError): void => console.log(err))
}

const testData: APIResponseData =  {
    word: "keyboard",
    phonetic: "/ˈkiːbɔːd/",
    phonetics: [
      {
        text: "/ˈkiːbɔːd/",
        audio: ""
      },
      {
        text: "/ˈkiːbɔːd/",
        audio: ""
      },
      {
        text: "/ˈkibɔɹd/",
        audio: "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1755168",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0"
        }
      }
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: "(etc.) A set of keys used to operate a typewriter, computer etc.",
            synonyms: [],
            antonyms: []
          },
          {
            definition: "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
            synonyms: [],
            antonyms: []
          },
          {
            definition: "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
            synonyms: [],
            antonyms: []
          }
        ],
        synonyms: [
          "electronic keyboard"
        ],
        antonyms: []
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To type on a computer keyboard.",
            synonyms: [],
            antonyms: [],
            example: "Keyboarding is the part of this job I hate the most."
          }
        ],
        synonyms: [],
        antonyms: []
      }
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0"
    },
    sourceUrls: [
      "https://en.wiktionary.org/wiki/keyboard"
    ]
  }


