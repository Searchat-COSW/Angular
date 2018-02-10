import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router, CanActivate, RouterModule } from '@angular/router';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { AppDataService } from './app-data.service';


@Injectable()
export class AuthService implements CanActivate {
constructor(public appData: AppDataService, public router:Router) {
  
  
}

  public get accessToken(): string {
    return this.appData.accessToken;
  }

  public set accessToken(accessToken: string) {
    this.appData.accessToken = accessToken;
  }

  public isLoggedIn(): boolean {
    return this.appData.accessToken != null && this.appData.accessToken !== undefined;
  }

  public signOut() {
    this.appData.removeAccessToken();
    this.router.navigate([''])
  }

  canActivate() {
    if (!this.isLoggedIn()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}