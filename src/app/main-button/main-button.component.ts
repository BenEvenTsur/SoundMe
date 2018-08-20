import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {
  buttonDisplay = false;

  hideButtons()  {
    this.buttonDisplay = !this.buttonDisplay;
  }
  constructor() { }

  ngOnInit() {
  }

}
