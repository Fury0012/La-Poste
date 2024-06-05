package org.example.backendamen.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reglement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    float montant;
    String mode_reglement;
    Date date_paiement;



    @ManyToOne
    private Facture facture;

}
