package com.reggaeton.hackathon2019.service;

import com.reggaeton.hackathon2019.model.Curso;
import com.reggaeton.hackathon2019.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastrarCursoService {

    @Autowired
    private CursoRepository cursoRepository;

    public Curso cadastrar(Curso curso) {
        return cursoRepository.save(curso);
    }
}
