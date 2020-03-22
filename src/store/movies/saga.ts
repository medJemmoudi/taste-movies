import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { fetchMoviesFailed, fetchMoviesSucces, fetchSimilarMovies } from './actions';
import { MoviesActionTypes } from './types';
import { getSimilarMovies } from './service';

function* handleFetchSimilarMovies(action: ReturnType<typeof fetchSimilarMovies>) {
    try {
        let res = yield call(getSimilarMovies, action.payload);
        if (res.error) {
            yield put(fetchMoviesFailed(res.error));
        } else {
            yield put(fetchMoviesSucces(res));
        }
    } catch (error) {
        console.log(error);
        yield put(fetchMoviesFailed('Something went wrong!'));
    }
}

function* watchFetchSimilarMovies() {
    yield takeEvery(MoviesActionTypes.FETCH_SIMILAR_MOVIES, handleFetchSimilarMovies);
}

function* moviesSaga() {
    yield all([fork(watchFetchSimilarMovies)]);
}

export default moviesSaga;