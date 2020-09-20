// Information to reach API
const url = 'https://api.datamuse.com/words'; //The URL of the API we are accessing
const queryParams = '?sl='; //Narrows the search to words that sounds like the input word.
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value; //Stores the value of what is being typed into the input field
    const endpoint = url + queryParams + wordQuery; //Adds a query string to the URL with all the necessary parameters.
    fetch(endpoint, { cache: 'no-cache' }).then(response => {
        //Success callback function
        if (response.ok) {
            // renderJsonResponse(response);  // Creates an object to store the JSON in key-value pairs
            return response.json(); //The next function that is .then() chained to it will receive a Promise with JSON data.
        }
        throw new Error('Request failed!'); //Raises an exception if the request fails
    }, networkError => {
        console.log(networkError.message); //Error Handling
    });
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
