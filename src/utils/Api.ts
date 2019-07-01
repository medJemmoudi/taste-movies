import cheerio from 'cheerio';
import { Movie } from '../store/movies/types';

export const makeRequest = async (url: string, method: string = 'get', data: Record<string, any> = {}) => {
    let config: Record<string, any> = { method };

    if (method.toLowerCase() === 'post') {
        config.body = JSON.stringify(data);
    }

    // setting headers
    config.headers = { Accept: 'application/json' };

    const res = await fetch(url, config);
    return await res.json();
}

export const getSimilarMovies = async (movieTitle: string) => {
    const REACT_APP_PROXY_URL: string = "https://cors-anywhere.herokuapp.com";
    const tasteApi: string = 'https://tastedive.com/movies/like';
    const res = await fetch(`${REACT_APP_PROXY_URL}/${tasteApi}/${movieTitle}`);
    const htmlData = await res.text();

    const $ = cheerio.load(htmlData);
    const results: Movie[] = [];

    $('.tk-Resource').each((i, el) => {
        let currentEl = $(el);
        results.push({
            poster: currentEl.find('meta[itemprop="image"]').attr('content'),
            title: currentEl.find('.tk-Resource-title').text(),
            year: currentEl.find('.tk-Resource-type').text(),
            likes: currentEl.find('.js-card-likes-counter').text(),
            rating: currentEl.find('.tk-Rating-score--resource-card').text().trim(),
        });
    });

    return results;
}