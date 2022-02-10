import { useEffect, React } from "react";
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

function SmashCharacter() {
  const dispatch = useDispatch();
  // Access the details reducer
  const details = useSelector((store) => store.details);
  // Access the move reducer
  const moves = useSelector((store) => store.move);
  // Used to make unique page ID's for each character
  const params = useParams();
  const characterId = params.id;

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

  return (
    <>
      <div className="characterDiv">
        <h1 className="detailHeader">Character Info</h1>
        <h2>{details.characterName}</h2>
        <img src={details.characterImg} />
        <h4>Strategy:</h4>
        <h5>{details.characterStrategy}</h5>
        <h4>Combos:</h4>
        <h5>{details.characterCombos}</h5>
        <Link to="/smashSelect">
          <button>Character Select</button>
        </Link>
      </div>

      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Move Inputs</TableCell>
                <TableCell align="right">Startup Frames</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {moves?.map((move) => (
                <TableRow
                  key={move.cats}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {move.moveInput}
                  </TableCell>
                  <TableCell align="right">{move.moveFrames}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default SmashCharacter;
