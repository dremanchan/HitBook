import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchDetails(action) {
   try { const details = yield axios.get('/api/details', {params: {id: action.payload}});
    console.log('GET details results', details.data);
    yield put ({ type: 'SET_DETAILS', payload: details.data });
    }
    catch (err) {
        console.error('fetchDetails failed', err);
    }

}

function* detailsSaga() {
   yield takeEvery('FETCH_DETAILS', fetchDetails);
}

export default detailsSaga;