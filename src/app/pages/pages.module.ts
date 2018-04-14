import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { ShareModule } from '@share/share.module';
import { FormsModule } from '@angular/forms';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Pipes
import { PipesModule } from '@pipes/pipes.module';

// Components
import { PagesComponent } from './pages.component';
import { Chart1Component } from './chart1/chart1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { IncrementadorComponent } from '@components/incrementador/incrementador.component';
import { ChartdonutComponent } from '@components/chartdonut/chartdonut.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ModalUploadComponent } from '@components/modal-upload/modal-upload.component';


@NgModule({
  imports: [
    CommonModule,
    ShareModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule,
    PipesModule
  ],
  declarations: [
    PagesComponent,
    Chart1Component,
    DashboardComponent,
    ProgressComponent,
    NopagefoundComponent,
    IncrementadorComponent,
    ChartdonutComponent,
    AccountSettingComponent,
    RxjsComponent,
    ProfileComponent,
    UsuarioComponent,
    ModalUploadComponent
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
