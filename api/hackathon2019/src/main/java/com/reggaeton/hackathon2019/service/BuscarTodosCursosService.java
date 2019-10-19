package com.reggaeton.hackathon2019.service;

import com.reggaeton.hackathon2019.model.Curso;
import com.reggaeton.hackathon2019.repository.CursoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuscarTodosCursosService {

    @Autowired
    private CursoRepository cursoRepository;

    public List<Curso> buscarTodos() {
        return cursoRepository.findAll();
    }
}
