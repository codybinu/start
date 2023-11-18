import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

//build component
const App = () => {
    return (        
        <>
            <Header/>
            <h1>this is a react App!</h1>
            <h2>Hello there</h2>
            <Footer/>
        </>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);