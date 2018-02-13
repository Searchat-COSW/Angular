import {ProfileInformation} from './profileInformation';

export class User {
    private firstname: string;
    private lastname: string;
    private email: string;
    private username: string;
    private password: string;
    private profileInformation: ProfileInformation;

    constructor(username:string, firstname: string,email:string, lastname: string, password:string) {
        this.username = username;
        this.firstname = firstname;
        this.email = email;
        this.lastname = lastname;
        this.password = password;
    }

    setProfileInformation(profileInformation:ProfileInformation){
        this.profileInformation = profileInformation;
    }

}