import { Reducer, AnyAction } from "redux";
import { MoviesState, MoviesActionTypes } from "./types";
import { createReducer } from "../../utils/sauce";

const initialState: MoviesState = {
    loading: false,
    data: [],
    error: ''
}

const beginFetch = (state = initialState, action: AnyAction) => {
    return { ...state, loading: true };
}

const success = (state = initialState, action: AnyAction) => {
    return { ...state, loading: false, data: action.payload };
}

const failure = (state = initialState, action: AnyAction) => {
    return { ...state, loading: false, error: action.payload };
}

const HANDLERS = {
    [MoviesActionTypes.FETCH_SIMILAR_MOVIES]: beginFetch,
    [MoviesActionTypes.FETCH_MOVIES_SUCESS]: success,
    [MoviesActionTypes.FETCH_MOVIES_FAILED]: failure,
}

const reducer: Reducer<MoviesState> = createReducer(initialState, HANDLERS);

export {reducer as MoviesReducer};