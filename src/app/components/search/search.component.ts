import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from 'Models/Artist';
import { Album } from 'Models/Album';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tokenResponse: any = {access_token:null};
  searchStr: string;
  searchRes: Artist[] = [];
  topTracks: Album[] = [];
  token:string;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.token = sessionStorage.getItem('oauthToken');
    this.spotifyService.setOauthToken();
    console.log(`Token in search is ${this.token}`);
  }

  searchMusic() {
    this.spotifyService.searchMusic(this.searchStr,this.token)
    .subscribe(res=> {
      this.searchRes = res;
    });
  }
  clearToken() {
    localStorage.clear();
  }
}
