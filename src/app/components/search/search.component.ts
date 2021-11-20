import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,Router } from '@angular/router';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchItem:any;
  resultList:any;

  constructor(private activatedRoute:ActivatedRoute,private router:Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params)=>{
      this.searchItem = params['search']
      console.log('search result',this.searchItem);
      this.getSearchResult(this.searchItem)
    })
  }

  getSearchResult(search: any){
    this.dataService.searchResultVideo(search).subscribe(data =>{
      this.resultList = data.items
      console.log(data.items);

    })
  }
  videoPlayer(id:string){
    this.router.navigate(['watch', id])
  }


}
