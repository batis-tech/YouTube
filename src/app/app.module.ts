import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeagoModule } from 'ngx-timeago';
import { PlayerComponent } from './components/player/player.component';
import { NgxYoutubePlayerModule  } from "ngx-youtube-player";
import { CommentsComponent } from './components/player/comments/comments.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ChannelComponent } from './components/player/channel/channel.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { ReplyComponent } from './components/player/reply/reply.component';
import { RelatedvideosComponent } from './components/player/relatedvideos/relatedvideos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlayerComponent,
    CommentsComponent,
    ChannelComponent,
    ShortNumberPipe,
    ReplyComponent,
    RelatedvideosComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatExpansionModule,
    HttpClientModule,
    TimeagoModule.forRoot(),
    NgxYoutubePlayerModule.forRoot(),
    InfiniteScrollModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
