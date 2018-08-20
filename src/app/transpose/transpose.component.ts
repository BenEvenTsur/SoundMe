import { Component, OnInit } from '@angular/core';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.css']
})
export class TransposeComponent implements OnInit {
  tones = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
  faMinusSquare = faMinusSquare;
  faPlusSquare = faPlusSquare;
  tone = 'A';

  pluseTone() {
    let i;

    for (i = 0; i < 12; ++i) {
      if (this.tone === this.tones[i]) {
        this.tone = this.tones[(i + 1) % 12];
        break;
      }
    }
  }

  minusTone() {
    let i;

    for (i = 0; i < 12; ++i) {
      if (this.tone === this.tones[i]) {
        this.tone = this.tones[(i + 11) % 12];
        break;
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
