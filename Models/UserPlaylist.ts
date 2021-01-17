import {Playlist} from './Playlist';

export interface UserPlaylist {
    userId: number;
    playlists: Playlist[];
    firstname: string;
}