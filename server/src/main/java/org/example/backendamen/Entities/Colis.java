package org.example.backendamen.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Colis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String contenu;
    float poids;
    float taille;
    String adresseDestination;
    String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @ManyToOne
    @JoinColumn(name = "tarification_id")
    Tarification tarification;


    @ManyToOne
    @JoinColumn(name = "reglement_id")
    Reglement reglement;

}
