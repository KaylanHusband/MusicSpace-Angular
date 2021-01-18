import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  

  constructor(private spotifyService: SpotifyService,
              private router: Router, private toastr: ToastrService) {

               }

  ngOnInit() {
    localStorage.clear();
    
  }

  loginUser() {
      
        this.spotifyService.loginUser(this.email,this.password)  
        .subscribe(res => {
            if(res!=null) {  
              sessionStorage.setItem('token', JSON.stringify(res.userId));
              this.spotifyService.setOauthToken();
              this.login();
            } else {
              this.toastr.error("Please enter a valid username and password","Error");
            }
        });   
  }
  login() {

        this.router.navigate(['/spotlight']);  
  }
  
}
