import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMoviesListComponent } from './components/new-movies-list/new-movies-list/new-movies-list.component';
import { SuggestMoviesListComponent } from './components/suggest-movies-list/suggest-movies-list.component';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { AngularMaterialModule } from '../material.module';
import { ModalSingleMovieComponent } from './components/modal-single-movie/modal-single-movie.component';



@NgModule({
  declarations: [
    NewMoviesListComponent,
    SuggestMoviesListComponent,
    SingleMovieComponent,
    ModalSingleMovieComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    NewMoviesListComponent,
    SuggestMoviesListComponent,
  ]
})
export class MoviesModule { }
