/* async await GET */
const getData = async () => { //async keyword will ensure that the function returns a promise.
    try { //send a request and handle the response
        const response = await fetch('https://api-to-call.com/endpoint'); //sends the request

        if (response.ok) {  //Handles successful response
            const jsonResponse = await response.json();
            return jsonResponse;
        }
        throw new Error('Request failed!');
    } catch (error) { //takes care of an error if it is thrown.
        console.log(error);
    }
};