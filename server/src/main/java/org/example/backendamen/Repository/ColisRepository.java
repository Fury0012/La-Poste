package org.example.backendamen.Repository;

import org.example.backendamen.Entities.Colis;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ColisRepository extends JpaRepository<Colis, Long> {
    List<Colis> findAllByUserId(long userId);
}