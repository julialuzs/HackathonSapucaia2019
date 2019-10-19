package com.reggaeton.hackathon2019.controller;

import com.reggaeton.hackathon2019.model.Instituicao;
import com.reggaeton.hackathon2019.service.BuscarTodasInstituicoesService;
import com.reggaeton.hackathon2019.service.CadastrarInstituicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/instituicao")
public class InstituicaoController {

    @Autowired
    private CadastrarInstituicaoService cadastrarInstituicaoService;

    @Autowired
    private BuscarTodasInstituicoesService buscarTodasInstituicoesService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Instituicao cadastrar(@RequestBody Instituicao instituicao) {
        return cadastrarInstituicaoService.cadastrar(instituicao);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.CREATED)
    public List<Instituicao> cadastrar() {
        return buscarTodasInstituicoesService.buscarTodos();
    }


}

