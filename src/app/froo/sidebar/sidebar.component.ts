import { Component, OnInit } from '@angular/core';
import { FrooService } from '../../froo.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private froo: FrooService) { }

  ngOnInit() {
    this.froo.setState(1);
  }

}
