import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  isPasswordVisible: boolean = false;

  constructor(private router: Router) {}
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  clearFields() {
    this.username = '';
    this.password = '';
  }

  login() {
    console.log('Login attempted:', this.username, this.password);
    this.router.navigate(['/home']);
  }
}