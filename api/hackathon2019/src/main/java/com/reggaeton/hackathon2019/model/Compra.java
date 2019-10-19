package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Compra {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_compra")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_curso")
    private Curso curso;

    @ManyToOne
    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicaoASerDoada;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario cliente;
}
