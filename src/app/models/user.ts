export class User {
    private firstname: string;
    private lastname: string;
    private email: string;
    private username: string;
    private password: string;
    private image: string;
    
    constructor(username:string, firstname: string,email:string, lastname: string, image: string,password:string) {
        this.username = username;
        this.firstname = firstname;
        this.email = email;
        this.lastname = lastname;
        this.image = image;
        this.password = password;
    }
}