// A key is a JSX attribute. The attribute’s name is key. The attribute’s value should be something unique, similar to an id attribute.

// keys don’t do anything that you can see! React uses them internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.
import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
    // expression goes here:
    <li key={'person_' + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
    <ul>{peopleLis}</ul>,
    document.getElementById('app')
);