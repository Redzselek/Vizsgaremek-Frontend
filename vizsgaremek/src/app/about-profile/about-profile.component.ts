import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about-profile',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './about-profile.component.html',
  styleUrls: ['./about-profile.component.css']
})
export class AboutProfileComponent implements OnInit {
  user: any = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchUserData();
  }

  fetchUserData() {
    this.loading = true;
    this.error = null;

    this.authService.getUserInfo().subscribe({
      next: (userData) => {
        this.user = userData;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Nem sikerült betölteni a felhasználói adatokat. Kérjük, jelentkezzen be újra.';
        this.loading = false;
        console.error('Error fetching user data:', err);
        
        // Redirect to login if not authenticated
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      }
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
