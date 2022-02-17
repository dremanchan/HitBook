import { useEffect, useState, React } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./SmashCharacter.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

// Icons from mui
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function SmashCharacter() {
  const dispatch = useDispatch();
  // Access the details reducer
  const details = useSelector((store) => store.details);
  // Access the move reducer
  const moves = useSelector((store) => store.move);
  // Accessing the user reducer
  const user = useSelector((store) => store.user);
  // Accessing the favorites reducer
  const favorites = useSelector((store) => store.favorite);
  // UseState for edit form
  const [newInput, setNewInput] = useState("");
  const [newFrameData, setNewFrameData] = useState("");

  // Used to make unique page ID's for each character
  const params = useParams();
  const characterId = params.id;
  console.log("user.id is", user.id);

  // Renders the details and moves on page load
  useEffect(() => {
    dispatch({
      type: "FETCH_DETAILS",
      payload: characterId,
    });

    dispatch({
      type: "FETCH_MOVES",
      payload: characterId,
    });
  }, [characterId]);

  useEffect(() => {
    dispatch({
      type: "FETCH_FAVORITES",
    });
  }, []);

  // favorites function
  function addFavorite() {
    dispatch({
      type: "ADD_FAVORITE",
      payload: {
        user: user.id,
        characterId,
      },
    });
  }

  // Turning the string of req.params into a number to send
  const nCharacterId = parseInt(characterId);
  const currentUser = user.id;
  function deleteFavorite() {
    dispatch({
      type: "DELETE_FAVORITE",
      payload: nCharacterId,
      currentUser,
    });
  }

  function updateCharacter() {
    console.log("Selected character #", characterId);
    dispatch({
      type: "SET_SELECTED_CHARACTER",
      payload: characterId,
    });
  }

  // Renders Edit text field
  let editClicked = true;
  function moveForm() {
    editClicked = true;
    console.log("clicked is", editClicked);
  }

  function editMove() {
    let editClicked = false;
  }

  // placeholder to delete moves
  function deleteMove() {
    console.log("move deleted");
  }

  return (
    <>
      <h1 className="detailHeader">
        Character Info
        <Link to={`/updatecharacter/${characterId}`}>
          <Button onClick={updateCharacter}>Update</Button>
        </Link>
      </h1>
      <h2>
        {details.characterName}

        <Button onClick={addFavorite}>Add Favorite</Button>

        <Button onClick={deleteFavorite}>Remove Favorite</Button>
      </h2>
      <Link to="/smashSelect">
        <img className="characterPic" src={details.characterImg} />
      </Link>
      <h4>Strategy:</h4>
      <h5>{details.characterStrategy}</h5>
      <h4>Combos:</h4>
      <h5>{details.characterCombos}</h5>

      <TableContainer component={Paper}>
        <Table sx={{ maxWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Move Inputs</TableCell>
              <TableCell align="right">Startup Frames</TableCell>
              {user.admin === true && (
                <>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {moves?.map((move) => (
              <TableRow
                key={move.moveInput}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {move.moveInput}
                </TableCell>
                <TableCell align="right">{move.moveFrames}</TableCell>

                {user.admin === true && (
                  <>
                    {/* Edit move button code */}
                    <TableCell align="right">
                      <Button onClick={editMove}>Edit</Button>
                    </TableCell>

                    {/* Delete move button here */}
                    <TableCell align="right">
                      <Button onClick={deleteMove}>Delete</Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Conditional Rendering Move Change forms */}
      {editClicked ? (
        <div>
          <form onSubmit={editMove}>
            <p>New Input</p>
            <input
              type="text"
              value={newInput}
              onChange={(evt) => setNewInput(evt.target.value)}
            />
            <p>New Frame Data</p>
            <input
              type="text"
              value={newFrameData}
              onChange={(evt) => setNewFrameData(evt.target.value)}
            />
            <Button onClick={editMove}>Submit</Button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default SmashCharacter;
