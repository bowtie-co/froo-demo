import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FrooService} from '../../froo.service';


@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

  pageTitle = "Thanks";

  buttonlist = ['Copy this report and start new','Start a new empty report','Start a new report from a short form','Return Home'];
  constructor(private route:Router, private froo:FrooService) { }

  ngOnInit() {
    this.froo.setState(5);
  }

}
