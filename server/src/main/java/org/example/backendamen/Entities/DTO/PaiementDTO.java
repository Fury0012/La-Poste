package org.example.backendamen.Entities.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PaiementDTO {

    private Long colisId;
    private String numCarte;
    private String modeReglement;
    private Date datePaiement;
    private float montant;

    //ATHEYA PAIEMENT DTO, BECH TNAJEM TAADI BIH IL PAIEMENT HOWA ILLI FIH IL MONTANT WEL NUM CARTE

    //PUISQUE MA AANDEKCH API MEL BANQUE AAMALT JUSTE CONTRAINTE TETFA9ED KEN NUM CARTE COMPOSEE
    //DE 16 CHIFFRES
    public boolean isValidNumCarte() {
        return numCarte != null && numCarte.matches("\\d{16}");
    }
}

