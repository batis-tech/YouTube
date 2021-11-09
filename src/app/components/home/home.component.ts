import { Component, OnInit ,Inject,  Renderer2} from '@angular/core';

import { DOCUMENT } from '@angular/common'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  theme: Theme = 'dark-theme';
  isMenuOpen = true;
  panelOpenState = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2) {}

  ngOnInit(){
    this.initializeTheme();

  }
  switchTheme(){
    this.document.body.classList.replace(this.theme, this.theme ==='light-theme'? (this.theme = 'dark-theme') : (this.theme = 'light-theme'))
  }
  initializeTheme = (): void =>
   this.renderer.addClass(this.document.body, this.theme);

   onToolbar(){
    console.log("is been clicked",this.isMenuOpen);
    this.isMenuOpen = !this.isMenuOpen

   }
}
 export type Theme = 'light-theme' | 'dark-theme';
