import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.scss']
})
export class EventdetailsComponent implements OnInit {

  @Input() eventDetail;
  constructor() { }

  ngOnInit() {
  }

}
