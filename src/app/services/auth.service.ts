import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  authenticateloginUser(userName: string, password: string) {
    const userInfo = {
      userName,
      password
    };
    return this.http.post('http://127.0.0.1:3000/login', userInfo);
  }

  setUserData(userDetails) {
    sessionStorage.setItem('authenticatedUser', userDetails);
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  getUserName() {
    return sessionStorage.getItem('authenticatedUser');
  }

  isUserLoggedOut() {
    sessionStorage.removeItem('authenticatedUser');
  }

  signUpUser(userDetails: object) {
    return this.http.post('http://127.0.0.1:3000/register', userDetails);
  }
}
