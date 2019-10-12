package com.reggaeton.hackathon2019.service.usuario;

import com.reggaeton.hackathon2019.model.Usuario;
import com.reggaeton.hackathon2019.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuscarTodosUsuariosService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> buscarTodos() {
        return usuarioRepository.findAll();
    }
}
