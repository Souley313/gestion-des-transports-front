export class CollegueDto {

  constructor(
    public matricule: string = '',
    public nom: string = '',
    public prenom: string = '',
    public email: string = '',
    public roles: string[] = []
  ) {}

}

