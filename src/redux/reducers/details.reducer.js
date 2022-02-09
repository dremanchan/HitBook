const detailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload[0];
        default:
            return state;
    }
}

export default detailsReducer;