import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(
    private _router: Router, 
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Initialize after construction to avoid the initial error
    this.isAuthenticatedSubject.next(this.get_logged_in_state());
  }

  public get_logged_in_state(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      // Check for both the legacy 'logged' flag and the new auth_token
      return !!localStorage.getItem('logged') || !!localStorage.getItem('auth_token');
    }
    return false; // Default to not logged in when running server-side
  }

  login() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('logged', "true");
    }
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      // localStorage.removeItem('logged');
      localStorage.removeItem('auth_token');
      localStorage.setItem('logged', "false");
    }
    this.isAuthenticatedSubject.next(false);
  }

  move_to(redirect_to: string) {
    this._router.navigateByUrl(redirect_to);
  }
}