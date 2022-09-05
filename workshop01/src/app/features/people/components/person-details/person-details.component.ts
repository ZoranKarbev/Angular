import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  selectedPerson: Person | null;
  personId: string;
  people: Person[];
  constructor(
    private peopleService: SwapiService,
    private route: ActivatedRoute
  ) { 
    this.personId = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
  const person = this.peopleService.selectedPersonSubject.getValue();
  if(!person?.name) {
    this.peopleService.getPersonById(this.personId);
  }
  this.peopleService.selectedPersonObs$.subscribe({
    next: (person) => (this.selectedPerson = person)
  })
  }
}
