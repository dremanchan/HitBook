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

  return (
    <>
      <h1 className="smashSelectTitle">Select Your Character</h1>

      <section className="smashCharacters">
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <h3>{character.name}</h3>
              <img id={character.id} src={character.thumbnail} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default SmashSelect;
