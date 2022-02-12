import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchFavorites() {
  const favorites = yield axios.get("/api/favorite");

  yield put({ type: "SET_FAVORITE", payload: favorites.data });
}

function* addFavorite(action) {
  const favorite = yield axios.post("/api/favorite", action.payload);
  console.log("Favorite posted", favorite.data);
  yield put({ type: "FETCH_FAVORITES" });
}

function* favoriteSaga() {
  yield takeEvery("FETCH_FAVORITES", fetchFavorites);
  yield takeEvery("ADD_FAVORITE", addFavorite);
}

export default favoriteSaga;
