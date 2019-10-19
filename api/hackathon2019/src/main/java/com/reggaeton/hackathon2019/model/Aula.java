package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Aula {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name ="id_aula")
    private Long id;

    @ManyToOne
    @JoinColumn(name ="id_curso")
    private Curso curso;

    @Column(name ="titulo_aula")
    private String titulo;

    @Column(name ="descricao_aula")
    private String descricao;

    private String anexo;
    private String conteudo;

}
