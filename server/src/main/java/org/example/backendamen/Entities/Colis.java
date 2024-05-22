package org.example.backendamen.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
}
