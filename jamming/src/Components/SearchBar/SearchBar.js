import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './SearchBar.css';

/*Components are reusable pieces of code that define the appearance, behaviour & state of a part of the Application. They are defined as function or class
Component Classes are factories that produce Components with each his own unique props and local state by following a set of instructions.*/
class SearchBar extends React.Component {

    render() { //A Component class must contain the render() method. Rendering is the only way for a component to pass props to another component.
        return (//Returns the JSX representation of the Component instance. Needed to make a component display data
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}

export default SearchBar;