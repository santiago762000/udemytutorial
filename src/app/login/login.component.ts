import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AccessGuardService} from './../services/access-guard.service';
import {ConfigurationService} from './../services/configuration.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfigurationService]
})
export class LoginComponent implements OnInit {

  email:String;
  password:String;
  router:Router;
  properties:Object;

  constructor(private _router:Router, 
  private accessGuard:AccessGuardService, 
  private ConfigurationService:ConfigurationService,
  private snackBar:MdSnackBar) { 
    this.router=_router;
  }


  ngOnInit() {
    this.getConfigurations();
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

  private getConfigurations(){
    this.ConfigurationService.getVariables().subscribe(posts=>{
      this.properties=posts;
    }, err=>{
      this.showSnackBar("Connection Error","Please, check your configuration");
    })
  }

  showSnackBar(message:string, action:string){
    this.snackBar.open(message,action,{duration:2000});
  }

}
