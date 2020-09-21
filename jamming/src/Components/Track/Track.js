import React from 'react'; //Imports the library & creates an object containing properties needed by React.{React.createElement() & React.Component}
import './Track.css';

/*  Components are reusable pieces of code that define the appearance, behaviour & state of a portion of the Application.
They can be defined as a function or a class */
class Track extends React.Component {//Component Class(Not a component!). But a factory that produces Components by following a set of instructions

    renderAction() {//Method displaying - or + in the <button> element depending on the boolean value of isRemoval
        if (this.props.isRemoval) {
            return <button className="Track-action">-</button>
        } else {
            return <button className="Track-action">+</button>
        }
    }

    render() {//A Component class must contain the render() method
        return (//Returns the JSX representation of the Component instance
            <div className="Track">
                <div className="Track-information">
                    <h3>track name</h3>
                    <p>track artist | track album</p>
                </div>
                {this.renderAction()} {/* Renders the method */}
            </div>
        );
    }
}

export default Track;