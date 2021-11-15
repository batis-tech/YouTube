import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  @Input() replies:any;

  ngOnInit(): void {
    console.log('comment id',this.replies);

  }

}
