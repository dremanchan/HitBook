import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchSelectedCharacter(action) {
    try { const res = yield axios.get(`/api/character/${action.payload}`);
    yield put({ type: 'SET_SELECTED_CHARACTER', payload: res.data});
}
catch (err) {
    console.error('fetchselectedcharacter failed', err);
}

}

function* selectedCharacterSaga() {
    yield takeEvery('FETCH_SELECTED_CHARACTER', fetchSelectedCharacter);
}

export default selectedCharacterSaga;