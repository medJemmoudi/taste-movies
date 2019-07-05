import { Reducer, AnyAction } from "redux";
import { MovieDetailsState, MovieDetailsActionTypes } from "./types";
import { createReducer } from "../../utils/sauce";

const initialState: MovieDetailsState = {
    details: {
        comments: [],
        synopsis: ""
    },
    loading: false,
    errors: ""
}

const fetchDetails = (state = initialState, action: AnyAction) => {
    return {...state, loading: true};
}

const fetchSuccess = (state = initialState, action: AnyAction) => {
    return { ...state, loading: false, details: action.payload };
}

const fetchFailed = (state = initialState, action: AnyAction) => {
    return { ...state, loading: false, errors: action.payload };
}

const HANDLERS = {
    [MovieDetailsActionTypes.FETCH_MOVIE_DETAILS]: fetchDetails,
    [MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCESS]: fetchSuccess,
    [MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAILED]: fetchFailed,
}

const reducer: Reducer<MovieDetailsState> = createReducer(initialState, HANDLERS);

export { reducer as MovieDetailsReducer };