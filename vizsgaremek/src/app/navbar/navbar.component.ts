import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../services/auth.service';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FontAwesomeModule, HttpClientModule, CommonModule, RouterLink, SearchBarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  authenticated = false;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Check localStorage for authentication status
    this.authenticated = this.dataService.checkAuthenticationStatus();
    // Subscribe to the dataService authentication state
    this.dataService.isAuthenticated$.subscribe(isAuthenticated => {
      this.authenticated = isAuthenticated;
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
