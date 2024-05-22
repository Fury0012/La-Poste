package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Depot;
import org.example.backendamen.Repository.DepotRepository;
import org.example.backendamen.Service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepotServiceImpl implements DepotService {
    @Autowired
    private DepotRepository depotRepository;

    @Override
    public Depot createDepot(Depot depot) {
        return depotRepository.save(depot);
    }

    @Override
    public Depot updateDepot(long id, Depot depot) {
        Depot existingDepot = depotRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Depot not found"));
        existingDepot.setStatut(depot.getStatut());
        existingDepot.setAdresse(depot.getAdresse());
        existingDepot.setDateDepot(depot.getDateDepot());
        return depotRepository.save(existingDepot);
    }

    @Override
    public Depot getDepotById(long id) {
        return depotRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Depot not found"));
    }

    @Override
    public List<Depot> getAllDepot() {
        return depotRepository.findAll();
    }

    @Override
    public void deleteDepot(long id) {
        depotRepository.deleteById(id);
    }
}
