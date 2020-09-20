const apiKey = 'incsjSOa34msMJSu3dZmgLoYVE1kXdZSX-2F_lqn5qhs6tqWx7ITGFqcvNVI2T0VjKDrC_-DhTOr4H2_ZEIeKQ96q9fve93i5D8rN1V3ehPY4KXHfPZ3KRNgxDpnX3Yx'; //Yelp API Key

const Yelp = { //This object stores the functionality needed to interact with the Yelp API
    search(term, location, sortBy) {//This method retrieves search results from the Yelp API
        /* returns a promise that resolves our list of businesses */
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` //API Key authorizing the usage of Yelp API
            }
        }).then(response => { //then() method returns a Promise which handles the success or failure cases
            return response.json(); //Converts the returned response to JSON 
        }).then(jsonResponse => { //Retrieves the list of businesses from the converted JSON response
            if (jsonResponse.businesses) { //Checks if jsonResponse has businesses key (representing valid response returned by the Yelp API)
                return jsonResponse.businesses.map(business => { //Returns an array that has all of the 'business' properties (name, address, city & other)
                    console.log(business);
                    return { //This object includes all of the attributes needed to display a business in Ravenous
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
};

export default Yelp; //Exports the yelp module