import { User } from './user';

export class Activity {
  public name: string;
  public description: string;
  public administrator: User;
  public languages: string[];
  public location: string;
  public date: string;
  public participants: User[];
  public price: string;

constructor(name:string, description: string,administrator: User, languages:string[], location: string, date:string, participants: User[], price:string) {
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
