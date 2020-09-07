import { ReservationCovoiturageUpdateStatutReservation } from './../ReservationCovoiturageUpdateStatutReservation';
import { AnnonceCovoiturageUpdateStatutReservation } from './../AnnonceCovoiturageUpdateStatutReservation';
import { ReservationCovoiturageAffichage } from './../ReservationCovoiturageAffichage';
export class ReservationCovoiturageAffichageMapper {
  public static ReservationCovoiturageAffichageToAnnonceUpdate(reservation: ReservationCovoiturageAffichage): AnnonceCovoiturageUpdateStatutReservation {
    return new AnnonceCovoiturageUpdateStatutReservation(reservation.id, reservation.statutReservationCovoiturage);
  }
  public static ReservationCovoiturageAffichageToReservationUpdate(reservation: ReservationCovoiturageAffichage): ReservationCovoiturageUpdateStatutReservation {
    return new ReservationCovoiturageUpdateStatutReservation(reservation.id, reservation.statutReservationCovoiturage);
  }
}
