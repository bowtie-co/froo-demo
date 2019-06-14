import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { InMemoryDataService } from '../services/InMemoryData/in-memory-data.service';

import { EcosystemsComponent } from './ecosystems.component';

import { imports } from '../app.imports';
import { declarations } from '../app.declarations';

@NgModule({
  declarations,
  imports,
  exports: [EcosystemsComponent]
})
export class EcosystemsModule { }
