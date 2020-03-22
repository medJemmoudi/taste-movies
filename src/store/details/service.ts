import { Movie } from '../../store/movies/types';
import { MovieDetails } from '../../store/details/types';
import _ from 'lodash';

const REACT_APP_PROXY_URL: string = "https://cors-anywhere.herokuapp.com";
const omdbAPI: string = 'http://www.omdbapi.com/?apikey=21f02d4c&t=';
const tmdbAPI = 'https://api.themoviedb.org/3/movie/:movieID/similar?api_key=8d2c57899db28dbf5a8d6b48f01033d8&language=en-US&page=1';

export const OMDB_ENDPOINT: string = `${omdbAPI}`;
export const ROTTEN_ENDPOINT: string = `${REACT_APP_PROXY_URL}/${tmdbAPI}`;

export const getMovieDetails = async (movieTitle: string) => {
    const res = await fetch(`${OMDB_ENDPOINT}${movieTitle}`);
    const jsonData = await res.json();

    const results: MovieDetails = {
        synopsis: jsonData.Plot,
        poster: jsonData.Poster,
        comments: [],
    };

    return { ...results };
};
