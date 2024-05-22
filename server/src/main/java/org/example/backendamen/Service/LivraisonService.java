package org.example.backendamen.Service;

import org.example.backendamen.Entities.Livraison;

import java.util.List;

public interface LivraisonService {
    Livraison createLivraison(Livraison livraison);
    Livraison updateLivraison(long id, Livraison livraison);
    Livraison getLivraisonById(long id);
    List<Livraison> getAllLivraison();
    void deleteLivraison(long id);
}
