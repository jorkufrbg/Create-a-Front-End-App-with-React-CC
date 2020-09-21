import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

/*Components are reusable pieces of code that define the appearance, behaviour & state of a part of the Application. They are defined as function or class
Component Classes are factories that produce Components with each his own unique props and local state by following a set of instructions.*/
class Playlist extends React.Component {

    render() { //A Component class must contain the render() method. Rendering is the only way for a component to pass props to another component.
        return ( //Returns the JSX representation of the Component instance. Needed to make a component display data
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />

                {/* Component Instance of the TrackList Class. Instances inherit all methods of the Component Class*/}
                <TrackList
                    tracks={this.props.playlistTracks} //Passes the playlist tracks from the Playlist Component to the TrackList Component. Through .props
                />

                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;