package org.example.backendamen.Service;

import org.example.backendamen.Entities.Facture;

import java.util.List;

public interface FactureService {
    Facture createFacture(Facture facture);
    Facture updateFacture(long id, Facture facture);
    Facture getFactureById(long id);
    List<Facture> getAllFacture();
    void deleteFacture(long id);
    void calculFacture(long id);
}
