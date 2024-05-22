package org.example.backendamen.Service;

import org.example.backendamen.Entities.Depot;

import java.util.List;

public interface DepotService {
    Depot createDepot(Depot depot);
    Depot updateDepot(long id, Depot depot);
    Depot getDepotById(long id);
    void deleteDepot(long id);
    List<Depot> getAllDepot();
}
