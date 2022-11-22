import { Component, Input, OnInit } from '@angular/core';
import { CompagniesModule } from 'src/app/compagnies/compagnies.module';
import { CompagniesService } from 'src/app/core/services/compagnies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // @Input() compagny!: CompagniesModule;
  constructor() { }

  ngOnInit(): void {
  }

}
