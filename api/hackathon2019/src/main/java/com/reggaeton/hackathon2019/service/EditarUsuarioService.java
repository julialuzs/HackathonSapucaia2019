package com.reggaeton.hackathon2019.service;

import com.reggaeton.hackathon2019.model.Usuario;
import com.reggaeton.hackathon2019.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EditarUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario editar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }
}
