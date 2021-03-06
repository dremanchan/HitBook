import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import character from './character.reducer';
import details from './details.reducer';
import move from './move.reducer';
import favorite from './favorite.reducer';
import favoriteStuff from './favoritePage.reducer';
import selectedCharacter from './selectedcharacter.reducer';
import selectedMove from './selectedmove.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  character, // character data from db
  details, // organized character data
  move, // character moves
  favorite, // user's favorites
  favoriteStuff,
  selectedCharacter, 
  selectedMove,
});

export default rootReducer;
