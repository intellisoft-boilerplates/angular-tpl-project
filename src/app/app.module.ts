import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService, AlertService, UserService } from './_services';

import { AppComponent } from './app.component';
import { AuthGuard } from './_guards';
import { AppRoutingModule as routing } from './app.routing';
import { HomeComponent } from './home';
import { PageNotFoundComponent } from './page-not-found';
import { AlertComponent } from './_directives/alert';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AlertComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    CommonModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
