import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    //A stateful component class(Parent) defines a function that calls this.setState
    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            //The stateful component passes that function(changeName) down to a stateless component: <Child />.
            //The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component ( <Sibling /> ).
            /*An instance of the stateful component class is rendered. One stateless child component displays the state( <Sibling /> ), and a different stateless child component( <Child /> ) displays a way to change the state*/
            <div>
                <Child onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);