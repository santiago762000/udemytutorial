import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[GithubService]
})
export class HomeComponent implements OnInit {

  username:String;
  repoContents:Array<Object>=[];

  constructor(private myService:GithubService) {
   }

  ngOnInit() {
  }

  showContents(){
    this.repoContents=[];
    this.myService.getRepositories(this.username).subscribe(posts=>{
      this.repoContents=posts;
    }, err =>{
      //show an error
    });

  }

}
