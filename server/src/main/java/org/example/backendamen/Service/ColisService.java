package org.example.backendamen.Service;

import org.example.backendamen.Entities.Colis;

import java.util.List;

public interface ColisService {
    Colis createColis(Colis colis);
    Colis updateColis(long id, Colis colis);
    Colis getColisById(long id);
    List<Colis> getAllColis();
    void deleteColis(long id);
}
