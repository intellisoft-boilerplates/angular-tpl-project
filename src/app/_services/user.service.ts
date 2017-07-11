import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../_models';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService {
  apiUrl = environment.apiUrl;


  constructor(private http: Http) { }

  getAll() {
    return this.http.get(`${this.apiUrl}/users`, this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get(`${this.apiUrl}/users/${id}`, this.jwt()).map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post(`${this.apiUrl}/users`, user, this.jwt()).map((response: Response) => response.json());
  }

  update(user: User) {
    return this.http.put(`${this.apiUrl}/users/${user.id}`, user, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      const headers = new Headers({ 'Authorization': `Bearer ${currentUser.token}` });
      return new RequestOptions({ headers: headers });
    }
  }

}
