import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ShareModule } from '../share/share.module';


import { PAGES_ROUTES } from './pages.routes';

// Components
import { PagesComponent } from './pages.component';
import { Chart1Component } from './chart1/chart1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PAGES_ROUTES
  ],
  declarations: [
    PagesComponent,
    Chart1Component,
    DashboardComponent,
    ProgressComponent,
    NopagefoundComponent,
  ],
  exports: [
    PagesComponent,
    Chart1Component,
    DashboardComponent,
    ProgressComponent,
    NopagefoundComponent
  ]
})
export class PagesModule { }
