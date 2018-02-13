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

    private userForm: FormGroup;
    private userError:string = '';

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
  ) {

  }

    ngOnInit(): void {
        this.userForm = this.formBuilder.group({
            nationality: '',
            languages:'',
            aboutYou:'',
            image: ''
        });
    }

    onSubmit() {
        this.userService.information(
          this.userForm.get('nationality').value,
          this.userForm.get('languages').value,
          this.userForm.get('aboutYou').value,
          this.userForm.get('image').value
        ).subscribe(response => {
            this.router.navigate(['/home']);
        }, error => {
          
          
          this.userError = 'Error modificando datos usuario: ' + (error && error.message ? error.message : '');
        });
      }
}