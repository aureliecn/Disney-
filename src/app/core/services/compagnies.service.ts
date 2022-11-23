import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Compagny } from '../models/compagny.model';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class CompagniesService {

  constructor(
    private http: HttpClient
  ) { }

  compagnies: Compagny[] = [
    {
      id: 1,
      name: "disney",
      image: "../../../assets/img/companies/logo-disney.png"
    },
    {
      id: 2,
      name: "marvel",
      image: "../../../assets/img/companies/logo-marvel.png"
    },
    {
      id: 3,
      name: "pixar",
      image: "../../../assets/img/companies/logo-pixar.png"
    },
    {
      id: 4,
      name: "starwars",
      image: "../../../assets/img/companies/logo-starwars.png"
    }
  ];

  // Méthode retourner le tableau des compagnies
  getAllCompagnies(): Compagny[]{
    return this.compagnies;
  }

  getAllMoviesByCompagny(compagnyName: string): Observable<Movie[]>{
    return this.http.get<Movie[]>(`https://elorri.fr/api/disney-plus/company/${compagnyName}`);
  }
}
