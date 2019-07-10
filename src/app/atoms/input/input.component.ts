<<<<<<< HEAD
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
=======
import { Component, Input, Output, EventEmitter } from '@angular/core';
>>>>>>> 43f3dc3e8f6410414eba76a106b43fa6bf051ced

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() type: string;
  @Input() name: string;
  @Input() id: number;
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
