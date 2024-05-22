package org.example.backendamen.Repository;

import org.example.backendamen.Entities.Reglement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReglementRepository extends JpaRepository<Reglement, Long> {
}
