import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css']
})
export class MainButtonComponent implements OnInit {
buttonDisplay = true;
@Output() transDispalyEvent = new EventEmitter<boolean>();

  hideButtons() {
    this.buttonDisplay = !this.buttonDisplay;
  }

  changeTransDisplay() {
    this.transDispalyEvent.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
