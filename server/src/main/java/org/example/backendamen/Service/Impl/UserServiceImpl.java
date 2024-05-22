package org.example.backendamen.Service.Impl;


import lombok.RequiredArgsConstructor;
import org.example.backendamen.Entities.Response.UserRequest;
import org.example.backendamen.Entities.Response.UserResponse;
import org.example.backendamen.Entities.Role;
import org.example.backendamen.Entities.User;
import org.example.backendamen.Repository.UserRepository;
import org.example.backendamen.Service.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<UserResponse> getUser() {
        return userRepository.findAll().stream()
                .map(this::mapToUserResponse)
                .collect(Collectors.toList());
    }

    @Override
    public UserResponse updateUser(long id, User user) {
        User u = userRepository.findById(id).orElseThrow();
        u.setFirstName(user.getFirstName());
        u.setLastName(user.getLastName());
        u.setEmail(user.getEmail());
        u.setTelephone(user.getTelephone());
        User userRes =  userRepository.save(u);
        return UserResponse.builder()
                .id(userRes.getId())
                .firstName(userRes.getFirstName())
                .lastName(userRes.getLastName())
                .email(userRes.getEmail())
                .telephone(userRes.getTelephone())
                .build();
    }

    @Override
    public UserResponse createUser(UserRequest userRequest) {
        var user = User.builder()
            .email(userRequest.getEmail())
            .firstName(userRequest.getFirstName())
            .lastName(userRequest.getLastName())
                .telephone(userRequest.getTelephone())
            .status(true)
            .password(passwordEncoder.encode(userRequest.getPassword()))
            .role(Role.USER)
            .build();
        User u = userRepository.save(user);
        return UserResponse.builder()
                .id(u.getId())
                .firstName(u.getFirstName())
                .lastName(u.getLastName())
                .email(u.getEmail())
                .telephone(u.getTelephone())
                .build();
    }

    @Override
    public User getUserById(long userId) {
        return userRepository.findById(userId).orElseThrow();
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    private UserResponse mapToUserResponse(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .telephone(user.getTelephone())
                .build();
    }
}
