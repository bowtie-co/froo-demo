import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../../events.service';
import { FrooService } from '../../froo.service';

import { InputBox } from '../../classes/input-box';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  //findEventName: string;
  //findEventPermit: string;
  //findEventId: number;

  findEventName = new InputBox('eventName', 'Event Name', '', 'Search Event Name', false, true)
  findEventPermit = new InputBox('eventPermit', 'Event Permit', '', 'Permit#', false, true)
  findEventId = new InputBox('eventId', 'Event Id', '', 'Event#', false, true)

  eventsList = {};

  selectedEvent: number;
  isConfirmed: boolean;
  pageTitle = 'Find Event';

  eventError: string;

  constructor(
    private events:EventsService, 
    private router: Router,
    private froo : FrooService
  ) { 
    this.findEventName.setRules({'minlength' : 6, 'maxlength': 20})
    this.findEventPermit.setRules({'minlength' : 6, 'maxlength': 30})
    this.findEventId.setRules({'minlength' : 1, 'maxlength': 8})
  }

  ngOnInit() {
    this.froo.setState(0);
    this.isConfirmed = false;
  }

  getEventName($event: any) {
    this.findEventName.content = $event
  }

  getEventId($event: any) {
    this.findEventId.content = $event
  }

  getEventPermit($event: any) {
    this.findEventPermit.content = $event
  }

  findEvents() {
    let criteria:any = {};
    if(typeof(this.findEventName.content) != "undefined"){
      criteria.name = this.findEventName.content;
    }
    if(typeof(this.findEventId.content) != "undefined"){
      criteria.id = this.findEventId.content;
    }
    if(typeof(this.findEventPermit.content) != "undefined"){
      criteria.permit = this.findEventPermit.content;
    }

    console.log(criteria);
    this.events.searchEvents(criteria).subscribe(results => {
      this.eventsList = results
      if(results === null || results === undefined) {
        this.eventError = "Event not found by this search critera";
      } else {
        if(Object.keys(results).length > 0) {
          this.eventError = "";
        } 
      }
    }, (error) =>  {
      this.eventError = "Service is not available";
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
