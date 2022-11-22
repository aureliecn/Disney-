export class Movie {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public releaseDate: Date,
        public poster: string,
        public cover: string,
        public highlighted: boolean
    ){}
}