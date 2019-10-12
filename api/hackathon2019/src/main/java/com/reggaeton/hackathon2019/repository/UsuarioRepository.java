package com.reggaeton.hackathon2019.repository;


import com.reggaeton.hackathon2019.model.Usuario;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    List<Usuario> findAll();

}
