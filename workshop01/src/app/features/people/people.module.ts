import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';



@NgModule({
  declarations: [
    PeopleListComponent,
    PersonDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
