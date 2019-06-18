import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FrooService } from 'src/app/froo.service';
import { IncidentsService } from '../../services/incidents.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-location-details3',
  templateUrl: './location-details3.component.html',
  styleUrls: ['./location-details3.component.scss']
})
export class LocationDetails3Component implements OnInit {

  @Input() incident: IncidentsService;
  @Output() notify = new EventEmitter();

  causes = ['Assault','Fall(different elevation)','Fall(same elevation)','caught,in,on,or between',
            'Overexertion','Animal involvement','Equipment failure','Struck by falling/flying object',
          'Collision','Vehicle/Property'];

  weatherlist = [
    { title: "Rainy", opt: "rainy" },
    { title: "Foggy", opt: "foggy" },
    { title: "Snowy", opt: "snowy" },
    { title: "Cloudy", opt: "cloudy" },
    { title: "Extreme Temparatures", opt: "extreme-temparatures" },
    { title: "Hail", opt: "hail" },
    { title: "Other", opt: "other" },
  ];

  selectedweather:string;

  constructor(private router: Router,private froo : FrooService) { }

  ngOnInit() {
    this.froo.setState(1);
  }

  selectedWeather(weathercondition:string){
    this.selectedweather = weathercondition;
  }

  goPrev() {
    this.incident.setLifeCycleState(4);
    this.notify.emit();
  }
  goNext() {
    this.incident.setLifeCycleState(6);
    this.notify.emit();
  }

}
