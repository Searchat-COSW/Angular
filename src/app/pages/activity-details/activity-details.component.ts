import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})

export class ActivityDetailsComponent implements OnInit{
  private activityForm: FormGroup;
  constructor(){}

  ngOnInit(){}
}
