import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'block1',
  templateUrl: './block1.component.html',
  styleUrls: ['./block1.component.css']
})
export class Block1Component implements OnInit {
  private theDate = "2019-02-01";


  constructor() { }

  ngOnInit() {
  }

  public formatDate(dt: String) {
    return dt.split("-").reverse().join("/")
  }

}
