import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { MainButtonComponent } from './main-button/main-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongEditorComponent,
    MainButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
