import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginForm, User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: LoginForm = {
    email: '',
    password: ''
  }
  invalidCredentials: boolean = false
  loggedIn: boolean = false
  @Output() valueChange = new EventEmitter()
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location) { }

  onSubmit() {
    this.invalidCredentials = false
    this.authService.login(this.user.email, this.user.password).subscribe(
      () => {
        console.log("user is logged in");
        this.loggedIn = true
        this.valueChange.emit(
          this.loggedIn
        )

      }, (err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.invalidCredentials = true
        }
      }
    )
  }
}
