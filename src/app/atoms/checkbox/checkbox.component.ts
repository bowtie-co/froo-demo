import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styles: []
})
export class CheckboxComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() id: number;
  @Input() value: string;
  @Input() checked: boolean;
  @Input() disabled: boolean;
  @Input() label: string;

  @Output() changeBinding = new EventEmitter();

  handleChange(e) {
    this.changeBinding.emit(e.target.value)
  }

  constructor() { }

  ngOnInit() {
  }

}
