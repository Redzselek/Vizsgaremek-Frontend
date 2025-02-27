import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/emitters';
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
    private authService: AuthService
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
    console.log("Logging out");
    this.authService.logout().subscribe({
      next: () => {
        // Update the data service state as well for backward compatibility
        this.dataService.logout();
      },
      error: (error) => {
        console.error('Error during logout:', error);
      }
    });
  }
}
