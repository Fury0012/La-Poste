package org.example.backendamen.Repository;

import org.example.backendamen.Entities.Colis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ColisRepository extends JpaRepository<Colis, Long> {
}
