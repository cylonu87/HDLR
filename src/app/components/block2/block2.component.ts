import { Component, OnInit } from '@angular/core';
import { faMobile, faSignal } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faGratipay } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'block2',
  templateUrl: './block2.component.html',
  styleUrls: ['./block2.component.css']
})
export class Block2Component implements OnInit {
  
  faMobile = faMobile
  faSignal = faSignal
  faAndroid = faAndroid
  faGratipay = faGratipay

  constructor() { }

  ngOnInit() {
  }

}
