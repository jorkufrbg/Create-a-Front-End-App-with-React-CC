// Information to reach API
const url = 'https://api.datamuse.com/words?';
// This will search for words that describe another word.
const queryParams = 'rel_jjb=';
// additionalParams will filter the response using the word typed into the second input field. The '&' character at the start of the string is used to separate parameters.
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  // The .onreadystatechange method will contain the event handler that will be called when xhr‘s state changes.
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  // .open() creates a new request and the arguments passed, determine the type of request and where it’s being sent to.
  xhr.open('GET', endpoint);
  // This method will send the request to the server
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);
