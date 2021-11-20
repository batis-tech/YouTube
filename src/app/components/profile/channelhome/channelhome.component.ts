import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-channelhome',
  templateUrl: './channelhome.component.html',
  styleUrls: ['./channelhome.component.scss']
})
export class ChannelhomeComponent implements OnInit {
 channelId:any;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.channelId = params['id'];
      this.vidoes(this.channelId)
    })
  }

  vidoes(id: any){
    this.dataService.getChannelVideos(id).subscribe(data =>{
      console.log('channel  videos data',data);
    })

  }


}
