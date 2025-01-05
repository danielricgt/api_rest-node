/**
 * @returns {Promise</Object>} carather information
 */

const fetchQuote = async () => {

    const res = await fetch('https://rickandmortyapi.com/api/character/1');
    const data = await res.json();
    console.log(data);
    return data;
}   
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const BreakingbadApp = async (element) => {
 document.querySelector('#app-title').innerHTML = 'Breaking App'
    element.innerHTML = 'loading... ';

    const quoteLabel = document.createElement('blockquote');
    const autorLable = document.createElement('h3');
    const nextElementButton =  document.createElement('button');
    nextElementButton.innerText = 'Next Caracther';

    const renderQuote = (quote) => {
        quoteLabel.innerHTML = quote.name;
        autorLable.innerHTML = quote.species;
        element.replaceChildren(quoteLabel, autorLable, nextElementButton);
    }

    // add event
    nextElementButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading....'
        const quote = await fetchQuote();
        renderQuote(quote);
        })

    fetchQuote()
    .then(renderQuote)
     
}