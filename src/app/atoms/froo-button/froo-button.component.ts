import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'usac-btn',
  templateUrl: './froo-button.component.html',
  styleUrls: ['./froo-button.component.scss']
})
export class FrooButtonComponent implements OnInit {

  @Input() btnType: string;
  @Input() btnText: string;
  constructor() { }

  ngOnInit() {
  }

}
