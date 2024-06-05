package org.example.backendamen.Controller;

import org.example.backendamen.Entities.Colis;
import org.example.backendamen.Service.ColisService;
import org.example.backendamen.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.example.backendamen.Entities.User;

import java.util.List;

@RestController
@RequestMapping("/Colis")
public class ColisController {

    @Autowired
    private ColisService colisService;

    @Autowired
    private UserService userService;

    private void sanitizeColisUser(Colis colis) {
        if (colis != null && colis.getUser() != null) {
            colis.getUser().setColis(null);
            // Set any other fields you want to exclude to null
        }
    }

    private void sanitizeColisUserList(List<Colis> colisList) {
        if (colisList != null) {
            colisList.forEach(this::sanitizeColisUser);
        }
    }

    @PostMapping("/create")
    public ResponseEntity<Colis> createColisForUser(@RequestBody Colis colis, @RequestParam("userId") long userId) {
        // Retrieve the user from the database based on the userId
        User user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        // Set the user for the colis
        colis.setUser(user);

        // Save the colis
        Colis createdColis = colisService.createColis(colis);

        // Remove user before returning response
        sanitizeColisUser(createdColis);
        
        return ResponseEntity.ok(createdColis);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Colis>> getAllColisForUser(@PathVariable long userId) {
        List<Colis> colisList = colisService.getAllColisForUser(userId);
        // Removing nested user objects from each colis
        sanitizeColisUserList(colisList);
        return ResponseEntity.ok(colisList);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Colis> updateColis(@PathVariable long id, @RequestBody Colis colis) {
        Colis updatedColis = colisService.updateColis(id, colis);
        sanitizeColisUser(updatedColis);
        return ResponseEntity.ok(updatedColis);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Colis> getColisById(@PathVariable long id) {
        Colis colis = colisService.getColisById(id);
        // Remove user before returning response
        sanitizeColisUser(colis);
        return ResponseEntity.ok(colis);
    }

    @GetMapping
    public ResponseEntity<List<Colis>> getAllColis() {
        List<Colis> colisList = colisService.getAllColis();
        // Removing nested user objects from each colis
        sanitizeColisUserList(colisList);
        return ResponseEntity.ok(colisList);
    }

    @DeleteMapping("/{id}")
    public void deleteColis(@PathVariable long id) {
        colisService.deleteColis(id);
    }
}
