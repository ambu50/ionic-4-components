import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onActionClick(index) {
    console.log('test', index);
  }

  fivClose(event) {
    console.log('fivClose', event);
  }

}
