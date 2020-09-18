// The XMLHttpRequest object is used in JavaScript to interact with servers.
const xhr = new XMLHttpRequest();
// The URL will direct the request to the correct server.
const url = 'https://api-to-call.com/endpoint';
// JSON.stringify() will convert a value to a JSON string.
const data = JSON.stringify({ id: '200' });

// JSON is JavaScript Object Notation, which is how the response is going to be formatted.
xhr.responseType = 'json';
// The .onreadystatechange method will contain the event handler that will be called when xhr‘s state changes.
xhr.onreadystatechange = () => {
    // The if conditional will check to see if the request has finished.
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // The response property contains the data that we receive from the POST request.
        return xhr.response;
    }
};

// .open() creates a new request and the arguments passed, determine the type of request and where it’s being sent to.
xhr.open('POST', url);
// .send() will send the request to the server.
xhr.send(data);