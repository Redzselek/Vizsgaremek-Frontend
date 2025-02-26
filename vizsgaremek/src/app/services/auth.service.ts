import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://egyedirobi.moriczcloud.hu'; // Backend URL
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Check if user is logged in on startup
    this.checkAuthStatus();
  }

  /**
   * Login method
   * Important: withCredentials: true is required for cookie handling
   */
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga-api/login`, { email, password }, {
      withCredentials: true // Critical for cookie handling!
    }).pipe(
      tap((response: any) => {
        // Store token in localStorage as a backup
        if (response.message) {
          localStorage.setItem('auth_token', response.message);
        }
        this.userSubject.next({ isLoggedIn: true });
        // Optionally fetch user info
        this.getUserInfo();
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Logout method
   * Important: withCredentials: true is required for cookie deletion
   */
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga/logout`, {}, {
      withCredentials: true // Critical for cookie deletion!
    }).pipe(
      tap(() => {
        // Clear token from localStorage
        localStorage.removeItem('auth_token');
        this.userSubject.next(null);
        this.router.navigate(['/login']);
      }),
      catchError(error => {
        console.error('Logout error:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Get user information
   */
  getUserInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vizsga/user`, {
      withCredentials: true,
      headers: this.getAuthHeaders()
    }).pipe(
      tap(user => {
        this.userSubject.next({ isLoggedIn: true, ...user });
      }),
      catchError(error => {
        console.error('Error fetching user data:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Check if user is logged in
   */
  private checkAuthStatus(): void {
    this.http.get(`${this.apiUrl}/vizsga/user`, {
      withCredentials: true,
      headers: this.getAuthHeaders()
    }).subscribe({
      next: (user) => {
        this.userSubject.next({ isLoggedIn: true, ...user });
      },
      error: () => {
        this.userSubject.next(null);
      }
    });
  }

  /**
   * Returns whether user is logged in
   */
  isLoggedIn(): boolean {
    return this.userSubject.value !== null;
  }

  /**
   * Get authentication headers with token if available
   */
  private getAuthHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    const token = localStorage.getItem('auth_token');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
}
