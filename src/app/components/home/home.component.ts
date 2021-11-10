import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService:DataService,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  getVidoes(){
    this.dataService.youtubeVideos().subscribe(data =>{
      console.log(data);

    })
  }

}
