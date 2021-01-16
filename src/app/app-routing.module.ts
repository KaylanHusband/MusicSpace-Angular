import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './components/search/search.component';
import {AboutComponent} from './components/about/about.component';
import {ArtistComponent} from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { LoginComponent } from './components/login/login.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { LoginGuard } from './guards/login.guard';
import { SharingComponent } from './components/sharing/sharing.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';

const routes: Routes = [{
  path: 'search',component: SearchComponent
},{
  path: 'about', component: AboutComponent
},{
  path: 'artist/:id', component: ArtistComponent
},{
  path: 'album/:id', component: AlbumComponent
},{
  path: 'profile', component: UserhomeComponent
},{
  path: '', component: LoginComponent
},{
  path: 'create', component: CreateuserComponent
},{
  path: 'share', component: SharingComponent
},{
  path: 'users/:id',component: SearchUserComponent 
},{
  path: 'spotlight',component: SpotlightComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

