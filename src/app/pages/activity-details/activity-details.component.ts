import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity';
import { User } from '../../models/user';
import { Router } from '@angular/router';

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
}
