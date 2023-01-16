import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isShown = false;

  constructor(public authService: AuthService){
  }

  hideLogin(value: string) {
    if (value && this.isShown) {
      this.isShown = ! this.isShown
    }
  }


}
