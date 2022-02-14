const favoriteReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return action.payload;
            // This line allows me to access the objects inside of the favorites store
        case 'LOAD_FAVORITE':
            return action.payload[0];
        case 'REMOVE_FAVORITE':
            return action.payload;
        default:
            return state;
    }
    
}

export default favoriteReducer;