const accesskey = DBXbivRUhWOpNtTBHfphiu4Ydmkea9pVc97Bv_FDBXQ

const formE1 = document.querySelector("form")
const inputE1 = document.querySelector("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData = ""
let page = 1;

async function searchImages() {
    inputData = inputE1.Value;
    const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}'

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page == 1){
        searchResults.innerHTML = ""
    }

    results.map((result) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        
        })


}