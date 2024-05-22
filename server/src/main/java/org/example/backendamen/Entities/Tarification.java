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
public class Tarification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    float poids_max;
    float tarif_base;
    float tarif_kg;
    String destination;
    Date date_debut;
    Date date_fin;


    @OneToMany
    private List<Colis> colis;

}
