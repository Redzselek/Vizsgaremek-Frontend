import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  authenticated = false;
  userName: string | null = null;
  private subscriptions: Subscription[] = [];
  
  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {}
  
  ngOnInit(): void {
    // Subscribe to the emitter for backward compatibility
    this.subscriptions.push(
      Emitters.authEmitter.subscribe((auth: boolean) => {
        this.authenticated = auth;
      })
    );
    
    // Also subscribe to the auth service's user observable
    this.subscriptions.push(
      this.authService.user$.subscribe(user => {
        this.authenticated = !!user?.isLoggedIn;
        this.userName = user?.name || null;
        
        // Emit the authentication status for other components
        Emitters.authEmitter.emit(this.authenticated);
      })
    );
    
    // Check authentication status on init
    this.checkAuthStatus();
  }
  
  ngOnDestroy(): void {
    // Clean up subscriptions to prevent memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  
  private checkAuthStatus(): void {
    // Check if user is logged in via DataService (legacy)
    const isLoggedInViaDataService = this.dataService.get_logged_in_state();
    
    // If logged in via DataService but not via AuthService, update emitter
    if (isLoggedInViaDataService && !this.authenticated) {
      this.authenticated = true;
      Emitters.authEmitter.emit(true);
    }
  }
}