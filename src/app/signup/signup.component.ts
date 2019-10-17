/* tslint:disable:no-string-literal */
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  @ViewChild('signUpForm', { static: false }) submittedForm: NgForm;
  passwordMissMatch = false;
  successfullyRegistered = false;
  errorIncounterd = false;
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isUserLoggedIn()){
      this.router.navigate(['/recipes']);
    }
  }

  handleSignUp() {
    this.successfullyRegistered = false;
    this.passwordMissMatch = false;
    this.errorIncounterd = false;
    this.errorMessage = '';
    if (this.submittedForm.value.password !== this.submittedForm.value.passwordreenter) {
      this.passwordMissMatch = true;
      return;
    }
    this.passwordMissMatch = false;
    this.authService.signUpUser(this.submittedForm.value).subscribe((responseDate) => {
      if (!responseDate['errorMessage']) {
        this.errorIncounterd = false;
        this.errorMessage = '';
        this.successfullyRegistered = true;
        this.submittedForm.reset();
      } else {
        this.errorIncounterd = true;
        this.errorMessage = responseDate['errorMessage'];
        this.successfullyRegistered = false;
      }
    });
  }
}
