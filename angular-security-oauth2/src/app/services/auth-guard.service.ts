import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
