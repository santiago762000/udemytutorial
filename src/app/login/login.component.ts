import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AccessGuardService} from './../services/access-guard.service';
import {ConfigurationService} from './../services/configuration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ConfigurationService]
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  router:Router;
  properties:Object;

  constructor(private _router:Router, private accessGuard:AccessGuardService, private configurationService:ConfigurationService) { 
    this.router=_router;
  }


  ngOnInit() {
    this.getConfigurations();
  }

  private getConfigurations(){
    this.configurationService.getVariable().subscribe(posts=>{
      this.properties=posts;
    }, err =>{
      alert("Error");
    });
  }

  checkEmailPassword(){
    if(this.email=="chucknorris@gmail.com" && this.password=="idontneedapassword"){
      alert("Success");
      this.accessGuard.setAuthetication(true);
      this.router.navigate(['./home']);
    }else{
      alert("Wrong email or password");
    }

  }

  checkConfiguration(){
    alert(this.properties["domain"]);
  }

}
