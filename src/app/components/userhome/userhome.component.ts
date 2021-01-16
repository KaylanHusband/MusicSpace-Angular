import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import {UserPlaylist} from '../../../../Models/UserPlaylist';
import { Song } from '../../../../Models/Song';
import { Playlist } from '../../../../Models/Playlist';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  userId: string = sessionStorage.getItem('token');
  id: number = parseInt(this.userId,10);
  playlistName: string;
  userPlaylist: UserPlaylist[] = [];
  playlists: Playlist[] = [];
  songs: Song[] = [];

  


  constructor(private spotifyService: SpotifyService) { }

    ngOnInit() {
    this.spotifyService.getPlaylist(this.id)
    .subscribe(res=> {
      if(res!=null){
        this.userPlaylist = res;
      }
    
    });

  }
  clearToken() {
    localStorage.clear();
  }

  createPlaylist() {
    this.spotifyService.createPlaylist(this.id,this.playlistName)
    .subscribe(res=>res);
    location.reload();
  }
  
  deletePlaylist(playlistId: any) {
      this.spotifyService.deletePlaylist(playlistId,this.id)
      .subscribe(res=>res);
      
  }  
  deleteSong(songId: any,playlistId: any) {
    this.spotifyService.deleteSong(songId,playlistId)
    .subscribe(res=>{
      console.log(res);
    });
    location.reload();
  }





}
