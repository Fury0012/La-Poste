package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Colis;
import org.example.backendamen.Entities.Tarification;
import org.example.backendamen.Repository.ColisRepository;
import org.example.backendamen.Service.ColisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ColisServiceImpl implements ColisService {
    @Autowired
    private ColisRepository colisRepository;
    @Autowired
    private TarificationServiceImpl tarificationService;

    private void sanitizeColisUser(Colis colis) {
        if (colis != null && colis.getUser() != null) {
            colis.getUser().setColis(null);
            // Set any other fields you want to exclude to null
        }
    }

    private void sanitizeColisUserList(List<Colis> colisList) {
        if (colisList != null) {
            colisList.forEach(this::sanitizeColisUser);
        }
    }

    @Override
    public Colis createColis(Colis colis) {
        Colis savedColis = colisRepository.save(colis);
        sanitizeColisUser(savedColis);
        return savedColis;
    }

    public float calculateMontant(Colis colis) {
        if (colis.getTarification() == null) {
            Date todaysDate = new Date();
            Tarification applicableTarification = tarificationService.findApplicableTarification(todaysDate);
            colis.setTarification(applicableTarification);
        }

        Tarification tarification = colis.getTarification();
        if (colis.getPoids() <= tarification.getPoids_max()) {
            return tarification.getTarif_base();
        } else {
            return tarification.getTarif_base() + (colis.getPoids() - tarification.getPoids_max()) * tarification.getTarif_kg();
        }
    }

    @Override
    public Colis updateColis(long id, Colis colis) {
        Colis existingColis = colisRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Colis not found"));
        existingColis.setPoids(colis.getPoids());
        existingColis.setContenu(colis.getContenu());
        existingColis.setAdresseDestination(colis.getAdresseDestination());
        existingColis.setTaille(colis.getTaille());
        existingColis.setStatus(colis.getStatus());
        Colis updatedColis = colisRepository.save(existingColis);
        sanitizeColisUser(updatedColis);
        return updatedColis;
    }

    @Override
    public Colis getColisById(long id) {
        Colis colis = colisRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Colis not found"));
        sanitizeColisUser(colis);
        return colis;
    }

    @Override
    public List<Colis> getAllColis() {
        List<Colis> colisList = colisRepository.findAll();
        sanitizeColisUserList(colisList);
        return colisList;
    }

    @Override
    public List<Colis> getAllColisForUser(long userId) {
        List<Colis> colisList = colisRepository.findAllByUserId(userId);
        sanitizeColisUserList(colisList);
        return colisList;
    }

    @Override
    public void deleteColis(long id) {
        colisRepository.deleteById(id);
    }
}
