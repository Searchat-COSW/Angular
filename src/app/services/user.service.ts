import{Injectable}from'@angular/core';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';
import { AuthService } from '../common/auth.service';


@Injectable()
export class UserService  extends APIService{
  private resourceUrl: string = 'user';

  constructor(public config:AppConfiguration,public http:Http,public authService: AuthService ) {
    super(config, authService, http);
  }

  create(username:string, firstname: string,email:string, lastname: string, password:string, image:string) {
        return this.post(this.resourceUrl+"/item", new User(username,firstname,email,lastname,password,image));
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
