import React from 'react';

export class Child extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    //That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument.
    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        //The stateless component class uses this new function(handleChange) as an event handler ( onChange={this.handleChange} ). When an event is detected, the parent’s state updates. (A user selects a new dropdown menu item) 
        return (
            <div>
                <select
                    id="great-names"
                    onChange={this.handleChange}>

                    <option value="Frarthur">Frarthur</option>
                    <option value="Gromulus">Gromulus</option>
                    <option value="Thinkpiece">Thinkpiece</option>
                </select>
            </div>
        );
    }
}