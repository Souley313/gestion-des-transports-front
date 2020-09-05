export class ChauffeurDto {

    constructor(
      public id: number = 0,
      public matricule: string = '',
      public nom: string = '',
      public prenom: string = '',
      public telephone?: string,
      public email?: string,
      public categoriePermis?: string ,
      public photoUrl?: string,

    ) {}

  }
