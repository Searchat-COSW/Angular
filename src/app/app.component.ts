import { Component } from '@angular/core';
import { AuthService } from './common/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private authService: AuthService, private router: Router){

  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  signOut() {
    this.authService.signOut();
  }

  isInHome(){
    var currentRoute = this.router.url
    var currentRouteBool= currentRoute === "/" || (currentRoute[0]==="/" && currentRoute[1]==="#");
    
    return !this.isLoggedIn() && currentRouteBool;
  }
}
