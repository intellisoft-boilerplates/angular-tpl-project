import { NgModule } from '@angular/core';

import { LoginRouting } from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    LoginRouting
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
