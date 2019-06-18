import { Component, OnInit,Input } from '@angular/core';
import { FrooService } from 'src/app/froo.service';
import { IncidentsService } from '../services/incidents.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.scss']
})
export class IncidentComponent implements OnInit {

  state: number;
  lifeCycle: object;
  config : object;

  constructor(
    private froo: FrooService,
    private incident: IncidentsService,
    private router:Router
  ) {
    this.lifeCycle = this.incident.getLifeCycle();
    this.state = 1;
  }

  ngOnInit() {
    console.log(this.froo.getEvent());
    this.froo.setState(1);
    this.config = this.lifeCycle["step"+this.state];
    console.log(this.config);
  }
  onNotify() {
    console.log(this.incident.getInput());
    if(this.incident.getCurrentState() == 5) {
      this.router.navigate(['froo','thanks']);
    }
    this.state = this.incident.getCurrentState();
    this.config = this.lifeCycle["step"+this.state];
  }

}
