package org.example.backendamen.Controller;

import org.example.backendamen.Entities.DTO.PaiementDTO;
import org.example.backendamen.Service.Impl.PaiementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/paiement")
public class PaiementController {

    @Autowired
    private PaiementService paiementService;


    @PostMapping("/calculerMontant")
    public PaiementDTO calculateMontant(@RequestBody PaiementDTO paiementDTO) { // id colis
        return paiementService.calculateMontant(paiementDTO);
    }
// pour l'afficahge paiementDTO.montant


    @PostMapping("/process")
    public String processPayment(@RequestBody PaiementDTO paiementDTO) {
        return paiementService.processPayment(paiementDTO);
    }
}


