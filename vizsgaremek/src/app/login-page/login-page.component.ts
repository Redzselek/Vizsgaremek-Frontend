import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


// Add Bootstrap types
declare var bootstrap: any;


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
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
  forgotPasswordEmail: string = '';
  isForgotPasswordLoading: boolean = false;
  forgotPasswordSuccess: boolean = false;
  forgotPasswordError: string = '';
  
  // Password visibility control
  showPassword: boolean = false;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router,
    private http: HttpClient
  ) { }
  
  onSubmit(email: string, pass: string) {
    if (!email || !pass) {
      this.errorMessage = 'Email and password are required';
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
          this.successMessage = 'Login successful! You will be redirected to the main-page page.';
          this.showSuccessAlert = true;
          
          // Update the data service state as well for backward compatibility
          this.dataService.login();
          
          // Navigate to the main-page after a short delay
          setTimeout(() => {
            this.router.navigate(['/main-page']);
          }, 1500);
        } else {
          // Handle unexpected response format
          this.errorMessage = 'Login failed: Invalid response from server';
          this.showErrorAlert = true;
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Login failed';
        this.showErrorAlert = true;
      }
    });
  }

  // Handle forgot password submission
  onForgotPasswordSubmit() {
    if (!this.forgotPasswordEmail) {
      this.forgotPasswordError = 'Email is required';
      return;
    }

    this.isForgotPasswordLoading = true;
    this.forgotPasswordError = '';
    this.forgotPasswordSuccess = false;

    this.http.post('https://egyedirobi.moriczcloud.hu/vizsga-api/forgot-password', {
      email: this.forgotPasswordEmail
    }).subscribe({
      next: (response: any) => {
        this.isForgotPasswordLoading = false;
        this.forgotPasswordSuccess = true;
        
        // Close the modal after a short delay
        setTimeout(() => {
          const closeButton = document.querySelector('#forgotPasswordModal .btn-close') as HTMLElement;
          if (closeButton) {
            closeButton.click();
          }
          // Reset the success state and clear email after the modal is closed
          setTimeout(() => {
            this.forgotPasswordSuccess = false;
            this.forgotPasswordEmail = '';
          }, 500);
        }, 2000);
      },
      error: (error: any) => {
        this.isForgotPasswordLoading = false;
        this.forgotPasswordError = error.error?.message || 'Failed to process your request. Please try again.';
      }
    });
  }
}
declare global {
  interface Window {
    Swiper: any;
  }
}

// Add Bootstrap types
declare var bootstrap: any;
