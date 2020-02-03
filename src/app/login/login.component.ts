import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, Params } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  // tslint:disable-next-line:no-inferrable-types
  errorMessage: string = '';

  constructor(public authService: AuthService, private router: Router, private fb: FormBuilder) {
this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  tryFacebookLogin() {
    this.authService.doFacebookLogin().then(res => {
      this.router.navigate(['/user']);
    });
  }
  tryTwitterLogin() {
    this.authService.doTwitterLogin().then(res => {
      this.router.navigate(['/user']);
    });
  }
  tryGoogleLogin() {
    this.authService.doGoogleLogin().then(res => {
      this.router.navigate(['/user']);
    });

  }
tryLogin(value) {
  this.authService.doLogin(value)
  .then(res => {
    this.router.navigate(['/user']);
}, err => {
  console.log(err);
  this.errorMessage = err.message;
});
}


}
