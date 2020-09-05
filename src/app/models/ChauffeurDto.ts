export class ChauffeurDto {

    constructor(
      public id: number = 0,
      public matricule: string = '',
      public nom: string = '',
      public prenom: string = '',
      public email: string = ''
    ) {}

  }
