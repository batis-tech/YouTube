import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params } from '@angular/router';
import { TimeagoIntl } from 'ngx-timeago';
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


  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private httpClient :HttpClient) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.video = params['id'];
      console.log(this.video);
      this.getRates(this.video)
      this.getVideoStatistics(this.video)
      this.getComments(this.video)
    })
  }

getRates(id: string){
  this.dataService.videoDetails(id).subscribe(data =>{
    this.videoDetail = data.items;
    console.log('video details',this.videoDetail);
    this.channelID = data.items[0].snippet.channelId;
    console.log('channnel id',this.channelID);
    this.getChannelDetail(this.channelID)
    this.getChannelStatistics(this.channelID)
  })
}
getVideoStatistics(id: string){
  this.dataService.videoStatistics(id).subscribe(data =>{
    this.videoStatistics = data.items[0].statistics;
    console.log('video Statistics',this.videoStatistics);

  })
}
getComments(id: string){
  this.dataService.videoComments(id).subscribe(data =>{
    this.videoComments = data.items;
    console.log('comments',this.videoComments);
  })
}
 getChannelDetail(id:string){
   this.dataService.ChannelDetail(id).subscribe(data =>{
     this.channel = data.items
     console.log('channels data',this.channel);
   })
 }
 getChannelStatistics(id:string){
   this.dataService.Channelstatistics(id).subscribe(data =>{
     this.channelStatistics = data.items[0].statistics;
     console.log('channels statistics',this.channelStatistics);
   })
 }
}
