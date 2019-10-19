package com.reggaeton.hackathon2019.controller;

import com.reggaeton.hackathon2019.model.Instituicao;
import com.reggaeton.hackathon2019.service.CadastrarInstituicaoService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/instituicao")
public class InstituicaoController {

    private CadastrarInstituicaoService cadastrarInstituicaoService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Instituicao cadastrar(Instituicao instituicao) {
        return cadastrarInstituicaoService.cadastrar(instituicao);
    }
}
