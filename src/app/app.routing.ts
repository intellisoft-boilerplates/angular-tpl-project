import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: !environment.production } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
