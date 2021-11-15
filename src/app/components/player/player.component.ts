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


  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private httpClient :HttpClient) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.video = params['id'];
      console.log(this.video);
      this.getRates(this.video)
      this.getComments(this.video)
    })
  }

getRates(id: string){
  this.dataService.videoDetails(id).subscribe(data =>{
    this.videoDetail = data.items;
  })
}
getComments(id: string){
  this.dataService.videoComments(id).subscribe(data =>{
    this.videoComments = data.items;
    console.log('comments',this.videoComments);

  })
}
}
