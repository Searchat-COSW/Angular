import{Injectable}from'@angular/core';
import { Activity } from '../models/activity';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';
import { AuthService } from '../common/auth.service';

@Injectable()
export class ActivityService extends APIService{
  private resourceUrl: string = 'activity';
  private activity: Activity;
  private activities: Activity[];

  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  create(name:string, description: string,administrator: User, languages:string[], location: string, date:string, participants: User[],price:string) {
    this.activities.push(new Activity(name, description, administrator,languages,location,date,participants,price));
}
  edit(){}

  list(){}

  getActivity(name: string){
    console.log(this.get(this.resourceUrl+'/'+name));
    return this.get(this.resourceUrl+'/'+name);
  }
}
