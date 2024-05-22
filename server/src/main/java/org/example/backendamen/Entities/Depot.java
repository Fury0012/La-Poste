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
public class Depot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String adresse;
    String statut;
    Date dateDepot;

    @OneToMany
    private List<Colis> colis;
}
