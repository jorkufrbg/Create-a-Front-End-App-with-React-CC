import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    //Constructor Method used to initialize object's state in a class
    constructor(props) {
        super(props); //super() is used to call the parent constructor.And super(props) would pass props to the parent constructor.

        this.state = {
            term: '', // term will refer to the search term located in the search input
            location: '', // location will refer to the location to search near from the location input
            sortBy: 'best_match' //sortBy will represent the selected sorting option to use.
        };

        //The bind() method creates a new function that, when called, has its this keyword set to the provided value. 
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
    }

    //Method returning the current CSS class for a sorting option. (Active or Not)
    getSortByClass(sortByOption) {
        //Use an if statement to check if the state value of sortBy is equal to the provided sortByOption. If it is, return 'active', otherwise, return an empty string ('').
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    //Method that sets the state of sorting option. It will be usefull when we comunicate with the Yelp API.
    handleSortByChange(sortByOption) {
        /* this.setState() takes an object, and merges that object with the component’s current state.
        If there are properties in the current state that aren’t part of that object, then those properties remain unchanged.*/
        this.setState({ sortBy: sortByOption }); //The object should set sortBy to the value of the method’s argument.
    }

    //Method handling event changes in Terms(businesses).
    handleTermChange(event) {
        this.setState({ term: event.target.value }); // event.target.value retrieves the value of whatever input it was called on.
    }

    //Method handling event changes in Location.
    handleLocationChange(event) {
        this.setState({ location: event.target.value }); // event.target.value retrieves the value of whatever input it was called on.
    }

    //Method handling the search event
    handleSearch(event) {
        //Inside of .handleSearch(), we call the passed down .searchYelp() method (located on props). Passing the current state values of term, location, and sortBy as arguments.
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        //Since our button is an anchor tag we call event.preventDefault(); to prevent the default action of clicking a link from triggering at the end of the method.
        event.preventDefault();
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];

            /*Adding onClick attribute to the li element allows us to bind to the current value of this and also bind the current sortByOptionValue as the first argument to the method,
            ensuring the method is calls the right value on click. 
            The className attribute will style each sort by option, displaying to the user which sorting option is currently selected.*/
            return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}>{sortByOption}</li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;