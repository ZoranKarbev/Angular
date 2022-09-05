import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from '../interfaces/person';
import { Planet } from '../interfaces/planet';
import { SwapiRepositoryService } from './swapi-repository.service';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor( 
    private swapiRepositoryService: SwapiRepositoryService,
  ) { }

  planetsSubject = new BehaviorSubject<Planet[]>([]);
  planetsObs$ = this.planetsSubject.asObservable();

  selectedPlanetSubject = new BehaviorSubject<Planet | null>(null);
  selectedPlanetObs$ = this.selectedPlanetSubject.asObservable();
  
  peopleSubject = new BehaviorSubject<Person[]>([]);
  peopleObs$ = this.peopleSubject.asObservable();

  selectedPersonSubject = new BehaviorSubject<Person | null>(null);
  selectedPersonObs$ = this.selectedPersonSubject.asObservable();
  
  getPlanets() {
    this.swapiRepositoryService.fetchPlanets().subscribe({
      next: (planets: Planet[]) => {        
        this.planetsSubject.next(planets);
      },
      error: (err) => console.error(err)
    })    
  }

  getPlanetById(planetId: string) {
    this.swapiRepositoryService.fetchPlanetById(planetId).subscribe({
      next: (planet: Planet) => {
        this.selectedPlanetSubject.next(planet)
      },
      error: (err) => console.error(err)
    })
  }

  onPlanetSelect(planet: Planet) {
    this.selectedPlanetSubject.next(planet);
  }

  getPeople() {
    this.swapiRepositoryService.fetchPeople().subscribe({
      next: (people: Person[]) => {
        this.peopleSubject.next(people)        
      },
      error: (err) => console.error(err) 
    })    
  }

  getPersonById(personId: string) {
    this.swapiRepositoryService.fetchPersonById(personId).subscribe({
      next: (person: Person) => {
        this.selectedPersonSubject.next(person)
      },
      error: (err) => console.error(err)
    })
  }

  onPersonSelect(person: Person) {
    this.selectedPersonSubject.next(person);
  }
}