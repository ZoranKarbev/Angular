import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/interfaces/planet';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {
  selectedPlanet: Planet | null;
  planetId:string;
  planets: Planet[];

  constructor(
    private planetService: SwapiService,
    private route: ActivatedRoute,
  ) { 
    this.planetId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    const planet = this.planetService.selectedPlanetSubject.getValue();
    if(!planet?.name) {
      this.planetService.getPlanetById(this.planetId);
    } 

    this.planetService.selectedPlanetObs$.subscribe({
      next: (planet) => (this.selectedPlanet = planet)
    })
  }
}