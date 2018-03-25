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
  repos:Repos;

  constructor() { }
  showRepos(){
    this.reposService.getRepos().subscribe(data => this.repos)
  }
  ngOnInit() {
  }

}
