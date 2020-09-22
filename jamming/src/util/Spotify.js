const clientId = '48b2d5daf54440aeb83b88d15c027136'; //Variable containing client ID of the Application
const redirectUri = 'http://localhost:3000/'; //Variable containing hite-listed addresses to redirect to after authentication success OR failure
let accessToken; //Variable containing user's access token

const Spotify = { //Object stoing the functionality needed to interact with the Spotify API

    getAccessToken() {

        if (accessToken) { //Conditional checking for users access token. If it is set, returns the value saved in the access token.
            return accessToken;
        }

        /*If the access token is not already set, check the URL to see if it has just been obtained.
        Uses the .match() method to retriev access token and expiration time from URI
        The match() method retrieves the result of matching a string against a regular expression. */
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/); //Variable containing access token value matched against reg ex
        const expirationTimeMatch = window.location.href.match(/expires_in=([^&]*)/); //Variable containing expiration time value matched against reg ex

        if (accessTokenMatch && expirationTimeMatch) {//Checks for access token and expiration time in the URL and sets the Access Token Value to an empty string

            accessToken = accessTokenMatch[1]; //Sets the access token value
            const expirationTime = Number(expirationTimeMatch[1]); //When used as a function, Number(value) converts a string or other value to the Number type

            /* Clears the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired 
            The DOM Window object provides access to the browser's session history through the history object.
            The history.pushState() method adds a state to the browser's session history stack */
            window.setTimeout(() => accessToken = '', expirationTime * 1000); // uses the setTimeout Method to set the accessToken to an empty string
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else { //If there are not Access Token and Inspiration Time, redirects the user to Spotify authorization URI
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl; //Sets the current page address(URL) and redirects the browser to a new page.
        }
    }
};

export default Spotify;