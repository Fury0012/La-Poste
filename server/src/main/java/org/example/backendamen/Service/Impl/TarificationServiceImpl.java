package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Tarification;
import org.example.backendamen.Repository.TarificationRepository;
import org.example.backendamen.Service.TarificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarificationServiceImpl implements TarificationService {
    @Autowired
    private TarificationRepository tarificationRepository;

    @Override
    public Tarification createTarification(Tarification tarification) {
        return tarificationRepository.save(tarification);
    }

    @Override
    public Tarification updateTarification(long id, Tarification tarification) {
        Tarification existingTarification = tarificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarification not found"));
        existingTarification.setTarif_kg(tarification.getTarif_kg());
        existingTarification.setTarif_base(tarification.getTarif_base());
        existingTarification.setPoids_max(tarification.getPoids_max());
        existingTarification.setDate_debut(tarification.getDate_debut());
        existingTarification.setDate_fin(tarification.getDate_fin());
        existingTarification.setDestination(tarification.getDestination());

        return tarificationRepository.save(existingTarification);
    }

    @Override
    public Tarification getTarificationById(long id) {
        return tarificationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tarification not found"));
    }

    @Override
    public List<Tarification> getAllTarification() {
        return tarificationRepository.findAll();
    }

    @Override
    public void deleteTarification(long id) {
        tarificationRepository.deleteById(id);
    }
}
