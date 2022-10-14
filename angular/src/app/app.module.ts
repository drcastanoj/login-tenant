import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Login } from './login/login.component';
import { Api, CanActivateTeam, Permissions } from './services';
import { HttpClientModule } from '@angular/common/http';
import { Weather } from './weather/weather.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Login,
    Weather,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [CanActivateTeam, Permissions, Api,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
