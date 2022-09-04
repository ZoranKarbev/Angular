import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent, title: 'People'},
  { path: 'details/:id', component: PersonDetailsComponent, title: 'Person'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
