import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrooComponent } from './froo.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {
    path: 'froo' ,
    component: FrooComponent,
    children: [
      { path: '', component: EventComponent },
      { path: 'home', component: HomeComponent },
      { path: 'event', component: EventComponent },
      { path: 'thanks', component: ThanksComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrooRoutingModule { }
