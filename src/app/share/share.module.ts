import { NgModule } from '@angular/core';


import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { HeaderComponent } from './header/header.component';
import { SiderbarComponent } from './siderbar/siderbar.component';

@NgModule({
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
