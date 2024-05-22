package org.example.backendamen.Controller;

import lombok.RequiredArgsConstructor;
import org.example.backendamen.Entities.Response.UserRequest;
import org.example.backendamen.Entities.Response.UserResponse;
import org.example.backendamen.Entities.User;
import org.example.backendamen.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userClientService;

    @GetMapping
    public ResponseEntity<List<UserResponse>> getUser() {
        return new ResponseEntity<List<UserResponse>>(userClientService.getUser(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<UserResponse> createUser(@RequestBody UserRequest userRequest) {
        UserResponse userResponse = userClientService.createUser(userRequest);
        return ResponseEntity.ok(userResponse);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable long id) {
        User user = userClientService.getUserById(id);
        UserResponse us =UserResponse.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .telephone(user.getTelephone())

                .build();
        return new ResponseEntity<UserResponse>(us, HttpStatus.OK);
    }
    @PutMapping(path = "/{id}")
    public ResponseEntity<UserResponse> updateUser(@PathVariable long id, @RequestBody UserRequest user) {
        User u = new User();
        u.setFirstName(user.getFirstName());
        u.setLastName(user.getLastName());
        u.setEmail(user.getEmail());    
        u.setTelephone(user.getTelephone());
        return new ResponseEntity<UserResponse>(userClientService.updateUser(id, u), HttpStatus.ACCEPTED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userClientService.deleteUser(id);
        return ResponseEntity.ok().build(); // Returns an HTTP 200 OK with no body.
    }
}
