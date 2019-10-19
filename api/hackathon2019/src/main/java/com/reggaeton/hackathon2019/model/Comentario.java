package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Comentario {

    @Id
    @Column(name = "id_comentario")
    private long id;

    @Column(name = "conteudo_comentario")
    private String conteudo;

    @ManyToOne
    @JoinColumn(name = "id_usuario")
    private Usuario autor;

    @ManyToOne
    @JoinColumn(name = "id_aula")
    private Aula aula;

    //uma aula possui N comentarios. um comentario pertence a uma aula
    //um comentario eh feito por um usuario, um usuario faz n comentarios

}
