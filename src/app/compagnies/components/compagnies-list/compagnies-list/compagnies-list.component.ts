import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compagny } from 'src/app/core/models/compagny.model';
import { CompagniesService } from 'src/app/core/services/compagnies.service';

@Component({
  selector: 'app-compagnies-list',
  templateUrl: './compagnies-list.component.html',
  styleUrls: ['./compagnies-list.component.scss']
})
export class CompagniesListComponent implements OnInit {

  compagnies!: Compagny[];

  constructor(
    private compagniesSrv: CompagniesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.compagnies = this.compagniesSrv.getAllCompagnies();
  }

  onClick(compagnyName: string) {
    this.router.navigateByUrl(`/${compagnyName}`);
  }

}
