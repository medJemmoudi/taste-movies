import { Movie } from '../../store/movies/types';
import _ from 'lodash';

const REACT_APP_PROXY_URL: string = "https://cors-anywhere.herokuapp.com";
const omdbAPI: string = 'http://www.omdbapi.com/?apikey=21f02d4c&t=';
const tmdbAPI = 'https://api.themoviedb.org/3/movie/:movieID/similar?api_key=8d2c57899db28dbf5a8d6b48f01033d8&language=en-US&page=1';

export const OMDB_ENDPOINT: string = `${omdbAPI}`;
export const ROTTEN_ENDPOINT: string = `${REACT_APP_PROXY_URL}/${tmdbAPI}`;

export const getSimilarMovies = async (movieTitle: string) => {
    const endpoint = _.replace(tmdbAPI, ':movieID', movieTitle);
    const res = await fetch(endpoint);
    const jsonData = await res.json();
    const results: Movie[] = [];

    jsonData.results.map((el: Record<string, any>) => {
        results.push({
            poster: `http://image.tmdb.org/t/p/w185/${el.poster_path}`,
            title: el.original_title,
            year: el.release_date,
            likes: el.vote_count,
            rating: el.vote_average,
        });
    });

    return results;
};
