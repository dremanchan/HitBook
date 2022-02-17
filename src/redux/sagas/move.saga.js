import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects';
// GET moves
function* fetchMoves(action) {
    try {
        const move = yield axios.get('/api/move', {params: {id: action.payload}});
        console.log('GET move results', move.data);
        yield put ({ type: 'SET_MOVES', payload: move.data });
    }
    catch (err) {
        console.error('fetchMoves failed', err);
    }
}

// Post Moves
function* addMove(action) {
    yield axios.post('/api/move', action.payload);

    yield put ({ type: 'FETCH_MOVES'})

}

// Delete moves saga
function* deleteMove(action) {
    try {
        const move = yield axios.delete(`/api/move/${action.payload}`);

        yield put({ type: 'FETCH_MOVES' })
    }
    catch (err) {
        console.error('deleteMove failed', err);
    }
}

function* moveSaga() {
    yield takeEvery('FETCH_MOVES', fetchMoves);
    yield takeEvery('ADD_MOVE', addMove);
    yield takeEvery('DELETE_SET_MOVE', deleteMove);

}

export default moveSaga;