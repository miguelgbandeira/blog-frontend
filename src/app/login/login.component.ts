import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputTextModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
})
export class LoginComponent {
  loading: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) {}

  onSubmit() {
    const result = this.loginService
      .submitLogin(
        this.loginForm.controls.username.value,
        this.loginForm.controls.password.value
      )
      .subscribe(
        () => {
          this.router.navigate(['/']);
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successfully',
          });
        },
        () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Login Error',
            detail: 'Username or password are incorrect',
          });
        }
      );
  }
}
