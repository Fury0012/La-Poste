package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Facture;
import org.example.backendamen.Repository.FactureRepository;
import org.example.backendamen.Service.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FactureServiceImpl implements FactureService {
    @Autowired
    private FactureRepository factureRepository;

    @Override
    public Facture createFacture(Facture facture) {
        return factureRepository.save(facture);
    }

    @Override
    public Facture updateFacture(long id, Facture facture) {
        Facture existingFacture = factureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Facture not found"));
        existingFacture.setMontant(facture.getMontant());
        existingFacture.setDateFacturation(facture.getDateFacturation());
        return factureRepository.save(existingFacture);
    }

    @Override
    public void calculFacture(long id) {
        Facture existingFacture = factureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Facture not found"));
        existingFacture.setMontant(1000);
        factureRepository.save(existingFacture);
    }

    @Override
    public Facture getFactureById(long id) {
        return factureRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Facture not found"));
    }

    @Override
    public List<Facture> getAllFacture() {
        return factureRepository.findAll();
    }

    @Override
    public void deleteFacture(long id) {
        factureRepository.deleteById(id);
    }

}
