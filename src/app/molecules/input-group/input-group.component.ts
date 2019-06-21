import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.scss']
})
export class InputGroupComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() label: string;
  @Input() model: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  constructor() {}

  ngOnInit() {}
}
