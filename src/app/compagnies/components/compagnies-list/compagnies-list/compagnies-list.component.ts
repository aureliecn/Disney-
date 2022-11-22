import { Component, OnInit } from '@angular/core';
import { Compagny } from 'src/app/core/models/compagny.model';
import { CompagniesService } from 'src/app/core/services/compagnies.service';

@Component({
  selector: 'app-compagnies-list',
  templateUrl: './compagnies-list.component.html',
  styleUrls: ['./compagnies-list.component.scss']
})
export class CompagniesListComponent implements OnInit {

  compagnies!: Compagny[];

  constructor(private compagniesSrv: CompagniesService) { }

  ngOnInit(): void {
    this.compagnies = this.compagniesSrv.getAllCompagnies();
  }

}
