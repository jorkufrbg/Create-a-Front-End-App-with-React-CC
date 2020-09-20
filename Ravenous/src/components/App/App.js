import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';

class App extends React.Component {
    constructor(props) { //constructor Method used to initialize object's state in a class
        super(props); //super() is used to call the parent constructor.And super(props) would pass props to the parent constructor
        this.state = { //Sets the initial state
            businesses: []
        };
        this.searchYelp = this.searchYelp.bind(this); //Binds the searchYelp() method to the current value of this
    }

    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(businesses => { //Retrieves our list of businesses
            /* Enqueues changes to component state and tells React that the component and its children have to be re-rendered with updated states */
            this.setState({ businesses: businesses }); //Updates the state by passing an object that has a key of businesses with value of the returned businesses array of businesses
        });

        //console.log(`Searching Yelp for ${term}, near ${location}, and sorted by ${sortBy}`); //Prints a message to the console, simulating a search
    }

    render() {
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={this.state.businesses} />
            </div>
        );
    }
}

export default App;