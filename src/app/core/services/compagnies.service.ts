import { Injectable } from '@angular/core';
import { Compagny } from '../models/compagny.model';

@Injectable({
  providedIn: 'root'
})
export class CompagniesService {

  constructor() { }

  compagnies: Compagny[] = [
    {
      id: 1,
      name: "Disney",
      image: "../../../assets/img/companies/logo-disney.png"
    },
    {
      id: 2,
      name: "Marvel",
      image: "../../../assets/img/companies/logo-marvel.png"
    },
    {
      id: 3,
      name: "Pixar",
      image: "../../../assets/img/companies/logo-pixar.png"
    },
    {
      id: 4,
      name: "Starwars",
      image: "../../../assets/img/companies/logo-starwars.png"
    }
  ];

  // Méthode retourner le tableau des compagnies
  getAllCompagnies(): Compagny[]{
    return this.compagnies;
  }
}
