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

function* addCharacter(action) {
    const character = yield axios.post('/api/character', action.payload);
    console.log('Character added', character.data);
    yield put({ type: 'FETCH_CHARACTERS'})
}

function* updateCharacter(action) {
    const res = yield axios.put(`/api/character/${action.payload.id}`, action.payload);

    yield put({
        type: 'FETCH_CHARACTERS'
    })
}

function* characterSaga() {
    yield takeEvery('FETCH_CHARACTERS', fetchAllCharacters);
    yield takeEvery('ADD_NEW_CHARACTER', addCharacter);
    yield takeEvery('UPDATE_CHARACTER', updateCharacter);
}

export default characterSaga;