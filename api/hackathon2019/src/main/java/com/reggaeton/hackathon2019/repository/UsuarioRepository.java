package com.reggaeton.hackathon2019.repository;


import com.reggaeton.hackathon2019.model.Usuario;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    List<Usuario> findAll();

    Optional<Usuario> findByEmailAndSenha(String email, String senha);
}
