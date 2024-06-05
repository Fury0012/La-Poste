package org.example.backendamen.Repository;


import org.example.backendamen.Entities.Colis;
import org.example.backendamen.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
    @Query("SELECT c FROM Colis c WHERE "
            + "c.user.id = :id")
    List<Colis> findColisByUser(Long id);
}
