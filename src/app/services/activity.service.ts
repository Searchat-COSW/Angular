import{Injectable}from'@angular/core';
import { Activity } from '../models/activity';
import { User } from '../models/user';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../common/api.service';
import { AppConfiguration } from '../common/config/app-configuration.service';
import { Http } from '@angular/http';

@Injectable()
export class ActivityService{
  private activities: Activity[] = [
new Activity("Climbing Monserrate", "In this activity we'll be going all the way up to Monserrate by foot",
   new User("juanc","Juan","juan.herrera@prueba.com","Herrera","password"),
   ["Spanish","English"], "Monserrate", "20/02/2018", [new User("Carlos","Carlos","carlos@prueba.com","Sanchez","password"),
   new User("jhordy","Jhordy","jhordy@prueba.com","Salinas","password")],"40000")];

  constructor(){}

  create(name:string, description: string,administrator: User, languages:string[], location: string, date:string, participants: User[],price:string) {
    this.activities.push(new Activity(name, description, administrator,languages,location,date,participants,price));
}
  edit(){}

  list(){}
}
