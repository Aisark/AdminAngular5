import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SettingsService
 } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    SettingsService
  ]
})
export class ServicesModule { }
