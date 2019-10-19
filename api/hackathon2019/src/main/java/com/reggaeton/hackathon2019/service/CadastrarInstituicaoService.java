package com.reggaeton.hackathon2019.service;

import com.reggaeton.hackathon2019.model.Instituicao;
import com.reggaeton.hackathon2019.repository.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastrarInstituicaoService {

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    public Instituicao cadastrar(Instituicao instituicao) {
        return instituicaoRepository.save(instituicao);
    }
}
