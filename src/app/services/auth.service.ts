import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';


declare var auth0: any;

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    domain: 'ldu.auth0.com',
    clientID: 'hMApwdVCCDR6QxeYZ81UcA1XGhQ7y58L',
    // specify your desired callback URL
    redirectUri: 'http://localhost:4200',
    responseType: 'token id_token'
  });

  constructor(private router: Router) { }

  public handleAuthentication(): void {
    this.auth0.parseHash({ _idTokenVerification: false }, (err, authResult) => {
      if (err) {
        alert(`Error: ${err.errorDescription}`)
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        this.router.navigate(['/home']);
      }
    });
  }

  public login(username: string, password: string): void {
    this.auth0.redirect.loginWithCredentials({
      connection: 'Username-Password-Authentication',
      username,
      password
    }, err => {
      if (err) return alert(err.description);
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
  }

  private setUser(authResult): void {
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
  }

}
