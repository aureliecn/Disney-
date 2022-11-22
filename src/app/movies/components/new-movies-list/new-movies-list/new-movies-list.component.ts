import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-new-movies-list',
  templateUrl: './new-movies-list.component.html',
  styleUrls: ['./new-movies-list.component.scss']
})
export class NewMoviesListComponent implements OnInit {

  movies$!: Observable<Movie[]>;
  
  constructor(
    private moviesSrv: MoviesService
  ) { }

  ngOnInit(): void {
    this.movies$ = this.moviesSrv.getAllNewMovies();
  }

}
