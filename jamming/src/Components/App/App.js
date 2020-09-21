import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

/*  Components are reusable pieces of code that define the appearance, behaviour & state of a portion of the Application.
They can be defined as a function or a class */
class App extends React.Component {//Component Class(Not a component!). But a factory that produces Components by following a set of instructions
  render() { //A Component class must contain the render() method
    return ( //Returns the JSX representation of the Component instance
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />  {/*Component Instance of the SearchBar Class. Instances inherit all methods of the Component Class*/}
          <div className="App-playlist">
            <SearchResults /> {/*Component Instance of the SearchResults Class. Instances inherit all methods of the Component Class*/}
            <Playlist /> {/*Component Instance of the Playlist Class. Instances inherit all methods of the Component Class*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
