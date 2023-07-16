import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

//Different Phases of a Lifecycle
// Different Phases of a component lifecycle are:
// ● Mounting: When a component is being created and inserted into the DOM.
// ● Updating: When a Component is being re-rendered due to any updates
// made to its state or props.
// ● Unmounting: When it is destroyed/ removed from the DOM.
// ● Error Handling: When there is an error during rendering.
// Side effects are actions that are not predictable because they are actions that are
// performed with the "outside world."
// For example: Using Browser APIs like localStorage, using the native DOM methods
// instead of the ReactDOM, fetching the data from an API, and setting timeouts and
// intervals.
// Mounting Phase
// These methods are called in the following sequence when an instance of a
// component is being created:
// ● constructor()
// ● static getDerivedStateFromProps()
// ● render()
// ● componentDidMount()
