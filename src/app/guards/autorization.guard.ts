import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AppStateService} from '../services/app-state.service';

export const autorizationGuard: CanActivateFn = (route, state) => {
  const appState = inject(AppStateService);
  const router = inject(Router);
  if (appState.authState.roles.includes(route.data['requiredRole'])){
    return true;
  }else {
    router.navigateByUrl("/admin/not-authorized");
    return false;
  }
};
