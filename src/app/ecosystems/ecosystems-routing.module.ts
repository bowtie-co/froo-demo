import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  DashboardComponent,
  RacerDetailComponent,
  RacersComponent,
  ResultsComponent,
} from './';

import { EcosystemsComponent } from './ecosystems.component';

const routes: Routes = [
  { path: 'racers', component: EcosystemsComponent, children: [{ path: "", component:RacersComponent }] },
  { path: 'racers/:id', component: EcosystemsComponent, children: [{ path: "", component:RacerDetailComponent }] },
  { path: 'dashboard', component: EcosystemsComponent, children: [{ path: "", component:DashboardComponent }]},
  { path: 'results', component: EcosystemsComponent, children: [{ path: "", component:ResultsComponent }] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class EcosystemsRoutingModule { }
