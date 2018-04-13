import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { APP_ROUTES } from './app.routes';

// Modules
import { PagesModule } from './pages/pages.module';
import { ServicesModule } from '@services/services.module';

// Temporal


import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
