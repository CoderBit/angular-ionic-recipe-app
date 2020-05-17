import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _userId = null;

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  get userId() {
    return this._userId;
  }

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`https://ub-projectx.herokuapp.com/api/users/login`, {
      username,
      password,
    });
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
