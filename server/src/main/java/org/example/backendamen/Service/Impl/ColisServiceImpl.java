package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Colis;
import org.example.backendamen.Repository.ColisRepository;
import org.example.backendamen.Service.ColisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ColisServiceImpl implements ColisService {
    @Autowired
    private ColisRepository colisRepository;

    @Override
    public Colis createColis(Colis colis) {
        return colisRepository.save(colis);
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
        return colisRepository.save(existingColis);
    }

    @Override
    public Colis getColisById(long id) {
        return colisRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Colis not found"));
    }

    @Override
    public List<Colis> getAllColis() {
        return colisRepository.findAll();
    }

    @Override
    public void deleteColis(long id) {
        colisRepository.deleteById(id);
    }
}
