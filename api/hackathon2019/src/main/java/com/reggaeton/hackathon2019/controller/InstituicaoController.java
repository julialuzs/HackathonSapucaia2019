package com.reggaeton.hackathon2019.controller;

import com.reggaeton.hackathon2019.model.Instituicao;
import com.reggaeton.hackathon2019.service.CadastrarInstituicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/instituicao")
public class InstituicaoController {

    @Autowired
    private CadastrarInstituicaoService cadastrarInstituicaoService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Instituicao cadastrar(@RequestBody Instituicao instituicao) {
        return cadastrarInstituicaoService.cadastrar(instituicao);
    }




}

