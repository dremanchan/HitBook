const moveReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVES':
            return action.payload;
        case 'UPDATE_MOVES':
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
}

export default moveReducer;