import { User } from './user';

export class Activity {
  private name: string;
  private description: string;
  private administrator: User;
  private languages: string [];
  private location: string;
  private date: string;
  private participants: User[];
  private price: string;

constructor(name:string, description: string,administrator: User, languages:string [], location: string, date:string, participants: User[], price:string) {
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
