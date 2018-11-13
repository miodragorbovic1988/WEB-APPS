import * as data from './data.js';
import * as ui from './ui.js';

// import { collectFormInput } from './ui.js';
// import { createMovieData } from './data.js';
// import { addMovieToList } from './data.js';

export const init = () => {
    setupEventHandlers()
}
const setupEventHandlers = (params) => {
    const $createMovie = document.querySelector('#createMovie');
    $createMovie.addEventListener('click', onAddMovieHandler);
}

const onAddMovieHandler = () => {
    const inputData = ui.collectFormInput();
    const movie = data.createMovieData(inputData);

    data.addMovieToList(movie);
    ui.displeyMovieData(movie.getData());

}

