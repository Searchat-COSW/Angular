import { Lenguage } from "./lenguage";


export class ProfileInformation{

    private nationality: string;
    
    private languages: Lenguage [];

    private aboutYou: string;

    private image: File;

    private username:string

    constructor(username:string, nationality: string, aboutYou: string){
        this.nationality = nationality;
        this.aboutYou = aboutYou;
        this.username = username;
        
    }
    

    setLenguagues(ll:Lenguage[]){
        this.languages = ll;
    }

}