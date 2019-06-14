import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-racer-card',
  templateUrl: './top-racer-card.component.html',
  styleUrls: ['./top-racer-card.component.scss']
})
export class TopRacerCardComponent implements OnInit {
  @Input() lastName: string;
  @Input() firstName: string;
  @Input() id: string;
  constructor() { }

  ngOnInit() {
  }

}
