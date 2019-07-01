import { MoviesState } from "./movies/types";
import { combineReducers } from "redux";
import { MoviesReducer } from "./movies/reducer";
import { History } from "history";
import { connectRouter } from "connected-react-router";

export interface ApplicationState {
    movies: MoviesState
}

export const getRootReducer = (history: History) => combineReducers({
    movies: MoviesReducer,
    router: connectRouter(history),
});