import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { makeRequest } from '../../utils/Api';
import { fetchMoviesFailed, fetchMoviesSucces, fetchSimilarMovies } from './actions';
import { MoviesActionTypes } from './types';

const API_ROUTE: string = 'http://localhost:4000';

function* handleFetchSimilarMovies(action: ReturnType<typeof fetchSimilarMovies>) {
    try {
        let data = { title: action.payload };
        let res = yield call(makeRequest, `${API_ROUTE}/similar-to`, 'post', data);
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