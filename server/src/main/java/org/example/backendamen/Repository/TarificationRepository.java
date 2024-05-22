package org.example.backendamen.Repository;

import org.example.backendamen.Entities.Tarification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarificationRepository extends JpaRepository<Tarification, Long> {
}
