const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
            // Not sure if this is right
        case 'REMOVE_FAVORITE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default favoriteReducer;