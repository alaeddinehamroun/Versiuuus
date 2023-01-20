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
  errorMessage!: string;
  loggedIn: boolean = false
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  onSubmit() {
    this.authService.register(this.user.email, this.user.password).subscribe(
      {
        next: (v) => {
          console.log(v)

        },
        error: (e) => {
          if (e.status === 400) {
            this.errorMessage = 'User alredy exists'
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
