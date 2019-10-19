package com.reggaeton.hackathon2019.service;

import com.reggaeton.hackathon2019.exception.RegistroNaoEncontradoException;
import com.reggaeton.hackathon2019.model.Usuario;
import com.reggaeton.hackathon2019.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AutenticarUsuarioService {

    private UsuarioRepository usuarioRepository;

    public Usuario buscarUsuarioPorEmailESenha(String email, String senha) {

        Optional<Usuario> optional = usuarioRepository.findByEmailAndSenha(email, senha);

        return optional.orElseThrow(() -> new RegistroNaoEncontradoException("Usuario"));
    }
}
