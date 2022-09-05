import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';

@NgModule({
  declarations: [
    PlanetsListComponent,
    PlanetDetailsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
