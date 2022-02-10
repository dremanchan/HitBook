const moveReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_MOVES':
            return action.payload[0];
        default:
            return state;
    }
}

export default moveReducer;