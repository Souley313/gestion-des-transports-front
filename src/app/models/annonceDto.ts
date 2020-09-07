export class AnnonceDto {

    constructor(
      public dateDepart: Date ,
      public infosDepart: string ,
      public infosDestination: string,
      public nbPlacesDisponibles: string 
    ) {}

  }