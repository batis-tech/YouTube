import { Component, OnInit ,Inject,  Renderer2} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/common'
@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  theme: Theme = 'dark-theme';
  isMenuOpen = false;
  panelOpenState = false;
  searchForm: FormGroup;
  searchItem:any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,private router:Router) {
      this.searchForm = new FormGroup({
        'search':new FormControl('', Validators.required)
      });
    }

  ngOnInit(){
    this.initializeTheme();

  }

  switchTheme(){
    this.document.body.classList.replace(this.theme, this.theme ==='light-theme'? (this.theme = 'dark-theme') : (this.theme = 'light-theme'))
  }
  initializeTheme = (): void =>
   this.renderer.addClass(this.document.body, this.theme);

   onToolbar(){
    this.isMenuOpen = !this.isMenuOpen;
   }
   search(){
     console.log('Search Search',this.searchForm.value.search);
     this.searchItem = this.searchForm.value.search
     this.searchResult(this.searchItem)
   }
   searchResult(search: string){
     this.router.navigate(['search', search])
   }
}
 export type Theme = 'light-theme' | 'dark-theme';
