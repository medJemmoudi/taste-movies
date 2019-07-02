export interface Comment {
    author: string;
    message: string;
}

export interface MovieDetails {
    synopsis: string;
    comments: Comment[];
    rating?: string;
    genre?: string;
    directed_by?: string;
    written_by?: string;
    in_theaters?: string;
    on_disc_streaming?: string;
    box_office?: string;
    runtime?: string;
    studio?: string;
}

export enum MovieDetailsActionTypes {
    FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS',
    FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS',
    FETCH_MOVIE_DETAILS_FAILED = 'FETCH_MOVIE_DETAILS_FAILED',
}

export interface MovieDetailsState {
    details: MovieDetails;
    errors: string;
    loading: boolean;
}