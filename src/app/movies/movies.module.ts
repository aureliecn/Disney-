import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMoviesListComponent } from './components/new-movies-list/new-movies-list/new-movies-list.component';
import { SuggestMoviesListComponent } from './components/suggest-movies-list/suggest-movies-list.component';
import { BannerComponent } from './components/banner/banner.component';



@NgModule({
  declarations: [
    NewMoviesListComponent,
    SuggestMoviesListComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewMoviesListComponent,
    SuggestMoviesListComponent,
    BannerComponent
  ]
})
export class MoviesModule { }
