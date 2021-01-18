import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { SearchUser } from '../../../../Models/SearchUser';
import { Playlist } from '../../../../Models/Playlist';
import {Song} from '../../../../Models/Song';
import { User } from 'Models/User';


@Component({
  selector: 'app-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.css']
})
export class SharingComponent implements OnInit {
  searchUsr: string;
  user:any;
  playlists: Playlist[] = [];
  songs: Song[] = [];
  

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    
  }

  searchUsers() {
    this.spotifyService.getUsers(this.searchUsr)
    .subscribe(res=> {  
      console.log(`User is ${res}`); 
      this.user = res;
    });

}

}
