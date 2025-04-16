import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, forkJoin, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://egyedirobi.moriczcloud.hu'; // Backend URL
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // Use setTimeout to ensure this runs after the platform is initialized
    setTimeout(() => {
      this.checkAuthStatus();
    }, 0);
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
        if (response.message && isPlatformBrowser(this.platformId)) {
          localStorage.setItem('auth_token', response.message);
        }
        this.userSubject.next({ isLoggedIn: true });
        // Fetch user info
        this.getUserInfo().subscribe();
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Register method
   */
  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga-api/register`, {
      name,
      email,
      password
    }, {
      withCredentials: true
    }).pipe(
      catchError(error => {
        console.error('Registration error:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Logout method
   * Important: withCredentials: true is required for cookie deletion
   */
  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga-api/logout`, {}, {
      withCredentials: true, // Critical for cookie deletion!
      headers: this.getAuthHeaders()
    }).pipe(
      tap(() => {
        // Clear token from localStorage
        if (isPlatformBrowser(this.platformId)) {
          localStorage.removeItem('auth_token');
        }
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
    return this.http.get(`${this.apiUrl}/vizsga-api/user`, {
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
    // Only check auth status in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return; // Skip this in server-side rendering
    }

    this.http.get(`${this.apiUrl}/vizsga-api/user`, {
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

    // Check if running in browser environment
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('auth_token');
      if (token) {
        headers = headers.set('Authorization', `Bearer ${token}`);
      }
    }

    return headers;
  }
  /**
   * Get authenticated users watchlist
   */
  getUserWatchlist(): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga-api/get-watchlist`, {
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
   * Remove authenticated users watchlist
   */
  removeFromWatchlist(showid: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga-api/remove-watchlist/${showid}`, {
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
  * Get authenticated users uploads
  */
  getUserUploads(): Observable<any> {
    const movies = this.http.get(`${this.apiUrl}/vizsga-api/show-movies`, {
      withCredentials: true,
      headers: this.getAuthHeaders()
    });
    const series = this.http.get(`${this.apiUrl}/vizsga-api/show-series`, {
      withCredentials: true,
      headers: this.getAuthHeaders()
    });
    return forkJoin([movies, series]).pipe(
      tap(([movies, series]) => {
        this.userSubject.next({ isLoggedIn: true, ...movies, ...series });
      }),
      catchError(error => {
        console.error('Error fetching data:', error);
        return throwError(() => error);
      })
    );
  }
  getSelectedShow(showid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/vizsga-api/selected-show/${showid}`, {
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
  * Remove authenticated users uploads
  */
  removeFromUploads(showid: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga-api/delete-show/${showid}`, {
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
  changePassword(currentPassword: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/vizsga-api/new-password`, {
      oldPassword: currentPassword,
      newPassword
    }, {
      withCredentials: true
    }).pipe(
      catchError(error => {
        console.error('Error changing password:', error);
        return throwError(() => error);
      })
    );
  }
}
