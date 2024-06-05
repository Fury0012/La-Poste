package org.example.backendamen.Service.Impl;

import org.example.backendamen.Entities.Colis;
import org.example.backendamen.Entities.DTO.PaiementDTO;
import org.example.backendamen.Entities.Facture;
import org.example.backendamen.Entities.Reglement;
import org.example.backendamen.Entities.User;
import org.example.backendamen.Repository.ColisRepository;
import org.example.backendamen.Repository.FactureRepository;
import org.example.backendamen.Repository.ReglementRepository;
import org.example.backendamen.Repository.TarificationRepository;
import org.example.backendamen.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PaiementService {

    @Autowired
    private ColisRepository colisRepository;

    @Autowired
    private TarificationRepository tarificationRepository;

    @Autowired
    private ReglementRepository reglementRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FactureRepository factureRepository;

    @Autowired
    ColisServiceImpl colisService;


    public PaiementDTO calculateMontant(PaiementDTO paiementDTO) {

        Colis colis = colisRepository.findById(paiementDTO.getColisId())
                .orElseThrow(() -> new RuntimeException("Colis not found"));

        float montant = colisService.calculateMontant(colis);
        colisRepository.save(colis);
        paiementDTO.setMontant(montant);
        return paiementDTO;
    }


    // BAED MA TRAJAALOU IL paiementDTO Object FIH KEN IL MONTANT IL USER Y3ABI NUM CARTE
    // MBA3ED IL BE9I AUTOMATIQUE
    public String processPayment(PaiementDTO paiementDTO) {
        if(paiementDTO.isValidNumCarte()) {
            Colis colis = colisRepository.findById(paiementDTO.getColisId())
                    .orElseThrow(() -> new RuntimeException("Colis not found"));

            float montant = paiementDTO.getMontant();

            //HOUNI YAAMEL OBJECT FACTURE W YSAJLOU HASB IL FACTURE
            Facture newFacture = new Facture();
            newFacture.setMontant(montant);
            newFacture.setDateFacturation(new Date());
            factureRepository.save(newFacture);

            // HOUNI KIF KIF LIL REGLEMENT W YSAJEL IL FACTURE FEL REGLEMENT
            Reglement reglement = new Reglement();
            reglement.setMontant(montant);
            reglement.setMode_reglement(paiementDTO.getModeReglement());
            reglement.setDate_paiement(new Date());
            reglement.setFacture(newFacture);
            reglementRepository.save(reglement);

            // MBA3ED Y3AWED YSAJEL IL REGLEMENT LEL COLIS
            colis.setReglement(reglement);
            colisRepository.save(colis);

            User user = colis.getUser();
            if (user != null) {
                userRepository.save(user);
            }

            return "Transaction Validée";

        }
        else {
            //W YRAJA3 STRING MTAA SUCCESS
            return "Numero Care Invalide";
        }
    }
}


