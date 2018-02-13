export class User {
    private firstname: string;
    private lastname: string;
    private email: string;
    private username: string;
    private password: string;
    private nationality: string;
    private languages: string;
    private aboutYou: string;
    private image: string;

    constructor(username:string, firstname: string,email:string, lastname: string, password:string) {
        this.username = username;
        this.firstname = firstname;
        this.email = email;
        this.lastname = lastname;
        this.password = password;
    }

    addInformation(nationality: string, languages: string, aboutYou:string,image:string){
        this.nationality = nationality;
        this.languages = languages;
        this.aboutYou = aboutYou;
        this.image = image;
    }

}