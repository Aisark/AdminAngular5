import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SettingsService,
  SidebarService,
  UsuarioService,
  LoginGuard,
  UploadFilesService,
  HospitalService,
  MedicoService,
  AdminGuard
} from './service.index';
import { ModalUploadService } from '@components/modal-upload/modal-upload.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    SettingsService,
    SidebarService,
    UsuarioService,
    LoginGuard,
    UploadFilesService,
    ModalUploadService,
    HospitalService,
    MedicoService,
    AdminGuard
  ]
})
export class ServicesModule { }
