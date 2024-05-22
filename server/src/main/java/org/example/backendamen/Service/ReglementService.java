package org.example.backendamen.Service;

import org.example.backendamen.Entities.Reglement;

import java.util.List;

public interface ReglementService {
    Reglement createReglement(Reglement reglement);
    Reglement updateReglement(long id, Reglement reglement);
    Reglement getReglementById(long id);
    void deleteReglement(long id);
    List<Reglement> getAllReglement();
}
