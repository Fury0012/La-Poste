package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Reglement;
import org.example.backendamen.Repository.ReglementRepository;
import org.example.backendamen.Service.ReglementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReglementServiceImpl implements ReglementService {
    @Autowired
    private ReglementRepository reglementRepository;

    @Override
    public Reglement createReglement(Reglement reglement) {
        return reglementRepository.save(reglement);
    }

    @Override
    public Reglement updateReglement(long id, Reglement reglement) {
        Reglement existingReglement = reglementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reglement not found"));
        existingReglement.setMontant(reglement.getMontant());
        existingReglement.setMode_reglement(reglement.getMode_reglement());
        existingReglement.setDate_paiement(reglement.getDate_paiement());
        return reglementRepository.save(existingReglement);
    }

    @Override
    public Reglement getReglementById(long id) {
        return reglementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reglement not found"));
    }

    @Override
    public void deleteReglement(long id) {
        reglementRepository.deleteById(id);
    }

    @Override
    public List<Reglement> getAllReglement() {
        return reglementRepository.findAll();
    }
}
