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
   
    private resourceUrl: string = 'user/items';
    private users: User[] = [
    new User("","","","Michael","Jackson","https://www.thefamouspeople.com/profiles/images/michael-jackson-3.jpg"),
    new User("","","",'Scarlett',"Johansson", "http://www.myfilmviews.com/wp-content/uploads/2012/12/scarlett_johansson.jpg"),
    new User("","","",'Brad',"Pitt","http://cdn.glamour.es/uploads/images/thumbs/201238/las_50_caras_de_brad_848381170_667x1000.jpg")
  ];

  constructor(public config:AppConfiguration,public http:Http,public authService: AuthService ) {
    super(config,http);
  }

  list(): Observable<User[]> { //Observable<User[]>{
    return this.get(this.resourceUrl);
    // Mock
    //return Observable.of(this.users);
  }

  create(username:string,password:string,email:string,name: string, lastName: string, image: string) {
    //this.users.push(new User(name, lastName, image));
    return this.post(this.resourceUrl,new User(username,password,email,name, lastName, image)); 
  }


  login(username: string, password: string) {
    return this.post('user/login', { username, password }, { credentials: false }).map(loginResponse => {
      if (loginResponse) {
        this.authService.accessToken = loginResponse.accessToken;
      }
    });
  }

  userByEmail(url:string){
    return this.get(url);
  }

}