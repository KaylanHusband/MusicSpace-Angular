import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';
import { UserPlaylist } from 'Models/UserPlaylist';
import { Playlist } from 'Models/Playlist';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  userPlaylist:any;
  userId: string = localStorage.getItem('token');
  id: number = parseInt(this.userId,10);
  userPlaylist2:any;
  playlistId: any;
  

  constructor(private route: ActivatedRoute,private spotifyService: SpotifyService) { }

  ngOnInit() {
    
    this.route.params.pipe(map(params=>params['id']))
    .subscribe((id)=> {
      this.spotifyService.getPlaylist(id)
      .subscribe(res=> {
      this.userPlaylist = res;       
      });
      });
      this.spotifyService.getPlaylist(this.id)
      .subscribe(res=> {
      this.userPlaylist2 = res;
      });
  }

  addSong(songName: string,artistName: string,spotifySongId: string) {
    this.spotifyService.addToPlaylist(this.playlistId,songName,artistName,spotifySongId)
    .subscribe(res=> {
    });
    location.reload();
  }
}
