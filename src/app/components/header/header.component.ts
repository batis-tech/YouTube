import { Component, OnInit ,Inject,  Renderer2} from '@angular/core';

import { DOCUMENT } from '@angular/common'
@Component({
  selector: 'header-app',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
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

    this.isMenuOpen = !this.isMenuOpen;

   }
}
 export type Theme = 'light-theme' | 'dark-theme';