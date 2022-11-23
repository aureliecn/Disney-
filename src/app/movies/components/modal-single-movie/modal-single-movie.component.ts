import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';
import { SingleMovieComponent } from '../single-movie/single-movie.component';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';


@Component({
  selector: 'app-modal-single-movie',
  templateUrl: './modal-single-movie.component.html',
  styleUrls: ['./modal-single-movie.component.scss']
})
export class ModalSingleMovieComponent implements OnInit {

  @Input()
  movieId!: number;
  movie$!: Observable<Movie>;

  constructor(
    private dialogRef: MatDialogRef<ModalSingleMovieComponent>,
    private movieSrv: MoviesService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    console.log(this.movieId);

    this.movie$ = this.movieSrv.getSingleMovie(this.movieId);
  }

  getVideoUrl(video: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(video);
  }

}
