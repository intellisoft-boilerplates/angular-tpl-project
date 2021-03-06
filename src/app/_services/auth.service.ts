import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { User } from '../_models';



@Injectable()
export class AuthService {
  apiUrl = environment.apiUrl;

  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/authenticate`, JSON.stringify({ username, password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const user = response.json();

        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return new User(user);
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  get isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
  }
}
