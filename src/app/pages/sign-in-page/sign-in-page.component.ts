import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component'

import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, FormControl,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})



export class SignInPageComponent implements OnInit {
    public signInForm: FormGroup;
    public loginError: string;


  constructor(public appComponent: AppComponent,public formBuilder:FormBuilder,public usersService: UserService,public router: Router) {
    this.signInForm = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });

  }

  doLogin() {

    this.usersService.login(
      this.signInForm.get('username').value,
      this.signInForm.get('password').value).subscribe(loginResponse => {
        this.router.navigate(['tasks']);
      }, error => {
        this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
      })
  }

  
  isLoggedIn() {
    return this.appComponent.isLoggedIn();
  }

    ngOnInit() {
      
  }
}