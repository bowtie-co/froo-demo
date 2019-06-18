import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';
import { IncidentsService } from '../../services/incidents.service';
import { FrooService } from 'src/app/froo.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-location-details1',
  templateUrl: './location-details1.component.html',
  styleUrls: ['./location-details1.component.scss']
})
export class LocationDetails1Component implements OnInit {

  @Input() incident: IncidentsService;
  @Output() notify = new EventEmitter();

  locations = [

    { title: "Off Road", opt: "off-road" },
    { title: "City Street", opt: "city-street" },
    { title: "Rural Road", opt: "rural-road" },
    { title: "Parking Lot", opt: "parking-lot" },
    { title: "Registration Area", opt: "registration-area" },
    { title: "Restroom/Locker room", opt: "restroom-lockroom" },
    { title: "Premises/Grounds", opt: "premises-ground" },
    { title: "Other", opt: "other" },

  ];

  constructor(private froo:FrooService, private router:Router) { }

  ngOnInit() {
  }

  goPrev() {
    this.incident.setLifeCycleState(2);
    this.notify.emit();
  }
  goNext() {
    this.incident.setLifeCycleState(4);
    this.notify.emit();
  }

}
