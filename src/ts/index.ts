import axios from "axios"
import { searchInput } from "./dom-elements"


async function fetchData(word: string): Promise<void | Array<object>> {
    return await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}