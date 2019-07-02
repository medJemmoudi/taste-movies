import { MoviesState } from "./movies/types";
import { combineReducers } from "redux";
import { MoviesReducer } from "./movies/reducer";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import { MovieDetailsReducer } from "./details/reducer";
import { MovieDetailsState } from "./details/types";
import { all, fork } from 'redux-saga/effects';
import moviesSaga from "./movies/saga";
import movieDetailsSaga from "./details/saga";

export interface ApplicationState {
    movies: MoviesState,
    selectedMovie: MovieDetailsState
}

export const getRootReducer = (history: History) => combineReducers({
    movies: MoviesReducer,
    selectedMovie: MovieDetailsReducer,
    router: connectRouter(history),
});

export function* rootSaga() {
    yield all([
        fork(moviesSaga),
        fork(movieDetailsSaga)
    ]);
}