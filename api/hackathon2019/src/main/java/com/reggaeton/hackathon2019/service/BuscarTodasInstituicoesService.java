package com.reggaeton.hackathon2019.service;

import com.reggaeton.hackathon2019.model.Instituicao;
import com.reggaeton.hackathon2019.repository.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuscarTodasInstituicoesService {

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    public List<Instituicao> buscarTodos() {
        return instituicaoRepository.findAll();
    }
}
