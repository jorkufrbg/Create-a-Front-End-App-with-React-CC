/* fetch() POST */
//Sends the Request
fetch('https://api-to-call.com/endpoint', {
    //Settings Object
    method: 'POST',
    body: JSON.stringify({ id: '200' })
}).then(response => {
    //Converts response object to JSON
    if (response.ok) {
        return response.json();
    }
    throw new Error('Request failed!'); //Error Handling
}, networkError => {
    console.log(networkError.message); //Error Handling
}).then(jsonResponse => { //Success Handling
    return jsonResponse;
});