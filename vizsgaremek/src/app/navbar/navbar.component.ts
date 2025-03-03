import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitters';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FontAwesomeModule, HttpClientModule, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  authenticated = false;
  
  constructor(
    private dataService: DataService, 
    private authService: AuthService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    // Subscribe to the existing emitter for backward compatibility
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    
    // Also subscribe to the auth service's user observable
    this.authService.user$.subscribe(user => {
      this.authenticated = !!user?.isLoggedIn;
    });
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        // Update data service state
        this.dataService.logout();
        // Navigate to login page
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout error:', err);
        // Even if there's an error, we'll still clear local state and redirect
        this.dataService.logout();
        this.router.navigate(['/login']);
      }
    });
  }
}
