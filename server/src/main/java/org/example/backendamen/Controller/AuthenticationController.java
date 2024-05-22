package org.example.backendamen.Controller;


import lombok.RequiredArgsConstructor;
import org.example.backendamen.Entities.Auth.AuthenticationRequest;
import org.example.backendamen.Entities.Auth.AuthenticationResponse;
import org.example.backendamen.Entities.Auth.RegisterRequest;
import org.example.backendamen.Service.Impl.AuthenticationService;
import org.example.backendamen.Service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final UserService userClientService;

    // Singup function
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest registerRequest) {
        return ResponseEntity.ok(authenticationService.register(registerRequest));
    }

    //Login function
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody AuthenticationRequest authenticationRequest) {
        return ResponseEntity.ok(authenticationService.authenticate(authenticationRequest));
    }

}
