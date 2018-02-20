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
  private activity = new Activity("Climbing Monserrate", "In this activity we'll be going all the way up to Monserrate by foot",
   new User("juanc","Juan","juan.herrera@prueba.com","Herrera","password"),
   ["Spanish","English"], "Monserrate", "20/02/2018", [new User("Carlos","Carlos","carlos@prueba.com","Sanchez","password"),
   new User("jhordy","Jhordy","jhordy@prueba.com","Salinas","password")],"40000");

  constructor(
    public activityService: ActivityService,
    public formBuilder: FormBuilder,
    public router: Router
  ){}

  ngOnInit(){
    this.activityForm = this.formBuilder.group({
      name:this.activity.name,
      description:this.activity.description,
      administrator: this.activity.administrator,
      languages: this.activity.languages,
      location: this.activity.location,
      date: this.activity.date,
      participants: this.activity.participants,
      price: this.activity.price
  });
  }
}