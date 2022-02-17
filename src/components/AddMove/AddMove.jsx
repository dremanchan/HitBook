import { react, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function AddMove() {
    // local state
    const [input, setInput] = useState('');
    const [frames, setFrames] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();
    const char = useSelector((store) => store.selectedCharacter);
    console.log('selected character is', char);

    function handleSubmit() {

        // Sends new move to the server
        dispatch({
            type: 'ADD_MOVE',
            payload: {
                input: input,
                frames: frames,
                characterId: char
            }
        })
        // Takes user back to the character page
        history.push(`smashcharacter/${char}`);
    }

    return (
        <>
            <h1>Add New Move</h1>
            <div>
                <form>
                    <input 
                        type="text"
                        value={input}
                        onChange={evt => setInput(evt.target.value)} 
                    />
                    <input 
                        type="text"
                        value={frames}
                        onChange={evt => setFrames(evt.target.value)} 
                    />

                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>

                </form>
            </div>
        </>
    )
}

export default AddMove;