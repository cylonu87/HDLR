import { Component, OnInit } from '@angular/core';
import { faRss, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faPatreon } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'block1',
  templateUrl: './block1.component.html',
  styleUrls: ['./block1.component.css']
})
export class Block1Component implements OnInit {
  private theDate = "2019-02-01";
  
  faRss = faRss
  faPatreon = faPatreon
  faQuestion = faQuestion

  constructor() { }

  ngOnInit() {
  }

  public formatDate(dt: String) {
    return dt.split("-").reverse().join("/")
  }

}
