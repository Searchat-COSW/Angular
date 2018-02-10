import { User}from '../models/user';
import { Injectable } from '@angular/core';
import { APIService} from '../common/api.service';
import { AppConfiguration} from '../common/config/app-configuration.service';
import { AuthService} from '../common/auth.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService extends APIService {
    private resourceUrl = 'user';

    constructor(
        public config: AppConfiguration,
        public authService: AuthService,
        public http: Http
    ) {
    super(config, authService, http);
    }

    create(username:string, firstname: string,email:string, lastname: string, image: string,password:string) {
        return this.post(this.resourceUrl+"/item", new User(username,firstname,email,lastname,image,password));
    }
}