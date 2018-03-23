import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { GithubDetailsComponent } from './github-details/github-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    GithubDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
