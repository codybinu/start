import React from 'react';
import ReactDOM from 'react-dom';

//build component
const App = () => {
    return (        
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);