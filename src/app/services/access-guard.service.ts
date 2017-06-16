import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';


@Injectable()
export class AccessGuardService implements CanActivate{

  private _isAutheticated:boolean=false;
  constructor(private route:Router) { 
  }
  setAuthetication(value:boolean){
    this._isAutheticated=value;  
  }


  canActivate(){
    if(this._isAutheticated){
      return true;
    }else{
      this.route.navigate(['/login']);
      return false;
    }
    
  }

}
