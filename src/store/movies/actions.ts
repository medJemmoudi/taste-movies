import { MoviesActionTypes, Movie } from './types';
import { action } from 'typesafe-actions';

export const fetchSimilarMovies = (title: string) => action(MoviesActionTypes.FETCH_SIMILAR_MOVIES);

export const fetchMoviesSucces = (data: Movie[]) => action(MoviesActionTypes.FETCH_MOVIES_SUCESS, data);

export const fetchMoviesFailed = (error: string) => action(MoviesActionTypes.FETCH_MOVIES_FAILED, error);