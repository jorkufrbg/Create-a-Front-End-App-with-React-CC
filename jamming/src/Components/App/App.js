import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './App.css';

import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


/*  Components are reusable pieces of code that define the appearance, behaviour & state of a portion of the Application.
They can be defined as a function or a class */
class App extends React.Component {//Component Class(Not a component!). But a factory that produces Components by following a set of instructions

  constructor(props) { //Constructor Method to init object's state in a Class. Assigns an object to this.state
    super(props); //Gets called before any other statement in the constructor. Bind event handling methods occuring in given component [Information that gets passed from one component to another is known as “props.”]

    this.state = { //Object representing initial state of the component.
      searchResults: [
        { name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
        { name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
        { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }
      ]
    }
  }

  render() { //A Component class must contain the render() method
    return ( //Returns the JSX representation of the Component instance
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">

          {/*Component Instance of the SearchBar Class. Instances inherit all methods of the Component Class*/}
          <SearchBar />

          <div className="App-playlist">

            {/*Component Instance of the SearchResults Class. Instances inherit all methods of the Component Class*/}
            <SearchResults
              searchResults={this.state.searchResults} //Passes the state of the App component’s searchResults object to the SearchResults component
            />

            {/*Component Instance of the Playlist Class. Instances inherit all methods of the Component Class*/}
            <Playlist />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
