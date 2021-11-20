import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profile:any;
  channelProfileDetails:any;
  channelProfileDetailsStatistics:any;
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.profile = params['id'];
      console.log(this.profile);
      this.getChannelProfile(this.profile);
      this.getChannelProfileStatistics(this.profile);
    })
  }
  getChannelProfile(id: string){
    this.dataService.channelProfile(id).subscribe(data =>{
      this.channelProfileDetails = data.items[0]
      console.log('profile details', this.channelProfileDetails);
    })
  }

  getChannelProfileStatistics(id: string){
    this.dataService.channelProfileStatistics(id).subscribe(data =>{
      this.channelProfileDetailsStatistics = data.items[0].statistics;
      console.log('profile details Statistics', this.channelProfileDetailsStatistics);
    })
  }
  home(id:any){
    this.router.navigate(['channel',id], { relativeTo: this.activatedRoute })
  }

}
