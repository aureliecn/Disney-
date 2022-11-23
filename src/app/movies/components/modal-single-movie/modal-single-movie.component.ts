import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SingleMovieComponent } from '../single-movie/single-movie.component';


@Component({
  selector: 'app-modal-single-movie',
  templateUrl: './modal-single-movie.component.html',
  styleUrls: ['./modal-single-movie.component.scss']
})
export class ModalSingleMovieComponent implements OnInit {

  @Input()
  movieId!: number;

  constructor(private dialogRef: MatDialogRef<ModalSingleMovieComponent>) { }

  ngOnInit(): void {
    console.log(this.movieId);
  }

}
