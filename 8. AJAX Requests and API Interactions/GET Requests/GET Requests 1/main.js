// The XMLHttpRequest object is used in JavaScript to create and send requests.
// XHR GET Request
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
// JSON is JavaScript Object Notation, which is how the response is going to be formatted.
xhr.responseType = 'json';

// The .onreadystatechange of xhr will contain an event listener which will execute when the readyState property changes:
xhr.onreadystatechange = () => {
    //This conditional statement checks to see if the request has finished.
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // This response will contain the data that we’re getting back from the request.
        return xhr.response;
    }

};

// .open() creates a new request and the arguments passed in determine the type and URL of the request.
xhr.open('GET', url);
// This method will send the request to the server
xhr.send();