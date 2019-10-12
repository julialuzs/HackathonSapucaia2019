package com.reggaeton.hackathon2019.service.usuario;

import com.reggaeton.hackathon2019.model.Usuario;
import com.reggaeton.hackathon2019.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuscarUsuarioPorIdService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario buscarPorId(long id) {
        return usuarioRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuario não encontrado"));
    }
}
