export class User {
    private username: string;
    private email: string;
    private password:string;
    private firstname: string;
    private lastname: string;
    private image: string;

    constructor(username:string,password:string,email:string,firstname: string, lastname: string, image: string) {
        this.username=username;
        this.email=email;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.password=password
    }
}