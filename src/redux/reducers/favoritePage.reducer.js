const favoritePageReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FAVORITE_PAGE':
            return action.payload;
        default:
            return state;
    }
}

export default favoritePageReducer;