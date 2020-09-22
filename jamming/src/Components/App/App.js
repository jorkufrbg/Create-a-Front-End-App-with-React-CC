import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './App.css';

//Imports for the React Component Classes
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';

/*Components are reusable pieces of code that define the appearance, behaviour & state of a part of the Application. They are defined as function or class
Component Classes are factories that produce Components with each his own unique props & local state by following a set of instructions.*/
class App extends React.Component {

  constructor(props) { //Constructor Method to init object's state in a Class. Assigns an object to this.state. Makes it a STATEFUL Component

    /*Gets called before any other statement in the constructor. Binds event handling methods occuring in given Component
     Information that gets passed from one component to another is known as “props.”] */
    super(props);

    this.state = { //Object representing initial state of the component.
      searchResults: [ //Array of objects containing the name, artist, album & id properties from search results
        { name: 'Made of Light', artist: 'Emperor', album: 'Dispositions', id: 1 },
        { name: 'All for You', artist: 'Wilkinson', album: 'single', id: 2 },
        { name: 'Into the Fire', artist: 'Kove', album: 'Nightfires', id: 3 }
      ],
      playlistName: 'New Playlist', //String conaining the new Playlist Name
      playlistTracks: [ //Array of objects containing the name, artist, album & id properties of tracks from My Playlists
        { name: 'PlayList Name 1', artist: 'Artist 1', album: 'Album 1', id: 4 },
        { name: 'PlayList Name 2', artist: 'Artist 2', album: 'Album 2', id: 5 },
        { name: 'PlayList Name 3', artist: 'Artist 3', album: 'Album 3', id: 6 }
      ]
    };

    /*Creating a component class method that uses the .this keyword requires, binding that method inside of the constructor fucntion of the given component class.
    bind() creates a new function that, when called, has its this keyword set to the provided value.*/
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {//Method accepting argument track, which is an object containing name, artist, album etc. Pushes track to playlistTracks array of the user
    let tracks = this.state.playlistTracks; //Variable assigned the value of the playlistTracks Array from current state

    //Conditional used to check if the song id we want to add matches the same id in the playlist of the user. If so we breack out the method
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {//.find() returns the value of the first element in an array that satisfies the test condition
      return;
    }

    tracks.push(track); //Method that adds the current song to the end of the playlistTracks array & returns the new length of the given arrays

    /* this.setState() takes an object, & merges that object with the component’s current state.
    If there are properties in the current component state that aren’t part of that object, then those properties remain unchanged */
    this.setState({ playlistTracks: tracks });
  }

  removeTrack(track) {//Method with argument track. Uses the track id property to filter it out from playlistTracks & set a new state of playlist
    let tracks = this.state.playlistTracks; //Variable assigned the value of the playlistTracks Array from current state

    /*Looks through each item id property of the tracks array, & if the id is not equal to the track id that was clicked on it goes in the new tracks array. If they are equal, it gets filtered out(removed) */
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({ playlistTracks: tracks }); //Takes an object, & merges it with the component’s current state.
  }

  updatePlaylistName(name) { //Method with argument name. Sets the state of the playlist name to the input argument
    this.setState({ playlistName: name });
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
              onAdd={this.addTrack} //Passes the addTrack method to the SearchResults Component attribute named onAdd
            />

            {/*Component Instance of the Playlist Class. Instances inherit all methods of the Component Class*/}
            <Playlist
              playlistName={this.state.playlistName} //Passes the state of the App component’s playlistName string to the Playlist component
              playlistTracks={this.state.playlistTracks} //Passes the state of the App component’s playlistTracks array to the Playlist component
              onRemove={this.removeTrack} //Passes the new state from removeTrack() to the Playlist Component as onRemove property
              onNameChange={this.updatePlaylistName}//Passes updatePlaylistName() from App Component to the Playlist Component as an attribute named onNameChange
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
