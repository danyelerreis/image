package io.spring.image.demo.domain.service;

import io.spring.image.demo.domain.AcessToken;
import io.spring.image.demo.domain.entity.User;

public interface UserService {
    User getByEmail(String email);
    User save(User user);
    AcessToken autenticate(String email, String password);
}
