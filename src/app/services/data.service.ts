import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private router :Router, private http :HttpClient) { }

  private httpYoutubeVideos ={
  headers : new HttpHeaders({
  'Accept' : 'application/json',
  'Content-Type' : 'application/json',
  'Authorization': 'Bearer 325992560926-rod357s3igu8qqr8tqmqej004nh11r0r.apps.googleusercontent.com'
  })
}
//clientId = 325992560926-rod357s3igu8qqr8tqmqej004nh11r0r.apps.googleusercontent.com
//Client secret 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
//api = AIzaSyAdPDQBCgc6Yr2m0HqMroI3X-LkEcVGCy8
  youtubeVideos():Observable<any>{
    let yVideos =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyAdPDQBCgc6Yr2m0HqMroI3X-LkEcVGCy8`;
     return this.http.get<any>(yVideos, this.httpYoutubeVideos)
  }
}
