const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
        case 'REMOVE_FAVORITE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default favoriteReducer;