import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/components/home-page/home-page.component";

const routes: Routes = [
    { path: '', component: HomePageComponent },
    // { path: 'moovie/:id', component: comp }
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