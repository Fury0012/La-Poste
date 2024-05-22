package org.example.backendamen.Controller;

import org.example.backendamen.Entities.Depot;
import org.example.backendamen.Service.DepotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Depot")
public class DepotController {
    @Autowired
    private DepotService depotService;

    @PostMapping("/create")
    public ResponseEntity<Depot> createDepot(@RequestBody Depot depot) {
        return ResponseEntity.ok(depotService.createDepot(depot));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Depot> updateDepot(@PathVariable long id, @RequestBody Depot depot) {
        return ResponseEntity.ok(depotService.updateDepot(id, depot));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Depot> getDepotById(@PathVariable long id) {
        return ResponseEntity.ok(depotService.getDepotById(id));
    }

    @GetMapping
    public ResponseEntity<List<Depot>> getAllDepot() {
        return ResponseEntity.ok(depotService.getAllDepot());
    }

    @DeleteMapping("/{id}")
    public void deleteDepot(@PathVariable long id) {
        depotService.deleteDepot(id);
    }

}
