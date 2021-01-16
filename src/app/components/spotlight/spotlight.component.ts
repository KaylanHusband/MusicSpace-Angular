import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Album } from 'Models/Album';

@Component({
  selector: 'app-spotlight',
  templateUrl: './spotlight.component.html',
  styleUrls: ['./spotlight.component.css']
})
export class SpotlightComponent implements OnInit {
  topTracks: Album[] = [];
  tokenResponse: any = { access_token: null };
  

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
   
    let token = sessionStorage.getItem('oauthToken');
    console.log(`Token in spotlight is ${token}`);
    this.spotifyService.browseTopTracks(token).subscribe(res => {
        this.topTracks = res;
      });

  }
}
