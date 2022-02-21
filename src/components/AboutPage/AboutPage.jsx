import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>Technologies Used:</h1>

        <ul>
          <li>React with Redux and Sagas</li>
          <li>Javascript</li>
          <li>HTML/CSS</li>
          <li>Postgresql</li>
          <li>Node.js</li>
          </ul>
      </div>
    </div>
  );
}

export default AboutPage;
