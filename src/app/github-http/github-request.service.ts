import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
import {Search} from './search'

@Injectable()
export class GithubRequestService {
  search:Search;

  constructor(private http:HttpClient) {
    this.search=new Search("","","","");
  }

  githubRequest(){

    interface ApiResponse{
      name:string;
      bio:string;
      url:string;
      image:string
    }
    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{

        this.search.name=response.name
        this.search.bio=response.bio
        this.search.url=response.url
        this.search.image=response.url

        resolve()
        this.search.name="NONE"
        this.search.bio="NONE"
        this.search.url="NONE"
        this.search.image="NONE"
      },
      error=>{

      })
    })
  }

}
