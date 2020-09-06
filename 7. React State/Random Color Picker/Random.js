import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

/*Random‘s job is to store a random color, and to use that color to update the screen’s background. */
class Random extends React.Component {

    // Constructor Method
    constructor(props) {
        super(props);
        this.state = {
            color: [150, 23, 179]
        };
        // The bind() method creates a new function that, when called, has its this keyword set to the provided value, 
        this.handleClick = this.handleClick.bind(this);
    }

    /*These functions are examples of a powerful React feature called lifecycle   methods.*/
    componentDidMount() {
        this.applyColor();
    }
    componentDidUpdate(prevProps, prevState) {
        this.applyColor();
    }

    /*This method transforms an rgb array into something a bit more readable.*/
    formatColor(ary) {
        return 'rgb(' + ary.join(', ') + ')';
    }

    /* The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.*/
    isLight() {
        const rgb = this.state.color;
        return rgb.reduce((a, b) => a + b) < 127 * 3;
    }

    applyColor() {
        const color = this.formatColor(this.state.color);
        document.body.style.background = color;
    }

    chooseColor() {
        const random = [];
        for (let i = 0; i < 3; i++) {
            random.push(Math.floor(Math.random() * 256));
        }
        return random;
    }

    //Method handling on click event
    handleClick() {
        this.setState({
            color: this.chooseColor()
        });
    }

    // Render Method
    render() {
        return (
            <div>
                <h1 className={this.isLight() ? 'white' : 'black'}>
                    Your color is {this.formatColor(this.state.color)}.
                </h1>
                <Button
                    light={this.isLight()}
                    onClick={this.handleClick} />
            </div>
        );
    }
}

ReactDOM.render(
    <Random />,
    document.getElementById('app')
);