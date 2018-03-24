import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {AppComponent} from '../../app.component'

@Component({
    selector: 'profile-configuration',
    templateUrl: './profile-configuration.component.html',
    styleUrls: ['./profile-configuration.component.css']
})
export class ProfileConfigurationComponent implements OnInit {
    private lenguages;
    private selectedLenguages : string[];
    private userForm: FormGroup;
    private userError:string = '';
    private myFile;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

    ngOnInit(): void {
        this.selectedLenguages = []
        this.lenguages =["Español","Ingles","Mandarin","Portugues","Ruso","Japones","Italiano","Aleman","Frances"]
        this.userForm = this.formBuilder.group({
            nationality: '',
            languages:'',
            aboutYou:'',
            image: '',
            selectedLenguage: ''
        });
    }

    onSubmit() {

        this.userService.information(
          this.userForm.get('nationality').value,
          this.selectedLenguages,
          this.userForm.get('aboutYou').value
        ).subscribe(serverResponse => {
            //this.router.navigate(['/listActivities']);
            this.postImage();
        }, error => {
          this.userError = 'Error modificando datos usuario ' + (error && error.message ? error.message : '');
        }) 
      }
    

    setImage(event){
        this.myFile = event.target.files[0]; 
        
    }

    postImage(){
        var fd = new FormData();
        fd.append('file', this.myFile);
        this.userService.informationImage(fd).subscribe(
            serverResponse => {
                this.router.navigate(['/listActivities']);
            },error => {
                this.userError = 'Error agregando la imagen ';
            }
        )
    }

    add(){
        if (this.userForm.get('selectedLenguage').value!="" && !this.selectedLenguages.includes(this.userForm.get('selectedLenguage').value)){
            this.selectedLenguages.push(this.userForm.get('selectedLenguage').value)
        }
    }
}