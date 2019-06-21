import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FrooRoutingModule } from './froo-routing.module';
import { FrooComponent } from './froo.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { EventConfirmComponent } from './event-confirm/event-confirm.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ThanksComponent } from './thanks/thanks.component';
import { IncidentComponent } from './incident/incident.component';
import { TimeOfIncidentComponent } from './incident/time-of-incident/time-of-incident.component';
import { RaceDetailsComponent } from './incident/race-details/race-details.component';
import { LocationDetails1Component } from './incident/location-details1/location-details1.component';
import { LocationDetails2Component } from './incident/location-details2/location-details2.component';
import { LocationDetails3Component } from './incident/location-details3/location-details3.component';
import { SidebarListComponent } from '../molecules';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FrooComponent, SidebarComponent, HomeComponent, EventComponent, EventConfirmComponent, PageTitleComponent, ThanksComponent, IncidentComponent, TimeOfIncidentComponent, RaceDetailsComponent, LocationDetails1Component, LocationDetails2Component, LocationDetails3Component, SidebarListComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    FrooRoutingModule
  ]
})
export class FrooModule { }
