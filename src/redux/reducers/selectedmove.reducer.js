const selectedMoveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_MOVE':
            return action.payload;
        default:
            return state;
    }
}

export default selectedMoveReducer;