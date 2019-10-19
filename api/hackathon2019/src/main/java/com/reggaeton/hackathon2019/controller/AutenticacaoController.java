package com.reggaeton.hackathon2019.controller;

import com.reggaeton.hackathon2019.controller.request.LoginRequest;
import com.reggaeton.hackathon2019.model.Usuario;
import com.reggaeton.hackathon2019.service.AutenticarUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/autenticacao")
public class AutenticacaoController {

    @Autowired
    private AutenticarUsuarioService autenticarUsuarioService;

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public Usuario login(@RequestBody LoginRequest request) {

        String email = request.getEmail();
        String senha = request.getSenha();

        return autenticarUsuarioService.buscarUsuarioPorEmailESenha(email, senha);
    }

}
