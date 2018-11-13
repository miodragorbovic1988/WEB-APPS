export default class Movie {
    constructor(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    getData() {
        return `${this.title}, duration: ${this.length} min, genre: ${this.genre}`;
    }
}

