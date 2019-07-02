import cheerio from 'cheerio';
import { Movie } from '../store/movies/types';
import { MovieDetails } from '../store/details/types';
import _ from 'lodash';

const REACT_APP_PROXY_URL: string = "https://cors-anywhere.herokuapp.com";
const tasteApi: string = 'https://tastedive.com/movies/like';
const rottenApi = 'https://www.rottentomatoes.com/m';

export const TASE_ENDPOINT: string = `${REACT_APP_PROXY_URL}/${tasteApi}`;
export const ROTTEN_ENDPOINT: string = `${REACT_APP_PROXY_URL}/${rottenApi}`;

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
    const res = await fetch(`${TASE_ENDPOINT}/${movieTitle}`);
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

export const getMovieDetails = async (movieTitle: string) => {
    const res = await fetch(`${ROTTEN_ENDPOINT}/${movieTitle}`);
    const htmlData = await res.text();

    const $ = cheerio.load(htmlData);

    const results: MovieDetails = {
        synopsis: $('#movieSynopsis').text().trim(),
        poster: $('.movie-thumbnail-wrap img.posterImage').attr('data-src'),
        comments: [],
    };

    let dynamicAttr: {[k: string]: any} = {};

    $('ul.content-meta.info').children().each((i, li) => {
        let propName = $(li).find('.meta-label').text().replace(':', '');
        let propValue = $(li).find('.meta-value').text();
        dynamicAttr[_.snakeCase(propName)] = propValue
            .replace(/(\r\n\s|\n|\r)/gm, '')
            .replace(/(\s\s+)/gm, ' ')
            .trim();
    });

    $('li.quote_bubble').each((i, item) => {
        results.comments.push({
            author: $(item).find('p.quote_bubble__cite-author a').text().replace(/^\s+|\s+$/g, ''),
            message: $(item).find('blockquote p').text().replace(/^\s+|\s+$/g, '')
        });
    });

    $('.mop-audience-reviews__review-item').each((i, item) => {
        results.comments.push({
            author: $(item).find('.mop-audience-reviews__review--name').text().replace(/^\s+|\s+$/g, ''),
            message: $(item).find('.mop-audience-reviews__review--comment').text().replace(/^\s+|\s+$/g, '')
        });
    });

    return { ...results, ...dynamicAttr };
}