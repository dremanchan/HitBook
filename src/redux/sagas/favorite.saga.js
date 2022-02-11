import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';

function* fetchFavorites(action) {
    try { const favorites = yield axios.get('/api/favorite', {params: {id: action.payload}})
    console.log('GET favorites', favorites.data);
    yield put ({ type: 'SET_FAVORITE', payload: details.data });
}
catch (err) {
    console.error('fetchFavorites failed', err);
}
}

function* addFavorite(action) {
    const favorite = yield axios.post('/api/favorite', action.payload );
    console.log('Favorite posted', favorite.data);
    yield put ({ type: 'SET_FAVORITES' })
}

function* favoriteSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('ADD_FAVORITE', addFavorite);
}

export default favoriteSaga;
