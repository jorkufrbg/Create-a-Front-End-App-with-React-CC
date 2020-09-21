import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './App.css';

//Imports for the React Component Classes
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

/*Components are reusable pieces of code that define the appearance, behaviour & state of a part of the Application. They are defined as function or class
Component Classes are factories that produce Components with each his own unique props and local state by following a set of instructions.*/
class App extends React.Component {

  constructor(props) { //Constructor Method to init object's state in a Class. Assigns an object to this.state. Makes it a STATEFUL Component

    /*Gets called before any other statement in the constructor. Binds event handling methods occuring in given Component
     Information that gets passed from one component to another is known as “props.”] */
    super(props);

    this.state = { //Object representing initial state of the component.
      searchResults: [ //Array of objects containing the name, artist, album and id properties 
        { name: 'name1', artist: 'artist1', album: 'album1', id: 1 },
        { name: 'name2', artist: 'artist2', album: 'album2', id: 2 },
        { name: 'name3', artist: 'artist3', album: 'album3', id: 3 }
      ],
      playlistName: 'Playlist 1', //String conaining the Playlist Name
      playlistTracks: [ //Array of objects containing the name, artist, album and id properties 
        { name: 'PlayList 1', artist: 'Artist 1', album: 'Album 1', id: 1 },
        { name: 'PlayList 2', artist: 'Artist 2', album: 'Album 2', id: 2 },
        { name: 'PlayList 3', artist: 'Artist 3', album: 'Album 3', id: 3 }
      ]
    }
  }

  render() { //A Component class must contain the render() method. Rendering is the only way for a component to pass props to another component.
    return ( //Returns the JSX representation of the Component instance. Needed to make a component display data
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
            <Playlist
              playlistName={this.state.playlistName} //Passes the state of the App component’s playlistName string to the Playlist component
              playlistTracks={this.state.playlistTracks} //Passes the state of the App component’s playlistTracks array to the Playlist component
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
