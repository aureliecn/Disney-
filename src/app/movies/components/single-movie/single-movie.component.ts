import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';
import { ModalSingleMovieComponent } from '../modal-single-movie/modal-single-movie.component';


@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {

  movie$!: Observable<Movie>;
  movieId!: number;

  constructor(
    private movieSrv: MoviesService,
    private route: ActivatedRoute,
    public modal: MatDialog,
  ) { }

  ngOnInit(): void {

    this.movieId = +this.route.snapshot.params['id'];

    this.movie$ = this.movieSrv.getSingleMovie(this.movieId);
    console.log(this.movie$);
  }

  openModal(movieId: number){
    let dialogRef = this.modal.open(ModalSingleMovieComponent, {
      width: '70%'
    });
    dialogRef.componentInstance.movieId = movieId
  }
}
