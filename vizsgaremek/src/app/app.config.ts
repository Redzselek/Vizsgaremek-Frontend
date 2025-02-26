import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// This (provideHttpClient) will help us to resolve the issue 
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(
      withInterceptors([
        // Simple interceptor function to add withCredentials to all requests
        (req, next) => {
          // Add withCredentials: true to all requests
          const modifiedReq = req.clone({
            withCredentials: true
          });
          return next(modifiedReq);
        }
      ])
    )
  ]
};