import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-editor',
  templateUrl: './song-editor.component.html',
  styleUrls: ['./song-editor.component.css']
})
export class SongEditorComponent implements OnInit {
  songName: string;
  songWriter: string;
  songComposser: string;
  songPerformer: string;
  comments: string;
  songChords: string;
  songLyrics: string;
  transDisp = true;

  changeTransDisplay() {
    this.transDisp = !this.transDisp;
  }

  lyrcisChange(newChords) {
    this.songLyrics = newChords;
}

  getSongName() {
    let songNameToReturn = this.songName;
    if (this.songPerformer != null) {
      songNameToReturn += (' - ' + this.songPerformer);
    }

    return songNameToReturn;
  }

  getSongDetails()  {
    let songDetailsToReturn = '';

    if (this.songComposser != null && this.songComposser === this.songWriter) {
      songDetailsToReturn = 'Wrote and composed by ' + this.songComposser;
    } else {
      if (this.songWriter != null) {
        songDetailsToReturn += ('Wrote by ' + this.songWriter + ' ,');
      }
      if (this.songComposser != null) {
        songDetailsToReturn += ('Composed by ' + this.songComposser);
      }
    }

    return songDetailsToReturn;
  }
  getChordsAndLyrics()  {
    return this.songLyrics + '\n' + this.songChords;
  }

  constructor() {
    this.songName = 'BlackBird';
    this.songWriter = 'John Lennon and Paul McCartney';
    this.songComposser = 'John Lennon and Paul McCartney';
    this.songPerformer = 'The Beatles';
    this.comments = 'Original tone G.';
    this.songChords = '';
    this.songLyrics = `  G       Am7            G/B     G
Blackbird singing in the dead of night
C C#dim D D/Eb Em Em/Eb
Take these broken wings and learn to fly
D C#dim C Cm
All your life
G/B A7 D7 G
You were only waiting for this moment to arise

G Am7 G/B G
Blackbird singing in the dead of night
C C#dim D D/Eb Em Em/Eb
Take these sunken eyes and learn to see
D C#dim C Cm
All your life
G/B A7 D7 G
you were only waiting for this moment to be free

F C/E Dm C Bb C F C/E Dm C Bb A7
Blackbird fly, Blackbird fly`;
}

  ngOnInit() {
  }

}
