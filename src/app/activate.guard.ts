import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
  export class ActivateGuard implements CanActivate {
  constructor(private userservice:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      return true;
       if(this.userservice.isAdminRights()){
      return true;
  } else {
    alert ("you dont have permission to view this page,Redirecting to Home")
  this.router.navigate(['Home'])
  }
}
}
