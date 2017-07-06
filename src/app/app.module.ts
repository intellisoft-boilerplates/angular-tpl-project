import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AuthService } from './services/auth.service';
import { AlertService } from './services/alert.service';


import { AppComponent } from './app.component';
import { AppRoutingModule as routing } from './app.routing';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
