package org.example.backendamen.Service.Impl;

import lombok.RequiredArgsConstructor;
import org.example.backendamen.Entities.Auth.AuthenticationRequest;
import org.example.backendamen.Entities.Auth.AuthenticationResponse;
import org.example.backendamen.Entities.Auth.RegisterRequest;
import org.example.backendamen.Entities.Role;
import org.example.backendamen.Entities.User;
import org.example.backendamen.Repository.UserRepository;
import org.example.backendamen.config.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest registerRequest) {
        User user = User.builder()
                .email(registerRequest.getEmail())
                .firstName(registerRequest.getFirstName())
                .lastName(registerRequest.getLastName())
                .telephone(registerRequest.getTelephone())
                .status(true)
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.USER)
                .build();
        User savedUser = userRepository.save(user);
        String token = jwtService.generateToken(savedUser);
        return AuthenticationResponse.builder()
                .token(token)
                .user(savedUser)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.getEmail(),
                        authenticationRequest.getPassword())
        );
        User user = userRepository.findByEmail(authenticationRequest.getEmail()).orElse(null);
        if (user == null) {
            // Handle case where user is not found
            return null;
        }
        String token = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(token)
                .user(user)
                .build();
    }
}
