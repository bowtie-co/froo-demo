import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {InputBox } from '../../classes/input-box';

@Component({
  selector: 'usac-input',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss']
})
export class FormInputTextComponent implements OnInit {

  @Input() inputBox: InputBox;
  @Output() pushContent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }
  changeContent() {
    this.pushContent.emit(this.inputBox.content)
  }

}
