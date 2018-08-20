import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SongListComponent } from './song-list/song-list.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { MainButtonComponent } from './main-button/main-button.component';
import { TransposeComponent } from './transpose/transpose.component';

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    SongEditorComponent,
    MainButtonComponent,
    TransposeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
