import { Users } from './../_models/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    /* return this.http.post<any>('/api/authenticate', { username: username, password: password })
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }); */
    // const all_users = this.http.get('https://www.aretmic.com/api/server/web/app_dev.php/users');
    const all_users = this.http.get('http://jsonplaceholder.typicode.com/users');
    all_users.forEach(user => {
      console.log(user);
      /* if (user.firstname === username && user.lastname === password) {

      } */
    });
    const test = 'wdsf';
    localStorage.setItem('currentUser', JSON.stringify({user: 10}));
    localStorage.setItem(test, JSON.stringify({user: 10}));
    return all_users;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
