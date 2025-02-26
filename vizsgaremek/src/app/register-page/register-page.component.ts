import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  policyAccepted: boolean = false;
  
  showSuccessAlert: boolean = false;
  showErrorAlert: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    // Validate form
    if (!this.name || !this.email || !this.password) {
      this.errorMessage = 'Minden mező kitöltése kötelező';
      this.showErrorAlert = true;
      return;
    }

    if (!this.policyAccepted) {
      this.errorMessage = 'El kell fogadnia az adatvédelmi szabályzatot';
      this.showErrorAlert = true;
      return;
    }

    this.isLoading = true;
    this.showErrorAlert = false;
    this.showSuccessAlert = false;

    this.authService.register(this.name, this.email, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.successMessage = 'Sikeres regisztráció! Átirányítás a bejelentkezéshez...';
        this.showSuccessAlert = true;
        
        // Navigate to login page after a short delay
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Sikertelen regisztráció';
        this.showErrorAlert = true;
      }
    });
  }
}