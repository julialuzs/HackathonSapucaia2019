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

    @GetMapping("/login")
    @ResponseStatus(HttpStatus.OK)
    public Usuario login(@RequestParam("email") String email, @RequestParam("senha") String senha) {

        return autenticarUsuarioService.buscarUsuarioPorEmailESenha(email, senha);
    }

}
