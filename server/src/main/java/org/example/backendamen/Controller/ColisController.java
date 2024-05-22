package org.example.backendamen.Controller;

import org.example.backendamen.Entities.Colis;
import org.example.backendamen.Service.ColisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Colis")
public class ColisController {

    @Autowired
    private ColisService colisService;

    @PostMapping("/create")
    public ResponseEntity<Colis> createColis(@RequestBody Colis colis) {
        return ResponseEntity.ok(colisService.createColis(colis));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Colis> updateColis(@PathVariable long id, @RequestBody Colis colis) {
        return ResponseEntity.ok(colisService.updateColis(id, colis));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Colis> getColisById(@PathVariable long id) {
        return ResponseEntity.ok(colisService.getColisById(id));
    }

    @GetMapping
    public ResponseEntity<List<Colis>> getAllColis() {
        return ResponseEntity.ok(colisService.getAllColis());
    }

    @DeleteMapping("/{id}")
    public void deleteColis(@PathVariable long id) {
        colisService.deleteColis(id);
    }

}
