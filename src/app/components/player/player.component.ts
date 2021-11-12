import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Params } from '@angular/router';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

    video:any;

    constructor(private dataService:DataService,private activatedRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params :Params) =>{
        this.video = params['id'];
        console.log(this.video);

      })
    }
    

}
