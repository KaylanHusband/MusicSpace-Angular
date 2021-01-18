import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { LoginComponent } from './components/login/login.component';
import { CreateuserComponent } from './components/createuser/createuser.component';
import { SharingComponent } from './components/sharing/sharing.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpotlightComponent } from './components/spotlight/spotlight.component';






@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    UserhomeComponent,
    LoginComponent,
    CreateuserComponent,
    SharingComponent,
    SearchUserComponent,
    NavbarComponent,
    SpotlightComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
