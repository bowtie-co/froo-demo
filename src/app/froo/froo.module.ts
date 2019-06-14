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

@NgModule({
  declarations: [FrooComponent, SidebarComponent, HomeComponent, EventComponent, EventConfirmComponent, PageTitleComponent, ThanksComponent],
  imports: [
    CommonModule,
    FormsModule,
    FrooRoutingModule
  ]
})
export class FrooModule { }
