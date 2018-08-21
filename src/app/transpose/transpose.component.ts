import { Component, OnInit, Input } from '@angular/core';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transpose',
  templateUrl: './transpose.component.html',
  styleUrls: ['./transpose.component.css']
})
export class TransposeComponent implements OnInit {
  @Input() chordsAndLyrics;
  tones = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
  faMinusSquare = faMinusSquare;
  faPlusSquare = faPlusSquare;
  tone = 'A';// this.findTone();

  changeTone(isPluse: boolean) {
    let i, offset = 1;

    if (isPluse) {
      offset += 10;
    }

    for (i = 0; i < 12; ++i) {
      if (this.tone === this.tones[i]) {
        this.tone = this.tones[(i + offset) % 12];
        break;
      }
    }
  }

  findTone(): string {
    let i, chord, tone;

    for(i = 0; i < this.chordsAndLyrics.length; ++i)
    {
      if(this.chordsAndLyrics[i] != ' ') {
        chord = this.getChord(i);
        if (chord != null)
        {
          if(chord.length == 1)
          {
            tone = chord;
          }
          else
          {
            if(chord[1] == 'm') {
              tone = this.getMajor(chord.subString(1));
            }
            else if(chord[2] == 'm') {
              tone = this.getMajor(chord.subString(2));
            }
            else {
              tone = chord.subString(1);
            }
          }
        }
      }
    }

    return tone;
  }

  getMajor(minorChord: string): string {
    let toneValue = this.getValueOfTone(minorChord);

    return this.tones[(toneValue + 3) %12];
  }

  getValueOfTone(tone) {
    let i, value;

    for(i = 0; i < 12; ++i)
    {
      if (tone === this.tones[i])
      {
        value = i;
        break;
      }
    }

    return value;
  }

  getChord(i) {
    let startIndex = i, endIndex = i, chord;

    while(this.chordsAndLyrics[endIndex] != ' ') {
      ++endIndex;
    }

    chord = this.chordsAndLyrics.subString(startIndex, endIndex);
    if(chord[0] == 'A' || chord[0] == 'B' || chord[0] == 'C' || chord[0] == 'D' || chord[0] == 'E' || chord[0] == 'F' || chord[0] == 'G') {
      switch(chord[1]) {
        case 'm':
          break;
        case 'b':
          if(chord[0] == 'A' || chord[0] == 'B' || chord[0] == 'D' || chord[0] == 'E' || chord[0] == 'G') {
            if(this.isHarmony(chord.subString(2))) {
              break;
            }
            else {
              chord = null;
            }
          }
          else {
            chord = null;
          }
        case '#':
          if(chord[0] == 'A' || chord[0] == 'C' || chord[0] == 'D' || chord[0] == 'F' || chord[0] == 'G') {
            if(this.isHarmony(chord.subString(2))) {
              break;
            }
            else {
              chord = null;
            }
          }
          else {
            chord = null;
          }
        default:
        if(this.isHarmony(chord.subString(1))) {
          break;
        }
        else {
          chord = null
        }
      }
    }

    return chord;
  }

  isHarmony(harmony) {
    if(harmony.subString(0, 3) == 'sus' || harmony.subString(0, 3) == 'aug' || harmony.subString(0, 3) == 'add' || harmony.subString(0, 3) == 'maj' ||
      harmony.subString(0, 1) == 'M' || harmony.subString(0, 1) == '/' || !isNaN(parseInt(harmony[0], 10))) {
        return true;
      }
    else {
      return false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
