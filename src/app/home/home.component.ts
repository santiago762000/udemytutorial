import { Component, OnInit } from '@angular/core';
import {LocalstorageService} from './../services/localstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LocalstorageService]
})
export class HomeComponent implements OnInit {
  favoritesFromLocalStorage=[];
  ngOnInit() {
  
  }

  constructor(private localStorageService:LocalstorageService){

  }

updateTab($event: any) {
  this.favoritesFromLocalStorage=this.localStorageService.getFavoriteObjects();
}
}
