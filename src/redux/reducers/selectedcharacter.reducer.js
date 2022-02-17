const selectedCharacterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CHARACTER':
            return action.payload;
        default:
            return state;
    }
    
} 

export default selectedCharacterReducer;