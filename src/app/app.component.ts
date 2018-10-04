import { Component, ViewChild, Directive } from '@angular/core';
import {SongEditorComponent} from './song-editor/song-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  chossenSong = null;

  songsChoosed(event) {
    this.child.songIsChoosed(event);
  }

  @ViewChild('child')
  private child: SongEditorComponent;
}
