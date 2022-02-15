import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

function FavoritePage() {
  const dispatch = useDispatch();
  const details = useSelector((store) => store.details);
  const user = useSelector((store) => store.user);
  const favorite = useSelector((store) => store.favorite);
  const favoriteStuff = useSelector((store) => store.favoriteStuff);
  console.log("favoritePage stuff", favoriteStuff);
  const character = useSelector((store) => store.character);
  console.log("character", character);
  const params = useParams();
  const characterId = params.id;
  const currentUser = user.id;
  console.log(currentUser);

  useEffect(() => {
    dispatch({
      type: "FETCH_FAVORITE_PAGE",
      payload: user.id,
    });

    dispatch({
      type: "FETCH_CHARACTERS",
    });
  }, [user.id]);

  const nCharacterId = parseInt(characterId);
  function deleteFavorite() {
    dispatch({
      type: "DELETE_FAVORITE",
      payload: currentUser,
    });
  }

  return (
    <>
      <h1>Favorites</h1>

      {character.map((char) => {
        return (
          <div key={char.id}>
            <>
              <h3>
                {char.name}
                <Button onClick={deleteFavorite}>Remove Favorite</Button>
              </h3>

              <img src={char.image} />
            </>
          </div>
        );
      })}
    </>
  );
}

export default FavoritePage;
