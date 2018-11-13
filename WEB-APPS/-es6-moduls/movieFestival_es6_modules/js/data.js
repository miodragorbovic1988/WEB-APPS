import Movie from './movies.js';

const data = {
    movies: []
}
let createMovieData = ({ title, genre, length }) => new Movie(title, genre, length);

let addMovieToList = (movie) => {
    data.movies.push(movie);
}
export {
    createMovieData,
    addMovieToList
}
