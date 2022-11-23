import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CompagniesModule } from '../compagnies/compagnies.module';
import { NewMoviesListComponent } from '../movies/components/new-movies-list/new-movies-list/new-movies-list.component';
import { MoviesModule } from '../movies/movies.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CompagniesModule,
    MoviesModule, 
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
