//import { AppComponent } from './app.component';

import {
  BtnComponent,
  InputComponent,
  HeadingComponent,
  LogoComponent,
  NavLinkComponent,
  TopRacerCardComponent
} from './atoms';

import {
  NavLinkGroupComponent,
  RacerSearchComponent
} from './molecules';

import {
  MessagesComponent,
  NavbarComponent,
  TableComponent
} from './organisms';

import {
  DashboardComponent,
  RacerDetailComponent,
  RacersComponent,
  ResultsComponent
} from './ecosystems';

import { EcosystemsComponent } from './ecosystems/ecosystems.component';

const declarations = [
//  AppComponent,
  EcosystemsComponent,
  ResultsComponent,
  MessagesComponent,
  DashboardComponent,
  NavLinkComponent,
  LogoComponent,
  NavbarComponent,
  NavLinkGroupComponent,
  TopRacerCardComponent,
  RacersComponent,
  RacerDetailComponent,
  RacerSearchComponent,
  HeadingComponent,
  BtnComponent,
  InputComponent,
  TableComponent
];

export {
  declarations
};
