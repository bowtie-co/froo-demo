import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-event-confirm',
  templateUrl: './event-confirm.component.html',
  styleUrls: ['./event-confirm.component.scss']
})
export class EventConfirmComponent implements OnInit {

  @Input() event;

  constructor() { }

  ngOnInit() {
  }

}
