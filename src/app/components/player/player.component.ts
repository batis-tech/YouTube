import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params,Router } from '@angular/router';
import { TimeagoIntl } from 'ngx-timeago';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  video: any;
  isMenuOpen = false;
  width=850;
  videoDetail:any;
  @Input() videoComments:any[]=[];
  commentId:any;
  channelID:any;
  @Input() channel:any;
  @Input() channelStatistics:any;
  panelOpenState = false;
  videoStatistics:any;
  categoryID:any;
  @Input() relateds:any[]=[];
  @Input() relatedsStatistics:any;
  likeForm:any;
  dislikeForm:any;



  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private httpClient :HttpClient) { }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.video = params['id'];
      console.log(this.video);
      this.getRates(this.video)
      this.getVideoStatistics(this.video)
      this.getComments(this.video);
    })
    this.likeForm = new FormGroup({
      'like':new FormControl(''),
      'videoID':new FormControl('')
    });
    this.dislikeForm = new FormGroup({
      'like':new FormControl(''),
      'videoID':new FormControl('')
    });
  }




getRates(id: string){
  this.dataService.videoDetails(id).subscribe(data =>{
    this.videoDetail = data.items;
    // console.log('video details',this.videoDetail);
    this.channelID = data.items[0].snippet.channelId;
    this.categoryID = data.items[0].snippet.categoryId;
    // console.log('channnel id',this.channelID);
    // console.log('category id',this.categoryID);
    this.getChannelDetail(this.channelID);
    this.getChannelStatistics(this.channelID);
    this.getRelatedVideos(this.categoryID);
    this.getRelatedVideosStatistics(this.categoryID);
  })
}
getVideoStatistics(id: string){
  this.dataService.videoStatistics(id).subscribe(data =>{
    this.videoStatistics = data.items[0].statistics;
    // console.log('video Statistics',this.videoStatistics);

  })
}
getComments(id: string){
  this.dataService.videoComments(id).subscribe(data =>{
    this.videoComments = data.items;
    // console.log('comments',this.videoComments);

  })
}
 getChannelDetail(id:string){
   this.dataService.ChannelDetail(id).subscribe(data =>{
     this.channel = data.items
     // console.log('channels data',this.channel);
   })
 }
 getChannelStatistics(id:string){
   this.dataService.Channelstatistics(id).subscribe(data =>{
     this.channelStatistics = data.items[0].statistics;
     // console.log('channels statistics',this.channelStatistics);
   })
 }
 getRelatedVideos(id:string){
   this.dataService.relatedvideos(id).subscribe(data =>{
     this.relateds = data.items
     // console.log('relatedvideos',data.statistics);
   })
 }
 getRelatedVideosStatistics(id:string){
   this.dataService.relatedvideosStatistics(id).subscribe(data =>{
     this.relatedsStatistics = data.items;
     // console.log('relatedvideos Statistics',this.relatedsStatistics );
   })
 }
 onLike(){
   this.activatedRoute.params.subscribe((params: Params) => {
     this.video = params['id'];
    this.likeForm.value.like = "like",
    this.likeForm.value.videoID =  this.video,
    console.log(this.likeForm.value.videoID,this.likeForm.value.like);
    this.likeAction(this.likeForm.value.videoID,this.likeForm.value.like)
  })
 }
 onDislike(){
   this.activatedRoute.params.subscribe((params: Params) => {
     this.video = params['id'];
    this.likeForm.value.like = "dislike",
    this.likeForm.value.videoID =  this.video,
    console.log(this.likeForm.value.videoID,this.likeForm.value.like);
    this.dislikeAction(this.likeForm.value.videoID,this.likeForm.value.like)
  })
 }

 likeAction(videoId: any,like: any){
   this.dataService.likeButtonLike(videoId,like).subscribe((result)=>{
      console.log('result',result);
    })
 }
 dislikeAction(videoId: any,like: any){
   this.dataService.dislikeButtonLike(videoId,like).subscribe((result)=>{
      console.log('result',result);
    })
 }

}
