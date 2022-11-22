import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  movie$!: Observable<Movie[]>;

  constructor(
    private moviesSrv: MoviesService
  ) { }

  ngOnInit(): void {
    this.movie$ = this.moviesSrv.getAllMoviesSuggest();
  }

}
