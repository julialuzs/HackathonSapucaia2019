package com.reggaeton.hackathon2019.service;

import com.reggaeton.hackathon2019.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeletarUsuarioPorIdService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void deletarPorId(long id) {
        usuarioRepository.deleteById(id);
    }
}
