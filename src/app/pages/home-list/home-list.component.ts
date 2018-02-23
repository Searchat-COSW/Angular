import {Component, OnInit}from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  private activities: Activity[] = [];
  private city;
  constructor(public activityService: ActivityService, public router: Router, public http:Http) { }

  ngOnInit() {

    navigator.geolocation.getCurrentPosition(data => this.getCityData(data).subscribe(country => this.getCity(country).then(
      cityData => {
        this.activityService.list(cityData).subscribe(list =>{
          this.activities=list
        })
      }
    )));

  }
  detailFunc(name){
    sessionStorage.setItem("clickedActivity",name);
    this.router.navigate(['/activityDetails']);
  }

  getCityData(data){
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+data.coords.latitude+','+data.coords.longitude+'&key=AIzaSyAc6BK3_7_LVQH4aShXtAHdJCvrF8Er-IQ')
  }

  getCity(data){
    return new Promise((resolve,reject)=>{
      resolve(this.city=data.json().results[0].formatted_address.split(", ")[1]);
    });
  }


  
}