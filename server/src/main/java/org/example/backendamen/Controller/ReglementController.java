package org.example.backendamen.Controller;

import org.example.backendamen.Entities.Reglement;
import org.example.backendamen.Service.ReglementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Reglement")
public class ReglementController {
    @Autowired
    private ReglementService reglementService;

    @PostMapping("/create")
    public ResponseEntity<Reglement> createReglement(@RequestBody Reglement reglement) {
        return ResponseEntity.ok(reglementService.createReglement(reglement));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reglement> updateReglement(@PathVariable long id, @RequestBody Reglement reglement) {
        return ResponseEntity.ok(reglementService.updateReglement(id, reglement));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reglement> getReglementById(@PathVariable long id) {
        return ResponseEntity.ok(reglementService.getReglementById(id));
    }

    @GetMapping
    public ResponseEntity<List<Reglement>> getAllReglement() {
        return ResponseEntity.ok(reglementService.getAllReglement());
    }

    @DeleteMapping("/{id}")
    public void deleteReglement(@PathVariable long id) {
        reglementService.deleteReglement(id);
    }
}
