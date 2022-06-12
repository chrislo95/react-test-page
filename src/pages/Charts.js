import React from 'react';
import './Charts.css';
import catgun from '../images/catgun.png';

function Charts() {

    return (
        <header className="App-header">
            <p>
            Catgu
            </p>
            <img src={catgun} className="lol-logo" alt="meowgun" height={200} width={200}/>
        </header>
    )
}

export default Charts;