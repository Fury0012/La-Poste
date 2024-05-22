package org.example.backendamen.Controller;

import org.example.backendamen.Entities.Livraison;
import org.example.backendamen.Service.LivraisonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Livraison")
public class LivraisonController {
    @Autowired
    private LivraisonService livraisonService;

    @PostMapping("/create")
    public ResponseEntity<Livraison> createLivraison(@RequestBody Livraison livraison) {
        return ResponseEntity.ok(livraisonService.createLivraison(livraison));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livraison> updateLivraison(@PathVariable long id, @RequestBody Livraison livraison) {
        return ResponseEntity.ok(livraisonService.updateLivraison(id, livraison));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livraison> getLivraisonById(@PathVariable long id) {
        return ResponseEntity.ok(livraisonService.getLivraisonById(id));
    }

    @GetMapping
    public ResponseEntity<List<Livraison>> getAllLivraison() {
        return ResponseEntity.ok(livraisonService.getAllLivraison());
    }

    @DeleteMapping("/{id}")
    public void deleteLivraison(@PathVariable long id) {
        livraisonService.deleteLivraison(id);
    }
}
