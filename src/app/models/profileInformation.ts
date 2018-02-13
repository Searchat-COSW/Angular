export class ProfileInformation{

    private nationality: string;
    
    private languages: string;

    private aboutYou: string;

    private image: string;

    constructor(nationality: string, languages: string, aboutYou: string, image: string){
        this.nationality = nationality;
        this.languages = languages;
        this.aboutYou = aboutYou;
        this.image = image;
    }

}