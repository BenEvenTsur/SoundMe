import { Component, OnInit, Input } from '@angular/core';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { disableDebugTools } from '@angular/platform-browser';

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
  tone ='A';

  pluseOrMinus(steps) {
    this.tone = this.changeTone(this.tone, steps);
    this.transposeChords(steps);
  }

  changeTone(tone, steps) {
    let i, newTone;
    if (steps < 0) {
      steps += 12;
    }

    for (i = 0; i < 12; ++i) {
      if (tone === this.tones[i]) {
        newTone = this.tones[(i + steps) % 12];
        break;
      }
    }

    return newTone;
  }

  findTone(chordString): string {
    let i, chord, tone;
    debugger;

    for(i = 0; i < chordString.length; ++i)
    {
      if(chordString[i] != ' ') {
        chord = this.getChord(i);
        if (chord != null)
        {
          if(chord.length == 1)
          {
            tone = chord;
            break;
          }
          else
          {
            if(chord[1] == 'm') {
              tone = this.getMajor(chord.substring(0,1));
              break;
            }
            else if(chord[2] == 'm') {
              tone = this.getMajor(chord.substring(0,2));
              break;
            }
            else {
              if(chord[1] == 'b') {
                tone = chord.substring(0,2);
              } else if (chord[1] == '#') {
                tone = this.tones[this.getValueOfTone(chord.substring(0,1)) + 1];

              } else {
                tone = chord.substring(0,1);
              }
              
              break;
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

    while(this.chordsAndLyrics[endIndex] != ' ' && this.chordsAndLyrics[endIndex] != '\n') { // || this.chordsAndLyrics[endIndex] != '\0'
      if(this.chordsAndLyrics.length > endIndex) {
        ++endIndex;
      } else {
        break;
      }    
    }

    chord = this.chordsAndLyrics.substring(startIndex, endIndex);
    if(chord[0] == 'A' || chord[0] == 'B' || chord[0] == 'C' || chord[0] == 'D' || chord[0] == 'E' || chord[0] == 'F' || chord[0] == 'G') {
      if(chord.length > 1) {
        switch(chord[1]) {
          case 'm':
            break;
          case 'b':
            if(chord[0] == 'A' || chord[0] == 'B' || chord[0] == 'D' || chord[0] == 'E' || chord[0] == 'G') {
              if(this.isHarmony(chord.substring(2))) {
                break;
              }
              else {
                chord = null;
              }
            }
            else {
              chord = null;
            }
            break;
          case '#':
            if(chord[0] == 'A' || chord[0] == 'C' || chord[0] == 'D' || chord[0] == 'F' || chord[0] == 'G') {
              if(this.isHarmony(chord.substring(2))) {
                break;
              }
              else {
                chord = null;
              }
            }
            else {
              chord = null;
            }
            break;
          default:
            if(this.isHarmony(chord.substring(1))) {
            break;
            }
            else {
              chord = null
            }   
          }
        }
      }else {
      chord = null;
    }

    return chord;
  }

  isHarmony(harmony) {
    if(harmony == '') {
      return true;
    } else if(harmony.substring(0, 3) == 'sus' || harmony.substring(0, 3) == 'aug' || harmony.substring(0, 3) == 'add' || harmony.substring(0, 3) == 'maj' ||
      harmony.substring(0, 3) == 'dim' || harmony.substring(0, 1) == 'M' || harmony.substring(0, 1) == '/' || !isNaN(parseInt(harmony[0], 10))) {
        return true;
    } else {
      return false;
    }
  }

  transposeChords(steps) {
    debugger;
    let i, newChordsAndLyrics = this.chordsAndLyrics;

    for(i = 0; i < this.chordsAndLyrics.length; ++i)
    {
      let chord = this.getChord(i);
      if(chord != null) {
        let newChord = this.changeChord(chord, steps);
        newChordsAndLyrics = newChordsAndLyrics.substring(0, i) + newChord + newChordsAndLyrics.substring(i + 1 + chord.length);
        i += (newChord.length - 1);
      }
    }
    console.log(newChordsAndLyrics);
  }

  changeChord(chord, steps) {
    let tone = this.getTone(chord);
    let harmony = chord.substring(tone.length);

    return this.changeTone(tone, steps) + harmony;
  }

  getTone(chord) {
    let tone;

    if (chord.length == 1) {
      tone = chord;
    }
    else if(chord[1]=='b' || chord[1]=='#') {
      tone = chord.substring(0,2);
    }
    else {
      tone = chord.substring(0,1);
    }

    return tone;
  }

  constructor() {
  }

  ngOnInit() {
    this.tone = this.findTone(this.chordsAndLyrics);
  }

}
