export class Movie {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public releaseDate: string,
        public poster: string,
        public cover: string,
        public highlighted: boolean,
        public duration: number,
        public video: string,
        public company: string
    ){}
}