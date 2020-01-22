import { Component, OnInit } from '@angular/core';
import { faHeart, faRss, faHome } from '@fortawesome/free-solid-svg-icons';
import { faRedditAlien, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'hdlr';
  
  faHeart = faHeart
  faRedditAlien = faRedditAlien
  faRss = faRss
  faDiscord = faDiscord
  faHome = faHome
  faTwitter = faTwitter

  constructor(){}

  ngOnInit(): void {
  }

}
