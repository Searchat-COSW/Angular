import{Injectable}from'@angular/core';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { ProfileConfigurationComponent } from '../pages/profile-configuration/profile-configuration.component';
import { ProfileInformation } from '../models/profileInformation';


@Injectable()
export class UserService  extends APIService{
  private resourceUrl: string = 'user';

  constructor(public config:AppConfiguration,public http:Http,public authService: AuthService ) {
    super(config, authService, http);
  }

  create(username:string, firstname: string,email:string, lastname: string, password:string) {
        return this.post(this.resourceUrl+"/item", new User(username,firstname,email,lastname,password));
  }

  information(nationality:string, languages:string,aboutYou:string,image:string){
      return this.post(this.resourceUrl+"/"+sessionStorage.getItem("username"),new ProfileInformation(nationality,languages,aboutYou,image));
  }


  login(username: string, password: string) {
    return this.post(this.resourceUrl+'/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }

    });
  }

  userByEmail(url:string){
    return this.get(url);
  }

}
