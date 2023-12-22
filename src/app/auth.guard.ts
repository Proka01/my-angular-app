import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Implement logic to check permissions here
    // For simplicity, let's assume you have a service storing user permissions
    const hasPermission = true; // Replace with your actual logic

    if (!hasPermission) {
      // Redirect to login or show an alert
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
