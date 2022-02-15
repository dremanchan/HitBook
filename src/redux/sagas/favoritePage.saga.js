import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFavoritesPage() {
    try {
        const favorite = yield axios.get('/api/favorite');
        console.log('GET favorite page stuff', favorite.data);
        yield put ({ type: 'SET_FAVORITE', payload: favorite.data })
    } catch (err) {
        console.error('GET favorite page stuff failed', err);
    }
}

function* favoritePageSaga() {
    yield takeEvery('FETCH_FAVORITE_PAGE', fetchFavoritesPage);
}

export default favoritePageSaga;