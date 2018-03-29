import { User } from './user';
import { Lenguage } from './lenguage';

export class Activity {
  private name: string;
  private description: string;
  private administrator: User;
  private languages: Lenguage [];
  private location: string;
  private date: Date;
  private participants: User[];
  private price: string;

constructor(name:string, description: string,administrator: User, languages:Lenguage [], location: string, date:Date, participants: User[], price:string) {
        this.name = name;
        this.description = description;
        this.administrator = administrator;
        this.languages = languages;
        this.location = location;
        this.date = date;
        this.participants = participants;
        this.price = price;
    }
}
