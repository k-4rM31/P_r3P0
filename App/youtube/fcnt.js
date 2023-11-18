import { searchFrame } from "./main.js";

const searchURL = 'https://www.googleapis.com/youtube/v3/search'
const key = 'AIzaSyC77EOKWrhN0KNF6icmeaFk9bMiaulpfQQ'
const maxResults = 15
let searchItems = []

const tpl = document.getElementById('searchTemplate')

export async function fetchSerarchAPI(q){
    await fetch(`${searchURL}?key=${key}&q=${q}&part=snippet&maxResults=${maxResults}`)
    .then(R => R.json())
    .then((data) => {
        const items = data.items
        console.log(items)
        // for (const i of items) {
        //     searchItems.push(i.snippet.title)
        // }

        // const searchSugessionItems = tpl.content.cloneNode(true)

        // for (const i of searchItems) {
        //     searchSugessionItems.firstElementChild.querySelector('.sugession_de_recherche').innerText = i
        //     searchFrame.prepend(searchSugessionItems)
        // }
        // console.log(searchItems)

    })
    .catch(e => console.log(e))
    .finally(() => {
        searchItems = []
    })
}
