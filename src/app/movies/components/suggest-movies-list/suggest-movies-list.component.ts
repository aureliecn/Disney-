import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-suggest-movies-list',
  templateUrl: './suggest-movies-list.component.html',
  styleUrls: ['./suggest-movies-list.component.scss']
})
export class SuggestMoviesListComponent implements OnInit {

  movies$!: Observable<Movie[]>;

  constructor(
    private moviesSrv: MoviesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.movies$ = this.moviesSrv.getAllMoviesSuggest();
  }

  onClick(movieId: number): void{
    console.log(movieId);
    this.router.navigateByUrl(`/movie/${movieId}`)
  }

}
