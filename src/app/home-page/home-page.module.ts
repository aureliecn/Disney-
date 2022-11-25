import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CompagniesModule } from '../compagnies/compagnies.module';
import { MoviesModule } from '../movies/movies.module';



@NgModule({
    declarations: [
        HomePageComponent
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        CompagniesModule,
        MoviesModule,
    ]
})
export class HomePageModule { }
