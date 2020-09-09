import React from 'react';

export class Child extends React.Component {

    //Constructor Method
    constructor(props) {
        super(props);
        //bind .handleChange() to the current value of this
        this.handleChange = this.handleChange.bind(this);
    }

    /*This new function should take an event object as an argument, extract the name that you want from that event object, and then call the event handler, passing in the extracted name! */
    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    //Render Method
    render() {
        /*Inside of Child‘s render function, give <select> a new attribute. Make the attribute’s name onChange. This will create an event listener. Make the attribute’s value equal to the function that you passed in from Parent.js */
        return (
            <div>
                <h1>
                    Hey my name is {this.props.name}!
        </h1>
                <select id="great-names" onChange={this.handleChange}>
                    <option value="Frarthur">
                        Frarthur
          </option>

                    <option value="Gromulus">
                        Gromulus
          </option>

                    <option value="Thinkpiece">
                        Thinkpiece
          </option>
                </select>
            </div>
        );
    }
}