import { Component, OnInit } from '@angular/core';
import {Album} from 'Models/Album';
import { SpotifyService } from 'src/app/services/spotify.service';
import {ActivatedRoute} from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  tokenResponse: any = {access_token:null};
  id: string;
  artist: any;
  albums: Album[];
  token:string;


  constructor(private route: ActivatedRoute,
              private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.token = sessionStorage.getItem('oauthToken');
    this.spotifyService.setOauthToken();
    console.log(`Token in search is ${this.token}`);
      this.route.params.pipe(map(params=>params['id']))
      .subscribe((id)=> {
        this.spotifyService.getArtist(id,this.token)
        .subscribe(artist=> {
          this.artist=artist;
        });
        this.spotifyService.getAlbums(id,this.token)
        .subscribe(albums=> {
          this.albums=albums['items'];
        });
      });
  }
  clearToken() {
    localStorage.clear();
  }

}
