import { Component, OnInit, Input } from '@angular/core';
import { FrooService } from '../../froo.service';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {
  @Input() items:Array<string> = [];

  constructor(private froo: FrooService) {}

  ngOnInit() {}

}
