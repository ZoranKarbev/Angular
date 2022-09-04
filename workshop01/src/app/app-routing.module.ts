import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Swapi App'},
  {
    path: 'people',
    loadChildren: () => 
      import('./features/people/people.module')
        .then((module) => module.PeopleModule)
  },
  {
    path: 'planets',
    loadChildren: () =>
      import('./features/planets/planets.module')
      .then((module) => module.PlanetsModule)
  },
  { path: 'page-not-found', component: PageNotFoundComponent, title: 'Page Not Found'},
  { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
