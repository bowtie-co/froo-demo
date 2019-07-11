import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Checkbox } from '../../classes/checkbox';

@Component({
  selector: 'usac-checkbox-list',
  templateUrl: './form-checkbox-list.component.html',
  styleUrls: ['./form-checkbox-list.component.scss']
})
export class FormCheckboxListComponent implements OnInit {

  @Input() checkBoxes: Array<object>;
  @Output() selectedList = new EventEmitter<Array<string>>();

  boxes : Array<Checkbox> = []
  selected : Array<Checkbox> = []

  constructor() { 
  }

  ngOnInit() {
    console.log(this.checkBoxes)
    if(!(this.checkBoxes === undefined) 
      && this.checkBoxes.length > 0) {
      this.checkBoxes.forEach((checkbox) => {
        console.log(checkbox)
        this.boxes.push(new Checkbox(checkbox['opt'], checkbox['title'], false))
      })
    }
    console.log(this.boxes)
  }

  changeState($event) {
    var pos = this.selected.indexOf($event)
    if($event.prefrence === true) {
      if(pos == 0 || pos == -1) 
        this.selected.push($event)
    } else {
      var dummy: Array<Checkbox> = []
      this.selected.forEach((checkbox) => {
        if($event.name != checkbox.name)
          dummy.push(checkbox)
      })
      this.selected = dummy
    }
    var selectedList: Array<string> = []
    this.selected.forEach((checkbox) => {
      selectedList.push(checkbox.name)
    })
    this.selectedList.emit(selectedList)
  }

}
