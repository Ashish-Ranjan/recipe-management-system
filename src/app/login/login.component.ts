import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  errorMessage = '';
  invalidLogin = false;
  username = '';
  password = '';

  constructor(private authService: AuthService, private location: Location) { }

  ngOnInit() {
  }

  handleLogin() {
    this.authService.authenticateloginUser(this.username, this.password).subscribe((userDetails) => {
      if (userDetails && !userDetails[`errorMessage`]) {
        this.authService.setUserData(userDetails[`username`]);
        this.invalidLogin = false;
        this.location.back();
      } else {
        this.errorMessage = userDetails[`errorMessage`];
        this.invalidLogin = true;
      }
    });
  }
}
