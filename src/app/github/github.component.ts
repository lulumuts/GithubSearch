import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Search} from '../search'
import{Repos} from '../repos'
import {HttpClient} from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
// import {GithubRequestService} from '../github-http/github-request.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})

export class GithubComponent implements OnInit {


  constructor() { }


  ngOnInit() {

    }
  }
