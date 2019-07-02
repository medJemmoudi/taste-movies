import { fetchMovieDetails, fetchMovieDetailsFailed, fetchMovieDetailsSuccess } from './actions';
import { call, all, fork, put, takeEvery } from 'redux-saga/effects';
import { getMovieDetails } from '../../utils/Api';
import { MovieDetailsActionTypes } from './types';

function* handleFetchMovieDetails(action: ReturnType<typeof fetchMovieDetails>) {
    try {
        let res = yield call(getMovieDetails, action.payload);
        if (res.error) {
            yield put(fetchMovieDetailsFailed(res.error));
        } else {
            yield put(fetchMovieDetailsSuccess(res));
        }
    } catch(e) {
        console.log(e);
        yield put(fetchMovieDetailsFailed(e));
    }
}

function* watchFetchMovieDetails() {
    yield takeEvery(MovieDetailsActionTypes.FETCH_MOVIE_DETAILS, handleFetchMovieDetails);
}

function* movieDetailsSaga() {
    yield all([fork(watchFetchMovieDetails)]);
}

export default movieDetailsSaga;