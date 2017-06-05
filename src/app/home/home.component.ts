import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[GithubService]
})
export class HomeComponent implements OnInit {

  username:String;
  repoContents:Array<Object>;
  showSearchBox:Boolean;
  filterOptions:Array<Object>;
  selectedFilter:Object;

  constructor(private myService:GithubService, private snackBar:MdSnackBar) {
   }

  ngOnInit() {
    this.resetAll();
    this.filterOptions=[{name:"name",value:"name"},{name:"date",value:"pushed_at"}];
    this.selectedFilter=this.filterOptions[0]
  }

  showSnackBar(message:string, action:string){
    this.snackBar.open(message,action,{duration:2000});
  }

  showContents(){
    this.repoContents=[];
    this.myService.getRepositories(this.username).subscribe(posts=>{
      this.repoContents=posts;
      this.showSearchBox=false;
    }, err =>{
      this.showSnackBar("Not Found", "Connection Error");
      this.showSearchBox=true;
    });
  }

  resetAll(){
    this.showSearchBox=true;
    this.repoContents=[];
    this.username="";
  }

}
