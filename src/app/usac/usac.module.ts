import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormInputTextComponent } from '../atoms/form-input-text/form-input-text.component';
import { FormCheckboxComponent } from '../atoms/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from '../atoms/form-radio/form-radio.component';

import { FormCheckboxListComponent } from '../molecules/form-checkbox-list/form-checkbox-list.component';
import { FormRadioListComponent } from '../molecules/form-radio-list/form-radio-list.component';
import {FrooButtonComponent } from '../atoms/froo-button/froo-button.component';




@NgModule({
  declarations: [
    FormInputTextComponent,
    FormCheckboxComponent, 
    FormCheckboxListComponent,
    FormRadioListComponent,
    FormRadioComponent,
    FrooButtonComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ 
    FormInputTextComponent, 
    FormCheckboxComponent, 
    FormCheckboxListComponent, 
    FormRadioListComponent,
    FormRadioComponent,
    CommonModule, 
    FormsModule,
    FrooButtonComponent
    
  ]
})
export class UsacModule { }
