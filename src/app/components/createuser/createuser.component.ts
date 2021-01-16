import { Component, OnInit } from '@angular/core';
import { User } from '../../../../Models/User';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  user: User = {userId: null,firstname: null,lastname:null,username:null, email: null,password:null};
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  
  

  constructor( private router: Router,
               private spotifyService: SpotifyService) { }

  ngOnInit() {
    localStorage.clear();
  }

  createUser() {
    this.user.firstname = this.firstname;
    this.user.lastname = this.lastname;
    this.user.username = this.username;
    this.user.email = this.email;
    this.user.password = this.password;
    
    this.spotifyService.createUser(this.user)
    .subscribe(res => {
      if(res.status===201) {
        this.router.navigate(['/']);
        } else {
          location.reload();
        }
    });


  }
}
