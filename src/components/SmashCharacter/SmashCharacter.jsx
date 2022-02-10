import { useEffect, React } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SmashCharacter.css';

function SmashCharacter() {
    const dispatch = useDispatch();
    const details = useSelector(store => store.details);
    console.log('details are', details);
    const params = useParams();
    const characterId = params.id;

    useEffect(() => {
        dispatch({
            type: "FETCH_DETAILS",
            payload: characterId
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
            
           

        </>
    )

}

export default SmashCharacter;