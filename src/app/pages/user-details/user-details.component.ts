import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Activity } from '../../models/activity';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Lenguage } from '../../models/lenguage';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit{
  private userForm: FormGroup;
  private user;
  private image;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router
  ){}

  ngOnInit(){
    this.image = 'http://localhost:8080/user/'+sessionStorage.getItem("clickedUser")+'/image'
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

  activityLenguages(lenguages:Lenguage[]){
    let ans="";
      lenguages.forEach(element => {
        ans+=element.lenguage+", ";
      });
      return ans.substr(0,ans.length-2);
  }
}
