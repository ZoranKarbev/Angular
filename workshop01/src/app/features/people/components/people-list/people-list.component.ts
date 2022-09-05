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
  people: Person[];
  showLoader: boolean = true;
  constructor(private peopleService: SwapiService, private router: Router) { }

  // get peopleObs$() {
  //   return this.peopleService.peopleObs$;
  // }

  ngOnInit(): void {
    this.peopleService.getPeople();
    this.peopleService.peopleObs$.subscribe({
      next: (people) => (this.people = people),
    })
  }

  onPersonClick(person: Person) {
    console.log("Person", person);
    this.peopleService.onPersonSelect(person);
    const id = person.url.split("/").slice(-2)[0];
    console.log("ID", id)
    this.router.navigate(["people/details", id])
  }
}