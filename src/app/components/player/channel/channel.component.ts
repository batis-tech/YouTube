import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() channel:any;
  @Input() statistics:any;

  constructor(private router:Router ) { }

  ngOnInit(): void {


  }

  channelProfile(id: string){
    this.router.navigate(['profile',id])
  }

}
