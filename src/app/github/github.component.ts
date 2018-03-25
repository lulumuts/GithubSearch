import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Search} from '../search'
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
// import {GithubRequestService} from '../github-http/github-request.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',

  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  search:Search;

  showSearch(){
    this.searchService.getSearch().subscribe(data => this.search)
  }
  constructor(private http:HttpClient) { }


  ngOnInit() {

    interface ApiResponse{
      login:string,
      bio:string,
      repos_url:string,
      avatar_url:string
    }
    this.http.get("https://api.github.com/users/lulumuts?access_token=7cc1e91492e05cb87cb0afbd9a40bffa2cc90054").subscribe(data=>{
      this.search=new Search(data.login, data.bio,data.repos_url,data.avatar_url)
    })
    // this.searchService.searchRequest()
    // this.search=this.searchService.search

    }
  }
