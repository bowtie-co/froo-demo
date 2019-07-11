import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { FrooService } from 'src/app/froo.service';
import { IncidentsService } from '../../services/incidents.service';
import { Router} from '@angular/router';
import { Radio } from '../../../classes/radio';

@Component({
  selector: 'app-time-of-incident',
  templateUrl: './time-of-incident.component.html',
  styleUrls: ['./time-of-incident.component.scss']
})
export class TimeOfIncidentComponent implements OnInit {

  @Input() incident: IncidentsService;
  @Output() notify = new EventEmitter();

  incidentStamp: any;
  checkedOccurence: string;

  occurences = [
    { title: "Before Event", opt: "before-event" },
    { title: "During Event", opt: "during-event" },
    { title: "After Event", opt: "after-event" },
    { title: "Practice", opt: "practice" },
    { title: "Setup", opt: "setup" },
    { title: "Others", opt: "others" },
  ];

  constructor(private froo: FrooService,private route:Router) { }

  ngOnInit() {
    this.froo.setState(1);
  }
  selectOccurence(occurence: string) {
    this.checkedOccurence = occurence;
    console.log(this.checkedOccurence);
  }
  isSelected(occurence:string) {
    return this.checkedOccurence == occurence ? 'checked' : '' ;
  }
  goNext() {
    console.log(this.incidentStamp);
    this.incident.setLifeCycleState(2);
    this.incident.setOccuredAt(this.checkedOccurence);
    this.incident.setOccuredOn(this.incidentStamp);
    this.notify.emit();
  }
  selectedList($event: Radio) {
    this.checkedOccurence = $event.name;
  }
}
