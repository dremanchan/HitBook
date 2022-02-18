import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./FavoritePage.css";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function FavoritePage() {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);
  const user = useSelector((store) => store.user);
  const favorite = useSelector((store) => store.favorite);
  console.log("favorite", favorite);
  const favoriteStuff = useSelector((store) => store.favoriteStuff);
  const character = useSelector((store) => store.character);
  console.log("character", character);
  const params = useParams();
  const characterId = params.id;
  const currentUser = user.id;
  console.log(currentUser);

  useEffect(() => {
    dispatch({
      type: "FETCH_FAVORITE_PAGE",
    });

    dispatch({
      type: "FETCH_CHARACTERS",
    });
  }, [user.id]);

  function deleteFavorite(char) {
    console.log("char is", char);
    const sendId = char.characterId;
    const sendUser = user.id;

    dispatch({
      type: "DELETE_FROM_FAVORITEPAGE",
      payload: sendId,
      sendUser,
    });
  }

  return (
    <>
      <h1>Favorites</h1>

      {favoriteStuff.map((char) => {
        return (
          <div key={char.id}>
            <>
              <h3>
                {char.name}
                <Button onClick={(evt) => deleteFavorite(char)}>
                  Remove Favorite
                </Button>
              </h3>
              <Link to={`/smashcharacter/${char.characterId}`}>
                <img className="favImg" src={char.image} />
              </Link>
            </>
          </div>
        );
      })}
    </>
  );
}

export default FavoritePage;
