import { Component } from '@angular/core';
import {Routes,RouterModule,Router} from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ AuthService ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router:Router;

  constructor(private _router:Router,private auth: AuthService) {
    this.router=_router;
    this.auth.handleAuthentication();
  }
  
  public moveToLogin(){
    this.router.navigate(['./login']);
  }

}
