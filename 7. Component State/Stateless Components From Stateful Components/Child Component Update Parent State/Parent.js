import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {

    //Constructor Method
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.state = { name: 'Frarthur' };
    }

    //Change Name State Method. When a user selects a new dropdown item, it will invoke changeName, but it won’t pass the correct argument! Instead of passing a new name, it will pass an event object*/
    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    //Render Method
    render() {
        // If a user selects a new name from the dropdown menu, then you want Child to call changeName(). changeName() will change the parent’s this.state.name, which will change the name displayed in the <h1></h1>.
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

//Render the code in HTML
ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);