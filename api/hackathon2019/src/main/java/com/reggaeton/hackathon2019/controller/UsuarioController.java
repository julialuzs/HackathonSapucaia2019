package com.reggaeton.hackathon2019.controller;

import com.reggaeton.hackathon2019.model.Usuario;
import com.reggaeton.hackathon2019.service.DeletarUsuarioPorIdService;
import com.reggaeton.hackathon2019.service.EditarUsuarioService;
import com.reggaeton.hackathon2019.service.usuario.BuscarTodosUsuariosService;
import com.reggaeton.hackathon2019.service.usuario.BuscarUsuarioPorIdService;
import com.reggaeton.hackathon2019.service.usuario.CadastrarUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private CadastrarUsuarioService cadastrarUsuarioService;

    @Autowired
    private EditarUsuarioService editarUsuarioService;

    @Autowired
    private BuscarUsuarioPorIdService buscarUsuarioPorIdService;

    @Autowired
    private BuscarTodosUsuariosService buscarTodosUsuariosService;

    @Autowired
    private DeletarUsuarioPorIdService deletarUsuarioPorIdService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario cadastrar(@RequestBody Usuario usuario) {
        return cadastrarUsuarioService.cadastrar(usuario);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Usuario buscarPorId(@PathVariable("id") long id) {
        return buscarUsuarioPorIdService.buscarPorId(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Usuario> buscarTodos() {
        return buscarTodosUsuariosService.buscarTodos();
    }

    @PostMapping("/editar")
    @ResponseStatus(HttpStatus.OK)
    public Usuario editar(@RequestBody Usuario usuario) {
        return editarUsuarioService.editar(usuario);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deletarPorId(long id) {
        deletarUsuarioPorIdService.deletarPorId(id);
    }

}
