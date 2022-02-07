import React from 'react';
import './InfoPage.css'
import { Link, } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return ( <>
    <h1 className="page-title">How to use this app:</h1>
    <div className="info-container">
      

      <ol className="instructions">
        <li>Select your game</li>
        <li>Select your character</li>
        <li>Star a character to add it to favorites</li>
        <li>Click the star on the favorites page <br></br>
          to unfavorite a character</li>
      </ol>

      
    </div>
    <div className="buttonDiv">
    <Link to="gameselect">
        <button className="gameBtn"> Game Select</button>
      </Link>
      </div>
    </>
  );
}

export default InfoPage;
