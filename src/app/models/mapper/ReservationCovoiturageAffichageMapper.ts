import { AnnonceDto } from './../annonceDto';
import { ReservationCovoiturageUpdateStatutReservation } from './../ReservationCovoiturageUpdateStatutReservation';
import { AnnonceCovoiturageUpdateStatutReservation } from './../AnnonceCovoiturageUpdateStatutReservation';
import { ReservationCovoiturageAffichage } from './../ReservationCovoiturageAffichage';

export class ReservationCovoiturageAffichageMapper {
  public static AnnonceDtoToAnnonceUpdate(reservation: AnnonceDto): AnnonceCovoiturageUpdateStatutReservation {
    return new AnnonceCovoiturageUpdateStatutReservation(reservation.id, reservation.statutAnnonceCovoiturage);
  }
  public static ReservationCovoiturageAffichageToReservationUpdate(reservation: ReservationCovoiturageAffichage): ReservationCovoiturageUpdateStatutReservation {
    return new ReservationCovoiturageUpdateStatutReservation(reservation.id, reservation.statutReservationCovoiturage);
  }
}
