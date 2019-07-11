import { Component, OnInit,Input, Output,EventEmitter  } from '@angular/core';
import { Radio }  from '../../classes/radio';

@Component({
  selector: 'usac-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./form-radio.component.scss']
})
export class FormRadioComponent implements OnInit {

  @Input() config:Radio; 
  @Output() state = new EventEmitter<Radio>();
  
  constructor() { }

  ngOnInit() {
    console.log(this.config)
  }
  changeState() {
    this.config.prefrence = !this.config.prefrence
    this.sendState()
  }
  sendState() {
    this.state.emit(this.config)
  }
}
