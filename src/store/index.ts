import { MoviesState } from "./movies/types";
import { combineReducers } from "redux";
import { MoviesReducer } from "./movies/reducer";

export interface ApplicationState {
    movies: MoviesState
}

export const getRootReducer = () => combineReducers({
    movies: MoviesReducer
});