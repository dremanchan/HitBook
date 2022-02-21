import { useState, React } from "react";
import "./AdminPage.css";
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';


function AdminPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [characterName, setCharacterName] = useState("Marth");
  const [gameId, setGameId] = useState(1);
  const [characterStrategy, setCharacterStrategy] = useState("Create space with movement and control the enemy with long range.");
  const [characterCombos, setCharacterCombos] = useState("Down Throw -> B Air, Up Tilt, Up Tilt, Up Air");
  const [characterImg, setCharacterImg] = useState("/images/marth.png");
  const [characterThumb, setCharacterThumb] = useState("/images/marth.gif");

  function addCharacter(evt) {
    evt.preventDefault();
    dispatch({
      type: "ADD_NEW_CHARACTER",
      payload: {
        name: characterName,
        gameId: gameId,
        strategy: characterStrategy,
        combos: characterCombos,
        image: characterImg,
        thumbnail: characterThumb,
      },
    });
    // sends user to character select page to see new character
    history.push('/smashSelect');
  }

  return (
    <>
      <h1 className="adminTitle">Admin</h1>

      <div>
          <h3>Add Character Form</h3>
          <p>Character Name:</p>
        <form onSubmit={addCharacter}>
          <input
            type="text"
            label="Character Name:"
            placeholder="Character Name"
            value={characterName}
            onChange={(evt) => setCharacterName(evt.target.value)}
          />
          <p>Game ID:</p>
          <input
            type="number"
            placeholder="Game ID#"
            label="Game ID:"
            value={gameId}
            onChange={(evt) => setGameId(evt.target.value)}
          />
          
          <p>Strategy:</p>
          <input
            type="text"
            placeholder="Strategy"
            label="Strategy:"
            value={characterStrategy}
            onChange={(evt) => setCharacterStrategy(evt.target.value)}
          />
          <p>Combos:</p>
          <input
            type="text"
            placeholder="Combos"
            label="Combos:"
            value={characterCombos}
            onChange={(evt) => setCharacterCombos(evt.target.value)}
          />
          <p>Image URL:</p>
          <input
            type="text"
            placeholder="Character Img Url"
            label="Image URL:"
            value={characterImg}
            onChange={(evt) => setCharacterImg(evt.target.value)}
          />
          <p>Thumbnail:</p>
          <input
            type="text"
            placeholder="Thumbnail URL"
            label="Thumbnail URL:"
            value={characterThumb}
            onChange={(evt) => setCharacterThumb(evt.target.value)}
          />
         
            <button onClick={addCharacter}> Submit </button>
          
        </form>
      </div>
    </>
  );
}

export default AdminPage;
