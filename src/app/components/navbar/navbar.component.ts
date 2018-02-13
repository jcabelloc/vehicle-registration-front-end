import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;
  userToken: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessagesService.show('You are logged out', {
      cssClass:'alert-success', timeout: 2500
    });
    this.router.navigate(['/login']);
  }
  getToken(){
    this.authService.getToken()
    .then((res) => {
      this.flashMessagesService.show('Your token is: ' + res, {
        cssClass:'alert-success', timeout: 6000
      });
    })
    .catch((err) => {
      this.flashMessagesService.show(err.message, {
        cssClass:'alert-danger', timeout: 6000
      });

    });
  }

}
