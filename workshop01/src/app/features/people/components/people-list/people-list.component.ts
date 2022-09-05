import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwapiService } from 'src/app/services/swapi.service';
import { Person } from "src/app/interfaces/person";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] =[];
  constructor(private peopleService: SwapiService, private router: Router) { }

  ngOnInit(): void {
    this.peopleService.getPeople();
    this.peopleService.peopleObs$.subscribe({
      next: (people) => (this.people = people),
    })
  }

  onPersonClick(person: Person) {
    this.peopleService.onPersonSelect(person);
    const id = person.url.split("/").slice(-2)[0];
    this.router.navigate(["people/details", id])
  }
}