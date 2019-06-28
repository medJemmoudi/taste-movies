import { Reducer } from "redux";
import { MoviesState, MoviesActionTypes } from "./types";

const initialState: MoviesState = {
    loading: false,
    data: [],
    error: ''
}

const reducer: Reducer<MoviesState> = (state = initialState, action) => {
    switch(action.type) {
        case MoviesActionTypes.FETCH_SIMILAR_MOVIES: 
            return { ...state, loading: true };
        case MoviesActionTypes.FETCH_MOVIES_SUCESS:
            return { ...state, loading: false, data: action.payload };
        case MoviesActionTypes.FETCH_MOVIES_FAILED:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export {reducer as MoviesReducer};