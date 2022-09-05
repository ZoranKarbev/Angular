import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planet } from 'src/app/interfaces/planet';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {
  planets: Planet[];
  constructor(private planetService: SwapiService, private router: Router) { }
 
  ngOnInit(): void {
    this.planetService.getPlanets()
    this.planetService.planetsObs$.subscribe({
      next: (planets) => (this.planets = planets),
    })
  }

  onPlanetClick(planet: Planet) {
    this.planetService.onPlanetSelect(planet);
    const id = planet.url.split("/").slice(-2)[0];
    this.router.navigate(['planets/details', id])
  }
}