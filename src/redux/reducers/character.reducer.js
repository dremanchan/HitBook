// used to store characters sent from the server
const characterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_CHARACTER':
            return action.payload;
        case 'UPDATE_CHARACTER':
            return {
                ...state, ...action.payload
            }
        default:
            return state;
    }
}

export default characterReducer;