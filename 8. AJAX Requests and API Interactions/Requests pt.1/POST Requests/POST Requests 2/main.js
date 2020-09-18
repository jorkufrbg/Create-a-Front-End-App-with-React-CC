// Information to reach API
const apiKey = '6ad87f74e3164a5fb512b7ffa302b9e4';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
    // urlToShorten will now save the value of the input field
    const urlToShorten = inputField.value;
    // JSON.stringify() will convert a value to a JSON string. We’re including this information because the API expects to see an object with a key destination that has a value of a URL.
    const data = JSON.stringify({ destination: urlToShorten });
    // XMLHttpRequest is used to interact with the server
    const xhr = new XMLHttpRequest();

    // JSON is JavaScript Object Notation, which is how the response is going to be formatted.
    xhr.responseType = 'json';
    // The .onreadystatechange method will contain the event handler that will be called when xhr‘s state changes.
    xhr.onreadystatechange = () => {
        // This conditional checks if the request has finished
        if (xhr.readyState === XMLHttpRequest.DONE) {

            // Manipulates responseField to render an unformatted response
            /* renderRawResponse(xhr.response); */

            // Manipulates responseField to render a formatted and appropriate message
            renderResponse(xhr.response);
        }
    };
    // .open() creates a new request and the arguments passed, determine the type of request and where it’s being sent to.
    xhr.open('POST', url);
    //To access the Rebrandly API, a header with two key-value pairs is needed. The header includes values for 'Content-type' and an 'apikey'.
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    // This method sends the data to the server
    xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
