import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../interfaces/person';
import { Planet } from '../interfaces/planet';
import { SwapiRepositoryService } from './swapi-repository.service';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  constructor( 
    private swapiRepositoryService: SwapiRepositoryService,
    // private router: Router
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
    console.log('Planets Subject', this.planetsSubject)
    console.log('Planets Subject Value', this.planetsSubject.getValue())
    console.log('Planets Subject Obs', this.planetsObs$)     
    this.swapiRepositoryService.fetchPlanets().subscribe({
      // next: (planets: Planet[]) => this.planetsSubject.next(planets),
      next: (planets: Planet[]) => {        
        console.log("Planets", planets);
        this.planetsSubject.next(planets);
      },
      error: (err) => console.error(err)
    })    
    console.log('Planets Subject Value', this.planetsSubject.getValue())
    console.log('Planets Subject', this.planetsSubject)
    console.log('Planets Subject Obs', this.planetsObs$)
  }

  getPlanetById(planetId: string) {
    this.swapiRepositoryService.fetchPlanetById(planetId).subscribe({
      next: (planet: Planet) => {
        console.log("Planet", planet);
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
        console.log("People", people)
        this.peopleSubject.next(people)        
      },
      error: (err) => console.error(err) 
    })    
  }

  getPersonByIs(personId: string) {
    this.swapiRepositoryService.fetchPersonById(personId).subscribe({
      next: (person: Person) => {
        console.log("Person", person)
        this.selectedPersonSubject.next(person)
      },
      error: (err) => console.error(err)
    })
  }

  onPersonSelect(person: Person) {
    this.selectedPersonSubject.next(person);
  }
}
