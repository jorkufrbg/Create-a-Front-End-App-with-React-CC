import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './Track.css';

/*Components are reusable pieces of code that define the appearance, behaviour & state of a part of the Application. They are defined as function or class
Component Classes are factories that produce Components with each his own unique props and local state by following a set of instructions.*/
class Track extends React.Component {

    renderAction() {//Method displaying - or + in the <button> element depending on the boolean value of isRemoval
        if (this.props.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    render() {//A Component class must contain the render() method. Rendering is the only way for a component to pass props to another component.
        return (//Returns the JSX representation of the Component instance. Needed to make a component display data
            <div className="Track">
                <div className="Track-information">

                    {/* Props used to access the track's name from the TrackList Component's attribute named track*/}
                    <h3>{this.props.track.name}</h3>

                    {/* Props used to access the track's artist and album  from the TrackList Componnent attribute named track*/}
                    <p>{this.props.track.artist} | {this.props.track.album}</p>

                </div>

                {this.renderAction()} {/* Renders the renderAction method */}

            </div>
        );
    }
}

export default Track;