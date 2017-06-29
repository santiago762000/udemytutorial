import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AccessGuardService} from './../services/access-guard.service';


import { Auth0Service } from './../services/auth0.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  router:Router;
  properties:Object;

  constructor(private _router:Router, 
  private accessGuard:AccessGuardService, 
  private auth:Auth0Service) { 
    this.router=_router;
  }


  ngOnInit() {
    
  }

  
  

  

  

}
