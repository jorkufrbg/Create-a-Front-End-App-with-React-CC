import React from 'react';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        /* Bind .handleClick() to the current value of this and store it in this.handleClick, otherwise the value of .this will be incorrect when called. */
        this.handleClick = this.handleClick.bind(this);
    }
    /* chooseVideo expects a string as an argument. But event handlers are automatically passed event objects, not strings. Give Menu a new property, before the render function, named handleClick. Set handleClick equal to a function with one parameter named e. */
    handleClick(e) {
        /* Inside of the body of handleClick, declare a new variable named text. Set text equal to e.target.value. This will equal the text of a clicked radio button.*/
        const text = e.target.value;
        /* Call the passed-in chooseVideo function. Pass in text as an argument. Whenver we are passing!!! infromation from one to another component we use this.props.methodName. Information that gets passed from one component to another is known as “props.” */
        this.props.chooseVideo(text);
    }
    render() {
        /* Give <form></form> an onClick attribute. Set onClick‘s value equal to the passed-in chooseVideo function. Menu uses this ability to let a user to select a new video.*/
        return (
            <form onClick={this.handleClick}>
                <input type="radio" name="src" value="fast" /> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>
        );
    }
}