import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'auth-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user: LoginForm = {
    email: '',
    password: ''
  }
  invalidCredentials: boolean = false
  loggedIn: boolean = false
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  onSubmit() {
    this.invalidCredentials = false
    this.authService.register(this.user.email, this.user.password).subscribe(
      {
        next: (v) => {
          console.log(v)

        },
        error: (e) => {
          if (e.status === 400) {
            this.invalidCredentials = true
          }
        },
        complete: () => {
          console.info('complete')
          this.router.navigate([''])
        }
      }
    )
  }
}
