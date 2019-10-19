package com.reggaeton.hackathon2019.controller;

import com.reggaeton.hackathon2019.model.Curso;
import com.reggaeton.hackathon2019.service.BuscarTodosCursosService;
import com.reggaeton.hackathon2019.service.CadastrarCursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/curso")
public class CursoController {

    @Autowired
    private CadastrarCursoService cadastrarCursoService;

    @Autowired
    private BuscarTodosCursosService buscarTodosCursosService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Curso cadastrar(@RequestBody Curso curso) {
        return cadastrarCursoService.cadastrar(curso);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Curso> buscarTodos() {
        return buscarTodosCursosService.buscarTodos();
    }
}
