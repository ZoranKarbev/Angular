import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from '../interfaces/planet';
import { EMPTY, expand, map, Observable, reduce } from 'rxjs';
import { Person } from '../interfaces/person';

// const BASE_URL = 'https://swapi.dev/api'
const PLANETS_URL = 'https://swapi.dev/api/planets/'
const PEOPLE_URL = 'https://swapi.dev/api/people/'

@Injectable({
  providedIn: 'root'
})
export class SwapiRepositoryService {
  constructor(private http: HttpClient) {}
  
  fetchPlanets(): Observable<Planet[]> {
    return this.http.get(PLANETS_URL).pipe(
      map((response: any) => response),
      expand(data => data.next ? this.http.get(data.next) : EMPTY),
      reduce((acc: any, current: any) => acc.concat(current.results), [])
    )
  }
  
  fetchPlanetById(planetId: string): Observable<Planet> {
    return this.http
    .get(PLANETS_URL + planetId)
    .pipe(map((data) => data as Planet))
  } 

   fetchPeople(): Observable<Person[]> {
    return this.http.get(PEOPLE_URL).pipe(
      map((data: any) => data),
      expand(data => data.next ? this.http.get(data.next) : EMPTY),
      reduce((acc: any, current: any) => acc.concat(current.results), [])
    )
  }
  
  fetchPersonById(personId: string): Observable<Person> {
    return this.http
    .get(PEOPLE_URL + personId)
    .pipe(map((data) => data as Person))   
  }
 
}