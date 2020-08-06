import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
    <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
    </ul>
);

ReactDOM.render(
    myList,
    document.getElementById('app')
);