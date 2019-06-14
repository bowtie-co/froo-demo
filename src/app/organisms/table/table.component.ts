import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: any[];
  @Input() data: any[];
  @Input() linkEach = '';
  @Input() linkEachKey = 'id';
  @Output() deleted = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  delete(obj: any): void {
    this.deleted.emit(obj);
  }
}
