import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InMemoryDataService } from './services/InMemoryData/in-memory-data.service';
import { EcosystemsRoutingModule } from './ecosystems/ecosystems-routing.module';


const imports = [
  BrowserModule,
  EcosystemsRoutingModule,
  FormsModule,
  NgbModule,
  HttpClientModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  // HttpClientInMemoryWebApiModule.forRoot(
  //   InMemoryDataService, { dataEncapsulation: false }
  // )
];

export {
  imports
};
