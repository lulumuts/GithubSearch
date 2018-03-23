import { Component, OnInit } from '@angular/core';
import {Search} from './search'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  search:Search;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://api.github.com/users/mbuthiya?access_token=7cc1e91492e05cb87cb0afbd9a40bffa2cc90054").subscribe(data=>{

    })
  }

}
