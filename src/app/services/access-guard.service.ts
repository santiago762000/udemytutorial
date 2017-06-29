import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';

@Injectable()
export class AccessGuardService implements CanActivate {
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private router: Router) { }

  canActivate() {
    // Check to see if a user has a valid JWT

    var token = localStorage.getItem('id_token');
    if (token) {
      var date1 = this.jwtHelper.getTokenExpirationDate(token).getTime();
      var date2 = (new Date()).getTime();
      if (date1 >= date2) {
        // If they do, return true and allow the user to load the home component
        return true;
      }     
    }
    this.router.navigate(['/login']);
    return false;

  }

}