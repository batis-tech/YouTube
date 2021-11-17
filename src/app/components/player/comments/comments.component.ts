import { Component, OnInit,Input } from '@angular/core';
import { TimeagoIntl } from 'ngx-timeago';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
@Input() comments:any[]=[];
commentId:any[]=[]


  constructor() { }
  ngOnInit(): void {


  }
  onScroll() {
     console.log('scrolled!!');
   }
}
