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

  videoDetails(id: string){
    let videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&maxResults=40&key=${this.api}`;
     return this.http.get<any>(videoDetails, this.httpYoutubeVideos)
  }
  videoStatistics(id: string){
    let videoStatistics = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&maxResults=40&key=${this.api}`;
     return this.http.get<any>(videoStatistics, this.httpYoutubeVideos)
  }

  videoComments(id: string){
    let videoComments = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=10000&order=relevance&videoId=${id}&key=${this.api}`;
     return this.http.get<any>(videoComments, this.httpYoutubeVideos)
  }
  ChannelDetail(id:string){
    let channelDetail = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${this.api}`;
    return this.http.get<any>(channelDetail, this.httpYoutubeVideos)
  }
  Channelstatistics(id:string){
    let channelStatistics = `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${this.api}`;
    return this.http.get<any>(channelStatistics, this.httpYoutubeVideos)
  }
  relatedvideos(id:string){
    let relatedvideos = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&videoCategoryId=${id}&key=${this.api}`;
    return this.http.get<any>(relatedvideos, this.httpYoutubeVideos)
  }
  relatedvideosStatistics(id:string){
    let relatedvideosStatistics = `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&chart=mostPopular&maxResults=100&videoCategoryId=${id}&key=${this.api}`;
    return this.http.get<any>(relatedvideosStatistics, this.httpYoutubeVideos)
  }

}
