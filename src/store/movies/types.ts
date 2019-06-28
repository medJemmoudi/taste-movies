export interface Movie {
    poster: string;
    title: string;
    year: string;
    likes: string;
    rating: string;
}

export interface MoviesState {
    data: Movie[];
    loading: boolean;
    error: string
}

export enum MoviesActionTypes {
    FETCH_SIMILAR_MOVIES = 'movies/FETCH_SIMILAR_MOVIES',
    FETCH_MOVIES_SUCESS  = 'movies/FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_FAILED  = 'movies/FETCH_MOVIES_FAILED',
}