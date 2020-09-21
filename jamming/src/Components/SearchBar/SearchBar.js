import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './SearchBar.css';

/*  Components are reusable pieces of code that define the appearance, behaviour & state of a portion of the Application.
They can be defined as a function or a class */
class SearchBar extends React.Component {//Component Class(Not a component!). But a factory that produces Components by following a set of instructions
    render() { //A Component class must contain the render() method
        return (//Returns the JSX representation of the Component instance
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;