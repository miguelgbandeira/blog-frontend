import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  logOut() {
    this.loginService.logout();
  }

  isAuthenticated() {
    return this.loginService.isAuthenticated();
  }
}
