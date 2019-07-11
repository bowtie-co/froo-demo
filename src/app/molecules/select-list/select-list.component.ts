import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss']
})
export class SelectListComponent implements OnInit {

  @Input() list;
  constructor() { }

  ngOnInit() {
  }

}
