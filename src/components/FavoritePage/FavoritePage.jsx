import { React, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function FavoritePage() {
    const dispatch = useDispatch();
    const details = useSelector((store) => store.details);
    const user = useSelector((store) => store.user);
    const favorite = useSelector ((store) => store.favorite);
    const character = useSelector ((store) => store.character);

    const params = useParams();
    const characterId = params.id;
    const currentUser = user.id;

    // Renders details on page load

    
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
            <Container>

            
                <h3>
                    {details.characterName}
                    <Button onClick={deleteFavorite}>
                        Unfavorite
                    </Button>
                </h3>
                <Link to={`/smashcharacter/${character.id}`}>
                    <img src={details.characterImg} />
                </Link>
           
            


            {/* Render favorites here with toggleFavorites button */}
            </Container>
        </>
    )
}

export default FavoritePage;