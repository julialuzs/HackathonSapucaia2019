package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Comentario {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_comentario")
    private Long id;

    @Column(name = "conteudo_comentario")
    private String conteudo;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario autor;

    @ManyToOne
    @JoinColumn(name = "id_aula")
    private Aula aula;

}
