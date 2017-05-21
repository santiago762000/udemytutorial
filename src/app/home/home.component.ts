import { Component, OnInit } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[GithubService]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
