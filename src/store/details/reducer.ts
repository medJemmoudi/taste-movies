import { Reducer } from "redux";
import { MovieDetailsState, MovieDetailsActionTypes } from "./types";

const initialState: MovieDetailsState = {
    details: {
        comments: [],
        synopsis: ""
    },
    loading: false,
    errors: ""
}

const reducer: Reducer<MovieDetailsState> = (state = initialState, action) => {
    switch (action.type) {
        case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS:
            return { ...state, loading: true };
        case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCESS:
            return { ...state, loading: false, details: action.payload };
        case MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAILED:
            return { ...state, loading: false, errors: action.payload };
        default:
            return state;
    }
}

export { reducer as MovieDetailsReducer };