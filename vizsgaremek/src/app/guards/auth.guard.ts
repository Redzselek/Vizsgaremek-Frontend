import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataService } from '../data.service';

export const authGuard: CanActivateFn = (route, state) => {
  const dataService = inject(DataService);
  const router = inject(Router);

  if (dataService.checkAuthenticationStatus()) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};
