import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Checkbox }  from '../../classes/checkbox';

@Component({
  selector: 'usac-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.scss']
})
export class FormCheckboxComponent implements OnInit {

  @Input() config:Checkbox; 
  @Output() state = new EventEmitter<object>();
  
  constructor() { }
  ngOnInit() {
  }
  changeState() {
    this.config.prefrence = !this.config.prefrence
    this.sendState()
  }
  sendState() {
    this.state.emit(this.config)
  }

}
