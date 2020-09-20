// Information to reach API
const apiKey = '';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
    const urlToShorten = inputField.value; //Keeps the value of what is being typed into the input field
    const data = JSON.stringify({ destination: urlToShorten });
    //Fetch Function
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'apikey': apiKey
        },
        body: data
    }).then(response => {
        if (response.ok) {
            // renderJsonResponse(response);
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => { console.log(networkError.message); }).then(
        jsonResponse => {
            // renderRawResponse(jsonResponse);
            renderResponse(jsonResponse);
        }
    );
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild)
    }
    shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
