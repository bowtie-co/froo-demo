import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { IncidentsService } from '../../services/incidents.service';


@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss']
})
export class RaceDetailsComponent implements OnInit {

  @Input() incident: IncidentsService;
  @Output() notify = new EventEmitter();

  male: boolean;
  female: boolean;

  constructor() { }

  ngOnInit() {
    this.incident.raceClass = 'select';
    this.incident.raceCategory = 'select';
    this.incident.raceCourseType = 'select';
  }
  updateGenderPrefrence(mode: boolean) {
    if(mode) {
      this.incident.racerGender = 'M';
    } else {
      this.incident.racerGender = 'F';
    }
  }
  goPrev() {
    this.incident.setLifeCycleState(1);
    this.notify.emit();
  }
  goNext() {
    this.incident.setLifeCycleState(3);
    this.notify.emit();
  }
  printInfo() {
    console.log(this.incident.getInput());
  }
}
