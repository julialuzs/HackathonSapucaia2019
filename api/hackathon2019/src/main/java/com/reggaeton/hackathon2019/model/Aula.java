package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import java.io.File;

@Entity
@Data
public class Aula {

    @Column(name="id_aula")
    private long id;

    @JoinColumn(name="id_curso")
    private Curso curso;

    @Column(name="titulo_aula")
    private String titulo;

    @Column(name="descricao_aula")
    private String descricao;

    private File anexo;
    private String conteudo;

}
