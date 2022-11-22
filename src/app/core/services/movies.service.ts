import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../models/movie.model";
import { Observable, filter } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class MoviesService {

    constructor(
        private http: HttpClient
        ){}

    getBanner(): Observable<Movie>{
        return this.getAllMoviesSuggest.pipe(
            filter(

            )
        );
    }

    getAllNewMovies(): Observable<Movie[]>{
        return this.http.get<Movie[]>('https://elorri.fr/api/disney-plus/movies');
    }

    getAllMoviesSuggest(): Observable<Movie[]>{
        return this.http.get<Movie[]>('https://elorri.fr/api/disney-plus/suggest');
    }
}