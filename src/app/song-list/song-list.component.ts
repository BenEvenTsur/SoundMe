import { Component, OnInit, Input ,EventEmitter, Output} from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class ConfigService {
//   constructor(private http: HttpClient) { }
// }

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})

@Injectable()
export class SongListComponent implements OnInit {
  @Output() songsChoosedEvent = new EventEmitter<{name:string, id: number, lyrics: string, comments: string}>();
   @Input() title: string;
   userid: number = 2;
   mysongs: Array<{name:string, id: number, lyrics: string, comments: string}> = new Array();
   sharedsongs: Array<{name:string, id: number, lyrics: string, comments: string}> = new Array();

   changeSongsChoosed(song) {
    this.songsChoosedEvent.emit(song);
  }

  getList(listName) {

    switch(this.title)
    {
      case "My Songs":
        return this.mysongs;
      case "Shared Songs":
        return this.sharedsongs;
    }
  }

   getButtonName()
   {
     var nameToReturn;
     switch(this.title)
    {
      case "My Songs":
        nameToReturn = "New Song";
      break;
      case "Shared Songs":
        nameToReturn = "Add Song";
      break;
    }

    return nameToReturn;
   }

   loadLists()
   {
    this.http.get("http://localhost:63162/user/getmysongs/" + this.userid).subscribe((data: any[])=>{
      for(var i = 0; i < data.length; ++i)
      {

        this.mysongs.push({name: data[i].Name, id: data[i].ID, lyrics: data[i].Lyrics, comments: data[i].Comments});
      }
     } );

     this.http.get("http://localhost:63162/user/getsharedsongs/" + this.userid).subscribe((data: any[])=>{
      for(var i = 0; i < data.length; ++i)
      {
        this.sharedsongs.push({name: data[i].Name, id: data[i].ID, lyrics: data[i].Lyrics, comments: data[i].Comments});
      }
     } );
   }

  constructor(private http: HttpClient) {
    //this.mysong = this.getSongList("My Songs");
    this.loadLists();
  }

  ngOnInit() {
  }

}
