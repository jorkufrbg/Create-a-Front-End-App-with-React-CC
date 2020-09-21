import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './TrackList.css';
import Track from '../Track/Track'

/*  Components are reusable pieces of code that define the appearance, behaviour & state of a portion of the Application.
They can be defined as a function or a class */
class TrackList extends React.Component {//Component Class(Not a component!). But a factory that produces Components by following a set of instructions

    render() {//A Component class must contain the render() method
        return (//Returns the JSX representation of the Component instance
            <div className="TrackList">
                {
                    this.props.tracks.map(track => { // .map() Method renders every single track in the track property of the Track Component Instance
                        return <Track
                            track={track} //Passes the current track as an attribute called track to the Track component.
                            key={track.id} //Keys are unique strings used by React in order to correctly pair each element with it's coresponding array item.
                        />
                    })
                }
            </div>
        );
    }
}

export default TrackList;