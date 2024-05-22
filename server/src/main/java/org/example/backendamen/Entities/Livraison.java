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
public class Livraison {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String infos;
    Date dateLivraison;

    @OneToMany
    private List<Colis> colis;

    @OneToMany
    private List<Reglement> reglements;
}
