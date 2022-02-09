import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SmashCharacter() {
    const dispatch = useDispatch();
    const params = useParams();
    const characterId = params.id;

    useEffect(() => {
        dispatch({
            type: "FETCH_CHARACTERS",
            payload: characterId
        });
    }, [characterId]);

    return (
        <>

        </>
    )

}

export default SmashCharacter;