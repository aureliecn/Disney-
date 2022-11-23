import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompagnyMoviesListComponent } from "./compagnies/components/compagny-movies-list/compagny-movies-list/compagny-movies-list.component";
import { HomePageComponent } from "./home-page/components/home-page/home-page.component";
import { SingleMovieComponent } from "./movies/components/single-movie/single-movie.component";

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'movie/:id', component: SingleMovieComponent },
    { path: ':compagny', component: CompagnyMoviesListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{
        
}