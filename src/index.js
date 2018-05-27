// Go find the 'react' library and assign it to the
// variable 'React'
import React from 'react';
import ReactDOM from 'react-dom';

/*
Creates a new component that produces html
JSX transpiles to:
React.createElement("div", null, "Hi!")
We are actually creating a class, not an instance
This is like a factory for creating App functions.
= () => is the ES6 equivalent of
= function ()
*/
const App = () => {
    return <div>Hi!</div>;
}

// Put the generated html and insert it on the DOM
// <App /> is an instance of App.
// We also need to tell ReactDOM the target DOM
// where App will be put
ReactDOM.render(<App />,
                document.querySelector('.app-container'));