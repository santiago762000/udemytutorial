import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigurationService {

  constructor(private http:Http) { }

  getVariables(){
    return this.http.get('assets/config.json')
    .map(res=>res.json()).catch(this.showError);
  }

  private showError(error:Response){
    return error.json();
  }

}
