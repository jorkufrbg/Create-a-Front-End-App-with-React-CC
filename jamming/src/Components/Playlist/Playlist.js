import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

/*  Components are reusable pieces of code that define the appearance, behaviour & state of a portion of the Application.
They can be defined as a function or a class */
class Playlist extends React.Component {//Component Class(Not a component!). But a factory that produces Components by following a set of instructions
    render() { //A Component class must contain the render() method
        return ( //Returns the JSX representation of the Component instance
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                {/*<TrackList />  Component Instance of the TrackList Class. Instances inherit all methods of the Component Class*/}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;