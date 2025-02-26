import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// This (provideHttpClient) will help us to resolve the issue 
import { provideHttpClient, withInterceptors, HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { inject } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// Create a functional interceptor
export const authInterceptorFn: HttpInterceptorFn = (req, next) => {
  // Add withCredentials: true to all requests
  req = req.clone({ withCredentials: true });

  // Get token from localStorage
  const token = localStorage.getItem('auth_token');
  
  // If token exists, add it to the Authorization header
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  // Handle the request and catch errors
  return next(req).pipe(
    catchError(error => {
      // If 401 Unauthorized error, redirect to login page
      if (error.status === 401) {
        // Clear token from localStorage
        localStorage.removeItem('auth_token');
        localStorage.removeItem('logged');
        
        // Get router and dataService
        const router = inject(Router);
        const dataService = inject(DataService);
        
        // Update authentication state
        dataService.logout();
        
        // Redirect to login page
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([
        // Use the functional interceptor
        authInterceptorFn
      ])
    )
  ]
};