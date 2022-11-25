import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { AngularMaterialModule } from '../material.module';
import { ModalSingleMovieComponent } from './components/modal-single-movie/modal-single-movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';



@NgModule({
  declarations: [
    SingleMovieComponent,
    ModalSingleMovieComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    MoviesListComponent,
    SingleMovieComponent,
    ModalSingleMovieComponent
  ]
})
export class MoviesModule { }
