import { useState, React, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";

function UpdateMove() {
  const dispatch = useDispatch();
  const params = useParams();
  const move = useSelector((store) => store.selectedMove);
  console.log('move is', move);
  const char = useSelector((store) => store.selectedCharacter);
  console.log('selected character is', char);
  console.log("move is ", move);
  const [input, setInput] = useState("");
  const [frames, setFrames] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch({
        type: 'UPDATE_MOVE',
        payload: {
            input: input,
            frames: frames,
            id: move
        }
    })
  }

  return (
    <>
      <div>
        <h1>Update Move</h1>
        <form>
          <p>Input:</p>
          <input
            type="text"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
          />

          <p>Frames:</p>
          <input
            type="text"
            value={frames}
            onChange={(evt) => setFrames(evt.target.value)}
          />

          {/* Returns user to the character page after submitting */}
          <Link to={`/smashcharacter/${char}`}>
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default UpdateMove;
