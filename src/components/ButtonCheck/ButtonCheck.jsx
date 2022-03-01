import React, { useState } from 'react';
import { useGamepads } from 'react-gamepads';

export default function ButtonCheck() {
  const [gamepads, setGamepads] = useState({});
  useGamepads(gamepads => setGamepads(gamepads));

  const gamepadDisplay = Object.keys(gamepads).map(gamepadId => {
    // console.log("displaying gamepad", gamepads[gamepadId]);
    return (
      <div>
        <h2>{gamepads[gamepadId].id}</h2>
        {gamepads[gamepadId].buttons &&
          gamepads[gamepadId].buttons.map((button, index) => (
            <div>
              {index}: {button.pressed ? 'True' : 'False'}
            </div>
          ))}
      </div>
    );
  });

  return (
    <div className="Gamepads">
      <h1>Is your controller working?</h1>
      <h2>Check those buttons</h2>
      {gamepadDisplay}
    </div>
  );
}