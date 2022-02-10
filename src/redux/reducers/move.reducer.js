const moveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVES':
            return action.payload;
        default:
            return state;
    }
}

export default moveReducer;