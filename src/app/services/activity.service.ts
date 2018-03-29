import{Injectable}from'@angular/core';
import { Activity } from '../models/activity';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';
import { AuthService } from '../common/auth.service';
import { Lenguage } from '../models/lenguage';


@Injectable()
export class ActivityService extends APIService{
  private resourceUrl: string = 'activity';
  private activity: Activity;

  constructor(
    public config: AppConfiguration,
    public authService: AuthService,
    public http: Http
  ) {
    super(config, authService, http);
  }

  create(name:string, description: string,administrator: User, languages:string[], location: string, date:Date, participants: User[],price:string) {
    let lenguaguesList = []
    languages.forEach(element => {
      lenguaguesList.push(new Lenguage(element));
    });
    let a = new Activity(name, description, administrator,lenguaguesList,location,date,participants,price)
    return this.post(this.resourceUrl+'/create',a);
  }
  
  edit(){}

  list(city): Observable<Activity[]> {
    return this.get(this.resourceUrl+"/location/"+city);
  }

  getActivity(name: string): Observable<Activity>{
    return this.get(this.resourceUrl+'/'+name);
  }

  getCleanedString(cadena){
    var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,.";
    for (var i = 0; i < specialChars.length; i++) {
        cadena= cadena.replace(new RegExp("\\" + specialChars[i], 'gi'), '');
    }   
    cadena = cadena.toLowerCase();
 
    // Quitamos espacios y los sustituimos por _ porque nos gusta mas asi
    cadena = cadena.replace(/ /g,"_");
 
    // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
    cadena = cadena.replace(/á/gi,"a");
    cadena = cadena.replace(/é/gi,"e");
    cadena = cadena.replace(/í/gi,"i");
    cadena = cadena.replace(/ó/gi,"o");
    cadena = cadena.replace(/ú/gi,"u");
    cadena = cadena.replace(/ñ/gi,"n");
    return cadena;
 }


 joinActivity(activityName:string,username:string){
    return this.post(this.resourceUrl+'/join/'+activityName,username);
 }
}
