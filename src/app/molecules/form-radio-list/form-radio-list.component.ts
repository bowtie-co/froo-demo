import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Radio } from '../../classes/radio';

@Component({
  selector: 'usac-radio-buttons',
  templateUrl: './form-radio-list.component.html',
  styleUrls: ['./form-radio-list.component.scss']
})
export class FormRadioListComponent implements OnInit {

  @Input() radioButtons : Array<object>;
  @Output() selectedList = new EventEmitter<Radio>();

  buttons : Array<Radio> = []
  selected : Radio

  constructor() { }
  ngOnInit() {
    console.log(this.radioButtons)
    if(!(this.radioButtons === undefined) 
      && this.radioButtons.length > 0) {
      this.radioButtons.forEach((radio) => {
        this.buttons.push(new Radio(radio['opt'], radio['title'], false))
      })
    }
    console.log(this.buttons)
  }
  changeState($event: Radio) {
    this.selected = $event
    this.buttons.forEach((button) => {
      if($event.name != button.name)
        button.prefrence = false
    })
    this.selectedList.emit(this.selected)
  }
}
