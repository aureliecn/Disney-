import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompagniesListComponent } from './components/compagnies-list/compagnies-list/compagnies-list.component';
import { CompagnyMoviesListComponent } from './components/compagny-movies-list/compagny-movies-list/compagny-movies-list.component';
import { HomePageModule } from '../home-page/home-page.module';



@NgModule({
  declarations: [
    CompagniesListComponent,
    CompagnyMoviesListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CompagniesListComponent,
    CompagnyMoviesListComponent
  ]
})
export class CompagniesModule { }
