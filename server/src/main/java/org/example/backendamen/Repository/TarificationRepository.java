package org.example.backendamen.Repository;

import org.example.backendamen.Entities.Tarification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;

public interface TarificationRepository extends JpaRepository<Tarification, Long> {

    @Query("SELECT t FROM Tarification t WHERE "
            + ":date BETWEEN t.date_debut AND t.date_fin")
    Tarification findApplicableTarification(@Param("date") Date date);
}
