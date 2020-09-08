import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statut'
})
export class StatutAnnoncePipe implements PipeTransform {

  transform(statut: string): string {
    switch (statut) {
      case 'ANNULEE':
      case 'ANNULEE_PAR_CONDUCTEUR':
        return 'Annulée';
      case 'PUBLIEE':
        return 'Publiée';
      case 'TERMINEE':
        return 'Terminée';
      case 'DEMANDEE':
        return 'Demandée';
    }
  }

}
