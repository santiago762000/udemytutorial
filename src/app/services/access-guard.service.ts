import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AccessGuardService implements CanActivate{

  constructor(private router: Router) {}

  private _isAuthenticated:boolean=false;

  setAutheticated(isAuthenticated:boolean){
    this._isAuthenticated=isAuthenticated;
  }

  canActivate() {
      if(this._isAuthenticated){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
  }
}
