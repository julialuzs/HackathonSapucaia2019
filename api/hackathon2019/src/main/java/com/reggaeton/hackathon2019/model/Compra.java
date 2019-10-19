package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

@Entity
@Data
public class Compra {

    @Id
    @Column(name = "id_compra")
    private long id;

    @JoinColumn(name = "id_curso")
    private Curso curso;

    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicaoASerDoada;

    @JoinColumn(name = "id_usuario")
    private Usuario cliente;
}
