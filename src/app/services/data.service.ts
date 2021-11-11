import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api ='AIzaSyAdPDQBCgc6Yr2m0HqMroI3X-LkEcVGCy8';

  private httpYoutubeVideos ={
  headers : new HttpHeaders({
  'Accept' : 'application/json',
  'Content-Type' : 'application/json'
  })
}


  constructor(private router :Router, private http :HttpClient) { }


  youtubeVideos():Observable<any>{
    let yVideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=id&chart=mostPopular&maxResults=40&key=${this.api}`;
     return this.http.get<any>(yVideos, this.httpYoutubeVideos)
  }


}
