// Foursquare API Info
const clientId = '5WZVKIWEMKKB3XL2B2YBGVQOVAKVXRFSFCPEUUMNBGBERZ3M';
const clientSecret = '5SRF251JYLBNYEFCE1FT4EFGUUUHWYRT01FK54ZSYG4IO333';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = 'f009b95f07c99980f904be2b50721913';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/* AJAX functions */
//async and await keywords enable asynchronous, promise-based behavior in a cleaner way, avoiding the need to explicitly configure promise chains
const getVenues = async () => {
    const city = $input.val(); //User Input Value

    /* urlToFetch contains the combined text of the entire request URL:
        - API endpoint URL
        - user input city
        - limit parameter with the number of venues returned (10)
        - client_id parameter and client ID
        - client_secret parameter and client secret
        - v(version) parameter and today’s date in the format: YYYYMMDD 
    */
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`;

    try { //Marks a block of statements to try and specifies a response should an exception be thrown
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json(); //Converts the response object to a JSON object
            console.log(jsonResponse);

            /* Get an array of venue data:
                - response property (object)
                - groups property (array)
                - first element of groups
                - items property (an array of venue data)
            */
            const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
            console.log(venues);
            return venues;
        }
    } catch (error) { console.log(error); }
}

const getForecast = async () => {

    /* const urlToFetch includes:
      - base weatherUrl
      - q parameter(represents the location query) with a value of the user input ($input.val()) and the API key as the APPID parameter
    */
    const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    } catch (error) { console.log(error); }
}

/* Render functions */
const renderVenues = (venues) => {
    $venueDivs.forEach(($venue, index) => {
        const venue = venues[index]; //The individual venue object inside of the .forEach() callback
        const venueIcon = venue.categories[0].icon; //Value of the object representing the venue icon. Accessible as the icon property of the first element in the array of categories of the venue object
        console.log(venueIcon);
        const venueImgSrc = `${venueIcon.prefix}bg_64${venueIcon.suffix}`;
        let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc); //HTML string to add the new venue
        $venue.append(venueContent); //Appends venue content data to HTML

    });
    $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
    let weatherContent = createWeatherHTML(day);
    $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
    $venueDivs.forEach(venue => venue.empty());
    $weatherDiv.empty();
    $destination.empty();
    $container.css("visibility", "visible");
    getVenues().then(venues => renderVenues(venues)); //Hooks up renderVenues() function to the data fetched by getVenues()
    getForecast().then(forecast => renderForecast(forecast)); //Hooks up the forecast data and the render function
    return false;
}

$submit.click(executeSearch);