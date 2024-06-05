package org.example.backendamen.Service;

import org.example.backendamen.Entities.Colis;
import org.example.backendamen.Entities.Response.UserRequest;
import org.example.backendamen.Entities.Response.UserResponse;
import org.example.backendamen.Entities.User;

import java.util.List;

public interface UserService {
        List<UserResponse> getUser();

        UserResponse updateUser(long id, User user);

        UserResponse createUser(UserRequest userRequest);

        User getUserById(long userId);

        void deleteUser(Long id);

        List<Colis> findColisByUser(Long id);

}
