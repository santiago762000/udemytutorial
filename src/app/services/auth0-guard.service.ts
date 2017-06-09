import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class Auth0GuardService implements CanActivate {

  constructor(private router: Router) {}

canActivate() {
    // Check to see if a user has a valid JWT
    console.log("A")
    console.log(tokenNotExpired())
    if (!tokenNotExpired()) {
      alert("B")
      // If they do, return true and allow the user to load the home component
      return true;
    }
    alert("C")
    // If not, they redirect them to the login page
    this.router.navigate(['/login']);
    return false;
  }

}