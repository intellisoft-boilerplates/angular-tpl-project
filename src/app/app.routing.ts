import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';
import { PageNotFoundComponent } from './page-not-found';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards';


const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
  { path: 'login', loadChildren: './login/index#LoginModule' },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
