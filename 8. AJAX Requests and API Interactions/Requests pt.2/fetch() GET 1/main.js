// fetch() GET Request
// Sends the request
fetch('https://api-to-call.com/endpoint').then(response => {
    // Converts the response object to JSON
    if (response.ok) {
        return response.json();
    }
    // Error handling
    throw new Error('Request failed!');
}, networkError => {
    console.log(networkError.message);
    // Success handling
}).then(jsonResponse => {
    return jsonResponse;
}); 