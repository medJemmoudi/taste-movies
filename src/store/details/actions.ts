import { action } from 'typesafe-actions';
import { MovieDetailsActionTypes, MovieDetails } from './types';

export const fetchMovieDetails = (slug: string) => action(
    MovieDetailsActionTypes.FETCH_MOVIE_DETAILS,
    slug
);

export const fetchMovieDetailsSuccess = (details: MovieDetails) => action(
    MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_SUCCESS,
    details
);

export const fetchMovieDetailsFailed = (error: string) => action(
    MovieDetailsActionTypes.FETCH_MOVIE_DETAILS_FAILED,
    error
);