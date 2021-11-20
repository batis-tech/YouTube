import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-relatedvideos',
  templateUrl: './relatedvideos.component.html',
  styleUrls: ['./relatedvideos.component.scss']
})
export class RelatedvideosComponent implements OnInit {
  @Input() videos:any;
  @Input() videosStatistics:any;
  redite:any;
  constructor( private router:Router) { }

  ngOnInit(): void {


  }
  videoDetail(id: string){
  this.router.navigate(['watch', id])
  .then(() => {
   window.location.reload();
 });
  }

}
