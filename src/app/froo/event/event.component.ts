import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../../events.service';
import { FrooService } from '../../froo.service';
import { stringify } from '@angular/compiler/src/util';
import { FormBuilder, FormGroup } from '@angular/forms';


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

  eventError: string;

  form:FormGroup;

  constructor(
    private fb: FormBuilder,
    private events:EventsService, 
    private router: Router,
    private froo : FrooService
  ) { 

  }

  ngOnInit() {
    this.froo.setState(0);
    this.isConfirmed = false;

    this.form = this.fb.group({
      eventName: this.findEventName,
      eventPermit: this.findEventPermit,
      eventId: this.findEventId
    });
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

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { createCounterRangeValidator } from './counter-input.component';

// @Component({
//   selector: 'my-app',
//   template: `
//     <h2>Inside Form</h2>
//     <div>
//       <label>Change min value:</label>
//       <input [(ngModel)]="minValue">
//     </div>
//     <div>
//       <label>Change max value:</label>
//       <input [(ngModel)]="maxValue">
//     </div>
//     <form [formGroup]="form">
//       <p>Control value: {{form.controls.counter.value}}</p>
//       <p>Min Value: {{minValue}}</p>
//       <p>Max Value: {{maxValue}}</p>
//       <p>Form Value:</p>
//       <pre>{{ form.value | json }}</pre>
      
//       <counter-input
//         formControlName="counter"
//         [counterRangeMax]="maxValue"
//         [counterRangeMin]="minValue"
//         [counterValue]="50"
//         ></counter-input>
//     </form>

//     <p *ngIf="!form.valid">Form is invalid!</p>

    
//     <h2>Standalone</h2>
//     <counter-input
//       counterMinValue="0"
//       counterMaxValue="3"
//       [counterValue]="counterValue"></counter-input>
//   `
// })
// export class AppComponent {

//   form:FormGroup;
//   counterValue = 3;
//   minValue = 0;
//   maxValue = 12;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.form = this.fb.group({
//       counter: this.counterValue
//     });
//   }

//   // Remove comments to apply validation imperatively
//   // Also remove [counterRangeMax|Min] from <custom-counter> to see effect
//   /*
//   ngOnInit() {
//     this.form = this.fb.group({
//       counter: [this.counterValue, createCounterRangeValidator(this.maxValue, this.minValue)]
//     });
//   }
//   */
// }