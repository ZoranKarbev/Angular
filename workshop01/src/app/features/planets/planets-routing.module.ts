import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

const routes: Routes = [
  {path:'', component: PlanetsListComponent, title: 'Planets'},
  {path:'details/:id', component: PlanetDetailsComponent, title: 'Planet Details'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
