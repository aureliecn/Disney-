import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/core/models/movie.model';
import { CompagniesService } from 'src/app/core/services/compagnies.service';

@Component({
  selector: 'app-compagny-movies-list',
  templateUrl: './compagny-movies-list.component.html',
  styleUrls: ['./compagny-movies-list.component.scss']
})
export class CompagnyMoviesListComponent implements OnInit {

  movies$!: Observable<Movie[]>
  urlImg!: string

  constructor(
    private compagniesSrv: CompagniesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const compagnyName = this.route.snapshot.params['compagny'];
    this.movies$ = this.compagniesSrv.getAllMoviesByCompagny(compagnyName);
    console.log(this.movies$);

    if(this.compagniesSrv.compagnies.filter(a => a.name === compagnyName)[0]){
      this.urlImg = this.compagniesSrv.compagnies.filter(a => a.name === compagnyName)[0].image
    }

    console.log(this.urlImg);
  }

}
