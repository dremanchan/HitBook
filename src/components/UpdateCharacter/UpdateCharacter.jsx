import { useState, React } from "react";
import { Link, useHistory } from "react-router-dom";
import { MDCTextField } from "@material/textfield";
import { useDispatch, useSelector } from "react-redux";

function UpdateCharacter() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState("");
  const [strategy, setStrategy] = useState("");
  const [combos, setCombos] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit() {
    history.push("/smashcharacter/1");
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
    </>
  );
}

export default UpdateCharacter;
