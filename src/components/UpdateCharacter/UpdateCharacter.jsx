import { useState, React, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function UpdateCharacter() {
  const dispatch = useDispatch();
  const character = useSelector((store) => store.selectedCharacter);
  const history = useHistory();
  const params = useParams();
  const [name, setName] = useState("");
  const [strategy, setStrategy] = useState("");
  const [combos, setCombos] = useState("");
  const [image, setImage] = useState("");


console.log('selected character is', character);
 
  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch({
      type: "UPDATE_CHARACTER",
      payload: {
        name: name,
        strategy: strategy,
        combos: combos,
        image: image,
        id: params.id
        
      },
    });
    history.push(`/smashcharacter/${character}`);
  }

  function cancelBtn() {
    history.push(`/smashcharacter/${params.id}`)
  }

  return (
    <>
      <h1>Update Character</h1>
      <form onSubmit={handleSubmit}>
        <p> Character Name: </p>
        <input
          type="text"
          label="name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
        <p>Strategy:</p>
        <input
          type="text"
          label="strategy"
          value={strategy}
          onChange={(evt) => setStrategy(evt.target.value)}
        />
        <p>Combos:</p>
        <input
          type="text"
          label="combos"
          value={combos}
          onChange={(evt) => setCombos(evt.target.value)}
        />
        <p>Image URL</p>
        <input
          type="text"
          label="image"
          value={image}
          onChange={(evt) => setImage(evt.target.value)}
        />

        <button>Submit</button>
      </form>
      <button onClick={cancelBtn}>
        Cancel
      </button>
    </>
  );
}

export default UpdateCharacter;
