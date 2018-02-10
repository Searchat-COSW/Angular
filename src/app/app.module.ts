import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { FormGroup, FormBuilder, FormControl,ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { AppConfiguration } from './common/config/app-configuration.service';
import { AuthService } from './common/auth.service';
import { AppDataService } from './common/app-data.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

const ROUTES = [
  { path: 'signin', component: SignInPageComponent },
  
    
  ]


@NgModule({
  declarations: [
    SignInPageComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot(),
    FormsModule,
    HttpModule
    
  ],
  providers: [
    {provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
     },
     UserService,AppConfiguration,AuthService,AppDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
