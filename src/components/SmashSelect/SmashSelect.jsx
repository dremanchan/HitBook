import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./SmashSelect.css";

function SmashSelect() {
  const dispatch = useDispatch();
  const history = useHistory();
  const characters = useSelector((store) => store.character);

  useEffect(() => {
    dispatch({ type: "FETCH_CHARACTERS" });
  }, []);

  function charSelect(character) {
    // Setting the character.id to a variable
    const char = character.id;
    dispatch({
      type: 'SET_SELECTED_CHARACTER',
      payload: char
    })
  }

  return (
    <>
      <h1 className="smashSelectTitle">Select Your Character</h1>

      <section className="smashCharacters">
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <h3>{character.name}</h3>

              {/* Sends user to selected character page and dispatches
              selected character */}
              <Link to={`/smashcharacter/${character.id}`}>
                <img className="selectImg" 
                    id={character.id} 
                    onClick={(evt) => charSelect(character)}
                    src={character.thumbnail} />
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default SmashSelect;
