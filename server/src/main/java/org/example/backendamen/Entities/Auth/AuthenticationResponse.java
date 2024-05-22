package org.example.backendamen.Entities.Auth;
import org.example.backendamen.Entities.User;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    @JsonProperty("token")
    private String token;

    @JsonProperty("user")
    private User user;

}