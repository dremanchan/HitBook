const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            console.log(action.payload);
            return action.payload;
        case 'REMOVE_FAVORITE':
            return [...state, action.payload];
        default:
            return state;
    }
}

export default favoriteReducer;