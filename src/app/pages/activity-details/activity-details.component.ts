import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { Lenguage } from '../../models/lenguage';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})

export class ActivityDetailsComponent implements OnInit{
  private activityForm: FormGroup;
  private activity;

  constructor(
    public activityService: ActivityService,
    public formBuilder: FormBuilder,
    public router: Router
  ){}

  ngOnInit(){
    this.activityService.getActivity(sessionStorage.getItem("clickedActivity")).subscribe(data => {
      this.activity = data;
      }, error => {
        console.log("error");
      });
    this.activityForm = this.formBuilder.group({
        name:'',
        description:'',
        administrator:'',
        languages:'',
        location:'',
        date:'',
        participants:'',
        price:''
        });
  }
  detailFunc(name) {
    sessionStorage.setItem("clickedUser", name);
    this.router.navigate(['/userDetails']);
  }

  joinActivity(){
    this.activityService.joinActivity(sessionStorage.getItem("clickedActivity"),sessionStorage.getItem("username"))
    .subscribe(
      data => {
        this.ngOnInit();
      }
    );
  }

  activityLenguages(lenguages:Lenguage[]){
    let ans="";
      lenguages.forEach(element => {
        ans+=element.lenguage+", ";
      });
      return ans.substr(0,ans.length-2);
  }
  
}
