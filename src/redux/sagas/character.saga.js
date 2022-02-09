import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchAllCharacters() {
    try {
        const character = yield axios.get('/api/character');
        console.log('GET character', character.data);
        yield put ({ type: 'SET_CHARACTER', payload: character.data });
    } catch (err) {
        console.error('GET CHARACTER FAILED', err);
    }
}

function* characterSaga() {
    yield takeEvery('FETCH_CHARACTERS', fetchAllCharacters);
}

export default characterSaga;