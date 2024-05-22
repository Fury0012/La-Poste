package org.example.backendamen.Controller;

import org.example.backendamen.Entities.Tarification;
import org.example.backendamen.Service.TarificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Tarification")
public class TarificationController {
    @Autowired
    private TarificationService tarificationService;

    @PostMapping("/create")
    public ResponseEntity<Tarification> createTarification(@RequestBody Tarification tarification) {
        return ResponseEntity.ok(tarificationService.createTarification(tarification));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tarification> updateTarification(@PathVariable long id, @RequestBody Tarification tarification) {
        return ResponseEntity.ok(tarificationService.updateTarification(id, tarification));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarification> getTarificationById(@PathVariable long id) {
        return ResponseEntity.ok(tarificationService.getTarificationById(id));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Tarification>> getAllTarification() {
        return ResponseEntity.ok(tarificationService.getAllTarification());
    }

    @DeleteMapping("/{id}")
    public void deleteTarification(@PathVariable long id) {
        tarificationService.deleteTarification(id);
    }


}
