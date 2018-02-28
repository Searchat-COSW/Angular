import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  private activities: Activity[] = [];
  private city;
  private activityForm: FormGroup;
  private modalreference;

  constructor(public formBuilder: FormBuilder, public modalService: NgbModal, public activityService: ActivityService, public router: Router, public http: Http, public userService: UserService) {


  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(data => this.getCityData(data).subscribe(country => this.getCity(country).then(
      cityData => {
        this.activityService.list(cityData).subscribe(list => {
          this.activities = list
        })
      }
    )));
    this.activityForm = this.formBuilder.group({
      name: '',
      description: '',
      languages: '',
      location: '',
      date: '',
      price: ''
    });
  }
  detailFunc(name) {
    sessionStorage.setItem("clickedActivity", name);
    this.router.navigate(['/activityDetails']);
  }

  getCityData(data) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + data.coords.latitude + ',' + data.coords.longitude + '&key=AIzaSyAc6BK3_7_LVQH4aShXtAHdJCvrF8Er-IQ')
  }

  getCity(data) {
    return new Promise((resolve, reject) => {
      resolve(this.city = this.activityService.getCleanedString(data.json().results[0].formatted_address.split(", ")[1]));
    });
  }

  add(act) {
    this.modalreference = this.modalService.open(act);
  }

  onSubmit() {

    this.userService.currentUser().subscribe(
      admin => {        
        this.activityService.create(
          this.activityForm.get('name').value,
          this.activityForm.get('description').value,
          admin,
          this.activityForm.get('languages').value,
          this.activityService.getCleanedString(this.activityForm.get('location').value),
          this.activityForm.get('date').value,
          [],
          this.activityForm.get('price').value
        ).subscribe(
          nothing => {
            this.modalreference.close();
            this.ngOnInit()
          }
        );
      }
    )
  }

  
}