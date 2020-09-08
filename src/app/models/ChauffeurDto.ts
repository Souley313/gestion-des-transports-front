export class ChauffeurDto {

    constructor(
      public matricule: string ,
      public nom: string,
      public prenom: string,
      public telephone: string,
      public email: string,
      public categoriePermis: string ,
      public photoUrl: string,

    ) {}

  }
