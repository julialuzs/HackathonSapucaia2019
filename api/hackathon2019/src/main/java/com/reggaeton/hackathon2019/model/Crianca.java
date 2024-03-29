package com.reggaeton.hackathon2019.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Crianca {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id_crianca")
    private Long id;

    @Column(name = "senha_crianca")
    private String senha;

    private String matricula;

    @ManyToOne
    @JoinColumn(name = "id_instituicao")
    private Instituicao instituicao;
}
