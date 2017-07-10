import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AuthService, AlertService } from './_services';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards';
import { AppRoutingModule as routing } from './app.routing';
import { PageNotFoundComponent } from './page-not-found';
import { AlertComponent } from './_directives/alert';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        PageNotFoundComponent,
        AlertComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
         { path: '', component: HomeComponent }
        ]),
        HttpModule
      ],
      providers: [
        AuthGuard,
        AuthService,
        AlertService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular App');
  }));

});
