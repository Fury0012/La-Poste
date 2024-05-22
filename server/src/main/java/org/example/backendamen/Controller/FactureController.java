package org.example.backendamen.Controller;

import org.example.backendamen.Entities.Facture;
import org.example.backendamen.Service.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Facture")
public class FactureController {
    @Autowired
    private FactureService factureService;

    @PostMapping("/create")
    public ResponseEntity<Facture> createFacture(@RequestBody Facture facture) {
        return ResponseEntity.ok(factureService.createFacture(facture));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Facture> updateFacture(@PathVariable long id, @RequestBody Facture facture) {
        return ResponseEntity.ok(factureService.updateFacture(id, facture));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Facture> getFactureById(@PathVariable long id) {
        return ResponseEntity.ok(factureService.getFactureById(id));
    }

    @GetMapping
    public ResponseEntity<List<Facture>> getAllFacture() {
        return ResponseEntity.ok(factureService.getAllFacture());
    }

    @DeleteMapping("/{id}")
    public void deleteFacture(@PathVariable long id) {
        factureService.deleteFacture(id);
    }

    @GetMapping("/calcul/{id}")
    public void calculFacture(@PathVariable long id) {
        factureService.calculFacture(id);
    }
}
