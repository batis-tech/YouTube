import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list:any[]=[];
  videolists:any[]=[];


  constructor(private dataService:DataService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.dataService.youtubeVideos().subscribe(data =>{

        this.videolists = data.items;

        console.log(this.videolists);
    })

  }

}
