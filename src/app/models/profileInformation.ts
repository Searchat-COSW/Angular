export class ProfileInformation{

    private nationality: string;
    
    private languages: string [];

    private aboutYou: string;

    private image: File;

    constructor(nationality: string, languages: string[], aboutYou: string, image: File){
        this.nationality = nationality;
        this.languages = languages;
        this.aboutYou = aboutYou;
        this.image = image;
    }

}