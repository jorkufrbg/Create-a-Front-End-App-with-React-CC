// Information to reach API
const url = 'https://api.datamuse.com/words?';
//This parameter will narrow the search to words that rhyme
const queryParams = 'rel_rhy=';
// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
    // inputField.value grabs what is in the inputField and assigns it to the variable wordQuery.
    const wordQuery = inputField.value;
    // endpoint will store the value of the entire URL and query string.
    const endpoint = `${url}${queryParams}${wordQuery}`;
    // The XMLHttpRequest object can be used to request data from a web server.
    const xhr = new XMLHttpRequest();

    // JSON is JavaScript Object Notation, which is how the response is going to be formatted.
    xhr.responseType = 'json';
    // Event Handler
    xhr.onreadystatechange = () => {
        // This conditional statement checks to see if the request has finished.
        if (xhr.readyState === XMLHttpRequest.DONE) {
            // Renders response before it is modified
            /* renderRawResponse(xhr.response); */
            // Formats response to look presentable on webpage
            renderResponse(xhr.response);
        }
    };

    // This method call will create a new request using the two arguments: 'GET' sets the method and url sets the destination.
    xhr.open('GET', endpoint);
    // This method will send the request to the server
    xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    };
    getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
