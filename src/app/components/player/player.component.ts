import { Component, OnInit } from '@angular/core';
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

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute,private httpClient :HttpClient) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.video = params['id'];
      console.log(this.video);
      this.getRates(this.video)
    })
  }

getRates(id: string){
  this.dataService.videoDetails(id).subscribe(data =>{
    this.videoDetail = data.items;
    console.log(this.videoDetail);
    console.log(data);

  })
}
}
