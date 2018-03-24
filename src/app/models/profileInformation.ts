export class ProfileInformation{

    private nationality: string;
    
    private languages: string [];

    private aboutYou: string;

    private image: File;

    constructor(nationality: string, languages: string[], aboutYou: string){
        this.nationality = nationality;
        this.languages = languages;
        this.aboutYou = aboutYou;
        
    }

}