import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { concatMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../../../Models/User';
import { flatMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  ngOnInit() {  
  }
  constructor(private http: HttpClient) {

  }
  tokenResponse: any = { access_token: null };

  getSpotifyOauthToken() {
    const url = `https://accounts.spotify.com/api/token`;
    let token = null;
    let headers2 = null;
    const headers = new HttpHeaders({
      'Authorization': 'Basic M2UwYmE0NmViMjI3NGUwNjhlMmNkYTI4MmI2YzlmNDQ6ZjdiNTVmZTJkODllNDhiNGJjNDc3ZWE1YTc3NjlkZDc=',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let body = 'grant_type=client_credentials';
    const options = { headers: headers };
    return this.http.post(url, body, options);
  }
  

  getQuery(query: string,token:string) {
    console.log(`Token in getQuery is ${token}`);
    const url = `https://api.spotify.com/v1/${query}`;
    let headers=null;
    headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(url, { headers:headers });
  }

  setOauthToken(){
    this.getSpotifyOauthToken().subscribe(res=>{
      let tokenResponse = JSON.parse(JSON.stringify(res));
      console.log(`OAuth Token is ${tokenResponse.access_token}`);
      sessionStorage.setItem('oauthToken',tokenResponse.access_token);
    });
  }






  browseTopTracks(token:string) {
    return this.getQuery(`browse/new-releases?country=AD&offset=0&limit=12`,token)
      .pipe(map(res => res['albums'].items));
  }

  searchMusic(str: string,token:string) {
    return this.getQuery(`search?query=${str}&offset=0&limit=20&type=artist&market=US`,token)
      .pipe(map(res => res['artists'].items));
  }

  getArtist(id: string,token:string) {
    return this.getQuery(`artists/${id}`,token)
      .pipe(map(res => res));
  }

  getAlbums(id: string,token:string) {
    return this.getQuery(`artists/${id}/albums?market=AD&limit=10`,token)
      .pipe(map(res => res));
  }

  getAlbum(id: string,token:string) {
    return this.getQuery(`albums/${id}`,token)
      .pipe(map(res => res));
  }

  loginUser(email: string, password: string): Observable<User> {
    const url = `https://musicspacekdb-backend.herokuapp.com/login?email=${email}&password=${password}`;
    return this.http.post<User>(url, User);
  }

  createUser(user: User): Observable<any> {
    const url = 'https://musicspacekdb-backend.herokuapp.com/users';
    return this.http.post(url, user, { observe: 'response' });
  }

  createPlaylist(id: any, name: any): Observable<any> {
    const url = `https://musicspacekdb-backend.herokuapp.com/playlists?playlistName=${name}&userId=${id}`;
    return this.http.post(url, { observe: 'response' });
  }

  getPlaylist(id: number): Observable<any> {
    const url = `https://musicspacekdb-backend.herokuapp.com/users/${id}/playlists`;
    return this.http.get(url,).pipe(map(res => res));
  }
  getSongByPlaylistId(id: any): Observable<any> {
    const url = `https://musicspacekdb-backend.herokuapp.com/songs/playlists/${id}`;
    return this.http.get(url).pipe(map(res => res));
  }
  convertSongId(id: any, token: string) {
    return this.getQuery(`tracks/${id}`,token)
      .pipe(map(res => res));
  }
  addToPlaylist(playlistId: any, songName: string, artistName: string, spotifySongId: any) {
    const url = `https://musicspacekdb-backend.herokuapp.com/songs?playlistId=${playlistId}&songName=${songName}&artistName=${artistName}&spotifySongId=${spotifySongId}`;
    return this.http.post(url, { observe: 'response' });
  }

  getUsers(userName: string) {
    const url = `https://musicspacekdb-backend.herokuapp.com/usernames/${userName}`;
    return this.http.get(url);
  }

  deletePlaylist(playlistId: any, userId: any) {
    const url = `https://musicspacekdb-backend.herokuapp.com/playlists/${playlistId}?userId=${userId}`;
    return this.http.delete(url, { observe: 'response' });
  }

  deleteSong(songId: any, playlistId: any) {
    const url = `https://musicspacekdb-backend.herokuapp.com/playlists/${songId}?playlistId=${playlistId}`;
    return this.http.delete(url, { observe: 'response' });
  }
}
