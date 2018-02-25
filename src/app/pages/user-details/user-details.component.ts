import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Activity } from '../../models/activity';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{
  private userForm: FormGroup;
  private user;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router
  ){}

  ngOnInit(){
    this.userService.getUser(sessionStorage.getItem("clickedUser")).subscribe(data => {
      this.user = data;
      }, error => {
        console.log("error");
      });
    this.userForm = this.formBuilder.group({
        firstname:'',
        lastname:'',
        email:'',
        username:'', 
        nationality:'',
        aboutYou:'',
        datelanguages:'',
        image:''
        });
  }
}
