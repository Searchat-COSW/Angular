import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SignUpPageComponent }from './pages/sign-up/sign-up-page.component';
import { HttpModule } from '@angular/http';
import { APIService} from './common/api.service';
import { UserService} from './services/user.service';
import { ActivityService } from './services/activity.service';
import { AuthService } from './common/auth.service';
import { AppDataService} from './common/app-data.service'
import { AppConfiguration } from './common/config/app-configuration.service';
import { Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule,FormControl } from '@angular/forms';
import { INITIAL_CONFIG } from './common/config/initial-config';
import { HomePageComponent }from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { ActivityDetailsComponent } from './pages/activity-details/activity-details.component';
import { ProfileConfigurationComponent } from './pages/profile-configuration/profile-configuration.component';
import { HomeListComponent }from './pages/home-list/home-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';



const ROUTES = [
  { path: 'signin', component: SignInPageComponent },
  { path: 'signup', component: SignUpPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'activityDetails', component: ActivityDetailsComponent},
  { path: 'userDetails', component: UserDetailsComponent },
  { path: 'profileConfiguration', component: ProfileConfigurationComponent},
  { path: 'listActivities', component: HomeListComponent},
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    SignUpPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ActivityDetailsComponent,
    UserDetailsComponent,
    SignInPageComponent,
    ProfileConfigurationComponent,
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: INITIAL_CONFIG,
      useValue: {
        apiURL: 'http://localhost:8080'
      }
    },
    AppConfiguration,
    APIService,
    UserService,
    AppDataService,
    AuthService,
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
