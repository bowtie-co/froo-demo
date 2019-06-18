import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { IncidentsService } from '../../services/incidents.service';
import { FrooService } from 'src/app/froo.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-location-details2',
  templateUrl: './location-details2.component.html',
  styleUrls: ['./location-details2.component.scss']
})
export class LocationDetails2Component implements OnInit {

  @Input() incident: IncidentsService;
  @Output() notify = new EventEmitter();

  coursetypes = [
    { title: "Paved", opt: "paved" },
    { title: "Gravel", opt: "gravel" },
    { title: "Dirt", opt: "dirt" },
    { title: "Trail", opt: "trail" },
    { title: "Other", opt: "other" },
  ];

  conditionslist = [
    { title: "Wet", opt: "wet" },
    { title: "Dry", opt: "dry" },
    { title: "Ice", opt: "ice" },
    { title: "Other", opt: "other" },
  ];

  checkedCoursetype: string;
  checkedConditiontype: string;

  constructor(private froo:FrooService, private route:Router) { }

  ngOnInit() {
    this.froo.setState(1);
  }

  selectCourseType(coursetype:string){
    this.checkedCoursetype = coursetype;
  }

  selectConditionType(conditiontype:string){
    this.checkedConditiontype = conditiontype;
  }

  goPrev() {
    this.incident.setLifeCycleState(3);
    this.notify.emit();
  }
  goNext() {
    this.incident.setLifeCycleState(5);
    this.notify.emit();
  }

}
