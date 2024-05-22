package org.example.backendamen.Service;

import org.example.backendamen.Entities.Tarification;

import java.util.List;

public interface TarificationService {
    Tarification createTarification(Tarification tarification);
    Tarification updateTarification(long id, Tarification tarification);
    Tarification getTarificationById(long id);
    void deleteTarification(long id);
    List<Tarification> getAllTarification();

}
