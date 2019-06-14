import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../../events.service';
import { FrooService } from '../../froo.service';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  crire
  findEventName: string;
  findEventPermit: string;
  findEventId: number;

  eventsList = {};

  selectedEvent: number;
  isConfirmed: boolean;
  pageTitle = 'Find Event';

  constructor(
    private events:EventsService, 
    private router: Router,
    private froo : FrooService
  ) { 

  }

  ngOnInit() {
    this.froo.setState(0);
    this.isConfirmed = false;
  }

  findEvents() {
    let criteria:any = {};
    if(typeof(this.findEventName) != "undefined"){
      criteria.name = this.findEventName;
    }
    if(typeof(this.findEventId) != "undefined"){
      criteria.id = this.findEventId;
    }
    if(typeof(this.findEventPermit) != "undefined"){
      criteria.permit = this.findEventPermit;
    }

    console.log(criteria);
    this.events.searchEvents(criteria).subscribe(results => {
      console.log(results);
      this.eventsList = results
    });
  }

  selectEvent(event: any){
    this.froo.setEvent(event);
    this.selectedEvent = event.event_id
  }

  nextProc() {
    this.isConfirmed = true;
  }
}
