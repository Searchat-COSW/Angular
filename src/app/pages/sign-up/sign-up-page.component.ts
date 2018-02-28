import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../common/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})

export class SignUpPageComponent implements OnInit {
  private userForm: FormGroup;
  private addError: string;
  constructor(
    public usersService: UserService,
    public formBuilder: FormBuilder,
    public router:Router,
    public authService:AuthService
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: '',
      firstname: '',
      email: '',
      lastname: '',
      password: ''
    });
  }

onSubmit() {
    this.usersService.create(
      this.userForm.get('username').value,
      this.userForm.get('firstname').value,
      this.userForm.get('email').value,
      this.userForm.get('lastname').value,
      this.userForm.get('password').value
    ).subscribe(serverResponse=>{
      sessionStorage.setItem("username",this.userForm.get('username').value);
      this.usersService.login(this.userForm.get('username').value,this.userForm.get('password').value).subscribe(
        response => {this.router.navigate(['/listActivities']);}
      )
    }, error=>{
      this.addError = 'Error adding user: ' + error;
    });
  }

}
