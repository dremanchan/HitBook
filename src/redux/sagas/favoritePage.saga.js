import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchFavoritesPage() {
    try {
        const favorite = yield axios.get('/api/favoritepage');
        console.log('GET favorite page stuff', favorite.data);
        yield put ({ type: 'SET_FAVORITE_PAGE', payload: favorite.data })
    } catch (err) {
        console.error('GET favorite page stuff failed', err);
    }
}

function* deleteFavoritePage(action) {
    console.log('payload is', action.payload);
     try{ yield axios.delete(`/api/favoritepage/${action.payload}` );
     
  
      yield put({ type: "FETCH_FAVORITE_PAGE"});
  }
      catch (err) {
          console.error('DELETE FAVORITES failed', err);
      }
  }

function* favoritePageSaga() {
    yield takeEvery('FETCH_FAVORITE_PAGE', fetchFavoritesPage);
    yield takeEvery('DELETE_FROM_FAVORITEPAGE', deleteFavoritePage);
}

export default favoritePageSaga;