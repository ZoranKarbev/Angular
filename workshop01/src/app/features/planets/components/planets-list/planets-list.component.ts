import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  constructor(private planetService: SwapiService) { }
 
  get planetsObs$() {
    return  this.planetService.planetsObs$;
  }

  ngOnInit(): void {
    this.planetService.getPlanets()
  }
}