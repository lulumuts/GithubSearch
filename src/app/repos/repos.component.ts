import { Component, OnInit } from '@angular/core';
import {Repos} from '../repos'
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {GithubRequestService} from '../github-http/github-request.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  providers:[GithubRequestService],
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos:Repos;

  constructor(private http:HttpClient) { }
  // showRepos(){
  //   this.reposService.getRepos().subscribe(data => this.repos)
  // }
  ngOnInit() {

    interface ApiResponse{
      name:string,
      url:string,
    }

    this.http.get("https://api.github.com/users/lulumuts/repos?access_token=7cc1e91492e05cb87cb0afbd9a40bffa2cc90054").subscribe(data=>{
      this.repos=new Repos(data[0].name,data[0].url)


    })
  }
}
