import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';
import { Lenguage } from '../../models/lenguage';
import { forEach } from '@angular/router/src/utils/collection';



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
  private lenguages;
  private selectedLenguages : string[];

  constructor(public formBuilder: FormBuilder, public modalService: NgbModal, public activityService: ActivityService, public router: Router, public http: Http, public userService: UserService) {


  }

  ngOnInit() {
    this.selectedLenguages = []
    this.lenguages =["Español","Ingles","Mandarin","Portugues","Ruso","Japones","Italiano","Aleman","Frances"] //tambien está en profile-configurarion.component, toca corregir
    
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
      selectedLenguage: '',
      location:'',
      date: '',
      price: ''
    });
  }
  detailFunc(id) {
    sessionStorage.setItem("clickedActivity", id);
    this.router.navigate(['/activityDetails']);
  }

  getCityData(data) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + data.coords.latitude + ',' + data.coords.longitude + '&key=AIzaSyAc6BK3_7_LVQH4aShXtAHdJCvrF8Er-IQ')
  }

  getCity(data) {
    return new Promise((resolve, reject) => {
      resolve(
        this.city = this.activityService.getCleanedString(data.json().results[0].formatted_address.split(", ")[1])
      );
    });
  }

  add(act) {
    this.modalreference = this.modalService.open(act);
    this.activityForm = this.formBuilder.group({
      name: '',
      description: '',
      languages: '',
      selectedLenguage: '',
      location:this.city,
      date: '',
      price: ''
    });
  }

  onSubmit() {

    this.userService.currentUser().subscribe(
      admin => {        
        this.activityService.create(
          this.activityForm.get('name').value,
          this.activityForm.get('description').value,
          admin,
          this.selectedLenguages,
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

  addLenguage(){
    if (this.activityForm.get('selectedLenguage').value!="" && !this.selectedLenguages.includes(this.activityForm.get('selectedLenguage').value)){
        this.selectedLenguages.push(this.activityForm.get('selectedLenguage').value)
    }
  
}
  activityLenguages(lenguages:Lenguage[]){
    let ans="";
      lenguages.forEach(element => {
        ans+=element.lenguage+", ";
      });
      return ans.substr(0,ans.length-2);
  }

  
}