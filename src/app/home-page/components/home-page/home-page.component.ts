import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // @Input() compagny!: CompagniesModule;

  movie$!: Observable<Movie>;

  constructor(
    private moviesSrv: MoviesService
  ) { }

  ngOnInit(): void {

    this.movie$ = this.moviesSrv.getBanner();
  }

}
