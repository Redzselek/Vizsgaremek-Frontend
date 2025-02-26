import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  
  // Add these properties for ngModel binding
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) { }
  
  onSubmit(email: string, pass: string) {
    if (!email || !pass) {
      this.errorMessage = 'Email és jelszó megadása kötelező';
      this.showErrorAlert = true;
      return;
    }

    this.isLoading = true;
    this.showErrorAlert = false;
    this.showSuccessAlert = false;

    this.authService.login(email, pass).subscribe({
      next: (response) => {
        this.isLoading = false;
        
        // Check if the response contains a token
        if (response.message) {
          this.successMessage = 'Sikeres bejelentkezés';
          this.showSuccessAlert = true;
          
          // Update the data service state as well for backward compatibility
          this.dataService.login();
          
          // Navigate to the movies-series page after a short delay
          setTimeout(() => {
            this.router.navigate(['/movies-series']);
          }, 1500);
        } else {
          // Handle unexpected response format
          this.errorMessage = 'Sikertelen bejelentkezés: Érvénytelen válasz a szervertől';
          this.showErrorAlert = true;
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Sikertelen bejelentkezés';
        this.showErrorAlert = true;
      }
    });
  }
}
