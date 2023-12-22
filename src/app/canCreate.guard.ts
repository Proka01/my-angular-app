import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CreateGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // // Your authentication logic for the entire app
    // const isLoggedIn = this.isUserLoggedIn();

    // if (!isLoggedIn) {
    //   this.router.navigate(['/login']);
    //   return false;
    // }

    console.log(localStorage.getItem('createPerm'));
    return localStorage.getItem('createPerm') === 'true';
  }

  private isUserLoggedIn(): boolean {
    // Implement your logic to check if the user is logged in
    return !!localStorage.getItem('token');
  }
}