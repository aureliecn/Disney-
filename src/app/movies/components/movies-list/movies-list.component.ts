import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent {

  @Input()
  type: string = 'new' || 'suggest';

  movies$!: Observable<Movie[]>;

  constructor(
    private moviesSrv: MoviesService,
    private router: Router
  ){}

  ngOnInit(): void {

    this.type === "new" ? this.movies$ = this.moviesSrv.getAllNewMovies() : this.movies$ = this.moviesSrv.getAllMoviesSuggest()

  }

  onClick(movieId: number): void{
    console.log(movieId);
    this.router.navigateByUrl(`/movie/${movieId}`)
  }
}
