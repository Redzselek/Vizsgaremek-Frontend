import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { AuthService } from '../services/auth.service';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
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
    // Initialize authentication state from localStorage
    this.authenticated = this.dataService.get_logged_in_state();
    
    // Subscribe to the emitter for updates
    this.subscriptions.push(
      Emitters.authEmitter.subscribe((auth: boolean) => {
        this.authenticated = auth;
      })
    );
    
    // Subscribe to the data service's authentication observable
    this.subscriptions.push(
      this.dataService.isAuthenticated$.subscribe(isAuthenticated => {
        this.authenticated = isAuthenticated;
      })
    );
    
    // Subscribe to the auth service's user observable for the user name
    this.subscriptions.push(
      this.authService.user$.subscribe(user => {
        if (user) {
          this.userName = user.name || null;
        }
      })
    );
    
    // Emit the current authentication state
    Emitters.authEmitter.emit(this.authenticated);
  }
  
  ngOnDestroy(): void {
    // Clean up subscriptions to prevent memory leaks
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}