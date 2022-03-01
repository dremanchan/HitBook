import { react, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function AddMove() {
  // local state
  const [input, setInput] = useState("");
  const [frames, setFrames] = useState("");
  const dispatch = useDispatch();
  const char = useSelector((store) => store.selectedCharacter);

  function handleSubmit() {
    // Sends new move to the server
    dispatch({
      type: "ADD_MOVE",
      payload: {
        input: input,
        frames: frames,
        characterId: char,
      },
    });
  }

  return (
    <>
      <h1>Add New Move</h1>
      <div>
        <form>
          <p>Move Input:</p>
          <input
            type="text"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
          />
          <p>Move Frame Data:</p>
          <input
            type="text"
            value={frames}
            onChange={(evt) => setFrames(evt.target.value)}
          />

          {/* Takes user back to character page on submit */}
          <Link to={`/smashcharacter/${char}`}>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default AddMove;
