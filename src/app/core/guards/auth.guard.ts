import {inject} from '@angular/core';
import {Router} from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService} from "../services/auth.service";

export const authGuard = () => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.isAuthenticated()
    .pipe(
      tap(loggedIn => {
        if (!loggedIn) {
          router.navigate(['/login']);
        }
      })
    );
};
