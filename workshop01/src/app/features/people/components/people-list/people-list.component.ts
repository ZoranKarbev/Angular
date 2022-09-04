import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor(private peopleService: SwapiService) { }

  get peopleObs$() {
    return this.peopleService.peopleObs$;
  }

  ngOnInit(): void {
    this.peopleService.getPeople();
  }
}