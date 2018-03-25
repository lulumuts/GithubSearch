import { Component, OnInit } from '@angular/core';
import {Repos} from '../repos'
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {GithubRequestService} from '../github-http/github-request.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos:Object[];

  constructor(private http:HttpClient) { }
  showObject(){
    this.reposService.getObject().subscribe(data => this.repos)
  }
  ngOnInit() {
    interface ApiResponse{
      name:string,
      url:string
    }
    this.http.get("https://api.github.com/users/lulumuts/repos?access_token=7cc1e91492e05cb87cb0afbd9a40bffa2cc90054").subscribe(data=>{

      this.repos=new Object(data[0].name,data[0].url)
      console.log(new Object)

    }
  }

    }
}
