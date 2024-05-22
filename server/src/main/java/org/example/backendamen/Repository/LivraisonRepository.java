package org.example.backendamen.Repository;

import org.example.backendamen.Entities.Livraison;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivraisonRepository extends JpaRepository<Livraison, Long> {
}
