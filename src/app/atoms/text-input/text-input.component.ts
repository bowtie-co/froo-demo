import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: []
})
export class TextInputComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() id: number;
  @Input() value: string;
  @Input() placeholder: string;
  @Input() label: string;

  @Output() inputBinding = new EventEmitter();

  handleInput(e) {
    this.inputBinding.emit(e.target.value)
  }

  constructor() {}

  ngOnInit() {
  }
}
