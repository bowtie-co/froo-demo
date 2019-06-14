import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-ecosystems',
  templateUrl: './ecosystems.component.html',
  styleUrls: ['./ecosystems.component.scss']
})
export class EcosystemsComponent implements OnInit {

  env = environment.env;
  title = 'Atomic Angular App';

  constructor() { }

  ngOnInit() {
  }

}
