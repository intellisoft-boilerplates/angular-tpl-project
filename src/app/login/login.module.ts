import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginRouting } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginRouting,
    FormsModule,
    CommonModule
  ],

  declarations: [LoginComponent]
})
export class LoginModule { }
