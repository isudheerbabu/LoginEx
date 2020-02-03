import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  errorMessage: string = '';
  // tslint:disable-next-line:no-inferrable-types
  successMessage: string = '';

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
  this.createForm();
   }

createForm() {
  this.registerForm = this.fb.group({
    email: ['', Validators.required ],
    password: ['', Validators.required]
  });
}
tryFacebookLogin() {
  this.authService.doFacebookLogin().then(res => {
    this.router.navigate(['/user']);
  }, err => console.log(err));
}
tryTwitterLogin() {
  this.authService.doTwitterLogin().then(res => {
    this.router.navigate(['/user']);
  }, err => console.log(err));
}
tryGoogleLogin() {
  this.authService.doGoogleLogin().then(res => {
    this.router.navigate(['/user']);
  }, err => console.log(err));
}

  tryRegister(value) {
this.authService.doRegister(value).then(res => {
  // this.router.navigate(['/user']);
  console.log(res);
  this.errorMessage = '';
  this.successMessage = 'Your account created, please do login';
}, err => {
  console.log(err);
  this.errorMessage = err.message;
  this.successMessage = '';
});

}

}
