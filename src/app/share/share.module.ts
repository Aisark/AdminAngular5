import { NgModule } from '@angular/core';

// Modules
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    BreadcrumsComponent,
    SiderbarComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumsComponent,
    SiderbarComponent,
  ]
})
export class ShareModule { }
