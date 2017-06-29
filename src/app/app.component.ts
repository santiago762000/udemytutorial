import { Component } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';
import { Auth0Service } from './services/auth0.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ Auth0Service ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router:Router;

  constructor(private _router:Router,private auth: Auth0Service) {
    this.router=_router;
    
  }
  
  public moveToLogin(){
    this.router.navigate(['./login']);
  }

}
