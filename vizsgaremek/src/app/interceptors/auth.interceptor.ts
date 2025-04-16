import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private dataService: DataService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Add withCredentials: true to all requests
    request = request.clone({ withCredentials: true });

    // Get token from localStorage
    let token = null;
    if (typeof window !== 'undefined' && window.localStorage) {
      token = window.localStorage.getItem('auth_token');
    }

    // If token exists, add it to the Authorization header
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // If 401 Unauthorized error, redirect to login page
        if (error.status === 401) {
          // Clear token from localStorage
          if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.removeItem('auth_token');
          }

          // Update authentication state
          this.dataService.logout();

          // Redirect to login page
          this.router.navigate(['/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
