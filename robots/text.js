const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').ApiKey

function robot(content) {

    fetchContentFromWikipedia(content)
    //sanitizeContent(content)
    //breakContentIntoSetence(content)

    async function fetchContentFromWikipedia(content) {
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithmia = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
        const wikipediaResponse = await wikipediaAlgorithmia.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponse.get()
        console.log(wikipediaContent)
    }
}

module.exports = robot

// 13:22