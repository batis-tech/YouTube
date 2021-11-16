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
ids:any;

  constructor() { }
  ngOnInit(): void {
    const ids = this.comments;
    console.log('id');
  }
  onScroll() {
     console.log('scrolled!!');
   }
}
