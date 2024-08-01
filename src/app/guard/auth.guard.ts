import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';


export const authGuard: CanActivateFn = (
  route:ActivatedRouteSnapshot,
  state:RouterStateSnapshot) => {
let token=localStorage.getItem('token');
let router:Router=inject(Router);
if (token) {
  // router.navigate(['/dashboard'])
  return true;
} else {
  router.navigate(['/login']);
  return false;
}
};
