import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/movie.model";
import { Observable, map, filter } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {

    constructor(
        private http: HttpClient
        ){}

    getBanner(): Observable<Movie>{
        return this.getAllMoviesSuggest().pipe(
            map(e =>{
                return e.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime())[0]
            })
        )
    }

    getAllNewMovies(): Observable<Movie[]>{
        return this.http.get<Movie[]>('https://elorri.fr/api/disney-plus/movies');
    }

    getAllMoviesSuggest(): Observable<Movie[]>{
        return this.http.get<Movie[]>('https://elorri.fr/api/disney-plus/suggest');
    }

    getSingleMovie(movieId: number): Observable<Movie>{
        return this.http.get<Movie>(`https://elorri.fr/api/disney-plus/movie/${movieId}`);
    }
}