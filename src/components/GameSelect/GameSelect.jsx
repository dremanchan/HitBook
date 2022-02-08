import React from 'react';
import { Link } from 'react-router-dom';
import './GameSelect.css';

const GameSelect = () => {
    return (
            <>
            <div className="selectContainer">
                <h1 className="selectTitle">Select your game </h1>
            </div>
            <div className="card">
                <Link to="/smashselect">
                <img width="330px" height="200px"src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Super_Smash_Bros._Ultimate_Logo.png"/>
                </Link>
            </div>
            </>
    )
}

export default GameSelect;