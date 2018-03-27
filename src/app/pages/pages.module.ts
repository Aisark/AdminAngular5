import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ShareModule } from '../share/share.module';

import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Components
import { PagesComponent } from './pages.component';
import { Chart1Component } from './chart1/chart1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { ChartdonutComponent } from '../components/chartdonut/chartdonut.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    PagesComponent,
    Chart1Component,
    DashboardComponent,
    ProgressComponent,
    NopagefoundComponent,
    IncrementadorComponent,
    ChartdonutComponent
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
