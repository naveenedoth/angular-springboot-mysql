import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  
  constructor(private router: Router) {}

  // Check if passwords match
  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  // Handle form submission
  register(form: NgForm): void {
    if (!form.valid) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    if (!this.passwordsMatch()) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate registration success
    alert("Registration successful!");
    form.resetForm(); // Clear form on success
    this.router.navigate(['/login']); // Redirect to login page
  }

  // Clear all form fields
  clearFields(): void {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
