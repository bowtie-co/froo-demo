import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputType: string;
  @Input() inputName: string;
  @Input() inputId: number;
  @Input() inputPlaceholder: string;

  constructor() { }

  ngOnInit() {
  }

}
