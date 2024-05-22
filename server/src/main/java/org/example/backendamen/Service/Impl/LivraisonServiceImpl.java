package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Livraison;
import org.example.backendamen.Repository.LivraisonRepository;
import org.example.backendamen.Service.LivraisonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LivraisonServiceImpl implements LivraisonService {
    @Autowired
    private LivraisonRepository livraisonRepository;

    @Override
    public Livraison createLivraison(Livraison livraison) {
        return livraisonRepository.save(livraison);
    }

    @Override
    public Livraison updateLivraison(long id, Livraison livraison) {
        Livraison existingLivraison = livraisonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livraison not found"));
        existingLivraison.setInfos(livraison.getInfos());
        existingLivraison.setDateLivraison(livraison.getDateLivraison());
        return livraisonRepository.save(existingLivraison);
    }

    @Override
    public Livraison getLivraisonById(long id) {
        return livraisonRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Livraison not found"));
    }

    @Override
    public List<Livraison> getAllLivraison() {
        return livraisonRepository.findAll();
    }

    @Override
    public void deleteLivraison(long id) {
        livraisonRepository.deleteById(id);
    }
}
