import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { ConfigurationService } from './../services/configuration.service';


declare var auth0: any;

@Injectable()
export class Auth0Service {

  auth0: any;

  constructor(private router: Router, private ConfigurationService: ConfigurationService) {
    this.ConfigurationService.getVariables().subscribe(posts => {

      this.auth0 = new auth0.WebAuth({
        domain: posts.domain,
        clientID: posts.clientId,
        // specify your desired callback URL
        redirectUri: 'http://localhost:4200',
        responseType: 'token id_token'
      });


    }, err => {
      //this.showSnackBar("Connection Error","Please, check your configuration");
    })



  }



  public login(username: string, password: string): void {
    this.auth0.client.login({
      realm: 'Username-Password-Authentication',
      username,
      password,
      scope: 'openid profile',
    }, (err, authResult) => {
      if (err) return alert(err.description);
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigate(['/home']);
      }
    });

  }

  public isAuthenticated(): boolean {
    // Check whether the id_token is expired or not
    return tokenNotExpired('id_token');
  }

  public logout(): void {
    // Remove token from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    this.router.navigate(['/login']);
  }

}