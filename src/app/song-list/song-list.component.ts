import { Component, OnInit, Input } from '@angular/core';
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
   @Input() title: string;
   userid: number = 1;
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

   getSongList(listName)
   {
     var listToReturn = [];

     var x = this.http.get("http://localhost:63162/user/getmysongs/" + this.userid).subscribe((data)=>{ console.log("test")} );

     switch(listName)
     {
       case "My Songs":
         listToReturn = 
         [
           {name: "song 1", id: "song1", description: "description of song 1"},
           {name: "song 2", id: "song2", description: "description of song 2"},
           {name: "song 3", id: "song3", description: "description of song 3"},
           {name: "song 4", id: "song4", description: "description of song 4"},
           {name: "song 5", id: "song5", description: "description of song 5"},
           {name: "song 1", id: "song1", description: "description of song 1"},
           {name: "song 2", id: "song2", description: "description of song 2"},
           {name: "song 3", id: "song3", description: "description of song 3"},
           {name: "song 4", id: "song4", description: "description of song 4"},
           {name: "song 5", id: "song5", description: "description of song 5"},
           {name: "song 1", id: "song1", description: "description of song 1"},
           {name: "song 2", id: "song2", description: "description of song 2"},
           {name: "song 3", id: "song3", description: "description of song 3"},
           {name: "song 4", id: "song4", description: "description of song 4"},
           {name: "song 5", id: "song5", description: "description of song 5"}
         ];
         break;
        case "Shared Songs":
         listToReturn = 
         [
          {name: "song 1", id: "song1", description: "description of song 1"},
          {name: "song 2", id: "song2", description: "description of song 2"},
          {name: "song 3", id: "song3", description: "description of song 3"},
          {name: "song 4", id: "song4", description: "description of song 4"},
          {name: "song 5", id: "song5", description: "description of song 5"},
          {name: "song 1", id: "song1", description: "description of song 1"},
          {name: "song 2", id: "song2", description: "description of song 2"},
          {name: "song 3", id: "song3", description: "description of song 3"},
          {name: "song 4", id: "song4", description: "description of song 4"},
          {name: "song 5", id: "song5", description: "description of song 5"},
          {name: "song 1", id: "song1", description: "description of song 1"},
          {name: "song 2", id: "song2", description: "description of song 2"},
          {name: "song 3", id: "song3", description: "description of song 3"},
          {name: "song 4", id: "song4", description: "description of song 4"},
          {name: "song 5", id: "song5", description: "description of song 5"}
        ];
         break;
     }
 
     return listToReturn;
   }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

}
