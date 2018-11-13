

const $title = document.querySelector("#title");
const $movieLength = document.querySelector("#movieLength");
const $genre = document.querySelector("#genre");

const collectFormInput = () => {
    const parseFloatMovieLength = Number.parseFloat($movieLength.value);
    const movieTitle = $title.value.trim();
    const movieLength = parseFloatMovieLength;
    const movieGenre = $genre.value;

    return {
        movieTitle,
        movieLength,
        movieGenre
    }
}
const displeyMovieData = () => {
    return `${movieTitle} ${movieLength} ${movieGenre}`
}

export { collectFormInput }
export { displeyMovieData }

