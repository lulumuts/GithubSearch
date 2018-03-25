import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import {Search} from '../search'

@Injectable()
export class GithubRequestService {
  search:Search;

  constructor(private http:HttpClient) {
    this.search=new Search("","","","");
  }

  githubRequest(){

    interface ApiResponse{
      login:string;
      name:string;
      repos_url:string;
      avatar_url:string;
    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>("https://api.github.com/users/"+this.name +"access_token="+ environment.access_token)

        this.search.login=response.login
        this.search.name=response.name
        this.search.repos_url=response.repos_url
        this.search.avatar_url=response.avatar_url

        resolve()
      },
      error=>{
        this.search.login="NONE"
        this.search.name="NONE"
        this.search.repos_url="NONE"
        this.search.avatar_url="NONE"
        reject(error)

      }
    )
      return promise;
  }


  }
